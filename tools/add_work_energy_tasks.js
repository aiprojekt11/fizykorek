// tools/add_work_energy_tasks.js
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const svgTask7 = `<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;">
  <defs>
    <marker id="arrow-p7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <polygon points="60,180 160,70 260,70 260,180" fill="rgba(37,99,235,0.08)"/>
  <line x1="50" y1="180" x2="340" y2="180" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-p7)"/>
  <line x1="60" y1="190" x2="60" y2="30" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-p7)"/>
  <text x="345" y="185" font-size="14" font-weight="600" fill="#1e293b" font-style="italic">s [m]</text>
  <text x="60" y="22" font-size="14" font-weight="600" fill="#1e293b" font-style="italic" text-anchor="middle">F [N]</text>
  <line x1="160" y1="70" x2="160" y2="180" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="260" y1="70" x2="260" y2="180" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="60" y1="70" x2="160" y2="70" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <polyline points="60,180 160,70 260,70" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="60" cy="180" r="3.5" fill="#2563eb"/>
  <circle cx="160" cy="70" r="3.5" fill="#2563eb"/>
  <circle cx="260" cy="70" r="3.5" fill="#2563eb"/>
  <line x1="160" y1="177" x2="160" y2="183" stroke="#1e293b" stroke-width="1.5"/>
  <text x="160" y="202" font-size="13" font-weight="500" fill="#334155" text-anchor="middle">2</text>
  <line x1="260" y1="177" x2="260" y2="183" stroke="#1e293b" stroke-width="1.5"/>
  <text x="260" y="202" font-size="13" font-weight="500" fill="#334155" text-anchor="middle">4</text>
  <line x1="57" y1="70" x2="63" y2="70" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50" y="75" font-size="13" font-weight="500" fill="#334155" text-anchor="end">6</text>
  <text x="50" y="195" font-size="12" fill="#64748b" text-anchor="end">0</text>
</svg>`;

const svgTask12 = `<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;">
  <defs>
    <marker id="arrow-p12" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <polygon points="60,180 160,70 260,70 260,180" fill="rgba(37,99,235,0.08)"/>
  <line x1="50" y1="180" x2="340" y2="180" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-p12)"/>
  <line x1="60" y1="190" x2="60" y2="30" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-p12)"/>
  <text x="345" y="185" font-size="14" font-weight="600" fill="#1e293b" font-style="italic">t [s]</text>
  <text x="60" y="22" font-size="14" font-weight="600" fill="#1e293b" font-style="italic" text-anchor="middle">P [W]</text>
  <line x1="160" y1="70" x2="160" y2="180" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="260" y1="70" x2="260" y2="180" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="60" y1="70" x2="160" y2="70" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <polyline points="60,180 160,70 260,70" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="60" cy="180" r="3.5" fill="#2563eb"/>
  <circle cx="160" cy="70" r="3.5" fill="#2563eb"/>
  <circle cx="260" cy="70" r="3.5" fill="#2563eb"/>
  <line x1="160" y1="177" x2="160" y2="183" stroke="#1e293b" stroke-width="1.5"/>
  <text x="160" y="202" font-size="13" font-weight="500" fill="#334155" text-anchor="middle">2</text>
  <line x1="260" y1="177" x2="260" y2="183" stroke="#1e293b" stroke-width="1.5"/>
  <text x="260" y="202" font-size="13" font-weight="500" fill="#334155" text-anchor="middle">4</text>
  <line x1="57" y1="70" x2="63" y2="70" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50" y="75" font-size="13" font-weight="500" fill="#334155" text-anchor="end">60</text>
  <text x="50" y="195" font-size="12" fill="#64748b" text-anchor="end">0</text>
</svg>`;

const svgTask23 = `<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" style="max-width:380px; width:100%; height:auto; font-family:system-ui,-apple-system,sans-serif;">
  <defs>
    <marker id="arrow-p23" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <line x1="50" y1="180" x2="340" y2="180" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-p23)"/>
  <line x1="60" y1="190" x2="60" y2="30" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-p23)"/>
  <text x="345" y="185" font-size="14" font-weight="600" fill="#1e293b" font-style="italic">h [m]</text>
  <text x="60" y="22" font-size="14" font-weight="600" fill="#1e293b" font-style="italic" text-anchor="middle"><tspan>E</tspan><tspan font-size="10" dy="3">p</tspan><tspan font-size="14" dy="-3"> [J]</tspan></text>
  <line x1="220" y1="70" x2="220" y2="180" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="60" y1="70" x2="220" y2="70" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="60" y1="180" x2="220" y2="70" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <circle cx="60" cy="180" r="3.5" fill="#2563eb"/>
  <circle cx="220" cy="70" r="3.5" fill="#2563eb"/>
  <line x1="220" y1="177" x2="220" y2="183" stroke="#1e293b" stroke-width="1.5"/>
  <text x="220" y="202" font-size="13" font-weight="500" fill="#334155" text-anchor="middle">3</text>
  <line x1="57" y1="70" x2="63" y2="70" stroke="#1e293b" stroke-width="1.5"/>
  <text x="50" y="75" font-size="13" font-weight="500" fill="#334155" text-anchor="end">60</text>
  <text x="50" y="195" font-size="12" fill="#64748b" text-anchor="end">0</text>
</svg>`;

