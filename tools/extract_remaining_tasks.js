const fs = require('fs');
const { PdfReader } = require('pdfreader');

function extractPdfRange(filePath, startPage, endPage) {
  return new Promise((resolve, reject) => {
    let pages = [];
    let curPage = [];
    let pageNum = 0;
    new PdfReader().parseFileItems(filePath, (err, item) => {
      if (err) return reject(err);
      if (!item) {
        if (curPage.length && pageNum >= startPage && pageNum <= endPage) {
          pages.push({ page: pageNum, items: curPage });
        }
        resolve(pages);
      } else if (item.page) {
        if (curPage.length && pageNum >= startPage && pageNum <= endPage) {
          pages.push({ page: pageNum, items: curPage });
        }
        pageNum = item.page;
        curPage = [];
      } else if (item.text) {
        if (pageNum >= startPage && pageNum <= endPage) {
          curPage.push(item);
        }
      }
    });
  });
}

function formatPageItems(items) {
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

async function run() {
  const configs = [
    { name: '2023cz_z2', path: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', s: 4, e: 6 },
    { name: '2023m_z2', path: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', s: 5, e: 7 },
    { name: '2022g_z2', path: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf', s: 5, e: 7 },
    { name: 'inf_z1', path: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', s: 33, e: 35 },
    { name: 'inf_z3', path: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', s: 38, e: 41 }
  ];

  let out = {};
  for (const c of configs) {
    console.log('Extracting', c.name, '...');
    const pages = await extractPdfRange(c.path, c.s, c.e);
    out[c.name] = pages.map(p => `--- PAGE ${p.page} ---\n` + formatPageItems(p.items)).join('\n\n');
  }

  fs.writeFileSync('tools/remaining_tasks_text.json', JSON.stringify(out, null, 2), 'utf8');
  console.log('All extracted successfully to tools/remaining_tasks_text.json');
}

run().catch(console.error);
