$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\agents\library"
$changes = 0

Get-ChildItem -Path $lib -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # From chapter depth (..team/{agent}/{book}/{chapter}.md) the path to .claude/ is 5 up
    # ../../../../projects/ is only 4 up. Need ../../../../../projects/
    $content = $content -replace '\.\./\.\./\.\./\.\./projects/', '../../../../../projects/'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changes++
        $rel = $_.FullName.Substring($lib.Length + 1)
        Write-Output "Fixed: $rel"
    }
}

Write-Output ""
Write-Output "Files fixed: $changes"
