# @ajmal_n/flashify-vue

Vue bindings (stub) for Flashify, built on `@ajmal_n/flashify-core`. This package is a placeholder for future Vue components/composables.

## Install

```bash
npm install @ajmal_n/flashify-vue @ajmal_n/flashify-core
```

<button onclick="navigator.clipboard.writeText('npm install @ajmal_n/flashify-vue @ajmal_n/flashify-core')">Copy install command</button>

Using pnpm:

```bash
pnpm add @ajmal_n/flashify-vue @ajmal_n/flashify-core
```

## Status & Roadmap

Implementation is minimal today. This package currently acts as a stub.

### Planned Implementation:

- Create a `FlashifyPlugin` that provides a `useFlashify` composable globally.
- Implement a `<FlashifyContainer />` component using Vue 3's `<Teleport>` to render toasts at the app root.
- Use Vue's built-in Reactivity API (`ref`, `onMounted`, `onUnmounted`) to subscribe to `@ajmal_n/flashify-core` store updates.

## License

MIT
