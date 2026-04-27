# Excel Quest upgrade notes

Acest branch adaugă o versiune preview pentru Excel Quest, aliniată ca experiență publică la BACapp.

## Ce include preview-ul

- landing public premium cu hero, CTA și navigație sticky;
- separare între demo și experiența personală;
- progres local pornit de la zero, salvat în `localStorage`;
- lecții, quiz-uri și proiecte cu XP;
- simulator spreadsheet cu formule SUM, AVERAGE, MIN, MAX;
- export CSV;
- bibliotecă de formule;
- raport personal;
- coach local, fără servicii externe.

## De ce nu a fost suprascris direct `index.html`

Am încercat update direct pe `index.html`, dar GitHub API a returnat conflict pentru că era necesar SHA-ul exact al blob-ului existent. Pentru siguranță, site-ul live nu a fost atins.

## Pentru publicare

După review, conținutul din `index-upgrade-preview.html` poate înlocui `index.html`.

