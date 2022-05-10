import * as styles from "./Hero.css";

import classNames from "classnames";
import React from "react";

import { Image } from "../Image";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Props extends React.HTMLProps<HTMLDivElement> {
  /**
    URL for the video source. 
  */
  videoSrc?: string;

  /**
    URL for the video poster image. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-poster
    It is recommended to always supply a videoPosterSrc, so Hero is still appealing when the video is loading. 
  */
  videoPosterSrc?: string;

  /**
    MIME type for the video provided
  */
  videoType?: string;

  /**
    URL for the image source. 
  */
  imageSrc?: string;
}

/**
  Hero component is used to display full-width media with optional content rendered on top. 

  - Hero supports video or image. 
  - Videos are played muted and looped. 
  - If [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) is set by user and `imageSrc` is provided, the image will be shown instead of video. 

  Pass in children to render content on top of media. 
*/
export const Hero = ({
  className,
  children,
  videoSrc,
  videoPosterSrc,
  videoType = "video/mp4",
  imageSrc,
}: Props) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.mediaContainer}>
        {(imageSrc && prefersReducedMotion) || (imageSrc && !videoSrc) ? (
          <Image src={imageSrc} alt="hero image" className={styles.image} />
        ) : (
          <>
            <video
              id="hero-video"
              loop
              autoPlay
              playsInline
              muted
              data-wf-ignore="true"
              preload="auto"
              poster={videoPosterSrc}
              className={styles.video}
            >
              <source src={videoSrc} type={videoType} />
            </video>
          </>
        )}
      </div>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};
