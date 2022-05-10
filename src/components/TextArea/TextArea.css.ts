import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const textArea = style([
  theme.text.body.medium,
  {
    borderRadius: "8px",
    overflow: "hidden",
    background: theme.colors.background.tertiary,
    border: `1px solid ${theme.colors.border.default}`,
    padding: theme.spacing["4x"],
    width: "calc(100% - 32px)",
    resize: "none",
    outline: "none",
    boxShadow: "none",
    ":focus": {
      outline: "none",
      border: `1px solid ${theme.colors.border.selected}`,
    },
    "::placeholder": {
      color: theme.colors.content.muted,
    },
  },
]);

export const errorContainer = style({
  border: `1px solid ${theme.colors.border.danger}`,
});

export const errorMessage = style([theme.text.body.small, { color: theme.colors.content.danger }]);

export const textAreaContainer = style([
  {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing["3x"],
    width: "100%",
  },
]);

export const label = style([
  theme.text.body.medium,
  {
    marginBottom: theme.spacing["2x"],
    color: theme.colors.content.primary,
  },
]);

export const multiTextContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});
export const singleTextContainer = style([
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
]);

const characterLimitBase = style([
  theme.text.body.small,
  {
    paddingTop: theme.spacing["1x"],
  },
]);

export const characterLimit = styleVariants({
  primary: [
    characterLimitBase,
    {
      color: theme.colors.content.muted,
    },
  ],
  error: [
    characterLimitBase,
    {
      color: theme.colors.content.danger,
    },
  ],
});
