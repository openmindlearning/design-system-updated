import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { theme } from "../../themes";
import { IconProps } from "./constants";

export const SparkIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[600],
  className,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid={testId}
    >
      <path
        d="M10.7188 7.43747L6.30006 12.3922C5.98288 12.7422 5.39225 12.4468 5.50163 11.9875L6.25631 8.88122C6.33288 8.58591 6.10319 8.31247 5.80788 8.31247H3.62038C3.2485 8.31247 3.02975 7.88591 3.2485 7.56872L7.66725 1.62966C7.96256 1.23591 8.57506 1.52028 8.47663 2.00153L7.66725 6.12497C7.61256 6.39841 7.83131 6.68278 8.11569 6.68278H10.3579C10.7516 6.66091 10.9813 7.14216 10.7188 7.43747Z"
        fill={fill}
      />
      <path
        d="M0.4375 7.97339H1.96875C2.15469 7.97339 2.29688 7.8312 2.29688 7.64526C2.29688 7.45933 2.15469 7.31714 1.96875 7.31714H0.4375C0.251562 7.31714 0.109375 7.45933 0.109375 7.64526C0.109375 7.82026 0.251562 7.97339 0.4375 7.97339Z"
        fill={fill}
      />
      <path
        d="M1.13743 10.8828C1.23586 11.0359 1.43274 11.0906 1.58586 10.9922L2.71243 10.3141C2.81086 10.2484 2.87649 10.1391 2.87649 10.0297C2.87649 9.97499 2.86555 9.90937 2.83274 9.86562C2.7343 9.71249 2.53743 9.6578 2.3843 9.75624L1.25774 10.4344C1.09368 10.5219 1.04993 10.7297 1.13743 10.8828Z"
        fill={fill}
      />
      <path
        d="M2.82192 5.41405C2.85473 5.35937 2.86567 5.30468 2.86567 5.24999C2.86567 5.14062 2.81098 5.03124 2.7016 4.96562L1.57504 4.28749C1.42192 4.18905 1.2141 4.24374 1.1266 4.39687C1.02817 4.54999 1.08285 4.7578 1.23598 4.8453L2.36254 5.52343C2.5266 5.62187 2.73441 5.57812 2.82192 5.41405Z"
        fill={fill}
      />
      <path
        d="M13.5625 7.97339H12.0312C11.8453 7.97339 11.7031 7.8312 11.7031 7.64526C11.7031 7.45933 11.8453 7.31714 12.0312 7.31714H13.5625C13.7484 7.31714 13.8906 7.45933 13.8906 7.64526C13.8906 7.8312 13.7484 7.97339 13.5625 7.97339Z"
        fill={fill}
      />
      <path
        d="M12.8626 10.8828C12.7642 11.0359 12.5673 11.0906 12.4142 10.9922L11.2876 10.3141C11.1892 10.2484 11.1235 10.1391 11.1235 10.0297C11.1235 9.97499 11.1345 9.90937 11.1673 9.86562C11.2657 9.71249 11.4626 9.6578 11.6157 9.75624L12.7423 10.4344C12.9063 10.5219 12.9501 10.7297 12.8626 10.8828Z"
        fill={fill}
      />
      <path
        d="M11.1783 5.41405C11.1455 5.35937 11.1345 5.30468 11.1345 5.24999C11.1345 5.14062 11.1892 5.03124 11.2986 4.96562L12.4251 4.28749C12.5783 4.18905 12.7861 4.24374 12.8736 4.39687C12.972 4.54999 12.9173 4.7578 12.7642 4.8453L11.6376 5.52343C11.4736 5.62187 11.2658 5.57812 11.1783 5.41405Z"
        fill={fill}
      />
    </svg>
  );
};
