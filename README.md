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

Deployment is automated via GitHub Actions on push to `main`.

## Style

Prose linting is handled by [Vale](https://vale.sh) to enforce a consistent style across the documentation.
