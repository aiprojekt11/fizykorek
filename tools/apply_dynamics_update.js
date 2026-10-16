const fs = require('fs');

const tasks = [
  // --- 1. MATURA PRÓBNA CKE STYCZEŃ 2026 - ZADANIE 1 ---
  {
    id: "matura-cke-2026-styczen-zad-1",
    number: 202601,
    title: "Matura próbna styczeń 2026 zad. 1 nowa formuła",
    year: "2026 styczeń próbna",
    difficulty: 3,
    source: "Matura próbna CKE 2026 (Styczeń)",
    link: "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "Zasady dynamiki Newtona", "Pęd", "Siła wypadkowa"],
    image: "img/cke_2026_styczen_zad1_wykres1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Ciało $\\mathcal{C}$ o masie $m = 4{,}0\\text{ kg}$ porusza się wzdłuż osi $x$ w inercjalnym układzie odniesienia.</p>
<p>Na poniższym wykresie przedstawiono zależność współrzędnej $p_x$ pędu ciała $\\mathcal{C}$ od czasu $t$ w tym ruchu.</p>
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
    <div class="pf-col" style="flex: 2;">Siła wypadkowa $\\vec{F}_{W2}$ ma zwrot</div>
    <div class="pf-col" style="flex: 2;">
        <strong>A.</strong> zgodny ze zwrotem prędkości ciała $\\mathcal{C}$,<br>
        <strong>B.</strong> przeciwny do zwrotu prędkości ciała $\\mathcal{C}$,
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

  // --- 2. MATURA PRÓBNA CKE STYCZEŃ 2026 - ZADANIE 2 ---
  {
    id: "matura-cke-2026-styczen-zad-2",
    number: 202602,
    title: "Matura próbna styczeń 2026 zad. 2 nowa formuła",
    year: "2026 styczeń próbna",
    difficulty: 3,
    source: "Matura próbna CKE 2026 (Styczeń)",
    link: "https://arkusze.pl/maturalne/fizyka-2026-styczen-probna-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "III zasada dynamiki", "Zasada zachowania pędu", "Zderzenia sprężyste"],
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
          content: "Zgodnie z III zasadą dynamiki Newtona (zasadą akcji i reakcji): siła wywierana przez kulę K2 na kulę K1 ($\\\\vec{F}_{21}$) ma zwrot w lewo (hamujący K1), natomiast siła wywierana przez kulę K1 na kulę K2 ($\\\\vec{F}_{12}$) ma zwrot w prawo. Wektory leżą na prostej łączącej środki kul, mają jednakowe długości ($|\\\\vec{F}_{21}| = |\\\\vec{F}_{12}|$) i są przyłożone odpowiednio w środkach geometrycznych kuli K1 oraz kuli K2."
        },
        {
          title: "Zadanie 2.2",
          content: "1. Z zasady zachowania pędu dla układu kul:\\n$$ m_1 v_1 = -m_1 v_2 + m_2 v_2 \\implies m_1 v_1 = (m_2 - m_1) v_2 \\implies v_1 = \\frac{m_2 - m_1}{m_1} v_2 $$\\n2. Z zasady zachowania energii mechanicznej (zderzenie idealnie sprężyste):\\n$$ \\frac{1}{2} m_1 v_1^2 = \\frac{1}{2} m_1 v_2^2 + \\frac{1}{2} m_2 v_2^2 \\implies m_1 v_1^2 = (m_1 + m_2) v_2^2 \\implies v_1^2 = \\frac{m_1 + m_2}{m_1} v_2^2 $$\\n3. Wstawiamy $v_1$ z zasady pędu do równania energii:\\n$$ \\left(\\frac{m_2 - m_1}{m_1}\\right)^2 v_2^2 = \\frac{m_1 + m_2}{m_1} v_2^2 $$\\nDzielimy obustronnie przez $v_2^2$ i mnożymy przez $m_1^2$:\\n$$ (m_2 - m_1)^2 = m_1 (m_1 + m_2) $$\\n$$ m_2^2 - 2m_1 m_2 + m_1^2 = m_1^2 + m_1 m_2 $$\\n$$ m_2^2 - 3m_1 m_2 = 0 $$\\nPonieważ $m_2 \\ne 0$, dzielimy przez $m_1^2$ lub wyłączamy $m_2$:\\n$$ \\left(\\frac{m_2}{m_1}\\right)^2 - 3\\left(\\frac{m_2}{m_1}\\right) = 0 \\implies \\frac{m_2}{m_1} = 3 $$"
        }
      ],
      numerical: "2.1: wektory o równych długościach i przeciwnych zwrotach; 2.2: $\\frac{m_2}{m_1} = 3$",
      answer: "2.1: Siły równe co do wartości, przeciwne co do zwrotu, przyłożone w środkach kul; 2.2: $\\frac{m_2}{m_1} = 3$",
      trap: "Pamiętaj o uwzględnieniu zwrotu prędkości kuli K1 po zderzeniu (zwrot ujemny w zasadzie zachowania pędu: $-m_1 v_2$)."
    }
  },

  // --- 3. MATURA CKE CZERWIEC 2025 - ZADANIE 2 ---
  {
    id: "matura-cke-2025-czerwiec-zad-2",
    number: 202506,
    title: "Matura czerwiec 2025 zad. 2 nowa formuła",
    year: "2025 czerwiec",
    difficulty: 3,
    source: "Matura CKE 2025 (Czerwiec - Termin dodatkowy)",
    link: "https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "Równia pochyła", "Siła nacisku", "Tarcie statyczne"],
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

  // --- 4. MATURA CKE CZERWIEC 2024 - ZADANIE 1 ---
  {
    id: "matura-cke-2024-czerwiec-zad-1",
    number: 202406,
    title: "Matura czerwiec 2024 zad. 1 nowa formuła",
    year: "2024 czerwiec",
    difficulty: 3,
    source: "Matura CKE 2024 (Czerwiec - Termin dodatkowy)",
    link: "https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "Ruch po okręgu", "Siła dośrodkowa", "Tarcie", "Droga hamowania"],
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

  // --- 5. MATURA CKE MAJ 2024 - ZADANIE 1 ---
  {
    id: "matura-cke-2024-maj-zad-1",
    number: 202405,
    title: "Matura maj 2024 zad. 1 nowa formuła",
    year: "2024 maj",
    difficulty: 3,
    source: "Matura CKE 2024 (Maj)",
    link: "https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "Opór powietrza", "Prędkość graniczna", "Siły"],
    image: "img/cke_2024_maj_zad1_wykres.png",
    problem: `<div class="task-matura">
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
<img src="img/cke_2024_maj_zad1_wykres.png" alt="Wykres prędkości v(t) opadającej kropli wody" class="theory-img" style="max-height: 400px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
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
          content: "Na diagramach wektor $\\\\vec{F}_g$ ma długość 8 kratek pionowo w dół.\\n1. W chwili $t_E = 3{,}6\\text{ s}$ ruch jest jednostajny ($v = 7\\text{ m/s} = \\text{const}$), więc siły się równoważą: $F_{oE} = F_g$. Wektor $\\\\vec{F}_{oE}$ ma długość dokładnie **8 kratek** pionowo w górę.\\n2. W chwili $t_B = 0{,}4\\text{ s}$ z wykresu odczytujemy $v_B = 3{,}5\\text{ m/s}$.\\nStosunek prędkości: $\\frac{v_B}{v_E} = \\frac{3{,}5}{7{,}0} = \\frac{1}{2}$.\\nPonieważ siła oporu zależy od kwadratu prędkości ($F_o \\propto v^2$):\\n$\\frac{F_{oB}}{F_{oE}} = \\left(\\frac{v_B}{v_E}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\\nZatem długość wektora $\\\\vec{F}_{oB}$ wynosi $\\frac{1}{4} \\cdot 8\\text{ kratek} = \\mathbf{2\\text{ kratki}}$ pionowo w górę."
        },
        {
          title: "Zadanie 1.3",
          content: "Dla ruchu jednostajnego z prędkością graniczną $v_E$ zachodzi równowaga sił:\\n$$ F_g = F_o $$\\n$$ m g = k \\rho_p S v_E^2 $$\\nPodstawiamy masę kropli $m = \\rho_w V = \\rho_w \\frac{4}{3}\\pi R^3$ oraz pole przekroju $S = \\pi R^2$:\\n$$ \\rho_w \\frac{4}{3}\\pi R^3 g = k \\rho_p (\\pi R^2) v_E^2 $$\\nDzielimy obustronnie przez $\\pi R^2$:\\n$$ \\frac{4}{3} \\rho_w R g = k \\rho_p v_E^2 $$\\nWyznaczamy $v_E^2$ i pierwiastkujemy:\\n$$ v_E^2 = \\frac{4 \\rho_w R g}{3 k \\rho_p} \\implies v_E = \\sqrt{\\frac{4 \\rho_w R g}{3 k \\rho_p}} = 2\\sqrt{\\frac{\\rho_w R g}{3 k \\rho_p}} $$"
        }
      ],
      numerical: "1.1: B 2; 1.2: Diagram 1: 8 kratek w górę, Diagram 2: 2 kratki w górę; 1.3: $v_E = \\sqrt{\\frac{4\\rho_w R g}{3k\\rho_p}}$",
      answer: "1.1: B 2; 1.2: Diagram 1: 8 kratek w górę, Diagram 2: 2 kratki w górę; 1.3: $v_E = \\sqrt{\\frac{4\\rho_w R g}{3k\\rho_p}}$",
      trap: "W zadaniu 1.2 pamiętaj o kwadracie stosunku prędkości ($1/2$ do kwadratu to $1/4$, czyli 2 kratki, a nie 4 kratki!)."
    }
  },

  // --- 6. MATURA CKE CZERWIEC 2023 - ZADANIE 2 ---
  {
    id: "matura-cke-2023-czerwiec-zad-2",
    number: 202306,
    title: "Matura czerwiec 2023 zad. 2 nowa formuła",
    year: "2023 czerwiec",
    difficulty: 3,
    source: "Matura CKE 2023 (Czerwiec - Termin dodatkowy)",
    link: "https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "III zasada dynamiki", "Zasada zachowania pędu", "Zderzenia"],
    image: "img/cke_2023_czerwiec_zad2_rys1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Dwie kule: K1 o masie $m$ i K2 o masie $2m$, poruszają się wzdłuż prostej po gładkiej poziomej powierzchni naprzeciw siebie z prędkościami o wartościach odpowiednio $v_1 = 3v$ oraz $v_2 = v$. Sytuację ilustruje rysunek 1.</p>

<div class="chart-container-svg">
<img src="img/cke_2023_czerwiec_zad2_rys1.png" alt="Rysunek 1 - kule przed zderzeniem" class="theory-img" style="max-height: 180px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Kule zderzają się centralnie. W wyniku zderzenia kula K1 uzyskuje prędkość o wartości $u_1 = v$ skierowaną przeciwnie do jej prędkości początkowej.</p>

<h4>Zadanie 2.1. (0–1)</h4>
<p><strong>Oceń prawdziwość poniższych stwierdzeń dotyczących sił wzajemnego oddziaływania kul podczas zderzenia. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<table class="pf-table">
<tbody>
<tr>
<td class="pf-num">1.</td>
<td class="pf-text">Wartość siły, jaką kula K1 działa na kulę K2 podczas zderzenia, jest równa wartości siły, jaką kula K2 działa na kulę K1.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
<tr>
<td class="pf-num">2.</td>
<td class="pf-text">Wartość przyspieszenia kuli K1 podczas zderzenia jest dwa razy większa od wartości przyspieszenia kuli K2.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
</tbody>
</table>

<h4>Zadanie 2.2. (0–3)</h4>
<p><strong>Wyznacz wartość prędkości $u_2$ kuli K2 po zderzeniu oraz określ jej zwrot (w lewo czy w prawo). Zapisz obliczenia z wykorzystaniem zasady zachowania pędu.</strong></p>
</div>`,
    solution: {
      intuition: "Z III zasady dynamiki Newtona siły wzajemnego oddziaływania ciał są zawsze równe co do wartości. Ponieważ masa K1 jest dwa razy mniejsza, jej przyspieszenie jest dwa razy większe ($a=F/m$). Całkowity pęd układu jest zachowany.",
      givens: "$m_1 = m$, $v_1 = 3v$ (w prawo), $m_2 = 2m$, $v_2 = v$ (w lewo). Po zderzeniu: $u_1 = v$ (w lewo).",
      steps: [
        {
          title: "Zadanie 2.1",
          content: "1. Z III zasady dynamiki siły akcji i reakcji mają zawsze jednakową wartość ($F_{12} = F_{21}$). Zdanie 1 jest **prawdziwe (P)**.\\n2. Z II zasady dynamiki $a_1 = F / m_1 = F / m$, natomiast $a_2 = F / m_2 = F / (2m) = \\frac{1}{2} a_1$. Zatem przyspieszenie kuli K1 jest 2 razy większe od przyspieszenia kuli K2. Zdanie 2 jest **prawdziwe (P)**."
        },
        {
          title: "Zadanie 2.2",
          content: "Przyjmijmy oś $x$ skierowaną w prawo.\\nPoczątkowy pęd układu:\\n$p_p = m_1 v_1 - m_2 v_2 = m(3v) - 2m(v) = 3mv - 2mv = +mv$ (zwrot w prawo).\\nKońcowy pęd układu:\\nKula K1 porusza się w lewo z prędkością $v$, więc jej pęd wynosi $p_{1k} = -m v$.\\nNiech $u_{2x}$ oznacza współrzędną prędkości kuli K2:\\n$p_k = -mv + 2m u_{2x}$.\\nZ zasady zachowania pędu ($p_p = p_k$):\\n$$ +mv = -mv + 2m u_{2x} $$\\n$$ 2mv = 2m u_{2x} \\implies u_{2x} = +v $$\\nOznacza to, że kula K2 po zderzeniu porusza się z prędkością o wartości $u_2 = v$ o zwrocie **w prawo**."
        }
      ],
      numerical: "2.1: 1-P, 2-P; 2.2: $u_2 = v$, zwrot w prawo",
      answer: "2.1: 1-P, 2-P; 2.2: $u_2 = v$, zwrot w prawo",
      trap: "Uważaj na znaki pędów w rzucie na oś – prędkości przed zderzeniem mają przeciwne zwroty!"
    }
  },

  // --- 7. MATURA CKE MAJ 2023 - ZADANIE 2 ---
  {
    id: "matura-cke-2023-maj-zad-2",
    number: 202305,
    title: "Matura maj 2023 zad. 2 nowa formuła",
    year: "2023 maj",
    difficulty: 4,
    source: "Matura CKE 2023 (Maj)",
    link: "https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "Zasada zachowania pędu", "Ruch w dwóch wymiarach", "Zderzenia niecentralne"],
    image: "img/cke_2023_maj_zad2_rys1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Dwa jednakowe krążki K1 i K2 o masach $m_1 = m_2 = m$ poruszają się po poziomym stole pneumatycznym (bez tarcia). Krążek K1 porusza się z prędkością $\\vec{v}_1$, a krążek K2 porusza się z prędkością $\\vec{v}_2$ o wartości równej $v_2 = 2\\text{ m/s}$. Kąt między wektorami tych prędkości wynosi $90^\\circ$. Sytuację ilustruje rysunek 1.</p>

<div class="chart-container-svg">
<img src="img/cke_2023_maj_zad2_rys1.png" alt="Rysunek 1 - krążki przed zderzeniem" class="theory-img" style="max-height: 220px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>W pewnej chwili krążki zderzyły się ze sobą. Po zderzeniu krążki poruszały się pod kątem $\\alpha$ względem pierwotnych kierunków (zobacz rysunek 2).</p>

<div class="chart-container-svg">
<img src="img/cke_2023_maj_zad2_rys2.png" alt="Rysunek 2 - po zderzeniu" class="theory-img" style="max-height: 220px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<h4>Zadanie 2.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p>
<p>Wypadkowy pęd układu dwóch krążków przed zderzeniem ma kierunek i zwrot zgodny z wektorem sumy pędów $\\vec{p}_1 + \\vec{p}_2$. Wektor całkowitego pędu układu:</p>
<ol type="A">
<li>ma stałą wartość i stały kierunek w czasie zderzenia</li>
<li>zmienia kierunek podczas zderzenia na skutek działania sił wzajemnych</li>
<li>zmniejsza swoją wartość podczas zderzenia niesprężystego</li>
<li>zależy od wyboru inercjalnego układu odniesienia tak, że w każdym układzie siły wewnętrzne zmieniają całkowity pęd</li>
</ol>

<h4>Zadanie 2.2. (0–3)</h4>
<p><strong>Wyznacz wartość prędkości początkowej $v_1$ krążka K1, jeżeli po zderzeniu krążki sczepiły się i poruszały ze wspólną prędkością $u$ pod kątem $\\alpha = 30^\\circ$ do kierunku początkowego krążka K1. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: "Siły wzajemnego oddziaływania krążków są siłami wewnętrznymi układu, więc całkowity wektor pędu układu $\\vec{p}_{całk}$ jest stały (nie zmienia ani wartości, ani kierunku). Składowe pędu w układzie 2D są niezależnie zachowane.",
      givens: "$m_1 = m_2 = m$, $v_2 = 2\\text{ m/s}$ (wzdłuż osi $y$), $\\vec{v}_1 \\perp \\vec{v}_2$ (wzdłuż osi $x$), $\\alpha = 30^\\circ$ do osi $x$.",
      steps: [
        {
          title: "Zadanie 2.1",
          content: "Na układ krążków nie działają żadne siły zewnętrzne w płaszczyźnie poziomej (siły nacisku i grawitacji równoważą się w pionie, tarcie pomijamy). Siły zderzenia to siły wewnętrzne, które z III zasady dynamiki sumują się do zera. Zgodnie z zasadą zachowania pędu, całkowity wektor pędu układu jest stały w czasie (ma stałą wartość i kierunek). Prawidłowa odpowiedź: **A**."
        },
        {
          title: "Zadanie 2.2",
          content: "Niech oś $x$ będzie równoległa do prędkości $\\\\vec{v}_1$, a oś $y$ równoległa do $\\\\vec{v}_2$.\\nPęd początkowy w rzutach na osie:\\n$p_{px} = m v_1$\\n$p_{py} = m v_2$\\nPo zderzeniu sczepione krążki o masie $2m$ poruszają się z prędkością $u$ pod kątem $\\alpha = 30^\\circ$ do osi $x$:\\n$p_{kx} = 2m u \\cos 30^\\circ$\\n$p_{ky} = 2m u \\sin 30^\\circ$\\nZ zasady zachowania pędu dla każdej osi:\\n$\\tan\\alpha = \\frac{p_{ky}}{p_{kx}} = \\frac{p_{py}}{p_{px}} = \\frac{m v_2}{m v_1} = \\frac{v_2}{v_1}$.\\nStąd:\\n$$ v_1 = \\frac{v_2}{\\tan 30^\\circ} = \\frac{2\\text{ m/s}}{\\frac{\\sqrt{3}}{3}} = 2\\sqrt{3}\\text{ m/s} \\approx 3{,}46\\text{ m/s} $$"
        }
      ],
      numerical: "2.1: A; 2.2: $v_1 = 2\\sqrt{3}\\text{ m/s} \\approx 3{,}46\\text{ m/s}$",
      answer: "2.1: A; 2.2: $v_1 = 2\\sqrt{3}\\text{ m/s}$",
      trap: "W zderzeniu dwuwymiarowym pęd jest wektorem – rozpisuj zasadę zachowania pędu osobno dla osi $x$ i osi $y$."
    }
  },

  // --- 8. MATURA PRÓBNA CKE GRUDZIEŃ 2022 - ZADANIE 2 ---
  {
    id: "matura-cke-2022-grudzien-zad-2",
    number: 202212,
    title: "Matura próbna grudzień 2022 zad. 2 nowa formuła",
    year: "2022 grudzień",
    difficulty: 4,
    source: "Matura próbna CKE Grudzień 2022 (Formuła 2023)",
    link: "https://arkusze.pl/maturalne/fizyka-2022-grudzien-probna-rozszerzona.pdf",
    tags: ["Matura CKE", "Dynamika", "Zderzenia sprężyste", "Zasada zachowania pędu", "Zasada zachowania energii"],
    image: "img/cke_2022_grudzien_zad2_rys1.png",
    problem: `<div class="task-matura">
<h4>Zadanie 2.</h4>
<p>Kula 1 o masie $m_1$ porusza się po gładkiej poziomej powierzchni z prędkością o wartości $v_1$ i zderza się centralnie i sprężyście ze spoczywającą kulą 2 o masie $m_2$.</p>

<div class="chart-container-svg">
<img src="img/cke_2022_grudzien_zad2_rys1.png" alt="Rysunek zderzenia kul 1 i 2" class="theory-img" style="max-height: 180px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Wyprowadzone z zasad zachowania pędu i energii kinetycznej wzory na prędkości kul po zderzeniu mają postać:</p>
<p style="text-align:center;">$u_1 = \\frac{m_1 - m_2}{m_1 + m_2} v_1 \\qquad u_2 = \\frac{2m_1}{m_1 + m_2} v_1$</p>

<h4>Zadanie 2.1. (0–2)</h4>
<p><strong>Oceń prawdziwość poniższych zdań. Zaznacz P, jeśli zdanie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<table class="pf-table">
<tbody>
<tr>
<td class="pf-num">1.</td>
<td class="pf-text">Jeżeli $m_1 = m_2$, to po zderzeniu kula 1 zatrzymuje się, a kula 2 uzyskuje prędkość $v_1$.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
<tr>
<td class="pf-num">2.</td>
<td class="pf-text">Jeżeli $m_1 < m_2$, to kula 1 po zderzeniu odbija się i porusza w stronę przeciwną do pierwotnego zwrotu.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
<tr>
<td class="pf-num">3.</td>
<td class="pf-text">Dla $m_1 \\gg m_2$ prędkość kuli 2 po zderzeniu dąży do wartości $2v_1$.</td>
<td class="pf-box">P</td>
<td class="pf-box">F</td>
</tr>
</tbody>
</table>

<h4>Zadanie 2.2. (0–3)</h4>
<p><strong>Oblicz stosunek mas $\\frac{m_1}{m_2}$, dla którego kula 2 po zderzeniu uzyskuje $75\\%$ początkowej energii kinetycznej kuli 1.</strong></p>
</div>`,
    solution: {
      intuition: "W zderzeniu sprężystym zachowany jest zarówno pęd, jak i energia kinetyczna. Przekaz energii do spoczywającego ciała zależy od relacji mas.",
      givens: "$E_{k2} = 0{,}75 E_{k1}$, $u_2 = \\frac{2m_1}{m_1 + m_2} v_1$",
      steps: [
        {
          title: "Zadanie 2.1",
          content: "1. Dla $m_1 = m_2$: $u_1 = \\frac{0}{2m_1} v_1 = 0$, $u_2 = \\frac{2m_1}{2m_1} v_1 = v_1$. Ciała wymieniają się prędkościami. Prawda (**P**).\\n2. Dla $m_1 < m_2$: licznik w $u_1$ jest ujemny ($m_1 - m_2 < 0$), więc kula 1 uzyskuje prędkość o przeciwnym zwrocie (odbija się). Prawda (**P**).\\n3. Dla $m_1 \\gg m_2$: $\\lim_{m_2/m_1 \\to 0} u_2 = \\frac{2}{1 + 0} v_1 = 2v_1$. Prawda (**P**)."
        },
        {
          title: "Zadanie 2.2",
          content: "Energia kinetyczna kuli 2 po zderzeniu:\\n$$ E_{k2} = \\frac{1}{2} m_2 u_2^2 = \\frac{1}{2} m_2 \\left(\\frac{2m_1}{m_1 + m_2} v_1\\right)^2 = \\frac{4 m_1^2 m_2}{(m_1 + m_2)^2} \\cdot \\frac{1}{2} v_1^2 $$\\nWiemy, że $E_{k1} = \\frac{1}{2} m_1 v_1^2$, więc:\\n$$ \\frac{E_{k2}}{E_{k1}} = \\frac{4 m_1 m_2}{(m_1 + m_2)^2} = \\frac{3}{4} $$\\nNiech $x = \\frac{m_1}{m_2}$. Dzielimy licznik i mianownik przez $m_2^2$:\\n$$ \\frac{4x}{(x + 1)^2} = \\frac{3}{4} $$\\n$$ 16x = 3(x^2 + 2x + 1) = 3x^2 + 6x + 3 $$\\n$$ 3x^2 - 10x + 3 = 0 $$\\nObliczamy deltę:\\n$\\Delta = (-10)^2 - 4 \\cdot 3 \\cdot 3 = 100 - 36 = 64$, $\\sqrt{\\Delta} = 8$.\\n$$ x_1 = \\frac{10 - 8}{6} = \\frac{2}{6} = \\frac{1}{3}, \\qquad x_2 = \\frac{10 + 8}{6} = \\frac{18}{6} = 3 $$\\nOba rozwiązania są fizycznie poprawne: stosunek mas wynosi $\\frac{m_1}{m_2} = 3$ lub $\\frac{m_1}{m_2} = \\frac{1}{3}$."
        }
      ],
      numerical: "2.1: 1-P, 2-P, 3-P; 2.2: $\\frac{m_1}{m_2} = 3$ lub $\\frac{m_1}{m_2} = \\frac{1}{3}$",
      answer: "2.1: 1-P, 2-P, 3-P; 2.2: $\\frac{m_1}{m_2} \\in \\{3, \\frac{1}{3}\\}$",
      trap: "Pamiętaj, że równanie kwadratowe ma dwa rozwiązania: kula o większej masie przekazuje 75% energii, ale kula lżejsza odbijając się również może przekazać 75% energii."
    }
  },

  // --- 9. INFORMATOR CKE - ZADANIE 1 ---
  {
    id: "matura-cke-informator-2023-zad-1",
    number: 2023001,
    title: "Informator CKE zad. 1 nowa formuła",
    year: "Informator 2023",
    difficulty: 3,
    source: "Informator Maturalny CKE (Formuła 2023)",
    link: "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
    tags: ["Matura CKE", "Dynamika", "Popęd siły", "Pęd", "Zasady dynamiki Newtona"],
    image: "img/cke_informator_zad1_tor.png",
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Wózek o masie $m = 0{,}5\\text{ kg}$ porusza się po prostoliniowym poziomym torze. W pewnej chwili wózek wjeżdża w obszar działania zmiennej w czasie siły wypadkowej $F(t)$, której zwrot jest zgodny ze zwrotem prędkości wózka. Siła ta działa przez czas $\\Delta t = 0{,}2\\text{ s}$.</p>

<div class="chart-container-svg">
<img src="img/cke_informator_zad1_tor.png" alt="Rysunek toru z wózkiem" class="theory-img" style="max-height: 250px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Impuls (popęd) siły wypadkowej działającej na wózek wynosi $I = 1{,}5\\text{ N}\\cdot\\text{s}$.</p>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Oblicz zmianę wartości prędkości wózka $\\Delta v$ spowodowaną działaniem tej siły. Zapisz obliczenia.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p><strong>Wyznacz średnią wartość siły wypadkowej $F_{\\text{śr}}$ działającej na wózek w czasie $\\Delta t = 0{,}2\\text{ s}$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: "Popęd (impuls) siły jest równy zmianie pędu ciała: $I = \\Delta p = m\\Delta v$. Średnia siła to iloraz popędu i czasu działania siły: $F_{\\text{śr}} = I / \\Delta t$.",
      givens: "$m = 0{,}5\\text{ kg}$, $I = 1{,}5\\text{ N}\\cdot\\text{s}$, $\\Delta t = 0{,}2\\text{ s}$",
      steps: [
        {
          title: "Zadanie 1.1",
          content: "Z twierdzenia o pędzie i popędzie siły:\\n$$ I = \\Delta p = m \\Delta v $$\\nStąd zmiana prędkości:\\n$$ \\Delta v = \\frac{I}{m} = \\frac{1{,}5\\text{ N}\\cdot\\text{s}}{0{,}5\\text{ kg}} = 3{,}0\\text{ m/s} $$"
        },
        {
          title: "Zadanie 1.2",
          content: "Z definicji średniej siły z popędu:\\n$$ F_{\\text{śr}} = \\frac{I}{\\Delta t} = \\frac{1{,}5\\text{ N}\\cdot\\text{s}}{0{,}2\\text{ s}} = 7{,}5\\text{ N} $$"
        }
      ],
      numerical: "1.1: $\\Delta v = 3{,}0\\text{ m/s}$; 1.2: $F_{\\text{śr}} = 7{,}5\\text{ N}$",
      answer: "1.1: $\\Delta v = 3{,}0\\text{ m/s}$; 1.2: $F_{\\text{śr}} = 7{,}5\\text{ N}$",
      trap: "Zwróć uwagę, że popęd jest polem pod wykresem $F(t)$ – gdy siła jest zmienna, $F_{\\text{śr}} \\cdot \\Delta t = I$."
    }
  },

  // --- 10. INFORMATOR CKE - ZADANIE 3 ---
  {
    id: "matura-cke-informator-2023-zad-3",
    number: 2023003,
    title: "Informator CKE zad. 3 nowa formuła",
    year: "Informator 2023",
    difficulty: 3,
    source: "Informator Maturalny CKE (Formuła 2023)",
    link: "https://cke.gov.pl/images/_EGZAMIN_MATURALNY_OD_2023/Informatory/Informator_EM2023_fizyka.pdf",
    tags: ["Matura CKE", "Dynamika", "Zasada zachowania pędu", "Zderzenia", "Fotografia stroboskopowa"],
    image: "img/cke_informator_zad3_stroboskop.png",
    problem: `<div class="task-matura">
<h4>Zadanie 3.</h4>
<p>Na torze powietrznym badano zderzenie dwóch ciał o masach $m_1 = 0{,}20\\text{ kg}$ i $m_2 = 0{,}40\\text{ kg}$. Na fotografii stroboskopowej zarejestrowano kolejne położenia obu ciał. Błyski lampy stroboskopowej następowały w stałych odstępach czasu $\\Delta t = 0{,}10\\text{ s}$.</p>

<div class="chart-container-svg">
<img src="img/cke_informator_zad3_stroboskop.png" alt="Zdjęcie stroboskopowe toru z wózkami" class="theory-img" style="max-height: 250px; display: block; margin: 0 auto; margin-top: 15px; margin-bottom: 15px;">
</div>

<p>Przed zderzeniem ciało 1 poruszało się w prawo z prędkością $v_1 = 0{,}60\\text{ m/s}$, a ciało 2 spoczywało ($v_2 = 0$). Po zderzeniu oba ciała poruszały się w prawo: ciało 1 z prędkością $u_1 = 0{,}20\\text{ m/s}$, a ciało 2 z prędkością $u_2 = 0{,}20\\text{ m/s}$ (ciała sczepiły się).</p>

<h4>Zadanie 3.1. (0–2)</h4>
<p><strong>Sprawdź, czy podczas tego zderzenia spełniona była zasada zachowania pędu. Zapisz odpowiednie obliczenia i sformułuj wniosek.</strong></p>

<h4>Zadanie 3.2. (0–2)</h4>
<p><strong>Wykaż, że zderzenie to było niesprężyste, obliczając energię mechaniczną traconą (zamienianą na energię wewnętrzną) podczas zderzenia $\\Delta E_k$.</strong></p>
</div>`,
    solution: {
      intuition: "W zderzeniu niesprężystym pęd jest zachowany, natomiast część początkowej energii kinetycznej ulega rozproszeniu (dyssypacji) na ciepło i deformację.",
      givens: "$m_1 = 0{,}20\\text{ kg}$, $m_2 = 0{,}40\\text{ kg}$, $v_1 = 0{,}60\\text{ m/s}$, $v_2 = 0$, $u_1 = u_2 = u = 0{,}20\\text{ m/s}$",
      steps: [
        {
          title: "Zadanie 3.1",
          content: "Pęd początkowy układu:\\n$$ p_p = m_1 v_1 + m_2 v_2 = 0{,}20\\text{ kg} \\cdot 0{,}60\\text{ m/s} + 0 = 0{,}12\\text{ kg}\\cdot\\text{m/s} $$\\nPęd końcowy układu:\\n$$ p_k = (m_1 + m_2) u = (0{,}20\\text{ kg} + 0{,}40\\text{ kg}) \\cdot 0{,}20\\text{ m/s} = 0{,}60\\text{ kg} \\cdot 0{,}20\\text{ m/s} = 0{,}12\\text{ kg}\\cdot\\text{m/s} $$\\nPonieważ $p_p = p_k = 0{,}12\\text{ kg}\\cdot\\text{m/s}$, zasada zachowania pędu była spełniona."
        },
        {
          title: "Zadanie 3.2",
          content: "Początkowa energia kinetyczna:\\n$$ E_{kp} = \\frac{1}{2} m_1 v_1^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot (0{,}60)^2 = 0{,}10 \\cdot 0{,}36 = 0{,}036\\text{ J} $$\\nKońcowa energia kinetyczna:\\n$$ E_{kk} = \\frac{1}{2} (m_1 + m_2) u^2 = \\frac{1}{2} \\cdot 0{,}60 \\cdot (0{,}20)^2 = 0{,}30 \\cdot 0{,}04 = 0{,}012\\text{ J} $$\\nStrata energii kinetycznej:\\n$$ \\Delta E_k = E_{kp} - E_{kk} = 0{,}036\\text{ J} - 0{,}012\\text{ J} = 0{,}024\\text{ J} $$\\nPonieważ $E_{kk} < E_{kp}$ (strata energii wynosi $0{,}024\\text{ J}$, czyli aż $66{,}7\\%$) oraz ciała po zderzeniu poruszają się razem, zderzenie było całkowicie niesprężyste."
        }
      ],
      numerical: "3.1: $p_p = p_k = 0{,}12\\text{ kg}\\cdot\\text{m/s}$; 3.2: $\\Delta E_k = 0{,}024\\text{ J}$",
      answer: "3.1: Zasada zachowania pędu jest spełniona; 3.2: Zderzenie niesprężyste, strata energii $\\Delta E_k = 0{,}024\\text{ J}$",
      trap: "W zderzeniu niesprężystym pęd ZAWSZE jest zachowany (jeśli nie ma sił zewnętrznych), nie jest natomiast zachowana energia kinetyczna."
    }
  }
];

