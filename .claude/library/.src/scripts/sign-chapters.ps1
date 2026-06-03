$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$signed = 0
$skipped = 0

# Map agent library directories to autobiography paths
$agentAuthorLinks = @{
    '.everything-that-has-a-shape' = '"[Arthur](../../.everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"'
    '.the-canvas-paints-itself' = '"[Cathy](../../.the-canvas-paints-itself/cathy-and-the-reactive-canvas/.cover.md)"'
    '.the-garden-tends-itself' = '"[Libby](../../.the-garden-tends-itself/libby-and-the-tended-garden/.cover.md)"'
    '.what-the-wire-carries' = '"[Adam](../../.what-the-wire-carries/adam-between-the-wires/.cover.md)"'
    '.what-the-pipeline-delivers' = '"[David](../../.what-the-pipeline-delivers/the-devops-journal/.cover.md)"'
    '.what-the-user-sees' = '"[Phillip](../../.what-the-user-sees/phillip-and-the-visible-layer/.cover.md)"'
    '.what-the-tests-promise' = '"[Queenie](../../.what-the-tests-promise/queenie-and-the-specification/.cover.md)"'
    '.what-beauty-serves' = '"[Gabby](../../.what-beauty-serves/gabby-and-the-visual-voice/.cover.md)"'
}

# For public library books, default to the book's own author field or Arthur
$defaultAuthor = '"[Arthur](../.everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md)"'

Get-ChildItem -Path $lib -Recurse -Filter "*.md" | ForEach-Object {
    $file = $_
    if ($file.Name -eq '.cover.md') { return } # Skip covers

    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }

    # Skip if already has author in frontmatter
    if ($content -match '(?m)^author:') {
        $skipped++
        return
    }

    # Skip if no frontmatter at all
    if ($content -notmatch '^---') { return }

    # Determine which agent library this is in
    $rel = $file.FullName.Substring($lib.Length + 1).Replace('\', '/')
    $authorLink = $null

    foreach ($agentDir in $agentAuthorLinks.Keys) {
        if ($rel.StartsWith("$agentDir/")) {
            $authorLink = $agentAuthorLinks[$agentDir]
            break
        }
    }

    # For field guide chapters, use Libby
    if ($rel.StartsWith("..librarianship/")) {
        $authorLink = '"[Libby](../.team/libby/libby-and-the-tended-garden/.cover.md)"'
    }

    # For coding-policy, protocols, etc - determine from nametag in first paragraph
    if (-not $authorLink) {
        if ($content -match '(?m)^(Arthur|Cathy|Libby|Adam|David|Phillip|Queenie|Gabby):') {
            $name = $Matches[1]
            switch ($name) {
                'Arthur' { $authorLink = $defaultAuthor }
                'Cathy' { $authorLink = $agentAuthorLinks['.the-canvas-paints-itself'] -replace '../../', '../' }
                'Libby' { $authorLink = $agentAuthorLinks['.the-garden-tends-itself'] -replace '../../', '../' }
                'Adam' { $authorLink = $agentAuthorLinks['.what-the-wire-carries'] -replace '../../', '../' }
                default { $authorLink = $defaultAuthor }
            }
        } else {
            $authorLink = $defaultAuthor
        }
    }

    if ($authorLink) {
        # Add author after title in frontmatter
        $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1author: $authorLink`n"
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $signed++
    }
}

Write-Output "Chapters signed: $signed"
Write-Output "Already signed (skipped): $skipped"
