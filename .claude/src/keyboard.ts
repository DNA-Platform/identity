// Keyboard — input simulation via PowerShell.
// Types text, presses keys, clicks at window-relative positions, reads clipboard.
// Every method that sends input focuses the Claude window first.

import type { Window } from './window.ts';
import type { Shell } from './shell.ts';

export class Keyboard {
  constructor(private readonly window: Window, private readonly shell: Shell) {}

  private get handle(): number {
    const h = this.window.handle;
    if (!h) throw new Error('No window handle. Launch the app first.');
    return h;
  }

  private async focus(): Promise<void> {
    await this.shell.run(`
      if (-not ([System.Management.Automation.PSTypeName]'FocusHelper').Type) {
        Add-Type @'
          using System; using System.Runtime.InteropServices;
          public class FocusHelper {
            [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr h);
            [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr h, int n);
          }
'@
      }
      [FocusHelper]::ShowWindow([IntPtr]::new(${this.handle}), 3) | Out-Null
      [FocusHelper]::SetForegroundWindow([IntPtr]::new(${this.handle})) | Out-Null
    `);
  }

  async typeViaClipboard(text: string): Promise<void> {
    await this.focus();
    const b64 = Buffer.from(text, 'utf-8').toString('base64');
    await this.shell.run(`
      Add-Type -AssemblyName System.Windows.Forms
      $bytes = [System.Convert]::FromBase64String('${b64}')
      $text = [System.Text.Encoding]::UTF8.GetString($bytes)
      [System.Windows.Forms.Clipboard]::SetText($text)
      [System.Windows.Forms.SendKeys]::SendWait('^v')
    `);
  }

  async pressEnter(): Promise<void> {
    await this.sendKeys('{ENTER}');
  }

  async sendKeys(keys: string): Promise<void> {
    await this.focus();
    await this.shell.run(`
      Add-Type -AssemblyName System.Windows.Forms
      [System.Windows.Forms.SendKeys]::SendWait('${keys}')
    `);
  }

  async clickAt(xFraction: number, yFromBottom: number): Promise<void> {
    await this.focus();
    await this.shell.run(`
      Add-Type -AssemblyName System.Windows.Forms
      if (-not ([System.Management.Automation.PSTypeName]'ClickHelper').Type) {
        Add-Type @'
          using System; using System.Runtime.InteropServices;
          public class ClickHelper {
            [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
            [DllImport("user32.dll")] public static extern void mouse_event(uint f, uint x, uint y, uint d, int e);
            public const uint DOWN = 0x02; public const uint UP = 0x04;
            [StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left, Top, Right, Bottom; }
          }
'@
      }
      $rect = New-Object ClickHelper+RECT
      [ClickHelper]::GetWindowRect([IntPtr]::new(${this.handle}), [ref]$rect) | Out-Null
      $w = $rect.Right - $rect.Left
      $x = $rect.Left + [int]($w * ${xFraction})
      $y = $rect.Bottom - ${yFromBottom}
      [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point($x, $y)
      [ClickHelper]::mouse_event([ClickHelper]::DOWN, 0, 0, 0, 0)
      [ClickHelper]::mouse_event([ClickHelper]::UP, 0, 0, 0, 0)
    `);
  }

  async readClipboard(): Promise<string> {
    return this.shell.run(`
      Add-Type -AssemblyName System.Windows.Forms
      [System.Windows.Forms.Clipboard]::GetText()
    `);
  }

  async copyImageToClipboard(imagePath: string): Promise<void> {
    const escaped = imagePath.replace(/'/g, "''");
    await this.shell.run(`
      Add-Type -AssemblyName System.Windows.Forms
      Add-Type -AssemblyName System.Drawing
      $img = [System.Drawing.Image]::FromFile('${escaped}')
      [System.Windows.Forms.Clipboard]::SetImage($img)
      $img.Dispose()
    `);
  }

  async copyFileToClipboard(filePath: string): Promise<void> {
    const escaped = filePath.replace(/'/g, "''");
    await this.shell.run(`
      Add-Type -AssemblyName System.Windows.Forms
      $files = New-Object System.Collections.Specialized.StringCollection
      $files.Add('${escaped}')
      [System.Windows.Forms.Clipboard]::SetFileDropList($files)
    `);
  }

  async selectAll(): Promise<void> {
    await this.sendKeys('^a');
  }

  async delete(): Promise<void> {
    await this.sendKeys('{DELETE}');
  }
}
