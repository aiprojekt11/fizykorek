const fs = require('fs');
const vm = require('vm');

const content = fs.readFileSync('js/data-courses.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const courses = sandbox.window.FIZYKOREK_COURSES;
const course = courses['matura-fizyka'];
const praca = course.sections.find(s => s.id === 'm-praca');
const dynamika = course.sections.find(s => s.id === 'm-dynamika');

// Helper to find task by id in m-praca
function setPracaSolution(taskId, newSol) {
  for (const sub of praca.subchapters) {
    const task = (sub.tasks || []).find(t => t.id === taskId);
    if (task) {
      task.solution = newSol;
      return;
    }
  }
  throw new Error('Task not found: ' + taskId);
}

// ============================================================================
// 1. ZADANIA MATURALNE CKE W DZIALE PRACA, MOC I ENERGIA (sub-praca-matura)
// ============================================================================

setPracaSolution('matura-cke-praca-2026-czerwiec-zad-3', {
  intuition: "W chwili maksymalnego ściśnięcia sprężyny oba klocki poruszają się z jednakową prędkością $v_2$. Prędkość $v_2$ wyznaczamy z zasady zachowania pędu, a maksymalne odkształcenie $\\Delta x_{max}$ z zasady zachowania energii mechanicznej.",
  givens: "$m_A = m_B = m$, prędkość początkowa klocka A: $v_1$, klocek B początkowo spoczywa, współczynnik sprężystości $k$.",
  steps: [
    {
      title: "Zadanie 3.1",
      content: "1. P – masę sprężyny pomijamy, więc zgodnie z III zasadą dynamiki sprężyna działa na oba klocki siłami o tej samej wartości $F = k\\Delta x_{max}$.\n2. P – w chwili maksymalnego ściśnięcia sprężyny wartości prędkości obu klocków są równe ($v_2$), więc ich prędkość względna wynosi zero."
    },
    {
      title: "Zadanie 3.2",
      content: "Z zasady zachowania pędu wyznaczamy prędkość $v_2$ obu klocków w chwili maksymalnego ściśnięcia sprężyny:\n$$mv_1 = (m + m)v_2 \\implies v_2 = \\frac{1}{2}v_1$$\nZ zasady zachowania energii mechanicznej początkowa energia kinetyczna klocka A jest równa sumie energii kinetycznej obu klocków i energii potencjalnej sprężystości:\n$$\\frac{1}{2}mv_1^2 = \\frac{1}{2}(2m)v_2^2 + \\frac{1}{2}k(\\Delta x_{max})^2$$\nPodstawiamy $v_2 = \\frac{1}{2}v_1$:\n$$\\frac{1}{2}mv_1^2 = m\\left(\\frac{v_1}{2}\\right)^2 + \\frac{1}{2}k(\\Delta x_{max})^2$$\n$$\\frac{1}{4}mv_1^2 = \\frac{1}{2}k(\\Delta x_{max})^2 \\implies \\Delta x_{max} = v_1\\sqrt{\\frac{m}{2k}}$$"
    }
  ],
  answer: "3.1: 1 – P, 2 – P;\n3.2: $\\Delta x_{max} = v_1\\sqrt{\\frac{m}{2k}}$.",
  trap: "W chwili maksymalnego ściśnięcia sprężyny klocki się nie zatrzymują – oba poruszają się dalej z prędkością $v_2 = \\frac{1}{2}v_1$.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–11</a>."
});

const sol2026MajZad2 = {
  intuition: "Promień okręgu jest prostopadły do wektora prędkości. W najniższym i najwyższym położeniu łączymy II zasadę dynamiki dla ruchu po okręgu z zasadą zachowania energii mechanicznej.",
  givens: "Długość nici (promień okręgu) $l$, masa ciała $m$, $\\frac{v_{max}}{v_{min}} = \\sqrt{3}$.",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "Wektor prędkości w ruchu po okręgu jest styczny do toru, więc promień łączący ciało ze środkiem okręgu $S$ jest prostopadły do wektora prędkości. Prowadzimy proste prostopadłe do obu wektorów prędkości w punktach ich przyłożenia:\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>\nPunkt przecięcia tych prostych wyznacza środek okręgu $S$. Odliczając kratki wzdłuż pionowego promienia od środka $S$ do położenia ciała, odczytujemy długość promienia:\n$$l = 10\\text{ długości boku kratki}$$"
    },
    {
      title: "Zadanie 2.2",
      content: "W najniższym położeniu wypadkowa siła dośrodkowa jest skierowana pionowo w górę (w stronę środka okręgu $S$):\n$$F_d = F_n - F_g = \\frac{mv_{max}^2}{l} > 0 \\implies F_n > F_g$$\nWektor siły reakcji nici $\\vec{F}_n$ (w górę) musi być dłuższy od wektora ciężaru $\\vec{F}_g$ (w dół). Odpowiedź: B."
    },
    {
      title: "Zadanie 2.3",
      content: "Siła reakcji nici jest największa w najniższym położeniu ($v_{max}$), a najmniejsza w najwyższym położeniu ($v_{min}$). Z II zasady dynamiki:\n$$F_{n\\,max} - mg = \\frac{mv_{max}^2}{l} \\implies F_{n\\,max} = \\frac{mv_{max}^2}{l} + mg$$\n$$F_{n\\,min} + mg = \\frac{mv_{min}^2}{l} \\implies F_{n\\,min} = \\frac{mv_{min}^2}{l} - mg$$\nZ zasady zachowania energii mechanicznej między najniższym a najwyższym punktem toru (różnica wysokości $h = 2l$):\n$$\\frac{1}{2}mv_{max}^2 = \\frac{1}{2}mv_{min}^2 + mg(2l) \\implies \\frac{mv_{max}^2}{l} = \\frac{mv_{min}^2}{l} + 4mg$$\nPonieważ $\\frac{v_{max}}{v_{min}} = \\sqrt{3}$, więc $v_{max}^2 = 3v_{min}^2$. Podstawiamy do równania energii:\n$$3\\frac{mv_{min}^2}{l} = \\frac{mv_{min}^2}{l} + 4mg \\implies \\frac{mv_{min}^2}{l} = 2mg \\quad\\text{oraz}\\quad \\frac{mv_{max}^2}{l} = 6mg$$\nObliczamy wartości sił reakcji nici i ich iloraz:\n$$F_{n\\,max} = 6mg + mg = 7mg, \\qquad F_{n\\,min} = 2mg - mg = mg$$\n$$\\frac{F_{n\\,max}}{F_{n\\,min}} = \\frac{7mg}{mg} = 7$$"
    }
  ],
  answer: "2.1: Konstrukcja na rysunku, $l = 10$ długości boku kratki;\n2.2: B;\n2.3: $\\frac{F_{n\\,max}}{F_{n\\,min}} = 7$.",
  trap: "W najwyższym punkcie toru siła ciężkości i siła reakcji nici mają ten sam zwrot (w dół, do środka okręgu), dlatego $F_{n\\,min} = \\frac{mv_{min}^2}{l} - mg$.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-maj-matura-rozszerzona-odpowiedzi.pdf#page=10\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 10–14</a>."
};

