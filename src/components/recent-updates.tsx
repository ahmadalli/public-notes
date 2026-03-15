import React from "react";
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import type { LastUpdatedData } from "@site/plugins/last-updated-data-plugin";

type RecentUpdatesProps = {
  maxItems?: number;
  showDate?: boolean;
};

type BreadcrumbPart = {
  label: string;
  permalink: string | null;
};

function stripNumberPrefix(segment: string): string {
  return segment.replace(/^\d+-/, "");
}

function buildBreadcrumbParts(
  sourceDirName: string,
  title: string,
  permalink: string,
  dirInfoMap: Record<string, { title: string; permalink: string }>,
): BreadcrumbPart[] {
  const parts: BreadcrumbPart[] = [];

  if (sourceDirName !== ".") {
    const segments = sourceDirName.split("/");
    for (let i = 0; i < segments.length; i++) {
      const ancestorDir = segments.slice(0, i + 1).join("/");
      const info = dirInfoMap[ancestorDir];
      parts.push({
        label: info?.title ?? stripNumberPrefix(segments[i]).replace(/-/g, " "),
        permalink: info?.permalink ?? null,
      });
    }
  }

  parts.push({ label: title, permalink });
  return parts;
}

const RecentUpdates: React.FC<RecentUpdatesProps> = ({
  maxItems = 10,
  showDate = true,
}) => {
  const data = usePluginData(
    "docusaurus-plugin-last-updated-data",
  ) as LastUpdatedData | undefined;

  if (!data || data.entries.length === 0) {
    return <p>No recent updates found.</p>;
  }

  const entries = data.entries.slice(0, maxItems);
  const { dirInfoMap } = data;

  return (
    <ul>
      {entries.map((entry) => {
        const parts = buildBreadcrumbParts(
          entry.sourceDirName,
          entry.title,
          entry.permalink,
          dirInfoMap,
        );
        return (
          <li key={entry.id}>
            {parts.map((part, i) => (
              <React.Fragment key={i}>
                {i > 0 && " > "}
                {part.permalink ? (
                  <Link to={part.permalink}>{part.label}</Link>
                ) : (
                  part.label
                )}
              </React.Fragment>
            ))}
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
        );
      })}
    </ul>
  );
};

export default RecentUpdates;
