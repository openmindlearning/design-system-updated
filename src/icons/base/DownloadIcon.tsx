import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const DownloadIcon = ({
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
        d="M20.2 9.23529H15.5143V2H8.48573V9.23529H3.80002L12 17.6765L20.2 9.23529ZM3.80002 20.0882V22.5H20.2V20.0882H3.80002Z"
        fill="#545454"
      />
    </svg>
  );
};
