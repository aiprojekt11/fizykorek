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

function setSolution(subId, taskId, newSol, problemPatch) {
  const sub = bryla.subchapters.find(s => s.id === subId);
  if (!sub) throw new Error('Subchapter not found: ' + subId);
  const task = sub.tasks.find(t => t.id === taskId);
  if (!task) throw new Error('Task not found: ' + taskId);
  task.solution = newSol;
  if (typeof problemPatch === 'function') {
    task.problem = problemPatch(task.problem);
  }
}

// ============================================================================
// CZĘŚĆ A: 13 ZADAŃ MATURALNYCH CKE (sub-bryla-matura)
// ============================================================================

// 1. Matura czerwiec 2026 zad. 4
setSolution('sub-bryla-matura', 'matura-cke-bryla-2026-czerwiec-zad-4', {
  intuition: "Na poziomym odcinku przy stałej prędkości siła tarcia nie działa. Podczas wtaczania się pod górę tarcie statyczne hamuje obrót bryły (nie rozpraszając energii), a wysokość wzniesienia wyznaczamy z zasady zachowania energii mechanicznej.",
  givens: "Obręcz: masa $M$, promień $R$. Dwa pręty: $m_{\\text{pręt}} = \\frac{M}{2}$, $l_{\\text{pręt}} = 2R$. Masa całej bryły: $m_{\\mathcal{B}} = 2M$. $v_{\\mathcal{B}} = 1{,}4\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$, $I_{0\\mathcal{B}} = \\frac{4}{3}MR^2$.",
  steps: [
    {
      title: "Zadanie 4.1",
      content: "Na poziomym odcinku $XY$ bryła porusza się ze stałą prędkością ($a = 0$, $\\varepsilon = 0$), a opory powietrza nie występują. Z I zasady dynamiki wypadkowa siła pozioma wynosi zero, więc siła tarcia w punkcie $P_1$ nie działa ($F_T = 0$). Odpowiedź: A."
    },
    {
      title: "Zadanie 4.2",
      content: "Podczas wtaczania się pod górę bryła hamuje, więc jej prędkość kątowa maleje. Aby zmniejszać obrót zgodny z ruchem wskazówek zegara, moment siły tarcia statycznego względem środka masy $O$ musi działać przeciwnie do ruchu wskazówek zegara. Dlatego siła tarcia $F_T$ w punkcie $P_2$ jest skierowana w górę równi (w prawo). Odpowiedź: D."
    },
    {
      title: "Zadanie 4.3",
      content: "1. F – pionowa linia działania siły ciężkości przechodzi przez środek masy $O$, a nie przez punkt styku $P_2$ na pochylonej równi (ramię siły jest niezerowe), więc moment siły ciężkości względem $P_2$ jest różny od zera.\n2. F – względem środka masy $O$ działa niezerowy moment siły tarcia ($M_O = F_T R \\ne 0$), a prędkość kątowa $\\omega$ maleje, więc moment pędu $L = I_{0\\mathcal{B}}\\omega$ maleje i nie jest zachowany."
    },
    {
      title: "Zadanie 4.4",
      content: "Moment bezwładności bryły jest sumą momentów bezwładności obręczy oraz dwóch jednakowych prętów względem tej samej osi $O$:\n$$I_{0\\text{ obręcz}} = MR^2$$\n$$I_{0\\text{ pręt}} = \\frac{1}{12} m_{\\text{pręt}} l_{\\text{pręt}}^2 = \\frac{1}{12} \\cdot \\frac{M}{2} \\cdot (2R)^2 = \\frac{1}{6}MR^2$$\n$$I_{0\\mathcal{B}} = I_{0\\text{ obręcz}} + 2 I_{0\\text{ pręt}} = MR^2 + 2 \\cdot \\frac{1}{6}MR^2 = \\frac{4}{3}MR^2$$"
    },
    {
      title: "Zadanie 4.5",
      content: "W toczeniu bez poślizgu tarcie statyczne nie wykonuje pracy, więc zachowana jest energia mechaniczna. Masa całej bryły wynosi $m_{\\mathcal{B}} = M + 2 \\cdot \\frac{M}{2} = 2M$, a z warunku toczenia bez poślizgu $\\omega = \\frac{v_{\\mathcal{B}}}{R}$:\n$$m_{\\mathcal{B}} g \\Delta h_{\\max} = \\frac{1}{2} m_{\\mathcal{B}} v_{\\mathcal{B}}^2 + \\frac{1}{2} I_{0\\mathcal{B}} \\omega^2$$\n$$2M g \\Delta h_{\\max} = \\frac{1}{2}(2M) v_{\\mathcal{B}}^2 + \\frac{1}{2}\\left(\\frac{4}{3}MR^2\\right)\\left(\\frac{v_{\\mathcal{B}}}{R}\\right)^2$$\n$$2M g \\Delta h_{\\max} = M v_{\\mathcal{B}}^2 + \\frac{2}{3}M v_{\\mathcal{B}}^2 = \\frac{5}{3}M v_{\\mathcal{B}}^2$$\nDzielimy przez $2Mg$:\n$$\\Delta h_{\\max} = \\frac{5 v_{\\mathcal{B}}^2}{6g} = \\frac{5 \\cdot (1{,}4)^2}{6 \\cdot 9{,}8} = \\frac{9{,}8}{58{,}8} = \\frac{1}{6}\\text{ m} \\approx 0{,}17\\text{ m}$$"
    }
  ],
  numerical: "4.1: A; 4.2: D; 4.3: 1 – F, 2 – F; 4.4: $I_{0\\mathcal{B}} = \\frac{4}{3}MR^2$; 4.5: $\\Delta h_{\\max} \\approx 0{,}17\\text{ m}$",
  answer: "4.1: A;\n4.2: D;\n4.3: 1 – F, 2 – F;\n4.4: Wykazano $I_{0\\mathcal{B}} = \\frac{4}{3}MR^2$;\n4.5: $\\Delta h_{\\max} = \\frac{1}{6}\\text{ m} \\approx 0{,}17\\text{ m}$.",
  trap: "Całkowita masa bryły to $2M$ (obręcz o masie $M$ oraz dwa pręty o masach po $\\frac{M}{2}$), a nie samo $M$.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf#page=11\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 11–14</a>."
});

