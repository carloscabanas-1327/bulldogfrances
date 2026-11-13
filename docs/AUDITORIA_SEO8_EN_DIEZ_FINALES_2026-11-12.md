# BULLDOGFRANCES.COM — AUDITORÍA SEO 8 (EN): diez últimas guías de la matriz

**Fecha:** 12 de noviembre de 2026  
**Rama:** `audit/seo8-final-ten-2026-11-12`  
**Base:** `audit/seo7-eight-travel-health-care-2026-11-12` (PR #40)  
**Estado:** borrador, sin fusión ni despliegue, sin aprobación veterinaria profesional.

## Alcance

Los diez artículos seleccionados conservaban `anchor_integrity_only` en la matriz de 56 artículos EN. Todos fueron inspeccionados individualmente y se hicieron **76 sustituciones de pasajes HTML**, **7 respuestas FAQ corregidas** y **10 fichas `meta.json`** actualizadas. No se modificaron traducciones españolas ni se alteraron slugs, categorías, URL, imágenes o nombres de archivos.

| Artículo | Sustituciones HTML | Hallazgo principal |
|---|---:|---|
| `french-bulldog-shedding` | 7 | Diferenciar muda normal de alopecia; no imponer un calendario de estaciones ni deducir causas por pelaje; evitar diagnóstico de alopecia estacional o CDA a partir de síntomas solos. |
| `french-bulldog-stairs` | 6 | Estudios de IVDD en pacientes remitidos, encuestas de Dachshunds y estudio de displasia de cadera en razas grandes **no demuestran** que escaleras normales causen IVDD en French Bulldogs. No promover rampas/ejercicio en un perro con síntomas agudos. |
| `pied-french-bulldog` | 6 | Retirar la afirmación «la mayoría de los pied oye normalmente» sin datos representativos. UC Davis informa que la expresión MITF varía entre razas. BAER evalúa cada oído; duración y sedación dependen del centro. |
| `french-bulldog-dry-nose` | 7 | Ensayo de 20 perros con hiperqueratosis nasal, 12 French Bulldogs: muestra reclutada **no mide prevalencia**. Sin grupo de control ni cegamiento; fabricante financió el ensayo y empleaba a varios autores. No equiparar mejoría observada con eficacia o seguridad garantizada. |
| `french-bulldog-human-allergies` | 8 | AAAAI rechaza «raza hipoalergénica». Consulta al alergólogo antes de exposiciones prolongadas, sobre todo con asma; prueba de IgE y visita sin síntomas no garantizan tolerancia individual. |
| `french-bulldog-puppy-paperwork` | 10 | Diferenciar registro de pedigree/CHIC y resultados normales. Contrastar la antigua regla federal de 2013 con **9 CFR § 2.1 vigente en 2026**, incluida excepción condicionada de cuatro hembras reproductoras y límites por hogar/predio. Evitar afirmar que todo anuncio online requiere licencia. |
| `french-bulldog-tail-pocket` | 5 | VCA/MSPCA: patología del pliegue de cola y cirugía en casos seleccionados. No extrapolar frecuencia comparativa de experiencia clínica a prevalencia ni prometer cirugía curativa en todos los casos; evitar productos caseros en pliegues profundos. |
| `how-much-should-a-french-bulldog-eat` | 8 | La cifra máxima de 28 libras del estándar AKC **no es el peso saludable de cada individuo**. Nutrición por condición corporal y muscular, calorías y circunstancias médicas; quitar regla de reducción automática del 10 % de ración. |
| `best-food-for-french-bulldogs` | 9 | WSAVA no certifica ni clasifica marcas. Actualizar FDA: los reportes de DCM abarcan alimentos con y sin cereales; la relación causal sigue bajo investigación. No recomendar por defecto croqueta de una forma específica o baja densidad calórica. |
| `safe-treats-for-french-bulldogs` | 10 | AAHA identifica **más de 10 % de calorías de alimentos no completos** como factor de riesgo nutricional, no cuota que se deba alcanzar. Aclarar riesgos de huesos crudos/cocidos, tamaño de premios, alérgenos, intoxicaciones y evitar inducción casera del vómito. |

## Fuentes documentales exactas y alcance

Fuentes ya citadas en los artículos fueron reutilizadas cuando respaldaban la afirmación. Se comprobaron especialmente:

1. **Merck Veterinary Manual, *Hair Loss (Alopecia) in Dogs***: https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/hair-loss-alopecia-in-dogs — diferencia muda normal y alopecia; no indica un riesgo individual de French Bulldog por color.
2. **UC Davis VGL, *Piebald/White Spotting (S Locus)***: https://vgl.ucdavis.edu/test/piebald-dog — variantes MITF y expresión dependiente de raza; no tasa de sordera entre Frenchies pied.
3. **Viaud et al. (2025), *Evaluation of the Interest in and Tolerance of a Topical Emollient in the Management of Canine Nasal Hyperkeratosis***: https://doi.org/10.3390/vetsci12090792 — diseño prospectivo, abierto, sin control, 20 perros; conflicto financiero explícito. Los scores mejoraron, pero no establecen causalidad.
4. **AAAAI, *Pet Allergy***: https://www.aaaai.org/conditions-treatments/allergies/pet-allergy — no hay razas verdaderamente hipoalergénicas; diagnóstico con médico.
5. **Office of the Federal Register, *9 CFR § 2.1 — Requirements and application***: https://www.ecfr.gov/current/title-9/chapter-I/subchapter-A/part-2/subpart-A/section-2.1 — texto vigente el 10 nov. 2026; art. (a)(3)(iii) sobre excepción de cuatro o menos hembras reproductoras, con requisitos y límites. **Nueva ficha F261**, cita #5 en artículo de documentación; norma federal primaria, no analiza leyes estatales.
6. **VCA Animal Hospitals, *Corkscrew Tails***: https://vcahospitals.com/know-your-pet/corkscrew-tails — pliegues por malformación de cola, atención e indicación quirúrgica según examen; no muestra de prevalencia.
7. **WSAVA Global Nutrition Committee, *Guidelines on Selecting Pet Foods***: https://wsava.org/wp-content/uploads/2021/04/Selecting-a-pet-food-for-your-pet-updated-2021_WSAVA-Global-Nutrition-Toolkit.pdf — ocho áreas de evaluación de fabricante y etiqueta. **No certifica marcas** ni clasifica Royal Canin, Purina o Hill's.
8. **FDA, *Questions & Answers: FDA’s Work on Potential Causes of Non-Hereditary DCM in Dogs***: https://www.fda.gov/animal-veterinary/animal-health-literacy/questions-answers-fdas-work-potential-causes-non-hereditary-dcm-dogs — preguntas 7–9 sobre alimentos, legumbres e incertidumbre de causalidad. **F262**, cita #5 en mejor alimento.
9. **AAHA, *Nutritional Risk Factors*, tabla 4**: https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/nutritional-risk-factors/ — extra-calorías de premios/comidas no completas **>10 %** como factor de riesgo; **F263**, cita #4 en premios seguros.
10. **ASPCA, *People Foods to Avoid Feeding Your Pets***: https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets — comida tóxica, patógenos de alimentos crudos, riesgos de huesos y xilitol. Ya estaba citada #1 en premios.

**Registro documental acumulado:** **263 fichas**, antes 260. El hecho de registrar 263 fuentes no implica que todas hayan sido abiertas, reestudiadas o certificadas en esta tanda. Referencias dinámicas exigirán nueva comprobación antes de publicar.

## QA estático de la tanda

- **10/10** artículos: `#ref-N` corresponde a bibliografía numerada sin identificadores duplicados ni enlaces de fuente hacia una homepage en la bibliografía inspeccionada.
- **10/10** fichas `meta.json`: JSON parseable y `lastReviewed=2026-11-12`.
- **10/10** primeras oraciones <=140 caracteres; título SEO con marca <=56 caracteres; descripción entre 120 y 158. Son reglas internas, **no límites impuestos por Google**.
- Siete artículos tienen figura principal declarada en HTML. **Tres guías nutricionales bilingües carecen de figura principal en `ARTICLE.en.html`**: `how-much-should-a-french-bulldog-eat`, `best-food-for-french-bulldogs`, `safe-treats-for-french-bulldogs`. No se fabricaron imágenes ni se acreditaron derechos que no se verificaron.
- El artículo de **tail pocket** usa una imagen **IA identificada como ilustración editorial, no diagnóstico clínico**. Se mantuvo ese aviso.
- Los HTML nutricionales se editaron **solo en inglés**; los fragmentos en español son independientes y requieren auditoría propia.

## Progreso verificable y límites

La matriz operativa contiene **56 filas de artículos EN**. Tras esta tanda **56/56** llevan marca `targeted_claims_checked_2026_11_12` y **0/56** `anchor_integrity_only`. Esto significa **pasada focalizada documentada en todos los artículos de la matriz**, NO revisión línea por línea de la totalidad del contenido ni certificación veterinaria o SEO técnica. El anterior desfase entre contador histórico y marca operativa ya no afecta el total actual de filas pendientes, pero el historial de qué revisiones habían sido contadas previamente sigue necesitando conciliación si se quiere usar como dato de productividad.

**Bloqueos anteriores a publicación:** revisión profesional de mensajes médicos críticos, imagen y derechos, ejecución real de Astro build, validación de JSON-LD/hreflang/canonicals, enlaces internos y externos renderizados, rendimiento móvil, GSC, Cloudflare, QA de variantes ES, y consulta real de Keyword Planner EN-US (no ejecutada; no se inventan métricas). También confirmar regulaciones dinámicas y contenido de fabricantes y FDA antes del lanzamiento.

**No fusionar ni publicar.** El PR de esta tanda será borrador apilado sobre #40, dependiente de las auditorías anteriores; no modificar `main` sin autorización explícita.
