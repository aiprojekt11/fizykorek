const fs = require('fs');

const coursesPath = 'c:/Users/barto/Desktop/aplikacja/js/data-courses.js';
let content = fs.readFileSync(coursesPath, 'utf8');

const newTasks = [
  {
    "id": "matura-cke-2026-styczen-zad-1",
    "number": 2026,
    "title": "Zadanie maturalne CKE (2026 styczeń próbna)",
    "year": "2026 styczeń próbna",
    "difficulty": 2,
    "source": "Matura próbna CKE 2026 (Styczeń)",
    "link": "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
    "tags": ["Matura CKE", "Dynamika", "Zasady Newtona", "Pęd"],
    "image": "img/cke_2026_styczen_zad1_wykres1.png",
    "problem": `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Ciało 𝒞 o masie $m = 4{,}0\\text{ kg}$ porusza się wzdłuż osi $x$ w inercjalnym układzie odniesienia.</p>
<p>Na poniższym wykresie przedstawiono zależność współrzędnej $p_x$ pędu ciała 𝒞 od czasu $t$ w tym ruchu.</p>
<p>Od chwili $t = 0\\text{ s}$ do chwili $t = 8\\text{ s}$ na ciało 𝒞 działa siła wypadkowa $\\vec{F}_{W1}$.</p>
<p>Od chwili $t = 8\\text{ s}$ do chwili $t = 12\\text{ s}$ na ciało 𝒞 działa siła wypadkowa $\\vec{F}_{W2}$.</p>
<p>Siła $\\vec{F}_{W2}$ jest wypadkową sił $\\vec{F}_3$ i $\\vec{F}_4$ skierowanych wzdłuż osi $x$. Siła $\\vec{F}_3$ ma wartość $F_3 = 20\\text{ N}$ i zwrot zgodny ze zwrotem osi $x$, natomiast siła $\\vec{F}_4$ ma zwrot przeciwny do zwrotu osi $x$.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2026_styczen_zad1_wykres1.png]
</div>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p>
<p>Przyśpieszenie ciała 𝒞 podczas ruchu od chwili $t = 0\\text{ s}$ do chwili $t = 8\\text{ s}$ ma wartość</p>
<ol type="A">
<li>$a = 1{,}25\\text{ m/s}^2$</li>
<li>$a = 2{,}19\\text{ m/s}^2$</li>
<li>$a = 5{,}0\\text{ m/s}^2$</li>
<li>$a = 8{,}75\\text{ m/s}^2$</li>
</ol>

<h4>Zadanie 1.2. (0–1)</h4>
<p><strong>Dokończ zdanie. Wybierz odpowiedź A albo B oraz odpowiedź 1. albo 2.</strong></p>
<div class="pf-table">
  <div class="pf-row">
    <div class="pf-col" style="flex: 2;">Siła wypadkowa $\\vec{F}_{W2}$ ma zwrot</div>
    <div class="pf-col" style="flex: 2;">
        <strong>A.</strong> zgodny ze zwrotem prędkości ciała 𝒞,<br>
        <strong>B.</strong> przeciwny do zwrotu prędkości ciała 𝒞,
    </div>
    <div class="pf-col" style="flex: 1;">a wartość tej siły jest</div>
    <div class="pf-col" style="flex: 2;">
        <strong>1.</strong> większa od wartości siły $\\vec{F}_{W1}$.<br>
        <strong>2.</strong> mniejsza od wartości siły $\\vec{F}_{W1}$.
    </div>
  </div>
</div>

<h4>Zadanie 1.3. (0–3)</h4>
<p><strong>Oblicz wartość siły $\\vec{F}_4$. Zapisz obliczenia.</strong></p>

<h4>Zadanie 1.4. (0–2)</h4>
<p><strong>Oblicz drogę, jaką przebyło ciało 𝒞 od chwili $t_0 = 0\\text{ s}$ do chwili $t = 12\\text{ s}$. Zapisz obliczenia.</strong></p>
</div>`,
    "solution": {
      "intuition": "Z II zasady dynamiki Newtona siła wypadkowa jest równa szybkości zmiany pędu $F = \\frac{\\Delta p}{\\Delta t}$, czyli jest nachyleniem wykresu $p(t)$.",
      "givens": "$m = 4{,}0\\text{ kg}$, $F_3 = 20\\text{ N}$",
      "steps": [
        { "title": "Zadanie 1.1", "content": "Z wykresu odczytujemy zmianę pędu. Obliczamy siłę i przyśpieszenie." },
        { "title": "Zadanie 1.2", "content": "Analizujemy nachylenie dla $F_{W2}$." },
        { "title": "Zadanie 1.3", "content": "Obliczamy $F_{W2} = F_3 - F_4$ i wyznaczamy $F_4$." },
        { "title": "Zadanie 1.4", "content": "Droga to pole pod wykresem $v(t)$, gdzie $v(t) = p(t)/m$." }
      ],
      "numerical": "1.1: A, 1.3: $F_4 = 40\\text{ N}$",
      "answer": "1.1: A, 1.2: B 1",
      "trap": "Uważaj na zwroty sił przy dodawaniu wektorów."
    }
  },
  {
    "id": "matura-cke-2025-czerwiec-zad-2",
    "number": 2025,
    "title": "Zadanie maturalne CKE (2025 czerwiec)",
    "year": "2025 czerwiec",
    "difficulty": 2,
    "source": "Matura CKE 2025 (Czerwiec)",
    "link": "https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf",
    "tags": ["Matura CKE", "Tarcie", "Równia pochyła", "Dynamika"],
    "image": "img/cke_2025_czerwiec_zad2_rys1.png",
    "problem": `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Uczniowie wykonywali doświadczenie z wagą. Zakładamy, że waga wskazuje wartość siły nacisku działającej na wagę prostopadle do jej powierzchni, podzielonej przez wartość $g$ przyśpieszenia grawitacyjnego.</p>
<p>Uczniowie ustawili wagę na poziomej ławce i położyli na niej klocek. Waga wskazała wartość $m_1$ (zobacz rysunek 1.). Następnie uczniowie nachylili ławkę pod kątem $\\alpha$ do poziomu i ponownie położyli na wadze ten sam klocek. Waga wskazała wartość $m_2$ (zobacz rysunek 2.).</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2025_czerwiec_zad2_rys1.png]
</div>

<p>Waga oraz klocek pozostały nieruchome.</p>
<p>Na ten klocek działają trzy siły w układzie inercjalnym:</p>
<ul>
<li>$F_t$ – siła tarcia statycznego pomiędzy wagą a klockiem, działająca na klocek przy nachylonej ławce,</li>
<li>$F_g$ – siła grawitacji działająca na klocek,</li>
<li>$F_r$ – siła reakcji wagi działająca na klocek (siła nacisku wagi na klocek).</li>
</ul>

<h4>Zadanie 2.1. (0–2)</h4>
<p>Przyjmij, że punkt $S$ na diagramie jest reprezentacją klocka. Widok nachylonej ławki i klocka pozostawiono dla kontekstu. Długość boku kratki na diagramie odpowiada umownej jednostce siły.</p>
<p>Oznaczono siłę grawitacji $\\vec{F}_g$.</p>
<p><strong>Na diagramie narysuj i oznacz siłę tarcia $\\vec{F}_t$ oraz siłę reakcji wagi $\\vec{F}_r$, działające na klocek (przyłożone w punkcie $S$). Zachowaj odpowiednie kierunki, zwroty oraz dokładne długości wektorów, odpowiadające wartościom tych sił.</strong></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2025_czerwiec_zad2_rys2.png]
</div>

<h4>Zadanie 2.2. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>
<div class="pf-table">
  <div class="pf-row">
    <div class="pf-col" style="flex: 2;">Wskazania wagi $m_1$ oraz $m_2$ – opisane w zadaniu 2. – spełniają relację</div>
    <div class="pf-col" style="flex: 1;">
        <strong>A.</strong> $m_1 > m_2$,<br>
        <strong>B.</strong> $m_1 = m_2$,<br>
        <strong>C.</strong> $m_1 < m_2$,
    </div>
    <div class="pf-col" style="flex: 1;">ponieważ po nachyleniu ławki wartość siły nacisku klocka na wagę</div>
    <div class="pf-col" style="flex: 2;">
        <strong>1.</strong> zwiększyła się.<br>
        <strong>2.</strong> nie zmieniła się.<br>
        <strong>3.</strong> zmniejszyła się.
    </div>
  </div>
</div>

<h4>Zadanie 2.3. (0–1)</h4>
<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<p>Gdy kąt nachylenia $\\alpha$ ławki do poziomu rośnie, a waga oraz klocek o masie $m$ nie poruszają się względem ławki, to</p>
<ol>
<li>wartość siły tarcia statycznego między wagą a klockiem wyraża się wzorem $F_t = mg \\sin\\alpha$.</li>
<li>wartość siły tarcia statycznego pomiędzy wagą a klockiem maleje.</li>
</ol>
</div>`,
    "solution": {
      "intuition": "Rozkład sił na równi pochyłej pokazuje, że siła nacisku maleje z kątem nachylenia (składowa prostopadła do powierzchni).",
      "givens": "Klocek jest w spoczynku, więc siły się równoważą.",
      "steps": [
        { "title": "Zadanie 2.1", "content": "Należy rozłożyć ciężar na składową prostopadłą $F_{g\\perp} = F_r$ i równoległą $F_{g\\parallel} = F_t$." },
        { "title": "Zadanie 2.2", "content": "Skoro $N = mg \\cos\\alpha$, a $\\cos\\alpha < 1$, to $N$ maleje." },
        { "title": "Zadanie 2.3", "content": "Z warunku równowagi $F_t = mg \\sin\\alpha$. Funkcja sinus rośnie dla małych kątów, więc siła tarcia rośnie." }
      ],
      "numerical": "2.2: A, 3",
      "answer": "2.2: A 3; 2.3: 1. P, 2. F",
      "trap": "Nie myl tarcia kinetycznego z tarciem statycznym."
    }
  },
  {
    "id": "matura-cke-2024-maj-zad-1",
    "number": 2024,
    "title": "Zadanie maturalne CKE (2024 maj)",
    "year": "2024 maj",
    "difficulty": 3,
    "source": "Matura CKE 2024 (Maj)",
    "link": "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf",
    "tags": ["Matura CKE", "Opór powietrza", "Spadek swobodny", "Dynamika"],
    "image": "img/cke_2024_maj_zad1_wykres.png",
    "problem": `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Kropla wody oderwała się od dachu budynku w chwili $t_A$ i następnie opadała pionowo w powietrzu. Na poniższym wykresie przedstawiono zależność wartości $v$ prędkości kropli od czasu $t$ od chwili $t_A = 0\\text{ s}$ do chwili $t_F = 4\\text{ s}$, w której kropla uderzyła o podłoże.</p>
<p>Na wykresie oznaczono wybrane punkty: $A, B, C, D, E, F$. Ruch kropli opisujemy w układzie odniesienia związanym z ziemią i zakładamy, że jest to układ inercjalny.</p>
<p>Do analizy zagadnienia przyjmij uproszczony model zjawiska, w którym:</p>
<ul>
<li>podczas opadania kropli działają na nią dwie siły: siła oporu powietrza $\\vec{F}_o$ oraz siła grawitacji $\\vec{F}_g$ (pomijamy siłę wyporu aerostatycznego)</li>
<li>kropla jest kulą o promieniu $R$, a jej masa się nie zmienia</li>
<li>wartość siły oporu działającej na kroplę wyraża się wzorem:
$$ F_o = k \\rho_p S v^2 $$
gdzie $k$ jest pewnym współczynnikiem, $\\rho_p$ jest gęstością powietrza, $S$ jest polem przekroju poprzecznego przez środek kropli, $v$ jest wartością prędkości kropli</li>
<li>ruch kropli od chwili $t_D$ traktujemy jako jednostajny prostoliniowy, czyli przyjmij, że część $DF$ wykresu jest poziomym odcinkiem.</li>
</ul>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2024_maj_zad1_wykres.png]
</div>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>
<div class="pf-table">
  <div class="pf-row">
    <div class="pf-col" style="flex: 2;">Od chwili $t_A$ do chwili $t_D$ wartość przyśpieszenia kropli</div>
    <div class="pf-col" style="flex: 1;">
        <strong>A.</strong> się zwiększa,<br>
        <strong>B.</strong> się zmniejsza,<br>
        <strong>C.</strong> pozostaje stała,
    </div>
    <div class="pf-col" style="flex: 1;">ponieważ wartość siły wypadkowej działającej w tym czasie na kroplę</div>
    <div class="pf-col" style="flex: 2;">
        <strong>1.</strong> się zwiększa.<br>
        <strong>2.</strong> się zmniejsza.<br>
        <strong>3.</strong> pozostaje stała.
    </div>
  </div>
</div>

<h4>Zadanie 1.2. (0–3)</h4>
<p>Punkt $K$ na diagramach 1.–2. reprezentuje kroplę. Długość boku kratki na każdym diagramie odpowiada umownej jednostce siły. Na diagramach 1.–2. narysowano siłę grawitacji działającą na kroplę, natomiast nie narysowano siły oporu $\\vec{F}_o$.</p>
<p><strong>Na diagramie 1. narysuj i oznacz siłę oporu $\\vec{F}_{oE}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_E = 3{,}6\\text{ s}$. Na diagramie 2. narysuj i oznacz siłę oporu $\\vec{F}_{oB}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_B = 0{,}4\\text{ s}$.</strong></p>
<p>Zachowaj odpowiednie kierunki, zwroty oraz dokładne długości wektorów, odpowiadające wartościom tych sił. Wykorzystaj fakt, że wartość siły oporu jest wprost proporcjonalna do kwadratu wartości prędkości kropli: $F_o \\propto v^2$.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2024_maj_zad1_diagramy.png]
</div>

<h4>Zadanie 1.3. (0–4)</h4>
<p><strong>Wyprowadź wzór pozwalający wyznaczyć $v_E$ – wartość prędkości, z jaką kropla opada w powietrzu ruchem jednostajnym prostoliniowym – w zależności od: promienia kropli $R$, gęstości powietrza $\\rho_p$, gęstości wody $\\rho_w$, wartości przyśpieszenia ziemskiego $g$ oraz współczynnika $k$.</strong></p>
<p>Zapisz odpowiednie równania i przekształcenia oraz podaj postać tego wzoru.<br>
Wskazówka: Objętość kuli o promieniu $R$ wyraża się wzorem $V = \\frac{4}{3}\\pi R^3$.</p>
</div>`,
    "solution": {
      "intuition": "Z ruchem kropli wiąże się osiągnięcie prędkości granicznej, gdy siła oporu zrównuje się z siłą ciężkości.",
      "givens": "$F_o = k \\rho_p S v^2$, $S = \\pi R^2$, $F_g = mg$, $m = \\rho_w V$",
      "steps": [
        { "title": "Zadanie 1.1", "content": "W miarę opadania prędkość rośnie, więc rośnie siła oporu. Siła wypadkowa (ciężar minus opór) maleje, co zmniejsza przyśpieszenie." },
        { "title": "Zadanie 1.2", "content": "W chwili $t_E$ prędkość jest stała, więc $F_{oE} = F_g$ (równowaga). W chwili $t_B$ wyznacz stosunek prędkości by znaleźć długość wektora." },
        { "title": "Zadanie 1.3", "content": "Dla ruchu jednostajnego: $F_g = F_o \\implies \\rho_w \\frac{4}{3}\\pi R^3 g = k \\rho_p (\\pi R^2) v_E^2$. Po przekształceniach uzyskasz wzór końcowy." }
      ],
      "numerical": "1.1: B, 2",
      "answer": "1.1: B 2",
      "trap": "Siła wypadkowa maleje wraz ze wzrostem prędkości."
    }
  }
];

// parse the content to insert newTasks into sub-dynamika-matura
const insertionMarker = '"id": "sub-dynamika-matura",';
const indexOfMarker = content.indexOf(insertionMarker);

if (indexOfMarker !== -1) {
  // Find the 'tasks: [' array that follows this marker
  const tasksMarker = '"tasks": [';
  let indexOfTasks = content.indexOf(tasksMarker, indexOfMarker);
  
  if (indexOfTasks !== -1) {
    const insertPosition = indexOfTasks + tasksMarker.length;
    
    // Check if the array is empty to handle commas correctly
    let nextChar = content.substring(insertPosition).trim()[0];
    
    let jsonToInsert = '\\n' + newTasks.map(t => JSON.stringify(t, null, 4)).join(',\\n');
    
    if (nextChar !== ']') {
        jsonToInsert += ',\\n';
    } else {
        jsonToInsert += '\\n';
    }
    
    content = content.substring(0, insertPosition) + jsonToInsert + content.substring(insertPosition);
    fs.writeFileSync(coursesPath, content, 'utf8');
    console.log('Tasks inserted successfully!');
  } else {
    console.log('Could not find tasks array.');
  }
} else {
  console.log('Could not find sub-dynamika-matura.');
}

