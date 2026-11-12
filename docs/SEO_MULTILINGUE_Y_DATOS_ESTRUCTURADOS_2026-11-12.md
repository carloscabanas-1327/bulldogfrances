# SEO multilingüe y datos estructurados — BULLDOGFRANCES.COM
**Regla editorial y técnica (12 de noviembre de 2026).**

## Estructura y mercado
- `/` es el selector bilingüe; `/en/` es inglés estadounidense y `/es/` es español neutro (no se presentan artículos bilingües).
- Inglés: investigación de intención y métricas @KP en Estados Unidos, idioma inglés (US/en). Español: mercado hispanohablante por país, consultando por separado los mercados relevantes (p. ej., MX/es y US/es); no sumar volúmenes nacionales ni confundir competencia publicitaria con SEO.
- Un artículo debe resolver un problema concreto; el título, descripción, apertura, H2 y preguntas frecuentes se determinan **por idioma e intención**, no mediante traducción literal del otro artículo.
- Cada par EN/ES tiene una ficha editorial de decisiones: consulta @KP con fecha y job, palabra principal y secundarias por mercado, intención, información diferencial, fuentes directas, enlaces internos y revisor. Sin datos KP, indicar "sin métrica comprobada"; no inventar cifras.
- Conservar idéntico rigor científico, DOI, trazabilidad y señales de urgencia; jamás alterar hechos clínicos para crear diferencias artificiales. Español neutro con "tú", kg/°C primero; inglés estadounidense con lb/°F primero.
- Antes de publicar, examinar los dos primeros párrafos, encabezados, ejemplos, FAQ y enlaces internos: identificar qué preguntas responde cada edición y justificar las diferencias. Si es una traducción mecánica, **no aprobar**.
- Una guía sin equivalente en el otro idioma permanece independiente; no inventar enlaces alternativos.

## hreflang y URLs
- Cada par válido referencia su URL canónica propia **y** la versión recíproca: `en-US` y `es`, con URLs HTTPS absolutas y existentes.
- `x-default` se usa exclusivamente para el selector de idiomas `https://www.bulldogfrances.com/` en los conjuntos de la portada y las dos homepages. No enviar de forma predeterminada todas las guías al artículo inglés.
- El HTML y `sitemap.xml` deben reflejar los mismos pares. La versión ES genérica sirve a múltiples países; no marcar `es-MX`, `es-US` o `es-ES` si no hay páginas regionalmente diferenciadas.
- Canonical autoconsistente, sin canonicals cruzados entre idiomas. Mantener las URLs establecidas; redirigir cambios solo tras revisar Search Console y enlaces.

## JSON-LD visible y verificable
- En artículos: `Article` más `BreadcrumbList`. `headline`, `description`, `inLanguage`, `url`, `mainEntityOfPage`, `author` institucional y `publisher` deben coincidir con lo publicado.
- Incluir `image` solo si existe y pertenece al artículo; `dateModified` solo si la fecha de revisión está registrada. No inventar fecha de publicación, revisión veterinaria, calificaciones ni reseñas.
- Las preguntas frecuentes permanecen en HTML para el lector. **No depender de `FAQPage`**: Google dejó de mostrar esos resultados enriquecidos en mayo de 2026.
- Cualquier marcado futuro `Product`, `Review`, `HowTo` o médico requiere comprobar que tiene sentido y que la información está realmente visible en la página; no etiquetar como productos los artículos informativos.

## Control de publicación
1. Abrir ambas guías y las fuentes primarias en el documento preciso, no solo la portada de una institución.
2. Comprobar enlaces, números, diagnósticos, dosis prohibidas, estilo de citas, metadatos y accesibilidad.
3. Comprobar en cada idioma título, gancho, intención de búsqueda, H2, preguntas, enlaces internos y ausencia de traducción mecánica.
4. Verificar el HTML generado: canonical, `hreflang` autorreferente y recíproco, JSON-LD parseable, breadcrumb a URLs reales.
5. Publicar por tanda desde `main`; **solo Cloudflare Pages ejecuta build y deploy**. GitHub es almacenamiento de código; no habilitar GitHub Actions.
6. Confirmar éxito de despliegue y respuesta pública HTTP antes de afirmar publicación.

## Fuentes externas de norma técnica
- Google Search Central: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google Search Central, Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article
- Google Search Central, cambios de FAQ (mayo-junio 2026): https://developers.google.com/search/updates
