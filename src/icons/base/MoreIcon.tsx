import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const MoreIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <circle cx="4.22222" cy="12" r="2.22222" transform="rotate(-90 4.22222 12)" />
      <circle cx="12" cy="12" r="2.22222" transform="rotate(-90 12 12)" />
      <circle cx="19.7778" cy="12" r="2.22222" transform="rotate(-90 19.7778 12)" />
    </svg>
  );
};
