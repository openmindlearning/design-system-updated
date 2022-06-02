import { style, styleVariants } from "@vanilla-extract/css";
import { FontWeight, theme } from "../../themes";

export const container = style([
  {
    display: "flex",
    flexDirection: "column",
  },
]);

export const token = style({
  marginTop: theme.spacing["5x"],
  display: "flex",
  alignItems: "center",
});

export const nameAndValueContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "200px",
});

export const name = style([theme.text.body.medium, { fontWeight: FontWeight.semibold }]);

export const value = style([
  theme.text.body.medium,
  { color: theme.colors.content.secondary, marginTop: theme.spacing["1x"] },
]);

const displayBase = style({
  height: theme.spacing["1x"],
  backgroundColor: theme.colors.content.accentPrimary,
});

export const display = styleVariants({
  ["1x"]: [
    displayBase,
    {
      width: theme.spacing["1x"],
    },
  ],
  ["2x"]: [
    displayBase,
    {
      width: theme.spacing["2x"],
    },
  ],
  ["3x"]: [
    displayBase,
    {
      width: theme.spacing["3x"],
    },
  ],
  ["4x"]: [
    displayBase,
    {
      width: theme.spacing["4x"],
    },
  ],
  ["5x"]: [
    displayBase,
    {
      width: theme.spacing["5x"],
    },
  ],
  ["6x"]: [
    displayBase,
    {
      width: theme.spacing["6x"],
    },
  ],
  ["7x"]: [
    displayBase,
    {
      width: theme.spacing["7x"],
    },
  ],
  ["8x"]: [
    displayBase,
    {
      width: theme.spacing["8x"],
    },
  ],
  ["9x"]: [
    displayBase,
    {
      width: theme.spacing["9x"],
    },
  ],
  ["10x"]: [
    displayBase,
    {
      width: theme.spacing["10x"],
    },
  ],
});
