---
uid: 932jsj
slug: /d/932jsj
aliases:
  - /projects/public-notes/superpowers/plans/2026-09-12-public-notes-url-restructure
---
# Public Notes URL Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every Public Notes document a permanent `/d/<uid>/` URL, redirect every pre-migration URL, and then reorganize the documentation tree without changing the canonical sitemap.

**Architecture:** A small CommonJS document-URL contract module scans Markdown frontmatter and is shared by the one-time UID migration script, the CI validator, the redirect-artifact verifier, and `docusaurus.config.ts`. Phase 1 pins absolute slugs and frozen aliases before enabling `@docusaurus/plugin-client-redirects`; Phase 2 is then strictly `git mv` plus new domain index pages, guarded by a byte-identical sitemap comparison.

**Tech Stack:** Node.js 20, Node built-in test runner, CommonJS utility scripts, TypeScript Docusaurus config, Docusaurus 3.10.2, `@docusaurus/plugin-client-redirects` 3.10.2, GitHub Actions, Markdown.

**Spec:** `docs/0070-projects/010-public-notes/superpowers/specs/2026-09-02-public-notes-url-restructure-design.md`

## Global Constraints

- Node.js is `>=20.0`; use `npm` and preserve the existing `package-lock.json`.
- All documents receive a unique six-character UID drawn from `[a-z0-9]` excluding `i`, `l`, `o`, and `u`.
- Except `docs/index.md`, every document slug is exactly `/d/<uid>`; `docs/index.md` retains `slug: /`.
- `uid`, `slug`, and `aliases` are explicit frontmatter fields. Phase 1 captures aliases once; future documents have `aliases: []` and existing aliases are never modified.
- Alias values are the legacy paths without a trailing slash; `0200-3d-printing.md` must retain `/0200-3d-printing` because Docusaurus intentionally does not parse its date-like numeric prefix.
- Redirects use `@docusaurus/plugin-client-redirects`, are generated only by production builds, and must redirect each frozen alias to its canonical slug.
- Keep GitHub Pages hosting, the existing vanity-domain setup, and blog URLs unchanged. Do not add comments or custom-domain work.
- Preserve the established first-person content; add no prose emoji except the project challenge markers already permitted by `.agents/CONTENT.md`.
- `npm run build` is the required primary validation. CI must run the document URL contract check before the build.
- Do not commit, push, publish, merge, or alter the dirty primary checkout. The current approved design and its project-page relocation are unstaged in the primary checkout; bring those exact approved files into the implementation branch before Phase 1 rather than recreating their content.

---

## File Map

| Path | Responsibility |
|---|---|
| `scripts/document-url-contract.cjs` | Shared scanner, frontmatter readers, UID/slug/alias validation, and legacy-path calculation that mirrors Docusaurus’s default prefix parser. |
| `scripts/document-url-contract.d.ts` | Type declarations consumed by `docusaurus.config.ts`. |
| `scripts/document-url-contract.test.cjs` | Node tests for UID format, duplicate detection, root-slug exception, aliases, and the numeric-prefix edge case. |
| `scripts/assign-uids.mjs` | Idempotent migration command; with `--capture-aliases`, stamps every missing frontmatter contract and freezes each legacy path. |
| `scripts/check-document-urls.mjs` | CI command that exits non-zero for a missing/invalid/duplicate UID, bad canonical slug, changed alias shape, or a real-route alias collision. |
| `scripts/verify-redirects.mjs` | Post-build verifier that checks each frozen alias has `build/<alias>/index.html` and names its canonical `/d/<uid>/` target. |
| `docusaurus.config.ts` | Loads records at config time and registers the redirects plugin with `createRedirects(existingPath)`. |
| `package.json`, `package-lock.json` | Add the matching redirects plugin plus `test:document-urls`, `check:document-urls`, and `verify:redirects` scripts. |
| `.github/workflows/test-deploy.yml`, `.github/workflows/deploy.yml` | Run `npm run check:document-urls` between `npm ci` and `npm run build`. |
| `.agents/CONTENT.md` | Replace the obsolete “frontmatter is almost never used” rule with the permanent UID/slug/aliases contract and the rule that new files start with `aliases: []`. |
| `README.md` | Document the URL contract check and the one-time `assign-uids --capture-aliases` migration command. |
| `blog/2023-07-23-public-notes-2023w30-changelog.md` | Replace its nine obsolete root-relative document links with the canonical `/d/<uid>/` URLs after the UIDs are assigned. |
| `src/pages/ahmadalli.md` | Replace the two obsolete root-relative project links with the canonical `/d/<uid>/` URLs after the UIDs are assigned. |
| `docs/**/*.md` | Phase 1 frontmatter on every document; Phase 2 moves and three new domain index documents in the exact matrix below. |

