import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const SidebarIcon = ({
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
      <rect x="1.5" y="4.5" width="21" height="3" />
      <rect x="1.5" y="10.5" width="21" height="3" />
      <rect x="1.5" y="16.5" width="21" height="3" />
    </svg>
  );
};
