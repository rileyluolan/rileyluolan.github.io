type FilterState = { query: string; category: string; tag: string };

const init = () => {
  const root = document.querySelector<HTMLElement>('[data-notes-browser]');
  if (!root) return;
  const search = root.querySelector<HTMLInputElement>('[data-search-input]')!;
  const categoryButtons = [...root.querySelectorAll<HTMLButtonElement>('[data-category-filter]')];
  const tagButtons = [...root.querySelectorAll<HTMLButtonElement>('[data-tag-filter]')];
  const notes = [...root.querySelectorAll<HTMLElement>('[data-note]')];
  const empty = root.querySelector<HTMLElement>('[data-filter-empty]')!;
  const clear = root.querySelector<HTMLButtonElement>('[data-clear-filters]')!;
  const count = root.querySelector<HTMLElement>('[data-result-count]')!;
  const urlTag = new URLSearchParams(location.search).get('tag') || 'All';
  const state: FilterState = { query: '', category: 'All', tag: urlTag };

  const render = () => {
    let visible = 0;
    for (const note of notes) {
      const matchesQuery = !state.query || (note.dataset.search || '').includes(state.query);
      const matchesCategory = state.category === 'All' || note.dataset.category === state.category;
      const matchesTag = state.tag === 'All' || (note.dataset.tags || '').split('|').includes(state.tag.toLowerCase());
      const show = matchesQuery && matchesCategory && matchesTag;
      note.hidden = !show;
      if (show) visible++;
    }
    categoryButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.categoryFilter === state.category)));
    tagButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.tagFilter === state.tag)));
    empty.hidden = visible !== 0;
    count.textContent = `${visible} ${visible === 1 ? 'note' : 'notes'}`;
    clear.hidden = !state.query && state.category === 'All' && state.tag === 'All';
  };
  search.addEventListener('input', () => { state.query = search.value.trim().toLowerCase(); render(); });
  categoryButtons.forEach(button => button.addEventListener('click', () => { state.category = button.dataset.categoryFilter || 'All'; render(); }));
  tagButtons.forEach(button => button.addEventListener('click', () => { state.tag = button.dataset.tagFilter || 'All'; render(); }));
  clear.addEventListener('click', () => { search.value = ''; Object.assign(state, { query: '', category: 'All', tag: 'All' }); history.replaceState({}, '', location.pathname); render(); search.focus(); });
  render();
};

document.addEventListener('astro:page-load', init);
init();
