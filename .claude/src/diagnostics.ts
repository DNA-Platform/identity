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
      this.window.screenshot(ssPath);
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
