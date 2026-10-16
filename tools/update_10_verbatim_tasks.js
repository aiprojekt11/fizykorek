const fs = require('fs');

const tasks = [
  {
    id: "matura-cke-2026-styczen-zad-1",
    number: 202601,
    title: "Matura próbna styczeń 2026 zad. 1 nowa formuła",
    year: "2026 styczeń próbna",
    difficulty: 3,
    source: "Matura próbna CKE 2026 (Styczeń)",
    link: "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Zasady dynamiki Newtona",
      "Pęd",
      "Siła wypadkowa"
    ],
    image: "img/cke_2026_styczen_zad1_wykres1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Ciało $\\mathcal{C}$ o masie $m = 4{,}0\\text{ kg}$ porusza się wzdłuż osi $x$ w inercjalnym układzie odniesienia. Na poniższym wykresie przedstawiono zależność współrzędnej $p_x$ pędu ciała $\\mathcal{C}$ od czasu $t$ w tym ruchu.</p>
<p>Od chwili $t = 0\\text{ s}$ do chwili $t = 8\\text{ s}$ na ciało $\\mathcal{C}$ działa siła wypadkowa $\\vec{F}_{W1}$.</p>
<p>Od chwili $t = 8\\text{ s}$ do chwili $t = 12\\text{ s}$ na ciało $\\mathcal{C}$ działa siła wypadkowa $\\vec{F}_{W2}$.</p>
<p>Siła $\\vec{F}_{W2}$ jest wypadkową sił $\\vec{F}_3$ i $\\vec{F}_4$ skierowanych wzdłuż osi $x$. Siła $\\vec{F}_3$ ma wartość $F_3 = 20\\text{ N}$ i zwrot zgodny ze zwrotem osi $x$, natomiast siła $\\vec{F}_4$ ma zwrot przeciwny do zwrotu osi $x$.</p>

<div class="chart-container-svg">
<img src="img/cke_2026_styczen_zad1_wykres1.png" alt="Wykres p_x(t) od t=0 do t=12 s" class="theory-img" style="max-height: 360px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

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
<div class="pf-table">
  <div class="pf-row">
    <div class="pf-col" style="flex: 1;">
      <div style="font-weight: 600; margin-bottom: 8px;">Siła wypadkowa $\\vec{F}_{W2}$ ma zwrot</div>
      <div style="margin-bottom: 6px;"><strong>A.</strong> zgodny ze zwrotem prędkości ciała $\\mathcal{C}$,</div>
      <div><strong>B.</strong> przeciwny do zwrotu prędkości ciała $\\mathcal{C}$,</div>
    </div>
    <div class="pf-col" style="flex: 1;">
      <div style="font-weight: 600; margin-bottom: 8px;">a wartość tej siły jest</div>
      <div style="margin-bottom: 6px;"><strong>1.</strong> większa od wartości siły $\\vec{F}_{W1}$.</div>
      <div><strong>2.</strong> mniejsza od wartości siły $\\vec{F}_{W1}$.</div>
    </div>
  </div>
</div>

<h4>Zadanie 1.3. (0–3)</h4>
<p><strong>Oblicz wartość siły $\\vec{F}_4$. Zapisz obliczenia.</strong></p>

<h4>Zadanie 1.4. (0–2)</h4>
<p><strong>Oblicz drogę, jaką przebyło ciało $\\mathcal{C}$ od chwili $t_0 = 0\\text{ s}$ do chwili $t = 12\\text{ s}$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: "Z uogólnionej II zasady dynamiki Newtona siła wypadkowa jest równa pochodnej pędu po czasie (nachyleniu wykresu $p(t)$): $F_W = \\frac{\\Delta p}{\\Delta t}$. Przyśpieszenie ciała to $a = F_W / m$.",
      givens: "$m = 4{,}0\\text{ kg}$, $p_x(0) = 30\\text{ kg}\\cdot\\text{m/s}$, $p_x(8) = 70\\text{ kg}\\cdot\\text{m/s}$, $p_x(12) = 10\\text{ kg}\\cdot\\text{m/s}$, $F_3 = 20\\text{ N}$",
      steps: [
        {
          title: "Zadanie 1.1",
          content: "W przedziale $[0, 8\\text{ s}]$ zmiana pędu wynosi $\\Delta p = 70 - 30 = 40\\text{ kg}\\cdot\\text{m/s}$. Wartość siły wypadkowej: $F_{W1} = \\frac{\\Delta p}{\\Delta t} = \\frac{40\\text{ kg}\\cdot\\text{m/s}}{8\\text{ s}} = 5\\text{ N}$. Zatem przyśpieszenie ciała wynosi $a = \\frac{F_{W1}}{m} = \\frac{5\\text{ N}}{4{,}0\\text{ kg}} = 1{,}25\\text{ m/s}^2$. Prawidłowa odpowiedź: **A**."
        },
        {
          title: "Zadanie 1.2",
          content: "W przedziale $[8, 12\\text{ s}]$ pęd $p_x$ jest dodatni (zgodny ze zwrotem osi $x$), ale maleje z $70$ do $10\\text{ kg}\\cdot\\text{m/s}$, więc ciało porusza się ruchem opóźnionym – siła wypadkowa $\\vec{F}_{W2}$ ma zwrot przeciwny do prędkości ciała (odpowiedź **B**). Wartość siły wypadkowej wynosi $F_{W2} = \\left|\\frac{10 - 70}{12 - 8}\\right| = \\left|\\frac{-60}{4}\\right| = 15\\text{ N}$. Ponieważ $F_{W2} = 15\\text{ N} > F_{W1} = 5\\text{ N}$, wartość ta jest większa od wartości siły $F_{W1}$ (odpowiedź **1**). Prawidłowa para: **B 1**."
        },
        {
          title: "Zadanie 1.3",
          content: "Wektorowo: $\\vec{F}_{W2} = \\vec{F}_3 + \\vec{F}_4$. Na osi $x$: $F_{W2x} = F_{3x} + F_{4x}$. Wiemy, że siła wypadkowa ma zwrot przeciwny do osi $x$, więc $F_{W2x} = -15\\text{ N}$. Siła $F_3$ ma zwrot zgodny z osią ($F_{3x} = +20\\text{ N}$), a $F_4$ przeciwny ($F_{4x} = -F_4$). Zatem: $-15 = 20 - F_4 \\implies F_4 = 20 + 15 = 35\\text{ N}$."
        },
        {
          title: "Zadanie 1.4",
          content: "Ponieważ pęd ciała w całym przedziale czasu jest dodatni ($p_x > 0$), ciało nie zawróciło. Droga jest równa polu pod wykresem $v(t)$, gdzie $v(t) = \\frac{p_x(t)}{m}$:\\n$v(0) = \\frac{30}{4} = 7{,}5\\text{ m/s}$, $v(8) = \\frac{70}{4} = 17{,}5\\text{ m/s}$, $v(12) = \\frac{10}{4} = 2{,}5\\text{ m/s}$.\\nDroga w pierwszym etapie (trapez): $s_1 = \\frac{7{,}5 + 17{,}5}{2} \\cdot 8 = 12{,}5 \\cdot 8 = 100\\text{ m}$.\\nDroga w drugim etapie (trapez): $s_2 = \\frac{17{,}5 + 2{,}5}{2} \\cdot 4 = 10 \\cdot 4 = 40\\text{ m}$.\\nCałkowita droga: $s = s_1 + s_2 = 100\\text{ m} + 40\\text{ m} = 140\\text{ m}$."
        }
      ],
      numerical: "1.1: A; 1.2: B 1; 1.3: $F_4 = 35\\text{ N}$; 1.4: $s = 140\\text{ m}$",
      answer: "1.1: A; 1.2: B 1; 1.3: $F_4 = 35\\text{ N}$; 1.4: $s = 140\\text{ m}$",
      trap: "Pamiętaj, że $F_{W2}$ ma zwrot przeciwny do osi $x$, więc jej współrzędna wynosi $-15\\text{ N}$, co daje $F_4 = 35\\text{ N}$, a nie $20-15=5\\text{ N}$."
    }
  },
  {
    id: "matura-cke-2026-styczen-zad-2",
    number: 202602,
    title: "Matura próbna styczeń 2026 zad. 2 nowa formuła",
    year: "2026 styczeń próbna",
    difficulty: 3,
    source: "Matura próbna CKE 2026 (Styczeń)",
    link: "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "III zasada dynamiki",
      "Zasada zachowania pędu",
      "Zderzenia sprężyste"
    ],
    image: "img/cke_2026_styczen_zad2_rys1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Kula K1 o masie $m_1$ porusza się z prędkością $\\vec{v}_1$, a kula K2 o masie $m_2$ spoczywa. Wektor $\\vec{v}_1$ jest skierowany w stronę środka kuli K2. Sytuację ilustruje rysunek 1.</p>

