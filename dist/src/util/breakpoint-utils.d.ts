import { StyleRule } from "@vanilla-extract/css";
import { FeatureQueries, StyleWithSelectors } from "@vanilla-extract/css/dist/declarations/src/types";
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
export declare const makeCustomBreakpoint: (breakpoint: string) => (styles: StyleRule) => FeatureQueries<StyleWithSelectors>;
export declare const atLargeBreakpoint: (styles: StyleRule) => FeatureQueries<StyleWithSelectors>;
export declare const atDesktopBreakpoint: (styles: StyleRule) => FeatureQueries<StyleWithSelectors>;
export declare const atTabletBreakpoint: (styles: StyleRule) => FeatureQueries<StyleWithSelectors>;
export declare const atSmallBreakpoint: (styles: StyleRule) => FeatureQueries<StyleWithSelectors>;
export declare const atMobileBreakpoint: (styles: StyleRule) => FeatureQueries<StyleWithSelectors>;
