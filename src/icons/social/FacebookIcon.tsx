import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const FacebookIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1217 12.0054H8.84479V9.56619H11.1217V8.34125C11.1217 6.32057 12.7598 4.6825 14.7804 4.6825H16V7.12166H14.7804C14.1069 7.12166 13.5609 7.66769 13.5609 8.34125V9.56619H15.9786V12.0054H13.5609V19.3175H11.1217V12.0054Z"
        fill="#3B5998"
      />
    </svg>
  );
};
