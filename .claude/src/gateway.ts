///: Gateway — act ONCE, look until the app answers, and if it never does, STAND DOWN.
///:
///: **The action fires exactly once. Only the LOOK repeats.** That one distinction is
///: the discipline of this file, and nothing else in it matters as much. Doug's rule
///: was always about the action: *if it fails, you get the UIA tree, see what went
///: wrong, edit the code and start again. You do not loop.* It was written against a
///: real defect — a driver clicking and typing into Claude Desktop again and again
///: while its owner tried to use their own computer. No action is ever re-fired here.
///:
///: Looking is not acting. Reading the tree changes nothing on screen, and the file
///: spent a while confusing the two: `act` slept a flat `DEFAULT_SETTLE_MS` and then
///: looked once, so every operation paid 1000ms whether the app answered in 30ms or
///: not at all. A tree read costs 77–133ms; one `/think` dispatch crosses this gateway
///: about ten times — goHome, sidebar, projects, open project, open conversation,
///: clear, the stability wait, type, paste, send. Ten seconds of sleeping, to watch an
///: app that usually answers before the first blink. Doug, 2026-09-17: *"Fix.
///: Performance is real and the mechanism is too slow. Use gateways to do test and
///: fast check"*.
///:
///: So `poll` re-reads a verify on a tapering backoff — 50, 100, 200, 400, 800, capped
///: at 1000 — and returns the instant it passes. `settleMs` is now the BUDGET rather
///: than the wait. The last look still lands exactly on it, so every verify the old
///: single look said yes to still gets its yes; what changed is that a verify which
///: was going to pass at 30ms stops paying for the other 970.
///:
///: Failure is unchanged, and still produces the same three things before getting out
///: of the way:
///:   1. **the tree** — what the app actually showed at the moment it failed,
///:      attached to the error and written to `debug/`;
///:   2. **a minimize** — the screen goes back to its owner immediately;
///:   3. **a throw** — the caller stops. The ACTION is never attempted a second time.
///:
///: The tree IS the diagnosis. A poll that eventually fails has told you nothing you
///: could not learn from one tree read, which is why the budget is small and the
///: failure still hands the tree over rather than asking for longer.
///:
///: Three methods: act (precheck, fire once, poll the verify), check (poll a
///: predicate), read (read once, validate — a reader is not a verify, and re-reading
///: a bad answer is just hoping).
///:
///: [The Gateway Pattern](../library/reference-desk/02-02-the-architecture--gateway.md) — full specification.
///: [Coding Philosophy](../library/reference-desk/05-coding-philosophy.md) — the elevator metaphor: open your eyes and look.

import type { Diagnostics } from './diagnostics.ts';
import type { Window } from './window.ts';
import type { TreeQuery, TreeSnapshot } from './tree.ts';
import { DriverError, PreconditionError } from './errors.ts';

export interface GatewayOptions {
  /** The BUDGET for looking, not a wait. The gateway asks on a tapering backoff and
   *  answers the moment the app agrees; this is only the point at which it stops
   *  asking. It was a flat sleep until 2026-09-17, which charged every operation the
   *  worst case, so the name reads the same at the call sites and costs a tenth. */
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

// THE BUDGET IS A CEILING, NOT A COST, and the difference is the whole point of the
// taper. While this was a flat sleep, every act paid it in full and Doug felt every
// one of them: 250 was the right number for a wait you cannot see the end of. Now that
// act, check and read all POLL — first look immediately, then 50, 100, 200ms and up —
// a generous ceiling costs nothing when the app is quick and is the only thing that
// lets a genuine navigation finish. Measured 2026-09-17: with the ceiling at 250 a
// project navigation failed outright, because opening a page is simply slower than
// that and no amount of impatience makes it faster. What must stay small is the time
// actually spent, and that is now decided by the app rather than by this number.
const DEFAULT_SETTLE_MS = 5_000;

export class Gateway {
  constructor(
    private readonly diagnostics: Diagnostics,
    private readonly window?: Window,
  ) {}

  private async requireForeground(): Promise<void> {
    if (this.window) await this.window.requireForeground();
  }

