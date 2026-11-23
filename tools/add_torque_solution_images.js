const fs = require('fs');

const file = 'js/data-courses.js';
let source = fs.readFileSync(file, 'utf8');
const diagrams = [
  ['b-zad-15', 'task15-beam-equilibrium-solution.svg', 'Schemat sił: ciężary klocków i reakcja osi O'],
  ['b-zad-16', 'task16-support-position-solution.svg', 'Schemat sił: ciężary klocków i belki oraz reakcja podpory P'],
  ['b-zad-17', 'task17-beam-reactions-solution.svg', 'Schemat sił: reakcje w punktach A i B oraz ciężar belki'],
  ['b-zad-21', 'task21-coaxial-drums-solution.svg', 'Schemat sił działających na klocki przy współosiowych bębnach'],
  ['b-zad-22', 'task22-massive-pulley-solution.svg', 'Schemat sił w układzie z masywnym krążkiem'],
  ['b-zad-23', 'task23-rolling-cylinder-solution.svg', 'Schemat sił działających na walec i wiszący klocek']
];

for (const [id, image, alt] of diagrams) {
  const start = source.indexOf(`"id": "${id}"`);
  if (start < 0) throw new Error(`Nie znaleziono zadania ${id}`);
  const next = source.indexOf('\n              {\n                "id":', start + 1);
  const end = next < 0 ? source.length : next;
  let block = source.slice(start, end);
  if (block.includes(image)) continue;
  const needle = '"content": "';
  const contentAt = block.indexOf(needle);
  if (contentAt < 0) throw new Error(`Nie znaleziono rozwiązania ${id}`);
  const figure = `<figure class=\\"solution-force-figure\\">\\n  <img src=\\"img/rigid/${image}\\" alt=\\"${alt}\\" class=\\"task-image\\" />\\n</figure>\\n`;
  block = block.slice(0, contentAt) + needle + figure + block.slice(contentAt + needle.length);
  source = source.slice(0, start) + block + source.slice(end);
}

fs.writeFileSync(file, source);
console.log('Dodano schematy sił do rozwiązań zadań 15, 16, 17, 21, 22 i 23.');
