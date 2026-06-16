// FileDialog — the native Windows Open file dialog.
// Appears both as a top-level window and as a child of Electron apps.
// Has a filename field and Open/Cancel buttons.

import type { Gateway } from '../gateway.ts';
import type { Shell } from '../shell.ts';
import type { Window } from '../window.ts';

export class FileDialog {
  isOpen = false;
  path = '';

  constructor(
    private readonly gateway: Gateway,
    private readonly shell: Shell,
    private readonly window?: Window,
  ) {}

  async detect(): Promise<void> {
    const handle = this.window?.handle;
    const result = await this.shell.run(`
      Add-Type -AssemblyName UIAutomationClient
      $uia = [System.Windows.Automation.AutomationElement]
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::NameProperty, 'Open')
      $d = $uia::RootElement.FindFirst([System.Windows.Automation.TreeScope]::Children, $cond)
      if ($d) { 'open'; return }
      ${handle ? `
      $hwnd = [IntPtr]::new(${handle})
      $win = $uia::FromHandle($hwnd)
      if ($win) {
        $d2 = $win.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
        if ($d2) { 'open'; return }
      }` : ''}
      'closed'
    `, 5000);
    this.isOpen = result?.trim() === 'open';
  }

  async waitUntilOpen(timeoutMs = 10000): Promise<boolean> {
    return this.gateway.waitFor(
      async () => {
        await this.detect();
        return this.isOpen;
      },
      { timeoutMs },
    );
  }

  async typePath(filePath: string): Promise<void> {
    if (!this.isOpen) throw new Error('File dialog is not open');
    this.path = filePath;
    const escaped = filePath.replace(/'/g, "''");
    const handle = this.window?.handle;
    await this.shell.run(`
      Add-Type -AssemblyName UIAutomationClient
      Add-Type -AssemblyName System.Windows.Forms
      $uia = [System.Windows.Automation.AutomationElement]
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::NameProperty, 'Open')
      $dialog = $uia::RootElement.FindFirst([System.Windows.Automation.TreeScope]::Children, $cond)
      ${handle ? `
      if (-not $dialog) {
        $hwnd = [IntPtr]::new(${handle})
        $win = $uia::FromHandle($hwnd)
        if ($win) {
          $dialog = $win.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
        }
      }` : ''}
      if ($dialog) {
        $dialog.SetFocus()
        [System.Windows.Forms.Clipboard]::SetText('${escaped}')
        [System.Windows.Forms.SendKeys]::SendWait('^v')
      }
    `, 10000);
  }

  async submit(): Promise<void> {
    if (!this.isOpen) throw new Error('File dialog is not open');

    await this.gateway.act(
      async () => {
        await this.shell.run(`
          Add-Type -AssemblyName System.Windows.Forms
          [System.Windows.Forms.SendKeys]::SendWait('{ENTER}')
        `, 5000);
      },
      async () => {
        await this.detect();
        return !this.isOpen;
      },
      { description: 'Submit file dialog', timeoutMs: 10_000, retries: 1 },
    );
  }

  async cancel(): Promise<void> {
    await this.detect();
    if (!this.isOpen) return;

    const handle = this.window?.handle;
    await this.gateway.act(
      async () => {
        await this.shell.run(`
          Add-Type -AssemblyName UIAutomationClient
          Add-Type -AssemblyName System.Windows.Forms
          $uia = [System.Windows.Automation.AutomationElement]
          $cond = New-Object System.Windows.Automation.PropertyCondition(
            $uia::NameProperty, 'Open')
          $dialog = $uia::RootElement.FindFirst([System.Windows.Automation.TreeScope]::Children, $cond)
          ${handle ? `
          if (-not $dialog) {
            $hwnd = [IntPtr]::new(${handle})
            $win = $uia::FromHandle($hwnd)
            if ($win) {
              $dialog = $win.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
            }
          }` : ''}
          if ($dialog) {
            $dialog.SetFocus()
            [System.Windows.Forms.SendKeys]::SendWait('{ESCAPE}')
          }
        `, 5000);
      },
      async () => {
        await this.detect();
        return !this.isOpen;
      },
      { description: 'Cancel file dialog', timeoutMs: 5_000, retries: 2 },
    );

    this.path = '';
  }
}
