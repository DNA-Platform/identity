# create-shortcut.ps1
# Creates the "Claude Dev.lnk" shortcut with --force-renderer-accessibility.
# Run when Claude's MSIX version updates and the exe path changes.
# Usage: powershell -ExecutionPolicy Bypass -File src/tools/create-shortcut.ps1

$pkg = Get-AppxPackage -Name Claude -ErrorAction SilentlyContinue
if (-not $pkg) { Write-Error "Claude is not installed."; exit 1 }

$exe = Join-Path $pkg.InstallLocation 'app\claude.exe'
if (-not (Test-Path $exe)) { Write-Error "Claude exe not found at: $exe"; exit 1 }

$Shell = New-Object -ComObject WScript.Shell
$lnk = $Shell.CreateShortcut("$PSScriptRoot\..\Claude Dev.lnk")
$lnk.TargetPath = $exe
$lnk.Arguments = "--force-renderer-accessibility"
$lnk.WorkingDirectory = Split-Path $exe
$lnk.IconLocation = "$exe,0"
$lnk.Save()

Write-Host "Created: src/Claude Dev.lnk"
Write-Host "Target: $exe"
Write-Host "Arguments: --force-renderer-accessibility"
