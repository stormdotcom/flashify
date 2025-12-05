export type FlashifyType =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "default"
  | "custom";

export type FlashifyPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

export interface FlashifyOptions {
  id?: string;
  type?: FlashifyType;
  message: string;
  description?: string;
  durationMs?: number; // 0 or undefined => manual close
  position?: FlashifyPosition;
  icon?: unknown; // framework wrapper decides how to use it
  customClassName?: string;
  meta?: Record<string, unknown>;
}

export interface FlashifyNotification
  extends Required<Omit<FlashifyOptions, "id">> {
  id: string;
  createdAt: number;
}

export interface FlashifyState {
  notifications: FlashifyNotification[];
}

export type FlashifyListener = (state: FlashifyState) => void;
