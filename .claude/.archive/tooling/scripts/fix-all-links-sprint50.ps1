$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$changes = 0

Get-ChildItem -Path $lib -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # Pattern 1: ..teamsmanship/{agent}/ missing ..team/ level
    # ../..teamsmanship/libby/ -> ../..teamsmanship/..team/libby/
    # But NOT ../..teamsmanship/..team/ (already correct)
    $agents = @('arthur','cathy','libby','adam','david','phillip','queenie','gabby')
    foreach ($agent in $agents) {
        # From various depths, insert ..team/ between ..teamsmanship/ and the agent name
        # But only if ..team/ isn't already there
        $content = $content -replace "\.\.teamsmanship/$agent/", "..teamsmanship/..team/$agent/"
        # Fix double-insertion
        $content = $content -replace '\.\.team/\.\.team/', '..team/'
    }

    # Pattern 2: Graduated field guide chapters referenced inside ..librarianship
    # 01-anatomy-of-a-book.md -> ../anatomy-of-a-book/01-anatomy-of-a-book.md (from ..librarianship/)
    # 04-subjects-and-catalogues.md -> ../subjects-and-catalogues/01-subjects-and-catalogues.md
    # 08-the-reading-cost-architecture.md -> ../the-reading-cost-architecture/01-the-reading-cost-architecture.md
    # 10-the-platform-interface.md -> ../the-platform-interface/01-the-platform-interface.md
    # Only apply within ..librarianship/ files
    $rel = $_.FullName.Substring($lib.Length + 1).Replace('\', '/')
    if ($rel.StartsWith('..librarianship/')) {
        $content = $content -replace '\(01-anatomy-of-a-book\.md', '(../anatomy-of-a-book/01-anatomy-of-a-book.md'
        $content = $content -replace '\(04-subjects-and-catalogues\.md', '(../subjects-and-catalogues/01-subjects-and-catalogues.md'
        $content = $content -replace '\(08-the-reading-cost-architecture\.md', '(../the-reading-cost-architecture/01-the-reading-cost-architecture.md'
        $content = $content -replace '\(10-the-platform-interface\.md', '(../the-platform-interface/01-the-platform-interface.md'
        # Also fix the .ts validator references
        $content = $content -replace '\(01-anatomy-of-a-book\.ts\)', '(../anatomy-of-a-book/anatomy-of-a-book.ts)'
        $content = $content -replace '\(04-subjects-and-catalogues\.ts\)', '(../subjects-and-catalogues/subjects-and-catalogues.ts)'
    }

    # Pattern 3: Agent library catalogue links from INSIDE ..team/{agent}/ books
    # These reference sibling books with paths like adam-between-the-wires/.cover.md
    # but the catalogue is ..what-the-wire-carries/ which is now at the same level
    # These are usually CORRECT because the move preserved internal structure

    # Pattern 4: Root book author/subject links missing ..team/ in path
    # ../..teamsmanship/arthur/..everything -> ../..teamsmanship/..team/arthur/..everything
    # Already handled by pattern 1

    # Pattern 5: Graduated book covers referencing ..librarianship incorrectly
    # ..teamsmanship/..team/ should be in the path
    # ..librarianship/ references from graduated books need ../..librarianship/
    if ($rel.StartsWith('anatomy-of-a-book/') -or $rel.StartsWith('subjects-and-catalogues/') -or
        $rel.StartsWith('the-reading-cost-architecture/') -or $rel.StartsWith('the-platform-interface/')) {
        $content = $content -replace '\(\.\.teamsmanship/', '(../..teamsmanship/'
        $content = $content -replace '\(\.\.librarianship/', '(../..librarianship/'
    }

    # Pattern 6: Old chapter references from Teamsmanship
    # 08-the-agents.md no longer exists (was replaced)
    $content = $content -replace '\(08-the-agents\.md\)', '(18-gabby.md)'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changes++
    }
}

Write-Output "Files changed: $changes"
