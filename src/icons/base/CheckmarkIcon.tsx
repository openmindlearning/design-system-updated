import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { theme } from "../../themes";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export const CheckmarkIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  className,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height, className }}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.75 13.75L1.5 8.25L2.25 7.25L6.5 10.25L13.75 3L14.75 4L6.75 13.75Z" fill={fill} />
    </svg>
  );
};
