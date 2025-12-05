import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { flashify } from "@flashify/core";
import { FlashifyContainer } from "../FlashifyContainer";

/**
 * Tests for the CURRENT FlashifyContainer implementation.
 *
 * These tests focus on the behavior that exists in the repo right now:
 * - rendering nothing when there are no notifications
 * - rendering notifications coming from the core flashify store
 * - basic grouping by position (indirectly via multiple toasts)
 * - default titles for typed notifications
 */

function resetState() {
  flashify.clear();
}

describe("FlashifyContainer (current behavior)", () => {
  it("renders nothing when there are no notifications", () => {
    resetState();

    render(<FlashifyContainer />);

    // No toast elements should be present
    expect(document.querySelector(".flashify")).toBeNull();
  });

  it("renders notifications created via the core flashify API", async () => {
    resetState();

    flashify("First message");
    flashify("Second message", { position: "bottom-left" });

    render(<FlashifyContainer />);

    expect(await screen.findByText("First message")).toBeTruthy();
    expect(await screen.findByText("Second message")).toBeTruthy();
  });

  it("shows a sensible default title for typed notifications", async () => {
    resetState();

    flashify.success("Saved successfully");

    render(<FlashifyContainer />);

    // The current implementation uses "Success" as the title for success toasts
    expect(await screen.findByText("Success")).toBeTruthy();
    expect(await screen.findByText("Saved successfully")).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// Future spec (advanced React behaviors)
// ---------------------------------------------------------------------------

/**
 * When you implement advanced behaviors like exit animations, pause-on-hover,
 * and progress bars in the React layer, you can extend this file with specs
 * such as:
 *
 * describe.skip("FlashifyContainer advanced behavior", () => {
 *   it("applies an exit animation class before actually removing", async () => {
 *     // render(<FlashifyContainer />);
 *     // const toast = ...; click close, assert class "flashify-exit" appears
 *     // wait 160ms, then assert the DOM element has been removed.
 *   });
 *
 *   it("pauses auto-dismiss timers while the user hovers the toast", () => {
 *     // Use fake timers, hover events, and assert the toast lives longer
 *     // than its original duration when hovered.
 *   });
 *
 *   it("shows a progress bar that reflects remaining time", () => {
 *     // Assert the width of ".flashify-progress-bar" shrinks over time.
 *   });
 *
 *   it("supports action buttons that invoke callbacks and close the toast", () => {
 *     // Create a notification with an "action" button, click it and assert
 *     // the callback is called and the toast eventually disappears.
 *   });
 * });
 */
