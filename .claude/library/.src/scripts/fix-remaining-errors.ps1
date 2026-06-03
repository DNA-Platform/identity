$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"

# Fix team member chapters missing author
$teamDir = "$lib\..teamsmanship"
$teamChapters = @('adam.md', 'arthur.md', 'cathy.md', 'david.md', 'gabby.md', 'libby.md', 'phillip.md', 'queenie.md',
                   '01-arthur.md', '02-cathy.md', '03-libby.md', '04-adam.md', '05-david.md', '06-phillip.md', '07-queenie.md', '08-gabby.md')

foreach ($ch in $teamChapters) {
    $path = "$teamDir\$ch"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -notmatch '(?m)^author:' -and $content -match '^---') {
            $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1author: `"[Libby](libby/libby-and-the-tended-garden/.cover.md)`"`n"
            Set-Content -Path $path -Value $content -NoNewline
            Write-Output "Signed: $ch"
        }
    }
}

# Fix Cathy's book covers with bare-path authors
$cathyBooks = @("$lib\..teamsmanship\cathy\reactivity-models\.cover.md",
                "$lib\..teamsmanship\cathy\view-introspection\.cover.md")
foreach ($path in $cathyBooks) {
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        $content = $content -replace 'author:\s*\S*cathy\.md', 'author: "[Cathy](../cathy-and-the-reactive-canvas/.cover.md)"'
        Set-Content -Path $path -Value $content -NoNewline
        Write-Output "Fixed author link: $(Split-Path $path -Leaf)"
    }
}

# Fix Libby's legacy-bond-system cover
$legacyPath = "$lib\..teamsmanship\libby\legacy-bond-system\.cover.md"
if (Test-Path $legacyPath) {
    $content = Get-Content $legacyPath -Raw
    $content = $content -replace 'author:\s*\S*libby\.md', 'author: "[Libby](../libby-and-the-tended-garden/.cover.md)"'
    Set-Content -Path $legacyPath -Value $content -NoNewline
    Write-Output "Fixed author link: legacy-bond-system"
}

# Sign Arthur's perspective file
$perspPath = "$lib\..teamsmanship\arthur\perspective\library-spec-v2.md"
if (Test-Path $perspPath) {
    $content = Get-Content $perspPath -Raw
    if ($content -notmatch '(?m)^author:') {
        $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1author: `"[Arthur](../arthur-or-the-shape-of-everything/.cover.md)`"`n"
        Set-Content -Path $perspPath -Value $content -NoNewline
        Write-Output "Signed: library-spec-v2.md"
    }
}

# Sign Libby's old field guide chapters in her autobiography
$libbyChapters = @(
    "$lib\..teamsmanship\libby\libby-and-the-tended-garden\01-anatomy-of-a-book.md",
    "$lib\..teamsmanship\libby\libby-and-the-tended-garden\04-subjects-and-catalogues.md",
    "$lib\..teamsmanship\libby\libby-and-the-tended-garden\05-authorship-and-autobiography.md"
)
foreach ($path in $libbyChapters) {
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -notmatch '(?m)^author:') {
            $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1author: `"[Libby](../libby-and-the-tended-garden/.cover.md)`"`n"
            Set-Content -Path $path -Value $content -NoNewline
            Write-Output "Signed: $(Split-Path $path -Leaf) in Libby's autobiography"
        }
    }
}

Write-Output ""
Write-Output "Done"
