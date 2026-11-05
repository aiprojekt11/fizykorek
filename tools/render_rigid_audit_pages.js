const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const outDir = path.join(__dirname, 'rigid-audit', 'pages');
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  ['2026-styczen-paper', 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', [8, 9]],
  ['2026-styczen-key', 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf', [14]],
  ['2024-grudzien-paper', 'data/arkusze_cke/2024/fizyka-2024-grudzien-probna-rozszerzona.pdf', [8, 10]],
  ['2024-grudzien-key', 'data/arkusze_cke/2024/fizyka-2024-grudzien-probna-rozszerzona-odpowiedzi.pdf', [13, 14]],
  ['2024-czerwiec-paper', 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', [6]],
  ['2024-czerwiec-key', 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf', [8]],
  ['2023-czerwiec-paper', 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', [9]],
  ['2023-pokazowy-paper', 'data/arkusze_cke/2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf', [4]],
  ['2023-pokazowy-key', 'data/arkusze_cke/2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf', [5]],
  ['informator-2025', 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2025.pdf', [24, 26]],
  ['informator-2023', 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', [24, 26]],
];

(async () => {
  for (const [id, relativePdf, pages] of jobs) {
    for (const pageNumber of pages) {
      const outputPrefix = path.join(outDir, `${id}-p${pageNumber}`);
      const result = spawnSync('pdftoppm', [
        '-png', '-r', '144', '-f', String(pageNumber), '-l', String(pageNumber),
        '-singlefile', path.join(root, relativePdf), outputPrefix,
      ], { encoding: 'utf8' });
      if (result.status !== 0) throw new Error(result.stderr || `pdftoppm failed for ${id} page ${pageNumber}`);
      console.log(path.relative(root, `${outputPrefix}.png`).replaceAll('\\', '/'));
    }
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