// PODROZDZIAŁ 1: PRACA I MOC (1-12)
const tasksSub1 = [
  {
    id: "p-zad-1",
    number: 1,
    title: "Zadanie 1. Praca siły w kierunku ruchu",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Wzór W = F·s"],
    problem: `<p class="problem-paragraph">Siła $20\\text{ N}$ przesuwa klocek o $3\\text{ m}$ w tym samym kierunku. Oblicz pracę tej siły.</p>`,
    solution: {
      givens: "$F = 20\\text{ N}$, $s = 3\\text{ m}$, zwrot siły zgodny ze zwrotem przemieszczenia ($\\alpha = 0^\\circ$).",
      steps: [
        {
          title: "Zastosowanie definicji pracy siły stałej",
          content: "Kierunek i zwrot siły pokrywają się z kierunkiem ruchu, więc $\\cos 0^\\circ = 1$:\n$$W = F \\cdot s = 20\\text{ N} \\cdot 3\\text{ m} = 60\\text{ J}$$"
        }
      ],
      answer: "Praca wykonana przez tę siłę wynosi $60\\text{ J}$."
    }
  },
  {
    id: "p-zad-2",
    number: 2,
    title: "Zadanie 2. Praca siły pod kątem 60°",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Kąt nachylenia"],
    problem: `<p class="problem-paragraph">Siła $10\\text{ N}$ działa na wózek poruszający się poziomo o $4\\text{ m}$. Kierunek siły tworzy z przemieszczeniem kąt $60^\\circ$. Oblicz pracę.</p>`,
    solution: {
      givens: "$F = 10\\text{ N}$, $s = 4\\text{ m}$, $\\alpha = 60^\\circ$, $\\cos 60^\\circ = 0{,}5$.",
      steps: [
        {
          title: "Obliczenie pracy ze składowej równoległej do przemieszczenia",
          content: "Pracę wykonuje wyłącznie składowa siły równoległa do toru ruchu:\n$$W = F \\cdot s \\cdot \\cos\\alpha = 10\\text{ N} \\cdot 4\\text{ m} \\cdot \\cos 60^\\circ = 40 \\cdot 0{,}5 = 20\\text{ J}$$"
        }
      ],
      answer: "Praca siły wynosi $20\\text{ J}$."
    }
  },
  {
    id: "p-zad-3",
    number: 3,
    title: "Zadanie 3. Praca ciężaru i reakcji stołu",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Zadanie zamknięte", "Siły prostopadłe"],
    correctOption: "A",
    correctOption: "A",
    problem: `<p class="problem-paragraph">Książkę o masie $2\\text{ kg}$ przesunięto po poziomym stole o $5\\text{ m}$. Wskaż pracę ciężaru i reakcji stołu.</p>
<div class="problem-options-list" data-correct="A">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$W_g = 0\\text{ i }W_N = 0$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$W_g = +100\\text{ J}\\text{ i }W_N = 0$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$W_g = -100\\text{ J}\\text{ i }W_N = 0$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$W_g = 0\\text{ i }W_N = +100\\text{ J}$</span></div>
</div>`,
    solution: {
      givens: "$m = 2\\text{ kg}$, $s = 5\\text{ m}$ (ruch w poziomie).",
      steps: [
        {
          title: "Analiza kąta między wektorami sił a przemieszczeniem",
          content: "Siła grawitacji $\\vec{F}_g$ działa pionowo w dół, a siła reakcji podłoża $\\vec{F}_N$ pionowo w górę. Obie siły tworzą z poziomym wektorem przemieszczenia kąt prosty $\\alpha = 90^\\circ$.\nPonieważ $\\cos 90^\\circ = 0$:\n$$W_g = F_g \\cdot s \\cdot \\cos 90^\\circ = 0$$\n$$W_N = F_N \\cdot s \\cdot \\cos 90^\\circ = 0$$"
        }
      ],
      answer: "Poprawna odpowiedź: A ($W_g = 0\\text{ i }W_N = 0$).",
      trap: "Siły prostopadłe do toru ruchu nigdy nie wykonują pracy mechanicznej, bez względu na wartość siły czy przebytą drogę!"
    }
  },
  {
    id: "p-zad-4",
    number: 4,
    title: "Zadanie 4. Praca siły tarcia",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Siła tarcia"],
    problem: `<p class="problem-paragraph">Klocek przesuwa się w prawo o $4\\text{ m}$. Tarcie ma stałą wartość $3\\text{ N}$. Oblicz pracę tarcia.</p>`,
    solution: {
      givens: "$s = 4\\text{ m}$ (w prawo), $T = 3\\text{ N}$ (w lewo), zwrot tarcia przeciwny do ruchu ($\\alpha = 180^\\circ$).",
      steps: [
        {
          title: "Wyznaczenie pracy siły tarcia",
          content: "Kąt między wektorem siły tarcia a wektorem przemieszczenia wynosi $180^\\circ$, a $\\cos 180^\\circ = -1$:\n$$W_t = -T \\cdot s = -3\\text{ N} \\cdot 4\\text{ m} = -12\\text{ J}$$"
        }
      ],
      answer: "Praca tarcia wynosi $-12\\text{ J}$.",
      trap: "Ujemny znak pracy oznacza rozpraszanie energii mechanicznej — zamianę jej w energię termiczną (ciepło)."
    }
  },
  {
    id: "p-zad-5",
    number: 5,
    title: "Zadanie 5. Podnoszenie pionowe ładunku",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Ruch jednostajny", "Grawitacja"],
    problem: `<p class="problem-paragraph">Ładunek $10\\text{ kg}$ podnoszony jest pionowo ruchem jednostajnym na wysokość $2\\text{ m}$. Oblicz pracę siły podnoszącej oraz pracę ciężaru.</p>`,
    solution: {
      givens: "$m = 10\\text{ kg}$, $h = 2\\text{ m}$, $g = 10\\text{ m/s}^2$, ruch jednostajny ($v = \\text{const}$).",
      steps: [
        {
          title: "Praca siły podnoszącej",
          content: "W ruchu jednostajnym siła wypadkowa wynosi zero, zatem siła podnosząca ma wartość równą ciężarowi: $F_p = mg = 10 \\cdot 10 = 100\\text{ N}$.\nSiła podnosząca ma zwrot w górę, zgodny z ruchem:\n$$W_p = F_p \\cdot h = mgh = 100\\text{ N} \\cdot 2\\text{ m} = +200\\text{ J}$$"
        },
        {
          title: "Praca siły ciężkości",
          content: "Siła ciężkości ma zwrot w dół, przeciwny do kierunku podnoszenia ($\\alpha = 180^\\circ$):\n$$W_g = -mg \\cdot h = -100\\text{ N} \\cdot 2\\text{ m} = -200\\text{ J}$$"
        }
      ],
      answer: "Praca siły podnoszącej wynosi $+200\\text{ J}$, a praca siły ciężkości wynosi $-200\\text{ J}$ (praca wypadkowa $W_w = 0$).",
      trap: "W ruchu jednostajnym praca wypadkowa wszystkich sił wynosi zero, ponieważ energia kinetyczna ciała się nie zmienia (ΔEk = 0)."
    }
  },
  {
    id: "p-zad-6",
    number: 6,
    title: "Zadanie 6. Praca dwóch przeciwstawnych sił",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Praca wypadkowa"],
    problem: `<p class="problem-paragraph">Na ciało działają równolegle do przemieszczenia siły $12\\text{ N}$ w prawo i $5\\text{ N}$ w lewo. Ciało przemieszcza się o $3\\text{ m}$ w prawo. Oblicz pracę każdej siły i pracę wypadkową.</p>`,
    solution: {
      givens: "$F_1 = 12\\text{ N}$ (w prawo), $F_2 = 5\\text{ N}$ (w lewo), $s = 3\\text{ m}$ (w prawo).",
      steps: [
        {
          title: "Obliczenie pracy każdej siły z osobna",
          content: "$$W_1 = F_1 \\cdot s = 12\\text{ N} \\cdot 3\\text{ m} = +36\\text{ J}$$\n$$W_2 = -F_2 \\cdot s = -5\\text{ N} \\cdot 3\\text{ m} = -15\\text{ J}$$"
        },
        {
          title: "Obliczenie pracy wypadkowej",
          content: "Praca wypadkowa to suma prac składowych (lub praca siły wypadkowej $F_w = 12 - 5 = 7\\text{ N}$):\n$$W_w = W_1 + W_2 = 36\\text{ J} + (-15\\text{ J}) = 21\\text{ J}$$\n$$(W_w = F_w \\cdot s = 7\\text{ N} \\cdot 3\\text{ m} = 21\\text{ J})$$"
        }
      ],
      answer: "$W_1 = 36\\text{ J}$, $W_2 = -15\\text{ J}$, a praca wypadkowa wynosi $W_w = 21\\text{ J}$."
    }
  },
  {
    id: "p-zad-7",
    number: 7,
    title: "Zadanie 7. Praca jako pole pod wykresem F(s)",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Pole pod wykresem", "Wykres F(s)"],
    problem: `<p class="problem-paragraph">Wartość poziomej siły działającej wzdłuż ruchu zależy od drogi zgodnie z wykresem. Oblicz pracę na odcinku $0 \\le s \\le 4\\text{ m}$.</p>`,
    chartSvg: svgTask7,
    solution: {
      givens: "Wykres $F(s)$: od $s=0$ do $s=2\\text{ m}$ siła rośnie liniowo do $6\\text{ N}$, od $s=2\\text{ m}$ do $s=4\\text{ m}$ siła ma stałą wartość $6\\text{ N}$.",
      steps: [
        {
          title: "Podział pola pod wykresem na figury elementarne",
          content: "Praca zmiennej siły jest geometrycznie równa polu powierzchni pod wykresem $F(s)$. Dzielimy obszar na trójkąt ($0 \\le s \\le 2$) oraz prostokąt ($2 \\le s \\le 4$)."
        },
        {
          title: "Obliczenie pól składowych",
          content: "Pole trójkąta:\n$$W_1 = \\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość} = \\frac{1}{2} \\cdot 2\\text{ m} \\cdot 6\\text{ N} = 6\\text{ J}$$\nPole prostokąta:\n$$W_2 = (4 - 2)\\text{ m} \\cdot 6\\text{ N} = 2\\text{ m} \\cdot 6\\text{ N} = 12\\text{ J}$$"
        },
        {
          title: "Wyznaczenie całkowitej pracy",
          content: "$$W = W_1 + W_2 = 6\\text{ J} + 12\\text{ J} = 18\\text{ J}$$"
        }
      ],
      answer: "Praca na odcinku $0 \\le s \\le 4\\text{ m}$ wynosi $18\\text{ J}$."
    }
  },
  {
    id: "p-zad-8",
    number: 8,
    title: "Zadanie 8. Praca siły malejącej liniowo",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Praca siły", "Zadanie zamknięte", "Pole pod wykresem"],
    correctOption: "C",
    correctOption: "C",
    problem: `<p class="problem-paragraph">Siła wzdłuż ruchu maleje liniowo od $8\\text{ N}$ przy $s = 0$ do zera przy $s = 4\\text{ m}$. Wskaż pracę tej siły, nie wyprowadzając wzoru $F(s)$.</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$8\\text{ J}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$12\\text{ J}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$16\\text{ J}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$32\\text{ J}$</span></div>
</div>`,
    solution: {
      givens: "$F(0) = 8\\text{ N}$, $F(4) = 0\\text{ N}$, spadek liniowy na drodze $s = 4\\text{ m}$.",
      steps: [
        {
          title: "Interpretacja geometryczna (pole trójkąta prostokątnego)",
          content: "Wykres zależności $F(s)$ tworzy trójkąt prostokątny o podstawie $s = 4\\text{ m}$ i wysokości $F_0 = 8\\text{ N}$:\n$$W = \\frac{1}{2} \\cdot s \\cdot F_0 = \\frac{1}{2} \\cdot 4\\text{ m} \\cdot 8\\text{ N} = 16\\text{ J}$$"
        }
      ],
      answer: "Poprawna odpowiedź: C ($16\\text{ J}$)."
    }
  },
  {
    id: "p-zad-9",
    number: 9,
    title: "Zadanie 9. Moc średnia użyteczna dźwigu",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Moc", "Moc średnia"],
    problem: `<p class="problem-paragraph">Dźwig podnosi pionowo ładunek $200\\text{ kg}$ na wysokość $6\\text{ m}$ w czasie $10\\text{ s}$. Oblicz moc średnią użyteczną.</p>`,
    solution: {
      givens: "$m = 200\\text{ kg}$, $h = 6\\text{ m}$, $t = 10\\text{ s}$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Praca użyteczna podnoszenia",
          content: "$$W = mgh = 200\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 6\\text{ m} = 12\\,000\\text{ J}$$"
        },
        {
          title: "Obliczenie mocy średniej",
          content: "$$P_{\\text{śr}} = \\frac{W}{t} = \\frac{12\\,000\\text{ J}}{10\\text{ s}} = 1200\\text{ W} = 1{,}2\\text{ kW}$$"
        }
      ],
      answer: "Moc średnia użyteczna dźwigu wynosi $1200\\text{ W} = 1{,}2\\text{ kW}$."
    }
  },
  {
    id: "p-zad-10",
    number: 10,
    title: "Zadanie 10. Moc chwilowa samochodu",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Moc", "Moc chwilowa P = F·v", "Zadanie zamknięte"],
    correctOption: "B",
    correctOption: "B",
    problem: `<p class="problem-paragraph">Samochód jedzie po poziomej drodze ze stałą prędkością $20\\text{ m/s}$. Siła napędowa ma wartość $1{,}5\\text{ kN}$ i jest równoległa do prędkości. Wskaż moc chwilową silnika przekazywaną samochodowi.</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$3\\text{ kW}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$30\\text{ kW}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$75\\text{ kW}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$300\\text{ kW}$</span></div>
</div>`,
    solution: {
      givens: "$v = 20\\text{ m/s}$, $F = 1{,}5\\text{ kN} = 1500\\text{ N}$, siła równoległa do prędkości.",
      steps: [
        {
          title: "Zastosowanie wzoru na moc chwilową",
          content: "$$P = F \\cdot v = 1500\\text{ N} \\cdot 20\\text{ m/s} = 30\\,000\\text{ W} = 30\\text{ kW}$$"
        }
      ],
      answer: "Poprawna odpowiedź: B ($30\\text{ kW}$). Dla stałej prędkości jest to jednocześnie moc niezbędna do zrównoważenia oporów ruchu."
    }
  },
  {
    id: "p-zad-11",
    number: 11,
    title: "Zadanie 11. Sprawność i pobrana energia urządzenia",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Sprawność", "Energia pobrana", "Moc"],
    problem: `<p class="problem-paragraph">Moc użyteczna urządzenia wynosi $800\\text{ W}$, a moc pobierana $1{,}0\\text{ kW}$. Oblicz sprawność. Ile energii urządzenie pobierze w ciągu $5\\text{ min}$?</p>`,
    solution: {
      givens: "$P_u = 800\\text{ W}$, $P_c = 1{,}0\\text{ kW} = 1000\\text{ W}$, $t = 5\\text{ min} = 300\\text{ s}$.",
      steps: [
        {
          title: "Obliczenie sprawności",
          content: "$$\\eta = \\frac{P_u}{P_c} = \\frac{800\\text{ W}}{1000\\text{ W}} = 0{,}80 = 80\\%$$"
        },
        {
          title: "Obliczenie pobranej energii",
          content: "$$E = P_c \\cdot t = 1000\\text{ W} \\cdot 300\\text{ s} = 3{,}0 \\cdot 10^5\\text{ J} = 300\\text{ kJ}$$"
        }
      ],
      answer: "Sprawność urządzenia wynosi $\\eta = 80\\%$, a pobrana energia w czasie $5\\text{ min}$ to $300\\text{ kJ}$ ($3{,}0 \\cdot 10^5\\text{ J}$)."
    }
  },
  {
    id: "p-zad-12",
    number: 12,
    title: "Zadanie 12. Praca rozruchu z wykresu mocy P(t)",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Praca i moc",
    tags: ["Moc", "Wykres P(t)", "Zadanie maturalne"],
    problem: `<p class="problem-paragraph">Moc silnika podczas rozruchu wózka jest przedstawiona na wykresie. Wózek otrzymuje całą tę energię jako energię mechaniczną. Oblicz pracę wykonaną przez silnik w czasie $0 \\le t \\le 4\\text{ s}$.</p>
`,
    chartSvg: svgTask12,
    solution: {
      givens: "Wykres $P(t)$: wzrost od 0 do $60\\text{ W}$ w czasie pierwszych $2\\text{ s}$, potem stała moc $60\\text{ W}$ od $t = 2\\text{ s}$ do $t = 4\\text{ s}$.",
      steps: [
        {
          title: "Interpretacja pracy jako pola pod wykresem P(t)",
          content: "Ponieważ $P = \\frac{dW}{dt}$, pole pod wykresem mocy w czasie odpowiada wykonanej pracy mechanicznej $W$. Dzielimy pole na trójkąt i prostokąt."
        },
        {
          title: "Obliczenie pól składowych",
          content: "Pole trójkąta ($0 \\le t \\le 2\\text{ s}$):\n$$W_1 = \\frac{1}{2} \\cdot 2\\text{ s} \\cdot 60\\text{ W} = 60\\text{ J}$$\nPole prostokąta ($2 \\le t \\le 4\\text{ s}$):\n$$W_2 = (4 - 2)\\text{ s} \\cdot 60\\text{ W} = 2\\text{ s} \\cdot 60\\text{ W} = 120\\text{ J}$$"
        },
        {
          title: "Suma prac",
          content: "$$W = W_1 + W_2 = 60\\text{ J} + 120\\text{ J} = 180\\text{ J}$$"
        }
      ],
      answer: "Praca wykonana przez silnik wynosi $180\\text{ J}$."
    }
  }
];

