import { style } from "@vanilla-extract/css";
import { theme } from "../../themes";

export const defaultContainer = style({
  height: "50vh",
});

export const contentContainer = style({
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
});

export const heading = style([
  theme.text.display.xxlarge,
  {
    color: theme.colors.content.light,
    textAlign: "center",
    "@media": {
      "(max-width: 640px)": theme.text.display.medium,
    },
  },
]);

export const headingContainer = style({
  padding: "20px",
  alignItems: "center",
  backgroundColor: theme.colors.primary.black,
  borderRadius: 20,
});
