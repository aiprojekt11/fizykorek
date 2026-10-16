const fs = require('fs');
const vm = require('vm');

const coursesPath = 'js/data-courses.js';
const content = fs.readFileSync(coursesPath, 'utf8');

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

const courses = sandbox.window.FIZYKOREK_COURSES;
const dynSection = courses['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
const subMatura = dynSection.subchapters.find(s => s.id === 'sub-dynamika-matura');

const updatedProblems = {
  'matura-cke-2026-styczen-zad-1': `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Ciało $\\mathcal{C}$ o masie $m = 4{,}0\\text{ kg}$ porusza się wzdłuż osi $x$ w inercjalnym układzie odniesienia. Na poniższym wykresie przedstawiono zależność współrzędnej $p_x$ pędu ciała $\\mathcal{C}$ od czasu $t$ w tym ruchu.</p>

<div class="chart-container-svg">
<img src="img/cke_2026_styczen_zad1_wykres1.png" alt="Wykres p_x(t) od t=0 do t=12 s" class="theory-img" style="max-height: 360px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Od chwili $t = 0\\text{ s}$ do chwili $t = 8\\text{ s}$ na ciało $\\mathcal{C}$ działa siła wypadkowa $\\vec{F}_{W1}$.</p>
<p>Od chwili $t = 8\\text{ s}$ do chwili $t = 12\\text{ s}$ na ciało $\\mathcal{C}$ działa siła wypadkowa $\\vec{F}_{W2}$.</p>
<p>Siła $\\vec{F}_{W2}$ jest wypadkową sił $\\vec{F}_3$ i $\\vec{F}_4$ skierowanych wzdłuż osi $x$. Siła $\\vec{F}_3$ ma wartość $F_3 = 20\\text{ N}$ i zwrot <u>zgodny</u> ze zwrotem osi $x$, natomiast siła $\\vec{F}_4$ ma zwrot <u>przeciwny</u> do zwrotu osi $x$.</p>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p>
<p>Przyśpieszenie ciała $\\mathcal{C}$ podczas ruchu od chwili $t = 0\\text{ s}$ do chwili $t = 8\\text{ s}$ ma wartość</p>
<ol type="A">
<li>$a = 1{,}25\\text{ m/s}^2$</li>
<li>$a = 2{,}19\\text{ m/s}^2$</li>
<li>$a = 5{,}0\\text{ m/s}^2$</li>
<li>$a = 8{,}75\\text{ m/s}^2$</li>
</ol>

<h4>Zadanie 1.2. (0–1)</h4>
<p><strong>Dokończ zdanie. Wybierz odpowiedź A albo B oraz odpowiedź 1. albo 2.</strong></p>
<p>Siła wypadkowa $\\vec{F}_{w2}$ ma zwrot</p>
<table class="cke-table" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
  <tbody>
    <tr>
      <td style="width: 5%; text-align: center; font-weight: bold;">A.</td>
      <td style="width: 32%;">zgodny ze zwrotem prędkości ciała $\\mathcal{C}$,</td>
      <td rowspan="2" style="width: 26%; text-align: center; vertical-align: middle; background: #ffffff;">a wartość tej siły jest</td>
      <td style="width: 5%; text-align: center; font-weight: bold;">1.</td>
      <td style="width: 32%;">większa od wartości siły $\\vec{F}_{w1}$.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">B.</td>
      <td>przeciwny do zwrotu prędkości ciała $\\mathcal{C}$,</td>
      <td style="text-align: center; font-weight: bold;">2.</td>
      <td>mniejsza od wartości siły $\\vec{F}_{w1}$.</td>
    </tr>
  </tbody>
</table>

<h4>Zadanie 1.3. (0–3)</h4>
<p><strong>Oblicz wartość siły $\\vec{F}_4$. Zapisz obliczenia.</strong></p>

<h4>Zadanie 1.4. (0–2)</h4>
<p><strong>Oblicz drogę, jaką przebyło ciało $\\mathcal{C}$ od chwili $t_0 = 0\\text{ s}$ do chwili $t = 12\\text{ s}$. Zapisz obliczenia.</strong></p>
</div>`,

  'matura-cke-2025-czerwiec-zad-2': `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Uczniowie wykonywali doświadczenie z wagą. Zakładamy, że waga wskazuje wartość siły nacisku <u>działającej na wagę prostopadle</u> do jej powierzchni, podzielonej przez wartość $g$ przyśpieszenia grawitacyjnego.</p>
<p>Uczniowie ustawili wagę na poziomej ławce i położyli na niej klocek. Waga wskazała wartość $m_1$ (zobacz rysunek 1.). Następnie uczniowie nachylili ławkę pod kątem $\\alpha$ do poziomu i ponownie położyli na wadze ten sam klocek. Waga wskazała wartość $m_2$ (zobacz rysunek 2.).</p>

<div class="chart-container-svg">
<img src="img/cke_2025_czerwiec_zad2_rys1.png" alt="Rysunek 1 i Rysunek 2 - doświadczenie z wagą" class="theory-img" style="max-height: 280px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Waga oraz klocek <u>pozostały nieruchome</u>.</p>
<p>Na ten klocek działają trzy siły w układzie inercjalnym:</p>
<ul>
<li>$\\vec{F}_t$ – siła tarcia statycznego pomiędzy wagą a klockiem, działająca na klocek przy nachylonej ławce,</li>
<li>$\\vec{F}_g$ – siła grawitacji działająca na klocek,</li>
<li>$\\vec{F}_r$ – siła reakcji wagi działająca na klocek (siła nacisku wagi na klocek).</li>
</ul>

<h4>Zadanie 2.1. (0–2)</h4>
<p>Przyjmij, że punkt $S$ na diagramie jest reprezentacją klocka. Widok nachylonej ławki i klocka pozostawiono dla kontekstu. Długość boku kratki na diagramie odpowiada umownej jednostce siły.</p>
<p>Oznaczono siłę grawitacji $\\vec{F}_g$.</p>
<p><strong>Na diagramie narysuj i oznacz siłę tarcia $\\vec{F}_t$ oraz siłę reakcji wagi $\\vec{F}_r$, działające na klocek (przyłożone w punkcie $S$).</strong></p>
<p><strong>Zachowaj odpowiednie kierunki, zwroty oraz <u>dokładne długości</u> wektorów, odpowiadające wartościom tych sił.</strong></p>

<div class="chart-container-svg">
<img src="img/cke_2025_czerwiec_zad2_rys2.png" alt="Diagram z wektorem Fg na siatce" class="theory-img" style="max-height: 420px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.2. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>
<p>Wskazania wagi $m_1$ oraz $m_2$ – opisane w zadaniu 2. – spełniają relację</p>
<table class="cke-table" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
  <tbody>
    <tr>
      <td style="width: 5%; text-align: center; font-weight: bold;">A.</td>
      <td style="width: 25%;">$m_1 > m_2$,</td>
      <td rowspan="3" style="width: 40%; text-align: center; vertical-align: middle; background: #ffffff;">ponieważ po nachyleniu ławki wartość siły nacisku klocka na wagę</td>
      <td style="width: 5%; text-align: center; font-weight: bold;">1.</td>
      <td style="width: 25%;">zwiększyła się.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">B.</td>
      <td>$m_1 = m_2$,</td>
      <td style="text-align: center; font-weight: bold;">2.</td>
      <td>nie zmieniła się.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">C.</td>
      <td>$m_1 < m_2$,</td>
      <td style="text-align: center; font-weight: bold;">3.</td>
      <td>zmniejszyła się.</td>
    </tr>
  </tbody>
</table>

<h4>Zadanie 2.3. (0–1)</h4>
<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<p>Gdy kąt nachylenia $\\alpha$ ławki do poziomu rośnie, a waga oraz klocek o masie $m$ nie poruszają się względem ławki, to</p>
<table class="pf-table">
<tbody>
<tr>
<td class="pf-num">1.</td>
<td class="pf-text">wartość siły tarcia statycznego między wagą a klockiem wyraża się wzorem $F_t = mg \\sin\\alpha$.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
<tr>
<td class="pf-num">2.</td>
<td class="pf-text">wartość siły tarcia statycznego pomiędzy wagą a klockiem maleje.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
</tbody>
</table>
</div>`,

  'matura-cke-2024-czerwiec-zad-1': `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Deseczka z wycięciami, w których umieszczono trzy jednakowe monety: M1, M2, M3, obraca się ze stałą prędkością kątową $\\omega$ po poziomej powierzchni blatu stołu wokół osi obrotu, przechodzącej przez punkt $O$. W wyniku tego obrotu torami ruchów środków tych monet są okręgi o wspólnym środku $O$.</p>
<p>Masy monet są jednakowe i równe $m$:</p>
<p style="text-align:center;">$m_1 = m_2 = m_3 = m$</p>
<p>Odległości środków monet M1, M2, M3 od osi obrotu oznaczymy – odpowiednio – jako: $r_1, r_2, r_3$ (zobacz rysunek). Stosunki tych odległości wynoszą $r_1 : r_2 : r_3 = 1 : 2 : 3$, to znaczy:</p>
<p style="text-align:center;">$\\frac{r_1}{r_2} = \\frac{1}{2} \\qquad \\text{oraz} \\qquad \\frac{r_1}{r_3} = \\frac{1}{3} \\qquad \\text{oraz} \\qquad \\frac{r_2}{r_3} = \\frac{2}{3}$</p>

<div class="chart-container-svg">
<img src="img/cke_2024_czerwiec_zad1_rysunek.png" alt="Rysunek deseczki z monetami" class="theory-img" style="max-height: 250px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Ruch deseczki i monet rozpatrujemy w inercjalnym układzie odniesienia związanym z ziemią, w jednorodnym, ziemskim polu grawitacyjnym.</p>

<h4>Zadanie 1.1. (0–2)</h4>
<p>Rozważamy sytuację, gdy deseczka z monetami <u>obraca się ze stałą prędkością kątową $\\omega$</u>.</p>
<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<table class="pf-table">
<tbody>
<tr>
<td class="pf-num">1.</td>
<td class="pf-text">Wektory przyśpieszeń w ruchu postępowym monet są skierowane do osi obrotu $O$.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
<tr>
<td class="pf-num">2.</td>
<td class="pf-text">Siła wypadkowa działająca na monetę M3 ma <u>trzy razy większą</u> wartość od wartości siły wypadkowej działającej na monetę M1.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
<tr>
<td class="pf-num">3.</td>
<td class="pf-text">Prędkości liniowe (prędkości w ruchu postępowym) monet M1, M2 i M3 mają te same wartości.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
</tbody>
</table>

<h4>Zadanie 1.2. (0–4)</h4>
<p>Obracająca się deseczka została nagle zatrzymana, wskutek czego monety wypadły z wycięć i poruszały się dalej po stole wzdłuż linii prostych. Rozważamy ruch postępowy monet od chwili zatrzymania się deseczki do chwili zatrzymania się ostatniej monety na stole. W tym czasie monety M1, M2 i M3 przebyły drogi równe odpowiednio: $s_1, s_2$ i $s_3$.</p>
<p>Przyjmij, że współczynnik tarcia kinetycznego o stół jest <u>taki sam</u> dla wszystkich monet oraz że monety <u>nie obracały</u> się podczas tego ruchu.</p>
<p><strong>Oblicz $s_1 : s_2 : s_3$. Zapisz obliczenia.</strong></p>
</div>`,

  'matura-cke-2024-maj-zad-1': `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Kropla wody oderwała się od dachu budynku w chwili $t_A$ i następnie opadała pionowo w powietrzu. Na poniższym wykresie przedstawiono zależność wartości $v$ prędkości kropli od czasu $t$ od chwili $t_A = 0\\text{ s}$ do chwili $t_F = 4\\text{ s}$, w której kropla uderzyła o podłoże.</p>
<p>Na wykresie oznaczono wybrane punkty: $A, B, C, D, E, F$. Ruch kropli opisujemy w układzie odniesienia związanym z ziemią i zakładamy, że jest to układ inercjalny.</p>
<p>Do analizy zagadnienia przyjmij uproszczony model zjawiska, w którym:</p>
<ul>
<li>podczas opadania kropli działają na nią dwie siły: siła oporu powietrza $\\vec{F}_o$ oraz siła grawitacji $\\vec{F}_g$ (pomijamy siłę wyporu aerostatycznego)</li>
<li>kropla jest kulą o promieniu $R$, a jej masa się nie zmienia</li>
<li>wartość siły oporu działającej na kroplę wyraża się wzorem:
<p style="text-align:center;">$F_o = k\\rho_p S v^2$</p>
gdzie $k$ jest pewnym współczynnikiem, $\\rho_p$ jest gęstością powietrza, $S$ jest polem przekroju poprzecznego przez środek kropli, $v$ jest wartością prędkości kropli</li>
<li>ruch kropli od chwili $t_D$ traktujemy jako <u>jednostajny prostoliniowy</u>, czyli przyjmij, że część $DF$ wykresu jest poziomym odcinkiem.</li>
</ul>

<div class="chart-container-svg">
<img src="img/cke_2024_maj_zad1_wykres.png" alt="Wykres prędkości v(t) opadającej kropli wody" class="theory-img" style="max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>
<p>Od chwili $t_A$ do chwili $t_D$ wartość przyśpieszenia kropli</p>
<table class="cke-table" style="width: 100%; border-collapse: collapse; margin: 15px 0;">
  <tbody>
    <tr>
      <td style="width: 5%; text-align: center; font-weight: bold;">A.</td>
      <td style="width: 25%;">się zwiększa,</td>
      <td rowspan="3" style="width: 40%; text-align: center; vertical-align: middle; background: #ffffff;">ponieważ wartość siły wypadkowej działającej w tym czasie na kroplę</td>
      <td style="width: 5%; text-align: center; font-weight: bold;">1.</td>
      <td style="width: 25%;">się zwiększa.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">B.</td>
      <td>się zmniejsza,</td>
      <td style="text-align: center; font-weight: bold;">2.</td>
      <td>się zmniejsza.</td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">C.</td>
      <td>pozostaje stała,</td>
      <td style="text-align: center; font-weight: bold;">3.</td>
      <td>pozostaje stała.</td>
    </tr>
  </tbody>
</table>

<h4>Zadanie 1.2. (0–3)</h4>
<p>Punkt $K$ na diagramach 1.–2. reprezentuje kroplę. Długość boku kratki na każdym diagramie odpowiada umownej jednostce siły. Na diagramach 1.–2. narysowano siłę grawitacji działającą na kroplę, natomiast nie narysowano siły oporu $\\vec{F}_o$.</p>
<p><strong>Na diagramie 1. narysuj i oznacz siłę oporu $\\vec{F}_{oE}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_E = 3{,}6\\text{ s}$. Na diagramie 2. narysuj i oznacz siłę oporu $\\vec{F}_{oB}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_B = 0{,}4\\text{ s}$.</strong></p>
<p><strong>Zachowaj odpowiednie kierunki, zwroty oraz <u>dokładne długości</u> wektorów, odpowiadające wartościom tych sił. Wykorzystaj fakt, że wartość siły oporu jest wprost proporcjonalna do kwadratu wartości prędkości kropli: $F_o \\propto v^2$.</strong></p>

<div class="chart-container-svg">
<img src="img/cke_2024_maj_zad1_diagramy.png" alt="Diagram 1 i 2 - siatki do narysowania wektorów sił" class="theory-img" style="max-height: 420px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 1.3. (0–4)</h4>
<p><strong>Wyprowadź wzór pozwalający wyznaczyć $v_E$ – wartość prędkości, z jaką kropla opada w powietrzu ruchem jednostajnym prostoliniowym – w zależności od: promienia kropli $R$, gęstości powietrza $\\rho_p$, gęstości wody $\\rho_w$, wartości przyśpieszenia ziemskiego $g$ oraz współczynnika $k$.</strong></p>
<p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać tego wzoru.</strong></p>
<p><i>Wskazówka: Objętość kuli o promieniu $R$ wyraża się wzorem $V = \\frac{4}{3}\\pi R^3$.</i></p>
</div>`,

  'matura-cke-informator-2023-zad-1': `<div class="task-matura">
<h4>Zadanie 1. Impulsowe działanie siły</h4>
<p>Na rysunku poniżej przedstawiono ruch ciała o masie $m = 0{,}5\\text{ kg}$ w inercjalnym układzie odniesienia, we współrzędnych $(x, y)$. Początkowo ciało poruszało się swobodnie ruchem jednostajnym z prędkością $\\vec{v}_k$ wzdłuż prostej $k$. W punkcie $A_4$ na ciało zadziałała siła $\\vec{F}$, przy czym czas jej działania był bardzo krótki i wynosił $\\Delta\\tau = 0{,}02\\text{ s}$. Gdy siła przestała działać, ciało poruszało się dalej ruchem jednostajnym z prędkością $\\vec{v}_l$ wzdłuż prostej $l$.</p>
<p>Na wykresie toru narysowano i oznaczono położenia ciała w pierwszym etapie ruchu ($A_1$–$A_4$) i w drugim etapie ruchu ($A_4$–$A_7$). Czas ruchu wzdłuż każdego z odcinków: $A_1 A_2, A_2 A_3, \\dots, A_6 A_7$ był taki sam i wynosił $\\Delta t = 1\\text{ s}$.</p>
<p>Przyjmij model zjawiska, w którym zakładamy, że siła $\\vec{F}$ była stała. Na rysunkach pominięto bardzo krótki paraboliczny fragment toru, gdy na ciało działała siła $\\vec{F}$.</p>

<div class="chart-container-svg">
<img src="img/cke_informator_zad1_tor.png" alt="Wykres toru ruchu we współrzędnych (x, y)" class="theory-img" style="max-height: 280px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Na którym diagramie prawidłowo przedstawiono kierunek i zwrot siły $\\vec{F}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>

<div class="chart-container-svg">
<img src="img/cke_informator_zad1_opcje.png" alt="Diagramy A, B, C, D do Zadania 1.1" class="theory-img" style="max-height: 320px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 1.2. (0–3)</h4>
<p><strong>Oblicz wartość siły $\\vec{F}$. Zapisz obliczenia.</strong></p>
</div>`
};

let count = 0;
subMatura.tasks.forEach(t => {
  if (updatedProblems[t.id]) {
    t.problem = updatedProblems[t.id];
    count++;
    console.log(`Updated formatting for task: ${t.id}`);
  }
});

console.log(`Total tasks updated: ${count}`);

const updatedContent = `window.FIZYKOREK_COURSES = ${JSON.stringify(courses, null, 2)};`;
fs.writeFileSync(coursesPath, updatedContent, 'utf8');
console.log('Successfully written to js/data-courses.js');
