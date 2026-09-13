import { readdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const {
  collectDocumentUrlRecords,
  legacyPathFor,
  validateDocumentUrlRecords,
} = require('./document-url-contract.cjs');
const DOCS_DIRECTORY = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const alphabet = 'abcdefghjkmnpqrstvwxyz0123456789';

function generateUid(used) {
  let uid;
  do {
    uid = [...crypto.getRandomValues(new Uint32Array(6))]
      .map((value) => alphabet[value % alphabet.length]).join('');
  } while (used.has(uid));
  return uid;
}

async function markdownFilesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const filePaths = await Promise.all(entries.map(async (entry) => {
    const entryPath = resolve(directory, entry.name);
    if (entry.isDirectory()) return markdownFilesIn(entryPath);
    return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
  }));
  return filePaths.flat().sort();
}

function openingFrontMatter(contents, filePath) {
  const openingMatch = /^(---)(\r?\n)/.exec(contents);
  if (!openingMatch) return null;

  const openingEnd = openingMatch[0].length;
  const closingMatch = /^(---)(?:\r?\n|$)/m.exec(contents.slice(openingEnd));
  if (!closingMatch) {
    throw new Error(`${filePath}: closing YAML front matter fence is required`);
  }

  const closingStart = openingEnd + closingMatch.index;
  return {
    contents: contents.slice(openingEnd, closingStart),
    end: closingStart,
    lineEnding: openingMatch[2],
    start: openingEnd,
  };
}

function preparedContents(contents, filePath, relativePath, uid, captureAliases) {
  const frontMatter = openingFrontMatter(contents, filePath);
  const metadata = frontMatter?.contents ?? '';
  const metadataLines = metadata.split(/\r?\n/);
  const hasKey = (key) => metadataLines.some((line) => line.startsWith(`${key}:`));

  if (hasKey('uid')) throw new Error(`${filePath}: uid already exists`);
  if (hasKey('slug')) throw new Error(`${filePath}: slug already exists`);

  const aliasesIndex = metadataLines.findIndex((line) => line.startsWith('aliases:'));
  if (aliasesIndex !== -1 && metadataLines[aliasesIndex].slice('aliases:'.length).trim() !== '[]') {
    throw new Error(`${filePath}: aliases must be empty before migration`);
  }
  if (aliasesIndex !== -1) metadataLines.splice(aliasesIndex, 1);

  const isRootIndex = relativePath === 'index.md';
  const aliases = captureAliases && !isRootIndex ? [legacyPathFor(relativePath)] : [];
  const additions = [
    `uid: ${uid}`,
    `slug: ${isRootIndex ? '/' : `/d/${uid}`}`,
    aliases.length === 0 ? 'aliases: []' : `aliases:\n${aliases.map((alias) => `  - ${alias}`).join('\n')}`,
  ];
  const lineEnding = frontMatter?.lineEnding ?? '\n';
  const updatedMetadata = [
    ...metadataLines.filter((line, index) => !(index === metadataLines.length - 1 && line === '')),
    ...additions,
  ].join(lineEnding);

  if (frontMatter) {
    return `${contents.slice(0, frontMatter.start)}${updatedMetadata}${lineEnding}${contents.slice(frontMatter.end)}`;
  }
  return `---${lineEnding}${updatedMetadata}${lineEnding}---${lineEnding}${contents}`;
}

export async function migrateDocuments({
  docsDirectory,
  captureAliases,
  randomUid = (used) => generateUid(used),
}) {
  const files = await markdownFilesIn(docsDirectory);
  const used = new Set();
  const documents = [];

  for (const filePath of files) {
    const relativePath = relative(docsDirectory, filePath).split(sep).join('/');
    const uid = randomUid(used);
    if (used.has(uid)) throw new Error(`${filePath}: generated duplicate uid ${uid}`);
    used.add(uid);
    const contents = await readFile(filePath, 'utf8');
    documents.push({
      contents: preparedContents(contents, filePath, relativePath, uid, captureAliases),
      filePath,
    });
  }

  await Promise.all(documents.map(({ contents, filePath }) => writeFile(filePath, contents)));

  const records = collectDocumentUrlRecords(docsDirectory);
  const errors = validateDocumentUrlRecords(records);
  if (errors.length > 0) throw new Error(errors.join('\n'));
  return records;
}

async function main() {
  const records = await migrateDocuments({
    docsDirectory: DOCS_DIRECTORY,
    captureAliases: process.argv.includes('--capture-aliases'),
    randomUid: (used) => generateUid(used),
  });
  console.log(`Assigned URLs for ${records.length} documents.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
