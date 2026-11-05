const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Helper for SVG diagram in task 6: Wykres omega(t)
const svgTask6 = `<div class="chart-container-svg" style="max-width:540px;margin:16px auto;">
  <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:system-ui,sans-serif;">
    <defs>
      <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="#334155" />
      </marker>
    </defs>
    <!-- Background grid -->
    <rect width="500" height="260" fill="#f8fafc" rx="8" />
    <!-- Axes -->
    <line x1="60" y1="210" x2="460" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arr)" />
    <line x1="60" y1="210" x2="60" y2="30" stroke="#334155" stroke-width="2" marker-end="url(#arr)" />
    <!-- Labels on axes -->
    <text x="455" y="235" font-size="14" font-weight="600" fill="#334155">t [s]</text>
    <text x="65" y="25" font-size="14" font-weight="600" fill="#334155">ω [rad/s]</text>
    <!-- Ticks & Dashed lines -->
    <!-- y = 8 (pixel y = 70) -->
    <line x1="55" y1="70" x2="60" y2="70" stroke="#334155" stroke-width="1.5" />
    <text x="42" y="75" font-size="13" font-weight="600" fill="#1e293b" text-anchor="end">8</text>
    <line x1="60" y1="70" x2="340" y2="70" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5" />
    <!-- x = 0 (pixel 60) -->
    <text x="48" y="226" font-size="13" font-weight="600" fill="#64748b">0</text>
    <!-- x = 4 (pixel 160) -->
    <line x1="160" y1="210" x2="160" y2="215" stroke="#334155" stroke-width="1.5" />
    <text x="160" y="230" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle">4</text>
    <line x1="160" y1="210" x2="160" y2="70" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5" />
    <!-- x = 10 (pixel 340) -->
    <line x1="340" y1="210" x2="340" y2="215" stroke="#334155" stroke-width="1.5" />
    <text x="340" y="230" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle">10</text>
    <line x1="340" y1="210" x2="340" y2="70" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5" />
    <!-- x = 14 (pixel 440) -->
    <line x1="440" y1="210" x2="440" y2="215" stroke="#334155" stroke-width="1.5" />
    <text x="440" y="230" font-size="13" font-weight="600" fill="#1e293b" text-anchor="middle">14</text>
    <!-- Main Plot line -->
    <polyline points="60,210 160,70 340,70 440,210" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" />
    <circle cx="60" cy="210" r="4.5" fill="#2563eb" />
    <circle cx="160" cy="70" r="4.5" fill="#2563eb" />
    <circle cx="340" cy="70" r="4.5" fill="#2563eb" />
    <circle cx="440" cy="210" r="4.5" fill="#2563eb" />
  </svg>
</div>`;

// Helper for SVG diagram in task 11: Toczące się koło z punktami A, B, C, D
const svgTask11 = `<div class="chart-container-svg" style="max-width:440px;margin:16px auto;">
  <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:system-ui,sans-serif;">
    <defs>
      <marker id="arr11" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="#2563eb" />
      </marker>
      <marker id="arrRot" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="#0f172a" />
      </marker>
    </defs>
    <!-- Ground line -->
    <line x1="20" y1="220" x2="340" y2="220" stroke="#334155" stroke-width="2.5" />
    <!-- Wheel -->
    <circle cx="180" cy="130" r="90" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5" />
    <!-- Points -->
    <!-- Center B -->
    <circle cx="180" cy="130" r="4" fill="#0f172a" />
    <text x="170" y="135" font-size="14" font-weight="700" fill="#0f172a">B</text>
    <!-- Velocity v of center -->
    <line x1="180" y1="130" x2="245" y2="130" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr11)" />
    <text x="215" y="122" font-size="14" font-weight="600" font-style="italic" fill="#2563eb">v</text>
    <!-- Rotation arrow omega -->
    <path d="M 195 150 A 25 25 0 0 1 170 155" fill="none" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arrRot)" />
    <text x="190" y="168" font-size="14" font-weight="600" font-style="italic" fill="#0f172a">ω</text>
    <!-- Top point A -->
    <circle cx="180" cy="40" r="4" fill="#0f172a" />
    <text x="175" y="32" font-size="14" font-weight="700" fill="#0f172a">A</text>
    <!-- Bottom contact point C -->
    <circle cx="180" cy="220" r="4" fill="#0f172a" />
    <text x="175" y="238" font-size="14" font-weight="700" fill="#0f172a">C</text>
    <!-- Left point D -->
    <circle cx="90" cy="130" r="4" fill="#0f172a" />
    <text x="73" y="135" font-size="14" font-weight="700" fill="#0f172a">D</text>
  </svg>
</div>`;

// Helper for SVG diagram in task 17: Belka na podporach
const svgTask17 = `<div class="chart-container-svg" style="max-width:500px;margin:16px auto;">
  <svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:system-ui,sans-serif;">
    <defs>
      <marker id="arrRed" markerWidth="7" markerHeight="7" refX="3.5" refY="6" orient="auto">
        <polygon points="0 0, 7 0, 3.5 6" fill="#dc2626" />
      </marker>
    </defs>
    <!-- Beam -->
    <rect x="50" y="70" width="360" height="12" fill="#cbd5e1" stroke="#334155" stroke-width="2" rx="2" />
    <!-- Support A (x=50) -->
    <polygon points="50,82 40,105 60,105" fill="#f8fafc" stroke="#334155" stroke-width="2" />
    <text x="50" y="125" font-size="15" font-weight="700" fill="#0f172a" text-anchor="middle">A</text>
    <!-- Support B (x=410) -->
    <polygon points="410,82 400,105 420,105" fill="#f8fafc" stroke="#334155" stroke-width="2" />
    <text x="410" y="125" font-size="15" font-weight="700" fill="#0f172a" text-anchor="middle">B</text>
    <!-- Beam Center of mass force Mg (x = 230) -->
    <line x1="230" y1="20" x2="230" y2="68" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrRed)" />
    <text x="238" y="42" font-size="14" font-weight="700" fill="#dc2626">Mg</text>
    <!-- Load mg at 3m from left (x = 50 + 3/4*360 = 320) -->
    <line x1="320" y1="20" x2="320" y2="68" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrRed)" />
    <text x="328" y="42" font-size="14" font-weight="700" fill="#dc2626">mg</text>
  </svg>
</div>`;

console.log('Generating 44 tasks for bryla sztywna...');

