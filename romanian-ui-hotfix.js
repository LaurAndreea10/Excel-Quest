/* Excel Quest Romanian UI Hotfix
   Purpose: localize remaining English labels in the live premium index.html.
   Include before </body> in index.html:
   <script src="./romanian-ui-hotfix.js"></script>
*/
(function(){
  const textMap = new Map([
    ['Keep learning every day','Continuă să înveți în fiecare zi'],
    ['Keep learning everyday','Continuă să înveți în fiecare zi'],
    ['Keep learning every day.','Continuă să înveți în fiecare zi.'],
    ['Quick Actions','Acțiuni rapide'],
    ['Balanced','Echilibrat'],
    ['Guest · Beginner','Invitat · Începător'],
    ['Guest','Invitat'],
    ['Beginner','Începător'],
    ['Intermediate','Intermediar'],
    ['Advanced','Avansat'],
    ['Start','Începe'],
    ['Start learning','Începe să înveți'],
    ['Start now','Începe acum'],
    ['Get started','Începe acum'],
    ['Continue','Continuă'],
    ['Continue learning','Continuă învățarea'],
    ['Skip','Sari peste'],
    ['Save','Salvează'],
    ['Cancel','Anulează'],
    ['Name','Nume'],
    ['Your name','Numele tău'],
    ['First name','Prenume'],
    ['Last name','Nume'],
    ['Role','Rol'],
    ['Goal','Obiectiv'],
    ['Learning goal','Obiectiv de învățare'],
    ['Choose your goal','Alege obiectivul'],
    ['Choose your role','Alege rolul'],
    ['Experience level','Nivel de experiență'],
    ['Level','Nivel'],
    ['Student','Elev / Student'],
    ['Accountant','Contabil'],
    ['Data Analyst','Analist de date'],
    ['HR Specialist','Specialist HR'],
    ['Sales Analyst','Analist vânzări'],
    ['Project Manager','Manager de proiect'],
    ['Admin Assistant','Asistent administrativ'],
    ['I want to learn Excel for school','Vreau să învăț Excel pentru școală'],
    ['I want to build my budget','Vreau să-mi fac bugetul'],
    ['I want to apply for jobs','Vreau să aplic la joburi'],
    ['I want to understand reports','Vreau să înțeleg rapoarte'],
    ['Welcome to Excel Quest','Bun venit în Excel Quest'],
    ['Set up your profile','Configurează profilul tău'],
    ['Tell us about you','Spune-ne despre tine'],
    ['Personalize your learning path','Personalizează traseul de învățare'],
    ['Create profile','Creează profilul'],
    ['Save profile','Salvează profilul'],
    ['Let’s start','Să începem'],
    ["Let's start",'Să începem'],
    ['Daily Quest','Misiunea zilei'],
    ['Formula of the Day','Formula zilei'],
    ['Shortcut of the Day','Shortcut-ul zilei'],
    ['Review Queue','Coada de recapitulare'],
    ['Dashboard','Panou principal'],
    ['Lessons','Lecții'],
    ['Projects','Proiecte'],
    ['Achievements','Realizări'],
    ['Settings','Setări']
  ]);

  const dayMap = new Map([
    ['Mon','Lun'], ['Tue','Mar'], ['Wed','Mie'], ['Thu','Joi'], ['Fri','Vin'], ['Sat','Sâm'], ['Sun','Dum'],
    ['Mo','Lu'], ['Tu','Ma'], ['We','Mi'], ['Th','Jo'], ['Fr','Vi'], ['Sa','Sâ'], ['Su','Du'],
    ['M','L'], ['T','M'], ['W','M'], ['F','V'],
    ['Monday','Luni'], ['Tuesday','Marți'], ['Wednesday','Miercuri'], ['Thursday','Joi'], ['Friday','Vineri'], ['Saturday','Sâmbătă'], ['Sunday','Duminică']
  ]);

  const placeholderMap = new Map([
    ['Your name','Numele tău'],
    ['Name','Nume'],
    ['First name','Prenume'],
    ['Last name','Nume'],
    ['Choose your goal','Alege obiectivul'],
    ['Choose your role','Alege rolul'],
    ['Search lessons, formulas...','Caută lecții, formule...'],
    ['Search','Caută']
  ]);

  function normalize(value){ return String(value || '').replace(/\s+/g,' ').trim(); }

  function translateTextNode(node){
    const raw = node.nodeValue;
    const key = normalize(raw);
    if(!key) return;
    const translated = textMap.get(key) || dayMap.get(key);
    if(translated) node.nodeValue = raw.replace(key, translated);
  }

  function translateElement(el){
    if(!el || el.dataset?.roLocalized === '1') return;

    if(el.childNodes && el.childNodes.length){
      el.childNodes.forEach(child => {
        if(child.nodeType === Node.TEXT_NODE) translateTextNode(child);
      });
    }

    const exact = normalize(el.textContent);
    const translated = textMap.get(exact) || dayMap.get(exact);
    if(translated && el.children.length === 0) el.textContent = translated;

    ['placeholder','aria-label','title','value'].forEach(attr => {
      if(!el.hasAttribute || !el.hasAttribute(attr)) return;
      const current = normalize(el.getAttribute(attr));
      const next = placeholderMap.get(current) || textMap.get(current) || dayMap.get(current);
      if(next) el.setAttribute(attr, next);
    });

    if(el.tagName === 'OPTION'){
      const current = normalize(el.textContent);
      const next = textMap.get(current) || dayMap.get(current);
      if(next) el.textContent = next;
    }
  }

  function localizeSelects(){
    document.querySelectorAll('select option').forEach(translateElement);
  }

  function localizeDays(){
    document.querySelectorAll('.streak-dot, [class*="day"], [class*="Day"], [data-day]').forEach(el => {
      const key = normalize(el.textContent);
      const translated = dayMap.get(key);
      if(translated) el.textContent = translated;
    });
  }

  function localizeAll(){
    document.querySelectorAll('body *').forEach(translateElement);
    localizeSelects();
    localizeDays();
  }

  function addRomanianHelperNote(){
    const modal = document.querySelector('.modal-box');
    if(!modal || modal.querySelector('[data-ro-helper-note]')) return;
    const note = document.createElement('p');
    note.dataset.roHelperNote = '1';
    note.style.cssText = 'margin-top:10px;color:var(--text-3,#94a3b8);font-size:.78rem;line-height:1.45';
    note.textContent = 'Completează formularul în română. Datele rămân salvate local în browser.';
    modal.appendChild(note);
  }

  function run(){
    localizeAll();
    addRomanianHelperNote();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();

  const observer = new MutationObserver(() => run());
  observer.observe(document.documentElement, {childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:['placeholder','aria-label','title','value']});
})();