setPracaSolution('matura-cke-praca-2026-maj-zad-2', sol2026MajZad2);

// Also update the duplicate in m-dynamika so both places have the clean solution
if (dynamika) {
  for (const sub of dynamika.subchapters) {
    const dynTask = (sub.tasks || []).find(t => t.id === 'matura-cke-2026-maj-zad-2');
    if (dynTask) {
      dynTask.solution = JSON.parse(JSON.stringify(sol2026MajZad2));
    }
  }
}

setPracaSolution('matura-cke-praca-2026-styczen-zad-2', {
  intuition: "Siły wzajemnego oddziaływania kul są równe co do wartości i przeciwnie zwrócone (III zasada dynamiki). Iloraz mas wyznaczamy z układu równań zasady zachowania pędu i zasady zachowania energii kinetycznej.",
  givens: "Przed zderzeniem: kula K1 ma prędkość $v_1$, kula K2 spoczywa. Po zderzeniu: obie kule mają przeciwne zwroty i jednakową wartość prędkości $v_2$.",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "Zgodnie z III zasadą dynamiki Newtona podczas zderzenia kule działają na siebie siłami o tym samym kierunku, przeciwnych zwrotach i równych wartościach ($F_{21} = F_{12}$):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-sily-rozwiazanie.png\" alt=\"Rysunek wektorów sił według klucza CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>\nW środku kuli K1 przykładamy wektor $\\vec{F}_{21}$ zwrócony w lewo, a w środku kuli K2 wektor $\\vec{F}_{12}$ zwrócony w prawo. Oba wektory mają jednakową długość (po 5 kratek)."
    },
    {
      title: "Zadanie 2.2",
      content: "Zapisujemy zasadę zachowania pędu (oś $x$ skierowana w prawo) oraz zasadę zachowania energii kinetycznej:\n$$\\begin{cases} m_1 v_1 = -m_1 v_2 + m_2 v_2 \\\\ \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2}m_1 v_2^2 + \\frac{1}{2}m_2 v_2^2 \\end{cases} \\implies \\begin{cases} m_1(v_1 + v_2) = m_2 v_2 \\\\ m_1(v_1^2 - v_2^2) = m_2 v_2^2 \\end{cases}$$\nDzielimy drugie równanie stronami przez pierwsze, korzystając ze wzoru $v_1^2 - v_2^2 = (v_1 - v_2)(v_1 + v_2)$:\n$$v_1 - v_2 = v_2 \\implies v_1 = 2v_2$$\nPodstawiamy $v_1 = 2v_2$ do równania pędu:\n$$m_1(2v_2 + v_2) = m_2 v_2 \\implies 3m_1 v_2 = m_2 v_2 \\implies \\frac{m_2}{m_1} = 3$$"
    }
  ],
  answer: "2.1: Wektory sił o równych długościach i przeciwnych zwrotach zaczepione w środkach kul;\n2.2: $\\frac{m_2}{m_1} = 3$.",
  trap: "Niezależnie od różnicy mas kul, siły wzajemnego oddziaływania w trakcie zderzenia mają identyczne wartości ($F_{21} = F_{12}$).",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–12</a>."
});

