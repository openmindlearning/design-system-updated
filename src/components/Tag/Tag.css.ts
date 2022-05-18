import { style, styleVariants } from "@vanilla-extract/css";

import { FontWeight, theme } from "../../themes";

export const button = style({
  cursor: "pointer",
});

export const baseTag = style([
  theme.text.body.small,
  {
    backgroundColor: theme.colors.primary.white,
    fontWeight: FontWeight.semibold,
    borderRadius: "100px",
    width: "max-content",
    padding: `${theme.spacing["2x"]} ${theme.spacing["4x"]}`,
  },
]);

export const tag = styleVariants({
  selected: [
    baseTag,
    {
      color: theme.colors.content.light,
      backgroundColor: theme.colors.platinum["200"],
      border: `1px solid ${theme.colors.platinum["200"]}`,
    },
  ],
  default: [
    baseTag,
    {
      color: theme.colors.content.secondary,
      border: `1px solid ${theme.colors.border.default}`,
    },
  ],
});
