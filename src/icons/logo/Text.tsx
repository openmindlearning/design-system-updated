import React, { ReactElement } from "react";
type Props = {
  width?: number;
  height?: number;
  fill?: string;
};
export const LogoTextIcon = ({
  width = 83,
  height = 24,
  fill = DEFAULT_ICON.FILL,
}: Props): ReactElement => {
  return (
    <svg {...{ width, height }} viewBox="0 0 83 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63.0559 5.95305C64.3236 5.95305 65.3169 4.98698 65.3169 3.75103C65.3169 2.51509 64.3213 1.51953 63.0559 1.51953C61.82 1.51953 60.7949 2.51509 60.7949 3.75103C60.7949 4.98925 61.82 5.95305 63.0559 5.95305Z"
        {...{ fill }}
      />
      <path
        d="M10.2419 9.34102C6.83113 7.73089 4.84001 6.89408 4.84001 4.73514C4.84001 2.93225 6.65652 1.99792 8.6567 1.99792C10.8451 1.99792 12.9201 3.98677 13.9429 6.16384L16.7255 3.07739C16.7255 3.07739 13.6005 0 8.4594 0C5.30264 0 1.66965 2.15894 1.66965 5.89398C1.66965 9.08249 2.74685 10.9829 8.04667 13.3346C11.7318 14.9765 13.5914 16.0083 13.5914 18.2942C13.5914 20.5167 12.038 21.866 9.35745 21.866C6.12358 21.866 5.17791 19.0925 4.2073 16.7862L0.524414 20.7366C2.22979 22.8706 6.28233 23.9955 9.2055 23.9955C14.7185 23.9955 17.2153 20.2581 17.1858 16.9086C17.1564 12.9491 14.5053 11.3389 10.2419 9.34102Z"
        {...{ fill }}
      />
      <path
        d="M74.5558 7.57216C70.5623 7.61298 67.02 10.9013 67.0699 15.8292C67.1197 20.8206 70.7278 24.0386 74.7214 23.9977C78.8125 23.9569 82.3207 20.6686 82.2708 15.675C82.2232 10.7493 78.6469 7.53134 74.5558 7.57216ZM74.6397 22.3241C72.0318 22.3513 71.17 19.9112 71.1269 15.8201C71.0861 11.6655 71.9297 9.273 74.5399 9.24579C77.0186 9.22084 78.0754 11.5952 78.1163 15.7498C78.1593 19.8409 77.1207 22.2992 74.6397 22.3241Z"
        {...{ fill }}
      />
      <path
        d="M41.1446 18.6434L41.1469 7.89406L36.5773 9.16402L37.0467 10.3637C37.3982 11.264 37.5819 12.2187 37.6046 13.1825L37.6 13.1848V15.0104V19.9587V19.9972C36.7882 20.8409 35.9241 21.3602 34.8311 21.3602C33.1552 21.2627 32.1256 20.1696 32.1256 16.9176V8.05508H22.9184V4.125L19.5076 5.44712V8.06415H17.1582V10.0734H19.5076V10.0825V19.4258C19.5076 22.0995 20.6415 23.9999 22.8322 23.9999C24.9072 23.9999 26.2702 22.0564 26.4652 21.3647C24.1679 21.968 22.9184 20.6504 22.9184 18.6207L22.9275 10.0825H28.5856V15.0149V18.657V18.6593V18.6865C28.5856 21.6822 29.8419 23.9681 33.255 23.9681C35.0919 23.9681 36.6657 22.9 37.8291 21.6391L37.8427 21.6369L38.5276 23.4874H42.5347L41.8045 21.8092C41.3668 20.8091 41.1423 19.7319 41.1446 18.6434Z"
        {...{ fill }}
      />
      <path
        d="M57.6048 18.7728L57.6071 7.89652L57.5912 7.90333L57.5935 0.358398L53.0239 1.62836L53.4933 2.82802C53.8267 3.68297 54.0081 4.58556 54.0444 5.50174V8.15279C53.0783 7.76726 51.9172 7.57223 50.6291 7.57223C46.538 7.57223 43.1885 10.8583 43.1885 15.8814C43.1885 20.6165 46.055 23.9978 50.2753 23.9978C52.1757 23.9978 53.4956 22.9025 54.2689 22.0657C54.3188 21.9999 54.3755 21.9273 54.4345 21.8548L54.9447 23.4853H59.122L58.4938 22.3174C57.911 21.2266 57.6048 20.0088 57.6048 18.7728ZM54.0444 19.9861C54.0444 20.5598 53.6725 21.0701 53.1237 21.2402C52.8175 21.3332 52.5091 21.3876 52.2075 21.3876C48.9532 21.3876 46.9575 18.1991 46.9575 14.7203C46.9575 11.144 47.9894 9.24359 50.4998 9.24359C52.3027 9.24359 54.0421 10.5634 54.0421 11.9808V19.9861H54.0444Z"
        {...{ fill }}
      />
      <path
        d="M64.8863 19.4894L64.8749 15.3349L64.8772 7.81714L60.3076 9.0871L60.7771 10.2868C61.1535 11.2483 61.344 12.2733 61.344 13.3075L61.3281 19.4327C61.3032 20.0632 61.2374 20.6891 61.1286 21.3105L60.7476 23.483H65.4646L65.0836 21.3105C64.9793 20.7095 64.9135 20.1017 64.8863 19.4894Z"
        {...{ fill }}
      />
    </svg>
  );
};
