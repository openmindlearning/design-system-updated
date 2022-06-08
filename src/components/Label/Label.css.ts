import { style, styleVariants } from "@vanilla-extract/css";
import { atTabletBreakpoint } from "../../util";
import { theme, FontWeight } from "../../themes";

export const base = style([
  theme.text.body.xsmall,
  {
    alignItems: "center",
    display: "flex",
    borderRadius: "8px",
    justifyContent: "center",
    padding: "2px 8px",
    width: "max-content",
    "@media": {
      ...atTabletBreakpoint({
        ...theme.text.body.xxsmall,
        fontWeight: FontWeight.semibold,
      }),
    },
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
  black: {
    background: theme.colors.primary.black,
    color: theme.colors.content.light,
  },
  primaryYellow: {
    background: theme.colors.primary.yellow,
    color: theme.colors.content.primary,
  },
  platinum: {
    background: theme.colors.platinum[150],
    color: theme.colors.content.light,
  },
});

export const sizeVariant = styleVariants({
  small: [theme.text.body.xxsmall, { fontWeight: FontWeight.semibold }],
  medium: [theme.text.body.xsmall, { fontWeight: FontWeight.semibold }],
  large: [theme.text.body.small, { fontWeight: FontWeight.semibold }],
});

export const icon = style({ marginRight: "4px" });
