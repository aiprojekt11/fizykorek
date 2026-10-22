const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let fileContent = fs.readFileSync(dataCoursesPath, 'utf8');

// Definicje nowych, dopracowanych rozwiązań zadań 26-33 (Temat 3) oraz 34-42 (Temat 4)
const tasks3and4 = [
  // --- TEMAT 3: ZDERZENIA NIESPRĘŻYSTE ---
  {
    id: "p-zad-26",
    number: 26,
    title: "Zadanie 26. Proste zderzenie niesprężyste wózków",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Zachowanie pędu", "Zadanie zamknięte"],
    correctOption: "B",
    problem: '<p class="problem-paragraph">Wózek $2\\text{ kg}$ jedzie w prawo z szybkością $3\\text{ m/s}$ i zderza się z nieruchomym wózkiem $1\\text{ kg}$. Wózki po zderzeniu sczepiają się. Wskaż wspólną prędkość.</p>\n<div class="problem-options-list" data-correct="B">\n  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$1\\text{ m/s}$ w prawo</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$2\\text{ m/s}$ w prawo</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$3\\text{ m/s}$ w prawo</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$6\\text{ m/s}$ w prawo</span></div>\n</div>',
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $v_1 = 3\\text{ m/s}$, $m_2 = 1\\text{ kg}$, $v_2 = 0$.",
      steps: [
        {
          title: "Zastosowanie zasady zachowania pędu",
          content: "Zderzenie jest niesprężyste, więc wózki poruszają się z jedną wspólną prędkością $v$:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$2\\text{ kg} \\cdot 3\\text{ m/s} + 1\\text{ kg} \\cdot 0 = (2\\text{ kg} + 1\\text{ kg}) v \\implies 6 = 3v \\implies v = 2\\text{ m/s}$$"
        }
      ],
      answer: "Poprawna odpowiedź: B ($2\\text{ m/s}$ w prawo)."
    }
  },
  {
    id: "p-zad-27",
    number: 27,
    title: "Zadanie 27. Zderzenie czołowe niesprężyste",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Wektory pędu", "Ruch naprzeciw"],
    problem: '<p class="problem-paragraph">Wózek $1\\text{ kg}$ porusza się w prawo z $6\\text{ m/s}$, a wózek $2\\text{ kg}$ w lewo z $2\\text{ m/s}$. Zderzają się niesprężyście i poruszają dalej razem. Oblicz wartość i zwrot wspólnej prędkości.</p>',
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$ (w prawo), $m_2 = 2\\text{ kg}$, $v_2 = -2\\text{ m/s}$ (w lewo).",
      steps: [
        {
          title: "Zastosowanie zasady zachowania pędu ze zwrotami",
          content: "Przyjmując zwrot w prawo jako dodatni:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$1\\text{ kg} \\cdot 6\\text{ m/s} + 2\\text{ kg} \\cdot (-2\\text{ m/s}) = (1\\text{ kg} + 2\\text{ kg}) v$$\n$$6 - 4 = 3v \\implies 2 = 3v \\implies v = \\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$$"
        },
        {
          title: "Interpretacja zwrotu prędkości",
          content: "Dodatni znak wyniku ($v > 0$) oznacza, że sczepione wózki kontynuują ruch w prawo (zgodnie ze zwrotem początkowym pierwszego wózka)."
        }
      ],
      answer: "Wspólna prędkość wynosi $\\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$ ze zwrotem w prawo."
    }
  },
  {
    id: "p-zad-28",
    number: 28,
    title: "Zadanie 28. Wyrzucenie ładunku z łodzi (zasada zachowania pędu)",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zachowanie pędu", "Układ izolowany"],
    problem: '<p class="problem-paragraph">Nieruchoma łódź z osobą ma masę $80\\text{ kg}$. Osoba wyrzuca poziomo plecak o masie $4\\text{ kg}$ z prędkością $5\\text{ m/s}$ w prawo. Oblicz prędkość łodzi z osobą po wyrzuceniu plecaka. Pomijamy opory wody.</p>',
    solution: {
      givens: "$M = 80\\text{ kg}$, $m_p = 4\\text{ kg}$, $v_p = +5\\text{ m/s}$ (w prawo), $p_{\\text{pocz}} = 0$.",
      steps: [
        {
          title: "Zasada zachowania pędu w układzie izolowanym",
          content: "Układ początkowo spoczywał, więc całkowity pęd początkowy wynosi zero ($p_{\\text{pocz}} = 0$):\n$$p_{\\text{pocz}} = p_{\\text{końc}} \\implies 0 = M v_Ł + m_p v_p$$\n$$0 = 80\\text{ kg} \\cdot v_Ł + 4\\text{ kg} \\cdot 5\\text{ m/s} \\implies 80 v_Ł = -20 \\implies v_Ł = -\\frac{20}{80} = -0{,}25\\text{ m/s}$$"
        },
        {
          title: "Interpretacja znaku i wartości prędkości",
          content: "Znak minus oznacza, że łódź porusza się w lewo (przeciwnie do zwrotu wyrzuconego plecaka) z szybkością $0{,}25\\text{ m/s}$."
        }
      ],
      answer: "Łódź z osobą porusza się z szybkością $0{,}25\\text{ m/s}$ w lewo."
    }
  },
  {
    id: "p-zad-29",
    number: 29,
    title: "Zadanie 29. Dwuwymiarowe zderzenie niesprężyste wózków",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie 2D", "Pęd wektorowy", "Składowe pędu"],
    problem: '<p class="problem-paragraph">Dwa wózki po zderzeniu sczepiają się. Pierwszy ma masę $2\\text{ kg}$ i prędkość $3\\text{ m/s}$ na wschód, drugi ma masę $1\\text{ kg}$ i prędkość $4\\text{ m/s}$ na północ. Wyznacz składowe oraz wartość wspólnej prędkości po zderzeniu.</p>',
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $\\vec{v}_1 = [3, 0]\\text{ m/s}$ (wschód), $m_2 = 1\\text{ kg}$, $\\vec{v}_2 = [0, 4]\\text{ m/s}$ (północ).",
      steps: [
        {
          title: "Zasada zachowania pędu dla poszczególnych osi",
          content: "Łączna masa po sczepieniu: $M = m_1 + m_2 = 2\\text{ kg} + 1\\text{ kg} = 3\\text{ kg}$.\nDla osi $x$ (kierunek wschód):\n$$(m_1 + m_2) v_x = m_1 v_{1x} \\implies 3\\text{ kg} \\cdot v_x = 2\\text{ kg} \\cdot 3\\text{ m/s} \\implies v_x = 2\\text{ m/s}$$\nDla osi $y$ (kierunek północ):\n$$(m_1 + m_2) v_y = m_2 v_{2y} \\implies 3\\text{ kg} \\cdot v_y = 1\\text{ kg} \\cdot 4\\text{ m/s} \\implies v_y = \\frac{4}{3}\\text{ m/s} \\approx 1{,}33\\text{ m/s}$$"
        },
        {
          title: "Wyznaczenie wartości prędkości wypadkowej",
          content: "Z twierdzenia Pitagorasa:\n$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{2^2 + \\left(\\frac{4}{3}\\right)^2} = \\sqrt{4 + \\frac{16}{9}} = \\sqrt{\\frac{52}{9}} = \\frac{\\sqrt{52}}{3} \\approx 2{,}40\\text{ m/s}$$"
        }
      ],
      answer: "Składowe prędkości wynoszą $v_x = 2\\text{ m/s}$ oraz $v_y = \\frac{4}{3}\\text{ m/s}$, a wartość prędkości wypadkowej wynosi około $2{,}40\\text{ m/s}$."
    }
  },
  {
    id: "p-zad-30",
    number: 30,
    title: "Zadanie 30. Względny ubytek energii w zderzeniu niesprężystym",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Ubytek energii", "Zadanie zamknięte"],
    correctOption: "C",
    problem: '<p class="problem-paragraph">Wózek $2\\text{ kg}$ o szybkości $4\\text{ m/s}$ uderza w nieruchomy wózek $2\\text{ kg}$ i sczepia się z nim. Jaka część początkowej energii kinetycznej układu została utracona w zderzeniu?</p>\n<div class="problem-options-list" data-correct="C">\n  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$0\\%$</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$25\\%$</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$50\\%$</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$75\\%$</span></div>\n</div>',
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $v_1 = 4\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
      steps: [
        {
          title: "Wspólna prędkość z zasady zachowania pędu",
          content: "$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$2\\text{ kg} \\cdot 4\\text{ m/s} + 0 = (2\\text{ kg} + 2\\text{ kg}) v \\implies 8 = 4v \\implies v = 2\\text{ m/s}$$"
        },
        {
          title: "Porównanie energii kinetycznych przed i po zderzeniu",
          content: "Energia kinetyczna początkowa:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (4\\text{ m/s})^2 = 16\\text{ J}$$\nEnergia kinetyczna końcowa po sczepieniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (2\\text{ m/s})^2 = 8\\text{ J}$$"
        },
        {
          title: "Wyznaczenie względnego ubytku energii",
          content: "$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{E_{k,\\text{pocz}} - E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} = \\frac{16\\text{ J} - 8\\text{ J}}{16\\text{ J}} = \\frac{8}{16} = 0{,}50 = 50\\%$$"
        }
      ],
      answer: "Poprawna odpowiedź: C ($50\\%$). W zderzeniu niesprężystym ciał o jednakowej masie utracie ulega dokładnie $50\\%$ energii kinetycznej."
    }
  },
  {
    id: "p-zad-31",
    number: 31,
    title: "Zadanie 31. Uderzenie plasteliny w klocek",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zderzenie niesprężyste", "Bilans energii", "Ubytek energii"],
    problem: '<p class="problem-paragraph">Kula plasteliny $0{,}10\\text{ kg}$ leci poziomo z szybkością $20\\text{ m/s}$ i przykleja się do nieruchomego klocka $0{,}90\\text{ kg}$ na gładkim stole. Oblicz wspólną szybkość oraz określ, jaka część początkowej energii kinetycznej została utracona.</p>',
    solution: {
      givens: "$m_1 = 0{,}10\\text{ kg}$, $v_1 = 20\\text{ m/s}$, $m_2 = 0{,}90\\text{ kg}$, $v_2 = 0$.",
      steps: [
        {
          title: "Wyznaczenie wspólnej szybkości z zasady zachowania pędu",
          content: "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{0{,}10\\text{ kg} \\cdot 20\\text{ m/s}}{0{,}10\\text{ kg} + 0{,}90\\text{ kg}} = \\frac{2}{1{,}0} = 2\\text{ m/s}$$"
        },
        {
          title: "Bilans energii kinetycznej i ubytek względny",
          content: "Energia początkowa:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}10\\text{ kg} \\cdot (20\\text{ m/s})^2 = 20\\text{ J}$$\nEnergia końcowa:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 1{,}0\\text{ kg} \\cdot (2\\text{ m/s})^2 = 2\\text{ J}$$\nUbytek energii wynosi $\\Delta E_k = 20\\text{ J} - 2\\text{ J} = 18\\text{ J}$, co stanowi:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{18\\text{ J}}{20\\text{ J}} = 0{,}90 = 90\\%$$"
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
    tags: ["Zderzenie niesprężyste", "Praca tarcia", "Droga hamowania"],
    problem: '<p class="problem-paragraph">Wózek $1\\text{ kg}$ jedzie z $8\\text{ m/s}$ i zderza się niesprężyście z nieruchomym wózkiem $3\\text{ kg}$. Po zderzeniu oba wózki poruszają się po szorstkim torze, na którym siła tarcia ma wartość $4\\text{ N}$. Oblicz drogę do zatrzymania układu.</p>',
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = 8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = 0$, $T = 4\\text{ N}$.",
      steps: [
        {
          title: "Wyznaczenie prędkości po zderzeniu z zasady zachowania pędu",
          content: "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{1\\text{ kg} \\cdot 8\\text{ m/s}}{1\\text{ kg} + 3\\text{ kg}} = \\frac{8}{4} = 2\\text{ m/s}$$"
        },
        {
          title: "Energia kinetyczna sczepionych ciał tuż po zderzeniu",
          content: "$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 4\\text{ kg} \\cdot (2\\text{ m/s})^2 = 8\\text{ J}$$"
        },
        {
          title: "Wyznaczenie drogi hamowania z twierdzenia o pracy i energii",
          content: "Praca siły tarcia niweczy energię kinetyczną układu ($W_t = -E_{k,\\text{końc}}$):\n$$-T \\cdot s = -E_{k,\\text{końc}} \\implies s = \\frac{E_{k,\\text{końc}}}{T} = \\frac{8\\text{ J}}{4\\text{ N}} = 2\\text{ m}$$"
        }
      ],
      answer: "Droga do zatrzymania układu wynosi $2\\text{ m}$.",
      trap: "Nie wolno brać energii sprzed zderzenia ($E_{k,\\text{pocz}} = 32\\text{ J}$), ponieważ aż $24\\text{ J}$ zostało bezpowrotnie zamienione na ciepło w samym akcie zderzenia!"
    }
  },
  {
    id: "p-zad-33",
    number: 33,
    title: "Zadanie 33. Zjazd ze stoku, zderzenie niesprężyste i ubytek energii",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Zderzenia niesprężyste",
    tags: ["Zjazd z równi", "Zderzenie niesprężyste", "Bilans energii"],
    problem: '<p class="problem-paragraph">Klocek $m_1 = 0{,}50\\text{ kg}$ zsuwa się bez tarcia z wysokości $1{,}8\\text{ m}$ i na poziomym torze zderza się niesprężyście z nieruchomym klockiem $m_2 = 1{,}0\\text{ kg}$. Po zderzeniu klocki poruszają się razem. Oblicz szybkość pierwszego klocka tuż przed zderzeniem, wspólną szybkość tuż po zderzeniu i ubytek energii kinetycznej w samym zderzeniu.</p>',
    solution: {
      givens: "$m_1 = 0{,}50\\text{ kg}$, $h = 1{,}8\\text{ m}$, $m_2 = 1{,}0\\text{ kg}$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Szybkość pierwszego klocka przed zderzeniem (z ZZE)",
          content: "$$m_1 gh = \\frac{1}{2}m_1 v_1^2 \\implies v_1 = \\sqrt{2gh} = \\sqrt{2 \\cdot 10\\text{ m/s}^2 \\cdot 1{,}8\\text{ m}} = \\sqrt{36} = 6\\text{ m/s}$$"
        },
        {
          title: "Wspólna szybkość po zderzeniu (z ZZP)",
          content: "$$m_1 v_1 = (m_1 + m_2) v \\implies v = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{0{,}50\\text{ kg} \\cdot 6\\text{ m/s}}{0{,}50\\text{ kg} + 1{,}0\\text{ kg}} = \\frac{3}{1{,}5} = 2\\text{ m/s}$$"
        },
        {
          title: "Wyznaczenie ubytku energii kinetycznej w zderzeniu",
          content: "Energia tuż przed zderzeniem:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}50\\text{ kg} \\cdot (6\\text{ m/s})^2 = 9\\text{ J}$$\nEnergia tuż po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(m_1 + m_2) v^2 = \\frac{1}{2} \\cdot 1{,}50\\text{ kg} \\cdot (2\\text{ m/s})^2 = 3\\text{ J}$$\nUbytek energii kinetycznej zamienionej na ciepło:\n$$\\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = 9\\text{ J} - 3\\text{ J} = 6\\text{ J}$$"
        }
      ],
      answer: "Szybkość przed zderzeniem: $6\\text{ m/s}$, wspólna szybkość po zderzeniu: $2\\text{ m/s}$, ubytek energii kinetycznej: $6\\text{ J}$."
    }
  },

  // --- TEMAT 4: ZDERZENIA SPRĘŻYSTE ---
  {
    id: "p-zad-34",
    number: 34,
    title: "Zadanie 34. Warunek zderzenia doskonale sprężystego",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Prawa zachowania", "Zadanie zamknięte"],
    correctOption: "C",
    problem: '<p class="problem-paragraph">Wskaż wielkości, które są zachowane w izolowanym zderzeniu doskonale sprężystym dwóch ciał.</p>\n<div class="problem-options-list" data-correct="C">\n  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">Tylko pęd</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">Tylko energia kinetyczna</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">Pęd i energia kinetyczna</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">Pęd i prędkości obu ciał</span></div>\n</div>',
    solution: {
      givens: "Układ izolowany, zderzenie doskonale sprężyste.",
      steps: [
        {
          title: "Zasady zachowania w zderzeniu sprężystym",
          content: "W każdym zderzeniu w układzie izolowanym zachowany jest pęd ($\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}}$). Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy nie występują straty energii na ciepło ani odkształcenia trwałe, czyli zachowana jest również całkowita energia kinetyczna ($\\sum E_{k,\\text{pocz}} = \\sum E_{k,\\text{końc}}$)."
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
    problem: '<p class="problem-paragraph">Kula o masie $1\\text{ kg}$ porusza się w prawo z szybkością $4\\text{ m/s}$ i uderza sprężyście w nieruchomą kulę o tej samej masie. Wskaż prędkości kul po zderzeniu.</p>\n<div class="problem-options-list" data-correct="A">\n  <div class="problem-option-item"><span class="problem-option-letter">A</span><span class="problem-option-text">$v_1\' = 0,\\ v_2\' = 4\\text{ m/s}$ w prawo</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">B</span><span class="problem-option-text">$v_1\' = -2\\text{ m/s},\\ v_2\' = +2\\text{ m/s}$</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">C</span><span class="problem-option-text">$v_1\' = +2\\text{ m/s},\\ v_2\' = +2\\text{ m/s}$</span></div>\n  <div class="problem-option-item"><span class="problem-option-letter">D</span><span class="problem-option-text">$v_1\' = -4\\text{ m/s},\\ v_2\' = 0$</span></div>\n</div>',
    solution: {
      givens: "$m_1 = m_2 = 1\\text{ kg}$, $v_1 = 4\\text{ m/s}$ (w prawo), $v_2 = 0$.",
      steps: [
        {
          title: "Zastosowanie układu równań pędu i prędkości względnych",
          content: "Dla zderzenia sprężystego ciał o jednakowej masie ($m_1 = m_2$):\n$$\\begin{cases} v_1 + v_2 = v_1\' + v_2\' \\\\\\\\ v_1 - v_2 = -(v_1\' - v_2\') \\end{cases}$$\nPodstawiając $v_1 = 4\\text{ m/s}$ oraz $v_2 = 0$:\n$$\\begin{cases} v_1\' + v_2\' = 4 \\\\\\\\ -v_1\' + v_2\' = 4 \\end{cases} \\implies v_1\' = 0, \\quad v_2\' = 4\\text{ m/s}$$\nCiała o jednakowych masach w centralnym zderzeniu sprężystym wymieniają się prędkościami."
        }
      ],
      answer: "Poprawna odpowiedź: A ($v_1\' = 0,\\ v_2\' = 4\\text{ m/s}$ w prawo). Kula uderzająca zatrzymuje się, a kula uderzana przejmuje całą jej prędkość i energię."
    }
  },
  {
    id: "p-zad-36",
    number: 36,
    title: "Zadanie 36. Zderzenie sprężyste kuli z dwukrotnie cięższą kulą",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Układ równań", "Prędkości względne"],
    problem: '<p class="problem-paragraph">Kula o masie $1\\text{ kg}$ porusza się w prawo z szybkością $6\\text{ m/s}$ i zderza się centralnie i sprężyście z nieruchomą kulą o masie $2\\text{ kg}$. Oblicz prędkości obu kul po zderzeniu.</p>',
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$, $m_2 = 2\\text{ kg}$, $v_2 = 0$.",
      steps: [
        {
          title: "Układ równań pędu i prędkości względnych",
          content: "Zasada zachowania pędu:\n$$m_1 v_1 + m_2 v_2 = m_1 v_1\' + m_2 v_2\' \\implies 1 \\cdot 6 + 2 \\cdot 0 = v_1\' + 2v_2\' \\implies v_1\' + 2v_2\' = 6$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1\' - v_2\') \\implies 6 - 0 = -v_1\' + v_2\' \\implies -v_1\' + v_2\' = 6$$"
        },
        {
          title: "Rozwiązanie układu równań liniowych",
          content: "Dodając oba równania stronami, eliminujemy $v_1\'$:\n$$3v_2\' = 12 \\implies v_2\' = 4\\text{ m/s}$$\nPodstawiając do drugiego równania:\n$$v_1\' = v_2\' - 6 = 4 - 6 = -2\\text{ m/s}$$\nZnak minus oznacza, że lżejsza kula odbija się i zawraca w lewo."
        }
      ],
      answer: "Prędkości po zderzeniu wynoszą: $v_1\' = -2\\text{ m/s}$ (w lewo) oraz $v_2\' = 4\\text{ m/s}$ (w prawo)."
    }
  },
  {
    id: "p-zad-37",
    number: 37,
    title: "Zadanie 37. Czołowe zderzenie sprężyste przy zerowym pędzie całkowitym",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Zerowy pęd", "Układ równań"],
    problem: '<p class="problem-paragraph">Dwie kule o masach $m_1 = 2\\text{ kg}$ i $m_2 = 1\\text{ kg}$ poruszają się naprzeciwko siebie z szybkościami odpowiednio $v_1 = 2\\text{ m/s}$ (w prawo) oraz $v_2 = 4\\text{ m/s}$ (w lewo). Zderzenie jest centralne i doskonale sprężyste. Wyznacz prędkości kul po zderzeniu.</p>',
    solution: {
      givens: "$m_1 = 2\\text{ kg}$, $v_1 = +2\\text{ m/s}$ (w prawo), $m_2 = 1\\text{ kg}$, $v_2 = -4\\text{ m/s}$ (w lewo).",
      steps: [
        {
          title: "Układ równań zachowania pędu i prędkości względnych",
          content: "Całkowity pęd początkowy układu wynosi:\n$$p_{\\text{pocz}} = m_1 v_1 + m_2 v_2 = 2 \\cdot 2 + 1 \\cdot (-4) = 4 - 4 = 0$$\nZasada zachowania pędu po zderzeniu:\n$$m_1 v_1\' + m_2 v_2\' = 0 \\implies 2v_1\' + v_2\' = 0 \\implies v_2\' = -2v_1\'$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1\' - v_2\') \\implies 2 - (-4) = -v_1\' + v_2\' \\implies -v_1\' + v_2\' = 6$$"
        },
        {
          title: "Wyznaczenie prędkości końcowych",
          content: "Podstawiając $v_2\' = -2v_1\'$ do równania prędkości względnych:\n$$-v_1\' + (-2v_1\') = 6 \\implies -3v_1\' = 6 \\implies v_1\' = -2\\text{ m/s}$$\n$$v_2\' = -2v_1\' = -2 \\cdot (-2) = +4\\text{ m/s}$$\nGdy całkowity pęd układu wynosi zero, ciała po zderzeniu sprężystym odwracają zwroty swoich prędkości, zachowując ich wartości."
        }
      ],
      answer: "Prędkości po zderzeniu wynoszą: $v_1\' = -2\\text{ m/s}$ (w lewo) oraz $v_2\' = +4\\text{ m/s}$ (w prawo)."
    }
  },
  {
    id: "p-zad-38",
    number: 38,
    title: "Zadanie 38. Weryfikacja sprężystości zderzenia wózków",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Bilans energii", "Zachowanie pędu"],
    problem: '<p class="problem-paragraph">Wózek o masie $m_1 = 1\\text{ kg}$ jadący z prędkością $+5\\text{ m/s}$ uderza w spoczywający wózek o masie $m_2 = 4\\text{ kg}$. Po zderzeniu pierwszy wózek cofa się z prędkością $v_1\' = -3\\text{ m/s}$. Ustal, czy to zderzenie mogło być doskonale sprężyste.</p>',
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = +5\\text{ m/s}$, $m_2 = 4\\text{ kg}$, $v_2 = 0$, $v_1\' = -3\\text{ m/s}$.",
      steps: [
        {
          title: "Wyznaczenie prędkości drugiego wózka z zasady zachowania pędu",
          content: "$$m_1 v_1 + m_2 v_2 = m_1 v_1\' + m_2 v_2\'$$\n$$1 \\cdot 5 + 4 \\cdot 0 = 1 \\cdot (-3) + 4 \\cdot v_2\' \\implies 5 = -3 + 4v_2\' \\implies 4v_2\' = 8 \\implies v_2\' = 2\\text{ m/s}$$"
        },
        {
          title: "Porównanie energii kinetycznych przed i po zderzeniu",
          content: "Energia kinetyczna przed zderzeniem:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2} \\cdot 1\\text{ kg} \\cdot (5\\text{ m/s})^2 = 12{,}5\\text{ J}$$\nEnergia kinetyczna po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}m_1 (v_1\')^2 + \\frac{1}{2}m_2 (v_2\')^2 = \\frac{1}{2} \\cdot 1 \\cdot (-3)^2 + \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 4{,}5\\text{ J} + 8\\text{ J} = 12{,}5\\text{ J}$$\nPonieważ $E_{k,\\text{końc}} = E_{k,\\text{pocz}} = 12{,}5\\text{ J}$, energia kinetyczna została w $100\\%$ zachowana."
        }
      ],
      answer: "Tak, zderzenie mogło być doskonale sprężyste, ponieważ energia kinetyczna układu została w pełni zachowana ($E_{k,\\text{końc}} = E_{k,\\text{pocz}} = 12{,}5\\text{ J}$)."
    }
  },
  {
    id: "p-zad-39",
    number: 39,
    title: "Zadanie 39. Dwuwymiarowe zderzenie sprężyste jednakowych kul",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie 2D", "Zachowanie energii", "Wektory pędu"],
    problem: '<p class="problem-paragraph">Dwie jednakowe kule poruszają się początkowo: A z szybkością $5\\text{ m/s}$, B spoczywa. Po sprężystym zderzeniu w płaszczyźnie kula A ma szybkość $3\\text{ m/s}$. Oblicz szybkość kuli B i wykaż, że wektory prędkości kul po zderzeniu są prostopadłe.</p>',
    solution: {
      givens: "$m_A = m_B = m$, $v_0 = 5\\text{ m/s}$, $v_B = 0$, $v_A\' = 3\\text{ m/s}$.",
      steps: [
        {
          title: "Obliczenie szybkości kuli B z zasady zachowania energii",
          content: "Dla jednakowych mas masa $m$ upraszcza się w równaniu energii:\n$$\\frac{1}{2}m v_0^2 = \\frac{1}{2}m (v_A\')^2 + \\frac{1}{2}m (v_B\')^2 \\implies v_0^2 = (v_A\')^2 + (v_B\')^2$$\n$$5^2 = 3^2 + (v_B\')^2 \\implies 25 = 9 + (v_B\')^2 \\implies (v_B\')^2 = 16 \\implies v_B\' = 4\\text{ m/s}$$"
        },
        {
          title: "Wyznaczenie kąta między wektorami prędkości z wektorowej ZZP",
          content: "Z zasady zachowania pędu: $\\vec{v}_0 = \\vec{v}_A\' + \\vec{v}_B\'.$\nPodnosząc to równanie skalarnie do kwadratu:\n$$v_0^2 = (\\vec{v}_A\' + \\vec{v}_B\')^2 = (v_A\')^2 + (v_B\')^2 + 2\\vec{v}_A\' \\cdot \\vec{v}_B\'$$\nPorównując z równaniem energii ($v_0^2 = (v_A\')^2 + (v_B\')^2$), otrzymujemy:\n$$2\\vec{v}_A\' \\cdot \\vec{v}_B\' = 0 \\implies \\vec{v}_A\' \\perp \\vec{v}_B\' \\implies \\alpha = 90^\\circ$$"
        }
      ],
      answer: "Szybkość kuli B wynosi $4\\text{ m/s}$, a kąt między wektorami prędkości obu kul po zderzeniu wynosi $90^\\circ$."
    }
  },
  {
    id: "p-zad-40",
    number: 40,
    title: "Zadanie 40. Zderzenie sprężyste 2D pod kątem",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie 2D", "Symetria", "Rozproszenie pod kątem"],
    problem: '<p class="problem-paragraph">Kula o masie $0{,}20\\text{ kg}$ porusza się z szybkością $10\\text{ m/s}$ i zderza się sprężyście z nieruchomą kulą o tej samej masie. Po zderzeniu kula 1 odchyla się pod kątem $45^\\circ$ względem pierwotnego kierunku ruchu. Wyznacz szybkości obu kul po zderzeniu oraz kąt odchylenia kuli 2.</p>',
    solution: {
      givens: "$m_1 = m_2 = 0{,}20\\text{ kg}$, $v_0 = 10\\text{ m/s}$, $v_2 = 0$, kąt odchylenia kuli 1: $\\alpha = 45^\\circ$.",
      steps: [
        {
          title: "Wyznaczenie kierunku ruchu kuli 2 z prostopadłości wektorów",
          content: "Dla zderzenia sprężystego kul o jednakowej masie z kulą spoczywającą kąt między wektorami prędkości po zderzeniu wynosi $90^\\circ$ ($\\vec{v}_1\' \\perp \\vec{v}_2\'$).\nSkoro kula 1 odchyliła się o $45^\\circ$ w jedną stronę, to kula 2 musi odchylić się o kąt $90^\\circ - 45^\\circ = 45^\\circ$ w drugą stronę."
        },
        {
          title: "Wyznaczenie wartości prędkości z symetrii i zachowania energii",
          content: "Z równości kątów i zachowania pędu w osi pionowej wynika symetria szybkości: $v_1\' = v_2\'.$\nZ zasady zachowania energii kinetycznej:\n$$v_0^2 = (v_1\')^2 + (v_2\')^2 = 2(v_1\')^2$$\n$$10^2 = 2(v_1\')^2 \\implies (v_1\')^2 = 50 \\implies v_1\' = v_2\' = \\sqrt{50} = 5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$$"
        }
      ],
      answer: "Szybkości obu kul po zderzeniu są równe i wynoszą $5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$. Kula 2 odchyla się o kąt $45^\\circ$ w przeciwną stronę niż kula 1."
    }
  },
  {
    id: "p-zad-41",
    number: 41,
    title: "Zadanie 41. Zderzenie sprężyste ciał o różnych masach i prędkościach",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zderzenie sprężyste", "Układ równań liniowych", "Prędkości względne"],
    problem: '<p class="problem-paragraph">Kula $m_1 = 1\\text{ kg}$ porusza się w prawo z szybkością $8\\text{ m/s}$ i dogania kulę $m_2 = 3\\text{ kg}$ poruszającą się w prawo z szybkością $2\\text{ m/s}$. Zderzenie jest centralne i doskonale sprężyste. Wyznacz prędkości obu kul po zderzeniu.</p>',
    solution: {
      givens: "$m_1 = 1\\text{ kg}$, $v_1 = +8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = +2\\text{ m/s}$.",
      steps: [
        {
          title: "Układ równań pędu i prędkości względnych",
          content: "Zasada zachowania pędu:\n$$m_1 v_1 + m_2 v_2 = m_1 v_1\' + m_2 v_2\'$$\n$$1 \\cdot 8 + 3 \\cdot 2 = 1 \\cdot v_1\' + 3 \\cdot v_2\' \\implies 8 + 6 = v_1\' + 3v_2\' \\implies v_1\' + 3v_2\' = 14$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_1 - v_2 = -(v_1\' - v_2\') \\implies 8 - 2 = -v_1\' + v_2\' \\implies -v_1\' + v_2\' = 6$$"
        },
        {
          title: "Rozwiązanie układu równań liniowych",
          content: "Dodając oba równania stronami, eliminujemy $v_1\'$:\n$$(v_1\' + 3v_2\') + (-v_1\' + v_2\') = 14 + 6 \\implies 4v_2\' = 20 \\implies v_2\' = 5\\text{ m/s}$$\nPodstawiając do drugiego równania:\n$$v_1\' = v_2\' - 6 = 5 - 6 = -1\\text{ m/s}$$\nZnak minus oznacza, że kula 1 odbija się i zawraca w lewo z szybkością $1\\text{ m/s}$."
        }
      ],
      answer: "Prędkości po zderzeniu wynoszą: $v_1\' = -1\\text{ m/s}$ (w lewo) oraz $v_2\' = 5\\text{ m/s}$ (w prawo)."
    }
  },
  {
    id: "p-zad-42",
    number: 42,
    title: "Zadanie 42. Sprężyste zderzenie wózków m i 3m na torze",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Zderzenia sprężyste",
    tags: ["Zadanie wieloetapowe", "Układ równań", "Bilans energii"],
    problem: '<p class="problem-paragraph">Na gładkim poziomym torze wózek A o masie $m$ porusza się w prawo z szybkością $v$. Wózek B o masie $3m$ spoczywa. Zderzenie jest centralne i doskonale sprężyste.</p>\n<div class="problem-subquestion-item">\n  <strong class="problem-subquestion-letter">(a)</strong>\n  <span class="problem-subquestion-text">Wyprowadź prędkości obu wózków po zderzeniu w zależności od $v$.</span>\n</div>\n<div class="problem-subquestion-item">\n  <strong class="problem-subquestion-letter">(b)</strong>\n  <span class="problem-subquestion-text">Sprawdź zachowanie pędu i energii kinetycznej.</span>\n</div>\n<div class="problem-subquestion-item">\n  <strong class="problem-subquestion-letter">(c)</strong>\n  <span class="problem-subquestion-text">Ustal, jaka część początkowej energii kinetycznej wózka A pozostanie przy nim po zderzeniu.</span>\n</div>',
    solution: {
      givens: "$m_A = m$, $v_A = v$, $m_B = 3m$, $v_B = 0$.",
      steps: [
        {
          title: "(a) Wyprowadzenie prędkości po zderzeniu z układu równań",
          content: "Zasada zachowania pędu:\n$$m v_A + 3m v_B = m v_A\' + 3m v_B\' \\implies m v = m(v_A\' + 3v_B\') \\implies v_A\' + 3v_B\' = v$$\nRelacja prędkości względnych w zderzeniu sprężystym:\n$$v_A - v_B = -(v_A\' - v_B\') \\implies v - 0 = -v_A\' + v_B\' \\implies -v_A\' + v_B\' = v$$\nDodając równania stronami:\n$$4v_B\' = 2v \\implies v_B\' = \\frac{v}{2}$$\nPodstawiając do drugiego równania:\n$$v_A\' = v_B\' - v = \\frac{v}{2} - v = -\\frac{v}{2}$$\nWózek A odbija się i porusza w lewo z szybkością $\\frac{v}{2}$, a wózek B porusza się w prawo z szybkością $\\frac{v}{2}$."
        },
        {
          title: "(b) Kontrola zachowania pędu i energii kinetycznej",
          content: "Pęd po zderzeniu:\n$$p_{\\text{końc}} = m v_A\' + 3m v_B\' = m\\left(-\\frac{v}{2}\\right) + 3m\\left(\\frac{v}{2}\\right) = -\\frac{1}{2}mv + \\frac{3}{2}mv = mv = p_{\\text{pocz}}$$\nEnergia kinetyczna po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}m(v_A\')^2 + \\frac{1}{2}(3m)(v_B\')^2 = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 + \\frac{3}{2}m\\left(\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2 + \\frac{3}{8}mv^2 = \\frac{1}{2}mv^2 = E_{k,\\text{pocz}}$$\nObie wielkości są ściśle zachowane."
        },
        {
          title: "(c) Ułamek energii kinetycznej wózka A",
          content: "Energia kinetyczna wózka A po zderzeniu:\n$$E_{kA}\' = \\frac{1}{2}m(v_A\')^2 = \\frac{1}{2}m\\left(-\\frac{v}{2}\\right)^2 = \\frac{1}{8}mv^2$$\nStosunek do początkowej energii $E_{kA} = \\frac{1}{2}mv^2$:\n$$\\frac{E_{kA}\'}{E_{kA}} = \\frac{\\frac{1}{8}mv^2}{\\frac{1}{2}mv^2} = \\frac{1}{4} = 25\\%$$"
        }
      ],
      answer: "(a) $v_A\' = -\\frac{v}{2}$ (wózek A odbija się w lewo z szybkością $v/2$), $v_B\' = \\frac{v}{2}$ (wózek B porusza się w prawo z szybkością $v/2$). (b) Pęd wynosi $mv$, energia kinetyczna $\\frac{1}{2}mv^2$ — obie wielkości są zachowane. (c) Przy wózku A pozostaje $\\frac{1}{4}$ ($25\\%$) początkowej energii kinetycznej."
    }
  }
];

