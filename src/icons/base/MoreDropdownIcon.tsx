import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";
import { theme } from "../../themes";

export const MoreDropdownIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  className,
  testId,
  fill = theme.colors.grey[600],
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path d="M15.875 9.00001L11.995 12.88L8.11501 9.00001C7.92817 8.81275 7.67452 8.70752 7.41001 8.70752C7.14549 8.70752 6.89184 8.81275 6.70501 9.00001C6.31501 9.39001 6.31501 10.02 6.70501 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.39001 17.295 9.00001C16.905 8.62001 16.265 8.61001 15.875 9.00001Z" />
    </svg>
  );
};
