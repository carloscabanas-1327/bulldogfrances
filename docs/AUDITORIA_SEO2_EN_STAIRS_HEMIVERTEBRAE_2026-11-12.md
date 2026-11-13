# AUDITORÍA SEO 2 — EN: Stairs y Hemivertebrae
**Fecha:** 2026-11-12. **Rama:** `editorial/seo2-stairs-hemivertebrae-2026-11-12`. **Estado:** revisión editorial en borrador, aún sin publicación ni QA de Cloudflare.

## Alcance y límites
Dos artículos previamente existentes en `editorial/en/guides/`: `french-bulldog-stairs` y `french-bulldog-tail-spine`. Rutas, H1 informativos y enlaces a otras guías conservados. Se revisaron estudios, redacción de riesgos veterinarios, cifras, titulares, FAQ y fuente exacta de las afirmaciones.

**Keyword Planner:** el 12/11/2026 se intentó ejecutar una consulta de métricas US/en desde el proyecto privado GitLab `carlos-proyectos/keywords-planner-repo`, mediante el job preparado `kp_consulta`. GitLab devolvió HTTP 400: `Insufficient permissions to set pipeline variables`. **No se obtuvo respuesta de KP, por lo que no hay volúmenes comprobados para estas keywords.** Se conservaron las frases principales que ya tenían los artículos, sin presentarlas como validadas por una nueva consulta. No se generó ni alteró un informe de Google Ads.

## 1. French Bulldog Stairs
Ruta: `/en/daily-care/french-bulldog-stairs/`.

| Gravedad | Hallazgo | Corrección |
|---|---|---|
| Alta | En estudio de 343 perros con diagnóstico neurológico se podía interpretar 45.5% como riesgo en todos los Frenchies. | Se identifica expresamente que son casos seleccionados de hospital de referencia, no prevalencia poblacional. |
| Alta | En estudio de recidivas más de la mitad se podía generalizar a todos los perros. | Se especifican 127 perros ya operados y 52,7% con signos de recurrencia en seguimiento. |
| Media | Relación de escaleras con IVDD y consejos excesivos para cachorros. | Se distingue evidencia de Dachshunds de investigación con French Bulldogs y el estudio de displasia de cadera en 501 cachorros de razas grandes; precauciones de seguridad, no prohibición universal. |
| Alta | Imposibilidad de caminar y pérdida de control vesical como consulta del día. | Se enfatiza evaluación veterinaria de emergencia inmediata y restricción de movimiento. |
| Media | Fuente de encuesta DachsLife indirecta (cita de otro estudio). | `ref-6` ahora DOI directo del artículo original Packer et al. (2016), sin confundir correlación con causalidad. |
| Baja | Título visible en buscador superaba el límite editorial al sumar la marca. | `seoTitle` renderizado de 56 caracteres, meta descripción 148 caracteres y FAQ reformuladas. |
| Media | Carecía de imagen principal. | Portada editorial WebP 1200×675 (138.194 bytes) y tarjeta JPEG 1200×630 (182.186 bytes), registradas, verificadas por SHA y añadidas tras el párrafo inicial. |

**Fuentes principales directamente contrastadas:**
- [1] Merck Veterinary Manual, *Degenerative Diseases of the Spinal Column and Cord in Animals* (revisión oct. 2026): `https://www.merckvetmanual.com/nervous-system/diseases-of-the-spinal-column-and-cord/degenerative-diseases-of-the-spinal-column-and-cord-in-animals`.
- [2] Mayousse V et al. 2017. `https://doi.org/10.1186/s12917-017-1132-2`. 343 perros remitidos por problemas neurológicos; 156/343 IVDD.
- [3] Leu D et al. 2023. `https://doi.org/10.1186/s13028-023-00667-0`. 127 perros operados; recidiva 67/127.
- [4] Packer RMA et al. 2016. `https://doi.org/10.1186/s40575-016-0039-8`. Encuesta de Dachshunds, no causalidad demostrada ni extrapolación a French Bulldogs.
- [5] Krontveit RI et al. 2012. `https://doi.org/10.2460/ajvr.73.6.838`. Cohorte de 501 cachorros de 4 razas grandes, estudió displasia de cadera, no IVDD.

