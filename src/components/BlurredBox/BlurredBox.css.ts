import { style } from "@vanilla-extract/css";

export const blurredBox = style({
  boxSizing: "border-box",
  background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(40px)",
});
