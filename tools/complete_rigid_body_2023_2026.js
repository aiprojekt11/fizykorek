const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'js', 'data-courses.js');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(dataPath, 'utf8'), sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;
const course = courses['matura-fizyka'];
const section = course.sections.find((item) => item.id === 'm-bryla');
const subchapter = section.subchapters.find((item) => item.id === 'sub-bryla-matura');

const figure = (file, alt, height = 420) => `<div class="chart-container-svg"><img src="img/rigid/${file}" alt="${alt}" class="theory-img" style="max-height:${height}px;display:block;margin:15px auto;"></div>`;
const local = (file) => `data/arkusze_cke/${file}`;
const officialSource = (file, pages, label) => ({
  publisher: 'Centralna Komisja Egzaminacyjna',
  url: local(file),
  localFile: local(file),
  pages
});
const solutionNote = (file, pageLabel) => `Opracowano na podstawie oficjalnych zasad oceniania CKE. <a href="${local(file)}" target="_blank" rel="noopener noreferrer">${pageLabel}</a>.`;

// The source copy intentionally mirrors CKE notation. Repair JavaScript escape
// sequences and commands whose leading backslash is consumed in string literals.
function repairTexString(value) {
  if (typeof value !== 'string') return value;
  const controls = value
    .replaceAll('\u000b', '\\v')
    .replaceAll('\u0008', '\\b')
    .replaceAll('\u000c', '\\f')
    .replaceAll('\t', '\\t')
    .replaceAll('\r', '\\r')
    .replaceAll('ldotsldotsldots', '\\ldots\\ldots\\ldots');
  const commands = ['mathcal', 'qquad', 'cdot', 'approx', 'sqrt', 'omega', 'Delta', 'sin', 'pi', 'ldots', 'epsilon', 'left', 'right', 'times', 'ne'];
  return controls.split('$').map((part, index) => {
    if (index % 2 === 0) return part;
    return commands.reduce((text, command) => text.replace(new RegExp(`(?<![A-Za-z\\\\])${command}`, 'g'), () => '\\' + command), part);
  }).join('$');
}

function repairTexDeep(value) {
  if (typeof value === 'string') return repairTexString(value);
  if (Array.isArray(value)) return value.map(repairTexDeep);
  if (value && typeof value === 'object') {
    for (const key of Object.keys(value)) value[key] = repairTexDeep(value[key]);
  }
  return value;
}

