import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { IconProps, DEFAULT_ICON } from "./constants";

export const AttachFileIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[500],
  className,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ className, width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <g clipPath="url(#clip0_8_107)">
        <path
          d="M19.2108 11.7828L11.7296 19.264C10.2518 20.7418 7.8547 20.9752 6.24249 19.6458C4.38987 18.1185 4.29795 15.382 5.95258 13.7273L14.6924 4.9875C15.6187 4.06119 17.1249 3.88441 18.136 4.71172C19.3028 5.66632 19.3664 7.38459 18.3269 8.42403L10.9023 15.8487C10.5134 16.2376 9.87702 16.2376 9.48811 15.8487C9.0992 15.4597 9.0992 14.8234 9.48811 14.4344L15.6753 8.24726C15.9652 7.95734 15.9652 7.47651 15.6753 7.1866C15.3854 6.89668 14.9046 6.89668 14.6146 7.1866L8.52645 13.2748C7.60014 14.2011 7.42336 15.7072 8.25068 16.7184C9.20527 17.8851 10.9235 17.9488 11.963 16.9093L19.2674 9.6049C20.7453 8.12705 20.9786 5.72996 19.6492 4.11775C18.129 2.2722 15.3854 2.17321 13.7308 3.82784L5.05455 12.504C3.02516 14.5334 2.69282 17.8356 4.52422 20.0489C6.63847 22.5874 10.3932 22.7217 12.6701 20.4448L20.2715 12.8435C20.5614 12.5535 20.5614 12.0727 20.2715 11.7828C19.9816 11.4929 19.5007 11.4929 19.2108 11.7828Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_8_107">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