### Phase 2 Move Matrix

Use `git mv` so every content move remains reviewable. The numeric prefixes below are the destination ordering contract. Preserve bodies during moves except for the two explicitly described content merges and the three new domain index files.

| Source | Destination |
|---|---|
| `docs/0030-netherlands/` | `docs/0030-living/010-netherlands/` |
| `docs/0060-home-errands/index.md` | `docs/0030-living/020-home/index.md` |
| `docs/0060-home-errands/010-cleanup.md` | `docs/0030-living/020-home/010-cleanup.md` |
| `docs/0060-home-errands/020-maintenance/index.md` | `docs/0030-living/020-home/020-maintenance.md` |
| `docs/0060-home-errands/020-maintenance/020-painting.md` | `docs/0030-living/020-home/030-painting.md` |
| `docs/0230-cars/` | `docs/0030-living/030-cars/` |
| `docs/0190-personal-finance.md` | `docs/0030-living/040-personal-finance.md` |
| `docs/0240-coffee/index.md` | `docs/0030-living/050-coffee.md` |
| `docs/0040-finding-work/index.md` | `docs/0040-work/index.md` |
| `docs/0040-finding-work/010-finding-work-you-enjoy.md` | `docs/0040-work/010-finding-work-you-enjoy.md` |
| `docs/0040-finding-work/040-offer.md` | `docs/0040-work/020-offer.md` |
| `docs/0040-finding-work/020-preparing-for-applying/` | `docs/0040-work/030-preparing-for-applying/` |
| `docs/0040-finding-work/030-interviewing/` | `docs/0040-work/040-interviewing/` |
| `docs/0090-soft-skills/` | `docs/0040-work/050-soft-skills/` |
| `docs/0050-problem-solving/` | `docs/0040-work/060-problem-solving/` |
| `docs/0100-tech/` | `docs/0050-tech/` |
| `docs/0050-tech/010-docusaurus/` | `docs/0050-tech/010-docusaurus/` |
| `docs/0050-tech/060-oh-shit-x/spreadsheets/index.md` | delete after moving `excel.md`; its old URL remains an alias only if it was a document before Phase 1. |
| `docs/0050-tech/060-oh-shit-x/spreadsheets/excel.md` | `docs/0050-tech/060-oh-shit-x/050-excel.md` |
| `docs/0050-tech/130-workstation/` | `docs/0050-tech/130-workstation/` |
| `docs/0050-tech/180-phone/` | `docs/0050-tech/180-phone/` |
| `docs/0140-photography-and-cinematography/` | `docs/0060-making/010-photography/` |
| `docs/0060-making/010-photography/030-picture-post-processing/index.md` | `docs/0060-making/010-photography/030-picture-post-processing.md` |
| `docs/0060-making/010-photography/030-picture-post-processing/010-stacking.md` | `docs/0060-making/010-photography/040-stacking.md` |
| `docs/0060-making/010-photography/030-picture-post-processing/020-black-and-white.md` | `docs/0060-making/010-photography/050-black-and-white.md` |
| `docs/0130-drones/` | `docs/0060-making/020-drones/` |
| `docs/0220-cameras.md` | `docs/0060-making/030-cameras.md` |
| `docs/0200-3d-printing.md` | `docs/0060-making/040-3d-printing.md` |
| `docs/0120-games/` | `docs/0070-leisure/010-games/` |
| `docs/0180-movies-and-series/index.md` | `docs/0070-leisure/020-watching/index.md` |
| `docs/0180-movies-and-series/0010-the-americans.md` | `docs/0070-leisure/020-watching/010-the-americans.md` |
| `docs/0180-movies-and-series/0020-babylon-berlin.md` | `docs/0070-leisure/020-watching/020-babylon-berlin.md` |
| `docs/0170-books/` | `docs/0070-leisure/030-books/` |
| `docs/0210-travel/` | `docs/0070-leisure/040-travel/` |
| `docs/0150-sports/` | `docs/0070-leisure/050-sports/` |
| `docs/0160-observations/index.md` | `docs/0080-thinking/index.md` |
| `docs/0020-a-guide-to-writing.md` | `docs/0080-thinking/010-a-guide-to-writing.md` |
| `docs/0110-problems-and-questions.md` | `docs/0080-thinking/020-problems-and-questions.md` |
| `docs/0080-phenomena/010-wicked-problem.md` | `docs/0080-thinking/030-wicked-problems.md` |
| `docs/0080-phenomena/index.md` | delete after its introductory sentence is moved into `docs/0080-thinking/030-wicked-problems.md`; it was a stub index. |
| `docs/0160-observations/010-no-nice-things/` | `docs/0080-thinking/040-why-cant-we-have-nice-things/` |
| `docs/0160-observations/020-enshittified-world/` | `docs/0080-thinking/050-enshittified-world/` |
| `docs/0160-observations/030-dark-patterns/` | `docs/0080-thinking/060-dark-patterns/` |
| `docs/0160-observations/040-economics/index.md` | `docs/0080-thinking/070-economics.md` |
| `docs/0070-projects/` | `docs/0090-projects/` |
| `docs/9000-websites-and-tools.md` | `docs/9000-websites-and-tools.md` (remain root-level) |
| `docs/9900-internal-utilities/` | `docs/0050-tech/010-docusaurus/020-internal-utilities/` |

