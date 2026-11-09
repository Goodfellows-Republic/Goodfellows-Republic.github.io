export interface PdfBlock {
  kind: 'heading' | 'text';
  text: string;
}
export function pageBlocks(items: Array<{ str?: string; transform: number[]; width: number } | object>): PdfBlock[];
