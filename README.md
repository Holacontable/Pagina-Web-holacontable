# HolaContable — Página Web

Sitio web estático (HTML/CSS/JS, sin build) para una firma de contabilidad.

## Estructura

- `index.html` — contenido de la página
- `styles.css` — estilos
- `script.js` — menú móvil, formulario de contacto y año dinámico
- `assets/favicon.svg` — ícono del sitio
- `_headers` — cabeceras de seguridad para Cloudflare Pages

## Despliegue en Cloudflare

El proyecto trae `wrangler.jsonc` configurado para servir los archivos como **Static Assets** de un Cloudflare Worker, que es el modo que usa el dashboard cuando el servicio aparece bajo "Workers & Pages" → tipo **Workers**.

- No requiere build command (el sitio es HTML/CSS/JS plano).
- Al conectar el repo, Cloudflare detecta `wrangler.jsonc` y despliega los assets automáticamente en cada push.

También puedes desplegar localmente con Wrangler:

```bash
npx wrangler deploy
```

### Si el proyecto es de tipo "Pages" (no Workers)

1. En Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Configuración de build:
   - **Framework preset:** None
   - **Build command:** (déjalo vacío)
   - **Build output directory:** `/`
