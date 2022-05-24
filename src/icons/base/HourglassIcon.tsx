import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};
export const HourglassIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  className,
  fill = "#545454",
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M3 2V3.585C3 3.85 3.105 4.105 3.295 4.295L5 6L3.29 7.71C3.105 7.9 3 8.155 3 8.42V10C3 10.55 3.45 11 4 11H8C8.55 11 9 10.55 9 10V8.42C9 8.155 8.895 7.9 8.71 7.715L7 6L8.705 4.3C8.895 4.11 9 3.855 9 3.59V2C9 1.45 8.55 1 8 1H4C3.45 1 3 1.45 3 2Z"
        fill="black"
        fill-opacity="0.54"
      />
    </svg>
  );
};
