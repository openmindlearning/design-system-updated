import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";
export const DiscussionIcon = ({
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
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM16.9999 14H6.99991C6.44991 14 5.99991 13.55 5.99991 13C5.99991 12.45 6.44991 12 6.99991 12H16.9999C17.5499 12 17.9999 12.45 17.9999 13C17.9999 13.55 17.5499 14 16.9999 14ZM6.99991 11H16.9999C17.5499 11 17.9999 10.55 17.9999 10C17.9999 9.45001 17.5499 9.00001 16.9999 9.00001H6.99991C6.44991 9.00001 5.99991 9.45001 5.99991 10C5.99991 10.55 6.44991 11 6.99991 11ZM16.9999 8.00002H6.99991C6.44991 8.00002 5.99991 7.55002 5.99991 7.00002C5.99991 6.45002 6.44991 6.00002 6.99991 6.00002H16.9999C17.5499 6.00002 17.9999 6.45002 17.9999 7.00002C17.9999 7.55002 17.5499 8.00002 16.9999 8.00002Z"
        fill="#545454"
      />
    </svg>
  );
};
