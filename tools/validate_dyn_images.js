const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('js/data-courses.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const dynSec = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
console.log('Section title:', dynSec.title);
console.log('Badge:', dynSec.badge);
console.log('Subchapters count:', dynSec.subchapters.length);

const sub = dynSec.subchapters[0];
console.log('Subchapter:', sub.id, '|', sub.title, '| tasks:', sub.tasks.length);

let totalErrors = 0;
sub.tasks.forEach((t, i) => {
  const matches = t.problem.match(/src="([^">]+)"/g) || [];
  const imgs = matches.map(m => m.replace(/^src="/, '').replace(/"$/, ''));
  console.log(`Task ${i + 1}: ${t.id} (${t.year}) [${imgs.length} image(s)] -> ${imgs.join(', ')}`);
  for (const img of imgs) {
    if (!fs.existsSync(img)) {
      console.error(`  MISSING IMAGE: ${img}`);
      totalErrors++;
    } else {
      const sz = fs.statSync(img).size;
      console.log(`    OK: ${img} (${sz} bytes)`);
    }
  }
});

console.log('Total missing images:', totalErrors);
