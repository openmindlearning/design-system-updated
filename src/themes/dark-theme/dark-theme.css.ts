import { defaultColors } from "../base";
import { baseColors, primaryColors } from "../../tokens";

export const darkColors = {
  ...defaultColors,
  content: {
    ...defaultColors.content,
    primary: primaryColors.white,
    secondary: baseColors.platinum[600],
    tertiary: baseColors.platinum[400],
    muted: baseColors.platinum[200],
    light: baseColors.platinum[0],
    accentSecondary: primaryColors.white,
  },

  background: {
    ...defaultColors.background,
    primary: baseColors.platinum[0],
    secondary: baseColors.platinum[25],
    tertiary: baseColors.platinum[75],
    marketing: "#F9F9FB",
  },

  border: {
    ...defaultColors.border,
    opaque: baseColors.platinum[75],
    default: baseColors.platinum[150],
    selected: baseColors.platinum[600],
  },
};