// Teraz wczytujemy cały obiekt FIZYKOREK_COURSES, aktualizujemy zadania w obu miejscach (w subchapters i w sections[2].tasks),
// i zapisujemy plik!
global.window = {};
eval(fileContent);

const course = global.window.FIZYKOREK_COURSES['matura-fizyka'];
const pracaSection = course.sections.find(s => s.id === 'm-praca');

// 1. Aktualizacja w subchapters
const sub3 = pracaSection.subchapters.find(s => s.id === 'sub-zderzenia-niesprezyste');
const sub4 = pracaSection.subchapters.find(s => s.id === 'sub-zderzenia-sprezyste');

sub3.tasks = tasks3and4.slice(0, 8);
sub4.tasks = tasks3and4.slice(8);

// 2. Aktualizacja w pracaSection.tasks
tasks3and4.forEach(updatedTask => {
  const idx = pracaSection.tasks.findIndex(t => t.id === updatedTask.id);
  if (idx !== -1) {
    pracaSection.tasks[idx] = updatedTask;
  }
});

// Zapisujemy spowrotem do pliku jako poprawny kod JS
const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(global.window.FIZYKOREK_COURSES, null, 2) + ';\n';
fs.writeFileSync(dataCoursesPath, newFileContent, 'utf8');

console.log('Successfully updated all tasks 26-42 in subchapters and section.tasks!');
