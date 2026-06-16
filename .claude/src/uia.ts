// UIA — UI Automation primitives via PowerShell.
// All interaction goes through UIA on the specific window handle.
// No focus stealing, no keyboard simulation, no effect on the visible desktop.

import type { Window } from './window.ts';
import type { Shell } from './shell.ts';

const UIA_PREAMBLE = `
  Add-Type -AssemblyName UIAutomationClient
  Add-Type -AssemblyName UIAutomationTypes
  $uia = [System.Windows.Automation.AutomationElement]
`;

function windowSetup(handle: number): string {
  return `${UIA_PREAMBLE}\n  $window = $uia::FromHandle([IntPtr]::new(${handle}))`;
}

export class Uia {
  constructor(private readonly window: Window, private readonly shell: Shell) {}

  private get handle(): number {
    const h = this.window.handle;
    if (!h) throw new Error('No window handle. Launch the app first.');
    return h;
  }

  // --- Reading ---

  async readText(): Promise<string | null> {
    try {
      return await this.shell.run(`
        ${windowSetup(this.handle)}
        $docCondition = New-Object System.Windows.Automation.AndCondition(
          (New-Object System.Windows.Automation.PropertyCondition(
            $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Document)),
          (New-Object System.Windows.Automation.PropertyCondition(
            $uia::AutomationIdProperty, 'RootWebArea'))
        )
        $docs = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $docCondition)
        $mainDoc = $null
        foreach ($doc in $docs) {
          if ($doc.Current.Name -match 'Claude') { $mainDoc = $doc; break }
        }
        if (-not $mainDoc -and $docs.Count -gt 0) { $mainDoc = $docs[$docs.Count - 1] }
        if (-not $mainDoc) { exit 1 }
        $tp = $null
        if ($mainDoc.TryGetCurrentPattern([System.Windows.Automation.TextPattern]::Pattern, [ref]$tp)) {
          $tp.DocumentRange.GetText(-1)
        }
      `, 15_000);
    } catch {
      return null;
    }
  }

  async readUrl(): Promise<string | null> {
    try {
      return await this.shell.run(`
        ${windowSetup(this.handle)}
        $docCondition = New-Object System.Windows.Automation.AndCondition(
          (New-Object System.Windows.Automation.PropertyCondition(
            $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Document)),
          (New-Object System.Windows.Automation.PropertyCondition(
            $uia::AutomationIdProperty, 'RootWebArea'))
        )
        $docs = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $docCondition)
        $mainDoc = $null
        foreach ($doc in $docs) {
          if ($doc.Current.Name -match 'Claude') { $mainDoc = $doc; break }
        }
        if (-not $mainDoc -and $docs.Count -gt 0) { $mainDoc = $docs[$docs.Count - 1] }
        if (-not $mainDoc) { exit 1 }
        $vp = $null
        if ($mainDoc.TryGetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern, [ref]$vp)) {
          $vp.Current.Value
        }
      `, 15_000);
    } catch {
      return null;
    }
  }

