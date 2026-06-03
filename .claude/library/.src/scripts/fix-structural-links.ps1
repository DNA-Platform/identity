$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$changes = 0

# Fix ..librarianship/.cover.md: protocol books as directories -> existing files
$coverPath = "$lib\..librarianship\.cover.md"
$content = Get-Content $coverPath -Raw
$original = $content

# Protocol books: referenced as directories but are files
$content = $content -replace '\.\./\.protocols/voice-and-nametags/\.cover\.md', '../.protocols/01-voice-and-nametags.md'
$content = $content -replace '\.\./\.protocols/the-boot-sequence/\.cover\.md', '../.protocols/02-the-boot-sequence.md'
$content = $content -replace '\.\./\.protocols/working-with-doug/\.cover\.md', '../.protocols/03-working-with-doug.md'
$content = $content -replace '\.\./\.protocols/discussion-as-work/\.cover\.md', '../.protocols/04-discussion-as-work.md'
$content = $content -replace '\.\./\.protocols/the-library-opens/\.cover\.md', '../.protocols/05-the-library-opens.md'
$content = $content -replace '\.\./\.protocols/the-identity-repo/\.cover\.md', '../.protocols/06-the-identity-repo.md'
# Also fix the reference in the field guide section
$content = $content -replace '\.\./\.protocols/voice-and-nametags/', '../.protocols/01-voice-and-nametags.md'
# Fix projects ref
$content = $content -replace '\.\./\.projects/inexplicable-phenomena/\.cover\.md', '../.projects/02-inexplicable-phenomena.md'

if ($content -ne $original) {
    Set-Content -Path $coverPath -Value $content -NoNewline
    $changes++
    Write-Output "Fixed: ..librarianship/.cover.md"
}

# Fix .protocols/.cover.md: books as directories -> existing files
$coverPath = "$lib\.protocols\.cover.md"
$content = Get-Content $coverPath -Raw
$original = $content

$content = $content -replace '\[Voice and nametags\]\(voice-and-nametags/\)', '[Voice and nametags](01-voice-and-nametags.md)'
$content = $content -replace '\[The boot sequence\]\(the-boot-sequence/\)', '[The boot sequence](02-the-boot-sequence.md)'
$content = $content -replace '\[Working with Doug\]\(working-with-doug/\)', '[Working with Doug](03-working-with-doug.md)'
$content = $content -replace '\[Discussion as work\]\(discussion-as-work/\)', '[Discussion as work](04-discussion-as-work.md)'
$content = $content -replace '\[The library opens\]\(the-library-opens/\)', '[The library opens](05-the-library-opens.md)'
$content = $content -replace '\[The identity repo\]\(the-identity-repo/\)', '[The identity repo](06-the-identity-repo.md)'

if ($content -ne $original) {
    Set-Content -Path $coverPath -Value $content -NoNewline
    $changes++
    Write-Output "Fixed: .protocols/.cover.md"
}

# Fix .projects/.cover.md: inexplicable-phenomena reference
$coverPath = "$lib\.projects\.cover.md"
$content = Get-Content $coverPath -Raw
$original = $content

$content = $content -replace 'inexplicable-phenomena/\.cover\.md#right-now', '02-inexplicable-phenomena.md'

if ($content -ne $original) {
    Set-Content -Path $coverPath -Value $content -NoNewline
    $changes++
    Write-Output "Fixed: .projects/.cover.md"
}

# Fix .team/.cover.md: protocol reference
$coverPath = "$lib\.team\.cover.md"
$content = Get-Content $coverPath -Raw
$original = $content

$content = $content -replace '\.protocols/the-identity-repo/\.cover\.md', '.protocols/06-the-identity-repo.md'

if ($content -ne $original) {
    Set-Content -Path $coverPath -Value $content -NoNewline
    $changes++
    Write-Output "Fixed: .team/.cover.md"
}

# Fix reading cost chapter: references to non-existent protocol book chapters
$chPath = "$lib\..librarianship\08-the-reading-cost-architecture.md"
if (Test-Path $chPath) {
    $content = Get-Content $chPath -Raw
    $original = $content
    $content = $content -replace 'voice-and-nametags/01-the-convention\.md', '../.protocols/01-voice-and-nametags.md'
    $content = $content -replace 'voice-and-nametags/03-agent-territories\.md', '../.protocols/01-voice-and-nametags.md'
    if ($content -ne $original) {
        Set-Content -Path $chPath -Value $content -NoNewline
        $changes++
        Write-Output "Fixed: ..librarianship/08-the-reading-cost-architecture.md"
    }
}

# Fix agent covers referencing perspective/ as a link (need .cover.md or just remove link)
foreach ($agentLib in @('.what-beauty-serves', '.what-the-pipeline-delivers')) {
    $coverPath = "$lib\$agentLib\.cover.md"
    if (Test-Path $coverPath) {
        $content = Get-Content $coverPath -Raw
        $original = $content
        $content = $content -replace '\[Perspective\]\(perspective/\)', '[Perspective](perspective/) `[SCAFFOLD]`'
        if ($content -ne $original) {
            Set-Content -Path $coverPath -Value $content -NoNewline
            $changes++
            Write-Output "Fixed: $agentLib/.cover.md (perspective scaffold)"
        }
    }
}

Write-Output ""
Write-Output "Files fixed: $changes"
