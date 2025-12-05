import { Injectable, NgModule } from "@angular/core";
import {
  flashify,
  type FlashifyNotification,
  type FlashifyOptions,
  type FlashifyListener,
  type FlashifyState,
} from "@ajmal_n/flashify-core";

/**
  * Lightweight Angular service that forwards to the shared Flashify core singleton.
  * Consumers can inject this service and call helpers directly.
  */
@Injectable({ providedIn: "root" })
export class FlashifyService {
  show(options: FlashifyOptions): FlashifyNotification {
    return flashify.show(options);
  }

  success(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification {
    return flashify.success(message, options);
  }

  error(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification {
    return flashify.error(message, options);
  }

  warning(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification {
    return flashify.warning(message, options);
  }

  info(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification {
    return flashify.info(message, options);
  }

  custom(message: string, options?: Partial<FlashifyOptions>): FlashifyNotification {
    return flashify.custom(message, options);
  }

  dismiss(id: string): void {
    flashify.dismiss(id);
  }

  clear(): void {
    flashify.clear();
  }

  subscribe(listener: FlashifyListener): () => void {
    return flashify.subscribe(listener);
  }

  getState(): FlashifyState {
    return flashify.getState();
  }
}

/**
 * Optional module wrapper so apps can import FlashifyModule in a feature module.
 */
@NgModule({
  providers: [FlashifyService],
})
export class FlashifyModule {}
