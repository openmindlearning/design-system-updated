import React, { ReactElement } from "react";
import { DEFAULT_ICON } from "../../util/constants";

type Props = {
  width?: number;
  height?: number;
};
export const SoundcloudIcon = ({
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
        d="M10.5914 14.6066L10.4747 10.1887C10.4747 10.0514 10.3657 9.94644 10.2412 9.94644C10.1089 9.94644 10.0078 10.0514 10.0078 10.1887L9.8988 14.6066L10.0078 16.7308C10.0078 16.8681 10.1167 16.973 10.2412 16.973C10.3735 16.973 10.4747 16.8681 10.4747 16.7308L10.5914 14.6066Z"
        fill="url(#paint0_linear_30_370)"
      />
      <path
        d="M9.75099 14.6066L9.61869 10.0191C9.61869 9.88992 9.51752 9.793 9.40079 9.793C9.28406 9.793 9.18289 9.88992 9.18289 10.0191L9.06616 14.5986L9.18289 16.7388C9.18289 16.8681 9.28406 16.965 9.40079 16.965C9.51752 16.965 9.61869 16.8681 9.61869 16.7388L9.75099 14.6066Z"
        fill="url(#paint1_linear_30_370)"
      />
      <path
        d="M7.93772 10.0514C7.92994 9.94645 7.85212 9.8576 7.75095 9.8576C7.64978 9.8576 7.57196 9.93837 7.56418 10.0514L7.43188 14.5985L7.56418 16.7711C7.56418 16.8761 7.64978 16.9569 7.75095 16.9569C7.85212 16.9569 7.92994 16.8761 7.93772 16.7631L8.09336 14.5905L7.93772 10.0514Z"
        fill="url(#paint2_linear_30_370)"
      />
      <path
        d="M8.77821 9.89798C8.77821 9.78491 8.68482 9.68799 8.57587 9.68799C8.46692 9.68799 8.37354 9.77683 8.37354 9.89798L8.24902 14.5985L8.37354 16.755C8.37354 16.868 8.46692 16.965 8.57587 16.965C8.68482 16.965 8.77042 16.8761 8.77821 16.755L8.91828 14.5985L8.77821 9.89798Z"
        fill="url(#paint3_linear_30_370)"
      />
      <path
        d="M4.53693 16.9085C4.59919 16.9085 4.64588 16.86 4.65366 16.7873L4.856 14.5986L4.65366 12.3371C4.64588 12.2725 4.59919 12.216 4.53693 12.216C4.47467 12.216 4.42798 12.2644 4.4202 12.3371L4.24121 14.5986L4.4202 16.7873C4.4202 16.86 4.47467 16.9085 4.53693 16.9085Z"
        fill="url(#paint4_linear_30_370)"
      />
      <path
        d="M11.4397 14.6066L11.3308 9.35686C11.3308 9.26802 11.2841 9.18725 11.214 9.13879C11.1751 9.11456 11.1284 9.09033 11.0739 9.09033C11.0273 9.09033 10.9806 9.10649 10.9339 9.13071C10.8638 9.17917 10.8171 9.25994 10.8171 9.34878V9.39724L10.7238 14.5985L10.8171 16.7065V16.7146C10.8171 16.7711 10.8405 16.8277 10.8794 16.8681C10.9261 16.9246 10.9961 16.965 11.0739 16.965C11.144 16.965 11.2062 16.9327 11.2529 16.8923C11.2996 16.8438 11.3308 16.7792 11.3308 16.7065L11.3385 16.4965L11.4397 14.6066Z"
        fill="url(#paint5_linear_30_370)"
      />
      <path
        d="M5.46299 12.4986C5.45521 12.4179 5.40073 12.3613 5.33069 12.3613C5.26065 12.3613 5.1984 12.4179 5.1984 12.4986L5.03497 14.5985L5.1984 16.8034C5.20618 16.8842 5.26065 16.9407 5.33069 16.9407C5.40073 16.9407 5.46299 16.8842 5.46299 16.8034L5.64976 14.5985L5.46299 12.4986Z"
        fill="url(#paint6_linear_30_370)"
      />
      <path
        d="M6.1323 11.0287C6.05448 11.0287 5.98444 11.0933 5.98444 11.1822L5.8288 14.5986L5.98444 16.8035C5.99222 16.8923 6.05448 16.9569 6.1323 16.9569C6.21012 16.9569 6.28016 16.8923 6.28016 16.8035L6.45915 14.5986L6.28016 11.1822C6.28016 11.1014 6.21012 11.0287 6.1323 11.0287Z"
        fill="url(#paint7_linear_30_370)"
      />
      <path
        d="M7.09733 16.8035L7.26075 14.6066L7.09733 10.4068C7.08955 10.3099 7.01951 10.2372 6.92612 10.2372C6.83274 10.2372 6.7627 10.3099 6.75492 10.4068L6.60706 14.6066L6.75492 16.8035C6.75492 16.9004 6.83274 16.9731 6.92612 16.9731C7.01951 16.9811 7.08955 16.9004 7.09733 16.8035Z"
        fill="url(#paint8_linear_30_370)"
      />
      <path
        d="M12.0545 8.63804C12.0156 8.61381 11.9689 8.59766 11.9144 8.59766C11.8521 8.59766 11.7899 8.62189 11.7432 8.66227C11.6809 8.71073 11.642 8.79149 11.642 8.88034V8.91264L11.5331 14.6147L11.5876 15.6646L11.642 16.6904C11.642 16.8438 11.7665 16.965 11.9144 16.965C12.0623 16.965 12.179 16.8357 12.1868 16.6823L12.3035 14.6066L12.1868 8.88034C12.179 8.77534 12.1323 8.6865 12.0545 8.63804Z"
        fill="url(#paint9_linear_30_370)"
      />
      <path
        d="M2.22568 15.81C2.26459 15.81 2.29572 15.7777 2.3035 15.7293L2.47471 14.5985L2.3035 13.4517C2.29572 13.4032 2.26459 13.3709 2.22568 13.3709C2.18677 13.3709 2.14786 13.4032 2.14786 13.4517L2 14.5985L2.14786 15.7293C2.14786 15.7777 2.18677 15.81 2.22568 15.81Z"
        fill="url(#paint10_linear_30_370)"
      />
      <path
        d="M2.96497 16.4965C3.00388 16.4965 3.04279 16.4642 3.05057 16.4158L3.27625 14.5985L3.05057 12.7409C3.04279 12.6925 3.01166 12.6602 2.96497 12.6602C2.92606 12.6602 2.88715 12.6925 2.87937 12.7409L2.68481 14.5985L2.87937 16.4158C2.88715 16.4642 2.91828 16.4965 2.96497 16.4965Z"
        fill="url(#paint11_linear_30_370)"
      />
      <path
        d="M3.7432 16.8277C3.79767 16.8277 3.83658 16.7873 3.84437 16.7227L4.05448 14.5986L3.84437 12.3937C3.83658 12.3371 3.79767 12.2887 3.7432 12.2887C3.68872 12.2887 3.64981 12.329 3.64203 12.3937L3.45526 14.5986L3.64203 16.7227C3.64981 16.7792 3.68872 16.8277 3.7432 16.8277Z"
        fill="url(#paint12_linear_30_370)"
      />
      <path
        d="M19.4707 11.8929C19.1361 11.8929 18.8171 11.9656 18.5213 12.0867C18.3268 9.80107 16.4746 8 14.2178 8C13.6653 8 13.1283 8.11307 12.6536 8.30691C12.4669 8.3796 12.4202 8.46036 12.4202 8.60574V16.6742C12.4202 16.8277 12.5369 16.9488 12.6848 16.965H19.4785C20.8326 16.965 21.9299 15.8423 21.9299 14.437C21.9221 13.0317 20.8248 11.8929 19.4707 11.8929Z"
        fill="url(#paint13_linear_30_370)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_370"
          x1="10.2432"
          y1="7.99999"
          x2="10.2432"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_30_370"
          x1="9.41"
          y1="8"
          x2="9.41"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_30_370"
          x1="7.76283"
          y1="7.99999"
          x2="7.76283"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_30_370"
          x1="8.58323"
          y1="7.99999"
          x2="8.58323"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_30_370"
          x1="4.54568"
          y1="8"
          x2="4.54568"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_30_370"
          x1="11.0828"
          y1="8"
          x2="11.0828"
          y2="16.9791"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_30_370"
          x1="5.34027"
          y1="7.99999"
          x2="5.34027"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_30_370"
          x1="6.14143"
          y1="8"
          x2="6.14143"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_30_370"
          x1="6.93661"
          y1="8"
          x2="6.93661"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_30_370"
          x1="11.9186"
          y1="7.99999"
          x2="11.9186"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_30_370"
          x1="2.23889"
          y1="8"
          x2="2.23889"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_30_370"
          x1="2.97556"
          y1="7.99998"
          x2="2.97556"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_30_370"
          x1="3.7574"
          y1="8.00001"
          x2="3.7574"
          y2="16.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2393" stopColor="#F57E20" />
          <stop offset="0.6262" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_30_370"
          x1="17.1684"
          y1="8"
          x2="17.1684"
          y2="16.9665"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6871F" />
          <stop offset="0.2402" stopColor="#F57E20" />
          <stop offset="0.6306" stopColor="#F36621" />
          <stop offset="1" stopColor="#F04923" />
        </linearGradient>
      </defs>
    </svg>
  );
};
