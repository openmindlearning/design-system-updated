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
      <path d="M6 4V7.17C6 7.7 6.21 8.21 6.59 8.59L10 12L6.58 15.42C6.21 15.8 6 16.31 6 16.84V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V16.84C18 16.31 17.79 15.8 17.42 15.43L14 12L17.41 8.6C17.79 8.22 18 7.71 18 7.18V4C18 2.9 17.1 2 16 2H8C6.9 2 6 2.9 6 4Z" />
    </svg>
  );
};
