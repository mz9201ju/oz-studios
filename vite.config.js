import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/oz-it-studios/",   // <--- YOUR REPO NAME HERE
  build: {
    outDir: "dist",
  }
});
