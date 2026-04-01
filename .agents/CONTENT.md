# Content Editing Guide

This is the primary guide for editing Markdown/MDX content in `docs/` and `blog/`. For development tasks (components, theme, CI/CD), see `.agents/ARCHITECTURE.md`.

<critical_rules>

## Rules You Must Always Follow

1. **NEVER commit unless the user explicitly asks.** Editing and committing are separate actions.
2. **NEVER invent personal descriptions.** If adding a tool, app, or link and you lack the author's first-person context, ask the user.
3. **NEVER add emoji to prose.** Only `▶️`, `☑️`, `⏹️` for project challenge tracking.
4. **Always run `npm run build` after changes.** It catches broken links (`onBrokenLinks: "throw"`).
5. **Only edit the file the user specifies.** If unsure, ask.
6. **Read the target file first.** Before editing, read the existing file to understand its format and match it.
7. **Do NOT over-write content.** Match the user's level of detail exactly. A one-sentence input means a one-sentence addition, not a multi-section article.
8. **Default to standalone files.** Create a directory only when the user indicates sub-pages are needed.

</critical_rules>

---

## Directory Structure and File Naming

<directory_structure>

### Top-Level Layout

The `docs/` directory uses numeric prefixes for ordering. Top-level sections use 4-digit zero-padded prefixes with a step of 10:

```
docs/
  0020-a-guide-to-writing.md        (standalone file, no subdirectory)
  0030-netherlands/                  (directory with index.md + child files)
  0040-finding-work/
  0050-problem-solving/
  0060-home-errands/
  0070-projects/
  0080-phenomena/
  0090-soft-skills/
  0100-tech/
  0110-problems-and-questions.md     (standalone file)
  0120-games/
  0130-drones/
  0140-photography-and-cinematography/
  0150-sports/
  0160-observations/
  0170-books/
  0180-movies-and-series/
  0190-personal-finance.md           (standalone file)
  0200-3d-printing.md                (standalone file)
  0210-travel/
  0220-cameras.md                    (standalone file)
  0220-cars/
  9900-internal-utilities/
```

### Naming Conventions

- **Top-level directories/files**: 4-digit prefix, step of 10: `0030-`, `0040-`, ..., `0220-`. `9900-` is reserved for internal utilities (sorted last).
- **Child files within sections**: 3-digit prefix, step of 10: `010-`, `020-`, `030-`.
- **Slugs**: kebab-case: `buying-a-car`, `useful-apps-and-sites`.
- **File extension**: Always `.md` (no `.mdx` files exist).
- **Every directory has an `index.md`**: This is the category landing page.
- **Standalone files**: Topics with no sub-pages exist as single `.md` files at the top level (no directory needed).
- **Nesting**: Up to 4 levels deep (e.g., `0100-tech/010-docusaurus/010-custom-react-components/010-child-pages.md`).

### Creating New Files

When adding a new file:

1. Pick the next available numeric prefix (increment by 10 from the last sibling).
2. Use kebab-case for the slug.
3. **Default to a standalone `.md` file** unless the user indicates sub-pages are needed. Only create a directory with `index.md` when the topic will have child pages.
4. If creating a new directory, always add an `index.md` inside it.

</directory_structure>

---

## Frontmatter

<frontmatter>

Frontmatter is **almost never used**. Ordering is controlled entirely by filename prefixes, and titles come from the H1 heading. Do not add `sidebar_position`, `title`, `description`, `tags`, `keywords`, `slug`, or `sidebar_label`.

The only frontmatter field in the codebase is `toc_max_heading_level`, used on pages with deep heading hierarchies (H4+):

```yaml
---
toc_max_heading_level: 4
---
```

Only add it if the page uses H4 or deeper headings that readers need in the table of contents.

</frontmatter>

---

## Page Structure

<page_structure>

### Anatomy of a Content Page

