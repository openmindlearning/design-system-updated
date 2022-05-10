import { style } from "@vanilla-extract/css";

import { theme, FontWeight } from "../../themes";

export const title = style([
  theme.text.header.small,
  {
    fontWeight: FontWeight.bold,
    margin: "16px 16px 0",
  },
]);

export const container = style({
  display: "flex",
  flexWrap: "wrap",
});

export const icon = style({
  margin: "16px",
});
