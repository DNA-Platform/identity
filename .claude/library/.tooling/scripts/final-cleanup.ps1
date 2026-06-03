$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"

# Remove .protocols/ - its only content is .cover.md, books already at root
Write-Output "Removing .protocols/ (books already at root)..."
Remove-Item "$lib\.protocols" -Recurse -Force -ErrorAction SilentlyContinue
Write-Output "  Done"

# Remove .projects/ - its only content is .cover.md, books already at root
Write-Output "Removing .projects/ (books already at root)..."
Remove-Item "$lib\.projects" -Recurse -Force -ErrorAction SilentlyContinue
Write-Output "  Done"

# Rename .src/ to something better - these are utility scripts
# The validators should be chapter resources (already 01-anatomy-of-a-book.ts exists in ..librarianship)
# The migration/restructure scripts are temporary artifacts
# Keep it but rename to indicate it's tooling, not library knowledge
Write-Output ""
Write-Output "Renaming .src/ -> .tooling/..."
if (Test-Path "$lib\.src") {
    Rename-Item "$lib\.src" ".tooling"
    Write-Output "  Done"
}

# Move roles/ and abilities/ into ..teamsmanship/ if not already there
if (Test-Path "$lib\..teamsmanship\roles") {
    Write-Output "roles/ already in ..teamsmanship/"
} elseif (Test-Path "$lib\roles") {
    Move-Item "$lib\roles" "$lib\..teamsmanship\roles" -Force
    Write-Output "Moved roles/ into ..teamsmanship/"
}

if (Test-Path "$lib\..teamsmanship\abilities") {
    Write-Output "abilities/ already in ..teamsmanship/"
} elseif (Test-Path "$lib\abilities") {
    Move-Item "$lib\abilities" "$lib\..teamsmanship\abilities" -Force
    Write-Output "Moved abilities/ into ..teamsmanship/"
}

Write-Output ""
Write-Output "=== Final library root ==="
Get-ChildItem $lib -Name