const january2026 = {
  id: 'matura-cke-bryla-2026-styczen-zad-3',
  originalTaskId: 'matura-cke-2026-styczen-zad-3',
  number: 202601,
  title: 'Próbna matura styczeń 2026 zad. 3 nowa formuła',
  year: '2026 styczeń', difficulty: 3,
  source: 'Próbna matura CKE 2026 (Styczeń)',
  link: local('2026/fizyka-2026-styczen-probna-rozszerzona.pdf'), formula: '2023', sourcePages: [8, 9],
  tags: ['Matura CKE', 'Bryła sztywna', 'Statyka', 'Moment siły', 'Równowaga'],
  problem: `<div class="task-matura energy-statements"><h4>Zadanie 3.</h4><p>Jednorodną sztywną płytę $\mathcal P$ umieszczono na dwóch równoległych do siebie osiach z kołami.</p><p>Przyjmij następujące dane oraz oznaczenia:</p><ul><li>siłę ciężkości działającą na płytę oznaczymy jako $\vec Q_P$</li><li>osie oznaczymy jako $O_1$ oraz $O_2$</li><li>koła umieszczone na końcach każdej osi są jednakowe</li><li>środek masy płyty oznaczymy jako $S$</li><li>osie $O_1$ oraz $O_2$ działają na płytę – odpowiednio – siłami reakcji $\vec F_1$ oraz $\vec F_2$</li><li>krawędzie płyty oznaczymy jako A i B, odległości wzajemne między krawędziami płyty a osiami są następujące:<p>$|AO_1|=2\text{ m}\qquad |O_1O_2|=4\text{ m}\qquad |O_2B|=3\text{ m}$</p></li><li>układ rozpatrujemy w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul><p>Sytuację ilustruje rysunek 1.</p>${figure('2026-styczen-z3-rys1.png', 'Rysunek 1. Płyta na dwóch osiach', 250)}<h4>Zadanie 3.1. (0–1)</h4><p>Rozważamy sytuację 1., gdy na płycie <u>nie ma</u> żadnego obciążenia (jak na rysunku 1.).</p><p><strong>Dokończ zdanie. Wybierz odpowiedź A albo B oraz odpowiedź 1., 2. albo 3.</strong></p><p>Między wartościami $F_1$, $F_2$, $Q_P$ sił działających na płytę w sytuacji 1. zachodzą relacje</p><div class="energy-table-scroll"><table class="energy-data-table"><tbody><tr><td><strong>A.</strong></td><td>$F_2&gt;F_1$</td><td rowspan="2">oraz</td><td><strong>1.</strong></td><td>$F_1+F_2=Q_P$</td></tr><tr><td><strong>B.</strong></td><td>$F_2&lt;F_1$</td><td><strong>2.</strong></td><td>$F_1+Q_P=F_2$</td></tr><tr><td></td><td></td><td></td><td><strong>3.</strong></td><td>$Q_P+F_2=F_1$</td></tr></tbody></table></div><h4>Zadanie 3.2. (0–3)</h4><p>Rozważamy sytuację 2., gdy na płycie położono mały klocek $\mathcal K$.</p><p>Siła ciężkości $\vec Q_K$ działająca na klocek ma wartość $Q_K=0{,}4\cdot Q_P$.</p><p>Odległość środka klocka $\mathcal K$ od osi przechodzącej przez środek $S$ płyty oznaczymy jako $x$.</p><p>Siły reakcji osi $O_1$ oraz $O_2$, działające na płytę <u>w sytuacji 2.</u>, mają równe wartości: $F_1=F_2$.</p><p>Sytuację 2. ilustruje rysunek 2.</p>${figure('2026-styczen-z3-rys2.png', 'Rysunek 2. Płyta obciążona klockiem', 230)}<p><strong>Oblicz $\boldsymbol{x}$. Zapisz obliczenia.</strong></p></div>`,
  solution: {
    intuition: 'Płyta jest nieruchoma, więc równoważą się zarówno siły, jak i ich momenty.',
    givens: '$Q_K=0{,}4Q_P$, $F_1=F_2$, $|SO_1|=2{,}5\text{ m}$, $|SO_2|=1{,}5\text{ m}$.',
    steps: [
      { title: 'Zadanie 3.1', content: 'Ponieważ płyta jest w równowadze, $F_1+F_2=Q_P$. Środek masy leży bliżej osi $O_2$, więc $F_2>F_1$. Odpowiedź <strong>A1</strong>.' },
      { title: 'Zadanie 3.2 — siły działające na płytę', content: `${figure('2026-styczen-z3-rozwiazanie.png', 'Oficjalny schemat sił CKE', 280)}Warunek równowagi sił: $F_1+F_2=Q_K+Q_P$. Ponieważ $F_1=F_2$ i $Q_K=0{,}4Q_P$, otrzymujemy $F_1=F_2=0{,}7Q_P$.` },
      { title: 'Zadanie 3.2 — momenty sił', content: 'Względem punktu $S$: $|SO_1|F_1=xQ_K+|SO_2|F_2$. Z geometrii: $|SO_1|=\frac12\cdot9\text{ m}-2\text{ m}=2{,}5\text{ m}$ oraz $|SO_2|=\frac12\cdot9\text{ m}-3\text{ m}=1{,}5\text{ m}$. Stąd $2{,}5\cdot0{,}7Q_P=x\cdot0{,}4Q_P+1{,}5\cdot0{,}7Q_P$, więc $x=1{,}75\text{ m}$.' }
    ],
    answer: '3.1: A1.\n3.2: $x=1{,}75\text{ m}$.',
    trap: 'Do równowagi bryły sztywnej potrzebne są jednocześnie: zerowa siła wypadkowa i zerowy wypadkowy moment sił.',
    source: solutionNote('2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf', 'Klucz odpowiedzi CKE, s. 13–15')
  },
  solutionSource: officialSource('2026/fizyka-2026-styczen-probna-rozszerzona-odpowiedzi.pdf', [13, 15], 'Klucz')
};

