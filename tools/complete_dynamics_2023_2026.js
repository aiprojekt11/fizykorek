// Verified additions to the existing HTML/LaTeX task collection.
const fs = require('fs');
const vm = require('vm');
const {createCanvas, loadImage} = require('canvas');
const R = String.raw;
const img = (name, alt, height=380) => `<div class="chart-container-svg"><img src="img/${name}.png" alt="${alt}" class="theory-img" style="max-height: ${height}px; display: block; margin: 15px auto;"></div>`;
const h = (n,p) => `<h4>Zadanie ${n}. (0–${p})</h4>`;
const pf = rows => `<p><strong>Oceń prawdziwość poniższych stwierdzeń. Wybierz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p><table class="cke-table" style="width:100%;border-collapse:collapse;margin:15px 0"><tbody>${rows.map(t=>`<tr><td>${t}</td><td>P</td><td>F</td></tr>`).join('')}</tbody></table>`;
const wrap = t => `<div class="task-matura">${t}</div>`;
const solution = (intuition,givens,steps,answer,trap) => ({intuition,givens,steps:steps.map(([title,content])=>({title,content})),answer,numerical:answer,trap});
const make = (session,n,problem,sol,imageName) => ({id:`matura-cke-${session}-zad-${n}`,number:Number(session.slice(0,4))*100+(session.includes('czerwiec')?6:5),title:`Matura ${session.includes('czerwiec')?'czerwiec':'maj'} 2026 zad. ${n} nowa formuła`,year:`2026 ${session.includes('czerwiec')?'czerwiec':'maj'}`,difficulty:3,source:`Matura CKE 2026 (${session.includes('czerwiec')?'Czerwiec – termin dodatkowy':'Maj'})`,link:session.includes('czerwiec')?'https://naukagryzie.pl/arkusze/matura-rozszerzona/fizyka/czerwiec-2026-formula-2023-cke/arkusz.pdf':'https://egzaminy.gov.pl/pliki/5948/697b5fd85d09a542f44987a9a4da5def56779e3dcf2fadd8834faea04277d0ab',tags:['Matura CKE','Dynamika','Zasady Newtona'],image:imageName?`img/${imageName}.png`:undefined,problem:wrap(problem),solution:sol});

