import React from "react";
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
export declare const Hero: ({ className, children, videoSrc, videoPosterSrc, videoType, imageSrc, }: Props) => JSX.Element;
export {};