setPracaSolution('matura-cke-praca-2023-czerwiec-zad-2', {
  intuition: "W centralnym zderzeniu sprężystym kule o jednakowych masach wymieniają się wektorami prędkości. Gdy kule łączą się trwale, wspólną prędkość wyznaczamy z zasady zachowania pędu.",
  givens: "$m_1 = m_2 = m$, przed zderzeniem: $v_1 = 2v_2$ (w prawo), $v_2$ (w lewo).",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "W centralnym zderzeniu doskonale sprężystym dwie kule o równych masach wymieniają się prędkościami:\n$$\\vec{v}_1' = \\vec{v}_2, \\qquad \\vec{v}_2' = \\vec{v}_1$$\nPo zderzeniu kula K1 porusza się w lewo z prędkością o wartości $v_2$, a kula K2 w prawo z prędkością o wartości $2v_2$. Odpowiedź: B."
    },
    {
      title: "Zadanie 2.2",
      content: "Z zasady zachowania pędu (oś $x$ skierowana w prawo) wyznaczamy prędkość $u$ połączonych kul:\n$$mv_1 - mv_2 = (m + m)u$$\nPodstawiamy $v_1 = 2v_2$:\n$$m(2v_2) - mv_2 = 2mu \\implies u = \\frac{1}{2}v_2$$\nObliczamy łączną energię kinetyczną przed zderzeniem ($E_{k\\,pocz}$) oraz po zderzeniu ($E_{k\\,kon}$):\n$$E_{k\\,pocz} = \\frac{1}{2}m(2v_2)^2 + \\frac{1}{2}mv_2^2 = \\frac{5}{2}mv_2^2 = 2{,}5\\,mv_2^2$$\n$$E_{k\\,kon} = \\frac{1}{2}(2m)u^2 = m\\left(\\frac{1}{2}v_2\\right)^2 = \\frac{1}{4}mv_2^2 = 0{,}25\\,mv_2^2$$\nUtracona część początkowej energii kinetycznej wynosi:\n$$\\frac{\\Delta E_k}{E_{k\\,pocz}} = \\frac{E_{k\\,pocz} - E_{k\\,kon}}{E_{k\\,pocz}} = \\frac{2{,}5\\,mv_2^2 - 0{,}25\\,mv_2^2}{2{,}5\\,mv_2^2} = \\frac{2{,}25}{2{,}5} = 0{,}9 = \\frac{9}{10}\\quad (90\\%)$$"
    }
  ],
  answer: "2.1: B;\n2.2: Układ utracił $\\frac{9}{10}$ (czyli $0{,}9$ lub $90\\%$) początkowej energii kinetycznej.",
  trap: "Kule poruszają się w przeciwne strony, więc ich pędy początkowe mają przeciwne znaki: $p_{pocz} = mv_1 - mv_2 = mv_2$.",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf#page=7\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 7–10</a>."
});

