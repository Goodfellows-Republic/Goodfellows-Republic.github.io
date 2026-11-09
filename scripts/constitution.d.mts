export const pdfPath: string;
export const outputPath: string;
export function formatHeadingCase(text: string): string;
export function pageLines(
  items: Array<{ str?: string; transform: number[]; width: number }>
): string[];
export function parseConstitution(
  lines: string[],
  pageCount?: number
): {
  title: string;
  subtitleLines: string[];
  pageCount: number;
  chapters: Array<{
    id: string;
    eyebrow: string;
    title: string;
    rawHeading: string;
    paragraphs: string[];
    sections: Array<{
      id: string;
      number: string;
      title: string;
      heading: string;
      rawHeading: string;
      paragraphs: string[];
    }>;
  }>;
};
export function generateConstitution(): Promise<
  ReturnType<typeof parseConstitution>
>;
