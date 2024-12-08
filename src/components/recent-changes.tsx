import React, { useState, useEffect } from "react";
import {
  useDocsVersion,
  useDocById,
  useAllDocsData,
} from "@docusaurus/plugin-content-docs/client";

type DocData = {
  id: string;
  title: string;
};

type RecentChangesProps = {
  maxChanges?: number;
};

// FIXME: useDocById doesn't return the needed metadata for this to work.
// Here are all available methods:
// - DocProvider
// - DocSidebarItemsExpandedStateProvider
// - DocsPreferredVersionContextProvider
// - DocsSidebarProvider
// - DocsVersionProvider
// - filterDocCardListItems
// - findFirstSidebarItemLink
// - findSidebarCategory
// - getDocsVersionSearchTag
// - isActiveSidebarItem
// - isVisibleSidebarItem
// - useActiveDocContext
// - useActivePlugin
// - useActivePluginAndVersion
// - useActiveVersion
// - useAllDocsData
// - useCurrentSidebarCategory
// - useDoc
// - useDocById
// - useDocRootMetadata
// - useDocSidebarItemsExpandedState
// - useDocVersionSuggestions
// - useDocsContextualSearchTags
// - useDocsData
// - useDocsPreferredVersion
// - useDocsPreferredVersionByPluginId
// - useDocsSidebar
// - useDocsVersion
// - useDocsVersionCandidates
// - useLatestVersion
// - useLayoutDoc
// - useLayoutDocsSidebar
// - useSidebarBreadcrumbs
// - useVersions
// - useVisibleSidebarItems
// None of these methods return the last updated date of a document except for useDoc which only returns the metadata of the current document.


// const docsLastUpdated = Object.values(useDocsVersion().docs).map((doc: DocData) => {
//   if (doc && doc.id){
//     const docMetadata = useDocById(doc.id);
//     return {
//       slug: doc.id,
//       title: doc.title,
//       lastUpdatedAt: docMetadata.metadata.lastUpdated,
//     };
//   }
// });

const RecentChanges: React.FC<RecentChangesProps> = ({ maxChanges = 10 }) => {
  const [recentChanges, setRecentChanges] = useState<
    {
      slug: string;
      title: string;
      date: string;
    }[]
  >([]);

  const docsVersion = useDocsVersion();

  var activeVersion = null;
  try {
    activeVersion = useActiveVersion();
  } catch {}

  var doc = null;
  try {
    doc = useDoc();
  } catch {}

  var docRootMetadata = null;
  try {
    docRootMetadata = useDocRootMetadata("index");
  } catch {}

  var allDocsData = null;
  try {
    allDocsData = useAllDocsData();
  } catch {}

  var docById = null;
  try {
    docById = useDocById("index");
  } catch {}

  useEffect(() => {
    // Debugging: Log the entire allDocsData object to check its structure
    console.log("docsVersion:", docsVersion);
    console.log("activeVersion:", activeVersion);
    console.log("doc:", doc);
    console.log("docRootMetadata:", docRootMetadata);
    console.log("docById:", docById);
    console.log("allDocsData:", allDocsData);

    // Extract recent changes from front matter
    // const fetchRecentChanges = () => {
    //   const changes = Object.values(docsVersion.docs)
    //     .map((doc: DocData) => {
    //       if (doc && doc.id && doc.title && doc.frontMatter?.lastUpdated) {
    //         return {
    //           slug: doc.id,
    //           title: doc.title,
    //           date: doc.frontMatter.lastUpdated,
    //         };
    //       }
    //       return null;
    //     })
    //     .filter((change) => change !== null) // Filter out null values
    //     .sort(
    //       (a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()
    //     ) // Sort by date descending
    //     .slice(0, maxChanges) as {
    //     slug: string;
    //     title: string;
    //     date: string;
    //   }[];

    //   setRecentChanges(changes);
    // };

    // fetchRecentChanges();
  }, [useDocsVersion, maxChanges]);

  return (
    <div>
      {recentChanges.length === 0 ? (
        <p>No recent changes found.</p>
      ) : (
        <ul>
          {recentChanges.map((change) => (
            <li key={change.slug}>
              <strong>{change.title}</strong> - <em>{change.date}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentChanges;

// Usage in Docusaurus:
// <RecentChanges maxChanges={10} />
