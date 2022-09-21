import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const MinimalCalendarIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  className,
  fill = theme.colors.grey[500],
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className }}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 1.5H10C10.55 1.5 11 1.95 11 2.5V10.5C11 11.05 10.55 11.5 10 11.5H2C1.45 11.5 1 11.05 1 10.5V2.5C1 1.95 1.45 1.5 2 1.5H2.5V1C2.5 0.725 2.725 0.5 3 0.5C3.275 0.5 3.5 0.725 3.5 1V1.5H8.5V1C8.5 0.725 8.725 0.5 9 0.5C9.275 0.5 9.5 0.725 9.5 1V1.5ZM2.5 10.5H9.5C9.775 10.5 10 10.275 10 10V4H2V10C2 10.275 2.225 10.5 2.5 10.5Z"
        fill={fill}
      />
    </svg>
  );
};