// PODROZDZIAŁ 2: RODZAJE ENERGII I ZASADA ZACHOWANIA ENERGII (13-25)
const tasksSub2 = [
  {
    id: "p-zad-13",
    number: 13,
    title: "Zadanie 13. Zależność energii kinetycznej od prędkości",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Energia kinetyczna", "Zadanie zamknięte"],
    correctOption: "C",
    correctOption: "C",
    problem: `<p class="problem-paragraph">Dwa ciała mają jednakowe masy. Drugie porusza się trzy razy szybciej od pierwszego. Ile razy większa jest jego energia kinetyczna?</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">3 razy</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">6 razy</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">9 razy</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">12 razy</span></div>
</div>`,
    solution: {
      givens: "$m_1 = m_2 = m$, $v_2 = 3v_1$.",
      steps: [
        {
          title: "Zależność kwadratowa energii kinetycznej od prędkości",
          content: "Energia kinetyczna zależy od kwadratu szybkości ($E_k \\propto v^2$):\n$$E_{k1} = \\frac{1}{2}m v_1^2$$\n$$E_{k2} = \\frac{1}{2}m (3v_1)^2 = 9 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) = 9 E_{k1}$$"
        }
      ],
      answer: "Poprawna odpowiedź: C ($9\\text{ razy}$)."
    }
  },
  {
    id: "p-zad-14",
    number: 14,
    title: "Zadanie 14. Energia potencjalna a poziom odniesienia",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Energia potencjalna", "Poziom odniesienia"],
    problem: `<p class="problem-paragraph">Ciało o masie $3\\text{ kg}$ znajduje się $4\\text{ m}$ nad wybranym poziomem odniesienia. Oblicz jego energię potencjalną grawitacji. Jak zmieni się wynik po wybraniu poziomu odniesienia $2\\text{ m}$ wyżej?</p>`,
    solution: {
      givens: "$m = 3\\text{ kg}$, $h_1 = 4\\text{ m}$, nowy poziom odniesienia przesunięty w górę o $\\Delta h = 2\\text{ m}$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Energia dla początkowego poziomu",
          content: "$$E_{p1} = mgh_1 = 3\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 4\\text{ m} = 120\\text{ J}$$"
        },
        {
          title: "Wpływ zmiany poziomu odniesienia",
          content: "Po przesunięciu poziomu zerowego o $2\\text{ m}$ w górę nowa wysokość wynosi $h_2 = 4\\text{ m} - 2\\text{ m} = 2\\text{ m}$:\n$$E_{p2} = mgh_2 = 3 \\cdot 10 \\cdot 2 = 60\\text{ J}$$\nWynik zmniejszy się o $60\\text{ J}$."
        }
      ],
      answer: "Początkowa energia wynosi $120\\text{ J}$. Po wybraniu poziomu $2\\text{ m}$ wyżej energia wynosi $60\\text{ J}$ (zmaleje o $60\\text{ J}$). Wartość bezwzględna energii zależy od poziomu zerowego, ale zmiana energii $\\Delta E_p$ między dwoma fizycznymi punktami toru jest niezmiennikiem."
    }
  },
  {
    id: "p-zad-15",
    number: 15,
    title: "Zadanie 15. Energia potencjalna sprężystości",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Energia sprężystości", "Wzór Es = 1/2 kx²"],
    problem: `<p class="problem-paragraph">Sprężynę o sztywności $200\\text{ N/m}$ ściśnięto o $0{,}10\\text{ m}$. Oblicz energię potencjalną sprężystości.</p>`,
    solution: {
      givens: "$k = 200\\text{ N/m}$, $x = 0{,}10\\text{ m}$.",
      steps: [
        {
          title: "Zastosowanie wzoru na energię sprężystości",
          content: "$$E_s = \\frac{1}{2} k x^2 = \\frac{1}{2} \\cdot 200\\text{ N/m} \\cdot (0{,}10\\text{ m})^2 = 100 \\cdot 0{,}01 = 1\\text{ J}$$"
        }
      ],
      answer: "Energia potencjalna sprężystości wynosi $1\\text{ J}$."
    }
  },
  {
    id: "p-zad-16",
    number: 16,
    title: "Zadanie 16. Praca wypadkowa i zmiana szybkości",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Twierdzenie o pracy i energii", "Zadanie zamknięte"],
    correctOption: "B",
    correctOption: "B",
    problem: `<p class="problem-paragraph">Klocek $2\\text{ kg}$ zwiększa szybkość na poziomym torze z $2\\text{ m/s}$ do $6\\text{ m/s}$. Wskaż pracę wypadkową.</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$16\\text{ J}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$32\\text{ J}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$36\\text{ J}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$64\\text{ J}$</span></div>
</div>`,
    solution: {
      givens: "$m = 2\\text{ kg}$, $v_1 = 2\\text{ m/s}$, $v_2 = 6\\text{ m/s}$.",
      steps: [
        {
          title: "Zastosowanie twierdzenia o pracy i energii kinetycznej",
          content: "Praca wypadkowa sił równa się zmianie energii kinetycznej ciała ($W_w = \\Delta E_k$):\n$$W_w = \\frac{1}{2}m (v_2^2 - v_1^2) = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (6^2 - 2^2)\\text{ m}^2/\\text{s}^2 = 36 - 4 = 32\\text{ J}$$"
        }
      ],
      answer: "Poprawna odpowiedź: B ($32\\text{ J}$)."
    }
  },
  {
    id: "p-zad-17",
    number: 17,
    title: "Zadanie 17. Droga do zatrzymania z twierdzenia o energii",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Praca tarcia", "Droga hamowania", "Twierdzenie o energii"],
    problem: `<p class="problem-paragraph">Klocek $4\\text{ kg}$ ślizga się po poziomej powierzchni z szybkością $5\\text{ m/s}$. Działa na niego tylko tarcie o wartości $10\\text{ N}$. Oblicz drogę do zatrzymania, używając twierdzenia o pracy i energii kinetycznej.</p>`,
    solution: {
      givens: "$m = 4\\text{ kg}$, $v_1 = 5\\text{ m/s}$, $v_2 = 0\\text{ m/s}$, $T = 10\\text{ N}$.",
      steps: [
        {
          title: "Początkowa energia kinetyczna",
          content: "$$E_{k1} = \\frac{1}{2}m v_1^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot 5^2\\text{ m}^2/\\text{s}^2 = 50\\text{ J}$$"
        },
        {
          title: "Zastosowanie twierdzenia W = ΔEk",
          content: "Praca tarcia wynosi $W_t = -T \\cdot s = -10s$. Końcowa energia $E_{k2} = 0$:\n$$W_t = E_{k2} - E_{k1} \\implies -10s = 0 - 50\\text{ J} \\implies 10s = 50 \\implies s = 5\\text{ m}$$"
        }
      ],
      answer: "Droga klocka do zatrzymania wynosi $5\\text{ m}$."
    }
  },
  {
    id: "p-zad-18",
    number: 18,
    title: "Zadanie 18. Szybkość swobodnego spadku",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Swobodny spadek", "Zachowanie energii", "Zadanie zamknięte"],
    correctOption: "C",
    correctOption: "C",
    problem: `<p class="problem-paragraph">Kulkę puszczono ze spoczynku z wysokości $5\\text{ m}$. Pomijamy opory. Wskaż szybkość tuż nad podłożem.</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$5\\text{ m/s}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$7{,}1\\text{ m/s}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$10\\text{ m/s}$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$50\\text{ m/s}$</span></div>
</div>`,
    solution: {
      givens: "$h = 5\\text{ m}$, $v_0 = 0$, $g = 10\\text{ m/s}^2$, opory pomijalne.",
      steps: [
        {
          title: "Zasada zachowania energii mechanicznej",
          content: "Cała energia potencjalna na szczycie zamienia się w energię kinetyczną tuż nad ziemią:\n$$mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2 \\cdot 10 \\cdot 5} = \\sqrt{100} = 10\\text{ m/s}$$"
        }
      ],
      answer: "Poprawna odpowiedź: C ($10\\text{ m/s}$). Masa kuli ulega skróceniu."
    }
  },
  {
    id: "p-zad-19",
    number: 19,
    title: "Zadanie 19. Zmiana wysokości a prędkość bez tarcia",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Zachowanie energii", "Ruch bez tarcia"],
    problem: `<p class="problem-paragraph">Klocek przesuwa się bez tarcia z wysokości $3\\text{ m}$ na wysokość $1\\text{ m}$. Początkowo ma szybkość $2\\text{ m/s}$. Oblicz jego szybkość w punkcie końcowym.</p>`,
    solution: {
      givens: "$h_1 = 3\\text{ m}$, $h_2 = 1\\text{ m}$, $v_1 = 2\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Bilans całkowitej energii mechanicznej",
          content: "$$\\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$$\nDzieląc obustronnie przez masę $m$:\n$$v_2^2 = v_1^2 + 2g(h_1 - h_2)$$"
        },
        {
          title: "Obliczenie wartości liczbowej",
          content: "$$v_2^2 = 2^2 + 2 \\cdot 10 \\cdot (3 - 1) = 4 + 40 = 44$$\n$$v_2 = \\sqrt{44} \\approx 6{,}63\\text{ m/s}$$"
        }
      ],
      answer: "Szybkość w punkcie końcowym wynosi około $6{,}63\\text{ m/s}$ (dokładnie $\\sqrt{44}\\text{ m/s} = 2\\sqrt{11}\\text{ m/s}$)."
    }
  },
  {
    id: "p-zad-20",
    number: 20,
    title: "Zadanie 20. Maksymalne ściśnięcie sprężyny",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Energia sprężystości", "Zachowanie energii", "Wózek"],
    problem: `<p class="problem-paragraph">Wózek $1\\text{ kg}$ porusza się po poziomym gładkim torze z szybkością $4\\text{ m/s}$ i ściska sprężynę o sztywności $200\\text{ N/m}$. Oblicz maksymalne ściśnięcie sprężyny.</p>`,
    solution: {
      givens: "$m = 1\\text{ kg}$, $v = 4\\text{ m/s}$, $k = 200\\text{ N/m}$, tor gładki (brak tarcia).",
      steps: [
        {
          title: "Zasada zachowania energii",
          content: "W chwili maksymalnego odkształcenia wózek chwilowo się zatrzymuje ($v = 0$), a cała jego energia kinetyczna przekształca się w energię potencjalną sprężystości:\n$$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2 \\implies mv^2 = kx^2$$"
        },
        {
          title: "Wyznaczenie ugięcia x",
          content: "$$1 \\cdot 4^2 = 200 \\cdot x^2 \\implies 16 = 200x^2 \\implies x^2 = \\frac{16}{200} = 0{,}08$$\n$$x = \\sqrt{0{,}08} \\approx 0{,}40\\text{ m}$$"
        }
      ],
      answer: "Maksymalne ściśnięcie sprężyny wynosi $0{,}40\\text{ m} = 40\\text{ cm}$."
    }
  },
  {
    id: "p-zad-21",
    number: 21,
    title: "Zadanie 21. Zsuwanie się z równi z tarciem",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Równia pochyła", "Praca tarcia", "Zachowanie energii"],
    problem: `<p class="problem-paragraph">Klocek $2\\text{ kg}$ zsuwa się ze spoczynku po równi o wysokości $2\\text{ m}$. Podczas ruchu tarcie wykonuje pracę $-8\\text{ J}$. Oblicz szybkość klocka na dole.</p>`,
    solution: {
      givens: "$m = 2\\text{ kg}$, $h = 2\\text{ m}$, $W_t = -8\\text{ J}$, $v_0 = 0$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Początkowa energia na szczycie równi",
          content: "$$E_1 = mgh = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 2\\text{ m} = 40\\text{ J}$$"
        },
        {
          title: "Bilans energii z uwzględnieniem pracy tarcia",
          content: "Praca siły tarcia zmniejsza energię mechaniczną klocka:\n$$E_2 = E_1 + W_t = 40\\text{ J} + (-8\\text{ J}) = 32\\text{ J}$$"
        },
        {
          title: "Wyznaczenie szybkości końcowej",
          content: "Na dole równi $E_p = 0$, cała pozostała energia to energia kinetyczna:\n$$E_k = \\frac{1}{2}mv^2 \\implies \\frac{1}{2} \\cdot 2 \\cdot v^2 = 32 \\implies v^2 = 32 \\implies v = \\sqrt{32} \\approx 5{,}66\\text{ m/s}$$"
        }
      ],
      answer: "Szybkość klocka u podstawy równi wynosi około $5{,}66\\text{ m/s}$ (dokładnie $\\sqrt{32}\\text{ m/s} = 4\\sqrt{2}\\text{ m/s}$)."
    }
  },
  {
    id: "p-zad-22",
    number: 22,
    title: "Zadanie 22. Ruch sanek ciągniętych siłą z tarciem",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Sanki", "Siła ciągu", "Praca wypadkowa", "Energia kinetyczna"],
    problem: `<p class="problem-paragraph">Sanki o masie $10\\text{ kg}$ są ciągnięte po poziomej drodze stałą siłą $40\\text{ N}$ równoległą do ruchu. Tarcie ma wartość $10\\text{ N}$. Sanki przebywają $5\\text{ m}$, startując ze spoczynku. Oblicz szybkość końcową metodą energii.</p>`,
    solution: {
      givens: "$m = 10\\text{ kg}$, $F = 40\\text{ N}$, $T = 10\\text{ N}$, $s = 5\\text{ m}$, $v_0 = 0$.",
      steps: [
        {
          title: "Praca siły wypadkowej",
          content: "Wypadkowa siła w kierunku ruchu: $F_w = F - T = 40\\text{ N} - 10\\text{ N} = 30\\text{ N}$.\n$$W_w = F_w \\cdot s = 30\\text{ N} \\cdot 5\\text{ m} = 150\\text{ J}$$"
        },
        {
          title: "Obliczenie szybkości z przyrostu energii kinetycznej",
          content: "Start ze spoczynku oznacza $E_{k0} = 0$, więc $\\Delta E_k = W_w$:\n$$\\frac{1}{2}mv^2 = 150\\text{ J} \\implies \\frac{1}{2} \\cdot 10 \\cdot v^2 = 150 \\implies 5v^2 = 150 \\implies v^2 = 30$$\n$$v = \\sqrt{30} \\approx 5{,}48\\text{ m/s}$$"
        }
      ],
      answer: "Szybkość końcowa sanek wynosi około $5{,}48\\text{ m/s}$ (dokładnie $\\sqrt{30}\\text{ m/s}$)."
    }
  },
  {
    id: "p-zad-23",
    number: 23,
    title: "Zadanie 23. Analiza wykresu Ep(h) i praca siły ciężkości",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Energia potencjalna", "Wykres Ep(h)", "Praca ciężaru", "Zadanie maturalne"],
    problem: `<p class="problem-paragraph">Wykres pokazuje energię potencjalną grawitacji $E_p$ ciała o masie $2\\text{ kg}$ w funkcji wysokości $h$. Oblicz wartość $g$ przyjętą przy sporządzaniu wykresu oraz pracę ciężaru podczas spadku z $h = 3\\text{ m}$ do $h = 1\\text{ m}$.</p>
`,
    chartSvg: svgTask23,
    solution: {
      givens: "$m = 2\\text{ kg}$, z wykresu $E_p(3\\text{ m}) = 60\\text{ J}$, spadek od $h_1 = 3\\text{ m}$ do $h_2 = 1\\text{ m}$.",
      steps: [
        {
          title: "Obliczenie przyspieszenia grawitacyjnego g",
          content: "Ze wzoru $E_p = mgh$ odczytujemy punkt $(h=3\\text{ m}, E_p=60\\text{ J})$:\n$$g = \\frac{E_p}{mh} = \\frac{60\\text{ J}}{2\\text{ kg} \\cdot 3\\text{ m}} = \\frac{60}{6} = 10\\text{ m/s}^2$$"
        },
        {
          title: "Obliczenie pracy siły ciężkości podczas spadku",
          content: "Na wysokości $h_2 = 1\\text{ m}$ energia potencjalna wynosi:\n$$E_p(1) = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 1\\text{ m} = 20\\text{ J}$$\nZmiana energii potencjalnej: $\\Delta E_p = 20\\text{ J} - 60\\text{ J} = -40\\text{ J}$.\nPraca ciężaru jest równa ubytkowi energii potencjalnej ($W_g = -\\Delta E_p$):\n$$W_g = -(-40\\text{ J}) = +40\\text{ J}$$"
        }
      ],
      answer: "Przyjęta wartość wynosi $g = 10\\text{ m/s}^2$, a praca siły ciężkości podczas opadania z $3\\text{ m}$ do $1\\text{ m}$ wynosi $+40\\text{ J}$."
    }
  },
  {
    id: "p-zad-24",
    number: 24,
    title: "Zadanie 24. Oscylator na sprężynie – energia całkowita i amplituda",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Oscylator", "Sprężyna", "Amplituda", "Energia całkowita"],
    problem: `<p class="problem-paragraph">Klocek $0{,}50\\text{ kg}$ na gładkim poziomym torze jest przymocowany do sprężyny o $k = 100\\text{ N/m}$. W chwili, gdy sprężyna jest rozciągnięta o $0{,}20\\text{ m}$, klocek ma szybkość $2\\text{ m/s}$. Oblicz całkowitą energię mechaniczną układu oraz maksymalne wychylenie.</p>`,
    solution: {
      givens: "$m = 0{,}50\\text{ kg}$, $k = 100\\text{ N/m}$, $x = 0{,}20\\text{ m}$, $v = 2\\text{ m/s}$.",
      steps: [
        {
          title: "Całkowita energia mechaniczna układu",
          content: "$$E = E_k + E_s = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2$$\n$$E = \\frac{1}{2} \\cdot 0{,}50 \\cdot 2^2 + \\frac{1}{2} \\cdot 100 \\cdot (0{,}20)^2 = 1\\text{ J} + 2\\text{ J} = 3\\text{ J}$$"
        },
        {
          title: "Wyznaczenie maksymalnego wychylenia (amplitudy)",
          content: "W punktach skrajnych prędkość klocka spada do zera ($v = 0$), więc cała energia układu ma postać energii sprężystości:\n$$\\frac{1}{2}k x_{\\max}^2 = E \\implies \\frac{1}{2} \\cdot 100 \\cdot x_{\\max}^2 = 3 \\implies 50 x_{\\max}^2 = 3$$\n$$x_{\\max} = \\sqrt{\\frac{3}{50}} = \\sqrt{\\frac{6}{100}} = \\frac{\\sqrt{6}}{10} \\approx 0{,}245\\text{ m}$$"
        }
      ],
      answer: "Całkowita energia mechaniczna układu wynosi $3\\text{ J}$, a maksymalne wychylenie sprężyny to około $0{,}245\\text{ m} = 24{,}5\\text{ cm}$."
    }
  },
  {
    id: "p-zad-25",
    number: 25,
    title: "Zadanie 25. Zjazd z gładkiej równi i hamowanie tarciem",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Rodzaje energii",
    tags: ["Zachowanie energii", "Praca tarcia", "Zadanie maturalne"],
    problem: `<p class="problem-paragraph">Ciało $2\\text{ kg}$ zjeżdża ze spoczynku z wysokości $4\\text{ m}$ i po gładkim odcinku poziomym wjeżdża na szorstką drogę. Tarcie na drodze poziomej ma wartość $8\\text{ N}$. Oblicz drogę na tej drodze do zatrzymania. Następnie podaj, jaka część początkowej energii mechanicznej została rozproszona podczas zjazdu.</p>
`,
    solution: {
      givens: "$m = 2\\text{ kg}$, $h = 4\\text{ m}$, $T = 8\\text{ N}$ (na drodze poziomej), równia i odcinek początkowy są idealnie gładkie, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Energia początkowa ciała",
          content: "Początkowa energia mechaniczna na szczycie równi:\n$$E = mgh = 2\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 4\\text{ m} = 80\\text{ J}$$\nZjazd ze stoku i odcinek płaski są gładkie (brak sił tarcia), więc ciało wjeżdża na odcinek szorstki z pełną energią $E_k = 80\\text{ J}$."
        },
        {
          title: "Droga do zatrzymania na drodze szorstkiej",
          content: "Cała energia kinetyczna ciała zostaje zniwelowana przez pracę siły tarcia:\n$$W_t = -T \\cdot s \\implies -8s = -80 \\implies s = 10\\text{ m}$$"
        },
        {
          title: "Część energii rozproszona podczas samego zjazdu",
          content: "Podczas samego zjazdu z równi nie działały żadne siły oporu ani tarcie. Zatem podczas zjazdu rozproszono dokładnie $0\\%$ energii początkowej (całe rozproszenie następuje dopiero na drodze poziomej)."
        }
      ],
      answer: "Droga do zatrzymania na szorstkiej nawierzchni wynosi $10\\text{ m}$. Podczas samego zjazdu z równi rozproszono $0\\%$ początkowej energii."
    }
  }
];

