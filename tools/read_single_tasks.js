const fs = require('fs');
const { PdfReader } = require('pdfreader');

function readPage(pdfPath, targetPages) {
  return new Promise((resolve, reject) => {
    let pagesData = {};
    let curPage = 0;
    new PdfReader().parseFileItems(pdfPath, (err, item) => {
      if (err) return reject(err);
      if (!item) {
        resolve(pagesData);
      } else if (item.page) {
        curPage = item.page;
      } else if (item.text && targetPages.includes(curPage)) {
        if (!pagesData[curPage]) pagesData[curPage] = [];
        pagesData[curPage].push(item);
      }
    });
  });
}

function formatItems(items) {
  items.sort((a, b) => a.y - b.y || a.x - b.x);
  let lastY = null;
  let line = '';
  let lines = [];
  for (const it of items) {
    if (lastY === null || Math.abs(it.y - lastY) > 0.35) {
      if (line) lines.push(line);
      line = it.text;
      lastY = it.y;
    } else {
      line += ' ' + it.text;
    }
  }
  if (line) lines.push(line);
  return lines.join('\n');
}

async function main() {
  const targets = [
    { name: '2023_maj_zad2', path: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', pages: [6, 7] },
    { name: '2023_cze_zad2', path: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', pages: [7, 8] },
    { name: '2022_gru_zad2', path: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf', pages: [6, 7] },
    { name: 'inf_zad1', path: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', pages: [12, 13] },
    { name: 'inf_zad3', path: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', pages: [20, 21] }
  ];

  for (const t of targets) {
    console.log(`\n=================== ${t.name} ===================`);
    const data = await readPage(t.path, t.pages);
    for (const p of t.pages) {
      console.log(`--- Page ${p} ---`);
      if (data[p]) {
        console.log(formatItems(data[p]));
      } else {
        console.log('(no text found)');
      }
    }
  }
}

main().catch(console.error);
