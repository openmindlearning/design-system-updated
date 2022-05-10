import { style } from "@vanilla-extract/css";

import { theme, FontWeight } from "../../themes";

export const disclaimer = style([
  theme.text.body.xsmall,
  {
    width: "100%",
    textAlign: "center",
    color: theme.colors.content.tertiary,
  },
]);

export const link = style([
  theme.text.body.xsmall,
  {
    textDecoration: "underline",
    fontWeight: FontWeight.semibold,
    color: theme.colors.content.tertiary,
  },
]);
