---
sidebar_position: 10
---

# Public Notes

## Challenges

- ▶️ Keeping people updated on changes and new entries is not as easy as when there's a timeline.
  - ☑️ Periodically send out a newsletter.
- ▶️ Docusaurus doesn't have a built in comment system.
  - ⏹️ Look into the solutions discussed in [here](https://docusaurus.io/feature-requests/p/comments-in-documents-or-blogs).
- ▶️ Documents don't have unique IDs. If they did, moving them would be much easier and the links to them would be more robust.
 - ⏹️ [Assign UIDs to documents](#assigning-uid-to-documents).
- ▶️ Relocating documents breaks their links.
  - ⏹️ [Assign UIDs to documents](#assigning-uid-to-documents).
- ▶️ Markdown links can derive their titles from the linked document, similar to the functionality provided by Confluence.
- ▶️ If we can track a document, then we can create an update history for it.
- ▶️ Keeping writing format consistent. E.g. period at the end of a sentence, capitalization, etc.
- ▶️ Automatically add icons to external links.

## To-Do

### Assigning UID to documents

#### Pros

- Reorganizing documents won't break links.
- IDs are more reliable for integration with a comment system.

#### Actions

- Create a script that will assign a UID to each document.
- Create a script that will generate redirects for documents that have been moved.
- Add a test to the CI that will make sure new documents have a UID.

### Search

#### Actions

- Add a search solution from [the available options](https://docusaurus.io/docs/search).
