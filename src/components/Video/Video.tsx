import React from "react";

interface Props extends React.HTMLProps<HTMLVideoElement> {
  url: string;
  /**
   * Play video in place instead of default behavior of fullscreen.
   */
  playsInLine?: boolean;
  /**
   * MIME type of the video.
   */
  type: string;
}

export const Video = ({ className, url, type, ...restOfProps }: Props) => {
  return (
    <video className={className} {...restOfProps}>
      <source src={url} type={type} />
    </video>
  );
};
