import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "repro-module",
  },
  setup(options, nuxt) {
    // Simple setup to demonstrate the issue
    console.log("Module loaded");
  },
});
