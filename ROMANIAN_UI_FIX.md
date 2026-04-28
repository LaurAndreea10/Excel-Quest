# Selector limbă și traducere câmpuri

Acest branch actualizează `romanian-ui-hotfix.js` astfel încât aplicația să permită selectarea limbii **Română / English** și să traducă formularul de început, câmpurile, placeholder-urile, opțiunile, butoanele și zilele din streak.

## Ce adaugă

- selector plutitor **RO / EN** vizibil pe pagină;
- câmp **Limbă / Language** în formularul de început, atunci când formularul este detectat;
- salvarea limbii în `localStorage`, cheia `excel_quest_language`;
- actualizarea atributului `<html lang="ro|en">`;
- traducere bidirecțională RO ↔ EN pentru câmpuri și etichete;
- traducere pentru `placeholder`, `aria-label`, `title`, `value` la butoane/input-uri;
- traducerea opțiunilor din `<select>`;
- traducerea zilelor din streak.

## Câmpuri traduse în formularul de început

- `Name` ↔ `Nume`;
- `Your name` ↔ `Numele tău`;
- `First name` ↔ `Prenume`;
- `Role` ↔ `Rol`;
- `Goal` ↔ `Obiectiv`;
- `Learning goal` ↔ `Obiectiv de învățare`;
- `Choose your goal` ↔ `Alege obiectivul`;
- `Choose your role` ↔ `Alege rolul`;
- `Choose your level` ↔ `Alege nivelul`;
- `Experience level` ↔ `Nivel de experiență`;
- `Beginner` ↔ `Începător`;
- `Intermediate` ↔ `Intermediar`;
- `Advanced` ↔ `Avansat`;
- `Create profile` ↔ `Creează profilul`;
- `Save profile` ↔ `Salvează profilul`;
- `Let’s start` ↔ `Să începem`.

## Zile traduse

- `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun` ↔ `Lun`, `Mar`, `Mie`, `Joi`, `Vin`, `Sâm`, `Dum`;
- `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday` ↔ `Luni`, `Marți`, `Miercuri`, `Joi`, `Vineri`, `Sâmbătă`, `Duminică`.

## Cum se integrează în `index.html`

Adaugă înainte de `</body>`:

```html
<script src="./romanian-ui-hotfix.js"></script>
```

## Testare

1. Deschide aplicația pe mobil sau desktop.
2. Resetează `localStorage` sau intră într-un browser nou ca să apară formularul de început.
3. Verifică selectorul plutitor **RO / EN**.
4. Verifică dacă formularul are câmpul **Limbă / Language**.
5. Alege **RO** și confirmă că toate câmpurile sunt în română.
6. Alege **EN** și confirmă că aceleași câmpuri revin în engleză.
7. Verifică zilele din streak.
8. Verifică dashboard-ul: `Guest`, `Beginner`, `Quick Actions`, `Balanced`, `Keep learning every day`.