Create these three files as Pattern A category pages, preserving the project’s existing `ChildPages` import and `depth={2}` convention:

```markdown
import ChildPages from '@site/src/components/child-pages';

# Living

## Table of Contents

<ChildPages depth={2} />
```

Use the same content with `# Making` and `# Leisure` for `docs/0060-making/index.md` and `docs/0070-leisure/index.md` respectively. The moved `docs/0050-tech/index.md` becomes the existing Tech index, and all other moved `index.md` bodies remain unchanged.

### Task 1: Establish the Document URL Contract and Tests

**Files:**
- Create: `scripts/document-url-contract.cjs`
- Create: `scripts/document-url-contract.d.ts`
- Create: `scripts/document-url-contract.test.cjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: absolute `docs` directory paths and Markdown file contents.
- Produces: `DocumentUrlRecord[]`, where `DocumentUrlRecord = { filePath: string; relativePath: string; uid: string; slug: string; aliases: string[] }`.
- Produces: `collectDocumentUrlRecords(docsDirectory)`, `validateDocumentUrlRecords(records)`, `legacyPathFor(relativePath)`, and `canonicalPathFor(uid, isRootIndex)`.

- [ ] **Step 1: Write the failing contract tests**

```js
const { test } = require('node:test');
const assert = require('node:assert/strict');
const {
  canonicalPathFor,
  legacyPathFor,
  validateDocumentUrlRecords,
} = require('./document-url-contract.cjs');

test('keeps a numeric prefix whose suffix starts with a digit', () => {
  assert.equal(legacyPathFor('0200-3d-printing.md'), '/0200-3d-printing');
});

test('allows only the root document to use the root slug', () => {
  assert.deepEqual(validateDocumentUrlRecords([
    { filePath: 'docs/index.md', relativePath: 'index.md', uid: 'k7f2q9', slug: '/', aliases: [] },
    { filePath: 'docs/x.md', relativePath: 'x.md', uid: 'p3r4s5', slug: '/', aliases: [] },
  ]), ['docs/x.md: slug must be /d/p3r4s5']);
});

