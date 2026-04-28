# QA simulări și quiz – Excel Quest

Acest checklist ajută la verificarea simulărilor, quiz-urilor și exercițiilor practice înainte de publicarea finală.

## Reguli generale

Pentru fiecare modul verifică:

- răspunsul corect este acceptat;
- răspunsul greșit primește explicație clară;
- există hint util;
- XP-ul nu poate fi abuzat prin apăsări repetate;
- resetarea funcționează;
- feedbackul este vizibil pe mobil;
- starea salvată în `localStorage` nu produce erori;
- textul este în română sau respectă limba aleasă;
- nu există date reale sau sensibile;
- feedbackul poate fi înțeles fără culoare;
- toate input-urile importante au etichete clare sau `aria-label`;
- simularea poate fi parcursă cu tastatura.

## Onboarding

- [ ] selectorul RO / EN apare;
- [ ] câmpurile sunt traduse;
- [ ] butonul principal este clar;
- [ ] se poate continua ca invitat;
- [ ] progresul local este explicat;
- [ ] formularul este utilizabil pe mobil;
- [ ] formularul poate fi parcurs cu tastatura;
- [ ] fiecare câmp are etichetă clară;
- [ ] textul nu cere date personale reale.

## Grid Simulator

- [ ] `=SUM(B2:B5)` produce rezultatul așteptat;
- [ ] `=AVERAGE(...)` produce media corectă;
- [ ] `=MIN(...)` produce minimul corect;
- [ ] `=MAX(...)` produce maximul corect;
- [ ] formulele nesuportate primesc mesaj clar;
- [ ] exportul CSV funcționează;
- [ ] valorile editate sunt folosite în calcul;
- [ ] celulele editabile au etichete sau context clar pentru screen reader;
- [ ] tabelul are antete clare;
- [ ] instrucțiunile nu spun doar „apasă celula verde”.

## Formula Builder

- [ ] piesele se adaugă în ordinea apăsării;
- [ ] formula completă este afișată;
- [ ] formula corectă este validată;
- [ ] resetarea golește formula;
- [ ] feedbackul este clar pentru începători;
- [ ] fiecare piesă de formulă are text accesibil;
- [ ] rezultatul este anunțat textual, nu doar vizual.

## Explain My Formula

- [ ] explică `=IF(B2>=5,"Admis","Respins")` corect;
- [ ] gestionează formule simple necunoscute fără eroare;
- [ ] explicația este în limba aleasă;
- [ ] textul este ușor de citit pe mobil;
- [ ] explicația este în pași scurți;
- [ ] termenii tehnici sunt explicați simplu.

## Translation Mode

- [ ] „Vreau să număr comenzile peste 100 lei” recomandă COUNTIF;
- [ ] „Vreau să adun vânzările peste 1000 lei” recomandă SUMIF;
- [ ] „Vreau să caut prețul după cod produs” recomandă XLOOKUP;
- [ ] răspunsurile neclare cer clarificare;
- [ ] recomandarea include un exemplu de formulă;
- [ ] mesajul este clar pentru un utilizator începător.

## Error Clinic

- [ ] #VALUE! are explicație;
- [ ] #N/A are explicație;
- [ ] #DIV/0! are explicație;
- [ ] #REF! are explicație;
- [ ] parantezele lipsă sunt explicate;
- [ ] formula fără `=` este explicată;
- [ ] intervalul greșit este explicat;
- [ ] fiecare eroare are un pas de reparare;
- [ ] nu se folosește doar culoarea roșie pentru eroare.

## Quiz-uri

- [ ] răspunsurile corecte cresc progresul o singură dată;
- [ ] răspunsurile greșite nu cresc progresul;
- [ ] există explicație după fiecare răspuns;
- [ ] butoanele nu se suprapun pe mobil;
- [ ] întrebările sunt clare;
- [ ] întrebările pot fi citite de screen reader;
- [ ] opțiunile au text complet, nu doar A/B/C;
- [ ] feedbackul are `aria-live="polite"` în implementarea finală.

## Proiecte

- [ ] fiecare proiect are obiectiv;
- [ ] fiecare proiect are task-uri;
- [ ] fiecare proiect are criterii de evaluare;
- [ ] finalizarea proiectului actualizează portofoliul;
- [ ] scorul proiectului este explicat;
- [ ] criteriile sunt scrise simplu;
- [ ] scorul nu depinde doar de culoare;
- [ ] proiectul explică ce date sunt demo/simulate.

## Certificate / badges

- [ ] criteriile sunt vizibile;
- [ ] certificatul are mențiune educațională;
- [ ] badge-urile au nume clare;
- [ ] progresul către certificat este ușor de înțeles;
- [ ] badge-ul explică de ce a fost deblocat;
- [ ] certificatul nu poate fi confundat cu certificare oficială Microsoft.

## Accesibilitate text

- [ ] propozițiile sunt scurte;
- [ ] instrucțiunile sunt în pași;
- [ ] nu există jargon neexplicat;
- [ ] butoanele au nume clare;
- [ ] graficele au descriere text;
- [ ] mesajele de eroare includ următorul pas;
- [ ] toate formulele sunt afișate lizibil în `monospace` sau cod;
- [ ] interfața poate fi folosită fără mouse;
- [ ] contrastul textului este suficient.

## Legal

- [ ] link către `legal.html` este vizibil în varianta finală;
- [ ] link către `PRIVACY.md` există în README;
- [ ] link către `DISCLAIMER.md` există în README;
- [ ] certificatul preview nu pare certificare oficială Microsoft.
