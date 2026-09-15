const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const { mkdtempSync, mkdirSync, renameSync, writeFileSync } = require("node:fs");
const { tmpdir } = require("node:os");
const path = require("node:path");
const test = require("node:test");

const {
  getLastRelevantCommit,
  readIgnoredRevisions,
} = require("./last-updated-git-history.cjs");

function git(repository, ...args) {
  return execFileSync("git", args, {
    cwd: repository,
    encoding: "utf8",
    env: {
      ...process.env,
      GIT_CONFIG_NOSYSTEM: "1",
      GIT_AUTHOR_NAME: "Test Author",
      GIT_AUTHOR_EMAIL: "test@example.com",
      GIT_COMMITTER_NAME: "Test Author",
      GIT_COMMITTER_EMAIL: "test@example.com",
    },
  }).trim();
}

test("skips ignored commits while following renames", () => {
  const repository = mkdtempSync(path.join(tmpdir(), "recent-updates-"));
  mkdirSync(path.join(repository, "docs", "old"), { recursive: true });
  git(repository, "init", "--quiet");

  writeFileSync(path.join(repository, "docs", "old", "page.md"), "# Page\n");
  git(repository, "add", ".");
  git(repository, "commit", "--quiet", "-m", "docs: substantive update");
  const substantiveRevision = git(repository, "rev-parse", "HEAD");

  mkdirSync(path.join(repository, "docs", "new"), { recursive: true });
  renameSync(
    path.join(repository, "docs", "old", "page.md"),
    path.join(repository, "docs", "new", "page.md"),
  );
  writeFileSync(path.join(repository, "docs", "new", "index.md"), "# New\n");
  git(repository, "add", ".");
  git(repository, "commit", "--quiet", "-m", "docs: structural migration");
  const ignoredRevision = git(repository, "rev-parse", "HEAD");
  writeFileSync(
    path.join(repository, ".recent-updates-ignore-revs"),
    `# Structural commits\n${ignoredRevision}\n`,
  );

  const ignoredRevisions = readIgnoredRevisions(repository);
  assert.deepEqual([...ignoredRevisions], [ignoredRevision]);

  const relevantCommit = getLastRelevantCommit(
    repository,
    "docs/new/page.md",
    ignoredRevisions,
  );
  assert.equal(relevantCommit.revision, substantiveRevision);
  assert.equal(relevantCommit.subject, "docs: substantive update");
  assert.equal(typeof relevantCommit.timestamp, "number");
  assert.equal(
    getLastRelevantCommit(repository, "docs/new/index.md", ignoredRevisions),
    null,
  );
});
