import { style } from "@vanilla-extract/css";
import { theme, FontWeight } from "../../themes";
import { atSmallBreakpoint } from "../../util/breakpoint-utils";

const { text, colors } = theme;

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  flex: 1,
  minHeight: "100px",
  background: colors.background.secondary,
  borderRadius: "8px",
  border: `1px solid ${colors.border.opaque}`,
  position: "relative",
});

export const innerContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  boxSizing: "border-box",
  padding: theme.spacing["5x"],
  minHeight: "64px",
  "@media": {
    ...atSmallBreakpoint({
      padding: theme.spacing["4x"],
    }),
  },
});

export const labelAndText = style({
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
});

export const title = style([
  text.body.small,
  {
    fontWeight: FontWeight.semibold,
    color: colors.content.tertiary,
    marginRight: theme.spacing["2x"],
    marginBottom: theme.spacing["2x"],
  },
]);

export const label = style({
  marginBottom: theme.spacing["2x"],
});

export const titleAndLabelRow = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

export const body = style([
  text.body.medium,
  {
    color: colors.content.primary,
    marginTop: theme.spacing["1x"],
    textOverflow: "ellipsis",
    whiteSpace: "break-spaces",
    overflow: "hidden",
  },
]);

export const media = style({
  borderRadius: "8px",
  marginLeft: "20px",
});

export const reflectionsTextContainer = style({
  width: "100%",
  padding: `0 ${theme.spacing["5x"]}`,
  boxSizing: "border-box",
  marginBottom: theme.spacing["5x"],
});

export const richTextContainer = style([
  text.body.medium,
  {
    background: colors.background.primary,
    borderRadius: "8px",
    boxSizing: "border-box",
    color: colors.content.primary,
    border: `1px solid ${colors.border.opaque}`,
    padding: `${theme.spacing["4x"]} ${theme.spacing["5x"]}`,
  },
]);

export const dropdown = style({
  marginLeft: theme.spacing["2x"],
});
