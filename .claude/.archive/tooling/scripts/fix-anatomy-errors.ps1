$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$fixed = 0

# Fix 4 unsigned non-chemistry chapters
$unsignedFiles = @{
    "$lib\..teamsmanship\..team\arthur\perspective\library-spec-v2.md" = '"[Arthur](../arthur-or-the-shape-of-everything/.cover.md)"'
    "$lib\..teamsmanship\..team\libby\libby-and-the-tended-garden\01-anatomy-of-a-book.md" = '"[Libby](../libby-and-the-tended-garden/.cover.md)"'
    "$lib\..teamsmanship\..team\libby\libby-and-the-tended-garden\04-subjects-and-catalogues.md" = '"[Libby](../libby-and-the-tended-garden/.cover.md)"'
    "$lib\..teamsmanship\..team\libby\libby-and-the-tended-garden\05-authorship-and-autobiography.md" = '"[Libby](../libby-and-the-tended-garden/.cover.md)"'
}

foreach ($path in $unsignedFiles.Keys) {
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -notmatch '(?m)^author:') {
            $authorLink = $unsignedFiles[$path]
            $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1author: $authorLink`n"
            Set-Content -Path $path -Value $content -NoNewline
            $fixed++
            Write-Output "Signed: $(Split-Path $path -Leaf)"
        }
    }
}

# Fix chemistry cover subject
$chemCover = "$lib\.chemistry\.cover.md"
if (Test-Path $chemCover) {
    $content = Get-Content $chemCover -Raw
    $content = $content -replace 'subject:\s*"\.\.librarianship"', 'subject: "[Knowledge](../..librarianship/.cover.md)"'
    Set-Content -Path $chemCover -Value $content -NoNewline
    $fixed++
    Write-Output "Fixed chemistry cover subject"
}

# Sign chemistry chapters
$chemFiles = Get-ChildItem "$lib\.chemistry" -Filter "*.md" | Where-Object { $_.Name -ne '.cover.md' }
foreach ($f in $chemFiles) {
    $content = Get-Content $f.FullName -Raw
    if ($content -match '^---' -and $content -notmatch '(?m)^author:') {
        $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1author: `"[Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)`"`n"
        Set-Content -Path $f.FullName -Value $content -NoNewline
        $fixed++
        Write-Output "Signed chemistry: $($f.Name)"
    } elseif ($content -notmatch '^---') {
        # No frontmatter at all — add it
        $title = $f.BaseName -replace '^_', '' -replace '-', ' '
        $newContent = "---`ntitle: $title`nauthor: `"[Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)`"`n---`n`n$content"
        Set-Content -Path $f.FullName -Value $newContent -NoNewline
        $fixed++
        Write-Output "Added frontmatter + signed: $($f.Name)"
    }
}

Write-Output ""
Write-Output "Fixed: $fixed files"
