import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { flashify } from "../flashify";

/**
 * Tests for the CURRENT flashify core API.
 *
 * These tests exercise the public API exposed from src/flashify.ts as it
 * exists today: main callable, typed helpers, dismiss/clear, subscribe and
 * getState via flashify.getState().
 */

function notifications() {
  return flashify.getState().notifications;
}

beforeEach(() => {
  vi.useFakeTimers();
  flashify.clear();
});

afterEach(() => {
  flashify.clear();
  vi.useRealTimers();
});

describe("flashify main callable", () => {
  it("creates a default notification with the given message", () => {
    const n = flashify("Hello world");

    expect(n.message).toBe("Hello world");
    expect(n.type).toBe("default");

    const all = notifications();
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject({ message: "Hello world", type: "default" });
  });

  it("merges options into the notification", () => {
    const n = flashify("Saved", { type: "success", position: "bottom-left" });

    expect(n.message).toBe("Saved");
    expect(n.type).toBe("success");
    expect(n.position).toBe("bottom-left");

    const all = notifications();
    expect(all[0]).toMatchObject({
      message: "Saved",
      type: "success",
      position: "bottom-left",
    });
  });
});

describe("flashify.show", () => {
  it("creates a notification from full options", () => {
    const n = flashify.show({
      message: "Direct",
      type: "info",
      position: "top-left",
    });

    expect(n).toMatchObject({
      message: "Direct",
      type: "info",
      position: "top-left",
    });

    expect(notifications()).toHaveLength(1);
  });
});

describe("typed helpers", () => {
  it("success() creates a success notification", () => {
    const n = flashify.success("OK");

    expect(n.type).toBe("success");
    expect(n.message).toBe("OK");
  });

  it("error() creates an error notification", () => {
    const n = flashify.error("Boom");

    expect(n.type).toBe("error");
    expect(n.message).toBe("Boom");
  });

  it("warning() creates a warning notification", () => {
    const n = flashify.warning("Careful");

    expect(n.type).toBe("warning");
    expect(n.message).toBe("Careful");
  });

  it("info() creates an info notification", () => {
    const n = flashify.info("Heads up");

    expect(n.type).toBe("info");
    expect(n.message).toBe("Heads up");
  });

  it("custom() creates a custom notification", () => {
    const n = flashify.custom("Custom message");

    expect(n.type).toBe("custom");
    expect(n.message).toBe("Custom message");
  });
});

describe("dismiss & clear", () => {
  it("dismiss() removes the matching notification", () => {
    const one = flashify("one");
    const two = flashify("two");

    expect(notifications()).toHaveLength(2);

    flashify.dismiss(one.id);

    const all = notifications();
    expect(all).toHaveLength(1);
    expect(all[0].id).toBe(two.id);
  });

  it("clear() removes all notifications", () => {
    flashify("a");
    flashify("b");

    expect(notifications()).toHaveLength(2);

    flashify.clear();
    expect(notifications()).toHaveLength(0);
  });
});

describe("subscribe", () => {
  it("pushes initial state immediately", () => {
    const spy = vi.fn();

    const unsubscribe = flashify.subscribe(spy);

    expect(spy).toHaveBeenCalledTimes(1);
    const initial = spy.mock.calls[0][0];
    expect(initial.notifications).toEqual([]);

    unsubscribe();
  });

  it("notifies subscribers when notifications change", () => {
    const spy = vi.fn();
    const unsubscribe = flashify.subscribe(spy);
    spy.mockClear();

    const n = flashify("hello");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].notifications).toHaveLength(1);

    flashify.dismiss(n.id);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0].notifications).toHaveLength(0);

    unsubscribe();
  });
});

// ---------------------------------------------------------------------------
// Future spec (advanced API)
// ---------------------------------------------------------------------------

/**
 * When you add features like flashify.promise, configure(), or more advanced
 * stacking behavior, you can extend this file with additional test blocks,
 * for example:
 *
 * describe("flashify.promise", () => {
 *   it("shows a loading toast, then success on resolve", async () => {
 *     // const p = flashify.promise(Promise.resolve("ok"), { ... });
 *     // ...
 *   });
 * });
 */
