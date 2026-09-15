export type RelevantCommit = {
  revision: string;
  subject: string;
  timestamp: number;
};

export function readIgnoredRevisions(siteDir: string): Set<string>;

export function getLastRelevantCommit(
  siteDir: string,
  relativePath: string,
  ignoredRevisions: Set<string>,
): RelevantCommit | null;
