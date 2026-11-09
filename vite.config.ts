import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { generateConstitution, pdfPath } from "./scripts/constitution.mjs";

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

function constitutionFromPdfPlugin(): Plugin {
  return {
    name: "constitution-from-pdf",
    async buildStart() {
      await generateConstitution();
    },
    configureServer(server) {
      let queue = Promise.resolve();
      const regenerate = (changedPath: string) => {
        if (resolve(changedPath) !== resolve(pdfPath)) return;
        queue = queue
          .then(async () => {
            await generateConstitution();
            server.ws.send({ type: "full-reload" });
          })
          .catch((error: unknown) => {
            const message =
              error instanceof Error ? error.message : String(error);
            server.config.logger.error(
              `Constitution PDF generation failed: ${message}`
            );
          });
      };

      server.watcher.add(pdfPath);
      server.watcher.on("change", regenerate);
      server.watcher.on("add", regenerate);
      server.httpServer?.once("close", () => {
        server.watcher.off("change", regenerate);
        server.watcher.off("add", regenerate);
      });
    },
  };
}

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
    constitutionFromPdfPlugin(),
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
