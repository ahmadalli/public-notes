# Upgrading Docusaurus

Run these steps in order when a new Docusaurus version is released.

## Step 1: Scaffold a Fresh Project

```shell
rm -rf /tmp/docusaurus-fresh
npx create-docusaurus@latest /tmp/docusaurus-fresh classic --typescript --skip-install
```

Note the Docusaurus version in the output (e.g., `3.9.2`). This is the **target version**.

## Step 2: Read and Compare Files

Read these files from the fresh scaffold AND from this repo:

- `package.json`
- `docusaurus.config.ts`
- `tsconfig.json`
- `sidebars.ts`

## Step 3: Update package.json

**Docusaurus core packages** — bump to the exact target version (no `^`, match scaffold):
- `dependencies`: `@docusaurus/core`, `@docusaurus/preset-classic`, `@docusaurus/plugin-google-gtag`
- `devDependencies`: `@docusaurus/module-type-aliases`, `@docusaurus/tsconfig`, `@docusaurus/types`

**Non-Docusaurus scaffold packages** — sync versions to match scaffold (keep `^` if scaffold uses it):
- `@mdx-js/react`, `clsx`, `prism-react-renderer`, `react`, `react-dom`, `typescript`

**Repo-only packages — DO NOT CHANGE:**
- `@fortawesome/*`, `docusaurus-lunr-search`

**browserslist** — replace only the `development` array. Do not touch `production`.

**scripts** — if scaffold adds new entries, add them. Keep the `--no-open` flag on `start`.

## Step 4: Update docusaurus.config.ts

Adopt new scaffold options while preserving these repo customizations:

**Imports** — use this exact block:

```typescript
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
```

Use `prismThemes.github` / `prismThemes.dracula` directly. No alias variables.

**Fields to ALWAYS keep (do not overwrite with scaffold values):**

| Field | Value |
|-------|-------|
| `trailingSlash` | `true` |
| `colorMode.defaultMode` | `"dark"` |
| `docs.routeBasePath` | `"/"` |
| `docs.showLastUpdateTime` / `showLastUpdateAuthor` | `true` |
| `docs.editUrl` / `blog.editUrl` | GitHub edit URL |
| `blog.blogTitle`, `blog.routeBasePath`, `blog.postsPerPage` | keep as-is |
| `gtag` in preset options | `{ trackingID: "G-GC9V7745EZ", anonymizeIP: true }` |
| `prism.additionalLanguages` | `["python", "perl"]` |
| `plugins` | lunr-search + last-updated-data-plugin |
| `markdown.hooks.onBrokenMarkdownLinks` | `"warn"` |
| `organizationName`, `projectName`, `url`, `title`, `tagline`, `favicon` | keep as-is |

If the scaffold introduces new top-level fields, new `docs`/`blog` options, or new `themeConfig` fields, add them.

## Step 5: Update tsconfig.json and sidebars.ts

Only update if the scaffold changes them.

## Step 6: Install and Build

```shell
npm install
npm run build
```

If the build fails: read the error, fix only config/package issues, re-run. Do not modify content files.

## Files to NEVER Touch During an Upgrade

`docs/`, `blog/`, `src/`, `static/`, `plugins/`, `.vale.ini`, `.vale/`, `.github/`
