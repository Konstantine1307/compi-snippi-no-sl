# Compi Snippy Documentation

[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-%2300C7B7)](https://compoguide.netlify.app)

Compi Snippy is a documentation site built with Astro, featuring a modern design powered by Tailwind CSS v4. Visit the live site at [compoguide.netlify.app](https://compoguide.netlify.app).

## Features

- 📚 Clear and organized documentation
- 🎨 Beautiful styling with Tailwind CSS
- ✨ Live code examples with `astro-live-code`
- 📱 Fully responsive design
- 🚀 Fast and optimized with Astro
- 🔎 Search powered by Pagefind (generated on build)

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   │   └── global.css
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Astro Content Collections look for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Styling

Tailwind CSS v4 is integrated via `@tailwindcss/vite` in `astro.config.mjs`.

Global styles live in `src/styles/global.css` and are imported by `src/layouts/BaseLayout.astro`.

This project intentionally does not use a `tailwind.config.*` file. For one-off values (e.g. z-index layers), it uses Tailwind v4 arbitrary values and/or CSS variables.

## Search (Pagefind)

Search indexes are generated during `npm run build` via the `postbuild` script (`pagefind --site dist`).

In `npm run dev`, the search modal will open, but the Pagefind UI will not load because `/pagefind/*` assets are only present after a production build.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
