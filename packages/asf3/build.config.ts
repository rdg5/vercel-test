import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/module"],
  declaration: true,
  externals: ["@nuxt/kit", "@nuxt/schema"],
});
