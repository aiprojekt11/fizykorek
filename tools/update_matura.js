const fs = require('fs');

const rawContent = fs.readFileSync('js/data-courses.js', 'utf8');

// Header preservation
const headerMatch = rawContent.match(/^(\/\*\*[\s\S]*?\*\/\s*window\.FIZYKOREK_COURSES\s*=\s*)/);
if (!headerMatch) {
  console.error('Failed to match header!');
  process.exit(1);
}

const headerText = headerMatch[1];
const jsonText = rawContent.slice(headerText.length).replace(/;\s*$/, '');
const data = JSON.parse(jsonText);

// 1. Remove all SVGs from all tasks in data
function cleanSvgs(obj) {
  if (typeof obj === 'string') {
    if (obj.includes('<svg')) {
      return obj.replace(/<svg[\s\S]*?<\/svg>/gi, '[TUTAJ WKLEJ GRAFIKĘ]');
    }
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map(cleanSvgs);
  } else if (typeof obj === 'object' && obj !== null) {
    const res = {};
    for (const key of Object.keys(obj)) {
      res[key] = cleanSvgs(obj[key]);
    }
    return res;
  }
  return obj;
}

const cleanedData = cleanSvgs(data);

// Define 11 CKE Matura tasks for Kinematics (2015 - 2025)
const maturaTasks = [
  {
    id: 'matura-cke-2025-zad-1',
    number: 2025,
    title: 'Zadanie maturalne CKE (2025 maj): Zderzenie dwóch kulek w komorze próżniowej',
    year: '2025 maj',
    difficulty: 3,
    source: 'Matura CKE 2025 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2025-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Komora próżniowa', 'Kinematyka'],
    image: 'img/cke_2025_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2025_zad1.png]</strong></p>
<p>Rozważamy rzuty wykonane w doświadczalnej komorze próżniowej. Do analizy zadań 1.1. i 1.2. przyjmij model zjawiska, w którym:</p>
<ul>
<li>ruchy ciał odbywają się bez działania sił oporu,</li>
<li>ciała poruszają się w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym,</li>
<li>poruszające się ciała traktujemy jako punkty materialne,</li>
<li>podłoże, na które upadają rzucone ciała, jest poziome,</li>
<li>przyśpieszenie ziemskie ma wartość $g = 9{,}81\\text{ m/s}^2$.</li>
</ul>
<p>W chwili $t_0$ rzucono kulkę $K_A$ z pewnej wysokości. Prędkość $\\vec{v}_{0A}$ kulki w chwili $t_0$ miała kierunek poziomy. Jednocześnie z punktu $B(0; 6)$ rzucono kulkę $K_B$ z prędkością początkową $\\vec{v}_{0B}$.</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</p>
<ol>
<li>Wartość prędkości kulki $K_A$ rośnie wprost proporcjonalnie do czasu mierzonego od chwili $t_0$. (P / F)</li>
<li>Wektor przyśpieszenia kulki $K_A$ podczas jej ruchu ma stałą wartość. (P / F)</li>
<li>Czas ruchu kulki $K_A$ od chwili $t_0$ do chwili $t_k$ zależy od $v_0$ – wartości prędkości początkowej kulki. (P / F)</li>
</ol>

<h4>Zadanie 1.2 (0–3 pkt)</h4>
<p>Oblicz $v_{0B}$ – wartość prędkości początkowej kulki $K_B$ w punkcie $B$. Zapisz obliczenia.</p>
</div>`,
    solution: {
      intuition: 'Ruch w komorze próżniowej zachodzi bez sił oporu. Składowa pozioma prędkości jest stała, a składowa pionowa zmienia się zgodnie z ruchem jednostajnie przyspieszonym z przyspieszeniem g.',
      givens: '$g = 9{,}81\\text{ m/s}^2$, brak oporów powietrza.',
      steps: [
        {
          title: 'Zadanie 1.1 – Analiza zdań',
          content: '1. Fałsz – wartość prędkości $v(t) = \\sqrt{v_0^2 + (gt)^2}$ nie rośnie wprost proporcjonalnie do czasu.<br>2. Prawda – siła ciężkości jest stała, więc przyśpieszenie $\\vec{a} = \\vec{g} = const$.<br>3. Fałsz – czas spadania zależy tylko od wysokości $h$, a nie od prędkości poziomej $v_0$.'
        },
        {
          title: 'Zadanie 1.2 – Obliczenie prędkości v_0B',
          content: 'Z równań ruchu dla punktu $B(0; 6)$ wyznaczamy składowe położenia i wyliczamy $v_{0B} = \\sqrt{v_{0x}^2 + v_{0y}^2}$.'
        }
      ],
      numerical: '1.1: 1-F, 2-P, 3-F | 1.2: Obliczenia parametryczne wynikające z rzutu.',
      answer: '1.1: 1-F, 2-P, 3-F. 1.2: Prędkość początkowa kulki K_B wynika z równań rzutu w polu grawitacyjnym.',
      trap: 'Należy pamiętać, że całkowita prędkość nie rośnie liniowo, lecz zgodnie z twierdzeniem Pitagorasa ze składowych v_x i v_y.'
    }
  },
  {
    id: 'matura-cke-2024-zad-1',
    number: 2024,
    title: 'Zadanie maturalne CKE (2024 maj): Ruch opadającej kropli deszczu z oporem powietrza',
    year: '2024 maj',
    difficulty: 2,
    source: 'Matura CKE 2024 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Opór powietrza', 'Prędkość graniczna', 'Kinematyka'],
    image: 'img/cke_2024_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2024_zad1.png]</strong></p>
<p>Opadająca w powietrzu kropla deszczu o masie $m = 4{,}0\\text{ mg}$ porusza się pionowo w dół. Po pewnym czasie kropla osiąga prędkość graniczną o stałej wartości $v_g = 8{,}0\\text{ m/s}$. Przyjmij przyśpieszenie ziemskie $g = 9{,}81\\text{ m/s}^2$.</p>

<h4>Zadanie 1.1 (0–1 pkt)</h4>
<p>Rozstrzygnij, jak zmienia się wartość siły oporu powietrza działającej na kroplę deszczu podczas jej ruchu od momentu rozpoczęcia spadania do chwili osiągnięcia prędkości granicznej.</p>

<h4>Zadanie 1.2 (0–2 pkt)</h4>
<p>Oblicz wartość siły oporu powietrza $F_{op}$ działającej na kroplę deszczu, gdy porusza się ona z prędkością graniczną $v_g$. Zapisz obliczenia.</p>
</div>`,
    solution: {
      intuition: 'Wraz ze wzrostem prędkości opadającej kropli rośnie siła oporu powietrza. Gdy siła oporu zrównoważy siłę ciężkości, wypadkowa siła wynosi zero i kropla porusza się ruchem jednostajnym z prędkością graniczną.',
      givens: '$m = 4{,}0\\text{ mg} = 4{,}0 \\cdot 10^{-6}\\text{ kg}$, $v_g = 8{,}0\\text{ m/s}$, $g = 9{,}81\\text{ m/s}^2$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Zmiana siły oporu',
          content: 'Podczas przyspieszania kropli jej prędkość rośnie, więc wartość siły oporu powietrza również rośnie, aż osiągnie wartość równą ciężarowi kropli.'
        },
        {
          title: 'Zadanie 1.2 – Obliczenie F_op',
          content: 'Dla prędkości granicznej $F_{op} = F_g = m \\cdot g = 4{,}0 \\cdot 10^{-6}\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\approx 3{,}92 \\cdot 10^{-5}\\text{ N}$.'
        }
      ],
      numerical: '$F_{op} = 3{,}92 \\cdot 10^{-5}\\text{ N} = 39{,}2\\ \\mu\\text{N}$',
      answer: '1.1: Siła oporu rośnie. 1.2: Wartość siły oporu wynosi $3{,}92 \\cdot 10^{-5}\\text{ N}$.',
      trap: 'Pamiętaj o zamianie miligramów na kilogramy ($1\\text{ mg} = 10^{-6}\\text{ kg}$).'
    }
  },
  {
    id: 'matura-cke-2023-zad-1',
    number: 2023,
    title: 'Zadanie maturalne CKE (2023 maj): Ruch dwóch samochodów na autostradzie',
    year: '2023 maj',
    difficulty: 3,
    source: 'Matura CKE 2023 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch względny', 'Optymalizacja', 'Kinematyka'],
    image: 'img/cke_2023_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2023_zad1.png]</strong></p>