// PODROZDZIAŁ 3: ZDERZENIA NIESPRĘŻYSTE (26-33)
const tasksSub3 = [
  {
    id: "p-zad-26",
    number: 26,
    title: "Zadanie 26. Proste zderzenie niesprężyste wózków",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Zachowanie pędu", "Zadanie zamknięte"],
    correctOption: "B",
    correctOption: "B",
    problem: `<p class="problem-paragraph">Wózek $2\\text{ kg}$ jedzie w prawo z szybkością $3\\text{ m/s}$ i zderza się z nieruchomym wózkiem $1\\text{ kg}$. Wózki po zderzeniu sczepiają się. Wskaż wspólną prędkość.</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$1\\text{ m/s}$ w prawo</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$2\\text{ m/s}$ w prawo</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$3\\text{ m/s}$ w prawo</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$6\\text{ m/s}$ w prawo</span></div>
</div>`,
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $v_1 = 3\\text{ m/s}$, $m_2 = 1\\text{ kg}$, $v_2 = 0\\text{ m/s}$.",
      steps: [
        {
          title: "Zastosowanie zasady zachowania pędu",
          content: "$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$2 \\cdot 3 + 1 \\cdot 0 = (2 + 1) v \\implies 6 = 3v \\implies v = 2\\text{ m/s}\\quad\\text{(w prawo)}$$"
        }
      ],
      answer: "Poprawna odpowiedź: B ($2\\text{ m/s}$ w prawo). Pęd układu się zachowuje, natomiast część energii kinetycznej zamienia się w ciepło i pracę odkształcenia."
    }
  },
  {
    id: "p-zad-27",
    number: 27,
    title: "Zadanie 27. Zderzenie czołowe niesprężyste",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Zachowanie pędu", "Prędkości ze znakami"],
    problem: `<p class="problem-paragraph">Wózek $1\\text{ kg}$ porusza się w prawo z $6\\text{ m/s}$, a wózek $2\\text{ kg}$ w lewo z $2\\text{ m/s}$. Zderzają się niesprężyście i poruszają dalej razem. Oblicz wartość i zwrot wspólnej prędkości.</p>`,
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$ (w prawo), $m_2 = 2\\text{ kg}$, $v_2 = -2\\text{ m/s}$ (w lewo).",
      steps: [
        {
          title: "Zapis zasady zachowania pędu ze znakami",
          content: "Wybieramy zwrot dodatni w prawo:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$1 \\cdot 6 + 2 \\cdot (-2) = (1 + 2) v \\implies 6 - 4 = 3v \\implies 2 = 3v$$"
        },
        {
          title: "Wyznaczenie wartości i zwrotu prędkości",
          content: "$$v = \\frac{2}{3}\\text{ m/s} \\approx 0{,}667\\text{ m/s}$$\nDodatni znak wyniku wskazuje, że układ porusza się w prawo."
        }
      ],
      answer: "Wspólna prędkość wynosi $\\frac{2}{3}\\text{ m/s} \\approx 0{,}667\\text{ m/s}$ ze zwrotem w prawo."
    }
  },
  {
    id: "p-zad-28",
    number: 28,
    title: "Zadanie 28. Odrzut łodzi po wyrzuceniu plecaka",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zjawisko odrzutu", "Zachowanie pędu"],
    problem: `<p class="problem-paragraph">Nieruchoma łódź z osobą ma masę $80\\text{ kg}$. Osoba wyrzuca poziomo plecak o masie $4\\text{ kg}$ z prędkością $5\\text{ m/s}$ względem ziemi w prawo. Oblicz prędkość łodzi z osobą po wyrzuceniu. Pomijamy poziomy impuls zewnętrzny.</p>`,
    solution: {
      givens: "$M = 80\\text{ kg}$ (łódź + osoba), $m_p = 4\\text{ kg}$, $v_p = +5\\text{ m/s}$ (w prawo), pęd początkowy wynosi zero.",
      steps: [
        {
          title: "Zasada zachowania pędu w układzie izolowanym",
          content: "Początkowy pęd układu wynosił 0. Po wyrzuceniu pęd całkowity nadal musi być zerowy:\n$$0 = m_p v_p + M v_Ł$$\n$$0 = 4 \\cdot 5 + 80 \\cdot v_Ł \\implies 80 v_Ł = -20$$"
        },
        {
          title: "Wyznaczenie prędkości łodzi",
          content: "$$v_Ł = -\\frac{20}{80} = -0{,}25\\text{ m/s}$$"
        }
      ],
      answer: "Łódź z osobą porusza się z szybkością $0{,}25\\text{ m/s}$ w lewo (znak minus oznacza zwrot przeciwny do wyrzuconego plecaka)."
    }
  },
  {
    id: "p-zad-29",
    number: 29,
    title: "Zadanie 29. Dwuwymiarowe zderzenie niesprężyste wózków",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie 2D", "Wektory pędu", "Rozkład na osie"],
    problem: `<p class="problem-paragraph">Dwa wózki po zderzeniu sczepiają się. Pierwszy ma masę $2\\text{ kg}$ i prędkość $3\\text{ m/s}$ na wschód, drugi ma masę $1\\text{ kg}$ i prędkość $4\\text{ m/s}$ na północ. Wyznacz składowe, wartość i kierunek wspólnej prędkości.</p>`,
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $\\vec{v}_1 = [3, 0]\\text{ m/s}$ (wschód); $m_2 = 1\\text{ kg}$, $\\vec{v}_2 = [0, 4]\\text{ m/s}$ (północ).",
      steps: [
        {
          title: "Zachowanie pędu wzdłuż poszczególnych osi",
          content: "Łączna masa po sczepieniu: $M = m_1 + m_2 = 3\\text{ kg}$.\nOś $x$ (wschód):\n$$(m_1 + m_2) v_x = m_1 v_{1x} \\implies 3 v_x = 2 \\cdot 3 \\implies v_x = 2\\text{ m/s}$$\nOś $y$ (północ):\n$$(m_1 + m_2) v_y = m_2 v_{2y} \\implies 3 v_y = 1 \\cdot 4 \\implies v_y = \\frac{4}{3}\\text{ m/s} \\approx 1{,}33\\text{ m/s}$$"
        },
        {
          title: "Wypadkowa wartość prędkości",
          content: "$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{2^2 + \\left(\\frac{4}{3}\\right)^2} = \\sqrt{4 + \\frac{16}{9}} = \\sqrt{\\frac{52}{9}} \\approx 2{,}40\\text{ m/s}$$"
        },
        {
          title: "Kierunek wektora prędkości",
          content: "$$\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{4/3}{2} = \\frac{2}{3} \\approx 0{,}667 \\implies \\alpha \\approx 33{,}7^\\circ$$"
        }
      ],
      answer: "Składowe prędkości: $v_x = 2\\text{ m/s}$, $v_y = \\frac{4}{3}\\text{ m/s}$. Wartość prędkości wynosi około $2{,}40\\text{ m/s}$, skierowana pod kątem $33{,}7^\\circ$ na północ od kierunku wschodniego."
    }
  },
  {
    id: "p-zad-30",
    number: 30,
    title: "Zadanie 30. Względny ubytek energii w zderzeniu niesprężystym",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Ubytek energii", "Zadanie zamknięte"],
    correctOption: "C",
    correctOption: "C",
    problem: `<p class="problem-paragraph">Wózek $2\\text{ kg}$ o szybkości $4\\text{ m/s}$ uderza w nieruchomy wózek $2\\text{ kg}$ i sczepia się z nim. Jaka część początkowej energii kinetycznej układu została utracona w zderzeniu?</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$0\\%$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$25\\%$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$50\\%$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$75\\%$</span></div>
</div>`,
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $v_1 = 4\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
      steps: [
        {
          title: "Prędkość po sczepieniu z zachowania pędu",
          content: "$$2 \\cdot 4 = (2 + 2) v \\implies 8 = 4v \\implies v = 2\\text{ m/s}$$"
        },
        {
          title: "Porównanie energii kinetycznych",
          content: "Energia początkowa:\n$$E_{ki} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 2 \\cdot 4^2 = 16\\text{ J}$$\nEnergia końcowa po sczepieniu:\n$$E_{kf} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 8\\text{ J}$$"
        },
        {
          title: "Wyznaczenie ubytku względnego",
          content: "$$\\Delta E = 16\\text{ J} - 8\\text{ J} = 8\\text{ J} \\implies \\frac{\\Delta E}{E_{ki}} = \\frac{8}{16} = 0{,}50 = 50\\%$$"
        }
      ],
      answer: "Poprawna odpowiedź: C ($50\\%$). W zderzeniu niesprężystym ciał o równej masie traci się zawsze $50\\%$ energii kinetycznej."
    }
  },
  {
    id: "p-zad-31",
    number: 31,
    title: "Zadanie 31. Uderzenie plasteliny w klocek",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Plastelina", "Bilans energii"],
    problem: `<p class="problem-paragraph">Kula plasteliny $0{,}10\\text{ kg}$ leci poziomo z szybkością $20\\text{ m/s}$ i przykleja się do nieruchomego klocka $0{,}90\\text{ kg}$ na gładkim stole. Oblicz wspólną szybkość. Jaką część początkowej energii kinetycznej utracił układ?</p>`,
    solution: {
      givens: "$m_1 = 0{,}10\\text{ kg}$, $v_1 = 20\\text{ m/s}$, $m_2 = 0{,}90\\text{ kg}$, $v_2 = 0$.",
      steps: [
        {
          title: "Wspólna prędkość z zasady zachowania pędu",
          content: "Początkowy pęd: $p = m_1 v_1 = 0{,}10 \\cdot 20 = 2\\text{ kg}\\cdot\\text{m/s}$.\nCałkowita masa: $M = 0{,}10 + 0{,}90 = 1{,}0\\text{ kg}$.\n$$v = \\frac{p}{M} = \\frac{2\\text{ kg}\\cdot\\text{m/s}}{1{,}0\\text{ kg}} = 2\\text{ m/s}$$"
        },
        {
          title: "Bilans energii kinetycznej",
          content: "Energia przed uderzeniem:\n$$E_i = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}10 \\cdot 20^2 = 20\\text{ J}$$\nEnergia po uderzeniu:\n$$E_f = \\frac{1}{2}M v^2 = \\frac{1}{2} \\cdot 1{,}0 \\cdot 2^2 = 2\\text{ J}$$"
        },
        {
          title: "Ubytek energii",
          content: "Ubytek energii: $\\Delta E = 20\\text{ J} - 2\\text{ J} = 18\\text{ J}$.\n$$\\frac{\\Delta E}{E_i} = \\frac{18\\text{ J}}{20\\text{ J}} = 0{,}90 = 90\\%$$"
        }
      ],
      answer: "Wspólna szybkość wynosi $2\\text{ m/s}$. Układ utracił $18\\text{ J}$ energii kinetycznej, co stanowi $90\\%$ energii początkowej."
    }
  },
  {
    id: "p-zad-32",
    number: 32,
    title: "Zadanie 32. Zderzenie niesprężyste i hamowanie tarciem",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Tarcie", "Dwuetapowe"],
    problem: `<p class="problem-paragraph">Wózek $1\\text{ kg}$ jedzie z $8\\text{ m/s}$ i zderza się niesprężyście z nieruchomym wózkiem $3\\text{ kg}$. Po zderzeniu oba wózki poruszają się po szorstkim torze, na którym siła tarcia ma wartość $4\\text{ N}$. Oblicz drogę do zatrzymania układu.</p>`,
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = 8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = 0$, $T = 4\\text{ N}$.",
      steps: [
        {
          title: "Prędkość po zderzeniu z pędu",
          content: "$$m_1 v_1 = (m_1 + m_2) v \\implies 1 \\cdot 8 = (1 + 3) v \\implies 8 = 4v \\implies v = 2\\text{ m/s}$$"
        },
        {
          title: "Energia kinetyczna po zderzeniu",
          content: "Energia kinetyczna sczepionych wózków tuż po zderzeniu:\n$$E_{kf} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 8\\text{ J}$$"
        },
        {
          title: "Droga hamowania pod wpływem pracy tarcia",
          content: "Praca tarcia niweluje energię $E_{kf}$:\n$$W_t = -T \\cdot s \\implies -4s = -8 \\implies s = 2\\text{ m}$$"
        }
      ],
      answer: "Droga do zatrzymania układu wynosi $2\\text{ m}$.",
      trap: "Nie wolno używać energii sprzed zderzenia ($E_i = 32\\text{ J}$) jako energii do wyhamowania, ponieważ aż $24\\text{ J}$ zostało bezpowrotnie rozproszone w samym akcie zderzenia!"
    }
  },
  {
    id: "p-zad-33",
    number: 33,
    title: "Zadanie 33. Zjazd ze stoku, zderzenie niesprężyste i ubytek energii",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Zjazd z równi", "Ubytek energii", "Zadanie maturalne"],
    problem: `<p class="problem-paragraph">Klocek $m_1 = 0{,}50\\text{ kg}$ zsuwa się bez tarcia z wysokości $1{,}8\\text{ m}$ i na poziomym torze zderza się niesprężyście z nieruchomym klockiem $m_2 = 1{,}0\\text{ kg}$. Po zderzeniu klocki poruszają się razem. Oblicz szybkość pierwszego klocka tuż przed zderzeniem, wspólną szybkość tuż po zderzeniu i ubytek energii kinetycznej w samym zderzeniu.</p>
`,
    solution: {
      givens: "$m_1 = 0{,}50\\text{ kg}$, $h = 1{,}8\\text{ m}$, $m_2 = 1{,}0\\text{ kg}$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Szybkość pierwszego klocka tuż przed zderzeniem",
          content: "Z zasady zachowania energii na gładkim zjeździe:\n$$m_1 gh = \\frac{1}{2}m_1 v_1^2 \\implies v_1 = \\sqrt{2gh} = \\sqrt{2 \\cdot 10 \\cdot 1{,}8} = \\sqrt{36} = 6\\text{ m/s}$$"
        },
        {
          title: "Wspólna szybkość klocków tuż po zderzeniu",
          content: "W zderzeniu niesprężystym zachowany jest pęd:\n$$m_1 v_1 = (m_1 + m_2) v \\implies 0{,}50 \\cdot 6 = (0{,}50 + 1{,}0) v \\implies 3 = 1{,}5 v \\implies v = 2\\text{ m/s}$$"
        },
        {
          title: "Ubytek energii kinetycznej w zderzeniu",
          content: "Energia tuż przed zderzeniem:\n$$E_i = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}50 \\cdot 6^2 = 9\\text{ J}$$\nEnergia tuż po zderzeniu:\n$$E_f = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 1{,}50 \\cdot 2^2 = 3\\text{ J}$$\nUbytek energii w samym zderzeniu:\n$$\\Delta E = E_i - E_f = 9\\text{ J} - 3\\text{ J} = 6\\text{ J}$$"
        }
      ],
      answer: "Szybkość przed zderzeniem: $6\\text{ m/s}$, wspólna szybkość po zderzeniu: $2\\text{ m/s}$, ubytek energii w zderzeniu: $6\\text{ J}$."
    }
  }
];

