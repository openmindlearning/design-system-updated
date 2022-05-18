import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const popover = style({
  maxWidth: "424px",
  display: "flex",
  flexWrap: "wrap",
  background: theme.colors.content.light,
  border: `1px solid ${theme.colors.border.opaque}`,
  borderRadius: "8px",
  padding: "12px",
  boxShadow: theme.boxShadows.depth[2],
});

export const tagContainer = style({
  padding: theme.spacing["2x"],
});