<div class="chart-container-svg">
<img src="img/cke_2026_styczen_zad2_rys1.png" alt="Rysunek 1 - przed zderzeniem" class="theory-img" style="max-height: 180px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>W pewnej chwili kula K1 uderzyła w kulę K2. W wyniku tego obie kule uzyskały prędkości o przeciwnych zwrotach i o tych samych wartościach. Sytuację ilustruje rysunek 2.</p>

<div class="chart-container-svg">
<img src="img/cke_2026_styczen_zad2_rys2.png" alt="Rysunek 2 - po zderzeniu" class="theory-img" style="max-height: 180px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Przyjmujemy model zjawiska, w którym:</p>
<ul>
<li>opisany ruch kul odbywa się w inercjalnym układzie odniesienia</li>
<li>przed zderzeniem i po zderzeniu kule poruszają się ruchem jednostajnym prostoliniowym</li>
<li>zderzenie kul jest idealnie sprężyste</li>
<li>kule oddziałują ze sobą tylko podczas zderzenia</li>
<li>kule się nie obracają.</li>
</ul>

<h4>Zadanie 2.1. (0–1)</h4>
<p><strong>Na rysunku 3. poniżej narysuj parę sił wzajemnego oddziaływania między kulami podczas ich zderzenia. Każdą z sił przyłóż – odpowiednio – w środku kuli K1 lub środku kuli K2. Zachowaj odpowiednie kierunki i zwroty tych sił oraz relację (większy, równy, mniejszy) między ich wartościami.</strong></p>