// SUBCHAPTER 1: Zadania 1–11
const tasksSub1 = [
  {
    id: "b-zad-1",
    number: 1,
    title: "Zadanie 1. Prędkość kątowa punktów tarczy",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Ruch obrotowy", "Prędkość kątowa", "Zadanie zamknięte"],
    correctOption: "B",
    problem: `<p class="problem-paragraph">Jednorodna tarcza obraca się wokół nieruchomej osi. Która wielkość jest jednakowa dla wszystkich punktów tarczy?</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">prędkość liniowa</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">prędkość kątowa</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">przyspieszenie dośrodkowe</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">droga przebyta w jednym obrocie</span></div>
</div>`,
    solution: {
      givens: "Jednorodna tarcza w obrocie wokół nieruchomej osi.",
      steps: [
        {
          title: "Niezmienniki obrotu bryły sztywnej",
          content: "Wszystkie punkty bryły sztywnej obracają się o ten sam kąt $\\Delta\\alpha$ w tym samym czasie $\\Delta t$, zatem mają identyczną prędkość kątową $\\omega = \\frac{\\Delta\\alpha}{\\Delta t}$, częstotliwość $f$ oraz okres $T$.\nPozostałe wielkości zależą liniowo od odległości $r$ od osi obrotu:\n$$v = \\omega r, \\quad a_d = \\omega^2 r, \\quad s = 2\\pi r$$"
        }
      ],
      answer: "Poprawna odpowiedź: B (prędkość kątowa).",
      trap: "Nie myl prędkości kątowej $\\omega$, która charakteryzuje obrót całej bryły, z prędkością liniową $v = \\omega r$, która zależy od odległości punktu od osi obrotu."
    }
  },
  {
    id: "b-zad-2",
    number: 2,
    title: "Zadanie 2. Częstotliwość, okres i prędkość kątowa",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Ruch obrotowy", "Okres i częstotliwość", "Prędkość kątowa"],
    problem: `<p class="problem-paragraph">Koło wykonuje $120$ obrotów na minutę. Oblicz częstotliwość, okres i prędkość kątową koła.</p>`,
    solution: {
      givens: "Liczba obrotów $n = 120$, czas $t = 1\\text{ min} = 60\\text{ s}$.",
      steps: [
        {
          title: "Wyznaczenie częstotliwości i okresu",
          content: "Częstotliwość to liczba pełnych obrotów na sekundę:\n$$f = \\frac{n}{t} = \\frac{120}{60\\text{ s}} = 2\\text{ Hz}$$\nOkres to odwrotność częstotliwości:\n$$T = \\frac{1}{f} = \\frac{1}{2\\text{ Hz}} = 0{,}50\\text{ s}$$"
        },
        {
          title: "Obliczenie prędkości kątowej",
          content: "Prędkość kątową obliczamy ze związku $\\omega = 2\\pi f$:\n$$\\omega = 2\\pi \\cdot 2\\text{ s}^{-1} = 4\\pi\\text{ rad/s} \\approx 12{,}57\\text{ rad/s}$$"
        }
      ],
      numerical: "$f = 2\\text{ Hz}$, $T = 0{,}50\\text{ s}$, $\\omega = 4\\pi\\text{ rad/s} \\approx 12{,}6\\text{ rad/s}$",
      answer: "Częstotliwość wynosi $2\\text{ Hz}$, okres $0{,}50\\text{ s}$, a prędkość kątowa $4\\pi\\text{ rad/s} \\approx 12{,}6\\text{ rad/s}$."
    }
  },
  {
    id: "b-zad-3",
    number: 3,
    title: "Zadanie 3. Prędkość liniowa punktu na obwodzie koła",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Ruch obrotowy", "Związek v = ωr"],
    problem: `<p class="problem-paragraph">Punkt na obwodzie koła o promieniu $0{,}25\\text{ m}$ porusza się z prędkością kątową $8\\text{ rad/s}$. Oblicz jego prędkość liniową.</p>`,
    solution: {
      givens: "$r = 0{,}25\\text{ m}$, $\\omega = 8\\text{ rad/s}$.",
      steps: [
        {
          title: "Zastosowanie relacji prędkości liniowej i kątowej",
          content: "Prędkość liniowa punktu odległego o $r$ od osi wynosi:\n$$v = \\omega r = 8\\text{ rad/s} \\cdot 0{,}25\\text{ m} = 2\\text{ m/s}$$"
        }
      ],
      numerical: "$v = 8 \\cdot 0{,}25 = 2\\text{ m/s}$",
      answer: "Prędkość liniowa punktu wynosi $2\\text{ m/s}$."
    }
  },
  {
    id: "b-zad-4",
    number: 4,
    title: "Zadanie 4. Porównanie prędkości i okresów punktów tarczy",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Ruch obrotowy", "Zadanie zamknięte", "Punkty na tarczy"],
    correctOption: "A",
    problem: `<p class="problem-paragraph">Punkty A i B należą do tej samej obracającej się tarczy. Odległość B od osi jest dwa razy większa niż odległość A. Wskaż poprawną zależność.</p>
<div class="problem-options-list" data-correct="A">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$v_B = 2v_A\\text{ i }T_B = T_A$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$v_B = v_A\\text{ i }T_B = 2T_A$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$v_B = 4v_A\\text{ i }T_B = T_A$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$v_B = 2v_A\\text{ i }T_B = 2T_A$</span></div>
</div>`,
    solution: {
      givens: "$r_B = 2r_A$, punkty należą do tej samej bryły sztywnej.",
      steps: [
        {
          title: "Porównanie okresu i prędkości liniowej",
          content: "Wszystkie punkty bryły wykonują jeden pełny obrót w tym samym czasie, więc $T_B = T_A$ oraz $\\omega_B = \\omega_A$.\nZ relacji $v = \\omega r$ wynika:\n$$v_B = \\omega r_B = \\omega (2r_A) = 2(\\omega r_A) = 2v_A$$"
        }
      ],
      answer: "Poprawna odpowiedź: A ($v_B = 2v_A\\text{ i }T_B = T_A$).",
      trap: "Okres $T$ zależy od obrotu całej tarczy i jest identyczny dla każdego jej punktu bez względu na odległość od osi."
    }
  },
  {
    id: "b-zad-5",
    number: 5,
    title: "Zadanie 5. Przyspieszenie kątowe i kąt obrotu wirnika",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Ruch obrotowy", "Przyspieszenie kątowe", "Kąt obrotu"],
    problem: `<p class="problem-paragraph">Prędkość kątowa wirnika wzrasta jednostajnie od $4\\text{ rad/s}$ do $16\\text{ rad/s}$ w czasie $3\\text{ s}$. Oblicz przyspieszenie kątowe i kąt obrotu.</p>`,
    solution: {
      givens: "$\\omega_0 = 4\\text{ rad/s}$, $\\omega = 16\\text{ rad/s}$, $t = 3\\text{ s}$.",
      steps: [
        {
          title: "Obliczenie przyspieszenia kątowego",
          content: "W ruchu jednostajnie zmiennym przyspieszenie kątowe jest stałe:\n$$\\varepsilon = \\frac{\\Delta\\omega}{t} = \\frac{16\\text{ rad/s} - 4\\text{ rad/s}}{3\\text{ s}} = \\frac{12}{3} = 4\\text{ rad/s}^2$$"
        },
        {
          title: "Obliczenie kąta obrotu",
          content: "Kąt obrotu możemy obliczyć przez prędkość średnią:\n$$\\omega_{\\text{śr}} = \\frac{\\omega_0 + \\omega}{2} = \\frac{4 + 16}{2} = 10\\text{ rad/s}$$\n$$\\Delta\\varphi = \\omega_{\\text{śr}} \\cdot t = 10\\text{ rad/s} \\cdot 3\\text{ s} = 30\\text{ rad}$$"
        }
      ],
      numerical: "$\\varepsilon = 4\\text{ rad/s}^2$, $\\Delta\\varphi = 30\\text{ rad}$",
      answer: "Przyspieszenie kątowe wynosi $4\\text{ rad/s}^2$, a kąt obrotu $30\\text{ rad}$."
    }
  },
  {
    id: "b-zad-6",
    number: 6,
    title: "Zadanie 6. Wykres prędkości kątowej ω(t)",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Ruch obrotowy", "Wykres ω(t)", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Wykres przedstawia prędkość kątową koła $\\omega(t)$. Oblicz przyspieszenie kątowe w chwili $t = 2\\text{ s}$ i $t = 12\\text{ s}$ oraz całkowity kąt obrotu od $t = 0$ do $t = 14\\text{ s}$.</p>
${svgTask6}`,
    solution: {
      givens: "Etapy z wykresu: $t \\in [0, 4\\text{ s}]$ wzrost $\\omega$ od $0$ do $8\\text{ rad/s}$; $t \\in [4, 10\\text{ s}]$ stała $\\omega = 8\\text{ rad/s}$; $t \\in [10, 14\\text{ s}]$ spadek do zera.",
      steps: [
        {
          title: "Przyspieszenie kątowe jako nachylenie wykresu",
          content: "W chwili $t = 2\\text{ s}$ koło znajduje się na pierwszym odcinku ($t \\in [0, 4\\text{ s}]$):\n$$\\varepsilon_1 = \\frac{8\\text{ rad/s} - 0}{4\\text{ s} - 0} = 2\\text{ rad/s}^2$$\nW chwili $t = 12\\text{ s}$ koło hamuje ($t \\in [10, 14\\text{ s}]$):\n$$\\varepsilon_3 = \\frac{0 - 8\\text{ rad/s}}{14\\text{ s} - 10\\text{ s}} = \\frac{-8}{4} = -2\\text{ rad/s}^2$$"
        },
        {
          title: "Całkowity kąt obrotu z pola pod wykresem",
          content: "Pole figury pod wykresem $\\omega(t)$ to trapez o podstawach $a = 14\\text{ s}$, $b = 10 - 4 = 6\\text{ s}$ i wysokości $h = 8\\text{ rad/s}$:\n$$\\Delta\\varphi = \\frac{a + b}{2} \\cdot h = \\frac{14 + 6}{2} \\cdot 8 = 10 \\cdot 8 = 80\\text{ rad}$$"
        }
      ],
      numerical: "$\\varepsilon(2\\text{ s}) = 2\\text{ rad/s}^2$, $\\varepsilon(12\\text{ s}) = -2\\text{ rad/s}^2$, $\\Delta\\varphi = 80\\text{ rad}$",
      answer: "Przyspieszenie w $t = 2\\text{ s}$ wynosi $2\\text{ rad/s}^2$, w $t = 12\\text{ s}$ wynosi $-2\\text{ rad/s}^2$, a całkowity kąt obrotu wynosi $80\\text{ rad}$."
    }
  },
  {
    id: "b-zad-7",
    number: 7,
    title: "Zadanie 7. Toczenie bez poślizgu i prędkości punktów koła",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Toczenie bez poślizgu", "Prędkości punktów", "Ruch złożony"],
    problem: `<p class="problem-paragraph">Koło o promieniu $0{,}20\\text{ m}$ toczy się bez poślizgu z prędkością środka $3\\text{ m/s}$. Oblicz prędkość kątową koła oraz wartości prędkości punktu najwyższego i punktu styku z podłożem względem ziemi.</p>`,
    solution: {
      givens: "$R = 0{,}20\\text{ m}$, $v_{\\text{śr}} = 3\\text{ m/s}$, toczenie bez poślizgu.",
      steps: [
        {
          title: "Warunek toczenia bez poślizgu",
          content: "Przy braku poślizgu prędkość kątowa koła związana jest z prędkością środka masy relacją:\n$$\\omega = \\frac{v_{\\text{śr}}}{R} = \\frac{3\\text{ m/s}}{0{,}20\\text{ m}} = 15\\text{ rad/s}$$"
        },
        {
          title: "Składanie ruchu postępowego i obrotowego",
          content: "Prędkość każdego punktu jest sumą wektorową prędkości postępowej środka oraz prędkości obrotowej względem środka ($v_{\\text{obr}} = \\omega R = 3\\text{ m/s}$):\n1. Punkt najwyższy: wektory prędkości postępowej i obrotowej są skierowane zgodnie w prawo:\n$$v_g = v_{\\text{śr}} + \\omega R = 3 + 3 = 6\\text{ m/s}$$\n2. Punkt styku z podłożem: wektor obrotowy ma zwrot w lewo i znosi się z wektorem postępowym:\n$$v_d = v_{\\text{śr}} - \\omega R = 3 - 3 = 0\\text{ m/s}$$"
        }
      ],
      numerical: "$\\omega = 15\\text{ rad/s}$, $v_g = 6\\text{ m/s}$, $v_d = 0\\text{ m/s}$",
      answer: "Prędkość kątowa wynosi $15\\text{ rad/s}$. Prędkość punktu najwyższego wynosi $6\\text{ m/s}$, a punktu styku z podłożem $0\\text{ m/s}$."
    }
  },
  {
    id: "b-zad-8",
    number: 8,
    title: "Zadanie 8. Prędkość punktu najwyższego w toczeniu",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Toczenie bez poślizgu", "Zadanie zamknięte", "Prędkość punktu"],
    correctOption: "D",
    problem: `<p class="problem-paragraph">Koło toczy się bez poślizgu w prawo. Jeżeli środek koła ma prędkość $v$, to prędkość punktu najwyższego względem podłoża wynosi:</p>
<div class="problem-options-list" data-correct="D">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$0$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$v$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$\\sqrt{2}v$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$2v$</span></div>
</div>`,
    solution: {
      givens: "Prędkość środka koła $v_{\\text{śr}} = v$, brak poślizgu ($\\omega R = v$).",
      steps: [
        {
          title: "Suma prędkości w najwyższym punkcie",
          content: "W najwyższym punkcie prędkość ruchu postępowego ($v$ w prawo) i prędkość ruchu obrotowego ($v_{\\text{obr}} = \\omega R = v$ w prawo) mają ten sam kierunek i zwrot:\n$$v_{\\text{max}} = v + v = 2v$$"
        }
      ],
      answer: "Poprawna odpowiedź: D ($2v$).",
      trap: "Pamiętaj, że punkt styku koła chwilowo spoczywa ($v = 0$), środek ma prędkość $v$, a punkt szczytowy porusza się z prędkością $2v$ względem ziemi."
    }
  },
  {
    id: "b-zad-9",
    number: 9,
    title: "Zadanie 9. Przyspieszenie kątowe i obrót kół samochodu",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Toczenie bez poślizgu", "Ruch jednostajnie przyspieszony", "Kąt obrotu"],
    problem: `<p class="problem-paragraph">Samochód rusza ze spoczynku i po $6\\text{ s}$ osiąga prędkość $12\\text{ m/s}$. Promień kół wynosi $0{,}30\\text{ m}$, a ruch jest jednostajnie przyspieszony bez poślizgu. Oblicz przyspieszenie kątowe kół i kąt ich obrotu w tym czasie.</p>`,
    solution: {
      givens: "$v_0 = 0$, $v = 12\\text{ m/s}$, $t = 6\\text{ s}$, $R = 0{,}30\\text{ m}$.",
      steps: [
        {
          title: "Wyznaczenie przyspieszenia liniowego i kątowego",
          content: "Przyspieszenie liniowe samochodu wynosi:\n$$a = \\frac{\\Delta v}{t} = \\frac{12\\text{ m/s}}{6\\text{ s}} = 2\\text{ m/s}^2$$\nZ braku poślizgu $a = \\varepsilon R$, więc przyspieszenie kątowe kół wynosi:\n$$\\varepsilon = \\frac{a}{R} = \\frac{2\\text{ m/s}^2}{0{,}30\\text{ m}} = \\frac{20}{3}\\text{ rad/s}^2 \\approx 6{,}67\\text{ rad/s}^2$$"
        },
        {
          title: "Droga i kąt obrotu",
          content: "Droga przebyta przez samochód:\n$$s = \\frac{a t^2}{2} = \\frac{2 \\cdot 6^2}{2} = 36\\text{ m}$$\nKąt obrotu kół odpowiada rozwinięciu obwodu:\n$$\\Delta\\varphi = \\frac{s}{R} = \\frac{36\\text{ m}}{0{,}30\\text{ m}} = 120\\text{ rad}$$"
        }
      ],
      numerical: "$\\varepsilon = \\frac{20}{3}\\text{ rad/s}^2 \\approx 6{,}67\\text{ rad/s}^2$, $\\Delta\\varphi = 120\\text{ rad}$",
      answer: "Przyspieszenie kątowe wynosi $\\frac{20}{3}\\text{ rad/s}^2 \\approx 6{,}67\\text{ rad/s}^2$, a kąt obrotu kół to $120\\text{ rad}$."
    }
  },
  {
    id: "b-zad-10",
    number: 10,
    title: "Zadanie 10. Przekładnia łańcuchowa w rowerze",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Przekładnia", "Ruch obrotowy", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Przednia zębatka roweru ma promień $0{,}10\\text{ m}$, tylna $0{,}04\\text{ m}$, a promień tylnego koła wynosi $0{,}35\\text{ m}$. Przednia zębatka obraca się z prędkością kątową $3\\text{ rad/s}$. Łańcuch nie ślizga się, a tylna zębatka obraca się razem z kołem. Oblicz prędkość roweru.</p>`,
    solution: {
      givens: "$r_1 = 0{,}10\\text{ m}$, $r_2 = 0{,}04\\text{ m}$, $R_{\\text{koła}} = 0{,}35\\text{ m}$, $\\omega_1 = 3\\text{ rad/s}$.",
      steps: [
        {
          title: "Prędkość liniowa łańcucha",
          content: "Łańcuch przesuwa się ze stałą prędkością liniową równą prędkości obwodowej przedniej zębatki:\n$$v_ł = \\omega_1 r_1 = 3\\text{ rad/s} \\cdot 0{,}10\\text{ m} = 0{,}30\\text{ m/s}$$"
        },
        {
          title: "Prędkość kątowa tylnej zębatki i koła",
          content: "Tylna zębatka napędzana łańcuchem osiąga prędkość kątową:\n$$\\omega_2 = \\frac{v_ł}{r_2} = \\frac{0{,}30\\text{ m/s}}{0{,}04\\text{ m}} = 7{,}5\\text{ rad/s}$$\nKoło tylne obraca się na tej samej osi ze wspólną prędkością kątową $\\omega_2$."
        },
        {
          title: "Prędkość liniowa roweru",
          content: "Przy toczeniu tylnego koła bez poślizgu:\n$$v = \\omega_2 R_{\\text{koła}} = 7{,}5\\text{ rad/s} \\cdot 0{,}35\\text{ m} = 2{,}625\\text{ m/s} \\approx 2{,}63\\text{ m/s}$$"
        }
      ],
      numerical: "$v = 7{,}5 \\cdot 0{,}35 = 2{,}625\\text{ m/s} \\approx 2{,}63\\text{ m/s}$",
      answer: "Prędkość roweru wynosi $2{,}625\\text{ m/s} \\approx 2{,}63\\text{ m/s}$ (ok. $9{,}45\\text{ km/h}$)."
    }
  },
  {
    id: "b-zad-11",
    number: 11,
    title: "Zadanie 11. Rozkład wektorów prędkości na toczącym się kole",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Toczenie bez poślizgu", "Wektory prędkości", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Koło toczy się bez poślizgu w prawo z prędkością środka równą $v$. Punkty A, B, C i D leżą odpowiednio: na górze koła, w środku, w punkcie styku oraz na lewym skraju obwodu. Wyznacz wartości i kierunki ich prędkości względem podłoża.</p>
${svgTask11}`,
    solution: {
      givens: "Prędkość środka koła $v_{\\text{śr}} = v$, promień $R$, toczenie bez poślizgu ($\\omega R = v$).",
      steps: [
        {
          title: "Zasada dodawania wektorów prędkości w toczeniu",
          content: "Prędkość wypadkowa każdego punktu $\\vec{v}_i$ jest sumą wektorową prędkości środka masy $\\vec{v}$ (ruch postępowy, wektor poziomy w prawo) oraz prędkości obrotowej $\\vec{v}_{\\text{obr}}$ o stałej wartości $\\omega R = v$, stycznej do okręgu w danym punkcie."
        },
        {
          title: "Wyznaczenie prędkości poszczególnych punktów",
          content: "1. Punkt A (szczyt koła): wektor obrotu jest poziomy w prawo: $v_A = v + v = 2v$ (zwrot poziomy w prawo).\n2. Punkt B (środek koła): prędkość obrotowa wynosi zero ($r = 0$): $v_B = v$ (zwrot poziomy w prawo).\n3. Punkt C (punkt styku): wektor obrotu jest poziomy w lewo: $v_C = v - v = 0$ (chwilowy spoczynek).\n4. Punkt D (lewy skraj): ruch postępowy daje wektor $v$ w prawo, a obrót daje wektor $v$ pionowo w dół. Wektory są prostopadłe:\n$$v_D = \\sqrt{v^2 + v^2} = \\sqrt{2}v$$\nKierunek wektora $\\vec{v}_D$ tworzy kąt $45^\\circ$ z poziomem (skierowany ukośnie w prawo i w dół)."
        }
      ],
      answer: "Wartości i kierunki: $v_A = 2v$ (poziomo w prawo), $v_B = v$ (poziomo w prawo), $v_C = 0$ (chwilowy spoczynek), $v_D = \\sqrt{2}v$ (pod kątem $45^\\circ$ w dół w prawo)."
    }
  }
];

// SUBCHAPTER 2: Zadania 12–23
const tasksSub2 = [
  {
    id: "b-zad-12",
    number: 12,
    title: "Zadanie 12. Moment siły prostopadłej do ramienia",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment siły", "Definicja M = F·r"],
    problem: `<p class="problem-paragraph">Siła $20\\text{ N}$ działa prostopadle do ramienia długości $0{,}30\\text{ m}$. Oblicz wartość momentu siły.</p>`,
    solution: {
      givens: "$F = 20\\text{ N}$, $r = 0{,}30\\text{ m}$, $\\alpha = 90^\\circ$.",
      steps: [
        {
          title: "Obliczenie wartości momentu siły",
          content: "Dla siły prostopadłej do ramienia $\\sin 90^\\circ = 1$:\n$$M = F \\cdot r = 20\\text{ N} \\cdot 0{,}30\\text{ m} = 6\\text{ N}\\cdot\\text{m}$$"
        }
      ],
      numerical: "$M = 6\\text{ N}\\cdot\\text{m}$",
      answer: "Wartość momentu siły wynosi $6\\text{ N}\\cdot\\text{m}$."
    }
  },
  {
    id: "b-zad-13",
    number: 13,
    title: "Zadanie 13. Moment siły działającej pod kątem 30°",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment siły", "Zadanie zamknięte", "Kąt nachylenia"],
    correctOption: "B",
    problem: `<p class="problem-paragraph">Siła $30\\text{ N}$ działa na punkt odległy o $0{,}40\\text{ m}$ od osi. Kąt między wektorem ramienia a siłą wynosi $30^\\circ$. Moment siły ma wartość:</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$3\\text{ N}\\cdot\\text{m}$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$6\\text{ N}\\cdot\\text{m}$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$10{,}4\\text{ N}\\cdot\\text{m}$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$12\\text{ N}\\cdot\\text{m}$</span></div>
</div>`,
    solution: {
      givens: "$F = 30\\text{ N}$, $r = 0{,}40\\text{ m}$, $\\alpha = 30^\\circ$, $\\sin 30^\\circ = 0{,}5$.",
      steps: [
        {
          title: "Zastosowanie definicji momentu siły z sinusem kąta",
          content: "Wartość momentu siły wynosi:\n$$M = F \\cdot r \\cdot \\sin\\alpha = 30\\text{ N} \\cdot 0{,}40\\text{ m} \\cdot \\sin 30^\\circ = 12 \\cdot 0{,}5 = 6\\text{ N}\\cdot\\text{m}$$"
        }
      ],
      answer: "Poprawna odpowiedź: B ($6\\text{ N}\\cdot\\text{m}$).",
      trap: "Pamiętaj o uwzględnieniu sinusa kąta między ramieniem a kierunkiem siły – ramię efektywne to odległość linii działania siły od osi ($d = r\\sin\\alpha$)."
    }
  },
  {
    id: "b-zad-14",
    number: 14,
    title: "Zadanie 14. Momenty sił dla różnych kierunków działania",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment siły", "Kierunek siły", "Ramię siły"],
    problem: `<p class="problem-paragraph">W punkcie odległym o $0{,}50\\text{ m}$ od osi działają kolejno trzy siły o wartości $8\\text{ N}$: A prostopadle do promienia, B wzdłuż promienia, C pod kątem $30^\\circ$ do promienia. Oblicz wartości ich momentów sił.</p>`,
    solution: {
      givens: "$r = 0{,}50\\text{ m}$, $F = 8\\text{ N}$.",
      steps: [
        {
          title: "Obliczenie momentu każdej z sił",
          content: "1. Siła A (prostopadła do promienia, $\\alpha = 90^\\circ$):\n$$M_A = F \\cdot r \\cdot \\sin 90^\\circ = 8\\text{ N} \\cdot 0{,}50\\text{ m} \\cdot 1 = 4\\text{ N}\\cdot\\text{m}$$\n2. Siła B (wzdłuż promienia, $\\alpha = 0^\\circ$):\nLinia działania siły przechodzi bezpośrednio przez oś obrotu, więc ramię wynosi zero:\n$$M_B = F \\cdot r \\cdot \\sin 0^\\circ = 0\\text{ N}\\cdot\\text{m}$$\n3. Siła C (pod kątem $30^\\circ$ do promienia):\n$$M_C = F \\cdot r \\cdot \\sin 30^\\circ = 8\\text{ N} \\cdot 0{,}50\\text{ m} \\cdot 0{,}5 = 2\\text{ N}\\cdot\\text{m}$$"
        }
      ],
      numerical: "$M_A = 4\\text{ N}\\cdot\\text{m}$, $M_B = 0$, $M_C = 2\\text{ N}\\cdot\\text{m}$",
      answer: "Wartości momentów wynoszą: $M_A = 4\\text{ N}\\cdot\\text{m}$, $M_B = 0\\text{ N}\\cdot\\text{m}$, $M_C = 2\\text{ N}\\cdot\\text{m}$."
    }
  },
  {
    id: "b-zad-15",
    number: 15,
    title: "Zadanie 15. Znak momentu siły i konwencja obrotu",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment siły", "Znak momentu", "Konwencja zwrotu"],
    problem: `<p class="problem-paragraph">Na prawym końcu poziomego pręta, $0{,}40\\text{ m}$ od osi, działa pionowo w dół siła $10\\text{ N}$. Oblicz moment siły ze znakiem, przyjmując zwrot przeciwny do ruchu wskazówek zegara za dodatni.</p>`,
    solution: {
      givens: "$F = 10\\text{ N}$, $r = 0{,}40\\text{ m}$, siła skierowana pionowo w dół po prawej stronie osi.",
      steps: [
        {
          title: "Ustalenie wartości i zwrotu obrotu",
          content: "Wartość bezwzględna momentu wynosi:\n$$|M| = F \\cdot r = 10\\text{ N} \\cdot 0{,}40\\text{ m} = 4\\text{ N}\\cdot\\text{m}$$\nSiła skierowana w dół po prawej stronie osi obraca pręt zgodnie z ruchem wskazówek zegara. Zgodnie z przyjętą konwencją zwrot ten ma znak ujemny:\n$$M = -4\\text{ N}\\cdot\\text{m}$$"
        }
      ],
      numerical: "$M = -4\\text{ N}\\cdot\\text{m}$",
      answer: "Moment siły ze znakiem wynosi $-4\\text{ N}\\cdot\\text{m}$."
    }
  },
  {
    id: "b-zad-16",
    number: 16,
    title: "Zadanie 16. Równowaga dźwigni dwustronnej",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Równowaga", "Dźwignia", "Momenty sił"],
    problem: `<p class="problem-paragraph">Na nieważkiej belce po lewej stronie osi działa w dół siła $30\\text{ N}$ w odległości $1{,}0\\text{ m}$. Po prawej stronie, w odległości $1{,}5\\text{ m}$, działa w dół siła $F$. Oblicz $F$, jeżeli belka pozostaje w równowadze.</p>`,
    solution: {
      givens: "$F_1 = 30\\text{ N}$, $r_1 = 1{,}0\\text{ m}$, $r_2 = 1{,}5\\text{ m}$.",
      steps: [
        {
          title: "Zastosowanie warunku równowagi momentów sił",
          content: "Aby belka pozostała w równowadze obrotowej wokół osi, suma algebraiczna momentów musi wynosić zero:\n$$\\sum M = 0 \\implies F_1 \\cdot r_1 = F \\cdot r_2$$\nPodstawiamy wartości liczbowe:\n$$30\\text{ N} \\cdot 1{,}0\\text{ m} = F \\cdot 1{,}5\\text{ m} \\implies F = \\frac{30}{1{,}5} = 20\\text{ N}$$"
        }
      ],
      numerical: "$F = 20\\text{ N}$",
      answer: "Wartość siły $F$ wynosi $20\\text{ N}$."
    }
  },
  {
    id: "b-zad-17",
    number: 17,
    title: "Zadanie 17. Reakcje podpór jednorodnej belki",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Statyka", "Równowaga belki", "Reakcje podpór", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Jednorodna pozioma belka długości $4\\text{ m}$ i masie $20\\text{ kg}$ jest podparta na końcach A i B. W odległości $3\\text{ m}$ od lewego końca stoi ciężarek $10\\text{ kg}$. Oblicz pionowe siły reakcji podpór.</p>
${svgTask17}`,
    solution: {
      givens: "$L = 4\\text{ m}$, $M = 20\\text{ kg}$, $m = 10\\text{ kg}$, $x_m = 3\\text{ m}$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Wyznaczenie sił ciężkości i ich punktów przyłożenia",
          content: "Ciężar belki działa w jej środku geometrycznym ($x_M = 2\\text{ m}$ od punktu A):\n$$Q_b = M g = 20\\text{ kg} \\cdot 10\\text{ m/s}^2 = 200\\text{ N}$$\nCiężar obciążnika działa w odległości $x_m = 3\\text{ m}$ od punktu A:\n$$Q_m = m g = 10\\text{ kg} \\cdot 10\\text{ m/s}^2 = 100\\text{ N}$$"
        },
        {
          title: "Równanie momentów sił względem podpory A",
          content: "Wybieramy oś obrotu w punkcie A, aby wyeliminować niewiadomą $R_A$:\n$$\\sum M_A = 0 \\implies R_B \\cdot L - Q_b \\cdot \\frac{L}{2} - Q_m \\cdot x_m = 0$$\n$$R_B \\cdot 4 = 200 \\cdot 2 + 100 \\cdot 3 = 400 + 300 = 700$$\n$$R_B = \\frac{700}{4} = 175\\text{ N}$$"
        },
        {
          title: "Warunek równowagi sił w pionie",
          content: "Suma sił pionowych musi być równa zeru:\n$$R_A + R_B = Q_b + Q_m = 200 + 100 = 300\\text{ N}$$\n$$R_A = 300\\text{ N} - 175\\text{ N} = 125\\text{ N}$$"
        }
      ],
      numerical: "$R_A = 125\\text{ N}$, $R_B = 175\\text{ N}$",
      answer: "Siła reakcji podpory A wynosi $125\\text{ N}$, a podpory B wynosi $175\\text{ N}$."
    }
  },
  {
    id: "b-zad-18",
    number: 18,
    title: "Zadanie 18. Moment bezwładności układu mas punktowych",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment bezwładności", "Masy punktowe"],
    problem: `<p class="problem-paragraph">Dwie masy punktowe obracają się wokół wspólnej osi: $m_1 = 1\\text{ kg}$ w odległości $0{,}30\\text{ m}$ oraz $m_2 = 2\\text{ kg}$ w odległości $0{,}20\\text{ m}$. Oblicz moment bezwładności układu.</p>`,
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $r_1 = 0{,}30\\text{ m}$, $m_2 = 2\\text{ kg}$, $r_2 = 0{,}20\\text{ m}$.",
      steps: [
        {
          title: "Zsumowanie momentów bezwładności mas",
          content: "Moment bezwładności układu mas punktowych jest sumą iloczynów mas i kwadratów ich odległości od osi:\n$$I = \\sum m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2$$\n$$I = 1 \\cdot (0{,}30)^2 + 2 \\cdot (0{,}20)^2 = 0{,}09 + 2 \\cdot 0{,}04 = 0{,}09 + 0{,}08 = 0{,}17\\text{ kg}\\cdot\\text{m}^2$$"
        }
      ],
      numerical: "$I = 0{,}17\\text{ kg}\\cdot\\text{m}^2$",
      answer: "Moment bezwładności układu wynosi $0{,}17\\text{ kg}\\cdot\\text{m}^2$."
    }
  },
  {
    id: "b-zad-19",
    number: 19,
    title: "Zadanie 19. Zależność momentu bezwładności od promienia",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment bezwładności", "Pierścień", "Zadanie zamknięte"],
    correctOption: "C",
    problem: `<p class="problem-paragraph">Dwa cienkie pierścienie mają jednakowe masy. Promień drugiego jest dwa razy większy. Stosunek ich momentów bezwładności $I_2 / I_1$ wynosi:</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$1$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$2$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$4$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$8$</span></div>
</div>`,
    solution: {
      givens: "$m_1 = m_2 = m$, $R_2 = 2R_1$, $I = mR^2$.",
      steps: [
        {
          title: "Porównanie momentów bezwładności pierścieni",
          content: "Dla cienkiego pierścienia cały materiał znajduje się w odległości równej promieniowi:\n$$I = m R^2$$\nStosunek momentów wynosi zatem:\n$$\\frac{I_2}{I_1} = \\frac{m R_2^2}{m R_1^2} = \\left(\\frac{2R_1}{R_1}\\right)^2 = 2^2 = 4$$"
        }
      ],
      answer: "Poprawna odpowiedź: C ($4$).",
      trap: "Moment bezwładności zależy od kwadratu odległości od osi ($R^2$), a nie od promienia w pierwszej potędze."
    }
  },
  {
    id: "b-zad-20",
    number: 20,
    title: "Zadanie 20. Przyspieszenie kątowe krążka i pierścienia",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Dynamika obrotowa", "II zasada dynamiki", "Zadanie zamknięte"],
    correctOption: "C",
    problem: `<p class="problem-paragraph">Jednorodny krążek i cienki pierścień mają jednakowe masy i promienie. Działa na nie taki sam moment siły. Korzystając z $I_k = \\frac{1}{2}mR^2$ oraz $I_p = mR^2$, wskaż poprawną zależność między przyspieszeniami kątowymi.</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$\\varepsilon_k = \\frac{1}{2}\\varepsilon_p$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$\\varepsilon_k = \\varepsilon_p$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$\\varepsilon_k = 2\\varepsilon_p$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$\\varepsilon_k = 4\\varepsilon_p$</span></div>
</div>`,
    solution: {
      givens: "$I_k = \\frac{1}{2}mR^2$, $I_p = mR^2$, $M_k = M_p = M$.",
      steps: [
        {
          title: "Zastosowanie II zasady dynamiki dla ruchu obrotowego",
          content: "Równanie dynamiki obrotowej ma postać $M = I \\varepsilon \\implies \\varepsilon = \\frac{M}{I}$.\nPodstawiając momenty bezwładności obu brył:\n$$\\varepsilon_k = \\frac{M}{I_k} = \\frac{M}{\\frac{1}{2}mR^2} = \\frac{2M}{mR^2}$$\n$$\\varepsilon_p = \\frac{M}{I_p} = \\frac{M}{mR^2}$$\nWidzimy bezpośrednio, że $\\varepsilon_k = 2\\varepsilon_p$."
        }
      ],
      answer: "Poprawna odpowiedź: C ($\\varepsilon_k = 2\\varepsilon_p$).",
      trap: "Im mniejszy moment bezwładności bryły, tym większe przyspieszenie kątowe nadaje jej ten sam moment siły."
    }
  },
  {
    id: "b-zad-21",
    number: 21,
    title: "Zadanie 21. Przyspieszenie kątowe tarczy pod działaniem siły stycznej",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Dynamika obrotowa", "Siła styczna", "Przyspieszenie kątowe"],
    problem: `<p class="problem-paragraph">Na obwód jednorodnego krążka o masie $4\\text{ kg}$ i promieniu $0{,}20\\text{ m}$ działa stycznie siła $10\\text{ N}$. Oś jest nieruchoma, a $I = \\frac{1}{2}mR^2$. Oblicz przyspieszenie kątowe krążka.</p>`,
    solution: {
      givens: "$m = 4\\text{ kg}$, $R = 0{,}20\\text{ m}$, $F = 10\\text{ N}$, $I = \\frac{1}{2}mR^2$.",
      steps: [
        {
          title: "Obliczenie momentu bezwładności i momentu siły",
          content: "Moment bezwładności krążka wynosi:\n$$I = \\frac{1}{2} m R^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (0{,}20\\text{ m})^2 = 2 \\cdot 0{,}04 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$$\nMoment siły stycznej ($r = R$, $\\alpha = 90^\\circ$):\n$$M = F \\cdot R = 10\\text{ N} \\cdot 0{,}20\\text{ m} = 2\\text{ N}\\cdot\\text{m}$$"
        },
        {
          title: "Wyznaczenie przyspieszenia kątowego",
          content: "Z równania dynamiki obrotowej:\n$$\\varepsilon = \\frac{M}{I} = \\frac{2\\text{ N}\\cdot\\text{m}}{0{,}08\\text{ kg}\\cdot\\text{m}^2} = 25\\text{ rad/s}^2$$"
        }
      ],
      numerical: "$\\varepsilon = 25\\text{ rad/s}^2$",
      answer: "Przyspieszenie kątowe krążka wynosi $25\\text{ rad/s}^2$."
    }
  },
  {
    id: "b-zad-22",
    number: 22,
    title: "Zadanie 22. Hamowanie koła zamachowego",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Dynamika obrotowa", "Hamowanie", "Moment hamujący"],
    problem: `<p class="problem-paragraph">Koło zamachowe ma moment bezwładności $5\\text{ kg}\\cdot\\text{m}^2$. Jego prędkość kątowa maleje jednostajnie z $30\\text{ rad/s}$ do zera w czasie $10\\text{ s}$. Oblicz przyspieszenie kątowe i moment siły hamującej.</p>`,
    solution: {
      givens: "$I = 5\\text{ kg}\\cdot\\text{m}^2$, $\\omega_0 = 30\\text{ rad/s}$, $\\omega = 0$, $t = 10\\text{ s}$.",
      steps: [
        {
          title: "Wyznaczenie przyspieszenia kątowego",
          content: "Ruch jest jednostajnie opóźniony:\n$$\\varepsilon = \\frac{\\omega - \\omega_0}{t} = \\frac{0 - 30\\text{ rad/s}}{10\\text{ s}} = -3\\text{ rad/s}^2$$"
        },
        {
          title: "Obliczenie momentu siły hamującej",
          content: "Z II zasady dynamiki dla ruchu obrotowego:\n$$M = I \\varepsilon = 5\\text{ kg}\\cdot\\text{m}^2 \\cdot (-3\\text{ rad/s}^2) = -15\\text{ N}\\cdot\\text{m}$$\nZnak minus oznacza, że wektor momentu siły ma zwrot przeciwny do wektora prędkości kątowej."
        }
      ],
      numerical: "$\\varepsilon = -3\\text{ rad/s}^2$, $M = -15\\text{ N}\\cdot\\text{m}$",
      answer: "Przyspieszenie kątowe wynosi $-3\\text{ rad/s}^2$, a moment siły hamującej ma wartość $15\\text{ N}\\cdot\\text{m}$ (ze znakiem: $-15\\text{ N}\\cdot\\text{m}$)."
    }
  },
  {
    id: "b-zad-23",
    number: 23,
    title: "Zadanie 23. Maszyna Atwooda z ciężkim bloczkiem",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Maszyna Atwooda", "Naprężenie nici", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Masy $m_1 = 3\\text{ kg}$ i $m_2 = 1\\text{ kg}$ wiszą na końcach lekkiej nici przerzuconej przez krążek o promieniu $R = 0{,}20\\text{ m}$ i momencie bezwładności $I = 0{,}08\\text{ kg}\\cdot\\text{m}^2$. Nić nie ślizga się po krążku. Oblicz wartość przyspieszenia mas oraz naprężenia nici po obu stronach krążka.</p>`,
    solution: {
      givens: "$m_1 = 3\\text{ kg}$, $m_2 = 1\\text{ kg}$, $R = 0{,}20\\text{ m}$, $I = 0{,}08\\text{ kg}\\cdot\\text{m}^2$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Układ równań dynamiki",
          content: "Z powodu bezwładności krążka naprężenia nici po obu stronach są różne ($T_1 > T_2$):\n1. Masa $m_1$ (ruch w dół):\n$$m_1 g - T_1 = m_1 a$$\n2. Masa $m_2$ (ruch w górę):\n$$T_2 - m_2 g = m_2 a$$\n3. Krążek (ruch obrotowy z $\\varepsilon = a/R$):\n$$(T_1 - T_2)R = I \\varepsilon = I \\frac{a}{R} \\implies T_1 - T_2 = \\frac{I}{R^2} a$$"
        },
        {
          title: "Obliczenie przyspieszenia układu",
          content: "Człon bezwładności krążka wynosi:\n$$\\frac{I}{R^2} = \\frac{0{,}08}{(0{,}20)^2} = \\frac{0{,}08}{0{,}04} = 2\\text{ kg}$$\nSumując stronami trzy równania dynamiki:\n$$(m_1 - m_2)g = \\left(m_1 + m_2 + \\frac{I}{R^2}\\right) a$$\n$$(3 - 1) \\cdot 10 = (3 + 1 + 2)a \\implies 20 = 6a \\implies a = \\frac{20}{6} = \\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$$"
        },
        {
          title: "Obliczenie naprężeń nici",
          content: "Z równań dla poszczególnych mas:\n$$T_1 = m_1(g - a) = 3 \\cdot \\left(10 - \\frac{10}{3}\\right) = 3 \\cdot \\frac{20}{3} = 20\\text{ N}$$\n$$T_2 = m_2(g + a) = 1 \\cdot \\left(10 + \\frac{10}{3}\\right) = \\frac{40}{3}\\text{ N} \\approx 13{,}33\\text{ N}$$"
        }
      ],
      numerical: "$a = \\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$, $T_1 = 20\\text{ N}$, $T_2 = \\frac{40}{3}\\text{ N} \\approx 13{,}3\\text{ N}$",
      answer: "Przyspieszenie układu wynosi $\\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$. Naprężenie nici po stronie masy $3\\text{ kg}$ wynosi $20\\text{ N}$, a po stronie masy $1\\text{ kg}$ wynosi $\\frac{40}{3}\\text{ N} \\approx 13{,}3\\text{ N}$."
    }
  }
];

