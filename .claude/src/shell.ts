///: Shell — persistent PowerShell session.
///: One process, kept alive. 12ms per call vs 200ms spawning a new process.
///: Every UIA read and keyboard action runs through this pipe.
///:
///: [The Shell](../library/reference-desk/04-03-platform--shell.md) — performance characteristics.

// Shell — persistent PowerShell session.
// One process stays alive for the lifetime of the app.
// Commands pipe in, results pipe out. No per-call process startup.
// Owned by the app, injected into controllers via Automation.

import { spawn, execSync, type ChildProcess } from 'child_process';

const SENTINEL = '___SHELL_DONE___';
const ERROR_SENTINEL = '___SHELL_ERROR___';

export class Shell {
  private session: ChildProcess | null = null;
  private queue: Promise<string> = Promise.resolve('');

  private getSession(): ChildProcess {
    if (this.session && !this.session.killed && this.session.exitCode === null) {
      return this.session;
    }

    this.session = spawn('powershell.exe', [
      '-NoProfile', '-NoLogo', '-NonInteractive', '-Command',
      // Run a read-eval-print loop that executes base64-encoded commands
      `[Console]::OutputEncoding=[System.Text.Encoding]::UTF8;` +
      `while($true){` +
        `$line=[Console]::ReadLine();` +
        `if(!$line){continue}` +
        `try{` +
          `$bytes=[System.Convert]::FromBase64String($line);` +
          `$cmd=[System.Text.Encoding]::UTF8.GetString($bytes);` +
          `$result=Invoke-Expression $cmd 2>&1|Out-String;` +
          `if($result){[Console]::Write($result)}` +
        `}catch{` +
          `[Console]::WriteLine($_.Exception.Message);` +
          `[Console]::WriteLine('${ERROR_SENTINEL}');` +
          `continue` +
        `}` +
        `[Console]::WriteLine('${SENTINEL}')` +
      `}`,
    ], {
      stdio: ['pipe', 'pipe', 'pipe'],
      windowsHide: true,
    });

    this.session.on('exit', () => { this.session = null; });

    return this.session;
  }

  async run(script: string, timeoutMs = 10_000): Promise<string> {
    const next = this.queue.then(() => this.exec(script, timeoutMs));
    this.queue = next.catch(() => '');
    return next;
  }

  close(): void {
    if (this.session && !this.session.killed) {
      this.session.kill();
      this.session = null;
    }
  }

  private exec(script: string, timeoutMs: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const ps = this.getSession();
      let stdout = '';
      let done = false;

      const timer = setTimeout(() => {
        if (!done) {
          done = true;
          cleanup();
          reject(new Error(`PowerShell timed out after ${timeoutMs}ms`));
        }
      }, timeoutMs);

      const onStdout = (chunk: Buffer) => {
        stdout += chunk.toString('utf-8');

        const errIdx = stdout.indexOf(ERROR_SENTINEL);
        if (errIdx !== -1) {
          done = true;
          clearTimeout(timer);
          cleanup();
          const errorText = stdout.slice(0, errIdx).trim();
          reject(new Error(errorText || 'PowerShell script error'));
          return;
        }

        const doneIdx = stdout.indexOf(SENTINEL);
        if (doneIdx !== -1) {
          done = true;
          clearTimeout(timer);
          cleanup();
          resolve(stdout.slice(0, doneIdx).trim());
        }
      };

      const cleanup = () => {
        ps.stdout?.off('data', onStdout);
      };

      ps.stdout?.on('data', onStdout);

      const encoded = Buffer.from(script, 'utf-8').toString('base64');
      ps.stdin!.write(encoded + '\r\n');
    });
  }
}

// Synchronous variant — spawns a process (used only at startup before Shell exists)
export function powershellSync(script: string, timeoutMs = 10_000): string {
  return execSync('powershell.exe -NoProfile -NonInteractive -Command -', {
    input: script,
    encoding: 'utf-8',
    timeout: timeoutMs,
  }).trim();
}
