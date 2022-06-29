import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const PostsIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.05263 2.52631H20.9474C21.5263 2.52631 22 2.99999 22 3.57894V9.89473C22 10.4737 21.5263 10.9474 20.9474 10.9474H3.05263C2.47368 10.9474 2 10.4737 2 9.89473V3.57894C2 2.99999 2.47368 2.52631 3.05263 2.52631ZM3.05263 13.0527H20.9474C21.5263 13.0527 22 13.5263 22 14.1053V20.4211C22 21 21.5263 21.4737 20.9474 21.4737H3.05263C2.47368 21.4737 2 21 2 20.4211V14.1053C2 13.5263 2.47368 13.0527 3.05263 13.0527Z"
        fill="#545454"
      />
    </svg>
  );
};
