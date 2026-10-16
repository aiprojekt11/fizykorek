# Lokalna konfiguracja logowania i bazy

Ta konfiguracja niczego nie publikuje. Frontend nadal uruchamiasz lokalnie przez
`npm start`, a Supabase zapewnia Auth i bazę PostgreSQL.

## 1. Utwórz projekt Supabase

W panelu Supabase utwórz pusty projekt. Następnie w **Authentication → URL
Configuration** ustaw:

- Site URL: `http://localhost:3000`
- Redirect URL: `http://localhost:3000/**`

W **Authentication → Providers → Email** pozostaw logowanie e-mail/hasło, ale
wyłącz publiczne tworzenie kont (**Allow new users to sign up**). Konta uczniów
mają powstawać wyłącznie przez serwerowe zaproszenie.

## 2. Utwórz schemat

Otwórz **SQL Editor**, wklej cały plik `supabase/schema.sql` i uruchom go. Plik
jest idempotentny, więc można go uruchomić ponownie po nieudanej konfiguracji.

Schemat tworzy:

- profile i role `owner`, `teacher`, `student`;
- relacje nauczyciel–uczeń i przypisania kursów;
- odblokowanie działów oraz postęp zadań;
- dzienny licznik AI i dziennik audytowy;
- RLS ograniczający ucznia do własnych danych i aktywnie przypisanych kursów;
- trigger zmieniający profil `invited` na `active` po potwierdzeniu zaproszenia.

Rola z metadanych Auth jest celowo ignorowana. Nowe konto zawsze zaczyna jako
`student`; role administracyjne ustawia wyłącznie kod serwerowy korzystający z
`service_role`.

## 3. Dodaj lokalne zmienne środowiskowe

Utwórz lokalny plik `.env` (jest ignorowany przez Git i automatycznie czytany
przez `local-server.js`):

```dotenv
SUPABASE_URL=https://TWOJ-PROJEKT.supabase.co
SUPABASE_ANON_KEY=publiczny_klucz_anon
SUPABASE_SERVICE_ROLE_KEY=sekretny_klucz_service_role
AUTH_REDIRECT_URL=http://localhost:3000/
```

`SUPABASE_ANON_KEY` może trafić do kodu przeglądarki. Klucza
`SUPABASE_SERVICE_ROLE_KEY` nigdy nie umieszczaj w HTML/JS frontendu, commicie,
logach ani zrzucie ekranu. Jest przeznaczony wyłącznie dla endpointów `api/` i
lokalnych skryptów administracyjnych.

## 4. Zaimportuj kursy

Najpierw wykonaj kontrolę bez zapisu:

```powershell
node scripts/import-courses.mjs --dry-run
```

Następnie załaduj zmienne i wykonaj właściwy import (Node 20.6+):

```powershell
node --env-file=.env scripts/import-courses.mjs
```

Importer czyta `js/data-courses.js` w izolowanym kontekście `vm` i robi upsert
po `courses.id`. Ponowne uruchomienie aktualizuje treść zamiast tworzyć duplikat.
Opcja `--inactive` importuje kursy jako niewidoczne dla uczniów.

## 5. Zaproś pierwszego właściciela

```powershell
node --env-file=.env scripts/bootstrap-owner.mjs twoj-email@example.com --dry-run
node --env-file=.env scripts/bootstrap-owner.mjs twoj-email@example.com
```

Skrypt:

1. sprawdza, czy inny owner już istnieje;
2. zaprasza wskazany adres, jeśli konto nie istnieje;
3. ustawia rolę `owner` wyłącznie przez `service_role`;
4. nie tworzy ani nie wypisuje hasła.

Otwórz wiadomość z zaproszeniem i ustaw hasło. Po potwierdzeniu e-maila trigger
automatycznie zmieni status `invited` na `active`. Jeśli pierwsze zaproszenie nie
dotrze, ponów je z panelu Supabase; skrypt nie wysyła automatycznie kolejnych
wiadomości do istniejącego konta.

Domyślna wysyłka poczty Supabase wystarcza do testów, ale przed udostępnieniem
uczniom skonfiguruj własny SMTP.

## 6. Uruchom aplikację lokalnie

Serwer wczyta utworzony wyżej plik `.env`:

```powershell
npm start
```

Otwórz `http://localhost:3000` i zaloguj się adresem właściciela.

## Zasady dostępu zapisane w bazie

- Uczeń widzi swój profil, aktywne przypisania, przypisane aktywne kursy, swoje
  odblokowane działy i własny postęp.
- Uczeń może zmieniać tylko własny postęp, i tylko dla zadania należącego do
  odblokowanego działu aktywnie przypisanego kursu.
- Nauczyciel widzi wyłącznie przypisanych mu uczniów i ich dane kursowe.
- Owner widzi wszystkie dane.
- Zaproszenia, role, blokady, przypisania kursów, dostęp do działów, limity AI i
  usuwanie wykonują endpointy serwerowe kluczem `service_role`.
- Rozmowy z AI nie są przechowywane w tych tabelach; nauczyciel nie ma do nich
  dostępu. `ai_usage_daily` zapisuje tylko licznik użycia.

Odebranie kursu powinno ustawić `enrollments.status = 'revoked'`. Zawieszenie
konta powinno ustawić `profiles.status = 'suspended'`. Takie operacje zachowują
historię postępu. Trwałe usunięcie użytkownika z Supabase Auth kaskadowo usuwa
jego profil, przypisania i postęp, dlatego powinno wymagać osobnego potwierdzenia
w panelu administratora.

## Szybka kontrola po konfiguracji

W SQL Editor uruchom:

```sql
select id, email, role, status, ai_daily_limit from public.profiles;
select id, title, is_active from public.courses;
select * from public.enrollments;
```

Nie testuj RLS w SQL Editorze jako administrator bazy, bo ta rola omija RLS.
Test wykonaj po zalogowaniu przez aplikację kluczem `anon` i tokenem użytkownika.

## Ważne przed późniejszą publikacją

`js/data-courses.js` jest źródłem dla importera, ale znajduje się obecnie w
publicznym katalogu statycznym. Samo usunięcie znacznika `<script>` nie chroni
tego pliku: po wdrożeniu dałoby się pobrać go bez logowania bezpośrednim URL-em,
a publiczne repozytorium GitHub ujawniłoby również jego treść i historię.

Przed publikacją przenieś źródło kursów poza katalog serwowany przez WWW (albo
usuń je z artefaktu wdrożeniowego po imporcie) i sprawdź, że treści kursów są
zwracane wyłącznie przez uwierzytelniony endpoint `api/courses`.
