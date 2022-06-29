import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const ExpandIcon = ({
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
      <rect
        width="14.0765"
        height="2.28826"
        transform="matrix(0.708619 -0.705591 0.708619 0.705591 3.0004 11.4323)"
        fill="#545454"
      />
      <rect
        width="14.0765"
        height="2.28826"
        transform="matrix(-0.708619 -0.705591 0.708619 -0.705591 12.9785 21.3686)"
        fill="#545454"
      />
    </svg>
  );
};
