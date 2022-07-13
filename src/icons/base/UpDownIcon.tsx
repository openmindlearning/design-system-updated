import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { IconProps } from "./constants";

export const UpDownIcon = ({
  width = 10,
  height = 14,
  fill = theme.colors.grey[500],
  className,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      viewBox="0 0 10 14"
      fill="none"
      data-testid={testId}
      className={className}
      width={width}
      height={height}
    >
      <path d="M5 0l4.33 5.25H.67L5 0zM5 14l4.33-5.25H.67L5 14z" fill={fill} />
    </svg>
  );
};
