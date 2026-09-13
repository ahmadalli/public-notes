import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { collectDocumentUrlRecords } = require('./document-url-contract.cjs');
const PROJECT_DIRECTORY = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_DIRECTORY = join(PROJECT_DIRECTORY, 'docs');
const BUILD_DIRECTORY = join(PROJECT_DIRECTORY, 'build');

export function verifyRedirects({ docsDirectory, buildDirectory }) {
  const failures = [];
  for (const record of collectDocumentUrlRecords(docsDirectory)) {
    for (const alias of record.aliases) {
      const artifactPath = join(buildDirectory, ...alias.split('/').filter(Boolean), 'index.html');
      try {
        const html = readFileSync(artifactPath, 'utf8');
        const target = record.slug === '/' ? '/' : `${record.slug}/`;
        if (!html.includes(target)) {
          failures.push(`${alias}: ${artifactPath} does not contain ${target}`);
        }
      } catch (error) {
        if (error.code === 'ENOENT') {
          failures.push(`${alias}: ${artifactPath} does not exist`);
        } else {
          failures.push(`${alias}: could not read ${artifactPath}: ${error.message}`);
        }
      }
    }
  }
  return failures;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const failures = verifyRedirects({
      docsDirectory: DOCS_DIRECTORY,
      buildDirectory: BUILD_DIRECTORY,
    });
    if (failures.length > 0) {
      console.error(failures.join('\n'));
      process.exitCode = 1;
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
