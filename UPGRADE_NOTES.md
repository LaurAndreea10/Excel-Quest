# Excel Quest upgrade notes

Acest branch adaugă versiuni preview pentru Excel Quest, aliniate ca experiență publică la BACapp.

## Preview-uri disponibile

1. `index-content-rich-preview.html` — preview recomandat pentru conținut bogat: lecții, proiecte, Formula Vault, Daily Quest și command palette.
2. `index-advanced-experience-preview.html` — preview advanced cu cele 10 idei de experiență aplicativă.
3. `index-quest-map-preview.html` — preview gamification/job simulation cu hartă, inbox, audit și colecții.
4. `index-game-modes-preview.html` — preview cu game modes: Escape Room, Dashboard Builder, Sandbox, Bingo, Interview și Time Machine.
5. `index-upgrade-preview.html` — variantă mai simplă, bilingvă.

## Ce include preview-ul Game Modes

- Excel Escape Room: puzzle-uri cu cod ascuns, COUNTIF, filtre și formule reparate;
- Build-a-Dashboard: curățare date, KPI-uri, grafice, layout și scor de claritate;
- Excel Roast: comentarii amuzante pentru tabele greșite;
- Guess the Formula: utilizatorul vede rezultatul și ghicește formula;
- Excel Sandbox: spațiu liber pentru date, formule, explicații și reset;
- Personal Goal Tracker: obiective precum școală, buget, joburi sau rapoarte;
- Formula Flashcards: carduri pentru formule, shortcut-uri, erori și funcții logice;
- Excel Bingo: tablă 5x5 cu mini-task-uri și XP la completarea unei linii;
- Scenario Generator: provocări generate pentru magazine online, studenți, bugete și HR;
- Peer Review Mode: utilizatorul evaluează o soluție și propune o metodă mai eficientă;
- Excel Time Machine: același task arătat ca metodă manuală, beginner și professional;
- Job Interview Mode: întrebări și task-uri de interviu cu scor și recomandări.

## Ce include preview-ul Quest Map

- Excel Quest Map: Formula Forest, Pivot City, Chart Mountains, Data Cleaning Lab, Dashboard Castle, Shortcut Arena;
- Client Requests: cereri tip job real, rezolvate prin formule/metode în grid;
- Bad Spreadsheet Museum: galerie de tabele greșite și reparații propuse;
- Formula Duels: alegerea formulei mai bune, cu explicație;
- What Would Excel Do?: întrebări rapide despre comportamentul Excel;
- Mini Case Studies: alegerea metodei potrivite — formulă, pivot sau filtru;
- Excel Personality: onboarding cu rezultate precum Formula Wizard, Dashboard Designer, Data Cleaner, Shortcut Ninja, Pivot Strategist;
- Streak Freeze: recompensă câștigată și folosită local;
- Excel Inbox: emailuri/misiuni de la manager, client, HR și finance;
- Audit Mode: checklist pentru formule consistente, duplicate, valori lipsă, totaluri și date suspecte;
- Explain the Chart: interpretare de grafic;
- Achievement Collections: Formula Starter Pack, Data Analyst Pack, Cleaning Pack.

## Ce include preview-ul advanced

- Excel Detective: utilizatorul investighează scăderi de profit, formule greșite, duplicate, valori anormale și categorii lipsă;
- Choose Your Role: Student, Contabil, HR, Marketing, Antreprenor, Data Analyst;
- Explain My Formula: explică formule simple precum `=IF(B2>=5,"Admis","Respins")`;
- Formula Builder: construiește formula din piese pentru începători;
- Data Cleaning Lab: elimină spații extra, standardizează categorii, curăță duplicate și convertește numere;
- Real File Simulator: simulează un fișier client haotic `Raport_Vanzari_FINAL_v3_corectat.xlsx`;
- Confidence Meter: dacă utilizatorul alege „Nu încă”, lecția intră în Review Queue;
- Excel Myths: carduri scurte care demontează mituri despre Excel;
- Keyboard-Only Challenge: provocări bazate pe shortcut-uri;
- Portfolio Page: salvează proiectele realizate într-o pagină de portofoliu.

## Ce include preview-ul content-rich

- interfață coerentă în română, cu comutator Română / English și limba salvată în `localStorage`;
- 8 lecții concrete: Excel Basics, formule de bază, funcții logice, lookup, tabele și filtre, Pivot Tables, Charts, Data Cleaning;
- mini-challenge după fiecare lecție, conectat la Grid Simulator;
- feedback vizibil pentru exerciții: corect, aproape, hint și explicație;
- Search / Command Palette cu Ctrl + K pentru lecții, formule, shortcut-uri și proiecte;
- Formula Vault extins: sintaxă, când o folosim, exemplu, greșeli frecvente și mini-exercițiu;
- proiecte de portofoliu: buget personal, tracker cheltuieli, sales report, attendance tracker, gradebook, dashboard, inventory tracker;
- Daily Quest cu XP;
- leaderboard local/demo;
- Certificate Preview blocat cu criterii clare;
- Review Queue pentru lecțiile nefinalizate;
- progres local pornit de la zero, salvat în `localStorage`;
- export CSV bilingv.

## De ce nu a fost suprascris direct `index.html`

Am încercat update direct pe `index.html`, dar GitHub API a returnat conflict pentru că era necesar SHA-ul exact al blob-ului existent. Pentru siguranță, site-ul live nu a fost atins.

## Pentru publicare

După review, unul dintre preview-uri poate înlocui `index.html`, sau modulele pot fi combinate într-o singură experiență finală.
