import process from "node:process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

export const pdfPath = fileURLToPath(
  new URL("../public/documents/constitution.pdf", import.meta.url)
);
export const outputPath = fileURLToPath(
  new URL("../src/generated/constitution.ts", import.meta.url)
);

const MINOR_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "by",
  "for",
  "from",
  "in",
  "into",
  "nor",
  "of",
  "on",
  "or",
  "the",
  "to",
  "with",
]);

export function formatHeadingCase(text) {
  const trimmed = text.trim();
  if (!trimmed) return "";
  if (trimmed !== trimmed.toUpperCase() || !/[A-Z]/.test(trimmed)) {
    return trimmed;
  }
  return trimmed
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) => {
      if (index > 0 && MINOR_WORDS.has(word)) return word;
      return word.replace(/^[a-z]/, (ch) => ch.toUpperCase());
    })
    .join(" ");
}

export function pageLines(items) {
  const rows = [];
  for (const item of items) {
    if (!item.str?.trim()) continue;
    const y = item.transform[5];
    const last = rows.at(-1);
    const x = item.transform[4];
    if (last && Math.abs(last.y - y) < 2) {
      if (x - last.end > 1 && !/\s$/.test(last.text) && !/^\s/.test(item.str)) {
        last.text += " ";
      }
      last.text += item.str;
      last.end = x + item.width;
    } else {
      rows.push({ y, text: item.str, end: x + item.width });
    }
  }

  const gaps = rows
    .slice(1)
    .map((row, i) => rows[i].y - row.y)
    .filter((gap) => gap > 2);
  const typical =
    gaps.sort((a, b) => a - b)[Math.floor(gaps.length / 2)] || 16;

  const lines = [];
  rows.forEach((row, i) => {
    if (i && rows[i - 1].y - row.y > typical * 1.5) lines.push("");
    lines.push(row.text.normalize("NFKC").trim());
  });
  return lines;
}

function isMajorHeadingLine(line) {
  return (
    /^ARTICLE\s+\d+[,. :]/i.test(line) ||
    /^ARTICLE\s+\d+$/i.test(line) ||
    /^(PREAMBLE|FORMAL PROMULGATION)$/i.test(line)
  );
}

