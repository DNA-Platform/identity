$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$fg = "$lib\..librarianship"

# Chapters graduating to books
$graduates = @(
    @{ file = '01-anatomy-of-a-book.md'; dir = 'anatomy-of-a-book'; resource = '01-anatomy-of-a-book.ts' }
    @{ file = '04-subjects-and-catalogues.md'; dir = 'subjects-and-catalogues'; resource = '04-subjects-and-catalogues.ts' }
    @{ file = '08-the-reading-cost-architecture.md'; dir = 'the-reading-cost-architecture' }
    @{ file = '10-the-platform-interface.md'; dir = 'the-platform-interface' }
)

foreach ($g in $graduates) {
    $srcFile = "$fg\$($g.file)"
    $bookDir = "$lib\$($g.dir)"

    if (-not (Test-Path $srcFile)) {
        Write-Output "SKIP: $($g.file) not found"
        continue
    }

    # Create book directory
    New-Item -ItemType Directory -Path $bookDir -Force | Out-Null

    # Read the chapter content to create the book's .cover.md and first chapter
    $content = Get-Content $srcFile -Raw

    # The chapter becomes 01-{slug}.md in the new book
    $chapterName = "01-$($g.file -replace '^\d+-', '')"
    Copy-Item $srcFile "$bookDir\$chapterName" -Force

    # Copy resource file if it exists
    if ($g.resource) {
        $resSrc = "$fg\$($g.resource)"
        $resDst = "$bookDir\$($g.resource -replace '^\d+-', '')"
        if (Test-Path $resSrc) {
            Copy-Item $resSrc $resDst -Force
            Write-Output "  Resource: $($g.resource) -> $resDst"
        }
    }

    # Create a minimal .cover.md for the new book
    # Extract title from the chapter's frontmatter
    $titleMatch = $content | Select-String -Pattern '^title:\s*(.+)' | Select-Object -First 1
    $title = if ($titleMatch) { $titleMatch.Matches.Groups[1].Value.Trim('"').Trim() } else { $g.dir }

    $coverContent = @"
---
title: $title
author: "[Libby](..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)"
subject: "[Knowledge](..librarianship/.cover.md)"
---

# $title

Libby: This book was graduated from the [Librarianship](../..librarianship/.cover.md) field guide when the chapter grew large enough to stand alone. See the [catalogue evolution](../..librarianship/03-growth-and-refactoring.md#catalogue-evolution) pattern.

## Chapters

1. [$title]($chapterName) — the full specification
"@

    Set-Content -Path "$bookDir\.cover.md" -Value $coverContent -NoNewline
    Write-Output "Created book: $($g.dir)/"

    # Replace the chapter in the field guide with a shorter catalogue entry
    # (Don't delete — leave the original for now; the cover points to the new book)
}

Write-Output ""
Write-Output "=== Library root ==="
Get-ChildItem $lib -Directory -Name | Sort-Object
