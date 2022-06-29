import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";
import { IconProps } from "./constants";

export const SearchIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
  fill = DEFAULT_ICON.FILL,
}: IconProps): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1872 14.4713H15.9772L20.2172 18.7313C20.6272 19.1413 20.6272 19.8113 20.2172 20.2213C19.8072 20.6313 19.1372 20.6313 18.7272 20.2213L14.4772 15.9713V15.1813L14.2072 14.9013C12.8072 16.1013 10.8972 16.7213 8.86719 16.3813C6.08719 15.9113 3.86719 13.5913 3.52719 10.7913C3.00719 6.56133 6.56719 3.00133 10.7972 3.52133C13.5972 3.86133 15.9172 6.08133 16.3872 8.86133C16.7272 10.8913 16.1072 12.8013 14.9072 14.2013L15.1872 14.4713ZM5.47719 9.97133C5.47719 12.4613 7.48719 14.4713 9.97719 14.4713C12.4672 14.4713 14.4772 12.4613 14.4772 9.97133C14.4772 7.48133 12.4672 5.47133 9.97719 5.47133C7.48719 5.47133 5.47719 7.48133 5.47719 9.97133Z"
        {...{ fill }}
      />
    </svg>
  );
};
