import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const SaveIcon = ({
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
        d="M19 21.8L12 16.3556L5 21.8V4.37777C5 3.17502 5.89543 2.2 7 2.2H17C18.1046 2.2 19 3.17502 19 4.37777V21.8Z"
        fill="#545454"
      />
    </svg>
  );
};