test('rejects ambiguous UID letters, duplicate UIDs, and aliases with a trailing slash', () => {
  assert.equal(canonicalPathFor('k7f2q9', false), '/d/k7f2q9');
  assert.deepEqual(validateDocumentUrlRecords([
    { filePath: 'docs/a.md', relativePath: 'a.md', uid: 'k7f2q9', slug: '/d/k7f2q9', aliases: ['/a/'] },
    { filePath: 'docs/b.md', relativePath: 'b.md', uid: 'k7f2q9', slug: '/d/k7f2q9', aliases: [] },
  ]), [
    'docs/a.md: aliases must be absolute paths without trailing slashes',
    'uid k7f2q9 is used by docs/a.md and docs/b.md',
  ]);
});
```

- [ ] **Step 2: Run the tests and verify they fail because the contract module does not exist**

Run: `node --test scripts/document-url-contract.test.cjs`

Expected: FAIL with `Cannot find module './document-url-contract.cjs'`.

- [ ] **Step 3: Implement the shared contract module and declaration file**

```js
const UID_PATTERN = /^[a-hj-km-np-tv-z0-9]{6}$/;
const NUMBER_PREFIX_PATTERN = /^(\d+)\s*[-_.]+\s*([^-_.\s].*)$/;
const IGNORED_NUMBER_PREFIX_PATTERN = /^\d+[-_.]\d+/;

function legacySegment(segment) {
  if (IGNORED_NUMBER_PREFIX_PATTERN.test(segment)) return segment;
  return NUMBER_PREFIX_PATTERN.exec(segment)?.[2] ?? segment;
}

function legacyPathFor(relativePath) {
  const withoutExtension = relativePath.replace(/\.md$/, '');
  const segments = withoutExtension.split('/').map(legacySegment);
  if (segments.at(-1)?.toLowerCase() === 'index') segments.pop();
  return `/${segments.join('/')}`.replace(/\/$/, '') || '/';
}

function canonicalPathFor(uid, isRootIndex) {
  return isRootIndex ? '/' : `/d/${uid}`;
}
```

Read only the opening YAML fence, require scalar `uid` and `slug` lines plus an `aliases` sequence or `aliases: []`, and return sorted validation messages. Validate the UID pattern, UID uniqueness, canonical-slug derivation, absolute aliases without trailing slashes, aliases distinct from canonical paths, and alias uniqueness across records. Export the four interfaces above with `module.exports`; declare the exact `DocumentUrlRecord` shape in the `.d.ts` file so strict TypeScript can import the CommonJS module.

- [ ] **Step 4: Add the native test command and verify the tests pass**

Add this `package.json` script:

```json
"test:document-urls": "node --test scripts/document-url-contract.test.cjs"
```

Run: `npm run test:document-urls`

Expected: PASS, with all three contract tests passing.

- [ ] **Step 5: Commit the tested contract foundation when the user requests a commit**

```bash
git add package.json scripts/document-url-contract.cjs scripts/document-url-contract.d.ts scripts/document-url-contract.test.cjs
git commit -m "feat(urls): add document URL contract"
```

### Task 2: Add One-Time UID Migration, Ongoing Validation, and Artifact Verification

**Files:**
- Create: `scripts/assign-uids.mjs`
- Create: `scripts/assign-uids.test.mjs`
- Create: `scripts/check-document-urls.mjs`
- Create: `scripts/verify-redirects.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: `collectDocumentUrlRecords(DOCS_DIRECTORY)` and `validateDocumentUrlRecords(records)` from Task 1.
- Produces: `npm run assign-uids -- --capture-aliases`, `npm run check:document-urls`, and `npm run verify:redirects`.
- Produces: `build/<legacy-path>/index.html` checks against `DocumentUrlRecord.slug`.
- Produces: `migrateDocuments({ docsDirectory, captureAliases, randomUid }): Promise<DocumentUrlRecord[]>` for the migration test and command-line wrapper.


- [ ] **Step 1: Write the failing one-time migration test**

