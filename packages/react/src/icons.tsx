import { type FlashifyType } from "@ajmal_n/flashify-core";
import React from "react";

import customSvg from "./icons/custom.svg";
import defaultSvg from "./icons/default.svg";
import errorSvg from "./icons/error.svg";
import infoSvg from "./icons/info.svg";
import successSvg from "./icons/success.svg";
import waringSvg from "./icons/warning.svg";
const successIcon = (
  <img src={successSvg} alt="" aria-hidden="true" width={20} height={20} />
);

const infoIcon = (
  <img src={infoSvg} alt="" aria-hidden="true" width={20} height={20} />
);

const warningIcon = (
  <img src={waringSvg} alt="" aria-hidden="true" width={20} height={20} />
);

const errorIcon = (
   <img src={errorSvg} alt="" aria-hidden="true" width={20} height={20} />
);

const customIcon = (
  <img src={customSvg} alt="" aria-hidden="true" width={20} height={20} />
);

const defaultIcon = (
  <img src={defaultSvg} alt="" aria-hidden="true" width={20} height={20} />
);

export const defaultIcons: Record<FlashifyType, React.ReactNode> = {
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
  info: infoIcon,
  default: defaultIcon,
  custom: customIcon,
};