const december2024 = {
  id: 'matura-cke-bryla-2024-grudzien-zad-3', originalTaskId: 'matura-cke-2024-grudzien-zad-3', number: 202412,
  title: 'Próbna matura grudzień 2024 zad. 3 nowa formuła', year: '2024 grudzień', difficulty: 4,
  source: 'Matura próbna CKE 2024 (Grudzień)', link: local('2024/fizyka-2024-grudzien-probna-rozszerzona.pdf'), formula: '2023', sourcePages: [8, 10],
  tags: ['Matura CKE', 'Bryła sztywna', 'Toczenie bez poślizgu', 'Tarcie statyczne', 'Prędkość punktów'],
  problem: `<div class="task-matura energy-statements"><h4>Zadanie 3.</h4><p>Walec $\mathcal W$ toczy się po poziomym płaskim podłożu wzdłuż osi $x$. Walec jest rozpędzany przez cienką linkę nawiniętą na jego powierzchnię boczną, która to linka jest ciągnięta ze stałą poziomą siłą $\vec F$ (zobacz rysunek 1.).</p>${figure('2024-grudzien-z3-rys1.png', 'Rysunek 1. Walec rozpędzany linką', 390)}<p>Moment bezwładności walca $\mathcal W$ względem jego osi symetrii przechodzącej przez środek masy $S$ walca jest równy:</p><p>$I_0=\frac12mR^2$</p><p>gdzie $m$ jest masą walca, $R$ jest promieniem walca.</p><p>Do analizy zagadnienia przyjmij model zjawiska, w którym:</p><ul><li>walec toczył się <u>bez poślizgu</u></li><li>w kierunku poziomym na walec działały tylko stała siła tarcia statycznego $\vec T$ oraz siła $\vec F$</li><li>siła tarcia $\vec T$ między walcem a podłożem <u>nie osiągnęła</u> wartości maksymalnej</li><li>pomijamy inne (tzn. oprócz tarcia statycznego) opory ruchu</li><li>ruch walca rozpatrujemy w inercjalnym układzie odniesienia związanym z podłożem, w jednorodnym, ziemskim polu grawitacyjnym</li><li>pomijamy masę linki.</li></ul><h4>Zadanie 3.1. (0–2)</h4><p>W pewnej chwili $t$ środek masy $S$ walca $\mathcal W$ osiągnął prędkość o wartości $v_S=2{,}5\text{ m/s}$.</p><p>Na rysunku 2. oznaczono punkty $A$ i $B$ na powierzchni walca w chwili $t$ (odcinek $SA$ jest pionowy, a odcinek $SB$ jest poziomy).</p>${figure('2024-grudzien-z3-rys2.png', 'Rysunek 2. Punkty A i B na walcu', 340)}<p><strong>Wpisz w wykropkowane miejsca poniżej wartości prędkości punktu $\boldsymbol A$ i punktu $\boldsymbol B$ walca względem podłoża.</strong></p><p>$v_A=\ldots\ldots\ldots\text{ m/s}$</p><p>$v_B=\ldots\ldots\ldots\text{ m/s}$</p><h4>Zadanie 3.2. (0–4)</h4><p><strong>Wyznacz współrzędną $\boldsymbol{T_x}$ siły tarcia $\boldsymbol{\vec T}$ w zależności tylko od wartości $\boldsymbol F$ siły $\boldsymbol{\vec F}$.</strong></p><p><strong>Na podstawie otrzymanego wyniku zweryfikuj, czy zwrot siły tarcia $\boldsymbol{\vec T}$ – przyjęty w rozwiązaniu – jest poprawny. Następnie na rysunku 3. narysuj siłę tarcia $\boldsymbol{\vec T}$ przyłożoną w punkcie $\boldsymbol C$ walca – uwzględnij jej poprawny kierunek i zwrot.</strong></p><p><em>Wskazówka: Przyjmij, że gdy wektor jest skierowany zgodnie ze zwrotem osi $x$, to jego współrzędna jest dodatnia, a gdy wektor jest skierowany przeciwnie do zwrotu osi $x$, to jego współrzędna jest ujemna.</em></p>${figure('2024-grudzien-z3-rys3.png', 'Rysunek 3. Walec i punkt C', 360)}</div>`,
  solution: {
    intuition: 'Prędkość punktu bryły jest sumą prędkości środka masy i prędkości wynikającej z obrotu.',
    givens: '$v_S=2{,}5\text{ m/s}$, $I_0=\frac12mR^2$, $a=\varepsilon R$.',
    steps: [
      { title: 'Zadanie 3.1', content: 'Przy toczeniu bez poślizgu $\omega R=v_S$. W punkcie A prędkości postępowa i obrotowa mają ten sam zwrot, więc $v_A=2v_S=5\text{ m/s}$. W punkcie B są prostopadłe i mają równe wartości: $v_B=\sqrt{v_S^2+(\omega R)^2}=v_S\sqrt2=2{,}5\sqrt2\text{ m/s}$.' },
      { title: 'Zadanie 3.2 — równania ruchu', content: 'Przyjmijmy, że tarcie jest skierowane zgodnie z osią $x$. Wtedy $ma=F+T$ oraz $I_0\varepsilon=R(F-T)$. Po użyciu $a=\varepsilon R$ i $I_0=\frac12mR^2$: $\frac12ma=F-T$.' },
      { title: 'Zadanie 3.2 — wynik i zwrot', content: `Z układu $ma=F+T$ oraz $\frac12ma=F-T$ otrzymujemy $T=\frac13F$. Zatem $T_x=+\frac13F$, a dodatni znak potwierdza zwrot zgodny z osią $x$.<br>${figure('2024-grudzien-z3-rozwiazanie.png', 'Oficjalny rysunek rozwiązania CKE — zwrot tarcia', 360)}` }
    ],
    answer: '3.1: $v_A=5\text{ m/s}$, $v_B=2{,}5\sqrt2\text{ m/s}$.\n3.2: $T_x=\frac13F$; siła tarcia jest skierowana zgodnie ze zwrotem osi $x$.',
    trap: 'Tarcie statyczne nie musi być skierowane przeciwnie do ruchu środka masy. Jego zwrot wynika z warunku toczenia.',
    source: solutionNote('2024/fizyka-2024-grudzien-probna-rozszerzona-odpowiedzi.pdf', 'Klucz odpowiedzi CKE, s. 10–14')
  },
  solutionSource: officialSource('2024/fizyka-2024-grudzien-probna-rozszerzona-odpowiedzi.pdf', [10, 14], 'Klucz')
};

