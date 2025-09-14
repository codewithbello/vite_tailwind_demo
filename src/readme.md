1. npm create vite@latest
2. Enter your project name (without space and lower case)
3. Selct Vanilla framework
4. Select JavaScript variant
5. cd project-name
6. npm install
7. npm run dev
8. ctrl + c
9. npm install tailwindcss @tailwindcss/vite
10. Configure the Vite plugin by adding the @tailwindcss/vite plugin to your Vite configuration
    This is done by creating a vite.config.js file and then paste this below code in the created file

    ```js
    import { defineConfig } from "vite";
    import tailwindcss from "@tailwindcss/vite";

    export default defineConfig({
      plugins: [tailwindcss()],
    });
    ```

11. Add `@import "tailwindcss"` to the `./src/style.css` file to imports the Tailwind CSS.
12. Add `<link rel="stylesheet" href="/src/style.css" />` to `index.html` file
13. npm run dev

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* place-items: center; */
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vanilla:hover {
  filter: drop-shadow(0 0 2em #f7df1eaa);
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
```
