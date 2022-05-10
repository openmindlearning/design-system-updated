import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const childrenComponent = style({
  minWidth: "100px",
  backgroundColor: theme.colors.grey[100],
  margin: "8px",
  padding: "8px",
});

export const bodyText = style(theme.text.body.medium);
export const displayText = style(theme.text.display.large);
