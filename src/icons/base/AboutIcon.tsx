import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const AboutIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[600],
  testId,
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
        d="M16.8888 7C16.8888 9.7625 14.6513 12 11.8888 12C9.12632 12 6.88882 9.7625 6.88882 7C6.88882 4.2375 9.12632 2 11.8888 2C14.6513 2 16.8888 4.2375 16.8888 7ZM1.88882 19.5C1.88882 16.175 8.55132 14.5 11.8888 14.5C15.2263 14.5 21.8888 16.175 21.8888 19.5V20.75C21.8888 21.4375 21.3263 22 20.6388 22H3.13882C2.45132 22 1.88882 21.4375 1.88882 20.75V19.5Z"
      />
    </svg>
  );
};
