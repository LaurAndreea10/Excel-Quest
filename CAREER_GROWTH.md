# Excel Quest – Career Growth Preview

Acest document descrie preview-ul `index-career-growth-preview.html`, care implementează 12 module pentru trasee de carieră, antrenament, feedback și resurse reutilizabile.

## Module implementate

1. **Excel Career Paths**
   - trasee pentru Admin Assistant, Junior Accountant, Data Analyst, HR Specialist, Sales Analyst și Project Manager;
   - fiecare path afișează lecții și skill-uri recomandate.

2. **One Formula, Many Uses**
   - arată mai multe utilizări reale pentru aceeași formulă;
   - exemplu: `COUNTIF` pentru elevi admiși, comenzi peste 100 lei, task-uri finalizate, absențe și produse dintr-o categorie.

3. **Excel Gym**
   - antrenamente scurte: formule, shortcut-uri, erori, grafice, data cleaning;
   - fiecare antrenament generează un task rapid.

4. **Data Storytelling**
   - utilizatorul scrie concluzii și recomandări pornind de la date;
   - validează dacă răspunsul include o concluzie suficientă.

5. **Spreadsheet Design Score**
   - scor pe claritate, formule corecte, formatare, structură, lizibilitate și insight-uri.

6. **Wrong Answer Gallery**
   - explică răspunsuri greșite comune;
   - exemplu: diferența dintre `=SUM(A1,A10)` și `=SUM(A1:A10)`.

7. **Excel Habits**
   - mini-obiceiuri bune: fără totaluri manuale, coloane clare, fără merged cells, verificare lipsuri, tabele și versiuni curate.

8. **Cheat Sheet Builder**
   - utilizatorul salvează formule, shortcut-uri și explicații;
   - include export PDF demo pentru „My Excel Cheat Sheet”.

9. **Mini Certification Exam**
   - examen demo cu structură completă: 20 întrebări, 5 exerciții, 1 proiect, scor minim și certificat demo.

10. **Progress Timeline**
    - linie cronologică: prima formulă, primul quiz, prima eroare reparată, primul dashboard, examen beginner.

11. **Excel Mentor Notes**
    - feedback ca de la mentor după proiect;
    - recomandări despre formule, layout, KPI-uri și claritate.

12. **Template Library**
    - șabloane: buget lunar, tracker cheltuieli, raport vânzări, listă inventar, plan de proiect, calendar editorial și habit tracker.

## Persistență locală

Preview-ul folosește `localStorage` pentru:

- XP;
- path ales;
- scor de examen;
- cheat sheet personal.

## Testare locală

```bash
python3 -m http.server 8000
```

Deschide:

```text
http://localhost:8000/index-career-growth-preview.html
```

## Checklist de testare

- [ ] Alege fiecare career path și verifică lecțiile/skill-urile.
- [ ] Verifică exemplele `COUNTIF` din One Formula, Many Uses.
- [ ] Pornește fiecare tip de Excel Gym.
- [ ] Scrie o concluzie în Data Storytelling.
- [ ] Calculează Spreadsheet Design Score.
- [ ] Verifică Wrong Answer Gallery.
- [ ] Generează Habit of the Day.
- [ ] Adaugă elemente în Cheat Sheet Builder.
- [ ] Rulează Mini Certification Exam.
- [ ] Verifică Progress Timeline.
- [ ] Generează Excel Mentor Notes.
- [ ] Selectează șabloane din Template Library.
