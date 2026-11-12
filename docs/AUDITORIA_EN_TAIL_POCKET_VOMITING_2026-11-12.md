# Auditoría editorial EN: Tail Pocket y Vomiting

**Fecha:** 12 noviembre 2026. **Estado:** revisión de textos, fuentes y archivos, sin prueba de Cloudflare.

## Selección de temas e intención
- `french bulldog tail pocket`: **210 búsquedas mensuales** promedio en US/en, consulta @KP Google Ads API del 12/11/2026 (informe job 17965604501); el usuario quiere localizar el pliegue, saber cómo revisarlo, higiene segura, síntomas y cuándo ir al veterinario.
- `french bulldog vomiting`: **170 búsquedas mensuales** promedio US/en, mismo informe. Intención: distinguir vómito de regurgitación, causas, señales de urgencia y cuidados seguros mientras espera valoración.
- Son estadísticas de Google Ads según país/idioma; **no son visitas ni dificultad de posicionamiento**.

## Cambios verificables
### Tail Pocket
- Ajustada la estadística del estudio O'Neill 2021: odds ratio ajustada **11,18 (IC95% 7,19–17,40)** para **dermatitis de pliegues en cualquier localización**. No es un multiplicador de riesgo individual de infección de pliegue caudal.
- No todos los bulldogs con cola corta tienen un bolsillo profundo. Se desaconseja forzar, sondear con hisopos o manipular colas dolorosas.
- Añadidos los criterios de revisión y derivación a profesional, posibles alternativas médicas/quirúrgicas y la evaluación de la anatomía.
- Fuentes: O'Neill 2021 <https://doi.org/10.1186/s40575-021-00112-3>, VCA [Corkscrew Tails](https://vcacanada.com/know-your-pet/corkscrew-tails), MSPCA-Angell [Tail Fold Intertrigo](https://www.mspca.org/clinical/tail-fold-intertrigo-screw-tail/).

### Vomiting
- Ajustada distinción clínica vómito activo frente a regurgitación pasiva; se evita el consejo de esperar días si hay signos de alarma.
- Reforzada urgencia con arcadas improductivas y abdomen distendido, sangre, colapso, posible obstrucción/intoxicación y dificultad respiratoria.
- Eliminados intervalos caseros sin respaldo, consejos de medicación implícitos, y citas largas; se da prioridad al examen veterinario.
- Añadidas indicaciones sobre vídeo, información para llevar a consulta y posible aspiración.
- Fuentes: Merck [Vomiting in Dogs](https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/vomiting-in-dogs), Merck [Disorders of the Stomach and Intestines](https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/disorders-of-the-stomach-and-intestines-in-dogs), Cambridge BOAS [Recognition & Diagnosis](https://www.vet.cam.ac.uk/boas/about-boas/recognition-diagnosis), Merck [Pneumonia in Dogs](https://www.merckvetmanual.com/dog-owners/lung-and-airway-disorders-of-dogs/pneumonia-in-dogs).
- **Límite de verificación F240:** la página Merck sobre neumonía devolvió 403 en apertura directa; se corroboró la afirmación con extracto del buscador y se registra como acceso parcial, no como verificación directa completa.

## Imágenes y social
- `/images/hero/french-bulldog-tail-pocket-vet-ai.webp` — imagen IA original 1672×941, 198.936 bytes; no se presenta como imagen diagnóstica de un pliegue patológico.
- `/images/hero/french-bulldog-vomiting-vs-regurgitation.webp` — infografía editorial original 1672×941, 81.646 bytes, información del manual Merck.
- Para compatibilidad de vistas previas: versiones JPEG `/images/social/french-bulldog-tail-pocket-vet-ai-social.jpg` y `/images/social/french-bulldog-vomiting-vs-regurgitation-social.jpg`, ambas 1200×630.
- Cada artículo conserva la imagen WebP principal en su cuerpo, y `meta.socialImage` selecciona JPEG en `og:image` / `twitter:image`; `Article.image` conserva el WebP de buena resolución. El componente `Seo.astro` genera URL absoluta, ALT y dimensiones.
- Archivos y derechos inventariados en `data/imagenes/registro.json`.

## SEO y controles
- Títulos SEO de 48 y 47 caracteres; descripciones de 150 y 145 caracteres.
- Preguntas frecuentes visibles de contenido útil; **sin prometer resultados enriquecidos de FAQ** (Google los retiró mayo 2026).
- Intención respondida al principio; H2 prácticos y apartados de urgencia. Las temperaturas, si se incorporan en revisiones futuras, deberán expresarse en °F y °C entre paréntesis.
- `Article` y `BreadcrumbList` ya implementados en la plantilla: no añadir `MedicalWebPage` sin fundamento.
- Un estudio y un sitio web de referencia no sustituyen revisión clínica profesional.
- **Pendiente** comprobar compilación Astro, despliegue Cloudflare, tamaño real transferido en el navegador, Core Web Vitals y cómo muestran redes sociales las tarjetas tras cacheo. No confundir fusión en `main` con despliegue comprobado.
