///: Gateway — act once, look repeatedly.
///: The discipline layer for all UIA interaction. Fire an action once, then poll
///: a verify predicate until the app confirms it worked. The verify must be a
///: quick, harmless [controller sensor](../library/reference-desk/02-02-the-architecture--gateway.md#sensors-and-actuators) — never an action.
///:
///: Three methods: act (fire + verify), waitFor (poll a predicate), read (poll
///: until valid result). All use tapering backoff — 50ms doubling to 1000ms.
///:
///: [The Gateway Pattern](../library/reference-desk/02-02-the-architecture--gateway.md) — full specification.
///: [Coding Philosophy](../library/reference-desk/05-coding-philosophy.md) — the elevator metaphor: open your eyes and look.
///: [Architecture Patterns](../library/reference-desk/10-architecture-patterns.md) — how View objects use this.

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
    verify: () => boolean | Promise<boolean>,
    options: GatewayOptions = {},
  ): Promise<void> {
    const opts = { ...DEFAULTS, ...options };
    const desc = opts.description ?? 'Action';
    const startTime = Date.now();

    // Fire the action ONCE
    this.requireForeground();
    await action();

    // Verify with tapering poll — retry the LOOK, not the action
    const verified = await this.waitFor(verify, opts);

    const duration = Date.now() - startTime;
    if (verified) {
      this.diagnostics.record(desc, true, duration);
    } else {
      this.diagnostics.record(desc, false, duration, 'verify failed');
      await this.diagnostics.captureOnFailure(desc);
      throw new Error(`${desc} — action fired but verify failed after ${opts.timeoutMs}ms`);
    }
  }

  async waitFor(
    predicate: () => boolean | Promise<boolean>,
    options: Pick<GatewayOptions, 'timeoutMs' | 'pollIntervalMs' | 'description'> = {},
  ): Promise<boolean> {
    this.requireForeground();
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
    this.requireForeground();
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
