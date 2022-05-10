import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: theme.spacing["2x"],
});

export const innerContainer = style({
  display: "flex",
  position: "relative",
  alignItems: "center",
});

const basicLabel = style([
  theme.text.body.small,
  { display: "inline-block", marginBottom: theme.spacing["1x"] },
]);

export const label = styleVariants({
  primary: [basicLabel, { color: theme.colors.content.primary }],
  error: [basicLabel, { color: theme.colors.content.danger }],
});

export const icon = style({
  position: "absolute",
  left: theme.spacing["4x"],
  width: theme.spacing["4x"],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pointerEvents: "none",
});

export const errorText = style([
  theme.text.body.small,
  {
    marginTop: theme.spacing["1x"],
    color: theme.colors.content.danger,
  },
]);

export const text = styleVariants({
  muted: [
    {
      color: theme.colors.content.muted,
    },
  ],
  default: [
    {
      color: theme.colors.content.tertiary,
    },
  ],
});

export const inputField = style([
  theme.text.body.medium,
  {
    backgroundColor: theme.colors.background.secondary,
    padding: `${theme.spacing["3x"]} ${theme.spacing["4x"]}`,
    flexGrow: 1,
    boxSizing: "border-box",
    borderRadius: `${theme.spacing["2x"]}`,
    height: theme.spacing["7x"],
    selectors: {
      "&:focus": {
        outline: "none",
        border: `1px solid ${theme.colors.border.selected}`,
      },
      "&::placeholder": {
        color: theme.colors.content.muted,
      },
    },
  },
]);

export const inputBorder = styleVariants({
  default: [{ border: `1px solid ${theme.colors.border.default}` }],
  error: [{ border: `1px solid ${theme.colors.border.danger}` }],
});

export const input = styleVariants({
  default: [inputField],
  withIcon: [
    inputField,
    { padding: `${theme.spacing["3x"]} 0 ${theme.spacing["3x"]} ${theme.spacing["7x"]}` },
  ],
});
