import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};
export const UploadVideoIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[600],
  className,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height, className }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM10 8.50001V15.5C10 15.91 10.47 16.15 10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.10001C10.47 7.85001 10 8.09001 10 8.50001Z"
        fill={fill}
      />
    </svg>
  );
};
