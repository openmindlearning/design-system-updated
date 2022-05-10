import { style } from "@vanilla-extract/css";

export const blurredBox = style({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});
