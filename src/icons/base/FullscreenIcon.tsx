import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const FullscreenIcon = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9C7 9.55 6.55 10 6 10C5.45 10 5 9.55 5 9V6C5 5.45 5.45 5 6 5H9C9.55 5 10 5.45 10 6C10 6.55 9.55 7 9 7H7V9ZM5 15C5 14.45 5.45 14 6 14C6.55 14 7 14.45 7 15V17H9C9.55 17 10 17.45 10 18C10 18.55 9.55 19 9 19H6C5.45 19 5 18.55 5 18V15ZM17 17H15C14.45 17 14 17.45 14 18C14 18.55 14.45 19 15 19H18C18.55 19 19 18.55 19 18V15C19 14.45 18.55 14 18 14C17.45 14 17 14.45 17 15V17ZM15 7C14.45 7 14 6.55 14 6C14 5.45 14.45 5 15 5H18C18.55 5 19 5.45 19 6V9C19 9.55 18.55 10 18 10C17.45 10 17 9.55 17 9V7H15Z"
      />
    </svg>
  );
};
