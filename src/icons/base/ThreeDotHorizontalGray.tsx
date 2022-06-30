import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const ThreeDotsHorizontalGray = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  className,
  fill = theme.colors.grey[500],
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 14 12"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <circle cx={1.75} cy={6} r={1.5} transform="rotate(-90 1.75 6)" />
      <circle cx={7} cy={6} r={1.5} transform="rotate(-90 7 6)" />
      <circle cx={12.25} cy={6} r={1.5} transform="rotate(-90 12.25 6)" />
    </svg>
  );
};
