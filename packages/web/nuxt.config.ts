// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
  },
  build: {
    transpile: ["@repro/shared"],
  },
  vite: {
    optimizeDeps: {
      include: ["@repro/shared"],
    },
  },
});