<div class="chart-container-svg">
<img src="img/cke_2026_styczen_zad2_rys3.png" alt="Rysunek 3 - zderzenie kul" class="theory-img" style="max-height: 200px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.2. (0–4)</h4>
<p><strong>Oblicz iloraz $\\frac{m_2}{m_1}$ mas tych kul. Zapisz obliczenia. W rozwiązaniu zapisz równania wynikające z zasad zachowania odpowiednich wielkości.</strong></p>
</div>`,
    solution: {
      intuition: "Z III zasady dynamiki siły akcji i reakcji są równe co do wartości, przeciwne co do zwrotu i przyłożone do różnych ciał. Zderzenie sprężyste spełnia zasadę zachowania pędu oraz zasadę zachowania energii kinetycznej.",
      givens: "Przed zderzeniem: $v_{1p} = v_1$, $v_{2p} = 0$. Po zderzeniu: $v_{1k} = -v_2$, $v_{2k} = +v_2$ (te same wartości prędkości, przeciwne zwroty).",
      steps: [
        {
          title: "Zadanie 2.1",
          content: "Zgodnie z III zasadą dynamiki Newtona (zasadą akcji i reakcji): siła wywierana przez kulę K2 na kulę K1 ($\\vec{F}_{21}$) ma zwrot w lewo (hamujący K1), natomiast siła wywierana przez kulę K1 na kulę K2 ($\\vec{F}_{12}$) ma zwrot w prawo. Wektory leżą na prostej łączącej środki kul, mają jednakowe długości ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$) i są przyłożone odpowiednio w środkach geometrycznych kuli K1 oraz kuli K2."
        },
        {
          title: "Zadanie 2.2",
          content: "1. Z zasady zachowania pędu dla układu kul:\\n$ m_1 v_1 = -m_1 v_2 + m_2 v_2 \\implies m_1 v_1 = (m_2 - m_1) v_2 \\implies v_1 = \\frac{m_2 - m_1}{m_1} v_2 $\\n2. Z zasady zachowania energii mechanicznej (zderzenie idealnie sprężyste):\\n$ \\frac{1}{2} m_1 v_1^2 = \\frac{1}{2} m_1 v_2^2 + \\frac{1}{2} m_2 v_2^2 \\implies m_1 v_1^2 = (m_1 + m_2) v_2^2 \\implies v_1^2 = \\frac{m_1 + m_2}{m_1} v_2^2 $\\n3. Wstawiamy $v_1$ z zasady pędu do równania energii:\\n$ \\left(\\frac{m_2 - m_1}{m_1}\\right)^2 v_2^2 = \\frac{m_1 + m_2}{m_1} v_2^2 $\\nDzielimy obustronnie przez $v_2^2$ i mnożymy przez $m_1^2$:\\n$ (m_2 - m_1)^2 = m_1 (m_1 + m_2) $\\n$ m_2^2 - 2m_1 m_2 + m_1^2 = m_1^2 + m_1 m_2 $\\n$ m_2^2 - 3m_1 m_2 = 0 $\\nPonieważ $m_2 \\ne 0$, wyłączamy $m_2$ przed nawias:\\n$ m_2(m_2 - 3m_1) = 0 \\implies \\frac{m_2}{m_1} = 3 $"
        }
      ],
      numerical: "2.1: wektory o równych długościach i przeciwnych zwrotach; 2.2: $\\frac{m_2}{m_1} = 3$",
      answer: "2.1: Siły równe co do wartości, przeciwne co do zwrotu, przyłożone w środkach kul; 2.2: $\\frac{m_2}{m_1} = 3$",
      trap: "Pamiętaj o uwzględnieniu zwrotu prędkości kuli K1 po zderzeniu (zwrot ujemny w zasadzie zachowania pędu: $-m_1 v_2$)."
    }
  },
  {
    id: "matura-cke-2025-czerwiec-zad-2",
    number: 202506,
    title: "Matura czerwiec 2025 zad. 2 nowa formuła",
    year: "2025 czerwiec",
    difficulty: 3,
    source: "Matura CKE 2025 (Czerwiec - Termin dodatkowy)",
    link: "https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Równia pochyła",
      "Siła nacisku",
      "Tarcie statyczne"
    ],
    image: "img/cke_2025_czerwiec_zad2_rys1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Uczniowie wykonywali doświadczenie z wagą. Zakładamy, że waga wskazuje wartość siły nacisku działającej na wagę prostopadle do jej powierzchni, podzielonej przez wartość $g$ przyśpieszenia grawitacyjnego.</p>
<p>Uczniowie ustawili wagę na poziomej ławce i położyli na niej klocek. Waga wskazała wartość $m_1$ (zobacz rysunek 1.). Następnie uczniowie nachylili ławkę pod kątem $\\alpha$ do poziomu i ponownie położyli na wadze ten sam klocek. Waga wskazała wartość $m_2$ (zobacz rysunek 2.).</p>

<div class="chart-container-svg">
<img src="img/cke_2025_czerwiec_zad2_rys1.png" alt="Rysunek 1 i Rysunek 2 - doświadczenie z wagą" class="theory-img" style="max-height: 280px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
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
<img src="img/cke_2025_czerwiec_zad2_rys2.png" alt="Diagram z wektorem Fg na siatce" class="theory-img" style="max-height: 420px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.2. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>
<div class="pf-table">
  <div class="pf-row">
    <div class="pf-col" style="flex: 1;">
      <div style="font-weight: 600; margin-bottom: 8px;">Wskazania wagi $m_1$ oraz $m_2$ – opisane w zadaniu 2. – spełniają relację</div>
      <div style="margin-bottom: 6px;"><strong>A.</strong> $m_1 > m_2$,</div>
      <div style="margin-bottom: 6px;"><strong>B.</strong> $m_1 = m_2$,</div>
      <div><strong>C.</strong> $m_1 < m_2$,</div>
    </div>
    <div class="pf-col" style="flex: 1;">
      <div style="font-weight: 600; margin-bottom: 8px;">ponieważ po nachyleniu ławki wartość siły nacisku klocka na wagę</div>
      <div style="margin-bottom: 6px;"><strong>1.</strong> zwiększyła się.</div>
      <div style="margin-bottom: 6px;"><strong>2.</strong> nie zmieniła się.</div>
      <div><strong>3.</strong> zmniejszyła się.</div>
    </div>
  </div>
</div>

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
    solution: {
      intuition: "Klocek jest w spoczynku, więc wypadkowa sił wynosi zero: $\\vec{F}_g + \\vec{F}_r + \\vec{F}_t = \\vec{0}$. W układzie związanym z równią siła reakcji równoważy składową prostopadłą $mg\\cos\\alpha$, a siła tarcia statycznego równoważy składową ściągającą $mg\\sin\\alpha$.",
      givens: "Klocek w spoczynku; $\\vec{F}_g$ pionowo w dół o długości 8 kratek wzdłuż pionu.",
      steps: [
        {
          title: "Zadanie 2.1",
          content: "Należy rozłożyć siłę ciężkości $\\vec{F}_g$ na składowe na obróconej siatce (zorientowanej wzdłuż powierzchni równi). Składowa prostopadła do powierzchni wynosi $F_{g\\perp} = F_g \\cos\\alpha$, więc siła reakcji podłoża $\\vec{F}_r$ ma kierunek prostopadły do powierzchni wagi, zwrot w górę (od powierzchni) i długość równą składowej prostopadłej. Siła tarcia statycznego $\\vec{F}_t$ ma kierunek równoległy do powierzchni równi, zwrot w górę równi i długość równą składowej równoległej $F_{g\\parallel} = F_g \\sin\\alpha$."
        },
        {
          title: "Zadanie 2.2",
          content: "Wskazanie wagi to $m = N / g$. Na poziomej powierzchni $N_1 = mg \\implies m_1 = m$. Na równi pochyłej $N_2 = mg \\cos\\alpha < mg$ (dla $\\alpha > 0$), więc $m_2 = m \\cos\\alpha < m_1$. Siła nacisku zmalała, dlatego $m_1 > m_2$. Prawidłowa odpowiedź: **A 3**."
        },
        {
          title: "Zadanie 2.3",
          content: "1. Klocek spoczywa, zatem z I zasady dynamiki wzdłuż równi: $F_t - mg\\sin\\alpha = 0 \\implies F_t = mg\\sin\\alpha$. Zdanie 1 jest **prawdziwe (P)**.\\n2. Wraz ze wzrostem kąta $\\alpha \\in (0^\\circ, 90^\\circ)$ funkcja $\\sin\\alpha$ rośnie, więc siła tarcia statycznego $F_t = mg\\sin\\alpha$ rośnie, a nie maleje. Zdanie 2 jest **fałszywe (F)**."
        }
      ],
      numerical: "2.2: A 3; 2.3: 1-P, 2-F",
      answer: "2.1: Wektory Fr prostopadle w górę, Ft równolegle w górę równi; 2.2: A 3; 2.3: 1-P, 2-F",
      trap: "Nie myl siły tarcia statycznego (która wynosi dokładnie $mg\\sin\\alpha$) z maksymalną siłą tarcia statycznego ($T_{max} = \\mu mg\\cos\\alpha$)."
    }
  },
  {
    id: "matura-cke-2024-czerwiec-zad-1",
    number: 202406,
    title: "Matura czerwiec 2024 zad. 1 nowa formuła",
    year: "2024 czerwiec",
    difficulty: 3,
    source: "Matura CKE 2024 (Czerwiec - Termin dodatkowy)",
    link: "https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Ruch po okręgu",
      "Siła dośrodkowa",
      "Tarcie",
      "Droga hamowania"
    ],
    image: "img/cke_2024_czerwiec_zad1_rysunek.png",
    problem: `<div class="task-matura">
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
<p>Rozważamy sytuację, gdy deseczka z monetami obraca się ze stałą prędkością kątową $\\omega$.</p>
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
<td class="pf-text">Siła wypadkowa działająca na monetę M3 ma trzy razy większą wartość od wartości siły wypadkowej działającej na monetę M1.</td>
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
<p>Przyjmij, że współczynnik tarcia kinetycznego o stół jest taki sam dla wszystkich monet oraz że monety nie obracały się podczas tego ruchu.</p>
<p><strong>Oblicz $s_1 : s_2 : s_3$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: "W ruchu jednostajnym po okręgu jedynym przyspieszeniem jest przyspieszenie dośrodkowe $a_d = \\omega^2 r$. Po wypadnięciu monety zwalniają pod wpływem stałej siły tarcia, a droga hamowania jest proporcjonalna do kwadratu prędkości początkowej: $s = v_0^2 / (2a)$.",
      givens: "$m_1 = m_2 = m_3 = m$, $r_1 : r_2 : r_3 = 1 : 2 : 3$, $\\omega = \\text{const}$, współczynnik tarcia $\\mu = \\text{const}$",
      steps: [
        {
          title: "Zadanie 1.1",
          content: "1. Ruch monet po okręgu ze stałą prędkością kątową to ruch jednostajny po okręgu, w którym przyspieszenie jest wyłącznie dośrodkowe, a więc skierowane do środka okręgu (osi obrotu $O$). Zdanie 1 jest **prawdziwe (P)**.\\n2. Siła wypadkowa pełni rolę siły dośrodkowej: $F_w = F_{dośr} = m \\omega^2 r$. Stąd $F_{w3} = m \\omega^2 r_3 = m \\omega^2 (3r_1) = 3(m \\omega^2 r_1) = 3 F_{w1}$. Zdanie 2 jest **prawdziwe (P)**.\\n3. Prędkość liniowa wyraża się wzorem $v = \\omega r$. Ponieważ promienie są różne ($r_1 < r_2 < r_3$), prędkości liniowe monet są różne ($v_1 < v_2 < v_3$). Zdanie 3 jest **fałszywe (F)**."
        },
        {
          title: "Zadanie 1.2",
          content: "1. Prędkości początkowe monet w chwili wypadnięcia:\\n$v_1 = \\omega r_1$, $v_2 = \\omega r_2 = 2\\omega r_1$, $v_3 = \\omega r_3 = 3\\omega r_1$.\\n2. Podczas ślizgania się po stole jedyną siłą poziomą jest siła tarcia kinetycznego: $T = \\mu m g$.\\nZ II zasady dynamiki opóźnienie ruchu wynosi: $a = \\frac{T}{m} = \\mu g = \\text{const}$ dla wszystkich monet.\\n3. Droga hamowania do zatrzymania ($v_k = 0$) ze wzoru kinematycznego $v_k^2 - v_0^2 = -2as$:\\n$s = \\frac{v_0^2}{2a} = \\frac{v_0^2}{2\\mu g}$.\\nZatem droga jest wprost proporcjonalna do kwadratu prędkości poczatkowej:\\n$s_1 : s_2 : s_3 = v_1^2 : v_2^2 : v_3^2 = (\\omega r_1)^2 : (2\\omega r_1)^2 : (3\\omega r_1)^2 = 1 : 4 : 9$."
        }
      ],
      numerical: "1.1: 1-P, 2-P, 3-F; 1.2: $s_1 : s_2 : s_3 = 1 : 4 : 9$",
      answer: "1.1: 1-P, 2-P, 3-F; 1.2: $s_1 : s_2 : s_3 = 1 : 4 : 9$",
      trap: "Pamiętaj, że droga hamowania zależy od kwadratu prędkości początkowej ($s \\propto v^2$), a nie liniowo od prędkości."
    }
  },
  {
    id: "matura-cke-2024-maj-zad-1",
    number: 202405,
    title: "Matura maj 2024 zad. 1 nowa formuła",
    year: "2024 maj",
    difficulty: 3,
    source: "Matura CKE 2024 (Maj)",
    link: "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Opór powietrza",
      "Prędkość graniczna",
      "Siły"
    ],
    image: "img/cke_2024_maj_zad1_wykres.png",
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Kropla wody oderwała się od dachu budynku w chwili $t_A$ i następnie opadała pionowo w powietrzu. Na poniższym wykresie przedstawiono zależność wartości $v$ prędkości kropli od czasu $t$ od chwili $t_A = 0\\text{ s}$ do chwili $t_F = 4\\text{ s}$, w której kropla uderzyła o podłoże.</p>
<p>Na wykresie oznaczono wybrane punkty: $A, B, C, D, E, F$. Ruch kropli opisujemy w układzie odniesienia związanym z ziemią i zakładamy, że jest to układ inercjalny.</p>
<p>Do analizy zagadnienia przyjmij uproszczony model zjawiska, w którym:</p>
<ul>
<li>podczas opadania kropli działają na nią dwie siły: siła oporu powietrza $\\vec{F}_o$ oraz siła grawitacji $\\vec{F}_g$ (pomijamy siłę wyporu aerostatycznego)</li>
<li>kropla jest kulą o promieniu $R$, a jej masa się nie zmienia</li>
<li>wartość siły oporu działającej na kroplę wyraża się wzorem:<br>
$F_o = k \\rho_p S v^2$<br>
gdzie $k$ jest pewnym współczynnikiem, $\\rho_p$ jest gęstością powietrza, $S$ jest polem przekroju poprzecznego przez środek kropli, $v$ jest wartością prędkości kropli</li>
<li>ruch kropli od chwili $t_D$ traktujemy jako jednostajny prostoliniowy, czyli przyjmij, że część $DF$ wykresu jest poziomym odcinkiem.</li>
</ul>

