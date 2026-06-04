$dir = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..librarianship"
$fixed = 0

Get-ChildItem $dir -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $original = $content

    # Fix old dot-numbered chapter references
    $content = $content -replace '\.02-the-platform-interface\.md', '10-the-platform-interface.md'
    $content = $content -replace '\.10-the-perspective-practice\.md', '12-the-perspective-practice.md'
    $content = $content -replace '\.11-tasks-and-unfinished-work\.md', '13-tasks-and-unfinished-work.md'
    $content = $content -replace '\.09-the-flat-structure\.md', '11-the-flat-structure.md'

    # Fix old voice-and-nametags book references -> protocols book chapter
    $content = $content -replace '\.\./voice-and-nametags/01-01-voice-and-nametags\.md', '../protocols/01-voice-and-nametags.md'
    $content = $content -replace '\.\./voice-and-nametags/', '../protocols/'

    # Fix old .protocols/ references
    $content = $content -replace '\.\.\/\.protocols/\.cover\.md', '../protocols/.cover.md'
    $content = $content -replace '\.\.\/\.protocols/', '../protocols/'

    # Fix old .projects/ references
    $content = $content -replace '\.\.\/\.projects/\.cover\.md', '../..teamsmanship/.cover.md'
    $content = $content -replace '\.\.\/\.projects/', '../..teamsmanship/'

    # Fix ..teamsmanship references without proper ../ prefix
    $content = $content -replace '\(\.\.teamsmanship/', '(../..teamsmanship/'
    # But not if already correct
    $content = $content -replace '\(\.\./\.\./\.\.teamsmanship/', '(../..teamsmanship/'

    # Fix ../.cover.md references (should be .cover.md for self-reference or ../ for parent)
    $content = $content -replace '\(\.\.\/\.cover\.md\)', '(.cover.md)'

    # Fix 09-the-flat-structure reference in chapter 00
    $content = $content -replace '09-the-flat-structure\.md', '11-the-flat-structure.md'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $fixed++
        Write-Output "Fixed: $($_.Name)"
    }
}

Write-Output ""
Write-Output "Files fixed: $fixed"
