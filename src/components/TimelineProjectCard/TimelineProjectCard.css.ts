import { style } from "@vanilla-extract/css";
import { FontWeight } from "../../tokens";
import { theme } from "../../themes";
import { atTabletBreakpoint } from "../../util";

const { colors } = theme;

export const outerContainer = style({
  borderRadius: "8px",
  border: `1px solid ${colors.border.opaque}`,
  cursor: "pointer",
  padding: "24px",
  margin: "8px 0",

  "@media": {
    ...atTabletBreakpoint({
      padding: "16px",
    }),
  },
  ":hover": {
    boxShadow: theme.boxShadows.depth[2],
  },
});

export const innerContainer = style({
  display: "flex",
});

export const contentContainer = style({
  /**
   * minWidth is essential to preserve proper text truncation withing flex layout
   * @see https://css-tricks.com/flexbox-truncated-text/
   */
  minWidth: "0",
  maxWidth: "400px",
});

export const mediaSlot = style({
  marginLeft: 28,
});

export const titleLabelContainer = style({
  display: "flex",
  alignItems: "center",
  marginBottom: 8,
  flexWrap: "wrap",
  "@media": {
    ...atTabletBreakpoint({
      marginBottom: "12px",
    }),
  },
});

export const type = style([
  theme.text.body.small,
  {
    marginRight: 8,
    marginBottom: 8,
    color: theme.colors.content.tertiary,
    fontWeight: FontWeight.semibold,
  },
]);

export const labelContainer = style([
  {
    background: theme.colors.grey[100],
    fontWeight: FontWeight.semibold,
    borderRadius: "8px",
    marginBottom: 8,
    padding: "0 8px",
    overflow: "hidden",
  },
]);

export const label = style([
  {
    ...theme.text.body.xsmall,
    color: theme.colors.content.tertiary,
    fontWeight: FontWeight.semibold,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    "@media": {
      ...atTabletBreakpoint({
        ...theme.text.body.xxsmall,
        fontWeight: FontWeight.normal,
      }),
    },
  },
]);

export const titleDescriptionContainer = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px",
  "@media": {
    ...atTabletBreakpoint({
      marginBottom: "8px",
    }),
  },
});

export const title = style([
  {
    ...theme.text.header.small,
    marginBottom: "8px",
    wordBreak: "break-all",
    fontWeight: FontWeight.bold,

    "@media": {
      ...atTabletBreakpoint({
        ...theme.text.body.medium,
        fontWeight: FontWeight.bold,
        marginBottom: "4px",
      }),
    },
  },
]);

export const description = style([
  {
    ...theme.text.body.medium,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    "@media": {
      ...atTabletBreakpoint({
        ...theme.text.body.small,
      }),
    },
  },
]);

export const attentionContainer = style([
  {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
]);

export const reactionIcon = style({
  margin: "0 4px",
  minWidth: "16px",
  "@media": {
    ...atTabletBreakpoint({
      margin: "0 3px",
    }),
  },
});

export const dotSeparator = style({
  margin: "0 6px",
  "@media": {
    ...atTabletBreakpoint({
      margin: "0 4px",
    }),
  },
});

export const reactionsCommentsContainer = style([
  {
    ...theme.text.body.small,
    color: theme.colors.content.secondary,
    marginLeft: "8px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",

    "@media": {
      ...atTabletBreakpoint({
        ...theme.text.body.xsmall,
      }),
    },
  },
]);