<div class="chart-container-svg">
<img src="img/cke_2024_maj_zad1_wykres.png" alt="Wykres prędkości v(t) opadającej kropli wody" class="theory-img" style="max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C i jej uzasadnienie 1., 2. albo 3.</strong></p>
<div class="pf-table">
  <div class="pf-row">
    <div class="pf-col" style="flex: 1;">
      <div style="font-weight: 600; margin-bottom: 8px;">Od chwili $t_A$ do chwili $t_D$ wartość przyśpieszenia kropli</div>
      <div style="margin-bottom: 6px;"><strong>A.</strong> się zwiększa,</div>
      <div style="margin-bottom: 6px;"><strong>B.</strong> się zmniejsza,</div>
      <div><strong>C.</strong> pozostaje stała,</div>
    </div>
    <div class="pf-col" style="flex: 1;">
      <div style="font-weight: 600; margin-bottom: 8px;">ponieważ wartość siły wypadkowej działającej w tym czasie na kroplę</div>
      <div style="margin-bottom: 6px;"><strong>1.</strong> się zwiększa.</div>
      <div style="margin-bottom: 6px;"><strong>2.</strong> się zmniejsza.</div>
      <div><strong>3.</strong> pozostaje stała.</div>
    </div>
  </div>
</div>

<h4>Zadanie 1.2. (0–3)</h4>
<p>Punkt $K$ na diagramach 1.–2. reprezentuje kroplę. Długość boku kratki na każdym diagramie odpowiada umownej jednostce siły. Na diagramach 1.–2. narysowano siłę grawitacji działającą na kroplę, natomiast nie narysowano siły oporu $\\vec{F}_o$.</p>
<p><strong>Na diagramie 1. narysuj i oznacz siłę oporu $\\vec{F}_{oE}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_E = 3{,}6\\text{ s}$. Na diagramie 2. narysuj i oznacz siłę oporu $\\vec{F}_{oB}$ przyłożoną w punkcie $K$, działającą na kroplę w chwili $t_B = 0{,}4\\text{ s}$.</strong></p>
<p>Zachowaj odpowiednie kierunki, zwroty oraz dokładne długości wektorów, odpowiadające wartościom tych sił. Wykorzystaj fakt, że wartość siły oporu jest wprost proporcjonalna do kwadratu wartości prędkości kropli: $F_o \\propto v^2$.</p>

