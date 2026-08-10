///: Diagnostics — debug infrastructure for failed actions.
///: Gateway calls diagnostics on every failed action: UIA tree snapshot,
///: screenshot, and action history. Output lands in .claude/src/debug/.
///:
///: [The Gateway Pattern](../library/reference-desk/02-02-the-architecture--gateway.md) — the act-verify loop.

// Diagnostics — cross-cutting debug infrastructure.
// Captures UIA tree snapshots, screenshots, and action history
// when things go wrong. Used by the gateway on every failed action.

import type { Window } from './window.ts';
import type { Uia } from './uia.ts';
import type { TreeSnapshot } from './tree.ts';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEBUG_DIR = resolve(__dirname, 'debug');

export interface ActionRecord {
  timestamp: number;
  description: string;
  success: boolean;
  error?: string;
  durationMs: number;
}

export class Diagnostics {
  readonly history: ActionRecord[] = [];

  constructor(
    private readonly window: Window,
    private readonly uia: Uia,
  ) {
    if (!existsSync(DEBUG_DIR)) mkdirSync(DEBUG_DIR, { recursive: true });
  }

  /** The last few screens we looked at, oldest first.
   *
   *  **For looking at, never for deciding.** Every entry here is by definition out
   *  of date — the app may have moved on. A held tree must never authorize an
   *  action; that is exactly the lie the precheck exists to prevent. What it IS
   *  good for is the question you ask after something goes wrong: what did the
   *  screen look like just before that? Answering it used to mean running the whole
   *  thing again and hoping it failed the same way.
   *
   *  It lives for the lifetime of the process, so a one-shot CLI invocation sees
   *  only its own reads; a long-running [runtime](cli/runtime.ts) accumulates the
   *  real story. */
  readonly trees: TreeSnapshot[] = [];

  /** Deep enough to cover an action and the reads around it; shallow enough that
   *  nothing here is a memory concern. */
  private static readonly KEEP_TREES = 10;

  /** The screen right now, as a value. Diagnostics is where "look at what is
   *  actually there" lives, so the gateway asks here rather than holding its own
   *  Uia — the gateway stays a discipline layer that knows nothing about trees.
   *  Every tree taken through here is remembered. */
  async snapshot(): Promise<TreeSnapshot> {
    const tree = await this.uia.snapshot();
    this.trees.push(tree);
    if (this.trees.length > Diagnostics.KEEP_TREES) this.trees.shift();
    return tree;
  }

  /** The most recent screen we looked at, without looking again. Says nothing about
   *  NOW — see the warning on `trees`. */
  get lastTree(): TreeSnapshot | undefined {
    return this.trees[this.trees.length - 1];
  }

  /** One line per remembered tree: how long ago, how big, what was in it. The
   *  orientation you want before deciding which one to actually print. */
  treeHistory(): string {
    if (this.trees.length === 0) return 'No trees read yet in this process.';
    const now = Date.now();
    return this.trees.map((t, i) => {
      const age = ((now - t.capturedAt) / 1000).toFixed(1);
      const what = t.isEmpty ? 'EMPTY (could not see)' : t.types().slice(0, 4).map(x => `${x.type} ${x.count}`).join(', ');
      return `  [${i}] ${age.padStart(6)}s ago  ${String(t.size).padStart(4)} elements  ${what}`;
    }).join('\n');
  }

  record(description: string, success: boolean, durationMs: number, error?: string): void {
    this.history.push({ timestamp: Date.now(), description, success, durationMs, error });

    // Keep last 50 actions
    if (this.history.length > 50) this.history.shift();
  }

  async captureOnFailure(description: string): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const baseName = `${timestamp}-${description.replace(/[^a-z0-9]/gi, '-').slice(0, 40)}`;

    // Screenshot
    try {
      const ssPath = resolve(DEBUG_DIR, `${baseName}.png`);
      await this.window.screenshot(ssPath);
    } catch { /* best effort */ }

    // UIA tree snapshot
    try {
      const names = await this.uia.allNames();
      const treePath = resolve(DEBUG_DIR, `${baseName}-tree.txt`);
      writeFileSync(treePath, names.join('\n'));
    } catch { /* best effort */ }

    // Action history
    try {
      const historyPath = resolve(DEBUG_DIR, `${baseName}-history.txt`);
      const lines = this.history.map(r =>
        `${new Date(r.timestamp).toISOString()} [${r.success ? 'OK' : 'FAIL'}] ` +
        `${r.description} (${r.durationMs}ms)${r.error ? ` — ${r.error}` : ''}`
      );
      writeFileSync(historyPath, lines.join('\n'));
    } catch { /* best effort */ }

    return resolve(DEBUG_DIR, baseName);
  }

  get lastAction(): ActionRecord | undefined {
    return this.history[this.history.length - 1];
  }

  get recentFailures(): ActionRecord[] {
    return this.history.filter(r => !r.success).slice(-5);
  }

  summary(): string {
    const total = this.history.length;
    const failures = this.history.filter(r => !r.success).length;
    const last = this.lastAction;
    return `${total} actions (${failures} failed). Last: ${last?.description ?? 'none'} [${last?.success ? 'OK' : 'FAIL'}]`;
  }
}
