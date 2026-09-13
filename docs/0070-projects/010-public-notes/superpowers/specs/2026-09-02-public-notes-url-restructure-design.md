# URL Restructure Design

Design for decoupling page URLs from the directory tree, so the notes can be reorganized without breaking links.

Status: approved, not yet implemented. Written on September 2, 2026.

## Why

Today a page's URL is its file path with numeric prefixes stripped. `docs/0100-tech/130-workstation/030-windows.md` is served at `/tech/workstation/windows/`. The directory tree is the URL, which means:

- Moving a page breaks every external link to it.
- The sidebar order and the URL structure can't be changed independently.
- A comment system keyed on URLs would lose its threads whenever a page moves.

This is the same problem already recorded on the project page as "Documents don't have unique IDs" and "Relocating documents breaks their links."

## What

Goals:

- Give every page a URL that never changes, under any edit.
- Keep every current URL working.
- Free the directory tree to be reorganized purely for navigation.

Non-goals, deliberately out of scope:

- Comments. The `uid` field below is the term a Giscus integration would key on, but nothing here implements one.
- Custom domains. `ohshitpython.com`, `ohshitperl.com`, `ohshit.foo` and `ohshit.bar` are configured outside this repository. They point at current paths and will keep working through the redirects. Consolidating them is separate work.
- Blog URLs. They're date-based and already stable.

## URL Scheme

Every page is served at `/d/<uid>/`.

```text
/d/k7f2q9/
```

There's no readable slug. The URL is the identity and nothing else, so no edit to a page can ever change it: not a retitle, not a move, not a reorganization of the whole tree.

The `/d/` prefix keeps the new namespace from colliding with a legacy path, since legacy top-level segments are words and no current page occupies `/d/`.

### UID Format

Six characters drawn from `[a-z0-9]` with `i`, `l`, `o` and `u` removed. That's 28 characters and about 480 million combinations. Dropping those four avoids both visual ambiguity and accidental words.

UIDs are assigned once, at random, and never reissued.

### What This Trades Away

A readable URL. `/d/k7f2q9/` tells a person nothing when it appears in a chat window or a bookmark bar, and that cost is permanent rather than occasional.

It costs less in search ranking than it appears to. URL keywords are a weak signal; the title, the H1 and the breadcrumb trail carry the semantic weight, and search results usually display breadcrumbs rather than the raw path.

The gain is that bookkeeping disappears completely. A readable slug would have to be tracked whenever it changed, which means a tool that diffs slugs against the previous commit and a check that keeps it honest. With nothing in the URL but the UID, there's nothing to track.

## Frontmatter Contract

Three fields on every document:

```yaml
---
uid: k7f2q9
slug: /d/k7f2q9
aliases:
  - /tech/workstation/windows
---
```

- **`uid`**: identifies the document for its whole life.
- **`slug`**: the route. Always exactly `/d/<uid>`, so it's mechanically derivable and checkable. It's written out rather than computed so the URL is readable straight from the file.
- **`aliases`**: every URL the page had before this migration. Written once in Phase 1 and frozen. New pages have none, ever.

`docs/index.md` is the one exception. It keeps `slug: /` so the home page stays at the root.

The docs frontmatter schema accepts unknown fields, so `uid` and `aliases` pass through untouched and are readable from `frontMatter`.

This overturns the current rule in `.agents/CONTENT.md` that frontmatter is almost never used. That file needs rewriting as part of this work.

## Redirect Generation

`@docusaurus/plugin-client-redirects` generates one HTML file per legacy URL, each containing a redirect to the canonical URL.

`docusaurus.config.ts` reads the frontmatter of every document when the configuration loads, building a map from canonical path to aliases. Since `slug` is always `/d/<uid>`, the canonical path is known exactly and no part of the Docusaurus slug logic has to be duplicated.

```ts
createRedirects(existingPath) {
  return aliasesByPath.get(existingPath);
}
```

The plugin calls `createRedirects` once per generated route and writes each returned path as `<from>/index.html`. It skips, with a warning, any `from` that collides with a real route.

