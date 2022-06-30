import React, { ReactElement } from "react";
import { IconProps, DEFAULT_ICON } from "./constants";
import { theme } from "../../themes";

export const ReplyIcon = ({
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
        d="M0.55014 12.5972L11.8677 22.5V16.7631C15.4288 16.3834 18.3729 17.3962 20.7904 19.8137L22.6272 21.6505V19.0529C22.6272 12.3115 18.9137 8.64994 11.8677 8.31813V2.69435L0.55014 12.5972ZM3.81766 12.5972L9.7154 7.43665V10.4453H10.7914C16.387 10.4453 19.4533 12.4369 20.2584 16.596C17.5221 14.7647 14.2884 14.1514 10.6145 14.7637L9.7154 14.9136V17.7577L3.81766 12.5972Z"
      />
    </svg>
  );
};
