# BulldogFrances.com

**Proyecto editorial digital bilingüe dedicado al bulldog francés.**  
**Estado:** fase fundacional; sitio nuevo aún no desplegado desde este repositorio.

## Propósito

Construir un recurso editorial duradero sobre el bulldog francés: salud, bienestar, comportamiento, alimentación, cuidados, historia de la raza y actualidad. La prioridad es ofrecer información útil, verificable, clara y respetuosa del bienestar animal.

El contenido propio será el activo central del proyecto. A partir de él podrán producirse materiales derivados para YouTube, Shorts, Reels y otras plataformas, conservando las fuentes y el historial de revisiones.

## Idiomas y mercados

Desde el inicio, el español y el inglés se desarrollarán como líneas editoriales separadas dentro de un único proyecto:

- **Español:** `/es/`
- **English (US):** `/en/`

Cada versión tendrá navegación, portada, URLs, metadatos, investigación de búsquedas y planificación editorial propios. Los artículos equivalentes podrán enlazarse mediante `hreflang`; no se presume que todo artículo tenga una traducción. No se aplicarán redirecciones automáticas por ubicación geográfica.

El alcance geográfico específico de la edición española queda pendiente de decisión.

## Principios editoriales

1. Veracidad, trazabilidad de fuentes e independencia editorial.
2. Bienestar animal por encima de intereses comerciales.
3. Información veterinaria basada en evidencia, sin sustituir la consulta profesional.
4. Lenguaje natural, comprensible y adaptado a cada audiencia.
5. Diferenciar hechos verificados, hipótesis, opiniones y contenido patrocinado.
6. No inventar testimonios, métricas, experiencias, estudios ni resultados.
7. Conservar versiones y registrar cambios sustantivos.
8. Ninguna publicación remota o cambio de infraestructura sin autorización expresa del responsable.

## Arquitectura prevista (propuesta, no implementada)

```text
bulldogfrances/
├── README.md
├── docs/
│   ├── decisiones/
│   └── investigacion/
├── content/
│   ├── es/
│   └── en/
├── public/
│   ├── es/
│   ├── en/
│   └── images/
├── data/
│   └── fuentes/
└── scripts/
```

GitHub será el repositorio de código, contenidos, evidencias y versiones. Se evaluará Cloudflare para el despliegue. Esta estructura no implica que las carpetas, automatizaciones o el sitio ya existan.

## Sitio existente y migración

BulldogFrances.com tiene antecedentes de publicación en Blogger. **No se debe sustituir ni desconectar el sitio actual sin una auditoría previa.**

Antes de migrar:

1. Obtener respaldo completo de Blogger, páginas, artículos y recursos.
2. Inventariar URLs existentes, enlaces, indexación y datos disponibles de Search Console.
3. Definir correspondencias y redirecciones de URLs cuando correspondan.
4. Construir y probar ambas versiones lingüísticas en un entorno de prueba.
5. Revisar accesibilidad, rendimiento, SEO técnico y contenido.
6. Solicitar aprobación expresa antes de modificar DNS o publicar.

## Desarrollo y distribución

La secuencia prevista es: **investigación documentada → artículo original → revisión editorial y científica → publicación autorizada → formatos derivados → seguimiento y actualización**.

Las relaciones comerciales o de afiliación, si se incorporan, deberán estar identificadas y no condicionar las conclusiones editoriales.

## Gobierno del proyecto

BulldogFrances.com es una unidad editorial independiente, que podrá aprovechar procedimientos de SISTEMA DIGITAL sin heredar automáticamente normas, taxonomías ni decisiones de otros sitios. Las decisiones estratégicas, la aprobación normativa y la autorización de publicación corresponden al responsable humano.

## Próximos pasos

- Confirmar alcance de la edición española.
- Auditar y respaldar el sitio actual en Blogger.
- Aprobar arquitectura técnica y estructura de contenidos.
- Crear el diseño editorial bilingüe y un entorno de pruebas.
- Definir una política de fuentes, revisiones y derechos de imágenes.

## Derechos

El contenido y las imágenes conservarán sus derechos y licencias correspondientes. **Este repositorio no concede una licencia general de reutilización.** No incorporar material de terceros sin verificar permisos y atribuciones.
