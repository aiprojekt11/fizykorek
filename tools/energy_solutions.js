// Worked solutions checked against the CKE marking schemes listed in the manifest.
const R=String.raw,{img}=require('./energy_additions');
const solutions={};
function set(id,intuition,givens,steps,answer,trap){solutions[id]={intuition,givens,steps:steps.map(([n,content])=>({title:`Zadanie ${n}`,content})),answer,trap};}
set('2023-czerwiec-zad-1','Praca siły wypadkowej zmienia energię kinetyczną ruchu postępowego. Nachylenie wykresu kwadratu prędkości pozwala wyznaczyć opóźnienie.',R`$a>0$ oznacza wartość opóźnienia. Dane pomiarowe i niepewności podano w tabeli.`,[
['1.1',R`Siła wypadkowa jest przeciwna do ruchu: $F_w=ma$. Jej praca na drodze $s$ wynosi $W=-mas$.
Twierdzenie o pracy i zmianie energii kinetycznej ruchu postępowego:
$-mas=\frac12mv^2-\frac12mv_0^2$.
Po pomnożeniu przez $2/m$: $-2as=v^2-v_0^2$.
Zatem $v^2=v_0^2-2as$.`],
['1.2',R`Nanosimy wszystkie pięć punktów z tabeli i pionowe odcinki niepewności. Rysujemy prostą najlepiej dopasowaną (fioletową na rysunku CKE).`+img('2023-czerwiec-z1-rozwiazanie','Wykres z punktami, niepewnościami i prostą dopasowaną według klucza CKE',610)+R`Z prostej odczytujemy przykładowo punkty $(0{,}00;0{,}098)$ i $(0{,}84;0{,}010)$, w jednostkach osi wykresu.
Wartość bezwzględna nachylenia:
$|b|=\frac{0{,}098-0{,}010}{0{,}84-0{,}00}\text{ m/s}^2$.
$|b|\approx0{,}105\text{ m/s}^2$.
Ponieważ $b=-2a$, to $a=|b|/2\approx0{,}052\text{ m/s}^2$.
Przecięcie przedłużonej prostej z osią $s$ odpowiada $v=0$: $s_z\approx0{,}94\text{ m}$.
Klucz dopuszcza $a$ od $0{,}047$ do $0{,}057\text{ m/s}^2$ i $s_z$ od $0{,}90$ do $0{,}98\text{ m}$.`]
],R`1.1: $v^2=v_0^2-2as$.
1.2: $a\approx0{,}052\text{ m/s}^2$, $s_z\approx0{,}94\text{ m}$.`,'W 1.2 trzeba wykorzystać narysowany wykres; same obliczenia z tabeli nie wystarczają.');
set('2023-maj-zad-3','Ubytek energii potencjalnej ciężarka zasila ruch ciężarka oraz ruch postępowy i obrotowy walca.',R`Obie masy są równe $m$. $I=\frac12mR^2$, $v=\omega R$.`,[
['3.1',R`1. P: bez poślizgu $s=R\varphi$, a dla pełnego obrotu $s=2\pi R$.
2. P: $E_{post}=\frac12mv^2$, natomiast $E_{obr}=\frac12I\omega^2=\frac14mv^2$. Energia postępowa jest dwa razy większa.
3. F: część energii uzyskuje również opadający ciężarek.`],
['3.2',R`Ciężarek opada o $h$, a walec przesuwa się o taką samą drogę. Oba ciała mają prędkość o wartości $v$.
Zasada zachowania energii:
$mgh=\frac12mv^2+\frac12mv^2+\frac12I\omega^2$.
Po podstawieniu $I=\frac12mR^2$ i $\omega=v/R$:
$mgh=\frac54mv^2$.
Z ruchu jednostajnie przyśpieszonego od spoczynku: $v^2=2ah$.
Stąd $gh=\frac52ah$, czyli $a=\frac25g$.`]
],R`3.1: P, P, F.
3.2: $a=\frac25g$.`,'Nie pomijaj energii kinetycznej opadającego ciężarka.');
set('2024-maj-zad-2','Praca przyłożonej siły zwiększa sumę energii ruchu postępowego i obrotowego walca.',R`$m=10\text{ kg}$, $F=30\text{ N}$, $I_0=\frac12mR^2$, $v=\omega R$.`,[
['2.1',R`$E_{kin\ calk}=\frac12mv^2+\frac12I_0\omega^2$.
Po podstawieniu momentu bezwładności i warunku toczenia:
$E_{kin\ calk}=\frac12mv^2+\frac14mv^2=\frac34mv^2$.
Zatem $\frac{E_{kin\ post}}{E_{kin\ calk}}=\frac{1/2}{3/4}=\frac23$.`],
['2.2',R`Tarcie statyczne przy toczeniu bez poślizgu po nieruchomym podłożu nie zmienia całkowitej energii kinetycznej. Ciężar i reakcja podłoża także nie wykonują pracy.
$Fs=\Delta E_{kin\ calk}=\frac34m(v^2-v_0^2)$.
Ponieważ $v^2-v_0^2=2as$, otrzymujemy $Fs=\frac32mas$.
Stąd $a=\frac{2F}{3m}$.
$a=\frac{2\cdot30}{3\cdot10}\text{ m/s}^2=2\text{ m/s}^2$.`]
],R`2.1: $\frac23$.
2.2: $a=2\text{ m/s}^2$.`,'Całkowita energia walca obejmuje również obrót.');
set('2024-maj-zad-3','Z wykresu odczytujemy okres i prędkość maksymalną. Bilans energii wyznacza amplitudę, a następnie maksymalną siłę sprężystości.',R`$m=0{,}1000\text{ kg}$, $g=9{,}81\text{ m/s}^2$.
Z wykresu: $T=0{,}4\text{ s}$, $v_{max}=0{,}6\text{ m/s}$.`,[
['3.1',R`1. F: w $t=0{,}2\text{ s}$ prędkość jest zerowa, ale nachylenie wykresu $v_y(t)$ jest niezerowe. Przyśpieszenie i siła wypadkowa nie są zerowe.
2. P: w $0{,}1\text{ s}$ i $0{,}3\text{ s}$ prędkości mają przeciwne zwroty, lecz jednakową wartość $0{,}6\text{ m/s}$. Energie $\frac12mv^2$ są równe.
3. P: w $0{,}4\text{ s}$ wartość przyśpieszenia jest maksymalna, a w $0{,}5\text{ s}$ wynosi zero.`],
['3.2',R`Punkt $P$ leży poniżej położenia równowagi. Przyśpieszenie jest skierowane w górę, zatem $F_s>F_g$. Obie siły zaczepiamy w $P$: dłuższy wektor siły sprężystości w górę, krótszy wektor ciężaru w dół.`+img('2024-maj-z3-sily-rozwiazanie','Wektory siły sprężystości i ciężaru według klucza CKE',400)],
['3.3',R`Niech $x_0$ oznacza wydłużenie sprężyny w równowadze. Wtedy $kx_0=mg$.
Porównujemy energię w równowadze (prędkość $v_{max}$) i w najniższym położeniu (prędkość zero). Poziom energii grawitacji przyjmujemy w równowadze:
$\frac12mv_{max}^2+\frac12kx_0^2$
$=\frac12k(x_0+A)^2-mgA$.
Po rozwinięciu kwadratu i użyciu $kx_0=mg$ pozostaje $mv_{max}^2=kA^2$.
Z okresu drgań: $k=m(2\pi/T)^2$. Stąd $A=v_{max}T/(2\pi)$.
W najniższym położeniu:
$F_{s\,max}=k(x_0+A)=mg+kA$.
$F_{s\,max}=mg+\frac{2\pi m v_{max}}T$.
$F_{s\,max}=0{,}981\text{ N}+0{,}9425\text{ N}$.
$F_{s\,max}\approx1{,}92\text{ N}$.`]
],R`3.1: F, P, P.
3.2: $F_s>F_g$; zwroty jak na rysunku.
3.3: $F_{s\,max}\approx1{,}92\text{ N}$.`,'W skrajnym położeniu prędkość jest zerowa, ale przyśpieszenie ma największą wartość.');
set('2025-maj-zad-2','Jednakowa początkowa energia potencjalna daje jednakową całkowitą energię kinetyczną, lecz inny podział na ruch postępowy i obrót.',R`$m_1=m_2=m$, $R_1=R_2=R$, $I_i=k_imR^2$, $v_i=\omega_iR$.`,[
['2.1',R`1. P: w walcu wydrążonym większa część masy leży dalej od osi, więc $k_2>k_1$.
2. P: z zachowania energii każdy walec u podnóża ma całkowitą energię kinetyczną $mgh$.
3. F: $mgh=\frac12m(1+k_i)v_i^2$, zatem $v_i^2=2gh/(1+k_i)$. Większe $k_2$ oznacza mniejsze $v_2$, czyli $v_1>v_2$.`],
['2.2',R`Po przebyciu drogi $s$ wzdłuż równi walec obniża się o $h=s\sin\beta$.
$mgs\sin\beta=\frac12mv^2+\frac12I_2\omega^2$.
Po podstawieniu $I_2=k_2mR^2$ i $\omega=v/R$:
$mgs\sin\beta=\frac12m(1+k_2)v^2$.
Ruch rozpoczyna się od spoczynku, więc $v^2=2as$.
$g\sin\beta=(1+k_2)a$.
Ostatecznie $a=\frac{g\sin\beta}{1+k_2}$.`]
],R`2.1: P, P, F.
2.2: $a=\frac{g\sin\beta}{1+k_2}$.`,'Równe całkowite energie kinetyczne nie oznaczają równych prędkości postępowych.');
set('2025-czerwiec-zad-3','Warunek toczenia wiąże obrót walca z przesunięciem jego środka. Energia całkowita zawiera dwa składniki.',R`Pół obrotu w $\Delta t=0{,}2\text{ s}$.
$I_0=\frac45mR^2$, $v=\omega R$.`,[
['3.1',R`Pół obrotu odpowiada kątowi $\pi$ rad. Zatem $\omega=\pi/(0{,}2\text{ s})=5\pi\text{ rad/s}$. Odpowiedź C.`],
['3.2',R`Środek walca przesunął się poziomo o $s=R\pi$. Punkt $A$ przeszedł z góry walca na dół, więc jego pionowe przemieszczenie ma wartość $2R$.
Z twierdzenia Pitagorasa:
$|A_0A_1|=\sqrt{(\pi R)^2+(2R)^2}$.
Stąd $\frac{|A_0A_1|}{R}=\sqrt{\pi^2+4}$.`],
['3.3',R`$E_{kin\ calk}=\frac12mv^2+\frac12I_0\omega^2$.
Po podstawieniu danych i $\omega=v/R$:
$E_{kin\ calk}=\frac12mv^2+\frac25mv^2=\frac9{10}mv^2$.
Porównanie ze wzorem w zadaniu daje $k=\frac9{10}=0{,}9$.`]
],R`3.1: C.
3.2: $\sqrt{\pi^2+4}$.
3.3: $k=\frac9{10}$.`,'Przemieszczenie punktu A jest odcinkiem łączącym położenie początkowe i końcowe; nie jest długością jego toru.');
set('2026-maj-zad-1','W wierzchołku toru prędkość jest zerowa. Czasy odczytane z wykresu pozwalają obliczyć prędkość początkową i wysokość.',R`$t_W=0{,}8\text{ s}$, $t_B=1{,}8\text{ s}$, $g=9{,}81\text{ m/s}^2$.`,[
['1.1',R`1. F: przyśpieszenie jest równe $g$ i nie zależy od masy ciała.
2. P: czas osiągnięcia podłoża jest dodatnim rozwiązaniem $0=h_0+v_0t-\frac12gt^2$, więc zależy od $v_0$.`],
['1.2',R`W najwyższym punkcie $v_y=0$. Zatem $0=v_0-gt_W$.
$v_0=gt_W=9{,}81\cdot0{,}8\text{ m/s}$.
$v_0=7{,}848\text{ m/s}\approx7{,}85\text{ m/s}$.`],
['1.3',R`Spadanie od wierzchołka do podłoża trwa $t_B-t_W=1{,}0\text{ s}$, więc:
$h_{max}=\frac12g(t_B-t_W)^2=4{,}905\text{ m}$.
Zachowanie energii między chwilą wyrzutu a wierzchołkiem:
$mgh_0+\frac12mv_0^2=mgh_{max}$.
$h_0=h_{max}-\frac{v_0^2}{2g}$.
$h_0=4{,}905\text{ m}-3{,}1392\text{ m}$.
$h_0=1{,}7658\text{ m}\approx1{,}77\text{ m}$.`]
],R`1.1: F, P.
1.2: $v_0\approx7{,}85\text{ m/s}$.
1.3: $h_0\approx1{,}77\text{ m}$.`,'Czas spadania od najwyższego punktu wynosi 1,0 s; 1,8 s to czas całego ruchu.');
set('2026-maj-zad-3','Siła F wykonuje ujemną pracę, gdy ciężarek opada. Energia pozostała po tej pracy zwiększa ruch ciężarka i obrót bloczka.',R`$I_0=\frac12m_wR^2$, $a=\frac12g$, $v=\omega R$.`,[
['3.1',R`Ciężarek spoczywa, więc napięcie liny po jego stronie jest równe $m_cg$. Bloczek pozostaje w równowadze obrotowej: momenty obu napięć względem osi są równe. Ramiona obu sił są równe $R$, zatem $F=m_cg$. Odpowiedź A.`],
['3.2',R`Dla opadnięcia ciężarka o $h$ koniec liny przesuwa się o tę samą drogę przeciwnie do siły $\vec F$, więc $W_F=-Fh$.
Twierdzenie o zmianie energii mechanicznej:
$-m_cgh+\frac12m_c\Delta(v^2)+\frac12I_0\Delta(\omega^2)=-Fh$.
Z $\omega=v/R$ i $I_0=\frac12m_wR^2$:
$-m_cgh+(\frac12m_c+\frac14m_w)\Delta(v^2)=-Fh$.
Ruch ma stałe przyśpieszenie: $\Delta(v^2)=2ah$.
Po podzieleniu przez $h$:
$F=m_cg-(m_c+\frac12m_w)a$.
Dla $a=g/2$ otrzymujemy:
$F=\frac12g(m_c-\frac12m_w)$.`]
],R`3.1: A.
3.2: $F=\frac12g(m_c-\frac12m_w)$.`,'Siła działa wzdłuż liny. W jej momencie względem osi bloczka ramieniem jest R, bez dodatkowego sinusa lub cosinusa kąta α.');
set('2026-czerwiec-zad-4','Przy toczeniu bez poślizgu cała początkowa energia kinetyczna bryły zamienia się w energię potencjalną jej środka masy.',R`Masa całej bryły: $m_{\mathcal B}=2M$.
$I_{0\mathcal B}=\frac43MR^2$, $v_{\mathcal B}=1{,}4\text{ m/s}$, $g=9{,}8\text{ m/s}^2$.`,[
['4.1',R`Na poziomym odcinku ruch postępowy i obrotowy jest jednostajny. Brak przyśpieszenia poziomego wymaga zerowej siły tarcia. Odpowiedź A.`],
['4.2',R`Podczas wtaczania bryła zwalnia również w ruchu obrotowym. Tarcie musi dawać moment przeciwny do kierunku obrotu, czyli jest skierowane w górę równi, w prawo. Odpowiedź D.`],
['4.3',R`1. F: linia działania ciężaru nie przechodzi przez punkt $P_2$, więc jego moment względem $P_2$ jest niezerowy.
2. F: tarcie ma niezerowy moment względem środka masy; prędkość kątowa maleje, a wraz z nią moment pędu $I_{0\mathcal B}\omega$.`],
['4.4',R`Momenty bezwładności części względem wspólnej osi dodają się.
Każdy pręt ma moment $I_{pręt}=\frac1{12}\frac M2(2R)^2=\frac16MR^2$.
Obręcz ma moment $I_{obręcz}=MR^2$.
$I_{0\mathcal B}=MR^2+2\cdot\frac16MR^2$.
$I_{0\mathcal B}=\frac43MR^2$.`],
['4.5',R`W najwyższym położeniu $v=0$ i, dzięki toczeniu bez poślizgu, $\omega=0$.
Z zasady zachowania energii:
$\frac12(2M)v_{\mathcal B}^2+\frac12I_{0\mathcal B}\omega^2=2Mg\Delta h_{max}$.
Po podstawieniu $\omega=v_{\mathcal B}/R$:
$Mv_{\mathcal B}^2+\frac23Mv_{\mathcal B}^2=2Mg\Delta h_{max}$.
$\Delta h_{max}=\frac{5v_{\mathcal B}^2}{6g}$.
$\Delta h_{max}=\frac{5\cdot1{,}4^2}{6\cdot9{,}8}\text{ m}\approx0{,}167\text{ m}$.`]
],R`4.1: A. 4.2: D. 4.3: F, F.
4.4: $I_{0\mathcal B}=\frac43MR^2$.
4.5: $\Delta h_{max}\approx0{,}17\text{ m}$.`,'M oznacza masę samej obręczy. Masa całej bryły wynosi 2M.');
set('2026-styczen-zad-2','W zderzeniu sprężystym zachowane są pęd i energia kinetyczna układu. Siły wzajemnego oddziaływania spełniają III zasadę dynamiki.',R`Przed zderzeniem K1 ma prędkość $v_1$, a K2 spoczywa. Po zderzeniu prędkości mają wartości $v_2$ i przeciwne zwroty.`,[
['2.1',R`Siłę działającą na K1 rysujemy w lewo, a siłę działającą na K2 w prawo. Wektory zaczepiamy w środkach kul, na prostej łączącej te środki. Długości wektorów są jednakowe.`+img('2026-styczen-z2-sily-rozwiazanie','Siły oddziaływania kul według klucza CKE',280)],
['2.2',R`Przyjmujemy zwrot dodatni w prawo. Zachowanie pędu:
$m_1v_1=-m_1v_2+m_2v_2$.
Zachowanie energii kinetycznej:
$m_1v_1^2=(m_1+m_2)v_2^2$.
Oznaczamy $r=m_2/m_1$. Z pierwszego równania $v_1=(r-1)v_2$, a z drugiego $v_1^2=(1+r)v_2^2$.
Po podstawieniu: $(r-1)^2=1+r$.
$r^2-3r=0$, więc $r(r-3)=0$.
Masy są dodatnie, zatem $r=3$, czyli $m_2/m_1=3$.`]
],R`2.1: równe i przeciwne siły, jak na rysunku.
2.2: $m_2/m_1=3$.`,'Prędkość kuli K1 po zderzeniu ma ujemną współrzędną.');
set('2023-czerwiec-zad-2','Dwie jednakowe masy w sprężystym zderzeniu centralnym wymieniają się prędkościami. Po trwałym połączeniu zachowany jest pęd, ale maleje energia kinetyczna.',R`$m_1=m_2=m$, $v_1=2v_2$; przed zderzeniem kule poruszają się w przeciwnych kierunkach.`,[
['2.1',R`K1 przejmuje prędkość K2 (w lewo, wartość $v_2$), a K2 przejmuje prędkość K1 (w prawo, wartość $2v_2$). Odpowiedź B.`],
['2.2',R`Oś kierujemy w prawo. Pęd początkowy to $m(2v_2)-mv_2=mv_2$.
Po trwałym połączeniu kul: $2mu=mv_2$, więc $u=v_2/2$.
Energia przed zderzeniem:
$E_p=\frac12m(2v_2)^2+\frac12mv_2^2=\frac52mv_2^2$.
Energia po zderzeniu:
$E_k=\frac12(2m)(v_2/2)^2=\frac14mv_2^2$.
Pozostała część energii: $E_k/E_p=1/10$.
Utracona część: $(E_p-E_k)/E_p=9/10=90\%$.`]
],R`2.1: B.
2.2: utracone $9/10$ energii, czyli $90\%$.`,'W bilansie pędu uwzględniamy zwroty; w energii występują kwadraty wartości prędkości.');
set('2023-maj-zad-2','Siły zderzenia gładkich krążków działają wzdłuż linii ich środków. Składowa prędkości prostopadła do tej linii nie zmienia się.',R`Masy są równe. K2 początkowo spoczywa. Zderzenie jest doskonale sprężyste.`,[
['2.1',R`Na K1 działa siła w lewo, a na K2 w prawo. Obie są poziome, mają jednakową wartość i są przyłożone odpowiednio w środkach masy krążków.`+img('2023-maj-z2-sily-rozwiazanie','Siły działające podczas zderzenia krążków według klucza CKE',340)],
['2.2',R`Siły nie mają składowych w kierunku $y$, dlatego $v_{1y}=v_y$, a $v_{2y}=0$.
W kierunku $x$ jednakowe masy w sprężystym zderzeniu wymieniają się składowymi prędkości: $v_{1x}=0$, $v_{2x}=v_x$.
Po zderzeniu $\vec v_1=\vec v_y$ i $\vec v_2=\vec v_x$. Odpowiedź C.`]
],R`2.1: równe, przeciwne siły wzdłuż osi x.
2.2: C.`,'Prędkość jest wektorem. W tym zderzeniu wymieniają się tylko jej składowe wzdłuż osi x.');
set('2024-czerwiec-zad-1','Po wypadnięciu monet praca tarcia odbiera ich energię kinetyczną. Prędkości początkowe zależą od odległości od osi obrotu.',R`$r_1:r_2:r_3=1:2:3$. Masy są równe, a współczynnik tarcia jest taki sam.`,[
['1.1',R`1. P: przyśpieszenie w ruchu jednostajnym po okręgu jest skierowane do środka $O$.
2. P: $F_w=m\omega^2r$, więc dla $r_3=3r_1$ siła wypadkowa jest trzy razy większa.
3. F: $v=\omega r$, zatem wartości prędkości monet są różne.`],
['1.2',R`Dla każdej monety siła tarcia wynosi $T=\mu mg$. Z twierdzenia o pracy i energii kinetycznej:
$-\mu mg s=0-\frac12mv^2$.
Stąd $s=\frac{v^2}{2\mu g}$.
Prędkość początkowa monety to $v=\omega r$, zatem $s=\frac{\omega^2r^2}{2\mu g}$.
Wspólne czynniki skracają się w ilorazach:
$s_1:s_2:s_3=r_1^2:r_2^2:r_3^2=1:4:9$.`]
],R`1.1: P, P, F.
1.2: $s_1:s_2:s_3=1:4:9$.`,'Droga hamowania zależy od kwadratu prędkości początkowej.');
for(const y of [2023,2025]){
set(`informator-${y}-zad-2`,'Przed uderzeniem zachowana jest energia mechaniczna kulki. Przy odbiciu prędkość zmienia zwrot, a energia maleje o 25%.',R`$m=0{,}250\text{ kg}$, $h=1{,}80\text{ m}$, $v_0=3{,}20\text{ m/s}$.
$\Delta t=0{,}005\text{ s}$, $g=9{,}81\text{ m/s}^2$.`,[
['2.1',R`Dla osi skierowanej w dół: $h=v_0t+\frac12gt^2$.
Dodatni pierwiastek tego równania:
$t=\frac{-v_0+\sqrt{v_0^2+2gh}}g$.
Po podstawieniu danych: $t\approx0{,}362\text{ s}$.`],
['2.2',R`Przyjmujemy zerową energię potencjalną na podłożu:
$\frac12mv_1^2=\frac12mv_0^2+mgh$.
$v_1=\sqrt{v_0^2+2gh}$.
$v_1=\sqrt{3{,}20^2+2\cdot9{,}81\cdot1{,}80}\text{ m/s}$.
$v_1\approx6{,}75\text{ m/s}$.`],
['2.3',R`Energia po odbiciu stanowi $75\%$ energii tuż przed uderzeniem: $v_2^2=0{,}75v_1^2$.
$v_2=\sqrt{0{,}75}\,v_1\approx5{,}85\text{ m/s}$.
Oś kierujemy w górę. Zmiana pędu to $\Delta p=mv_2-(-mv_1)$.
Impuls siły wypadkowej: $(F_R-mg)\Delta t=m(v_2+v_1)$.
$F_R=mg+\frac{m(v_1+v_2)}{\Delta t}$.
Po podstawieniu danych: $F_R\approx632\text{ N}$.`]
],R`2.1: $t\approx0{,}36\text{ s}$.
2.2: $v_1\approx6{,}75\text{ m/s}$.
2.3: $F_R\approx632\text{ N}$.`,'Siła reakcji podłoża jest większa od siły wypadkowej o ciężar kulki.');
set(`informator-${y}-zad-3`,'Sprawdzamy zachowanie pędu w dwóch kierunkach, a sprężystość oceniamy przez porównanie energii kinetycznych.',R`$m_A=0{,}20\text{ kg}$. Jednostką prędkości jest bok najmniejszej kratki podzielony przez odstęp czasu między zdjęciami.`,[
['3.1',R`Z diagramu odczytujemy składowe prędkości w jednostkach umownych:
przed zderzeniem: $\vec v_A=[18{,}5;0]$, $\vec v_B=[0;0]$;
po zderzeniu: $\vec u_A=[8{,}5;-7{,}5]$, $\vec u_B=[8;6]$.
Zachowanie pędu w kierunku $y$:
$0=-7{,}5m_A+6m_B$.
$m_B=\frac{7{,}5}{6}\cdot200\text{ g}=250\text{ g}$.
Sprawdzenie w kierunku $x$:
$0{,}20\cdot18{,}5=0{,}20\cdot8{,}5+0{,}25\cdot8$.`],
['3.2',R`W zderzeniu doskonale sprężystym suma energii kinetycznych przed zderzeniem i po nim musi być taka sama.
Przed zderzeniem, w tych samych jednostkach umownych energii:
$E_p=\frac12\cdot0{,}20\cdot18{,}5^2=34{,}225$.
Kwadraty prędkości po zderzeniu:
$u_A^2=8{,}5^2+7{,}5^2=128{,}5$,
$u_B^2=8^2+6^2=100$.
$E_k=\frac12\cdot0{,}20\cdot128{,}5+\frac12\cdot0{,}25\cdot100$.
$E_k=25{,}35$.
Iloraz jest niezależny od wyboru jednostek:
$E_k/E_p=25{,}35/34{,}225\approx0{,}74$.
Ubyło około $26\%$ energii kinetycznej. Zderzenie nie było doskonale sprężyste.`]
],R`3.1: $m_B=250\text{ g}$.
3.2: zderzenie niesprężyste; $E_k/E_p\approx0{,}74$.`,'Kwadrat wartości prędkości jest sumą kwadratów jej prostopadłych składowych.');
}
module.exports=solutions;
