import React from "react";
import { theme } from "../../themes";
import { IconProps, DEFAULT_ICON } from "./constants";

export const DoubleChevronIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.content.primary,
  className,
  testId,
}: IconProps): React.ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <path
        fill={fill}
        d="M5.7075 6.70508C5.89433 6.51783 6.14798 6.4126 6.4125 6.4126C6.67702 6.4126 6.93067 6.51783 7.1175 6.70508L11.7075 11.2951C12.0975 11.6851 12.0975 12.3151 11.7075 12.7051L7.1175 17.2951C6.7275 17.6851 6.0975 17.6851 5.7075 17.2951C5.3175 16.9051 5.3175 16.2751 5.7075 15.8851L9.5875 11.9951L5.7075 8.11508C5.3175 7.72508 5.3275 7.08508 5.7075 6.70508Z"
        fill-opacity="0.54"
      />
      <path
        fill={fill}
        d="M12.7075 6.70508C12.8943 6.51783 13.148 6.4126 13.4125 6.4126C13.677 6.4126 13.9307 6.51783 14.1175 6.70508L18.7075 11.2951C19.0975 11.6851 19.0975 12.3151 18.7075 12.7051L14.1175 17.2951C13.7275 17.6851 13.0975 17.6851 12.7075 17.2951C12.3175 16.9051 12.3175 16.2751 12.7075 15.8851L16.5875 11.9951L12.7075 8.11508C12.3175 7.72508 12.3275 7.08508 12.7075 6.70508Z"
        fill-opacity="0.54"
      />
    </svg>
  );
};
