import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const UploadAudioIcon = ({
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
        d="M19.5 2H4.5C3.125 2 2 3.125 2 4.5V19.5C2 20.875 3.125 22 4.5 22H19.5C20.875 22 22 20.875 22 19.5V4.5C22 3.125 20.875 2 19.5 2Z"
        fill="#545454"
      />
      <path
        d="M15.7503 8.25H13.2503V14.9625C13.2503 16.55 12.1253 18.0125 10.5503 18.2125C8.43777 18.5 6.66277 16.65 7.05027 14.525C7.30027 13.15 8.52527 12.0875 9.92527 12C10.7128 11.95 11.4253 12.2 12.0003 12.6375V7C12.0003 6.3125 12.5628 5.75 13.2503 5.75H15.7503C16.4378 5.75 17.0003 6.3125 17.0003 7C17.0003 7.6875 16.4378 8.25 15.7503 8.25Z"
        fill="white"
      />
    </svg>
  );
};
