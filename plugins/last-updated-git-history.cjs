const { execFileSync } = require("node:child_process");
const { readFileSync } = require("node:fs");
const path = require("node:path");

const IGNORE_REVISIONS_FILE = ".recent-updates-ignore-revs";

function readIgnoredRevisions(siteDir) {
  try {
    return new Set(
      readFileSync(path.join(siteDir, IGNORE_REVISIONS_FILE), "utf8")
        .split(/\r?\n/u)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#")),
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      return new Set();
    }
    throw error;
  }
}

function getLastRelevantCommit(siteDir, relativePath, ignoredRevisions) {
  try {
    const history = execFileSync(
      "git",
      ["log", "--follow", "--format=%H%x00%ct%x00%s", "--", relativePath],
      { cwd: siteDir, encoding: "utf8" },
    ).trim();

    for (const line of history.split(/\r?\n/u)) {
      if (!line) {
        continue;
      }

      const [revision, timestamp, subject] = line.split("\0");
      if (!ignoredRevisions.has(revision)) {
        return {
          revision,
          subject,
          timestamp: Number(timestamp) * 1000,
        };
      }
    }

    return null;
  } catch {
    return null;
  }
}

module.exports = {
  getLastRelevantCommit,
  readIgnoredRevisions,
};
