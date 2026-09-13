# Public Notes

My public second brain — documentation of my ideas, thoughts, and experiences.

Published at [publicnotes.io](https://publicnotes.io).

## Development

Built with [Docusaurus 3](https://docusaurus.io/).

```shell
npm ci           # install dependencies
npm start        # local dev server
npm run build    # production build (primary validation — fails on broken links)
```

Document URL commands:

```shell
npm run check:document-urls     # normal validation of document IDs, canonical URLs, and aliases
npm run verify:redirects        # verify generated legacy redirects after a build
npm run assign-uids -- --capture-aliases  # completed one-time migration; do not repeat
```

New documents need a unique `uid`, `slug: /d/<uid>`, and `aliases: []`. Existing URL frontmatter is permanent.

Deployment is automated via GitHub Actions on push to `main`.

## Style

Prose linting is handled by [Vale](https://vale.sh) to enforce a consistent style across the documentation.
