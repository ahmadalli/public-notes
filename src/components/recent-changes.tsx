import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import type { LastUpdatedData } from "@site/plugins/last-updated-data-plugin";

type RecentChangesProps = {
  maxItems?: number;
  showDate?: boolean;
};

const RecentChanges: React.FC<RecentChangesProps> = ({
  maxItems = 10,
  showDate = true,
}) => {
  const allEntries = usePluginData(
    "docusaurus-plugin-last-updated-data",
  ) as LastUpdatedData | undefined;

  if (!allEntries || allEntries.length === 0) {
    return <p>No recent changes found.</p>;
  }

  const entries = allEntries.slice(0, maxItems);

  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          <Link to={entry.permalink}>{entry.title}</Link>
          {showDate && entry.lastUpdatedAt && (
            <>
              {" — "}
              <small>
                {new Date(entry.lastUpdatedAt).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short", day: "numeric" },
                )}
              </small>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RecentChanges;
