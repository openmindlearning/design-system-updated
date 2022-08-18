import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const CommentsIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <path
        d="M8.00001 1.3335C4.36575 1.3335 1.33334 3.98285 1.33334 7.3335C1.33334 10.6841 4.36575 13.3335 8.00001 13.3335C8.23079 13.3335 8.44345 13.2872 8.66668 13.2658V15.396L9.69402 14.7371C11.1355 13.812 14.2567 11.4104 14.6289 7.9637C14.6525 7.75866 14.6667 7.54866 14.6667 7.3335C14.6667 3.98285 11.6343 1.3335 8.00001 1.3335ZM8.00001 2.66683C10.9938 2.66683 13.3333 4.79347 13.3333 7.3335C13.3333 7.49389 13.3234 7.65391 13.3047 7.81527V7.81787L13.3034 7.82048C13.073 9.95418 11.365 11.6301 10 12.7228V11.715L9.20183 11.8765C8.8114 11.9553 8.41023 12.0002 8.00001 12.0002C5.00627 12.0002 2.66668 9.87352 2.66668 7.3335C2.66668 4.79347 5.00627 2.66683 8.00001 2.66683Z"
        fill="#545454"
      />
    </svg>
  );
};
