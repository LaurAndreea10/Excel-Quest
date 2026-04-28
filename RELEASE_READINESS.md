# Excel Quest – Release Readiness

Acest document este checklist-ul de calitate pentru transformarea Excel Quest dintr-un proiect educațional în dezvoltare într-un produs educațional pregătit pentru testare publică.

## 1. Conținut verificat bine

### Lecții

Fiecare lecție trebuie verificată pentru:

- acuratețea formulelor;
- exemple clare și realiste;
- explicații în română corectă;
- termeni Excel consecvenți;
- dificultate potrivită nivelului;
- legătură clară între teorie și exercițiu;
- absența datelor personale reale.

### Formule și funcții

Pentru fiecare formulă din aplicație verifică:

- sintaxa este corectă;
- separatorii sunt explicați, acolo unde e cazul;
- intervalele sunt logice;
- exemplele pot fi reproduse;
- erorile comune sunt explicate;
- formula are cel puțin un caz real de utilizare.

### Proiecte

Fiecare proiect trebuie să aibă:

- obiectiv clar;
- date inițiale;
- task-uri concrete;
- criterii de evaluare;
- XP sau badge asociat;
- skill-uri folosite;
- rezultat final vizibil sau salvat în portofoliu.

## 2. Design mobil foarte curat

Testare obligatorie pe lățimi:

- 320px;
- 360px;
- 390px;
- 414px;
- 768px;
- desktop.

Checklist mobil:

- nu există scroll orizontal accidental;
- cardurile se așază pe o singură coloană;
- butoanele au spațiu suficient pentru atingere;
- formularul de început încape pe ecran;
- selectorul RO / EN nu acoperă butoane importante;
- quiz-urile sunt ușor de apăsat;
- tabelele au overflow controlat;
- textele nu ies din carduri;
- contrastul este suficient;
- footer-ul și linkurile legale sunt vizibile.

## 3. Onboarding simplu

Formularul de început trebuie să fie scurt și clar.

Câmpuri recomandate:

1. Limbă: Română / English;
2. Nume sau alias;
3. Motivul pentru care înveți Excel;
4. Nivel: Începător / Intermediar / Avansat;
5. Rol sau traseu: Student, HR, Sales, Data Analyst etc.

Reguli:

- nu cere email la început;
- nu cere date personale sensibile;
- permite continuarea ca invitat;
- explică faptul că progresul este salvat local;
- oferă buton clar: „Începe experiența”.

## 4. Politica de confidențialitate clară

Trebuie să fie ușor de găsit:

- link în footer;
- link în README;
- link în pagina legală.

Politica trebuie să explice:

- aplicația este front-end;
- progresul este salvat în `localStorage`;
- nu există autentificare în versiunea curentă;
- nu se colectează email/parolă/date sensibile;
- utilizatorul nu trebuie să introducă date reale;
- dacă se adaugă backend ulterior, politica trebuie actualizată.

Document existent:

- `PRIVACY.md`
- `legal.html`

## 5. Disclaimer clar

Aplicația trebuie să afișeze clar că:

- Excel Quest este educațional;
- nu este aplicație oficială Microsoft;
- nu oferă certificare Microsoft;
- datele sunt demo/simulate;
- scorurile și certificatele preview sunt orientative;
- Excel este marcă Microsoft.

Document existent:

- `DISCLAIMER.md`
- `legal.html`

## 6. Fără buguri în simulări / quiz

Pentru fiecare simulare sau quiz verifică:

- răspunsul corect este recunoscut;
- răspunsul greșit primește feedback util;
- hint-ul apare corect;
- XP-ul nu se adaugă infinit pentru același task;
- butoanele nu se blochează;
- resetarea funcționează;
- datele salvate în `localStorage` nu corup aplicația;
- formulele acceptate sunt documentate;
- validarea nu este prea strictă unde utilizatorul poate scrie formula corectă în alt format.

### Teste manuale prioritare

- onboarding nou;
- comutare RO / EN;
- streak days;
- primul quiz;
- Grid Simulator;
- Formula Builder;
- Explain My Formula;
- Translation Mode;
- Error Clinic;
- Build-a-Dashboard;
- Cheat Sheet Builder;
- Certification Preview;
- Portfolio Page.

## 7. Feedback de la elevi/profesori

Înainte de lansare finală, colectează feedback de la minimum:

- 3 elevi începători;
- 2 elevi care știu deja formule de bază;
- 1 profesor sau trainer;
- 1 persoană care folosește Excel la job.

Întrebări-cheie:

- Ai înțeles ce face aplicația în primele 10 secunde?
- Formularul de început este clar?
- Limbajul este potrivit?
- Lecțiile sunt suficient de concrete?
- Exercițiile sunt prea ușoare, prea grele sau potrivite?
- Feedbackul după quiz te ajută?
- Ai găsit ușor Politica de confidențialitate și Mențiunea?
- Ai folosi aplicația din nou?
- Ce ai elimina?
- Ce ai adăuga?

Folosește `FEEDBACK_FOR_ELEVI_PROFESORI.md` pentru colectare.

## 8. Niveluri Beginner → Intermediate → Advanced

### Beginner

Obiectiv: înțelegerea bazei.

Include:

- celule, rânduri, coloane;
- formatare simplă;
- SUM, AVERAGE, MIN, MAX;
- IF simplu;
- filtre;
- primul proiect: buget sau catalog note.

### Intermediate

Obiectiv: lucru practic cu date reale.

Include:

- COUNTIF, SUMIF;
- XLOOKUP/VLOOKUP;
- data cleaning;
- tabele;
- grafice;
- audit simplu;
- proiect: sales report sau HR tracker.

### Advanced

Obiectiv: analiză și prezentare.

Include:

- pivot tables;
- dashboard;
- storytelling;
- design score;
- boss battle;
- proiect final;
- mini certification exam.

## 9. Certificate / badges

Certificatele preview trebuie să aibă criterii clare:

- minim 80% lecții completate;
- minim 70% quiz-uri completate;
- minimum 3 proiecte;
- scor minim la examen;
- mențiune că este certificat educațional, nu oficial Microsoft.

Badge-uri recomandate:

- Formula Starter;
- Data Cleaner;
- Pivot Rookie;
- Dashboard Builder;
- Shortcut Ninja;
- Error Fixer;
- Portfolio Ready.

## 10. Gate final înainte de publicare

Nu publica drept `index.html` final până când:

- [ ] conținutul a fost verificat integral;
- [ ] mobile layout a fost testat;
- [ ] onboarding este simplu și în română;
- [ ] selectorul RO / EN funcționează;
- [ ] privacy policy este vizibilă;
- [ ] disclaimer-ul este vizibil;
- [ ] simulările principale nu au buguri cunoscute;
- [ ] feedbackul de la elevi/profesori a fost analizat;
- [ ] certificatul preview are disclaimer;
- [ ] README-ul indică preview-ul final ales.
