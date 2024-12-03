import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/News-Homepage/", // Setează calea relativă pentru GitHub Pages
  plugins: [react()],
});
