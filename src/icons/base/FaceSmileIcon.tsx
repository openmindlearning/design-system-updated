import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const FaceSmileIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, fill, className }}
      viewBox="0 0 12 12"
      data-testid={testId}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.995 1C3.235 1 1 3.24 1 6C1 8.76 3.235 11 5.995 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 5.995 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10ZM8.5 4.75C8.5 5.165 8.165 5.5 7.75 5.5C7.335 5.5 7 5.165 7 4.75C7 4.335 7.335 4 7.75 4C8.165 4 8.5 4.335 8.5 4.75ZM4.25 5.5C4.665 5.5 5 5.165 5 4.75C5 4.335 4.665 4 4.25 4C3.835 4 3.5 4.335 3.5 4.75C3.5 5.165 3.835 5.5 4.25 5.5ZM8.375 7.375C7.9 8.195 7.015 8.75 6 8.75C4.985 8.75 4.1 8.195 3.625 7.375C3.53 7.21 3.655 7 3.845 7H8.155C8.35 7 8.47 7.21 8.375 7.375Z"
      />
    </svg>
  );
};
