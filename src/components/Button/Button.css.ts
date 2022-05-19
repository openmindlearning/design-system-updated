import { style, styleVariants } from "@vanilla-extract/css";

import { theme } from "../../themes";
import { FontWeight } from "../../tokens";

export const baseButton = style([
  theme.text.body.medium,
  {
    fontWeight: FontWeight.semibold,
    border: 0,
    borderRadius: "8px",
    transition: "background-color 0.2s, border 0.2s ease-in-out",
    padding: "9px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
]);

export const buttonVariant = styleVariants({
  primary: {
    backgroundColor: theme.colors.primary.black,
    color: theme.colors.primary.white,
    border: `1px solid ${theme.colors.primary.black}`,

    selectors: {
      "&:hover": {
        backgroundColor: theme.colors.content.secondary,
        border: `1px solid ${theme.colors.content.secondary} !important`,
      },

      "&:focus": {
        backgroundColor: theme.colors.primary.black,
        border: `1px solid ${theme.colors.primary.black}`,
      },

      "&:disabled": {
        cursor: "auto",
        backgroundColor: theme.colors.content.muted,
        border: `1px solid ${theme.colors.primary.black}`,
      },
    },
  },
  secondary: {
    backgroundColor: theme.colors.primary.white,
    color: theme.colors.content.secondary,
    border: `1px solid ${theme.colors.border.default}`,

    selectors: {
      "&:hover": {
        backgroundColor: theme.colors.background.tertiary,
      },

      "&:focus": {
        backgroundColor: theme.colors.background.tertiary,
      },

      "&:disabled": {
        cursor: "auto",
        color: theme.colors.primary.white,
        backgroundColor: theme.colors.background.secondary,
        border: `1px solid ${theme.colors.border.default}`,
      },
    },
  },
  destructive: {
    backgroundColor: theme.colors.background.danger,
    border: `1px solid ${theme.colors.border.danger}`,
    color: theme.colors.red[600],
    ":hover": {
      backgroundColor: theme.colors.red[300],
      border: `1px solid ${theme.colors.red[500]}`,
    },
    ":disabled": {
      backgroundColor: theme.colors.red[100],
      color: theme.colors.red[300],
      border: `1px solid ${theme.colors.red[200]}`,
    },
  },
  transparent: {
    backgroundColor: "transparent",
    color: theme.colors.content.secondary,
    selectors: {
      "&:hover": {
        backgroundColor: theme.colors.background.tertiary,
      },
      "&:focus": {
        backgroundColor: theme.colors.background.tertiary,
      },
      "&:disabled": {
        cursor: "auto",
        color: theme.colors.primary.white,
        backgroundColor: theme.colors.background.secondary,
      },
    },
  },
});

export const buttonTextSize = styleVariants({
  large: [
    theme.text.body.large,
    {
      fontWeight: FontWeight.semibold,
    },
  ],
  medium: [
    theme.text.body.medium,
    {
      fontWeight: FontWeight.semibold,
    },
  ],
  small: [
    theme.text.body.small,
    {
      fontWeight: FontWeight.semibold,
    },
  ],
});

export const loadingState = style({
  visibility: "hidden",
});

export const buttonSpinner = style({
  position: "absolute",
});

// TODO: Currently the global font-family is taking precedence over the design system class
// Remove this class once the global font-family (*: { font-family: Larsseit }) is removed from index.css
export const label = style({
  fontFamily: "Maison Neue, Larsseit",
});
