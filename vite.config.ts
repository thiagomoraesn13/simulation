import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // carrega .env.* + process.env (inclui as envs do GitHub Actions)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    // IMPORTANTE: em lib build, usar define garante que o valor entra no bundle.
    define: {
      "import.meta.env.VITE_ACCOUNTS_API_URL": JSON.stringify(
        env.VITE_ACCOUNTS_API_URL,
      ),
      "import.meta.env.VITE_API_CLIENT_ID": JSON.stringify(
        env.VITE_API_CLIENT_ID,
      ),
      // Evite embutir secret no frontend:
      // "import.meta.env.VITE_API_CLIENT_SECRET": JSON.stringify(env.VITE_API_CLIENT_SECRET),
      "import.meta.env.VITE_TOPAZ_DEVICE_CLIENT": JSON.stringify(
        env.VITE_TOPAZ_DEVICE_CLIENT,
      ),
      "import.meta.env.VITE_PLATFORM_HEADER": JSON.stringify(
        env.VITE_PLATFORM_HEADER,
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
