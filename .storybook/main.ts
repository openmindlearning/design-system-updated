const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");

module.exports = {
  stories: [
    "../src/docs/intro/intro.stories.mdx", // show intro doc first
    "../src/docs/**/**.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // This addon has a bug with vite that will be fixed soon
    // See: https://github.com/storybookjs/storybook/pull/17535
    // "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: { builder: "storybook-builder-vite" },
  async viteFinal(config) {
    config.plugins.push(vanillaExtractPlugin());
    return config;
  },
  staticDirs: ["./public"],
};
