$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$changes = 0

Get-ChildItem -Path $lib -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # Fix: ../../../..librarianship/ -> ../../..librarianship/
    # (from inside agent library book chapters - depth is 2 up to library root)
    $content = $content -replace '\.\./\.\./\.\./\.\.librarianship/', '../../..librarianship/'

    # Fix: ../protocols/ -> ../.protocols/ (old name without dot)
    $content = $content -replace '\.\./protocols/', '../.protocols/'

    # Fix: ../projects/ -> ../.projects/ (old name without dot)
    $content = $content -replace '\.\./projects/', '../.projects/'

    # Fix: ../../.what-the-wire-carries/.perspective/ -> perspective is now inside agent lib
    # (specific reference from libby's chapter)
    $content = $content -replace '\.perspective/\.cover\.md', 'perspective/.cover.md'

    # Fix: ../../../.projects/inexplicable-phenomena/sprint-33/plan.md depth
    # From agent library chapter, need to go up: chapter->book->agentlib->library->.projects
    # That's ../../.projects/ not ../../../.projects/
    $content = $content -replace '\.\./\.\./\.\./\.projects/', '../../.projects/'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changes++
        $rel = $_.FullName.Substring($lib.Length + 1)
        Write-Output "Fixed: $rel"
    }
}

Write-Output ""
Write-Output "Files fixed: $changes"
