import { baseColors, primaryColors } from "../../tokens";

// and the superset for all colors
export const defaultColors = {
  ...baseColors,
  primary: primaryColors,
  content: {
    primary: primaryColors.black,
    secondary: baseColors.grey[600],
    tertiary: baseColors.grey[500],
    muted: baseColors.grey[400],
    light: primaryColors.white,
    accentPrimary: primaryColors.yellow,
    accentSecondary: primaryColors.darkBlue,
    success: primaryColors.green,
    danger: primaryColors.red,
    warning: baseColors.yellow[800],
  },

  background: {
    primary: primaryColors.background,
    secondary: primaryColors.white,
    tertiary: baseColors.grey[50],
    marketing: "#F9F9FB",
    success: baseColors.green[100],
    danger: baseColors.red[50],
    warning: baseColors.yellow[50],
  },

  border: {
    opaque: "#E7E7E7",
    default: baseColors.grey[300],
    selected: primaryColors.black,
    success: baseColors.green[200],
    danger: baseColors.red[500],
    warning: primaryColors.yellow,
  },
};
