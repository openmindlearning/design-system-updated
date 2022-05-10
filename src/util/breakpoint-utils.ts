import { StyleRule } from "@vanilla-extract/css";
import {
  FeatureQueries,
  StyleWithSelectors,
} from "@vanilla-extract/css/dist/declarations/src/types";
import { Breakpoint } from "../tokens";

/**
 * Returns a custom breakpoint function that can be reused to create styles at that breakpoint.
 * @example
 * ```typescript
 * const atMaxWidth = makeCustomBreakpoint("550px");
 * export const componentStyles = style({
 *   "@media": {
 *     ...atMaxWidth({ padding: "20px" }),
 *   },
 * });
 * ```
 */
export const makeCustomBreakpoint =
  (breakpoint: string) =>
  (styles: StyleRule): FeatureQueries<StyleWithSelectors> => ({
    [`(max-width: ${breakpoint})`]: { ...styles },
  });

export const atLargeBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Large)(styles);

export const atDesktopBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Desktop)(styles);

export const atTabletBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Tablet)(styles);

export const atSmallBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Small)(styles);

export const atMobileBreakpoint = (styles: StyleRule): FeatureQueries<StyleWithSelectors> =>
  makeCustomBreakpoint(Breakpoint.Mobile)(styles);
