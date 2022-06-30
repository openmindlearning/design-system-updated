import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const CameraIcon = ({
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
        d="M17.6 6.6H20C21.1 6.6 22 7.5 22 8.6V17.6C22 18.7 21.1 19.6 20 19.6H4C2.9 19.6 2 18.7 2 17.6V8.6C2 7.5 2.9 6.6 4 6.6H6.4C6.73 6.6 7.0852 6.344 7.1898 6.031L7.8102 4.1692C7.9144 3.856 8.27 3.6 8.6 3.6H15.4C15.73 3.6 16.0852 3.856 16.1898 4.169L16.8102 6.0308C16.9144 6.344 17.27 6.6 17.6 6.6ZM9 12.6C9 10.9436 10.343 9.6 12 9.6C13.6566 9.6 15 10.9436 15 12.6C15 14.257 13.6566 15.6 12 15.6C10.343 15.6 9 14.257 9 12.6ZM12 17.6C9.2386 17.6 7 15.3614 7 12.6C7 9.8388 9.2386 7.6 12 7.6C14.761 7.6 17 9.8388 17 12.6C17 15.3614 14.761 17.6 12 17.6ZM18.6 9.2986C18.6 9.6854 18.9136 9.9986 19.3 9.9986C19.6866 9.9986 20 9.6854 20 9.2986C20 8.9122 19.6868 8.5986 19.3 8.5986C18.9136 8.5986 18.6 8.9122 18.6 9.2986Z"
      />
    </svg>
  );
};