<div class="chart-container-svg">
<img src="img/cke_2024_maj_zad1_diagramy.png" alt="Diagram 1 i 2 - siatki do narysowania wektorów sił" class="theory-img" style="max-height: 420px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 1.3. (0–4)</h4>
<p><strong>Wyprowadź wzór pozwalający wyznaczyć $v_E$ – wartość prędkości, z jaką kropla opada w powietrzu ruchem jednostajnym prostoliniowym – w zależności od: promienia kropli $R$, gęstości powietrza $\\rho_p$, gęstości wody $\\rho_w$, wartości przyśpieszenia ziemskiego $g$ oraz współczynnika $k$.</strong></p>
<p>Zapisz odpowiednie równania i przekształcenia oraz podaj postać tego wzoru.<br>
Wskazówka: Objętość kuli o promieniu $R$ wyraża się wzorem $V = \\frac{4}{3}\\pi R^3$.</p>
</div>`,
    solution: {
      intuition: "W miarę jak kropla przyspiesza, rośnie siła oporu powietrza $F_o \\propto v^2$. Siła wypadkowa $F_w = F_g - F_o$ maleje, aż wreszcie $F_o = F_g$ i kropla porusza się ze stałą prędkością graniczną.",
      givens: "$F_o = k\\rho_p S v^2$, $S = \\pi R^2$, $m = \\rho_w V = \\rho_w \\frac{4}{3}\\pi R^3$, $F_g = mg$",
      steps: [
        {
          title: "Zadanie 1.1",
          content: "W miarę wzrostu prędkości $v$ kropli wartość siły oporu $F_o$ rośnie. Siła wypadkowa skierowana w dół wynosi $F_w = F_g - F_o$, więc maleje. Z II zasady dynamiki $a = F_w / m$, więc przyspieszenie kropli zmniejsza się. Prawidłowa odpowiedź: **B 2**."
        },
        {
          title: "Zadanie 1.2",
          content: "Na diagramach wektor $\\vec{F}_g$ ma długość 8 kratek pionowo w dół.\\n1. W chwili $t_E = 3{,}6\\text{ s}$ ruch jest jednostajny ($v = 7\\text{ m/s} = \\text{const}$), więc siły się równoważą: $F_{oE} = F_g$. Wektor $\\vec{F}_{oE}$ ma długość dokładnie **8 kratek** pionowo w górę.\\n2. W chwili $t_B = 0{,}4\\text{ s}$ z wykresu odczytujemy $v_B = 3{,}5\\text{ m/s}$.\\nStosunek prędkości: $\\frac{v_B}{v_E} = \\frac{3{,}5}{7{,}0} = \\frac{1}{2}$.\\nPonieważ siła oporu zależy od kwadratu prędkości ($F_o \\propto v^2$):\\n$\\frac{F_{oB}}{F_{oE}} = \\left(\\frac{v_B}{v_E}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\\nZatem długość wektora $\\vec{F}_{oB}$ wynosi $\\frac{1}{4} \\cdot 8\\text{ kratek} = \\mathbf{2\\text{ kratki}}$ pionowo w górę."
        },
        {
          title: "Zadanie 1.3",
          content: "Dla ruchu jednostajnego z prędkością graniczną $v_E$ zachodzi równowaga sił:\\n$ F_g = F_o $\\n$ m g = k \\rho_p S v_E^2 $\\nPodstawiamy masę kropli $m = \\rho_w V = \\rho_w \\frac{4}{3}\\pi R^3$ oraz pole przekroju $S = \\pi R^2$:\\n$ \\rho_w \\frac{4}{3}\\pi R^3 g = k \\rho_p (\\pi R^2) v_E^2 $\\nDzielimy obustronnie przez $\\pi R^2$:\\n$ \\frac{4}{3} \\rho_w R g = k \\rho_p v_E^2 $\\nWyznaczamy $v_E^2$ i pierwiastkujemy:\\n$ v_E^2 = \\frac{4 \\rho_w R g}{3 k \\rho_p} \\implies v_E = \\sqrt{\\frac{4 \\rho_w R g}{3 k \\rho_p}} = 2\\sqrt{\\frac{\\rho_w R g}{3 k \\rho_p}} $"
        }
      ],
      numerical: "1.1: B 2; 1.2: Diagram 1: 8 kratek w górę, Diagram 2: 2 kratki w górę; 1.3: $v_E = \\sqrt{\\frac{4\\rho_w R g}{3k\\rho_p}}$",
      answer: "1.1: B 2; 1.2: Diagram 1: 8 kratek w górę, Diagram 2: 2 kratki w górę; 1.3: $v_E = \\sqrt{\\frac{4\\rho_w R g}{3k\\rho_p}}$",
      trap: "W zadaniu 1.2 pamiętaj o kwadracie stosunku prędkości ($1/2$ do kwadratu to $1/4$, czyli 2 kratki, a nie 4 kratki!)."
    }
  },
  {
    id: "matura-cke-2023-czerwiec-zad-2",
    number: 202306,
    title: "Matura czerwiec 2023 zad. 2 nowa formuła",
    year: "2023 czerwiec",
    difficulty: 3,
    source: "Matura CKE 2023 (Czerwiec - Termin dodatkowy)",
    link: "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Zderzenia sprężyste",
      "Zderzenia niesprężyste",
      "Zasada zachowania energii",
      "Zasada zachowania pędu"
    ],
    image: "img/cke_2023_czerwiec_zad2_rys1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Dwie identyczne kule K1 i K2, każda o masie $m$, poruszają się naprzeciwko siebie w inercjalnym układzie odniesienia $\\mathcal{U}$ z prędkościami $\\vec{v}_1$ (kula K1) oraz $\\vec{v}_2$ (kula K2). Środki kul poruszają się wzdłuż prostej $l$. Wartości prędkości tych kul przed zderzeniem spełniają równanie:</p>
<p style="text-align:center;">$v_1 = 2v_2$</p>
<p>Sytuację przed zderzeniem kul ilustruje rysunek poniżej.</p>

<div class="chart-container-svg">
<img src="img/cke_2023_czerwiec_zad2_rys1.png" alt="Rysunek sytuacji przed zderzeniem" class="theory-img" style="max-height: 120px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.1. (0–1)</h4>
<p>Załóżmy, że zderzenie kul K1 i K2 było doskonale sprężyste. Pomijamy siły tarcia.</p>
<p><strong>Na którym rysunku (A–D) prawidłowo narysowano i oznaczono wektory prędkości kul bezpośrednio po zderzeniu w układzie odniesienia $\\mathcal{U}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>
<p><em>Wskazówka! Długości wektorów odpowiadają wartościom prędkości kul. W zadaniu nie trzeba wykonywać obliczeń – wystarczy sprawdzić, czy spełnione są zasady zachowania odpowiednich wielkości fizycznych.</em></p>

<div class="chart-container-svg">
<img src="img/cke_2023_czerwiec_zad2_opcje.png" alt="Rysunki A, B, C, D do Zadania 2.1" class="theory-img" style="max-height: 380px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.2. (0–4)</h4>
<p>Załóżmy, że w wyniku innej realizacji tego zderzenia obie kule połączyły się trwale.</p>
<p><strong>Oblicz, jaką część początkowej (przed zderzeniem) łącznej energii kinetycznej ruchu postępowego utracił układ kul w wyniku takiego zderzenia. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: "W zderzeniu sprężystym dwóch identycznych mas dochodzi do wymiany prędkości pomiędzy ciałami. W zderzeniu niesprężystym pęd całkowity układu pozostaje zachowany, natomiast energia kinetyczna ulega częściowej dyssypacji.",
      givens: "$m_1 = m_2 = m$, $v_1 = 2v_2$, zwroty przeciwne",
      steps: [
        {
          title: "Zadanie 2.1",
          content: "W zderzeniu centralnym i doskonale sprężystym dwóch ciał o jednakowych masach ciała wymieniają się prędkościami.\\nPrzed zderzeniem prędkość kuli K1 wynosiła $+v_1 = +2v_2$ (w prawo), natomiast prędkość kuli K2 wynosiła $-v_2$ (w lewo).\\nPo zderzeniu kula K1 porusza się z prędkością kuli K2, czyli z prędkością o zwrocie w lewo i wartości równej $v_2 = \\frac{1}{2}v_1$ (wektor $-\\frac{1}{2}\\vec{v}_1$). Kula K2 uzyskuje prędkość kuli K1, czyli o zwrocie w prawo i wartości równej $v_1 = 2v_2$ (wektor $-2\\vec{v}_2$).\\nOdpowiada to rysunkowi **B**."
        },
        {
          title: "Zadanie 2.2",
          content: "1. Energia kinetyczna układu przed zderzeniem:\\n$ E_{kp} = \\frac{1}{2}m v_1^2 + \\frac{1}{2}m v_2^2 = \\frac{1}{2}m (2v_2)^2 + \\frac{1}{2}m v_2^2 = 2mv_2^2 + \\frac{1}{2}mv_2^2 = \\frac{5}{2}mv_2^2 $\\n2. Pęd początkowy układu (oś skierowana w prawo):\\n$ p_p = m v_1 - m v_2 = m(2v_2) - mv_2 = mv_2 $\\n3. Po zderzeniu niesprężystym kule łączą się w jedno ciało o masie $2m$ poruszające się ze wspólną prędkością $u$:\\n$ p_k = 2m \\cdot u = p_p = mv_2 \\implies u = \\frac{1}{2}v_2 $\\n4. Energia kinetyczna układu po zderzeniu:\\n$ E_{kk} = \\frac{1}{2}(2m) u^2 = m \\left(\\frac{1}{2}v_2\\right)^2 = \\frac{1}{4}mv_2^2 $\\n5. Utracona energia kinetyczna:\\n$ \\Delta E_k = E_{kp} - E_{kk} = \\frac{5}{2}mv_2^2 - \\frac{1}{4}mv_2^2 = \\frac{9}{4}mv_2^2 $\\n6. Część utraconej energii kinetycznej:\\n$ \\frac{\\Delta E_k}{E_{kp}} = \\frac{\\frac{9}{4}mv_2^2}{\\frac{5}{2}mv_2^2} = \\frac{9}{4} \\cdot \\frac{2}{5} = \\frac{9}{10} = 0{,}90 \\text{ (czyli } 90\\%\\text{)} $"
        }
      ],
      numerical: "2.1: B; 2.2: $\\frac{\\Delta E_k}{E_{kp}} = \\frac{9}{10} = 90\\%$",
      answer: "2.1: B; 2.2: $\\frac{9}{10}$ (lub $0{,}90$ / $90\\%$)",
      trap: "Pamiętaj, że przed zderzeniem kule poruszają się naprzeciwko siebie, więc ich pędy mają przeciwne znaki ($mv_2$, a nie $3mv_2$)."
    }
  },
  {
    id: "matura-cke-2023-maj-zad-2",
    number: 202305,
    title: "Matura maj 2023 zad. 2 nowa formuła",
    year: "2023 maj",
    difficulty: 3,
    source: "Matura CKE 2023 (Maj)",
    link: "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Zasada zachowania pędu",
      "III zasada dynamiki",
      "Zderzenia sprężyste",
      "Ruch w 2D"
    ],
    image: "img/cke_2023_maj_zad2_rys1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Krążek K1 porusza się w inercjalnym układzie odniesienia $\\mathcal{U}$ ze stałą prędkością $\\vec{v}$, a krążek K2 spoczywa. Środek krążka K2 leży poza prostą wyznaczającą kierunek ruchu krążka K1. W pewnej chwili krążek K1 uderza w krążek K2.</p>
<p>Na rysunku 1. w kartezjańskim układzie współrzędnych $(x, y)$ przedstawiono poruszający się krążek K1 i spoczywający krążek K2. Oznaczono prędkość $\\vec{v}$ krążka K1 i składowe $\\vec{v}_x, \\vec{v}_y$ tej prędkości. Na rysunku 2. przedstawiono moment zderzenia się obu krążków.</p>
<p>Krążki są jednorodne, a ich masy są sobie równe. Pomijamy tarcie między krążkami K1 i K2 oraz między krążkami a podłożem.</p>

<div class="chart-container-svg">
<img src="img/cke_2023_maj_zad2_rys1.png" alt="Rysunek 1 - układ przed zderzeniem" class="theory-img" style="max-height: 240px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.1. (0–1)</h4>
<p><strong>Na rysunku 2. powyżej narysuj parę sił wzajemnego oddziaływania pomiędzy krążkami podczas ich zderzenia. Każdą z sił przyłóż – odpowiednio – w punkcie środka masy krążka K1 lub krążka K2. Zachowaj odpowiednie kierunki i zwroty tych sił oraz relację (większy, równy, mniejszy) między ich wartościami.</strong></p>

<div class="chart-container-svg">
<img src="img/cke_2023_maj_zad2_rys2.png" alt="Rysunek 2 - moment zderzenia" class="theory-img" style="max-height: 240px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.2. (0–1)</h4>
<p>Załóżmy, że zderzenie krążków K1 i K2 było doskonale sprężyste.</p>
<p><strong>Na którym rysunku (spośród A–D) prawidłowo narysowano i opisano wektory prędkości krążków bezpośrednio po zderzeniu w układzie odniesienia $\\mathcal{U}$? Zaznacz właściwą odpowiedź spośród podanych.</strong></p>

<div class="chart-container-svg">
<img src="img/cke_2023_maj_zad2_opcje.png" alt="Rysunki A, B, C, D do Zadania 2.2" class="theory-img" style="max-height: 520px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>
</div>`,
    solution: {
      intuition: "Siły wzajemnego oddziaływania gładkich ciał podczas zderzenia działają wzdłuż normalnej do ich powierzchni w punkcie styku (tutaj: poziomo, wzdłuż osi $x$). W kierunku prostopadłym (oś $y$) siły nie występują, więc składowa prędkości wzdłuż osi $y$ nie zmienia się.",
      givens: "$m_1 = m_2 = m$, brak tarcia, $v_{1x} = v_x, v_{1y} = v_y$, $v_{2} = 0$",
      steps: [
        {
          title: "Zadanie 2.1",
          content: "Z III zasady dynamiki Newtona siły wzajemnego oddziaływania krążków mają równe wartości, przeciwne zwroty i ten sam kierunek.\\nPonieważ tarcie jest pomijane, linia działania sił przechodzi przez punkt styku i środki obu krążków – czyli leży dokładnie wzdłuż osi poziomej $x$. Siła działająca na krążek K2 jest skierowana w prawo, a siła działająca na krążek K1 jest skierowana w lewo. Obie siły są przyłożone w środkach masy krążków i narysowane jako wektory o jednakowej długości."
        },
        {
          title: "Zadanie 2.2",
          content: "1. W kierunku osi $y$ nie działa żadna siła (brak tarcia), więc z I zasady dynamiki składowa prędkości wzdłuż osi $y$ krążka K1 nie ulega zmianie: $\\vec{v}_{1y} = \\vec{v}_y$, natomiast krążek K2 nie uzyskuje składowej w kierunku pionowym ($v_{2y} = 0$).\\n2. W kierunku osi $x$ zachodzi sprężyste zderzenie centralne ciał o jednakowych masach. W takim zderzeniu ciała wymieniają się składowymi prędkości: krążek K1 traci całą składową poziomą ($v_{1x} = 0$), natomiast spoczywający dotąd krążek K2 przejmuje składową poziomą krążka K1: $\\vec{v}_2 = \\vec{v}_x$.\\n3. W rezultacie po zderzeniu $\\vec{v}_1 = \\vec{v}_y$, a $\\vec{v}_2 = \\vec{v}_x$.\\nOdpowiada to rysunkowi **C**."
        }
      ],
      numerical: "2.1: Siły wzdłuż osi x, równe i przeciwne; 2.2: C",
      answer: "2.1: Siły wzdłuż osi x, równe i przeciwne; 2.2: C",
      trap: "Brak tarcia oznacza, że siła zderzenia może działać wyłącznie w kierunku prostopadłym do powierzchni styku (wzdłuż osi $x$). Dlatego składowa pionowa $v_y$ krążka K1 w ogóle się nie zmienia!"
    }
  },
  {
    id: "matura-cke-2022-grudzien-zad-2",
    number: 202212,
    title: "Matura próbna grudzień 2022 zad. 2 nowa formuła",
    year: "2022 grudzień",
    difficulty: 4,
    source: "Matura próbna CKE Grudzień 2022 (Formuła 2023)",
    link: "https://arkusze.pl/maturalne/fizyka-2022-grudzien-probna-rozszerzona.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Zderzenia sprężyste",
      "Zasada zachowania pędu",
      "Zasada zachowania energii"
    ],
    image: "img/cke_2022_grudzien_zad2_rys1_2.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2. (0–4)</h4>
