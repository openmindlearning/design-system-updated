import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";
import { theme } from "../../themes";

export const CollapseLessonIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[600],
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path d="M21.7143 12L2.00238 12" stroke={fill} strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
};
