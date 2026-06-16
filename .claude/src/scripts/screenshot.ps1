# screenshot.ps1 — take a PrintWindow screenshot of the Claude MSIX app
# Usage: powershell -ExecutionPolicy Bypass -File src/scripts/screenshot.ps1 -Name "filename"

param([string]$Name = "screenshot")

Add-Type -AssemblyName System.Drawing
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class ScreenshotHelper {
    [DllImport("user32.dll")] public static extern bool GetWindowRect(IntPtr h, out RECT r);
    [DllImport("user32.dll")] public static extern bool PrintWindow(IntPtr h, IntPtr hdc, uint flags);
    [StructLayout(LayoutKind.Sequential)] public struct RECT { public int Left, Top, Right, Bottom; }
}
"@

$proc = Get-Process -Name claude -ErrorAction SilentlyContinue |
    Where-Object { $_.Path -match 'WindowsApps' -and $_.MainWindowHandle -ne 0 } |
    Select-Object -First 1

if (-not $proc) { Write-Error "No Claude window found"; exit 1 }

$hwnd = $proc.MainWindowHandle
$rect = New-Object ScreenshotHelper+RECT
[ScreenshotHelper]::GetWindowRect($hwnd, [ref]$rect) | Out-Null
$w = $rect.Right - $rect.Left
$h = $rect.Bottom - $rect.Top

$path = Join-Path $PSScriptRoot "..\..\library\.team\claude\.perspective\$Name.png"
$dir = Split-Path $path -Parent
New-Item -ItemType Directory -Path $dir -Force -ErrorAction SilentlyContinue | Out-Null

$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$hdc = $g.GetHdc()
[ScreenshotHelper]::PrintWindow($hwnd, $hdc, 2) | Out-Null
$g.ReleaseHdc($hdc)
$fullPath = if (Test-Path $path) { (Resolve-Path $path).Path } else { [System.IO.Path]::GetFullPath($path) }
$bmp.Save($fullPath)
$g.Dispose(); $bmp.Dispose()

Write-Host "Saved: $Name.png (${w}x${h})"
