import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const UnderlineIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
  className,
  fill = theme.colors.grey[500],
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height, className, fill }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.3333 11.9244C17.3333 14.6356 15.3956 17.0533 12.7022 17.4C9.44889 17.8178 6.66667 15.2844 6.66667 12.1111V6.11111C6.66667 5.49778 7.16445 5 7.77778 5C8.39111 5 8.88889 5.49778 8.88889 6.11111V12.1111C8.88889 14.04 10.6489 15.5689 12.6489 15.1511C14.1067 14.8578 15.1111 13.5067 15.1111 12.0222V6.11111C15.1111 5.49778 15.6089 5 16.2222 5C16.8356 5 17.3333 5.49778 17.3333 6.11111V11.9244ZM6.66667 21C6.17778 21 5.77778 20.6 5.77778 20.1111C5.77778 19.6222 6.17778 19.2222 6.66667 19.2222H17.3333C17.8222 19.2222 18.2222 19.6222 18.2222 20.1111C18.2222 20.6 17.8222 21 17.3333 21H6.66667Z"
      />
    </svg>
  );
};