```js
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { migrateDocuments } from './assign-uids.mjs';

test('capture mode freezes the pre-migration path and keeps root at /', async () => {
  const docsDirectory = await mkdtemp(join(tmpdir(), 'public-notes-urls-'));
  await mkdir(join(docsDirectory, '0100-tech'), { recursive: true });
  await writeFile(join(docsDirectory, 'index.md'), '# Intro\n');
  await writeFile(join(docsDirectory, '0100-tech', '0200-3d-printing.md'), '# 3D Printing\n');

  const uids = ['k7f2q9', 'p3r4s5'];
  const records = await migrateDocuments({
    docsDirectory,
    captureAliases: true,
    randomUid: () => uids.shift(),
  });

  assert.deepEqual(records.map(({ slug, aliases }) => ({ slug, aliases })), [
    { slug: '/d/k7f2q9', aliases: ['/tech/0200-3d-printing'] },
    { slug: '/', aliases: [] },
  ]);
  assert.match(await readFile(join(docsDirectory, 'index.md'), 'utf8'), /slug: \/\naliases: \[\]/);
});
```


- [ ] **Step 2: Run the migration test before implementing the command**

Run: `node --test scripts/assign-uids.test.mjs`

Expected: FAIL with `Cannot find module './assign-uids.mjs'`.

- [ ] **Step 3: Implement the commands with an explicit migration switch**

```js
// scripts/assign-uids.mjs
const captureAliases = process.argv.includes('--capture-aliases');
const alphabet = 'abcdefghjkmnpqrstvwxyz0123456789';

function generateUid(used) {
  let uid;
  do uid = [...crypto.getRandomValues(new Uint32Array(6))]
    .map((value) => alphabet[value % alphabet.length]).join('');
  while (used.has(uid));
  return uid;
}
```

`assign-uids.mjs` must walk `docs/**/*.md` in stable lexical order, preserve any existing frontmatter and body bytes outside the opening YAML block, create a frontmatter block when absent, and fail rather than overwrite an existing `uid`, `slug`, or non-empty `aliases`. In `--capture-aliases` mode write the pre-migration `legacyPathFor(relativePath)` for every non-root document; without that switch write `aliases: []`. Write `slug: /` for `docs/index.md` and `slug: /d/<uid>` elsewhere. Immediately run the shared validator after writing and print the document count.

`check-document-urls.mjs` must call the shared collector/validator, print every error on stderr, and exit `1` if any error exists. It must also reject a frozen alias that equals any document’s canonical slug, because the redirects plugin skips real-route collisions.

`verify-redirects.mjs` must translate `/a/b` to `build/a/b/index.html`, assert the file exists, and assert its HTML contains the record’s slash-terminated canonical target such as `/d/k7f2q9/`; it exits `1` after printing every failed alias.

- [ ] **Step 4: Register and run the commands**

```json
"assign-uids": "node scripts/assign-uids.mjs",
"check:document-urls": "node scripts/check-document-urls.mjs",
"verify:redirects": "node scripts/verify-redirects.mjs"
```

Run: `npm run test:document-urls`

Expected: PASS.

Run: `node --test scripts/assign-uids.test.mjs`

Expected: PASS; the temporary fixture has `/tech/0200-3d-printing` frozen as its only alias and the root fixture retains `/`.

- [ ] **Step 5: Commit the migration and validation tools when the user requests a commit**

```bash
git add package.json scripts/assign-uids.mjs scripts/assign-uids.test.mjs scripts/check-document-urls.mjs scripts/verify-redirects.mjs
git commit -m "feat(urls): add UID migration tooling"
```

### Task 3: Enable Canonical Routes, Redirects, and CI Enforcement

**Files:**
- Modify: `docusaurus.config.ts`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `.github/workflows/test-deploy.yml`
- Modify: `.github/workflows/deploy.yml`

**Interfaces:**
- Consumes: validated `DocumentUrlRecord[]` from `scripts/document-url-contract.cjs`.
- Produces: redirects-plugin option `createRedirects(existingPath: string): string[]`.
- Produces: CI command ordering `npm ci`, `npm run check:document-urls`, `npm run build`.

- [ ] **Step 1: Write the failing configuration assertion as a build precondition**

Run: `npm run check:document-urls`

Expected: FAIL before Phase 1 because the current documents have no URL-contract frontmatter.

