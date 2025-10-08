import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const normalizeBasePath = (input?: string) => {
    if (!input) return undefined;
    const trimmed = input.trim();
    if (!trimmed || trimmed === "/") return "/";
    const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
    return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
  };

  const envBase = normalizeBasePath(env.VITE_BASE_PATH);
  const repoSlug = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const repoBase = normalizeBasePath(repoSlug);
  const packageName = process.env.npm_package_name?.startsWith("@")
    ? process.env.npm_package_name.split("/")[1]
    : process.env.npm_package_name;
  const packageBase = normalizeBasePath(packageName);
  const base = envBase ?? repoBase ?? packageBase ?? "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
    },
  };
});
