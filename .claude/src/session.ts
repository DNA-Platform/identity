///: Session — the app's memory of WHERE IT IS. An app-level construct (held by
///: Claude as `app.session`), not a think-level one: it records the current page
///: by its [id](pages/page.ts) (URL) so a separate later process can tell whether
///: the app is STILL there. It holds no topic, no thought — only the page.
///:
///: It answers one question: are we in SYNC with the app (still on the page we
///: remembered)? It never assumes — the app may have been restarted or navigated
///: away — so it reads the LIVE URL and compares. If in sync, the caller binds the
///: page it is on; if not, the caller starts from home and navigates as it would
///: have. The Session is not an API for navigation; it is a memory you check.
///:
///: Persisted to a small JSON file beside the driver so it survives process exit
///: (write and read are separate processes).
///:
///: [The Redesign](../library/reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions) — pages are identified by URL.
///: [Reference Desk](../library/reference-desk/.cover.md) — the driver this belongs to.

import { readFileSync, writeFileSync, existsSync, unlinkSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Claude } from './claude.ts';

const SESSION_FILE = resolve(dirname(fileURLToPath(import.meta.url)), '.session.json');

export class Session {
  constructor(private readonly app: Claude) {}

  /** Remember the page the app is on now, by its URL. */
  async remember(): Promise<void> {
    this.save(await this.app.currentUrl());
  }

  /** The URL the session last remembered (read-only — for inspection/tests). */
  get rememberedUrl(): string | null {
    return this.load();
  }

  /** Are we in SYNC with the app — still on the page we remembered? Restores the
   *  window, reads the LIVE URL, and compares. False if nothing is remembered, the
   *  app isn't running, or it has moved. Never assumes. */
  async inSync(): Promise<boolean> {
    const remembered = this.load();
    if (!remembered || !this.app.attach()) return false;
    return (await this.app.currentUrl()) === remembered;
  }

  forget(): void {
    if (existsSync(SESSION_FILE)) unlinkSync(SESSION_FILE);
  }

  private save(url: string): void {
    mkdirSync(dirname(SESSION_FILE), { recursive: true });
    writeFileSync(SESSION_FILE, JSON.stringify({ url }, null, 2), 'utf-8');
  }

  private load(): string | null {
    if (!existsSync(SESSION_FILE)) return null;
    try { return (JSON.parse(readFileSync(SESSION_FILE, 'utf-8')) as { url?: string }).url ?? null; }
    catch { return null; }
  }
}
