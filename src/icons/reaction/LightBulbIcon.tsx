import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const LightBulbIcon = ({
  width = DEFAULT_ICON.WIDTH,
  height = DEFAULT_ICON.HEIGHT,
}: Props): ReactElement => {
  return (
    <svg
      {...{ width, height }}
      viewBox="0 0 31 40"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="74.7540513%" id="light-bulb-gradient">
          <stop stopColor="#FFEBC8" offset="0%"></stop>
          <stop stopColor="#FED686" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-190.000000, -90.000000)">
          <g transform="translate(191.735294, 92.253352)">
            <path
              d="M19.0588235,29.088304 L19.0588235,33.8823529 L19.0588235,33.8823529 C19.0588235,35.0518971 18.1107206,36 16.9411765,36 L10.5882353,36 C9.41869112,36 8.47058824,35.0518971 8.47058824,33.8823529 L8.47113156,28.0750311 C8.47112569,27.7686744 8.33072033,27.479209 8.09011063,27.289574 C2.69670354,23.0387959 -1.24344979e-14,18.5305066 -1.24344979e-14,13.7647059 C-1.24344979e-14,6.16266874 6.16266874,0 13.7647059,0 C21.366743,0 27.5294118,6.16266874 27.5294118,13.7647059 C27.5294118,18.5831566 25.0892367,22.9037839 20.2088865,26.7265876 C19.4829251,27.2952272 19.0588235,28.1661484 19.0588235,29.088304 Z"
              stroke="#805E18"
              strokeWidth="2"
              fill="url(#light-bulb-gradient)"
            ></path>
            <rect fill="#F5F5F7" x="9.26470588" y="26.7692308" width="9" height="9"></rect>
            <rect fill="#CACAE1" x="9.26470588" y="31.7692308" width="9" height="4"></rect>
            <path
              d="M19.0588235,29.088304 L19.0588235,33.8823529 L19.0588235,33.8823529 C19.0588235,35.0518971 18.1107206,36 16.9411765,36 L10.5882353,36 C9.41869112,36 8.47058824,35.0518971 8.47058824,33.8823529 L8.47113156,28.0750311 C8.47112569,27.7686744 8.33072033,27.479209 8.09011063,27.289574 C2.69670354,23.0387959 -1.24344979e-14,18.5305066 -1.24344979e-14,13.7647059 C-1.24344979e-14,6.16266874 6.16266874,0 13.7647059,0 C21.366743,0 27.5294118,6.16266874 27.5294118,13.7647059 C27.5294118,18.5831566 25.0892367,22.9037839 20.2088865,26.7265876 C19.4829251,27.2952272 19.0588235,28.1661484 19.0588235,29.088304 Z"
              stroke="#805E18"
              strokeWidth="2"
            ></path>
            <path
              d="M21.7022059,0.269230769 C17.3529635,0.269230769 13.8272059,4.29866802 13.8272059,9.26923077 C13.8272059,14.2397935 17.3529635,18.2692308 21.7022059,18.2692308"
              stroke="#FFFFFF"
              strokeWidth="2"
              transform="translate(17.764706, 9.269231) scale(-1, 1) rotate(45.000000) translate(-17.764706, -9.269231) "
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
