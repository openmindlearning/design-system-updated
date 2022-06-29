import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const MoreIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="4.22222" cy="12" r="2.22222" transform="rotate(-90 4.22222 12)" fill="#545454" />
      <circle cx="12" cy="12" r="2.22222" transform="rotate(-90 12 12)" fill="#545454" />
      <circle cx="19.7778" cy="12" r="2.22222" transform="rotate(-90 19.7778 12)" fill="#545454" />
    </svg>
  );
};