const june2024 = {
  id: 'matura-cke-bryla-2024-czerwiec-zad-2', originalTaskId: 'matura-cke-2024-czerwiec-zad-2', number: 202406,
  title: 'Matura czerwiec 2024 zad. 2 nowa formuła', year: '2024 czerwiec', difficulty: 3,
  source: 'Matura CKE 2024 (Czerwiec – termin dodatkowy)', link: local('2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf'), formula: '2023', sourcePages: [6, 7],
  tags: ['Matura CKE', 'Bryła sztywna', 'Statyka', 'Moment siły', 'Belka'],
  problem: `<div class="task-matura energy-statements"><h4>Zadanie 2.</h4><p>Dana jest jednorodna, sztywna belka o masie $m=120\text{ kg}$ i długości $l=2{,}8\text{ m}$. Tę belkę przymocowano do dwóch pionowych podpór: $P_A$ i $P_B$. Podpory $P_A$ i $P_B$ łączą się z belką w punktach $A$ i $B$. Obie podpory są na sztywno przytwierdzone do poziomego podłoża. Mocowanie pojedynczej podpory do belki umożliwia jej obrót bez tarcia w płaszczyźnie pionowej. Gdy belka jest przymocowana do obu podpór, to utrzymuje się nieruchomo w pozycji poziomej (zobacz rysunek 1.).</p><p>Odległość między punktami $A$ i $B$ wynosi $|AB|=1{,}0\text{ m}$. Na rysunku poniżej przedstawiono opisaną sytuację. Punkt środka masy belki oznaczono jako $C$. Przyjmij, że belka spoczywa poziomo w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</p><p>Siły, z jakimi podpory $P_A$ i $P_B$ działają na belkę w punktach $A$ i $B$, oznaczymy – odpowiednio – jako $\vec F_A$ i $\vec F_B$. Siłę ciężkości działającą na belkę oznaczymy jako $\vec F_C$.</p>${figure('2024-czerwiec-z2-rys1.png', 'Rysunek 1. Belka na podporach', 370)}<h4>Zadanie 2.1. (0–2)</h4><p><strong>Na rysunku 2. narysuj i oznacz wektory sił $\boldsymbol{\vec F_A}$, $\boldsymbol{\vec F_B}$ i $\boldsymbol{\vec F_C}$ w opisanej sytuacji. Zachowaj odpowiednie kierunki i zwroty tych sił oraz relacje (większy, równy, mniejszy) między ich wartościami.</strong></p>${figure('2024-czerwiec-z2-rys2.png', 'Rysunek 2. Schemat do narysowania sił', 470)}<h4>Zadanie 2.2. (0–3)</h4><p>Przyjmij do obliczeń $g=9{,}8\text{ m/s}^2$.</p><p><strong>Oblicz $\boldsymbol{F_A}$ i $\boldsymbol{F_B}$ – wartości sił $\boldsymbol{\vec F_A}$ i $\boldsymbol{\vec F_B}$. Zapisz obliczenia.</strong></p></div>`,
  solution: {
    intuition: 'Podpora B pcha belkę w górę, natomiast podpora A musi działać w dół, by zrównoważyć moment ciężaru.',
    givens: '$m=120\text{ kg}$, $l=2{,}8\text{ m}$, $|AB|=1{,}0\text{ m}$, $|BC|=0{,}4\text{ m}$, $g=9{,}8\text{ m/s}^2$.',
    steps: [
      { title: 'Zadanie 2.1', content: `${figure('2024-czerwiec-z2-rozwiazanie.png', 'Oficjalny schemat sił CKE', 430)}W punkcie A siła $\vec F_A$ jest skierowana w dół, w punkcie B siła $\vec F_B$ w górę, a ciężar $\vec F_C$ w dół w punkcie C. Zachodzi $F_B>F_C>F_A$.` },
      { title: 'Zadanie 2.2', content: '$F_C=mg=120\cdot9{,}8\text{ N}=1176\text{ N}$. Z równowagi momentów względem B: $F_A\cdot1{,}0\text{ m}=1176\text{ N}\cdot0{,}4\text{ m}$, więc $F_A=470{,}4\text{ N}$. Z równowagi sił: $F_C+F_A=F_B$, zatem $F_B=1646{,}4\text{ N}$.' }
    ],
    answer: '2.1: $\vec F_A$ w dół, $\vec F_B$ w górę, $\vec F_C$ w dół; $F_B>F_C>F_A$.\n2.2: $F_A\approx470\text{ N}$, $F_B\approx1646\text{ N}$.',
    trap: 'Podpora po lewej może działać na belkę w dół — nie każda siła podpory musi być skierowana ku górze.',
    source: solutionNote('2024/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf', 'Klucz odpowiedzi CKE, s. 8–10')
  },
  solutionSource: officialSource('2024/fizyka-2024-czerwiec-matura-rozszerzona-odpowiedzi.pdf', [8, 10], 'Klucz')
};

