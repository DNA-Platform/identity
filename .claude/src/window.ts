///: Window — the OS window that Claude Desktop runs in.
///: Find, launch, focus, maximize, minimize, screenshot via Win32 through PowerShell.
///: isForeground() and requireForeground() enforce the window is active — the
///: [gateway](../library/reference-desk/02-02-the-architecture--gateway.md) calls requireForeground() before every action.
///:
///: [Win32](../library/reference-desk/04-02-platform--win32.md) — window lifecycle, process management.
///: [The App Model](../library/reference-desk/02-04-the-architecture--app-model.md) — idempotent foreground.

import { powershellSync as powershell } from './shell.ts';
import { resolve } from 'path';

const MSIX_EXE_PATTERN = 'WindowsApps.*Claude.*app.*claude\\.exe';

interface ProcessInfo {
  pid: number;
  handle: number;
}

export class Window {
  private process: ProcessInfo | null = null;

  get pid(): number | null {
    return this.process?.pid ?? null;
  }

  get handle(): number | null {
    return this.process?.handle ?? null;
  }

  get isRunning(): boolean {
    return this.process !== null;
  }

  find(): boolean {
    const result = powershell(`
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

  launch(shortcutPath: string): void {
    // Resolve the exe and args from the MSIX package directly,
    // since Start-Process on .lnk files may be blocked in non-interactive mode.
    powershell(`
      $pkg = Get-AppxPackage -Name Claude -ErrorAction Stop
      $exe = Join-Path $pkg.InstallLocation 'app\\claude.exe'
      Start-Process -FilePath $exe -ArgumentList '--force-renderer-accessibility'
    `);
  }

  focus(): void {
    this.requireHandle();
    if (this.isForeground()) return;
    this.bringToForegroundOnce(false);
  }

  isForeground(): boolean {
    this.requireHandle();
    const result = powershell(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class FgCheck {
          [DllImport("user32.dll")] public static extern IntPtr GetForegroundWindow();
        }
"@
      $fg = [FgCheck]::GetForegroundWindow()
      if ($fg -eq [IntPtr]::new(${this.handle})) { 'true' } else { 'false' }
    `);
    return result?.trim() === 'true';
  }

  // Is the window minimized? Use this to CONFIRM a minimize — isForeground()
  // wrongly stays true for a minimized Claude window (Electron/Win quirk), so it
  // cannot verify a minimize. IsIconic is the honest check.
  isMinimized(): boolean {
    this.requireHandle();
    const result = powershell(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class IconicCheck {
          [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr h);
        }
"@
      if ([IconicCheck]::IsIconic([IntPtr]::new(${this.handle}))) { 'true' } else { 'false' }
    `);
    return result?.trim() === 'true';
  }

  requireForeground(): void {
    if (this.isForeground() && !this.isMinimized()) return;  // isForeground lies when minimized
    // Racy steal — retry with the Alt-key trick, verify each time.
    for (let attempt = 0; attempt < 5; attempt++) {
      this.bringToForegroundOnce(false);
      this.sleep(400);
      if (this.isForeground()) return;
    }
    throw new Error('Claude window is not the foreground window after 5 attempts. Cannot proceed safely.');
  }

  maximize(): void {
    this.requireHandle();
    if (this.isForeground() && !this.isMinimized()) return;  // isForeground lies when minimized — restore it
    // Retry the foreground steal — Windows can refuse it once and grant it the
    // next attempt (the steal is racy). Verify each time; never trust the call.
    for (let attempt = 0; attempt < 5; attempt++) {
      this.bringToForegroundOnce(true);
      this.sleep(400);
      if (this.isForeground()) return;
    }
    throw new Error('maximize() could not bring Claude to the foreground after 5 attempts. Window may be blocked by another app.');
  }

  minimize(): void {
    this.requireHandle();
    powershell(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class WinState3 {
          [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
        }
"@
      [WinState3]::ShowWindow([IntPtr]::new(${this.handle}), 6) | Out-Null
    `);
  }

