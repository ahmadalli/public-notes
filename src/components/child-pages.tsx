import React, { useState, useEffect } from "react";
import {
  useDocsSidebar,
  useActiveDocContext,
  useCurrentSidebarCategory,
} from "@docusaurus/plugin-content-docs/client";
import Link from "@docusaurus/Link";

type TreeItem = {
  title: string;
  href: string;
  items: TreeItem[];
};

type ChildPagesProps = {
  depth?: number;
};

function getTreeItems(
  sidebarItems: any[],
  currentDepth: number,
  maxDepth: number
): TreeItem[] {
  var items: TreeItem[] = [];

  if (currentDepth >= maxDepth) {
    return items;
  }

  for (var i = 0; i < sidebarItems.length; i++) {
    var sidebarItem = sidebarItems[i];
    var title = sidebarItem.label;
    var href = sidebarItem.href;
    var subItems = [];
    if (sidebarItem.type == "category") {
      subItems = getTreeItems(sidebarItem.items, currentDepth + 1, maxDepth);
    }
    items.push({
      title: title,
      href: href,
      items: subItems,
    });
  }
  return items;
}

function renderTreeItems(items: TreeItem[]): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <Link to={item.href}>{item.title}</Link>
          {item.items.length > 0 ? renderTreeItems(item.items) : null}
        </li>
      ))}
    </ul>
  );
}

const ChildPages: React.FC<ChildPagesProps> = ({ depth = 1 }) => {
  const [childPages, setChildPages] = useState<TreeItem[]>([]);

  var docsSidebar = null;
  try {
    docsSidebar = useDocsSidebar();
  } catch (error) {
    console.log("Failed to get docsSidebar:", error);
  }

  var activeDocContext = null;
  try {
    activeDocContext = useActiveDocContext();
  } catch (error) {
    console.log("Failed to get activeDocContext:", error);
  }

  var currentSidebarCategory = null;
  try {
    currentSidebarCategory = useCurrentSidebarCategory();
  } catch (error) {
    console.log("Failed to get currentSidebarCategory:", error);
  }

  useEffect(() => {
    console.log("docsSidebar:", docsSidebar);
    console.log("activeDocContext:", activeDocContext);
    console.log("currentSidebarCategory:", currentSidebarCategory);

    // Extract recent changes from front matter
    const fetchChildPages = () => {
      var sidebarItems = null;

      if (currentSidebarCategory == null) {
        sidebarItems = docsSidebar.items;
      } else {
        sidebarItems = currentSidebarCategory.items;
      }

      const treeItems = getTreeItems(sidebarItems, 0, depth);
      console.log("treeItems:", treeItems);
      setChildPages(treeItems);
    };

    fetchChildPages();
  }, [docsSidebar, currentSidebarCategory, depth]);



  return <div>{renderTreeItems(childPages)}</div>;
};

export default ChildPages;

// Usage in Docusaurus:
// <ChildPages depth={1} />
