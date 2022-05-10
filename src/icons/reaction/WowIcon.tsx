import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};
export const WowIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  className = "",
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height, className }}
      viewBox="0 0 34 35"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="wow-gradient">
          <stop stopColor="#FFEFD6" offset="0%"></stop>
          <stop stopColor="#FED57F" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-82.000000, -93.000000)">
          <g id="wow" transform="translate(83.000000, 94.022583)">
            <circle
              stroke="#805E18"
              strokeWidth="2"
              fill="url(#wow-gradient)"
              cx="16"
              cy="16"
              r="16"
            ></circle>
            <circle fill="#805E18" cx="10" cy="10" r="3"></circle>
            <circle fill="#805E18" cx="22" cy="10" r="3"></circle>
            <ellipse fill="#805E18" cx="16" cy="19.5" rx="3.5" ry="4.5"></ellipse>
            <path
              d="M30.9526507,14.7768064 C30.9840177,15.1728788 31,15.5732817 31,15.9774174 C31,24.2616886 24.2842712,30.9774174 16,30.9774174 C7.71572875,30.9774174 1,24.2616886 1,15.9774174 C1,15.5732817 1.01598229,15.1728788 1.0473493,14.7768064 C1.6589663,22.5009398 8.11986446,28.5774174 16,28.5774174 C23.7540424,28.5774174 30.1339036,22.6938481 30.9188157,15.1474774 L30.9526507,14.7768064 Z"
              fill="#D2AA59"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
