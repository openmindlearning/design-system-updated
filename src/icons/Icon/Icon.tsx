import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { theme } from "../../themes";
import { Variant, VariantIcons } from "./constants";

type Props = {
  variant: Variant;
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};

export const Icon = ({
  variant,
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  className,
}: Props): ReactElement => {
  const RenderedIcon: ({
    width,
    height,
    className,
    fill,
  }: Pick<Props, "width" | "height" | "fill" | "className">) => ReactElement =
    VariantIcons[variant];
  return <RenderedIcon {...{ width, height, fill, className }} />;
};
