import React, { ReactElement } from "react";
import { LogoLightMode } from "./LogoLightMode";
import { LogoDarkMode } from "./LogoDarkMode";

type Size = "small" | "medium" | "large";
type Theme = "light" | "dark";

type SizeValue = {
  width: number;
  height: number;
};

interface Props {
  /**
   * Size variants
   * - small
   * - medium
   * - large
   * */
  size?: Size;
  /**
   * Theme variants
   * - light
   * - dark
   * */
  theme?: Theme;
}

const sizeValues: { [size in Size]: SizeValue } = {
  large: {
    height: 30,
    width: 138,
  },
  medium: {
    height: 22,
    width: 99,
  },
  small: {
    height: 11,
    width: 49.5,
  },
};

export const Logo = ({ size = "medium", theme = "light" }: Props): ReactElement => {
  if (theme === "dark") {
    return <LogoDarkMode {...sizeValues[size]} />;
  } else {
    return <LogoLightMode {...sizeValues[size]} />;
  }
};
