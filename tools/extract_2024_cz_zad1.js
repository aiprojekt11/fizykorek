const fs = require('fs');
const { PdfReader } = require('pdfreader');

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

async function run() {
  const pages = await extractPdf('data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf');
  console.log('Total pages in exam:', pages.length);
  for (let p = 3; p <= 4; p++) {
    console.log(`\n=== PAGE ${p} ===`);
    const items = pages[p - 1] || [];
    items.sort((a, b) => a.y - b.y || a.x - b.x);
    let lastY = null;
    let line = '';
    for (const it of items) {
      if (lastY === null || Math.abs(it.y - lastY) > 0.35) {
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
run();