// 2. Matura maj 2026 zad. 3
setSolution('sub-bryla-matura', 'matura-cke-bryla-2026-maj-zad-3', {
  intuition: "Lina schodzi z bloczka stycznie, więc ramię obu sił względem osi bloczka wynosi zawsze $R$ (niezależnie od kąta $\\alpha$). W ruchu z przyśpieszeniem zapisujemy układ równań dla ciężarka i obracającego się bloczka.",
  givens: "Bloczek: $m_w$, $R$, $I_0 = \\frac{1}{2}m_w R^2$. Ciężarek: $m_c$. W sytuacji 2.: $a = \\frac{1}{2}g$ (w dół).",
  steps: [
    {
      title: "Zadanie 3.1",
      content: "W spoczynku ciężarek równoważy siła naciągu liny $F_n = m_c g$. Z warunku równowagi momentów sił względem osi bloczka (obie części liny działają stycznie na ramieniu $R$):\n$$F_n \\cdot R = F \\cdot R \\implies F = F_n = m_c g$$\nOdpowiedź: A."
    },
    {
      title: "Zadanie 3.2",
      content: "Oznaczamy siłę naciągu pionowej części liny jako $F_n$. Zapisujemy układ równań dynamiki dla opadającego ciężarka i obracającego się bloczka:\n$$\\begin{cases} m_c g - F_n = m_c a \\\\ (F_n - F)R = I_0 \\varepsilon \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$\nPodstawiamy $I_0 = \\frac{1}{2}m_w R^2$ oraz $\\varepsilon = \\frac{a}{R}$ do drugiego równania:\n$$(F_n - F)R = \\frac{1}{2}m_w R^2 \\cdot \\frac{a}{R} \\implies F_n - F = \\frac{1}{2}m_w a$$\nZ pierwszego równania $F_n = m_c(g - a)$, więc:\n$$F = F_n - \\frac{1}{2}m_w a = m_c g - \\left(m_c + \\frac{1}{2}m_w\\right)a$$\nPodstawiamy $a = \\frac{1}{2}g$:\n$$F = m_c g - \\left(m_c + \\frac{1}{2}m_w\\right)\\frac{1}{2}g = \\frac{1}{2}m_c g - \\frac{1}{4}m_w g = \\frac{1}{4}g(2m_c - m_w)$$"
    }
  ],
  numerical: "3.1: A; 3.2: $F = \\frac{1}{4}g(2m_c - m_w)$",
  answer: "3.1: A ($F = m_c g$);\n3.2: $F = \\frac{1}{4}g(2m_c - m_w)$ (równoważnie $\\frac{1}{2}g\\left(m_c - \\frac{1}{2}m_w\\right)$).",
  trap: "Kąt $\\alpha$ nie wchodzi do wzoru na moment siły, ponieważ lina zawsze odrywa się od bloczka stycznie (ramię wynosi $R$).",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf#page=15\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 15–19</a>."
});

// 3. Próbna matura styczeń 2026 zad. 3
setSolution('sub-bryla-matura', 'matura-cke-bryla-2026-styczen-zad-3', {
  intuition: "Jednorodna płyta ma środek masy $S$ w połowie swojej całkowitej długości. W obu sytuacjach zapisujemy układ równań równowagi sił w pionie i momentów sił względem środka masy $S$.",
  givens: "$|AO_1| = 2\\text{ m}$, $|O_1O_2| = 4\\text{ m}$, $|O_2B| = 3\\text{ m}$, długość płyty $L = 9\\text{ m}$, $Q_K = 0{,}4\\,Q_P$. W sytuacji 2.: $F_1 = F_2$.",
  steps: [
    {
      title: "Zadanie 3.1",
      content: "Środek masy $S$ płyty leży w odległości $4{,}5\\text{ m}$ od krawędzi A, więc ramiona sił względem $S$ wynoszą: $|SO_1| = 2{,}5\\text{ m}$ oraz $|SO_2| = 1{,}5\\text{ m}$. Z warunków równowagi dla nieobciążonej płyty:\n$$\\begin{cases} F_1 + F_2 = Q_P \\\\ F_1 \\cdot |SO_1| = F_2 \\cdot |SO_2| \\end{cases}$$\nZ drugiego równania:\n$$2{,}5 F_1 = 1{,}5 F_2 \\implies F_2 = \\frac{5}{3}F_1 > F_1$$\nOdpowiedź: A1."
    },
    {
      title: "Zadanie 3.2",
      content: "W sytuacji 2. na płycie leży klocek o ciężarze $Q_K = 0{,}4\\,Q_P$, a siły reakcji osi są równe ($F_1 = F_2$):\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2026-styczen-z3-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>\nZapisujemy układ równań równowagi sił w pionie oraz momentów sił względem środka masy $S$ (ciężar $Q_P$ ma wtedy ramię równe zero):\n$$\\begin{cases} F_1 + F_2 = Q_P + Q_K \\\\ F_1 \\cdot |SO_1| = F_2 \\cdot |SO_2| + Q_K \\cdot x \\end{cases}$$\nZ pierwszego równania (dla $F_1 = F_2$ i $Q_K = 0{,}4\\,Q_P$):\n$$2F_1 = 1{,}4\\,Q_P \\implies F_1 = F_2 = 0{,}7\\,Q_P$$\nPodstawiamy do drugiego równania i dzielimy przez $Q_P$:\n$$0{,}7\\,Q_P \\cdot 2{,}5 = 0{,}7\\,Q_P \\cdot 1{,}5 + 0{,}4\\,Q_P \\cdot x$$\n$$1{,}75 = 1{,}05 + 0{,}4 x \\implies 0{,}4 x = 0{,}70 \\implies x = 1{,}75\\text{ m}$$"
    }
  ],
  numerical: "3.1: A1; 3.2: $x = 1{,}75\\text{ m}$",
  answer: "3.1: A1;\n3.2: $x = 1{,}75\\text{ m}$.",
  trap: "Środek masy $S$ leży w połowie całej płyty ($4{,}5\\text{ m}$ od krawędzi A), a nie w połowie odległości między osiami $O_1$ i $O_2$.",
  source: "Opracowano na podstawie oficjalnych zasad oceniania CKE. <a href=\"data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 13–15</a>."
});

// 4. Matura czerwiec 2025 zad. 3
setSolution('sub-bryla-matura', 'matura-cke-bryla-2025-czerwiec-zad-3', {
  intuition: "Pół obrotu to kąt $\\Delta\\alpha = \\pi\\text{ rad}$ i poziome przesunięcie środka walca o $\\pi R$. Wartość przemieszczenia punktu $A$ obliczamy z twierdzenia Pitagorasa, a całkowitą energię kinetyczną jako sumę energii ruchu postępowego i obrotowego.",
  givens: "Promień $R$, masa $m$, czas półobrotu $\\Delta t = 0{,}2\\text{ s}$, $\\Delta\\alpha = \\pi\\text{ rad}$, $I_0 = \\frac{4}{5}mR^2$, toczenie bez poślizgu ($v = \\omega R$).",
  steps: [
    {
      title: "Zadanie 3.1",
      content: "W czasie $\\Delta t = 0{,}2\\text{ s}$ walec wykonuje pół obrotu ($\\Delta\\alpha = \\pi\\text{ rad}$):\n$$\\omega = \\frac{\\Delta\\alpha}{\\Delta t} = \\frac{\\pi}{0{,}2\\text{ s}} = 5\\pi\\text{ rad/s}$$\nOdpowiedź: C."
    },
    {
      title: "Zadanie 3.2",
      content: "Po wykonaniu pół obrotu bez poślizgu punkt $A$ przesuwa się poziomo razem ze środkiem walca o $\\Delta x = \\pi R$, a w pionie opada ze szczytu walca do podłoża o $\\Delta y = 2R$. Z twierdzenia Pitagorasa:\n$$|A_0A_1| = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{(\\pi R)^2 + (2R)^2} = R\\sqrt{\\pi^2 + 4}$$\n$$\\frac{|A_0A_1|}{R} = \\sqrt{\\pi^2 + 4}$$"
    },
    {
      title: "Zadanie 3.3",
      content: "Całkowita energia kinetyczna toczącego się walca (przy $\\omega = \\frac{v}{R}$ i $I_0 = \\frac{4}{5}mR^2$):\n$$E_{kin\\text{ całk}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I_0\\omega^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{4}{5}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}mv^2 + \\frac{2}{5}mv^2 = \\frac{9}{10}mv^2$$\nStąd $k = \\frac{9}{10} = 0{,}9$."
    }
  ],
  numerical: "3.1: C; 3.2: $\\frac{|A_0A_1|}{R} = \\sqrt{\\pi^2 + 4}$; 3.3: $k = \\frac{9}{10} = 0{,}9$",
  answer: "3.1: C;\n3.2: $\\frac{|A_0A_1|}{R} = \\sqrt{\\pi^2 + 4}$;\n3.3: $k = \\frac{9}{10}$ (lub $0{,}9$).",
  trap: "W zadaniu 3.2 pytają o wartość przemieszczenia (odległość w linii prostej między $A_0$ i $A_1$), a nie o długość krzywego toru punktu $A$.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–9</a>."
});