const june2023 = {
  id: 'matura-cke-bryla-2023-czerwiec-zad-3', originalTaskId: 'matura-cke-2023-czerwiec-zad-3', number: 202306,
  title: 'Matura czerwiec 2023 zad. 3 nowa formuła', year: '2023 czerwiec', difficulty: 3,
  source: 'Matura CKE 2023 (Czerwiec – termin dodatkowy)', link: local('2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf'), formula: '2023', sourcePages: [9, 10],
  tags: ['Matura CKE', 'Bryła sztywna', 'Statyka', 'Moment siły', 'Siła wyporu'],
  problem: `<div class="task-matura energy-statements"><h4>Zadanie 3.</h4><p>Jednorodna belka podparta w punkcie $O$ – w środku swojej długości – utrzymuje się nieruchomo w pozycji poziomej (zobacz rysunek 1.).</p>${figure('2023-czerwiec-z3-rys1.png', 'Rysunek 1. Belka podparta w środku', 230)}<p>W pierwszym etapie doświadczenia, na przeciwległych końcach tej belki zawieszono (na cienkich, lekkich nitkach) dwa jednorodne klocki A i B. Klocki były wykonane z różnych materiałów i miały kształty sześcianów o krawędziach odpowiednio $a_A=2\text{ cm}$ i $a_B=4\text{ cm}$. Po zawieszeniu klocków belka wciąż pozostawała w równowadze (zobacz rysunek 2.).</p>${figure('2023-czerwiec-z3-rys2.png', 'Rysunek 2. Belka z klockami A i B', 350)}<p>W drugim etapie doświadczenia obydwa sześciany zanurzono całkowicie w naczyniu z wodą o gęstości $\rho_w=1000\text{ kg/m}^3$, a belkę zrównoważono dodatkowym ciężarkiem C, który położono na jednym z końców belki (zobacz rysunek 3.). Belka w ten sposób zrównoważona utrzymywała się nieruchomo w pozycji poziomej.</p>${figure('2023-czerwiec-z3-rys3.png', 'Rysunek 3. Klocki zanurzone w wodzie i ciężarek C', 390)}<h4>Zadanie 3.1. (0–4)</h4><p><strong>Oblicz masę ciężarka $\boldsymbol C$.</strong></p><h4>Zadanie 3.2. (0–2)</h4><p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class="pf-table"><tbody><tr><td class="pf-num">1.</td><td>Zrównoważenie belki z zanurzonymi sześcianami można osiągnąć bez użycia dodatkowego ciężarka, gdy przesunie się punkt zawieszenia klocka A bliżej punktu $O$ podparcia belki.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr><tr><td class="pf-num">2.</td><td>Zrównoważenie belki z zanurzonymi sześcianami można osiągnąć bez użycia dodatkowego ciężarka, gdy przesunie się punkt $O$ podparcia belki w stronę klocka B.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr><tr><td class="pf-num">3.</td><td>Zrównoważenie belki z zanurzonymi sześcianami można osiągnąć w cieczy o mniejszej gęstości niż gęstość wody, gdy zamiast ciężarka C położymy ciężarek o mniejszej masie.</td><td class="pf-box">P</td><td class="pf-box">F</td></tr></tbody></table></div>`,
  solution: {
    intuition: 'Przed zanurzeniem masy klocków są równe. Po zanurzeniu większy klocek traci więcej z ciężaru pozornego, bo działa na niego większa siła wyporu.',
    givens: '$a_A=2\text{ cm}$, $a_B=4\text{ cm}$, $\rho_w=1000\text{ kg/m}^3$.',
    steps: [
      { title: 'Zadanie 3.1 — pierwszy etap', content: 'Równe ramiona i równowaga belki dają $\frac l2m_Ag=\frac l2m_Bg$, zatem $m_A=m_B$.' },
      { title: 'Zadanie 3.1 — drugi etap', content: 'Z równowagi momentów: $m_A-\rho_wV_A=m_B+m_C-\rho_wV_B$. Po użyciu $m_A=m_B$: $m_C=\rho_w(V_B-V_A)$. Zatem $m_C=1000[(0{,}04)^3-(0{,}02)^3]\text{ kg}=0{,}056\text{ kg}=56\text{ g}$.' },
      { title: 'Zadanie 3.2', content: '1. P — przesunięcie A bliżej O zmniejsza jego moment. 2. F — przesunięcie podpory w stronę B nie daje potrzebnej zmiany ramion. 3. P — mniejsza gęstość cieczy zmniejsza różnicę sił wyporu, więc potrzebna jest mniejsza masa C.' }
    ],
    answer: '3.1: $m_C=56\text{ g}$.\n3.2: P, F, P.',
    trap: 'Siła wyporu zależy od objętości klocka, a nie od jego masy.',
    source: solutionNote('2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf', 'Klucz odpowiedzi CKE, s. 10–11')
  },
  solutionSource: officialSource('2023/fizyka-2023-czerwiec-matura-rozszerzona-odpowiedzi.pdf', [10, 11], 'Klucz')
};

