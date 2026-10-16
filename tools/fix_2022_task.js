const fs = require('fs');

let content = fs.readFileSync('js/data-courses.js', 'utf8');
const vm = require('vm');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(content, context);

let courses = context.window.FIZYKOREK_COURSES;
let sections = courses['matura-fizyka'].sections;

let kinSec = sections.find(s => s.id === 'm-kinematyka');
let kinSub = kinSec.subchapters.find(sub => sub.id === 'sub-matura-cke');

let oldTaskIndex = kinSub.tasks.findIndex(t => t.id === 'matura-cke-2022-zad-1');
let oldTask = kinSub.tasks.splice(oldTaskIndex, 1)[0];

// Rename old task
oldTask.id = 'matura-cke-2022-pokazowy-zad-1';
oldTask.title = 'Matura arkusz pokazowy marzec 2022 zad.1';
kinSub.tasks.push(oldTask);

// Create new task for real Matura 2022
let newTask = {
    id: 'matura-cke-2022-zad-1',
    title: 'Matura maj 2022 zad.1',
    type: 'theory',
    difficulty: 3,
    source: 'CKE Matura (Maj 2022)',
    tags: ['kinematyka', 'dynamika', 'wykresy', 'matura'],
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Ciała A i B poruszały się w układzie inercjalnym w tę samą stronę, wzdłuż linii prostych równoległych. Na poniższym diagramie przedstawiono dla każdego z ciał A i B wykresy zależności wartości $v$ prędkości tych ciał od czasu $t$, od chwili $t = 0$ do chwili $t = 45\\text{ s}$. W chwili $t = 0$ ciała A i B znajdowały się obok siebie. Przyjmij, że odległość między torami ruchów obu ciał jest tak mała, że można ją pominąć.</p>
<p style="text-align: center;">Diagram</p>
<div class="chart-container-svg">
<img src="img/cke_2022_zad1_diagram.png" alt="Wykres prędkości dla ciał A i B" class="theory-img" style="max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>
<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Wpisz właściwą liczbę w wykropkowanym miejscu.</strong></p>
<br>
<p>Prędkość względna ciał A i B w chwili $t = 25\\text{ s}$ ma wartość ......... $\\frac{\\text{m}}{\\text{s}}$</p>
<h4>Zadanie 1.2. (0–2)</h4>
<p>Masa ciała A jest równa $12\\text{ kg}$.</p>
<br>
<p><strong>Oblicz wartość siły wypadkowej działającej na ciało A w chwili $t = 35\\text{ s}$.</strong></p>
<h4>Zadanie 1.3. (0–3)</h4>
<p><strong>Oblicz odległość pomiędzy ciałami A i B w chwili $t = 45\\text{ s}$.</strong></p>
<br>
<p>Przyjmij, że w chwili $t = 0$ odległość pomiędzy ciałami A i B była równa $0$.</p>
</div>`,
    solution: {
        givens: 'Wykres $v(t)$ dla ciał A i B.\n$m_A = 12\\text{ kg}$',
        intuition: 'Zadanie 1.1: Prędkość względna to wartość bezwzględna różnicy prędkości obu ciał poruszających się w tę samą stronę.\nZadanie 1.2: Siłę wypadkową obliczamy z II zasady dynamiki Newtona ($F = ma$), gdzie przyspieszenie to zmiana prędkości w czasie odczytana z wykresu.\nZadanie 1.3: Odległość między ciałami to różnica dróg przebytych przez oba ciała. Drogę można obliczyć jako pole pod wykresem $v(t)$.',
        steps: [
            {
                title: "Zadanie 1.1 - Prędkość względna",
                content: "Z wykresu odczytujemy prędkości w chwili $t = 25\\text{ s}$:\n$v_A = 20\\text{ m/s}$\n$v_B = 10\\text{ m/s}$\n\nCiała poruszają się w tę samą stronę, więc ich prędkość względna to różnica ich prędkości:\n$v_{\\text{wzgl}} = |v_A - v_B| = |20 - 10| = 10\\text{ m/s}$"
            },
            {
                title: "Zadanie 1.2 - Siła wypadkowa na ciało A",
                content: "Aby obliczyć siłę wypadkową, musimy wyznaczyć przyspieszenie ciała A w chwili $t = 35\\text{ s}$.\nZ wykresu widać, że w przedziale od $t = 30\\text{ s}$ do $t = 45\\text{ s}$ prędkość ciała A maleje liniowo od $20\\text{ m/s}$ do $0\\text{ m/s}$.\n\nPrzyspieszenie $a_A = \\frac{\\Delta v}{\\Delta t} = \\frac{0 - 20}{45 - 30} = \\frac{-20}{15} = -\\frac{4}{3}\\text{ m/s}^2$\n\nWartość siły wypadkowej (zgodnie z II zasadą dynamiki $F = ma$):\n$F = m_A \\cdot |a_A| = 12\\text{ kg} \\cdot \\frac{4}{3}\\text{ m/s}^2 = 16\\text{ N}$"
            },
            {
                title: "Zadanie 1.3 - Odległość pomiędzy ciałami",
                content: "Droga przebyta przez ciało jest równa polu figury pod wykresem $v(t)$.\n\n**Droga ciała A ($s_A$):**\nPole pod wykresem to suma pola prostokąta (od 0 do 30 s) i trójkąta (od 30 do 45 s).\n$s_A = (30\\text{ s} \\cdot 20\\text{ m/s}) + \\frac{1}{2} \\cdot 15\\text{ s} \\cdot 20\\text{ m/s}$\n$s_A = 600\\text{ m} + 150\\text{ m} = 750\\text{ m}$\n\n**Droga ciała B ($s_B$):**\nPole pod wykresem to suma trójkąta (0-15s), prostokąta (15-30s) i trójkąta (30-45s), lub po prostu pole trapezu (od 0 do 45s).\n$s_B = \\frac{1}{2} \\cdot 15 \\cdot 20 + 15 \\cdot 10 + \\frac{1}{2} \\cdot 15 \\cdot 10 = 150 + 150 + 75 = 375\\text{ m}$\n\n**Odległość:**\n$d = s_A - s_B = 750\\text{ m} - 375\\text{ m} = 375\\text{ m}$"
            }
        ],
        answer: '1.1: $10\\text{ m/s}$\n1.2: $16\\text{ N}$\n1.3: $375\\text{ m}$'
    }
};

// Insert at old position
kinSub.tasks.splice(oldTaskIndex, 0, newTask);

fs.writeFileSync('js/data-courses.js', 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n');
console.log('Fixed Matura 2022 Task');
