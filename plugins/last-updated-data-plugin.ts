import type { LoadContext, Plugin } from "@docusaurus/types";
import type { LoadedContent } from "@docusaurus/plugin-content-docs";
import {
  getLastRelevantCommit,
  readIgnoredRevisions,
} from "./last-updated-git-history.cjs";

export type LastUpdatedEntry = {
  id: string;
  title: string;
  permalink: string;
  lastUpdatedAt: number | null;
  lastCommitMessage: string | null;
  sourceDirName: string;
};

type DirInfo = {
  title: string;
  permalink: string;
};

export type LastUpdatedData = {
  entries: LastUpdatedEntry[];
  dirInfoMap: Record<string, DirInfo>;
};

export default function lastUpdatedDataPlugin(
  context: LoadContext,
): Plugin {
  return {
    name: "docusaurus-plugin-last-updated-data",

    async allContentLoaded({ allContent, actions }) {
      const { setGlobalData } = actions;

      const docsContent = allContent[
        "docusaurus-plugin-content-docs"
      ]?.["default"] as LoadedContent | undefined;

      if (!docsContent) {
        return;
      }

      const entries: LastUpdatedEntry[] = [];
      const ignoredRevisions = readIgnoredRevisions(context.siteDir);
      // Map from sourceDirName → { title, permalink }, built from index.md docs
      const dirInfoMap: Record<string, DirInfo> = {};

      for (const version of docsContent.loadedVersions) {
        for (const doc of version.docs) {
          // If this doc is an index page of a directory, record its title and permalink
          if (doc.source.endsWith("/index.md")) {
            dirInfoMap[doc.sourceDirName] = { title: doc.title, permalink: doc.permalink };
          }

          const relativePath = doc.source.startsWith("@site/")
            ? doc.source.slice("@site/".length)
            : doc.source;
          const relevantCommit = getLastRelevantCommit(
            context.siteDir,
            relativePath,
            ignoredRevisions,
          );

          if (relevantCommit) {
            entries.push({
              id: doc.id,
              title: doc.title,
              permalink: doc.permalink,
              lastUpdatedAt: relevantCommit.timestamp,
              lastCommitMessage: relevantCommit.subject,
              sourceDirName: doc.sourceDirName,
            });
          }
        }
      }

      // Sort by lastUpdatedAt descending (most recent first)
      entries.sort((a, b) => {
        const aTime = a.lastUpdatedAt ?? 0;
        const bTime = b.lastUpdatedAt ?? 0;
        return bTime - aTime;
      });

      setGlobalData({ entries, dirInfoMap });
    },
  };
}
