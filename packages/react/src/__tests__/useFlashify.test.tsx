import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { flashify } from "@ajmal_n/flashify-core";
import { useFlashify } from "../useFlashify";

/**
 * Tests for the CURRENT useFlashify hook implementation.
 *
 * These tests assert that the hook simply forwards to the underlying
 * core flashify API and that notifications appear via the shared store
 * when used inside a component tree that also renders a container.
 */

function notifications() {
  return flashify.getState().notifications;
}

function HookTestComponent() {
  const { show, success, error, warning, info, custom, dismiss, clear } =
    useFlashify();

  return (
    <div>
      <button onClick={() => show("plain show")}>show</button>
      <button onClick={() => success("ok")}>success</button>
      <button onClick={() => error("boom")}>error</button>
      <button onClick={() => warning("careful")}>warning</button>
      <button onClick={() => info("heads up")}>info</button>
      <button onClick={() => custom("custom msg")}>custom</button>
      <button onClick={() => notifications()[0] && dismiss(notifications()[0].id)}>
        dismiss-first
      </button>
      <button onClick={() => clear()}>clear-all</button>
    </div>
  );
}

describe("useFlashify hook (current behavior)", () => {
  it("show() pushes a default notification to the core store", () => {
    flashify.clear();

    render(<HookTestComponent />);

    fireEvent.click(screen.getByText("show"));

    const all = notifications();
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject({ message: "plain show", type: "default" });
  });

  it("typed helpers create notifications with correct types", () => {
    flashify.clear();

    render(<HookTestComponent />);

    fireEvent.click(screen.getByText("success"));
    fireEvent.click(screen.getByText("error"));
    fireEvent.click(screen.getByText("warning"));
    fireEvent.click(screen.getByText("info"));
    fireEvent.click(screen.getByText("custom"));

    const types = notifications().map(n => n.type);

    expect(types).toEqual([
      "success",
      "error",
      "warning",
      "info",
      "custom",
    ]);
  });

  it("dismiss() and clear() delegate to core API", () => {
    flashify.clear();

    render(<HookTestComponent />);

    // create two notifications
    fireEvent.click(screen.getByText("success"));
    fireEvent.click(screen.getByText("error"));

    expect(notifications()).toHaveLength(2);

    // dismiss the first
    fireEvent.click(screen.getByText("dismiss-first"));
    expect(notifications()).toHaveLength(1);

    // clear remaining
    fireEvent.click(screen.getByText("clear-all"));
    expect(notifications()).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Future spec (promise helper)
// ---------------------------------------------------------------------------

/**
 * Once you wire flashify.promise through the React hook (e.g. by returning
 * `promise: flashify.promise` from useFlashify), you can extend this file
 * with tests such as:
 *
 * describe.skip("useFlashify promise helper", () => {
 *   it("shows a loading toast, then success on resolve", async () => {
 *     // const { promise } = useFlashify();
 *     // await promise(Promise.resolve("ok"), { ... });
 *     // assert loading then success notifications.
 *   });
 * });
 */