<p>Dwie kule K1 i K2 o różnych masach – odpowiednio – $m_1$ i $m_2$, poruszały się naprzeciw siebie w inercjalnym układzie odniesienia z prędkościami o wartościach odpowiednio:</p>
<p style="text-align:center;">$v_{1przed} = 2{,}0\\text{ m/s} \\qquad \\text{oraz} \\qquad v_{2przed} = 4{,}0\\text{ m/s}$</p>
<p>Środki tych kul poruszały się wzdłuż wspólnej prostej (zobacz rysunek 1.).</p>
<p>W pewnym momencie kule K1 i K2 się zderzyły, a wartości prędkości kul po zderzeniu były równe odpowiednio:</p>
<p style="text-align:center;">$v_{1po} = 1{,}0\\text{ m/s} \\qquad \\text{oraz} \\qquad v_{2po} = 5{,}0\\text{ m/s}$</p>
<p>(zobacz rysunek 2.).</p>

<div class="chart-container-svg">
<img src="img/cke_2022_grudzien_zad2_rys1_2.png" alt="Rysunek 1 i Rysunek 2 - zderzenie kul K1 i K2" class="theory-img" style="max-height: 280px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p><strong>Ustal i zapisz, czy zderzenie kul K1 i K2 było doskonale sprężyste. Powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia, uzasadniające Twoje stwierdzenie.</strong></p>
</div>`,
    solution: {
      intuition: "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy całkowita energia kinetyczna układu po zderzeniu jest równa całkowitej energii kinetycznej przed zderzeniem ($E_{kp} = E_{kk}$). Wcześniej wyznaczamy relację mas z zasady zachowania pędu.",
      givens: "$v_{1p} = 2{,}0\\text{ m/s}$, $v_{2p} = 4{,}0\\text{ m/s}$, $v_{1k} = 1{,}0\\text{ m/s}$ (w lewo), $v_{2k} = 5{,}0\\text{ m/s}$ (w prawo)",
      steps: [
        {
          title: "Krok 1: Wyznaczenie relacji mas z zasady zachowania pędu",
          content: "W inercjalnym układzie odniesienia układ kul jest izolowany wzdłuż prostej ruchu, więc spełniona jest zasada zachowania pędu. Wybierzmy oś poziomą ze zwrotem w prawo:\\n$ p_{przed} = m_1 v_{1przed} - m_2 v_{2przed} = m_1 \\cdot 2{,}0 - m_2 \\cdot 4{,}0 $\\nPo zderzeniu kula K1 porusza się w lewo, a kula K2 w prawo:\\n$ p_{po} = -m_1 v_{1po} + m_2 v_{2po} = -m_1 \\cdot 1{,}0 + m_2 \\cdot 5{,}0 $\\nPrzyrównujemy pędy:\\n$ 2{,}0 m_1 - 4{,}0 m_2 = -1{,}0 m_1 + 5{,}0 m_2 $\\n$ 3{,}0 m_1 = 9{,}0 m_2 \\implies m_1 = 3 m_2 $"
        },
        {
          title: "Krok 2: Porównanie energii kinetycznych przed i po zderzeniu",
          content: "1. Całkowita energia kinetyczna przed zderzeniem:\\n$ E_{kp} = \\frac{1}{2}m_1 v_{1przed}^2 + \\frac{1}{2}m_2 v_{2przed}^2 = \\frac{1}{2}(3m_2)(2{,}0)^2 + \\frac{1}{2}m_2(4{,}0)^2 = \\frac{1}{2}m_2(12 + 16) = 14 m_2 $\\n2. Całkowita energia kinetyczna po zderzeniu:\\n$ E_{kk} = \\frac{1}{2}m_1 v_{1po}^2 + \\frac{1}{2}m_2 v_{2po}^2 = \\frac{1}{2}(3m_2)(1{,}0)^2 + \\frac{1}{2}m_2(5{,}0)^2 = \\frac{1}{2}m_2(3 + 25) = 14 m_2 $\\n3. Wniosek: Ponieważ $E_{kp} = E_{kk} = 14 m_2$, całkowita energia mechaniczna układu została zachowana. Zatem zderzenie kul K1 i K2 **było doskonale sprężyste**."
        }
      ],
      numerical: "$m_1 = 3m_2$, $E_{kp} = E_{kk} = 14m_2$ $\\implies$ zderzenie było doskonale sprężyste",
      answer: "Zderzenie było doskonale sprężyste (energia kinetyczna została zachowana: $E_{kp} = E_{kk} = 14 m_2$).",
      trap: "Pamiętaj o uwzględnieniu zwrotów wektorów prędkości przy zapisywaniu zasady zachowania pędu (znaki plus i minus!)."
    }
  },
  {
    id: "matura-cke-informator-2023-zad-1",
    number: 2023001,
    title: "Informator CKE zad. 1 nowa formuła",
    year: "Informator 2023",
    difficulty: 3,
    source: "Informator Maturalny CKE (Formuła 2023)",
    link: "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Popęd siły",
      "Pęd",
      "II zasada dynamiki"
    ],
    image: "img/cke_informator_zad1_tor.png",
    problem: `<div class="task-matura">
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
</div>`,
    solution: {
      intuition: "Z uogólnionej II zasady dynamiki Newtona $\\vec{F} = \\frac{\\Delta \\vec{p}}{\\Delta \\tau} = m \\frac{\\vec{v}_l - \\vec{v}_k}{\\Delta \\tau}$. Zmiana wektora prędkości $\\Delta \\vec{v}$ ma kierunek i zwrot zgodny z wektorem działającej siły.",
      givens: "$m = 0{,}5\\text{ kg}$, $\\Delta\\tau = 0{,}02\\text{ s}$, $\\Delta t = 1\\text{ s}$",
      steps: [
        {
          title: "Zadanie 1.1",
          content: "Zgodnie z drugą zasadą dynamiki kierunek i zwrot siły $\\vec{F}$ jest taki sam jak kierunek i zwrot wektora zmiany pędu $\\Delta \\vec{p} = m \\Delta \\vec{v} = m (\\vec{v}_l - \\vec{v}_k)$.\\nOdejmowanie wektorów wykonujemy geometrycznie: $\\Delta \\vec{v} = \\vec{v}_l + (-\\vec{v}_k)$. Ponieważ $\\vec{v}_k$ jest skierowany poziomo w prawo, wektor $-\\vec{v}_k$ jest skierowany poziomo w lewo. Po dodaniu do wektora $\\vec{v}_l$ otrzymujemy wektor skierowany w prawo i w dół o składowych $[+1\\text{ m/s}; -2\\text{ m/s}]$.\\nPrawidłowy diagram to **C**."
        },
        {
          title: "Zadanie 1.2",
          content: "1. Wyznaczamy wektory prędkości przed i po zadziałaniu siły z położeń na wykresie (czas każdego odcinka $\\Delta t = 1\\text{ s}$):\\n$\\vec{v}_k = \\frac{\\vec{A_3 A_4}}{\\Delta t} = [4\\text{ m/s}; 0\\text{ m/s}]$\\n$\\vec{v}_l = \\frac{\\vec{A_4 A_5}}{\\Delta t} = [19\\text{ m} - 14\\text{ m}; 6\\text{ m} - 8\\text{ m}] = [5\\text{ m/s}; -2\\text{ m/s}]$\\n2. Wektor zmiany prędkości:\\n$\\Delta \\vec{v} = \\vec{v}_l - \\vec{v}_k = [5 - 4; -2 - 0] = [1\\text{ m/s}; -2\\text{ m/s}]$\\n3. Wartość zmiany prędkości:\\n$|\\Delta \\vec{v}| = \\sqrt{1^2 + (-2)^2} = \\sqrt{5}\\text{ m/s} \\approx 2{,}236\\text{ m/s}$\\n4. Wartość siły z II zasady dynamiki:\\n$F = \\frac{m |\\Delta \\vec{v}|}{\\Delta \\tau} = \\frac{0{,}5\\text{ kg} \\cdot \\sqrt{5}\\text{ m/s}}{0{,}02\\text{ s}} = 25\\sqrt{5}\\text{ N} \\approx 56\\text{ N}$"
        }
      ],
      numerical: "1.1: C; 1.2: $F = 25\\sqrt{5}\\text{ N} \\approx 56\\text{ N}$",
      answer: "1.1: C; 1.2: $F \\approx 56\\text{ N}$ (lub $25\\sqrt{5}\\text{ N}$)",
      trap: "Uwaga! Nie wolno odejmować wartości prędkości skalarne (|vl| - |vk|), trzeba odjąć wektory we współrzędnych i dopiero potem obliczyć długość wektora różnicy!"
    }
  },
  {
    id: "matura-cke-informator-2023-zad-3",
    number: 2023003,
    title: "Informator CKE zad. 3 nowa formuła",
    year: "Informator 2023",
    difficulty: 3,
    source: "Informator Maturalny CKE (Formuła 2023)",
    link: "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
    tags: [
      "Matura CKE",
      "Dynamika",
      "Zasada zachowania pędu",
      "Zderzenia",
      "Fotografia stroboskopowa"
    ],
    image: "img/cke_informator_zad3_stroboskop.png",
    problem: `<div class="task-matura">
