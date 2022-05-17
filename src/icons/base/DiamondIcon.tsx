import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};
export const DiamondIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  className,
  fill = "#545454",
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path
        d="M1.02 5.598 5.796 1.29a.01.01 0 0 1 .007-.003h8.392a.01.01 0 0 1 .007.003l4.778 4.307a.01.01 0 0 1-.007.017H1.026a.01.01 0 0 1-.007-.017ZM9.992 15.992 1.014 5.632a.01.01 0 0 1 .008-.016h17.956a.01.01 0 0 1 .008.017l-8.979 10.36a.01.01 0 0 1-.015 0Z"
        fill={fill}
        stroke="#F6F6F6"
        strokeWidth={0.6}
      />
      <path
        d="M8.987 1 5.812 5.6a.01.01 0 0 0 .008.015h8.363a.01.01 0 0 0 .008-.015L11.304 1"
        stroke="#F6F6F6"
        strokeWidth={0.6}
      />
      <path
        d="m5.806 5.63 4.186 10.347a.01.01 0 0 0 .018 0L14.195 5.63a.01.01 0 0 0-.01-.014h-8.37a.01.01 0 0 0-.009.014Z"
        fill={fill}
        stroke="#F6F6F6"
        strokeWidth={0.6}
      />
    </svg>
  );
};