  /** Ask the same question on a tapering backoff — 50, 100, 200, 400, 800, then 1000
   *  — and stop the moment the answer is yes or the budget is gone.
   *
   *  **Only a look ever comes through here.** An action is fired by its caller before
   *  the first question is asked and is never reachable from inside this loop.
   *
   *  It asks ONCE before it sleeps at all, so an app that already agrees costs
   *  nothing; and the last sleep is clamped so the final look begins exactly at the
   *  budget — the same instant the old single look began. That clamp is why this is
   *  purely a speed-up: anything the one-sleep-one-look gateway would have seen is
   *  still seen, at the same moment, by the same predicate.
   *
   *  It never checks the foreground. That belongs to the operation that called it,
   *  which paid for it once at the top — discipline re-asserted at every level reads
   *  as rigour and behaves as a tax, and it is what made this driver glacial before. */
  private async poll(
    predicate: () => boolean | Promise<boolean>,
    budgetMs: number,
  ): Promise<boolean> {
    const deadline = Date.now() + budgetMs;
    let delay = 50;
    for (;;) {
      if (await predicate()) return true;
      const remaining = deadline - Date.now();
      if (remaining <= 0) return false;
      await sleep(Math.min(delay, remaining));
      delay = Math.min(delay * 2, 1_000);
    }
  }

  /** The screen right now. One walk answers many questions, and it is the cheapest
   *  thing in the driver (~80ms). Never throws — an unreadable app yields an empty
   *  snapshot, which means "we could not see", not "it is not there". */
  async tree(): Promise<TreeSnapshot> {
    return this.diagnostics.snapshot();
  }

  /** Precheck → act once → poll the verify.
   *
   *  **Precheck** (when `options.target` is given): confirm the element the actuator
   *  is about to touch is on screen. If it is not, throw BEFORE firing — the action
   *  did not happen, the error names what was expected, and it carries the tree that
   *  disagreed.
   *
   *  **Act** fires exactly once, before any looking, and is never reached again.
   *  **Look** repeats on a tapering backoff until the app agrees or `settleMs` is
   *  spent. When the budget runs out we do not act again: we hand back the tree and
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

    // Fire the action ONCE. Nothing below this line touches the app.
    await action();

    // Look until the app agrees, or until the budget is gone. Re-READING is not
    // re-ACTING: `poll` only ever asks the question again.
    const ok = await this.poll(verify, settleMs);

    const duration = Date.now() - startTime;
    if (ok) {
      this.diagnostics.record(desc, true, duration);
      return;
    }

    this.diagnostics.record(desc, false, duration, 'verify failed');
    const tree = await this.tree();
    await this.standDown(desc);
    throw new DriverError(
      `${desc} — the action fired, and ${settleMs}ms of looking later the app did not show what was expected.\n` +
      'The ACTION was NOT tried again; only the look was repeated. The tree below is ' +
      'what the app actually showed; read it, change the code, and run it once more.',
    ).withTree(tree);
  }

  /** Ask until the answer is yes or the budget is spent, then say what you saw.
   *
   *  It fires nothing, so asking again is only ever a tree read, and `settleMs` is a
   *  ceiling instead of a floor: a transition the app has already made is reported
   *  immediately, and one it never makes still costs no more than it used to. */
  async check(
    predicate: () => boolean | Promise<boolean>,
    options: Pick<GatewayOptions, 'settleMs' | 'description'> = {},
  ): Promise<boolean> {
    await this.requireForeground();
    return this.poll(predicate, options.settleMs ?? DEFAULT_SETTLE_MS);
  }

  /** The old name, kept so call sites read the same. Identical to `check` — it waits
   *  no longer than the app takes, and never longer than the budget. */
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

    // READ UNTIL THE ANSWER IS USABLE, on the same taper `act` and `check` use. This
    // read exactly once, and that was the last place in the gateway without sight.
    // It matters because `detectScreen()` is the URL and nothing else, and in a
    // single-page app the address bar changes BEFORE the page is painted — so a
    // navigation's verify passes on a screen that has not drawn, and whatever reads
    // next gets the previous one. `ProjectsPage.projects()` validates only that the
    // tree is not empty, which the screen we just left satisfies perfectly, and
    // `claudeProject` then reported "Claude project not found" about a project
    // sitting in plain view (measured 2026-09-17, the first dispatch after the flat
    // one-second settle was removed — that settle had been paying for the render
    // without anyone writing it down). Re-READING is not re-ACTING: nothing is fired
    // here, the screen is only looked at again.
    let result!: T;
    const usable = await this.poll(async () => {
      result = await reader();
      return isValid(result);
    }, options.settleMs ?? DEFAULT_SETTLE_MS);

    if (usable) {
      this.diagnostics.record(desc, true, Date.now() - startTime);
      return result;
    }

    this.diagnostics.record(desc, false, Date.now() - startTime, 'invalid result');
    const tree = await this.tree();
    await this.standDown(desc);
    throw new DriverError(
      `${desc} — the screen was read until it should have settled and what came back ` +
      'was still not usable. The tree below is what the app actually showed.',
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
