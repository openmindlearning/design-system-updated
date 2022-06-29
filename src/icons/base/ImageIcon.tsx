import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";
import { theme } from "../../themes";

export const ImageIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  fill = theme.colors.grey[600],
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 19.7778V4.22222C22 3 21 2 19.7778 2H4.22222C3 2 2 3 2 4.22222V19.7778C2 21 3 22 4.22222 22H19.7778C21 22 22 21 22 19.7778ZM8.55548 14.2L10.8888 17.0111L14.3333 12.5778C14.5555 12.2889 14.9999 12.2889 15.2221 12.5889L19.1221 17.7889C19.3999 18.1555 19.1333 18.6778 18.6777 18.6778H5.35548C4.88881 18.6778 4.63326 18.1444 4.92215 17.7778L7.68881 14.2222C7.89992 13.9333 8.32215 13.9222 8.55548 14.2ZM17 8.66667C17.9205 8.66667 18.6667 7.92048 18.6667 7C18.6667 6.07953 17.9205 5.33334 17 5.33334C16.0795 5.33334 15.3333 6.07953 15.3333 7C15.3333 7.92048 16.0795 8.66667 17 8.66667Z"
      />
    </svg>
  );
};
