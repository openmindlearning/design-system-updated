import React, { ReactElement } from "react";
type Props = {
  width?: number;
  height?: number;
};
export const InstagramIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2 4H8.8C6.14903 4 4 6.14903 4 8.8V15.2C4 17.851 6.14903 20 8.8 20H15.2C17.851 20 20 17.851 20 15.2V8.8C20 6.14903 17.851 4 15.2 4ZM5.60002 8.79993C5.60002 7.03262 7.03271 5.59993 8.80002 5.59993H15.2C16.9673 5.59993 18.4 7.03262 18.4 8.79993V15.1999C18.4 16.9672 16.9673 18.3999 15.2 18.3999H8.80002C7.03271 18.3999 5.60002 16.9672 5.60002 15.1999V8.79993ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14.3999C13.3255 14.3999 14.4 13.3254 14.4 11.9999C14.4 10.6745 13.3255 9.59994 12 9.59994C10.6745 9.59994 9.60002 10.6745 9.60002 11.9999C9.60002 13.3254 10.6745 14.3999 12 14.3999ZM16.8 8.00003C16.8 8.44186 16.4418 8.80003 16 8.80003C15.5582 8.80003 15.2 8.44186 15.2 8.00003C15.2 7.5582 15.5582 7.20003 16 7.20003C16.4418 7.20003 16.8 7.5582 16.8 8.00003Z"
        fill="url(#paint0_linear_30_366)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_366"
          x1="16.4"
          y1="4"
          x2="5.6"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0311768" stopColor="#A044C3" />
          <stop offset="0.363837" stopColor="#C34083" />
          <stop offset="0.684451" stopColor="#D97144" />
          <stop offset="1" stopColor="#F0C86B" />
        </linearGradient>
      </defs>
    </svg>
  );
};
