import {readFileSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import collection from '../../editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/COLLECTION_INDEX.json';
export const categories = [
  {slug:'health',label:'Health',description:'Breathing, symptoms, veterinary care and wellbeing.'},
  {slug:'nutrition',label:'Nutrition',description:'Feeding and digestive health.'},
  {slug:'training',label:'Training',description:'Behavior and communication.'},
  {slug:'puppies',label:'Puppies',description:'Responsible puppy care and health.'},
  {slug:'breed-characteristics',label:'Breed Characteristics',description:'Breed traits and welfare.'},
  {slug:'genetics',label:'Genetics & Breeding',description:'Genetics, breeding and inherited health.'},
  {slug:'daily-care',label:'Daily Care',description:'Everyday care through every life stage.'}
];
const mapping = {
  'french-bulldog-with-longer-snout':'breed-characteristics',
  'merle-french-bulldog-health-risks':'genetics',
  'white-french-bulldog-deafness':'genetics',
  'fluffy-french-bulldog-health':'genetics',
  'blue-french-bulldog-hair-loss':'genetics',
  'french-bulldog-breeder-health-tests':'genetics',
  'french-bulldog-puppy-paperwork':'puppies',
  'french-bulldog-puppy-health-checklist':'puppies',
  'french-bulldog-noisy-breathing':'health',
  'double-merle-french-bulldog':'genetics',
  'french-bulldog-diarrhea':'nutrition',
  'french-bulldog-vomiting':'health',
  'french-bulldog-tail-pocket':'daily-care',
  'french-bulldog-heat-safety':'daily-care',
  'french-bulldog-back-pain-weak-legs':'health',
  'mini-french-bulldog-health':'breed-characteristics',
  'french-bulldog-dry-nose':'daily-care',
  'french-bulldog-red-eyes':'health',
  'french-bulldog-first-heat-care':'health',
  'pregnant-french-bulldog-care':'genetics',
  'senior-french-bulldog-care':'daily-care',
  'french-bulldog-human-allergies':'breed-characteristics',
  'french-bulldog-aggression-behavior':'training',
  'french-bulldog-crying-whining':'training'
};
export const guides = collection.articles.map(a=>({...a,category:mapping[a.folder]}));
const titles = {
 "french-bulldog-with-longer-snout": "French Bulldogs With Longer Snouts: Do They Breathe Better?",
 "merle-french-bulldog-health-risks": "Merle French Bulldogs: Hearing and Eye Health Risks",
 "white-french-bulldog-deafness": "White French Bulldogs and Deafness: What Owners Should Know",
 "fluffy-french-bulldog-health": "Fluffy French Bulldogs: Health Questions Behind the Long Coat",
 "blue-french-bulldog-hair-loss": "Blue French Bulldog Hair Loss: Causes and When to See a Vet",
 "french-bulldog-breeder-health-tests": "Health Tests to Ask a French Bulldog Breeder For",
 "french-bulldog-puppy-paperwork": "French Bulldog Puppy Paperwork: What You Should Receive",
 "french-bulldog-puppy-health-checklist": "French Bulldog Puppy Health Checklist for New Owners",
 "french-bulldog-noisy-breathing": "French Bulldog Noisy Breathing: Snoring, Snorting and Red Flags",
 "double-merle-french-bulldog": "Double Merle French Bulldogs: Hearing and Vision Risks",
 "french-bulldog-diarrhea": "French Bulldog Diarrhea: Common Causes and When It Is Urgent",
 "french-bulldog-vomiting": "French Bulldog Vomiting or Regurgitation? How to Tell and What to Do",
 "french-bulldog-tail-pocket": "French Bulldog Tail Pocket: How to Clean It Safely",
 "french-bulldog-heat-safety": "French Bulldogs and Heat: How to Prevent Heatstroke",
 "french-bulldog-back-pain-weak-legs": "French Bulldog Back Pain or Weak Back Legs: Signs of IVDD",
 "mini-french-bulldog-health": "Mini French Bulldogs: Health Risks of Breeding for Small Size",
 "french-bulldog-dry-nose": "French Bulldog Dry Nose: Normal or a Sign of Trouble?",
 "french-bulldog-red-eyes": "French Bulldog Red Eyes: When It Is an Emergency",
 "french-bulldog-first-heat-care": "Your French Bulldog's First Heat: What to Expect",
 "pregnant-french-bulldog-care": "Pregnant French Bulldog Care: What Owners Should Plan For",
 "senior-french-bulldog-care": "Senior French Bulldog Care: Comfort, Mobility and Checkups",
 "french-bulldog-human-allergies": "Are French Bulldogs Hypoallergenic? Allergies in People",
 "french-bulldog-aggression-behavior": "French Bulldog Aggression: Causes and Safe Next Steps",
 "french-bulldog-crying-whining": "Why Is My French Bulldog Crying or Whining?"
};
// Optional per-article meta.json ({title, description, lastReviewed}) overrides the defaults.
const metaCache={};
export const guideMeta = slug=>{if(!(slug in metaCache)){const f=join(process.cwd(),'editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028',slug,'meta.json');let m={};if(existsSync(f)){try{m=JSON.parse(readFileSync(f,'utf8'))}catch{m={}}}metaCache[slug]=m}return metaCache[slug]};
export const guideTitle = slug=>guideMeta(slug).title || titles[slug] || slug.replaceAll('-', ' ').replace(/\b\w/g, c=>c.toUpperCase());
// Short, plain-text summary taken from the first paragraph of the draft.
export const guideSummary = html=>{const m=html.match(/<p>([\s\S]*?)<\/p>/i);const t=(m?m[1]:'').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();return t.length>158?t.slice(0,155).replace(/\s+\S*$/,'')+'…':t};
export const guideUrl = a=>'/en/'+a.category+'/'+a.folder+'/';

// Bilingual nutrition articles (template: src/pages/[lang]/nutrition/[article]).
export const nutritionArticles = [
 {slug:'how-much-should-a-french-bulldog-eat',en:'How Much Should a French Bulldog Eat?',es:'¿Cuánto debe comer un bulldog francés?',descEn:'Feeding portions, ideal weight, activity and calories.',descEs:'Raciones, peso ideal, actividad y calorías.'},
 {slug:'best-food-for-french-bulldogs',en:'Choosing Food for a French Bulldog',es:'Cómo elegir alimento para un bulldog francés',descEn:'Complete diets, food labels and nutritional quality.',descEs:'Dietas completas, etiquetas y calidad nutricional.'},
 {slug:'french-bulldog-food-allergies',en:'Food Allergies in French Bulldogs',es:'Alergias alimentarias en el bulldog francés',descEn:'Itching, elimination diets and veterinary diagnosis.',descEs:'Picazón, dietas de eliminación y diagnóstico veterinario.'},
 {slug:'safe-treats-for-french-bulldogs',en:'Safe Treats and Foods to Avoid',es:'Premios seguros y alimentos que deben evitarse',descEn:'Healthy treats, toxic foods and choking hazards.',descEs:'Premios saludables, alimentos tóxicos y riesgo de atragantamiento.'}
];
export const guideHtmlPath = folder=>'editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/'+folder+'/ARTICLE.html';
