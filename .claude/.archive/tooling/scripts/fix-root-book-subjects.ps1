$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$fixed = 0

$rootBooks = @('protocols', 'coding-policy', 'dna-library', 'inexplicable-phenomena')
foreach ($book in $rootBooks) {
    $coverPath = "$lib\$book\.cover.md"
    if (Test-Path $coverPath) {
        $content = Get-Content $coverPath -Raw
        # Replace bare string subject with proper link
        $content = $content -replace 'subject:\s*"\.\.teamsmanship"', 'subject: "[Collaboration](../..teamsmanship/.cover.md)"'
        $content = $content -replace 'subject:\s*"teamsmanship"', 'subject: "[Collaboration](../..teamsmanship/.cover.md)"'
        # Also remove summary if still present
        $content = $content -replace '(?ms)^summary:\s*>?\s*\n(\s+[^\n]+\n)*', ''
        Set-Content -Path $coverPath -Value $content -NoNewline
        $fixed++
        Write-Output "Fixed: $book"
    }
}

# Fix Libby's nested perspective
$perspCover = "$lib\..teamsmanship\..team\libby\perspective\perspective\.cover.md"
if (Test-Path $perspCover) {
    $content = Get-Content $perspCover -Raw
    $content = $content -replace 'subject:\s*"\.\.the-garden-tends-itself"', 'subject: "[Libby](../../..the-garden-tends-itself/.cover.md)"'
    Set-Content -Path $perspCover -Value $content -NoNewline
    $fixed++
    Write-Output "Fixed: libby/perspective/perspective"
}

Write-Output ""
Write-Output "Fixed: $fixed"
