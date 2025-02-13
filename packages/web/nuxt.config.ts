// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  modules: ["@repro/module"],
  nitro: {
    preset: "bun",
  },
});
