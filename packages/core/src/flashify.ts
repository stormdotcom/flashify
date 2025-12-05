import {
  addNotification,
  clearAll,
  subscribe as coreSubscribe,
  getState,
  removeNotification,
} from "./store";
import {
  type FlashifyListener,
  type FlashifyNotification,
  type FlashifyOptions,
  type FlashifyPosition,
  type FlashifyType,
} from "./types";

export interface FlashifyApi {
  (message: string, options?: Omit<FlashifyOptions, "message">): FlashifyNotification;

  show(options: FlashifyOptions): FlashifyNotification;

  success(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification;
  error(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification;
  warning(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification;
  info(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification;
  custom(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification;

  dismiss(id: string): void;
  clear(): void;

  subscribe(listener: FlashifyListener): () => void;
  getState(): ReturnType<typeof getState>;

  positions: FlashifyPosition[];
  types: FlashifyType[];
}

function baseShow(options: FlashifyOptions) {
  return addNotification(options);
}

function createTyped(
  type: FlashifyType,
): (message: string, options?: Partial<FlashifyOptions>) => FlashifyNotification {
  return (message, options) =>
    baseShow({
      ...options,
      message,
      type,
    });
}

function flashifyFn(
  message: string,
  options?: Omit<FlashifyOptions, "message">,
): FlashifyNotification {
  return baseShow({
    ...(options ?? {}),
    message,
  });
}

export const flashify: FlashifyApi = Object.assign(flashifyFn, {
  show: baseShow,
  success: createTyped("success"),
  error: createTyped("error"),
  warning: createTyped("warning"),
  info: createTyped("info"),
  custom: createTyped("custom"),
  dismiss: removeNotification,
  clear: clearAll,
  subscribe: coreSubscribe,
  getState,
  positions: [
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
  ] as FlashifyPosition[],
  types: [
    "default",
    "success",
    "error",
    "warning",
    "info",
    "custom",
  ] as FlashifyType[],
});