// SUBCHAPTER 3: Zadania 24–34
const tasksSub3 = [
  {
    id: "b-zad-24",
    number: 24,
    title: "Zadanie 24. Wzrost energii kinetycznej przy podwojeniu prędkości kątowej",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Energia kinetyczna", "Ruch obrotowy", "Zadanie zamknięte"],
    correctOption: "C",
    problem: `<p class="problem-paragraph">Prędkość kątową bryły o stałym momencie bezwładności zwiększono dwukrotnie. Jej energia kinetyczna ruchu obrotowego:</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">nie zmieniła się</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">wzrosła dwukrotnie</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">wzrosła czterokrotnie</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">wzrosła ośmiokrotnie</span></div>
</div>`,
    solution: {
      givens: "$I = \\text{const}$, $\\omega' = 2\\omega$.",
      steps: [
        {
          title: "Kwadratowa zależność energii od prędkości kątowej",
          content: "Wzór na energię kinetyczną w ruchu obrotowym:\n$$E_{\\text{obr}} = \\frac{1}{2}I\\omega^2$$\nPodstawiając nową prędkość $\\omega' = 2\\omega$:\n$$E'_{\\text{obr}} = \\frac{1}{2}I(2\\omega)^2 = 4 \\cdot \\left(\\frac{1}{2}I\\omega^2\\right) = 4 E_{\\text{obr}}$$"
        }
      ],
      answer: "Poprawna odpowiedź: C (wzrosła czterokrotnie).",
      trap: "Energia zależy od kwadratu prędkości kątowej ($\\omega^2$), a nie od jej pierwszej potęgi."
    }
  },
  {
    id: "b-zad-25",
    number: 25,
    title: "Zadanie 25. Energia kinetyczna wirnika",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Energia ruchu obrotowego", "Obliczenia energii"],
    problem: `<p class="problem-paragraph">Wirnik o momencie bezwładności $0{,}40\\text{ kg}\\cdot\\text{m}^2$ obraca się z prędkością $10\\text{ rad/s}$. Oblicz jego energię kinetyczną.</p>`,
    solution: {
      givens: "$I = 0{,}40\\text{ kg}\\cdot\\text{m}^2$, $\\omega = 10\\text{ rad/s}$.",
      steps: [
        {
          title: "Obliczenie energii kinetycznej",
          content: "Stosujemy wzór na energię ruchu obrotowego bryły sztywnej:\n$$E_k = \\frac{1}{2}I\\omega^2 = \\frac{1}{2} \\cdot 0{,}40\\text{ kg}\\cdot\\text{m}^2 \\cdot (10\\text{ rad/s})^2 = 0{,}20 \\cdot 100 = 20\\text{ J}$$"
        }
      ],
      numerical: "$E_k = 20\\text{ J}$",
      answer: "Energia kinetyczna wirnika wynosi $20\\text{ J}$."
    }
  },
  {
    id: "b-zad-26",
    number: 26,
    title: "Zadanie 26. Rozkład energii w toczącym się walcu",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Toczenie bez poślizgu", "Energia kinetyczna", "Walec"],
    problem: `<p class="problem-paragraph">Jednorodny walec o masie $2\\text{ kg}$ toczy się bez poślizgu z prędkością środka $3\\text{ m/s}$. Przyjmij $I = \\frac{1}{2}mR^2$. Oblicz energię ruchu postępowego, obrotowego i całkowitą energię kinetyczną walca.</p>`,
    solution: {
      givens: "$m = 2\\text{ kg}$, $v = 3\\text{ m/s}$, $I = \\frac{1}{2}mR^2$, $\\omega = \\frac{v}{R}$.",
      steps: [
        {
          title: "Energia ruchu postępowego środka masy",
          content: "Ruch postępowy opisuje klasyczny wzór:\n$$E_{\\text{post}} = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (3\\text{ m/s})^2 = 9\\text{ J}$$"
        },
        {
          title: "Energia ruchu obrotowego wokół środka masy",
          content: "Podstawiamy $I = \\frac{1}{2}mR^2$ oraz $\\omega = \\frac{v}{R}$:\n$$E_{\\text{obr}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4}mv^2 = \\frac{1}{4} \\cdot 2 \\cdot 9 = 4{,}5\\text{ J}$$"
        },
        {
          title: "Całkowita energia kinetyczna",
          content: "Sumujemy oba wkłady energii:\n$$E_k = E_{\\text{post}} + E_{\\text{obr}} = 9\\text{ J} + 4{,}5\\text{ J} = 13{,}5\\text{ J}$$"
        }
      ],
      numerical: "$E_{\\text{post}} = 9\\text{ J}$, $E_{\\text{obr}} = 4{,}5\\text{ J}$, $E_k = 13{,}5\\text{ J}$",
      answer: "Energia ruchu postępowego wynosi $9\\text{ J}$, obrotowego $4{,}5\\text{ J}$, a całkowita energia kinetyczna wynosi $13{,}5\\text{ J}$."
    }
  },
  {
    id: "b-zad-27",
    number: 27,
    title: "Zadanie 27. Stosunek energii obrotowej do postępowej dla kuli",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Kula", "Toczenie bez poślizgu", "Zadanie zamknięte"],
    correctOption: "B",
    problem: `<p class="problem-paragraph">Jednorodna kula toczy się bez poślizgu. Dla $I = \\frac{2}{5}mR^2$ stosunek energii kinetycznej ruchu obrotowego do energii ruchu postępowego wynosi:</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$\\frac{1}{5}$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$\\frac{2}{5}$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$\\frac{1}{2}$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$\\frac{5}{2}$</span></div>
</div>`,
    solution: {
      givens: "$I = \\frac{2}{5}mR^2$, $\\omega = \\frac{v}{R}$.",
      steps: [
        {
          title: "Wyznaczenie ilorazu energii",
          content: "W ruchu bez poślizgu $\\omega = \\frac{v}{R}$:\n$$\\frac{E_{\\text{obr}}}{E_{\\text{post}}} = \\frac{\\frac{1}{2}I\\omega^2}{\\frac{1}{2}mv^2} = \\frac{I \\left(\\frac{v}{R}\\right)^2}{mv^2} = \\frac{I}{mR^2}$$\nDla kuli $I = \\frac{2}{5}mR^2$, zatem:\n$$\\frac{E_{\\text{obr}}}{E_{\\text{post}}} = \\frac{\\frac{2}{5}mR^2}{mR^2} = \\frac{2}{5}$$"
        }
      ],
      answer: "Poprawna odpowiedź: B ($\\frac{2}{5}$).",
      trap: "Stosunek ten dla dowolnej toczącej się bryły jest równy bezwymiarowemu współczynnikowi $\\beta$ przy $mR^2$ w momencie bezwładności."
    }
  },
  {
    id: "b-zad-28",
    number: 28,
    title: "Zadanie 28. Praca wykonana nad obracającym się kołem",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Praca", "Twierdzenie o pracy i energii", "Ruch obrotowy"],
    problem: `<p class="problem-paragraph">Koło o momencie bezwładności $2\\text{ kg}\\cdot\\text{m}^2$ zwiększa częstotliwość obrotów z $5\\text{ Hz}$ do $10\\text{ Hz}$. Oblicz pracę wykonaną nad kołem.</p>`,
    solution: {
      givens: "$I = 2\\text{ kg}\\cdot\\text{m}^2$, $f_1 = 5\\text{ Hz}$, $f_2 = 10\\text{ Hz}$.",
      steps: [
        {
          title: "Obliczenie prędkości kątowych",
          content: "Prędkości kątowe wynoszą odpowiednio:\n$$\\omega_1 = 2\\pi f_1 = 10\\pi\\text{ rad/s}$$\n$$\\omega_2 = 2\\pi f_2 = 20\\pi\\text{ rad/s}$$"
        },
        {
          title: "Zastosowanie twierdzenia o pracy i energii",
          content: "Wykonana praca jest równa przyrostowi energii kinetycznej koła:\n$$W = \\Delta E_{\\text{obr}} = \\frac{1}{2}I(\\omega_2^2 - \\omega_1^2)$$\n$$W = \\frac{1}{2} \\cdot 2 \\cdot \\left((20\\pi)^2 - (10\\pi)^2\\right) = 400\\pi^2 - 100\\pi^2 = 300\\pi^2\\text{ J} \\approx 2961\\text{ J} \\approx 2{,}96\\text{ kJ}$$"
        }
      ],
      numerical: "$W = 300\\pi^2\\text{ J} \\approx 2{,}96\\text{ kJ}$",
      answer: "Praca wykonana nad kołem wynosi $300\\pi^2\\text{ J} \\approx 2{,}96\\text{ kJ}$."
    }
  },
  {
    id: "b-zad-29",
    number: 29,
    title: "Zadanie 29. Moc mechaniczna silnika w ruchu obrotowym",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moc mechaniczna", "Ruch obrotowy"],
    problem: `<p class="problem-paragraph">Silnik działa na wał stałym momentem $12\\text{ N}\\cdot\\text{m}$. W pewnej chwili wał obraca się z prędkością $20\\text{ rad/s}$. Oblicz moc mechaniczną silnika w tej chwili.</p>`,
    solution: {
      givens: "$M = 12\\text{ N}\\cdot\\text{m}$, $\\omega = 20\\text{ rad/s}$.",
      steps: [
        {
          title: "Definicja mocy w ruchu obrotowym",
          content: "Moc chwilowa w ruchu obrotowym wyraża się iloczynem momentu siły i prędkości kątowej:\n$$P = M \\cdot \\omega = 12\\text{ N}\\cdot\\text{m} \\cdot 20\\text{ rad/s} = 240\\text{ W}$$"
        }
      ],
      numerical: "$P = 240\\text{ W}$",
      answer: "Moc mechaniczna silnika wynosi $240\\text{ W}$."
    }
  },
  {
    id: "b-zad-30",
    number: 30,
    title: "Zadanie 30. Staczanie się walca ze spoczynku",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zasada zachowania energii", "Staczanie walca", "Ruch po równi"],
    problem: `<p class="problem-paragraph">Jednorodny walec stacza się bez poślizgu ze spoczynku z wysokości $1{,}2\\text{ m}$. Przyjmij $I = \\frac{1}{2}mR^2$. Oblicz prędkość środka walca na dole.</p>`,
    solution: {
      givens: "$h = 1{,}2\\text{ m}$, $I = \\frac{1}{2}mR^2$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Bilans energii mechanicznej",
          content: "Początkowa energia potencjalna zamienia się na sumę energii kinetycznej ruchu postępowego i obrotowego:\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$\nPodstawiając $I = \\frac{1}{2}mR^2$ oraz $\\omega = \\frac{v}{R}$:\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$$"
        },
        {
          title: "Wyznaczenie prędkości końcowej",
          content: "Dzielimy obustronnie przez masę $m$:\n$$gh = \\frac{3}{4}v^2 \\implies v^2 = \\frac{4gh}{3}$$\n$$v = \\sqrt{\\frac{4 \\cdot 10 \\cdot 1{,}2}{3}} = \\sqrt{\\frac{48}{3}} = \\sqrt{16} = 4\\text{ m/s}$$"
        }
      ],
      numerical: "$v = 4\\text{ m/s}$",
      answer: "Prędkość środka walca na dole równi wynosi $4\\text{ m/s}$."
    }
  },
  {
    id: "b-zad-31",
    number: 31,
    title: "Zadanie 31. Wysokość staczania jednorodnej kuli",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zasada zachowania energii", "Kula", "Ruch po równi"],
    problem: `<p class="problem-paragraph">Jednorodna kula stoczyła się bez poślizgu ze spoczynku i osiągnęła prędkość środka $5\\text{ m/s}$. Przyjmij $I = \\frac{2}{5}mR^2$. Oblicz różnicę wysokości między początkiem i końcem ruchu.</p>`,
    solution: {
      givens: "$v = 5\\text{ m/s}$, $I = \\frac{2}{5}mR^2$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Zasada zachowania energii dla toczącej się kuli",
          content: "Bilans energii:\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{2}{5}mR^2\\right)\\left(\\frac{v}{R}\\right)^2$$\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2$$"
        },
        {
          title: "Wyznaczenie wysokości $h$",
          content: "Skracamy masę $m$ i wyznaczamy $h$:\n$$h = \\frac{7v^2}{10g} = \\frac{7 \\cdot 5^2}{10 \\cdot 10} = \\frac{7 \\cdot 25}{100} = \\frac{175}{100} = 1{,}75\\text{ m}$$"
        }
      ],
      numerical: "$h = 1{,}75\\text{ m}$",
      answer: "Różnica wysokości wynosi $1{,}75\\text{ m}$."
    }
  },
  {
    id: "b-zad-32",
    number: 32,
    title: "Zadanie 32. Wyścig brył toczących się po równi",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Toczenie bez poślizgu", "Wyścig brył", "Zadanie zamknięte"],
    correctOption: "B",
    problem: `<p class="problem-paragraph">Z tej samej wysokości staczają się bez poślizgu: cienki pierścień, jednorodny walec i jednorodna kula. Masy i promienie mogą być różne. Która kolejność prędkości na dole jest poprawna?</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$v_p > v_w > v_k$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$v_k > v_w > v_p$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$v_w > v_k > v_p$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$v_p = v_w = v_k$</span></div>
</div>`,
    solution: {
      givens: "Pierścień ($I = mR^2$), walec ($I = \\frac{1}{2}mR^2$), kula ($I = \\frac{2}{5}mR^2$).",
      steps: [
        {
          title: "Wyprowadzenie prędkości końcowej dla ogólnego momentu bezwładności",
          content: "Niech $I = \\beta mR^2$. Z zasady zachowania energii:\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\beta mR^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}(1 + \\beta)mv^2$$\n$$v = \\sqrt{\\frac{2gh}{1 + \\beta}}$$\nIm mniejszy współczynnik $\\beta$, tym mniejsza część energii trafia w ruch obrotowy, a większa w ruch postępowy:\n- Kula: $\\beta_k = \\frac{2}{5} = 0{,}40$\n- Walec: $\\beta_w = \\frac{1}{2} = 0{,}50$\n- Pierścień: $\\beta_p = 1{,}00$\nZatem $v_k > v_w > v_p$."
        }
      ],
      answer: "Poprawna odpowiedź: B ($v_k > v_w > v_p$).",
      trap: "Masa $m$ oraz promień $R$ skracają się w równaniu zachowania energii – o prędkości końcowej decyduje wyłącznie współczynnik kształtu $\\beta$."
    }
  },
  {
    id: "b-zad-33",
    number: 33,
    title: "Zadanie 33. Kinematyka i dynamika staczania walca po równi",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Ruch po równi", "Czas zjazdu", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Jednorodny walec stacza się bez poślizgu po równi długości $3\\text{ m}$ nachylonej pod kątem $30^\\circ$. Startuje ze spoczynku. Korzystając z $I = \\frac{1}{2}mR^2$, oblicz przyspieszenie środka, czas zjazdu i prędkość na dole.</p>`,
    solution: {
      givens: "$s = 3\\text{ m}$, $\\alpha = 30^\\circ$, $I = \\frac{1}{2}mR^2$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Przyspieszenie liniowe toczącego się walca",
          content: "Z równań dynamiki toczenia bez poślizgu:\n$$a = \\frac{g \\sin\\alpha}{1 + \\frac{I}{mR^2}} = \\frac{10 \\cdot \\sin 30^\\circ}{1 + \\frac{1}{2}} = \\frac{5}{\\frac{3}{2}} = \\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$$"
        },
        {
          title: "Czas zjazdu z równi",
          content: "Walec rusza ze spoczynku ($s = \\frac{a t^2}{2}$):\n$$t = \\sqrt{\\frac{2s}{a}} = \\sqrt{\\frac{2 \\cdot 3\\text{ m}}{\\frac{10}{3}\\text{ m/s}^2}} = \\sqrt{\\frac{18}{10}} = \\sqrt{1{,}8}\\text{ s} \\approx 1{,}34\\text{ s}$$"
        },
        {
          title: "Prędkość na dole równi",
          content: "Prędkość końcowa w ruchu jednostajnie przyspieszonym:\n$$v = \\sqrt{2as} = \\sqrt{2 \\cdot \\frac{10}{3} \\cdot 3} = \\sqrt{20}\\text{ m/s} \\approx 4{,}47\\text{ m/s}$$"
        }
      ],
      numerical: "$a = \\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$, $t = \\sqrt{1{,}8}\\text{ s} \\approx 1{,}34\\text{ s}$, $v = \\sqrt{20}\\text{ m/s} \\approx 4{,}47\\text{ m/s}$",
      answer: "Przyspieszenie walca wynosi $\\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$, czas zjazdu ok. $1{,}34\\text{ s}$, a prędkość na dole równi $\\sqrt{20}\\text{ m/s} \\approx 4{,}47\\text{ m/s}$."
    }
  },
  {
    id: "b-zad-34",
    number: 34,
    title: "Zadanie 34. Wjazd walca na równię i rola tarcia statycznego",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zasada zachowania energii", "Tarcie statyczne", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Jednorodny walec toczy się bez poślizgu po poziomie z prędkością $4\\text{ m/s}$, a następnie wjeżdża na równię. Przyjmij $I = \\frac{1}{2}mR^2$ i pomiń straty. Oblicz maksymalną wysokość, na którą wjedzie środek walca. Wyjaśnij, dlaczego tarcie statyczne nie zmniejsza energii mechanicznej.</p>`,
    solution: {
      givens: "$v = 4\\text{ m/s}$, $I = \\frac{1}{2}mR^2$, brak poślizgu.",
      steps: [
        {
          title: "Obliczenie maksymalnej wysokości z bilansu energii",
          content: "Początkowa całkowita energia kinetyczna walca wynosi:\n$$E_k = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$$\nNa maksymalnej wysokości walec na ułamek sekundy zatrzymuje się ($v = \\omega = 0$):\n$$mgh = \\frac{3}{4}mv^2 \\implies h = \\frac{3v^2}{4g}$$\n$$h = \\frac{3 \\cdot 4^2}{4 \\cdot 10} = \\frac{48}{40} = 1{,}2\\text{ m}$$"
        },
        {
          title: "Wyjaśnienie roli siły tarcia statycznego",
          content: "W toczeniu bez poślizgu punkt styku koła z podłożem w każdej chwili czasu ma zerową prędkość chwilową względem podłoża. Przemieszczenie punktu przyłożenia siły wynosi w każdej chwili zero, zatem praca elementarna siły tarcia statycznego $dW = \\vec{F}_s \\cdot d\\vec{r} = 0$. Tarcie statyczne jedynie sprzęga ruch postępowy z obrotowym, nie powodując rozpraszania energii mechanicznej na ciepło."
        }
      ],
      numerical: "$h = 1{,}2\\text{ m}$",
      answer: "Maksymalna wysokość wynosi $1{,}2\\text{ m}$. Tarcie statyczne nie zmniejsza energii mechanicznej, ponieważ prędkość chwilowa punktu przyłożenia tej siły wynosi zero (brak poślizgu), więc siła tarcia statycznego nie wykonuje pracy."
    }
  }
];