const showcase2023 = {
  id: 'matura-cke-bryla-2023-pokazowy-zad-2', originalTaskId: 'matura-cke-2023-pokazowy-zad-2', number: 202302,
  title: 'Arkusz pokazowy 2023 zad. 2 nowa formuła', year: '2023 arkusz pokazowy', difficulty: 4,
  source: 'Arkusz pokazowy CKE – Formuła 2023', link: local('2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf'), formula: '2023', sourcePages: [4, 5],
  tags: ['Matura CKE', 'Bryła sztywna', 'Toczenie z poślizgiem', 'Tarcie kinetyczne', 'Moment bezwładności'],
  problem: `<div class="task-matura energy-statements"><h4>Zadanie 2.</h4><p>Jednorodny walec o masie $m$ i promieniu $R$ obraca się z prędkością kątową $\omega_0$ względem swojej osi symetrii. Obracający się walec jest utrzymywany poziomo w ten sposób, że nie dotyka podłoża (zobacz rysunki 1. i 2.). Moment bezwładności walca względem jego osi symetrii jest równy $I=\frac12mR^2$.</p>${figure('2023-pokazowy-z2-rys12.png', 'Rysunki 1. i 2. Obracający się walec nad podłożem', 350)}<p>W pewnej chwili $t_0=0$ obracający się walec położono na twardym, poziomym podłożu (zobacz rysunki 3. i 4.). Prędkość ruchu postępowego walca w chwili $t_0$ była równa zero. Od tego momentu – na skutek ruchu obrotowego – walec toczył się przez pewien czas z poślizgiem.</p>${figure('2023-pokazowy-z2-rys34.png', 'Rysunki 3. i 4. Walec toczący się z poślizgiem', 320)}<p>Uwzględnij tarcie kinetyczne (poślizgowe), ale pomiń inne opory ruchu. Przyjmij, że siła tarcia działająca na walec ma stałą wartość.</p><h4>Zadanie 2.1. (0–1)</h4><p>Na rysunku poniżej zaznaczono kierunek obrotu walca, gdy walec już toczy się z poślizgiem po poziomym podłożu. Środek masy walca oznaczono jako $S$, a punkt na walcu, przy styku z podłożem, oznaczono jako $A$.</p><p><strong>Narysuj wektor siły tarcia kinetycznego $\boldsymbol{\vec T}$ przyłożony w punkcie $\boldsymbol A$. Uwzględnij prawidłowy kierunek i zwrot tego wektora.</strong></p>${figure('2023-pokazowy-z2-rys-zad21.png', 'Schemat walca do zaznaczenia siły tarcia', 260)}<h4>Zadanie 2.2. (0–1)</h4><p><strong>Dokończ zdanie. Zaznacz odpowiedź A, B albo C oraz odpowiedź 1., 2. albo 3.</strong></p><p>Do momentu, gdy poślizg walca ustał, walec poruszał się ruchem postępowym</p><div class="energy-table-scroll"><table class="energy-data-table"><tbody><tr><td><strong>A.</strong></td><td>jednostajnym,</td><td rowspan="3">a prędkość kątowa ruchu obrotowego walca</td><td><strong>1.</strong></td><td>była stała.</td></tr><tr><td><strong>B.</strong></td><td>przyśpieszonym,</td><td><strong>2.</strong></td><td>się zwiększała.</td></tr><tr><td><strong>C.</strong></td><td>opóźnionym,</td><td><strong>3.</strong></td><td>się zmniejszała.</td></tr></tbody></table></div><h4>Zadanie 2.3. (0–4)</h4><p>W chwili $t_1$, gdy poślizg walca ustał, środek walca osiągnął prędkość liniową o wartości $v_1$ i prędkość kątową o wartości $\omega_1$.</p><p><strong>Oblicz wartość liczbową ilorazu prędkości kątowych $\boldsymbol{\frac{\omega_1}{\omega_0}}$. Zapisz obliczenia.</strong></p><p><em>Wskazówka: Podczas poślizgu $a\ne\varepsilon R$, gdzie $a$ jest wartością przyśpieszenia liniowego walca, $\varepsilon$ jest wartością przyśpieszenia kątowego walca.</em></p></div>`,
  solution: {
    intuition: 'Tarcie rozpędza środek masy, a jednocześnie hamuje obrót walca aż do spełnienia warunku toczenia bez poślizgu.',
    givens: '$I=\frac12mR^2$, początkowo $v_0=0$, $\omega_0>0$.',
    steps: [
      { title: 'Zadanie 2.1', content: `Dolny punkt powierzchni walca ślizga się względem podłoża w lewo, więc tarcie działające na walec jest skierowane w prawo.${figure('2023-pokazowy-z2-rozwiazanie.png', 'Oficjalny rysunek rozwiązania CKE — siła tarcia', 260)}` },
      { title: 'Zadanie 2.2', content: 'Stała siła tarcia daje stałe przyśpieszenie liniowe i stałe opóźnienie kątowe. Ruch postępowy jest jednostajnie przyśpieszony, a prędkość kątowa maleje. Odpowiedź B3.' },
      { title: 'Zadanie 2.3', content: 'Niech poślizg trwa czas $t$. Wtedy $v_1=at$ oraz $\omega_1=\omega_0-\varepsilon t$. Dla końca poślizgu $v_1=\omega_1R$. Z równań $ma=T$ i $I\varepsilon=TR$, przy $I=\frac12mR^2$, otrzymujemy $\varepsilon=2a/R$. Zatem $at=R(\omega_0-2at/R)$, czyli $3at=R\omega_0$. Stąd $\omega_1=v_1/R=at/R=\omega_0/3$.' }
    ],
    answer: '2.1: siła tarcia jest skierowana w prawo.\n2.2: B3.\n2.3: $\frac{\omega_1}{\omega_0}=\frac13$.',
    trap: 'Podczas poślizgu nie wolno używać warunku $v=\omega R$; obowiązuje on dopiero w chwili rozpoczęcia toczenia bez poślizgu.',
    source: solutionNote('2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf', 'Klucz odpowiedzi CKE, s. 5–7')
  },
  solutionSource: officialSource('2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona-odpowiedzi.pdf', [5, 7], 'Klucz')
};

