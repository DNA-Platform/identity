// Window — the OS window that Claude runs in.
// See: library/windows-automation/

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
    powershell(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class WinState {
          [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
          [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
        }
"@
      [WinState]::ShowWindow([IntPtr]::new(${this.handle}), 3) | Out-Null
      [WinState]::SetForegroundWindow([IntPtr]::new(${this.handle})) | Out-Null
    `);
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

  requireForeground(): void {
    if (!this.isForeground()) {
      this.focus();
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
      if (!this.isForeground()) {
        throw new Error('Claude window is not the foreground window. Cannot proceed safely.');
      }
    }
  }

  maximize(): void {
    this.requireHandle();
    powershell(`
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class WinState2 {
          [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
          [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
        }
"@
      [WinState2]::ShowWindow([IntPtr]::new(${this.handle}), 9) | Out-Null
      [WinState2]::SetForegroundWindow([IntPtr]::new(${this.handle})) | Out-Null
      [WinState2]::ShowWindow([IntPtr]::new(${this.handle}), 3) | Out-Null
    `);
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

  private requireHandle(): void {
    if (!this.handle) {
      throw new Error('No window handle. Call find() or execute() first.');
    }
  }
}
