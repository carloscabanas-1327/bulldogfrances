// Renders original, sourced infographics in three formats:
//   16x9 (site hero, WebP), 9x16 (phone video/stories, JPG), 1x1 (square posts, JPG).
// Usage: node scripts/infographics/render.mjs <topic>   (data in scripts/infographics/topics/<topic>.mjs)
// Every fact shown must be cited in the article; the footer names the sources.
import {createRequire} from 'node:module';
import {mkdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const require=createRequire(import.meta.url);
let pw;try{pw=require('playwright')}catch{pw=require(require('node:child_process').execSync('npm root -g').toString().trim()+'/playwright')}
const topic=process.argv[2];
const mod=await import(`./topics/${topic}.mjs`);
const sets=mod.topics?mod.topics:[mod.data];
const FORMATS={'16x9':[1200,675],'9x16':[540,960],'1x1':[540,540]};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
function html(d,fmt){
  const [w,h]=FORMATS[fmt];const wide=fmt==='16x9';const tall=fmt==='9x16';
  const items=d.items.map(i=>`<li><span class="ic">${i.icon}</span><div><b>${esc(i.title)}</b><span>${esc(i.text)}</span></div></li>`).join('');
  return `<style>
*{box-sizing:border-box;margin:0}body{width:${w}px;height:${h}px;font-family:'DejaVu Sans',Arial,sans-serif;background:#f6f1e9;color:#1d2b3a;overflow:hidden}
.wrap{height:100%;display:flex;flex-direction:column;padding:${wide?'26px 34px':tall?'34px 26px':'20px 22px'}}
.kicker{font-size:${wide?13:tall?14:11}px;letter-spacing:.12em;text-transform:uppercase;color:#a0522d;font-weight:700}
h1{font-family:Georgia,serif;font-size:${wide?34:tall?38:24}px;line-height:1.12;margin:${wide?6:8}px 0 ${wide?14:tall?20:10}px}
ul{list-style:none;padding:0;display:grid;grid-template-columns:${wide?'1fr 1fr':'1fr'};gap:${wide?10:tall?12:6}px;flex:1;align-content:start}
li{display:flex;gap:12px;align-items:flex-start;background:#fff;border-radius:12px;padding:${wide?'11px 14px':tall?'11px 14px':'7px 10px'};box-shadow:0 1px 3px rgba(0,0,0,.08)}
.ic{font-size:${wide?24:tall?30:17}px;line-height:1}
li b{display:block;font-size:${wide?17:tall?20:13}px;margin-bottom:2px}li span{font-size:${wide?14:tall?17:11}px;line-height:1.35;color:#3d4b59}
.urgent.info{background:#1f4e79}
.urgent{margin-top:${wide?12:tall?18:8}px;background:#b3261e;color:#fff;border-radius:12px;padding:${wide?'11px 16px':tall?'16px 18px':'8px 12px'};font-size:${wide?16:tall?18:12}px;font-weight:700;line-height:1.3}
.foot{margin-top:${wide?10:tall?16:7}px;display:flex;justify-content:space-between;gap:12px;font-size:${wide?11:tall?12:9}px;color:#5b6773}
.brand{font-weight:700;color:#1d2b3a;white-space:nowrap}
</style><div class="wrap"><div class="kicker">${esc(d.kicker)}</div><h1>${esc(d.title)}</h1><ul>${items}</ul><div class="urgent${d.tone==='info'?' info':''}">${esc(d.urgent)}</div><div class="foot"><span>${esc(d.sources)}</span><span class="brand">BulldogFrances.com</span></div></div>`;
}
const browser=await pw.chromium.launch();
for(const data of sets)for(const [lang,d] of Object.entries(data)){
  const out=`public/images/infographics/${d.slug}`;mkdirSync(out,{recursive:true});
  for(const fmt of Object.keys(FORMATS)){
    const [w,h]=FORMATS[fmt];
    const page=await browser.newPage({viewport:{width:w,height:h},deviceScaleFactor:fmt==='16x9'?2:2});
    await page.setContent(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"></head><body>${html(d,fmt)}</body></html>`);
    const overflow=await page.evaluate(()=>document.querySelector('.wrap').scrollHeight>innerHeight);
    if(overflow) console.warn(`WARNING ${d.slug} ${fmt}: content overflows`);
    const png=`${out}/${d.slug}-${fmt}.png`;await page.screenshot({path:png});await page.close();
    const ext=fmt==='16x9'?'webp':'jpg';
    execFileSync('python3',['-c',`from PIL import Image;import os;i=Image.open('${png}').convert('RGB');i.save('${out}/${d.slug}-${fmt}.${ext}',${ext==='webp'?"'WEBP',quality=88,method=6":"'JPEG',quality=92"});os.remove('${png}')`]);
    console.log(`${out}/${d.slug}-${fmt}.${ext}`);
  }
}
await browser.close();