export function parseConstitution(lines, pageCount = 1) {
  let firstHeadingIndex = lines.findIndex((l) => isMajorHeadingLine(l.trim()));
  if (firstHeadingIndex === -1) firstHeadingIndex = lines.length;

  const coverRawLines = lines.slice(0, firstHeadingIndex);
  const coverGroups = [];
  let currentCoverGroup = [];
  for (const raw of coverRawLines) {
    const t = raw.trim();
    if (!t) {
      if (currentCoverGroup.length) {
        coverGroups.push(currentCoverGroup);
        currentCoverGroup = [];
      }
    } else {
      currentCoverGroup.push(t);
    }
  }
  if (currentCoverGroup.length) coverGroups.push(currentCoverGroup);

  let title = "The Constitution of the Goodfellows Republic";
  const subtitleLines = [];

  if (coverGroups.length > 0) {
    const firstGroupJoined = coverGroups[0].join(" ");
    if (
      firstGroupJoined === firstGroupJoined.toUpperCase() &&
      /[A-Z]/.test(firstGroupJoined)
    ) {
      title = formatHeadingCase(firstGroupJoined);
      for (const group of coverGroups.slice(1)) {
        for (const line of group) subtitleLines.push(line);
      }
    } else {
      for (const group of coverGroups) {
        subtitleLines.push(group.join(" "));
      }
    }
  }

  const chapters = [];
  const usedIds = new Set();
  const uniqueId = (base) => {
    const slug =
      base
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "") || "section";
    if (!usedIds.has(slug)) {
      usedIds.add(slug);
      return slug;
    }
    let counter = 2;
    while (usedIds.has(`${slug}-${counter}`)) counter++;
    const next = `${slug}-${counter}`;
    usedIds.add(next);
    return next;
  };

  let currentChapter = null;
  let currentSection = null;
  let paragraphBuffer = [];

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    const text = paragraphBuffer.splice(0).join(" ");
    if (!currentChapter) {
      currentChapter = {
        id: uniqueId("opening"),
        eyebrow: "",
        title: "Opening Provisions",
        rawHeading: "",
        paragraphs: [],
        sections: [],
      };
      chapters.push(currentChapter);
    }
    if (currentSection) {
      currentSection.paragraphs.push(text);
    } else {
      currentChapter.paragraphs.push(text);
    }
  };

  for (let i = firstHeadingIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      flushParagraph();
      continue;
    }

    const articleMatch = /^ARTICLE\s+(\d+)(?:[,. :]\s*(.*))?$/i.exec(line);
    if (articleMatch) {
      flushParagraph();
      currentSection = null;
      const articleNum = articleMatch[1];
      let fullHeading = line;

      while (i + 1 < lines.length) {
        const next = lines[i + 1].trim();
        if (!next) {
          i++;
          continue;
        }
        if (
          !/^[A-Z][A-Z ,&'’–—-]+$/.test(next) ||
          /^(ARTICLE\s+\d|SECTION\s+\d|PREAMBLE|FORMAL PROMULGATION)\b/i.test(
            next
          )
        ) {
          break;
        }
        fullHeading += ` ${next}`;
        i++;
      }

      const restMatch = /^ARTICLE\s+\d+(?:[,. :]\s*(.*))?$/i.exec(fullHeading);
      const restTitle = restMatch?.[1]?.trim() || "";

      currentChapter = {
        id: uniqueId(`article-${articleNum}`),
        eyebrow: `Article ${articleNum}`,
        title: restTitle ? formatHeadingCase(restTitle) : `Article ${articleNum}`,
        rawHeading: fullHeading,
        paragraphs: [],
        sections: [],
      };
      chapters.push(currentChapter);
      continue;
    }

    if (/^(PREAMBLE|FORMAL PROMULGATION)$/i.test(line)) {
      flushParagraph();
      currentSection = null;
      currentChapter = {
        id: uniqueId(line),
        eyebrow: "",
        title: formatHeadingCase(line),
        rawHeading: line,
        paragraphs: [],
        sections: [],
      };
      chapters.push(currentChapter);
      continue;
    }

    const sectionMatch = /^Section\s+(\d+\.\d+)(?:[,. :]\s*(.*))?$/i.exec(line);
    if (sectionMatch) {
      flushParagraph();
      if (!currentChapter) {
        currentChapter = {
          id: uniqueId("provisions"),
          eyebrow: "",
          title: "Provisions",
          rawHeading: "",
          paragraphs: [],
          sections: [],
        };
        chapters.push(currentChapter);
      }
      const secNum = sectionMatch[1];
      const secRest = sectionMatch[2]?.trim() || "";
      currentSection = {
        id: uniqueId(`section-${secNum}`),
        number: secNum,
        title: secRest,
        heading: secRest ? `Section ${secNum} — ${secRest}` : `Section ${secNum}`,
        rawHeading: line,
        paragraphs: [],
      };
      currentChapter.sections.push(currentSection);
      continue;
    }

    if (/^\d+\.\s/.test(line) || /^\([a-z0-9]+\)\s/i.test(line)) {
      flushParagraph();
      paragraphBuffer.push(line);
      continue;
    }

    if (/^[A-Z][A-Za-z ]{2,28}:\s+\S/.test(line)) {
      flushParagraph();
      paragraphBuffer.push(line);
      flushParagraph();
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();

  return {
    title,
    subtitleLines,
    pageCount,
    chapters,
  };
}

export async function generateConstitution() {
  const rawPdf = new Uint8Array(await readFile(pdfPath));
  const pdf = await getDocument({ data: rawPdf, useSystemFonts: true }).promise;

  try {
    const pages = [];
    for (let number = 1; number <= pdf.numPages; number++) {
      const page = await pdf.getPage(number);
      pages.push(pageLines((await page.getTextContent()).items));
    }

    if (pages.some((lines) => !lines.some((line) => line.trim()))) {
      throw new Error(
        "The constitution PDF has a page without extractable text. Use a text-based or OCR-processed PDF."
      );
    }

    const allLines = pages.flatMap((page) => [...page, ""]);
    const parsed = parseConstitution(allLines, pdf.numPages);

    const tsOutput = `export interface ConstitutionSection {
  id: string;
  number: string;
  title: string;
  heading: string;
  rawHeading: string;
  paragraphs: string[];
}

export interface ConstitutionChapter {
  id: string;
  eyebrow: string;
  title: string;
  rawHeading: string;
  paragraphs: string[];
  sections: ConstitutionSection[];
}

export interface ConstitutionDocument {
  title: string;
  subtitleLines: string[];
  pageCount: number;
  chapters: ConstitutionChapter[];
}

export const CONSTITUTION_DOCUMENT: ConstitutionDocument = ${JSON.stringify(
      parsed,
      null,
      2
    )};
`;

    await mkdir(dirname(outputPath), { recursive: true });
    const previous = await readFile(outputPath, "utf8").catch(() => "");
    if (previous !== tsOutput) {
      await writeFile(outputPath, tsOutput, "utf8");
    }
    return parsed;
  } finally {
    await pdf.destroy();
  }
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const doc = await generateConstitution();
  console.log(
    `Constitution generated from PDF (${doc.pageCount} pages, ${doc.chapters.length} chapters).`
  );
}
