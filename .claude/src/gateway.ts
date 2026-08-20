///: Gateway — act once, look once, and if it did not work, STAND DOWN.
///:
///: **There are no loops in this file.** Not a retry, not a poll, not a backoff.
///: This is Doug's machine, and a driver that loops is a driver holding a computer
///: hostage while its owner tries to type. The rule, in his words: *if it fails, you
///: get the UIA tree, see what went wrong, edit the code and start again. You do not
///: loop.*
///:
///: So every failure produces the same three things and then gets out of the way:
///:   1. **the tree** — what the app actually showed at the moment it failed,
///:      attached to the error and written to `debug/`;
///:   2. **a minimize** — the screen goes back to its owner immediately;
///:   3. **a throw** — the caller stops. Nothing is attempted a second time.
///:
///: That is not a weaker guarantee than polling. It is a stronger one: a poll that
///: eventually succeeds hides the fact that the first look was wrong, and a poll
///: that eventually fails has spent thirty seconds of someone's screen to tell you
///: nothing you could not learn from one tree read. The tree IS the diagnosis.
///:
///: Three methods: act (precheck, fire once, settle, look once), check (settle, look
///: once), read (read once, validate).
///:
///: [The Gateway Pattern](../library/reference-desk/02-02-the-architecture--gateway.md) — full specification.
///: [Coding Philosophy](../library/reference-desk/05-coding-philosophy.md) — the elevator metaphor: open your eyes and look.

import type { Diagnostics } from './diagnostics.ts';
import type { Window } from './window.ts';
import type { TreeQuery, TreeSnapshot } from './tree.ts';
import { DriverError, PreconditionError } from './errors.ts';

export interface GatewayOptions {
  /** How long to let the app settle before looking. **One wait, then one look** —
   *  this is not a timeout on a poll, because there is no poll. */
  settleMs?: number;
  description?: string;
  screenshotOnFailure?: string;
  /** The element this action is about to touch — the actuator's assumption, made
   *  explicit. `act` reads the tree BEFORE firing and rejects the call if the element is not
   *  there, so a "not found" fails immediately and legibly instead of firing into
   *  nothing. */
  target?: TreeQuery;
  /** "I already looked, and this is what I saw." A caller that had to read the tree
   *  to decide WHAT to do hands that same reading over instead of making the gateway
   *  walk the tree again milliseconds later.
   *
   *  A handoff, not a cache: the caller is stating a fact it observed immediately
   *  before asking to act. It is not a bypass — a target absent from the handed-over
   *  tree is still rejected. */
  snapshot?: TreeSnapshot;
}

const DEFAULT_SETTLE_MS = 1_000;

export class Gateway {
  constructor(
    private readonly diagnostics: Diagnostics,
    private readonly window?: Window,
  ) {}

  private async requireForeground(): Promise<void> {
    if (this.window) await this.window.requireForeground();
  }

  /** The screen right now. One walk answers many questions, and it is the cheapest
   *  thing in the driver (~80ms). Never throws — an unreadable app yields an empty
   *  snapshot, which means "we could not see", not "it is not there". */
  async tree(): Promise<TreeSnapshot> {
    return this.diagnostics.snapshot();
  }

  /** Precheck → act once → settle → look once.
   *
   *  **Precheck** (when `options.target` is given): confirm the element the actuator
   *  is about to touch is on screen. If it is not, throw BEFORE firing — the action
   *  did not happen, the error names what was expected, and it carries the tree that
   *  disagreed.
   *
   *  **Act** fires exactly once. **Look** happens exactly once, after a single
   *  settle. If the look says no, we do not look again: we hand back the tree and
   *  minimize. Read the tree, fix the code, run it again. */
  async act(
    action: () => void | Promise<void>,
    verify: () => boolean | Promise<boolean>,
    options: GatewayOptions = {},
  ): Promise<void> {
    const desc = options.description ?? 'Action';
    const settleMs = options.settleMs ?? DEFAULT_SETTLE_MS;
    const startTime = Date.now();

    await this.requireForeground();

    // --- Precheck: is the assumption true before we act on it? ---
    if (options.target) {
      const snapshot = options.snapshot ?? await this.tree();
      // An EMPTY tree means we could not see, not that the target is absent. Do not
      // do not judge on blindness — fall through and let the look be the judge.
      if (!snapshot.isEmpty && !snapshot.has(options.target)) {
        this.diagnostics.record(desc, false, Date.now() - startTime, 'precondition failed');
        await this.standDown(desc);
        throw new PreconditionError(desc, options.target).withTree(snapshot);
      }
    }

    // Fire the action ONCE.
    await action();

    // Let the app settle, once, then look, once.
    await sleep(settleMs);
    const ok = await verify();

    const duration = Date.now() - startTime;
    if (ok) {
      this.diagnostics.record(desc, true, duration);
      return;
    }

    this.diagnostics.record(desc, false, duration, 'verify failed');
    const tree = await this.tree();
    await this.standDown(desc);
    throw new DriverError(
      `${desc} — the action fired, and ${settleMs}ms later the app did not show what was expected.\n` +
      'It was NOT tried again. The tree below is what the app actually showed; ' +
      'read it, change the code, and run it once more.',
    ).withTree(tree);
  }

  /** Settle once, then look once. Returns what it saw — no loop, no deadline.
   *
   *  Callers that used this to wait for something slow now get a straight answer
   *  about the moment they asked. If the answer is wrong, the tree says why. */
  async check(
    predicate: () => boolean | Promise<boolean>,
    options: Pick<GatewayOptions, 'settleMs' | 'description'> = {},
  ): Promise<boolean> {
    await this.requireForeground();
    await sleep(options.settleMs ?? DEFAULT_SETTLE_MS);
    return predicate();
  }

  /** The old name, kept so call sites read the same. It does NOT wait for anything
   *  repeatedly — it settles once and looks once, exactly like `check`. */
  async waitFor(
    predicate: () => boolean | Promise<boolean>,
    options: Pick<GatewayOptions, 'settleMs' | 'description'> = {},
  ): Promise<boolean> {
    return this.check(predicate, options);
  }

  /** Read once. If what came back is not valid, hand over the tree and stand down —
   *  do not read again hoping for a different answer. */
  async read<T>(
    reader: () => T | Promise<T>,
    isValid: (result: T) => boolean = () => true,
    options: GatewayOptions = {},
  ): Promise<T> {
    await this.requireForeground();
    const desc = options.description ?? 'Read';
    const startTime = Date.now();

    const result = await reader();
    if (isValid(result)) {
      this.diagnostics.record(desc, true, Date.now() - startTime);
      return result;
    }

    this.diagnostics.record(desc, false, Date.now() - startTime, 'invalid result');
    const tree = await this.tree();
    await this.standDown(desc);
    throw new DriverError(
      `${desc} — read the screen once and what came back was not usable. It was NOT ` +
      're-read. The tree below is what the app actually showed.',
    ).withTree(tree);
  }

  /** Capture the evidence, then give the computer back.
   *
   *  Minimizing on failure is deliberate and is the ONLY recovery this driver has.
   *  A failed automation that keeps the window forward is an automation still
   *  standing between someone and their own keyboard. */
  private async standDown(description: string): Promise<void> {
    try { await this.diagnostics.captureOnFailure(description); } catch { /* evidence is best effort */ }
    try { await this.window?.stepAside(); } catch { /* nothing left to give back */ }
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
