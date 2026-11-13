// Nutrition guides (replacing Unsplash stock photos) and EN red eyes (replacing a photo repeated in EN). 2026-11-13.
// Facts only from each article's own cited key takeaways.
const SEN='Data: sources cited in this guide at BulldogFrances.com. Not veterinary advice.';
const SES='Datos: fuentes citadas en esta guía de BulldogFrances.com. No reemplaza la consulta veterinaria.';
const t=(slug,kicker,title,items,urgent,tone,lang)=>({slug,kicker,title,items:items.map(([icon,title,text])=>({icon,title,text})),urgent,tone,sources:lang==='en'?SEN:SES});
export const topics=[
{en:t('how-much-should-a-french-bulldog-eat','Nutrition · Portions','How much should a French Bulldog eat?',[
 ['🏷️','The bag is a starting point','Adjust the feeding guide to body condition.'],
 ['📋','Body condition 4–5 of 9','Ribs easy to feel, visible waist, tucked belly (WSAVA).'],
 ['🫁','Extra weight, harder breathing','It raises breathing risks in flat-faced dogs.'],
 ['⚖️','Weigh the food','Use a kitchen scale and count every treat.']],
 'Recheck body condition every few weeks and adjust.','info','en'),
 es:t('cuanto-debe-comer-un-bulldog-frances','Alimentación · Raciones','¿Cuánto debe comer un bulldog francés?',[
 ['🏷️','El envase es un punto de partida','Ajusta la tabla según la condición corporal.'],
 ['📋','Condición corporal 4–5 de 9','Costillas fáciles de palpar, cintura visible y abdomen recogido (WSAVA).'],
 ['🫁','El sobrepeso dificulta respirar','Aumenta el riesgo en perros de hocico chato.'],
 ['⚖️','Pesa la comida','Usa una balanza de cocina y cuenta cada premio.']],
 'Revisa su condición corporal cada pocas semanas y ajusta.','info','es')},
{en:t('best-food-for-french-bulldogs','Nutrition · Choosing food','Choosing the best food for a French Bulldog',[
 ['✅','"Complete and balanced"','Look for it on the label for your dog\'s life stage.'],
 ['❓','Ask the maker','WSAVA lists questions on formulators, quality control and research. It does not certify brands.'],
 ['🏷️','Labels are not proof','"Grain-free" or "premium" alone do not establish quality or safety.'],
 ['🍲','Home-cooked diets','Need a recipe from a board-certified veterinary nutritionist.']],
 'Judge the whole product and the maker\'s evidence, not the slogan.','info','en'),
 es:t('mejor-alimento-bulldog-frances','Alimentación · Elegir comida','Cómo elegir el mejor alimento para un bulldog francés',[
 ['✅','«Completo y equilibrado»','Búscalo en la etiqueta para la etapa de vida de tu perro.'],
 ['❓','Pregunta al fabricante','La WSAVA propone preguntas sobre formulación, calidad y evidencia; no certifica marcas.'],
 ['🏷️','Marketing no es nutrición','«Sin cereales», «natural» o «premium» no garantizan nada.'],
 ['🍲','Dieta casera','Necesita una receta de un veterinario especialista en nutrición.']],
 'Valora el producto completo y la evidencia del fabricante, no el eslogan.','info','es')},
{en:t('french-bulldog-food-allergies','Nutrition · Allergies','Food allergies in French Bulldogs',[
 ['📊','Allergic skin is common','UK data: higher odds of allergic skin disorders, not proof of food allergy.'],
 ['📅','Itching all year','Food allergy itch tends not to change with the seasons.'],
 ['🥣','Elimination diet','Vet-supervised diet, then reintroducing the food, is how it is diagnosed.'],
 ['🧪','Skip home kits','Blood, saliva or hair tests cannot replace that process.']],
 'Work with your vet on an elimination diet before changing foods again.','info','en'),
 es:t('alergias-alimentarias-bulldog-frances','Alimentación · Alergias','Alergias alimentarias en el bulldog francés',[
 ['📊','Alergias de piel frecuentes','Registros británicos: más trastornos alérgicos cutáneos, sin saber cuántos son por comida.'],
 ['📅','Picazón todo el año','La alergia alimentaria no suele cambiar con las estaciones.'],
 ['🥣','Dieta de eliminación','Estricta y seguida de provocación supervisada: es el método de referencia.'],
 ['🧾','Las listas no diagnostican','Los alérgenos comunes varían según la población.']],
 'Haz la dieta de eliminación con tu veterinario antes de cambiar otra vez de alimento.','info','es')},
{en:t('safe-treats-for-french-bulldogs','Nutrition · Treats','Safe treats for French Bulldogs',[
 ['🚫','Never give','Chocolate, grapes or raisins, onion or garlic, macadamia nuts, xylitol, alcohol.'],
 ['🔟','Watch the 10% line','AAHA flags over 10% of calories from treats as a risk sign.'],
 ['🍽️','Treats are not meals','They are usually not complete and balanced.'],
 ['📞','Poison help (US)','ASPCA Animal Poison Control: (888) 426-4435.']],
 'If you think your dog ate something toxic, call your vet now.','urgent','en'),
 es:t('premios-seguros-bulldog-frances','Alimentación · Premios','Premios seguros para el bulldog francés',[
 ['🚫','Nunca le des','Chocolate, uvas o pasas, cebolla o ajo, nueces de macadamia, xilitol ni alcohol.'],
 ['🔟','Ojo con el 10 %','La AAHA considera señal de riesgo superar el 10 % de calorías en premios.'],
 ['🍽️','No reemplazan comidas','Los premios no suelen ser un alimento completo.'],
 ['📞','Toxicología (EE. UU.)','ASPCA: (888) 426-4435.']],
 'Si crees que comió algo tóxico, llama de inmediato a tu veterinario.','urgent','es')},
{en:t('french-bulldog-red-eyes','Health · Eyes','Red eyes in French Bulldogs',[
 ['🩹','Corneal ulcers','UK study: 4.38× the adjusted odds vs other dogs. Not an individual probability.'],
 ['😣','Squinting or cloudy eye','Needs an urgent veterinary exam.'],
 ['🍒','Red lump in the inner corner','Often cherry eye; vets usually reposition the gland.'],
 ['💧','No leftover eye drops','Steroid drops are unsafe if there is an ulcer.']],
 'Sudden vision loss or an eye out of its socket: emergency vet now.','urgent','en')}
];
