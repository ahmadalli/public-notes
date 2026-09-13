---
uid: 3192x5
slug: /d/3192x5
aliases:
  - /tech/docusaurus/custom-react-components/child-pages
---
# Child Pages

This components lists all the child pages of the current page with the depth of `depth` prop, which is 1 by default.

You can see the component in [`child-pages.tsx](https://github.com/ahmadalli/public-notes/tree/main/src/components/child-pages.tsx).

## Usage

```md
import ChildPages from '@site/src/components/child-pages';

<ChildPages />

// or with depth
<ChildPages depth={2} />
```
