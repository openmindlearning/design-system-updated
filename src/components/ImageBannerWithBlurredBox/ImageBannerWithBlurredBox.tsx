import * as styles from "./ImageBannerWithBlurredBox.css";

import React from "react";
import classNames from "classnames";
import { BlurredBox } from "../BlurredBox";
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
export const ImageBannerWithBlurredBox = ({
  src,
  alt,
  height,
  tabletHeight,
  mobileHeight,
  blurredBoxClassName,
  children,
}: Props): React.ReactElement => {
  return (
    <ImageBanner
      src={src}
      alt={alt}
      height={height}
      tabletHeight={tabletHeight}
      mobileHeight={mobileHeight}
    >
      <BlurredBox className={classNames(styles.blurredBox, blurredBoxClassName)}>
        {children}
      </BlurredBox>
    </ImageBanner>
  );
};
