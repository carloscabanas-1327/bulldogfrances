# Auditoría de fuentes — 3 de noviembre de 2026

Aplicación de la [Orden Maestra de fuentes, citas, hipervínculos y trazabilidad documental v1.0](../directivas/FUENTES_CITAS_HIPERVINCULOS_Y_TRAZABILIDAD_DOCUMENTAL_v1.0.txt) a los 112 artículos de `editorial/` (56 EN y 56 ES).

## Qué se revisó

- 789 referencias que apuntaban a 235 fuentes distintas, más 7 referencias sin enlace.
- Cada fuente se abrió en su documento original para confirmar que existe, que el enlace lleva al documento exacto y que el autor, el título y la fecha son correctos.
- 1.309 pasajes citados se compararon con la fuente que los respalda (hasta 8 por fuente). Resultado inicial: 781 respaldados, 454 parciales, 49 no respaldados y 25 sin poder comprobar. Los parciales eran casi siempre párrafos con varias citas; cada uno se revisó a mano.

## Qué se corrigió

**Afirmaciones (248 revisiones, aplicadas por igual en inglés y en español)**

- 149 frases reescritas para decir exactamente lo que dice la fuente, 26 citas movidas a la fuente correcta, 19 afirmaciones sin respaldo eliminadas y 3 fuentes añadidas. En 51 casos no hacía falta cambiar nada.
- Errores de más peso:
  - El estándar del AKC enlazado era el de **1991**, ya sustituido por el de **2018**. Con el vigente, el azul y el merle son colores descalificantes, los ojos azules o verdes descalifican y la descripción del pelo cambió. Se corrigieron los artículos de merle, azul, ojos azules, pied, fluffy y muda de pelo.
  - Una referencia tenía un **título inexistente** («Health of French Bulldogs in the UK»). Se cambió por el real del estudio de O'Neill et al. 2021, con su DOI.
  - **Citas textuales no literales** (ACVO sobre la ceguera, Merck sobre socialización y educación en casa, estándar FCI en español): ahora son literales.
  - **Cifras mal transcritas**: sordera en merle simple 3,5 % (no 3,6 %); el estudio de protección de recursos fue en un solo refugio de EE. UU.; los 85 expertos fueron invitados, no participantes confirmados; la cifra de 376.000 de la ASPCA cuenta exposiciones, no casos.
  - **Atribuciones equivocadas**: por ejemplo, el estudio de Hiby 2004 citado para un estudio de 2020, el estudio noruego de escaleras atribuido al Royal Kennel Club, o reglas de Alaska Airlines atribuidas a la página que no las contiene.
  - Datos sin fuente retirados: remedios caseros contra pulgas, el ajo, el contacto de 10 minutos con lejía, las encías azuladas o una lista de causas de diarrea sin respaldo (ahora citada a VCA y Merck).

**Enlaces y referencias**

- Todas las listas de referencias están en estilo **Vancouver**, numeradas por orden de primera cita y con el encabezado «Fuentes y referencias» / «Sources and references».
- 36 artículos científicos enlazan ahora a su **DOI** (`https://doi.org/…`) en lugar de PubMed, PMC, AGRIS, Scilit o copias en repositorios.
- 42 enlaces se cambiaron por la dirección canónica del mismo documento. Se quitaron, entre otras, una dirección interna de servidor del RVC, una URL con `&amp;` roto y rutas regionales o antiguas.
- Las 34 páginas que cambian con frecuencia (aerolíneas, normas) llevan la fecha de consulta. Las fuentes en inglés de los artículos en español conservan su título original y terminan con «En inglés.».
- No había parámetros de rastreo (`utm_`, `fbclid`) ni enlaces con textos genéricos («aquí», «fuente»).
- Las referencias que juntaban varios documentos en una sola entrada se separaron (Alaska, Lufthansa, RSPCA).

**Registro interno**

- `data/fuentes/registro.json` tiene una ficha por cada una de las 229 fuentes en uso, con los campos de la sección 9 y las frases de cada artículo que la citan. Ver `data/fuentes/README.md`.

## Qué no se pudo verificar o queda pendiente

1. **Preguntas frecuentes (FAQ) de los `meta.json`**: se muestran en la página pero no llevan citas. Solo se corrigieron las que contradecían las fuentes (lombrices, nariz seca, AKC, Cambridge). Hace falta una revisión completa.
2. **Frases sin ninguna cita**: la auditoría comprobó las afirmaciones citadas. Quedan consejos generales sin cita, sobre todo en las listas de «cuándo ir al veterinario» y de cuidados en casa.
3. **Cobertura parcial en fuentes muy citadas**: se comprobaron hasta 8 pasajes por fuente (1.309 de 2.016). El resto se apoya en los registros de verificación anteriores (`SOURCES_VERIFIED.md` y `editorial/_ledgers/`).
4. **Copias de terceros que se mantienen** porque no se pudo confirmar la copia oficial: las declaraciones de la AVSAB alojadas en sitios universitarios y la ficha de moquillo del AKC Canine Health Foundation alojada por Ohio State.
5. **Títulos deducidos**: las páginas del Royal Kennel Club no tienen título propio y se usa su encabezado. Para el estándar AKC de 2018 se mantuvo el título del de 1991; falta confirmar el encabezado exacto del PDF.
6. **Fuente secundaria**: el artículo de Veterinary Practice sobre cataratas diabéticas resume un estudio de 1999 que no se verificó directamente.
7. **Conflicto de interés señalado**: el estudio piloto sobre el bálsamo para la nariz (Viaud et al. 2025) contó con el fabricante. Ahora se indica en el texto.
8. **Copias archivadas**: no se crearon. El campo `copia_archivada` queda vacío.
9. Ningún artículo tiene revisión veterinaria. El aviso se mantiene.
