const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync('js/data-courses.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const sec = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
console.log('Section title:', sec.title);
console.log('Badge:', sec.badge);
console.log('Subchapters count:', sec.subchapters.length);
sec.subchapters.forEach(sub => {
  console.log('Subchapter:', sub.id, '|', sub.title);
  sub.tasks.forEach((t, i) => {
    console.log('  Task', i, 'id:', t.id, '|', t.title);
    console.log('    image field:', t.image);
    const imgMatches = t.problem ? t.problem.match(/<img[^>]+src="([^">]+)"/g) : null;
    console.log('    problem imgs:', imgMatches);
    const placeholders = t.problem ? t.problem.match(/\[TUTAJ WKLEJ[^\]]+\]/g) : null;
    if (placeholders) console.log('    placeholders:', placeholders);
  });
});
