Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap(100, 100)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.FillRectangle([System.Drawing.Brushes]::Red, 0, 0, 100, 100)
$g.DrawString('TEST', (New-Object System.Drawing.Font('Arial', 14)), [System.Drawing.Brushes]::White, 20, 35)
$g.Dispose()
$bmp.Save("$PSScriptRoot\test-image.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Created test-image.png"
