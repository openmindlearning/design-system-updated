import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const RecordAudioIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  testId,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid={testId}
    >
      <path
        d="M11.9991 14.6316C13.7465 14.6316 15.157 13.221 15.157 11.4737V5.15789C15.157 3.41053 13.7465 2 11.9991 2C10.2518 2 8.84123 3.41053 8.84123 5.15789V11.4737C8.84123 13.221 10.2518 14.6316 11.9991 14.6316Z"
        fill="#545454"
      />
      <path
        d="M18.2199 11.4737C17.7041 11.4737 17.2725 11.8526 17.1883 12.3684C16.7568 14.8421 14.5989 16.7368 11.9989 16.7368C9.39887 16.7368 7.24097 14.8421 6.8094 12.3684C6.72519 11.8526 6.29361 11.4737 5.77782 11.4737C5.13571 11.4737 4.63045 12.0421 4.72519 12.6737C5.24098 15.8316 7.76729 18.3053 10.9462 18.7579V20.9474C10.9462 21.5263 11.4199 22 11.9989 22C12.5778 22 13.0515 21.5263 13.0515 20.9474V18.7579C16.2304 18.3053 18.7568 15.8316 19.2725 12.6737C19.3778 12.0421 18.862 11.4737 18.2199 11.4737Z"
        fill="#545454"
      />
    </svg>
  );
};
