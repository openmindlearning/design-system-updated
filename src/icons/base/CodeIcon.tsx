import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";
import { theme } from "../../themes";

export const CodeIcon = ({
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
        d="M19.2 12L15.3 15.9C15.1129 16.0849 15.0075 16.337 15.0075 16.6C15.0075 16.8631 15.1129 17.1151 15.3 17.3C15.69 17.69 16.31 17.69 16.7 17.3L21.29 12.7C21.68 12.31 21.68 11.68 21.29 11.29L16.7 6.7C16.31 6.31 15.69 6.31 15.3 6.7C15.1129 6.88485 15.0075 7.13695 15.0075 7.4C15.0075 7.66305 15.1129 7.91515 15.3 8.1L19.2 12ZM4.8 12L8.7 15.9C9.09 16.29 9.09 16.91 8.7 17.3C8.31 17.69 7.69 17.69 7.3 17.3L2.71 12.7C2.32 12.31 2.32 11.68 2.71 11.29L7.3 6.7C7.48486 6.51285 7.73695 6.40752 8 6.40752C8.26305 6.40752 8.51515 6.51285 8.7 6.7C9.09 7.09 9.09 7.71 8.7 8.1L4.8 12Z"
      />
    </svg>
  );
};