// 5. Matura maj 2025 zad. 2
setSolution('sub-bryla-matura', 'matura-cke-bryla-2025-maj-zad-2', {
  intuition: "Oba walce mają taką samą masę i startują z tej samej wysokości, więc u podnóża równi mają taką samą całkowitą energię kinetyczną. Walec wydrążony W2 ma większy moment bezwładności ($k_2 > k_1$), więc więcej energii trafia w obrót, a jego prędkość liniowa jest mniejsza.",
  givens: "$m_1 = m_2 = m$, $R_1 = R_2 = R$, $I_1 = k_1 mR^2$, $I_2 = k_2 mR^2$, kąt równi $\\beta$, toczenie bez poślizgu.",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "1. P – w wydrążonym walcu W2 masa jest rozłożona dalej od osi obrotu niż w pełnym walcu W1, więc $I_2 > I_1$, czyli $k_2 > k_1$.\n2. P – z zasady zachowania energii $E_{k\\text{ całk}} = mgh$; masy i wysokość początkowa są jednakowe, więc całkowite energie kinetyczne u podnóża równi są równe.\n3. F – z bilansu energii $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}k mR^2\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}m(1+k)v^2 \\implies v = \\sqrt{\\frac{2gh}{1+k}}$. Ponieważ $k_1 < k_2$, pełny walec W1 ma większą prędkość liniową ($v_1 > v_2$)."
    },
    {
      title: "Zadanie 2.2",
      content: "Oznaczamy siłę tarcia statycznego jako $F_T$. Zapisujemy układ równań dynamiki dla ruchu postępowego i obrotowego walca W2:\n$$\\begin{cases} mg\\sin\\beta - F_T = ma \\\\ F_T \\cdot R = I_2 \\varepsilon \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$\nPodstawiamy $I_2 = k_2 mR^2$ oraz $\\varepsilon = \\frac{a}{R}$ do drugiego równania:\n$$F_T \\cdot R = k_2 mR^2 \\cdot \\frac{a}{R} \\implies F_T = k_2 ma$$\nWstawiamy $F_T = k_2 ma$ do pierwszego równania:\n$$mg\\sin\\beta - k_2 ma = ma \\implies m(1 + k_2)a = mg\\sin\\beta \\implies a = \\frac{g\\sin\\beta}{1 + k_2}$$"
    }
  ],
  numerical: "2.1: 1 – P, 2 – P, 3 – F; 2.2: $a = \\frac{g\\sin\\beta}{1 + k_2}$",
  answer: "2.1: 1 – P, 2 – P, 3 – F;\n2.2: $a = \\frac{g\\sin\\beta}{1 + k_2}$.",
  trap: "Równe całkowite energie kinetyczne u podnóża równi nie oznaczają równych prędkości liniowych – bryła o większym momencie bezwładności zamienia większą część energii w obrót.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2025-maj-matura-rozszerzona-odpowiedzi.pdf#page=11\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 11–16</a>."
});

// 6. Próbna matura grudzień 2024 zad. 3
setSolution('sub-bryla-matura', 'matura-cke-bryla-2024-grudzien-zad-3', {
  intuition: "Prędkość dowolnego punktu toczącego się walca jest sumą wektorową prędkości środka masy i prędkości obrotowej. Współrzędną $T_x$ siły tarcia wyznaczamy z układu równań dla ruchu postępowego i obrotowego walca.",
  givens: "Walec: masa $m$, promień $R$, $I_0 = \\frac{1}{2}mR^2$, $v_S = 2{,}5\\text{ m/s}$, siła pozioma $\\vec{F}$ przyłożona u góry walca, toczenie bez poślizgu.",
  steps: [
    {
      title: "Zadanie 3.1",
      content: "W toczeniu bez poślizgu prędkość obrotowa na obwodzie wynosi $v_{\\text{obr}} = \\omega R = v_S = 2{,}5\\text{ m/s}$.\n- W punkcie A (na górze walca) wektory $\\vec{v}_S$ i $\\vec{v}_{\\text{obr}}$ mają ten sam zwrot (w prawo):\n$$v_A = v_S + v_S = 2v_S = 5{,}0\\text{ m/s}$$\n- W punkcie B (na prawym skraju) wektor $\\vec{v}_S$ jest skierowany w prawo, a $\\vec{v}_{\\text{obr}}$ pionowo w dół (są prostopadłe):\n$$v_B = \\sqrt{v_S^2 + v_S^2} = v_S\\sqrt{2} = 2{,}5\\sqrt{2}\\text{ m/s} \\approx 3{,}54\\text{ m/s}$$"
    },
    {
      title: "Zadanie 3.2",
      content: "Zakładamy wstępnie, że siła tarcia $\\vec{T}$ jest skierowana zgodnie z osią $x$ (w prawo, czyli $T_x > 0$) i zapisujemy układ równań dynamiki dla walca:\n$$\\begin{cases} F + T_x = ma \\\\ (F - T_x)R = I_0 \\varepsilon \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$\nPodstawiamy $I_0 = \\frac{1}{2}mR^2$ i $\\varepsilon = \\frac{a}{R}$ do drugiego równania:\n$$(F - T_x)R = \\frac{1}{2}mR^2 \\cdot \\frac{a}{R} \\implies F - T_x = \\frac{1}{2}ma \\implies ma = 2F - 2T_x$$\nPrzyrównujemy oba wyrażenia na $ma$:\n$$F + T_x = 2F - 2T_x \\implies 3T_x = F \\implies T_x = \\frac{1}{3}F$$\nPonieważ $T_x > 0$, przyjęty zwrot był poprawny – wektor $\\vec{T}$ w punkcie $C$ jest skierowany w prawo (zgodnie z osią $x$):\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2024-grudzien-z3-rozwiazanie.png\" alt=\"Oficjalny rysunek rozwiązania CKE — zwrot tarcia\" class=\"theory-img\" style=\"max-height:360px;display:block;margin:15px auto;\"></div>"
    }
  ],
  numerical: "3.1: $v_A = 5{,}0\\text{ m/s}$, $v_B = 2{,}5\\sqrt{2}\\text{ m/s}$; 3.2: $T_x = \\frac{1}{3}F$ (zwrot w prawo)",
  answer: "3.1: $v_A = 5{,}0\\text{ m/s}$, $v_B = 2{,}5\\sqrt{2}\\text{ m/s} \\approx 3{,}54\\text{ m/s}$;\n3.2: $T_x = \\frac{1}{3}F$; wektor $\\vec{T}$ w punkcie $C$ jest skierowany w prawo.",
  trap: "Gdy ciągniemy walec za jego górny punkt, siła tarcia statycznego działa w przód (w prawo), zgodnie z kierunkiem ruchu.",
  source: "Opracowano na podstawie oficjalnych zasad oceniania CKE. <a href=\"data/arkusze_cke/2024/fizyka-2024-grudzien-probna-rozszerzona-odpowiedzi.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 10–14</a>."
});

