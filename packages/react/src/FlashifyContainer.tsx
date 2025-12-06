import {
  flashify,
  type FlashifyNotification,
  type FlashifyPosition,
  type FlashifyState,
} from "@ajmal_n/flashify-core";
import React, { useSyncExternalStore } from "react";
import { defaultIcons } from "./icons";

type Grouped = Record<FlashifyPosition, FlashifyNotification[]>;

function useFlashifyState(): FlashifyState {
  return useSyncExternalStore(
    flashify.subscribe,
    flashify.getState,
    flashify.getState,
  );
}

const containerStyle: React.CSSProperties = {
  position: "fixed",
  zIndex: 9999,
  pointerEvents: "none",
};

function getPositionStyle(position: FlashifyPosition): React.CSSProperties {
  const base: React.CSSProperties = { ...containerStyle };

  if (position.startsWith("top")) base.top = 16;
  else base.bottom = 16;

  if (position.endsWith("right")) base.right = 16;
  else base.left = 16;

  return base;
}

export function FlashifyContainer() {
  const { notifications } = useFlashifyState();

  const groups: Grouped = {
    "top-right": [],
    "top-left": [],
    "bottom-right": [],
    "bottom-left": [],
  };

  for (const n of notifications) {
    groups[n.position].push(n);
  }

  return (
    <>
      {flashify.positions.map(position => {
        const list = groups[position];
        if (!list.length) return null;

        return (
          <div key={position} style={getPositionStyle(position)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                pointerEvents: "auto",
              }}
            >
              {list.map(n => (
                <FlashifyItem key={n.id} notification={n} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

interface FlashifyItemProps {
  notification: FlashifyNotification;
}

const typeTitle: Partial<Record<string, string>> = {
  success: "Success",
  error: "Error",
  warning: "Warning",
  info: "Info",
};

function toNode(value: unknown): React.ReactNode | null {
  if (value === null || value === undefined) return null;
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value;
  }
  if (React.isValidElement(value)) return value;
  return null;
}

function FlashifyItem({ notification }: FlashifyItemProps) {
  const { id, type, message, description, customClassName } = notification;
  const iconNode =
    toNode(notification.icon) ?? defaultIcons[type] ?? defaultIcons.default;
  const messageNode = toNode(message) ?? String(message);
  const descriptionNode = toNode(description);

  const className = [
    "flashify",
    `flashify-${type}`,
    "flashify-enter",
    customClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="flashify-icon">
        <span role="img" aria-hidden="true">
          {iconNode}
        </span>
      </div>

      <div className="flashify-body">
        {typeTitle[type] && (
          <div className="flashify-title">{typeTitle[type]}</div>
        )}
        <div className="flashify-message">{messageNode}</div>
        {descriptionNode && (
          <div
            className="flashify-description"
            style={{ marginTop: 2, opacity: 0.85 }}
          >
            {descriptionNode}
          </div>
        )}
      </div>

      <button
        className="flashify-close"
        onClick={() => flashify.dismiss(id)}
        aria-label="Close notification"
      >
        x
      </button>
    </div>
  );
}
