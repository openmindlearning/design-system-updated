import { style } from "@vanilla-extract/css";

export const emptyButtonStyle = style({
  backgroundColor: "unset",
  color: "inherit",
  border: "none",
  padding: 0,
  cursor: "pointer",
  outline: "inherit",
});

export const clickableContentWrapperButton = style([
  emptyButtonStyle,
  {
    textAlign: "left",
    ":focus": {
      outline: "none",
    },
    ":active": {
      outline: "none",
    },
    ":focus-visible": {
      outline: `2px auto #03aef8`,
      outlineOffset: "2px",
    },
  },
]);
