$root = "c:\Source\dna-platform\inexplicable-phenomena\.claude"
$lib = "$root\library"

# Create library/
New-Item -ItemType Directory -Path $lib -Force | Out-Null
Write-Output "Created .claude/library/"

# Move library content from agents/library/
$agentsLib = "$root\agents\library"
Get-ChildItem $agentsLib | ForEach-Object {
    Move-Item $_.FullName "$lib\$($_.Name)" -Force
    Write-Output "Moved: $($_.Name)"
}
Remove-Item $agentsLib -Force

# Now rename catalogues to new dot convention and named agent libraries

# ..librarianship stays (already double-dot)
# But we need to verify it exists at the right level
Write-Output ""
Write-Output "Renaming catalogues..."

# .librarianship -> ..librarianship (add second dot)
if ((Test-Path "$lib\.librarianship") -and -not (Test-Path "$lib\..librarianship")) {
    Rename-Item "$lib\.librarianship" "..librarianship"
    Write-Output "  .librarianship -> ..librarianship"
}

# protocols -> .protocols
if (Test-Path "$lib\protocols") {
    Rename-Item "$lib\protocols" ".protocols"
    Write-Output "  protocols -> .protocols"
}

# projects -> .projects
if (Test-Path "$lib\projects") {
    Rename-Item "$lib\projects" ".projects"
    Write-Output "  projects -> .projects"
}

# team -> .team (the team catalogue book, not the agent team dir)
if (Test-Path "$lib\team") {
    Rename-Item "$lib\team" ".team-catalogue"
    Write-Output "  team -> .team-catalogue (temporary, will merge with .team)"
}

# Rename agent libraries from ..team/{name} to named libraries
Write-Output ""
Write-Output "Renaming agent libraries..."

$agentNames = @{
    'arthur' = '.the-shape-of-everything'
    'cathy' = '.the-reactive-canvas'
    'libby' = '.the-tended-garden'
    'adam' = '.between-the-wires'
    'david' = '.the-devops-journal'
    'phillip' = '.the-visible-layer'
    'queenie' = '.the-specification'
    'gabby' = '.the-visual-voice'
}

$oldTeam = "$lib\..team"
if (Test-Path $oldTeam) {
    foreach ($agent in $agentNames.Keys) {
        $src = "$oldTeam\$agent"
        $dst = "$lib\$($agentNames[$agent])"
        if (Test-Path $src) {
            Move-Item $src $dst -Force
            Write-Output "  ..team/$agent -> $($agentNames[$agent])"
        }
    }
    # Remove ..team if empty
    $remaining = Get-ChildItem $oldTeam -ErrorAction SilentlyContinue
    if (-not $remaining) {
        Remove-Item $oldTeam -Force
        Write-Output "  Removed empty ..team/"
    } else {
        Write-Output "  ..team/ still has: $($remaining.Name -join ', ')"
    }
}

# Move team infrastructure (agents/team/, agents/roles/, agents/abilities/)
Write-Output ""
Write-Output "Moving team infrastructure..."

$teamDir = "$lib\.team"
New-Item -ItemType Directory -Path $teamDir -Force | Out-Null

# agents/team/ -> .team/ (agent files + registry)
if (Test-Path "$root\agents\team") {
    Get-ChildItem "$root\agents\team" | ForEach-Object {
        Move-Item $_.FullName "$teamDir\$($_.Name)" -Force
    }
    Remove-Item "$root\agents\team" -Force
    Write-Output "  agents/team/ -> library/.team/"
}

# agents/roles/ -> .team/roles/
if (Test-Path "$root\agents\roles") {
    Move-Item "$root\agents\roles" "$teamDir\roles" -Force
    Write-Output "  agents/roles/ -> library/.team/roles/"
}

# agents/abilities/ -> .team/abilities/
if (Test-Path "$root\agents\abilities") {
    Move-Item "$root\agents\abilities" "$teamDir\abilities" -Force
    Write-Output "  agents/abilities/ -> library/.team/abilities/"
}

# Move docs -> .chemistry/
if (Test-Path "$root\agents\docs") {
    Move-Item "$root\agents\docs" "$lib\.chemistry" -Force
    Write-Output "  agents/docs/ -> library/.chemistry/"
}

# Move perspective into library
if (Test-Path "$root\agents\perspective") {
    Move-Item "$root\agents\perspective" "$lib\.perspective" -Force
    Write-Output "  agents/perspective/ -> library/.perspective/"
}

# Move src (scripts)
if (Test-Path "$root\agents\src") {
    Move-Item "$root\agents\src" "$lib\.src" -Force
    Write-Output "  agents/src/ -> library/.src/"
}

# Move projects into library
if (Test-Path "$root\projects") {
    Move-Item "$root\projects" "$lib\.projects-plans" -Force
    Write-Output "  projects/ -> library/.projects-plans/ (will merge with .projects)"
}

# Clean up empty agents/
if (Test-Path "$root\agents") {
    $remaining = Get-ChildItem "$root\agents" -Name -ErrorAction SilentlyContinue
    if ($remaining) {
        Write-Output ""
        Write-Output "Remaining in agents/: $($remaining -join ', ')"
    } else {
        Remove-Item "$root\agents" -Force
        Write-Output "Removed empty agents/"
    }
}

Write-Output ""
Write-Output "=== Final .claude/ structure ==="
Get-ChildItem $root -Name

Write-Output ""
Write-Output "=== .claude/library/ ==="
Get-ChildItem $lib -Name

Write-Output ""
$total = (Get-ChildItem $lib -Recurse -File -ErrorAction SilentlyContinue).Count
Write-Output "Total files in library/: $total"
