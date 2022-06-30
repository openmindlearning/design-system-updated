import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const RecordVideoIcon = ({
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
      <path d="M17.5556 10.4375V6.79167C17.5556 6.21875 17.0556 5.75 16.4444 5.75H3.11111C2.5 5.75 2 6.21875 2 6.79167V17.2083C2 17.7812 2.5 18.25 3.11111 18.25H16.4444C17.0556 18.25 17.5556 17.7812 17.5556 17.2083V13.5625L20.1 15.9479C20.8 16.6042 22 16.1354 22 15.2083V8.78125C22 7.85417 20.8 7.38542 20.1 8.04167L17.5556 10.4375Z" />
    </svg>
  );
};
