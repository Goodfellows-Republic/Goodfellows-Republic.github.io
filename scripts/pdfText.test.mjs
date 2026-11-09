import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { pageBlocks } from '../src/lib/pdfText.mjs';

test('reads text, groups lines, separates headings and removes em dashes', () => {
  const item = (str, x, y, width) => ({ str, transform: [1, 0, 0, 1, x, y], width });
  const blocks = pageBlocks([item('PREAMBLE', 0, 100, 30), item('Words \u2014', 0, 80, 35), item('more', 40, 80, 20), item('next line', 0, 68, 40)]);
  assert.deepEqual(blocks, [{kind:'heading', text:'PREAMBLE'}, {kind:'text', text:'Words - more next line'}]);
});

test('the current PDF opens and text can be extracted', async () => {
  const bytes = new Uint8Array(await readFile(new URL('../public/documents/constitution.pdf', import.meta.url)));
  const task = getDocument({ data: bytes, useSystemFonts: true });
  const pdf = await task.promise;
  try {
    assert.ok(pdf.numPages > 0);
    let totalBlocks = 0;
    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n);
      totalBlocks += pageBlocks((await page.getTextContent()).items).length;
    }
    assert.ok(totalBlocks > 0, "The PDF has no selectable text. Use an OCR-processed PDF.");
  } finally { await task.destroy(); }
});