1. **Frontmatter** (only if `toc_max_heading_level` is needed).
2. **Import statements** (only if using `ChildPages` or other imported components; `Icon` needs no import).
3. **One H1** (the page title).
4. **Optional vanity domain admonition** (if the page has a custom domain).
5. **Optional TLDR section** (`## TLDR`).
6. **Body content**: H2 for major sections, H3 for sub-sections, H4 sparingly, H5 very rarely.
7. **Optional resource section**: `## Useful Links`, `## Useful Resources`, or `## More Resources`.
8. **No conclusion section.** When content ends, the document ends.
9. **Reference-style link definitions** at the very bottom of the file (if using reference-style links).

### Content Length

Minimal files are acceptable. A single paragraph, a single link list, or even just `_TBD_` is valid content. There is no minimum length requirement.

**Match the user's level of detail.** If the user provides a sentence, write a sentence. If they provide bullet points, write bullet points. Do not expand a brief input into a comprehensive article. The author decides how much to write; the agent's job is to place content correctly, not to pad it.

### Custom Heading IDs

When a page has multiple headings with the same text, add a custom ID to disambiguate:

```markdown
### Your Questions {#recruiter-interview-your-questions}
### Your Questions {#technical-interview-your-questions}
### Your Questions {#behavioral-interview-your-questions}
```

### Anchor Links

Same-page anchor links can reference any heading:

```markdown
See the [NS](#ns) section for details.
```

</page_structure>

---

## Category/Index Pages

<category_pages>

Every directory has an `index.md`. There are three patterns, depending on how much content the category page needs.

### Pattern A: Minimal Category Page (Most Common)

For categories that just list their children:

```markdown
import ChildPages from '@site/src/components/child-pages';

# Category Name

## Table of Contents

<ChildPages depth={2} />
```

Use `depth={2}` by default. Use `depth={3}` for large sections with deep nesting (like Tech).

### Pattern B: Introduction + ChildPages

For categories that need context before the listing:

```markdown
import ChildPages from '@site/src/components/child-pages';

# Category Name

Brief introduction paragraph.

:::note
Optional admonition for disclaimers or context.
:::

## Table of Contents

<ChildPages depth={2} />
```

### Pattern C: Content-Heavy Category Page

For categories where the index page itself has substantial content, with child pages listed at the end under `## Read More`:

```markdown
import ChildPages from '@site/src/components/child-pages';

# Category Name

[... extensive content with multiple H2/H3 sections ...]

## Read More

<ChildPages depth={2} />
```

This pattern is used when the category page doubles as the main content page (e.g., `interviewing/index.md`, `preparing-for-applying/index.md`).

</category_pages>

---

## Adding Links and Tools (Primary Use Case)

When the user asks to "add" a link, tool, or resource:

1. **Read the target file first** to see which link pattern it uses.
2. **Match the existing pattern** on that page. Different sections on the same page can use different patterns, but each section should be internally consistent.
3. **Do not invent descriptions.** If the page format requires a description and the user didn't supply one, ask.
4. **Never add a reference-style definition without a corresponding inline reference.**

<link_patterns>

### Link Pattern 1: Reference-Style Links in Prose

The most common pattern. Links are woven into sentences, with `[label]: url` definitions at the bottom of the file.

```markdown
You can order a personal OV-Chipkaart from [the ov-chipkaart website][ov-chipkaart]. Or you can
get one [by ordering a subscription from NS][ns-flex].

<!-- at bottom of file -->
[ov-chipkaart]: https://www.ov-chipkaart.nl/en/
[ns-flex]: https://www.ns.nl/en/nsflex/webshop#/abonnementen/lijst
```

Label conventions: lowercase hyphen-separated (`[ns-flex]`, `[sixt-share]`) or proper name as-is (`[Revolut]`, `[Independer]`).

### Link Pattern 2: Reference-Style Link Lists

Plain lists where each item is a reference-style link, sometimes with a parenthetical annotation. Definitions at bottom of file.

```markdown
- [Sixt Share][sixt-share] (Used)
- [Share Now][share-now] (Used)
- [MyWheels][mywheels] (Used)
- [SnappCar][snappcar]

<!-- at bottom of file -->
[sixt-share]: https://www.sixt.nl/sixt-share/
[share-now]: https://www.share-now.com/nl/en/
[mywheels]: https://mywheels.nl/
[snappcar]: https://www.snappcar.nl/
```

