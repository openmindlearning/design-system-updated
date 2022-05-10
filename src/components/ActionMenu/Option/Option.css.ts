import { style } from "@vanilla-extract/css";
import { theme } from "../../../themes";

const { text, colors, spacing } = theme;

export const option = style([
  text.body.xsmall,
  {
    backgroundColor: colors.background.secondary,
    padding: `${spacing["2x"]} ${spacing["3x"]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer",
    borderRadius: "8px",
    margin: 0,
    width: "100%",
    ":hover": {
      backgroundColor: colors.background.primary,
    },
  },
]);