// SUBCHAPTER 4: Zadania 35–44
const tasksSub4 = [
  {
    id: "b-zad-35",
    number: 35,
    title: "Zadanie 35. Kierunek i zwrot wektora momentu pędu",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment pędu", "Reguła prawej dłoni", "Zadanie zamknięte"],
    correctOption: "B",
    problem: `<p class="problem-paragraph">Tarcza obraca się zgodnie z ruchem wskazówek zegara, gdy patrzymy na nią z przodu. Wektor momentu pędu jest skierowany:</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">do obserwatora</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">od obserwatora, w głąb kartki</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">w prawo</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">stycznie do obwodu</span></div>
</div>`,
    solution: {
      givens: "Obrót tarczy zgodnie z ruchem wskazówek zegara (patrząc z przodu).",
      steps: [
        {
          title: "Zastosowanie reguły prawej dłoni",
          content: "Wektor momentu pędu $\\vec{L} = I\\vec{\\omega}$ ma kierunek osi obrotu (jest prostopadły do płaszczyzny tarczy). Zgodnie z regułą prawej dłoni: gdy ugięte palce prawej dłoni wskazują zwrot obrotu (zgodny z ruchem wskazówek zegara), odgięty kciuk wskazuje zwrot od obserwatora w głąb kartki."
        }
      ],
      answer: "Poprawna odpowiedź: B (od obserwatora, w głąb kartki).",
      trap: "Wektor momentu pędu jest prostopadły do płaszczyzny ruchu – nie jest skierowany stycznie ani w prawo."
    }
  },
  {
    id: "b-zad-36",
    number: 36,
    title: "Zadanie 36. Wartość momentu pędu obracającej się bryły",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment pędu", "Definicja L = I·ω"],
    problem: `<p class="problem-paragraph">Bryła o momencie bezwładności $0{,}50\\text{ kg}\\cdot\\text{m}^2$ obraca się z prędkością $12\\text{ rad/s}$. Oblicz wartość jej momentu pędu.</p>`,
    solution: {
      givens: "$I = 0{,}50\\text{ kg}\\cdot\\text{m}^2$, $\\omega = 12\\text{ rad/s}$.",
      steps: [
        {
          title: "Obliczenie wartości momentu pędu",
          content: "Stosujemy definicję momentu pędu dla bryły obracającej się wokół osi symetrii:\n$$L = I \\omega = 0{,}50\\text{ kg}\\cdot\\text{m}^2 \\cdot 12\\text{ rad/s} = 6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$"
        }
      ],
      numerical: "$L = 6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$",
      answer: "Wartość momentu pędu bryły wynosi $6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$."
    }
  },
  {
    id: "b-zad-37",
    number: 37,
    title: "Zadanie 37. Równość momentów pędu dla różnych momentów bezwładności",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment pędu", "Zadanie zamknięte", "Prędkość kątowa"],
    correctOption: "C",
    problem: `<p class="problem-paragraph">Dwie bryły mają momenty bezwładności $I_2 = 2I_1$. Aby ich momenty pędu były równe, prędkości kątowe muszą spełniać:</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$\\omega_2 = 2\\omega_1$</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$\\omega_2 = \\omega_1$</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$\\omega_2 = \\frac{1}{2}\\omega_1$</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$\\omega_2 = \\frac{1}{4}\\omega_1$</span></div>
</div>`,
    solution: {
      givens: "$I_2 = 2I_1$, $L_1 = L_2$.",
      steps: [
        {
          title: "Porównanie iloczynów $I\\omega$",
          content: "Warunek równości momentów pędu:\n$$L_1 = L_2 \\implies I_1 \\omega_1 = I_2 \\omega_2$$\nPodstawiając $I_2 = 2I_1$:\n$$I_1 \\omega_1 = 2I_1 \\omega_2 \\implies \\omega_2 = \\frac{1}{2}\\omega_1$$"
        }
      ],
      answer: "Poprawna odpowiedź: C ($\\omega_2 = \\frac{1}{2}\\omega_1$).",
      trap: "Bryła o dwukrotnie większym momencie bezwładności musi obracać się dwa razy wolniej, aby mieć taki sam moment pędu."
    }
  },
  {
    id: "b-zad-38",
    number: 38,
    title: "Zadanie 38. Impuls momentu siły i zmiana momentu pędu",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Impuls momentu siły", "Zmiana momentu pędu"],
    problem: `<p class="problem-paragraph">Na wirnik przez $2\\text{ s}$ działa stały moment siły $5\\text{ N}\\cdot\\text{m}$, zgodny z jego obrotem. Początkowy moment pędu wirnika wynosi $4\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, a $I = 2\\text{ kg}\\cdot\\text{m}^2$. Oblicz końcowy moment pędu i prędkość kątową.</p>`,
    solution: {
      givens: "$\\Delta t = 2\\text{ s}$, $M = 5\\text{ N}\\cdot\\text{m}$, $L_0 = 4\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, $I = 2\\text{ kg}\\cdot\\text{m}^2$.",
      steps: [
        {
          title: "Obliczenie impulsu momentu siły",
          content: "Impuls momentu siły równy jest przyrostowi momentu pędu:\n$$\\Delta L = M \\cdot \\Delta t = 5\\text{ N}\\cdot\\text{m} \\cdot 2\\text{ s} = 10\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$"
        },
        {
          title: "Wyznaczenie końcowego momentu pędu i prędkości kątowej",
          content: "Końcowy moment pędu:\n$$L_k = L_0 + \\Delta L = 4 + 10 = 14\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$\nKońcowa prędkość kątowa:\n$$\\omega_k = \\frac{L_k}{I} = \\frac{14\\text{ kg}\\cdot\\text{m}^2/\\text{s}}{2\\text{ kg}\\cdot\\text{m}^2} = 7\\text{ rad/s}$$"
        }
      ],
      numerical: "$L_k = 14\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, $\\omega_k = 7\\text{ rad/s}$",
      answer: "Końcowy moment pędu wynosi $14\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, a prędkość kątowa wynosi $7\\text{ rad/s}$."
    }
  },
  {
    id: "b-zad-39",
    number: 39,
    title: "Zadanie 39. Efekt łyżwiarza i zmiana energii kinetycznej",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zachowanie momentu pędu", "Efekt łyżwiarza", "Zadanie zamknięte"],
    correctOption: "B",
    problem: `<p class="problem-paragraph">Łyżwiarz zmniejsza swój moment bezwładności trzykrotnie, a zewnętrzny moment siły jest pomijalny. Wskaż poprawne stwierdzenie.</p>
<div class="problem-options-list" data-correct="B">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">$\\omega$ maleje trzykrotnie, a energia jest stała</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">$\\omega$ rośnie trzykrotnie, a energia rośnie trzykrotnie</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">$\\omega$ rośnie dziewięciokrotnie, a energia jest stała</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">$\\omega$ jest stała, a energia maleje trzykrotnie</span></div>
</div>`,
    solution: {
      givens: "$I_k = \\frac{1}{3}I_p$, brak zewnętrznych momentów sił ($M_{\\text{zew}} = 0$).",
      steps: [
        {
          title: "Zasada zachowania momentu pędu",
          content: "W układzie izolowanym $L = \\text{const}$:\n$$I_p \\omega_p = I_k \\omega_k \\implies I_p \\omega_p = \\left(\\frac{1}{3}I_p\\right) \\omega_k \\implies \\omega_k = 3\\omega_p$$\nPrędkość kątowa rośnie trzykrotnie."
        },
        {
          title: "Zmiana energii kinetycznej ruchu obrotowego",
          content: "Energię kinetyczną wyrażamy przez zachowany moment pędu $L$:\n$$E_k = \\frac{L^2}{2I}$$\nGdy $I$ maleje 3-krotnie, mianownik maleje 3-krotnie, więc energia wzrasta trzykrotnie:\n$$E'_k = 3E_k$$\nEnergię tę dostarczają mięśnie łyżwiarza wykonujące pracę przy przyciąganiu ramion do tułowia wbrew sile odśrodkowej bezwładności."
        }
      ],
      answer: "Poprawna odpowiedź: B ($\\omega$ rośnie trzykrotnie, a energia rośnie trzykrotnie).",
      trap: "Energia kinetyczna nie jest zachowana, ponieważ mięśnie wykonują dodatnią pracę wewnętrzną, która zamienia się na energię kinetyczną obrotu."
    }
  },
  {
    id: "b-zad-40",
    number: 40,
    title: "Zadanie 40. Ruch osoby po obracającej się platformie",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zachowanie momentu pędu", "Platforma obrotowa", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Jednorodna platforma o masie $100\\text{ kg}$ i promieniu $2\\text{ m}$ obraca się z prędkością $2\\text{ rad/s}$. Osoba o masie $50\\text{ kg}$ stoi początkowo w środku, po czym przechodzi na brzeg. Przyjmij $I_p = \\frac{1}{2}MR^2$ i osobę traktuj jako masę punktową. Oblicz końcową prędkość kątową.</p>`,
    solution: {
      givens: "$M = 100\\text{ kg}$, $R = 2\\text{ m}$, $\\omega_0 = 2\\text{ rad/s}$, $m = 50\\text{ kg}$.",
      steps: [
        {
          title: "Początkowy moment bezwładności układu",
          content: "Platforma ma moment bezwładności:\n$$I_p = \\frac{1}{2}MR^2 = \\frac{1}{2} \\cdot 100 \\cdot 2^2 = 200\\text{ kg}\\cdot\\text{m}^2$$\nOsoba początkowo stoi dokładnie w osi obrotu ($r = 0$), więc jej wkład wynosi zero:\n$$I_1 = I_p = 200\\text{ kg}\\cdot\\text{m}^2$$"
        },
        {
          title: "Końcowy moment bezwładności po przejściu na brzeg",
          content: "Gdy osoba staje na brzegu platformy ($r = R = 2\\text{ m}$), jej moment bezwładności wynosi:\n$$I_{\\text{osoba}} = m R^2 = 50\\text{ kg} \\cdot (2\\text{ m})^2 = 200\\text{ kg}\\cdot\\text{m}^2$$\nCałkowity końcowy moment bezwładności układu:\n$$I_2 = I_p + I_{\\text{osoba}} = 200 + 200 = 400\\text{ kg}\\cdot\\text{m}^2$$"
        },
        {
          title: "Końcowa prędkość kątowa z zasady zachowania momentu pędu",
          content: "Wobec braku zewnętrznych momentów sił:\n$$I_1 \\omega_0 = I_2 \\omega_k \\implies 200 \\cdot 2 = 400 \\cdot \\omega_k \\implies \\omega_k = \\frac{400}{400} = 1\\text{ rad/s}$$"
        }
      ],
      numerical: "$\\omega_k = 1\\text{ rad/s}$",
      answer: "Końcowa prędkość kątowa platformy wynosi $1\\text{ rad/s}$."
    }
  },
  {
    id: "b-zad-41",
    number: 41,
    title: "Zadanie 41. Przesuwanie ciężarków na obracającym się pręcie",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zachowanie momentu pędu", "Masy na pręcie"],
    problem: `<p class="problem-paragraph">Dwie masy punktowe po $2\\text{ kg}$ obracają się na lekkim pręcie w odległości $0{,}50\\text{ m}$ od osi z prędkością $4\\text{ rad/s}$. Następnie obie przesuwają się do odległości $1{,}0\\text{ m}$. Oblicz nową prędkość kątową, jeżeli zewnętrzny moment siły jest pomijalny.</p>`,
    solution: {
      givens: "$m = 2\\text{ kg}$ (każda masa), $r_1 = 0{,}50\\text{ m}$, $r_2 = 1{,}0\\text{ m}$, $\\omega_1 = 4\\text{ rad/s}$.",
      steps: [
        {
          title: "Początkowy i końcowy moment bezwładności układu",
          content: "Pomijamy masę pręta:\n$$I_1 = 2 \\cdot m r_1^2 = 2 \\cdot 2\\text{ kg} \\cdot (0{,}50\\text{ m})^2 = 4 \\cdot 0{,}25 = 1\\text{ kg}\\cdot\\text{m}^2$$\nPo odsunięciu mas na odległość $r_2 = 1{,}0\\text{ m}$:\n$$I_2 = 2 \\cdot m r_2^2 = 2 \\cdot 2\\text{ kg} \\cdot (1{,}0\\text{ m})^2 = 4\\text{ kg}\\cdot\\text{m}^2$$"
        },
        {
          title: "Wyznaczenie nowej prędkości kątowej",
          content: "Z zasady zachowania momentu pędu:\n$$I_1 \\omega_1 = I_2 \\omega_2 \\implies 1 \\cdot 4 = 4 \\cdot \\omega_2 \\implies \\omega_2 = 1\\text{ rad/s}$$"
        }
      ],
      numerical: "$\\omega_2 = 1\\text{ rad/s}$",
      answer: "Nowa prędkość kątowa wynosi $1\\text{ rad/s}$."
    }
  },
  {
    id: "b-zad-42",
    number: 42,
    title: "Zadanie 42. Niesprężyste zderzenie pocisku z obracającym się prętem",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zderzenie obrotowe", "Zachowanie momentu pędu", "Ubytek energii", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Pocisk o masie $0{,}020\\text{ kg}$ leci z prędkością $200\\text{ m/s}$ prostopadle do cienkiego pręta o masie $1{,}2\\text{ kg}$ i długości $1{,}0\\text{ m}$. Pręt może obracać się wokół osi przechodzącej przez środek. Pocisk trafia w koniec pręta i w nim pozostaje. Przyjmij $I_p = \\frac{1}{12}Ml^2$. Oblicz prędkość kątową układu tuż po zderzeniu oraz ubytek energii kinetycznej.</p>`,
    solution: {
      givens: "$m = 0{,}020\\text{ kg}$, $v = 200\\text{ m/s}$, $M = 1{,}2\\text{ kg}$, $l = 1{,}0\\text{ m}$, ramię uderzenia $r = \\frac{l}{2} = 0{,}50\\text{ m}$.",
      steps: [
        {
          title: "Początkowy moment pędu układu",
          content: "Pręt początkowo spoczywa. Pocisk lecący prostopadle w odległości $r = 0{,}50\\text{ m}$ od osi ma moment pędu:\n$$L_1 = m v r = 0{,}020\\text{ kg} \\cdot 200\\text{ m/s} \\cdot 0{,}50\\text{ m} = 2\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$"
        },
        {
          title: "Moment bezwładności pręta z pociskiem",
          content: "Moment pręta względem osi przez środek:\n$$I_{\\text{pręt}} = \\frac{1}{12} M l^2 = \\frac{1}{12} \\cdot 1{,}2 \\cdot 1^2 = 0{,}10\\text{ kg}\\cdot\\text{m}^2$$\nMoment pocisku tkwiącego w końcu pręta:\n$$I_{\\text{pocisk}} = m r^2 = 0{,}020 \\cdot (0{,}50)^2 = 0{,}005\\text{ kg}\\cdot\\text{m}^2$$\nCałkowity moment bezwładności:\n$$I = I_{\\text{pręt}} + I_{\\text{pocisk}} = 0{,}10 + 0{,}005 = 0{,}105\\text{ kg}\\cdot\\text{m}^2$$"
        },
        {
          title: "Prędkość kątowa tuż po zderzeniu",
          content: "Z zasady zachowania momentu pędu:\n$$L_1 = I \\omega \\implies \\omega = \\frac{2}{0{,}105} = \\frac{2000}{105} = \\frac{400}{21}\\text{ rad/s} \\approx 19{,}05\\text{ rad/s}$$"
        },
        {
          title: "Bilans energii i ubytek",
          content: "Początkowa energia kinetyczna pocisku:\n$$E_1 = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 0{,}020 \\cdot 200^2 = 400\\text{ J}$$\nKońcowa energia kinetyczna układu po zderzeniu:\n$$E_2 = \\frac{L_1^2}{2I} = \\frac{2^2}{2 \\cdot 0{,}105} = \\frac{4}{0{,}21} \\approx 19{,}05\\text{ J}$$\nUbytek energii kinetycznej:\n$$\\Delta E = E_1 - E_2 = 400 - 19{,}05 \\approx 380{,}95\\text{ J} \\approx 381\\text{ J}$$"
        }
      ],
      numerical: "$\\omega \\approx 19{,}0\\text{ rad/s}$, $\\Delta E \\approx 381\\text{ J}$",
      answer: "Prędkość kątowa tuż po zderzeniu wynosi $\\frac{400}{21}\\text{ rad/s} \\approx 19{,}0\\text{ rad/s}$, a ubytek energii kinetycznej wynosi ok. $381\\text{ J}$."
    }
  },
  {
    id: "b-zad-43",
    number: 43,
    title: "Zadanie 43. Plastelina spadająca pionowo na obracającą się tarczę",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Zachowanie momentu pędu", "Zderzenie niesprężyste", "Ubytek energii"],
    problem: `<p class="problem-paragraph">Tarcza o momencie bezwładności $0{,}40\\text{ kg}\\cdot\\text{m}^2$ obraca się z prędkością $10\\text{ rad/s}$. Na jej brzegu, w odległości $0{,}50\\text{ m}$ od osi, spada pionowo mały kawałek plasteliny o masie $0{,}20\\text{ kg}$ i przykleja się. Początkowy moment pędu plasteliny względem osi jest zerowy. Oblicz końcową prędkość kątową i ubytek energii kinetycznej.</p>`,
    solution: {
      givens: "$I_0 = 0{,}40\\text{ kg}\\cdot\\text{m}^2$, $\\omega_0 = 10\\text{ rad/s}$, $m = 0{,}20\\text{ kg}$, $r = 0{,}50\\text{ m}$.",
      steps: [
        {
          title: "Początkowy moment pędu tarczy",
          content: "Plastelina spada pionowo, więc nie wnosi momentu pędu względem pionowej osi obrotu:\n$$L_1 = I_0 \\omega_0 = 0{,}40 \\cdot 10 = 4\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$"
        },
        {
          title: "Końcowy moment bezwładności i prędkość kątowa",
          content: "Po przyklejeniu plasteliny moment bezwładności rośnie o $m r^2$:\n$$I_k = I_0 + m r^2 = 0{,}40 + 0{,}20 \\cdot (0{,}50)^2 = 0{,}40 + 0{,}05 = 0{,}45\\text{ kg}\\cdot\\text{m}^2$$\nZ zasady zachowania momentu pędu:\n$$\\omega_k = \\frac{L_1}{I_k} = \\frac{4}{0{,}45} = \\frac{400}{45} = \\frac{80}{9}\\text{ rad/s} \\approx 8{,}89\\text{ rad/s}$$"
        },
        {
          title: "Ubytek energii kinetycznej",
          content: "Początkowa energia kinetyczna:\n$$E_1 = \\frac{1}{2}I_0 \\omega_0^2 = \\frac{1}{2} \\cdot 0{,}40 \\cdot 100 = 20\\text{ J}$$\nKońcowa energia kinetyczna:\n$$E_2 = \\frac{L_1^2}{2 I_k} = \\frac{16}{2 \\cdot 0{,}45} = \\frac{16}{0{,}90} \\approx 17{,}78\\text{ J}$$\nUbytek energii kinetycznej wynosi:\n$$\\Delta E = E_1 - E_2 = 20 - 17{,}78 \\approx 2{,}22\\text{ J}$$"
        }
      ],
      numerical: "$\\omega_k = \\frac{80}{9}\\text{ rad/s} \\approx 8{,}89\\text{ rad/s}$, $\\Delta E \\approx 2{,}22\\text{ J}$",
      answer: "Końcowa prędkość kątowa wynosi $\\frac{80}{9}\\text{ rad/s} \\approx 8{,}89\\text{ rad/s}$, a ubytek energii wynosi ok. $2{,}22\\text{ J}$."
    }
  },
  {
    id: "b-zad-44",
    number: 44,
    title: "Zadanie 44. Sprzęgło tarczowe i rozproszenie energii",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Sprzęgło tarczowe", "Zachowanie momentu pędu", "Rozproszenie energii", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Dwie współosiowe tarcze mogą obracać się niezależnie. Pierwsza ma $I_1 = 0{,}20\\text{ kg}\\cdot\\text{m}^2$ i $\\omega_1 = 20\\text{ rad/s}$, druga ma $I_2 = 0{,}30\\text{ kg}\\cdot\\text{m}^2$ i spoczywa. Tarcze zostają dociśnięte i obracają się wspólnie. Oblicz wspólną prędkość kątową, ubytek energii kinetycznej i procent początkowej energii, który został rozproszony.</p>`,
    solution: {
      givens: "$I_1 = 0{,}20\\text{ kg}\\cdot\\text{m}^2$, $\\omega_1 = 20\\text{ rad/s}$, $I_2 = 0{,}30\\text{ kg}\\cdot\\text{m}^2$, $\\omega_2 = 0$.",
      steps: [
        {
          title: "Wyznaczenie wspólnej prędkości kątowej",
          content: "Z zasady zachowania momentu pędu dla układu dwóch tarcz:\n$$I_1 \\omega_1 = (I_1 + I_2)\\omega_k$$\n$$0{,}20 \\cdot 20 = (0{,}20 + 0{,}30)\\omega_k \\implies 4 = 0{,}50 \\omega_k \\implies \\omega_k = 8\\text{ rad/s}$$"
        },
        {
          title: "Bilans energii początkowej i końcowej",
          content: "Energia początkowa:\n$$E_1 = \\frac{1}{2}I_1 \\omega_1^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 20^2 = 0{,}10 \\cdot 400 = 40\\text{ J}$$\nEnergia końcowa po wyrównaniu prędkości:\n$$E_2 = \\frac{1}{2}(I_1 + I_2)\\omega_k^2 = \\frac{1}{2} \\cdot 0{,}50 \\cdot 8^2 = 0{,}25 \\cdot 64 = 16\\text{ J}$$\nUbytek energii kinetycznej:\n$$\\Delta E = E_1 - E_2 = 40\\text{ J} - 16\\text{ J} = 24\\text{ J}$$"
        },
        {
          title: "Procent rozproszonej energii",
          content: "Procent utraconej energii kinetycznej wynosi:\n$$\\frac{\\Delta E}{E_1} \\cdot 100\\% = \\frac{24\\text{ J}}{40\\text{ J}} \\cdot 100\\% = 60\\%$$"
        }
      ],
      numerical: "$\\omega_k = 8\\text{ rad/s}$, $\\Delta E = 24\\text{ J}$ ($60\\%$)",
      answer: "Wspólna prędkość kątowa wynosi $8\\text{ rad/s}$, ubytek energii wynosi $24\\text{ J}$, a rozproszeniu uległo $60\\%$ początkowej energii układu."
    }
  }
];

