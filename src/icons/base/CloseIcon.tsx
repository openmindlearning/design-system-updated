import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const CloseIcon = ({
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
        d="M21.5563 2.45883C21.2729 2.17479 20.8882 2.01517 20.4869 2.01517C20.0857 2.01517 19.7009 2.17479 19.4175 2.45883L12 9.86119L4.58248 2.44366C4.29908 2.15963 3.91432 2 3.51308 2C3.11184 2 2.72709 2.15963 2.44369 2.44366C1.8521 3.03525 1.8521 3.99088 2.44369 4.58246L9.86121 12L2.44369 19.4175C1.8521 20.0091 1.8521 20.9647 2.44369 21.5563C3.03527 22.1479 3.9909 22.1479 4.58248 21.5563L12 14.1388L19.4175 21.5563C20.0091 22.1479 20.9647 22.1479 21.5563 21.5563C22.1479 20.9647 22.1479 20.0091 21.5563 19.4175L14.1388 12L21.5563 4.58246C22.1327 4.00605 22.1327 3.03525 21.5563 2.45883Z"
        fill="#545454"
      />
    </svg>
  );
};