// PODROZDZIAŁ 4: ZDERZENIA SPRĘŻYSTE (34-42)
const tasksSub4 = [
  {
    id: "p-zad-34",
    number: 34,
    title: "Zadanie 34. Warunek zderzenia doskonale sprężystego",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Zasady zachowania", "Zadanie zamknięte"],
    correctOption: "C",
    correctOption: "C",
    problem: `<p class="problem-paragraph">W izolowanym układzie zderzenie jest doskonale sprężyste, gdy zachowują się:</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">tylko pęd</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">tylko energia kinetyczna</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">pęd i energia kinetyczna</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">pęd, energia kinetyczna i masa każdej kuli</span></div>
</div>`,
    solution: {
      givens: "Izolowany układ mechaniczny.",
      steps: [
        {
          title: "Definicja zderzenia sprężystego",
          content: "W każdym izolowanym układzie pęd jest zawsze zachowany (wynika z III zasady dynamiki Newtona). Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy dodatkowo zachowana jest całkowita energia kinetyczna układu (brak rozproszenia energii na ciepło czy trwałe deformacje)."
        }
      ],
      answer: "Poprawna odpowiedź: C (pęd i energia kinetyczna)."
    }
  },
  {
    id: "p-zad-35",
    number: 35,
    title: "Zadanie 35. Zderzenie centralne sprężyste ciał o równych masach",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Równe masy", "Zadanie zamknięte"],
    correctOption: "A",
    correctOption: "A",
    problem: `<p class="problem-paragraph">Kula $1\\text{ kg}$ poruszająca się z szybkością $4\\text{ m/s}$ zderza się centralnie i sprężyście z nieruchomą kulą o tej samej masie. Wskaż prędkości obu kul po zderzeniu.</p>
<div class="problem-options-list" data-correct="A">
  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$v_1' = 0,\\ v_2' = 4\\text{ m/s}$ w prawo</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$v_1' = 2\\text{ m/s},\\ v_2' = 2\\text{ m/s}$ w prawo</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$v_1' = 4\\text{ m/s},\\ v_2' = 0$</span></div>
  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$v_1' = 4\\text{ m/s}$ w lewo$,\\ v_2' = 0$</span></div>
</div>`,
    solution: {
      givens: "$m_1 = m_2 = 1\\text{ kg}$, $v_1 = 4\\text{ m/s}$ (w prawo), $v_2 = 0$.",
      steps: [
        {
          title: "Wymiana prędkości ciał o równych masach",
          content: "W centralnym zderzeniu sprężystym ciał o jednakowych masach dochodzi do całkowitej wymiany prędkości:\n$$v_1' = v_2 = 0$$\n$$v_2' = v_1 = 4\\text{ m/s}\\quad\\text{(w prawo)}$$"
        }
      ],
      answer: "Poprawna odpowiedź: A ($v_1' = 0,\\ v_2' = 4\\text{ m/s}$ w prawo). Kula uderzająca zatrzymuje się, a kula uderzana przejmuje całą prędkość."
    }
  },
  {
    id: "p-zad-36",
    number: 36,
    title: "Zadanie 36. Zderzenie sprężyste kuli z dwukrotnie cięższą kulą",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Odbicie"],
    problem: `<p class="problem-paragraph">Kula $m_1 = 1\\text{ kg}$ z prędkością $6\\text{ m/s}$ uderza centralnie i sprężyście w nieruchomą kulę $m_2 = 2\\text{ kg}$. Oblicz prędkości obu kul po zderzeniu.</p>`,
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = 6\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
      steps: [
        {
          title: "Równania pędu i względnej prędkości",
          content: "Pęd: $1 \\cdot 6 + 2 \\cdot 0 = 1 \\cdot v_1' + 2 \\cdot v_2' \\implies 6 = v_1' + 2v_2'$.\nW zderzeniu sprężystym prędkość oddalania równa się prędkości zbliżania:\n$$v_2' - v_1' = v_1 - v_2 = 6 \\implies v_1' = v_2' - 6$$"
        },
        {
          title: "Rozwiązanie układu równań",
          content: "Podstawiając $v_1'$ do równania pędu:\n$$6 = (v_2' - 6) + 2v_2' \\implies 12 = 3v_2' \\implies v_2' = 4\\text{ m/s}$$\n$$v_1' = 4 - 6 = -2\\text{ m/s}$$"
        }
      ],
      answer: "$v_1' = -2\\text{ m/s}$ (lżejsza kula odbija się i porusza w lewo z szybkością $2\\text{ m/s}$), $v_2' = 4\\text{ m/s}$ (cięższa kula porusza się w prawo z szybkością $4\\text{ m/s}$)."
    }
  },
  {
    id: "p-zad-37",
    number: 37,
    title: "Zadanie 37. Czołowe zderzenie sprężyste przy zerowym pędzie całkowitym",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Układ środka masy", "Zerowy pęd"],
    problem: `<p class="problem-paragraph">Dwie kule o masach $m_1 = 2\\text{ kg}$ i $m_2 = 1\\text{ kg}$ poruszają się wzdłuż jednej prostej: pierwsza w prawo z $2\\text{ m/s}$, druga w lewo z $4\\text{ m/s}$. Po zderzeniu sprężystym oblicz ich prędkości.</p>`,
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $v_1 = +2\\text{ m/s}$, $m_2 = 1\\text{ kg}$, $v_2 = -4\\text{ m/s}$.",
      steps: [
        {
          title: "Wyznaczenie całkowitego pędu układu",
          content: "$$p = m_1 v_1 + m_2 v_2 = 2 \\cdot 2 + 1 \\cdot (-4) = 4 - 4 = 0$$"
        },
        {
          title: "Wyznaczenie prędkości po zderzeniu",
          content: "Gdy całkowity pęd początkowy wynosi zero, w zderzeniu sprężystym kule po prostu odwracają zwroty swoich prędkości:\n$$v_1' = -v_1 = -2\\text{ m/s}\\quad\\text{(w lewo)}$$\n$$v_2' = -v_2 = +4\\text{ m/s}\\quad\\text{(w prawo)}$$\nKontrola energii: $\\frac{1}{2} \\cdot 2 \\cdot 2^2 + \\frac{1}{2} \\cdot 1 \\cdot 4^2 = 4 + 8 = 12\\text{ J}$ (energia zachowana)."
        }
      ],
      answer: "Prędkości kul po zderzeniu wynoszą: $v_1' = -2\\text{ m/s}$ (w lewo) oraz $v_2' = +4\\text{ m/s}$ (w prawo)."
    }
  },
  {
    id: "p-zad-38",
    number: 38,
    title: "Zadanie 38. Weryfikacja sprężystości zderzenia wózków",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Zachowanie energii", "Zadanie maturalne"],
    problem: `<p class="problem-paragraph">Wózek $1\\text{ kg}$ jedzie w prawo z $5\\text{ m/s}$ i zderza się z nieruchomym wózkiem $4\\text{ kg}$. Po zderzeniu pierwszy wózek jedzie w lewo z szybkością $3\\text{ m/s}$. Sprawdź, czy zderzenie mogło być sprężyste.</p>
`,
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = +5\\text{ m/s}$, $m_2 = 4\\text{ kg}$, $v_2 = 0$, $v_1' = -3\\text{ m/s}$ (w lewo).",
      steps: [
        {
          title: "Obliczenie prędkości drugiego wózka z zasady zachowania pędu",
          content: "Pęd przed zderzeniem: $p = 1 \\cdot 5 = 5\\text{ kg}\\cdot\\text{m/s}$.\n$$1 \\cdot (-3) + 4 \\cdot v_2' = 5 \\implies -3 + 4v_2' = 5 \\implies 4v_2' = 8 \\implies v_2' = 2\\text{ m/s}$$"
        },
        {
          title: "Porównanie energii kinetycznych przed i po zderzeniu",
          content: "Energia przed zderzeniem:\n$$E_i = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 1 \\cdot 5^2 = 12{,}5\\text{ J}$$\nEnergia po zderzeniu:\n$$E_f = \\frac{1}{2}m_1 (v_1')^2 + \\frac{1}{2}m_2 (v_2')^2 = \\frac{1}{2} \\cdot 1 \\cdot (-3)^2 + \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 4{,}5 + 8 = 12{,}5\\text{ J}$$"
        }
      ],
      answer: "Tak, zderzenie mogło być doskonale sprężyste, ponieważ energia kinetyczna układu została w pełni zachowana ($E_f = E_i = 12{,}5\\text{ J}$)."
    }
  },
  {
    id: "p-zad-39",
    number: 39,
    title: "Zadanie 39. Dwuwymiarowe zderzenie sprężyste jednakowych kul",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste 2D", "Kąt prosty", "Zadanie maturalne"],
    problem: `<p class="problem-paragraph">Dwie jednakowe kule poruszają się początkowo: A z szybkością $5\\text{ m/s}$ na wschód, B spoczywa. Po sprężystym zderzeniu w płaszczyźnie kula A ma szybkość $3\\text{ m/s}$. Oblicz szybkość kuli B i kąt między prędkościami kul po zderzeniu.</p>
`,
    solution: {
      givens: "$m_A = m_B = m$, $v_0 = 5\\text{ m/s}$ (wschód), $v_B = 0$, $v_A' = 3\\text{ m/s}$.",
      steps: [
        {
          title: "Obliczenie szybkości kuli B z zasady zachowania energii",
          content: "Dla jednakowych mas energia kinetyczna daje:\n$$v_0^2 = (v_A')^2 + (v_B')^2 \\implies 5^2 = 3^2 + (v_B')^2 \\implies 25 = 9 + (v_B')^2$$\n$$(v_B')^2 = 16 \\implies v_B' = 4\\text{ m/s}$$"
        },
        {
          title: "Wyznaczenie kąta między wektorami prędkości z pędu",
          content: "Z wektorowej zasady zachowania pędu: $\\vec{v}_0 = \\vec{v}_A' + \\vec{v}_B'$.\nPodnosząc skalarnie do kwadratu:\n$$v_0^2 = (v_A')^2 + (v_B')^2 + 2 \\vec{v}_A' \\cdot \\vec{v}_B'$$\nPorównując z bilansem energii, otrzymujemy: $2 \\vec{v}_A' \\cdot \\vec{v}_B' = 0 \\implies \\vec{v}_A' \\perp \\vec{v}_B'$."
        }
      ],
      answer: "Szybkość kuli B wynosi $4\\text{ m/s}$, a kąt między wektorami prędkości kul po zderzeniu wynosi $90^\\circ$."
    }
  },
  {
    id: "p-zad-40",
    number: 40,
    title: "Zadanie 40. Zderzenie sprężyste z rozproszeniem kuli na północ",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste 2D", "Wektory pędu"],
    problem: `<p class="problem-paragraph">Kula $0{,}20\\text{ kg}$ porusza się na wschód z szybkością $10\\text{ m/s}$ i zderza się sprężyście z nieruchomą kulą o tej samej masie. Po zderzeniu pierwsza kula porusza się na północ. Wyznacz szybkość obu kul i kierunek ruchu drugiej kuli.</p>`,
    solution: {
      givens: "$m_1 = m_2 = 0{,}20\\text{ kg}$, $v_0 = 10\\text{ m/s}$ (wschód), po zderzeniu pierwsza kula porusza się na północ.",
      steps: [
        {
          title: "Analiza wektorów pędu",
          content: "Początkowy wektor prędkości jest sumą wektorów końcowych ($\\vec{v}_0 = \\vec{v}_1' + \\vec{v}_2'$). Skoro $\\vec{v}_1'$ biegnie na północ, $\\vec{v}_2'$ musi mieć składową wschodnią oraz składową południową."
        },
        {
          title: "Bilans energii i składowych",
          content: "Zachowanie energii: $10^2 = (v_1')^2 + (v_2')^2$.\nWarunek pędu w osi pionowej (północ–południe) wymaga równych co do wartości i przeciwnych składowych:\n$$v_1' = v_2' = \\frac{10}{\\sqrt{2}}\\text{ m/s} = 5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$$"
        },
        {
          title: "Kierunek ruchu drugiej kuli",
          content: "Składowa wschodnia i południowa drugiej kuli są równe, więc kąt wynosi $45^\\circ$ na południe od wschodu."
        }
      ],
      answer: "Szybkości obu kul po zderzeniu wynoszą $v_1' = v_2' = 5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$. Druga kula porusza się pod kątem $45^\\circ$ na południe od kierunku wschodniego."
    }
  },
  {
    id: "p-zad-41",
    number: 41,
    title: "Zadanie 41. Zderzenie sprężyste ciał o różnych masach i prędkościach",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie centralne sprężyste", "Wzory na zderzenie sprężyste"],
    problem: `<p class="problem-paragraph">Kula $m_1 = 1\\text{ kg}$ porusza się w prawo z $8\\text{ m/s}$ i zderza się sprężyście z kulą $m_2 = 3\\text{ kg}$ poruszającą się w prawo z $2\\text{ m/s}$. Wyznacz prędkości po zderzeniu. Czy pierwsza kula odbije się?</p>`,
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = +8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = +2\\text{ m/s}$.",
      steps: [
        {
          title: "Zastosowanie wzorów na prędkości po zderzeniu sprężystym",
          content: "$$v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 + \\frac{2m_2}{m_1 + m_2}v_2 = \\frac{1 - 3}{1 + 3} \\cdot 8 + \\frac{2 \\cdot 3}{1 + 3} \\cdot 2 = -\\frac{2}{4} \\cdot 8 + \\frac{6}{4} \\cdot 2 = -4 + 3 = -1\\text{ m/s}$$\n$$v_2' = \\frac{2m_1}{m_1 + m_2}v_1 + \\frac{m_2 - m_1}{m_1 + m_2}v_2 = \\frac{2 \\cdot 1}{4} \\cdot 8 + \\frac{3 - 1}{4} \\cdot 2 = 4 + 1 = 5\\text{ m/s}$$"
        },
        {
          title: "Kontrola pędu i interpretacja znaku",
          content: "Pęd przed: $1 \\cdot 8 + 3 \\cdot 2 = 14\\text{ kg}\\cdot\\text{m/s}$.\nPęd po: $1 \\cdot (-1) + 3 \\cdot 5 = 14\\text{ kg}\\cdot\\text{m/s}$.\nUjemny znak $v_1'$ oznacza zmianę zwrotu ruchu."
        }
      ],
      answer: "Prędkości po zderzeniu: $v_1' = -1\\text{ m/s}$ oraz $v_2' = 5\\text{ m/s}$. Pierwsza kula odbija się i porusza w lewo z szybkością $1\\text{ m/s}$."
    }
  },
  {
    id: "p-zad-42",
    number: 42,
    title: "Zadanie 42. Sprężyste zderzenie wózków m i 3m na torze",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Wyprowadzenie wzoru", "Ułamek energii", "Zadanie maturalne"],
    problem: `<p class="problem-paragraph">Na gładkim poziomym torze wózek A o masie $m$ porusza się w prawo z szybkością $v$. Wózek B o masie $3m$ spoczywa. Zderzenie jest centralne i doskonale sprężyste.</p>
<div class="problem-subquestion-item">
  <strong class="problem-subquestion-letter">(a)</strong>
  <span class="problem-subquestion-text">Wyprowadź prędkości obu wózków po zderzeniu w zależności od $v$.</span>
</div>
<div class="problem-subquestion-item">
  <strong class="problem-subquestion-letter">(b)</strong>
  <span class="problem-subquestion-text">Sprawdź zachowanie pędu i energii kinetycznej.</span>
</div>
<div class="problem-subquestion-item">
  <strong class="problem-subquestion-letter">(c)</strong>
  <span class="problem-subquestion-text">Ustal, jaka część początkowej energii kinetycznej A pozostanie przy A.</span>
</div>
`,
    solution: {
      givens: "$m_A = m$, $v_A = v$, $m_B = 3m$, $v_B = 0$.",
      steps: [
        {
          title: "(a) Wyprowadzenie prędkości po zderzeniu",
          content: "Niech prędkości po zderzeniu wynoszą $u_A$ i $u_B$.\nZ zachowania pędu:\n$$mv = mu_A + 3mu_B \\implies v = u_A + 3u_B \\implies u_A = v - 3u_B$$\nZ zachowania energii kinetycznej:\n$$\\frac{1}{2}mv^2 = \\frac{1}{2}mu_A^2 + \\frac{1}{2}(3m)u_B^2 \\implies v^2 = u_A^2 + 3u_B^2$$\nPodstawiając $u_A = v - 3u_B$:\n$$v^2 = (v - 3u_B)^2 + 3u_B^2 = v^2 - 6v u_B + 9u_B^2 + 3u_B^2$$\n$$12u_B^2 - 6v u_B = 0 \\implies 6u_B (2u_B - v) = 0$$\nOdrzucając stan początkowy ($u_B = 0$), otrzymujemy:\n$$u_B = \\frac{v}{2}$$\n$$u_A = v - 3\\left(\\frac{v}{2}\\right) = -\\frac{v}{2}$$"
        },
        {
          title: "(b) Kontrola zachowania pędu i energii",
          content: "Pęd po zderzeniu:\n$$p_f = m u_A + 3m u_B = m\\left(-\\frac{v}{2}\\right) + 3m\\left(\\frac{v}{2}\\right) = mv = p_i$$\nEnergia kinetyczna po zderzeniu:\n$$E_f = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 + \\frac{1}{2}(3m)\\left(\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2 + \\frac{3}{8}mv^2 = \\frac{4}{8}mv^2 = \\frac{1}{2}mv^2 = E_i$$\nObie wielkości są zachowane."
        },
        {
          title: "(c) Ułamek energii kinetycznej wózka A",
          content: "Energia kinetyczna wózka A po zderzeniu:\n$$E_{kA}' = \\frac{1}{2}m u_A^2 = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2$$\nPoczątkowa energia wózka A to $E_{kA} = \\frac{1}{2}mv^2$.\n$$\\frac{E_{kA}'}{E_{kA}} = \\frac{\\frac{1}{8}mv^2}{\\frac{1}{2}mv^2} = \\frac{1}{4} = 25\\%$$"
        }
      ],
      answer: "(a) $u_A = -\\frac{v}{2}$ (wózek A odbija się w lewo z szybkością $v/2$), $u_B = \\frac{v}{2}$ (wózek B porusza się w prawo z szybkością $v/2$). (b) Pęd wynosi $mv$, energia kinetyczna $\\frac{1}{2}mv^2$ — obie wielkości są zachowane. (c) Przy wózku A pozostaje $\\frac{1}{4}$ ($25\\%$) początkowej energii kinetycznej."
    }
  }
];

