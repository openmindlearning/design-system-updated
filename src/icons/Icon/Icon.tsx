import React, { ReactElement } from "react";
import { Variant, VariantIcons } from "./constants";
import { IconProps, DEFAULT_ICON } from "../../icons/base/constants";

type Props = {
  variant: Variant;
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};

export const ICON_TEST_ID = "icon-test-id";

export const Icon = ({
  variant,
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill,
  className,
}: Props): ReactElement => {
  const RenderedIcon: ({ width, height, className, fill }: IconProps) => ReactElement =
    VariantIcons[variant];
  return <RenderedIcon {...{ width, height, fill, className }} testId={ICON_TEST_ID} />;
};
