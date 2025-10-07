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
| `VITE_BASE_PATH` | No (por defecto `/`) | Ruta base usada en el build. Para GitHub Pages usa `/<nombre-del-repo>/`. |

> Consejo: mantén los valores sensibles fuera del control de versiones usando `.env.local`.

## Estructura relevante
- `src/lib/site-data.ts`: configuración reutilizable (WhatsApp, fecha legal y métricas del piloto).
- `src/components/`: secciones del landing. Cada componente usa datos centralizados para facilitar ajustes.
- `src/pages/`: páginas informativas incluidas en el router (`/`, `/terminos-condiciones`, `/politica-privacidad`).

## Despliegue en GitHub Pages
1. Asegúrate de haber configurado `VITE_BASE_PATH` con el nombre del repositorio (por ejemplo `/wilis-ride-share-connect/`).
2. Ejecuta la verificación completa:
   ```bash
   npm run check
   ```
3. Lanza el despliegue:
   ```bash
   npm run deploy
   ```
   Este comando construye el proyecto y publica el contenido de `dist/` en la rama `gh-pages` mediante `gh-pages`.
4. En GitHub, habilita Pages apuntando a la rama `gh-pages` (directorio raíz). Cada nuevo `npm run deploy` actualizará el sitio.

## Personalización rápida
- **Copy y cifras:** ajusta los textos de las secciones (por ejemplo `src/components/Benefits.tsx` o `src/components/SocialProof.tsx`).
- **Aspecto visual:** modifica colores y gradientes en `src/index.css` o añade clases Tailwind directamente en los componentes.
- **Fecha legal:** actualiza una sola vez en `src/lib/site-data.ts` para que se refleje en términos y privacidad.

## Contribuciones y soporte
Sugerencias y mejoras son bienvenidas. Antes de abrir un PR, ejecuta `npm run check` para validar que el proyecto compila sin advertencias.
