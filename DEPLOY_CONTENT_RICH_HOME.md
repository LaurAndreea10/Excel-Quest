# Deploy content-rich homepage

Acest PR pregătește promovarea variantei `index-content-rich-preview.html` drept pagina principală publică.

## Schimbarea dorită

Înlocuiește conținutul din `index.html` cu conținutul din `index-content-rich-preview.html`.

Motiv: varianta content-rich include deja îmbunătățirile cerute:

- 8 lecții concrete: Excel Basics, formule de bază, funcții logice, lookup, tabele și filtre, Pivot Tables, Charts, Data Cleaning;
- mini-challenge după fiecare lecție;
- feedback vizibil pentru răspuns corect, aproape, hint și explicație;
- Search / Command Palette cu Ctrl + K;
- Formula Vault extins;
- proiecte cu scenarii reale;
- Daily Quest;
- leaderboard demo;
- Certificate Preview;
- interfață în română, cu opțiune English.

## Pași manuali dacă GitHub UI blochează update-ul automat

```bash
cp index-content-rich-preview.html index.html
git add index.html
git commit -m "Promote content-rich learning flow to homepage"
git push
```

## Checklist de testare

- Deschide pagina principală `/Excel-Quest/`.
- Verifică secțiunea Lecții: trebuie să apară cele 8 lecții reale.
- Deschide o lecție și verifică mini-challenge-ul.
- Testează o formulă corectă, de exemplu `=SUM(B2:B5)`.
- Apasă Ctrl + K și caută `pivot`.
- Verifică Formula Vault, Proiecte, Daily Quest, Leaderboard și Certificate Preview.
- Testează layout-ul pe mobil.
