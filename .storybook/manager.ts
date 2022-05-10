import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";

addons.setConfig({
  theme: create({
    base: "light",
    brandImage: "logo-light-mode.svg",
    brandTitle: "Studio",
  }),
});
