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
export const guideTitle = slug=>slug.replaceAll('-', ' ').replace(/\b\w/g, c=>c.toUpperCase());
export const guideUrl = a=>'/en/'+a.category+'/'+a.folder+'/';