### Link Pattern 3: FontAwesome Icon Links

For links to known platforms (GitHub, Reddit, YouTube, Telegram, etc.). Always inline URLs, never reference-style. The `<Icon>` component is globally available (no import needed).

```markdown
- [<Icon icon="fa-brands fa-github" size="lg" /> SRE Interviewing Questions](https://github.com/michaelkkehoe/sre-interview)
- [<Icon icon="fa-brands fa-telegram" size="lg" /> TechImmigrants](https://t.me/TechImmigrants)
- [<Icon icon="fa-brands fa-youtube" size="lg" /> Channel Name](https://youtube.com/c/ChannelName)
- [<Icon icon="fa-brands fa-reddit" size="lg" /> r/Netherlands](https://reddit.com/r/Netherlands)
```

Icon links can also appear inline within prose:

```markdown
You can use [<Icon icon="fa-brands fa-medium" size="lg" /> pyramid principle](https://medium.com/...) to structure your answers.
```

Common icons (always prefixed with `fa-brands`): `fa-github`, `fa-reddit`, `fa-youtube`, `fa-telegram`, `fa-discord`, `fa-linkedin`, `fa-stack-overflow`, `fa-twitter`, `fa-medium`, `fa-wikipedia`, `fa-y-combinator`, `fa-goodreads`

### Link Pattern 4: Nested/Hierarchical Icon Links

A parent entity with indented child links for different platform presences.

```markdown
- [<Icon icon="fa-brands fa-telegram" size="lg" /> TechImmigrants](https://t.me/TechImmigrants)
  - [<Icon icon="fa-brands fa-youtube" size="lg" /> Youtube Channel](https://youtube.com/c/TechImmigrants)
  - [<Icon icon="fa-brands fa-discord" size="lg" /> Discord Server](https://discord.gg/dkSW42E6UN)
  - [<Icon icon="fa-brands fa-linkedin" size="lg" /> LinkedIn Page](https://www.linkedin.com/company/techimmigrants/)
```

### Link Pattern 5: Plain Inline Links

Standard Markdown links in prose or lists. No reference-style definitions, no icons.

```markdown
- [A Guide to the Kubernetes Networking Model](https://sookocheff.com/post/kubernetes/understanding-kubernetes-networking-model/)
```

### Link Pattern 6: App/Site Lists with Platform Sub-Links

For apps with multiple platform presences. The main link is followed by indented platform links:

```markdown
- [Buienradar](https://www.buienradar.nl/)
  - [Android](https://play.google.com/store/apps/details?id=com.supportware.Buienradar)
  - [iOS](https://apps.apple.com/nl/app/buienradar-weer/id621542526)
```

Some entries include a brief description after the link:

```markdown
- [Too Good To Go](https://toogoodtogo.nl/en): Buy food that would otherwise be thrown away
  - [Android](https://play.google.com/store/apps/details?id=com.app.tgtg)
  - [iOS](https://apps.apple.com/DK/app/id1060683933)
```

### Link Pattern 7: Bold-Link + Colon + Description

Rare. Bold the name as a link, colon, then first-person usage context.

```markdown
- **[LibRedirect](https://addons.mozilla.org/en-US/firefox/addon/libredirect/)**: I use it in my phone to redirect Twitter links to nitter.
```

</link_patterns>

### How to Choose a Pattern

- **Look at the existing file.** Always match what's already there.
- If the section uses reference-style links, add reference-style links.
- If the section uses icon links, add icon links.
- If the section lists apps with Android/iOS links, follow that pattern.
- If the file has no existing links to match, use reference-style (Pattern 1 or 2) for most content, or icon links (Pattern 3) for platform-specific link lists.

---

## Writing Style

<voice_and_tone>

### Voice and Tone

Write like a knowledgeable friend sharing what they know. Be direct, practical, honest.

- GOOD: "I've found that applying with a referral works best."
- GOOD: "You can compare electricity providers on this site."
- BAD: "It is widely acknowledged that referral-based applications tend to yield superior outcomes."
- BAD: "Hey guys! Let me walk you through this awesome trick!"