setPracaSolution('matura-cke-praca-2023-maj-zad-2', {
  intuition: "Przy braku tarcia krążki oddziałują na siebie wyłącznie wzdłuż prostej łączącej ich środki (oś $x$). Składowa prędkości wzdłuż osi $y$ nie ulega zmianie.",
  givens: "Masy krążków są równe ($m_1 = m_2 = m$), krążek K2 początkowo spoczywa, brak tarcia, zderzenie doskonale sprężyste.",
  steps: [
    {
      title: "Zadanie 2.1",
      content: "Ponieważ pomijamy tarcie, siły wzajemnego oddziaływania są prostopadłe do powierzchni styku i działają wzdłuż prostej łączącej środki krążków (równolegle do osi $x$):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-sily-rozwiazanie.png\" alt=\"Siły działające podczas zderzenia krążków według klucza CKE\" class=\"theory-img\" style=\"max-height:340px;display:block;margin:15px auto;\"></div>\nZgodnie z III zasadą dynamiki siła $\\vec{F}_{12}$ (działająca na krążek K1, zwrócona w lewo) oraz siła $\\vec{F}_{21}$ (działająca na krążek K2, zwrócona w prawo) mają równe wartości (po 4 kratki) i przeciwne zwroty."
    },
    {
      title: "Zadanie 2.2",
      content: "Rozpatrujemy ruch krążków wzdłuż obu osi układu współrzędnych:\n- Wzdłuż osi $y$ nie działa żadna siła, więc składowa pionowa prędkości krążka K1 nie zmienia się ($\\vec{v}_{1y}' = \\vec{v}_y$), a krążek K2 nie uzyskuje prędkości wzdłuż osi $y$ ($v_{2y}' = 0$).\n- Wzdłuż osi $x$ zachodzi centralne zderzenie sprężyste ciał o równych masach, więc krążki wymieniają się składowymi poziomymi prędkości ($v_{1x}' = 0$, $\\vec{v}_{2x}' = \\vec{v}_x$).\nPo zderzeniu krążek K1 porusza się pionowo w dół z prędkością $\\vec{v}_1' = \\vec{v}_y$, a krążek K2 poziomo w prawo z prędkością $\\vec{v}_2' = \\vec{v}_x$. Odpowiedź: C."
    }
  ],
  answer: "2.1: Siły $\\vec{F}_{12}$ i $\\vec{F}_{21}$ wzdłuż osi $x$, o równych długościach i przeciwnych zwrotach;\n2.2: C.",
  trap: "Bez tarcia między krążkami nie można przekazać pędu w kierunku stycznym (wzdłuż osi $y$).",
  source: "Opracowano na podstawie zasad oceniania CKE. <a href=\"https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf#page=8\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odpowiedzi CKE, s. 8–9</a>."
});

function makeInformatorZad2(sourceUrl) {
  return {
    intuition: "Prędkość tuż przed uderzeniem wyznaczamy z zasady zachowania energii mechanicznej, czas spadania ze wzoru na prędkość w ruchu jednostajnie przyśpieszonym, a siłę reakcji podłoża z II zasady dynamiki ($F_w = \\Delta p / \\Delta t$).",
    givens: "$m = 0{,}250\\text{ kg}$, $h = 1{,}80\\text{ m}$, $v_0 = 3{,}20\\text{ m/s}$, $\\Delta t = 5{,}00 \\cdot 10^{-3}\\text{ s}$, $g = 9{,}81\\text{ m/s}^2$, strata energii przy odbiciu: $25\\%$.",
    steps: [
      {
        title: "Zadanie 2.1",
        content: "Z równania ruchu jednostajnie przyśpieszonego $h = v_0 t + \\frac{1}{2}gt^2$ (lub korzystając z wyznaczonej w zadaniu 2.2 prędkości końcowej $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$):\n$$v_1 = v_0 + gt \\implies t = \\frac{v_1 - v_0}{g}$$\n$$t = \\frac{6{,}75\\text{ m/s} - 3{,}20\\text{ m/s}}{9{,}81\\text{ m/s}^2} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
      },
      {
        title: "Zadanie 2.2",
        content: "Z zasady zachowania energii mechanicznej podczas spadania kulki:\n$$mgh + \\frac{1}{2}mv_0^2 = \\frac{1}{2}mv_1^2 \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\n$$v_1 = \\sqrt{(3{,}20\\text{ m/s})^2 + 2 \\cdot 9{,}81\\text{ m/s}^2 \\cdot 1{,}80\\text{ m}} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}75\\text{ m/s}$$"
      },
      {
        title: "Zadanie 2.3",
        content: "Po odbiciu kulka zachowuje $75\\%$ energii kinetycznej sprzed uderzenia:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{1}{2}mv_2^2 = 0{,}75 \\cdot \\frac{1}{2}mv_1^2 \\implies v_2 = v_1\\sqrt{0{,}75} \\approx 6{,}75\\text{ m/s} \\cdot 0{,}866 \\approx 5{,}85\\text{ m/s}$$\nWartość zmiany pędu kulki podczas odbicia (prędkość zmienia zwrot na przeciwny):\n$$\\Delta p = mv_2 - (-mv_1) = m(v_1 + v_2)$$\nZ II zasady dynamiki siła wypadkowa to $F_w = F_R - mg = \\frac{\\Delta p}{\\Delta t}$, skąd:\n$$F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t} = 0{,}250 \\cdot 9{,}81 + \\frac{0{,}250 \\cdot (6{,}75 + 5{,}85)}{5{,}00 \\cdot 10^{-3}} \\approx 2{,}45\\text{ N} + 630\\text{ N} \\approx 632\\text{ N}$$"
      }
    ],
    answer: "2.1: $t \\approx 0{,}36\\text{ s}$;\n2.2: Wykazano $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: $F_R \\approx 632\\text{ N}$.",
    trap: "Siła wypadkowa podczas odbicia wynosi $F_w = F_R - mg$, więc siła reakcji podłoża jest większa od siły wypadkowej o ciężar kulki $mg$.",
    source: `Opracowano na podstawie zasad oceniania CKE. <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Informator CKE – rozwiązania, s. 15–19</a>.`
  };
}

