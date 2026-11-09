import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const STATIC_ROUTES = [
  "about",
  "republic",
  "values",
  "constitution",
  "civic",
  "community",
  "privacy",
  "terms",
];

function githubPagesRoutesPlugin(): Plugin {
  let outDir = "dist";

  return {
    name: "github-pages-routes",
    configResolved(config) {
      outDir = config.build.outDir || "dist";
    },
    async closeBundle() {
      const indexHtmlPath = resolve(outDir, "index.html");
      const indexHtml = await readFile(indexHtmlPath, "utf8");

      await writeFile(resolve(outDir, "404.html"), indexHtml, "utf8");

      await Promise.all(
        STATIC_ROUTES.map(async (route) => {
          const dir = resolve(outDir, route);
          await mkdir(dir, { recursive: true });
          await writeFile(resolve(dir, "index.html"), indexHtml, "utf8");
        })
      );
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    {
      name: "social-metadata",
      transformIndexHtml(html) {
        const siteUrl = (process.env.VITE_SITE_URL || "https://goodfellows-republic.github.io/").replace(/\/+$/, "") + "/";
        return html.replaceAll("%SITE_URL%", siteUrl);
      },
    },
    react(),
    tailwindcss(),
    githubPagesRoutesPlugin(),
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: true,
  },
});