// Now load data-courses.js, update subchapters 0-3 in m-bryla, and save!
const dataFilePath = path.join(__dirname, '..', 'js', 'data-courses.js');
const fileContent = fs.readFileSync(dataFilePath, 'utf8');

const sandbox = { window: {} };
vm.runInNewContext(fileContent, sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;
const bryla = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');

if (!bryla) {
  throw new Error('Section m-bryla not found in data-courses.js');
}

// Assign tasks to the 4 introductory subchapters
bryla.subchapters[0].tasks = tasksSub1;
bryla.subchapters[1].tasks = tasksSub2;
bryla.subchapters[2].tasks = tasksSub3;
bryla.subchapters[3].tasks = tasksSub4;

console.log('Subchapter 1 tasks count:', bryla.subchapters[0].tasks.length);
console.log('Subchapter 2 tasks count:', bryla.subchapters[1].tasks.length);
console.log('Subchapter 3 tasks count:', bryla.subchapters[2].tasks.length);
console.log('Subchapter 4 tasks count:', bryla.subchapters[3].tasks.length);
console.log('Subchapter 5 (matura) tasks count:', bryla.subchapters[4].tasks.length);

const newContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 4) + ';\n';
fs.writeFileSync(dataFilePath, newContent, 'utf8');
console.log('Successfully updated js/data-courses.js with all 44 tasks!');
