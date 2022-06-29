import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const SidebarIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <rect x="1.5" y="4.5" width="21" height="3" fill="#545454" />
      <rect x="1.5" y="10.5" width="21" height="3" fill="#545454" />
      <rect x="1.5" y="16.5" width="21" height="3" fill="#545454" />
    </svg>
  );
};
