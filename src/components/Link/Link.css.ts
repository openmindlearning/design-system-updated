import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const baseLink = style([
  theme.text.label.small,
  {
    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
]);

export const linkVariant = styleVariants({
  underline: {
    textDecoration: "underline",
  },
  noUnderline: {
    textDecoration: "none",
  },
});
