// Session — a managed conversation interaction.
// Foreground while Claude responds. Minimize between turns.

import type { Claude } from './claude.ts';
import type { Response, Turn } from './components/turn.ts';
import { powershellSync } from './shell.ts';

export interface SessionOptions {
  name?: string;
  project?: string;
  timeout?: number;
  cleanup?: 'delete' | 'keep';
}

export class Session {
  id = '';
  url = '';
  name: string;
  turns: Turn[] = [];

  private started = false;
  ended = false;

  constructor(
    private readonly app: Claude,
    private readonly options: SessionOptions = {},
  ) {
    this.name = options.name ?? '';
  }

  get turnCount(): number {
    return this.turns.length;
  }

  async start(): Promise<void> {
    if (this.started) throw new Error('Session already started');
    this.started = true;
    // No navigation or foreground changes here.
    // The first send() acquires foreground — one cycle, not two.
  }

  async send(text: string): Promise<Response> {
    if (!this.started) throw new Error('Session not started');
    if (this.ended) throw new Error('Session already ended');

    const timeout = this.options.timeout ?? 120_000;

    // Foreground: compose, send, wait for response
    this.acquireForeground();
    await this.app.compose(text);
    await this.app.send(timeout);

    // Read the full conversation
    this.turns = await this.app.conversation.readTurns();
    this.url = await this.app.auto.uia.readUrl() ?? '';
    this.id = this.url.match(/\/chat\/([a-f0-9-]+)/)?.[1] ?? '';

    // Minimize — Doug gets his computer back
    this.app.window.minimize();

    const lastTurn = this.turns[this.turns.length - 1];
    if (!lastTurn?.response) {
      throw new Error('No response received');
    }

    return lastTurn.response;
  }

  async end(): Promise<void> {
    if (this.ended) return;
    this.ended = true;

    this.acquireForeground();

    const shouldDelete = this.options.cleanup === 'delete';

    if (this.name && this.turnCount > 0 && !shouldDelete) {
      try {
        await this.app.conversation.rename(this.name);
      } catch {
        // non-critical
      }
    }

    if (shouldDelete && this.turnCount > 0) {
      await this.app.deleteConversation();
    } else {
      await this.app.goHome();
    }

    this.app.window.minimize();
  }

  private acquireForeground(): void {
    if (!this.app.window.handle) throw new Error('No window handle');

    // Already foregrounded? Skip the P/Invoke dance.
    if (this.app.window.isForeground()) return;

    const handle = this.app.window.handle;
    powershellSync(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class SessionFg {
          [DllImport("user32.dll")] public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);
          [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
          [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
        }
"@
      [SessionFg]::keybd_event(0x12, 0, 0, [UIntPtr]::Zero)
      [SessionFg]::keybd_event(0x12, 0, 2, [UIntPtr]::Zero)
      [SessionFg]::ShowWindow([IntPtr]::new(${handle}), 3) | Out-Null
      [SessionFg]::SetForegroundWindow([IntPtr]::new(${handle})) | Out-Null
    `);

    this.app.window.requireForeground();
  }
}
