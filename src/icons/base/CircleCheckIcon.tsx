import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { theme } from "../../themes";
import { IconProps } from "./constants";

type Props = {
  arrowColor?: string;
};
export const CircleCheckIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.content.accentPrimary,
  arrowColor = theme.colors.content.primary,
}: Props & IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <rect
        x="7.80042"
        y="12.6001"
        width="1.63589"
        height="4.8"
        transform="rotate(-45 7.80042 12.6001)"
        fill={arrowColor}
      />
      <rect
        x="10.0157"
        y="14.8134"
        width="8.4"
        height="1.66964"
        transform="rotate(-45 10.0157 14.8134)"
        fill={arrowColor}
      />
    </svg>
  );
};
