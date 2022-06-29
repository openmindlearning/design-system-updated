import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const ExpandLessonIcon = ({
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
      <path d="M21.7143 12L2.00238 12" stroke="#545454" strokeWidth="2" strokeLinecap="square" />
      <path
        d="M11.9999 21.7143L11.9999 2.00238"
        stroke="#545454"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};
