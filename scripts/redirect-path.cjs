function canonicalRedirectPath(existingPath) {
  return existingPath === '/' ? '/' : existingPath.replace(/\/$/, '');
}

module.exports = { canonicalRedirectPath };
