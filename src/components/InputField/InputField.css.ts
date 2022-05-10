import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const inputField = style({
  ...theme.text.body.small,
  lineHeight: "16px",
  border: `1px solid ${theme.colors.border.default}`,
  background: theme.colors.primary.white,
  width: "100%",
  paddingTop: "14px",
  paddingBottom: "16px",
  paddingLeft: "16px",
  boxSizing: "border-box",
  borderRadius: "8px",
  "::placeholder": {
    color: theme.colors.content.muted,
  },
  ":focus": {
    outline: "none",
    borderColor: theme.colors.border.selected,
  },
  ":disabled": {
    background: theme.colors.grey[100],
  },
});

export const inputFieldError = style({
  borderColor: `${theme.colors.border.danger} !important`,
});
