// Original infographics for the health-testing guide (EN + ES).
// Rendered to WebP with: node scripts/figures/render.mjs health-tests
// Every fact on these figures is cited in the article it illustrates.
const icons = {
  hips:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14c6 4 12 6 18 6s12-2 18-6"/><path d="M14 14c-3 10-1 18 6 24"/><path d="M50 14c3 10 1 18-6 24"/><circle cx="22" cy="42" r="6"/><circle cx="42" cy="42" r="6"/><path d="M22 48v10M42 48v10"/></svg>`,
  eyes:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 32s10-16 28-16 28 16 28 16-10 16-28 16S4 32 4 32z"/><circle cx="32" cy="32" r="9"/><circle cx="32" cy="32" r="3" fill="currentColor"/></svg>`,
  knees:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4l6 22"/><path d="M30 26l-4 34"/><ellipse cx="36" cy="27" rx="5" ry="7"/><path d="M44 18l6-4M46 30h8M44 38l6 4" stroke-dasharray="1 5"/></svg>`,
  heart:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 56S6 40 6 22a12 12 0 0 1 26-6 12 12 0 0 1 26 6c0 18-26 34-26 34z"/><path d="M14 30h10l4-8 6 16 4-8h12"/></svg>`,
  chip:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="32" height="32" rx="4"/><path d="M24 8v8M32 8v8M40 8v8M24 48v8M32 48v8M40 48v8M8 24h8M8 32h8M8 40h8M48 24h8M48 32h8M48 40h8"/></svg>`
};
const base = `*{box-sizing:border-box;margin:0}body{width:1200px;height:675px;font-family:'Liberation Sans',Arial,sans-serif;color:#152538;background:#f6f9fc}
.f{width:1200px;height:675px;padding:44px 56px 30px;display:flex;flex-direction:column}
.kick{font:700 17px 'Liberation Sans';letter-spacing:.14em;text-transform:uppercase;color:#bb8e32}
h1{font:700 44px 'DejaVu Serif',Georgia,serif;margin-top:8px;letter-spacing:-.01em}
.sub{font-size:21px;color:#3c5266;margin-top:8px}
.foot{display:flex;justify-content:space-between;align-items:flex-end;margin-top:auto;font-size:15px;color:#566a7d;gap:30px}
.foot b{color:#152538;font:700 17px 'DejaVu Serif',serif;letter-spacing:.03em;white-space:nowrap}`;

const fig1 = (t) => `<style>${base}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:30px}
.c{background:#fff;border:2px solid #d5e2ee;border-radius:20px;padding:24px 20px 20px;height:340px}
.c .ic{width:74px;height:74px;border-radius:18px;background:#e4eef8;color:#205b86;display:grid;place-items:center}
.c .ic svg{width:50px;height:50px}
.c .n{font:700 15px 'Liberation Sans';color:#bb8e32;margin-top:16px;letter-spacing:.08em}
.c h2{font:700 29px 'DejaVu Serif',serif;margin-top:2px}
.c p{font-size:18.5px;line-height:1.38;color:#33485c;margin-top:8px}
.id{display:flex;align-items:center;gap:14px;margin-top:18px;background:#152538;color:#fff;border-radius:14px;padding:12px 20px;font-size:19px}
.id svg{width:34px;height:34px;color:#f0c76a;flex:0 0 auto}</style>
<div class="f"><div class="kick">${t.kick}</div><h1>${t.title}</h1>
<div class="grid">${t.cards.map((c,i)=>`<div class="c"><div class="ic">${icons[c.icon]}</div><div class="n">${t.test} ${i+1}</div><h2>${c.h}</h2><p>${c.p}</p></div>`).join('')}</div>
<div class="id">${icons.chip}<span>${t.id}</span></div>
<div class="foot"><span>${t.src}</span><b>BULLDOGFRANCES.COM</b></div></div>`;

const fig2 = (t) => `<style>${base}
.scale{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:34px;border-radius:20px;overflow:hidden;border:2px solid #d5e2ee}
.g{padding:22px 22px 24px;height:230px;color:#fff}
.g .num{font:700 64px 'DejaVu Serif',serif;line-height:1}
.g h2{font:700 23px 'Liberation Sans';margin-top:12px}
.g p{font-size:18px;line-height:1.38;margin-top:8px;opacity:.95}
.g0{background:#2f7d5b}.g1{background:#5f9b4c}.g2{background:#d08a2e}.g3{background:#b2432f}
.band{display:grid;grid-template-columns:1fr 1fr;margin-top:10px;font:700 18px 'Liberation Sans';text-align:center}
.band span{padding:9px;border-radius:10px;margin:0 4px}.ok{background:#dcefe3;color:#1f5e42}.bad{background:#f6dfd8;color:#8a2f1f}
.facts{display:flex;gap:26px;margin-top:20px;font-size:18.5px;color:#33485c}.facts div{flex:1;background:#fff;border:2px solid #d5e2ee;border-radius:14px;padding:12px 16px}
.facts b{color:#152538}</style>
<div class="f"><div class="kick">${t.kick}</div><h1>${t.title}</h1>
<div class="scale">${t.grades.map((g,i)=>`<div class="g g${i}"><div class="num">${g.n}</div><h2>${g.h}</h2><p>${g.p}</p></div>`).join('')}</div>
<div class="band"><span class="ok">${t.ok}</span><span class="bad">${t.bad}</span></div>
<div class="facts">${t.facts.map(f=>`<div>${f}</div>`).join('')}</div>
<div class="foot"><span>${t.src}</span><b>BULLDOGFRANCES.COM</b></div></div>`;

const fig3 = (t) => `<style>${base}
.steps{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:34px;position:relative}
.s{background:#fff;border:2px solid #d5e2ee;border-radius:18px;padding:20px 18px;height:300px;position:relative}
.s .k{width:52px;height:52px;border-radius:50%;background:#205b86;color:#fff;font:700 26px 'DejaVu Serif',serif;display:grid;place-items:center}
.s h2{font:700 22px 'Liberation Sans';margin-top:16px;line-height:1.22}
.s p{font-size:17.5px;line-height:1.38;color:#33485c;margin-top:8px}
.s:not(:last-child)::after{content:'';position:absolute;right:-13px;top:36px;width:12px;height:12px;border-top:3px solid #bb8e32;border-right:3px solid #bb8e32;transform:rotate(45deg);background:transparent}
.warn{margin-top:20px;background:#fff4dc;border-left:6px solid #bb8e32;border-radius:10px;padding:13px 18px;font-size:19.5px;color:#4a3a12}
.warn b{color:#152538}</style>
<div class="f"><div class="kick">${t.kick}</div><h1>${t.title}</h1>
<div class="steps">${t.steps.map((s,i)=>`<div class="s"><div class="k">${i+1}</div><h2>${s.h}</h2><p>${s.p}</p></div>`).join('')}</div>
<div class="warn">${t.warn}</div>
<div class="foot"><span>${t.src}</span><b>BULLDOGFRANCES.COM</b></div></div>`;

export const figures = {
 en: {
  dir: 'french-bulldog-breeder-health-tests',
  files: {
   'chic-four-tests': fig1({kick:'French Bulldog health testing', title:'The 4 tests behind a CHIC number', test:'Test',
     cards:[{icon:'hips',h:'Hips',p:'OFA hip X-ray or PennHIP, registered with OFA.'},{icon:'eyes',h:'Eyes',p:'CAER exam by a board-certified veterinary ophthalmologist. Repeat yearly.'},{icon:'knees',h:'Patellas',p:'Vet check for a kneecap that slips out of place.'},{icon:'heart',h:'Heart',p:'Stethoscope exam, or an echocardiogram (heart ultrasound).'}],
     id:'Plus permanent ID (microchip or tattoo), so every result belongs to that one dog.',
     src:'Source: French Bull Dog Club of America, Health Testing and Registries (cited Nov 3, 2026).'}),
   'boas-grades': fig2({kick:'Breathing: the extra test that matters most', title:'Respiratory Function Grades, 0 to III',
     grades:[{n:'0',h:'Clinically unaffected',p:''},{n:'I',h:'Clinically unaffected',p:''},{n:'II',h:'BOAS-affected',p:'Needs management or surgery.'},{n:'III',h:'BOAS-affected',p:'Needs management or surgery.'}],
     ok:'Grades 0 and I: clinically unaffected', bad:'Grades II and III: BOAS-affected',
     facts:['<b>How:</b> checked before and after a 3&#8209;minute trot.','<b>When:</b> from 12 months of age.','<b>Breeding dogs:</b> re-grade every 2 years.'],
     src:'Sources: University of Cambridge BOAS Research Group; The Royal Kennel Club (cited Nov 3, 2026).'}),
   'verify-breeder': fig3({kick:'Do not take a breeder’s word for it', title:'Check health claims in 5 steps',
     steps:[{h:'Get both parents’ registered names',p:'Mother and father. No names, no deal.'},{h:'Search them on OFA',p:'Free database. Look at grades and dates, not just a CHIC number.'},{h:'Ask for every other report',p:'Breathing grade, DNA health tests. Match name and microchip.'},{h:'Ask about the family',p:'Airway or spinal surgery? C-sections? Previous litters?'},{h:'Meet the mother',p:'Watch her breathe at rest and after a short walk.'}],
     warn:'<b>A CHIC number is not a clean bill of health.</b> It proves the tests were done and published, not that the results were normal.',
     src:'Based on FBDCA and OFA guidance cited in the article.'})
  }
 },
 es: {
  dir: 'pruebas-de-salud-criador-bulldog-frances',
  files: {
   'cuatro-pruebas-chic': fig1({kick:'Pruebas de salud del bulldog francés', title:'Las 4 pruebas del número CHIC', test:'Prueba',
     cards:[{icon:'hips',h:'Caderas',p:'Radiografía OFA o PennHIP, registrada en la OFA.'},{icon:'eyes',h:'Ojos',p:'Examen CAER por un oftalmólogo veterinario certificado. Cada año.'},{icon:'knees',h:'Rótulas',p:'Revisión veterinaria de la rótula que se sale de su sitio.'},{icon:'heart',h:'Corazón',p:'Auscultación o ecocardiografía (ecografía del corazón).'}],
     id:'Y además identificación permanente (microchip o tatuaje): cada resultado pertenece a ese perro.',
     src:'Fuente: French Bull Dog Club of America, Health Testing and Registries (citado 3 nov 2026).'}),
   'grados-respiratorios': fig2({kick:'Respiración: la prueba extra más importante', title:'Grados de función respiratoria, del 0 al III',
     grades:[{n:'0',h:'Sin afectación clínica',p:''},{n:'I',h:'Sin afectación clínica',p:''},{n:'II',h:'Afectado por BOAS',p:'Requiere control o cirugía.'},{n:'III',h:'Afectado por BOAS',p:'Requiere control o cirugía.'}],
     ok:'Grados 0 y I: sin afectación clínica', bad:'Grados II y III: afectados por BOAS',
     facts:['<b>Cómo:</b> antes y después de 3 minutos de trote.','<b>Cuándo:</b> desde los 12 meses.','<b>Reproductores:</b> repetir cada 2 años.'],
     src:'Fuentes: Cambridge BOAS Research Group; The Royal Kennel Club (citado 3 nov 2026).'}),
   'verificar-criador': fig3({kick:'No te fíes solo de la palabra del criador', title:'Comprueba las pruebas en 5 pasos',
     steps:[{h:'Pide el nombre registrado de los padres',p:'De la madre y del padre. Sin nombres, no hay trato.'},{h:'Búscalos en la OFA',p:'Base de datos gratuita. Mira calificaciones y fechas.'},{h:'Pide todos los demás informes',p:'Grado respiratorio y ADN de salud, con el mismo microchip.'},{h:'Pregunta por la familia',p:'¿Cirugías respiratorias o de columna? ¿Cesáreas?'},{h:'Conoce a la madre',p:'Mírala respirar en reposo y tras un paseo corto.'}],
     warn:'<b>Un número CHIC no es un certificado de buena salud.</b> Prueba que los exámenes se hicieron y publicaron, no que salieran normales.',
     src:'Basado en las pautas del FBDCA y la OFA citadas en el artículo.'})
  }
 }
};
