const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'js', 'data-courses.js');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, 'utf8'), sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;
const section = courses['matura-fizyka'].sections.find((item) => item.id === 'm-bryla');
const matura = section.subchapters.find((item) => item.id === 'sub-bryla-matura');

const intro = [
  {
    id: 'sub-bryla-ruch', number: 1, icon: '🔄', title: '1. Ruch postępowy i obrotowy, środek masy', shortTitle: 'Ruch i środek masy',
    desc: 'Opis ruchu bryły jako całości oraz jej obrotu wokół osi. Prędkość, przyspieszenie, toczenie i położenie środka masy.',
    formulaCheat: '$v=\omega R$ &nbsp; $a=\varepsilon R$ &nbsp; $\vec r_{CM}=\frac{\sum m_i\vec r_i}{\sum m_i}$',
    theory: `<div class="theory-section"><div class="theory-subtitle">Ruch postępowy</div><p>W ruchu postępowym wszystkie punkty bryły mają w danej chwili takie samo przesunięcie, prędkość i przyspieszenie. Do opisu ruchu całej bryły często wystarcza ruch jej środka masy.</p><div class="theory-subtitle">Ruch obrotowy</div><p>W ruchu obrotowym punkty bryły poruszają się po okręgach wokół osi. Zależność między prędkością liniową punktu a prędkością kątową ma postać $v=\omega r$, a dla punktu na obwodzie $v=\omega R$.</p><div class="theory-subtitle">Toczenie</div><p>Przy toczeniu bez poślizgu obowiązuje $v_{CM}=\omega R$ oraz $a_{CM}=\varepsilon R$. Środek masy opisuje ruch postępowy, a bryła jednocześnie obraca się wokół własnej osi.</p></div>`,
    tasks: []
  },
  {
    id: 'sub-bryla-moment-sily', number: 2, icon: '↗️', title: '2. Moment siły i moment bezwładności', shortTitle: 'Moment siły i bezwładności',
    desc: 'Ramię siły, moment względem punktu i osi oraz warunki równowagi bryły sztywnej.',
    formulaCheat: '$M=Fr\sin\alpha$ &nbsp; $\sum M=0$ &nbsp; $\sum\vec F=0$',
    theory: `<div class="theory-section"><div class="theory-subtitle">Definicja</div><p>Moment siły określa zdolność siły do obracania ciała względem wybranego punktu lub osi: $M=Fr\sin\alpha$, gdzie $r$ jest odległością punktu przyłożenia od osi, a $\alpha$ – kątem między ramieniem i siłą.</p><div class="theory-subtitle">Równowaga bryły</div><p>Bryła sztywna pozostaje w spoczynku, gdy spełnione są jednocześnie warunki $\sum\vec F=0$ oraz $\sum M=0$. W zadaniach z belkami najwygodniej wybierać punkt, względem którego moment jednej lub kilku sił jest równy zero.</p><div class="theory-subtitle">Ramię siły</div><p>Ramię siły to najkrótsza odległość od osi obrotu do linii działania siły. Zawsze uwzględniaj znak momentu wynikający ze zwrotu obrotu.</p></div>`,
    tasks: []
  },
  {
    id: 'sub-bryla-energia', number: 3, icon: '⚡', title: '3. Energia bryły sztywnej', shortTitle: 'Energia bryły',
    desc: 'Energia kinetyczna ruchu postępowego i obrotowego oraz przemiany energii podczas toczenia.',
    formulaCheat: '$E_k=\frac12mv^2$ &nbsp; $E_{obr}=\frac12I\omega^2$ &nbsp; $E_k^{całk}=E_k+E_{obr}$',
    theory: `<div class="theory-section"><div class="theory-subtitle">Dwa składniki energii</div><p>Poruszająca się bryła może jednocześnie przesuwać się i obracać. Jej energia kinetyczna jest sumą: $E_k^{całk}=\frac12mv^2+\frac12I\omega^2$.</p><div class="theory-subtitle">Moment bezwładności</div><p>Moment bezwładności $I$ zależy od rozkładu masy względem osi. Im dalej od osi znajduje się masa, tym większy jest wkład do momentu bezwładności.</p><div class="theory-subtitle">Zasada zachowania energii</div><p>W układzie bez strat suma energii mechanicznej pozostaje stała. Przy toczeniu bez poślizgu można łączyć zależność $v=\omega R$ z bilansem energii.</p></div>`,
    tasks: []
  },
  {
    id: 'sub-bryla-moment-pedu', number: 4, icon: '🌀', title: '4. Moment pędu', shortTitle: 'Moment pędu',
    desc: 'Moment pędu bryły, związek z prędkością kątową oraz zasada zachowania momentu pędu.',
    formulaCheat: '$L=I\omega$ &nbsp; $\Delta L=M\Delta t$ &nbsp; $L=\mathrm{const}$, gdy $M_{zew}=0$',
    theory: `<div class="theory-section"><div class="theory-subtitle">Definicja</div><p>Moment pędu bryły obracającej się wokół stałej osi opisuje wzór $L=I\omega$. Zależy on od momentu bezwładności i prędkości kątowej.</p><div class="theory-subtitle">Zmiana momentu pędu</div><p>Moment wypadkowy sił zewnętrznych zmienia moment pędu: $\Delta L=M\Delta t$. Jeżeli moment zewnętrzny jest równy zero, moment pędu układu pozostaje stały.</p><div class="theory-subtitle">Zastosowania</div><p>Zasada zachowania momentu pędu pojawia się m.in. w zadaniach o obracających się układach, zmianie rozkładu masy oraz zderzeniach obrotowych.</p></div>`,
    tasks: []
  }
];

matura.number = 5;
matura.title = '5. Zadania maturalne CKE — bryła sztywna';
section.subchapters = [...intro, matura];
fs.writeFileSync(dataPath, `window.FIZYKOREK_COURSES = ${JSON.stringify(courses, null, 2)};\n`);
console.log('Dodano 4 podtematy wprowadzające przed zadaniami maturalnymi.');