  async allNames(): Promise<string[]> {
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $all = $window.FindAll(
        [System.Windows.Automation.TreeScope]::Descendants,
        [System.Windows.Automation.Condition]::TrueCondition)
      foreach ($el in $all) {
        $n = $el.Current.Name
        $t = $el.Current.ControlType.ProgrammaticName
        if ($n) { Write-Output "$t | $n" }
      }
    `, 30_000);
    return result ? result.split('\n').map(s => s.trim()).filter(Boolean) : [];
  }

  async expandByName(name: string): Promise<boolean> {
    const escaped = name.replace(/'/g, "''");
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::NameProperty, '${escaped}')
      $el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
      if ($el) {
        $ep = $null
        if ($el.TryGetCurrentPattern([System.Windows.Automation.ExpandCollapsePattern]::Pattern, [ref]$ep)) {
          $ep.Expand()
          'true'
        } else { 'false' }
      } else { 'false' }
    `, 15_000);
    return result?.trim() === 'true';
  }

  async clickByName(name: string): Promise<boolean> {
    const escaped = name.replace(/'/g, "''");
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::NameProperty, '${escaped}')
      $el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
      if ($el) {
        $rect = $el.Current.BoundingRectangle
        if ($rect -and !$rect.IsEmpty) {
          $x = [int]($rect.X + $rect.Width / 2)
          $y = [int]($rect.Y + $rect.Height / 2)
          if (-not ([System.Management.Automation.PSTypeName]'UiaClickHelper').Type) {
            Add-Type -TypeDefinition @'
              using System;
              using System.Runtime.InteropServices;
              public class UiaClickHelper {
                [DllImport("user32.dll")] public static extern bool SetCursorPos(int X, int Y);
                [DllImport("user32.dll")] public static extern void mouse_event(uint dwFlags, int dx, int dy, uint dwData, UIntPtr dwExtraInfo);
              }
'@
          }
          [UiaClickHelper]::SetCursorPos($x, $y)
          [UiaClickHelper]::mouse_event(0x0002, 0, 0, 0, [UIntPtr]::Zero)
          [UiaClickHelper]::mouse_event(0x0004, 0, 0, 0, [UIntPtr]::Zero)
          'true'
        } else { 'false' }
      } else { 'false' }
    `, 15_000);
    return result?.trim() === 'true';
  }

  // --- Interaction ---

  async invoke(controlType: string, name: string): Promise<boolean> {
    const escaped = name.replace(/'/g, "''");
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.AndCondition(
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::${controlType})),
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::NameProperty, '${escaped}'))
      )
      $el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
      if ($el) {
        $ip = $null
        if ($el.TryGetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern, [ref]$ip)) {
          $ip.Invoke()
          'true'
        } else { 'false' }
      } else { 'false' }
    `, 15_000);
    return result === 'true';
  }

  async invokeByName(name: string): Promise<boolean> {
    const nameBase64 = Buffer.from(name, 'utf-8').toString('base64');
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $targetName = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String('${nameBase64}'))
      $invoked = $false
      foreach ($ct in @('Button', 'Hyperlink')) {
        $cond = New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::$ct)
        $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
        foreach ($el in $elements) {
          if ($el.Current.Name -eq $targetName -or $el.Current.Name.StartsWith($targetName)) {
            $ip = $null
            if ($el.TryGetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern, [ref]$ip)) {
              $ip.Invoke()
              $invoked = $true
              break
            }
          }
        }
        if ($invoked) { break }
      }
      if ($invoked) { 'true' } else { 'false' }
    `, 15_000);
    return result === 'true';
  }

  async invokeLink(name: string): Promise<boolean> {
    const nameBase64 = Buffer.from(name, 'utf-8').toString('base64');
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $targetName = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String('${nameBase64}'))
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Hyperlink)
      $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
      $invoked = $false
      foreach ($el in $elements) {
        if ($el.Current.Name -eq $targetName -or $el.Current.Name.StartsWith($targetName)) {
          $ip = $null
          if ($el.TryGetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern, [ref]$ip)) {
            $ip.Invoke()
            $invoked = $true
            break
          }
        }
      }
      if ($invoked) { 'true' } else { 'false' }
    `, 15_000);
    return result === 'true';
  }

  async invokeByNameLast(name: string): Promise<boolean> {
    // Like invokeByName but finds the LAST matching element, not the first.
    // Use when multiple elements share a name and the one you want is lower in the DOM.
    const nameBase64 = Buffer.from(name, 'utf-8').toString('base64');
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $targetName = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String('${nameBase64}'))
      $lastMatch = $null
      foreach ($ct in @('Button', 'Hyperlink')) {
        $cond = New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::$ct)
        $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
        foreach ($el in $elements) {
          if ($el.Current.Name -eq $targetName -or $el.Current.Name.StartsWith($targetName)) {
            $lastMatch = $el
          }
        }
      }
      if ($lastMatch) {
        $ip = $null
        if ($lastMatch.TryGetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern, [ref]$ip)) {
          $ip.Invoke()
          'true'
        } else { 'false' }
      } else { 'false' }
    `, 15_000);
    return result === 'true';
  }

  async setValue(name: string, value: string): Promise<boolean> {
    const escapedName = name.replace(/'/g, "''");
    const escapedValue = value.replace(/'/g, "''");
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::NameProperty, '${escapedName}')
      $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
      $set = $false
      foreach ($el in $elements) {
        $vp = $null
        if ($el.TryGetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern, [ref]$vp)) {
          $vp.SetValue('${escapedValue}')
          $set = $true
          break
        }
      }
      if ($set) { 'true' } else { 'false' }
    `, 15_000);
    return result === 'true';
  }

  // --- Querying ---

  async exists(controlType: string, name: string): Promise<boolean> {
    const escaped = name.replace(/'/g, "''");
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.AndCondition(
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::${controlType})),
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::NameProperty, '${escaped}'))
      )
      $el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
      if ($el) { 'true' } else { 'false' }
    `, 15_000);
    return result === 'true';
  }

  async existsByName(name: string): Promise<boolean> {
    const escaped = name.replace(/'/g, "''");
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::NameProperty, '${escaped}')
      $el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
      if ($el) { 'true' } else { 'false' }
    `, 15_000);
    return result === 'true';
  }

  async readValue(name: string): Promise<string | null> {
    const escaped = name.replace(/'/g, "''");
    try {
      const result = await this.shell.run(`
        ${windowSetup(this.handle)}
        $cond = New-Object System.Windows.Automation.PropertyCondition(
          $uia::NameProperty, '${escaped}')
        $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
        foreach ($el in $elements) {
          $vp = $null
          if ($el.TryGetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern, [ref]$vp)) {
            $vp.Current.Value
            break
          }
        }
      `, 15_000);
      return result?.trim() || null;
    } catch {
      return null;
    }
  }

  async countElements(controlType: string): Promise<number> {
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::${controlType})
      $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
      $elements.Count
    `, 15_000);
    return parseInt(result, 10) || 0;
  }

  async readListItems(): Promise<string[]> {
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::ListItem)
      $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
      foreach ($el in $elements) {
        $n = $el.Current.Name
        if ($n) { $n }
      }
    `, 30_000);
    if (!result) return [];
    return result.split('\n').map(l => l.replace(/\r$/, '')).filter(l => l.length > 0);
  }

  async findFileButtons(): Promise<string[]> {
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $docCondition = New-Object System.Windows.Automation.AndCondition(
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Document)),
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::AutomationIdProperty, 'RootWebArea'))
      )
      $docs = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $docCondition)
      $mainDoc = $null
      foreach ($doc in $docs) {
        if ($doc.Current.Name -match 'Claude') { $mainDoc = $doc; break }
      }
      if (-not $mainDoc -and $docs.Count -gt 0) { $mainDoc = $docs[$docs.Count - 1] }
      if (-not $mainDoc) { exit 1 }
      $listCond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::List)
      $lists = $mainDoc.FindAll([System.Windows.Automation.TreeScope]::Descendants, $listCond)
      foreach ($list in $lists) {
        $children = $list.FindAll([System.Windows.Automation.TreeScope]::Children,
          (New-Object System.Windows.Automation.PropertyCondition(
            $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Button)))
        $fileButtons = @()
        foreach ($btn in $children) {
          $n = $btn.Current.Name
          if ($n -and $n -ne 'Remove' -and $n -match ',\\s*\\w+,\\s*[\\d,]+ lines') {
            $fileButtons += $n
          }
        }
        if ($fileButtons.Count -gt 0) {
          foreach ($f in $fileButtons) { Write-Output $f }
          break
        }
      }
    `, 30_000);
    if (!result) return [];
    return result.split('\n').map(l => l.replace(/\r$/, '')).filter(l => l.length > 0);
  }

  async findAllNames(controlType: string): Promise<string[]> {
    const result = await this.shell.run(`
      ${windowSetup(this.handle)}
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::${controlType})
      $elements = $window.FindAll([System.Windows.Automation.TreeScope]::Descendants, $cond)
      foreach ($el in $elements) {
        $el.Current.Name
      }
    `, 15_000);
    if (!result) return [];
    return result.split('\n').map(l => l.replace(/\r$/, '')).filter(l => l.length > 0);
  }
}
