import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
    addNotification,
    clearAll,
    getState,
    removeNotification,
    subscribe,
} from "../store";
import type { FlashifyNotification, FlashifyOptions } from "../types";

/**
 * Tests for the CURRENT core store implementation.
 *
 * These are written against the code as it exists today and should pass
 * once you have Vitest set up.
 *
 * Future/advanced behaviors (stacking, custom config, etc.) can be added
 * later as additional tests.
 */

function notifications() {
  return getState().notifications;
}

beforeEach(() => {
  // Use fake timers so we can precisely control auto-dismiss behavior.
  vi.useFakeTimers();
  clearAll();
  vi.clearAllTimers();
});

afterEach(() => {
  clearAll();
  vi.useRealTimers();
});

describe("store.addNotification", () => {
  it("creates a notification with sensible defaults", () => {
    const n = addNotification({ message: "Hello" });

    expect(n.id).toBeTypeOf("string");
    expect(n.id.length).toBeGreaterThan(0);

    expect(n.type).toBe("default");
    expect(n.message).toBe("Hello");
    expect(n.description).toBe("");
    expect(typeof n.durationMs).toBe("number");
    expect(n.durationMs).toBeGreaterThan(0);
    expect(n.position).toBe("top-right");
    expect(n.icon).toBeNull();
    expect(n.customClassName).toBe("");
    expect(n.meta).toEqual({});
    expect(typeof n.createdAt).toBe("number");

    const all = notifications();
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject(n);
  });

  it("respects all provided options", () => {
    const options: FlashifyOptions = {
      id: "custom-id",
      type: "success",
      message: "Saved",
      description: "Everything is fine",
      durationMs: 1234,
      position: "bottom-left",
      icon: { name: "check" },
      customClassName: "bg-green-500 text-white",
      meta: { foo: "bar" },
    };

    const n = addNotification(options);

    expect(n).toMatchObject({
      id: "custom-id",
      type: "success",
      message: "Saved",
      description: "Everything is fine",
      durationMs: 1234,
      position: "bottom-left",
      icon: { name: "check" },
      customClassName: "bg-green-500 text-white",
      meta: { foo: "bar" },
    } satisfies Partial<FlashifyNotification>);

    const all = notifications();
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject({ id: "custom-id" });
  });
});

describe("store timers (auto-dismiss)", () => {
  it("auto-removes a notification after its duration", () => {
    const n = addNotification({ message: "Temp", durationMs: 1000 });

    expect(notifications()).toHaveLength(1);

    // Just before expiry, still present
    vi.advanceTimersByTime(999);
    expect(notifications()).toHaveLength(1);

    // At or after expiry, removed
    vi.advanceTimersByTime(1);
    expect(notifications()).toHaveLength(0);
  });

  it("does not set a timer when durationMs is 0 (manual close)", () => {
    addNotification({ message: "Sticky", durationMs: 0 });

    expect(notifications()).toHaveLength(1);

    vi.advanceTimersByTime(10_000);
    expect(notifications()).toHaveLength(1);
  });
});

describe("store.removeNotification", () => {
  it("removes a notification and clears its timer", () => {
    const n = addNotification({ message: "Bye", durationMs: 1000 });
    expect(notifications()).toHaveLength(1);

    removeNotification(n.id);
    expect(notifications()).toHaveLength(0);

    // Advancing timers should not re-add or affect state
    vi.advanceTimersByTime(2000);
    expect(notifications()).toHaveLength(0);
  });

  it("is a no-op when id is not found", () => {
    addNotification({ message: "Hello" });
    expect(notifications()).toHaveLength(1);

    removeNotification("non-existent");
    expect(notifications()).toHaveLength(1);
  });
});

describe("store.clearAll", () => {
  it("removes all notifications and cancels timers", () => {
    addNotification({ message: "One", durationMs: 1000 });
    addNotification({ message: "Two", durationMs: 2000 });

    expect(notifications()).toHaveLength(2);

    clearAll();
    expect(notifications()).toHaveLength(0);

    vi.advanceTimersByTime(5000);
    expect(notifications()).toHaveLength(0);
  });
});

describe("store.subscribe", () => {
  it("immediately pushes the current state to new subscribers", () => {
    const spy = vi.fn();

    const unsubscribe = subscribe(spy);

    expect(spy).toHaveBeenCalledTimes(1);
    const firstState = spy.mock.calls[0][0];
    expect(firstState.notifications).toEqual([]);

    unsubscribe();
  });

  it("notifies subscribers when notifications change", () => {
    const spy = vi.fn();
    const unsubscribe = subscribe(spy);
    spy.mockClear();

    const n = addNotification({ message: "Update" });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].notifications).toHaveLength(1);

    removeNotification(n.id);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0].notifications).toHaveLength(0);

    unsubscribe();
  });
});

// ---------------------------------------------------------------------------
// Future spec (advanced features)
// ---------------------------------------------------------------------------

/**
 * When you add stacking / configuration support to the store, you can
 * extend this file with tests like:
 *
 * describe("store stacking", () => {
 *   it("limits the number of notifications per position", () => {
 *     // configure({ maxStack: 2, stackingStrategy: "stack" });
 *     // ...
 *   });
 * });
 */
