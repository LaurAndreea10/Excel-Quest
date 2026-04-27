# Excel Quest upgrade notes

Acest branch adaugă versiuni preview pentru Excel Quest, aliniate ca experiență publică la BACapp.

## Preview-uri disponibile

1. `index-content-rich-preview.html` — preview recomandat pentru conținut bogat: lecții, proiecte, Formula Vault, Daily Quest și command palette.
2. `index-advanced-experience-preview.html` — preview advanced cu cele 10 idei noi de experiență aplicativă.
3. `index-upgrade-preview.html` — variantă mai simplă, bilingvă.

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

După review, `index-content-rich-preview.html` sau `index-advanced-experience-preview.html` poate înlocui `index.html`, în funcție de direcția aleasă.
