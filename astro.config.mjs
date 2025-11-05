// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import { fileURLToPath } from "url";
import { resolve } from "path";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": resolve(fileURLToPath(new URL("./src", import.meta.url))),
      },
    },
  },

  integrations: [mdx()],
});
