// Site-wide search button. Labels and results follow the page language (<html lang>),
// so the English edition only shows English pages and the Spanish edition only Spanish ones.
const LANG=(document.documentElement.lang||'en').slice(0,2)==='es'?'es':'en';
const T={
 en:{open:'Open search',title:'Search',dialog:'Search articles',close:'Close',placeholder:'Search guides',submit:'Search',empty:'Enter a search term',unavailable:'Search index unavailable',none:'No results found',results:n=>n+(n===1?' result':' results'),loading:'Loading…',ready:'Type a term and press Search or Enter',failed:'Search unavailable'},
 es:{open:'Abrir búsqueda',title:'Buscar',dialog:'Buscar artículos',close:'Cerrar',placeholder:'Buscar guías',submit:'Buscar',empty:'Escribe un término',unavailable:'Índice no disponible',none:'No se encontraron resultados',results:n=>n+(n===1?' resultado':' resultados'),loading:'Cargando…',ready:'Escribe un término y presiona Buscar o Enter',failed:'No se pudo cargar la búsqueda'}
}[LANG];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const root=document.createElement('div');
root.id='bf-search';
root.innerHTML='<button class="trigger" type="button" aria-label="'+esc(T.open)+'" title="'+esc(T.title)+'">⌕</button><div class="overlay" hidden><div class="panel" role="dialog" aria-modal="true" aria-label="'+esc(T.dialog)+'"><div class="head"><strong>'+esc(T.title)+'</strong><button class="close" type="button" aria-label="'+esc(T.close)+'">×</button></div><form class="search-form"><input type="search" placeholder="'+esc(T.placeholder)+'" aria-label="'+esc(T.dialog)+'" required><button class="submit" type="submit">'+esc(T.submit)+'</button></form><div class="results" role="status" aria-live="polite"></div></div></div>';
document.body.append(root);
const overlay=root.querySelector('.overlay');
const input=root.querySelector('input');
const results=root.querySelector('.results');
let index=null;
const norm=s=>String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
function search(){
 results.replaceChildren();
 const q=norm(input.value.trim());
 if(!q){results.textContent=T.empty;return}
 if(!index){results.textContent=T.unavailable;return}
 const words=q.split(/\s+/);
 const found=index.filter(x=>x.lang===LANG&&words.every(w=>norm(x.title+' '+x.category+' '+(x.summary||'')+' '+(x.keywords||'')).includes(w))).slice(0,30);
 if(!found.length){results.textContent=T.none;return}
 const count=document.createElement('p');count.textContent=T.results(found.length);results.append(count);
 for(const item of found){const a=document.createElement('a');a.href=item.url;const title=document.createElement('strong');title.textContent=item.title;const detail=document.createElement('small');detail.textContent=item.category||'';a.append(title,detail);results.append(a)}
}
root.querySelector('.trigger').addEventListener('click',async()=>{
 overlay.hidden=false;input.focus();
 if(!index){results.textContent=T.loading;try{const response=await fetch('/search-index.json',{cache:'no-cache'});if(!response.ok)throw Error('HTTP '+response.status);index=await response.json();results.textContent=T.ready}catch(e){results.textContent=T.failed}}
});
root.querySelector('.search-form').addEventListener('submit',e=>{e.preventDefault();search()});
root.querySelector('.close').addEventListener('click',()=>overlay.hidden=true);
overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape')overlay.hidden=true});