// Read js/data-courses.js
const code = fs.readFileSync('js/data-courses.js', 'utf8');

// Find start and end of m-dynamika section
const dynRegex = /\{\s*"id":\s*"m-dynamika"[\s\S]*?\}\s*,\s*\{\s*"id":\s*"m-praca"/;
const match = code.match(dynRegex);

if (!match) {
  console.error('Could not find m-dynamika section!');
  process.exit(1);
}

const replacementSection = `{
        "id": "m-dynamika",
        "title": "Dział 2: Dynamika i Zasady Newtona",
        "icon": "⚖️",
        "badge": "10 zadań CKE",
        "isComingSoon": false,
        "desc": "Zasady dynamiki Newtona, tarcie, siły oporu, zderzenia sprężyste i niesprężyste oraz zasada zachowania pędu.",
        "subchapters": [
          {
            "id": "sub-dynamika-matura",
            "title": "Zadania maturalne CKE",
            "shortTitle": "Zadania Maturalne CKE",
            "number": 1,
            "icon": "⚖️",
            "desc": "Oficjalne zadania maturalne CKE Formuła 2023 oraz z Informatora maturalnego z działu Dynamika z pełnymi rozwiązaniami krok po kroku.",
            "formulaCheat": "\\\\vec{F}_w = m\\\\vec{a} \\\\qquad \\\\vec{p} = m\\\\vec{v} \\\\qquad \\\\vec{F}_w = \\\\frac{\\\\Delta \\\\vec{p}}{\\\\Delta t} \\\\qquad T = \\\\mu N",
            "tasks": ${JSON.stringify(tasks, null, 2)}
          }
        ]
      },
      {
        "id": "m-praca"`;

const newCode = code.replace(dynRegex, replacementSection);
fs.writeFileSync('js/data-courses.js', newCode, 'utf8');
console.log('Successfully updated js/data-courses.js with all 10 dynamics tasks and 1 single tab!');
