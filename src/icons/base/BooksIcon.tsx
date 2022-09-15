import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const BooksIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      data-testid={testId}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ width, height, className }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 2.25C.5 1.284 1.284.5 2.25.5h3.5c.966 0 1.75.784 1.75 1.75v17.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 .5 19.75V2.25Zm5.25 0h-3.5v17.5h3.5V2.25Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 5.75c0-.483.392-.875.875-.875h5.25a.875.875 0 0 1 0 1.75h-5.25A.875.875 0 0 1 .5 5.75Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75 2.25C5.75 1.284 6.534.5 7.5.5H11c.966 0 1.75.784 1.75 1.75v17.5A1.75 1.75 0 0 1 11 21.5H7.5a1.75 1.75 0 0 1-1.75-1.75V2.25Zm5.25 0H7.5v17.5H11V2.25Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75 16.25c0-.483.392-.875.875-.875h5.25a.875.875 0 1 1 0 1.75h-5.25a.875.875 0 0 1-.875-.875ZM11.334 3.302a1.757 1.757 0 0 1 1.243-2.152l3.395-.91a1.757 1.757 0 0 1 2.152 1.242l4.55 16.975a1.757 1.757 0 0 1-1.242 2.153l-3.395.91a1.757 1.757 0 0 1-2.153-1.243l-4.55-16.975Zm5.093-1.365-3.395.91 4.55 16.975 3.395-.91-4.55-16.975Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.645 15.005a.875.875 0 0 1-.617 1.073l-5.075 1.367a.875.875 0 0 1-.456-1.69l5.075-1.367a.875.875 0 0 1 1.073.617ZM18.933 4.868a.875.875 0 0 1-.62 1.071L13.24 7.295a.875.875 0 0 1-.452-1.69l5.075-1.357a.875.875 0 0 1 1.07.62Z"
        fill={fill}
      />
    </svg>
  );
};
