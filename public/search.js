const root=document.createElement('div');
root.id='bf-search';
root.innerHTML='<button class="trigger" type="button" aria-label="Abrir búsqueda / Open search" title="Buscar / Search">⌕</button><div class="overlay" hidden><div class="panel" role="dialog" aria-modal="true" aria-label="Buscar artículos / Search articles"><div class="head"><strong>Buscar / Search</strong><button class="close" type="button" aria-label="Cerrar">×</button></div><form class="search-form"><input type="search" placeholder="Buscar / Search" aria-label="Buscar artículos" required><button class="submit" type="submit">Buscar / Search</button></form><div class="results" role="status" aria-live="polite"></div></div></div>';
document.body.append(root);
const overlay=root.querySelector('.overlay');
const input=root.querySelector('input');
const results=root.querySelector('.results');
let index=null;
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function search(){
 results.replaceChildren();
 const q=norm(input.value.trim());
 if(!q){results.textContent='Escribí un término / Enter a search term';return}
 if(!index){results.textContent='Índice no disponible / Search index unavailable';return}
 const words=q.split(/\s+/);
 const found=index.filter(x=>words.every(w=>norm(x.title+' '+x.category+' '+(x.summary||'')+' '+(x.keywords||'')).includes(w))).slice(0,30);
 if(!found.length){results.textContent='No se encontraron resultados / No results found';return}
 const count=document.createElement('p');count.textContent=found.length+' resultados / results';results.append(count);
 for(const item of found){const a=document.createElement('a');a.href=item.url;const title=document.createElement('strong');title.textContent=item.title;const detail=document.createElement('small');detail.textContent=(item.lang==='es'?'Español':'English')+' · '+item.category;a.append(title,detail);results.append(a)}
}
root.querySelector('.trigger').addEventListener('click',async()=>{
 overlay.hidden=false;input.focus();
 if(!index){results.textContent='Cargando / Loading…';try{const response=await fetch('/search-index.json',{cache:'no-cache'});if(!response.ok)throw Error('HTTP '+response.status);index=await response.json();results.textContent='Escribí un término y presioná Buscar o Enter / Type and press Search or Enter'}catch(e){results.textContent='No se pudo cargar la búsqueda / Search unavailable'}}
});
root.querySelector('.search-form').addEventListener('submit',e=>{e.preventDefault();search()});
root.querySelector('.close').addEventListener('click',()=>overlay.hidden=true);
overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape')overlay.hidden=true});
