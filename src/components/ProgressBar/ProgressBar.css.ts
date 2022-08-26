import { style } from "@vanilla-extract/css";

import { theme } from "../../themes";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
});

export const barToFill = style({
  borderRadius: "60px",
  height: "10px",
  width: "100%",
});

export const barFill = style({
  borderRadius: "60px",
  height: "10px",
});

export const percentageText = style([
  theme.text.body.small,
  {
    marginLeft: theme.spacing["4x"],
    color: theme.colors.grey[600],
  },
]);