// Now load data-courses.js, update section m-praca, and save
const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
const rawCode = fs.readFileSync(dataCoursesPath, 'utf8');

// Parse using vm
const sandbox = { window: {} };
vm.runInNewContext(rawCode, sandbox);

const courses = sandbox.window.FIZYKOREK_COURSES;
const pracaSection = courses['matura-fizyka'].sections.find(s => s.id === 'm-praca');

if (!pracaSection) {
  console.error("Section 'm-praca' not found!");
  process.exit(1);
}

// Preserve existing matura subchapter
const existingMaturaSub = pracaSection.subchapters.find(s => s.id === 'sub-praca-matura') || pracaSection.subchapters[0];
existingMaturaSub.id = 'sub-praca-matura';
existingMaturaSub.number = 5;
existingMaturaSub.icon = '🎓';
existingMaturaSub.title = '5. Zadania maturalne CKE';
existingMaturaSub.shortTitle = 'Matura CKE';
existingMaturaSub.desc = 'Formuła 2023: autentyczne zadania maturalne CKE z lat 2023–2026 i informatorów maturalnych z pełnymi rozwiązaniami krok po kroku.';
existingMaturaSub.formulaCheat = '';

// Apply interactive options to matura tasks
existingMaturaSub.tasks.forEach(t => {
  if (t.id === 'matura-cke-praca-2023-czerwiec-zad-2') {
    if (!t.problem.includes('data-correct="B"')) {
      t.problem = t.problem.replace('<div class="chart-container-svg"><img src="img/energy/2023-czerwiec-z2-opcje.png" alt="Odpowiedzi A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:450px;display:block;margin:15px auto;"></div>', `<div class="chart-container-svg"><img src="img/energy/2023-czerwiec-z2-opcje.png" alt="Odpowiedzi A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:450px;display:block;margin:15px auto;"></div>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">Rysunek A</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">Rysunek B</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">Rysunek C</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">Rysunek D</span></div>
</div>`);
    }
  }
  if (t.id === 'matura-cke-praca-2023-maj-zad-2') {
    if (!t.problem.includes('data-correct="C"')) {
      t.problem = t.problem.replace('<div class="chart-container-svg"><img src="img/energy/2023-maj-z2-opcje.png" alt="Rysunki A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:720px;display:block;margin:15px auto;"></div>', `<div class="chart-container-svg"><img src="img/energy/2023-maj-z2-opcje.png" alt="Rysunki A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:720px;display:block;margin:15px auto;"></div>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">Rysunek A</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">Rysunek B</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">Rysunek C</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">Rysunek D</span></div>
</div>`);
    }
  }
  if (t.id === 'matura-cke-praca-2026-czerwiec-zad-3') {
    if (!t.problem.includes('data-correct="P"')) {
      t.problem = t.problem.replace('<tr><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr><tr><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr>', `<tr data-correct="P"><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class="pf-box" data-pf="P">P</td><td class="pf-box" data-pf="F">F</td></tr><tr data-correct="P"><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class="pf-box" data-pf="P">P</td><td class="pf-box" data-pf="F">F</td></tr>`);
    }
  }
});

