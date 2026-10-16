const fs = require('fs');

const fileData = fs.readFileSync('js/data-courses.js', 'utf8');
const headerMatch = fileData.match(/^(\/\*\*[\s\S]*?\*\/\s*window\.FIZYKOREK_COURSES\s*=\s*)/);
const headerText = headerMatch[1];
const data = JSON.parse(fileData.slice(headerText.length).replace(/;\s*$/, ''));

const course = data['matura-fizyka'];
const kinSec = course.sections.find(s => s.id === 'm-kinematyka');
const subMatura = kinSec.subchapters.find(s => s.id === 'sub-matura-cke');

console.log('Original tasks in sub-matura-cke:', subMatura.tasks.length);

// IDs of tasks to move:
// 51: matura-cke-2024-zad-1 -> Praca
// 55: matura-cke-2020-zad-1 -> Dynamika
// 58: matura-cke-2017-zad-1 -> Dynamika
// 63: matura-cke-2024-czerwiec-zad-1 -> Bryła sztywna
// 66: matura-cke-2022-grudzien-zad-1 -> Dynamika
// 69: matura-cke-2021-marzec-zad-1 -> Dynamika

const task51 = subMatura.tasks.find(t => t.id === 'matura-cke-2024-zad-1');
const task55 = subMatura.tasks.find(t => t.id === 'matura-cke-2020-zad-1');
const task58 = subMatura.tasks.find(t => t.id === 'matura-cke-2017-zad-1');
const task63 = subMatura.tasks.find(t => t.id === 'matura-cke-2024-czerwiec-zad-1');
const task66 = subMatura.tasks.find(t => t.id === 'matura-cke-2022-grudzien-zad-1');
const task69 = subMatura.tasks.find(t => t.id === 'matura-cke-2021-marzec-zad-1');

const moveIds = new Set([
  'matura-cke-2024-zad-1',
  'matura-cke-2020-zad-1',
  'matura-cke-2017-zad-1',
  'matura-cke-2024-czerwiec-zad-1',
  'matura-cke-2022-grudzien-zad-1',
  'matura-cke-2021-marzec-zad-1'
]);

// Keep remaining in Kinematyka
subMatura.tasks = subMatura.tasks.filter(t => !moveIds.has(t.id));
console.log('Remaining tasks in sub-matura-cke (Kinematyka):', subMatura.tasks.length);

// 1. Configure m-dynamika
let dynSec = course.sections.find(s => s.id === 'm-dynamika');
dynSec.isComingSoon = false;
dynSec.badge = '4 zadania CKE';
dynSec.subchapters = [
  {
    id: 'sub-dynamika-matura',
    title: 'Zadania maturalne CKE (Dynamika)',
    shortTitle: 'Matura CKE',
    number: 1,
    icon: '⚖️',
    desc: 'Zadania maturalne CKE sprawdzające zasady dynamiki Newtona, tarcie i siły bezwładności.',
    formulaCheat: '\\vec{F}_w = m \\vec{a} \\qquad T = \\mu N \\qquad \\vec{F}_{bez} = -m \\vec{a}_u \\qquad F_r = \\frac{m v^2}{r}',
    tasks: [task55, task58, task66, task69]
  }
];

// 2. Create m-praca section
const pracaSec = {
  id: 'm-praca',
  title: 'Dział 3: Praca, Moc i Energia',
  icon: '⚡',
  badge: '1 zadanie CKE',
  isComingSoon: false,
  desc: 'Praca mechaniczna, moc, energia kinetyczna i potencjalna, zasada zachowania energii mechanicznej.',
  subchapters: [
    {
      id: 'sub-praca-matura',
      title: 'Zadania maturalne CKE (Praca i Energia)',
      shortTitle: 'Matura CKE',
      number: 1,
      icon: '⚡',
      desc: 'Zadania maturalne CKE dotyczące pracy mechanicznej, mocy i przemian energii.',
      formulaCheat: 'W = F \\cdot s \\cdot \\cos\\alpha \\qquad E_k = \\frac{m v^2}{2} \\qquad E_p = mgh \\qquad W = \\Delta E',
      tasks: [task51]
    }
  ],
  tasks: []
};

// 3. Configure m-bryla
let brylaSec = course.sections.find(s => s.id === 'm-bryla');
brylaSec.title = 'Dział 4: Bryła Sztywna i Ruch Obrotowy';
brylaSec.isComingSoon = false;
brylaSec.badge = '1 zadanie CKE';
brylaSec.subchapters = [
  {
    id: 'sub-bryla-matura',
    title: 'Zadania maturalne CKE (Bryła Sztywna)',
    shortTitle: 'Matura CKE',
    number: 1,
    icon: '🔄',
    desc: 'Zadania maturalne CKE dotyczące ruchu obrotowego bryły sztywnej, momentu siły i energii obrotu.',
    formulaCheat: 'M = I \\epsilon \\qquad I = \\sum m_i r_i^2 \\qquad L = I \\omega \\qquad E_{obr} = \\frac{I \\omega^2}{2}',
    tasks: [task63]
  }
];

// 4. Update m-grawitacja title numbering
let grawSec = course.sections.find(s => s.id === 'm-grawitacja');
if (grawSec) {
  grawSec.title = 'Dział 5: Grawitacja i Ruch Planet';
}

// Rebuild sections array with m-praca in order: Kinematyka, Dynamika, Praca, Bryła, Grawitacja
course.sections = [
  kinSec,
  dynSec,
  pracaSec,
  brylaSec,
  ...(grawSec ? [grawSec] : [])
];

const newJsonText = JSON.stringify(data, null, 2);
const finalContent = headerText + newJsonText + ';\n';
fs.writeFileSync('js/data-courses.js', finalContent, 'utf8');

console.log('Successfully moved tasks:');
console.log(' - Zadanie 51 -> m-praca (sub-praca-matura)');
console.log(' - Zadania 55, 58, 66, 69 -> m-dynamika (sub-dynamika-matura)');
console.log(' - Zadanie 63 -> m-bryla (sub-bryla-matura)');
