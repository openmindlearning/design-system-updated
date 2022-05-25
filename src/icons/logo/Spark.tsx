import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};
export const LogoSparkIcon = ({
  width = 27,
  height = 24,
  fill = DEFAULT_ICON.FILL,
}: Props): ReactElement => {
  return (
    <svg {...{ width, height }} viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.8347 12.0782L26.8325 11.6179L16.548 10.0644L20.2944 0.362834L19.893 0.133789L13.4072 8.26381L6.87593 0.167804L6.47907 0.39912L10.2753 10.0826L0 11.6904L0.00226654 12.1508L10.2867 13.7042L6.5403 23.4081L6.93943 23.6371L13.4276 15.5048L19.9565 23.6009L20.3557 23.3695L16.5571 13.6861L26.8347 12.0782Z"
        {...{ fill }}
      />
    </svg>
  );
};