<h4>Zadanie 3. Zderzenie ciał</h4>
<p>Ciało A o masie $200\\text{ g}$ poruszało się na poduszce powietrznej bez oporów ruchu i następnie zderzyło się z początkowo nieruchomym ciałem B. Po zderzeniu oba ciała dalej poruszały się bez oporów ruchu. Ruch ciał przed zderzeniem i po zderzeniu odbywał się w płaszczyźnie poziomej.</p>
<p>Opisany ruch fotografowano z góry, a zdjęcia nałożono na siebie i uzyskano poniższy diagram. Kolejne zdjęcia wykonywano w jednakowych odstępach czasu i oznaczono numerami 1–6. Położenia ciała A w chwilach 1–6 oznaczono $A_1$–$A_6$, analogiczne położenia ciała B oznaczono $B_1$–$B_6$. (Zapis na diagramie $B_1$–$B_3$ oznacza, że te położenia się pokrywały).</p>
<p>Przyjmij, że ruch przedstawiony na diagramie odbywa się w układzie inercjalnym w płaszczyźnie poziomej, na której narysowano układ współrzędnych $(x, y)$.</p>

<div class="chart-container-svg">
<img src="img/cke_informator_zad3_stroboskop.png" alt="Diagram stroboskopowy zderzenia ciał A i B" class="theory-img" style="max-height: 420px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 3.1. (0–3)</h4>
<p><strong>Wykaż, że masa ciała B wynosi $250\\text{ g}$. Wykonaj niezbędne pomiary na diagramie, a następnie przeprowadź obliczenia.</strong></p>

