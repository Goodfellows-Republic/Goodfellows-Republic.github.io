export function pageBlocks(items) {
  const rows = [];
  for (const item of items) {
    if (!('str' in item) || !item.str.trim()) continue;
    const y = item.transform[5];
    const x = item.transform[4];
    const last = rows.at(-1);
    if (last && Math.abs(last.y - y) < 2 && x >= last.start - 2) {
      if (x - last.end > 1 && !/\s$/.test(last.text) && !/^\s/.test(item.str)) last.text += ' ';
      last.text += item.str;
      last.end = x + item.width;
    } else {
      rows.push({ y, start: x, end: x + item.width, text: item.str });
    }
  }
  const gaps = rows.slice(1).map((row, i) => rows[i].y - row.y).filter(gap => gap > 2).sort((a, b) => a - b);
  const typical = gaps[Math.floor(gaps.length / 2)] || 16;
  const blocks = [];
  let paragraph = '';
  const flush = () => { if (paragraph) blocks.push({ kind: 'text', text: paragraph }); paragraph = ''; };
  rows.forEach((row, i) => {
    const text = row.text.normalize('NFKC').replaceAll('\u2014', '-').trim();
    const heading = /^(PREAMBLE|FORMAL PROMULGATION|ARTICLE\s+\d+\b.*|Section\s+\d+\.\d+\b.*)$/i.test(text);
    const clause = /^(\d+\.\s|\([a-z0-9]+\)\s)/i.test(text);
    if (i && (rows[i - 1].y - row.y > typical * 1.5 || heading || clause)) flush();
    if (heading) {
      blocks.push({ kind: 'heading', text });
    } else {
      paragraph += (paragraph ? ' ' : '') + text;
    }
  });
  flush();
  return blocks;
}
