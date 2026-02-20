import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Garante que a variável existe.
 * Se não existir, quebra o build.
 */
function must(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`[env] Missing required environment variable: ${key}`);
  }

  return value;
}

export default defineConfig({
  plugins: [react()],

  define: {
    "import.meta.env.VITE_ACCOUNTS_API_URL": JSON.stringify(
      must("VITE_ACCOUNTS_API_URL"),
    ),
    "import.meta.env.VITE_API_CLIENT_ID": JSON.stringify(
      must("VITE_API_CLIENT_ID"),
    ),
    "import.meta.env.VITE_TOPAZ_DEVICE_CLIENT": JSON.stringify(
      must("VITE_TOPAZ_DEVICE_CLIENT"),
    ),
    "import.meta.env.VITE_PLATFORM_HEADER": JSON.stringify(
      must("VITE_PLATFORM_HEADER"),
    ),
    // ⚠️ NÃO RECOMENDADO expor secret no frontend:
    // "import.meta.env.VITE_API_CLIENT_SECRET": JSON.stringify(
    //   must("VITE_API_CLIENT_SECRET")
    // ),
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
});
