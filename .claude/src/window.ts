///: Window — the OS window that Claude Desktop runs in.
///: Find, launch, focus, maximize, minimize, screenshot via Win32 through the
///: persistent [shell](shell.ts). isForeground() and requireForeground() enforce the
///: window is active — the [gateway](../library/reference-desk/02-02-the-architecture--gateway.md) calls requireForeground() before every action.
///:
///: **Everything here is async, and that is a performance fix, not a style choice.**
///: This class used to call `powershellSync`, which spawns a whole new PowerShell
///: process per call — measured at 300–450ms each, against 0–1ms on the persistent
///: shell that was sitting right beside it. Since the gateway calls
///: `requireForeground()` before every action, and that cost two spawns, *a
///: do-nothing action with an instantly-true verify cost 1.7 seconds of pure Win32
///: bookkeeping.* The shell was introduced to end exactly this
///: ([ch.4-03](../library/reference-desk/04-03-platform--shell.md)); Window was
///: simply never moved over.
///:
///: The P/Invoke declarations are compiled ONCE per shell session, guarded by a
///: `PSTypeName` check. `Add-Type` with inline C# runs the C# compiler, and in a
///: fresh process it is always the first time.
///:
///: [Win32](../library/reference-desk/04-02-platform--win32.md) — window lifecycle, process management.
///: [The App Model](../library/reference-desk/02-04-the-architecture--app-model.md) — idempotent foreground.

import type { Shell } from './shell.ts';
import { resolve } from 'path';

const MSIX_EXE_PATTERN = 'WindowsApps.*Claude.*app.*claude\\.exe';

interface ProcessInfo {
  pid: number;
  handle: number;
}

/** Both facts about a window, from one crossing. `foreground` lies when the window
 *  is minimized (an Electron/Windows quirk), so the two are only meaningful
 *  together — which is the other reason to read them together. */
export interface WindowState {
  readonly foreground: boolean;
  readonly minimized: boolean;
}

/** Every Win32 entry point the driver uses, declared once. The `PSTypeName` guard
 *  is the whole point: without it, every single call re-invokes the C# compiler. */
const WIN32 = `
if (-not ([System.Management.Automation.PSTypeName]'DriverWin32').Type) {
  Add-Type @'
    using System; using System.Runtime.InteropServices;
    public class DriverWin32 {
      [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
      [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr h);
      [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
      [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
      [DllImport("user32.dll")] public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);
      [DllImport("user32.dll")] public static extern IntPtr SendMessage(IntPtr h, uint msg, IntPtr w, IntPtr l);
      [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
      [DllImport("user32.dll")] public static extern bool PrintWindow(IntPtr h, IntPtr hdc, uint flags);
      [StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left, Top, Right, Bottom; }
    }
'@
}
`;

const SW_MAXIMIZE = 3;
const SW_RESTORE = 9;
const SW_MINIMIZE = 6;
const WM_CLOSE = 0x0010;

export class Window {
  private process: ProcessInfo | null = null;

  constructor(private readonly shell: Shell) {}

  get pid(): number | null {
    return this.process?.pid ?? null;
  }

  get handle(): number | null {
    return this.process?.handle ?? null;
  }

  get isRunning(): boolean {
    return this.process !== null;
  }

  async find(): Promise<boolean> {
    const result = await this.shell.run(`
      Get-Process -Name claude -ErrorAction SilentlyContinue |
        Where-Object {
          $_.Path -match '${MSIX_EXE_PATTERN}' -and
          $_.MainWindowHandle -ne 0
        } |
        Select-Object -First 1 |
        ForEach-Object { "$($_.Id)|$($_.MainWindowHandle)" }
    `);
    if (!result) {
      this.process = null;
      return false;
    }
    const [pid, handle] = result.split('|').map(Number);
    this.process = { pid, handle };
    return true;
  }

  async launch(shortcutPath: string): Promise<void> {
    // Resolve the exe and args from the MSIX package directly,
    // since Start-Process on .lnk files may be blocked in non-interactive mode.
    await this.shell.run(`
      $pkg = Get-AppxPackage -Name Claude -ErrorAction Stop
      $exe = Join-Path $pkg.InstallLocation 'app\\claude.exe'
      Start-Process -FilePath $exe -ArgumentList '--force-renderer-accessibility'
    `, 30_000);
  }

