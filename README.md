# Excel-Quest

> Învață Excel ca într-un joc — lecții, quest-uri, Formula Vault, insigne.

Aplicație web educațională pentru utilizatorii care vor să învețe Microsoft Excel într-un mod practic, vizual și gamificat.

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
├── index.html              ← pagina principală
├── favicon.svg             ← favicon vector (suport dark mode)
├── favicon-32.png          ← fallback PNG
├── favicon-192.png         ← Android home screen
├── favicon-512.png         ← PWA splash
├── apple-touch-icon.png    ← iOS home screen (180×180)
├── og-cover.svg            ← sursă vector OG cover
├── og-cover.png            ← OG cover pentru social media (1200×630)
├── manifest.webmanifest    ← PWA manifest
├── sitemap.xml             ← pentru Google Search Console
├── robots.txt
└── README.md
```

## Deploy pe GitHub Pages

1. Push toate fișierele în branch-ul `main`.
2. Settings → Pages → Source: `main` / `(root)`.
3. URL final: `https://laurandreea10.github.io/Excel-Quest/`

## Verificare după deploy

- [ ] Favicon vizibil în tab
- [ ] OG preview testat pe [opengraph.xyz](https://www.opengraph.xyz/) sau [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Sitemap submis în Google Search Console
- [ ] Lighthouse score 90+ la SEO și Accessibility
- [ ] Dark mode toggle persistă între reload-uri (localStorage)

## Paletă de culori

| Token        | Hex       | Folosire                     |
|--------------|-----------|------------------------------|
| `--primary`  | `#0F9D58` | Quest, success, CTA primary  |
| `--accent`   | `#FFB400` | XP, achievement, highlight   |
| `--deep`     | `#0B1F3A` | Backbone, headers dark       |
| `--surface`  | `#F7F9FC` | Light background             |
| `--info`     | `#5B8DEF` | Info notices                 |
| `--danger`   | `#E5484D` | Erori, alerte                |

## Tipografie

- **Display**: Fraunces (serif, opsz axis) — pentru titluri
- **Body**: Manrope — text general
- **Mono**: JetBrains Mono — formule, code, valori spreadsheet

## Tech stack

- HTML5 / CSS3 / Vanilla JS — single-file, fără dependențe
- CSS variables pentru theming
- IntersectionObserver pentru scroll animations
- localStorage pentru persistență (theme + lang)

## License

MIT — by Laura Andreea (2026)
