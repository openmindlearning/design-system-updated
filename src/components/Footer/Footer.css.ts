import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const container = style({
  background: theme.colors.primary.black,
  display: "flex",
  justifyContent: "center",
});
