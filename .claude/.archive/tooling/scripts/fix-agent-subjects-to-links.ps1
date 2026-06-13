$ts = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..teamsmanship"
$fixed = 0

$agentSubjects = @{
    'arthur' = @{ name = 'Arthur'; cat = '..everything-that-has-a-shape' }
    'cathy' = @{ name = 'Cathy'; cat = '..the-canvas-paints-itself' }
    'libby' = @{ name = 'Libby'; cat = '..the-garden-tends-itself' }
    'adam' = @{ name = 'Adam'; cat = '..what-the-wire-carries' }
    'david' = @{ name = 'David'; cat = '..what-the-pipeline-delivers' }
    'phillip' = @{ name = 'Phillip'; cat = '..what-the-user-sees' }
    'queenie' = @{ name = 'Queenie'; cat = '..what-the-tests-promise' }
    'gabby' = @{ name = 'Gabby'; cat = '..what-beauty-serves' }
}

foreach ($agent in $agentSubjects.Keys) {
    $info = $agentSubjects[$agent]
    $agentDir = "$ts\$agent"
    if (-not (Test-Path $agentDir)) { continue }

    # Fix the agent library catalogue cover (self-cataloguing)
    $catCover = "$agentDir\$($info.cat)\.cover.md"
    if (Test-Path $catCover) {
        $content = Get-Content $catCover -Raw
        # Replace bare string subject with self-link
        $content = $content -replace 'subject:\s*"[^"]*"', "subject: `"[$($info.name)](.cover.md)`""
        # Remove summary if present
        $content = $content -replace '(?ms)^summary:.*?(?=^[a-z]|\n---)', ''
        # Fix author order (author before subject)
        Set-Content -Path $catCover -Value $content -NoNewline
        $fixed++
    }

    # Fix all book covers inside this agent's library
    Get-ChildItem $agentDir -Directory | ForEach-Object {
        $bookCover = "$($_.FullName)\.cover.md"
        if (-not (Test-Path $bookCover)) { return }
        $dirName = $_.Name
        if ($dirName.StartsWith('..')) { return } # Skip the catalogue itself

        $content = Get-Content $bookCover -Raw
        # Replace bare string subject with link to catalogue
        $content = $content -replace 'subject:\s*"[^"]*"', "subject: `"[$($info.name)]($($info.cat)/.cover.md)`""
        # Remove summary
        $content = $content -replace '(?ms)^summary:\s*>?\s*\n(\s+[^\n]+\n)*', ''
        Set-Content -Path $bookCover -Value $content -NoNewline
        $fixed++
    }
}

Write-Output "Fixed: $fixed covers"
