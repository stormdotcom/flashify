// src/icons.tsx
import { type FlashifyType } from "@ajmal_n/flashify-core";
import React from "react";
import CustomIcon from "./icons/custom.svg";
import DefaultIcon from "./icons/default.svg";
import ErrorIcon from "./icons/error.svg";
import InfoIcon from "./icons/info.svg";
import SuccessIcon from "./icons/success.svg";
import WarningIcon from "./icons/warning.svg";

export const defaultIcons: Record<FlashifyType, React.ReactNode> = {
  success: <SuccessIcon width={20} height={20} />,
  error: <ErrorIcon width={20} height={20} />,
  warning: <WarningIcon width={20} height={20} />,
  info: <InfoIcon width={20} height={20} />,
  default: <DefaultIcon width={20} height={20} />,
  custom: <CustomIcon width={20} height={20} />,
};