### Volume

About 125 redirect files, one per document that had a URL before this migration. **The set is frozen once Phase 1 ships.** Because no future edit can change a canonical URL, no redirect is ever added, and there's nothing to keep in sync.

### What This Costs

The redirect is a meta refresh rather than an HTTP 308. Search engines follow a zero-delay meta refresh and treat it as permanent, so the practical loss is small: an extra round trip and a brief flash for anyone arriving on an old link. Since the set is frozen and the old links age out, the cost declines over time rather than accumulating.

The plugin is inactive in development and only runs in production builds, so redirects can't be exercised with `npm start`.

## Hosting

The site stays on Github Pages. Nothing in this design needs code to run at request time.

This was reconsidered and settled deliberately, so the reasoning is worth recording. An earlier version of this design resolved URLs with Vercel Routing Middleware, which would have given real 308s and let a readable slug change without bookkeeping. It was set aside because resolution was the only thing that would have required it: moving hosts would have added a runtime, a vendor-specific component, compute on every page view, and a plan dependency, to a site that otherwise needs none of them. Dropping the readable slug removed the requirement entirely.

The one capability given up is that Github Pages permits a single custom domain per repository, so the vanity domains can only ever redirect rather than serve content. That's acceptable while custom domains are out of scope, and revisiting it later doesn't disturb the URL scheme, the frontmatter, or the structure.

## Content Structure

With URLs detached from paths, the tree becomes a navigation aid and can be reorganized freely. Today's 25 top-level entries are badly unbalanced: Tech holds 38 files and Netherlands 11, while Coffee, Sports, Phenomena and Travel sit at the same level with one or two files each.

The replacement is seven domains plus a single standalone page, 127 files. Nesting is three levels everywhere except inside `tech/docusaurus/`, which keeps a fourth for its two utility sections. Numeric ordering prefixes are omitted below for readability; the real files keep them. Annotations mark new files and non-obvious origins.

```text
docs/
  index.md                                   Intro
  websites-and-tools.md                      was 9000-websites-and-tools.md

  living/
    index.md                                 NEW
    netherlands/
      index.md  legally-settling-in.md  renting-an-apartment.md
      buying-a-place.md  banking.md  healthcare.md  transportation.md
      political-system.md  amsterdam.md  useful-apps-and-sites.md
      engineering-and-problem-solving.md
    home/
      index.md                               was home-errands/index.md
      cleanup.md  maintenance.md
      painting.md                            was maintenance/painting.md
    cars/
      index.md  buying-a-car.md
    personal-finance.md
    coffee.md                                was coffee/index.md

  work/
    index.md                                 was finding-work/index.md
    finding-work-you-enjoy.md  offer.md
    preparing-for-applying/
      index.md  resume.md  persian-communities.md
    interviewing/
      index.md  sre-interview-materials.md
    soft-skills/
      index.md  growth-mindset.md  structured-storytelling.md
    problem-solving/
      index.md  iteration.md  power-law.md

  tech/
    index.md
    workstation/
      index.md  common.md  mac.md  windows.md
    phone/
      index.md  android.md
    oh-shit-x/
      index.md  perl.md  python.md  git.md  dotnet.md
      excel.md                               was spreadsheets/excel.md
    large-language-models/
      index.md  chatgpt.md  local-llms.md  oraily-llm-course.md
    machine-learning/
      index.md  datasets.md
    docusaurus/
      index.md
      custom-react-components/
        index.md  child-pages.md
      internal-utilities/                    was 9900-internal-utilities/
        index.md  wikimedia-markdown.md
    streaming-games.md  casio-prizm-gaming.md  raspberry-pi.md
    esp32.md  home-assistant.md  steam-deck.md  yubikey.md  sdr.md
    bios.md  onedrive.md  email.md  avatar.md  publishing-podcast.md
    product-prototyping-tools.md  oneliners.md

  making/
    index.md                                 NEW
    photography/                             was photography-and-cinematography/
      index.md  taking-pictures.md  taking-videos.md
      picture-post-processing.md             was that directory's index.md
      stacking.md  black-and-white.md
      video-post-processing.md  davinci-resolve.md  lightroom.md
      media-organization.md  publishing.md
    drones/
      index.md  legal-preparations.md  hardware.md
    cameras.md  3d-printing.md

  leisure/
    index.md                                 NEW
    games/
      index.md  rainbow-six.md  nier.md  assassins-creed.md  lego.md
    watching/
      index.md                               was movies-and-series/index.md
      the-americans.md  babylon-berlin.md
    books/
      index.md  feel-great-lose-weight.md
    travel/
      index.md  the-netherlands.md
    sports/
      index.md  kayaking.md

  thinking/
    index.md                                 was observations/index.md
    a-guide-to-writing.md  problems-and-questions.md
    wicked-problems.md                       phenomena/index.md merged up
    why-cant-we-have-nice-things/
      index.md  fixing-shared-company-devices.md
    enshittified-world/
      index.md  google-search.md  web.md
    dark-patterns/
      index.md  microsoft-edge.md  emails.md
    economics.md                             was economics/index.md

  projects/
    index.md
    public-notes/
      index.md  url-restructure-design.md
    sre-audiobook.md  jumbled-projects.md
    archive/
      index.md  clever-messages.md
```

