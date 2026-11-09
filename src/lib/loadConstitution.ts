import { assetUrl } from "../data/siteContent";
import { pageBlocks, type PdfBlock } from "./pdfText.mjs";

export type ConstitutionPageText = PdfBlock[];

export async function loadConstitution(): Promise<ConstitutionPageText[]> {
  const [{ getDocument, GlobalWorkerOptions }, { default: workerUrl }] = await Promise.all([
    import("pdfjs-dist"),
    import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
  ]);
  GlobalWorkerOptions.workerSrc = workerUrl;
  const response = await fetch(assetUrl("documents/constitution.pdf"), { cache: "no-store" });
  if (!response.ok) throw new Error("The Constitution PDF could not be loaded.");
  const task = getDocument({ data: await response.arrayBuffer(), useSystemFonts: true });
  const pdf = await task.promise;
  try {
    const pages: ConstitutionPageText[] = [];
    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n);
      const text = await page.getTextContent();
      pages.push(pageBlocks(text.items));
      page.cleanup();
    }
    return pages;
  } finally {
    await task.destroy();
  }
}
