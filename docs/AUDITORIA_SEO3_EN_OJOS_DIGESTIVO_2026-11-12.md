# AUDITORÍA SEO 3 — ojos rojos, vómitos y diarrea (EN)

Fecha: 2026-11-12. Rama: `audit/seo3-eyes-digestive-2026-11-12`. Base: `audit/seo2-parasites-behavior-weight-2026-11-12` (PR #35). Sin publicación ni fusión.

## Alcance y hallazgos

Se inspeccionaron tres artículos previamente reescritos, pero no marcados como revisión sustantiva en la matriz SEO2. No se reclamó una nueva redacción integral. Nueve modificaciones puntuales:

1. **french-bulldog-red-eyes**: distinguir enfermedades oculares urgentes (glaucoma agudo y desplazamiento del cristalino) de una simple conjuntivitis; explicitar consulta el mismo día ante dolor, opacidad o blefaroespasmo. Referencia existente #5: Thomasy, *Overview of Ophthalmic Emergencies in Small Animals*, Merck (2024), https://www.merckvetmanual.com/emergency-medicine-and-critical-care/ophthalmic-emergencies-in-small-animals/overview-of-ophthalmic-emergencies-in-small-animals . Recurso consultado directamente 2026-11-12.
2. **french-bulldog-vomiting**: apertura reducida y más directa; sustituir la afirmación genérica que presentaba regurgitación y arcadas como asociadas frecuentemente a BOAS por una formulación que distingue signo posible de diagnóstico; corregir lista de causas no sustentada por una cita cercana; distinguir enfermedades digestivas y extradigestivas. #1 Webb, *Vomiting in Dogs*, Merck (revisión 2018, actualización 2024), https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/vomiting-in-dogs . Consulta directa 2026-11-12. #2 Universidad de Cambridge, *Recognition & Diagnosis*, https://www.vet.cam.ac.uk/boas/about-boas/recognition-diagnosis . Texto pertinente contrastado mediante indexación web; **acceso directo dio 403**. No presentar la fuente Cambridge como inspeccionada íntegramente.
3. **french-bulldog-diarrhea**: umbral orientativo de 48 horas condicionado por signos de alarma, evitar golosinas y alimentos grasos sin imponer restricciones absolutas, y aclarar que parvovirus es una posibilidad diagnóstica, no una conclusión por síntomas. #5 Cornell University College of Veterinary Medicine, *Diarrhea*, https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/diarrhea . Texto inspeccionado directamente 2026-11-12. La referencia #2 sobre parvovirus ya existía en el artículo y requiere control integral posterior.

## QA y límites

- Se conservaron slugs, estructura HTML, numeración de fuentes y metadatos de imágenes existentes.
- No se agregaron fuentes nuevas al registro: **256** referencias se mantienen; se reutilizaron referencias específicas ya presentes.
- La matriz pasa a **28/56** artículos con revisión individual documentada; faltan **28/56**.
- No se verificaron en navegador el HTML renderizado, ni el build Astro, GSC, Cloudflare, esquema estructurado, rendimiento móvil, accesibilidad integral ni derechos de imágenes.
- La mención de Cambridge se comprobó mediante resultado indexado y queda pendiente la inspección directa por el bloqueo 403. No se afirma una revisión médica profesional.
- Los tres artículos mantienen aprobación editorial **pendiente**. No publicar ni fusionar el PR.
