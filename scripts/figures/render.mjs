// Renders original article figures (HTML templates) to WebP images in public/images/articles/.
// Usage: node scripts/figures/render.mjs health-tests
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
let pw;try{pw=require('playwright')}catch{pw=require(require('node:child_process').execSync('npm root -g').toString().trim()+'/playwright')}
const {chromium}=pw;
import {mkdirSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const name=process.argv[2];
const {figures}=await import(`./${name}.mjs`);
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1200,height:675},deviceScaleFactor:2});
for(const lang of Object.keys(figures)){
  const {dir,files}=figures[lang];
  const out=`public/images/articles/${dir}`;mkdirSync(out,{recursive:true});
  for(const [file,html] of Object.entries(files)){
    await page.setContent(`<!doctype html><html><head><meta charset="utf-8"></head><body>${html}</body></html>`);
    const png=`${out}/${file}.png`;
    await page.screenshot({path:png});
    execFileSync('python3',['-c',`from PIL import Image;import os;i=Image.open('${png}');i.save('${out}/${file}.webp','WEBP',quality=88,method=6);os.remove('${png}')`]);
    console.log(`${out}/${file}.webp`);
  }
}
await browser.close();
