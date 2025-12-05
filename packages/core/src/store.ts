import {
  type FlashifyListener,
  type FlashifyNotification,
  type FlashifyOptions,
  type FlashifyState,
} from "./types";
import { createId } from "./utils";

const DEFAULT_DURATION = 4000;
const DEFAULT_POSITION = "top-right" as const;

const state: FlashifyState = {
  notifications: [],
};

const listeners = new Set<FlashifyListener>();
const timers = new Map<string, number>();

function notifyListeners() {
  for (const listener of listeners) {
    listener({ ...state, notifications: [...state.notifications] });
  }
}

export function subscribe(listener: FlashifyListener) {
  listeners.add(listener);
  // initial push
  listener({ ...state, notifications: [...state.notifications] });

  return () => {
    listeners.delete(listener);
  };
}

export function getState(): FlashifyState {
  return { ...state, notifications: [...state.notifications] };
}

export function addNotification(options: FlashifyOptions): FlashifyNotification {
  const id = options.id ?? createId();
  const notification: FlashifyNotification = {
    id,
    type: options.type ?? "default",
    message: options.message,
    description: options.description ?? "",
    durationMs:
      typeof options.durationMs === "number"
        ? options.durationMs
        : DEFAULT_DURATION,
    position: options.position ?? DEFAULT_POSITION,
    icon: options.icon ?? null,
    customClassName: options.customClassName ?? "",
    meta: options.meta ?? {},
    createdAt: Date.now(),
  };

  state.notifications.push(notification);
  notifyListeners();

  if (notification.durationMs && notification.durationMs > 0) {
    const timerId = globalThis.setTimeout(() => {
      removeNotification(notification.id);
    }, notification.durationMs) as unknown as number;

    timers.set(notification.id, timerId);
  }

  return notification;
}

export function removeNotification(id: string) {
  const index = state.notifications.findIndex(n => n.id === id);
  if (index === -1) return;

  state.notifications.splice(index, 1);
  const timer = timers.get(id);
  if (timer != null) {
    globalThis.clearTimeout(timer);
    timers.delete(id);
  }
  notifyListeners();
}

export function clearAll() {
  state.notifications.splice(0, state.notifications.length);
  for (const timer of timers.values()) {
    globalThis.clearTimeout(timer);
  }
  timers.clear();
  notifyListeners();
}
