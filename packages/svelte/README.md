# @ajmal_n/flashify-svelte

Svelte bindings (stub) for Flashify, powered by `@ajmal_n/flashify-core`. Provides a placeholder for a future Svelte store/component wrapper.

## Install

```bash
npm install @ajmal_n/flashify-svelte @ajmal_n/flashify-core
```

<button onclick="navigator.clipboard.writeText('npm install @ajmal_n/flashify-svelte @ajmal_n/flashify-core')">Copy install command</button>

Using pnpm:

```bash
pnpm add @ajmal_n/flashify-svelte @ajmal_n/flashify-core
```

## Status & Roadmap

Currently a minimal stub.

### Planned Implementation:

- Expose the core store adapted to a Svelte readable store.
- Create a `FlashifyContainer.svelte` component that subscribes to the store and loops through notifications (`{#each}`).
- Provide a `getFlashify()` context or a globally writable wrapper to trigger toasts.

## License

MIT
