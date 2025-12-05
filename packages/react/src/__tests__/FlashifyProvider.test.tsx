import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { flashify } from "@flashify/core";
import { FlashifyProvider } from "../FlashifyProvider";

/**
 * Tests for the CURRENT React FlashifyProvider implementation.
 *
 * These tests only assert the behavior that exists today:
 * - children rendering
 * - container portal wiring to the document body
 */

describe("FlashifyProvider", () => {
  it("renders its children", () => {
    render(
      <FlashifyProvider>
        <div>inner content</div>
      </FlashifyProvider>,
    );

    expect(screen.getByText("inner content")).toBeTruthy();
  });

  it("renders notifications from the core store via portal", async () => {
    render(
      <FlashifyProvider>
        <div />
      </FlashifyProvider>,
    );

    // Trigger a notification through the shared core singleton
    flashify("Hello from core");

    // It should appear in the DOM (inside the portal), with message text visible
    const toast = await screen.findByText("Hello from core");
    expect(toast).toBeTruthy();
  });
});
