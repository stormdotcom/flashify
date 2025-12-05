import { type ReactNode } from "react";
import ReactDOM from "react-dom";
import { FlashifyContainer } from "./FlashifyContainer";

// users can choose to import CSS in their app instead if they want
import "@ajmal_n/flashify-core/dist/styles/animations.css";
import "@ajmal_n/flashify-core/dist/styles/base.css";
import "@ajmal_n/flashify-core/dist/styles/variants.css";

interface FlashifyProviderProps {
  children: ReactNode;
}

/**
 * Wrap your app to render the FlashifyContainer at the end of body.
 */
export function FlashifyProvider({ children }: FlashifyProviderProps) {
  return (
    <>
      {children}
      {typeof document !== "undefined"
        ? ReactDOM.createPortal(<FlashifyContainer />, document.body)
        : null}
    </>
  );
}
