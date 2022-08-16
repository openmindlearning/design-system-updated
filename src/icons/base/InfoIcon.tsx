import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const InfoIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className }}
      data-testid={testId}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0003 1.66602C5.40033 1.66602 1.66699 5.39935 1.66699 9.99935C1.66699 14.5993 5.40033 18.3327 10.0003 18.3327C14.6003 18.3327 18.3337 14.5993 18.3337 9.99935C18.3337 5.39935 14.6003 1.66602 10.0003 1.66602ZM9.16699 5.83268V7.49935H10.8337V5.83268H9.16699ZM10.8337 13.3327C10.8337 13.791 10.4587 14.166 10.0003 14.166C9.54199 14.166 9.16699 13.791 9.16699 13.3327V9.99935C9.16699 9.54102 9.54199 9.16602 10.0003 9.16602C10.4587 9.16602 10.8337 9.54102 10.8337 9.99935V13.3327ZM3.33366 9.99935C3.33366 13.6743 6.32533 16.666 10.0003 16.666C13.6753 16.666 16.667 13.6743 16.667 9.99935C16.667 6.32435 13.6753 3.33268 10.0003 3.33268C6.32533 3.33268 3.33366 6.32435 3.33366 9.99935Z"
      />
    </svg>
  );
};
