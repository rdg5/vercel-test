import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import type { ModuleOptions } from "@repro/types";
import { getConfig } from "@repro/helpers";

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@repro/asf3",
    configKey: "asf3",
  },
  defaults: {
    addPlugin: true,
  },
  setup(options, nuxt) {
    const config = getConfig();
    const resolver = createResolver(import.meta.url);

    nuxt.options.runtimeConfig.public.asf3 = {
      version: config.version,
    };

    if (options.addPlugin) {
      addPlugin(resolver.resolve("./runtime/plugin"));
    }
  },
});