<p>Dwa samochody $S_1$ oraz $S_2$ poruszają się po równoległych torach autostrady w tym samym kierunku. W chwili $t = 0$ oba samochody mijają punkt $x = 0$. Samochód $S_1$ jechał ze stałą prędkością $v_1 = 90\\text{ km/h}$, a samochód $S_2$ poruszał się z prędkością początkową $v_0 = 54\\text{ km/h}$ i przyśpieszeniem $a = 0{,}5\\text{ m/s}^2$.</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Oblicz czas $t_m$, po którym odległość między samochodami osiągnie wartość maksymalną, oraz oblicz tę maksymalną odległość $d_{max}$.</p>

<h4>Zadanie 1.2 (0–2 pkt)</h4>
<p>Wyznacz czas $t_k$, w którym samochód $S_2$ zrówna się z samochodem $S_1$.</p>
</div>`,
    solution: {
      intuition: 'Maksymalna odległość zachodzi w chwili, gdy prędkości obu samochodów się zrównają ($v_2(t) = v_1$).',
      givens: '$v_1 = 90\\text{ km/h} = 25\\text{ m/s}$, $v_0 = 54\\text{ km/h} = 15\\text{ m/s}$, $a = 0{,}5\\text{ m/s}^2$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Czas t_m i d_max',
          content: 'Zrównanie prędkości: $v_1 = v_0 + a t_m \\Rightarrow 25 = 15 + 0{,}5 t_m \\Rightarrow t_m = 20\\text{ s}$.<br>Odległości: $x_1(20) = 25 \\cdot 20 = 500\\text{ m}$, $x_2(20) = 15 \\cdot 20 + 0{,}5 \\cdot 0{,}5 \\cdot 400 = 400\\text{ m}$.<br>$d_{max} = 500 - 400 = 100\\text{ m}$.'
        },
        {
          title: 'Zadanie 1.2 – Czas wyprzedzenia t_k',
          content: 'Przyrównanie położeń: $v_1 t_k = v_0 t_k + \\frac{a t_k^2}{2} \\Rightarrow (v_1 - v_0) = \\frac{a t_k}{2} \\Rightarrow 10 = 0{,}25 t_k \\Rightarrow t_k = 40\\text{ s}$.'
        }
      ],
      numerical: '$t_m = 20\\text{ s}$, $d_{max} = 100\\text{ m}$, $t_k = 40\\text{ s}$',
      answer: '1.1: Czas wynosi $20\\text{ s}$, a maksymalna odległość $100\\text{ m}$. 1.2: Samochód S2 zrówna się z S1 po $40\\text{ s}$.',
      trap: 'Pamiętaj o przeliczeniu km/h na m/s przed wykonaniem obliczeń ($90\\text{ km/h} = 25\\text{ m/s}$, $54\\text{ km/h} = 15\\text{ m/s}$).'
    }
  },
  {
    id: 'matura-cke-2022-zad-1',
    number: 2022,
    title: 'Zadanie maturalne CKE (2022 maj): Wykresy prędkości dwóch ciał i prędkość względna',
    year: '2022 maj',
    difficulty: 2,
    source: 'Matura CKE 2022 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2022-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Wykres v(t)', 'Prędkość względna', 'Kinematyka'],
    image: 'img/cke_2022_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2022_zad1.png]</strong></p>
<p>Na wykresie przedstawiono zależność prędkości od czasu $v(t)$ dla dwóch ciał $A$ i $B$ poruszających się po tej samej prostej w tym samym kierunku. W chwili $t = 0$ oba ciała znajdowały się w tym samym punkcie początkowym.</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Oblicz odległość $d$ między ciałami w chwili $t = 10\\text{ s}$.</p>

<h4>Zadanie 1.2 (0–2 pkt)</h4>
<p>Wyznacz prędkość względną ciała $A$ względem ciała $B$ w chwili $t = 5\\text{ s}$.</p>
</div>`,
    solution: {
      intuition: 'Droga przebyta przez każde ciało odpowiada polu powierzchni pod wykresem $v(t)$. Odległość między ciałami to różnica pól pod wykresami.',
      givens: 'Odczyt danych z wykresu $v(t)$ dla ciał A i B.',
      steps: [
        {
          title: 'Zadanie 1.1 – Obliczenie odległości',
          content: 'Obliczamy pola trapezów/trójkątów pod wykresami $v_A(t)$ oraz $v_B(t)$ w przedziale od $0$ do $10\\text{ s}$. Różnica pól daje odległość $d$.'
        },
        {
          title: 'Zadanie 1.2 – Prędkość względna',
          content: 'Odczytujemy z wykresu wartości prędkości w chwili $t = 5\\text{ s}$: $v_{A/B} = |v_A(5) - v_B(5)|$.'
        }
      ],
      numerical: 'Wyniki zależne od wartości z wykresu $v(t)$.',
      answer: 'Odległość wynosi różnicy pól pod wykresami, a prędkość względna to różnica wartości prędkości obu ciał.',
      trap: 'Zwróć uwagę na jednostki na osiach wykresu.'
    }
  },
  {
    id: 'matura-cke-2021-zad-1',
    number: 2021,
    title: 'Zadanie maturalne CKE (2021 maj): Dwa rzuty poziome z różnych wysokości o jednakowym zasięgu',
    year: '2021 maj',
    difficulty: 3,
    source: 'Matura CKE 2021 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2021-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Stosunek prędkości', 'Kinematyka'],
    image: 'img/cke_2021_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2021_zad1.png]</strong></p>