<h4>Zadanie 3.2. (0–3)</h4>
<p><strong>Ustal i zapisz, czy zderzenie było doskonale sprężyste. Powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia, uzasadniające twoje stwierdzenie.</strong></p>
<p>Przyjmij do obliczeń masę ciała B równą $250\\text{ g}$.</p>
</div>`,
    solution: {
      intuition: "W układzie izolowanym (brak sił zewnętrznych w poziomie) pęd całkowity jest zachowany zarówno wzdłuż osi $x$, jak i osi $y$. W zderzeniu sprężystym zachowana byłaby również energia kinetyczna.",
      givens: "$m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, $v_{B,przed} = 0$, czas między błyskami $\\tau = \\text{const}$",
      steps: [
        {
          title: "Zadanie 3.1: Wyznaczenie masy ciała B z zasady zachowania pędu",
          content: "Przyjmijmy jednostkę umowną długości $1\\text{ ju} = 1\\text{ kratka}$ oraz jednostkę czasu równą czasowi między kolejnymi zdjęciami.\\nOdczytujemy współrzędne wektorów prędkości:\\nPrzed zderzeniem: $\\vec{v}_{A,przed} = [18{,}5\\text{ ju}; 0\\text{ ju}]$, $\\vec{v}_{B,przed} = [0; 0]$.\\nPo zderzeniu: $\\vec{v}_{A,po} = [8{,}5\\text{ ju}; -7{,}5\\text{ ju}]$, $\\vec{v}_{B,po} = [8\\text{ ju}; 6\\text{ ju}]$.\\nZ zasady zachowania całkowitego pędu dla osi $y$:\\n$ p_{y,przed} = p_{y,po} \\implies 0 = m_A v_{Ay,po} + m_B v_{By,po} $\\n$ 0 = 200\\text{ g} \\cdot (-7{,}5) + m_B \\cdot 6 \\implies 6 m_B = 1500 \\implies m_B = 250\\text{ g} = 0{,}25\\text{ kg} $.\\n(Sprawdzenie dla osi $x$: $200 \\cdot 18{,}5 = 3700$; $200 \\cdot 8{,}5 + 250 \\cdot 8 = 1700 + 2000 = 3700$ – wynik jest całkowicie spójny)."
        },
        {
          title: "Zadanie 3.2: Badanie sprężystości zderzenia",
          content: "Ponieważ ruch odbywa się w poziomie i pomijamy opory ruchu, całkowita energia mechaniczna to energia kinetyczna układu:\\n1. Przed zderzeniem:\\n$ E_{kp} = \\frac{1}{2} m_A v_{A,przed}^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot (18{,}5)^2 = 0{,}10 \\cdot 342{,}25 = 34{,}225\\text{ umownych jednostek} $\\n2. Po zderzeniu:\\n$ v_{A,po}^2 = 8{,}5^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5 $\\n$ v_{B,po}^2 = 8^2 + 6^2 = 64 + 36 = 100 $\\n$ E_{kk} = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100 = 12{,}85 + 12{,}50 = 25{,}35\\text{ umownych jednostek} $\\n3. Iloraz energii:\\n$ \\frac{E_{kk}}{E_{kp}} = \\frac{25{,}35}{34{,}225} \\approx 0{,}74 $\\nUkład utracił około $26\\%$ początkowej energii kinetycznej. Ponieważ $E_{kk} < E_{kp}$, energia kinetyczna nie została zachowana, zatem zderzenie **nie było doskonale sprężyste**."
        }
      ],
      numerical: "3.1: $m_B = 250\\text{ g}$; 3.2: $E_{kk} / E_{kp} \\approx 0{,}74 \\implies$ zderzenie niesprężyste",
      answer: "3.1: $m_B = 250\\text{ g}$; 3.2: Zderzenie nie było doskonale sprężyste (strata energii ok. 26%).",
      trap: "W zadaniu 3.1 pamiętaj o rozpisaniu pędu wektorowo na składowe x oraz y – składowa y przed zderzeniem wynosi dokładnie 0, co natychmiast daje prosty stosunek mas!"
    }
  }
];

// Read current data-courses.js
const fileContent = fs.readFileSync('js/data-courses.js', 'utf-8');

// Find index of sub-dynamika-matura
const subDynIndex = fileContent.indexOf('"id": "sub-dynamika-matura"');
if (subDynIndex === -1) {
  console.error("sub-dynamika-matura not found!");
  process.exit(1);
}

// Find tasks array start after subDynIndex
const tasksKey = '"tasks": [';
const tasksStart = fileContent.indexOf(tasksKey, subDynIndex);
if (tasksStart === -1) {
  console.error("tasks: [ not found after sub-dynamika-matura!");
  process.exit(1);
}

const arrayStart = tasksStart + tasksKey.length - 1; // position of '['

// Find matching closing ']' for this tasks array
let bracketCount = 0;
let arrayEnd = -1;
for (let i = arrayStart; i < fileContent.length; i++) {
  if (fileContent[i] === '[') bracketCount++;
  else if (fileContent[i] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      arrayEnd = i;
      break;
    }
  }
}

if (arrayEnd === -1) {
  console.error("Matching closing bracket for tasks not found!");
  process.exit(1);
}

console.log("Replacing tasks array from", arrayStart, "to", arrayEnd);

// Format tasks as JSON with indentation
const tasksJson = JSON.stringify(tasks, null, 2);

const newContent = fileContent.slice(0, arrayStart) + tasksJson + fileContent.slice(arrayEnd + 1);

// Validate JS syntax before writing!
try {
  new Function(newContent);
  console.log("Syntax validation passed!");
} catch (e) {
  console.error("Syntax error in generated content:", e);
  process.exit(1);
}

fs.writeFileSync('js/data-courses.js', newContent, 'utf-8');
console.log("Successfully updated js/data-courses.js with 10 verbatim CKE tasks!");
