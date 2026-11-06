import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'
import { escapeText, pageLines, readingEdition, generateConstitution, pdfPath } from './constitution.mjs'

test('PDF text cannot inject HTML or Vue expressions', () => {
  const text = escapeText('<script>{{ danger }}</script> & [link](url)')
  assert.ok(!text.includes('<script>'))
  assert.ok(!text.includes('{{'))
  assert.ok(text.includes('&amp;'))
})

test('preserves ligatures split into text items and separates distant columns', () => {
  const item = (str, x, y, width) => ({ str, transform: [1, 0, 0, 1, x, y], width })
  assert.deepEqual(pageLines([
    item('de', 0, 100, 10), item('fi', 10, 100, 5), item('ned', 15, 100, 15),
    item('Office:', 0, 80, 30), item('Chancellor', 50, 80, 50),
  ]), ['defined', 'Office: Chancellor'])
})

test('new articles, wrapped headings, and original clause numbers are dynamic', () => {
  const result = readingEdition(['PREAMBLE', '', 'Opening text.', '',
    'ARTICLE 22, A NEW', 'ARTICLE TITLE', '', 'Section 22.1, New section',
    '4. A provision', 'continued here.', '5. Another provision.'])
  assert.match(result, /ARTICLE 22, A NEW ARTICLE TITLE/)
  assert.match(result, /#article-22/)
  assert.match(result, /4\\\. A provision continued here\./)
  assert.match(result, /5\\\. Another provision\./)
  assert.match(result, /Section 22.1/)
})

test('source PDF page count and article anchors are generated deterministically', async () => {
  const result = await generateConstitution()
  const pdf = await getDocument({ data: new Uint8Array(await readFile(pdfPath)), useSystemFonts: true }).promise
  try {
    assert.ok(result.includes(`PDF, ${pdf.numPages} pages`))
    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n)
      const lines = pageLines((await page.getTextContent()).items)
      for (const line of lines) {
        const article = /^ARTICLE\s+(\d+)[,. :]/i.exec(line)
        if (article) assert.ok(result.includes(`{#article-${article[1]}}`))
        if (/^Section\s+\d+\.\d+/i.test(line)) assert.ok(result.includes(escapeText(line)))
      }
    }
  } finally { await pdf.destroy() }
  assert.equal(await generateConstitution(), result)
})