// Apply interactive options to matura tasks
existingMaturaSub.tasks.forEach(t => {
  if (t.id === 'matura-cke-praca-2023-czerwiec-zad-2') {
    if (!t.problem.includes('data-correct="B"')) {
      t.problem = t.problem.replace('<div class="chart-container-svg"><img src="img/energy/2023-czerwiec-z2-opcje.png" alt="Odpowiedzi A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:450px;display:block;margin:15px auto;"></div>', `<div class="chart-container-svg"><img src="img/energy/2023-czerwiec-z2-opcje.png" alt="Odpowiedzi A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:450px;display:block;margin:15px auto;"></div>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">Rysunek A</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">Rysunek B</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">Rysunek C</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">Rysunek D</span></div>
</div>`);
    }
  }
  if (t.id === 'matura-cke-praca-2023-maj-zad-2') {
    if (!t.problem.includes('data-correct="C"')) {
      t.problem = t.problem.replace('<div class="chart-container-svg"><img src="img/energy/2023-maj-z2-opcje.png" alt="Rysunki A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:720px;display:block;margin:15px auto;"></div>', `<div class="chart-container-svg"><img src="img/energy/2023-maj-z2-opcje.png" alt="Rysunki A–D – wektory prędkości po zderzeniu" class="theory-img" style="max-height:720px;display:block;margin:15px auto;"></div>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">Rysunek A</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">Rysunek B</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">Rysunek C</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">Rysunek D</span></div>
</div>`);
    }
  }
  if (t.id === 'matura-cke-praca-2026-czerwiec-zad-3') {
    if (!t.problem.includes('data-correct="P"')) {
      t.problem = t.problem.replace('<tr><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr><tr><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr>', `<tr data-correct="P"><td>Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.</td><td class="pf-box" data-pf="P">P</td><td class="pf-box" data-pf="F">F</td></tr><tr data-correct="P"><td>Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.</td><td class="pf-box" data-pf="P">P</td><td class="pf-box" data-pf="F">F</td></tr>`);
    }
  }
  if (t.id === 'matura-cke-praca-2026-maj-zad-2') {
    if (!t.problem.includes('data-correct="B"')) {
      t.problem = t.problem.replace('<div class="chart-container-svg"><img src="img/energy/2026-maj-z2-opcje.png" alt="Rysunki A–D – siły w najniższym położeniu" class="theory-img" style="max-height:640px;display:block;margin:15px auto;"></div>', `<div class="chart-container-svg"><img src="img/energy/2026-maj-z2-opcje.png" alt="Rysunki A–D – siły w najniższym położeniu" class="theory-img" style="max-height:640px;display:block;margin:15px auto;"></div>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">Rysunek A</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">Rysunek B</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">Rysunek C</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">Rysunek D</span></div>
</div>`);
    }
  }
});

const theorySub1 = "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">📌 1. Praca jako miara przekazywania energii ($W$)</div>\n  <p>Praca siły stałej $\\vec{F}$ na prostoliniowym przemieszczeniu $\\vec{s}$ jest iloczynem skalarnym:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$W = \\vec{F} \\cdot \\vec{s} = F \\cdot s \\cdot \\cos\\alpha$$</div>\n  <ul class=\"theory-list\">\n    <li><strong>$F$</strong> – wartość siły $[\\text{N}]$, <strong>$s$</strong> – przemieszczenie $[\\text{m}]$, <strong>$\\alpha$</strong> – kąt między wektorem siły a wektorem przemieszczenia.</li>\n    <li>Jednostka pracy i energii w układzie SI: $1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = 1\\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$.</li>\n    <li><strong>Twierdzenie o pracy i energii:</strong> praca siły wypadkowej jest równa zmianie energii kinetycznej ciała: $W_{\\text{wyp}} = \\Delta E_k$.</li>\n  </ul>\n\n  <div class=\"theory-subtitle\">⚖️ 2. Znaki pracy i siły bez pracy (kluczowe na maturze)</div>\n  <ul class=\"theory-list\">\n    <li><strong>Praca dodatnia ($W > 0$):</strong> gdy $\\alpha < 90^\\circ$ ($\\cos\\alpha > 0$) – siła wspomaga ruch, zwiększając energię kinetyczną.</li>\n    <li><strong>Praca równa zero ($W = 0$):</strong> gdy siła działa <u>prostopadle</u> do kierunku ruchu ($\\alpha = 90^\\circ \\implies \\cos 90^\\circ = 0$).<br>\n    <em>Ważne:</em> Ciężar ciała ($W_g = 0$) oraz siła reakcji podłoża ($W_N = 0$) <strong>nie wykonują pracy</strong> przy poziomym przemieszczeniu! Podobnie siła dośrodkowa w ruchu po okręgu nie wykonuje pracy ($W_{doś} = 0$).</li>\n    <li><strong>Praca ujemna ($W < 0$):</strong> gdy $\\alpha > 90^\\circ$ ($\\cos\\alpha < 0$) – siła hamuje ruch, odbierając ciału energię mechaniczną.<br>\n    Dla siły tarcia zwrot jest zawsze przeciwny do przemieszczenia ($\\alpha = 180^\\circ \\implies \\cos 180^\\circ = -1$):\n    <div style=\"text-align:center;margin:4px 0;\">$$W_T = -T \\cdot s = -\\mu N s$$</div></li>\n  </ul>\n\n  <div class=\"theory-subtitle\">📊 3. Interpretacja geometryczna – pole pod wykresem $F(s)$</div>\n  <p>Dla dowolnej siły (stałej lub zmiennej) praca jest równa <strong>polu powierzchni pod wykresem $F(s)$</strong>:</p>\n  <ul class=\"theory-list\">\n    <li>Dla siły stałej: pole prostokąta $W = F \\cdot s$.</li>\n    <li>Dla siły sprężystej $F(x) = kx$: pole trójkąta pod wykresem $W = \\frac{1}{2} k x^2$ (równa energii potencjalnej sprężystości).</li>\n  </ul>\n\n  <div class=\"theory-subtitle\">⚡ 4. Moc ($P$) i sprawność urządzeń ($\\eta$)</div>\n  <ul class=\"theory-list\">\n    <li><strong>Moc średnia:</strong> tempo przekazywania energii: $P = \\frac{W}{t}$ $[\\text{W} = \\text{J}/\\text{s}]$.</li>\n    <li><strong>Moc przy stałej prędkości ($v = \\text{const}$):</strong> $P = F \\cdot v$. Gdy pojazd porusza się ruchem jednostajnym, siła napędowa silnika równoważy opory ruchu ($F_{\\text{napęd}} = F_{\\text{op}}$), więc:\n    <div style=\"text-align:center;margin:4px 0;\">$$P = F_{\\text{op}} \\cdot v$$</div></li>\n    <li><strong>Sprawność urządzenia:</strong> stosunek energii użytecznej do energii całkowitej:\n    <div style=\"text-align:center;margin:4px 0;\">$$\\eta = \\frac{W_u}{W_c} = \\frac{P_u}{P_c} \\le 1 \\quad (\\text{lub } \\eta \\cdot 100\\%)$$</div>\n    Dla dźwigu podnoszącego masę $m$ na wysokość $h$: $W_u = mgh$, a $W_c = P_{\\text{silnika}} \\cdot t$.</li>\n  </ul>\n</div>";

