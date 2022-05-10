import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const themeBoxContainer = style({
  backgroundColor: theme.colors.background.primary,
  padding: "20px",
});

export const headerText = style([
  theme.text.header.xsmall,
  {
    color: theme.colors.content.primary,
  },
]);

export const sampleSquare = style({
  backgroundColor: theme.colors.content.secondary,
  width: "50px",
  height: "50px",
  border: `1px solid ${theme.colors.border.selected}`,
});