function informatorTask(year) {
  const is2025 = year === 2025;
  const file = `informatory/informator-maturalny-fizyka-${year}.pdf`;
  const wording = is2025
    ? 'Ustal i zapisz, czy ciężarek o masie $m_1$ zacznie opadać czy się wznosić. Uzasadnij swoje stwierdzenie. W uzasadnieniu powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia.'
    : 'Ustal i zapisz, czy ciężarek o masie $m_1$ zacznie opadać czy się wznosić. Powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia, uzasadniające Twoje stwierdzenie.';
  return {
    id: `matura-cke-bryla-informator-${year}-zad-4`, originalTaskId: `matura-cke-informator-${year}-zad-4`, number: year === 2025 ? 202501 : 202301,
    title: `Informator maturalny ${year} zad. 4 – Kołowrót`, year: `Informator ${year}`, difficulty: 4,
    source: `Informator maturalny CKE ${year} – Fizyka`, link: local(file), formula: '2023', sourcePages: [24, 27],
    tags: ['Informator CKE', 'Bryła sztywna', 'Dynamika ruchu obrotowego', 'Moment bezwładności', 'Kołowrót'],
    problem: `<div class="task-matura energy-statements"><h4>Zadanie 4. Kołowrót</h4><p>Dwa jednorodne walce połączono na sztywno tak, że tworzą one bryłę obrotową (zobacz rysunek 1. i rysunek 2.). Może się ona obracać wokół nieruchomej poziomej osi, która pokrywa się z jej osią symetrii. Na walec o promieniu $R_1=5\text{ cm}$ i masie $M_1=3\text{ kg}$ nawinięto sznurek, do którego końca przymocowano ciężarek o masie $m_1=2\text{ kg}$. Na walec o promieniu $R_2=12\text{ cm}$ i masie $M_2=8\text{ kg}$ nawinięto sznurek, do którego końca przymocowano ciężarek o masie $m_2=1\text{ kg}$. Początki obu nierozciągliwych sznurków są przytwierdzone – odpowiednio – do każdego z walców, a kierunki ich nawinięcia na oba walce są przeciwne. Sznurki nawinięto prostopadle do osi walców tak, że nie zostawiono luzów. Podczas ruchu obrotowego bryły sznurki mogą nawijać się i odwijać. Układ znajduje się w ziemskim polu grawitacyjnym, przyśpieszenie ziemskie wynosi $\vec g$. W chwili początkowej układ jest nieruchomy.</p><p>Opisany układ odblokowano: umożliwiono połączonym walcom obracanie się wokół nieruchomej, poziomej osi. Pomiń opory ruchu oraz masę i grubość sznurków. Moment bezwładności jednorodnego walca o masie $M$ i promieniu $R$ jest równy $\frac12MR^2$.</p>${figure(`informator-${year}-z4-rysunki.png`, `Rysunki 1. i 2. Kołowrót — informator ${year}`, 410)}<h4>Zadanie 4.1. (0–1)</h4><p><strong>${wording}</strong></p><h4>Zadanie 4.2. (0–4)</h4><p><strong>Oblicz wartość przyśpieszenia ciężarka o masie $\boldsymbol{m_1}$. Wynik podaj z jednostką.</strong></p></div>`,
    solution: {
      intuition: 'Kierunek ruchu wyznacza porównanie momentów ciężarów, a przyśpieszenie — wspólna dynamika obu ciężarków i połączonych walców.',
      givens: '$R_1=0{,}05\text{ m}$, $M_1=3\text{ kg}$, $m_1=2\text{ kg}$, $R_2=0{,}12\text{ m}$, $M_2=8\text{ kg}$, $m_2=1\text{ kg}$.',
      steps: [
        { title: 'Zadanie 4.1', content: 'Momenty ciężarów: $\tau_1=m_1gR_1\approx0{,}981\text{ N m}$ oraz $\tau_2=m_2gR_2\approx1{,}18\text{ N m}$. Ponieważ $\tau_2>\tau_1$, ciężarek $m_2$ opada, a ciężarek $m_1$ wznosi się.' },
        { title: 'Zadanie 4.2 — równania ruchu', content: `${figure(`informator-${year}-z4-rozwiazanie.png`, `Oficjalny schemat sił CKE — informator ${year}`, 390)}$I\varepsilon=R_2F_2-R_1F_1$, $m_2a_2=m_2g-F_2$, $m_1a_1=F_1-m_1g$, $a_1=\varepsilon R_1$, $a_2=\varepsilon R_2$.` },
        { title: 'Zadanie 4.2 — obliczenia', content: '$I=\frac12M_1R_1^2+\frac12M_2R_2^2\approx0{,}0614\text{ kg m}^2$. Po wyeliminowaniu napięć: $\varepsilon=\frac{g(R_2m_2-R_1m_1)}{I+m_2R_2^2+m_1R_1^2}$. Stąd $a_1=\varepsilon R_1\approx0{,}12\text{ m/s}^2$.' }
      ],
      answer: '4.1: ciężarek o masie $m_1$ zacznie się wznosić.\n4.2: $a_1\approx0{,}12\text{ m/s}^2$.',
      trap: 'Nie porównuj samych ciężarów. O kierunku obrotu decydują momenty $m_igR_i$.',
      source: solutionNote(file, 'Oficjalne rozwiązanie CKE, s. 24–27')
    },
    solutionSource: officialSource(file, [24, 27], 'Informator')
  };
}

