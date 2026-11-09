# Goodfellows Republic

Official portal for the Goodfellows Republic. Created by redsnicker.

## Constitution PDF

Replace `public/documents/constitution.pdf` with a text-based PDF. Running `npm run dev` or `npm run build` extracts its text into `src/generated/constitution.ts` and bundles the PDF for download.

## Scripts

```bash
npm install
npm run dev
npm test
npm run build
```

## GitHub Pages

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs tests, builds `./dist` with pre-rendered route entrypoints and `404.html`, and deploys automatically to GitHub Pages.