- [ ] **Step 2: Add the matching Docusaurus redirects dependency**

Run: `npm install @docusaurus/plugin-client-redirects@3.10.2 --save-exact`

Expected: `package.json` and `package-lock.json` record version `3.10.2`, matching the site’s Docusaurus packages.

- [ ] **Step 3: Register a config-time alias map and redirects plugin**

```ts
import * as path from "path";
import { collectDocumentUrlRecords } from "./scripts/document-url-contract.cjs";

const documentUrlRecords = collectDocumentUrlRecords(path.join(__dirname, "docs"));
const aliasesByPath = new Map(
  documentUrlRecords.map(({ slug, aliases }) => [slug, aliases]),
);

// In config.plugins:
[
  "@docusaurus/plugin-client-redirects",
  {
    createRedirects(existingPath: string) {
      return aliasesByPath.get(existingPath) ?? [];
    },
  },
],
```

Keep the existing search and last-updated plugins intact. Do not compute canonical routes from file names in the config; the documents’ explicit `slug` values are the source of truth.

- [ ] **Step 4: Add the CI gate in both workflows**

```yaml
      - name: Check document URL contract
        run: npm run check:document-urls
      - name: Build website
        run: npm run build
```

Place the new step after `npm ci` and before the existing build step in both `test-deploy.yml` and `deploy.yml`.

- [ ] **Step 5: Typecheck the configuration before the migration applies it**

Run: `npm run typecheck`

Expected: PASS; strict TypeScript accepts the declared CommonJS contract import and the redirects plugin configuration.

- [ ] **Step 6: Commit route infrastructure when the user requests a commit**

```bash
git add docusaurus.config.ts package.json package-lock.json .github/workflows/test-deploy.yml .github/workflows/deploy.yml
git commit -m "feat(urls): generate legacy redirects"
```

### Task 4: Perform Phase 1 Frontmatter Migration and Repair Broken Internal Links

**Files:**
- Modify: every `docs/**/*.md`, including `docs/index.md`
- Modify: `blog/2023-07-23-public-notes-2023w30-changelog.md`
- Modify: `src/pages/ahmadalli.md`
- Modify: `.agents/CONTENT.md`
- Modify: `README.md`
- Add: `docs/0070-projects/010-public-notes/index.md` and `docs/0070-projects/010-public-notes/superpowers/specs/2026-09-02-public-notes-url-restructure-design.md` if they are not already present from the approved primary-checkout changes

**Interfaces:**
- Consumes: Task 2 migration command and Task 3 config.
- Produces: one unique canonical `slug` and frozen aliases list on all documents; an empty alias list for the root document.

- [ ] **Step 1: Verify the pre-migration build and capture the current route table**

Run: `npm run build`

Expected: PASS before UID frontmatter is added. Inspect `.docusaurus` route metadata to confirm `/0200-3d-printing/` is present; this confirms the exceptional legacy alias from the design against the installed Docusaurus version.

- [ ] **Step 2: Bring the already-approved Public Notes design into the implementation branch without rewriting it**

Copy the exact approved `docs/0070-projects/010-public-notes/index.md` and `docs/0070-projects/010-public-notes/superpowers/specs/2026-09-02-public-notes-url-restructure-design.md` from the primary checkout, preserving their bytes. Do not alter their body copy. This reconciles the plan branch’s committed baseline, where the project page is still `docs/0070-projects/010-public-notes.md`, with the approved design’s stated current structure.

- [ ] **Step 3: Run the one-time alias capture and prove its contract**

Run: `npm run assign-uids -- --capture-aliases`

Expected: the command reports the final document count; every non-root document has `uid`, `slug: /d/<uid>`, and exactly its old untrailed path in `aliases`; `docs/index.md` has `slug: /` and `aliases: []`.

Run: `npm run check:document-urls`

Expected: PASS with zero diagnostics.

- [ ] **Step 4: Replace the exact obsolete root-relative document links**

