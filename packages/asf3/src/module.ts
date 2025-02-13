import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin?: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@repro/asf3",
    configKey: "asf3",
  },
  defaults: {
    addPlugin: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    if (options.addPlugin) {
      addPlugin(resolver.resolve("./runtime/plugin"));
    }
  },
});
