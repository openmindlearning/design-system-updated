import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const SaveIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  className,
  fill = theme.colors.grey[500],
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 21.8L12 16.3556L5 21.8V4.37777C5 3.17502 5.89543 2.2 7 2.2H17C18.1046 2.2 19 3.17502 19 4.37777V21.8Z"
      />
    </svg>
  );
};
