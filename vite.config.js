import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  // Replace 'your-repo-name' with the name of your GitHub repository
  base: "/vite_tailwind_demo/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        register: resolve(__dirname, "register.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});
