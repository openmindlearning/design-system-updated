import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const blurredBoxWrapper = style({
  width: "500px",
  height: "200px",
  backgroundColor: theme.colors.primary.yellow,
  display: "flex",
  justifyContent: "center",
});

export const blurredBox = style([
  theme.text.display.small,
  {
    textTransform: "uppercase",
    width: "100%",
    margin: "auto",
    padding: "25px",
    textAlign: "center",
  },
]);
