# BULLDOGFRANCES.COM — AUDITORÍA SEO 4 (EN): seis guías clínicas y de raza

**Fecha:** 12 noviembre 2026. **Rama:** `audit/seo4-six-clinical-breed-guides-2026-11-12` (sobre PR #36). **Estado:** borrador, sin aprobar ni publicar.

## Selección y resultado

Se seleccionaron **seis páginas que seguían con `anchor_integrity_only`** en la matriz; aunque algunas habían sido reescritas en noviembre, no contaban con auditoría individual registrada en esta serie. Se realizaron **30 sustituciones editoriales concretas**, conservando URLs, imágenes existentes y referencias numeradas, y se ajustaron dos fechas editoriales en sus respectivos metadatos.

| Slug | Cambios específicos | Fuente exacta y alcance |
| --- | --- | --- |
| `french-bulldog-back-pain-weak-legs` | 4: no promover test casero de sensación; matizar rehabilitación, rampas y paseos durante posible lesión aguda | Cornell, *Intervertebral disc disease*: https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/intervertebral-disc-disease ; confirma urgencia por parálisis, tratamiento y reposo |
| `french-bulldog-heat-safety` | 4: no presentar toallas mojadas como solución equivalente; enfriamiento temprano y traslado urgente; quitar test manual del pavimento como umbral ambiental; ningún umbral universal en °F | RVC, *cool first, transport second*, 20 jul 2023: https://www.rvc.ac.uk/vetcompass/news/the-rvc-urges-owners-of-hot-dogs-to-cool-first-transport-second ; Hall et al. (2020), datos UK: https://doi.org/10.1038/s41598-020-66015-8 |
| `french-bulldog-noisy-breathing` | 4: evitar normalizar ruidos respiratorios, matizar asociación de narinas estrechas, diferenciar regurgitación y evitar cirugía automática según grado III | Cambridge, *Recognition & Diagnosis*: https://www.vet.cam.ac.uk/boas/about-boas/recognition-diagnosis ; Royal Kennel Club, RFGS: https://www.royalkennelclub.com/rfgs |
| `double-merle-french-bulldog` | 9: aclarar alelos PMEL complejos; especificar muestra multirracial de 153 perros y **40 doble merle**, de los cuales 10 tenían pérdida auditiva (25%), **sin extrapolar prevalencia a Frenchies**; evitar afirmación categórica sobre conducta del criador; pautas de entrenamiento no aversivo; fecha corregida | UC Davis VGL, *Merle*: https://vgl.ucdavis.edu/test/merle ; Strain et al. (2009), *Prevalence of Deafness…*: https://doi.org/10.1111/j.1939-1676.2008.0257.x ; tabla de resultados en el artículo original |
| `french-bulldog-puppy-health-checklist` | 6: no vender salud garantizada por documentos, diferenciar CHIC y resultados normales, límites de examinar narinas en cachorros y entorno de socialización; fecha corregida | FBDCA, *Health Testing and Registries*: https://frenchbulldogclub.org/health/testingregistries/ ; OFA, *CHIC Program*: https://ofa.org/chic-programs/ ; Cambridge BOAS |
| `french-bulldog-tail-spine` | 3: apertura más directa, no dar diagnóstico casero ni exigir imágenes inmediatas a todos, y contextualizar resultados quirúrgicos como casos seleccionados | RVC, *Neurology*: https://www.rvc.ac.uk/research/focus/brachycephaly/health-issues/neurology ; RVC *Clinical Connections*: https://www.rvc.ac.uk/clinical-connections/rvc-offers-new-treatment-for-congenital-vertebral-malformations ; Ryan et al. (2017) muestra seleccionada: https://doi.org/10.1016/j.tvjl.2017.01.018 |

### Precauciones de trazabilidad

- Strain (2009) emplea perros de varias razas; los resultados de sordera no son estimaciones poblacionales ni datos específicos de bulldog francés.
- Ryan (2017): 93,5 % corresponde a 58/62 French Bulldogs en un estudio retrospectivo de CT con indicaciones no neurológicas; no es prevalencia general.
- Hall et al. (2020): riesgos de calor son **odds ratios ajustadas** de registros clínicos británicos, no probabilidad individual ni prevalencia de Estados Unidos.
- Cambridge BOAS: asociación aproximada de 20 veces con narinas moderada/grandemente estrechadas según el material de investigación; no permite predecir riesgo individual y no sustituye examen funcional.
- OFA: CHIC señala que se realizaron y publicaron pruebas específicas, no que todos sus resultados fueran normales.
- Merck, Cambridge, Cornell, RVC, OFA, FBDCA y artículo original de Strain fueron contrastados a nivel de páginas específicas consultables. La autoría y metadatos bibliográficos previamente existentes se conservan.

## QA realizado y bloqueos

- Se verificaron **por código** las referencias HTML `#ref-N` para los seis artículos; no quedan citas numeradas huérfanas ni IDs de referencia duplicados.
- No se crearon fuentes nuevas: el registro mantiene **256 referencias**; se conservan fuentes originales ya presentes para cada artículo.
- Se conservan los slugs/rutas, no se modifican assets ni imágenes sintéticas, y no se generan recursos clínicos gráficos sin verificación.
- **Matriz:** 34 de 56 páginas EN con revisión individual focalizada documentada (**60,7 %**); **22 pendientes**. Esta cifra no certifica que todas las afirmaciones de las 34 páginas estén aprobadas por un veterinario.
- **Sin pruebas ejecutadas** de `npm run build`, render HTML Astro, schema JSON-LD, hreflang, móviles, CWV, GSC, Cloudflare ni licencias e integridad gráfica.
- Las imágenes ausentes y los 4 hotlinks de nutrición siguen pendientes; las verificaciones visuales son indispensables antes del despliegue.
- El PR debe permanecer en borrador y apilado sobre #36; no fusionar, desplegar ni declarar auditoría completa sin controles pendientes y autorización explícita.

**Conclusión:** seis revisiones focalizadas verificables, no certificación médica ni técnica del sitio.
