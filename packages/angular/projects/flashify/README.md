# @ajmal_n/flashify-angular

Angular bindings (stub) for Flashify, built on `@ajmal_n/flashify-core`. Intended to host an NgModule/directives/services that bridge the core store into Angular apps.

## Install

```bash
npm install @ajmal_n/flashify-angular @ajmal_n/flashify-core
```

<button onclick="navigator.clipboard.writeText('npm install @ajmal_n/flashify-angular @ajmal_n/flashify-core')">Copy install command</button>

Using pnpm:

```bash
pnpm add @ajmal_n/flashify-angular @ajmal_n/flashify-core
```

## Status & Roadmap

Currently a placeholder.

### Planned Implementation:

- Develop a `FlashifyService` with an RxJS `BehaviorSubject` wrapping the core Vanilla JS store.
- Create a standalone `<flashify-container>` component that uses Angular's `*ngFor` (or newer `@for` syntax) to render the items.
- Inject the service via `providedIn: 'root'` to allow any component to trigger a toast effortlessly.

## License

MIT