After reading the generated UID frontmatter, replace these nine links in `blog/2023-07-23-public-notes-2023w30-changelog.md` with their target documents’ `/d/<uid>/` routes: `A Guide to Writing`, `Netherlands`, `Finding Work`, `Problem Solving`, `Home Errands`, `Projects`, `Phenomena`, and `Soft Skills`. Keep the `[Intro](/)` link because the root page deliberately stays at `/`.

Replace the two `Project Docs` links in `src/pages/ahmadalli.md` with the canonical URLs for the Public Notes and SRE Audiobook project documents. Do not alter fully qualified links; those intentionally ride the permanent aliases.

- [ ] **Step 5: Update durable author and contributor documentation**

Replace `.agents/CONTENT.md`’s obsolete frontmatter prohibition with this exact contract:

```markdown
Every document has frontmatter with `uid`, `slug`, and `aliases`.

- Never change an existing `uid`, `slug`, or `aliases` entry.
- Use `slug: /d/<uid>` for a new document and `aliases: []`.
- Only `docs/index.md` uses `slug: /`.
- Do not add aliases to a new document.
```

Add the three URL scripts and their intended use to `README.md`, identifying `npm run check:document-urls` as the normal validation and `npm run assign-uids -- --capture-aliases` as a completed one-time migration command that must not be repeated.

- [ ] **Step 6: Build and verify every generated redirect**

Run: `npm run build; npm run verify:redirects; npm run typecheck`

Expected: all commands PASS. Inspect build output for the redirects plugin’s collision warnings; there must be none. Confirm `build/0200-3d-printing/index.html` redirects to the 3D Printing document’s canonical `/d/<uid>/` URL.

- [ ] **Step 7: Commit Phase 1 when the user requests a commit**

```bash
git add docs blog/2023-07-23-public-notes-2023w30-changelog.md src/pages/ahmadalli.md .agents/CONTENT.md README.md
git commit -m "feat(urls): pin document URLs and redirects"
```

### Task 5: Reorganize Documents into Domains Without Changing URLs

**Files:**
- Move: every file and directory in the Phase 2 Move Matrix
- Create: `docs/0030-living/index.md`
- Create: `docs/0060-making/index.md`
- Create: `docs/0070-leisure/index.md`
- Delete: the two moved former stub index documents named in the matrix only after their child pages have been moved

**Interfaces:**
- Consumes: Phase 1’s explicit absolute slugs and the frozen route set from `build/sitemap.xml`.
- Produces: the seven-domain navigation tree (`living`, `work`, `tech`, `making`, `leisure`, `thinking`, `projects`) while retaining the same canonical URL set.

- [ ] **Step 1: Capture the canonical Phase 1 sitemap before moving files**

Run: `npm run build; Copy-Item build/sitemap.xml "$env:TEMP\public-notes-phase-1-sitemap.xml" -Force`

Expected: the saved temporary sitemap contains the canonical `/d/<uid>/` routes and becomes the exact Phase 2 comparison baseline.

- [ ] **Step 2: Create the three new domain index pages and move the Living and Work domains**

Use the Phase 2 Move Matrix exactly, including the `home`, `cars`, `personal-finance`, `coffee`, `preparing-for-applying`, `interviewing`, `soft-skills`, and `problem-solving` destinations. Run `git status --short` and confirm every old path is recorded as a rename or intentional deleted stub, not as duplicated content.

- [ ] **Step 3: Move the Tech and Making domains**

Use the matrix exactly. Preserve the fourth-level `custom-react-components` and `internal-utilities` descendants below `tech/docusaurus`. Move the substantive Picture Post-Processing index to its specified leaf page. Delete only the former Spreadsheets stub index after adding its exact sentence, `Oh shit moments with spreadsheet tools.`, beneath the Excel page H1; do not remove any substantive page.

- [ ] **Step 4: Move Leisure, Thinking, and Projects**

Use the matrix exactly. Preserve the approved URL-restructure design under `projects/public-notes/`, and retain `websites-and-tools.md` at the root with its `9000-` prefix. Before deleting the former Phenomena stub index, add its exact introductory sentence, `Here I keep entries about phenomena that I find impactful on my worldview and help me understand and model the world.`, immediately below the Wicked Problems H1 so that no authored content is discarded.

