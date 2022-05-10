import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const selectionCard = style({
  borderRadius: "12px",
  background: theme.colors.primary.white,
  boxShadow: theme.boxShadows.depth[3],
});
