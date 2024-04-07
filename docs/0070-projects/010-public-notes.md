---
sidebar_position: 10
---

# Public Notes

## Challenges

- ▶️ Keeping people updated on changes and new entries isn't as easy as when there's a timeline.
  - ☑️ Periodically send out a newsletter.
  - ⏹️ Use a solution like [RSSHub](https://docs.rsshub.app/en/) to generate an [RSS feed for the docs folder](https://rsshub.app/github/file/ahmadalli/public-notes/main/docs).
    - Look into the possibility of daily and weekly aggregation of changes.
- ▶️ Docusaurus doesn't have a built in comment system.
  - ⏹️ Look into the solutions discussed in [here](https://docusaurus.io/feature-requests/p/comments-in-documents-or-blogs).
- ▶️ Documents don't have unique IDs. If they did, moving them would be much easier and the links to them would be more robust.
 - ⏹️ [Assigning an ID to documents](#assigning-an-id-to-documents).
- ▶️ Relocating documents breaks their links.
  - ⏹️ [Assigning an ID to documents](#assigning-an-id-to-documents).
- ▶️ Markdown links can derive their titles from the linked document, similar to the functionality provided by Confluence.
- ▶️ If we can track a document, then we can create an update history for it.
- ~~▶️ Keeping writing format consistent. For example, period at the end of a sentence, capitalization, etc.~~
- ▶️ Automatically add icons to external links.

### Solutions

#### Styling

[Vale](https://github.com/errata-ai/vale) enforces a consistent style across the documentation.

## To-Do

### Assigning an ID to documents

#### Pros

- Reorganizing documents won't break links.
- IDs are more reliable for integration with a comment system.

#### Actions

- Create a script that will assign an ID to each document.
- Create a script that will generate [plugin-client-redirect](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects) configurations for existing documents.
- Add a test to the CI that will make sure new documents have an ID.

### Search

#### Actions

- Add a search solution from [the available options](https://docusaurus.io/docs/search).

### Vale

- Use packages instead of loading the styles into the repository.
