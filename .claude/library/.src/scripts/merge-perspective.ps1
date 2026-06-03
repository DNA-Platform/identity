$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$standalone = "$lib\.perspective"

$agentMap = @{
    'arthur' = '.everything-that-has-a-shape'
    'cathy' = '.the-canvas-paints-itself'
    'libby' = '.the-garden-tends-itself'
    'adam' = '.what-the-wire-carries'
    'david' = '.what-the-pipeline-delivers'
    'phillip' = '.what-the-user-sees'
    'queenie' = '.what-428-tests-promise'
    'gabby' = '.what-beauty-serves'
}

foreach ($agent in $agentMap.Keys) {
    $srcDir = "$standalone\$agent"
    $agentLib = "$lib\$($agentMap[$agent])"
    $destDir = "$agentLib\perspective"

    if (Test-Path $srcDir) {
        $fileCount = (Get-ChildItem $srcDir -File -ErrorAction SilentlyContinue).Count
        if ($fileCount -gt 0) {
            # Ensure destination exists
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
            # Copy files (merge with existing)
            Get-ChildItem $srcDir -File | ForEach-Object {
                Copy-Item $_.FullName "$destDir\$($_.Name)" -Force
            }
            Write-Output "${agent}: merged $fileCount files into perspective/"
        } else {
            Write-Output "${agent}: empty, skipped"
        }
    }
}

# Also merge any existing .perspective books from agent libraries
foreach ($agent in $agentMap.Keys) {
    $agentLib = "$lib\$($agentMap[$agent])"
    $oldPersp = "$agentLib\.perspective"
    $newPersp = "$agentLib\perspective"

    if ((Test-Path $oldPersp) -and ($oldPersp -ne $newPersp)) {
        Get-ChildItem $oldPersp -File | ForEach-Object {
            New-Item -ItemType Directory -Path $newPersp -Force | Out-Null
            Copy-Item $_.FullName "$newPersp\$($_.Name)" -Force
        }
        Remove-Item $oldPersp -Recurse -Force
        Write-Output "${agent}: merged .perspective/ -> perspective/"
    }
}

# Remove standalone .perspective/
Remove-Item $standalone -Recurse -Force
Write-Output ""
Write-Output "Removed standalone .perspective/"
