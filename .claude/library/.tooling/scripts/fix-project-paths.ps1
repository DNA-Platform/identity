$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\agents\library"
$changes = 0

Get-ChildItem -Path $lib -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # Fix old project/ paths -> projects/inexplicable-phenomena/
    # From ..team/{agent}/{book}/{chapter} depth (4 levels up to agents/)
    $content = $content -replace '\.\./\.\./\.\./\.\./project/', '../../../../projects/inexplicable-phenomena/'
    # From ..team/{agent}/{book} depth (3 levels up)
    $content = $content -replace '\.\./\.\./\.\./project/', '../../../projects/inexplicable-phenomena/'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changes++
        $rel = $_.FullName.Substring($lib.Length + 1)
        Write-Output "Fixed: $rel"
    }
}

Write-Output ""
Write-Output "Files fixed: $changes"
