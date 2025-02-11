import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { IconProps, DEFAULT_ICON } from "./constants";

export const AtMentionsIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  testId,
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
      <path d="M12 3C7.032 3 3 7.032 3 12C3 16.968 7.032 21 12 21H16.5V19.2H12C8.094 19.2 4.8 15.906 4.8 12C4.8 8.094 8.094 4.8 12 4.8C15.906 4.8 19.2 8.094 19.2 12V13.287C19.2 13.998 18.561 14.7 17.85 14.7C17.139 14.7 16.5 13.998 16.5 13.287V12C16.5 9.516 14.484 7.5 12 7.5C9.516 7.5 7.5 9.516 7.5 12C7.5 14.484 9.516 16.5 12 16.5C13.242 16.5 14.376 15.996 15.186 15.177C15.771 15.978 16.779 16.5 17.85 16.5C19.623 16.5 21 15.06 21 13.287V12C21 7.032 16.968 3 12 3ZM12 14.7C10.506 14.7 9.3 13.494 9.3 12C9.3 10.506 10.506 9.3 12 9.3C13.494 9.3 14.7 10.506 14.7 12C14.7 13.494 13.494 14.7 12 14.7Z" />
    </svg>
  );
};
