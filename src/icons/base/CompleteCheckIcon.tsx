import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const CompleteCheckIcon = ({
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
      <mask
        id="mask0_9_260"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="3"
        width="22"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7578 3.1311L22.5 5.5824L10.197 22.6311L1.5 16.0929L4.3112 12.6961L9.20242 16.372L18.7578 3.1311Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_9_260)">
        <rect x="1.5" y="1.6311" width="21" height="21" fill="black" />
      </g>
    </svg>
  );
};