// 7. Matura czerwiec 2024 zad. 2
setSolution('sub-bryla-matura', 'matura-cke-bryla-2024-czerwiec-zad-2', {
  intuition: "Środek masy $C$ belki leży na prawo od obu podpór. Podpora $B$ musi więc działać w górę, a podpora $A$ przytrzymywać belkę w dół. Wartości sił wyznaczamy z układu równań równowagi.",
  givens: "$m = 120\\text{ kg}$, $l = 2{,}8\\text{ m}$, $|AB| = 1{,}0\\text{ m}$, $|AC| = \\frac{l}{2} = 1{,}4\\text{ m}$, $|BC| = 0{,}4\\text{ m}$, $g = 9{,}8\\text{ m/s}^2$.",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "Środek masy $C$ leży na prawo od podpory $B$ ($|BC| = 0{,}4\\text{ m}$). Siła ciężkości $\\vec{F}_C$ działa w dół i obracałaby belkę wokół $B$ zgodnie z ruchem wskazówek zegara, dlatego podpora $A$ musi ciągnąć w dół ($\\vec{F}_A$ w dół), a podpora $B$ pchać w górę ($\\vec{F}_B$ w górę).\nZ równowagi sił $F_B = F_A + F_C$, więc $F_B > F_C$. Z równowagi momentów względem $B$: $F_A \\cdot 1{,}0\\text{ m} = F_C \\cdot 0{,}4\\text{ m} \\implies F_A = 0{,}4\\,F_C < F_C$. Stąd $F_B > F_C > F_A$:\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2024-czerwiec-z2-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE\" class=\"theory-img\" style=\"max-height:430px;display:block;margin:15px auto;\"></div>"
    },
    {
      title: "Zadanie 2.2",
      content: "Ciężar belki wynosi $F_C = mg = 120\\text{ kg} \\cdot 9{,}8\\text{ m/s}^2 = 1176\\text{ N}$. Zapisujemy układ równań równowagi sił w pionie oraz momentów sił względem podpory $B$:\n$$\\begin{cases} F_B = F_A + F_C \\\\ F_A \\cdot |AB| = F_C \\cdot |BC| \\end{cases}$$\nZ drugiego równania:\n$$F_A = F_C \\cdot \\frac{|BC|}{|AB|} = 1176\\text{ N} \\cdot \\frac{0{,}4\\text{ m}}{1{,}0\\text{ m}} = 470{,}4\\text{ N} \\approx 470\\text{ N}$$\nZ pierwszego równania:\n$$F_B = F_A + F_C = 470{,}4\\text{ N} + 1176\\text{ N} = 1646{,}4\\text{ N} \\approx 1646\\text{ N}$$"
    }
  ],
  numerical: "2.1: $F_B > F_C > F_A$; 2.2: $F_A \\approx 470\\text{ N}$, $F_B \\approx 1646\\text{ N}$",
  answer: "2.1: $\\vec{F}_A$ w dół, $\\vec{F}_B$ w górę, $\\vec{F}_C$ w dół; $F_B > F_C > F_A$;\n2.2: $F_A \\approx 470\\text{ N}$, $F_B \\approx 1646\\text{ N}$.",
  trap: "Podpora A nie podtrzymuje belki od dołu, lecz przytrzymuje ją w dół – inaczej belka przeważyłaby się wokół podpory B.",
  source: "Opracowano na podstawie oficjalnych zasad oceniania CKE. <a href=\"data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–10</a>."
});

// 8. Matura maj 2024 zad. 2
setSolution('sub-bryla-matura', 'matura-cke-bryla-2024-maj-zad-2', {
  intuition: "W toczeniu bez poślizgu całkowita energia kinetyczna to suma energii postępowej i obrotowej. Przyśpieszenie walca wyznaczamy z układu równań dynamiki dla ruchu postępowego i obrotowego.",
  givens: "$m = 10\\text{ kg}$, $F = 30\\text{ N}$ (przyłożona do osi), $I_0 = \\frac{1}{2}mR^2$, toczenie bez poślizgu ($v = \\omega R$, $a = \\varepsilon R$).",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "Energia kinetyczna ruchu postępowego i obrotowego (dla $\\omega = \\frac{v}{R}$):\n$$E_{kin\\text{ post}} = \\frac{1}{2}mv^2$$\n$$E_{kin\\text{ obr}} = \\frac{1}{2}I_0\\omega^2 = \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4}mv^2$$\n$$E_{kin\\text{ całk}} = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$$\nSzukany iloraz wynosi:\n$$\\frac{E_{kin\\text{ post}}}{E_{kin\\text{ całk}}} = \\frac{\\frac{1}{2}mv^2}{\\frac{3}{4}mv^2} = \\frac{2}{3}$$"
    },
    {
      title: "Zadanie 2.2",
      content: "Siła $\\vec{F}$ działa w osi walca, a siła tarcia statycznego $\\vec{T}$ w punkcie styku (w lewo) wprawia walec w obrót. Zapisujemy układ równań dynamiki:\n$$\\begin{cases} F - T = ma \\\\ T \\cdot R = I_0 \\varepsilon \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$\nZ drugiego równania po podstawieniu $I_0 = \\frac{1}{2}mR^2$ i $\\varepsilon = \\frac{a}{R}$:\n$$T \\cdot R = \\frac{1}{2}mR^2 \\cdot \\frac{a}{R} \\implies T = \\frac{1}{2}ma$$\nPodstawiamy $T = \\frac{1}{2}ma$ do pierwszego równania:\n$$F - \\frac{1}{2}ma = ma \\implies F = \\frac{3}{2}ma \\implies a = \\frac{2F}{3m} = \\frac{2 \\cdot 30\\text{ N}}{3 \\cdot 10\\text{ kg}} = 2\\text{ m/s}^2$$"
    }
  ],
  numerical: "2.1: $\\frac{2}{3}$; 2.2: $a = 2\\text{ m/s}^2$",
  answer: "2.1: $\\frac{E_{kin\\text{ post}}}{E_{kin\\text{ całk}}} = \\frac{2}{3}$;\n2.2: $a = 2\\text{ m/s}^2$.",
  trap: "Nie można liczyć $a = F/m = 3\\text{ m/s}^2$, ponieważ część siły $F$ jest równoważona przez tarcie statyczne $T$ wprawiające walec w ruch obrotowy.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf#page=7\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 7–12</a>."
});

