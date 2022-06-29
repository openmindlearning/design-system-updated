import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const HeartFilledIcon = ({
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
        d="M21.4691 8.41415L21.4708 8.43161L21.4736 8.44891C21.4865 8.52696 21.5809 9.18151 21.3108 10.2881L21.3108 10.2882C20.9221 11.8826 20.0229 13.3408 18.6992 14.5026C18.6988 14.503 18.6983 14.5035 18.6978 14.5039L11.943 20.337L5.30239 14.5037L5.3021 14.5035C3.97771 13.3419 3.07793 11.8829 2.68916 10.2882L2.68913 10.2881C2.41895 9.18082 2.51357 8.52663 2.52646 8.44988L2.52949 8.43188L2.53119 8.41371C2.80233 5.52113 4.89525 3.5 7.44564 3.5C9.1308 3.5 10.6362 4.37118 11.5167 5.82969L11.9401 6.53093L12.3703 5.83385C13.257 4.3969 14.8331 3.50037 16.5543 3.50037C19.105 3.50037 21.1976 5.52149 21.4691 8.41415Z"
        fill="#545454"
        stroke="#545454"
      />
    </svg>
  );
};