setPracaSolution('matura-cke-praca-informator-2025-zad-2', makeInformatorZad2('https://bip.cke.gov.pl/attachments/download/10000#page=15'));
setPracaSolution('matura-cke-praca-informator-2023-zad-2', makeInformatorZad2('https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf#page=15'));

function makeInformatorZad3(sourceUrl) {
  return {
    intuition: "Zdjęcia wykonywano w równych odstępach czasu $\\Delta t$, więc przemieszczenia między kolejnymi punktami na siatce są proporcjonalne do prędkości. Masę ciała B wyznaczamy z zasady zachowania pędu w osi $y$, a sprężystość zderzenia oceniamy z bilansu energii kinetycznej.",
    givens: "$m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa, równe odstępy czasu $\\Delta t$.",
    steps: [
      {
        title: "Zadanie 3.1",
        content: "Wyrażamy prędkości w kratkach na jeden odstęp czasu $\\Delta t$. Przed zderzeniem ciało A porusza się wzdłuż osi $x$, więc początkowy pęd układu wzdłuż osi $y$ wynosi zero ($p_{y\\,pocz} = 0$).\nZ diagramu odczytujemy przemieszczenia pionowe w jednym kroku czasowym $\\Delta t$ po zderzeniu (np. między położeniami 4 i 5):\n$$\\Delta y_A' = -7{,}5\\text{ kratki}, \\qquad \\Delta y_B' = +6{,}0\\text{ kratek}$$\nZ zasady zachowania pędu wzdłuż osi $y$:\n$$0 = m_A v_{Ay}' + m_B v_{By}' \\implies m_A |\\Delta y_A'| = m_B |\\Delta y_B'|$$\n$$200\\text{ g} \\cdot 7{,}5 = m_B \\cdot 6{,}0 \\implies m_B = \\frac{200\\text{ g} \\cdot 7{,}5}{6{,}0} = 250\\text{ g}$$"
      },
      {
        title: "Zadanie 3.2",
        content: "Odczytujemy z diagramu składowe przemieszczeń na jeden odstęp czasu $\\Delta t$:\n- przed zderzeniem: $\\Delta x_A = 18{,}5$, $\\Delta y_A = 0$ oraz $\\Delta x_B = 0$, $\\Delta y_B = 0$,\n- po zderzeniu: $\\Delta x_A' = 8{,}5$, $\\Delta y_A' = -7{,}5$ oraz $\\Delta x_B' = 8{,}0$, $\\Delta y_B' = 6{,}0$.\nPorównujemy energię kinetyczną układu przed zderzeniem i po zderzeniu (w jednostkach umownych, korzystając z $v^2 = v_x^2 + v_y^2$):\n$$E_{k\\,pocz} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 18{,}5^2 = 34{,}225$$\n$$E_{k\\,kon} = \\frac{1}{2} m_A \\left[(v_{Ax}')^2 + (v_{Ay}')^2\\right] + \\frac{1}{2} m_B \\left[(v_{Bx}')^2 + (v_{By}')^2\\right]$$\n$$E_{k\\,kon} = \\frac{1}{2} \\cdot 0{,}20 \\cdot (8{,}5^2 + 7{,}5^2) + \\frac{1}{2} \\cdot 0{,}25 \\cdot (8{,}0^2 + 6{,}0^2) = 12{,}85 + 12{,}50 = 25{,}35$$\nPonieważ $E_{k\\,kon} < E_{k\\,pocz}$, całkowita energia kinetyczna zmalała – zderzenie nie było doskonale sprężyste."
      }
    ],
    answer: "3.1: Wykazano $m_B = 250\\text{ g}$;\n3.2: Zderzenie nie było doskonale sprężyste, ponieważ $E_{k\\,kon} < E_{k\\,pocz}$.",
    trap: "Kwadrat prędkości na płaszczyźnie wyznaczamy z twierdzenia Pitagorasa: $v^2 = v_x^2 + v_y^2$.",
    source: `Opracowano na podstawie zasad oceniania CKE. <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Informator CKE – rozwiązania, s. 21–23</a>.`
  };
}

