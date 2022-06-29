import * as React from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const PencilIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: IconProps) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.257 4.693a.83.83 0 0 1 0 1.175l-1.525 1.525-3.125-3.125 1.525-1.525a.83.83 0 0 1 1.175 0l1.95 1.95ZM2.5 17.084v-2.533a.41.41 0 0 1 .125-.3l9.092-9.092 3.125 3.125-9.1 9.092a.391.391 0 0 1-.292.125H2.916a.413.413 0 0 1-.417-.417Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
