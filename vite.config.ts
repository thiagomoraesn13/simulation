import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // 1) lê .env.* (se existir)
  const fileEnv = loadEnv(mode, process.cwd(), "");

  // 2) prioridade pro CI (process.env), fallback pros .env files
  const get = (k: string) => process.env[k] ?? fileEnv[k] ?? "";

  // (debug TEMPORÁRIO - tira depois)
  console.log("[build] mode:", mode);
  console.log("[build] VITE_ACCOUNTS_API_URL:", get("VITE_ACCOUNTS_API_URL"));
  console.log("[build] VITE_API_CLIENT_ID:", get("VITE_API_CLIENT_ID"));

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_ACCOUNTS_API_URL": JSON.stringify(
        get("VITE_ACCOUNTS_API_URL"),
      ),
      "import.meta.env.VITE_API_CLIENT_ID": JSON.stringify(
        get("VITE_API_CLIENT_ID"),
      ),
      "import.meta.env.VITE_TOPAZ_DEVICE_CLIENT": JSON.stringify(
        get("VITE_TOPAZ_DEVICE_CLIENT"),
      ),
      "import.meta.env.VITE_PLATFORM_HEADER": JSON.stringify(
        get("VITE_PLATFORM_HEADER"),
      ),
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "Simulation",
        formats: ["es", "umd"],
        fileName: (format) => (format === "es" ? "index.js" : "index.umd.cjs"),
      },
      sourcemap: true,
      emptyOutDir: true,
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react-router-dom",
          "react/jsx-runtime",
          "@thiagomoraesn13/ui",
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
  };
});
