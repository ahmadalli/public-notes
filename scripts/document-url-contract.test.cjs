const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  canonicalPathFor,
  legacyPathFor,
  validateDocumentUrlRecords,
} = require('./document-url-contract.cjs');

test('keeps a numeric prefix whose suffix starts with a digit', () => {
  assert.equal(legacyPathFor('0200-3d-printing.md'), '/0200-3d-printing');
});

test('allows only the root document to use the root slug', () => {
  assert.deepEqual(validateDocumentUrlRecords([
    { filePath: 'docs/index.md', relativePath: 'index.md', uid: 'k7f2q9', slug: '/', aliases: [] },
    { filePath: 'docs/x.md', relativePath: 'x.md', uid: 'p3r4s5', slug: '/', aliases: [] },
  ]), ['docs/x.md: slug must be /d/p3r4s5']);
});

test('rejects ambiguous UID letters, duplicate UIDs, and aliases with a trailing slash', () => {
  assert.equal(canonicalPathFor('k7f2q9', false), '/d/k7f2q9');
  assert.deepEqual(validateDocumentUrlRecords([
    { filePath: 'docs/a.md', relativePath: 'a.md', uid: 'k7f2q9', slug: '/d/k7f2q9', aliases: ['/a/'] },
    { filePath: 'docs/b.md', relativePath: 'b.md', uid: 'k7f2q9', slug: '/d/k7f2q9', aliases: [] },
  ]), [
    'docs/a.md: aliases must be absolute paths without trailing slashes',
    'uid k7f2q9 is used by docs/a.md and docs/b.md',
  ]);
});

test('rejects aliases that collide with another document canonical path', () => {
  assert.deepEqual(validateDocumentUrlRecords([
    { filePath: 'docs/a.md', relativePath: 'a.md', uid: 'k7f2q9', slug: '/d/k7f2q9', aliases: ['/d/p3r4s5'] },
    { filePath: 'docs/b.md', relativePath: 'b.md', uid: 'p3r4s5', slug: '/d/p3r4s5', aliases: [] },
  ]), ['docs/a.md: aliases must be distinct from canonical paths']);
});
