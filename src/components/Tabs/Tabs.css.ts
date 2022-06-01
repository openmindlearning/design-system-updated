import { style, styleVariants } from "@vanilla-extract/css";
import { FontWeight, theme } from "../../themes";

export const menu = style({
  padding: 0,
  margin: 0,
  display: "flex",
  borderBottom: `1px solid ${theme.colors.border.default}`,
});

export const li = style({
  listStyle: "none",
  overflow: "hidden",
});

const baseTabStyles = style({
  padding: `${theme.spacing["2x"]} ${theme.spacing["4x"]}`,
  borderBottom: `${theme.spacing["1x"]} solid unset`,
  transition: "150ms ease background-color",
  ...theme.text.body.medium,
});

export const tab = styleVariants({
  selected: [
    baseTabStyles,
    {
      fontWeight: FontWeight.semibold,
      color: theme.colors.content.primary,
      borderBottom: `${theme.spacing["1x"]} solid ${theme.colors.content.primary}`,
    },
  ],
  unselected: [
    baseTabStyles,
    {
      fontWeight: FontWeight.normal,
      color: theme.colors.content.tertiary,
      position: "relative",
      ":after": {
        content: "",
        position: "absolute",
        bottom: `calc(${theme.spacing["1x"]} * -1)`,
        left: 0,
        width: "100%",
        height: theme.spacing["1x"],
        backgroundColor: theme.colors.border.default,
        transform: `translateY(${theme.spacing["1x"]})`,
        transition: "150ms ease transform",
      },
      ":hover": {
        backgroundColor: theme.colors.background.tertiary,
      },
      selectors: {
        "&:hover::after": {
          transform: "translateY(0px)",
        },
      },
    },
  ],
});
