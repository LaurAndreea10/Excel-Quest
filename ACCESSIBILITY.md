# Accesibilitate – adaptarea textului pentru persoane cu dizabilități

Acest document definește regulile de accesibilitate pentru textele din Excel Quest. Scopul este ca lecțiile, quiz-urile, mesajele de feedback, onboarding-ul și simulările să fie ușor de înțeles pentru cât mai mulți utilizatori, inclusiv persoane cu dizabilități vizuale, cognitive, motorii, auditive sau dificultăți de citire.

## Principii generale

Textele din aplicație trebuie să fie:

- clare;
- scurte;
- consecvente;
- ușor de citit pe mobil;
- utile pentru screen reader;
- fără instrucțiuni bazate doar pe culoare;
- fără presiune inutilă;
- prietenoase pentru începători.

## Limbaj clar

Preferă formulări simple.

| Evită | Folosește |
|---|---|
| „Execută agregarea valorilor din interval.” | „Adună valorile din interval.” |
| „Input invalid.” | „Formula nu este corectă încă.” |
| „Operațiune eșuată.” | „Nu am putut verifica răspunsul. Încearcă din nou.” |
| „Utilizează referințe absolute.” | „Blochează celula cu `$`, de exemplu `$A$1`.” |

## Text pentru persoane cu dificultăți cognitive

- O idee pe propoziție.
- Instrucțiuni în pași numerotați.
- Evită paragrafe lungi.
- Explică termenii noi prima dată când apar.
- Repetă structura: „Ce ai de făcut”, „Hint”, „De ce”.

Exemplu bun:

```text
1. Selectează celulele B2:B8.
2. Scrie formula =SUM(B2:B8).
3. Apasă Verifică.
```

## Text pentru screen reader

Fiecare element interactiv trebuie să aibă o etichetă clară.

Exemple:

```html
<button aria-label="Verifică formula introdusă">Verifică</button>
<input aria-label="Formula pentru totalul vânzărilor" placeholder="=SUM(B2:B8)">
```

Reguli:

- butoanele nu trebuie să fie doar „OK” sau „Click aici”;
- cardurile importante trebuie să aibă titluri clare;
- mesajele de feedback trebuie să fie anunțabile, ideal cu `aria-live="polite"`;
- iconițele decorative trebuie să fie ascunse de screen reader cu `aria-hidden="true"`.

## Mesaje de feedback accesibile

Feedbackul trebuie să spună clar ce s-a întâmplat și ce urmează.

| Situație | Mesaj recomandat |
|---|---|
| Răspuns corect | „Corect. Ai folosit formula potrivită. +10 XP.” |
| Aproape corect | „Aproape. Verifică intervalul de celule.” |
| Greșit | „Formula nu este corectă încă. Începe cu `=SUM(`.” |
| Eroare tehnică | „A apărut o problemă. Răspunsul tău nu a fost pierdut.” |

Nu folosi doar culoare pentru feedback. Include text: „Corect”, „Aproape”, „De verificat”.

## Contrast și vizibilitate

Textele trebuie să respecte aceste reguli:

- contrast bun între text și fundal;
- font minim 16px pentru text principal;
- text secundar lizibil, nu gri foarte slab;
- butoane cu stare focus vizibilă;
- linkurile trebuie să fie subliniate sau clar diferite, nu doar colorate.

## Pentru persoane cu dislexie sau dificultăți de citire

Recomandări:

- fraze scurte;
- spațiere generoasă;
- evită textul complet cu majuscule;
- evită blocuri dense de text;
- folosește liste și exemple;
- nu folosi jargon fără explicație;
- păstrează denumirile formulelor în format monospaced: `SUM`, `COUNTIF`, `XLOOKUP`.

## Pentru persoane cu dizabilități motorii

Textele trebuie să sprijine navigarea fără mouse:

- instrucțiunile trebuie să includă shortcut-uri acolo unde este util;
- toate acțiunile trebuie să fie accesibile din tastatură;
- butoanele trebuie să aibă etichete clare;
- nu folosi „apasă pe cardul din dreapta” fără alternativă.

Exemplu:

```text
Apasă butonul „Verifică formula” sau folosește Enter când butonul este selectat.
```

## Pentru persoane cu deficiențe de vedere

- Nu spune doar „apasă butonul verde”.
- Spune „apasă butonul Verifică”.
- Graficele trebuie să aibă o descriere text.
- Tabelele trebuie să aibă antete clare.
- Mesajele vizuale trebuie repetate textual.

Exemplu pentru grafic:

```text
Descriere grafic: vânzările cresc de la 40k în Q1 la 70k în Q4. Regiunea Est scade cu 12%.
```

## Pentru persoane cu deficiențe auditive

Excel Quest nu depinde de audio în versiunea actuală. Dacă vor fi adăugate explicații audio/video:

- adaugă subtitrări;
- oferă transcriere text;
- nu transmite informații doar prin sunet.

## Onboarding accesibil

Formularul de început trebuie să fie simplu:

1. Limbă;
2. Nume sau alias;
3. Obiectiv;
4. Nivel;
5. Rol.

Text recomandat:

```text
Alege limba și completează câteva opțiuni. Aceste informații personalizează lecțiile. Datele rămân salvate local în browser.
```

Buton recomandat:

```text
Începe experiența
```

Evită:

```text
Finalizează configurarea completă a profilului educațional.
```

## Lecții accesibile

Fiecare lecție trebuie să includă:

- obiectivul lecției;
- explicație scurtă;
- exemplu;
- exercițiu practic;
- hint;
- feedback;
- recapitulare.

Structură recomandată:

```text
Obiectiv: vei învăța să aduni valori cu SUM.
Explicație: SUM adună numerele dintr-un interval.
Exemplu: =SUM(B2:B8)
Exercițiu: calculează totalul vânzărilor.
Hint: formula începe cu =SUM(
```

## Certificate și badge-uri

Pentru certificate și badge-uri, textul trebuie să fie clar:

```text
Acesta este un certificat educațional Excel Quest. Nu este o certificare oficială Microsoft.
```

Badge-urile trebuie să explice criteriul:

```text
Badge Formula Starter: deblocat după 5 exerciții corecte cu formule de bază.
```

## Checklist rapid pentru orice text nou

Înainte de publicare, verifică:

- [ ] este clar pentru un începător;
- [ ] nu depinde doar de culoare;
- [ ] poate fi citit de un screen reader;
- [ ] are propoziții scurte;
- [ ] butoanele au nume clare;
- [ ] mesajele de eroare oferă următorul pas;
- [ ] graficele au descriere text;
- [ ] nu cere date personale reale;
- [ ] există variantă în română și, unde este cazul, în engleză.
