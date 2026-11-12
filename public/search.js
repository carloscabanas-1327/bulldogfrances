// Floating site search: shares the full-text engine with /en/search/ and /es/search/.
// Loaded as a module only on pages that use the floating search interface.
import { loadSearchIndex, searchCatalog } from '/search-core.js';

const LANG = (document.documentElement.lang || 'en').slice(0,2) === 'es' ? 'es' : 'en';
const T = LANG === 'es'
  ? {open:'Abrir búsqueda',title:'Buscar',dialog:'Buscar artículos',close:'Cerrar',placeholder:'Buscar guías y su contenido',submit:'Buscar',empty:'Escribe una palabra.',none:'No se encontraron resultados.',loading:'Cargando índice…',failed:'No se pudo cargar el buscador.',results:n=>n+(n===1?' resultado':' resultados'),all:'Ver todos los resultados'}
  : {open:'Open search',title:'Search',dialog:'Search articles',close:'Close',placeholder:'Search guides and article text',submit:'Search',empty:'Enter a search term.',none:'No results found.',loading:'Loading search index…',failed:'Search index unavailable.',results:n=>n+(n===1?' result':' results'),all:'See all results'};
const root = document.createElement('div');
root.id = 'bf-search';
root.innerHTML = '<button class="trigger" type="button" aria-label="'+T.open+'" title="'+T.title+'">⌕</button>'+
  '<div class="overlay" hidden><div class="panel" role="dialog" aria-modal="true" aria-label="'+T.dialog+'">'+
  '<div class="head"><strong>'+T.title+'</strong><button class="close" type="button" aria-label="'+T.close+'">×</button></div>'+
  '<form class="search-form" role="search"><input type="search" maxlength="180" placeholder="'+T.placeholder+'" aria-label="'+T.dialog+'" required>'+
  '<button class="submit" type="submit">'+T.submit+'</button></form><div class="results" role="status" aria-live="polite"></div></div></div>';
document.body.append(root);
const trigger = root.querySelector('.trigger');
const closeButton = root.querySelector('.close');
const overlay = root.querySelector('.overlay');
const panel = root.querySelector('.panel');
const form = root.querySelector('.search-form');
const input = root.querySelector('input');
const results = root.querySelector('.results');
let index = null;
let opener = null;
let timer = null;

function render() {
  results.replaceChildren();
  const q = input.value.trim();
  if (!q) { results.textContent = T.empty; return; }
  if (!index) { results.textContent = T.loading; return; }
  const found = searchCatalog(index, q, LANG);
  if (!found.length) { results.textContent = T.none; return; }
  const count = document.createElement('p');
  count.textContent = T.results(found.length);
  results.append(count);
  const fragment = document.createDocumentFragment();
  for (const {item,excerpt} of found.slice(0, 15)) {
    const a = document.createElement('a');
    a.href = item.url;
    const title = document.createElement('strong'); title.textContent = item.title;
    const category = document.createElement('small'); category.textContent = item.category || '';
    const snippet = document.createElement('small'); snippet.textContent = (excerpt || item.summary || '').slice(0, 170);
    a.append(title,category,snippet);
    fragment.append(a);
  }
  results.append(fragment);
  if (found.length > 15) {
    const all = document.createElement('a');
    all.href = '/' + LANG + '/search/?q=' + encodeURIComponent(q);
    all.textContent = T.all + ' (' + found.length + ')';
    all.className = 'all-results';
    results.append(all);
  }
}
function close() {
  if (overlay.hidden) return;
  overlay.hidden = true;
  (opener || trigger).focus();
}
async function open() {
  opener = document.activeElement;
  overlay.hidden = false;
  input.focus();
  if (index) { render(); return; }
  results.textContent = T.loading;
  try {
    index = await loadSearchIndex();
    if (!overlay.hidden) render();
  } catch (error) {
    if (!overlay.hidden) results.textContent = T.failed;
  }
}
trigger.addEventListener('click',open);
closeButton.addEventListener('click',close);
overlay.addEventListener('click',event=>{if(event.target===overlay)close();});
form.addEventListener('submit',event=>{event.preventDefault();clearTimeout(timer);render();});
input.addEventListener('input',()=>{
  clearTimeout(timer);
  timer = setTimeout(render,150);
});
document.addEventListener('keydown',event=>{
  if (overlay.hidden) return;
  if (event.key==='Escape') { event.preventDefault(); close(); }
});
panel.addEventListener('keydown',event=>{
  if (event.key!=='Tab') return;
  const controls=[...panel.querySelectorAll('button,input,a[href]')].filter(x=>!x.disabled);
  const first=controls[0],last=controls[controls.length-1];
  if (event.shiftKey && document.activeElement===first) {event.preventDefault();last.focus();}
  else if(!event.shiftKey && document.activeElement===last) {event.preventDefault();first.focus();}
});