  async focus(): Promise<void> {
    this.requireHandle();
    if ((await this.state()).foreground) return;
    await this.bringToForegroundOnce(false);
  }

  /** Foreground AND minimized, in one crossing. Asking them separately is two
   *  round trips for one question about one window, and the gateway asks on every
   *  action. */
  async state(): Promise<WindowState> {
    this.requireHandle();
    const result = await this.shell.run(`${WIN32}
      $h = [IntPtr]::new(${this.handle})
      $fg = [DriverWin32]::GetForegroundWindow() -eq $h
      $min = [DriverWin32]::IsIconic($h)
      "$fg|$min"
    `);
    const [fg, min] = result.trim().split('|');
    return { foreground: fg === 'True', minimized: min === 'True' };
  }

  async isForeground(): Promise<boolean> {
    return (await this.state()).foreground;
  }

  // Is the window minimized? isForeground() wrongly stays true for a minimized
  // Claude window (Electron/Win quirk), so it cannot verify a minimize. IsIconic
  // is the honest check.
  async isMinimized(): Promise<boolean> {
    return (await this.state()).minimized;
  }

  /** Bring the window forward. **Once.**
   *
   *  This used to try five times, each attempt synthesising an Alt keypress and
   *  calling `SetForegroundWindow`, with a 400ms sleep between. That is two seconds
   *  of a background process repeatedly taking the keyboard away from whoever is
   *  using the machine. It is not a driver being careful; it is a driver fighting
   *  the user for their own computer, and it is not allowed.
   *
   *  One attempt. One check. If Windows refuses, we GIVE UP AND GIVE THE SCREEN
   *  BACK — `stepAside()` minimizes and the caller fails. Never a second grab. */
  async requireForeground(): Promise<void> {
    const state = await this.state();
    if (state.foreground && !state.minimized) return;

    await this.bringToForegroundOnce(false);
    await sleep(400);
    const now = await this.state();
    if (now.foreground && !now.minimized) return;

    await this.stepAside();
    throw new Error(
      'Claude Desktop would not come forward, so the driver stood down and minimized it. ' +
      'Nothing was retried and nothing was fired. Run the command again when the screen is free.',
    );
  }

  async maximize(): Promise<void> {
    this.requireHandle();
    const state = await this.state();
    if (state.foreground && !state.minimized) return;

    await this.bringToForegroundOnce(true);
    await sleep(400);
    const now = await this.state();
    if (now.foreground && !now.minimized) return;   // it came forward — done

    await this.stepAside();
    throw new Error(
      'Claude Desktop would not come forward, so the driver stood down and minimized it. ' +
      'Nothing was retried. Another window may have the foreground.',
    );
  }

  /** Set while a SESSION is deliberately holding the window up — a test run, a
   *  server handling a burst of commands. It suppresses the per-failure minimize
   *  ONLY; the session still gives the screen back when it ends.
   *
   *  Without it the app blinks: a failure minimizes, the next command re-maximizes,
   *  and a suite with expected failures in it flickers the window open and shut
   *  dozens of times. Showing and hiding the window belongs to the session, not to
   *  each individual step inside it. */
  holdingScreen = false;

  /** Get out of the way. The one recovery this driver has: when something is stuck,
   *  minimize and stop — never try again, never hold the screen. Best effort by
   *  design; if even this fails there is nothing further to do and nothing further
   *  is attempted. */
  async stepAside(): Promise<void> {
    if (this.holdingScreen) return;   // a session owns the window; it will hand it back
    try { await this.minimize(); } catch { /* nothing left to give back */ }
  }

  /** Hold the window up for the duration of a session, then give it back once. */
  async holdScreen<T>(session: () => Promise<T>): Promise<T> {
    this.holdingScreen = true;
    try {
      return await session();
    } finally {
      this.holdingScreen = false;
      await this.stepAside();
    }
  }

  async minimize(): Promise<void> {
    this.requireHandle();
    await this.shell.run(`${WIN32}
      [DriverWin32]::ShowWindow([IntPtr]::new(${this.handle}), ${SW_MINIMIZE}) | Out-Null
    `);
  }

