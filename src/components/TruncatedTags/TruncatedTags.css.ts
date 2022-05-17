import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const hiddenRender = style({
  visibility: "hidden",
  position: "absolute",
  top: "-200px",
});

export const boundingContainer = style({
  display: "flex",
  flexWrap: "wrap",
});

export const tag = style({
  margin: "5px",
  userSelect: "none",
});

export const popover = style({
  maxWidth: "424px",
  display: "flex",
  flexWrap: "wrap",
  background: theme.colors.content.light,
  border: `1px solid ${theme.colors.border.opaque}`,
  borderRadius: "8px",
  zIndex: 100,
  padding: "16px",
});
