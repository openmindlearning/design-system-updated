import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const themeExampleContainer = style({
  backgroundColor: theme.colors.background.primary,
  padding: "20px",
  color: theme.colors.content.primary,
});

export const exampleHeading = style([
  theme.text.header.medium,
  {
    paddingTop: "30px",
  },
]);
