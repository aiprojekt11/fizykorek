const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const root = path.resolve(__dirname, '..');
const cases = [
  { id: '2026-styczen-z3', dir: '2026', stem: 'fizyka-2026-styczen-probna-rozszerzona', task: 3 },
  { id: '2024-grudzien-z3', dir: '2024', stem: 'fizyka-2024-grudzien-probna-rozszerzona', task: 3 },
  { id: '2024-czerwiec-z2', dir: '2024', stem: 'fizyka-2024-czerwiec-matura-rozszerzona', task: 2 },
  { id: '2023-czerwiec-z3', dir: '2023', stem: 'fizyka-2023-czerwiec-matura-rozszerzona', task: 3 },
  { id: '2023-pokazowy-z2', dir: '2023', stem: 'fizyka-2023-przykladowy-arkusz-cke-rozszerzona', task: 2 },
  { id: 'informator-2025-z4', dir: 'informatory', stem: 'informator-maturalny-fizyka-2025', task: 4, embedded: true },
  { id: 'informator-2023-z4', dir: 'informatory', stem: 'informator-maturalny-fizyka-2023', task: 4, embedded: true },
];

const clean = (text) => text.replace(/\s+/g, ' ').trim();

async function readPdf(file) {
  const parser = new PDFParse({ data: fs.readFileSync(file) });
  try {
    return await parser.getText();
  } finally {
    await parser.destroy();
  }
}

(async () => {
  const outDir = path.join(__dirname, 'rigid-audit');
  fs.mkdirSync(outDir, { recursive: true });
  const manifest = [];

  for (const item of cases) {
    const baseDir = path.join(root, 'data', 'arkusze_cke', item.dir);
    const paperPath = path.join(baseDir, `${item.stem}.pdf`);
    const keyPath = item.embedded ? paperPath : path.join(baseDir, `${item.stem}-odpowiedzi.pdf`);
    const paper = await readPdf(paperPath);
    const key = item.embedded ? paper : await readPdf(keyPath);
    const taskPattern = new RegExp(`Zadanie\\s+${item.task}\\.(?!\\d)`, 'i');
    const nextPattern = new RegExp(`Zadanie\\s+${item.task + 1}\\.(?!\\d)`, 'i');
    const paperPages = paper.pages.filter((page) => taskPattern.test(page.text) || (() => {
      const first = paper.pages.findIndex((p) => taskPattern.test(p.text));
      const next = paper.pages.findIndex((p, index) => index > first && nextPattern.test(p.text));
      return first >= 0 && page.num > paper.pages[first].num && (next < 0 || page.num < paper.pages[next].num);
    })());

    const subtaskPattern = new RegExp(`(?:Zadanie\\s+)?${item.task}\\.[1-9]\\.`, 'i');
    const keyMatches = key.pages.filter((page) => subtaskPattern.test(page.text));
    const keyStart = keyMatches.length ? Math.min(...keyMatches.map((page) => page.num)) : null;
    const keyPages = keyStart == null ? [] : key.pages.filter((page) => page.num >= keyStart && page.num <= keyStart + 5);

    const entry = {
      ...item,
      paperPath: path.relative(root, paperPath).replaceAll('\\', '/'),
      keyPath: path.relative(root, keyPath).replaceAll('\\', '/'),
      paperPages: paperPages.map((page) => page.num),
      keyCandidatePages: keyPages.map((page) => page.num),
    };
    manifest.push(entry);

    const dump = [
      `SOURCE: ${entry.paperPath}`,
      `PAGES: ${entry.paperPages.join(', ')}`,
      ...paperPages.map((page) => `\n[PAPER ${page.num}]\n${page.text}`),
      `\nKEY: ${entry.keyPath}`,
      `KEY CANDIDATES: ${entry.keyCandidatePages.join(', ')}`,
      ...keyPages.map((page) => `\n[KEY ${page.num}]\n${page.text}`),
    ].join('\n');
    fs.writeFileSync(path.join(outDir, `${item.id}.txt`), dump, 'utf8');
    console.log(`${item.id}: arkusz ${entry.paperPages.join(', ')}; klucz ${entry.keyCandidatePages.join(', ')}`);
    console.log(`  ${clean(paperPages[0]?.text || '').slice(0, 180)}`);
  }

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
