import React from "react";

interface Props extends React.HTMLProps<HTMLImageElement> {
  /**
    Alt text required for all images for accessibility
  */
  alt: string;
  crossOrigin?: "anonymous" | "use-credentials";
}

export const Image = ({ crossOrigin, ...rest }: Props) => {
  return <img {...rest} crossOrigin={crossOrigin} />;
};
