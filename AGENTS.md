# AGENTS.md

<critical_rules>

## CRITICAL: Rules You Must Always Follow

1. **NEVER commit unless the user explicitly asks you to commit.** Editing and committing are separate actions. Wait for the user to review and request a commit.
2. **NEVER invent personal descriptions.** If adding a tool, app, or link and you lack the author's first-person context (how they use it, on which device, why), ask the user. Do not guess.
3. **NEVER add emoji to prose.** The only emoji allowed are `▶️`, `☑️`, `⏹️` for project challenge tracking.
4. **Always run `npm run build` before considering any change complete.** This is the primary validation. It catches broken links (`onBrokenLinks: "throw"`).
5. **Only edit the file the user specifies.** If unsure which file to edit, ask.
6. **Use `npm`, not yarn or pnpm.** A `package-lock.json` is present.
7. **Do NOT over-write content.** Match the user's level of detail. If the user gives you a sentence, write a sentence -- not a comprehensive article. This is a personal knowledge base; the author decides how much to write.
8. **Do NOT offer unsolicited options or next steps.** Do the task, confirm it is done, stop. Only suggest follow-up actions if there is an actual problem to resolve (e.g., a build failure).
9. **Clean up your own mistakes immediately.** If you create a wrong file, remove it in the same step as creating the correct one. Never leave duplicate or leftover files.
10. **Read `.agents/CONTENT.md` before any content task.** Content tasks (adding/editing files in `docs/` or `blog/`) are the most common task type. Before starting, read `.agents/CONTENT.md` to follow the file naming, frontmatter, structure, and commit message rules exactly.

</critical_rules>

---

## Companion Files

This repo has three specialized instruction files. Use the right one for the task:

| File | When to use |
|------|------------|
| **`.agents/CONTENT.md`** | Adding or editing content in `docs/` or `blog/`. Writing style, link patterns, commit format. **This is the most common task.** |
| **`.agents/ARCHITECTURE.md`** | Development tasks: components, theme overrides, CI/CD, code style, Docusaurus config, Vale linting. |
| **`.agents/UPGRADE.md`** | Upgrading Docusaurus to a new version. |

---

## Project Overview

<project_context>

- **What**: Docusaurus 3 static documentation site (personal knowledge base)
- **URL**: `https://publicnotes.io`
- **Content**: Markdown/MDX in `docs/` and `blog/`
- **Custom code**: React components and theme overrides in `src/`
- **Forward compat**: `future.v4: true` flag is set for Docusaurus v4
- **Runtime**: Node.js >= 20
- **Package manager**: npm
- **Languages**: TypeScript (config, components), JavaScript (theme overrides), Markdown/MDX (content)

For project structure, commands, and code style details, see `.agents/ARCHITECTURE.md`.

</project_context>

---

## Important Notes

<important_notes>

- Content tone is first-person, conversational, practical.
- **Ask before writing personal content**: If you need to add a tool, app, or personal experience entry and lack the first-person context, ask the user rather than inventing a generic description.

</important_notes>
