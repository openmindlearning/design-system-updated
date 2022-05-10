import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const baseRadioButton = style({
  border: `1px solid ${theme.colors.border.opaque}`,
  backgroundColor: theme.colors.primary.white,
  boxSizing: "border-box",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
});

export const radioButtonVariant = styleVariants({
  small: {
    width: "14px",
    height: "14px",
    borderRadius: "7px",
  },
  medium: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
  },
});

export const radioButtonSelected = style({
  backgroundColor: theme.colors.primary.black,
  boxShadow: "none",
  border: "none",
});

export const radioButtonWhiteCircle = style({
  width: "4px",
  height: "4px",
  backgroundColor: theme.colors.primary.white,
  borderRadius: "50%",
  display: "flex",
  transform: "scale(0)",
  transition: "transform 0.3s",
  selectors: {
    [`${radioButtonVariant["medium"]} &`]: {
      width: "6px",
      height: "6px",
    },
    [`${radioButtonSelected} &`]: {
      transform: "scale(1)",
    },
  },
});
