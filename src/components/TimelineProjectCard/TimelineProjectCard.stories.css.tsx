import { style } from "@vanilla-extract/css";
import { atTabletBreakpoint } from "../../util";

export const image = style({
  width: "148px",
  height: "148px",
  objectFit: "cover",
  borderRadius: "8px",

  "@media": {
    ...atTabletBreakpoint({
      width: "78px",
      height: "78px",
    }),
  },
});
