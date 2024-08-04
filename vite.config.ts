import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const configs = { plugins: [react()] };
  if (command === "serve") {
    // npm run dev AKA development
    return { ...configs, base: "" };
  } else {
    // npm run build AKA production deployment
    return { ...configs, base: "/game-hub" };
  }
});

