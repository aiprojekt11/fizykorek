const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
global.window = {};
require(dataCoursesPath);

const courses = window.FIZYKOREK_COURSES;
const rigidSection = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');
const sub2 = rigidSection.subchapters.find(s => s.id === 'sub-bryla-moment-sily');

const exactTasksSub2 = [
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
          content: "Dla siły działającej prostopadle do ramienia ($\\sin 90^\\circ = 1$):\n$$M = F \\cdot r = 20\\text{ N} \\cdot 0{,}30\\text{ m} = 6\\text{ N}\\cdot\\text{m}$$"
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
          title: "Zastosowanie definicji momentu siły",
          content: "Wartość momentu siły wyznaczamy ze wzoru uwzględniającego kąt $\\alpha$:\n$$M = F \\cdot r \\cdot \\sin\\alpha = 30\\text{ N} \\cdot 0{,}40\\text{ m} \\cdot \\sin 30^\\circ = 12 \\cdot 0{,}5 = 6\\text{ N}\\cdot\\text{m}$$"
        }
      ],
      answer: "Poprawna jest odpowiedź B ($6\\text{ N}\\cdot\\text{m}$).",
      trap: "Pamiętaj o uwzględnieniu sinusa kąta między ramieniem a siłą – ramię prostopadłe wynosi $d = r\\sin\\alpha = 0{,}20\\text{ m}$."
    }
  },
  {
    id: "b-zad-14",
    number: 14,
    title: "Zadanie 14. Wypadkowy moment trzech sił na tarczy",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment siły", "Wypadkowy moment", "Kierunek obrotu"],
    problem: `<p class="problem-paragraph">Na tarczę działają trzy siły: $F_1 = 10\\text{ N}$ stycznie w odległości $0{,}40\\text{ m}$ i przeciwnie do ruchu wskazówek zegara, $F_2 = 20\\text{ N}$ stycznie w odległości $0{,}10\\text{ m}$ w przeciwnym zwrocie oraz $F_3 = 30\\text{ N}$ w odległości $0{,}20\\text{ m}$ pod kątem $30^\\circ$ do promienia, w zwrocie dodatnim. Oblicz wypadkowy moment sił i przewidywany zwrot przyspieszenia kątowego.</p>`,
    solution: {
      givens: "$F_1 = 10\\text{ N}, r_1 = 0{,}40\\text{ m}$; $F_2 = 20\\text{ N}, r_2 = 0{,}10\\text{ m}$; $F_3 = 30\\text{ N}, r_3 = 0{,}20\\text{ m}, \\alpha_3 = 30^\\circ$. Konwencja: przeciwnie do ruchu wskazówek zegara (+).",
      steps: [
        {
          title: "Obliczenie momentów poszczególnych sił",
          content: "1. Moment siły $F_1$ (styczna, zwrot dodatni):\n$$M_1 = +F_1 \\cdot r_1 = +10\\text{ N} \\cdot 0{,}40\\text{ m} = +4\\text{ N}\\cdot\\text{m}$$\n2. Moment siły $F_2$ (styczna, zwrot ujemny):\n$$M_2 = -F_2 \\cdot r_2 = -20\\text{ N} \\cdot 0{,}10\\text{ m} = -2\\text{ N}\\cdot\\text{m}$$\n3. Moment siły $F_3$ (pod kątem $30^\\circ$, zwrot dodatni):\n$$M_3 = +F_3 \\cdot r_3 \\cdot \\sin 30^\\circ = +30\\text{ N} \\cdot 0{,}20\\text{ m} \\cdot 0{,}5 = +3\\text{ N}\\cdot\\text{m}$$"
        },
        {
          title: "Wypadkowy moment sił i zwrot przyspieszenia kątowego",
          content: "Sumujemy momenty sił z uwzględnieniem znaków:\n$$M_w = M_1 + M_2 + M_3 = +4 - 2 + 3 = +5\\text{ N}\\cdot\\text{m}$$\nZgodnie z II zasadą dynamiki dla ruchu obrotowego ($M_w = I\\varepsilon$) dodatni znak momentu wypadkowego oznacza, że przyspieszenie kątowe $\\varepsilon$ jest skierowane przeciwnie do ruchu wskazówek zegara."
        }
      ],
      numerical: "$M_w = +5\\text{ N}\\cdot\\text{m}$",
      answer: "Wypadkowy moment sił wynosi $+5\\text{ N}\\cdot\\text{m}$, a przyspieszenie kątowe jest skierowane przeciwnie do ruchu wskazówek zegara."
    }
  },
  {
    id: "b-zad-15",
    number: 15,
    title: "Zadanie 15. Równowaga nieważkiej belki z klockami",
    difficulty: 2,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Równowaga belki", "Dźwignia", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Na końcach nieważkiej belki zawieszono klocki. Klocek $m_1 = 3\\text{ kg}$ znajduje się $0{,}60\\text{ m}$ na lewo od osi O, a klocek $m_2$ – $0{,}40\\text{ m}$ na prawo. Oblicz $m_2$, jeżeli belka pozostaje pozioma.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/rigid-zad15-belka.png" alt="Nieważka belka z osią O i klockami m1 i m2" class="task-image" />
</div>`,
    solution: {
      givens: "$m_1 = 3\\text{ kg}$, $r_1 = 0{,}60\\text{ m}$, $r_2 = 0{,}40\\text{ m}$.",
      steps: [
        {
          title: "Warunek równowagi obrotowej belki",
          content: "Belka jest nieważka, a moment siły reakcji osi O wynosi zero (jej ramię względem osi jest zerowe). Aby belka pozostała w równowadze poziomej, suma momentów sił względem osi O musi wynosić zero:\n$$\\sum M_O = 0 \\implies m_1 g \\cdot r_1 = m_2 g \\cdot r_2$$"
        },
        {
          title: "Wyznaczenie masy $m_2$",
          content: "Przyspieszenie ziemskie $g$ upraszcza się po obu stronach równania:\n$$m_2 = \\frac{m_1 \\cdot r_1}{r_2} = \\frac{3\\text{ kg} \\cdot 0{,}60\\text{ m}}{0{,}40\\text{ m}} = 4{,}5\\text{ kg}$$"
        }
      ],
      numerical: "$m_2 = 4{,}5\\text{ kg}$",
      answer: "Masa klocka wynosi $m_2 = 4{,}5\\text{ kg}$."
    }
  },
  {
    id: "b-zad-16",
    number: 16,
    title: "Zadanie 16. Położenie podpory jednorodnej belki z obciążnikami",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Równowaga belki", "Ciężar belki", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Jednorodna belka długości $4\\text{ m}$ i masie $10\\text{ kg}$ ma na końcach zawieszone klocki $m_1 = 5\\text{ kg}$ i $m_2 = 2\\text{ kg}$. Podporę P przesuwa się od środka masy S belki w stronę cięższego klocka. Oblicz odległość $x = |PS|$, dla której belka będzie w równowadze.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/rigid-zad16-belka.png" alt="Jednorodna belka o długości 4 m z podporą P przesuniętą o x od środka masy S" class="task-image" />
</div>`,
    solution: {
      givens: "$L = 4\\text{ m}$, masa belki $M = 10\\text{ kg}$, $m_1 = 5\\text{ kg}$, $m_2 = 2\\text{ kg}$, środek masy S znajduje się $2\\text{ m}$ od każdego z końców.",
      steps: [
        {
          title: "Ustalenie ramion sił względem podpory P",
          content: "Podpora P jest przesunięta o $x$ w stronę cięższego klocka $m_1$ (w lewo od środka S):\n- Odległość klocka $m_1$ od podpory P: $r_1 = 2 - x$\n- Odległość środka masy belki S od podpory P: $r_S = x$ (ciężar belki $Mg$ działa w dół po prawej stronie podpory)\n- Odległość klocka $m_2$ od podpory P: $r_2 = 2 + x$ (działa po prawej stronie podpory)"
        },
        {
          title: "Równanie równowagi momentów sił względem punktu P",
          content: "Suma momentów obracających belkę w lewo musi równoważyć sumę momentów obracających ją w prawo:\n$$m_1 g \\cdot (2 - x) = m_2 g \\cdot (2 + x) + M g \\cdot x$$\nDzieląc obustronnie przez $g$:\n$$5(2 - x) = 2(2 + x) + 10x$$\n$$10 - 5x = 4 + 2x + 10x$$\n$$10 - 4 = 17x \\implies 6 = 17x \\implies x = \\frac{6}{17}\\text{ m} \\approx 0{,}353\\text{ m}$$"
        }
      ],
      numerical: "$x = \\frac{6}{17}\\text{ m} \\approx 0{,}353\\text{ m}$",
      answer: "Odległość podpory P od środka masy belki wynosi $x = \\frac{6}{17}\\text{ m} \\approx 0{,}353\\text{ m}$ (ok. $35{,}3\\text{ cm}$)."
    }
  },
  {
    id: "b-zad-17",
    number: 17,
    title: "Zadanie 17. Siły reakcji podpór sztywnej belki ze zwisającym końcem",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Reakcje podpór", "Statyka bryły", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Jednorodna belka o masie $60\\text{ kg}$ jest połączona ze sztywnymi pionowymi podporami w punktach A i B odległych o $1{,}0\\text{ m}$. Środek masy C leży $1{,}4\\text{ m}$ na prawo od A. Połączenia mogą działać na belkę zarówno w górę, jak i w dół. Narysuj zwroty sił $F_A$ i $F_B$, a następnie oblicz ich wartości.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/rigid-zad17-belka.png" alt="Jednorodna belka podparta w punktach A i B z ciężarem mg w środku masy C" class="task-image" />
</div>`,
    solution: {
      givens: "$m = 60\\text{ kg}$, $Q = mg = 600\\text{ N}$, $|AB| = 1{,}0\\text{ m}$, $|AC| = 1{,}4\\text{ m}$.",
      steps: [
        {
          title: "Równowaga momentów sił względem punktu A",
          content: "Przyjmijmy zwrot sił pionowych ku górze za dodatni. Względem podpory A moment siły $F_A$ znika:\n$$\\sum M_A = 0 \\implies F_B \\cdot |AB| - mg \\cdot |AC| = 0$$\n$$F_B \\cdot 1{,}0\\text{ m} = 600\\text{ N} \\cdot 1{,}4\\text{ m} = 840\\text{ N}\\cdot\\text{m} \\implies F_B = +840\\text{ N}$$\nDodatni znak potwierdza, że siła $F_B$ jest skierowana pionowo w górę."
        },
        {
          title: "Warunek równowagi sił w pionie i wyznaczenie $F_A$",
          content: "Suma sił działających na belkę w pionie musi wynosić zero:\n$$F_A + F_B - mg = 0 \\implies F_A = mg - F_B = 600\\text{ N} - 840\\text{ N} = -240\\text{ N}$$\nUjemny znak oznacza, że siła $F_A$ działa pionowo w dół — połączenie A musi przytrzymywać lewy koniec belki, zapobiegając jej uniesieniu."
        }
      ],
      numerical: "$F_B = 840\\text{ N}$ (w górę), $F_A = -240\\text{ N}$ (w dół)",
      answer: "Zwrot siły $F_B$ jest skierowany w górę i ma wartość $840\\text{ N}$. Zwrot siły $F_A$ jest skierowany w dół i ma wartość $240\\text{ N}$."
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
      givens: "$m_1 = 1\\text{ kg}, r_1 = 0{,}30\\text{ m}$; $m_2 = 2\\text{ kg}, r_2 = 0{,}20\\text{ m}$.",
      steps: [
        {
          title: "Obliczenie momentu bezwładności",
          content: "Dla układu mas punktowych moment bezwładności wynosi:\n$$I = \\sum m_i r_i^2 = m_1 r_1^2 + m_2 r_2^2$$\n$$I = 1\\text{ kg} \\cdot (0{,}30\\text{ m})^2 + 2\\text{ kg} \\cdot (0{,}20\\text{ m})^2 = 0{,}09 + 2 \\cdot 0{,}04 = 0{,}09 + 0{,}08 = 0{,}17\\text{ kg}\\cdot\\text{m}^2$$"
        }
      ],
      numerical: "$I = 0{,}17\\text{ kg}\\cdot\\text{m}^2$",
      answer: "Moment bezwładności układu wynosi $0{,}17\\text{ kg}\\cdot\\text{m}^2$."
    }
  },
  {
    id: "b-zad-19",
    number: 19,
    title: "Zadanie 19. Zmiana odległości masy punktowej od osi",
    difficulty: 1,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Moment bezwładności", "Zadanie zamknięte", "Masa punktowa"],
    correctOption: "C",
    problem: `<p class="problem-paragraph">Tę samą masę punktową przesunięto z odległości $R$ do odległości $R/2$ od osi. Jej moment bezwładności względem tej osi:</p>
<div class="problem-options-list" data-correct="C">
  <div class="problem-option-item" data-option="A"><span class="problem-option-letter">A</span><span class="problem-option-text">nie zmienił się</span></div>
  <div class="problem-option-item" data-option="B"><span class="problem-option-letter">B</span><span class="problem-option-text">zmaleje dwukrotnie</span></div>
  <div class="problem-option-item" data-option="C"><span class="problem-option-letter">C</span><span class="problem-option-text">zmaleje czterokrotnie</span></div>
  <div class="problem-option-item" data-option="D"><span class="problem-option-letter">D</span><span class="problem-option-text">wzrośnie czterokrotnie</span></div>
</div>`,
    solution: {
      givens: "$r_1 = R$, $r_2 = R/2$, masa $m = \\text{const}$.",
      steps: [
        {
          title: "Porównanie momentów bezwładności",
          content: "Dla masy punktowej $I = m r^2$. Podstawiając nową odległość:\n$$I_2 = m \\left(\\frac{R}{2}\\right)^2 = m \\frac{R^2}{4} = \\frac{I_1}{4}$$\nMoment bezwładności maleje czterokrotnie."
        }
      ],
      answer: "Poprawna jest odpowiedź C (zmaleje czterokrotnie).",
      trap: "Moment bezwładności zależy od kwadratu odległości od osi ($r^2$), dlatego dwukrotne zbliżenie masy zmniejsza $I$ aż czterokrotnie."
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
          content: "Z równania dynamiki obrotowej $M = I\\varepsilon \\implies \\varepsilon = \\frac{M}{I}$.\nPodstawiając momenty bezwładności:\n$$\\varepsilon_k = \\frac{M}{\\frac{1}{2}mR^2} = \\frac{2M}{mR^2}$$\n$$\\varepsilon_p = \\frac{M}{mR^2}$$\nStąd natychmiast wynika relacja:\n$$\\varepsilon_k = 2\\varepsilon_p$$"
        }
      ],
      answer: "Poprawna jest odpowiedź C ($\\varepsilon_k = 2\\varepsilon_p$).",
      trap: "Im mniejszy moment bezwładności bryły, tym większe przyspieszenie kątowe nadaje jej ten sam moment siły."
    }
  },
  {
    id: "b-zad-21",
    number: 21,
    title: "Zadanie 21. Ruch układu dwóch współosiowych bębnów",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Współosiowe bębny", "Naprężenia nici", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Dwa współosiowe bębny są połączone na sztywno. Na bęben o promieniu $r_1 = 0{,}10\\text{ m}$ nawinięto nić z klockiem $m_1 = 4\\text{ kg}$, a na bęben o promieniu $r_2 = 0{,}20\\text{ m}$ – nić z klockiem $m_2 = 1\\text{ kg}$. Nici rozwijają się po przeciwnych stronach. Moment bezwładności bębnów wynosi $I = 0{,}30\\text{ kg}\\cdot\\text{m}^2$. Ustal kierunek ruchu, a następnie oblicz $\\varepsilon$, przyspieszenia klocków i naprężenia obu nici.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/rigid-zad21-bebny.png" alt="Współosiowe bębny z klockami m1 i m2" class="task-image" />
</div>`,
    solution: {
      givens: "$r_1 = 0{,}10\\text{ m}, m_1 = 4\\text{ kg}$; $r_2 = 0{,}20\\text{ m}, m_2 = 1\\text{ kg}$; $I = 0{,}30\\text{ kg}\\cdot\\text{m}^2$, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Ustalenie kierunku ruchu układu",
          content: "Momenty sił ciężkości względem osi obrotu działają w przeciwnych zwrotach:\n$$M_{g1} = m_1 g r_1 = 4\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 0{,}10\\text{ m} = 4\\text{ N}\\cdot\\text{m}$$\n$$M_{g2} = m_2 g r_2 = 1\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 0{,}20\\text{ m} = 2\\text{ N}\\cdot\\text{m}$$\nPonieważ $M_{g1} > M_{g2}$, klocek $m_1$ opada, a klocek $m_2$ unosi się."
        },
        {
          title: "Równania dynamiki dla klocków i bębnów",
          content: "Przyjmując zwrot ruchu klocka $m_1$ w dół za dodatni:\n1. Klocek $m_1$: $m_1 g - T_1 = m_1 a_1 = m_1 \\varepsilon r_1$\n2. Klocek $m_2$: $T_2 - m_2 g = m_2 a_2 = m_2 \\varepsilon r_2$\n3. Bębny: $T_1 r_1 - T_2 r_2 = I\\varepsilon$\nPo wyznaczeniu $T_1 = m_1(g - \\varepsilon r_1)$ i $T_2 = m_2(g + \\varepsilon r_2)$ i podstawieniu do równania bębnów:\n$$\\varepsilon = \\frac{m_1 g r_1 - m_2 g r_2}{I + m_1 r_1^2 + m_2 r_2^2} = \\frac{4 - 2}{0{,}30 + 4 \\cdot 0{,}01 + 1 \\cdot 0{,}04} = \\frac{2}{0{,}38} = \\frac{100}{19}\\text{ rad/s}^2 \\approx 5{,}26\\text{ rad/s}^2$$"
        },
        {
          title: "Obliczenie przyspieszeń liniowych i naprężeń nici",
          content: "Przyspieszenia liniowe klocków:\n$$a_1 = \\varepsilon r_1 = \\frac{100}{19} \\cdot 0{,}10 = \\frac{10}{19}\\text{ m/s}^2 \\approx 0{,}526\\text{ m/s}^2 \\quad (\\text{w dół})$$\n$$a_2 = \\varepsilon r_2 = \\frac{100}{19} \\cdot 0{,}20 = \\frac{20}{19}\\text{ m/s}^2 \\approx 1{,}05\\text{ m/s}^2 \\quad (\\text{w górę})$$\nNaprężenia nici:\n$$T_1 = m_1(g - a_1) = 4 \\cdot \\left(10 - \\frac{10}{19}\\right) = \\frac{720}{19}\\text{ N} \\approx 37{,}9\\text{ N}$$\n$$T_2 = m_2(g + a_2) = 1 \\cdot \\left(10 + \\frac{20}{19}\\right) = \\frac{210}{19}\\text{ N} \\approx 11{,}1\\text{ N}$$"
        }
      ],
      numerical: "$\\varepsilon = \\frac{100}{19}\\text{ rad/s}^2 \\approx 5{,}26\\text{ rad/s}^2$, $a_1 \\approx 0{,}526\\text{ m/s}^2$, $a_2 \\approx 1{,}05\\text{ m/s}^2$, $T_1 \\approx 37{,}9\\text{ N}$, $T_2 \\approx 11{,}1\\text{ N}$",
      answer: "Klocek $m_1$ opada, a $m_2$ unosi się. Przyspieszenie kątowe wynosi $\\varepsilon \\approx 5{,}26\\text{ rad/s}^2$. Przyspieszenia klocków: $a_1 \\approx 0{,}526\\text{ m/s}^2$ (w dół), $a_2 \\approx 1{,}05\\text{ m/s}^2$ (w górę). Naprężenia nici: $T_1 \\approx 37{,}9\\text{ N}$, $T_2 \\approx 11{,}1\\text{ N}$."
    }
  },
  {
    id: "b-zad-22",
    number: 22,
    title: "Zadanie 22. Ruch klocka na stole przez masywny krążek",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Masywny krążek", "Tarcie", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Klocek $m_1 = 2\\text{ kg}$ leży na stole i jest połączony nicią z wiszącym klockiem $m_2 = 1\\text{ kg}$. Nić przechodzi przez jednorodny krążek o masie $M = 2\\text{ kg}$; $I = \\frac{1}{2}MR^2$. Współczynnik tarcia kinetycznego klocka o stół wynosi $\\mu = 0{,}20$. Oblicz przyspieszenie układu oraz naprężenia $T_1$ i $T_2$. Wyjaśnij, dlaczego naprężenia nie są równe.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/rigid-zad22-stol.png" alt="Układ klocka m1 na stole, masywnego krążka M i klocka wiszącego m2" class="task-image" />
</div>`,
    solution: {
      givens: "$m_1 = 2\\text{ kg}, m_2 = 1\\text{ kg}, M = 2\\text{ kg}, I = \\frac{1}{2}MR^2, \\mu = 0{,}20, g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Wyznaczenie siły tarcia i układu równań dynamiki",
          content: "Wartość siły tarcia klocka o stół:\n$$f = \\mu m_1 g = 0{,}20 \\cdot 2\\text{ kg} \\cdot 10\\text{ m/s}^2 = 4\\text{ N}$$\nRównania ruchu:\n1. Klocek $m_1$: $T_1 - f = m_1 a$\n2. Klocek $m_2$: $m_2 g - T_2 = m_2 a$\n3. Krążek o masie $M$: $(T_2 - T_1)R = I\\varepsilon = (\\frac{1}{2}MR^2)\\frac{a}{R} \\implies T_2 - T_1 = \\frac{M}{2}a$"
        },
        {
          title: "Obliczenie przyspieszenia układu",
          content: "Sumując stronami powyższe trzy równania:\n$$m_2 g - f = \\left(m_1 + m_2 + \\frac{M}{2}\\right)a$$\n$$10 - 4 = (2 + 1 + 1)a \\implies 6 = 4a \\implies a = 1{,}5\\text{ m/s}^2$$"
        },
        {
          title: "Obliczenie naprężeń nici i wyjaśnienie ich różnicy",
          content: "Podstawiając przyspieszenie $a$ do równań klocków:\n$$T_1 = m_1 a + f = 2 \\cdot 1{,}5 + 4 = 7\\text{ N}$$\n$$T_2 = m_2(g - a) = 1 \\cdot (10 - 1{,}5) = 8{,}5\\text{ N}$$\nNaprężenia $T_1$ i $T_2$ nie są równe, ponieważ krążek jest masywny ($I > 0$). Różnica sił $(T_2 - T_1)$ wytwarza wypadkowy moment siły $(T_2 - T_1)R$, który nadaje krążkowi przyspieszenie kątowe $\\varepsilon = a/R$."
        }
      ],
      numerical: "$a = 1{,}5\\text{ m/s}^2, T_1 = 7\\text{ N}, T_2 = 8{,}5\\text{ N}$",
      answer: "Przyspieszenie układu wynosi $1{,}5\\text{ m/s}^2$, naprężenia nici: $T_1 = 7\\text{ N}$ oraz $T_2 = 8{,}5\\text{ N}$. Różnica naprężeń wytwarza moment siły rozpędzający masywny krążek."
    }
  },
  {
    id: "b-zad-23",
    number: 23,
    title: "Zadanie 23. Walec toczący się po stole połączony z wiszącym klockiem",
    difficulty: 3,
    source: "Zbiór autorski Matura 2027 • Bryła sztywna",
    tags: ["Toczenie bez poślizgu", "Siła tarcia", "Styl maturalny"],
    problem: `<p class="problem-paragraph">Jednorodny walec o masie $m = 1\\text{ kg}$ toczy się bez poślizgu po stole. Do jego osi przymocowano lekką nić przełożoną przez nieważki bloczek; na drugim końcu wisi klocek o tej samej masie $m$. Przyjmij $I = \\frac{1}{2}mR^2$. Wyznacz zwrot tarcia działającego na walec oraz oblicz przyspieszenie układu, naprężenie nici i wartość tarcia.</p>
<div class="task-image-wrapper">
  <img src="img/rigid/rigid-zad23-walec.png" alt="Jednorodny walec na stole z nicią przymocowaną do osi i wiszącym klockiem" class="task-image" />
</div>`,
    solution: {
      givens: "Walec: $m = 1\\text{ kg}, I = \\frac{1}{2}mR^2$; klocek: $m = 1\\text{ kg}$, bloczek nieważki, $g = 10\\text{ m/s}^2$.",
      steps: [
        {
          title: "Ustalenie zwrotu siły tarcia statycznego",
          content: "Naprężenie nici $T$ działa w osi walca, więc jego moment względem środka masy wynosi zero ($M_T = 0$). Aby walec toczył się w prawo bez poślizgu, musi uzyskać obrót zgodny z ruchem wskazówek zegara. Jedyną siłą dającą moment względem środka walca jest siła tarcia statycznego $f$ w punkcie styku z podłożem. Aby wytworzyć moment zgodny z ruchem wskazówek zegara, siła tarcia $f$ musi być skierowana **w lewo** (przeciwnie do ruchu postępowego)."
        },
        {
          title: "Równania ruchu dla walca i klocka",
          content: "1. Walec (ruch postępowy): $T - f = ma$\n2. Walec (ruch obrotowy wokół osi środka): $f \\cdot R = I\\varepsilon = (\\frac{1}{2}mR^2)\\frac{a}{R} \\implies f = \\frac{1}{2}ma$\nZ powyższych równań: $T = ma + f = ma + \\frac{1}{2}ma = \\frac{3}{2}ma$\n3. Wiszący klocek: $mg - T = ma$"
        },
        {
          title: "Wyznaczenie przyspieszenia, tarcia i naprężenia nici",
          content: "Podstawiając $T = \\frac{3}{2}ma$ do równania klocka:\n$$mg - \\frac{3}{2}ma = ma \\implies mg = \\frac{5}{2}ma \\implies a = \\frac{2}{5}g = \\frac{2 \\cdot 10}{5} = 4\\text{ m/s}^2$$\nObliczenie wartości tarcia i naprężenia:\n$$f = \\frac{1}{2}ma = \\frac{1}{2} \\cdot 1\\text{ kg} \\cdot 4\\text{ m/s}^2 = 2\\text{ N}$$\n$$T = \\frac{3}{2}ma = \\frac{3}{2} \\cdot 1\\text{ kg} \\cdot 4\\text{ m/s}^2 = 6\\text{ N}$$"
        }
      ],
      numerical: "$a = 4\\text{ m/s}^2, f = 2\\text{ N}, T = 6\\text{ N}$",
      answer: "Tarcie działa na walec w lewo i ma wartość $f = 2\\text{ N}$. Przyspieszenie układu wynosi $a = 4\\text{ m/s}^2$, a naprężenie nici wynosi $T = 6\\text{ N}$."
    }
  }
];

sub2.tasks = exactTasksSub2;

const newContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync(dataCoursesPath, newContent, 'utf8');
console.log('Successfully replaced all Topic 2 tasks with exact tasks 12–23 from the PDF!');
