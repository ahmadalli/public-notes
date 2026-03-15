import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

/**
 * Extracts the hostname from a URL string, or null if the URL is not absolute.
 */
function getHostname(href) {
  try {
    const url = new URL(href);
    return url.hostname;
  } catch {
    return null;
  }
}

/**
 * Custom <a> override that prepends a favicon for all external links.
 */
function AutoFaviconLink({ href, children, ...props }) {
  const hostname = href ? getHostname(href) : null;

  if (hostname) {
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
    return (
      <a href={href} {...props}>
        <img
          src={faviconUrl}
          alt=""
          aria-hidden="true"
          width="16"
          height="16"
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: "0.25em",
            marginBottom: "0.1em",
          }}
        />
        {children}
      </a>
    );
  }

  return <a href={href} {...props}>{children}</a>;
}

export default {
  // Re-use the default mapping
  ...MDXComponents,
  a: AutoFaviconLink, // Auto-prepend favicons to all external links.
};
