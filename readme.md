#  Flashify — Simple & Modern Notification System

Flashify is a lightweight and framework-agnostic notification library.  
It lets you show clean and animated alerts (success, error, warning, info, custom) in any web app — React, Angular, Svelte, Vue, or plain JavaScript.

---

##  Features

- Works with **any framework** (core + simple wrappers)
- **Success, Error, Warning, Info, Default, Custom** notifications
- Smooth animations and modern UI
- Fully **themeable** using CSS variables or Tailwind
- Small bundle size and no external dependencies
- Comes with a **React wrapper** out of the box

---

##  Install

### Core package (for any JS app)
```bash
npm install @flashify/core
```

### React wrapper
```bash
npm install @flashify/react
```

---

##  Basic Usage (React)

```tsx
import { FlashifyProvider, useFlashify } from "@flashify/react";

function App() {
  const flash = useFlashify();

  return (
    <div>
      <button onClick={() => flash.success("Profile updated!")}>
        Show success
      </button>
    </div>
  );
}
```

Wrap your app:

```tsx
<FlashifyProvider>
  <App />
</FlashifyProvider>
```

---

##  Core Usage (Vanilla JavaScript)

```js
import { flashify } from "@flashify/core";

flashify.success("Saved successfully!");
flashify.error("Something went wrong");
flashify("Simple message");
```

You can pass options:

```js
flashify.show({
  message: "Custom alert",
  type: "custom",
  durationMs: 6000,
});
```

---

##  Styling & Theming

Flashify uses CSS variables, so you can change colors instantly:

```css
:root {
  --flashify-success-bg: #ecfdf5;
  --flashify-success-border: #10b981;
  --flashify-success-text: #065f46;
}
```

Works perfectly with Tailwind themes too.

---

## 📂 Monorepo Structure

```
flashify/
  packages/
    core/     - Notification engine (vanilla JS)
    react/    - React wrapper
```

---

## 🛠️ Available Notification Types

- `success`
- `error`
- `warning`
- `info`
- `default`
- `custom`

---

## 🔧 API Overview

```js
flashify(message, options?)
flashify.success(message, options?)
flashify.error(message, options?)
flashify.warning(message, options?)
flashify.info(message, options?)
flashify.custom(message, options?)

flashify.show(options)
flashify.dismiss(id)
flashify.clear()
```

---

##  Contributing

Pull requests are welcome!  
You can add wrappers for other frameworks or improve animations/themes.

---

##  License

MIT License  
Free for commercial and personal projects.


[![Maintainer](https://img.shields.io/badge/maintainer-Ajmal%20Nasumudeen%20(stormdotcom)-blue)](https://github.com/stormdotcom)
