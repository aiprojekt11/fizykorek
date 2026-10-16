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

async function extractRange(filePath, startPage, endPage) {
  const pages = await extractPdf(filePath);
  let res = [];
  for (let p = startPage; p <= endPage && p <= pages.length; p++) {
    const pageItems = pages[p - 1] || [];
    pageItems.sort((a, b) => a.y - b.y || a.x - b.x);
    let lastY = null;
    let line = '';
    let pageLines = [];
    for (const it of pageItems) {
      if (lastY === null || Math.abs(it.y - lastY) > 0.35) {
        if (line) pageLines.push(line);
        line = it.text;
        lastY = it.y;
      } else {
        line += ' ' + it.text;
      }
    }
    if (line) pageLines.push(line);
    res.push({ page: p, text: pageLines.join('\n') });
  }
  return res;
}

async function main() {
  const tasksConfig = [
    { id: 'inf_zad1', pdf: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', start: 33, end: 36 },
    { id: 'inf_zad3', pdf: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', start: 38, end: 42 },
    { id: '2022g_zad2', pdf: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf', start: 5, end: 7 },
    { id: '2022g_zad2_ans', pdf: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona-odpowiedzi.pdf', start: 3, end: 5 },
    { id: '2023m_zad2', pdf: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', start: 5, end: 7 },
    { id: '2023m_zad2_ans', pdf: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf', start: 4, end: 6 },
    { id: '2023cz_zad2', pdf: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', start: 4, end: 6 },
    { id: '2023cz_zad2_ans', pdf: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf', start: 3, end: 5 },
    { id: '2024m_zad1', pdf: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', start: 4, end: 7 },
    { id: '2024m_zad1_ans', pdf: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf', start: 2, end: 4 },
    { id: '2024cz_zad1', pdf: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', start: 4, end: 7 },
    { id: '2024cz_zad1_ans', pdf: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf', start: 2, end: 4 },
    { id: '2025cz_zad2', pdf: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', start: 5, end: 7 },
    { id: '2025cz_zad2_ans', pdf: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf', start: 4, end: 6 },
    { id: '2026s_zad1', pdf: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', start: 4, end: 6 },
    { id: '2026s_zad1_ans', pdf: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf', start: 2, end: 4 },
    { id: '2026s_zad2', pdf: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', start: 7, end: 10 },
    { id: '2026s_zad2_ans', pdf: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf', start: 5, end: 8 }
  ];

  let out = {};
  for (const item of tasksConfig) {
    console.log('Extracting', item.id);
    out[item.id] = await extractRange(item.pdf, item.start, item.end);
  }
  fs.writeFileSync('tools/dynamics_dump.json', JSON.stringify(out, null, 2), 'utf8');
  console.log('Done writing dynamics_dump.json');
}

main().catch(console.error);
