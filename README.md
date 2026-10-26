# HolaContable — Página Web

Sitio estático (HTML/CSS/JS, sin build) para una firma de contabilidad.

## Estructura
- `index.html` — contenido de la página
- `styles.css` — estilos
- `script.js` — menú móvil, cabecera, formulario por WhatsApp y año dinámico
- `assets/logo.png`, `assets/favicon.svg` — logo e ícono
- `404.html` — página de error
- `_headers`, `wrangler.jsonc`, `.assetsignore` — despliegue en Cloudflare

## Flujo de trabajo
- `main` es la rama que se publica en holacontable.com (Cloudflare despliega en cada push).
- Los cambios nuevos se hacen en una rama aparte y se fusionan a `main` cuando están aprobados.

## Despliegue
Cloudflare detecta `wrangler.jsonc` y publica los archivos como Static Assets. No requiere comando de compilación.
Localmente: `npx wrangler deploy`.
