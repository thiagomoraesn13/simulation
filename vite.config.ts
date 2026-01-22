import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "Onboarding",
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
