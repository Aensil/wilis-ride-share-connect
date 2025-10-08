# WILIS S.A.S — Coordinación de viajes colaborativos

Sitio landing desarrollado con React + Vite para presentar la propuesta de carpooling de WILIS S.A.S. El objetivo es explicar el servicio, invitar a la comunidad y dirigir los contactos hacia WhatsApp, manteniendo una comunicación honesta sobre el alcance real (coordinación manual, sin app propia).

## Características principales
- Secciones informativas (beneficios, funcionamiento, FAQ y resultados del piloto) completamente editables.
- Copia revisada para reflejar el estado actual del proyecto: coordinación manual vía WhatsApp y responsabilidad compartida entre los participantes.
- Enlaces CTA centralizados en una sola variable (`VITE_WHATSAPP_LINK`) para evitar enlaces rotos.
- Páginas legales simplificadas y consistentes con el servicio real, con fechas de actualización gestionadas desde configuración.
- Configuración lista para desplegar en GitHub Pages o en cualquier servicio estático.

## Requisitos previos
- Node.js 18 o superior.
- npm 9 o superior.

## Instalación y uso
1. Clona el repositorio y entra al directorio del proyecto.
2. Crea un archivo `.env` a partir de `.env.example` y ajusta los valores.
3. Instala dependencias y levanta el entorno de desarrollo:

```bash
npm install
npm run dev
```

4. Otras tareas disponibles:

```bash
npm run lint     # Ejecuta ESLint
npm run check    # Lint + build (smoke test)
npm run preview  # Sirve el build generado en local
```

## Configuración mediante variables de entorno
| Variable | Obligatoria | Descripción |
|----------|-------------|-------------|
| `VITE_WHATSAPP_LINK` | Sí | URL completa al chat oficial de WhatsApp (`https://wa.me/<número>`). |
| `VITE_BASE_PATH` | No | Sobrescribe la ruta base del build. Úsalo solo si necesitas forzar un subdirectorio distinto. |
| `VITE_SITE_URL` | No (por defecto `https://wiliss.com`) | URL pública del sitio. La configuración de despliegue detecta el dominio y ajusta rutas/manifest. |

> Consejo: mantén los valores sensibles fuera del control de versiones usando `.env.local`.

## Estructura relevante
- `src/lib/site-data.ts`: configuración reutilizable (WhatsApp, fecha legal y métricas del piloto).
- `src/components/`: secciones del landing. Cada componente usa datos centralizados para facilitar ajustes.
- `src/pages/`: páginas informativas incluidas en el router (`/`, `/terminos-condiciones`, `/politica-privacidad`).

## Despliegue en GitHub Pages

El repositorio incluye un workflow (`.github/workflows/deploy.yml`) que construye la aplicación y publica automáticamente a través de GitHub Pages (modo *GitHub Actions*) cada vez que se hace push a `main` o se lanza manualmente desde *Actions*. La acción:

1. Instala dependencias y corre `npm run build`.
2. Sube el contenido de `dist/` como artefacto y lo despliega con `actions/deploy-pages`, manteniendo el dominio `wiliss.com`.

Para que esto funcione, asegúrate de que la configuración de Pages en GitHub apunte a **GitHub Actions** (no a una rama específica).

Si prefieres un despliegue manual para pruebas puntuales, todavía puedes usar:

```bash
npm run check   # opcional, smoke test
npm run deploy  # publica dist/ en gh-pages
```

En ese caso síguele indicando a Pages la rama `gh-pages` (directorio raíz). El build genera rutas y el `site.webmanifest` bajo la raíz del dominio personalizado.

## Personalización rápida
- **Copy y cifras:** ajusta los textos de las secciones (por ejemplo `src/components/Benefits.tsx` o `src/components/SocialProof.tsx`).
- **Aspecto visual:** modifica colores y gradientes en `src/index.css` o añade clases Tailwind directamente en los componentes.
- **Fecha legal:** actualiza una sola vez en `src/lib/site-data.ts` para que se refleje en términos y privacidad.

## Contribuciones y soporte
Sugerencias y mejoras son bienvenidas. Antes de abrir un PR, ejecuta `npm run check` para validar que el proyecto compila sin advertencias.
