import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const SITE_URL = (process.env.SITE_URL || process.env.VITE_SITE_URL || "https://wiliss.com").replace(/\/$/, "");

const routes = ["/", "/terminos-condiciones", "/politica-privacidad"];

const urlEntries = routes
  .map((route) => {
    const loc = `${SITE_URL}${route === "/" ? "/" : route}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${route === "/" ? "1.0" : "0.6"}</priority>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const outputDir = resolve("dist");

await mkdir(outputDir, { recursive: true });
await writeFile(resolve(outputDir, "sitemap.xml"), sitemap, "utf8");

console.log(`✅ Sitemap generated at ${resolve(outputDir, "sitemap.xml")}`);