async function main() {
  const file = 'js/data-courses.js';
  const original = fs.readFileSync(file,'utf8');
  const sandbox={window:{}};
  vm.runInNewContext(original,sandbox);
  const courses=sandbox.window.FIZYKOREK_COURSES;
  const section=courses['matura-fizyka'].sections.find(s=>s.id==='m-dynamika');
  const sub=section.subchapters.find(s=>s.id==='sub-dynamika-matura');
  fs.mkdirSync('tools/dynamics-audit',{recursive:true});
  const backup='tools/dynamics-audit/data-courses.before.js';
  if(!fs.existsSync(backup)) fs.writeFileSync(backup,original);
  // Read the historical task literals only: do not execute the old mutation script.
  const historical=fs.readFileSync('tools/update_10_verbatim_tasks.js','utf8');
  const literals=historical.slice(historical.indexOf('const tasks ='),historical.indexOf('// Read current data-courses.js'));
  const restored=vm.runInNewContext(literals+'\ntasks;');
  const ids=['matura-cke-2026-styczen-zad-2','matura-cke-2023-czerwiec-zad-2','matura-cke-2023-maj-zad-2','matura-cke-informator-2023-zad-3'];
  const additions=restored.filter(t=>ids.includes(t.id));
  for(const t of additions) {
    // Historical solution literals accidentally contained visible backslash-n sequences.
    t.solution=JSON.parse(JSON.stringify(t.solution).replace(/\\\\n/g,'\\n'));
    if(t.id==='matura-cke-2026-styczen-zad-2')t.problem=t.problem.replace('\\vec{v}_1$, a kula','\\vec{v}_1$ a kula');
    if(t.id==='matura-cke-2023-czerwiec-zad-2')t.problem=t.problem.replace('takiego zderzenia. Zapisz obliczenia.','takiego zderzenia.');
  }
  const crops=[
    ['2026-maj-6','cke_2026_maj_zad2_ruch',[548,195,253,210]],
    ['2026-maj-6','cke_2026_maj_zad2_siatka',[247,595,400,343]],
    ['2026-maj-7','cke_2026_maj_zad2_opcje',[176,240,550,642]],
    ['2026-czerwiec-7','cke_2026_czerwiec_zad2_rysunek',[592,392,210,230]],
    ['2026-czerwiec-8','cke_2026_czerwiec_zad3_rysunki',[111,574,696,334]],
    ['2024-grudzien-6','cke_2024_grudzien_zad2_woda',[215,311,475,165]],
    ['2024-grudzien-6','cke_2024_grudzien_zad2_diagramy',[225,773,405,348]],
    ['2024-grudzien-7','cke_2024_grudzien_zad2_ciecz',[651,294,200,136]],
    ['informator-2025-12','cke_informator_2025_zad1_tor',[117,400,727,249]],
    ['informator-2025-12','cke_informator_2025_zad1_opcje',[119,824,688,341]],
  ];
  for(const [page,name,[x,y,w,hh]] of crops){
    const source=await loadImage(`tools/dynamics-audit/${page}.png`);
    const c=createCanvas(w,hh);c.getContext('2d').drawImage(source,x,y,w,hh,0,0,w,hh);
    // The paragraph above the circular diagram overlaps its rectangular crop at the corner.
    if(name==='cke_2026_maj_zad2_ruch'){const ctx=c.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,60,20);}
    fs.writeFileSync(`img/${name}.png`,c.toBuffer('image/png'));
  }

  additions.push(make('2026-maj',2,R`<h4>Zadanie 2.</h4>
<p>Do jednego z końców nierozciągliwej nici o długości $l$ zamocowano niewielkie ciało $\mathcal{B}$ o masie $m$. Drugi koniec nici jest unieruchomiony w punkcie $S$. Następnie ciało $\mathcal{B}$ wprawiono w ruch po okręgu o środku w punkcie $S$ <u>w płaszczyźnie pionowej</u>.</p>
<p>Przyjmij model zjawiska, w którym:</p><ul>
<li>na ciało $\mathcal{B}$ podczas ruchu działają dwie siły:<br>$\vec{F}_g$ – siła grawitacji oraz $\vec{F}_n$ – siła reakcji nici</li>
<li>pomijamy wszelkie opory ruchu, masę nici, a ciało $\mathcal{B}$ traktujemy jako punkt materialny</li>
<li>ciało $\mathcal{B}$ porusza się w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul>
${img('cke_2026_maj_zad2_ruch','Ciało na nici w pionowej płaszczyźnie',260)}
<p>Sytuację ilustruje rysunek powyżej, na którym oznaczono przyśpieszenie ziemskie $\vec{g}$.</p>
${h('2.1',2)}<p>Na poniższym rysunku przedstawiono wektory prędkości ciała $\mathcal{B}$ w dwóch różnych chwilach czasu podczas opisanego ruchu tego ciała po okręgu.</p><p>Długość boku kratki odpowiada umownej jednostce odległości.</p>
${img('cke_2026_maj_zad2_siatka','Rysunek – wektory prędkości na siatce',400)}
<p><strong>Na rysunku powyżej wyznacz konstrukcyjnie środek okręgu, po którym porusza się ciało $\mathcal{B}$. Podpisz środek tego okręgu jako $S$.</strong></p>
<p><strong>Zapisz w wykropkowanym miejscu poniżej długość $l$ promienia tego okręgu. Wyraź tę długość w umownych jednostkach odległości.</strong></p>
<p>$l =$ ........... długości boku kratki</p><p><em>Uwaga! W tym przykładzie środek $S$ okręgu leży w punkcie kratowym.</em></p>
${h('2.2',1)}<p><strong>Na którym rysunku (spośród A–D) prawidłowo przedstawiono siły – grawitacji $\vec{F}_g$ oraz reakcji nici $\vec{F}_n$ – działające na ciało $\mathcal{B}$ podczas ruchu po okręgu, gdy przechodzi ono przez najniższe położenie? Wybierz właściwą odpowiedź spośród podanych.</strong></p>
${img('cke_2026_maj_zad2_opcje','Odpowiedzi A–D – siły w najniższym położeniu',600)}
${h('2.3',4)}<p>Siła $\vec{F}_n$, z jaką nić działa na ciało $\mathcal{B}$ podczas jego ruchu po okręgu, zmienia swoją wartość. Największą wartość tej siły oznaczymy jako $F_{n\,max}$, a najmniejszą – jako $F_{n\,min}$.</p>
<p>Dany jest iloraz największej i najmniejszej wartości prędkości ciała $\mathcal{B}$ podczas jego ruchu po okręgu:</p><p style="text-align:center">$\frac{v_{max}}{v_{min}}=\sqrt{3}$</p>
<p><strong>Oblicz iloraz $\frac{F_{n\,max}}{F_{n\,min}}$. Zapisz obliczenia.</strong></p>`,
solution(R`Siła wypadkowa w kierunku promienia zapewnia przyśpieszenie dośrodkowe. Prędkości na dole i na górze łączy zasada zachowania energii.`,R`Promień $l$, masa $m$, $v_{max}/v_{min}=\sqrt3$.`,[
['Zadanie 2.1',R`Przez punkty zaczepienia obu prędkości poprowadź proste prostopadłe do tych prędkości. Ich przecięcie to środek $S$. Leży on 10 kratek poniżej punktu zaczepienia $\vec v_1$. Promień wynosi $l=10$ długości boku kratki.`],
['Zadanie 2.2',R`W najniższym punkcie przyśpieszenie dośrodkowe jest zwrócone do góry: $F_n-mg=mv^2/l>0$. Stąd $F_n>F_g$, a siły mają przeciwne zwroty. Odpowiedź B.`],
['Zadanie 2.3',R`Z zachowania energii między dołem i górą: $\frac12m(v_{max}^2-v_{min}^2)=mg\cdot2l$. Ponieważ $v_{max}^2=3v_{min}^2$, otrzymujemy $v_{min}^2=2gl$ i $v_{max}^2=6gl$.
Na dole: $F_{n\,max}=mg+mv_{max}^2/l=7mg$.
Na górze: $F_{n\,min}+mg=mv_{min}^2/l$, więc $F_{n\,min}=mg$.
Zatem $F_{n\,max}/F_{n\,min}=7$.`]],R`2.1: $l=10$ kratek; 2.2: B; 2.3: $7$.`,R`Na górze ciężar i napięcie nici są zwrócone do środka okręgu, więc dodają się.`),'cke_2026_maj_zad2_ruch'));

  additions.push(make('2026-czerwiec',2,R`<h4>Zadanie 2.</h4>
<p>Do końca linki o długości $l$ doczepiono kulkę K o masie $m$.</p>
<p>Maksymalna wartość siły napięcia linki, po której przekroczeniu linka ulega zerwaniu, jest równa wartości dwukrotnego ciężaru kulki: $F_{n\,max}=2mg$.</p>
<p>Przyjmij, że:</p><ul><li>linka jest nierozciągliwa, masę linki pomijamy</li><li>przyśpieszenie ziemskie ma wartość $g=9{,}8\text{ m/s}^2$</li><li>pomijamy siły oporów działające na kulkę</li><li>kulkę traktujemy jako punkt materialny</li><li>ruch kulki opisujemy w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym.</li></ul>
${h('2.1',1)}<p>W doświadczeniu 1. linkę wraz z zawieszoną na niej kulką K podnoszono pionowo ruchem jednostajnie przyśpieszonym prostoliniowym.</p>
<p>Wartość przyśpieszenia maksymalnego opisanego ruchu, przy którym linka się jeszcze nie zerwie, oznaczymy jako $a_{max}$.</p>
<p><strong>Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.</strong></p><p>Wartość $a_{max}$ w doświadczeniu 1. jest równa</p>
<ol type="A"><li>$a_{max}=\frac12g$</li><li>$a_{max}=g$</li><li>$a_{max}=2g$</li><li>$a_{max}=3g$</li></ol>
${h('2.2',4)}<p>W doświadczeniu 2. kulkę K zawieszoną na lince wprawiono w ruch jednostajny po okręgu o środku $O$ w płaszczyźnie poziomej. Górny koniec linki jest unieruchomiony w punkcie $P$.</p>
<p>Częstotliwość graniczną (maksymalną) ruchu kulki K po okręgu, powyżej której nić ulegnie zerwaniu, oznaczymy jako $f_{max}$.</p>
<p>Sytuację ilustruje rysunek poniżej, na którym oznaczono przyśpieszenie ziemskie $\vec{g}$.</p>
${img('cke_2026_czerwiec_zad2_rysunek','Kulka na lince poruszająca się w płaszczyźnie poziomej',300)}
<p><strong>Wyznacz $f_{max}$ w doświadczeniu 2. w zależności <u>tylko</u> od wartości przyśpieszenia ziemskiego $g$ oraz od długości linki $l$.</strong></p>
<p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać wzoru na $f_{max}$.</strong></p>`,
solution(R`Rozkład napięcia linki na składowe pozwala zapisać II zasadę Newtona w pionie i w kierunku środka okręgu.`,R`$F_{n\,max}=2mg$, długość linki $l$.`,[
['Zadanie 2.1',R`$F_n-mg=ma$. Dla $F_n=2mg$ dostajemy $a_{max}=g$. Odpowiedź B.`],
['Zadanie 2.2',R`Niech $\alpha$ będzie kątem linki z pionem. Promień okręgu $r=l\sin\alpha$.
W pionie: $F_n\cos\alpha=mg$. W poziomie: $F_n\sin\alpha=m\omega^2r=m\omega^2l\sin\alpha$.
Dla ruchu po okręgu $\sin\alpha\ne0$, więc $F_n=m\omega^2l=4\pi^2mf^2l$.
Przy granicznym napięciu $2mg=4\pi^2mf_{max}^2l$, skąd $f_{max}=\frac{1}{2\pi}\sqrt{\frac{2g}{l}}$.`]],R`2.1: B; 2.2: $f_{max}=\frac{1}{2\pi}\sqrt{\frac{2g}{l}}$.`,R`Promień okręgu nie jest równy długości linki: $r=l\sin\alpha$.`),'cke_2026_czerwiec_zad2_rysunek'));

  additions.push(make('2026-czerwiec',3,R`<h4>Zadanie 3.</h4>
<p>Klocek A porusza się ze stałą prędkością $\vec{v}_1$ w stronę nieruchomego klocka B (zobacz rysunek 1.). Do klocka B jest przymocowana sprężyna o współczynniku sprężystości $k$. W pewnym momencie dochodzi do zderzenia klocków. Podczas tego zderzenia sprężyna najpierw jest ściskana, a następnie się rozpręża, w wyniku czego klocek A hamuje, a klocek B przyśpiesza (zobacz rysunki 1.–3.).</p>
<p>Przyjmij następujące dane i założenia:</p><ul><li>gdy sprężyna jest maksymalnie ściśnięta, to jej odkształcenie względem długości swobodnej oznaczymy jako $\Delta x_{max}$</li><li>gdy sprężyna jest maksymalnie ściśnięta, to wartości prędkości obu klocków są sobie równe i wynoszą $v_2$</li><li>masy klocków są sobie równe: $m_A=m_B=m$</li></ul>
<p>oraz</p><ul><li>pomijamy tarcie obu klocków o podłoże oraz opory powietrza</li><li>pomijamy masę sprężyny</li><li>wartość siły sprężystości, z jaką sprężyna działa na klocek, jest wprost proporcjonalna do zmiany długości sprężyny względem jej długości swobodnej</li><li>zderzenie klocków jest idealnie sprężyste.</li></ul>
${img('cke_2026_czerwiec_zad3_rysunki','Rysunki 1–3 – kolejne etapy zderzenia klocków',400)}
${h('3.1',1)}${pf(['Gdy sprężyna jest maksymalnie ściśnięta, to wartość siły, z jaką sprężyna działa na klocek A, jest równa wartości siły, z jaką sprężyna działa na klocek B.','Gdy sprężyna jest maksymalnie ściśnięta, to prędkość względna klocków A i B wynosi zero.'])}
${h('3.2',4)}<p><strong>Wyznacz $\Delta x_{max}$ w zależności <u>tylko</u> od: $k$, $m$ oraz $v_1$.</strong></p><p><strong>Zapisz odpowiednie równania i przekształcenia oraz podaj postać wzoru na $\Delta x_{max}$.</strong></p>`,
solution('Pęd układu jest zachowany. W chwili maksymalnego ściśnięcia część energii kinetycznej jest zmagazynowana w sprężynie.',R`$m_A=m_B=m$, prędkość początkowa A: $v_1$, B spoczywa.`,[
['Zadanie 3.1','Oba zdania są prawdziwe (P, P). Sprężyna o pomijalnej masie działa na klocki siłami o równych wartościach. W chwili maksymalnego ściśnięcia klocki mają tę samą prędkość, więc ich prędkość względna wynosi zero.'],
['Zadanie 3.2',R`Z zachowania pędu $mv_1=2mv_2$, więc $v_2=v_1/2$.
Z zachowania energii: $\frac12mv_1^2=2\cdot\frac12mv_2^2+\frac12k(\Delta x_{max})^2$.
Po podstawieniu $v_2$: $\frac14mv_1^2=\frac12k(\Delta x_{max})^2$.
Stąd $\Delta x_{max}=v_1\sqrt{\frac{m}{2k}}$.`]],R`3.1: P, P; 3.2: $\Delta x_{max}=v_1\sqrt{\frac{m}{2k}}$.`,'Przy maksymalnym ściśnięciu oba klocki nadal się poruszają. Nie cała początkowa energia kinetyczna jest energią sprężystości.'),'cke_2026_czerwiec_zad3_rysunki'));

  const infSolution=solution('Podczas lotu stosujemy kinematykę i zachowanie energii. Podczas odbicia uwzględniamy zmianę zwrotu pędu oraz ciężar.',R`$m=0{,}250\text{ kg}$, $h=1{,}80\text{ m}$, $v_0=3{,}20\text{ m/s}$, $\Delta t=0{,}005\text{ s}$.`,[
['Zadanie 2.1',R`$h=v_0t+\frac12gt^2$, więc $t=\frac{-v_0+\sqrt{v_0^2+2gh}}{g}=\frac{-3{,}20+\sqrt{3{,}20^2+2\cdot9{,}81\cdot1{,}80}}{9{,}81}\text{ s}\approx0{,}362\text{ s}$.`],
['Zadanie 2.2',R`$\frac12mv_1^2=\frac12mv_0^2+mgh$. Stąd $v_1=\sqrt{v_0^2+2gh}=\sqrt{3{,}20^2+2\cdot9{,}81\cdot1{,}80}\text{ m/s}\approx6{,}75\text{ m/s}$.`],
['Zadanie 2.3',R`Po odbiciu energia kulki stanowi $75\%$ energii przed uderzeniem: $v_2=\sqrt{0{,}75}\,v_1\approx5{,}85\text{ m/s}$.
Oś zwracamy w górę: $\Delta p=mv_2-(-mv_1)=m(v_2+v_1)$.
$(F_R-mg)\Delta t=m(v_2+v_1)$, więc $F_R=mg+\frac{m(v_2+v_1)}{\Delta t}\approx632\text{ N}$.`]],R`2.1: $0{,}36\text{ s}$; 2.2: $6{,}75\text{ m/s}$; 2.3: około $632\text{ N}$.`,'W odbiciu zmienia się zwrot prędkości. Wartości prędkości dodajemy przy obliczaniu zmiany pędu.');
  for(const year of [2023,2025]){
    const newer=year===2025;
    additions.push({id:`matura-cke-informator-${year}-zad-2`,number:year*1000+2,title:`Informator CKE ${year} zad. 2 nowa formuła`,year:`Informator ${year}`,difficulty:3,source:`Informator CKE od roku szkolnego ${newer?'2024/2025':'2022/2023'}`,link:`https://arkusze.pl/informatory/informator-maturalny-fizyka-${year}.pdf`,tags:['Matura CKE','Dynamika','Pęd','Zderzenia'],problem:wrap(R`<h4>Zadanie 2. Spadająca kulka</h4>
<p>Pionowo w dół rzucono metalową kulkę o masie $m=0{,}250\text{ kg}$. Na wysokości $h=1{,}80\text{ m}$ ponad podłożem, w chwili $t_0=${newer?'0\\text{ s}':'0'}$, kulka osiągnęła prędkość o wartości $v_0=3{,}20\text{ m/s}$. Licząc od wysokości $h$, aż do podłoża, kulka spadała swobodnie i się nie obracała. Po upadku na twarde podłoże kulka odbiła się od niego, a czas oddziaływania (zderzenia) kulki z podłożem był równy $\Delta t=${newer?'5{,}00\\cdot10^{-3}':'0{,}005'}\text{ s}$. Podczas pierwszego zderzenia z podłożem kulka straciła 25% swojej energii mechanicznej.</p>
<p>Do analizy zjawiska przyjmij jego uproszczony model, w którym:</p><ul><li>pomiń opory powietrza podczas ruchu kulki;</li><li>załóż, że siła $\vec{F}_R$ reakcji podłoża działająca na kulkę podczas zderzenia była stała;</li><li>przyjmij do obliczeń wartość przyśpieszenia ziemskiego równą $${newer?'g=':''}9{,}81\text{ m/s}^2$.</li></ul>
${h('2.1',2)}<p><strong>Na podstawie danych przedstawionych w opisie zadania 2. oblicz czas trwania ruchu kulki od chwili $t_0=${newer?'0\\text{ s}':'0'}$ do chwili pierwszego uderzenia w podłoże.${newer?' Zapisz obliczenia.':''}</strong></p>
${h('2.2',2)}<p><strong>Wykaż, że wartość prędkości ${newer?'uzyskanej':'uzyskana'} przez kulkę tuż przed pierwszym uderzeniem w podłoże wynosi $v_1\approx6{,}75\text{ m/s}$.</strong></p>
${h('2.3',3)}<p><strong>Oblicz wartość siły reakcji podłoża działającej na kulkę podczas zderzenia kulki z podłożem.${newer?' Zapisz obliczenia.':''}</strong></p>
<p><em>Wskazówka: możesz skorzystać z faktu, że wartość prędkości uzyskana przez kulkę tuż przed uderzeniem w podłoże wynosi $v_1\approx6{,}75\text{ m/s}$.</em></p>`),solution:infSolution});
  }
  // Both editions are kept explicitly because their instructions differ.
  for(const n of [1,3]){
    const originalTask=n===1?sub.tasks.find(t=>t.id==='matura-cke-informator-2023-zad-1'):additions.find(t=>t.id==='matura-cke-informator-2023-zad-3');
    const t=JSON.parse(JSON.stringify(originalTask));
    t.id=`matura-cke-informator-2025-zad-${n}`;t.number=2025000+n;t.year='Informator 2025';t.title=`Informator CKE 2025 zad. ${n} nowa formuła`;t.source='Informator CKE od roku szkolnego 2024/2025';t.link='https://bip.cke.gov.pl/attachments/download/10000';
    if(n===1){
      t.problem=t.problem.replace('Na którym diagramie prawidłowo','Na którym diagramie (spośród A–D) prawidłowo');
      t.problem=t.problem.replace('Oblicz wartość siły $\\vec{F}$.</strong>','Oblicz wartość siły $\\vec{F}$. Zapisz obliczenia.</strong>');
      t.problem=t.problem.replaceAll('cke_informator_zad1_tor','cke_informator_2025_zad1_tor').replaceAll('cke_informator_zad1_opcje','cke_informator_2025_zad1_opcje');
      t.image='img/cke_informator_2025_zad1_tor.png';
      const model='<p>Przyjmij model zjawiska, w którym zakładamy, że siła $\\vec{F}$ była stała. Na rysunkach pominięto bardzo krótki paraboliczny fragment toru, gdy na ciało działała siła $\\vec{F}$.</p>';
      t.problem=t.problem.replace(model,'').replace('<h4>Zadanie 1.1.',model+'\n<h4>Zadanie 1.1.');
    }
    if(n===3)t.problem=t.problem.replace('Powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia, uzasadniające twoje stwierdzenie.','Uzasadnij swoje stwierdzenie. W uzasadnieniu powołaj się na odpowiednie prawa lub zależności fizyczne i wykonaj niezbędne obliczenia.');
    additions.push(t);
  }
  additions.push({id:'matura-cke-2024-grudzien-zad-2',number:202412,title:'Matura próbna grudzień 2024 zad. 2 nowa formuła',year:'2024 grudzień próbna',difficulty:3,source:'Test diagnostyczny CKE – grudzień 2024',link:'https://arkusze.pl/maturalne/fizyka-2024-grudzien-probna-rozszerzona.pdf',tags:['Matura CKE','Dynamika','Równowaga sił','Siła wyporu'],image:'img/cke_2024_grudzien_zad2_woda.png',problem:wrap(R`<h4>Zadanie 2.</h4>
<p>Ciała $\mathcal{C}_1$ i $\mathcal{C}_2$ mają różne masy i są bryłami w kształcie prostopadłościanów o takich samych wymiarach. Po włożeniu tych ciał do naczynia z wodą zaobserwowano, że:</p>
<ul><li>ciało $\mathcal{C}_1$ pozostaje nieruchomo, przy czym $\frac34$ objętości tego ciała jest zanurzone w wodzie</li><li>ciało $\mathcal{C}_2$ pozostaje nieruchomo całkowicie zanurzone w wodzie (i nie dotyka dna).</li></ul>
<p>Przyjmij, że obserwację wykonano w układzie inercjalnym, w jednorodnym, ziemskim polu grawitacyjnym. Opisaną sytuację przedstawiono na poniższym rysunku.</p>
${img('cke_2024_grudzien_zad2_woda','Dwa ciała zanurzone w wodzie',250)}
${h('2.1',3)}<p>Punkty $C_1$ i $C_2$ na poniższych diagramach 1. i 2. odpowiadają ciałom $\mathcal{C}_1$ i $\mathcal{C}_2$. Długość boku kratki na każdym diagramie odpowiada umownej jednostce siły.</p>
<p>Na diagramie 1. narysowano siłę wyporu $\vec{F}_{w1}$, działającą na ciało $\mathcal{C}_1$.</p>
<p><strong>Na diagramie 1. narysuj i oznacz siłę grawitacji $\vec{F}_{g1}$, działającą na $\mathcal{C}_1$.</strong></p>
<p><strong>Na diagramie 2. narysuj i oznacz siły grawitacji $\vec{F}_{g2}$ oraz wyporu $\vec{F}_{w2}$, działające na $\mathcal{C}_2$.</strong></p>
<p><strong>Zachowaj odpowiednie kierunki, zwroty oraz <u>dokładne długości wszystkich</u> wektorów, odpowiadające wartościom tych sił.</strong></p>
${img('cke_2024_grudzien_zad2_diagramy','Diagramy 1 i 2 – siatki do narysowania wektorów sił',440)}
${h('2.2',3)}<p>Ciało $\mathcal{C}_1$ wyjęto z wody i włożono do naczynia z pewną cieczą X.</p>
<p>Zaobserwowano, że ciało $\mathcal{C}_1$ pływa tak, że $\frac23$ jego objętości jest zanurzone w tej cieczy (zobacz rysunek obok).</p>
${img('cke_2024_grudzien_zad2_ciecz','Ciało pływające w cieczy X',200)}
<p>Przyjmij do obliczeń gęstość wody $\rho_w=1\text{ g/cm}^3$. Gęstość cieczy X oznaczymy jako $\rho_X$.</p>
<p><strong>Oblicz $\rho_X$. Zapisz obliczenia.</strong></p>`),solution:solution('Ciała spoczywają, więc ciężar równoważy siłę wyporu. Wypór jest proporcjonalny do objętości wypartej cieczy.',R`Jednakowe objętości ciał $V$; zanurzenie $3V/4$ i $V$ w wodzie oraz $2V/3$ w cieczy X.`,[
['Zadanie 2.1',R`Dla pierwszego ciała $F_{g1}=F_{w1}$: od $C_1$ narysuj pionowo w dół wektor o długości 6 kratek.
Dla drugiego ciała $F_{w2}=\rho_w gV=\frac43F_{w1}$. Od $C_2$ narysuj $\vec F_{w2}$ w górę i $\vec F_{g2}$ w dół, oba o długości 8 kratek.`],
['Zadanie 2.2',R`Ciężar pierwszego ciała nie zmienia się. Z równowagi sił w obu cieczach: $\rho_wg\frac34V=mg=\rho_Xg\frac23V$.
Po skróceniu $gV$: $\rho_X=\frac{3/4}{2/3}\rho_w=\frac98\rho_w=1{,}125\text{ g/cm}^3=1125\text{ kg/m}^3$.`]],R`2.1: $F_{g1}$ – 6 kratek w dół; $F_{g2}$ – 8 w dół; $F_{w2}$ – 8 w górę. 2.2: $\rho_X=1{,}125\text{ g/cm}^3$.`,'We wzorze na wypór używamy objętości zanurzonej części ciała, a nie zawsze całej objętości.')});
  const deferredIds=new Set([...ids,'matura-cke-2026-czerwiec-zad-3','matura-cke-informator-2023-zad-2','matura-cke-informator-2025-zad-2','matura-cke-informator-2025-zad-3']);
  fs.writeFileSync('tools/dynamics-audit/deferred-energy-tasks.json',JSON.stringify(additions.filter(t=>deferredIds.has(t.id)),null,2));
  sub.tasks=sub.tasks.filter(t=>!deferredIds.has(t.id));
  for(const task of additions.filter(t=>!deferredIds.has(t.id))){const index=sub.tasks.findIndex(t=>t.id===task.id);if(index<0)sub.tasks.push(task);else sub.tasks[index]=task;}
  const inf23=sub.tasks.find(t=>t.id==='matura-cke-informator-2023-zad-1');
  inf23.problem=inf23.problem.replace('Oblicz wartość siły $\\vec{F}$. Zapisz obliczenia.','Oblicz wartość siły $\\vec{F}$.');
  sub.tasks.sort((a,b)=>{const ai=a.year.startsWith('Informator'),bi=b.year.startsWith('Informator');if(ai!==bi)return ai?1:-1;return b.number-a.number||a.id.localeCompare(b.id);});
  section.badge=`${sub.tasks.length} zadań CKE`;
  section.desc='Zasady dynamiki Newtona, siły, tarcie, opory ruchu, równowaga sił, pęd i zmiana pędu.';
  sub.desc='Zadania CKE w Formule 2023: dynamika i siły z matur 2023–2026, prób CKE oraz informatorów 2023 i 2025. Zderzenia i bryła sztywna należą do osobnych działów.';
  for(const t of sub.tasks){for(const m of t.problem.matchAll(/src="([^"]+)"/g)){if(!fs.existsSync(m[1]))throw new Error(`Missing ${m[1]}`);}}
  const output=`window.FIZYKOREK_COURSES = ${JSON.stringify(courses,null,2)};\n`;
  new vm.Script(output);
  fs.writeFileSync(file,output);
  console.log(`Saved ${sub.tasks.length} tasks; existing sections preserved.`);
}
main().catch(e=>{console.error(e);process.exitCode=1;});