<p>Z wysokości $h_1 = 5{,}0\\text{ m}$ ponad punktem $P$ rzucono kulkę $K_1$. Kulka upadła na poziome podłoże w odległości $d$ od punktu $P$. Następnie z wysokości $h_2 = 2{,}0\\text{ m}$ rzucono taką samą kulkę $K_2$, która upadła w tej samej odległości $d$. Prędkości początkowe $\\vec{v}_{01}$ i $\\vec{v}_{02}$ miały kierunki poziome. Pomiń opory ruchu ($g = 9{,}8\\text{ m/s}^2$).</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Oblicz iloraz $\\frac{v_{01}}{v_{02}}$ (lub $\\frac{v_{02}}{v_{01}}$) wartości prędkości początkowych kulek. Wynik zaokrąglij do dwóch cyfr znaczących.</p>

<h4>Zadanie 1.2 (0–3 pkt)</h4>
<p>Wartość prędkości początkowej kulki $K_1$ wynosi $v_{01} = 7{,}9\\text{ m/s}$. Oblicz wartość $v_{k1}$ prędkości kulki $K_1$ tuż przed uderzeniem w podłoże.</p>
</div>`,
    solution: {
      intuition: 'Zasięg rzutu poziomego to $d = v_0 \\cdot t = v_0 \\sqrt{\\frac{2h}{g}}$. Przy jednakowym $d$: $v_{01} \\sqrt{h_1} = v_{02} \\sqrt{h_2}$.',
      givens: '$h_1 = 5{,}0\\text{ m}$, $h_2 = 2{,}0\\text{ m}$, $v_{01} = 7{,}9\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Iloraz prędkości',
          content: '$\\frac{v_{02}}{v_{01}} = \\sqrt{\\frac{h_1}{h_2}} = \\sqrt{\\frac{5}{2}} = \\sqrt{2{,}5} \\approx 1{,}58 \\approx 1{,}6$. Stąd $\\frac{v_{01}}{v_{02}} \\approx 0{,}63$.'
        },
        {
          title: 'Zadanie 1.2 – Prędkość końcowa v_k1',
          content: 'Składowa pionowa: $v_{y1} = \\sqrt{2 g h_1} = \\sqrt{2 \\cdot 9{,}8 \\cdot 5} = \\sqrt{98} \\approx 9{,}90\\text{ m/s}$.<br>Całkowita prędkość: $v_{k1} = \\sqrt{v_{01}^2 + v_{y1}^2} = \\sqrt{7{,}9^2 + 98} = \\sqrt{62{,}41 + 98} = \\sqrt{160{,}41} \\approx 12{,}7\\text{ m/s}$.'
        }
      ],
      numerical: '1.1: $\\frac{v_{02}}{v_{01}} \\approx 1{,}6$ (lub $\\frac{v_{01}}{v_{02}} \\approx 0{,}63$) | 1.2: $v_{k1} \\approx 13\\text{ m/s}$',
      answer: '1.1: Stosunek prędkości wynosi około $1{,}6$ (lub $0{,}63$). 1.2: Prędkość końcowa kulki wynosi około $13\\text{ m/s}$.',
      trap: 'Nie zapomnij zsumować kwadratu składowej poziomej i pionowej przy obliczaniu całkowitej prędkości końcowej.'
    }
  },
  {
    id: 'matura-cke-2020-zad-1',
    number: 2020,
    title: 'Zadanie maturalne CKE (2020 czerwiec): Ruch krążka po lodzie – opóźnienie i droga',
    year: '2020 czerwiec',
    difficulty: 2,
    source: 'Matura CKE 2020 (Czerwiec)',
    link: 'https://arkusze.pl/maturalne/fizyka-2020-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch opóźniony', 'Tarcie', 'Kinematyka'],
    image: 'img/cke_2020_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2020_zad1.png]</strong></p>
<p>Hokeista uderzył kijem w nieruchomy krążek. Po uderzeniu krążek uzyskał poziomą prędkość początkową o wartości $v_1 = 14\\text{ m/s}$. Dalej krążek poruszał się po powierzchni lodu ruchem jednostajnie opóźnionym prostoliniowym i przebył drogę $s_1 = 28\\text{ m}$ do zatrzymania. Przyjmij, że siła tarcia kinetycznego ma stałą wartość.</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Oblicz czas ruchu krążka od momentu uzyskania prędkości $v_1$ aż do zatrzymania się.</p>

<h4>Zadanie 1.2 (0–2 pkt)</h4>
<p>Hokeista ponownie uderzył w ten sam krążek, nadając mu prędkość początkową $v_2 = \\frac{1}{2} v_1$. Oblicz drogę $s_2$, jaką przebył krążek do zatrzymania się.</p>

<h4>Zadanie 1.3 (0–2 pkt)</h4>
<p>Wykaż, że wartość przyśpieszenia $a$ krążka nie zależy od jego masy $m$. Wyprowadź wzór na $a$ za pomocą $\\mu$ oraz $g$.</p>
</div>`,
    solution: {
      intuition: 'Średnia prędkość w ruchu jednostajnie opóźnionym od $v_1$ do $0$ wynosi $v_{śr} = \\frac{v_1}{2}$. Droga hamowania przy stałym opóźnieniu jest proporcjonalna do kwadratu prędkości początkowej ($s = \\frac{v^2}{2a}$).',
      givens: '$v_1 = 14\\text{ m/s}$, $s_1 = 28\\text{ m}$, $v_2 = 7\\text{ m/s}$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Czas ruchu t_1',
          content: '$s_1 = \\frac{v_1}{2} t_1 \\Rightarrow 28 = \\frac{14}{2} t_1 \\Rightarrow 28 = 7 t_1 \\Rightarrow t_1 = 4\\text{ s}$.'
        },
        {
          title: 'Zadanie 1.2 – Droga s_2',
          content: 'Skoro $s = \\frac{v^2}{2a}$, to dwukrotne zmniejszenie prędkości początkowej ($v_2 = v_1 / 2$) powoduje czterokrotne zmniejszenie drogi hamowania:<br>$s_2 = \\frac{s_1}{4} = \\frac{28\\text{ m}}{4} = 7\\text{ m}$.'
        },
        {
          title: 'Zadanie 1.3 – Wyprowadzenie opóźnienia',
          content: 'Siła tarcia $T = \\mu m g$. Z II zasady dynamiki Newtona: $F_{wyp} = m a \\Rightarrow \\mu m g = m a \\Rightarrow a = \\mu g$. Masa $m$ ulega skróceniu.'
        }
      ],
      numerical: '1.1: $t_1 = 4\\text{ s}$ | 1.2: $s_2 = 7\\text{ m}$ | 1.3: $a = \\mu g$',
      answer: '1.1: Czas ruchu wynosi $4\\text{ s}$. 1.2: Droga hamowania wynosi $7\\text{ m}$. 1.3: Wzór to $a = \\mu g$ (masa się skraca).',
      trap: 'Zwróć uwagę, że droga zależy od kwadratu prędkości ($s \\sim v^2$), a nie liniowo.'
    }
  },
  {
    id: 'matura-cke-2019-zad-1',
    number: 2019,
    title: 'Zadanie maturalne CKE (2019 maj): Rzut poziomy piłki z autu',
    year: '2019 maj',
    difficulty: 2,
    source: 'Matura CKE 2019 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2019-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Prędkość początkowa', 'Kinematyka'],
    image: 'img/cke_2019_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2019_zad1.png]</strong></p>
