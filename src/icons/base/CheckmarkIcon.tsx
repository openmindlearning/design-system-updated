import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { theme } from "../../themes";
import { IconProps } from "./constants";

export const CheckmarkIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[600],
  className,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <path d="M6.75 13.75L1.5 8.25L2.25 7.25L6.5 10.25L13.75 3L14.75 4L6.75 13.75Z" />
    </svg>
  );
};
