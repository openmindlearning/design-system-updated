import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const CollapseListIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 2C3.11929 2 2 3.11929 2 4.5V19.5C2 20.8807 3.11929 22 4.5 22H19.5C20.8807 22 22 20.8807 22 19.5V4.5C22 3.11929 20.8807 2 19.5 2H4.5ZM5.75 4.5C5.05964 4.5 4.5 5.05964 4.5 5.75V18.25C4.5 18.9404 5.05964 19.5 5.75 19.5H8.25C8.94036 19.5 9.5 18.9404 9.5 18.25V5.75C9.5 5.05964 8.94036 4.5 8.25 4.5H5.75Z"
        fill="#545454"
      />
    </svg>
  );
};