<p>Podczas wykonywania autu piłkarz rzuca piłkę oburącz zza głowy w kierunku poziomym z wysokości $h = 1{,}96\\text{ m}$ ponad powierzchnią boiska. Pomiń opory powietrza ($g = 9{,}81\\text{ m/s}^2$).</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Oblicz czas lotu piłki od momentu wyrzutu do chwili uderzenia w ziemię.</p>

<h4>Zadanie 1.2 (0–2 pkt)</h4>
<p>Piłka spadła na boisko w odległości poziomej $x = 5{,}10\\text{ m}$ od miejsca wyrzutu. Oblicz wartość prędkości początkowej $v_0$ piłki.</p>

<h4>Zadanie 1.3 (0–1 pkt)</h4>
<p>Wybierz rysunek z wykresem prawidłowo przedstawiającym zależność energii kinetycznej $E_k$ od czasu $t$ lotu piłki rzuconej poziomo.</p>

<h4>Zadanie 1.4 (0–1 pkt)</h4>
<p>Piłkę $P_1$ rzucono poziomo, a piłkę $P_2$ upuszczono swobodnie z tej samej wysokości. Porównaj czas lotu $t_1, t_2$ oraz prędkości końcowe $v_1, v_2$.</p>
</div>`,
    solution: {
      intuition: 'Czas rzutu poziomego wynika ze swobodnego spadku w pionie $h = \\frac{g t^2}{2}$. Zasięg w poziomie to $x = v_0 \\cdot t$.',
      givens: '$h = 1{,}96\\text{ m}$, $x = 5{,}10\\text{ m}$, $g = 9{,}81\\text{ m/s}^2$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Czas spadania',
          content: '$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 1{,}96}{9{,}81}} = \\sqrt{\\frac{3{,}92}{9{,}81}} = \\sqrt{0{,}3996} \\approx 0{,}632\\text{ s}$.'
        },
        {
          title: 'Zadanie 1.2 – Prędkość początkowa v_0',
          content: '$v_0 = \\frac{x}{t} = \\frac{5{,}10\\text{ m}}{0{,}632\\text{ s}} \\approx 8{,}07\\text{ m/s}$.'
        },
        {
          title: 'Zadanie 1.3 – Wykres E_k(t)',
          content: '$E_k(t) = \\frac{m v^2}{2} = \\frac{m}{2} (v_0^2 + g^2 t^2)$ – jest to fragment paraboli skierowanej ramionami w górę, startującej z dodatniej wartości $E_{k0} > 0$.'
        },
        {
          title: 'Zadanie 1.4 – Porównanie rzutu i spadku',
          content: 'Czasy lotu są równe ($t_1 = t_2$), ponieważ ruch w pionie jest identyczny. Prędkość końcowa piłki $P_1$ jest większa ($v_1 > v_2$), bo zawiera składową poziomą.'
        }
      ],
      numerical: '1.1: $t \\approx 0{,}63\\text{ s}$ | 1.2: $v_0 \\approx 8{,}1\\text{ m/s}$ | 1.4: $t_1 = t_2$, $v_1 > v_2$',
      answer: '1.1: Czas lotu wynosi około $0{,}63\\text{ s}$. 1.2: Prędkość początkowa wynosi około $8{,}1\\text{ m/s}$. 1.4: $t_1 = t_2$, $v_1 > v_2$.',
      trap: 'Zwróć uwagę, że w rzucie poziomym energia kinetyczna na początku nie jest równa zero ($E_{k0} = \\frac{mv_0^2}{2} > 0$).'
    }
  },
  {
    id: 'matura-cke-2018-zad-1',
    number: 2018,
    title: 'Zadanie maturalne CKE (2018 maj): Ruch dwóch samochodów – wykres v(t)',
    year: '2018 maj',
    difficulty: 3,
    source: 'Matura CKE 2018 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2018-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Wykres v(t)', 'Droga z pola', 'Kinematyka'],
    image: 'img/cke_2018_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2018_zad1.png]</strong></p>
<p>Rozważamy ruch dwóch samochodów po poziomym i prostym odcinku trasy. Pierwszy samochód rozpędzał się w czasie $2\\text{ s}$ do prędkości $10\\text{ m/s}$, przez $6\\text{ s}$ jechał ze stałą prędkością, a potem przez $2\\text{ s}$ hamował do zatrzymania. Drugi samochód ruszył równocześnie i przez pierwszą połowę czasu rozpędzał się ze stałym przyśpieszeniem, a przez drugą hamował do zatrzymania. Oba przebyły tę samą drogę w tym samym czasie.</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Narysuj wykres zależności wartości prędkości od czasu $v(t)$ dla ruchu pierwszego samochodu.</p>

<h4>Zadanie 1.2 (0–3 pkt)</h4>
<p>Oblicz całkowitą drogę przebytą przez pierwszy samochód oraz maksymalną wartość prędkości drugiego samochodu.</p>
</div>`,
    solution: {
      intuition: 'Pole pod wykresem $v(t)$ to przebyta droga. Dla pierwszego samochodu wykres to trapez, dla drugiego trójkąt o tej samej podstawie $T = 10\\text{ s}$ i identycznym polu.',
      givens: 'Ruch 1: $t_{przysp} = 2\\text{ s}$, $t_{jedn} = 6\\text{ s}$, $t_{ham} = 2\\text{ s}$, $v_1 = 10\\text{ m/s}$. Czas całkowity $T = 10\\text{ s}$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Wykres trapezowy',
          content: 'Wykres $v(t)$ składa się z odcinka od $(0,0)$ do $(2,10)$, odcinka poziomego od $(2,10)$ do $(8,10)$ oraz odcinka opadającego od $(8,10)$ do $(10,0)$.'
        },
        {
          title: 'Zadanie 1.2 – Droga s i v_max2',
          content: 'Pole trapezu (droga 1): $s = \\frac{a+b}{2} \\cdot h = \\frac{10 + 6}{2} \\cdot 10 = 8 \\cdot 10 = 80\\text{ m}$.<br>Pole trójkąta (droga 2): $s = \\frac{T \\cdot v_{max2}}{2} \\Rightarrow 80 = \\frac{10 \\cdot v_{max2}}{2} \\Rightarrow 80 = 5 v_{max2} \\Rightarrow v_{max2} = 16\\text{ m/s}$.'
        }
      ],
      numerical: '$s = 80\\text{ m}$, $v_{max2} = 16\\text{ m/s}$',
      answer: '1.1: Wykres w kształcie trapezu o wysokości $10\\text{ m/s}$. 1.2: Całkowita droga wynosi $80\\text{ m}$, a maksymalna prędkość drugiego samochodu wynosi $16\\text{ m/s}$.',
      trap: 'Upewnij się, że całkowity czas ruchu wynosi $2 + 6 + 2 = 10\\text{ s}$.'
    }
  },
  {
    id: 'matura-cke-2017-zad-1',
    number: 2017,
    title: 'Zadanie maturalne CKE (2017 maj): Hamowanie samochodu i droga hamowania',
    year: '2017 maj',
    difficulty: 3,
    source: 'Matura CKE 2017 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2017-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Hamowanie', 'Ruch opóźniony', 'Kinematyka'],
    image: 'img/cke_2017_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2017_zad1.png]</strong></p>
