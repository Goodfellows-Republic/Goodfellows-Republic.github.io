import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const IMAGE_RE = /\.(png|jpe?g|gif|tiff|webp|avif|svg)$/i

// Cascade layer order for the bundled CSS. Tailwind declares
// `theme, base, components, utilities`; this inserts `vitepress` between base
// and utilities, so:
//   - above base: preflight's `*{margin:0}` cannot flatten VitePress's prose
//     spacing and typography;
//   - below utilities: any Tailwind utility beats any VitePress theme rule,
//     regardless of specificity.
// It has to be emitted in front of the first `@layer vitepress{...}` block —
// a layer's priority is fixed by its first appearance, and VitePress's CSS is
// bundled ahead of custom.css, so declaring it there is too late.
const LAYER_ORDER = '@layer theme, base, vitepress, components, utilities;'

// vite-plugin-image-optimizer keys its cache by file *path*, not by content:
// replace a screenshot and the stale compressed copy keeps being reused. Fold a
// hash of the source images into the cache directory, so editing an image gets
// a fresh directory and is recompressed instead of serving the stale copy.
function hashImages(dir) {
  const hash = createHash('sha256')
  const walk = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (IMAGE_RE.test(entry.name)) {
        hash.update(relative(dir, full))
        hash.update(readFileSync(full))
      }
    }
  }
  if (existsSync(dir)) walk(dir)
  return hash.digest('hex').slice(0, 12)
}

// Throwaway locally, cacheable on CI.
const imageCacheDir = `node_modules/.cache/vite-plugin-image-optimizer/${hashImages('public')}`

export default defineConfig({
  title: 'Goodfellows Republic',
  description:
    'Discover Goodfellows Republic, our national identity, shared values, and civic life.',
  lang: 'en-US',
  // Start in light mode; an explicitly saved theme choice still wins.
  appearance: { initialValue: 'light' },
  base: '/',
  outDir: 'dist',
  cleanUrls: true,
  lastUpdated: true,
  // Repository docs that are not part of the website
  srcExclude: ['COC.md', 'CONTRIBUTE.md', 'README.md'],
  head: [
    // The favicon is the brand mark itself: the nav logo and hero mark already
    // pull https://github.com/Goodfellows-Republic.png?size=512, so pointing the icon at the same URL means the
    // browser reuses that cached response instead of fetching a second file.
    ['link', { rel: 'icon', type: 'image/png', href: 'https://github.com/Goodfellows-Republic.png?size=512' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap',
      },
    ],
    ['meta', { property: 'og:title', content: 'Goodfellows Republic' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Goodfellows Republic — a country, a community, a shared future.',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Goodfellows Republic' }],
    ['meta', { property: 'og:url', content: 'https://goodfellows-republic.github.io/' }],
    // Brand icon (not a per-project image) — absolute URL so scrapers that
    // don't resolve relative paths still pick it up.
    [
      'meta',
      { property: 'og:image', content: 'https://github.com/Goodfellows-Republic.png?size=512' },
    ],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '512' }],
    ['meta', { property: 'og:image:height', content: '512' }],
    [
      'meta',
      { property: 'og:image:alt', content: 'Goodfellows Republic organization logo' },
    ],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Goodfellows Republic' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'Goodfellows Republic — a country, a community, a shared future.',
      },
    ],
    [
      'meta',
      { name: 'twitter:image', content: 'https://github.com/Goodfellows-Republic.png?size=512' },
    ],
    ['meta', { name: 'theme-color', content: '#23291e' }],

  ],
  vite: {
    plugins: [
      tailwindcss(),
      // VitePress's theme CSS is unlayered, so it outranks every Tailwind
      // utility no matter the specificity: `.vp-doc a` (0-1-1) beats
      // `.text-brand-foreground` (0-1-0), which painted the download button
      // brand-blue text on a brand-blue fill — invisible in dark mode. The
      // same thing was quietly overriding component headings, margins and
      // weights anywhere a page renders inside .vp-doc.
      //
      // Moving the theme into the `vitepress` layer (see LAYER_ORDER) keeps
      // the cascade inside the theme intact, while making every utility win
      // against it. fonts.css is skipped: it is a remote @import, @import
      // inside @layer is not handled everywhere, and fonts compete with
      // nothing.
      {
        name: 'vitepress-theme-layer',
        enforce: 'pre',
        transform(code, id) {
          if (!/node_modules[/\\]vitepress[/\\].*\.css$/.test(id)) return
          if (id.endsWith('fonts.css')) return
          return `${LAYER_ORDER}\n@layer vitepress {\n${code}\n}`
        },
      },
      // Compress every image that ends up in the build: imported assets plus
      // everything in `public/` (brand art, showcase screenshots). `sharp` and
      // `svgo` are separate peer installs, both pinned in devDependencies.
      ViteImageOptimizer({
        // Every image on the site lives in public/ and is copied verbatim by
        // Vite — without this the brand + showcase PNGs ship untouched.
        includePublic: true,
        logStats: true,
        // Screenshots are photography-like: a light lossy pass is ~10x smaller
        // than lossless PNG and visually identical at display size.
        png: { quality: 82, compressionLevel: 9, effort: 6 },
        jpeg: { quality: 82, mozjpeg: true },
        jpg: { quality: 82, mozjpeg: true },
        webp: { quality: 82 },
        avif: { quality: 60 },
        gif: {},
        // Keep ids: the mark's gradients are referenced with url(#...), and
        // minifying them breaks the reference. (`cleanupIds` is the SVGO v4
        // spelling — svgo 3 called it `cleanupIDs`.)
        svg: {
          multipass: true,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupIds: { minify: false, remove: false },
                  convertPathData: false,
                },
              },
            },
            'sortAttrs',
          ],
        },
        // Re-compressing ~5 MB of PNGs on every build is wasteful. The cache is
        // content-hashed above, so it can never hand back a stale image.
        cache: true,
        cacheLocation: imageCacheDir,
      }),
    ],
    server: {
      host: '0.0.0.0',
      // Allow sandbox/preview hosts during local development.
      allowedHosts: ['.e2b.app', 'localhost'],
    },
  },
  themeConfig: {
    logo: 'https://github.com/Goodfellows-Republic.png?size=512',
    siteTitle: 'Goodfellows Republic',
    nav: [
      { text: 'The Republic', link: '/about' },
      { text: 'Constitution', link: '/constitution' },
      { text: 'Our values', link: '/values' },
      { text: 'Civic life', link: '/community' },
      { text: 'Contact', link: '/contact' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Goodfellows-Republic' }],
    search: { provider: 'local' },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
  },

})
