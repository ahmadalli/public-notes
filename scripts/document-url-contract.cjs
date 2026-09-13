const fs = require('node:fs');
const path = require('node:path');

const UID_PATTERN = /^[a-hj-km-np-tv-z0-9]{6}$/;
const NUMBER_PREFIX_PATTERN = /^(\d+)\s*[-_.]+\s*([^-_.\s].*)$/;
const IGNORED_NUMBER_PREFIX_PATTERN = /^\d+[-_.]\d+/;

function legacySegment(segment) {
  if (IGNORED_NUMBER_PREFIX_PATTERN.test(segment)) return segment;
  return NUMBER_PREFIX_PATTERN.exec(segment)?.[2] ?? segment;
}

function legacyPathFor(relativePath) {
  const withoutExtension = relativePath.replace(/\.md$/, '');
  const segments = withoutExtension.split('/').map(legacySegment);
  if (segments.at(-1)?.toLowerCase() === 'index') segments.pop();
  return `/${segments.join('/')}`.replace(/\/$/, '') || '/';
}

function canonicalPathFor(uid, isRootIndex) {
  return isRootIndex ? '/' : `/d/${uid}`;
}

function parseDocumentFrontMatter(contents, filePath) {
  const lines = contents.split(/\r?\n/);
  if (lines[0] !== '---') {
    throw new Error(`${filePath}: opening YAML front matter fence is required`);
  }

  const closingFence = lines.indexOf('---', 1);
  if (closingFence === -1) {
    throw new Error(`${filePath}: closing YAML front matter fence is required`);
  }

  const frontMatter = lines.slice(1, closingFence);
  const uid = scalarValueFor(frontMatter, 'uid');
  const slug = scalarValueFor(frontMatter, 'slug');
  const aliases = aliasesFor(frontMatter, filePath);

  if (uid === undefined) throw new Error(`${filePath}: uid is required`);
  if (slug === undefined) throw new Error(`${filePath}: slug is required`);

  return { uid, slug, aliases };
}

function scalarValueFor(lines, key) {
  const matches = lines.filter((line) => line.startsWith(`${key}:`));
  if (matches.length !== 1) return undefined;

  const value = matches[0].slice(key.length + 1).trim();
  if (!value || value === '[]' || value === '|' || value === '>') return undefined;
  return value;
}

function aliasesFor(lines, filePath) {
  const aliasIndex = lines.findIndex((line) => line.startsWith('aliases:'));
  if (aliasIndex === -1) throw new Error(`${filePath}: aliases is required`);

  const value = lines[aliasIndex].slice('aliases:'.length).trim();
  if (value === '[]') return [];
  if (value) throw new Error(`${filePath}: aliases must be a YAML sequence or []`);

  const aliases = [];
  for (let index = aliasIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim() || /^[^\s]/.test(line)) break;
    const match = /^\s+-\s+(.+)$/.exec(line);
    if (!match) throw new Error(`${filePath}: aliases must be a YAML sequence or []`);
    aliases.push(match[1].trim());
  }
  if (aliases.length === 0) {
    throw new Error(`${filePath}: aliases must be a YAML sequence or []`);
  }
  return aliases;
}

function collectDocumentUrlRecords(docsDirectory) {
  return markdownFilesIn(docsDirectory).map((filePath) => {
    const relativePath = path.relative(docsDirectory, filePath).split(path.sep).join('/');
    const { uid, slug, aliases } = parseDocumentFrontMatter(fs.readFileSync(filePath, 'utf8'), filePath);
    return { filePath, relativePath, uid, slug, aliases };
  });
}

function markdownFilesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return markdownFilesIn(entryPath);
      return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
    })
    .sort();
}

function validateDocumentUrlRecords(records) {
  const messages = [];
  const recordsByUid = new Map();
  const recordsByAlias = new Map();
  const canonicalPaths = new Set(records.map((record) => (
    canonicalPathFor(record.uid, record.relativePath === 'index.md')
  )));

  for (const record of records) {
    if (!UID_PATTERN.test(record.uid)) {
      messages.push(`${record.filePath}: uid must be a six-character unambiguous lowercase identifier`);
    }

    const expectedSlug = canonicalPathFor(record.uid, record.relativePath === 'index.md');
    if (record.slug !== expectedSlug) {
      messages.push(`${record.filePath}: slug must be ${expectedSlug}`);
    }

    for (const alias of record.aliases) {
      if (!alias.startsWith('/') || (alias.length > 1 && alias.endsWith('/'))) {
        messages.push(`${record.filePath}: aliases must be absolute paths without trailing slashes`);
        break;
      }
      if (canonicalPaths.has(alias)) {
        messages.push(`${record.filePath}: aliases must be distinct from canonical paths`);
        break;
      }
    }

    const firstRecordForUid = recordsByUid.get(record.uid);
    if (firstRecordForUid) {
      messages.push(`uid ${record.uid} is used by ${firstRecordForUid.filePath} and ${record.filePath}`);
    } else {
      recordsByUid.set(record.uid, record);
    }

    for (const alias of record.aliases) {
      const firstRecordForAlias = recordsByAlias.get(alias);
      if (firstRecordForAlias) {
        messages.push(`alias ${alias} is used by ${firstRecordForAlias.filePath} and ${record.filePath}`);
      } else {
        recordsByAlias.set(alias, record);
      }
    }
  }

  return messages.sort();
}

module.exports = {
  collectDocumentUrlRecords,
  validateDocumentUrlRecords,
  legacyPathFor,
  canonicalPathFor,
};
