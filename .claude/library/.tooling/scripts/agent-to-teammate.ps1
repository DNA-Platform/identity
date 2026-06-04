$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$changed = 0

# Files where "agent" should become "teammate" (library/team contexts)
# SKIP: 06-the-agents-folder.md, 09-claude-md-spec.md, 10-the-platform-interface.md
# SKIP: any file discussing .claude/agents/ specifically
# SKIP: autobiographies (first person, use "I" not "teammate")

$safeFiles = @(
    "$lib\..teamsmanship\.cover.md",
    "$lib\..teamsmanship\01-what-an-agent-is.md",
    "$lib\..teamsmanship\02-roles-and-the-type-system.md",
    "$lib\..teamsmanship\03-abilities.md",
    "$lib\..teamsmanship\05-code-territory.md",
    "$lib\..teamsmanship\08-the-agents.md",
    "$lib\..librarianship\.cover.md",
    "$lib\..librarianship\00-the-library.md",
    "$lib\..librarianship\04-subjects-and-catalogues.md",
    "$lib\..librarianship\05-authorship-and-autobiography.md",
    "$lib\..librarianship\11-the-flat-structure.md",
    "$lib\..librarianship\12-the-perspective-practice.md",
    "$lib\..librarianship\15-teamsmanship.md"
)

foreach ($path in $safeFiles) {
    if (-not (Test-Path $path)) { continue }
    $content = Get-Content $path -Raw

    # Replace "agent" with "teammate" in common patterns
    # But NOT "agents/" (platform path) or ".claude/agents" (platform reference)
    # And NOT "Agent" at start of sentence if it's a proper noun reference

    $original = $content

    # "each agent" -> "each teammate"
    $content = $content -creplace '\beach agent\b', 'each teammate'
    # "an agent" -> "a teammate"
    $content = $content -creplace '\ban agent\b', 'a teammate'
    # "the agent" -> "the teammate"
    $content = $content -creplace '\bthe agent\b', 'the teammate'
    # "every agent" -> "every teammate"
    $content = $content -creplace '\bevery agent\b', 'every teammate'
    # "Eight agents" -> "Eight teammates"
    $content = $content -creplace '\bEight agents\b', 'Eight teammates'
    # "eight agents" -> "eight teammates"
    $content = $content -creplace '\beight agents\b', 'eight teammates'
    # "agents who" -> "teammates who"
    $content = $content -creplace '\bagents who\b', 'teammates who'
    # "agents with" -> "teammates with"
    $content = $content -creplace '\bagents with\b', 'teammates with'
    # "agents talk" -> "teammates talk"
    $content = $content -creplace '\bagents talk\b', 'teammates talk'
    # "agent's" -> "teammate's"
    $content = $content -creplace "\bagent's\b", "teammate's"
    # "agents'" -> "teammates'"
    $content = $content -creplace "\bagents'\b", "teammates'"
    # "What an agent is" -> "What a teammate is" (chapter title)
    $content = $content -replace 'What an agent is', 'What a teammate is'
    $content = $content -replace 'What an Agent Is', 'What a Teammate Is'
    # "agent libraries" -> "personal libraries" (when not about .claude/agents/)
    $content = $content -creplace '\bagent libraries\b', 'personal libraries'
    # "Agent Libraries" -> "Personal Libraries"
    $content = $content -creplace '\bAgent Libraries\b', 'Personal Libraries'
    # "agent library" -> "personal library"
    $content = $content -creplace '\bagent library\b', 'personal library'

    if ($content -ne $original) {
        Set-Content -Path $path -Value $content -NoNewline
        $rel = $path.Substring($lib.Length + 1).Replace('\', '/')
        $changed++
        Write-Output "Changed: $rel"
    }
}

Write-Output ""
Write-Output "Files changed: $changed"
