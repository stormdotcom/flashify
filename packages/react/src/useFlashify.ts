import { flashify, type FlashifyNotification, type FlashifyOptions } from "@flashify/core";
import { useCallback } from "react";

export function useFlashify() {
  const show = useCallback(
    (message: string, options?: Omit<FlashifyOptions, "message">): FlashifyNotification =>
      flashify(message, options),
    [],
  );

  return {
    show,
    success: flashify.success,
    error: flashify.error,
    warning: flashify.warning,
    info: flashify.info,
    custom: flashify.custom,
    dismiss: flashify.dismiss,
    clear: flashify.clear,
  };
}
