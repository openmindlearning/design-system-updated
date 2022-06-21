import { style, styleVariants } from "@vanilla-extract/css";
import { FontWeight, theme } from "../../themes";

export const menu = style({
  padding: 0,
  margin: 0,
  display: "flex",
  overflowX: "auto",
  overflowY: "hidden",

  // Hide horizontal scrollbar on Chrome, Safari, Opera
  "::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none", // Hide scrollbar on Firefox
  msOverflowStyle: "none", // Hide scrollbar on IE and Edge
});

export const li = style({
  whiteSpace: "nowrap",
  listStyle: "none",
  // Make sure list items have no unintentional margin around them
  marginBlockStart: 0,
  marginBlockEnd: 0,
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
