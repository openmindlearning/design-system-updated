import { style, styleVariants } from "@vanilla-extract/css";
import { theme, FontWeight } from "../../themes";

export const base = style([
  theme.text.body.xsmall,
  {
    alignItems: "center",
    display: "flex",
    borderRadius: "8px",
    fontWeight: FontWeight.semibold,
    justifyContent: "center",
    padding: "2px 8px",
    width: "max-content",
  },
]);

export const variant = styleVariants({
  grey: {
    background: theme.colors.background.tertiary,
    color: theme.colors.content.tertiary,
  },
  green: {
    background: theme.colors.background.success,
    color: theme.colors.content.success,
  },
  yellow: {
    background: theme.colors.background.warning,
    color: theme.colors.content.warning,
  },
  red: {
    background: theme.colors.background.danger,
    color: theme.colors.content.danger,
  },
});

export const icon = style({ marginRight: "4px" });
