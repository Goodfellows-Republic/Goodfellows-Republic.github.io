# Goodfellows Republic — Website

An informational country website introducing Goodfellows Republic, its national identity, values, and civic life.

## National palette

The flag has three equal horizontal stripes, top to bottom: white `#FFFFFF`, golden sand `#FFD284`, and forest green `#3E5524`. The interface has two flag-inspired themes: warm ivory and forest green in light mode; charcoal olive, moss, and golden sand in dark mode. Use the navigation theme switch to change modes; your choice is saved in your browser. Without a saved choice, the site defaults to light mode.

## Design

The national masthead, numbered information sections, structured footer, and clear public-information navigation give the site a civic character. Bold typography and an editorial landing-page structure take light inspiration from estonia.ee; its assets, branding, statistics, and country claims are not reused.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

The production preview listens on port 4173. GitHub Pages deployment is configured in `.github/workflows/deploy.yml` for pushes to `main`.

## Pages

Home, About the Republic, Constitution, Our values, Civic life, Contact, Privacy Policy, and Terms of Service. The former software downloads and documentation have been removed.

## Attribution

Adapted from Chest Solutions' website, branch `arena/01a06261-chest-solutions-github-io`, commit `e5fb9d25ac6121d15ef428cf78c6fd346adb078d`. The original MIT license and copyright remain in `LICENSE`. The organization emblem is loaded from the Goodfellows Republic GitHub avatar.

The constitution is automatically extracted from `public/documents/constitution.pdf` during every build. The privacy policy and terms cover both the website and Discord bot; bot records are retained indefinitely, with privacy requests handled through Discord tickets. These pages document the supplied operational policy; this repository does not contain or modify the bot implementation.

## Updating the constitution (no agent required)

1. Replace **`public/documents/constitution.pdf`** with the new constitution, keeping that filename. Use a text-based PDF, or run OCR before uploading a scanned document.
2. Commit the replacement to `main` (or merge a pull request containing it). The existing GitHub Pages workflow runs `npm run build`, which extracts the PDF and publishes the updated reading page and original PDF together.
3. The page count, article contents, headings, and clauses come from the PDF; no manual Markdown editing is needed. A missing, invalid, or non-text page fails the build instead of publishing an empty reading edition. Extraction is not legal interpretation; the original PDF remains available for reference.

Local development: `npm run dev` generates the reading edition on startup and watches the PDF for replacements. `npm run constitution:generate` regenerates it manually if needed. The generated include at `.vitepress/generated/constitution.md` is ignored by Git and recreated on clean builds. The fixed `constitution.md` wrapper should not be replaced.

Run `npm test` for extraction and formatting tests. Node.js 22 is used by deployment. No Python, external API, or AI service is needed.

Official Discord server: https://discord.gg/9TQ76stCZZ
