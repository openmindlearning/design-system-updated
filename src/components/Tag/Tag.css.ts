import { style } from "@vanilla-extract/css";

import { FontWeight, theme } from "../../themes";

export const tag = style([
  theme.text.body.small,
  {
    color: theme.colors.content.secondary,
    fontWeight: FontWeight.semibold,
    border: `1px solid ${theme.colors.border.default}`,
    borderRadius: "100px",
    width: "max-content",
    padding: "5px 10px",
    margin: "5px",
    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
]);
