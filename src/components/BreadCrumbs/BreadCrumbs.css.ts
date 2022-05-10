import { style } from "@vanilla-extract/css";
import { atMobileBreakpoint } from "../../util";
import { theme } from "../../themes";

export const container = style({
  display: "flex",
  flexDirection: "row",
  columnGap: theme.spacing["5x"],
  "@media": {
    ...atMobileBreakpoint({
      columnGap: theme.spacing["4x"],
    }),
  },
});
