import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const PitchTrainerIcon = ({
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
      <path d="M12 22C13.375 22 14.5 20.875 14.5 19.5V4.5C14.5 3.125 13.375 2 12 2C10.625 2 9.5 3.125 9.5 4.5V19.5C9.5 20.875 10.625 22 12 22Z" />
      <path d="M4.5 22C5.875 22 7 20.875 7 19.5V14.5C7 13.125 5.875 12 4.5 12C3.125 12 2 13.125 2 14.5V19.5C2 20.875 3.125 22 4.5 22Z" />
      <path d="M17 10.75V19.5C17 20.875 18.125 22 19.5 22C20.875 22 22 20.875 22 19.5V10.75C22 9.375 20.875 8.25 19.5 8.25C18.125 8.25 17 9.375 17 10.75Z" />
    </svg>
  );
};
