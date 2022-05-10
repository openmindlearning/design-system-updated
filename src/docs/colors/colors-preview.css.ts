import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const colorValueRow = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "8px",
});

export const colorValueText = style([
  theme.text.body.medium,
  {
    marginLeft: "8px",
  },
]);

export const colorSwatch = style({
  width: "30px",
  height: "30px",
  borderRadius: "4px",
  border: `1px solid ${theme.colors.border.default}`,
});
