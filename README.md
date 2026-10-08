# HolaContable — Página Web

Sitio web estático (HTML/CSS/JS, sin build) para una firma de contabilidad.

## Estructura

- `index.html` — contenido de la página
- `styles.css` — estilos
- `script.js` — menú móvil, formulario de contacto y año dinámico
- `assets/favicon.svg` — ícono del sitio
- `_headers` — cabeceras de seguridad para Cloudflare Pages

## Despliegue en Cloudflare Pages

Como es un sitio estático, no requiere comando de build:

1. En Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**, selecciona este repositorio.
2. Configuración de build:
   - **Framework preset:** None
   - **Build command:** (déjalo vacío)
   - **Build output directory:** `/`
3. Guarda y despliega. Cada push a la rama conectada disparará un nuevo despliegue.

También puedes desplegar localmente con Wrangler:

```bash
npx wrangler pages deploy . --project-name=holacontable
```
