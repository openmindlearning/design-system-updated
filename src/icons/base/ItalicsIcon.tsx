import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const ItalicsIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M10 6.5C10 7.33 10.67 8 11.5 8H12.21L8.79 16H7.5C6.67 16 6 16.67 6 17.5C6 18.33 6.67 19 7.5 19H12.5C13.33 19 14 18.33 14 17.5C14 16.67 13.33 16 12.5 16H11.79L15.21 8H16.5C17.33 8 18 7.33 18 6.5C18 5.67 17.33 5 16.5 5H11.5C10.67 5 10 5.67 10 6.5Z"
        fill="#545454"
      />
    </svg>
  );
};
