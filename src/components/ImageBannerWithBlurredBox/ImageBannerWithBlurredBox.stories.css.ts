import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const blurredBox = style([
  theme.text.display.medium,
  {
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "6px",
    padding: "50px",
  },
]);
