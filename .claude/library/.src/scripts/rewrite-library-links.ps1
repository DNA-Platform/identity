$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$changes = 0
$fileCount = 0

# Agent name to library name mapping
$agentMap = @{
    'arthur' = '.everything-that-has-a-shape'
    'cathy' = '.the-canvas-paints-itself'
    'libby' = '.the-garden-tends-itself'
    'adam' = '.what-the-wire-carries'
    'david' = '.what-the-pipeline-delivers'
    'phillip' = '.what-the-user-sees'
    'queenie' = '.what-428-tests-promise'
    'gabby' = '.what-beauty-serves'
}

$mdFiles = Get-ChildItem -Path $lib -Recurse -Filter "*.md"

foreach ($file in $mdFiles) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    $original = $content

    # === Category 1: Old ..team/{agent}/ references → .{library-name}/ ===
    # These appear in various relative depths
    foreach ($agent in $agentMap.Keys) {
        $newName = $agentMap[$agent]
        # Direct references: ..team/{agent}/ → {library-name}/
        # (the ..team/ part may have varying ../ prefixes before it)
        $content = $content -replace "\.\.team/$agent/", "$newName/"
    }

    # === Category 2: Agent file references ===
    # ../../../agents/{name}.md → ../../.team/{name}.md (from chapter depth in agent library)
    # These are citation-style: [Name]: ../../../agents/{name}.md
    $content = $content -replace '\.\./\.\./\.\./agents/', '../../.team/'
    # From book cover depth: ../../agents/ → ../.team/
    $content = $content -replace '\.\./\.\./agents/', '../.team/'
    # Deeper: ../../../../agents/ → ../../../.team/
    $content = $content -replace '\.\./\.\./\.\./\.\./agents/', '../../../.team/'

    # === Category 3: Old protocol/project/coding-policy relative paths ===
    # References to ../../../coding-policy/ from old ..team depth
    # Now coding-policy is a sibling: ../../coding-policy/
    # (These may already be correct if the files were written after the move)

    # === Category 4: Project references ===
    # Old: ../../../../project/ or ../../../project/ → .projects/inexplicable-phenomena/
    # Already fixed in earlier sprints to point to projects/inexplicable-phenomena/
    # But depth may have changed

    # === Category 5: Fix old ..librarianship references ===
    # ../../../.librarianship/ should be ../../..librarianship/ (now double-dot)
    $content = $content -replace '\.librarianship/', '..librarianship/'
    # But don't double the dots if already correct
    $content = $content -replace '\.\.\.librarianship/', '..librarianship/'

    # === Category 6: Old library README references ===
    $content = $content -replace '\.\./\.\./README\.md', '../..librarianship/.cover.md'
    $content = $content -replace '\.\./\.\./\.\./README\.md', '../../..librarianship/.cover.md'

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $changes++
        $rel = $file.FullName.Substring($lib.Length + 1)
        Write-Output "Rewritten: $rel"
    }
    $fileCount++
}

Write-Output ""
Write-Output "Files scanned: $fileCount"
Write-Output "Files rewritten: $changes"
