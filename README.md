# Goodfellows Republic

## Constitution PDF

Replace `public/documents/constitution.pdf` and push the change to your repository. The site reads the deployed PDF directly in the browser whenever the Constitution page opens. No generated text file is used. Use a PDF with selectable text or OCR. Scanned pages without text can still be viewed using the download button.

Changes to repository files must be deployed before visitors can see them. The workflow deploys automatically when you push to `main` or `master`.

## Scripts

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
npm test
npm run build
```

## GitHub Pages

Set Settings, Pages, Source to GitHub Actions. The included workflow detects the Pages URL and base path, tests, builds and deploys the site. Route entry points and a 404 fallback are included.

For a manual build hosted at another location, set `VITE_BASE_PATH` to the URL path and `VITE_SITE_URL` to the full public URL including that path. For example:

```bash
VITE_BASE_PATH=/my-repository/ VITE_SITE_URL=https://example.github.io/my-repository/ npm run build
```

The prebuilt archive uses `https://goodfellows-republic.github.io/` for its sharing image and `/` as its base path. Discord can cache previews, and the final preview layout is controlled by Discord. The inline Discord component embed includes the flag, a forest-green accent, and links to the Constitution, Discord, and GitHub. The Open Graph tags remain available as a fallback. After deployment, use https://discord.com/developers/embeds to check the live preview.