// 9. Matura czerwiec 2023 zad. 3
setSolution('sub-bryla-matura', 'matura-cke-bryla-2023-czerwiec-zad-3', {
  intuition: "W powietrzu belka podparta w środku jest w równowadze, więc masy klocków są równe ($m_A = m_B$). Po zanurzeniu w wodzie na większy klocek B działa większa siła wyporu, więc ciężarek C równoważy różnicę sił wyporu.",
  givens: "$a_A = 2\\text{ cm} = 0{,}02\\text{ m}$, $a_B = 4\\text{ cm} = 0{,}04\\text{ m}$, $\\rho_w = 1000\\text{ kg/m}^3$, podparcie w środku belki ($r_A = r_B = \\frac{l}{2}$).",
  steps: [
    {
      title: "Zadanie 3.1",
      content: "W pierwszym etapie (w powietrzu) ramiona są równe, więc z równowagi momentów $m_A g \\cdot \\frac{l}{2} = m_B g \\cdot \\frac{l}{2} \\implies m_A = m_B$.\nPo zanurzeniu w wodzie na klocki działają siły wyporu $F_{wA} = \\rho_w V_A g$ oraz $F_{wB} = \\rho_w V_B g$, gdzie:\n$$V_A = a_A^3 = 8\\text{ cm}^3 = 8 \\cdot 10^{-6}\\text{ m}^3, \\qquad V_B = a_B^3 = 64\\text{ cm}^3 = 64 \\cdot 10^{-6}\\text{ m}^3$$\nSiły naciągu nici wynoszą $F_{nA} = m_A g - F_{wA}$ oraz $F_{nB} = m_B g - F_{wB}$. Z równowagi momentów po położeniu ciężarka C na końcu nad klockiem B:\n$$(m_A g - \\rho_w V_A g)\\frac{l}{2} = (m_B g - \\rho_w V_B g + m_C g)\\frac{l}{2}$$\nPo skróceniu $\\frac{l}{2}g$ i wykorzystaniu $m_A = m_B$:\n$$m_C = \\rho_w (V_B - V_A) = 1000\\text{ kg/m}^3 \\cdot (64 - 8) \\cdot 10^{-6}\\text{ m}^3 = 0{,}056\\text{ kg} = 56\\text{ g}$$"
    },
    {
      title: "Zadanie 3.2",
      content: "1. P – lewa strona przeważa ($F_{nA} > F_{nB}$), więc zmniejszenie ramienia klocka A przywraca równowagę momentów.\n2. F – przesunięcie podpory $O$ w stronę klocka B zwiększyłoby ramię silniejszej strony A i jeszcze bardziej zachwiało równowagę.\n3. P – ponieważ $m_C = \\rho_{\\text{cieczy}}(V_B - V_A)$, w cieczy o mniejszej gęstości wystarczy ciężarek o mniejszej masie."
    }
  ],
  numerical: "3.1: $m_C = 56\\text{ g}$; 3.2: 1 – P, 2 – F, 3 – P",
  answer: "3.1: $m_C = 56\\text{ g}$ ($0{,}056\\text{ kg}$);\n3.2: 1 – P, 2 – F, 3 – P.",
  trap: "Objętość sześcianu rośnie z sześcianem krawędzi ($V = a^3$), więc dwukrotnie większa krawędź daje aż 8 razy większą objętość i siłę wyporu.",
  source: "Opracowano na podstawie oficjalnych zasad oceniania CKE. <a href=\"data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 10–11</a>."
});

// 10. Matura maj 2023 zad. 3
setSolution('sub-bryla-matura', 'matura-cke-bryla-2023-maj-zad-3', {
  intuition: "Przyśpieszenie układu złożonego z walca i wiszącego ciężarka wyznaczamy najprościej z układu równań II zasady dynamiki (dla ciężarka oraz dla ruchu postępowego i obrotowego walca).",
  givens: "Walec: masa $m$, promień $R$, $I = \\frac{1}{2}mR^2$. Ciężarek: masa $m$. Toczenie bez poślizgu ($v = \\omega R$, $a = \\varepsilon R$).",
  steps: [
    {
      title: "Zadanie 3.1",
      content: "1. P – przy toczeniu bez poślizgu w czasie jednego pełnego obrotu środek walca przebywa drogę równą obwodowi $2\\pi R$.\n2. P – dla walca $E_{\\text{post}} = \\frac{1}{2}mv^2$, a $E_{\\text{obr}} = \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4}mv^2$, więc $E_{\\text{post}} > E_{\\text{obr}}$.\n3. F – część energii potencjalnej ciężarka zamienia się także w energię kinetyczną samego opadającego ciężarka ($\\frac{1}{2}mv^2$)."
    },
    {
      title: "Zadanie 3.2",
      content: "Oznaczamy siłę naciągu linki jako $F_n$, a siłę tarcia statycznego (skierowaną w lewo) jako $T$. Zapisujemy układ równań dynamiki dla ciężarka oraz walca:\n$$\\begin{cases} mg - F_n = ma \\\\ F_n - T = ma \\\\ T \\cdot R = I\\varepsilon \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$\nZ trzeciego równania po podstawieniu $I = \\frac{1}{2}mR^2$ i $\\varepsilon = \\frac{a}{R}$ otrzymujemy:\n$$T \\cdot R = \\frac{1}{2}mR^2 \\cdot \\frac{a}{R} \\implies T = \\frac{1}{2}ma$$\nDodajemy stronami pierwsze i drugie równanie, aby wyeliminować $F_n$:\n$$mg - T = 2ma$$\nPodstawiamy $T = \\frac{1}{2}ma$:\n$$mg - \\frac{1}{2}ma = 2ma \\implies mg = \\frac{5}{2}ma \\implies a = \\frac{2}{5}g$$"
    }
  ],
  numerical: "3.1: 1 – P, 2 – P, 3 – F; 3.2: $a = \\frac{2}{5}g$",
  answer: "3.1: 1 – P, 2 – P, 3 – F;\n3.2: $a = \\frac{2}{5}g$.",
  trap: "Jeśli rozwiązujesz zadanie z zasady zachowania energii, pamiętaj o uwzględnieniu energii kinetycznej opadającego ciężarka: $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{5}{4}mv^2$.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf#page=9\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 9–12</a>."
});

