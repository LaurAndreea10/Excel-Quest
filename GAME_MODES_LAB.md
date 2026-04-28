# Excel Quest – Game Modes Lab

Acest document descrie preview-ul `index-game-modes-lab-preview.html`, care implementează 12 moduri de joc și practică.

## Module implementate

1. **Excel Escape Room**
   - utilizatorul rezolvă puzzle-uri Excel ca să iasă din cameră;
   - include COUNTIF pentru descoperirea parolei și deblocarea nivelului.

2. **Build-a-Dashboard**
   - utilizatorul construiește un dashboard pas cu pas;
   - pași: curățare date, KPI-uri, grafice, layout;
   - primește scor de claritate.

3. **Excel Roast**
   - aplicația generează comentarii amuzante despre tabele greșite;
   - exemple despre culori excesive, totaluri manuale și coloane fără nume.

4. **Guess the Formula**
   - utilizatorul vede rezultatul și ghicește formula;
   - exemplu: 10, 20, 30 → 60 → `=SUM(A1:A3)`.

5. **Excel Sandbox**
   - spațiu liber pentru testarea formulelor;
   - include date editabile, formulă, rezultat explicat și reset.

6. **Personal Goal Tracker**
   - utilizatorul alege obiectivul: școală, buget, joburi sau rapoarte;
   - aplicația salvează obiectivul și afișează progres.

7. **Formula Flashcards**
   - carduri rapide pentru formule, shortcut-uri, erori și funcții logice;
   - include întoarcerea cardului și trecerea la următorul.

8. **Excel Bingo**
   - tablă cu mini-task-uri Excel;
   - bifarea task-urilor acordă XP când utilizatorul completează o linie simbolică.

9. **Scenario Generator**
   - buton pentru generarea unei provocări;
   - exemple: magazin online, medii pentru studenți, buget lunar.

10. **Peer Review Mode**
    - utilizatorul evaluează o soluție simulată;
    - trebuie să spună dacă formula este corectă și ce poate fi îmbunătățit.

11. **Excel Time Machine**
    - arată evoluția aceleiași sarcini: manual, beginner, professional;
    - exemplu: `A1+A2+A3`, `SUM`, tabel + total row + pivot.

12. **Job Interview Mode**
    - întrebări ca la interviu;
    - include scor și recomandări finale.

## Persistență locală

Preview-ul folosește `localStorage` pentru:

- XP;
- scor de claritate;
- obiectiv personal.

## Testare locală

```bash
python3 -m http.server 8000
```

Deschide:

```text
http://localhost:8000/index-game-modes-lab-preview.html
```

## Checklist de testare

- [ ] Rezolvă Escape Room cu `=COUNTIF(A2:A5,"OK")`.
- [ ] Bifează pașii Build-a-Dashboard și verifică scorul de claritate.
- [ ] Generează cel puțin un Excel Roast.
- [ ] Ghicește formula `=SUM(A1:A3)`.
- [ ] Rulează formula în Sandbox și resetează tabelul.
- [ ] Setează un obiectiv personal.
- [ ] Întoarce și schimbă Formula Flashcards.
- [ ] Bifează task-uri în Excel Bingo.
- [ ] Generează o provocare nouă.
- [ ] Evaluează soluția din Peer Review Mode.
- [ ] Verifică cele trei niveluri din Excel Time Machine.
- [ ] Răspunde la întrebarea din Job Interview Mode.
