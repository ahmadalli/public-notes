const assert = require('node:assert/strict');
const test = require('node:test');

const { canonicalRedirectPath } = require('./redirect-path.cjs');

test('removes Docusaurus trailing slashes from non-root canonical routes', () => {
  assert.equal(canonicalRedirectPath('/d/abc123/'), '/d/abc123');
});

test('preserves the root canonical route', () => {
  assert.equal(canonicalRedirectPath('/'), '/');
});
