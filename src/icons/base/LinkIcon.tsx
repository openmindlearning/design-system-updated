import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const LinkIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15H10C10.55 15 11 15.45 11 16C11 16.55 10.55 17 10 17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7H10C10.55 7 11 7.45 11 8C11 8.55 10.55 9 10 9H7C5.35 9 4 10.35 4 12C4 13.65 5.35 15 7 15ZM17 7H14C13.45 7 13 7.45 13 8C13 8.55 13.45 9 14 9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H14C13.45 15 13 15.45 13 16C13 16.55 13.45 17 14 17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM7.99996 12C7.99996 12.55 8.44996 13 8.99996 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11H8.99996C8.44996 11 7.99996 11.45 7.99996 12Z"
        fill="#545454"
      />
    </svg>
  );
};
