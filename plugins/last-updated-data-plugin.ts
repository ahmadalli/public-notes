import type { LoadContext, Plugin } from "@docusaurus/types";
import type { LoadedContent } from "@docusaurus/plugin-content-docs";

type LastUpdatedEntry = {
  id: string;
  title: string;
  permalink: string;
  lastUpdatedAt: number | null;
};

export type LastUpdatedData = LastUpdatedEntry[];

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

      const entries: LastUpdatedData = [];

      for (const version of docsContent.loadedVersions) {
        for (const doc of version.docs) {
          entries.push({
            id: doc.id,
            title: doc.title,
            permalink: doc.permalink,
            lastUpdatedAt: doc.lastUpdatedAt ?? null,
          });
        }
      }

      // Sort by lastUpdatedAt descending (most recent first)
      entries.sort((a, b) => {
        const aTime = a.lastUpdatedAt ?? 0;
        const bTime = b.lastUpdatedAt ?? 0;
        return bTime - aTime;
      });

      setGlobalData(entries);
    },
  };
}
