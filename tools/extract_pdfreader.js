const fs = require('fs');
const { PdfReader } = require('pdfreader');
const path = require('path');

async function extractText(pdfPath) {
  return new Promise((resolve, reject) => {
    let pages = [];
    let currentPage = [];
    
    new PdfReader().parseFileItems(pdfPath, (err, item) => {
      if (err) return reject(err);
      if (!item) {
        if (currentPage.length > 0) pages.push(currentPage);
        resolve(pages);
      } else if (item.page) {
        if (currentPage.length > 0) pages.push(currentPage);
        currentPage = [];
      } else if (item.text) {
        currentPage.push(item);
      }
    });
  });
}

async function run() {
  const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];
  
  for (const yr of years) {
    const dir = path.join('data/arkusze_cke', yr);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    const pdfFile = files.find(f => f.endsWith('.pdf') && !f.includes('odpowiedzi') && !f.includes('stara'));
    if (!pdfFile) continue;
    
    const pdfPath = path.join(dir, pdfFile);
    try {
      const pages = await extractText(pdfPath);
      let fullText = '';
      
      // Look at first 4 pages
      for (let i = 0; i < Math.min(4, pages.length); i++) {
        const pageItems = pages[i];
        // Sort items: first by y, then by x
        pageItems.sort((a, b) => {
          if (Math.abs(a.y - b.y) < 0.5) {
            return a.x - b.x;
          }
          return a.y - b.y;
        });
        
        let prevY = -1;
        for (const item of pageItems) {
          if (prevY !== -1 && Math.abs(item.y - prevY) > 0.5) {
            fullText += '\n';
          }
          fullText += item.text + ' ';
          prevY = item.y;
        }
        fullText += '\n\n';
      }
      
      fs.writeFileSync(path.join(dir, 'parsed_pdfreader.txt'), fullText);
      console.log('Saved parsed_pdfreader.txt for', yr);
      
    } catch (e) {
      console.error('Error parsing', yr, e);
    }
  }
}
run();