  async close(): Promise<void> {
    // Graceful close via WM_CLOSE, then force-kill stragglers
    if (this.handle) {
      await this.shell.run(`${WIN32}
        [DriverWin32]::SendMessage([IntPtr]::new(${this.handle}), ${WM_CLOSE}, [IntPtr]::Zero, [IntPtr]::Zero) | Out-Null
      `);
    }
    // Clean up child processes
    await this.shell.run(`
      Start-Sleep -Seconds 2
      Get-Process -Name claude -ErrorAction SilentlyContinue |
        Where-Object { $_.Path -match '${MSIX_EXE_PATTERN}' } |
        Stop-Process -Force -ErrorAction SilentlyContinue
    `, 15_000);
    this.process = null;
  }

  async screenshot(outputPath: string): Promise<string> {
    this.requireHandle();
    const absPath = resolve(outputPath);
    // PrintWindow captures the window's own content regardless of Z-order.
    // No need to bring to foreground. Works while minimized (after restore-behind).
    await this.shell.run(`${WIN32}
      Add-Type -AssemblyName System.Drawing
      $rect = New-Object DriverWin32+RECT
      [DriverWin32]::GetWindowRect([IntPtr]::new(${this.handle}), [ref]$rect) | Out-Null
      $w = $rect.Right - $rect.Left; $h = $rect.Bottom - $rect.Top
      $dir = Split-Path '${absPath}' -Parent
      if ($dir) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
      $bmp = New-Object System.Drawing.Bitmap($w, $h)
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $hdc = $g.GetHdc()
      [DriverWin32]::PrintWindow([IntPtr]::new(${this.handle}), $hdc, 2) | Out-Null
      $g.ReleaseHdc($hdc)
      $bmp.Save('${absPath}')
      $g.Dispose(); $bmp.Dispose()
    `, 15_000);
    return absPath;
  }

  /** Give a launching app time to appear, then look ONCE.
   *
   *  A launch genuinely takes a while, so waiting is honest — "I did not wait long
   *  enough" is real evidence. Polling for thirty seconds is not: it is the same
   *  question asked sixty times. Wait the time an app takes to start, then look. If
   *  it is not there, say so and stop. */
  async waitForWindow(settleMs = 8_000): Promise<boolean> {
    await sleep(settleMs);
    return this.find();
  }

  /** Give the renderer time to build its accessibility tree, then look ONCE. */
  async waitForUia(settleMs = 4_000): Promise<boolean> {
    this.requireHandle();
    await sleep(settleMs);
    const count = await this.shell.run(`
      Add-Type -AssemblyName UIAutomationClient
      Add-Type -AssemblyName UIAutomationTypes
      $uia = [System.Windows.Automation.AutomationElement]
      $window = $uia::FromHandle([IntPtr]::new(${this.handle}))
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Document)
      $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond).Count
    `, 10_000);
    return parseInt(count, 10) > 0;
  }

  // Bring the window forward using the Alt-key trick: Windows grants foreground
  // rights to a process that just synthesized input, so without the keybd_event
  // SetForegroundWindow is silently ignored and the steal loses the race.
  private async bringToForegroundOnce(maximizeWindow: boolean): Promise<void> {
    this.requireHandle();
    const show = maximizeWindow ? SW_MAXIMIZE : SW_RESTORE;
    await this.shell.run(`${WIN32}
      [DriverWin32]::keybd_event(0x12, 0, 0, [UIntPtr]::Zero)
      [DriverWin32]::keybd_event(0x12, 0, 2, [UIntPtr]::Zero)
      [DriverWin32]::ShowWindow([IntPtr]::new(${this.handle}), ${show}) | Out-Null
      [DriverWin32]::SetForegroundWindow([IntPtr]::new(${this.handle})) | Out-Null
    `);
  }

  private requireHandle(): void {
    if (!this.handle) {
      throw new Error('No window handle. Call find() or execute() first.');
    }
  }
}

/** A real timer, not `Atomics.wait`. The old blocking sleep froze the event loop,
 *  which matters the moment these calls are async. */
function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}
