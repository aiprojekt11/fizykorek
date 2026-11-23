const fs = require('fs');
const vm = require('vm');

const file = 'js/data-courses.js';
const content = fs.readFileSync(file, 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const courses = sandbox.window.FIZYKOREK_COURSES;
const course = courses['matura-fizyka'];
const bryla = course.sections.find(s => s.id === 'm-bryla');
const sub2 = bryla.subchapters.find(s => s.id === 'sub-bryla-moment-sily');

if (!sub2) throw new Error('Nie znaleziono sub-bryla-moment-sily');

function updateTask(id, patch) {
  const task = sub2.tasks.find(t => t.id === id);
  if (!task) throw new Error('Nie znaleziono zadania ' + id);
  if (patch.problem !== undefined) task.problem = patch.problem;
  if (patch.solution !== undefined) task.solution = patch.solution;
}

// b-zad-15
updateTask('b-zad-15', {
  problem: `<p class="problem-paragraph">Na końcach nieważkiej belki zawieszono klocki. Klocek $m_1 = 3\\text{ kg}$ znajduje się $0{,}60\\text{ m}$ na lewo od osi O, a klocek $m_2$ – $0{,}40\\text{ m}$ na prawo. Oblicz $m_2$, jeżeli belka pozostaje pozioma.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/task15-beam-equilibrium.svg" alt="Nieważka belka z osią O i klockami m1 i m2" class="task-image" />
</div>`,
  solution: {
    givens: "$m_1 = 3\\text{ kg}$, $r_1 = 0{,}60\\text{ m}$, $r_2 = 0{,}40\\text{ m}$.",
    steps: [
      {
        title: "Warunek równowagi momentów sił względem osi O",
        content: `<figure class="solution-force-figure">
  <img src="img/rigid/task15-beam-equilibrium-solution.svg" alt="Schemat sił: ciężary klocków i siła reakcji osi O" class="task-image" />
</figure>
Belka jest nieważka, a moment siły reakcji osi $F_O$ wynosi zero (działa w punkcie podparcia). Aby belka pozostawała pozioma, suma momentów sił względem osi O musi wynosić zero:
$$\\sum M_O = 0 \\implies m_1 g \\cdot r_1 = m_2 g \\cdot r_2$$
Po skróceniu $g$ wyznaczamy masę $m_2$:
$$m_2 = \\frac{m_1 \\cdot r_1}{r_2} = \\frac{3\\text{ kg} \\cdot 0{,}60\\text{ m}}{0{,}40\\text{ m}} = 4{,}5\\text{ kg}$$`
      }
    ],
    numerical: "$m_2 = 4{,}5\\text{ kg}$",
    answer: "Masa klocka wynosi $m_2 = 4{,}5\\text{ kg}$."
  }
});

// b-zad-16
updateTask('b-zad-16', {
  problem: `<p class="problem-paragraph">Jednorodna belka długości $4\\text{ m}$ i masie $10\\text{ kg}$ ma na końcach zawieszone klocki $m_1 = 5\\text{ kg}$ i $m_2 = 2\\text{ kg}$. Podporę P przesuwa się od środka masy S belki w stronę cięższego klocka. Oblicz odległość $x = |PS|$, dla której belka będzie w równowadze.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/task16-support-position.svg" alt="Jednorodna belka o długości 4 m z podporą P przesuniętą o x od środka masy S" class="task-image" />
</div>`,
  solution: {
    givens: "$L = 4\\text{ m}$, masa belki $M = 10\\text{ kg}$, $m_1 = 5\\text{ kg}$, $m_2 = 2\\text{ kg}$, środek masy S leży $2\\text{ m}$ od każdego końca.",
    steps: [
      {
        title: "Równowaga momentów sił względem podpory P",
        content: `<figure class="solution-force-figure">
  <img src="img/rigid/task16-support-position-solution.svg" alt="Schemat sił: ciężary klocków i belki oraz siła reakcji podpory P" class="task-image" />
</figure>
Ramiona sił względem podpory P wynoszą: $r_1 = 2 - x$ (dla $m_1 g$ po lewej), $r_S = x$ (dla $Mg$ po prawej) oraz $r_2 = 2 + x$ (dla $m_2 g$ po prawej). Moment siły reakcji podpory $F_P$ wynosi zero.
Z warunku równowagi momentów sił względem punktu P:
$$m_1 g (2 - x) = Mg x + m_2 g (2 + x)$$
Dzielimy obustronnie przez $g$ i podstawiamy dane:
$$5(2 - x) = 10x + 2(2 + x)$$
$$10 - 5x = 12x + 4 \\implies 17x = 6 \\implies x = \\frac{6}{17}\\text{ m} \\approx 0{,}35\\text{ m}$$`
      }
    ],
    numerical: "$x = \\frac{6}{17}\\text{ m} \\approx 0{,}35\\text{ m}$",
    answer: "Odległość podpory P od środka masy belki wynosi $x = \\frac{6}{17}\\text{ m} \\approx 0{,}35\\text{ m}$."
  }
});

// b-zad-17
updateTask('b-zad-17', {
  problem: `<p class="problem-paragraph">Jednorodna belka o masie $60\\text{ kg}$ jest połączona ze sztywnymi pionowymi podporami w punktach A i B odległych o $1{,}0\\text{ m}$. Środek masy C leży $1{,}4\\text{ m}$ na prawo od A. Połączenia mogą działać na belkę zarówno w górę, jak i w dół. Narysuj zwroty sił $F_A$ i $F_B$, a następnie oblicz ich wartości.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/task17-beam-reactions.svg" alt="Jednorodna belka podparta w punktach A i B z ciężarem mg w środku masy C" class="task-image" />
</div>`,
  solution: {
    givens: "$m = 60\\text{ kg}$, $F_g = mg = 600\\text{ N}$, $|AB| = 1{,}0\\text{ m}$, $|AC| = 1{,}4\\text{ m}$.",
    steps: [
      {
        title: "Układ równań równowagi sił i momentów sił",
        content: `<figure class="solution-force-figure">
  <img src="img/rigid/task17-beam-reactions-solution.svg" alt="Schemat sił: siły reakcji w punktach A i B oraz ciężar belki" class="task-image" />
</figure>
Przyjmujemy oś pionową skierowaną w górę i zapisujemy warunki równowagi belki (momenty liczymy względem punktu A):
$$\\begin{cases} F_A + F_B - mg = 0 \\\\ F_B \\cdot |AB| - mg \\cdot |AC| = 0 \\end{cases}$$`
      },
      {
        title: "Wyznaczenie wartości i zwrotów sił F_B oraz F_A",
        content: `Z drugiego równania wyznaczamy siłę $F_B$:
$$F_B = \\frac{mg \\cdot |AC|}{|AB|} = \\frac{600\\text{ N} \\cdot 1{,}4\\text{ m}}{1{,}0\\text{ m}} = 840\\text{ N}$$
Dodatni wynik oznacza, że siła $F_B$ działa pionowo w górę.
Z pierwszego równania wyznaczamy siłę $F_A$:
$$F_A = mg - F_B = 600\\text{ N} - 840\\text{ N} = -240\\text{ N}$$
Znak minus oznacza, że siła $F_A$ działa pionowo w dół (przytrzymuje lewy koniec belki przed uniesieniem).`
      }
    ],
    numerical: "$F_B = 840\\text{ N}$ (w górę), $F_A = 240\\text{ N}$ (w dół)",
    answer: "Siła $F_B = 840\\text{ N}$ działa pionowo w górę, a siła $F_A = 240\\text{ N}$ działa pionowo w dół."
  }
});

// b-zad-21
updateTask('b-zad-21', {
  problem: `<p class="problem-paragraph">Dwa współosiowe bębny są połączone na sztywno. Na bęben o promieniu $r_1 = 0{,}10\\text{ m}$ nawinięto nić z klockiem $m_1 = 4\\text{ kg}$, a na bęben o promieniu $r_2 = 0{,}20\\text{ m}$ – nić z klockiem $m_2 = 1\\text{ kg}$. Nici rozwijają się po przeciwnych stronach. Moment bezwładności bębnów wynosi $I = 0{,}30\\text{ kg}\\cdot\\text{m}^2$. Ustal kierunek ruchu, a następnie oblicz $\\varepsilon$, przyspieszenia klocków oraz siły naciągu obu nici $F_{n1}$ i $F_{n2}$.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/task21-coaxial-drums.svg" alt="Współosiowe bębny z klockami m1 i m2" class="task-image" />
</div>`,
  solution: {
    givens: "$r_1 = 0{,}10\\text{ m}$, $m_1 = 4\\text{ kg}$, $r_2 = 0{,}20\\text{ m}$, $m_2 = 1\\text{ kg}$, $I = 0{,}30\\text{ kg}\\cdot\\text{m}^2$, $g = 10\\text{ m/s}^2$.",
    steps: [
      {
        title: "Ustalenie kierunku ruchu układu",
        content: `<figure class="solution-force-figure">
  <img src="img/rigid/task21-coaxial-drums-solution.svg" alt="Schemat sił działających na klocki przy współosiowych bębnach" class="task-image" />
</figure>
Porównujemy momenty sił ciężkości względem osi obrotu bębnów:
$$M_{1} = m_1 g r_1 = 4\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 0{,}10\\text{ m} = 4\\text{ N}\\cdot\\text{m}$$
$$M_{2} = m_2 g r_2 = 1\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 0{,}20\\text{ m} = 2\\text{ N}\\cdot\\text{m}$$
Ponieważ $M_1 > M_2$, klocek $m_1$ opada w dół, a klocek $m_2$ unosi się w górę.`
      },
      {
        title: "Układ równań dynamiki i wyznaczenie przyspieszenia kątowego",
        content: `Oznaczamy siły naciągu nici jako $F_{n1}$ oraz $F_{n2}$ i zapisujemy układ równań ruchu dla klocków oraz bębnów:
$$\\begin{cases} m_1 g - F_{n1} = m_1 a_1 \\\\ F_{n2} - m_2 g = m_2 a_2 \\\\ F_{n1} r_1 - F_{n2} r_2 = I\\varepsilon \\\\ a_1 = \\varepsilon r_1, \\quad a_2 = \\varepsilon r_2 \\end{cases}$$
Z pierwszych dwóch równań wyznaczamy $F_{n1} = m_1(g - \\varepsilon r_1)$ oraz $F_{n2} = m_2(g + \\varepsilon r_2)$ i podstawiamy do równania ruchu obrotowego bębnów:
$$m_1(g - \\varepsilon r_1)r_1 - m_2(g + \\varepsilon r_2)r_2 = I\\varepsilon$$
$$\\varepsilon = \\frac{m_1 g r_1 - m_2 g r_2}{I + m_1 r_1^2 + m_2 r_2^2} = \\frac{4 - 2}{0{,}30 + 4 \\cdot 0{,}01 + 1 \\cdot 0{,}04} = \\frac{2}{0{,}38} = \\frac{100}{19}\\text{ rad/s}^2 \\approx 5{,}26\\text{ rad/s}^2$$`
      },
      {
        title: "Obliczenie przyspieszeń klocków i sił naciągu nici",
        content: `Przyspieszenia liniowe klocków:
$$a_1 = \\varepsilon r_1 = \\frac{100}{19} \\cdot 0{,}10 = \\frac{10}{19}\\text{ m/s}^2 \\approx 0{,}53\\text{ m/s}^2 \\quad (\\text{w dół})$$
$$a_2 = \\varepsilon r_2 = \\frac{100}{19} \\cdot 0{,}20 = \\frac{20}{19}\\text{ m/s}^2 \\approx 1{,}05\\text{ m/s}^2 \\quad (\\text{w górę})$$
Siły naciągu nici:
$$F_{n1} = m_1(g - a_1) = 4 \\cdot \\left(10 - \\frac{10}{19}\\right) = \\frac{720}{19}\\text{ N} \\approx 37{,}9\\text{ N}$$
$$F_{n2} = m_2(g + a_2) = 1 \\cdot \\left(10 + \\frac{20}{19}\\right) = \\frac{210}{19}\\text{ N} \\approx 11{,}1\\text{ N}$$`
      }
    ],
    numerical: "$\\varepsilon \\approx 5{,}26\\text{ rad/s}^2$, $a_1 \\approx 0{,}53\\text{ m/s}^2$, $a_2 \\approx 1{,}05\\text{ m/s}^2$, $F_{n1} \\approx 37{,}9\\text{ N}$, $F_{n2} \\approx 11{,}1\\text{ N}$",
    answer: "Klocek $m_1$ opada, a $m_2$ unosi się. $\\varepsilon \\approx 5{,}26\\text{ rad/s}^2$, $a_1 \\approx 0{,}53\\text{ m/s}^2$ (w dół), $a_2 \\approx 1{,}05\\text{ m/s}^2$ (w górę), $F_{n1} \\approx 37{,}9\\text{ N}$, $F_{n2} \\approx 11{,}1\\text{ N}$."
  }
});

// b-zad-22
updateTask('b-zad-22', {
  problem: `<p class="problem-paragraph">Klocek $m_1 = 2\\text{ kg}$ leży na stole i jest połączony nicią z wiszącym klockiem $m_2 = 1\\text{ kg}$. Nić przechodzi przez jednorodny krążek o masie $M = 2\\text{ kg}$; $I = \\frac{1}{2}MR^2$. Współczynnik tarcia kinetycznego klocka o stół wynosi $\\mu = 0{,}20$. Oblicz przyspieszenie układu oraz siły naciągu nici $F_{n1}$ i $F_{n2}$. Wyjaśnij, dlaczego siły naciągu nie są równe.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/task22-massive-pulley.svg" alt="Układ klocka m1 na stole, masywnego krążka M i klocka wiszącego m2" class="task-image" />
</div>`,
  solution: {
    givens: "$m_1 = 2\\text{ kg}$, $m_2 = 1\\text{ kg}$, $M = 2\\text{ kg}$, $I = \\frac{1}{2}MR^2$, $\\mu = 0{,}20$, $g = 10\\text{ m/s}^2$.",
    steps: [
      {
        title: "Układ równań dynamiki i przyspieszenie układu",
        content: `<figure class="solution-force-figure">
  <img src="img/rigid/task22-massive-pulley-solution.svg" alt="Schemat sił w układzie z masywnym krążkiem" class="task-image" />
</figure>
Siła tarcia kinetycznego działająca na klocek $m_1$ wynosi:
$$F_T = \\mu F_N = \\mu m_1 g = 0{,}20 \\cdot 2\\text{ kg} \\cdot 10\\text{ m/s}^2 = 4\\text{ N}$$
Zapisujemy układ równań dla klocka $m_1$, klocka $m_2$ oraz masywnego krążka $M$:
$$\\begin{cases} F_{n1} - F_T = m_1 a \\\\ m_2 g - F_{n2} = m_2 a \\\\ (F_{n2} - F_{n1}) R = I\\varepsilon \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$
Z trzeciego równania po podstawieniu $I = \\frac{1}{2}MR^2$ i $\\varepsilon = \\frac{a}{R}$ otrzymujemy:
$$F_{n2} - F_{n1} = \\frac{1}{2}Ma$$
Dodajemy stronami pierwsze, drugie oraz przekształcone trzecie równanie:
$$m_2 g - F_T = \\left(m_1 + m_2 + \\frac{1}{2}M\\right)a$$
$$10 - 4 = (2 + 1 + 1)a \\implies 6 = 4a \\implies a = 1{,}5\\text{ m/s}^2$$`
      },
      {
        title: "Obliczenie sił naciągu nici i wyjaśnienie ich różnicy",
        content: `Podstawiamy $a = 1{,}5\\text{ m/s}^2$ do pierwszych dwóch równań układu:
$$F_{n1} = m_1 a + F_T = 2 \\cdot 1{,}5 + 4 = 7\\text{ N}$$
$$F_{n2} = m_2(g - a) = 1 \\cdot (10 - 1{,}5) = 8{,}5\\text{ N}$$
Siły naciągu $F_{n1}$ i $F_{n2}$ nie są równe, ponieważ krążek ma niezerowy moment bezwładności ($I > 0$). Do nadania mu przyspieszenia kątowego $\\varepsilon$ potrzebny jest wypadkowy moment siły $M_w = (F_{n2} - F_{n1})R > 0$, więc $F_{n2} > F_{n1}$.`
      }
    ],
    numerical: "$a = 1{,}5\\text{ m/s}^2$, $F_{n1} = 7\\text{ N}$, $F_{n2} = 8{,}5\\text{ N}$",
    answer: "Przyspieszenie układu wynosi $a = 1{,}5\\text{ m/s}^2$, a siły naciągu nici $F_{n1} = 7\\text{ N}$ oraz $F_{n2} = 8{,}5\\text{ N}$. Różnica sił naciągu wytwarza moment siły rozpędzający masywny krążek."
  }
});

// b-zad-23
updateTask('b-zad-23', {
  problem: `<p class="problem-paragraph">Jednorodny walec o masie $m = 1\\text{ kg}$ toczy się bez poślizgu po stole. Do jego osi przymocowano lekką nić przełożoną przez nieważki bloczek; na drugim końcu wisi klocek o tej samej masie $m$. Przyjmij $I = \\frac{1}{2}mR^2$. Wyznacz zwrot siły tarcia działającej na walec oraz oblicz przyspieszenie układu, siłę naciągu nici $F_n$ i wartość siły tarcia $F_T$.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/task23-rolling-cylinder.svg" alt="Jednorodny walec na stole z nicią przymocowaną do osi i wiszącym klockiem" class="task-image" />
</div>`,
  solution: {
    givens: "Walec: $m = 1\\text{ kg}$, $I = \\frac{1}{2}mR^2$; klocek: $m = 1\\text{ kg}$, bloczek nieważki, $g = 10\\text{ m/s}^2$.",
    steps: [
      {
        title: "Zwrot siły tarcia statycznego",
        content: `<figure class="solution-force-figure">
  <img src="img/rigid/task23-rolling-cylinder-solution.svg" alt="Schemat sił działających na walec i wiszący klocek" class="task-image" />
</figure>
Siła naciągu nici $F_n$ jest przyłożona w osi walca, więc jej moment względem środka masy wynosi zero. Aby walec toczył się w prawo bez poślizgu (zgodnie z ruchem wskazówek zegara), jedyna siła dająca niezerowy moment – siła tarcia statycznego $F_T$ w punkcie styku z podłożem – musi być skierowana w lewo.`
      },
      {
        title: "Układ równań ruchu i wyznaczenie szukanych wielkości",
        content: `Zapisujemy układ równań dla ruchu postępowego i obrotowego walca oraz dla wiszącego klocka:
$$\\begin{cases} F_n - F_T = ma \\\\ F_T \\cdot R = I\\varepsilon \\\\ mg - F_n = ma \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$
Z drugiego równania po podstawieniu $I = \\frac{1}{2}mR^2$ oraz $\\varepsilon = \\frac{a}{R}$ otrzymujemy:
$$F_T \\cdot R = \\frac{1}{2}mR^2 \\cdot \\frac{a}{R} \\implies F_T = \\frac{1}{2}ma$$
Dodajemy stronami pierwsze i trzecie równanie układu, aby wyeliminować $F_n$:
$$mg - F_T = 2ma$$
Podstawiamy $F_T = \\frac{1}{2}ma$:
$$mg - \\frac{1}{2}ma = 2ma \\implies mg = \\frac{5}{2}ma \\implies a = \\frac{2}{5}g = \\frac{2 \\cdot 10}{5} = 4\\text{ m/s}^2$$
Obliczamy wartość siły tarcia $F_T$ i siły naciągu nici $F_n$:
$$F_T = \\frac{1}{2}ma = \\frac{1}{2} \\cdot 1\\text{ kg} \\cdot 4\\text{ m/s}^2 = 2\\text{ N}$$
$$F_n = m(g - a) = 1\\text{ kg} \\cdot (10 - 4)\\text{ m/s}^2 = 6\\text{ N}$$`
      }
    ],
    numerical: "$a = 4\\text{ m/s}^2$, $F_T = 2\\text{ N}$, $F_n = 6\\text{ N}$",
    answer: "Siła tarcia działa na walec w lewo i ma wartość $F_T = 2\\text{ N}$. Przyspieszenie układu wynosi $a = 4\\text{ m/s}^2$, a siła naciągu nici $F_n = 6\\text{ N}$."
  }
});

const output = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync(file, output, 'utf8');
console.log('Zaktualizowano rozwiązania w sub-bryla-moment-sily!');

