#!/usr/bin/env node
// Publication QA for the built Astro site. Read-only: it never deploys or mutates content.
// Run after: npm ci && npm run build && node scripts/audit-technical-seo.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const DIST=path.join(ROOT,'dist');
const SITE='https://www.bulldogfrances.com';
const problems=[], warnings=[], routes=new Set(), pairings=[];
const note=(arr,code,detail)=>arr.push({code,detail});
const read=p=>fs.readFileSync(path.join(ROOT,p),'utf8');
const isFile=p=>fs.existsSync(path.join(ROOT,p));
const directories=p=>fs.readdirSync(path.join(ROOT,p),{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>x.name);
const addRoute=u=>{if(routes.has(u))note(problems,'duplicate-route',u);routes.add(u);};
const htmlPath=u=>path.join(DIST,u==='/'?'index.html':u.replace(/^\/|\/$/g,'')+'/index.html');
const getAttr=(tag,name)=>{const m=tag.match(new RegExp('\\b'+name+'=["\\x27]([^"\\x27]+)["\\x27]','i'));return m?.[1]||null;};
const tags=(html,name)=>[...html.matchAll(new RegExp('<'+name+'\\b[^>]*>','gi'))].map(x=>x[0]);
const mapping={};
const mappingSource=read('src/data/frenchBulldogGuides.js').split('const mapping = {')[1]?.split('};')[0]||'';
for(const m of mappingSource.matchAll(/'([^']+)'\s*:\s*'([^']+)'/g))mapping[m[1]]=m[2];
const cats=['health','nutrition','training','puppies','breed-characteristics','genetics','daily-care'];
const generic=['history','news-around-the-world','store','about','contact','directory','affiliate-disclosure','privacy','terms','editorial-policy'];
addRoute('/');for(const lang of ['en','es']){addRoute('/'+lang+'/');for(const s of [...cats,...generic,'search'])addRoute('/'+lang+'/'+s+'/');}
for(const article of ['how-much-should-a-french-bulldog-eat','best-food-for-french-bulldogs','french-bulldog-food-allergies','safe-treats-for-french-bulldogs']){
const en='/en/nutrition/'+article+'/',es='/es/nutrition/'+article+'/';addRoute(en);addRoute(es);pairings.push({en,es,from:'nutrition'});
}
const collection=JSON.parse(read('editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/COLLECTION_INDEX.json'));
const english=[];
for(const x of collection.articles){
 const dir='editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/'+x.folder;
 const category=mapping[x.folder];
 if(!category)note(problems,'missing-import-category',x.folder);
 if(!isFile(dir+'/ARTICLE.html'))note(problems,'missing-English-HTML',dir);
 const meta=isFile(dir+'/meta.json')?JSON.parse(read(dir+'/meta.json')):{};
 const url='/en/'+category+'/'+x.folder+'/';addRoute(url);
 english.push({url,meta,dir});
}
for(const slug of directories('editorial/en/guides')){
 const dir='editorial/en/guides/'+slug;
 if(!isFile(dir+'/meta.json'))continue;
 const meta=JSON.parse(read(dir+'/meta.json'));
 if(!isFile(dir+'/ARTICLE.html'))note(problems,'missing-English-HTML',dir);
 const url='/en/'+meta.category+'/'+slug+'/';addRoute(url);english.push({url,meta,dir});
}
const spanish=[];
for(const slug of directories('editorial/es/guias')){
 const dir='editorial/es/guias/'+slug;
 if(!isFile(dir+'/meta.json'))continue;
 const meta=JSON.parse(read(dir+'/meta.json'));
 if(!isFile(dir+'/ARTICLE.html'))note(problems,'missing-Spanish-HTML',dir);
 const url='/es/'+meta.category+'/'+slug+'/';addRoute(url);spanish.push({url,meta,dir});
 if(meta.enUrl)pairings.push({en:meta.enUrl,es:url,from:slug});
}
for(const x of english){
 if(x.meta.esUrl && !pairings.some(p=>p.en===x.url&&p.es===x.meta.esUrl))pairings.push({en:x.url,es:x.meta.esUrl,from:x.dir});
}
const englishUrls=new Set(english.map(x=>x.url)),spanishUrls=new Set(spanish.map(x=>x.url));
for(const p of pairings){
 if(!routes.has(p.en)||!routes.has(p.es))note(problems,'missing-hreflang-counterpart',JSON.stringify(p));
 if(!p.from.includes('nutrition') && (!englishUrls.has(p.en)||!spanishUrls.has(p.es)))
  note(problems,'paired-article-not-found',JSON.stringify(p));
}
const enTargets=new Map(),esTargets=new Map();
for(const p of pairings){if(enTargets.has(p.en)&&enTargets.get(p.en)!==p.es)note(problems,'conflicting-pairs',p.en);
 if(esTargets.has(p.es)&&esTargets.get(p.es)!==p.en)note(problems,'conflicting-pairs',p.es);
 enTargets.set(p.en,p.es);esTargets.set(p.es,p.en);}
let built=0,metaRobots={},structured=0,imgRefs=0,missingAssets=0,internalBad=new Set();
for(const url of routes){
 const filename=htmlPath(url);
 if(!fs.existsSync(filename)){note(problems,'missing-rendered-HTML',url);continue;}
 const html=fs.readFileSync(filename,'utf8');built++;
 const htmlLang=html.match(/<html\b[^>]*\blang="([^"]+)"/i)?.[1];
 const lang=url.startsWith('/es/')?'es':url.startsWith('/en/')?'en':null;
 if(lang&&htmlLang!==lang)note(problems,'wrong-document-language',url+' '+htmlLang);
 const canonical=tags(html,'link').filter(x=>getAttr(x,'rel')==='canonical');
 if(canonical.length!==1||getAttr(canonical[0]||'','href')!==SITE+url)note(problems,'canonical',url);
 const robots=tags(html,'meta').find(x=>getAttr(x,'name')==='robots');
 const rob=getAttr(robots||'','content')||'missing';
 metaRobots[rob]=(metaRobots[rob]||0)+1;
 if(!tags(html,'title').length&&!/<title>/.test(html))note(problems,'missing-title',url);
 const alternate=tags(html,'link').filter(x=>getAttr(x,'rel')==='alternate'&&getAttr(x,'hreflang'));
 const expected=url==='/en/'||url==='/es/'||url==='/'?{en:'/en/',es:'/es/'}:
 enTargets.has(url)?{en:url,es:enTargets.get(url)}:esTargets.has(url)?{en:esTargets.get(url),es:url}:null;
 if(expected){
  for(const [lng,target] of Object.entries({'en-US':expected.en,es:expected.es})){
    if(!alternate.some(x=>getAttr(x,'hreflang')===lng&&getAttr(x,'href')===SITE+target))
      note(problems,'hreflang-missing-or-wrong',url+' '+lng+' => '+target);
  }
 }
 for(const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)){
  try{JSON.parse(match[1]);structured++;}catch(e){note(problems,'invalid-JSON-LD',url+' '+e.message);}
 }
 for(const tag of tags(html,'img')){
  const src=getAttr(tag,'src');if(!src||src.startsWith('data:')||/^https?:\/\//.test(src))continue;
  imgRefs++;const physical=path.join(DIST,src.replace(/^\//,'').split('?')[0]);
  if(!fs.existsSync(physical)){missingAssets++;note(problems,'missing-local-image',url+' => '+src);}
 }
 for(const tag of tags(html,'a')){
  const href=getAttr(tag,'href');
  if(!href||!href.startsWith('/')||href.startsWith('//'))continue;
  const target=href.split(/[?#]/)[0];if(!target||target==='/')continue;
  if(routes.has(target)||isFile('public'+target))continue;
  internalBad.add(url+' -> '+target);
 }
}
for(const v of internalBad)note(warnings,'local-link-requires-review',v);
if(!fs.existsSync(path.join(DIST,'sitemap.xml')))note(problems,'missing-sitemap','/sitemap.xml');
else{
 const xml=fs.readFileSync(path.join(DIST,'sitemap.xml'),'utf8');
 const locs=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
 const unique=new Set(locs);
 if(locs.length!==unique.size)note(problems,'duplicate-sitemap-loc','duplicates='+String(locs.length-unique.size));
 for(const url of routes)if(!unique.has(SITE+url))note(problems,'missing-sitemap-url',url);
 for(const item of locs)if(!routes.has(item.replace(SITE,'')))note(problems,'orphan-sitemap-url',item);
}
const redirects=read('public/_redirects').split(/\r?\n/).map(x=>x.trim()).filter(x=>x&&!x.startsWith('#'));
let invalidRedirects=0,genericRedirects=0;
for(const line of redirects){
 const parts=line.split(/\s+/);
 if(parts.length<2||parts.length>3||!parts[0].startsWith('/')||!parts[1].startsWith('/')){invalidRedirects++;note(problems,'malformed-redirect',line);continue;}
 if(parts[2]&&!['301','302','303','307','308','200'].includes(parts[2]))note(problems,'invalid-redirect-status',line);
 if(parts[1]==='/es/'&&(parts[0].includes('*')||parts[0].includes(':')))genericRedirects++;
 if(!parts[1].includes(':')&&!routes.has(parts[1])&&!parts[1].startsWith('/sitemap.xml'))
  note(warnings,'redirect-target-review',line);
}
if(genericRedirects)note(warnings,'irrelevant-redirect-risk',String(genericRedirects)+' dynamic redirects point broadly to /es/');
if(!fs.existsSync(path.join(DIST,'robots.txt')))note(problems,'missing-robots','/robots.txt');
const report={audited_at:new Date().toISOString(),source_route_count:routes.size,rendered_pages:built,articles:{english:english.length,spanish:spanish.length,nutrition_bilingual:4},declared_article_pairs:pairings.length,schema_blocks:structured,robots_values:metaRobots,local_images_checked:imgRefs,missing_local_images:missingAssets,redirect_rules:redirects.length,invalid_redirects:invalidRedirects,problems,warnings};
console.log(JSON.stringify(report,null,2));
process.exitCode=problems.length?1:0;
