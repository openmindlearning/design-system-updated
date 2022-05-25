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
  margin: theme.spacing["1x"],
  userSelect: "none",
});
