# Excel Quest – module avansate de învățare

Acest document descrie preview-ul `index-advanced-learning-modules-preview.html`, care implementează cele 10 idei noi ca module interactive testabile.

## Module incluse

1. **Excel Detective**
   - utilizatorul investighează un raport cu profit scăzut;
   - trebuie să observe valori anormale, rând duplicat și costuri suspecte;
   - primește feedback și XP.

2. **Choose Your Role**
   - utilizatorul alege un rol: Student, Contabil, HR, Marketing, Antreprenor sau Data Analyst;
   - scenariul de lucru se personalizează după rol;
   - alegerea este salvată în `localStorage`.

3. **Explain My Formula**
   - utilizatorul introduce o formulă;
   - aplicația explică formule precum `IF`, `SUM`, `AVERAGE` și `XLOOKUP` pe pași simpli.

4. **Formula Builder**
   - utilizatorul construiește formula din piese: `=`, `SUM`, `(`, `A1:A10`, `)`;
   - validarea verifică formula `=SUM(A1:A10)`.

5. **Data Cleaning Lab**
   - curăță spații extra;
   - elimină duplicate;
   - standardizează categorii;
   - transformă texte cu „lei” în valori mai curate;
   - include exemplu de separare nume/prenume.

6. **Real File Simulator**
   - simulează un fișier client: `Raport_Vanzari_FINAL_v3_corectat.xlsx`;
   - utilizatorul rezolvă probleme realiste: coloane neclare, rânduri goale, totaluri manuale greșite și categorii standardizate.

7. **Confidence Meter**
   - după lecție, utilizatorul răspunde: „Nu încă”, „Aproape”, „Da, pot”;
   - dacă alege „Nu încă”, lecția intră automat în Review Queue.

8. **Excel Myths**
   - carduri scurte care demontează mituri despre Excel;
   - exemple: Excel nu e doar pentru contabilitate, nu trebuie memorate toate formulele, Pivot Tables nu sunt atât de grele.

9. **Keyboard-Only Challenge**
   - utilizatorul exersează shortcut-uri fără mouse;
   - include `Ctrl + A`, `Ctrl + B`, `Ctrl + C`, `Ctrl + V`, `Ctrl + Shift + L`;
   - are un test rapid pentru shortcut-ul de filtre.

10. **Portfolio Page**
    - utilizatorul adaugă proiecte realizate;
    - proiectele sunt salvate local în browser;
    - exemple: Buget personal, Dashboard vânzări, Tracker cheltuieli, Raport HR, Inventory tracker.

## Testare locală

```bash
python3 -m http.server 8000
```

Apoi deschide:

```text
http://localhost:8000/index-advanced-learning-modules-preview.html
```

## Checklist de testare

- [ ] Alege fiecare rol și verifică scenariul personalizat.
- [ ] Rezolvă corect investigația Excel Detective.
- [ ] Introdu `=IF(B2>=5,"Admis","Respins")` în Explain My Formula.
- [ ] Construiește `=SUM(A1:A10)` în Formula Builder.
- [ ] Curăță datele din Data Cleaning Lab.
- [ ] Bifează toate task-urile din Real File Simulator.
- [ ] Alege „Nu încă” în Confidence Meter și verifică Review Queue.
- [ ] Verifică toate cardurile Excel Myths.
- [ ] Testează shortcut-ul `Ctrl+Shift+L`.
- [ ] Adaugă cel puțin două proiecte în Portfolio Page.
- [ ] Reîncarcă pagina și verifică persistarea în `localStorage`.