const theorySub2 = "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">🔄 1. Formy energii mechanicznej</div>\n  <ul class=\"theory-list\">\n    <li><strong>Energia kinetyczna:</strong> energia ruchu ciała o masie $m$:\n    <div style=\"text-align:center;margin:4px 0;\">$$E_k = \\frac{m v^2}{2}$$</div>\n    <em>Zależność kwadratowa:</em> dwukrotny wzrost prędkości oznacza 4-krotny wzrost energii kinetycznej i 4-krotnie dłuższą drogę hamowania!</li>\n    <li><strong>Energia potencjalna grawitacji:</strong> energia układu ciało–Ziemia na wysokości $h$:\n    <div style=\"text-align:center;margin:4px 0;\">$$E_p = mgh$$</div></li>\n    <li><strong>Energia potencjalna sprężystości:</strong> energia sprężyny o współczynniku $k$ odkształconej o $x$:\n    <div style=\"text-align:center;margin:4px 0;\">$$E_s = \\frac{1}{2} k x^2$$</div></li>\n  </ul>\n\n  <div class=\"theory-subtitle\">⚖️ 2. Zasada Zachowania Energii Mechanicznej</div>\n  <p>W układzie izolowanym, gdy na ciała działają wyłącznie <strong>siły zachowawcze</strong> (grawitacja, siła sprężystości), całkowita energia mechaniczna pozostaje stała:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$E_{\\text{mech}} = E_k + E_p = \\text{const} \\implies E_{k1} + E_{p1} = E_{k2} + E_{p2}$$</div>\n  <ul class=\"theory-list\">\n    <li><strong>Spadek swobodny lub zsuwanie z równi bez tarcia:</strong> zamiana całej energii potencjalnej w kinetyczną ($mgh = \\frac{mv^2}{2}$) daje prędkość na dole:\n    <div style=\"text-align:center;margin:4px 0;\">$$v = \\sqrt{2gh}$$</div>\n    Prędkość ta zależy wyłącznie od różnicy wysokości $h$, a <strong>nie zależy od masy ciała ani kąta nachylenia równi</strong>.</li>\n  </ul>\n\n  <div class=\"theory-subtitle\">🔥 3. Bilans energii z uwzględnieniem sił oporu i tarcia</div>\n  <p>Gdy w układzie występuje tarcie lub opór powietrza, siły te wykonują pracę ujemną ($W_T < 0$), zmniejszając energię mechaniczną układu i zamieniając ją w energię wewnętrzną (ciepło $Q$):</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$E_{\\text{mech},\\text{pocz}} + W_T = E_{\\text{mech},\\text{końc}} \\iff E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + |W_T|$$</div>\n  <p>gdzie wydzielone ciepło to $|W_T| = T \\cdot s = Q$.</p>\n\n  <div class=\"theory-subtitle\">🎡 4. Ruch po okręgu w płaszczyźnie pionowej (wahadło)</div>\n  <ul class=\"theory-list\">\n    <li>Z Zasady Zachowania Energii wyznaczamy prędkość w najniższym punkcie toru: $\\frac{mv^2}{2} = mgh \\implies v = \\sqrt{2gh}$.</li>\n    <li>Z II zasady dynamiki w najniższym punkcie siła wypadkowa pełni rolę siły dośrodkowej:\n    <div style=\"text-align:center;margin:4px 0;\">$$F_n - mg = \\frac{m v^2}{R} \\implies F_n = mg + \\frac{m v^2}{R}$$</div>\n    Siła naciągu nici $F_n$ jest więc <strong>zawsze większa od ciężaru ciała</strong> o wartość siły dośrodkowej.</li>\n  </ul>\n</div>";

const theorySub3 = "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">💥 1. Zasada Zachowania Pędu (ZZP)</div>\n  <p>Dla układu ciał, na który nie działają zewnętrzne siły wypadkowe, całkowity wektor pędu układu pozostaje stały:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}} \\implies m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = \\text{const}$$</div>\n\n  <div class=\"theory-subtitle\">🤝 2. Zderzenie doskonale niesprężyste (sczepianie ciał)</div>\n  <p>W zderzeniu doskonale niesprężystym ciała łączą się po zderzeniu i poruszają z jedną, wspólną prędkością $\\vec{v}$:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = (m_1 + m_2) \\vec{v} \\implies \\vec{v} = \\frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{m_1 + m_2}$$</div>\n  <ul class=\"theory-list\">\n    <li>Dla ciał poruszających się naprzeciwko siebie na jednej prostej uwzględniamy zwroty wektorów:\n    <div style=\"text-align:center;margin:4px 0;\">$$m_1 v_1 - m_2 v_2 = (m_1 + m_2) v$$</div>\n    Znak prędkości $v$ wskazuje kierunek dalszego wspólnego ruchu układu.</li>\n  </ul>\n\n  <div class=\"theory-subtitle\">🔥 3. Bilans energii – ubytek energii kinetycznej na ciepło</div>\n  <p>W zderzeniu niesprężystym <strong>energia kinetyczna NIE jest zachowana</strong>. Część energii mechanicznej ulega zamianie na pracę trwałych odkształceń i energię wewnętrzną (ciepło $Q$):</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$Q = \\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = \\left(\\frac{m_1 v_1^2}{2} + \\frac{m_2 v_2^2}{2}\\right) - \\frac{(m_1 + m_2) v^2}{2} > 0$$</div>\n  <div class=\"theory-callout-rule\">\n    <strong>🎯 Klasyczny przypadek z zadań CKE:</strong> Gdy ciało o masie $m$ zderza się niesprężyście z nieruchomym ciałem o <em>takiej samej</em> masie $m$, wspólna prędkość wynosi $v = \\frac{v_1}{2}$, a utracie na ciepło ulega <strong>dokładnie 50%</strong> początkowej energii kinetycznej.\n  </div>\n\n  <div class=\"theory-subtitle\">🎯 4. Wahadło balistyczne (dwuetapowy schemat)</div>\n  <ul class=\"theory-list\">\n    <li><strong>Etap 1 (zderzenie):</strong> Pocisk o masie $m$ wbija się w wiszący klocek o masie $M$. Proces trwa ułamek sekundy – stosujemy <strong>Zasadę Zachowania Pędu</strong>:\n    <div style=\"text-align:center;margin:4px 0;\">$$m v = (m + M) u \\implies u = \\frac{m}{m + M} v$$</div></li>\n    <li><strong>Etap 2 (wznoszenie):</strong> Klocek z pociskiem wznosi się na wysokość $h$. Po zderzeniu nie ma oporów – stosujemy <strong>Zasadę Zachowania Energii</strong>:\n    <div style=\"text-align:center;margin:4px 0;\">$$\\frac{(m + M) u^2}{2} = (m + M) gh \\implies u = \\sqrt{2gh}$$</div></li>\n  </ul>\n\n  <div class=\"theory-subtitle\">🚀 5. Zjawisko odrzutu</div>\n  <p>Dla układu początkowo spoczywającego ($p_{\\text{pocz}} = 0$):</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$0 = m v_p - M v_{\\text{od}} \\implies v_{\\text{od}} = \\frac{m}{M} v_p$$</div>\n</div>";

const theorySub4 = "<div class=\"theory-section\">\n  <div class=\"theory-subtitle\">⚪ 1. Definicja zderzenia doskonale sprężystego</div>\n  <p>Zderzenie, w którym <strong>nie występują straty energii na ciepło ani odkształcenia trwałe</strong>. Obowiązuje fundamentalny układ dwóch zasad zachowania:</p>\n  <div style=\"text-align:center;margin:8px 0;\">\n  $$\\begin{cases} \n  m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2' & \\text{(Zasada Zachowania Pędu)} \\\\[8pt]\n  \\dfrac{m_1 v_1^2}{2} + \\dfrac{m_2 v_2^2}{2} = \\dfrac{m_1 v_1'^2}{2} + \\dfrac{m_2 v_2'^2}{2} & \\text{(Zasada Zachowania Energii)}\n  \\end{cases}$$\n  </div>\n\n  <div class=\"theory-subtitle\">🎯 2. Szczególny przypadek: równe masy ($m_1 = m_2$)</div>\n  <p>Z układu powyższych dwóch równań wynika fundamentalny wniosek: przy centralnym zderzeniu sprężystym ciał o jednakowych masach dochodzi do <strong>całkowitej wymiany prędkości</strong>:</p>\n  <div style=\"text-align:center;margin:6px 0;\">$$v_1' = v_2 \\quad \\text{oraz} \\quad v_2' = v_1$$</div>\n  <ul class=\"theory-list\">\n    <li>Gdy ciało 1 uderza w spoczywające ciało 2 ($v_2 = 0$):\n    <div style=\"text-align:center;margin:4px 0;\">$$v_1' = 0 \\quad (\\text{ciało 1 zatrzymuje się w miejscu}), \\qquad v_2' = v_1 \\quad (\\text{ciało 2 przejmuje całą prędkość i energię})$$</div></li>\n  </ul>\n\n  <div class=\"theory-subtitle\">🌀 3. Zderzenie za pośrednictwem sprężyny (bilans energii w stanie pośrednim)</div>\n  <p>Gdy klocek uderza w drugi klocek połączony ze sprężyną (zadanie z matury CKE 2026):</p>\n  <ul class=\"theory-list\">\n    <li><strong>W chwili maksymalnego ściśnięcia sprężyny:</strong> prędkość względna klocków wynosi zero ($v_{\\text{wzgl}} = 0$). Oba klocki poruszają się z tą samą prędkością $v_{\\text{śr}} = \\frac{m_1 v_1}{m_1 + m_2}$ (z ZZP).</li>\n    <li><strong>Bilans energii z ZZE:</strong> różnica początkowej i chwilowej energii kinetycznej układu została zmagazynowana w sprężynie jako energia potencjalna sprężystości:\n    <div style=\"text-align:center;margin:4px 0;\">$$E_s = \\frac{1}{2} k (\\Delta x_{\\max})^2 = E_{k,\\text{pocz}} - E_{k,\\text{śr}}$$</div>\n    Gdy sprężyna się rozpręży, oddaje 100% tej energii z powrotem do energii kinetycznej klocków.</li>\n  </ul>\n\n  <div class=\"theory-subtitle\">🧱 4. Odbicie sprężyste od ściany ($M \\gg m$)</div>\n  <p>Gdy ciało o masie $m$ uderza prostopadle ze sprężystością w nieruchomą ścianę lub podłoże o bardzo dużej masie ($M \\to \\infty$):</p>\n  <ul class=\"theory-list\">\n    <li>Z Zasady Zachowania Energii wartość prędkości nie ulega zmianie: $|v'| = |v|$.</li>\n    <li>Zwrot wektora prędkości ulega odwróceniu: $v' = -v$.</li>\n    <li>Zmiana pędu ciała wynosi: $\\Delta p = m v' - m v = m(-v) - mv = -2mv$ (wartość bezwzględna $|\\Delta p| = 2mv$).</li>\n  </ul>\n</div>";

// Define the 4 introductory subchapters
const sub1 = {
  id: 'sub-praca-moc',
  number: 1,
  icon: '⚡',
  title: '1. Praca i moc',
  shortTitle: 'Praca i moc',
  desc: 'Praca siły stałej i tarcia, pola pod wykresami F(s) oraz P(t), moc chwilowa, średnia i sprawność urządzeń.',
  theory: theorySub1,
  formulaCheat: 'W = F \\cdot s \\cdot \\cos\\alpha, \\quad P = \\frac{W}{t} = F \\cdot v, \\quad \\eta = \\frac{P_u}{P_c}',
  tasks: tasksSub1
};

const sub2 = {
  id: 'sub-energie-zachowanie',
  number: 2,
  icon: '🔄',
  title: '2. Rodzaje energii i zasada zachowania energii',
  shortTitle: 'Rodzaje energii',
  desc: 'Energia kinetyczna, potencjalna grawitacji i sprężystości, twierdzenie o pracy i energii oraz bilans energii mechanicznej z pracą tarcia.',
  theory: theorySub2,
  formulaCheat: 'E_k = \\frac{m v^2}{2}, \\quad E_p = mgh, \\quad E_s = \\frac{k x^2}{2}, \\quad W_w = \\Delta E_k, \\quad W_t = \\Delta E_{\\text{mech}}',
  tasks: tasksSub2
};

const sub3 = {
  id: 'sub-zderzenia-niesprezyste',
  number: 3,
  icon: '💥',
  title: '3. Zderzenia niesprężyste',
  shortTitle: 'Zderzenia niesprężyste',
  desc: 'Zasada zachowania pędu, sczepianie ciał, zjawisko odrzutu, zderzenia skośne w 2D i ubytek energii kinetycznej w zderzeniu.',
  theory: theorySub3,
  formulaCheat: 'm_1 \\vec{v}_1 + m_2 \\vec{v}_2 = (m_1 + m_2)\\vec{v}, \\quad \\Delta E_k = E_{k,i} - E_{k,f}',
  tasks: tasksSub3
};

const sub4 = {
  id: 'sub-zderzenia-sprezyste',
  number: 4,
  icon: '⚪',
  title: '4. Zderzenia sprężyste',
  shortTitle: 'Zderzenia sprężyste',
  desc: 'Zderzenia doskonale sprężyste: jednoczesne zachowanie pędu i energii kinetycznej, wymiana prędkości dla równych mas i zderzenia 2D.',
  formulaCheat: '\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}}, \\quad \\sum E_{k,\\text{pocz}} = \\sum E_{k,\\text{końc}}',
  theory: theorySub4,
  tasks: tasksSub4
};

// Set subchapters in the exact desired order: 1, 2, 3, 4, then Matura CKE
pracaSection.subchapters = [sub1, sub2, sub3, sub4, existingMaturaSub];
pracaSection.tasks = pracaSection.subchapters.flatMap(s => s.tasks);
pracaSection.badge = '4 Etapy Wprowadzające + Matura CKE';

// Write back to js/data-courses.js
const updatedContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync(dataCoursesPath, updatedContent, 'utf8');

console.log('Successfully updated js/data-courses.js!');
console.log('m-praca now has ' + pracaSection.subchapters.length + ' subchapters:');
pracaSection.subchapters.forEach(sc => {
  console.log(`- ${sc.id}: "${sc.title}" (${sc.tasks.length} tasks)`);
});
