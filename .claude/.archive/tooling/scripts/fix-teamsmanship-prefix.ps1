$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$claude = "c:\Source\dna-platform\inexplicable-phenomena\.claude"
$root = "c:\Source\dna-platform\inexplicable-phenomena"
$changed = 0

# Fix all .md files in library/
Get-ChildItem -Path $lib -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content
    $content = $content -replace '\.\.teamsmanship/', '.teamsmanship/'
    # Don't fix ...teamsmanship (triple dot from overzealous replacement)
    $content = $content -replace '\.\.\.teamsmanship/', '.teamsmanship/'
    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changed++
    }
}

# Fix agents/, rules/, skills/
Get-ChildItem -Path $claude -Recurse -Filter "*.md" -Exclude "library" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content
    $content = $content -replace '\.\.teamsmanship/', '.teamsmanship/'
    $content = $content -replace '\.\.\.teamsmanship/', '.teamsmanship/'
    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changed++
    }
}

# Fix CLAUDE.md
$claudeMd = "$root\CLAUDE.md"
if (Test-Path $claudeMd) {
    $content = Get-Content $claudeMd -Raw
    $original = $content
    $content = $content -replace '\.\.teamsmanship/', '.teamsmanship/'
    if ($content -ne $original) {
        Set-Content -Path $claudeMd -Value $content -NoNewline
        $changed++
    }
}

Write-Output "Files changed: $changed"
