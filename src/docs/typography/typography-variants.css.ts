import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../themes";
import { FontStyle, FontWeight } from "../../tokens";

export const displayText = styleVariants({
  xxlarge: theme.text.display.xxlarge,
  xlarge: theme.text.display.xlarge,
  large: theme.text.display.large,
  medium: theme.text.display.medium,
});

export const headerText = styleVariants({
  xlarge: theme.text.header.xlarge,
  large: theme.text.header.large,
  medium: theme.text.header.medium,
  small: theme.text.header.small,
  xsmall: theme.text.header.xsmall,
});

export const labelText = styleVariants({
  xxlarge: theme.text.label.xxlarge,
  small: theme.text.label.small,
  xsmall: theme.text.label.xsmall,
});

export const bodyText = styleVariants({
  medium: theme.text.body.medium,
  small: theme.text.body.small,
  xsmall: theme.text.body.xsmall,
});

export const italicText = styleVariants(bodyText, (bodyStyle) => [
  bodyStyle,
  { fontStyle: FontStyle.italic },
]);

export const mediumWeightText = styleVariants(bodyText, (bodyStyle) => [
  bodyStyle,
  { fontWeight: FontWeight.semibold },
]);

export const sectionHeading = style([
  theme.text.header.large,
  {
    marginBottom: "4px",
    marginTop: "40px",
    borderBottom: `1px solid ${theme.colors.grey[200]}`,
  },
]);
