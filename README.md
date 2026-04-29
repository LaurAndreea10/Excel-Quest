# Excel-Quest

> Învață Excel ca într-un joc — lecții, quest-uri, Formula Vault, insigne.

Aplicație web educațională pentru utilizatorii care vor să învețe Microsoft Excel într-un mod practic, vizual și gamificat.

## Live pages

- **Main version**: `https://laurandreea10.github.io/Excel-Quest/`
- **Enhanced Main**: `https://laurandreea10.github.io/Excel-Quest/enhanced-main.html`
- **Enhanced Pro v2**: `https://laurandreea10.github.io/Excel-Quest/enhanced-pro-v2.html`

## Funcționalități

- **Lecții interactive** — de la celule de bază la macro-uri și Power Query
- **Quiz-uri** cu răspunsuri explicate
- **Formule explicate** — biblioteca Formula Vault (200+)
- **Simulatoare** — mini-Excel funcțional în browser
- **Proiecte de portofoliu** — output real, exportabil
- **Quest-uri** tematice cu storyline
- **Moduri de joc** & dificultate adaptivă
- **Career Paths** — trasee dedicate (Analist, Marketing, Finance, HR, Ops)
- **Scenarii de job** — replici situații reale de la birou
- **Audit de spreadsheet** — încarci un fișier, primești raport
- **Excel Gym** — antrenament zilnic cu streak tracker
- **Șabloane** profesionale gata de folosit
- **Insigne** — colecționează badge-uri pentru skill-uri stăpânite

## Structura fișierelor

```
Excel-Quest/
├── index.html                    ← pagina principală
├── enhanced-main.html            ← variantă landing page extinsă
├── enhanced-pro-v2.html          ← variantă premium compactă
├── favicon.svg                   ← favicon vector (suport dark mode)
├── favicon-32.png                ← fallback PNG
├── favicon-192.png               ← Android home screen
├── favicon-512.png               ← PWA splash
├── apple-touch-icon.png          ← iOS home screen (180×180)
├── og-cover.svg                  ← sursă vector OG cover
├── og-cover.png                  ← OG cover pentru social media (1200×630)
├── manifest.webmanifest          ← PWA manifest
├── sitemap.xml                   ← pentru Google Search Console
├── robots.txt
└── README.md
```

## Deploy pe GitHub Pages

1. Push toate fișierele în branch-ul `main`.
2. Settings → Pages → Source: `main` / `(root)`.
3. URL principal: `https://laurandreea10.github.io/Excel-Quest/`
4. Link direct Enhanced Main: `https://laurandreea10.github.io/Excel-Quest/enhanced-main.html`
5. Link direct Enhanced Pro v2: `https://laurandreea10.github.io/Excel-Quest/enhanced-pro-v2.html`

## Verificare după deploy

- [ ] Favicon vizibil în tab
- [ ] Pagina principală se încarcă corect
- [ ] Enhanced Main se încarcă corect
- [ ] Enhanced Pro v2 se încarcă corect
- [ ] Lighthouse score 90+ la SEO și Accessibility

## Tech stack

- HTML5 / CSS3 / Vanilla JS — single-file, fără dependențe
- CSS variables pentru theming
- localStorage pentru persistență demo

## License

MIT — by Laura Andreea (2026)
