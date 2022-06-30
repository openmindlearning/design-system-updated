import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const BackIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ className, width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <rect
        width="10.0787"
        height="2.16046"
        transform="matrix(0.664454 -0.747329 0.664454 0.747329 4.5 12.0321)"
        fill={fill}
      />
      <rect
        width="10.0874"
        height="2.16046"
        transform="matrix(-0.664454 -0.747329 0.664454 -0.747329 11.2075 19.5911)"
        fill={fill}
      />
      <rect
        width="14.0049"
        height="2.28825"
        transform="matrix(-1 0 -0.0037914 -0.999993 20.7261 13.163)"
        fill={fill}
      />
    </svg>
  );
};