## 2. French Bulldog Tail Spine / Hemivertebrae
Ruta: `/en/health/french-bulldog-tail-spine/`.

| Gravedad | Hallazgo | Corrección |
|---|---|---|
| Alta | «Most Frenchies have hemivertebrae» parecía estimación de toda la población. | Se describe el estudio de Ryan et al. 2017: 62 perros sin síntomas neurológicos, seleccionados para TC por otros motivos, 93,5% con hemivértebras. No se extrapola el porcentaje al conjunto de la raza. |
| Media | El gen `DVL2` se describía como presente en *cada* perro de la raza. | Se atribuye al estudio de Mansour et al. la variante fijada en su muestra; no se afirma genotipo de todos los animales actuales. |
| Media | Uno de los diez perros clínicamente afectados podía parecer frecuencia poblacional. | Se aclara la selección: entre diez perros con enfermedad neurológica de esa muestra, uno era French Bulldog y nueve Pugs. |
| Alta | Afirmación sobre gravedad de cola y otras malformaciones se respaldaba con una publicación secundaria. | `ref-6` se sustituyó por el estudio original Lackmann et al. 2022 (`Veterinary Record`, DOI exacto) con 265 perros, 199 French Bulldogs. Se limita a asociación, no diagnóstico por cola. |
| Media | Hallazgo radiográfico podía parecer indicación automática de cirugía. | Se diferencia anomalía incidental de malformación sintomática, con evaluación clínica y de imágenes. |
| Baja | Título SEO largo tras sufijo de marca; FAQ generalizaban muestras. | `seoTitle` de 56 caracteres renderizados; descripción de 154 y FAQ ajustadas a los límites de los estudios. |
| Media | Sin fotografía específica de hemivértebras/tail-spine. | **Pendiente**: ilustración pertinente y verificable, sin anatomía diagnóstica ficticia. No reutilizar fotos irrelevantes de cachorros. |

**Fuentes principales directamente contrastadas:**
- [1] Ryan R et al. 2017. `https://doi.org/10.1016/j.tvjl.2017.01.018`. Imagen TC, 62 French Bulldogs sin signos.
- [2] Mansour TA et al. 2018. `https://doi.org/10.1371/journal.pgen.1007850`. Variante `DVL2` y límites del muestreo.
- [3] Lackmann F et al. 2022. `https://doi.org/10.1002/vetr.509`. Estudio original de malformaciones y severidad de cola.
- [4] Royal Veterinary College, *Neurology*, `https://www.rvc.ac.uk/research/focus/brachycephaly/health-issues/neurology`. Deformidades sintomáticas/asintomáticas y kyphosis.
- [5] Merck, *Congenital and Inherited Spinal Cord Disorders in Dogs and Cats*, `https://www.merckvetmanual.com/nervous-system/congenital-and-inherited-anomalies-of-the-nervous-system-in-small-animals/congenital-and-inherited-spinal-cord-disorders-in-dogs-and-cats`.

## QA y bloqueos
- Dos HTML editados, dos `meta.json` ajustados, dos nuevas referencias F247 y F248 en `data/fuentes/registro.json` (total **248**), con los usos anteriores de fuentes secundarias corregidos.
- Registro fotográfico en `data/imagenes/registro.json`. Se incluye un WebP original de escaleras y un JPEG de social. El PR es provisional y requiere aprobación humana final de la imagen.
- **Pendiente:** imagen documental/ilustración no diagnóstica para el artículo de hemivértebras, comprobación integral de enlaces (incluidas fuentes de acceso restringido), KW Planner en US/en (bloqueo de permisos), compilación Astro, QA visual móvil, datos estructurados, despliegue Cloudflare y revisión clínica veterinaria profesional.
- No se modifica `main`, no se publican artículos ni se activa GitHub Actions; Cloudflare Pages sigue siendo el destino de compilación/producción.
