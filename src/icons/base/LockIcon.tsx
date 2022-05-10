import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};
export const LockIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 8.484C8.25 6.2865 9.9315 4.5 12 4.5C14.0685 4.5 15.75 6.2865 15.75 8.484V10.4985H8.25V8.484ZM18.75 10.4985V8.484C18.75 4.6335 15.7215 1.5 12 1.5C8.2785 1.5 5.25 4.6335 5.25 8.484V10.4985H3.5C3.22386 10.4985 3 10.7224 3 10.9985V21.9985C3 22.2746 3.22386 22.4985 3.5 22.4985H20.5C20.7761 22.4985 21 22.2746 21 21.9985V10.9985C21 10.7224 20.7761 10.4985 20.5 10.4985H18.75Z"
        fill="#A0A0A0"
      />
      <mask
        id="mask0_9_262"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="3"
        y="1"
        width="18"
        height="22"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.25 8.484C8.25 6.2865 9.9315 4.5 12 4.5C14.0685 4.5 15.75 6.2865 15.75 8.484V10.4985H8.25V8.484ZM18.75 10.4985V8.484C18.75 4.6335 15.7215 1.5 12 1.5C8.2785 1.5 5.25 4.6335 5.25 8.484V10.4985H3.5C3.22386 10.4985 3 10.7224 3 10.9985V21.9985C3 22.2746 3.22386 22.4985 3.5 22.4985H20.5C20.7761 22.4985 21 22.2746 21 21.9985V10.9985C21 10.7224 20.7761 10.4985 20.5 10.4985H18.75Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_9_262)">
        <rect x="1.5" y="1.5" width="21" height="21" />
      </g>
    </svg>
  );
};