setPracaSolution('matura-cke-praca-informator-2025-zad-3', makeInformatorZad3('https://bip.cke.gov.pl/attachments/download/10000#page=21'));
setPracaSolution('matura-cke-praca-informator-2023-zad-3', makeInformatorZad3('https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf#page=21'));

// ============================================================================
// 2. UPROSZCZENIE ZADAŃ WPROWADZAJĄCYCH (p-zad-1 .. p-zad-42) W M-PRACA
// ============================================================================

setPracaSolution('p-zad-5', {
  givens: "$m = 10\\text{ kg}$, $h = 2\\text{ m}$, $g = 10\\text{ m/s}^2$, ruch jednostajny ($F_p = mg = 100\\text{ N}$).",
  steps: [
    {
      title: "Praca siły podnoszącej i siły ciężkości",
      content: "Siła podnosząca działa zgodnie z przemieszczeniem ($\\alpha = 0^\\circ$), a siła ciężkości przeciwnie ($\\alpha = 180^\\circ$):\n$$W_p = F_p \\cdot h = mgh = 100\\text{ N} \\cdot 2\\text{ m} = +200\\text{ J}$$\n$$W_g = -mg \\cdot h = -100\\text{ N} \\cdot 2\\text{ m} = -200\\text{ J}$$"
    }
  ],
  answer: "Praca siły podnoszącej wynosi $+200\\text{ J}$, a praca siły ciężkości $-200\\text{ J}$."
});

setPracaSolution('p-zad-6', {
  givens: "$F_1 = 12\\text{ N}$ (w prawo), $F_2 = 5\\text{ N}$ (w lewo), $s = 3\\text{ m}$ (w prawo).",
  steps: [
    {
      title: "Prace sił składowych i praca wypadkowa",
      content: "$$W_1 = F_1 \\cdot s = 12\\text{ N} \\cdot 3\\text{ m} = 36\\text{ J}$$\n$$W_2 = -F_2 \\cdot s = -5\\text{ N} \\cdot 3\\text{ m} = -15\\text{ J}$$\n$$W_w = W_1 + W_2 = 36\\text{ J} - 15\\text{ J} = 21\\text{ J}$$"
    }
  ],
  answer: "$W_1 = 36\\text{ J}$, $W_2 = -15\\text{ J}$, praca wypadkowa $W_w = 21\\text{ J}$."
});

setPracaSolution('p-zad-7', {
  givens: "Wykres $F(s)$: trójkąt na odcinku $0 \\le s \\le 2\\text{ m}$ (wysokość $6\\text{ N}$) oraz prostokąt na odcinku $2 \\le s \\le 4\\text{ m}$ (wysokość $6\\text{ N}$).",
  steps: [
    {
      title: "Obliczenie pola pod wykresem F(s)",
      content: "Praca jest równa polu powierzchni pod wykresem $F(s)$ (suma pola trójkąta i prostokąta):\n$$W = \\frac{1}{2} \\cdot 2\\text{ m} \\cdot 6\\text{ N} + (4 - 2)\\text{ m} \\cdot 6\\text{ N} = 6\\text{ J} + 12\\text{ J} = 18\\text{ J}$$"
    }
  ],
  answer: "Praca na odcinku $0 \\le s \\le 4\\text{ m}$ wynosi $18\\text{ J}$."
});

setPracaSolution('p-zad-9', {
  givens: "$m = 200\\text{ kg}$, $h = 6\\text{ m}$, $t = 10\\text{ s}$, $g = 10\\text{ m/s}^2$.",
  steps: [
    {
      title: "Obliczenie mocy średniej",
      content: "$$P = \\frac{W}{t} = \\frac{mgh}{t} = \\frac{200\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 6\\text{ m}}{10\\text{ s}} = 1200\\text{ W} = 1{,}2\\text{ kW}$$"
    }
  ],
  answer: "Moc średnia użyteczna dźwigu wynosi $1200\\text{ W}$ ($1{,}2\\text{ kW}$)."
});

setPracaSolution('p-zad-11', {
  givens: "$P_u = 800\\text{ W}$, $P_c = 1{,}0\\text{ kW} = 1000\\text{ W}$, $t = 5\\text{ min} = 300\\text{ s}$.",
  steps: [
    {
      title: "Sprawność i pobrana energia",
      content: "$$\\eta = \\frac{P_u}{P_c} = \\frac{800\\text{ W}}{1000\\text{ W}} = 0{,}80 = 80\\%$$\n$$E = P_c \\cdot t = 1000\\text{ W} \\cdot 300\\text{ s} = 300\\,000\\text{ J} = 300\\text{ kJ}$$"
    }
  ],
  answer: "Sprawność wynosi $80\\%$, a pobrana energia to $300\\text{ kJ}$."
});

