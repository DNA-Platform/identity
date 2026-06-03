$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"

# Step 1: Rename .team to ..teamsmanship
Write-Output "Renaming .team -> ..teamsmanship..."
if (Test-Path "$lib\.team") {
    Rename-Item "$lib\.team" "..teamsmanship"
    Write-Output "  Done"
}

# Step 2: Move agent libraries from library root INTO ..teamsmanship/{agent}/
Write-Output ""
Write-Output "Moving agent libraries into ..teamsmanship/..."

$agentMap = @{
    '.everything-that-has-a-shape' = 'arthur'
    '.the-canvas-paints-itself' = 'cathy'
    '.the-garden-tends-itself' = 'libby'
    '.what-the-wire-carries' = 'adam'
    '.what-the-pipeline-delivers' = 'david'
    '.what-the-user-sees' = 'phillip'
    '.what-428-tests-promise' = 'queenie'
    '.what-beauty-serves' = 'gabby'
}

foreach ($libName in $agentMap.Keys) {
    $agent = $agentMap[$libName]
    $src = "$lib\$libName"
    $agentDir = "$lib\..teamsmanship\$agent"

    if (Test-Path $src) {
        # Ensure agent directory exists in ..teamsmanship
        if (-not (Test-Path $agentDir)) {
            New-Item -ItemType Directory -Path $agentDir -Force | Out-Null
        }
        # Move the library catalogue directory
        Move-Item $src "$agentDir\$libName" -Force
        Write-Output "  $libName -> ..teamsmanship/$agent/$libName"

        # Also move any books that were flat alongside the catalogue
        # (autobiography, perspective, etc. are already inside the catalogue dir)
    }
}

# Step 3: Rename .what-428-tests-promise -> .what-the-tests-promise
$oldName = "$lib\..teamsmanship\queenie\.what-428-tests-promise"
$newName = "$lib\..teamsmanship\queenie\.what-the-tests-promise"
if (Test-Path $oldName) {
    Rename-Item $oldName ".what-the-tests-promise"
    Write-Output ""
    Write-Output "Renamed .what-428-tests-promise -> .what-the-tests-promise"
}

# Step 4: Move protocol files out of .protocols/ to library root as book directories
Write-Output ""
Write-Output "Moving protocol files to book directories..."
$protocols = "$lib\.protocols"
if (Test-Path $protocols) {
    Get-ChildItem $protocols -Filter "*.md" | Where-Object { $_.Name -ne '.cover.md' } | ForEach-Object {
        $baseName = $_.BaseName -replace '^\d+-', ''  # Remove number prefix
        $bookDir = "$lib\$baseName"
        New-Item -ItemType Directory -Path $bookDir -Force | Out-Null
        # The file becomes a chapter; we need a .cover.md for the book
        Copy-Item $_.FullName "$bookDir\01-$($_.Name)" -Force
        Write-Output "  $($_.Name) -> $baseName/01-$($_.Name)"
    }
    # Keep .protocols as a subject catalogue with just its .cover.md
    Get-ChildItem $protocols -Filter "*.md" | Where-Object { $_.Name -ne '.cover.md' } | ForEach-Object {
        Remove-Item $_.FullName -Force
    }
    Write-Output "  .protocols/ now contains only .cover.md"
}

Write-Output ""
Write-Output "=== New library root ==="
Get-ChildItem $lib -Name

Write-Output ""
Write-Output "=== ..teamsmanship/ ==="
Get-ChildItem "$lib\..teamsmanship" -Name
