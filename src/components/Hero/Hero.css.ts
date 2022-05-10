import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  overflow: "hidden",
});

export const mediaContainer = style({
  position: "absolute",
  overflow: "hidden",
  height: "100%",
  width: "100%",
});

export const video = style({
  overflow: "hidden",
  objectFit: "cover",
  objectPosition: "top",
  width: "100%",
  height: "100%",
});

export const image = style({
  overflow: "hidden",
  objectFit: "cover",
  width: "100%",
  height: "100%",
});

export const contentContainer = style({
  position: "relative",
  display: "flex",
  height: "100%",
  width: "100%",
  flex: 1,
});
