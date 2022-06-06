import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { theme } from "../../themes";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export const ArrowRightIcon = ({
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
        d="M16.1184 11.0035H5.1084C4.5584 11.0035 4.1084 11.4535 4.1084 12.0035C4.1084 12.5535 4.5584 13.0035 5.1084 13.0035H16.1184V14.7935C16.1184 15.2435 16.6584 15.4635 16.9684 15.1435L19.7484 12.3535C19.9384 12.1535 19.9384 11.8435 19.7484 11.6435L16.9684 8.8535C16.6584 8.5335 16.1184 8.7635 16.1184 9.2035V11.0035Z"
        fill={fill}
      />
    </svg>
  );
};
