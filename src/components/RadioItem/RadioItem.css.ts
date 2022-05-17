import { theme } from "../../themes";
import { style } from "@vanilla-extract/css";

export const input = style({
  position: "absolute",
  top: "0",
  width: "1px",
  height: "1px",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  clipPath: "inset(50%)",
  border: "0",
  whiteSpace: "nowrap",
});

export const radioItem = style([
  theme.text.body.medium,
  {
    color: theme.colors.primary.black,
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing["3x"],
    selectors: {
      "&:last-child": {
        marginBottom: "unset",
      },
    },
    position: "relative",
  },
]);

export const label = style({
  display: "flex",
  marginLeft: theme.spacing["3x"],
  cursor: "pointer",
});