// 11. Arkusz pokazowy 2023 zad. 2 (plus naprawa \ne w problem)
setSolution('sub-bryla-matura', 'matura-cke-bryla-2023-pokazowy-zad-2', {
  intuition: "Podczas poślizgu stała siła tarcia kinetycznego rozpędza ruch postępowy walca i hamuje jego obrót. Poślizg ustaje w chwili $t_1$, gdy spełniony zostanie warunek $v_1 = \\omega_1 R$.",
  givens: "Walec: masa $m$, promień $R$, $I = \\frac{1}{2}mR^2$, $v_0 = 0$, początkowa prędkość kątowa $\\omega_0$, stała siła tarcia $T$.",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "Walec obraca się zgodnie z ruchem wskazówek zegara, więc jego dolna powierzchnia w punkcie $A$ ślizga się względem podłoża w lewo. Siła tarcia kinetycznego $\\vec{T}$ przeciwdziała poślizgowi, dlatego jest skierowana poziomo w prawo:\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2023-pokazowy-z2-rozwiazanie.png\" alt=\"Oficjalny rysunek rozwiązania CKE — siła tarcia\" class=\"theory-img\" style=\"max-height:260px;display:block;margin:15px auto;\"></div>"
    },
    {
      title: "Zadanie 2.2",
      content: "Siła tarcia $\\vec{T}$ działa w prawo, więc nadaje środkowi masy przyśpieszenie $a = \\frac{T}{m}$ (ruch postępowy jest przyśpieszony – B). Jednocześnie jej moment $M = T R$ hamuje obrót walca, więc prędkość kątowa się zmniejsza (wybór 3). Odpowiedź: B3."
    },
    {
      title: "Zadanie 2.3",
      content: "Zapisujemy układ równań dla ruchu postępowego i obrotowego podczas poślizgu (od $t_0 = 0$ do chwili $t_1$, gdy $v_1 = \\omega_1 R$):\n$$\\begin{cases} a = \\frac{T}{m} \\implies v_1 = \\frac{T}{m}t_1 \\\\ \\varepsilon = \\frac{T R}{I} = \\frac{T R}{\\frac{1}{2}mR^2} = \\frac{2T}{mR} \\\\ \\omega_1 = \\omega_0 - \\varepsilon t_1 \\\\ v_1 = \\omega_1 R \\end{cases}$$\nPodstawiamy $\\varepsilon = \\frac{2T}{mR}$ do równania prędkości kątowej:\n$$\\omega_1 = \\omega_0 - \\frac{2T}{mR}t_1 = \\omega_0 - \\frac{2}{R}\\left(\\frac{T}{m}t_1\\right) = \\omega_0 - \\frac{2v_1}{R}$$\nPonieważ w chwili $t_1$ zachodzi $\\frac{v_1}{R} = \\omega_1$, otrzymujemy:\n$$\\omega_1 = \\omega_0 - 2\\omega_1 \\implies 3\\omega_1 = \\omega_0 \\implies \\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$$"
    }
  ],
  numerical: "2.1: $\\vec{T}$ w prawo; 2.2: B3; 2.3: $\\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$",
  answer: "2.1: Wektor $\\vec{T}$ w punkcie $A$ skierowany poziomo w prawo;\n2.2: B3;\n2.3: $\\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$.",
  trap: "Podczas poślizgu nie zachodzi $a = \\varepsilon R$. Warunek $v_1 = \\omega_1 R$ stosujemy dopiero w chwili $t_1$, gdy poślizg ustaje.",
  source: "Opracowano na podstawie oficjalnych zasad oceniania CKE. <a href=\"data/arkusze_cke/2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 5–7</a>."
}, (prob) => prob.replace('$a\ne\\varepsilon R$', '$a\\ne\\varepsilon R$'));

// 12 & 13. Informator maturalny 2025 & 2023 zad. 4 – Kołowrót
function makeInformatorZad4(imgFile, sourceUrl) {
  return {
    intuition: "O kierunku obrotu kołowrotu decyduje większy moment siły ciężkości ($M_i = m_i g R_i$). Przyśpieszenie $a_1$ wyznaczamy z układu równań dynamiki dla obu ciężarków i połączonych walców.",
    givens: "$R_1 = 0{,}05\\text{ m}$, $M_1 = 3\\text{ kg}$, $m_1 = 2\\text{ kg}$; $R_2 = 0{,}12\\text{ m}$, $M_2 = 8\\text{ kg}$, $m_2 = 1\\text{ kg}$; $I = \\frac{1}{2}M_1 R_1^2 + \\frac{1}{2}M_2 R_2^2$; $g = 9{,}81\\text{ m/s}^2$.",
    steps: [
      {
        title: "Zadanie 4.1",
        content: "Porównujemy momenty sił ciężkości obu ciężarków względem osi obrotu:\n$$M_1 = m_1 g R_1 = 2\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}05\\text{ m} \\approx 0{,}98\\text{ N}\\cdot\\text{m}$$\n$$M_2 = m_2 g R_2 = 1\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}12\\text{ m} \\approx 1{,}18\\text{ N}\\cdot\\text{m}$$\nPonieważ $M_2 > M_1$, ciężarek $m_2$ zacznie opadać, a ciężarek $m_1$ zacznie się wznosić."
      },
      {
        title: "Zadanie 4.2",
        content: "Oznaczamy siły naciągu sznurków jako $F_1$ i $F_2$ (zgodnie ze schematem CKE) oraz ciężary $Q_1 = m_1 g$, $Q_2 = m_2 g$:\n<div class=\"chart-container-svg\"><img src=\"img/rigid/" + imgFile + "\" alt=\"Oficjalny schemat sił CKE — kołowrót\" class=\"theory-img\" style=\"max-height:390px;display:block;margin:15px auto;\"></div>\nZapisujemy układ równań dynamiki dla kołowrotu i obu ciężarków:\n$$\\begin{cases} I\\varepsilon = R_2 F_2 - R_1 F_1 \\\\ m_2 a_2 = m_2 g - F_2 \\\\ m_1 a_1 = F_1 - m_1 g \\\\ a_1 = \\varepsilon R_1, \\quad a_2 = \\varepsilon R_2 \\end{cases}$$\nWyznaczamy $F_1 = m_1(g + \\varepsilon R_1)$ i $F_2 = m_2(g - \\varepsilon R_2)$ i podstawiamy do pierwszego równania:\n$$I\\varepsilon = m_2(g - \\varepsilon R_2)R_2 - m_1(g + \\varepsilon R_1)R_1$$\n$$\\varepsilon = \\frac{g(m_2 R_2 - m_1 R_1)}{I + m_1 R_1^2 + m_2 R_2^2}$$\nObliczamy moment bezwładności kołowrotu $I$ i mianownik:\n$$I = \\frac{1}{2} \\cdot 3 \\cdot 0{,}05^2 + \\frac{1}{2} \\cdot 8 \\cdot 0{,}12^2 = 0{,}00375 + 0{,}0576 = 0{,}06135\\text{ kg}\\cdot\\text{m}^2$$\n$$I + m_1 R_1^2 + m_2 R_2^2 = 0{,}06135 + 2 \\cdot 0{,}05^2 + 1 \\cdot 0{,}12^2 = 0{,}08075\\text{ kg}\\cdot\\text{m}^2$$\nObliczamy $\\varepsilon$ oraz szukane przyśpieszenie $a_1$:\n$$\\varepsilon = \\frac{9{,}81 \\cdot (1 \\cdot 0{,}12 - 2 \\cdot 0{,}05)}{0{,}08075} = \\frac{9{,}81 \\cdot 0{,}02}{0{,}08075} \\approx 2{,}43\\text{ rad/s}^2$$\n$$a_1 = \\varepsilon R_1 = 2{,}43\\text{ rad/s}^2 \\cdot 0{,}05\\text{ m} \\approx 0{,}12\\text{ m/s}^2$$"
      }
    ],
    numerical: "4.1: ciężarek $m_1$ zacznie się wznosić; 4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$",
    answer: "4.1: Ciężarek $m_1$ zacznie się wznosić, ponieważ $M_2 > M_1$;\n4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$.",
    trap: "Nie porównuj samych mas ciężarków – decyduje moment siły $m_i g R_i$, a promień $R_2$ jest ponad dwukrotnie większy od $R_1$.",
    source: `Opracowano na podstawie oficjalnych zasad oceniania CKE. <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Oficjalne rozwiązanie CKE, s. 24–27</a>.`
  };
}

