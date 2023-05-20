# r4ai.github.io 😴

This repository contains following sites.

- /posts
- /works

## Development

### Requirements

using docker:

- [Docker](https://www.docker.com/)

without docker:

- [Node.js](https://nodejs.org/en/) >= 18
- [pnpm](https://pnpm.js.org/) >= 5

### Commands

using docker:

```bash
# setup docker
pnpm i && pnpm docker:setup

# start dev server
pnpm docker:dev

# build
pnpm docker:export
```

without docker:

```bash
# setup (install dependencies and playwright)
pnpm i && pnpx playwright install --with-deps chromium

# start dev server
pnpm dev

# lint and format
pnpm lint:fix && pnpm format

# build
pnpm export
```
