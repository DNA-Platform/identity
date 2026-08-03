///: Clipboard — handing a result over instead of flooding the terminal.
///:
///: A read that produces a document should hand you the document. `copy <command>`
///: runs a look, puts the result on the clipboard, and says what it placed there.
///:
///: It is behind a seam (`ClipboardWriter`) for two reasons: tests must not touch the
///: real clipboard, and the clipboard is **shared with Doug**
///: ([ch.7](../../library/reference-desk/07-pitfalls.md#clipboard-collisions)) — so every
///: write is announced, and nothing is ever written unasked.
///:
///: [The Runtime](../../library/reference-desk/14-the-runtime.md#always-available) — copy in the always-available set.

import { spawn } from 'child_process';

export interface ClipboardWriter {
  write(text: string): Promise<void>;
}

/** Windows clipboard via PowerShell `Set-Clipboard`. Text arrives on stdin rather
 *  than in the command line, so size and quoting are not a problem — the same
 *  reasoning as the [shell's base64 encoding](../../library/reference-desk/04-03-platform--shell.md). */
export class WindowsClipboard implements ClipboardWriter {
  write(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const ps = spawn('powershell.exe', [
        '-NoProfile', '-NonInteractive', '-Command',
        '$input | Set-Clipboard',
      ]);
      ps.on('error', reject);
      ps.on('close', code =>
        code === 0 ? resolve() : reject(new Error(`Set-Clipboard exited ${code}`)));
      ps.stdin.end(text, 'utf-8');
    });
  }
}

/** Records instead of writing. Tests use this; so does a dry run. */
export class RecordingClipboard implements ClipboardWriter {
  last: string | null = null;
  async write(text: string): Promise<void> { this.last = text; }
}

/** What the operator is told after a copy. Reports the TRUE size of what landed,
 *  because the point of copying is that you did not see it. */
export function copyReport(label: string, text: string): string {
  const chars = text.length;
  const lines = text === '' ? 0 : text.split('\n').length;
  return `Copied ${label} to your clipboard — ${chars.toLocaleString()} characters, ${lines} line${lines === 1 ? '' : 's'}.`;
}

/** A look that produced nothing must say so rather than silently clearing the
 *  clipboard — quietly wiping what Doug had copied would be the worst kind of
 *  helpfulness. */
export function nothingToCopy(label: string): string {
  return `${label} produced nothing. The clipboard was left alone.`;
}