Use contractions naturally: "it's", "don't", "you'll", "I've", "can't".

</voice_and_tone>

### Person

- **First person ("I", "my")**: Personal experience and opinions.
- **Second person ("you")**: Instructions and advice.
- **"We"**: Sparingly, only when walking through a process together.

### Honesty

- Never present personal experience as universal truth. Say "Based on my experience..." or "From what I've heard..."
- Say "I don't have experience with this" rather than guessing.
- Mark unverified opinions with `[Hunch]` in reference-style guides (see [Hunch Convention](#hunch-convention)).
- Use `_TBD_` for sections not yet written. Incomplete content is OK.

#### Hunch Convention

On pages with subjective or unverified opinions, mark them with `[Hunch]`. Add a `:::note` disclaimer at the top of the page explaining the convention:

```markdown
:::note
Some of the points are just my hunches and I don't have solid evidence for them, so I marked them with `[Hunch]`.
:::
```

Use `[Hunch]` inline:

```markdown
- [Hunch] Business cars have a good maintenance history but are not necessarily well looked after.
```

Or in parenthetical form:

```markdown
- (For older cars) Do you prefer more reliable brands ([Hunch] like Toyota)?
```

---

## Headings

Use **AP title-style capitalization** (enforced by Vale).

Capitalize most words. Lowercase: a, an, the, in, of, to, for, on, at, by, with, and, but, or, nor.

- CORRECT: "Finding Work You Enjoy"
- CORRECT: "How to Set Up a Development Environment"
- WRONG: "Finding work you enjoy"
- WRONG: "How To Set Up A Development Environment"

---

## Lists

- **Unordered lists** for non-sequential items.
- **Ordered lists** only for sequential steps. Use repeating `1.` for auto-numbering:
  ```markdown
  1. First step
  1. Second step
  1. Third step
  ```
- **Bold the key term** when defining or categorizing:
  - `- **Electricity**: You can compare providers on energievergelijken.nl.`
  - `- **Mortgage Advisor**: Price range or description.`
  - `- **BOVAG Guarantee**: [Hunch] I would feel more confident...`

---

## Admonitions

Use Docusaurus admonition syntax. Keep to 1-3 sentences. Always leave a blank line after `:::type` and before the closing `:::`.

| Type | When |
|------|------|
| `:::tip` | Practical advice, money/time-saving tips. Most frequently used. |
| `:::info` | Supplementary info, alternative access (vanity domains). |
| `:::note` | Disclaimers, context, caveats, personal experience qualifiers. |
| `:::caution` | Risks or potential problems. |
| `:::warning` | Serious concerns. Sparingly. |
| `:::danger` | Destructive/irreversible actions. Very rare. |

Example:

```markdown
:::note

These are based on my experience coming from Iran. Your situation may differ.

:::
```

### Vanity Domain Admonition

Pages with custom vanity domains use this pattern immediately after the H1:

```markdown
:::info

You can access to this page from [ohshitpython.com](https://ohshitpython.com) or [ohshit.foo/python](https://ohshit.foo/python).

:::
```

---

## Blockquotes

Use blockquotes for quoting external sources. For attributed quotes, escape the dash before the attribution:

```markdown
> This is why we can't have nice things.
>
> \- The Internet
```

For conversational examples or suggested responses:

```markdown
> I'm not actively looking for a new job. But I'm open to new opportunities.
```

When a blockquote contains verbatim external text (tweets, Reddit posts, etc.) with words Vale flags that the author did not write and cannot fix, wrap it with Vale suppression comments:

```markdown
<!-- vale off -->
> Verbatim external quote with unconventional spelling or jargon.
<!-- vale on -->
```

---

## Sentences and Transitions

- Keep sentences **short to medium** (15-30 words). Break complex info into lists.
- Use **"So,"** as a casual transition. **"Also,"** occasionally. **"On top of that"** for additions. **"On the other hand"** for contrast.
- Transitions between sections are implicit (headings do the work). No bridge paragraphs.
- NEVER use: "Furthermore", "Moreover", "Additionally", "In conclusion".

---

## Technical Language

- Use the correct technical term: "BSN", "SEPA Direct Debit", "OODA loop".
- Explain terms on first use: "Your BSN, which is assigned to you by the municipality".
- Include Dutch terms with translations for Netherlands content: "huisarts (GP)", "eigen risico (own risk)".

---

## Embedded Media

### YouTube Videos

YouTube videos use this exact format:

```html
<iframe class="youtube-video" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

Variations:
- With a tracking parameter: `https://www.youtube.com/embed/VIDEO_ID?si=TRACKING_ID`
- With a start time: `https://www.youtube.com/embed/VIDEO_ID?si=TRACKING_ID&start=15702`
- Playlists: `https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID`

Introduce each video with a brief sentence before the embed when context is needed. On pages that are primarily video collections (e.g., growth mindset, Nier game series), videos can appear without introductory text.

### Wikimedia Images

For properly attributed Wikimedia images, use `<figure>` with `<figcaption>`:

```markdown
<figure>
[![Alt text](IMAGE_URL)](SOURCE_URL)
<figcaption>
By [Author](AUTHOR_URL) - [Own work](WORK_URL), [License](LICENSE_URL), [Link](LINK_URL)
</figcaption>
</figure>
```

---

## Internal Links

Use relative Markdown paths: `./040-banking.md`, `../0050-problem-solving/020-power-law.md`.

---

## Code Blocks

- Always tag with the language: ` ```shell `, ` ```css `, ` ```python `, ` ```perl `, ` ```json `, etc.
- Use `ALL_CAPS` for placeholder variables.
- Add comments in longer scripts.
- When a code block is inside a numbered list, indent it by 3 spaces to maintain list continuation.

---

## MDX Components

<mdx_components>

### Components That Need an Import

These must have an import statement at the top of the file (after frontmatter, before the H1):

| Component | Import | Usage |
|-----------|--------|-------|
| `ChildPages` | `import ChildPages from '@site/src/components/child-pages';` | `<ChildPages depth={2} />` -- auto-lists child pages in category index pages. Use `depth={2}` by default, `depth={3}` for deep sections. |
| `RecentUpdates` | `import RecentUpdates from '@site/src/components/recent-updates';` | `<RecentUpdates maxItems={10} showDate={true} />` -- only used on the docs root `index.md`. |
| `WikimediaToMarkdown` | `import WikimediaToMarkdown from '@site/src/components/wikimedia-markdown';` | `<WikimediaToMarkdown />` -- only used on the internal utilities page. |

### Global Components (No Import Needed)

| Component | Usage |
|-----------|-------|
| `Icon` | `<Icon icon="fa-brands fa-github" size="lg" />` -- always embedded inside markdown link text. Provided globally via the theme's `MDXComponents` override. |

</mdx_components>

---

## Project Pages

<project_pages>

Pages in `docs/0070-projects/` follow a specific structure:

```markdown
# Project Name

## Why

Why this project exists.

## What

What the project aims to achieve (goals as a bullet list).

## Challenges

- ▶️ Active challenge description.
  - ☑️ Solution or mitigation applied.
  - ⏹️ Proposed solution not yet implemented.
    - Additional context indented further.
- ▶️ Another active challenge.
- ~~▶️ Resolved or abandoned challenge.~~
```

### Challenge Tracking Emoji

| Emoji | Meaning |
|-------|---------|
| `▶️` | Active challenge or problem identified |
| `☑️` | Solution implemented or resolved |
| `⏹️` | Proposed solution, not yet attempted |
| `~~▶️~~` | Abandoned or fully resolved challenge (struck through) |

These emoji are nested: a `▶️` challenge contains `☑️` or `⏹️` sub-items as children. Additional context can be indented further under any item.

</project_pages>

---

## Recurring Section Patterns

<section_patterns>

### TLDR Section

Some pages open with a `## TLDR` section -- a brief summary (usually a bullet list) before the main content.

### Resource Sections

End-of-page link collections use one of these headings (never "References" or "Further Reading"):

- `## Useful Links`
- `## Useful Resources`
- `## More Resources`
- `## Other Useful Resources`

### FAQ Section

Rarely used. A `## FAQ` section with questions as H3 headings.

</section_patterns>

---

## HTML Comments

Use `<!-- TODO: ... -->` for author reminders or internal notes that shouldn't render:

```markdown
<!-- TODO: Update this after testing -->
```

---

<prohibited>

## Prohibited Patterns

- No emoji in prose (only `▶️/☑️/⏹️` for challenge tracking).
- No "In this article, we will explore..." or meta-commentary about the document.
- No filler transitions between sections.
- No passive voice when active is natural. "I configured the server" not "The server was configured".
- Never use: "leverage", "synergy", "utilize", "streamline".
- Never use: "It should be noted that", "It is worth mentioning".
- No "References" or "Further Reading" sections. Use `## Useful Links` or similar (see [Recurring Section Patterns](#recurring-section-patterns)).
- Never invent descriptions for tools, apps, or sites.
- No `<details>`/`<summary>`, `<Tabs>`/`<TabItem>`, or Mermaid diagrams. These are not used in this codebase.
- No `sidebar_position`, `title`, `tags`, `description`, or other unnecessary frontmatter fields.
- No unsolicited options or "next steps" lists after completing a task. Do the work, confirm it's done, stop.

</prohibited>

---

## Committing

<commit_rules>

**Do NOT commit unless the user explicitly asks.**

When asked, use conventional commit format: `type(scope): description`.

### Type

| Type | When |
|------|------|
| `docs` | Content changes |
| `feat` | New site features |
| `fix` | Corrections |
| `chore` | Config/tooling |

### Scope

Derive from file path. Use ` > ` as separator. Strip numeric prefixes. **Always include the full path hierarchy** — do not skip parent directories.

- `docs/0100-tech/130-workstation/010-common.md` becomes `tech > workstation > common`
- `docs/0100-tech/200-yubikey.md` becomes `tech > yubikey`
- `docs/0140-photography-and-cinematography/080-lightroom.md` becomes `photography and cinematography > lightroom`

### Description

Lowercase, imperative, concise. No period. Describe only what changed.

### Examples

```
docs(tech > home assistant): add Toon device integration
docs(netherlands > transportation): add Felyx moped sharing link
fix(docs): remove UTF-8 BOM from writing guide
```

If the user provides a commit message, use it **verbatim**.

</commit_rules>

---

## Validation

After any change, run:

```bash
npm run build
```

This is the primary correctness check. It fails on broken links. There are no unit tests.

---

## Quick Reference: Adding Common Content Types

<quick_reference>

### Adding a Link to an Existing Page

1. Read the file.
2. Identify which link pattern the section uses.
3. Add the link matching that pattern.
4. If reference-style, add the `[label]: url` definition at the bottom of the file.
5. Run `npm run build`.

### Adding a New Page to an Existing Section

1. Pick the next numeric prefix (increment by 10).
2. Create a standalone file: `NNN-slug-name.md`. Do not create a directory unless sub-pages are needed.
3. Start with an H1 title. No frontmatter unless `toc_max_heading_level` is needed.
4. Add content following the writing style guide, matching the user's level of detail.
5. Run `npm run build`.

### Adding a New Section (Directory)

1. Pick the next numeric prefix at the appropriate level.
2. Create the directory: `NNNN-slug-name/`.
3. Create `index.md` inside it using Pattern A (minimal category page).
4. Add child files as needed.
5. Run `npm run build`.

### Adding an App with Platform Links

```markdown
- [App Name](https://app.url/): Brief description
  - [Android](https://play.google.com/store/apps/details?id=...)
  - [iOS](https://apps.apple.com/...)
```

### Adding a YouTube Video

```markdown
Brief introductory sentence:

<iframe class="youtube-video" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

### Adding an Icon Link

```markdown
- [<Icon icon="fa-brands fa-github" size="lg" /> Display Text](https://github.com/user/repo)
```

No import needed. Always use `size="lg"`. Always use `fa-brands` prefix.

</quick_reference>
