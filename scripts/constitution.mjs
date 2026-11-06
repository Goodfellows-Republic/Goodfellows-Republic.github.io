import process from 'node:process'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'

export const pdfPath = fileURLToPath(new URL('../public/documents/constitution.pdf', import.meta.url))
const outputPath = fileURLToPath(new URL('../.vitepress/generated/constitution.md', import.meta.url))

// Escape source text: a PDF must not be able to inject HTML, Vue, or Markdown.
export function escapeText(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/{/g, '&#123;').replace(/}/g, '&#125;')
    .replace(/([\\`*_[\]#!|])/g, '\\$1').replace(/^(\d+)\./, '$1\\.')
}

export function pageLines(items) {
  const rows = []
  for (const item of items) {
    if (!item.str?.trim()) continue
    const y = item.transform[5]
    const last = rows.at(-1)
    const x = item.transform[4]
    if (last && Math.abs(last.y - y) < 2) {
      if (x - last.end > 1 && !/\s$/.test(last.text) && !/^\s/.test(item.str)) last.text += ' '
      last.text += item.str
      last.end = x + item.width
    } else rows.push({ y, text: item.str, end: x + item.width })
  }
  const gaps = rows.slice(1).map((row, i) => rows[i].y - row.y).filter(gap => gap > 2)
  const typical = gaps.sort((a, b) => a - b)[Math.floor(gaps.length / 2)] || 16
  const lines = []
  rows.forEach((row, i) => {
    if (i && rows[i - 1].y - row.y > typical * 1.5) lines.push('')
    lines.push(row.text.normalize('NFKC').trim())
  })
  return lines
}

export function readingEdition(lines) {
  const blocks = [], contents = [], paragraph = []
  const flush = () => { if (paragraph.length) blocks.push(escapeText(paragraph.splice(0).join(' '))) }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) { flush(); continue }
    const article = /^ARTICLE\s+(\d+)[,. :]/i.exec(line)
    if (article) {
      flush()
      let title = line
      // Join wrapped uppercase article titles, without swallowing the next section.
      while (i + 1 < lines.length) {
        const next = lines[i + 1].trim()
        if (!next) { i++; continue }
        if (!/^[A-Z][A-Z ,&'’–—-]+$/.test(next) || /^(ARTICLE\s+\d|SECTION\s+\d|PREAMBLE|FORMAL PROMULGATION)\b/.test(next)) break
        title += ` ${next}`; i++
      }
      const anchor = `article-${article[1]}`
      contents.push(`- [${escapeText(title)}](#${anchor})`)
      blocks.push(`## ${escapeText(title)} {#${anchor}}`)
    } else if (/^(PREAMBLE|FORMAL PROMULGATION)$/i.test(line)) {
      flush()
      const anchor = line.toLowerCase().replaceAll(' ', '-')
      contents.push(`- [${escapeText(line)}](#${anchor})`)
      blocks.push(`## ${escapeText(line)} {#${anchor}}`)
    } else if (/^Section\s+\d+\.\d+/i.test(line)) {
      flush(); blocks.push(`### ${escapeText(line)}`)
    } else {
      if (/^\d+\.\s/.test(line)) flush()
      paragraph.push(line)
    }
  }
  flush()
  return `${contents.length ? `## Contents\n\n${contents.join('\n')}\n\n` : ''}${blocks.join('\n\n')}\n`
}

export async function generateConstitution() {
  const pdf = await getDocument({ data: new Uint8Array(await readFile(pdfPath)), useSystemFonts: true }).promise
  try {
    const pages = []
    for (let number = 1; number <= pdf.numPages; number++) {
      const page = await pdf.getPage(number)
      pages.push(pageLines((await page.getTextContent()).items))
    }
    if (pages.some(lines => !lines.some(line => line.trim()))) {
      throw new Error('The constitution PDF has a page without extractable text. Use a text-based or OCR-processed PDF.')
    }
    // Preserve cover text too; never assume a fixed number of pages or articles.
    const lines = pages.flatMap(page => [...page, ''])
    const generated = `<!-- Automatically generated from public/documents/constitution.pdf. Do not edit. -->\n\n` +
      `[Open the source constitution (PDF, ${pdf.numPages} pages)](/documents/constitution.pdf)\n\n` +
      `::: info Reading edition\nThis text is automatically extracted from the PDF whenever the website is built. Formatting is adapted for reading online. If an extraction discrepancy occurs, refer to the original PDF linked above.\n:::\n\n` + readingEdition(lines)
    await mkdir(dirname(outputPath), { recursive: true })
    const previous = await readFile(outputPath, 'utf8').catch(() => '')
    if (previous !== generated) await writeFile(outputPath, generated)
    return generated
  } finally { await pdf.destroy() }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await generateConstitution()
  console.log('Constitution reading edition generated from PDF.')
}
