---
sidebar_position: 10
---
import WikimediaToMarkdown from '@site/src/components/wikimedia-markdown';

# Wikimedia Embedding in Markdown

If you need to embed a media from Wikimedia, you can use the following tool to convert the HTML of the embed code to Markdown:

1. Open the media in the media viewer.
   1. From Wikipedia articles, click on the media.
   1. From Wikimedia Commons, click on `Open in Media Viewer`.
1. Select the `HTML` tab.
1. Copy the HTML code.
1. Paste the HTML code in the following tool.

:::note

The embed code from the `Media Viewer` includes the attribution. while the embedding code from `Wikimedia Commons` does not include the attribution. That's why the code from `Media Viewer` should be used.

:::

---

## The Tool

Enter the HTML code in the text area below:

<WikimediaToMarkdown />
