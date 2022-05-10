import { styleVariants } from "@vanilla-extract/css";

export const size = styleVariants({
  small: { height: "15px" },
  medium: { height: "22px" },
  large: { height: "30px" },
});