setPracaSolution('p-zad-12', {
  givens: "Wykres $P(t)$: trójkąt dla $0 \\le t \\le 2\\text{ s}$ oraz prostokąt dla $2 \\le t \\le 4\\text{ s}$ (wysokość $60\\text{ W}$).",
  steps: [
    {
      title: "Obliczenie pola pod wykresem P(t)",
      content: "Praca jest równa polu powierzchni pod wykresem mocy od czasu $P(t)$:\n$$W = \\frac{1}{2} \\cdot 2\\text{ s} \\cdot 60\\text{ W} + (4 - 2)\\text{ s} \\cdot 60\\text{ W} = 60\\text{ J} + 120\\text{ J} = 180\\text{ J}$$"
    }
  ],
  answer: "Praca wykonana przez silnik wynosi $180\\text{ J}$."
});

setPracaSolution('p-zad-17', {
  givens: "$m = 4\\text{ kg}$, $v_1 = 5\\text{ m/s}$, $v_2 = 0$, $T = 10\\text{ N}$.",
  steps: [
    {
      title: "Zastosowanie twierdzenia o pracy i energii kinetycznej",
      content: "Praca siły tarcia jest równa zmianie energii kinetycznej klocka ($W_T = \\Delta E_k$):\n$$-T \\cdot s = 0 - \\frac{1}{2}mv_1^2 \\implies 10s = \\frac{1}{2} \\cdot 4 \\cdot 5^2 = 50 \\implies s = 5\\text{ m}$$"
    }
  ],
  answer: "Droga do zatrzymania wynosi $5\\text{ m}$."
});

setPracaSolution('p-zad-19', {
  givens: "$h_1 = 3\\text{ m}$, $h_2 = 1\\text{ m}$, $v_1 = 2\\text{ m/s}$, $g = 10\\text{ m/s}^2$.",
  steps: [
    {
      title: "Zasada zachowania energii mechanicznej",
      content: "$$\\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$$\n$$v_2 = \\sqrt{v_1^2 + 2g(h_1 - h_2)} = \\sqrt{2^2 + 2 \\cdot 10 \\cdot (3 - 1)} = \\sqrt{44} \\approx 6{,}63\\text{ m/s}$$"
    }
  ],
  answer: "Szybkość w punkcie końcowym wynosi $\\sqrt{44}\\text{ m/s} \\approx 6{,}63\\text{ m/s}$."
});

setPracaSolution('p-zad-20', {
  givens: "$m = 1\\text{ kg}$, $v = 4\\text{ m/s}$, $k = 200\\text{ N/m}$.",
  steps: [
    {
      title: "Zasada zachowania energii mechanicznej",
      content: "Cała energia kinetyczna wózka zamienia się w energię potencjalną sprężystości:\n$$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2 \\implies x = v\\sqrt{\\frac{m}{k}} = 4\\sqrt{\\frac{1}{200}} = \\sqrt{0{,}08} \\approx 0{,}28\\text{ m}$$"
    }
  ],
  answer: "Maksymalne ściśnięcie sprężyny wynosi około $0{,}28\\text{ m}$ ($28\\text{ cm}$)."
});

setPracaSolution('p-zad-21', {
  givens: "$m = 2\\text{ kg}$, $h = 2\\text{ m}$, $W_t = -8\\text{ J}$, $g = 10\\text{ m/s}^2$.",
  steps: [
    {
      title: "Bilans energii mechanicznej",
      content: "$$\\frac{1}{2}mv^2 = mgh + W_t = 2 \\cdot 10 \\cdot 2 - 8 = 32\\text{ J}$$\n$$\\frac{1}{2} \\cdot 2 \\cdot v^2 = 32 \\implies v = \\sqrt{32} \\approx 5{,}66\\text{ m/s}$$"
    }
  ],
  answer: "Szybkość klocka na dole równi wynosi $\\sqrt{32}\\text{ m/s} \\approx 5{,}66\\text{ m/s}$."
});

setPracaSolution('p-zad-22', {
  givens: "$m = 10\\text{ kg}$, $F = 40\\text{ N}$, $T = 10\\text{ N}$, $s = 5\\text{ m}$, $v_0 = 0$.",
  steps: [
    {
      title: "Twierdzenie o pracy i energii kinetycznej",
      content: "$$\\frac{1}{2}mv^2 = (F - T) \\cdot s = (40\\text{ N} - 10\\text{ N}) \\cdot 5\\text{ m} = 150\\text{ J}$$\n$$\\frac{1}{2} \\cdot 10 \\cdot v^2 = 150 \\implies v^2 = 30 \\implies v = \\sqrt{30} \\approx 5{,}48\\text{ m/s}$$"
    }
  ],
  answer: "Szybkość końcowa sanek wynosi $\\sqrt{30}\\text{ m/s} \\approx 5{,}48\\text{ m/s}$."
});

