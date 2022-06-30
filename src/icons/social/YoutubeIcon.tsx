import React, { ReactElement } from "react";
type Props = {
  width?: number;
  height?: number;
};
export const YoutubeIcon = ({
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
        d="M19.6656 7.80444C19.4816 7.09414 18.9395 6.53482 18.251 6.34499C17.0034 6 12 6 12 6C12 6 6.99664 6 5.74891 6.34499C5.06045 6.53482 4.51827 7.09414 4.33427 7.80444C4 9.09176 4 11.7778 4 11.7778C4 11.7778 4 14.4637 4.33427 15.7511C4.51827 16.4614 5.06045 17.0207 5.74891 17.2107C6.99664 17.5556 12 17.5556 12 17.5556C12 17.5556 17.0034 17.5556 18.251 17.2107C18.9395 17.0207 19.4816 16.4614 19.6656 15.7511C20 14.4637 20 11.7778 20 11.7778C20 11.7778 20 9.09176 19.6656 7.80444Z"
        fill="#FF0000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2222 14.8889V9.55554L14.6667 12.2223L10.2222 14.8889Z"
        fill="white"
      />
    </svg>
  );
};
