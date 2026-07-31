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
import type { TreeQuery, TreeSnapshot } from './tree.ts';
import { DriverError, PreconditionError } from './errors.ts';

export interface GatewayOptions {
  timeoutMs?: number;
  pollIntervalMs?: number;
  retries?: number;
  screenshotOnFailure?: string;
  description?: string;
  /** The element this action is about to touch — the actuator's assumption, made
   *  explicit. When given, `act` reads the tree BEFORE firing and refuses if the
   *  element is not there, so a "not found" fails immediately and legibly instead
   *  of firing into nothing and timing out on a verify that could never pass.
   *  Optional while call sites are converted; a call site without one still works
   *  exactly as before. */
  target?: TreeQuery;
  /** "I already looked, and this is what I saw." A caller that had to read the tree
   *  to decide WHAT to do — the navigator picking whichever home affordance is
   *  present, say — hands that same reading over instead of making the gateway walk
   *  the tree again milliseconds later.
   *
   *  Deliberately a handoff and NOT a cache with a staleness window: a timed cache
   *  would eventually let an old tree authorize an action, which is the exact thing
   *  the precheck exists to prevent. Here the caller is stating a fact it observed
   *  before asking to act, and the gateway is entitled to rely on it. */
  snapshot?: TreeSnapshot;
}

const DEFAULTS: Required<Omit<GatewayOptions,
  'screenshotOnFailure' | 'description' | 'target' | 'snapshot'>> = {
  timeoutMs: 30_000,
  pollIntervalMs: 500,
  retries: 3,
};

export class Gateway {
  constructor(
    private readonly diagnostics: Diagnostics,
    private readonly window?: Window,
  ) {}

  private async requireForeground(): Promise<void> {
    if (this.window) {
      await this.window.requireForeground();
    }
  }

  /** The screen right now. Cheap enough to take per action; one walk answers many
   *  questions. Never throws — an unreadable app yields an empty snapshot. */
  async tree(): Promise<TreeSnapshot> {
    return this.diagnostics.snapshot();
  }

  /** Precheck → act → verify.
   *
   *  **Precheck** (only when `options.target` is given): read the tree and confirm
   *  the element the actuator is about to touch is actually on screen. If it is not,
   *  throw before firing — the action did not happen, the error names what was
   *  expected, and it carries the tree that disagreed. This is not a new failure:
   *  `uia.invoke` already returns false for a missing element and `act` already
   *  discarded that boolean, so today a missing target becomes a 30-second timeout
   *  with an opaque message. The precheck makes an existing failure legible and fast.
   *
   *  **Act** fires exactly once. **Verify** polls a controller sensor with tapering
   *  backoff — we retry the LOOK, never the action. */
  async act(
    action: () => void | Promise<void>,
    verify: () => boolean | Promise<boolean>,
    options: GatewayOptions = {},
  ): Promise<void> {
    const opts = { ...DEFAULTS, ...options };
    const desc = opts.description ?? 'Action';
    const startTime = Date.now();

    await this.requireForeground();

    // --- Precheck: is the assumption true before we act on it? ---
    let snapshot: TreeSnapshot | undefined;
    if (options.target) {
      snapshot = options.snapshot ?? await this.tree();
      // An EMPTY tree means we could not see, not that the target is absent. Do not
      // refuse on blindness — fall through and let the verify be the judge.
      if (!snapshot.isEmpty && !snapshot.has(options.target)) {
        this.diagnostics.record(desc, false, Date.now() - startTime, 'precondition failed');
        await this.diagnostics.captureOnFailure(desc);
        throw new PreconditionError(desc, options.target).withTree(snapshot);
      }
    }

    // Fire the action ONCE
    await action();

    // Verify with tapering poll — retry the LOOK, not the action.
    // `poll`, not `waitFor`: we already required the foreground at the top of this
    // method, and asking Windows the same question twice for one action was the
    // single most expensive thing the driver did.
    const verified = await this.poll(verify, opts);

    const duration = Date.now() - startTime;
    if (verified) {
      this.diagnostics.record(desc, true, duration);
    } else {
      this.diagnostics.record(desc, false, duration, 'verify failed');
      await this.diagnostics.captureOnFailure(desc);
      throw new DriverError(
        `${desc} — action fired but verify failed after ${opts.timeoutMs}ms`,
      ).withTree(await this.tree());
    }
  }

  async waitFor(
    predicate: () => boolean | Promise<boolean>,
    options: Pick<GatewayOptions, 'timeoutMs' | 'pollIntervalMs' | 'description'> = {},
  ): Promise<boolean> {
    await this.requireForeground();
    return this.poll(predicate, options);
  }

  /** The tapering poll itself, with no foreground check of its own.
   *
   *  The check belongs to an OPERATION, not to every loop inside it. `act` and
   *  `read` require the foreground once and then poll; only a bare `waitFor` — which
   *  is an operation in its own right — pays for its own check. */
  private async poll(
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
    await this.requireForeground();
    const opts = { ...DEFAULTS, ...options };
    const desc = opts.description ?? 'Read';
    let lastResult: T | undefined;
    const startTime = Date.now();

    const ready = await this.poll(async () => {
      lastResult = await reader();
      return isValid(lastResult);
    }, opts);

    if (!ready) {
      const duration = Date.now() - startTime;
      this.diagnostics.record(desc, false, duration, 'did not produce valid result');
      await this.diagnostics.captureOnFailure(desc);

      throw new DriverError(
        `${desc} did not produce valid result within ${opts.timeoutMs}ms`,
      ).withTree(await this.tree());
    }

    this.diagnostics.record(desc, true, Date.now() - startTime);
    return lastResult as T;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
