// @ts-check

import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: netlify(),
  redirects: {
    "/discord": "https://discord.gg/sYQxnuD7Fj",
    "/about": "/#about",
    "/work": "/#work",
    "/socials": "/#socials",
    "/Manami": "/manami",
  }
});