import React from "react";
import { ImageBanner } from "../ImageBanner";
interface Props extends React.ComponentProps<typeof ImageBanner> {
    /**
     * Class name passed to BlurredBox component.
     */
    blurredBoxClassName?: string;
}
/**
 * Full-width image banner with a blurred box overlaid and centered on top.
 */
export declare const ImageBannerWithBlurredBox: ({ src, alt, height, tabletHeight, mobileHeight, blurredBoxClassName, children, }: Props) => React.ReactElement;
export {};
