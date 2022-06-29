import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";
import { theme } from "../../themes";

export const ImagesIcon = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 16V4C22 2.9 21.1 2 20 2H8.00004C6.90004 2 6.00004 2.9 6.00004 4V16C6.00004 17.1 6.90004 18 8.00004 18H20C21.1 18 22 17.1 22 16ZM11.3998 12.53L13.0298 14.71L15.6098 11.49C15.8098 11.24 16.1898 11.24 16.3898 11.49L19.3498 15.19C19.6098 15.52 19.3798 16 18.9598 16H8.99978C8.58978 16 8.34978 15.53 8.59978 15.2L10.5998 12.53C10.7998 12.27 11.1998 12.27 11.3998 12.53ZM2 20V6.99999C2 6.44999 2.45 5.99999 3 5.99999C3.55 5.99999 4 6.44999 4 6.99999V19C4 19.55 4.45 20 5 20H17C17.55 20 18 20.45 18 21C18 21.55 17.55 22 17 22H4C2.9 22 2 21.1 2 20Z"
        fill={fill}
      />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
    </svg>
  );
};