- [ ] **Step 5: Run the URL checks and build after all moves**

Run: `npm run check:document-urls; npm run build; npm run verify:redirects; npm run typecheck`

Expected: all commands PASS. The contract check proves moves did not change `uid`, `slug`, or `aliases`; redirect verification proves legacy files still resolve.

- [ ] **Step 6: Require a byte-identical sitemap**

```powershell
$before = (Get-FileHash "$env:TEMP\public-notes-phase-1-sitemap.xml" -Algorithm SHA256).Hash
$after = (Get-FileHash build/sitemap.xml -Algorithm SHA256).Hash
if ($before -ne $after) { throw "Canonical sitemap changed during Phase 2." }
```

Expected: no exception. If hashes differ, run `Compare-Object (Get-Content "$env:TEMP\public-notes-phase-1-sitemap.xml") (Get-Content build/sitemap.xml)` and fix the moved document that lost or changed its absolute slug before proceeding.

- [ ] **Step 7: Commit Phase 2 when the user requests a commit**

```bash
git add docs
git commit -m "docs: reorganize public notes navigation"
```

### Task 6: Final Review and Completion Gate

**Files:**
- Review: all files changed by Tasks 1–5

**Interfaces:**
- Consumes: successful tests, contract check, production build, redirect artifacts, and sitemap comparison.
- Produces: a reviewable, uncommitted implementation branch until the user explicitly asks for commits.

- [ ] **Step 1: Run all deterministic checks in a clean sequence**

Run: `npm run test:document-urls; npm run check:document-urls; npm run typecheck; npm run build; npm run verify:redirects`

Expected: every command exits `0`.

- [ ] **Step 2: Check final contract shape and collision warnings**

Run: `rg -n '^uid: |^slug: |^aliases:' docs; rg -n 'skip|collision|warning' build .docusaurus`

Expected: every Markdown document has all three frontmatter keys, only `docs/index.md` has `slug: /`, and no redirect-alias collision warning is present.

- [ ] **Step 3: Verify the sitemap invariant and review the diff**

Run: `git diff --check; git diff --stat; git status --short --branch`

Expected: no whitespace errors; only the planned URL tooling, config, CI, docs, link, and move changes appear. Re-run the Task 5 SHA-256 sitemap comparison and require equality.

- [ ] **Step 4: Request code review before any commit or integration decision**

Use `superpowers:requesting-code-review` with the spec, this plan, the final diff, the commands above, and the explicit check that the two migration phases remain independently verifiable.

- [ ] **Step 5: Do not commit, push, publish, merge, or remove the worktree without explicit user authorization**

Report the completed verification evidence and wait for the user’s requested integration action.

## Plan Self-Review

### Spec Coverage

| Approved design requirement | Implementing task |
|---|---|
| Immutable opaque six-character URL and ambiguity-safe alphabet | Tasks 1–2, UID validator and migration generator |
| Explicit `uid`, `slug`, `aliases`; root-page exception | Tasks 1, 2, and 4 |
| Frozen one-time aliases and no aliases for new pages | Tasks 2 and 4 |
| Client redirects from all historical URLs | Tasks 3–4 and `verify:redirects` |
| `0200-3d-printing` exceptional legacy path | Tasks 1, 2, and 4 |
| Repair ten broken root-relative links | Task 4 |
| CI URL contract check | Task 3 |
| Seven-domain restructuring and standalone websites page | Task 5 move matrix |
| No custom-domain, comment-system, blog-URL, or hosting change | Global Constraints and Tasks 3–5 |
| Phase-1 redirect verification and Phase-2 byte-identical sitemap | Tasks 4–6 |

No approved requirement lacks an implementing task.

### Placeholder Scan

Scanned against every prohibited placeholder pattern in the planning skill. None appear as unfinished implementation instructions.

### Interface Consistency

Tasks 2 and 3 consume the exact `DocumentUrlRecord`, `collectDocumentUrlRecords`, and `validateDocumentUrlRecords` names established in Task 1. The root canonical-path exception, trailing-slash redirect-artifact assertion, and CI script names are used consistently in Tasks 1–6.
