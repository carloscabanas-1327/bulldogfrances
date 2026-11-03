# Registro documental de fuentes

`registro.json` es la ficha de trazabilidad interna de cada fuente citada en los artículos de `editorial/`, según la sección 9 de la [Orden Maestra de fuentes, citas, hipervínculos y trazabilidad documental](../../directivas/FUENTES_CITAS_HIPERVINCULOS_Y_TRAZABILIDAD_DOCUMENTAL_v1.0.txt). Es de uso interno: el sitio no lo publica.

## Campos de cada fuente

| Campo de la orden (sección 9) | Campo en `registro.json` |
|---|---|
| Identificador interno | `id` (F001…) |
| Autor u organismo | `autor_u_organismo`, `autores` (formato Vancouver), `organizacion` |
| Título exacto | `titulo_exacto` (en el idioma original) |
| Fecha de publicación | `fecha_publicacion`, `fecha_actualizacion`, `copyright` |
| Tipo de fuente | `tipo_fuente`, `es_fuente_primaria` |
| DOI o URL canónica | `doi`, `pmid`, `url_canonica` (`https://doi.org/…` cuando hay DOI); `urls_anteriores` guarda los enlaces sustituidos |
| Idioma original | `idioma_original` |
| Página, sección o fragmento | `seccion_relevante` |
| Afirmaciones que respalda | `usos[]`: artículo, número de referencia y frases que la citan |
| Fecha de verificación | `fecha_verificacion` |
| Estado del enlace | `estado_enlace`, `verificado_via` |
| Observaciones editoriales | `observaciones_editoriales`, `resultado_verificacion_afirmaciones` |
| Copia archivada | `copia_archivada` (todavía sin completar) |

Otros: `revista`, `sitio`, `volumen`, `numero`, `paginas`, `acceso` (abierto o restringido), `contenido_dinamico` (true en reglas de aerolíneas y otras páginas que cambian; llevan fecha de consulta en la referencia).

## Estilo de las referencias en los artículos

Vancouver (NLM), igual en inglés y en español, numerado por orden de primera cita:

- Artículo: `Autores. Título enlazado al DOI. Revista. Año;Vol(Núm):páginas. doi:…`
- Página web o documento: `Autor u organismo. Título enlazado [Internet]. Editor; fecha [actualizado …; citado AAAA mmm d].`
- En los artículos en español, las fuentes en inglés conservan su título original (con `lang="en"`) y terminan con «En inglés.».

## Mantenimiento

Al añadir o cambiar una fuente: verificarla contra el documento original, añadir o actualizar su ficha aquí y citarla junto a la afirmación que respalda. Revisar los enlaces periódicamente (sección 13 de la orden).
