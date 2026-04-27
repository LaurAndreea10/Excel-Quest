# Excel Quest upgrade notes

Acest branch adaugă versiuni preview pentru Excel Quest, aliniate ca experiență publică la BACapp.

## Preview recomandat pentru review

Folosește `index-content-rich-preview.html`. Acesta include upgrade-ul cerut cu conținut real și experiență mai vie.

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

## Alte fișiere

`index-upgrade-preview.html` rămâne ca variantă mai simplă, bilingvă.

## De ce nu a fost suprascris direct `index.html`

Am încercat update direct pe `index.html`, dar GitHub API a returnat conflict pentru că era necesar SHA-ul exact al blob-ului existent. Pentru siguranță, site-ul live nu a fost atins.

## Pentru publicare

După review, conținutul din `index-content-rich-preview.html` poate înlocui `index.html`.
