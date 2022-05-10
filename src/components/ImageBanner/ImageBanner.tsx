import * as styles from "./ImageBanner.css";

import React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";

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
export const ImageBanner = ({
  height = "100%",
  tabletHeight = height,
  mobileHeight = height,
  src,
  alt,
  children,
}: Props): React.ReactElement => {
  return (
    <div
      style={assignInlineVars({
        [styles.height]: height,
        [styles.tabletHeight]: tabletHeight,
        [styles.mobileHeight]: mobileHeight,
      })}
      className={styles.imageBannerContainer}
    >
      <img src={src} alt={alt} className={styles.imageBannerImage} />
      {children}
    </div>
  );
};
