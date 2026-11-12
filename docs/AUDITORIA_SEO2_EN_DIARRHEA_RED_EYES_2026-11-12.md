# Auditoría SEO 2 — EN: Diarrhea y Red Eyes
**Fecha:** 2026-11-12 · **Estado:** PR de revisión editorial, no fusionado y sin publicación. **Base:** rama de PR #30 (`editorial/seo2-heat-ivdd-2026-11-12`). Mantener los cambios separados de `main` hasta verificar QA.

## Alcance y Keyword Planner
Dos guías existentes del conjunto EN de 56: `french-bulldog-diarrhea` y `french-bulldog-red-eyes`. No se cambiaron rutas ni se crearon páginas competidoras. **Consulta KP real US/en/16 meses solicitada:** [pipeline 3060787838](https://gitlab.com/carlos-proyectos/keywords-planner-repo/-/pipelines/3060787838) y job `kp_consulta` #17978343304. Hasta recibir resultado válido, **sin métrica comprobada de búsquedas mensuales** para estos términos; las keywords declaradas son candidatas basadas en la intención de búsqueda.

## 1. French Bulldog Diarrhea
URL: `/en/nutrition/french-bulldog-diarrhea/`.
Archivos: `editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/french-bulldog-diarrhea/ARTICLE.html` y `meta.json`.
**Veredicto:** Problemas importantes corregidos a nivel editorial, con controles técnicos aún pendientes.

| # | Gravedad | Dónde | Problema verificado | Corrección aplicada |
|---|---|---|---|---|
| 1 | Alta | Estudio de prevalencia | «No más propensos» podía interpretarse como igualdad de riesgos. El estudio de 2016 halló aOR 0,82 (IC95% 0,66–1,02; p=0,070) en registros de 2.781 French Bulldogs y 21.850 otros perros. | Aclarar ausencia de diferencia estadísticamente significativa sin afirmar que la probabilidad es idéntica o universalizable a EE. UU. |
| 2 | Alta | Alergias | Asociación especulativa entre «estómago sensible», cambios de dieta y alergias. | Diferenciar hallazgos sobre dermatitis alérgica (aOR 7,68), hipersensibilidad alimentaria (6,96) y episodios individuales de diarrea. |
| 3 | Alta | Urgencias | «Vete al veterinario en el día» podía minimizar colapso o incapacidad para estar de pie. | Separar consulta pronta de emergencias inmediatas. |
| 4 | Media | Hogar y prevención | Duraciones y porcentaje de premios sin fuente cercana; «ahorra tiempo y dinero» sin prueba. | Suprimir garantías y consejos numéricos innecesarios; recomendar consulta veterinaria, hidratación y recogida de muestra cuando proceda. |
| 5 | Baja | SEO | Falta de `seoTitle` corto e intención clara en H2. | Título renderizado 56 caracteres, meta descripción 146, keyword en apertura y H2. |
| 6 | Media | Imagen | Sin imagen en `main`. | WebP original 1200×675, 116.050 bytes, y JPEG social 1200×630, 166.437 bytes. Ubicación después del primer párrafo, ALT y pie que indica ilustración no diagnóstica. |

**Fuentes empleadas y estado de comprobación**
- [1] O'Neill et al. (2021), [estudio científico original](https://doi.org/10.1186/s40575-021-00112-3), tabla 2: **verificada**, incluye datos y cálculo de odds.
- [2] Merck, [Disorders of the Stomach and Intestines in Dogs](https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/disorders-of-the-stomach-and-intestines-in-dogs): referencia existente; **no se reabrió su contenido completo durante esta tanda**.
- [3] VCA, [Diarrhea in Dogs](https://vcahospitals.com/know-your-pet/diarrhea-in-dogs): **abierta y contrastada**; no reproducir ni adaptar extensamente texto propietario de VCA.
- [4] Merck, [Vomiting in Dogs](https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/vomiting-in-dogs): referencia existente; **comprobación directa integral pendiente**.
- [5] Cornell, [Diarrhea](https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/diarrhea): **abierta y contrastada**.
- [6] VCA Urgent Care, [Diarrhea or Vomiting](https://vcahospitals.com/urgent-care/health-concerns/diarrhea-or-vomiting): **abierta y contrastada**.

## 2. French Bulldog Red Eyes
URL: `/en/health/french-bulldog-red-eyes/`.
Archivos: `editorial/importados-mypetsfamily/french-bulldog-owner-questions-20261028/french-bulldog-red-eyes/ARTICLE.html` y `meta.json`.
**Veredicto:** Problemas importantes corregidos editorialmente; fotografía específica aún pendiente.

| # | Gravedad | Dónde | Problema verificado | Corrección aplicada |
|---|---|---|---|---|
| 1 | Alta | Datos veterinarios | «4,4 veces» sin precisar que se trata de aOR y no riesgo individual. | aOR 4,38 (IC95% 2,95–6,50) para diagnóstico de úlcera corneal en el estudio UK, sin presentarlo como pronóstico individual. |
| 2 | Alta | Emergencias | El listado ubicaba pérdida súbita de visión y proptosis entre visitas «en el día». | Separación clara de urgencias que requieren asistencia inmediata: proptosis, pérdida súbita de visión, traumatismo importante y lesiones penetrantes. |
| 3 | Alta | Tratamientos caseros | Advertencia contra colirios sin fuente específica. | Cita a Merck: corticoesteroides contraindicados ante úlcera corneal, evitar restos de medicamentos. |
| 4 | Media | Causas | «Alergias» no llevaba respaldo preciso en esa enumeración. | Sustituida por explicación clínica de causas variadas que requieren diagnóstico profesional; citas a Merck. |
| 5 | Media | Salud reproductiva | Pruebas CAER y HSF4 sin distinguir obligación CHIC y recomendación adicional. | CAER en pruebas CHIC exigidas por FBDCA; HSF4-1/JHC recomendada adicionalmente según fuente del club. |
| 6 | Baja | SEO | Título de pestaña excesivo y primer párrafo sin la expresión objetivo completa. | Título renderizado 52 caracteres, meta 155, keyword en apertura y H2. |
| 7 | Media | Imagen | Carece de imagen específica en `main`. | Se incorpora **provisionalmente** la fotografía propia `/images/photos/white-puppy-eye-patch.webp` (768×1024), registrada y autorizada; el pie aclara que la mancha de pelo no es una lesión. Reutilización visual pendiente de sustituir por una imagen específica aprobada. |

**Fuentes empleadas y estado de comprobación**
- [1] O'Neill et al. (2021), [publicación científica original](https://doi.org/10.1186/s40575-021-00112-3): **verificada**, aOR 4,38 y cohorte.
- [2] Merck, [Disorders of the Nasal Cavity and Tear Ducts in Dogs](https://www.merckvetmanual.com/dog-owners/eye-disorders-of-dogs/disorders-of-the-nasal-cavity-and-tear-ducts-in-dogs): **abierta**, confirma tercer párpado y glándula.
- [3] Merck, [Disorders of the Cornea in Dogs](https://www.merckvetmanual.com/dog-owners/eye-disorders-of-dogs/disorders-of-the-cornea-in-dogs): **abierta**, documenta ulceración, dolor, posibles complicaciones.
- [4] French Bull Dog Club of America, [Health Testing and Registries](https://frenchbulldogclub.org/health/testingregistries/): **abierta**, lista de pruebas CHIC y complementarias.
- [5] Merck, [Overview of Ophthalmic Emergencies in Small Animals](https://www.merckvetmanual.com/emergency-medicine-and-critical-care/ophthalmic-emergencies-in-small-animals/overview-of-ophthalmic-emergencies-in-small-animals): **abierta**, cuadro de urgencias oftálmicas.
- [6] Merck, [Anti-inflammatory Agents in Animals](https://www.merckvetmanual.com/pharmacology/systemic-pharmacotherapeutics-of-the-eye/anti-inflammatory-agents-in-animals): **abierta**, contraindicación de corticoides con úlceras.

## QA interno y límites
- Metadatos JSON parseables, titular completo y descripciones dentro de longitud editorial, keywords en primer párrafo, enlaces de citas `[N]` con destino interno real, sin cambio de slug ni cruce de idiomas.
- Imágenes documentadas en `data/imagenes/registro.json`: 1 ilustración IA nueva para diarrea (y JPEG social) y reutilización provisional explícita de una foto propia en ojos rojos. Los originales no simulan signos patológicos.
- Fuentes nuevas [5] y [6] de cada artículo documentadas en `data/fuentes/registro.json` como F243–F246, a continuación de F241–F242 que ya están en la rama base de PR #30.
- **No se verificaron:** build Astro, vista móvil, página publicada en Cloudflare, Core Web Vitals, Search Console, revisión clínica por veterinario, carga visual externa y experiencia real de lector.
- **Decisión:** PR en borrador, dependiente del PR #30; no fusionar con `main` ni presentar como publicado sin QA. Reemplazar la fotografía compartida de ojos rojos por una exclusiva cuando exista un recurso adecuado y aprobado.
