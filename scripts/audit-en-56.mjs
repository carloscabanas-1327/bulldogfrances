// Audit 56 English pages without modifying source files or publishing.
// Run from repository root: node scripts/audit-en-56.mjs [--json]
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const read = p => readFileSync(p, 'utf8');
const readJson = p => JSON.parse(read(p));
const dirs = [
  ['en-guides', 'editorial/en/guides'],
  ['imported', 'editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028'],
];
const nutritionDir = 'editorial/nutrition';
const register = readJson('data/fuentes/registro.json').fuentes;
const rows = [];
const basename = ' | BulldogFrances.com';
const norm = html => html.replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
function inspect(type,slug,folder,meta,htmlPath){
  const article = read(htmlPath);
  const primary = meta.primaryKeyword || '';
  const desc = meta.description || '';
  const rendered = (meta.seoTitle || meta.title || '') + basename;
  const paras = [...article.matchAll(/<p(?:\s+[^>]*)?>([\s\S]*?)<\/p>/gi)];
  const lead = norm(((paras[0] || [,''])[1]).replace(/<sup\b[^>]*>[\s\S]*?<\/sup>/gi,''));
  const first = (lead.match(/^[\s\S]*?[.!?](?=\s|$)/) || [lead])[0];
  const ids = [...article.matchAll(/id="ref-(\d+)"/g)].map(m=>m[1]);
  const cites = [...article.matchAll(/href="#ref-(\d+)"/g)].map(m=>m[1]);
  const sources = register.filter(f => (f.usos || []).some(u => u.articulo === htmlPath));
  const image = type==='nutrition' ? 'external_unsplash_template' : (meta.image || '');
  const errors = [], warnings = [];
  if(rendered.length>56) errors.push('title_over_56_internal_limit');
  if(desc.length<120 || desc.length>158) errors.push('description_out_of_internal_range');
  if(cites.some(n=>!ids.includes(n))) errors.push('broken_citation_anchor');
  if(new Set(ids).size !== ids.length) errors.push('duplicate_reference_anchor');
  if(sources.length===0) warnings.push('no_source_registry_use');
  if(!primary) warnings.push('keyword_not_declared');
  if(first.length>140) warnings.push('opening_sentence_over_140');
  if(primary && !lead.toLowerCase().includes(primary.toLowerCase())) warnings.push('exact_keyword_not_in_first_paragraph');
  if(!image) warnings.push('hero_missing');
  if(image==='external_unsplash_template') warnings.push('third_party_hotlink_rights_and_relevance_pending');
  if(image.startsWith('/')&&!existsSync(join('public',image.slice(1)))) errors.push('declared_hero_missing_from_public');
  if(image.startsWith('/')&&!article.includes(image)) warnings.push('declared_hero_not_in_body');
  if(image.startsWith('/')&&!meta.imageAlt) warnings.push('image_alt_metadata_missing');
  const internal = [...article.matchAll(/href="(\/en\/[^"]+)"/g)].map(m=>m[1]);
  rows.push({type,slug,htmlPath,titleLen:rendered.length,descLen:desc.length,firstLen:first.length,sourceCount:sources.length,refs:ids.length,image:image||'missing',internalLinks:internal,errors,warnings});
}
for(const [kind,root] of dirs){
  for(const ent of readdirSync(root,{withFileTypes:true}).filter(d=>d.isDirectory())){
    const folder=join(root,ent.name),metaPath=join(folder,'meta.json'),articlePath=join(folder,'ARTICLE.html');
    if(!existsSync(metaPath)||!existsSync(articlePath))continue;
    inspect(kind,ent.name,folder,readJson(metaPath),articlePath);
  }
}
for(const ent of readdirSync(nutritionDir,{withFileTypes:true}).filter(d=>d.isDirectory())){
  const folder=join(nutritionDir,ent.name),metaPath=join(folder,'meta.json'),articlePath=join(folder,'ARTICLE.en.html');
  if(!existsSync(metaPath)||!existsSync(articlePath))continue;
  inspect('nutrition',ent.name,folder,readJson(metaPath).en,articlePath);
}
const expected=56;
if(rows.length!==expected) throw new Error('Unexpected EN page count: '+rows.length+' (expected '+expected+')');
const errors=rows.flatMap(r=>r.errors.map(e=>({slug:r.slug,error:e})));
const warnings=rows.flatMap(r=>r.warnings.map(w=>({slug:r.slug,warning:w})));
const summary={pages:rows.length,sourceUses:rows.reduce((n,r)=>n+r.sourceCount,0),localHero:rows.filter(r=>r.image.startsWith('/')).length,missingHero:rows.filter(r=>r.image==='missing').length,externalHero:rows.filter(r=>r.type==='nutrition').length,errors:errors.length,warnings:warnings.length};
if(process.argv.includes('--json')) console.log(JSON.stringify({summary,rows},null,2));
else {
  console.log('SEO2 EN inventory: '+JSON.stringify(summary));
  for(const e of errors)console.error('ERROR '+e.slug+': '+e.error);
  for(const w of warnings)console.warn('WARN '+w.slug+': '+w.warning);
  console.log('This tests repository structure only: NOT factual verification, Google KP, Cloudflare, accessibility or live URLs.');
}
if(errors.length)process.exitCode=1;
