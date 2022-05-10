import { theme } from "../../themes";
import { style } from "@vanilla-extract/css";

const { colors, spacing } = theme;

export const container = style({
  marginLeft: spacing["2x"],
});

export const dropdown = style({
  backgroundColor: colors.background.secondary,
  borderRadius: "8px",
  border: `1px solid ${colors.border.opaque}`,
  boxSizing: "border-box",
  boxShadow: `0 6px 8px rgba(0, 0, 0, 0.06)`, //copied this from legacy css
  // Needs to be above studio session modal
  zIndex: 5001,
});

export const editLabel = style([{ color: colors.content.primary }]);
export const deleteLabel = style([{ color: colors.content.danger }]);
