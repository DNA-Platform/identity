// Throwaway script: click Projects in the sidebar, take a screenshot.
// Usage: npx tsx src/scripts/explore-projects.ts

import { powershell } from '../shell.ts';

// Find the window
const proc = powershell(`
  Get-Process -Name claude -ErrorAction SilentlyContinue |
    Where-Object { $_.Path -match 'WindowsApps' -and $_.MainWindowHandle -ne 0 } |
    Select-Object -First 1 |
    ForEach-Object { "$($_.Id)|$($_.MainWindowHandle)" }
`);

if (!proc) {
  console.error('Claude not running');
  process.exit(1);
}

const [pid, handle] = proc.split('|');
console.log(`Window: PID=${pid} Handle=${handle}`);

// Use UIA to find and click the "Projects" element
console.log('Looking for Projects button via UIA...');
const clickResult = powershell(`
  Add-Type -AssemblyName UIAutomationClient
  Add-Type -AssemblyName UIAutomationTypes
  $uia = [System.Windows.Automation.AutomationElement]
  $window = $uia::FromHandle([IntPtr]::new(${handle}))

  # Find element with Name "Projects"
  $nameCond = New-Object System.Windows.Automation.PropertyCondition(
    $uia::NameProperty, 'Projects'
  )
  $el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $nameCond)

  if ($el) {
    Write-Host "Found: $($el.Current.ControlType.ProgrammaticName) Name='$($el.Current.Name)'"
    # Try InvokePattern (for buttons/links)
    $invoke = $null
    if ($el.TryGetCurrentPattern([System.Windows.Automation.InvokePattern]::Pattern, [ref]$invoke)) {
      $invoke.Invoke()
      Write-Host "Clicked via InvokePattern"
    } else {
      Write-Host "No InvokePattern — trying click at bounds"
      $rect = $el.Current.BoundingRectangle
      $x = [int]($rect.X + $rect.Width / 2)
      $y = [int]($rect.Y + $rect.Height / 2)
      Write-Host "Clicking at ($x, $y)"
      Add-Type -AssemblyName System.Windows.Forms
      [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point($x, $y)
      Start-Sleep -Milliseconds 100
      Add-Type @"
        using System; using System.Runtime.InteropServices;
        public class Click {
          [DllImport("user32.dll")] public static extern void mouse_event(uint f, uint x, uint y, uint d, int e);
        }
"@
      [Click]::mouse_event(0x02, 0, 0, 0, 0)
      [Click]::mouse_event(0x04, 0, 0, 0, 0)
      Write-Host "Clicked via coordinates"
    }
  } else {
    Write-Host "Projects element not found in UIA tree"
  }
`, 15000);

console.log(clickResult);

// Wait for the page to change
await new Promise(r => setTimeout(r, 2000));

// Take screenshot
console.log('Taking screenshot...');
powershell(`
  Add-Type -AssemblyName System.Drawing
  Add-Type @"
    using System; using System.Runtime.InteropServices;
    public class ShotP {
      [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
      [DllImport("user32.dll")] public static extern bool PrintWindow(IntPtr h, IntPtr hdc, uint flags);
      [StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left, Top, Right, Bottom; }
    }
"@
  $rect = New-Object ShotP+RECT
  [ShotP]::GetWindowRect([IntPtr]::new(${handle}), [ref]$rect) | Out-Null
  $w = $rect.Right - $rect.Left; $h = $rect.Bottom - $rect.Top
  $path = "C:\\Source\\dna-platform\\dna-library\\.claude\\agents\\library\\.team\\claude\\.perspective\\04-2026-05-10-projects-page.png"
  $bmp = New-Object System.Drawing.Bitmap($w, $h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $hdc = $g.GetHdc()
  [ShotP]::PrintWindow([IntPtr]::new(${handle}), $hdc, 2) | Out-Null
  $g.ReleaseHdc($hdc)
  $bmp.Save($path)
  $g.Dispose(); $bmp.Dispose()
  Write-Host "Screenshot: $path"
`, 15000);

console.log('Done.');
