# AUDITORÍA SEO ES3 — Cierre de 40 artículos españoles
**Fecha:** 2026-11-12 · **Sitio:** BulldogFrances.com  
**Rama de trabajo:** `audit/seo-es3-remaining-forty-2026-11-12`  
**Base:** `audit/seo-es2-eight-clinical-guides-2026-11-12` (PR #43)  
**Estado:** correcciones **editoriales focalizadas**; **NO fusionar, NO publicar**.

## Alcance real
- La matriz `docs/SEO_ES1_MATRIZ_56_2026-11-12.csv` pasa de **16/56** a **56/56** páginas con **revisión focalizada individual documentada**. El contador no representa aprobación integral de contenido, SEO o medicina veterinaria.
- **40 HTML españoles** modificados: 36 guías `editorial/es/guias/*/ARTICLE.html` y cuatro páginas `editorial/nutrition/*/ARTICLE.es.html`. Se conservan los slugs y enlaces a pares ingleses.
- **40 fichas de metadatos** actualizadas: 36 `meta.json` convencionales con SEO, descripción, nota explícita de KP no ejecutado y FAQ principal ajustada a las correcciones; cuatro `meta.json` de nutrición con esquema `es.title/es.description` y nota de auditoría. No se crearon FAQ de nutrición donde no están definidas en la plantilla.
- **12 párrafos iniciales** reescritos por superar 140 caracteres en su primera oración o presentar redacción poco fluida después de corregir afirmaciones.
- **Cero fuentes nuevas** añadidas: el registro documental mantiene **266 fichas**; hay **311 usos registrados** de esas fichas entre estos cuarenta artículos, y cada uno tiene al menos una fuente vinculada en `data/fuentes/registro.json`.
- Se conservaron enlaces documentales, DOI y destinos de las notas. La prueba interna confirmó 40/40 referencias `#ref-N` enlazadas a IDs existentes y no duplicados. Esto **no significa** que se hayan reabierto y cotejado en vivo los 311 usos contra el párrafo original de cada fuente.

## Auditoría individual — 40 artículos

| Artículo | Área | Hallazgo/ajuste principal |
|---|---|---|
| `bulldog-frances-agresivo` | Conducta | No inferir agresividad individual por registros de clínica; dolor y seguridad |
| `bulldog-frances-anciano` | Senectud | No atribuir rigidez y sueño a edad sin diagnóstico; masa muscular |
| `bulldog-frances-azul-caida-de-pelo` | Dermatología/genética | CDA no se diagnostica por color; distinguir infecciones y alergias |
| `bulldog-frances-bolsillo-de-la-cola` | Dermatología | Evitar limpieza excesiva, normalizar color de piel y cirugía universal |
| `bulldog-frances-cola-columna` | Neurología | Hemivértebras incidentales y series hospitalarias no son tasas poblacionales |
| `bulldog-frances-doble-merle` | Genética | Peligros de dos variantes PMEL; BAER/oftalmología; porcentajes multirraciales |
| `bulldog-frances-embarazada` | Reproducción | No fijar cesárea por fecha de monta; causas de distocia y neonatos |
| `bulldog-frances-flaco` | Nutrición | Retirar crecimiento fijo en gramos; condición corporal y muestra BOAS |
| `bulldog-frances-fluffy` | Genética | FGF5 no predice función respiratoria ni longevidad |
| `bulldog-frances-gases` | Digestivo | No atribuir flatulencia universalmente a BOAS; nutrición individual |
| `bulldog-frances-hernia-discal` | Neurología | Recidiva y pronóstico de cohortes quirúrgicas no son pronóstico individual |
| `bulldog-frances-hocico-largo` | BOAS | Relaciones observacionales no son garantía individual de respiración |
| `bulldog-frances-llora` | Conducta | No ignorar llanto potencialmente doloroso; ansiedad y señales de urgencia |
| `bulldog-frances-merle` | Genética | Cifras de sordera multirracial, merle críptico y postura histórica no probada |
| `bulldog-frances-mini` | Cría | Mini no es variedad oficial; evitar atribuir mestizaje por tamaño |
| `bulldog-frances-muda-de-pelo` | Dermatología | No inventar calendario universal; calvas y picor son señales clínicas |
| `bulldog-frances-ojos-azules` | Oftalmología | Color ocular no diagnostica merle o sordera; cambio súbito es urgente |
| `bulldog-frances-ojos-rojos` | Oftalmología | Triage de úlcera/glaucoma; sin curación uniforme ni pruebas caseras |
| `bulldog-frances-se-queda-ciego` | Oftalmología | No prometer recuperación ni edad de cataratas; no test casero |
| `bulldog-frances-sobrepeso` | Nutrición/BOAS | Estándar de exposición no define peso sano; extrapolaciones de labradores |
| `bulldog-frances-solo-en-casa` | Conducta | Cuatro horas orientativas, no garantía; video y medicación individual |
| `cada-cuanto-banar-bulldog-frances` | Higiene | Frecuencia según estado de piel; no introducir algodón en oído |
| `caracter-bulldog-frances` | Conducta | Estándares no predicen seguridad infantil o protección de recursos |
| `ceguera-en-perros` | Oftalmología | Pérdida repentina urgente; no evaluar ceguera unilateral tapando un ojo |
| `como-educar-bulldog-frances` | Conducta | Métodos de recompensa; sin tiempos universales o extrapolar presión ocular |
| `cuantas-horas-duerme-bulldog-frances` | BOAS/sueño | Promedios de otras razas, no norma francesa; muestras seleccionadas |
| `cuantas-veces-hace-caca-un-perro` | Digestivo | No esperar un plazo fijo ante posible obstrucción o retención urinaria |
| `cuidados-cachorro-bulldog-frances` | Pediatría | Vacunas y antiparasitarios por riesgo; socialización no acaba a 12 semanas |
| `diarrea-bulldog-frances` | Digestivo | No imponer ayuno o espera a cachorros, sangre o deshidratación |
| `ensenar-cachorro-hacer-sus-necesidades` | Educación | No restringir agua ni palmadas; regla de hora/mes no garantizada |
| `esperanza-de-vida-bulldog-frances` | Epidemiología | Distinguir mediana 2024 de esperanza 2022; sesgos de población |
| `frenchton` | Cruces | Salud y longevidad del mestizo no demostradas por datos de sus padres |
| `primer-celo-bulldog-frances` | Reproducción | No calcular fertilidad por flujo; esterilización personalizada y piometra |
| `pruebas-de-salud-criador-bulldog-frances` | Cría | CHIC completo no significa resultados normales; BOAS y ADN |
| `revision-salud-cachorro-bulldog-frances` | Pediatría | Evaluar padres y cachorro; odds ratios no pronostican BOAS |
| `socializacion-del-cachorro` | Conducta/preventiva | Estudios de clases no prueban riesgo infeccioso cero |
| `best-food-for-french-bulldogs` | Nutrición ES | AAFCO/WSAVA, sin ranking comercial ni causalidad DCM inferida |
| `french-bulldog-food-allergies` | Nutrición ES | Dieta eliminación + provocación y no diagnóstico por test casero |
| `how-much-should-a-french-bulldog-eat` | Nutrición ES | Raciones por condición individual, no 10% automático |
| `safe-treats-for-french-bulldogs` | Nutrición ES | Premios 10% orientativo, intoxicación y atragantamientos |

## Controles estáticos realizados
- **40/40:** metadatos JSON parseables, campos de auditoría actualizados, referencias locales existentes y sin IDs duplicados.
- **40/40:** primeras oraciones dentro del **objetivo editorial interno de 140 caracteres**; doce tuvieron que reescribirse y se verificaron nuevamente.
- **36 guías:** `seoTitle + | BulldogFrances.com` dentro de 56 caracteres y metadescripción 120–158; 4 nutricionales tienen título/description en `es` y descripción 120–158. Estos umbrales **no son reglas de Google ni prueba de mejor ranking**.
- **20 de las 36 guías** no declaran `image` en `meta.json`. Eso no demuestra falta de imagen en el HTML renderizado. Los cuatro artículos nutricionales tienen esquema distinto; quedan fuera de ese recuento.
- Se mantuvo el registro de fuentes en **266** entradas. Es una verificación estructural y de cobertura documental, **no** una comprobación exhaustiva actualizada del contenido de todas las fuentes ni de licencias de las imágenes.

## Límites y bloqueos expresos

**No ejecutado en esta fase:** Keyword Planner real para España/México/Argentina/español de EE. UU., comprobación automatizada de destinos HTTP externos, validación profesional veterinaria, inspección de fotografías y derechos, compilación `npm run build` de Astro, HTML renderizado, JSON-LD, canonicals, hreflang, Core Web Vitals/móvil, pruebas de Cloudflare o Search Console. No hay cifras de volumen SEO, CPC, dificultad o tráfico obtenidas para estas 40 páginas.

**No llamar «publicación aprobada» a 56/56.** Queda cerrada la pasada editorial focalizada de las 56 piezas, pero la autorización de fusión y publicación depende de los controles pendientes.

### Fuentes marco ya presentes en los artículos y en el registro
- **WSAVA 2024, vacunación:** https://wsava.org/wp-content/uploads/2024/05/2024-Guidelines-for-the-Vaccination-of-Dogs-and-Cats.pdf
- **AAHA, control de peso y nutrición:** https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/
- **UC Davis VGL, merle:** https://vgl.ucdavis.edu/test/merle
- **FCI, estándar oficial de la raza:** https://www.fci.be/Nomenclature/Standards/101g09-es.pdf
- **AVSAB, postura de entrenamiento humanitario:** https://about.illinoisstate.edu/vfdouga/files/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf
- **Merck, trastornos de disco y columna:** https://www.merckvetmanual.com/nervous-system/diseases-of-the-spinal-column-and-cord/degenerative-diseases-of-the-spinal-column-and-cord-in-animals
- **OFA, programa CHIC:** https://ofa.org/chic-programs/
- **AAFCO, lectura de etiquetas:** https://www.aafco.org/consumers/understanding-pet-food/reading-labels/

Los enlaces son destinos ya utilizados por el proyecto, no prueba de nueva validación HTTP en esta auditoría.
