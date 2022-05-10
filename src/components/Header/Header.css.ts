import { style } from "@vanilla-extract/css";
import { atDesktopBreakpoint, atTabletBreakpoint } from "../../util";
import { theme } from "../../themes";

export const header = style({
  background: theme.colors.primary.white,
  borderBottom: `1px solid ${theme.colors.grey[200]}`,
  height: "69px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `0 110px 0 110px`,
  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
  "@media": {
    ...atDesktopBreakpoint({
      padding: "0 8vw",
    }),
    ...atTabletBreakpoint({
      padding: "0 4vw",
    }),
  },
});