The count works out as 125 current files, minus two dropped stub index pages, plus three new domain index pages, plus this document.

Every current topic stays whole; nothing is split across two parents. Today's stub sections become pages rather than directories. Two judgment calls worth recording:

- `internal-utilities/` moves under `tech/docusaurus/`, beside `custom-react-components/`. The Wikimedia converter is one of this site's own React components, so it belongs with the other writing about them rather than in a top-level section of its own. Its `9900-` prefix was only ever a sorting hack.
- `websites-and-tools.md` stays a standalone page at the root. It's neither tech nor leisure nor meta, and its `9000-` prefix already parks it outside every section on purpose.

## Phases

Both phases ship on their own and are verifiable in isolation.

### Phase 1: UIDs and Redirects

Files don't move. Every document gets `uid`, `slug` and `aliases`, where the aliases are exactly today's paths.

Two things must be fixed in the same change or the build fails:

- **Ten root-relative links break.** Eight in `blog/2023-07-23-public-notes-2023w30-changelog.md` and two in `src/pages/ahmadalli.md` point at paths that stop being routes. Redirect files are written after the route table is built, so `onBrokenLinks: "throw"` will reject them. The fully qualified `https://publicnotes.io/...` links in later changelogs aren't checked and will ride the redirects.
- **`docs/0200-3d-printing.md` is served at `/0200-3d-printing/`**, keeping its numeric prefix because the remaining slug would start with a digit. That exact path has to appear in its aliases.

### Phase 2: Restructure

Pure file moves into the tree above, plus the sidebar changes that motivated the whole design. Because slugs are absolute and pinned to UIDs, moving a file can't change its URL.

## Verification

- **Phase 1**: `npm run build` passes, which is the check that no internal link was missed. Every alias then has a corresponding `index.html` in `build/`, and each one points at the right canonical URL.
- **Phase 2**: `build/sitemap.xml` is byte-identical before and after. If it isn't, a URL moved and the restructure is wrong.

## Tooling

- `scripts/assign-uids.mjs` stamps `uid` and `slug` on any document missing them, and performs the one-time alias capture in Phase 1.
- A CI step checks that every document has a UID, that UIDs are unique, and that each `slug` is exactly `/d/<uid>`.

No tool is needed to maintain redirects. The alias set is written once and never changes.

## Open Questions

None blocking. Two details to confirm while implementing:

- Whether `createRedirects` should return alias paths with or without a trailing slash, given `trailingSlash: true`. Both should resolve to the same output file, but it's worth confirming against the generated `build/` output rather than assuming.
- Whether any alias collides with a real route and gets silently skipped with a warning. The verification step above catches this, but the build log should be read rather than trusted.