  close(): void {
    // Graceful close via WM_CLOSE, then force-kill stragglers
    if (this.handle) {
      powershell(`
        Add-Type @"
          using System; using System.Runtime.InteropServices;
          public class WinClose {
            [DllImport("user32.dll")]
            public static extern IntPtr SendMessage(IntPtr h, uint msg, IntPtr w, IntPtr l);
          }
"@
        [WinClose]::SendMessage([IntPtr]::new(${this.handle}), 0x0010, [IntPtr]::Zero, [IntPtr]::Zero) | Out-Null
      `);
    }
    // Clean up child processes
    powershell(`
      Start-Sleep -Seconds 2
      Get-Process -Name claude -ErrorAction SilentlyContinue |
        Where-Object { $_.Path -match '${MSIX_EXE_PATTERN}' } |
        Stop-Process -Force -ErrorAction SilentlyContinue
    `, 15_000);
    this.process = null;
  }

  screenshot(outputPath: string): string {
    this.requireHandle();
    const absPath = resolve(outputPath);
    // PrintWindow captures the window's own content regardless of Z-order.
    // No need to bring to foreground. Works while minimized (after restore-behind).
    powershell(`
      Add-Type -AssemblyName System.Drawing
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class WinShot {
          [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
          [DllImport("user32.dll")] public static extern bool PrintWindow(IntPtr h, IntPtr hdc, uint flags);
          [StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left, Top, Right, Bottom; }
        }
"@
      $rect = New-Object WinShot+RECT
      [WinShot]::GetWindowRect([IntPtr]::new(${this.handle}), [ref]$rect) | Out-Null
      $w = $rect.Right - $rect.Left; $h = $rect.Bottom - $rect.Top
      $dir = Split-Path '${absPath}' -Parent
      if ($dir) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
      $bmp = New-Object System.Drawing.Bitmap($w, $h)
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $hdc = $g.GetHdc()
      [WinShot]::PrintWindow([IntPtr]::new(${this.handle}), $hdc, 2) | Out-Null
      $g.ReleaseHdc($hdc)
      $bmp.Save('${absPath}')
      $g.Dispose(); $bmp.Dispose()
    `, 15_000);
    return absPath;
  }

  waitForWindow(timeoutMs = 30_000): boolean {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      if (this.find()) return true;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
    }
    return false;
  }

  waitForUia(timeoutMs = 20_000): boolean {
    this.requireHandle();
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      const count = powershell(`
        Add-Type -AssemblyName UIAutomationClient
        Add-Type -AssemblyName UIAutomationTypes
        $uia = [System.Windows.Automation.AutomationElement]
        $window = $uia::FromHandle([IntPtr]::new(${this.handle}))
        $cond = New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Document)
        $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond).Count
      `, 10_000);
      if (parseInt(count, 10) > 0) return true;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000);
    }
    return false;
  }

  private sleep(ms: number): void {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

  // Bring the window forward using the Alt-key trick: Windows grants foreground
  // rights to a process that just synthesized input, so without the keybd_event
  // SetForegroundWindow is silently ignored and the steal loses the race.
  private bringToForegroundOnce(maximizeWindow: boolean): void {
    this.requireHandle();
    const show = maximizeWindow ? 3 : 9; // 3 = SW_MAXIMIZE, 9 = SW_RESTORE
    powershell(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class WinFg {
          [DllImport("user32.dll")] public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);
          [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
          [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
        }
"@
      [WinFg]::keybd_event(0x12, 0, 0, [UIntPtr]::Zero)
      [WinFg]::keybd_event(0x12, 0, 2, [UIntPtr]::Zero)
      [WinFg]::ShowWindow([IntPtr]::new(${this.handle}), ${show}) | Out-Null
      [WinFg]::SetForegroundWindow([IntPtr]::new(${this.handle})) | Out-Null
    `);
  }

  private requireHandle(): void {
    if (!this.handle) {
      throw new Error('No window handle. Call find() or execute() first.');
    }
  }
}
