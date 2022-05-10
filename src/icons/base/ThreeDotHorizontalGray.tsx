import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const ThreeDotsHorizontalGray = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: Props): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={1.75} cy={6} r={1.5} transform="rotate(-90 1.75 6)" fill="#757575" />
      <circle cx={7} cy={6} r={1.5} transform="rotate(-90 7 6)" fill="#757575" />
      <circle cx={12.25} cy={6} r={1.5} transform="rotate(-90 12.25 6)" fill="#757575" />
    </svg>
  );
};
