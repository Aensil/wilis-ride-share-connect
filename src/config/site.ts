export const siteConfig = {
  baseUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "https://wiliss.com",
  ogImage: (import.meta.env.VITE_OG_IMAGE as string | undefined) || "/og-image.svg",
};
