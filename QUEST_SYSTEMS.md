# Excel Quest – Quest Systems Preview

Acest document descrie preview-ul `index-quest-systems-preview.html`, care implementează 12 sisteme noi pentru gamificare, scenarii de job și gândire critică.

## Module implementate

1. **Excel Quest Map**
   - hartă cu zone: Formula Forest, Pivot City, Chart Mountains, Data Cleaning Lab, Dashboard Castle, Shortcut Arena;
   - fiecare zonă are lecții/misiuni și boss battle-uri deblocate conceptual;
   - misiunile acordă XP.

2. **Client Requests**
   - cereri ca într-un job real;
   - exemplu: raport cu vânzări pe regiuni și top 3 produse;
   - utilizatorul rezolvă în grid cu formula `=SUM(C2:C5)`.

3. **Bad Spreadsheet Museum**
   - galerie de tabele greșite;
   - exemple: culori prea multe, merged cells, totaluri manuale;
   - utilizatorul identifică problema și primește explicație.

4. **Formula Duels**
   - compară două formule;
   - exemplu: `=A1+B1+C1+D1` versus `=SUM(A1:D1)`;
   - explică de ce formula mai bună este mai scalabilă.

5. **What Would Excel Do?**
   - întrebări rapide despre comportamentul Excel;
   - include referințe absolute precum `$A$1`, copiere formule, ștergere coloane și text în celule numerice.

6. **Mini Case Studies**
   - scenarii scurte de decizie;
   - utilizatorul alege între formulă, pivot table sau filtru;
   - focus pe alegerea metodei potrivite, nu doar memorarea formulei.

7. **Excel Personality**
   - quiz de onboarding;
   - rezultate: Formula Wizard, Dashboard Designer, Data Cleaner, Shortcut Ninja, Pivot Strategist;
   - recomandă o rută de învățare și setează titlu local.

8. **Streak Freeze**
   - utilizatorul poate cumpăra freeze cu XP;
   - poate folosi freeze pentru păstrarea streak-ului.

9. **Excel Inbox**
   - inbox tip email cu cereri de la Manager, Client, HR și Finance;
   - fiecare email devine o misiune.

10. **Audit Mode**
    - checklist pentru verificarea unui spreadsheet făcut de altcineva;
    - verifică formule consistente, duplicate, valori lipsă, totaluri corecte și date suspecte.

11. **Explain the Chart**
    - utilizatorul interpretează un grafic simplu;
    - alege explicația corectă: vânzările cresc, scad, produsul domină sau datele sunt insuficiente.

12. **Achievement Collections**
    - colecții de badge-uri, nu doar badge-uri individuale;
    - Formula Starter Pack și Data Analyst Pack;
    - completarea unei colecții oferă titlu special.

## Persistență locală

Preview-ul folosește `localStorage` pentru:

- XP;
- streak;
- Streak Freeze;
- titlul obținut.

## Testare locală

```bash
python3 -m http.server 8000
```

Apoi deschide:

```text
http://localhost:8000/index-quest-systems-preview.html
```

## Checklist de testare

- [ ] Completează câte o misiune în fiecare zonă din Excel Quest Map.
- [ ] Rezolvă Client Request cu `=SUM(C2:C5)`.
- [ ] Identifică problema din Bad Spreadsheet Museum.
- [ ] Alege formula mai bună în Formula Duels.
- [ ] Răspunde la What Would Excel Do.
- [ ] Alege Pivot Table în Mini Case Studies.
- [ ] Completează Excel Personality și verifică titlul primit.
- [ ] Cumpără și folosește un Streak Freeze.
- [ ] Pornește o misiune din Excel Inbox.
- [ ] Bifează toate verificările din Audit Mode.
- [ ] Interpretează corect graficul din Explain the Chart.
- [ ] Completează o Achievement Collection și verifică titlul special.
