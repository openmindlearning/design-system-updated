import { style, styleVariants } from "@vanilla-extract/css";

import { theme } from "../../themes";

export const container = style({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  background: theme.colors.primary.white,
});

export const inputContainer = style({
  display: "flex",
  position: "relative",
});

export const baseInput = style([
  theme.text.body.medium,
  {
    border: 0,
    borderRadius: "8px",
    transition: "background-color 0.1s, border 0.1s ease-in-out",
    padding: "16px 20px",
    width: "100%",
  },
]);

export const inputVariant = styleVariants({
  default: [
    baseInput,
    {
      backgroundColor: theme.colors.primary.white,
      border: `1px solid ${theme.colors.border.default}`,

      selectors: {
        "&:active": {
          border: `1px solid ${theme.colors.primary.black}`,
        },

        "&:focus": {
          outline: "none",
          border: `1px solid ${theme.colors.primary.black}`,
        },

        "&:disabled": {
          cursor: "disabled",
          border: `1px solid ${theme.colors.primary.black}`,
        },
      },
    },
  ],
  error: [
    baseInput,
    {
      border: `1px solid ${theme.colors.red[300]}`,
      outline: "none",

      selectors: {
        "&:active": {
          border: `1px solid ${theme.colors.primary.red}`,
        },

        "&:focus": {
          outline: "none",
          border: `1px solid ${theme.colors.primary.red}`,
        },

        "&:disabled": {
          cursor: "disabled",
        },
      },
    },
  ],
});

export const basePlaceholder = style([
  theme.text.body.medium,
  {
    cursor: "text",
    lineHeight: "60px",
    position: "absolute",
    color: theme.colors.grey[300],
    padding: "0 3px",
    borderRadius: "3px",
    marginTop: "0px",
    marginLeft: "16px",
    zIndex: 1,
    pointerEvents: "none",
    transition:
      "color 0.1s linear, background-color 0.1s linear, margin 0.1s linear, font-size 0.1s linear, line-height 0.1s linear",
  },
]);

export const placeholderVariant = styleVariants({
  default: [basePlaceholder],
  error: [
    basePlaceholder,
    {
      color: theme.colors.red[300],
    },
  ],
});

export const basePlaceholderActive = style([
  theme.text.body.xsmall,
  {
    marginTop: "-8px",
    backgroundColor: "inherit",
  },
]);

export const placeholderActiveVariant = styleVariants({
  default: [
    basePlaceholderActive,
    {
      color: theme.colors.border.default,
    },
  ],
  error: [
    basePlaceholderActive,
    {
      color: theme.colors.red[300],
    },
  ],
});

export const placeholderActiveFocusedVariant = styleVariants({
  default: {
    color: theme.colors.primary.black,
  },
  error: {
    color: theme.colors.primary.red,
  },
});

export const showPasswordIconContainer = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  position: "absolute",
  right: "16px",
  cursor: "pointer",
  zIndex: 1,
});

export const showPasswordIcon = style({
  display: "flex",
});

export const baseMessage = style([
  theme.text.body.xsmall,
  {
    padding: "8px 4px",
  },
]);

export const messageVariant = styleVariants({
  error: [
    baseMessage,
    {
      color: theme.colors.primary.red,
    },
  ],
  info: [
    baseMessage,
    {
      color: theme.colors.content.tertiary,
    },
  ],
});
