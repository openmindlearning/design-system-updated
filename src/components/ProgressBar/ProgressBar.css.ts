import { style, styleVariants } from "@vanilla-extract/css";

import { theme } from "../../themes";

export const container = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
});

export const barToFill = style({
  background: theme.colors.background.warm,
  borderRadius: "60px",
  height: "10px",
  width: "100%",
});

const barFillBase = {
  borderRadius: "60px",
  height: "10px",
};

export const barFill = styleVariants({
  full: { ...barFillBase, background: theme.colors.green["500"] },
  notFull: { ...barFillBase, background: theme.colors.content.accentPrimary },
});

export const percentageText = style([
  theme.text.body.small,
  {
    marginLeft: theme.spacing["4x"],
    color: theme.colors.grey[600],
  },
]);
