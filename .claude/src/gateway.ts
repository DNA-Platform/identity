// Gateway — the async layer between the skeleton and the transport.
// Handles retry, readiness polling, timeout, and diagnostics.
// See: library/..team/claude/.perspective/ for the app's async behavior
// See: Doug's stock trading platform pattern: centralized cross-cutting concerns
// See: library/..team/adam/verified-automation/ for the feedback principles

import type { Diagnostics } from './diagnostics.ts';
import type { Window } from './window.ts';

export interface GatewayOptions {
  timeoutMs?: number;
  pollIntervalMs?: number;
  retries?: number;
  screenshotOnFailure?: string;
  description?: string;
}

const DEFAULTS: Required<Omit<GatewayOptions, 'screenshotOnFailure' | 'description'>> = {
  timeoutMs: 30_000,
  pollIntervalMs: 500,
  retries: 3,
};

export class Gateway {
  constructor(
    private readonly diagnostics: Diagnostics,
    private readonly window?: Window,
  ) {}

  private requireForeground(): void {
    if (this.window) {
      this.window.requireForeground();
    }
  }

  async act(
    action: () => void | Promise<void>,
    isReady: () => boolean | Promise<boolean>,
    options: GatewayOptions = {},
  ): Promise<void> {
    const opts = { ...DEFAULTS, ...options };
    const desc = opts.description ?? 'Action';
    let lastError: Error | null = null;
    const startTime = Date.now();

    for (let attempt = 0; attempt < opts.retries; attempt++) {
      try {
        this.requireForeground();
        await action();

        if (await this.waitFor(isReady, opts)) {
          this.diagnostics.record(desc, true, Date.now() - startTime);
          return;
        }

        lastError = new Error(`${desc} succeeded but readiness check timed out after ${opts.timeoutMs}ms`);
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
      }
    }

    // Failed — capture diagnostics
    const duration = Date.now() - startTime;
    const errorMsg = lastError?.message ?? 'unknown';
    this.diagnostics.record(desc, false, duration, errorMsg);
    await this.diagnostics.captureOnFailure(desc);

    throw new Error(
      `${desc} failed after ${opts.retries} attempts. Last error: ${errorMsg}`
    );
  }

  async waitFor(
    predicate: () => boolean | Promise<boolean>,
    options: Pick<GatewayOptions, 'timeoutMs' | 'pollIntervalMs' | 'description'> = {},
  ): Promise<boolean> {
    const timeoutMs = options.timeoutMs ?? DEFAULTS.timeoutMs;
    const deadline = Date.now() + timeoutMs;

    // Tapering poll: start fast (50ms), double each time, cap at 1000ms
    let interval = 50;
    while (Date.now() < deadline) {
      if (await predicate()) return true;
      await this.sleep(Math.min(interval, 1000));
      interval = Math.min(interval * 2, 1000);
    }

    return false;
  }

  async read<T>(
    reader: () => T | Promise<T>,
    isValid: (result: T) => boolean = () => true,
    options: GatewayOptions = {},
  ): Promise<T> {
    const opts = { ...DEFAULTS, ...options };
    const desc = opts.description ?? 'Read';
    let lastResult: T | undefined;
    const startTime = Date.now();

    const ready = await this.waitFor(async () => {
      lastResult = await reader();
      return isValid(lastResult);
    }, opts);

    if (!ready) {
      const duration = Date.now() - startTime;
      this.diagnostics.record(desc, false, duration, 'did not produce valid result');
      await this.diagnostics.captureOnFailure(desc);

      throw new Error(`${desc} did not produce valid result within ${opts.timeoutMs}ms`);
    }

    this.diagnostics.record(desc, true, Date.now() - startTime);
    return lastResult as T;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