setPracaSolution('p-zad-25', {
  givens: "$m = 2\\text{ kg}$, $h = 4\\text{ m}$, $T = 8\\text{ N}$, $g = 10\\text{ m/s}^2$.",
  steps: [
    {
      title: "Bilans energii i droga hamowania",
      content: "Początkowa energia potencjalna zostaje rozproszona przez pracę siły tarcia na odcinku poziomym:\n$$mgh = T \\cdot s \\implies 2 \\cdot 10 \\cdot 4 = 8s \\implies 80 = 8s \\implies s = 10\\text{ m}$$\nPodczas samego zjazdu z gładkiej równi nie ma tarcia, więc rozproszono $0\\%$ energii."
    }
  ],
  answer: "Droga do zatrzymania wynosi $10\\text{ m}$. Podczas samego zjazdu z równi rozproszono $0\\%$ energii."
});

setPracaSolution('p-zad-27', {
  givens: "$m_1 = 1\\text{ kg}$, $v_1 = +6\\text{ m/s}$ (w prawo), $m_2 = 2\\text{ kg}$, $v_2 = -2\\text{ m/s}$ (w lewo).",
  steps: [
    {
      title: "Zasada zachowania pędu",
      content: "Przyjmując zwrot w prawo jako dodatni:\n$$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v$$\n$$1 \\cdot 6 + 2 \\cdot (-2) = (1 + 2)v \\implies 2 = 3v \\implies v = \\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$$\nDodatni wynik oznacza zwrot w prawo."
    }
  ],
  answer: "Wspólna prędkość wynosi $\\frac{2}{3}\\text{ m/s} \\approx 0{,}67\\text{ m/s}$ i jest zwrócona w prawo."
});

setPracaSolution('p-zad-28', {
  givens: "$M = 80\\text{ kg}$, $m_p = 4\\text{ kg}$, $v_p = +5\\text{ m/s}$ (w prawo), $p_{pocz} = 0$.",
  steps: [
    {
      title: "Zasada zachowania pędu",
      content: "$$0 = M v_L + m_p v_p \\implies 80 v_L + 4 \\cdot 5 = 0 \\implies v_L = -\\frac{20}{80} = -0{,}25\\text{ m/s}$$\nZnak minus oznacza ruch łodzi w lewo."
    }
  ],
  answer: "Łódź porusza się z prędkością $0{,}25\\text{ m/s}$ w lewo."
});

setPracaSolution('p-zad-30', {
  givens: "$m_1 = m_2 = 2\\text{ kg}$, $v_1 = 4\\text{ m/s}$, $v_2 = 0$.",
  steps: [
    {
      title: "Zasada zachowania pędu i ubytek energii",
      content: "Z zasady zachowania pędu: $m_1 v_1 = (m_1 + m_2)v \\implies 2 \\cdot 4 = 4v \\implies v = 2\\text{ m/s}$.\nEnergia początkowa i końcowa:\n$$E_{k\\,pocz} = \\frac{1}{2} \\cdot 2 \\cdot 4^2 = 16\\text{ J}, \\qquad E_{k\\,kon} = \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 8\\text{ J}$$\n$$\\frac{\\Delta E_k}{E_{k\\,pocz}} = \\frac{16 - 8}{16} = 50\\%$$"
    }
  ],
  answer: "Poprawna odpowiedź: C ($50\\%$)."
});

setPracaSolution('p-zad-32', {
  givens: "$m_1 = 1\\text{ kg}$, $v_1 = 8\\text{ m/s}$, $m_2 = 3\\text{ kg}$, $v_2 = 0$, $T = 4\\text{ N}$.",
  steps: [
    {
      title: "Prędkość po zderzeniu (ZZP) i droga hamowania",
      content: "Z zasady zachowania pędu wyznaczamy prędkość po zderzeniu:\n$$m_1 v_1 = (m_1 + m_2)v \\implies 1 \\cdot 8 = 4v \\implies v = 2\\text{ m/s}$$\nZ twierdzenia o pracy i energii po zderzeniu:\n$$T \\cdot s = \\frac{1}{2}(m_1 + m_2)v^2 \\implies 4s = \\frac{1}{2} \\cdot 4 \\cdot 2^2 = 8 \\implies s = 2\\text{ m}$$"
    }
  ],
  answer: "Droga do zatrzymania układu wynosi $2\\text{ m}$."
});

const output = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('js/data-courses.js', output, 'utf8');
console.log('Successfully updated m-praca solutions!');
