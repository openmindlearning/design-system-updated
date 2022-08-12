import React, { ReactElement } from "react";
import { theme } from "../../themes";
import { IconProps, DEFAULT_ICON } from "./constants";

export const ArchiveIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = theme.colors.grey[500],
  className,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1167 4.35833L15.9583 2.95833C15.7333 2.675 15.3917 2.5 15 2.5H5C4.60833 2.5 4.26667 2.675 4.03333 2.95833L2.88333 4.35833C2.64167 4.64167 2.5 5.01667 2.5 5.41667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V5.41667C17.5 5.01667 17.3583 4.64167 17.1167 4.35833ZM9.70833 14.2917L5.41667 10H8.33333V8.33333H11.6667V10H14.5833L10.2917 14.2917C10.1333 14.45 9.86667 14.45 9.70833 14.2917ZM4.94167 3.33333L4.26667 4.16667H15.725L14.9417 3.33333H4.94167Z"
        fill={fill}
      />
    </svg>
  );
};
