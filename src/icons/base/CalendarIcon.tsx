import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { DEFAULT_ICON, IconProps } from "./constants";

export const CalendarIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  className,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
      {...{ width, height, className }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v17.5a1.75 1.75 0 0 1-1.75 1.75H2.25A1.75 1.75 0 0 1 .5 21.75V4.25Zm19.25 0H2.25v17.5h17.5V4.25Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.25.75c.483 0 .875.392.875.875v3.5a.875.875 0 0 1-1.75 0v-3.5c0-.483.392-.875.875-.875ZM5.75.75c.483 0 .875.392.875.875v3.5a.875.875 0 1 1-1.75 0v-3.5c0-.483.392-.875.875-.875ZM.5 8.625c0-.483.392-.875.875-.875h19.25a.875.875 0 0 1 0 1.75H1.375A.875.875 0 0 1 .5 8.625ZM6.188 13c0-.483.391-.875.875-.875h3.062a.875.875 0 0 1 .683 1.422l-.968 1.21a2.625 2.625 0 1 1-3.32 4.034.875.875 0 1 1 1.239-1.236.875.875 0 1 0 .617-1.492.875.875 0 0 1-.684-1.422l.612-.766H7.062A.875.875 0 0 1 6.188 13ZM14.891 12.217a.875.875 0 0 1 .484.783v5.688a.875.875 0 1 1-1.75 0V14.75l-.35.262a.875.875 0 1 1-1.05-1.4l1.75-1.312a.875.875 0 0 1 .916-.083Z"
        fill={fill}
      />
    </svg>
  );
};
