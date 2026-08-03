(() => {
  const library = BHajAN_LIBRARY;
  const list = document.querySelector('#programme-list');
  const view = document.querySelector('#lyrics-view');
  const empty = document.querySelector('#empty-state');
  const content = document.querySelector('#lyrics-content');
  const search = document.querySelector('#search');
  let activeId = null;
  let romanVisible = true;
  let size = 1;

  const escapeText = value => String(value || '');
  function create(tag, className, text) { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = escapeText(text); return node; }
  function renderList(query = '') {
    const words = query.trim().toLocaleLowerCase(); list.replaceChildren();
    library.filter(item => !words || [item.title,item.subtitle,item.category,...item.verses.map(v => `${v.dev} ${v.roman || ''}`)].join(' ').toLocaleLowerCase().includes(words)).forEach(item => {
      const button = create('button', 'programme-item'); button.type = 'button'; button.dataset.id = item.id; button.setAttribute('aria-current', item.id === activeId ? 'true' : 'false');
      button.append(create('small', '', String(item.programme).padStart(2, '0'))); const label = create('span', '', item.title); label.append(create('em', '', item.category)); button.append(label); button.addEventListener('click', () => select(item.id)); list.append(button);
    });
    if (!list.childElementCount) list.append(create('p', 'empty-search', 'No matching prayer yet.'));
  }
  function select(id) {
    const item = library.find(entry => entry.id === id); if (!item) return;
    activeId = id; empty.hidden = true; view.hidden = false;
    document.querySelector('#item-category').textContent = item.category;
    document.querySelector('#item-number').textContent = `In programme · ${String(item.programme).padStart(2, '0')}`;
    document.querySelector('#item-title').textContent = item.title;
    document.querySelector('#item-subtitle').textContent = item.subtitle || '';
    const note = document.querySelector('#item-note'); note.hidden = !item.note; note.textContent = item.note || '';
    const source = document.querySelector('#source-note'); source.replaceChildren();
    if (item.officialUrl) { const link = create('a', '', item.source || 'Source / recording'); link.href = item.officialUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; source.append(link); }
    else source.textContent = item.source || 'Organiser-approved text'; content.replaceChildren();
    if (!item.verses.length) content.append(create('p', 'placeholder', 'This programme entry is ready. Paste the approved lyric into content.js before the gathering and it will display here in the same TV-friendly layout.'));
    item.verses.forEach((verse, index) => { const section = create('section', verse.label ? `verse verse-${verse.label.toLowerCase()}` : 'verse'); section.setAttribute('aria-label', verse.label || `Verse ${index + 1}`); if (verse.label) section.append(create('p', 'verse-label', verse.label)); if (verse.dev) section.append(create('div', 'devanagari', verse.dev)); if (verse.roman) { const roman = create('div', 'roman', verse.roman); roman.hidden = !romanVisible; section.append(roman); } content.append(section); });
    renderList(search.value); document.querySelector('.lyrics-panel').scrollIntoView({behavior:'smooth', block:'start'});
  }
  search.addEventListener('input', event => renderList(event.target.value));
  document.querySelector('#toggle-roman').addEventListener('click', event => { romanVisible = !romanVisible; event.currentTarget.setAttribute('aria-pressed', String(!romanVisible)); document.querySelectorAll('.roman').forEach(node => { node.hidden = !romanVisible; }); });
  document.querySelector('#font-up').addEventListener('click', () => { size = Math.min(1.45, +(size + .1).toFixed(2)); document.documentElement.style.setProperty('--size', size); });
  document.querySelector('#font-down').addEventListener('click', () => { size = Math.max(.8, +(size - .1).toFixed(2)); document.documentElement.style.setProperty('--size', size); });
  document.querySelector('#fullscreen').addEventListener('click', async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.querySelector('.lyrics-panel').requestFullscreen(); } catch (_) {} });
  document.querySelector('#exit-fullscreen').addEventListener('click', async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); } catch (_) {} });
  document.querySelector('#start-programme').addEventListener('click', () => select(library[0].id));
  document.querySelector('#open-programme').addEventListener('click', () => document.querySelector('.app-layout').scrollIntoView({behavior:'smooth'}));
  renderList();
})();
