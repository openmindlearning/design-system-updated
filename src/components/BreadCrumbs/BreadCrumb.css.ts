import { style, styleVariants } from "@vanilla-extract/css";
import { FontWeight, theme } from "../../themes";

const DIAMETER = "18px";

export const number = style([
  theme.text.body.xsmall,
  {
    lineHeight: DIAMETER,
    textAlign: "center",
    height: DIAMETER,
    width: DIAMETER,
    borderRadius: "9px",
    backgroundColor: theme.colors.primary.black,
    color: theme.colors.content.light,
    fontWeight: FontWeight.semibold,
  },
]);

export const numberVariants = styleVariants({
  inactive: [
    number,
    {
      backgroundColor: theme.colors.border.opaque,
      color: theme.colors.content.tertiary,
    },
  ],
  active: [
    number,
    {
      backgroundColor: theme.colors.content.primary,
      color: theme.colors.content.light,
    },
  ],
});

export const breadcrumb = style({
  display: "flex",
  flexDirection: "row",
});

export const label = style([
  theme.text.body.small,
  {
    lineHeight: DIAMETER,
    marginLeft: theme.spacing["2x"],
    fontWeight: FontWeight.semibold,
  },
]);

export const labelVariants = styleVariants({
  primary: [
    label,
    {
      color: theme.colors.content.primary,
    },
  ],
  secondary: [
    label,
    {
      color: theme.colors.content.tertiary,
    },
  ],
});
