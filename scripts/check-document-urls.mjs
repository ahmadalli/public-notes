import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const {
  collectDocumentUrlRecords,
  validateDocumentUrlRecords,
} = require('./document-url-contract.cjs');
const DOCS_DIRECTORY = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'docs');

try {
  const records = collectDocumentUrlRecords(DOCS_DIRECTORY);
  const errors = validateDocumentUrlRecords(records);
  if (errors.length > 0) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
