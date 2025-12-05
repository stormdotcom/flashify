# @ajmal_n/flashify-react

React bindings for Flashify, a lightweight notification system powered by `@ajmal_n/flashify-core`.

## Install

```bash
npm install @ajmal_n/flashify-react @ajmal_n/flashify-core
```
<button onclick="navigator.clipboard.writeText('npm install @ajmal_n/flashify-react @ajmal_n/flashify-core')">Copy install command</button>

## Usage

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { FlashifyProvider, useFlashify } from "@ajmal_n/flashify-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FlashifyProvider>
    <App />
  </FlashifyProvider>,
);

function App() {
  const flash = useFlashify();
  return <button onClick={() => flash.success("Profile updated!")}>Show success</button>;
}
```

## Styling

The provider pulls in the bundled CSS from `@ajmal_n/flashify-core`. If you prefer to import manually, you can include:

```ts
import "@ajmal_n/flashify-core/dist/styles/base.css";
import "@ajmal_n/flashify-core/dist/styles/variants.css";
import "@ajmal_n/flashify-core/dist/styles/animations.css";
```

## License

MIT