const additions = [january2026, december2024, june2024, june2023, showcase2023, informatorTask(2025), informatorTask(2023)].map(repairTexDeep);
const allExisting = subchapter.tasks.filter((task) => !additions.some((item) => item.id === task.id || item.originalTaskId === task.originalTaskId));
const byId = new Map([...allExisting, ...additions].map((task) => [task.id, task]));
const order = [
  'matura-cke-bryla-2026-czerwiec-zad-4',
  'matura-cke-bryla-2026-maj-zad-3',
  january2026.id,
  'matura-cke-bryla-2025-czerwiec-zad-3',
  'matura-cke-bryla-2025-maj-zad-2',
  december2024.id,
  june2024.id,
  'matura-cke-bryla-2024-maj-zad-2',
  june2023.id,
  'matura-cke-bryla-2023-maj-zad-3',
  showcase2023.id,
  'matura-cke-bryla-informator-2025-zad-4',
  'matura-cke-bryla-informator-2023-zad-4'
];
const missing = order.filter((id) => !byId.has(id));
if (missing.length) throw new Error(`Brak zadań wymaganych do ułożenia działu: ${missing.join(', ')}`);
subchapter.tasks = order.map((id) => byId.get(id));
subchapter.title = 'Zadania maturalne CKE — bryła sztywna';
subchapter.desc = 'Nowa formuła: arkusze CKE z lat 2023–2026, arkusz pokazowy oraz informatory 2025 i 2023. Arkusze są ułożone od najnowszych do najstarszych, a następnie informatory.';
section.badge = `${subchapter.tasks.length} zadań CKE`;
section.isComingSoon = false;
section.desc = 'Statyka i dynamika bryły sztywnej, moment siły, moment bezwładności oraz toczenie — komplet zadań nowej formuły 2023–2026 z rozwiązaniami według kluczy CKE.';

fs.writeFileSync(dataPath, `window.FIZYKOREK_COURSES = ${JSON.stringify(courses, null, 2)};\n`);
console.log(`Zapisano ${subchapter.tasks.length} zadań w dziale ${section.id}.`);
