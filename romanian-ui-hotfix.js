/* Excel Quest Language Selector Hotfix
   Purpose: add a visible RO/EN selector and translate onboarding/start form fields, dashboard labels and streak days.
   Include before </body> in index.html:
   <script src="./romanian-ui-hotfix.js"></script>
*/
(function(){
  const STORAGE_KEY = 'excel_quest_language';
  const DEFAULT_LANG = 'ro';
  let currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  let applying = false;

  const dictionary = {
    ro: new Map([
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
      ['Done','Gata'],
      ['Next','Următorul'],
      ['Back','Înapoi'],
      ['Name','Nume'],
      ['Your name','Numele tău'],
      ['First name','Prenume'],
      ['Last name','Nume'],
      ['Email','Email'],
      ['Role','Rol'],
      ['Goal','Obiectiv'],
      ['Learning goal','Obiectiv de învățare'],
      ['Choose your goal','Alege obiectivul'],
      ['Choose your role','Alege rolul'],
      ['Choose your level','Alege nivelul'],
      ['Experience level','Nivel de experiență'],
      ['Level','Nivel'],
      ['Language','Limbă'],
      ['Student','Elev / Student'],
      ['Accountant','Contabil'],
      ['Data Analyst','Analist de date'],
      ['HR Specialist','Specialist HR'],
      ['Sales Analyst','Analist vânzări'],
      ['Project Manager','Manager de proiect'],
      ['Admin Assistant','Asistent administrativ'],
      ['Entrepreneur','Antreprenor'],
      ['I want to learn Excel for school','Vreau să învăț Excel pentru școală'],
      ['I want to build my budget','Vreau să-mi fac bugetul'],
      ['I want to apply for jobs','Vreau să aplic la joburi'],
      ['I want to understand reports','Vreau să înțeleg rapoarte'],
      ['School','Școală'],
      ['Budget','Buget'],
      ['Jobs','Joburi'],
      ['Reports','Rapoarte'],
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
      ['Settings','Setări'],
      ['Profile','Profil'],
      ['Progress','Progres'],
      ['Portfolio','Portofoliu'],
      ['Search','Caută'],
      ['Search lessons, formulas...','Caută lecții, formule...']
    ]),
    en: new Map([
      ['Continuă să înveți în fiecare zi','Keep learning every day'],
      ['Acțiuni rapide','Quick Actions'],
      ['Echilibrat','Balanced'],
      ['Invitat · Începător','Guest · Beginner'],
      ['Invitat','Guest'],
      ['Începător','Beginner'],
      ['Intermediar','Intermediate'],
      ['Avansat','Advanced'],
      ['Începe','Start'],
      ['Începe să înveți','Start learning'],
      ['Începe acum','Get started'],
      ['Continuă','Continue'],
      ['Continuă învățarea','Continue learning'],
      ['Sari peste','Skip'],
      ['Salvează','Save'],
      ['Anulează','Cancel'],
      ['Gata','Done'],
      ['Următorul','Next'],
      ['Înapoi','Back'],
      ['Nume','Name'],
      ['Numele tău','Your name'],
      ['Prenume','First name'],
      ['Email','Email'],
      ['Rol','Role'],
      ['Obiectiv','Goal'],
      ['Obiectiv de învățare','Learning goal'],
      ['Alege obiectivul','Choose your goal'],
      ['Alege rolul','Choose your role'],
      ['Alege nivelul','Choose your level'],
      ['Nivel de experiență','Experience level'],
      ['Nivel','Level'],
      ['Limbă','Language'],
      ['Elev / Student','Student'],
      ['Contabil','Accountant'],
      ['Analist de date','Data Analyst'],
      ['Specialist HR','HR Specialist'],
      ['Analist vânzări','Sales Analyst'],
      ['Manager de proiect','Project Manager'],
      ['Asistent administrativ','Admin Assistant'],
      ['Antreprenor','Entrepreneur'],
      ['Vreau să învăț Excel pentru școală','I want to learn Excel for school'],
      ['Vreau să-mi fac bugetul','I want to build my budget'],
      ['Vreau să aplic la joburi','I want to apply for jobs'],
      ['Vreau să înțeleg rapoarte','I want to understand reports'],
      ['Școală','School'],
      ['Buget','Budget'],
      ['Joburi','Jobs'],
      ['Rapoarte','Reports'],
      ['Bun venit în Excel Quest','Welcome to Excel Quest'],
      ['Configurează profilul tău','Set up your profile'],
      ['Spune-ne despre tine','Tell us about you'],
      ['Personalizează traseul de învățare','Personalize your learning path'],
      ['Creează profilul','Create profile'],
      ['Salvează profilul','Save profile'],
      ['Să începem','Let’s start'],
      ['Misiunea zilei','Daily Quest'],
      ['Formula zilei','Formula of the Day'],
      ['Shortcut-ul zilei','Shortcut of the Day'],
      ['Coada de recapitulare','Review Queue'],
      ['Panou principal','Dashboard'],
      ['Lecții','Lessons'],
      ['Proiecte','Projects'],
      ['Realizări','Achievements'],
      ['Setări','Settings'],
      ['Profil','Profile'],
      ['Progres','Progress'],
      ['Portofoliu','Portfolio'],
      ['Caută','Search'],
      ['Caută lecții, formule...','Search lessons, formulas...']
    ])
  };

  const days = {
    ro: new Map([
      ['Mon','Lun'], ['Tue','Mar'], ['Wed','Mie'], ['Thu','Joi'], ['Fri','Vin'], ['Sat','Sâm'], ['Sun','Dum'],
      ['Mo','Lu'], ['Tu','Ma'], ['We','Mi'], ['Th','Jo'], ['Fr','Vi'], ['Sa','Sâ'], ['Su','Du'],
      ['Monday','Luni'], ['Tuesday','Marți'], ['Wednesday','Miercuri'], ['Thursday','Joi'], ['Friday','Vineri'], ['Saturday','Sâmbătă'], ['Sunday','Duminică']
    ]),
    en: new Map([
      ['Lun','Mon'], ['Mar','Tue'], ['Mie','Wed'], ['Joi','Thu'], ['Vin','Fri'], ['Sâm','Sat'], ['Dum','Sun'],
      ['Lu','Mo'], ['Ma','Tu'], ['Mi','We'], ['Jo','Th'], ['Vi','Fr'], ['Sâ','Sa'], ['Du','Su'],
      ['Luni','Monday'], ['Marți','Tuesday'], ['Miercuri','Wednesday'], ['Joi','Thursday'], ['Vineri','Friday'], ['Sâmbătă','Saturday'], ['Duminică','Sunday']
    ])
  };

  const helperText = {
    ro: 'Alege limba și completează formularul. Datele rămân salvate local în browser.',
    en: 'Choose a language and complete the form. Your data stays saved locally in this browser.'
  };

  function normalize(value){ return String(value || '').replace(/\s+/g,' ').trim(); }

  function rememberOriginal(el, attr){
    const key = attr === 'text' ? 'i18nOriginalText' : 'i18nOriginal' + attr.replace(/[-:]/g,'_');
    if(!el.dataset[key]){
      const value = attr === 'text' ? normalize(el.textContent) : normalize(el.getAttribute(attr));
      if(value) el.dataset[key] = value;
    }
    return el.dataset[key] || '';
  }

  function translateValue(value){
    const key = normalize(value);
    return dictionary[currentLang].get(key) || days[currentLang].get(key) || key;
  }

  function translateElement(el){
    if(!el || el.closest?.('[data-language-switcher]')) return;

    if(el.children.length === 0){
      const original = rememberOriginal(el, 'text');
      const translated = translateValue(original);
      if(translated && translated !== normalize(el.textContent)) el.textContent = translated;
    } else {
      el.childNodes.forEach(child => {
        if(child.nodeType !== Node.TEXT_NODE) return;
        const key = normalize(child.nodeValue);
        const translated = translateValue(key);
        if(translated && translated !== key) child.nodeValue = child.nodeValue.replace(key, translated);
      });
    }

    ['placeholder','aria-label','title','value'].forEach(attr => {
      if(!el.hasAttribute || !el.hasAttribute(attr)) return;
      if(attr === 'value' && !['INPUT','BUTTON'].includes(el.tagName)) return;
      const original = rememberOriginal(el, attr);
      const translated = translateValue(original);
      if(translated) el.setAttribute(attr, translated);
    });

    if(el.tagName === 'OPTION'){
      const original = rememberOriginal(el, 'text');
      const translated = translateValue(original);
      if(translated) el.textContent = translated;
    }
  }

  function localizeDays(){
    document.querySelectorAll('.streak-dot, [class*="day"], [class*="Day"], [data-day], [aria-label*="day"], [aria-label*="zi"]').forEach(el => {
      const original = rememberOriginal(el, 'text');
      const translated = days[currentLang].get(normalize(original)) || dictionary[currentLang].get(normalize(original));
      if(translated && el.children.length === 0) el.textContent = translated;
    });
  }

  function addLanguageSelector(){
    if(document.querySelector('[data-language-switcher]')) return;
    const host = document.createElement('div');
    host.dataset.languageSwitcher = '1';
    host.style.cssText = 'position:fixed;z-index:99999;right:14px;top:72px;display:flex;gap:6px;padding:6px;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:rgba(7,12,22,.86);backdrop-filter:blur(12px);box-shadow:0 10px 30px rgba(0,0,0,.35)';
    host.innerHTML = `
      <button type="button" data-lang="ro" style="border:0;border-radius:999px;padding:7px 10px;font-weight:800;cursor:pointer">RO</button>
      <button type="button" data-lang="en" style="border:0;border-radius:999px;padding:7px 10px;font-weight:800;cursor:pointer">EN</button>
    `;
    document.body.appendChild(host);
    host.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    updateSwitcherState();
  }

  function updateSwitcherState(){
    document.querySelectorAll('[data-language-switcher] button').forEach(btn => {
      const active = btn.dataset.lang === currentLang;
      btn.style.background = active ? '#34d399' : 'rgba(255,255,255,.06)';
      btn.style.color = active ? '#04110a' : '#e8ecf8';
    });
  }

  function addLanguageFieldToStartForm(){
    const modal = document.querySelector('.modal-box, [role="dialog"], .onboarding, .start-form, form');
    if(!modal || modal.querySelector('[data-start-language-field]')) return;

    const field = document.createElement('label');
    field.dataset.startLanguageField = '1';
    field.style.cssText = 'display:block;margin:12px 0;color:var(--text-2,#cbd5e1);font-size:.9rem';
    field.innerHTML = `
      <span data-language-label style="display:block;margin-bottom:6px;font-weight:800">${currentLang === 'ro' ? 'Limbă' : 'Language'}</span>
      <select data-language-select style="width:100%;padding:10px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:#101626;color:#e8ecf8">
        <option value="ro">Română</option>
        <option value="en">English</option>
      </select>
    `;
    const firstInput = modal.querySelector('input, select, textarea');
    if(firstInput && firstInput.parentElement) firstInput.parentElement.insertBefore(field, firstInput);
    else modal.prepend(field);

    const select = field.querySelector('[data-language-select]');
    select.value = currentLang;
    select.addEventListener('change', () => setLanguage(select.value));
  }

  function updateLanguageFields(){
    document.querySelectorAll('[data-language-select]').forEach(select => { select.value = currentLang; });
    document.querySelectorAll('[data-language-label]').forEach(label => { label.textContent = currentLang === 'ro' ? 'Limbă' : 'Language'; });
  }

  function addHelperNote(){
    const modal = document.querySelector('.modal-box, [role="dialog"], .onboarding, .start-form, form');
    if(!modal) return;
    let note = modal.querySelector('[data-language-helper-note]');
    if(!note){
      note = document.createElement('p');
      note.dataset.languageHelperNote = '1';
      note.style.cssText = 'margin-top:10px;color:var(--text-3,#94a3b8);font-size:.78rem;line-height:1.45';
      modal.appendChild(note);
    }
    note.textContent = helperText[currentLang];
  }

  function localizeAll(){
    if(applying) return;
    applying = true;
    document.documentElement.lang = currentLang;
    addLanguageSelector();
    document.querySelectorAll('body *').forEach(translateElement);
    localizeDays();
    addLanguageFieldToStartForm();
    addHelperNote();
    updateLanguageFields();
    updateSwitcherState();
    applying = false;
  }

  function setLanguage(lang){
    currentLang = lang === 'en' ? 'en' : 'ro';
    localStorage.setItem(STORAGE_KEY, currentLang);
    localizeAll();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', localizeAll);
  else localizeAll();

  const observer = new MutationObserver(() => localizeAll());
  observer.observe(document.documentElement, {childList:true, subtree:true, characterData:true, attributes:true, attributeFilter:['placeholder','aria-label','title','value']});
})();
