# Instrucciones para Claude

## Search Console todos los días (Directiva 5, orden de Carlos 19/11/2026)

Antes de cualquier otro trabajo, cada día: leé el informe de hoy en GitLab `carlos-proyectos/search-console`, archivo `bulldogfrances.com/ULTIMO.md` (sin clave), hacé sus "Tareas de hoy", anotá en la memoria qué corregiste y, después de publicar, sumá las URLs cambiadas a `bulldogfrances.com/PEDIDOS.txt` de ese repo. Paso a paso completo: [docs/SEARCH-CONSOLE-DIARIO.md](docs/SEARCH-CONSOLE-DIARIO.md). Desde la nube https://bulldogfrances.com/sc/ da 403: es normal, usá GitLab.


## Clave privada de ANUNCIANTES (D-43, 20/11/2026)

`/go/README_FIRST`, `/go/README`, los archivos internos de `/go/` (`_mapa.json`, `_convertir.mjs`, etc.), `/kp/README` y `/sc/README` se leen siempre con la cabecera `x-go-clave` (o `?clave=`), tomando la clave del archivo `.anunciantes/clave-go`. El repo es público: esa carpeta está en `.gitignore` y la clave nunca se sube ni va en `public/`, `dist/` o HTML. Si falta el archivo, sacala de los archivos del proyecto (`.anunciantes/clave-go`). Detalle y ayudante: [docs/CLAVE-ANUNCIANTES.md](docs/CLAVE-ANUNCIANTES.md), `node scripts/leer-anunciantes.mjs go/README_FIRST`.
