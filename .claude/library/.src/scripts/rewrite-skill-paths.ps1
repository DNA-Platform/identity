$skillsDir = "c:\Source\dna-platform\inexplicable-phenomena\.claude\skills"
$agentsDir = "c:\Source\dna-platform\inexplicable-phenomena\.claude\agents"
$changes = 0

# Update skills
Get-ChildItem $skillsDir -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # Old: .claude/agents/team/ → .claude/library/.team/
    $content = $content -replace '\.claude/agents/team/', '.claude/library/.team/'
    # Old: .claude/agents/roles/ → .claude/library/.team/roles/
    $content = $content -replace '\.claude/agents/roles/', '.claude/library/.team/roles/'
    # Old: .claude/agents/abilities/ → .claude/library/.team/abilities/
    $content = $content -replace '\.claude/agents/abilities/', '.claude/library/.team/abilities/'
    # Old: .claude/agents/library/ → .claude/library/
    $content = $content -replace '\.claude/agents/library/', '.claude/library/'
    # Old: .claude/agents/project/ → .claude/library/.projects/inexplicable-phenomena/
    $content = $content -replace '\.claude/agents/project/', '.claude/library/.projects/inexplicable-phenomena/'
    # Old: .claude/agents/docs/ → .claude/library/.chemistry/
    $content = $content -replace '\.claude/agents/docs/', '.claude/library/.chemistry/'
    # Old: ..team/ agent references
    $content = $content -replace '\.\.team/', '.team/' -replace '\.claude/library/\.team/\.team/', '.claude/library/.team/'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changes++
        $rel = $_.FullName.Substring($skillsDir.Length + 1)
        Write-Output "Skill updated: $rel"
    }
}

# Update subagent definitions
Get-ChildItem $agentsDir -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # Agent autobiography paths need updating
    $content = $content -replace '\.claude/agents/library/', '.claude/library/'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changes++
        Write-Output "Agent updated: $($_.Name)"
    }
}

Write-Output ""
Write-Output "Total files updated: $changes"
