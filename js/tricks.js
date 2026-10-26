(() => {
  'use strict';

  const byId = id => document.getElementById(id);
  const menus = ['choix-180', 'choix-shuv', 'choix-flip'].map(byId);
  const stanceMenu = byId('choix-stance');
  const image = byId('trick-image');
  const heading = byId('nom-trick-ecran');
  const message = byId('message-erreur');
  const main = typeof dic_main_tricks === 'undefined' ? {} : dic_main_tricks;
  const other = typeof dic_other_tricks === 'undefined' ? {} : dic_other_tricks;
  const unlanded = typeof liste_never_done === 'undefined' ? [] : liste_never_done;
  const initialName = heading.textContent.trim();
  const buttons = [];
  let selection = null;

  const hasOwn = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const stanceIndex = () => stanceMenu.value === 'fakie' ? 1 : 0;
  const imageId = (data, index) => data?.[1]?.[index];
  const hasImage = id => typeof id === 'string' && id.trim() !== '' && id.trim().toLowerCase() !== 'none';
  const available = (data, index = stanceIndex()) => hasImage(imageId(data, index));
  const skeleton = () => menus.map(menu => menu.value).join('');

  // On découpe une fois les clés en composantes exactes, sans recherche de sous-chaînes.
  const entries = Object.entries(main).map(([key, data]) => ({
    key, data, parts: new Set(key.split('/').filter(Boolean).map(part => part + '/'))
  }));

  function showSection(help) {
    byId('jeu').hidden = help;
    byId('consignes').hidden = !help;
    document.querySelectorAll('.button_section').forEach((button, index) => {
      button.setAttribute('aria-pressed', String(index === (help ? 1 : 0)));
    });
  }

  function showError(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.hidden = false;
  }

  function updateHighlight() {
    for (const { button, group, key } of buttons) {
      const selected = selection?.group === group && selection.key === key;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    }
  }

  function chooseAvailableStance(data) {
    if (!available(data) && available(data, 1 - stanceIndex())) {
      stanceMenu.value = stanceIndex() === 0 ? 'fakie' : 'normal';
    }
  }

  // Chaque menu ignore sa valeur actuelle et garde les deux autres sélections.
  // Une valeur vide dans un autre menu reste libre, pour proposer des compléments.
  function updateSuggestions() {
    const values = menus.map(menu => menu.value);
    const hasSelection = values.some(Boolean);
    const possibleEntries = entries.filter(entry => available(entry.data));
    menus.forEach((menu, menuIndex) => {
      const shortcuts = byId(menu.id + '-options');
      shortcuts.replaceChildren();
      const required = menus.filter((_, index) => index !== menuIndex)
        .map(otherMenu => otherMenu.value).filter(Boolean);
      for (const option of menu.options) {
        option.classList.remove('case-jaune', 'case-verte', 'case-rouge', 'option-directe');
        const candidateValues = values.map((value, index) => index === menuIndex ? option.value : value);
        const candidateKey = candidateValues.join('');
        const direct = candidateKey !== '' && hasOwn(main, candidateKey) && available(main[candidateKey]);
        if (option.value === '') {
          option.classList.add('case-jaune');
        } else {
          const possible = possibleEntries.some(entry =>
            entry.parts.has(option.value) && required.every(part => entry.parts.has(part))
          );
          option.classList.add(possible ? 'case-verte' : 'case-rouge');
        }
        if (direct) option.classList.add('option-directe');
        // Les boutons ne proposent que des changements donnant immédiatement un trick.
        // Ils conservent exactement les deux autres valeurs et la stance courante.
        if (hasSelection && direct && option.value !== menu.value) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = 'compatible-option';
          button.textContent = option.textContent.trim();
          button.title = (stanceMenu.value === 'fakie' ? 'fakie ' : '') + main[candidateKey][0];
          button.addEventListener('click', () => {
            menu.value = option.value;
            fromMenus();
            menu.focus({ preventScroll: true });
          });
          shortcuts.appendChild(button);
        }
        // Les options rouges restent sélectionnables, comme dans la version originale.
      }
      shortcuts.hidden = shortcuts.children.length === 0;
    });
  }

  function display(data, key = '') {
    message.hidden = true;
    message.textContent = '';
    if (!data) {
      selection = null;
      heading.textContent = '';
      image.hidden = true;
      image.removeAttribute('src');
      showError('! ' + key + ' : This trick is not defined yet !', 'coral');
      updateHighlight();
      return;
    }
    const name = key === '' && selection?.group === 'main'
      ? data[0]
      : (stanceMenu.value === 'fakie' ? 'fakie ' : '') + data[0];
    const emphasis = document.createElement('em');
    emphasis.style.fontSize = '20px';
    emphasis.textContent = name;
    heading.replaceChildren(emphasis);
    image.alt = name;
    image.title = name;
    const id = imageId(data, stanceIndex());
    if (hasImage(id)) {
      image.hidden = false;
      const url = 'https://lh3.googleusercontent.com/pw/' + id;
      if (image.getAttribute('src') !== url) image.src = url;
    } else {
      image.hidden = true;
      image.removeAttribute('src');
      showError(stanceMenu.value === 'normal'
        ? '=> The trick is only available in fakie stance'
        : '=> The trick is only available in normal stance', 'yellow');
    }
    updateHighlight();
  }

  function fromMenus() {
    const key = skeleton();
    selection = hasOwn(main, key) ? { group: 'main', key } : null;
    updateSuggestions();
    display(hasOwn(main, key) ? main[key] : null, key);
  }

  function selectFromList(group, key) {
    const data = (group === 'main' ? main : other)[key];
    chooseAvailableStance(data);
    if (group === 'main') {
      const parts = new Set(key.split('/').filter(Boolean).map(part => part + '/'));
      for (const menu of menus) {
        menu.value = Array.from(menu.options).find(option => option.value && parts.has(option.value))?.value || '';
      }
    } else {
      menus.forEach(menu => { menu.value = ''; });
    }
    selection = { group, key };
    updateSuggestions();
    display(data, key);
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  function addList(containerId, dictionary, group) {
    const container = byId(containerId);
    for (const [key, data] of Object.entries(dictionary)) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'clickable-label';
      // On conserve les intitulés des deux listes exactement comme auparavant.
      button.textContent = group === 'main' ? data[0] : key;
      if (!available(data, 0) && available(data, 1)) button.classList.add('green');
      else if (available(data, 0) && !available(data, 1)) button.classList.add('blue');
      button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => selectFromList(group, key));
      buttons.push({ button, group, key });
      container.appendChild(button);
    }
  }

  const sectionButtons = document.querySelectorAll('.button_section');
  sectionButtons[0].addEventListener('click', () => showSection(false));
  sectionButtons[1].addEventListener('click', () => showSection(true));
  menus.forEach(menu => menu.addEventListener('change', fromMenus));
  stanceMenu.addEventListener('change', () => {
    updateSuggestions();
    if (selection?.group === 'other') display(other[selection.key], selection.key);
    else fromMenus();
  });
  byId('reset').addEventListener('click', () => {
    stanceMenu.value = 'normal';
    menus.forEach(menu => { menu.value = ''; });
    fromMenus();
  });
  addList('main-tricks-container', main, 'main');
  addList('other-tricks-container', other, 'other');
  for (const name of unlanded) {
    const label = document.createElement('label');
    label.textContent = name;
    byId('never-done').appendChild(label);
  }

  showSection(false);
  if (hasOwn(main, '')) fromMenus();
  else {
    heading.textContent = initialName;
    image.hidden = true;
    message.hidden = true;
    updateSuggestions();
  }
})();
