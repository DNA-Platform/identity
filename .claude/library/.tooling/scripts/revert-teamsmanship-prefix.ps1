$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$claude = "c:\Source\dna-platform\inexplicable-phenomena\.claude"
$root = "c:\Source\dna-platform\inexplicable-phenomena"
$changed = 0

# Revert .teamsmanship -> ..teamsmanship in all files
$allPaths = @($lib, $claude, $root)
foreach ($basePath in $allPaths) {
    $filter = if ($basePath -eq $root) { "CLAUDE.md" } else { "*.md" }
    $files = if ($basePath -eq $root) {
        Get-Item "$root\CLAUDE.md" -ErrorAction SilentlyContinue
    } else {
        Get-ChildItem -Path $basePath -Recurse -Filter "*.md"
    }
    foreach ($f in $files) {
        if (-not $f) { continue }
        $content = Get-Content $f.FullName -Raw -ErrorAction SilentlyContinue
        if (-not $content) { continue }
        $original = $content
        # .teamsmanship/ -> ..teamsmanship/ (but not already ..teamsmanship/)
        # Only replace single dot followed by teamsmanship, not double dot
        $content = $content -replace '(?<!\.)\.teamsmanship/', '..teamsmanship/'
        if ($content -ne $original) {
            Set-Content -Path $f.FullName -Value $content -NoNewline
            $changed++
        }
    }
}

Write-Output "Files reverted: $changed"
