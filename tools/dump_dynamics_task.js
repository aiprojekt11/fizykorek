const fs = require('fs');
const { PdfReader } = require('pdfreader');
const path = require('path');

function extractPdf(filePath) {
  return new Promise((resolve, reject) => {
    let pages = [];
    let curPage = [];
    new PdfReader().parseFileItems(filePath, (err, item) => {
      if (err) return reject(err);
      if (!item) {
        if (curPage.length) pages.push(curPage);
        resolve(pages);
      } else if (item.page) {
        if (curPage.length) pages.push(curPage);
        curPage = [];
      } else if (item.text) {
        curPage.push(item);
      }
    });
  });
}

async function dumpTask(filePath, startPage, endPage) {
  const pages = await extractPdf(filePath);
  console.log(`=== ${path.basename(filePath)} (Pages ${startPage}-${endPage}) ===`);
  for (let p = startPage; p <= endPage && p <= pages.length; p++) {
    console.log(`\n--- Page ${p} ---`);
    const pageItems = pages[p - 1] || [];
    pageItems.sort((a, b) => a.y - b.y || a.x - b.x);
    let lastY = null;
    let line = '';
    for (const it of pageItems) {
      if (lastY === null || Math.abs(it.y - lastY) > 0.3) {
        if (line) console.log(line);
        line = it.text;
        lastY = it.y;
      } else {
        line += ' ' + it.text;
      }
    }
    if (line) console.log(line);
  }
}

async function main() {
  const taskMap = {
    'inf1': ['data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', 33, 35],
    'inf3': ['data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', 38, 41],
    '2022g2': ['data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf', 5, 7],
    '2022g2_ans': ['data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona-odpowiedzi.pdf', 3, 5],
    '2023m2': ['data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', 4, 6],
    '2023m2_ans': ['data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf', 4, 6],
    '2023cz2': ['data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', 4, 6],
    '2023cz2_ans': ['data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf', 3, 5],
    '2024m1': ['data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', 2, 4],
    '2024m1_ans': ['data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf', 2, 4],
    '2024cz1': ['data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', 2, 4],
    '2024cz1_ans': ['data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf', 2, 4],
    '2025cz2': ['data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', 4, 6],
    '2025cz2_ans': ['data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf', 4, 6],
    '2026s1': ['data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', 2, 4],
    '2026s1_ans': ['data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf', 2, 4],
    '2026s2': ['data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', 5, 8],
    '2026s2_ans': ['data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf', 4, 7]
  };

  const key = process.argv[2];
  if (!key || !taskMap[key]) {
    console.log('Available keys:', Object.keys(taskMap).join(', '));
    return;
  }
  const [filePath, s, e] = taskMap[key];
  await dumpTask(filePath, s, e);
}

main().catch(console.error);
