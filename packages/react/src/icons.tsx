import React from "react";
import { type FlashifyType } from "@ajmal_n/flashify-core";

const successIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 117 117"
    role="img"
    aria-hidden="true"
  >
    <path
      d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
      fill="#17AB13"
    />
    <path
      d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
      fill="#4A4A4A"
    />
  </svg>
);

const infoIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    role="img"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
      fill="#1C274C"
    />
  </svg>
);

const warningIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
  >
    <path
      d="M12 3L2.5 20.5H21.5L12 3ZM12 14V10"
      fill="none"
      stroke="#92400e"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17.25C11.4477 17.25 11 17.6977 11 18.25C11 18.8023 11.4477 19.25 12 19.25C12.5523 19.25 13 18.8023 13 18.25C13 17.6977 12.5523 17.25 12 17.25Z"
      fill="#92400e"
    />
  </svg>
);

const errorIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="#991b1b"
      strokeWidth="1.7"
    />
    <path
      d="M9 9L15 15M15 9L9 15"
      stroke="#991b1b"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const customIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="#1d4ed8"
      strokeWidth="1.5"
    />
    <circle
      cx="12"
      cy="12"
      r="5.5"
      fill="none"
      stroke="#1d4ed8"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="2" fill="#1d4ed8" />
  </svg>
);

const defaultIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    role="img"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="#111827"
      strokeWidth="1.7"
    />
    <path
      d="M10.5 8.5C10.5 7.67157 11.1716 7 12 7C12.8284 7 13.5 7.67157 13.5 8.5C13.5 9.32843 12.8284 10 12 10C11.1716 10 10.5 9.32843 10.5 8.5Z"
      fill="#111827"
    />
    <path
      d="M11.25 11.75H12.75V17H11.25V11.75Z"
      fill="#111827"
    />
  </svg>
);

export const defaultIcons: Record<FlashifyType, React.ReactNode> = {
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
  info: infoIcon,
  default: defaultIcon,
  custom: customIcon,
};
