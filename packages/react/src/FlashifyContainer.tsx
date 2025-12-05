import {
  flashify,
  type FlashifyNotification,
  type FlashifyPosition,
  type FlashifyState,
} from "@flashify/core";
import React, { useSyncExternalStore } from "react";

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

function FlashifyItem({ notification }: FlashifyItemProps) {
  const { id, type, message, description, customClassName } = notification;

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
      {/* Simple icon placeholder: wrappers can override later */}
      <div className="flashify-icon">
        <span role="img" aria-hidden="true">
          {type === "success" && "✅"}
          {type === "error" && "⛔"}
          {type === "warning" && "⚠️"}
          {type === "info" && "ℹ️"}
          {type === "default" && "📌"}
          {type === "custom" && "✨"}
        </span>
      </div>

      <div className="flashify-body">
        {typeTitle[type] && (
          <div className="flashify-title">{typeTitle[type]}</div>
        )}
        <div className="flashify-message">{message}</div>
        {description && (
          <div
            className="flashify-description"
            style={{ marginTop: 2, opacity: 0.85 }}
          >
            {description}
          </div>
        )}
      </div>

      <button
        className="flashify-close"
        onClick={() => flashify.dismiss(id)}
        aria-label="Close notification"
      >
        
        ×
      </button>
    </div>
  );
}
