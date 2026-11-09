import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import {
  generateConstitution,
  pageLines,
  parseConstitution,
  pdfPath,
} from "./constitution.mjs";

test("preserves ligatures split into text items and separates distant columns", () => {
  const item = (str, x, y, width) => ({
    str,
    transform: [1, 0, 0, 1, x, y],
    width,
  });
  assert.deepEqual(
    pageLines([
      item("de", 0, 100, 10),
      item("fi", 10, 100, 5),
      item("ned", 15, 100, 15),
      item("Office:", 0, 80, 30),
      item("Chancellor", 50, 80, 50),
    ]),
    ["defined", "Office: Chancellor"]
  );
});

test("new articles, wrapped headings, and original clause numbers are dynamic", () => {
  const doc = parseConstitution(
    [
      "THE CONSTITUTION OF THE",
      "GOODFELLOWS REPUBLIC",
      "",
      "The Supreme Law of the Goodfellows Republic",
      "",
      "PREAMBLE",
      "",
      "Opening text.",
      "",
      "ARTICLE 22, A NEW",
      "ARTICLE TITLE",
      "",
      "Section 22.1, New section",
      "4. A provision",
      "continued here.",
      "5. Another provision.",
    ],
    5
  );

  assert.equal(doc.title, "The Constitution of the Goodfellows Republic");
  assert.equal(doc.chapters.length, 2);
  assert.equal(doc.chapters[1].id, "article-22");
  assert.equal(doc.chapters[1].eyebrow, "Article 22");
  assert.equal(doc.chapters[1].title, "A New Article Title");
  assert.equal(doc.chapters[1].sections[0].heading, "Section 22.1 — New section");
  assert.deepEqual(doc.chapters[1].sections[0].paragraphs, [
    "4. A provision continued here.",
    "5. Another provision.",
  ]);
});

test("source PDF page count, articles, and sections are generated deterministically", async () => {
  const firstRun = await generateConstitution();
  const pdf = await getDocument({
    data: new Uint8Array(await readFile(pdfPath)),
    useSystemFonts: true,
  }).promise;

  try {
    assert.equal(firstRun.pageCount, pdf.numPages);
    assert.ok(firstRun.chapters.length > 0);

    const chapterIds = new Set(firstRun.chapters.map((c) => c.id));
    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n);
      const lines = pageLines((await page.getTextContent()).items);
      for (const line of lines) {
        const article = /^ARTICLE\s+(\d+)[,. :]/i.exec(line);
        if (article) {
          assert.ok(chapterIds.has(`article-${article[1]}`));
        }
      }
    }
  } finally {
    await pdf.destroy();
  }

  const secondRun = await generateConstitution();
  assert.deepEqual(secondRun, firstRun);
});
