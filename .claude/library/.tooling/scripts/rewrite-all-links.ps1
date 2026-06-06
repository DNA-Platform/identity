$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$changes = 0
$fileCount = 0

# Agent old-name to new-path mapping
$agentOldToNew = @{
    '.everything-that-has-a-shape/' = '..teamsmanship/arthur/.everything-that-has-a-shape/'
    '.the-canvas-paints-itself/' = '..teamsmanship/cathy/.the-canvas-paints-itself/'
    '.the-garden-tends-itself/' = '..teamsmanship/libby/.the-garden-tends-itself/'
    '.what-the-wire-carries/' = '..teamsmanship/adam/.what-the-wire-carries/'
    '.what-the-pipeline-delivers/' = '..teamsmanship/david/.what-the-pipeline-delivers/'
    '.what-the-user-sees/' = '..teamsmanship/phillip/.what-the-user-sees/'
    '.what-428-tests-promise/' = '..teamsmanship/queenie/.what-the-tests-promise/'
    '.what-beauty-serves/' = '..teamsmanship/gabby/.what-beauty-serves/'
    '.what-the-tests-promise/' = '..teamsmanship/queenie/.what-the-tests-promise/'
}

# Old .team/ references
$teamRewrites = @{
    '.team/' = '..teamsmanship/'
    '../.team/' = '../..teamsmanship/'
    '../../.team/' = '../../..teamsmanship/'
    '../../../.team/' = '../../../..teamsmanship/'
}

$mdFiles = Get-ChildItem -Path $lib -Recurse -Filter "*.md"

foreach ($file in $mdFiles) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { continue }
    $original = $content

    # Rewrite agent library references (old root-level to new ..teamsmanship/ paths)
    foreach ($old in $agentOldToNew.Keys) {
        $new = $agentOldToNew[$old]
        # Handle various relative depths
        # From library root: ./{old} -> ./{new}
        $content = $content -replace [regex]::Escape("(../$old"), "(../$new"
        $content = $content -replace [regex]::Escape("($old"), "($new"
        # Also without leading dot-slash
        $content = $content -replace [regex]::Escape("](/$old"), "](/$new"
    }

    # Rewrite .team/ -> ..teamsmanship/
    foreach ($old in $teamRewrites.Keys) {
        $new = $teamRewrites[$old]
        $content = $content -replace [regex]::Escape($old), $new
    }

    # Fix double-escaped: ..teamsmanship getting re-escaped
    $content = $content -replace '\.\.\.teamsmanship/', '..teamsmanship/'

    # Rewrite old ..team/ agent references
    $content = $content -replace '\.\.team/arthur/', '..teamsmanship/arthur/'
    $content = $content -replace '\.\.team/cathy/', '..teamsmanship/cathy/'
    $content = $content -replace '\.\.team/libby/', '..teamsmanship/libby/'
    $content = $content -replace '\.\.team/adam/', '..teamsmanship/adam/'
    $content = $content -replace '\.\.team/david/', '..teamsmanship/david/'
    $content = $content -replace '\.\.team/phillip/', '..teamsmanship/phillip/'
    $content = $content -replace '\.\.team/queenie/', '..teamsmanship/queenie/'
    $content = $content -replace '\.\.team/gabby/', '..teamsmanship/gabby/'

    # Fix agent library catalogue references (old single-dot to new double-dot within agent dirs)
    $content = $content -replace '\.everything-that-has-a-shape/', '..everything-that-has-a-shape/'
    $content = $content -replace '\.the-canvas-paints-itself/', '..the-canvas-paints-itself/'
    $content = $content -replace '\.the-garden-tends-itself/', '..the-garden-tends-itself/'
    $content = $content -replace '\.what-the-wire-carries/', '..what-the-wire-carries/'
    $content = $content -replace '\.what-the-pipeline-delivers/', '..what-the-pipeline-delivers/'
    $content = $content -replace '\.what-the-user-sees/', '..what-the-user-sees/'
    $content = $content -replace '\.what-the-tests-promise/', '..what-the-tests-promise/'
    $content = $content -replace '\.what-beauty-serves/', '..what-beauty-serves/'

    # But don't triple-dot: fix ....everything -> ..everything
    $content = $content -replace '\.\.\.everything', '..everything'
    $content = $content -replace '\.\.\.the-canvas', '..the-canvas'
    $content = $content -replace '\.\.\.the-garden', '..the-garden'
    $content = $content -replace '\.\.\.what-the-wire', '..what-the-wire'
    $content = $content -replace '\.\.\.what-the-pipeline', '..what-the-pipeline'
    $content = $content -replace '\.\.\.what-the-user', '..what-the-user'
    $content = $content -replace '\.\.\.what-the-tests', '..what-the-tests'
    $content = $content -replace '\.\.\.what-beauty', '..what-beauty'
    $content = $content -replace '\.\.\.teamsmanship', '..teamsmanship'

    # Fix old .protocols/ chapter references (now at library root as book dirs)
    $content = $content -replace '\.protocols/01-voice\.md', 'voice-and-nametags/01-01-voice.md'
    $content = $content -replace '\.protocols/02-orientation\.md', 'the-boot-sequence/01-02-orientation.md'
    $content = $content -replace '\.protocols/03-working-with-doug\.md', 'working-with-doug/01-03-working-with-doug.md'
    $content = $content -replace '\.protocols/03-discussion\.md', 'discussion-as-work/01-03-discussion.md'
    $content = $content -replace '\.protocols/04-waking\.md', 'the-library-opens/01-04-waking.md'
    $content = $content -replace '\.protocols/07-travel\.md', 'the-identity-repo/01-07-travel.md'

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $changes++
    }
    $fileCount++
}

Write-Output "Files scanned: $fileCount"
Write-Output "Files rewritten: $changes"
