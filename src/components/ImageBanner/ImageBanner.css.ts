import { createVar, style } from "@vanilla-extract/css";
import { atMobileBreakpoint, atTabletBreakpoint } from "../../util";

export const height = createVar();
export const tabletHeight = createVar();
export const mobileHeight = createVar();

export const imageBannerContainer = style({
  position: "relative",
  width: "100%",
  height,
  "@media": {
    ...atTabletBreakpoint({
      height: tabletHeight,
    }),
    ...atMobileBreakpoint({
      height: mobileHeight,
    }),
  },
});

export const imageBannerImage = style({
  objectFit: "cover",
  height: "100%",
  width: "100%",
});