<p>Kierowca samochodu jadący po poziomym torze z prędkością $v_0 = 50\\text{ km/h}$ rozpoczął hamowanie ze stałym opóźnieniem i zatrzymał się po przebyciu drogi $s = 12\\text{ m}$. Czas reakcji kierowcy pomijamy.</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Oblicz czas hamowania samochodu. Wynik podaj w sekundach.</p>

<h4>Zadanie 1.2 (0–1 pkt)</h4>
<p>Oceń prawdziwość zdania: Przy ustalonej prędkości początkowej droga hamowania z poślizgiem jest dłuższa od drogi hamowania bez poślizgu. (P / F)</p>

<h4>Zadanie 1.3 (0–3 pkt)</h4>
<p>W kolejnej próbie samochód z prędkością początkową $v_{02} = 60\\text{ km/h}$ rozpoczął hamowanie z tym samym opóźnieniem i po przejechaniu $12\\text{ m}$ uderzył w przeszkodę. Oblicz prędkość uderzenia w przeszkodę.</p>
</div>`,
    solution: {
      intuition: 'Średnia prędkość podczas hamowania do zera wynosi $v_{śr} = \\frac{v_0}{2}$. Zatem $s = \\frac{v_0}{2} t$. Opóźnienie wynika z relacji $v_0^2 = 2 a s$.',
      givens: '$v_0 = 50\\text{ km/h} = \\frac{50}{3{,}6}\\text{ m/s} \\approx 13{,}89\\text{ m/s}$, $s = 12\\text{ m}$, $v_{02} = 60\\text{ km/h} = \\frac{60}{3{,}6}\\text{ m/s} \\approx 16{,}67\\text{ m/s}$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Czas hamowania t_1',
          content: '$s = \\frac{v_0}{2} t_1 \\Rightarrow t_1 = \\frac{2s}{v_0} = \\frac{24}{13{,}89} \\approx 1{,}73\\text{ s}$.'
        },
        {
          title: 'Zadanie 1.3 – Prędkość uderzenia v_k',
          content: 'Opóźnienie $a = \\frac{v_0^2}{2s} = \\frac{13{,}89^2}{24} \\approx 8{,}04\\text{ m/s}^2$.<br>Równanie dla próby 2: $v_k^2 = v_{02}^2 - 2 a s = 16{,}67^2 - 2 \\cdot 8{,}04 \\cdot 12 = 277{,}89 - 192{,}96 = 84{,}93$.<br>$v_k = \\sqrt{84{,}93} \\approx 9{,}22\\text{ m/s} \\approx 33{,}2\\text{ km/h}$.'
        }
      ],
      numerical: '1.1: $t_1 \\approx 1{,}73\\text{ s}$ | 1.3: $v_k \\approx 33\\text{ km/h}$ ($9{,}2\\text{ m/s}$)',
      answer: '1.1: Czas hamowania wynosi około $1{,}73\\text{ s}$. 1.2: Prawda. 1.3: Samochód uderzył w przeszkodę z prędkością około $33\\text{ km/h}$.',
      trap: 'Zwróć uwagę na przeliczenie km/h na m/s przed wykonaniem działań.'
    }
  },
  {
    id: 'matura-cke-2016-zad-1',
    number: 2016,
    title: 'Zadanie maturalne CKE (2016 maj): Ruch wózka i tabela położeń',
    year: '2016 maj',
    difficulty: 2,
    source: 'Matura CKE 2016 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2016-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Tabela pomiarów', 'Wykres x(t)', 'Kinematyka'],
    image: 'img/cke_2016_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2016_zad1.png]</strong></p>
<p>Wózek poruszał się bez tarcia po poziomej prostej (osi $x$) i odbił się od nieruchomej przeszkody. Zarejestrowano kolejne położenia wózka w odstępach co $0{,}1\\text{ s}$:</p>
<table class="data-table">
<tr><th>t [s]</th><td>0</td><td>0,1</td><td>0,2</td><td>0,3</td><td>0,4</td><td>0,5</td><td>0,6</td><td>0,7</td><td>0,8</td></tr>
<tr><th>x [cm]</th><td>15</td><td>40</td><td>70</td><td>95</td><td>125</td><td>120</td><td>100</td><td>80</td><td>60</td></tr>
</table>

<h4>Zadanie 1.1 (0–5 pkt)</h4>
<p>a) Wykonaj wykres zależności $x(t)$ i zaznacz niepewności $x$ (dokładność $\\pm 5\\text{ cm}$).<br>b) Na podstawie wykresu ustal czas odbicia (z dokładnością do $0{,}02\\text{ s}$) oraz położenie wózka w tej chwili.</p>

<h4>Zadanie 1.2 (0–1 pkt)</h4>
<p>Czy odbicie było doskonale sprężyste? Napisz i uzasadnij odpowiedź na podstawie prędkości przed i po odbiciu.</p>
</div>`,
    solution: {
      intuition: 'Prędkość przed odbiciem to nachylenie prostej $x(t)$ dla $t < t_{odb}$, a po odbiciu to nachylenie prostej dla $t > t_{odb}$. Jeśli wartości prędkości są równe, odbicie jest sprężyste.',
      givens: 'Dane z tabeli położenia $x(t)$ co $0{,}1\\text{ s}$.',
      steps: [
        {
          title: 'Zadanie 1.1 – Analiza prędkości i wykresu',
          content: 'Prędkość przed odbiciem: $v_1 = \\frac{125 - 15}{0{,}4} = \\frac{110}{0{,}4} = 275\\text{ cm/s} = 2{,}75\\text{ m/s}$.<br>Prędkość po odbiciu: $v_2 = \\left|\\frac{60 - 120}{0{,}8 - 0{,}5}\\right| = \\frac{60}{0{,}3} = 200\\text{ cm/s} = 2{,}0\\text{ m/s}$.'
        },
        {
          title: 'Zadanie 1.2 – Ocena sprężystości',
          content: 'Ponieważ $v_2 < v_1$ ($2{,}0\\text{ m/s} < 2{,}75\\text{ m/s}$), energia kinetyczna po odbiciu uległa zmniejszeniu, co oznacza, że odbicie NIE było doskonale sprężyste.'
        }
      ],
      numerical: '1.1: $t_{odb} \\approx 0{,}42\\text{ s}$, $x_{odb} \\approx 130\\text{ cm}$ | 1.2: Nie, nastąpiła strata energii kinetycznej.',
      answer: '1.1: Czas odbicia wynosi około $0{,}42\\text{ s}$. 1.2: Odbicie nie było doskonale sprężyste ze względu na spadek prędkości wózka.',
      trap: 'Zwróć uwagę na ujemny znak zmiany położenia po odbiciu (wózek wraca).'
    }
  },
  {
    id: 'matura-cke-2015-zad-1',
    number: 2015,
    title: 'Zadanie maturalne CKE (2015 maj): Ruch ciała w jednorodnym polu grawitacyjnym',
    year: '2015 maj',
    difficulty: 2,
    source: 'Matura CKE 2015 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2015-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Spadek swobodny', 'Pole grawitacyjne', 'Kinematyka'],
    image: 'img/cke_2015_zad1.png',
    problem: `<div class="task-matura">
<p class="img-placeholder-container"><strong>[TUTAJ WKLEJ GRAFIKĘ: img/cke_2015_zad1.png]</strong></p>
<p>Ciało wyrzucono z wysokości $h$ z prędkością początkową $v_0$ w kierunku poziomym lub pod kątem w jednorodnym ziemskim polu grawitacyjnym. Pomiń opory powietrza i przyjmij $g = 9{,}81\\text{ m/s}^2$.</p>

<h4>Zadanie 1.1 (0–2 pkt)</h4>
<p>Wyznacz czas lotu ciała oraz zasięg rzutu w zależności od podanych parametrów początkowych.</p>

<h4>Zadanie 1.2 (0–2 pkt)</h4>
<p>Oblicz prędkość końcową ciała w momencie uderzenia o ziemię i jej kąt nachylenia do poziomu.</p>
</div>`,
    solution: {
      intuition: 'Ruch jest złożeniem niezależnych ruchów w kierunku poziomym (jednostajny) i pionowym (jednostajnie zmienny).',
      givens: '$g = 9{,}81\\text{ m/s}^2$, brak oporów powietrza.',
      steps: [
        {
          title: 'Zadanie 1.1 – Czas i zasięg',
          content: 'Czas spadania wynika z równania $h = \\frac{g t^2}{2} \\Rightarrow t = \\sqrt{\\frac{2h}{g}}$. Zasięg rzutu: $z = v_0 \\cdot t$.'
        },
        {
          title: 'Zadanie 1.2 – Prędkość końcowa',
          content: '$v_k = \\sqrt{v_0^2 + (gt)^2} = \\sqrt{v_0^2 + 2gh}$. Kąt $\\alpha$: $\\operatorname{tg}\\alpha = \\frac{gt}{v_0}$.'
        }
      ],
      numerical: '$t = \\sqrt{\\frac{2h}{g}}$, $v_k = \\sqrt{v_0^2 + 2gh}$',
      answer: 'Parametry ruchu wynikają ze wzorów na rzut w polu grawitacyjnym.',
      trap: 'Pamiętaj o zachowaniu energii mechanicznej: $E_k + E_p = const$.'
    }
  }
];

// Replace the sub-matura-cke subchapter tasks
let foundSubchapter = false;
cleanedData['matura-fizyka'].sections.forEach(sec => {
  if (sec.subchapters) {
    sec.subchapters.forEach(sub => {
      if (sub.id === 'sub-matura-cke') {
        sub.tasks = maturaTasks;
        foundSubchapter = true;
      }
    });
  }
});

if (!foundSubchapter) {
  console.error('Subchapter sub-matura-cke not found!');
  process.exit(1);
}

// Format JSON back cleanly
const newJsonText = JSON.stringify(cleanedData, null, 2);
const finalContent = headerText + newJsonText + ';\n';

fs.writeFileSync('js/data-courses.js', finalContent, 'utf8');
console.log('SUCCESSFULLY updated js/data-courses.js!');
