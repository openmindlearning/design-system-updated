import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const HomeEmptyIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  testId,
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
      {...{ width, height, className }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.82 1.39a1.75 1.75 0 0 1 2.36 0h.001l8.748 7.95.012.011a1.783 1.783 0 0 1 .559 1.268V20.75a1.75 1.75 0 0 1-1.75 1.75H14.5a1.75 1.75 0 0 1-1.75-1.75V15.5h-3.5v5.25A1.75 1.75 0 0 1 7.5 22.5H2.25A1.75 1.75 0 0 1 .5 20.75V10.619A1.783 1.783 0 0 1 1.06 9.35l.012-.011 8.748-7.95h.001Zm-7.562 9.236 8.74-7.943.002-.001.002.001 8.74 7.943a.032.032 0 0 1 .005.008.031.031 0 0 1 .003.01V20.75H14.5V15.5a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 7.5 15.5v5.25H2.25V10.645a.033.033 0 0 1 .008-.02Z"
        fill={fill}
      />
    </svg>
  );
};
