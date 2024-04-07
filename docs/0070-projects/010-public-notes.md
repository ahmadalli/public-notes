---
sidebar_position: 10
---

# Public Notes

## Why

### Why Not a Blog?

I've always valued the idea of sharing things publicly. [There are limited number of keystrokes that you get in life](https://www.hanselman.com/blog/do-they-deserve-the-gift-of-your-keystrokes). Recently, it's been hard for me to express myself in a linear format and I find some aspects of blogging limiting:

- I find it acceptable to have documentation entries that are incomplete and constantly evolving, but the same isn't typically true for blog posts unless it's explicitly stated within them. Having this freedom allows me to iterate and improve without worrying too much about completeness.
- A timeline format doesn't effectively prioritize topics. Core topics often lose visibility over time as newer posts displace them at the top of the timeline.

So, I've decided to try something new. As part of my job, I write a lot of documentation, and this looks like a viable path to try: to document my own life.

## What

I aim to achieve the following goals with this project:

- To write about and define my model of the world, my beliefs, and my experiences, and to build on these foundations.
- To share insights, or knowledge or findings that I believe others might find valuable.
- A personal note space, where I can keep useful links, technical stuff, and other notes.

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
