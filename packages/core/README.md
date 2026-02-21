# @ajmal_n/flashify-core

Framework-agnostic notification engine for Flashify. Provides the store, helpers, and CSS for showing toast notifications in any JavaScript app.

## Install

```bash
npm install @ajmal_n/flashify-core
```

<button onclick="navigator.clipboard.writeText('npm install @ajmal_n/flashify-core')">Copy install command</button>

Using pnpm:

```bash
pnpm add @ajmal_n/flashify-core
```

## Basic usage

```ts
import { flashify } from "@ajmal_n/flashify-core";

flashify.success("Saved successfully!");
flashify.error("Something went wrong");
flashify("Simple message");
```

With options:

```ts
flashify.show({
  message: "Custom alert",
  type: "custom",
  durationMs: 6000,
});
```

## CSS

Import the built CSS (or copy the variables into your theme):

```ts
import "@ajmal_n/flashify-core/dist/styles/base.css";
import "@ajmal_n/flashify-core/dist/styles/variants.css";
import "@ajmal_n/flashify-core/dist/styles/animations.css";
```

### Styling Overview

Flashify uses a modern "pill" style indicator on the left side of the toast. You can customize the look by overriding the CSS variables in your own stylesheet:

```css
:root {
  /* Control the color of the pill indicator for variants */
  --flashify-success-border: #10b981;
  --flashify-error-border: #ef4444;
  --flashify-warning-border: #f59e0b;
  --flashify-info-border: #3b82f6;

  /* Or change the border radius for both the toast and indicator */
  --flashify-radius: 12px;
}
```

## License

MIT