setSolution('sub-bryla-matura', 'matura-cke-bryla-informator-2025-zad-4', makeInformatorZad4('informator-2025-z4-rozwiazanie.png', 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2025.pdf'));
setSolution('sub-bryla-matura', 'matura-cke-bryla-informator-2023-zad-4', makeInformatorZad4('informator-2023-z4-rozwiazanie.png', 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf'));

// ============================================================================
// CZĘŚĆ B: UPROSZCZENIE ZADAŃ WPROWADZAJĄCYCH (brak różniczek, zwięzły styl)
// ============================================================================

// b-zad-10 (skrócenie z 3 kroków do 1 przejrzystego)
setSolution('sub-bryla-ruch', 'b-zad-10', {
  givens: "$r_1 = 0{,}10\\text{ m}$, $r_2 = 0{,}04\\text{ m}$, $R_{\\text{koła}} = 0{,}35\\text{ m}$, $\\omega_1 = 3\\text{ rad/s}$.",
  steps: [
    {
      title: "Prędkość łańcucha, tylnego koła i roweru",
      content: "Łańcuch porusza się z prędkością obwodową przedniej zębatki, która napędza tylną zębatkę:\n$$v_ł = \\omega_1 r_1 = 3\\text{ rad/s} \\cdot 0{,}10\\text{ m} = 0{,}30\\text{ m/s}$$\n$$\\omega_2 = \\frac{v_ł}{r_2} = \\frac{0{,}30\\text{ m/s}}{0{,}04\\text{ m}} = 7{,}5\\text{ rad/s}$$\nTylne koło ma tę samą prędkość kątową $\\omega_2$, więc prędkość roweru wynosi:\n$$v = \\omega_2 R_{\\text{koła}} = 7{,}5\\text{ rad/s} \\cdot 0{,}35\\text{ m} = 2{,}625\\text{ m/s} \\approx 2{,}63\\text{ m/s}$$"
    }
  ],
  numerical: "$v \\approx 2{,}63\\text{ m/s}$",
  answer: "Prędkość roweru wynosi $2{,}625\\text{ m/s} \\approx 2{,}63\\text{ m/s}$."
});

// b-zad-26 (skrócenie z 3 kroków do 1)
setSolution('sub-bryla-energia', 'b-zad-26', {
  givens: "$m = 2\\text{ kg}$, $v = 3\\text{ m/s}$, $I = \\frac{1}{2}mR^2$, $\\omega = \\frac{v}{R}$.",
  steps: [
    {
      title: "Energia postępowa, obrotowa i całkowita",
      content: "$$E_{\\text{post}} = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 2\\text{ kg} \\cdot (3\\text{ m/s})^2 = 9\\text{ J}$$\n$$E_{\\text{obr}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4}mv^2 = 4{,}5\\text{ J}$$\n$$E_k = E_{\\text{post}} + E_{\\text{obr}} = 9\\text{ J} + 4{,}5\\text{ J} = 13{,}5\\text{ J}$$"
    }
  ],
  numerical: "$E_{\\text{post}} = 9\\text{ J}$, $E_{\\text{obr}} = 4{,}5\\text{ J}$, $E_k = 13{,}5\\text{ J}$",
  answer: "Energia ruchu postępowego wynosi $9\\text{ J}$, obrotowego $4{,}5\\text{ J}$, a całkowita $13{,}5\\text{ J}$."
});

// b-zad-33 (układ równań zamiast gotowego wzoru z powietrza, z F_T)
setSolution('sub-bryla-energia', 'b-zad-33', {
  givens: "$s = 3\\text{ m}$, $\\alpha = 30^\\circ$, $I = \\frac{1}{2}mR^2$, $g = 10\\text{ m/s}^2$.",
  steps: [
    {
      title: "Przyśpieszenie walca z układu równań dynamiki",
      content: "Zapisujemy układ równań dla ruchu postępowego i obrotowego walca na równi ($F_T$ – siła tarcia statycznego):\n$$\\begin{cases} mg\\sin\\alpha - F_T = ma \\\\ F_T \\cdot R = I\\varepsilon \\\\ \\varepsilon = \\frac{a}{R} \\end{cases}$$\nZ drugiego równania dla $I = \\frac{1}{2}mR^2$ dostajemy $F_T = \\frac{1}{2}ma$. Podstawiamy do pierwszego równania:\n$$mg\\sin\\alpha - \\frac{1}{2}ma = ma \\implies a = \\frac{2}{3}g\\sin\\alpha = \\frac{2}{3} \\cdot 10 \\cdot \\frac{1}{2} = \\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$$"
    },
    {
      title: "Czas zjazdu i prędkość na dole równi",
      content: "Walec rusza ze spoczynku ($s = \\frac{1}{2}at^2$, $v = at$):\n$$t = \\sqrt{\\frac{2s}{a}} = \\sqrt{\\frac{2 \\cdot 3}{\\frac{10}{3}}} = \\sqrt{1{,}8}\\text{ s} \\approx 1{,}34\\text{ s}$$\n$$v = \\sqrt{2as} = \\sqrt{2 \\cdot \\frac{10}{3} \\cdot 3} = \\sqrt{20}\\text{ m/s} \\approx 4{,}47\\text{ m/s}$$"
    }
  ],
  numerical: "$a \\approx 3{,}33\\text{ m/s}^2$, $t \\approx 1{,}34\\text{ s}$, $v \\approx 4{,}47\\text{ m/s}$",
  answer: "Przyśpieszenie walca wynosi $\\frac{10}{3}\\text{ m/s}^2 \\approx 3{,}33\\text{ m/s}^2$, czas zjazdu ok. $1{,}34\\text{ s}$, a prędkość na dole równi $\\sqrt{20}\\text{ m/s} \\approx 4{,}47\\text{ m/s}$."
});

// b-zad-34 (USUNIĘCIE RÓŻNICZKI dW = F_s * dr = 0!)
setSolution('sub-bryla-energia', 'b-zad-34', {
  givens: "$v = 4\\text{ m/s}$, $I = \\frac{1}{2}mR^2$, $g = 10\\text{ m/s}^2$, toczenie bez poślizgu.",
  steps: [
    {
      title: "Maksymalna wysokość z zasady zachowania energii",
      content: "Początkowa całkowita energia kinetyczna walca zamienia się na maksymalnej wysokości w energię potencjalną grawitacji:\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{3}{4}mv^2$$\n$$h = \\frac{3v^2}{4g} = \\frac{3 \\cdot 4^2}{4 \\cdot 10} = 1{,}2\\text{ m}$$"
    },
    {
      title: "Rola siły tarcia statycznego",
      content: "Podczas toczenia bez poślizgu punkt styku walca z podłożem w każdej chwili chwilowo spoczywa względem równi. Dzięki temu siła tarcia statycznego nie wykonuje pracy ($W_T = 0$) i nie powoduje strat energii mechanicznej na ciepło."
    }
  ],
  numerical: "$h = 1{,}2\\text{ m}$",
  answer: "Maksymalna wysokość wynosi $1{,}2\\text{ m}$. Siła tarcia statycznego nie zmniejsza energii mechanicznej, ponieważ punkt styku chwilowo spoczywa ($W_T = 0$)."
});

// b-zad-40 (zwięźlej: 2 kroki zamiast 3)
setSolution('sub-bryla-moment-pedu', 'b-zad-40', {
  givens: "$M = 100\\text{ kg}$, $R = 2\\text{ m}$, $\\omega_0 = 2\\text{ rad/s}$, $m = 50\\text{ kg}$.",
  steps: [
    {
      title: "Początkowy i końcowy moment bezwładności",
      content: "Gdy osoba stoi na środku ($r = 0$), moment bezwładności ma tylko platforma:\n$$I_1 = \\frac{1}{2}MR^2 = \\frac{1}{2} \\cdot 100 \\cdot 2^2 = 200\\text{ kg}\\cdot\\text{m}^2$$\nPo przejściu osoby na brzeg ($r = R = 2\\text{ m}$):\n$$I_2 = I_1 + mR^2 = 200 + 50 \\cdot 2^2 = 400\\text{ kg}\\cdot\\text{m}^2$$"
    },
    {
      title: "Zasada zachowania momentu pędu",
      content: "$$I_1 \\omega_0 = I_2 \\omega_k \\implies 200 \\cdot 2 = 400 \\cdot \\omega_k \\implies \\omega_k = 1\\text{ rad/s}$$"
    }
  ],
  numerical: "$\\omega_k = 1\\text{ rad/s}$",
  answer: "Końcowa prędkość kątowa platformy wynosi $1\\text{ rad/s}$."
});

// b-zad-42 (zwięźlej: 2 kroki zamiast 4)
setSolution('sub-bryla-moment-pedu', 'b-zad-42', {
  givens: "$m = 0{,}020\\text{ kg}$, $v = 200\\text{ m/s}$, $M = 1{,}2\\text{ kg}$, $l = 1{,}0\\text{ m}$, $r = \\frac{l}{2} = 0{,}50\\text{ m}$.",
  steps: [
    {
      title: "Prędkość kątowa z zasady zachowania momentu pędu",
      content: "Początkowy moment pędu pocisku względem osi obrotu pręta:\n$$L_1 = mvr = 0{,}020 \\cdot 200 \\cdot 0{,}50 = 2\\text{ kg}\\cdot\\text{m}^2/\\text{s}$$\nMoment bezwładności pręta z wbitym pociskiem:\n$$I = \\frac{1}{12}Ml^2 + mr^2 = \\frac{1}{12} \\cdot 1{,}2 \\cdot 1^2 + 0{,}020 \\cdot 0{,}50^2 = 0{,}10 + 0{,}005 = 0{,}105\\text{ kg}\\cdot\\text{m}^2$$\nZ zasady zachowania momentu pędu ($L_1 = I\\omega$):\n$$\\omega = \\frac{L_1}{I} = \\frac{2}{0{,}105} = \\frac{400}{21}\\text{ rad/s} \\approx 19{,}0\\text{ rad/s}$$"
    },
    {
      title: "Ubytek energii kinetycznej",
      content: "$$E_1 = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 0{,}020 \\cdot 200^2 = 400\\text{ J}$$\n$$E_2 = \\frac{1}{2}I\\omega^2 = \\frac{1}{2} \\cdot 0{,}105 \\cdot \\left(\\frac{400}{21}\\right)^2 \\approx 19{,}0\\text{ J}$$\n$$\\Delta E = E_1 - E_2 = 400 - 19{,}0 = 381\\text{ J}$$"
    }
  ],
  numerical: "$\\omega \\approx 19{,}0\\text{ rad/s}$, $\\Delta E \\approx 381\\text{ J}$",
  answer: "Prędkość kątowa tuż po zderzeniu wynosi ok. $19{,}0\\text{ rad/s}$, a ubytek energii kinetycznej ok. $381\\text{ J}$."
});

// b-zad-43 (zwięźlej: 2 kroki zamiast 3)
setSolution('sub-bryla-moment-pedu', 'b-zad-43', {
  givens: "$I_0 = 0{,}40\\text{ kg}\\cdot\\text{m}^2$, $\\omega_0 = 10\\text{ rad/s}$, $m = 0{,}20\\text{ kg}$, $r = 0{,}50\\text{ m}$.",
  steps: [
    {
      title: "Końcowa prędkość kątowa z zasady zachowania momentu pędu",
      content: "Po przyklejeniu plasteliny moment bezwładności wynosi $I_k = I_0 + mr^2 = 0{,}40 + 0{,}20 \\cdot 0{,}50^2 = 0{,}45\\text{ kg}\\cdot\\text{m}^2$. Z zasady zachowania momentu pędu:\n$$I_0 \\omega_0 = I_k \\omega_k \\implies \\omega_k = \\frac{0{,}40 \\cdot 10}{0{,}45} = \\frac{80}{9}\\text{ rad/s} \\approx 8{,}89\\text{ rad/s}$$"
    },
    {
      title: "Ubytek energii kinetycznej",
      content: "$$E_1 = \\frac{1}{2}I_0\\omega_0^2 = \\frac{1}{2} \\cdot 0{,}40 \\cdot 10^2 = 20\\text{ J}$$\n$$E_2 = \\frac{1}{2}I_k\\omega_k^2 = \\frac{1}{2} \\cdot 0{,}45 \\cdot \\left(\\frac{80}{9}\\right)^2 \\approx 17{,}78\\text{ J}$$\n$$\\Delta E = E_1 - E_2 = 20 - 17{,}78 = 2{,}22\\text{ J}$$"
    }
  ],
  numerical: "$\\omega_k \\approx 8{,}89\\text{ rad/s}$, $\\Delta E \\approx 2{,}22\\text{ J}$",
  answer: "Końcowa prędkość kątowa wynosi $\\frac{80}{9}\\text{ rad/s} \\approx 8{,}89\\text{ rad/s}$, a ubytek energii ok. $2{,}22\\text{ J}$."
});

// b-zad-44 (zwięźlej: 2 kroki zamiast 3)
setSolution('sub-bryla-moment-pedu', 'b-zad-44', {
  givens: "$I_1 = 0{,}20\\text{ kg}\\cdot\\text{m}^2$, $\\omega_1 = 20\\text{ rad/s}$, $I_2 = 0{,}30\\text{ kg}\\cdot\\text{m}^2$, $\\omega_2 = 0$.",
  steps: [
    {
      title: "Wspólna prędkość kątowa",
      content: "Z zasady zachowania momentu pędu:\n$$I_1 \\omega_1 = (I_1 + I_2)\\omega_k \\implies 0{,}20 \\cdot 20 = 0{,}50\\,\\omega_k \\implies \\omega_k = 8\\text{ rad/s}$$"
    },
    {
      title: "Ubytek energii kinetycznej",
      content: "$$E_1 = \\frac{1}{2}I_1\\omega_1^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 20^2 = 40\\text{ J}$$\n$$E_2 = \\frac{1}{2}(I_1 + I_2)\\omega_k^2 = \\frac{1}{2} \\cdot 0{,}50 \\cdot 8^2 = 16\\text{ J}$$\n$$\\Delta E = 40 - 16 = 24\\text{ J}, \\qquad \\frac{\\Delta E}{E_1} \\cdot 100\\% = \\frac{24}{40} \\cdot 100\\% = 60\\%$$"
    }
  ],
  numerical: "$\\omega_k = 8\\text{ rad/s}$, $\\Delta E = 24\\text{ J}$ ($60\\%$)",
  answer: "Wspólna prędkość kątowa wynosi $8\\text{ rad/s}$, a ubytek energii $24\\text{ J}$ ($60\\%$ energii początkowej)."
});

const output = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync(file, output, 'utf8');
console.log('Pomyślnie zaktualizowano wszystkie rozwiązania w dziale Bryła sztywna!');

