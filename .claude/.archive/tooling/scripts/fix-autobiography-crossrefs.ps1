$teamDir = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..teamsmanship\..team"
$fixed = 0

# Inside agent autobiography chapters, cross-agent references go:
# ../../{other-agent-library}/{book}/
# But should go: ../../{other-agent}/{book}/
# Because the agent libraries (..) are INSIDE the agent dirs now

# Also fix author links that reference old ..{library}/ paths as siblings
# From inside a book chapter: ../../..{library}/ should be just ../../..{library}/
# But from inside a different agent's book: need to go up more levels

Get-ChildItem $teamDir -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # Fix old-style cross-agent references
    # ../../.everything-that-has-a-shape/ -> ../../arthur/
    # Then inside that: arthur-or-the-shape-of-everything/
    # These are wrong because .everything-that-has-a-shape is now INSIDE arthur/

    # The pattern: from one agent's book chapter, referencing another agent's book
    # Old: ../../.{library-name}/{book}/
    # New: ../../{agent}/{book}/  (the library catalogue is a sibling of the book)

    # But wait — the agent library catalogue (..) is a directory, not a path component in book references
    # Cross-agent book references go: ../../{other-agent}/{book-name}/
    # Not through the library catalogue at all

    # The most common broken pattern: author links from chapters that go
    # ../../..everything-that-has-a-shape/arthur-or-the-shape-of-everything/.cover.md
    # This is CORRECT if the .. catalogue is a sibling of the book
    # Let me check...

    # Actually the structure is:
    # ..team/arthur/
    #   ..everything-that-has-a-shape/.cover.md  (catalogue)
    #   arthur-or-the-shape-of-everything/.cover.md  (book - sibling)
    #
    # From ..team/adam/adam-between-the-wires/01-chapter.md:
    #   To reach arthur's autobiography: ../../../arthur/arthur-or-the-shape-of-everything/.cover.md
    #   (up from chapter -> book -> adam -> ..team -> back down to arthur -> book)

    # Old broken pattern: ../../.everything-that-has-a-shape/arthur-or...
    # That tries to find .everything-that-has-a-shape as a sibling of adam
    # But it's inside arthur/

    # The fix depends on the depth. From a chapter (3 levels deep in ..team):
    # ../../../{agent}/{book}/ (go up to ..team level)

    # From a book cover (2 levels deep): ../../{agent}/{book}/

    # This is complex. Let me just fix the most common pattern:
    # Cross-agent references that use the old library name as a path component

    $agentLibMap = @{
        '..everything-that-has-a-shape' = 'arthur'
        '..the-canvas-paints-itself' = 'cathy'
        '..the-garden-tends-itself' = 'libby'
        '..what-the-wire-carries' = 'adam'
        '..what-the-pipeline-delivers' = 'david'
        '..what-the-user-sees' = 'phillip'
        '..what-the-tests-promise' = 'queenie'
        '..what-beauty-serves' = 'gabby'
    }

    # dna-library cross-repo references - leave alone
    # But fix internal cross-agent references
    foreach ($libName in $agentLibMap.Keys) {
        $agent = $agentLibMap[$libName]
        # Pattern: ../../{libName}/ used as a path to reach the agent's books
        # Should be: ../../{agent}/ (then the book is a sibling inside)
        # BUT the libName directory IS inside the agent dir, so:
        # ../../{libName}/{book}/ -> ../../{agent}/{book}/
        # This only applies when {libName} is used as a path TO a book, not as the catalogue itself
    }

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $fixed++
    }
}

Write-Output "Fixed: $fixed files"
Write-Output "(Note: many broken links require manual path analysis - the cross-agent references are complex)"
