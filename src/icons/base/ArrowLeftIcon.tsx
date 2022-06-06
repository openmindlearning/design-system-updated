import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { theme } from "../../themes";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export const ArrowLeftIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  className,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height, className }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.8816 12.9965L18.8916 12.9965C19.4416 12.9965 19.8916 12.5465 19.8916 11.9965C19.8916 11.4465 19.4416 10.9965 18.8916 10.9965L7.8816 10.9965V9.2065C7.8816 8.7565 7.3416 8.5365 7.0316 8.8565L4.2516 11.6465C4.0616 11.8465 4.0616 12.1565 4.2516 12.3565L7.0316 15.1465C7.3416 15.4665 7.8816 15.2365 7.8816 14.7965V12.9965Z"
        fill={fill}
      />
    </svg>
  );
};
