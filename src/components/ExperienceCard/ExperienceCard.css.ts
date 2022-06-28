import { style } from "@vanilla-extract/css";
import { theme, FontWeight } from "../../themes";
import { atSmallBreakpoint } from "../../util/breakpoint-utils";

const { text, colors, boxShadows, spacing } = theme;

export const container = style({
  display: "flex",
  width: "552px",
  maxWidth: "100%",
});

export const card = style({
  ...text.body.small,

  display: "flex",
  flexDirection: "row",
  minHeight: "88px",
  boxSizing: "border-box",
  width: "100%",

  backgroundColor: colors.primary.white,
  border: `1px solid ${colors.border.opaque}`,
  borderRadius: "16px",
  boxShadow: boxShadows.depth[1],
  selectors: {
    "&:hover": {
      boxShadow: boxShadows.depth[2],
    },
  },

  padding: spacing["4x"],
  paddingRight: spacing["6x"],
  "@media": {
    ...atSmallBreakpoint({
      paddingRight: spacing["4x"],
    }),
  },
});

export const metadata = style({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",

  overflow: "hidden",

  "@media": {
    ...atSmallBreakpoint({
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    }),
  },
});

export const thumbnail = style({
  borderRadius: "8px",
  marginRight: spacing["4x"],

  width: "64px",
  height: "64px",
  "@media": {
    ...atSmallBreakpoint({
      width: "88px",
      height: "88px",
    }),
  },
});

export const labelContainer = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  minWidth: 0,
});

export const title = style({
  ...text.body.medium,
  fontWeight: FontWeight.semibold,
  margin: 0,
  width: "100%",
  // Truncate titles at 1 line on desktop
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "@media": {
    ...atSmallBreakpoint({
      // Wrap long titles on smaller screens
      width: "100%",
      whiteSpace: "unset",
      overflow: "auto",
      textOverflow: "unset",
    }),
  },
});

export const instructorAndSubtitle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  paddingBottom: spacing["1x"],
});

export const subtitle = style({
  ...text.label.xsmall,
  margin: 0,
  marginTop: spacing["1x"],
});

export const instructorLabel = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginRight: spacing["4x"],
  marginTop: spacing["1x"],
});

export const instructorText = style({
  ...text.body.xsmall,
  fontWeight: FontWeight.semibold,
  whiteSpace: "nowrap",
  margin: 0,
  marginRight: spacing["2x"],
});

export const progress = style({
  display: "flex",
  color: theme.colors.grey[600],

  "@media": {
    ...atSmallBreakpoint({
      marginTop: spacing["1x"],
      width: "100%",
    }),
  },
});
