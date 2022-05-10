import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const defaultText = style(theme.text.body.medium);

export const inheritedText = style({
  font: "inherit",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  fontStyle: "inherit",
  lineHeight: "inherit",
});

export const backgroundHighlight = style({
  backgroundColor: theme.colors.content.accentPrimary,

  // slight box shadow on left/right sides so highlight box has a touch of padding around text
  // need to use boxShadow here, since padding will alter how the text is laid out
  boxShadow: `3px 0 0 ${theme.colors.content.accentPrimary}, -3px 0 0 ${theme.colors.content.accentPrimary}`,

  // padding on top/bottom only, since it doesn't adjust how the text is laid out
  // the values for boxShadow and padding didn't feel exactly the same - 4px padding, 3px boxShadow felt right.
  padding: `4px 0 4px 0`,
});

export const textColorHighlight = style({
  color: theme.colors.content.accentPrimary,
  backgroundColor: "transparent",
});
