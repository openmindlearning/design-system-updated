import * as React from "react";
import { DEFAULT_ICON, IconProps } from "./constants";
import { theme } from "../../themes";

export const CircledPlusIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.content.muted,
}: IconProps) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 5c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1Zm-8 5c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Z"
      fill={fill}
    />
  </svg>
);
