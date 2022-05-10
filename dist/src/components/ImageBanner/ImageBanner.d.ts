import React from "react";
interface Props {
    /**
     * Banner height.
     */
    height?: string;
    /**
     * Banner height at tablet breakpoint.
     */
    tabletHeight?: string;
    /**
     * Banner height at mobile breakpoint.
     */
    mobileHeight?: string;
    /**
     * Image source.
     */
    src: string;
    /**
     * Image alt text.
     */
    alt: string;
    children?: React.ReactNode;
}
/**
Banner component that takes in an image and displays it across the screen.

- The banner container uses `display: relative`, so children using `display: absolute` will be positioned on top of the banner.
*/
export declare const ImageBanner: ({ height, tabletHeight, mobileHeight, src, alt, children, }: Props) => React.ReactElement;
export {};
