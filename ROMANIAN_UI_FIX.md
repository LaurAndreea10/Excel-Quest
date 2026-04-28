# Fix UI română – zile și formular de început

Acest branch adaugă `romanian-ui-hotfix.js`, un script mic pentru localizarea textelor rămase în engleză în interfața live `index.html`.

## Ce adaptează

- zilele din streak: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun` → `Lun`, `Mar`, `Mie`, `Joi`, `Vin`, `Sâm`, `Dum`;
- zilele complete: `Monday`, `Tuesday`, etc. → `Luni`, `Marți`, etc.;
- formularul de început / onboarding:
  - `Name` → `Nume`;
  - `First name` → `Prenume`;
  - `Goal` → `Obiectiv`;
  - `Choose your goal` → `Alege obiectivul`;
  - `Choose your role` → `Alege rolul`;
  - `Experience level` → `Nivel de experiență`;
  - `Beginner` → `Începător`;
  - `Start`, `Get started`, `Continue` → variante românești;
- etichete precum `Quick Actions`, `Balanced`, `Guest · Beginner`, `Keep learning every day`.

## Cum se integrează în `index.html`

Adaugă înainte de `</body>`:

```html
<script src="./romanian-ui-hotfix.js"></script>
```

## De ce e separat

`index.html` este foarte mare, iar conținutul complet este trunchiat la citire prin API. Pentru a evita suprascrierea accidentală a aplicației live, fixul este livrat separat și poate fi inclus cu o singură linie.

## Testare

1. Deschide aplicația.
2. Resetează localStorage sau intră într-un browser nou ca să apară formularul de început.
3. Verifică formularul: toate etichetele și opțiunile trebuie să fie în română.
4. Verifică zona de streak: zilele trebuie să fie în română.
5. Verifică dashboard-ul: `Guest`, `Beginner`, `Quick Actions`, `Balanced`, `Keep learning every day` trebuie să fie adaptate.
