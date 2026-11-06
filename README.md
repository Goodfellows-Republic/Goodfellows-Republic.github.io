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

The constitution is transcribed from the supplied 27-page PDF, retained unchanged at `public/documents/constitution.pdf`. The privacy policy and terms cover both the website and Discord bot; bot records are retained indefinitely, with privacy requests handled through Discord tickets. These pages document the supplied operational policy; this repository does not contain or modify the bot implementation.
