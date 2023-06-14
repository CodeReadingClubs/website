# CRC Website

This is a [SvelteKit](https://kit.svelte.dev/docs/introduction) and TypeScript project.

[Netlify staging site ▶](https://crc-website.netlify.app/)

## Getting Started

Install the project with yarn package manager:

```bash
yarn
```

Create a .env and add the API key to retrieve event information from Eventbrite, and add any additional event IDs to retrieve those too.

```bash
cp .env.example .env
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev --open
```

## Building

This should be handled automatically by our hosting, but to create a production version outside of that environment:

```bash
yarn run build
```

You can preview the production build with `npm run preview`.
