# @ajmal_n/flashify-core

Framework-agnostic notification engine for Flashify. Provides the store, helpers, and CSS for showing toast notifications in any JavaScript app.

## Install

```bash
npm install @ajmal_n/flashify-core
```
<button onclick="navigator.clipboard.writeText('npm install @ajmal_n/flashify-core')">Copy install command</button>

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

## License

MIT
