$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$fixed = 0

$catalogueSubjects = @{
    '..everything-that-has-a-shape' = 'Arthur'
    '..the-canvas-paints-itself' = 'Cathy'
    '..the-garden-tends-itself' = 'Libby'
    '..what-the-wire-carries' = 'Adam'
    '..what-the-pipeline-delivers' = 'David'
    '..what-the-user-sees' = 'Phillip'
    '..what-the-tests-promise' = 'Queenie'
    '..what-beauty-serves' = 'Gabby'
}

# Fix agent library catalogues
Get-ChildItem "$lib\..teamsmanship\..team" -Directory | ForEach-Object {
    $agentDir = $_
    Get-ChildItem $agentDir.FullName -Directory | Where-Object { $_.Name.StartsWith('..') } | ForEach-Object {
        $catDir = $_
        $coverPath = "$($catDir.FullName)\.cover.md"
        if (Test-Path $coverPath) {
            $content = Get-Content $coverPath -Raw
            if ($content -notmatch '(?m)^catalogues:') {
                $subjectName = $catalogueSubjects[$catDir.Name]
                if ($subjectName) {
                    $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1catalogues: $subjectName`n"
                    Set-Content -Path $coverPath -Value $content -NoNewline
                    $fixed++
                    Write-Output "Added catalogues: $subjectName to $($catDir.Name)"
                }
            }
        }
    }
}

# Fix .chemistry
$chemCover = "$lib\.chemistry\.cover.md"
if (Test-Path $chemCover) {
    $content = Get-Content $chemCover -Raw
    if ($content -notmatch '(?m)^catalogues:') {
        $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1catalogues: The Framework`n"
        Set-Content -Path $chemCover -Value $content -NoNewline
        $fixed++
        Write-Output "Added catalogues: The Framework to .chemistry"
    }
}

Write-Output ""
Write-Output "Fixed: $fixed catalogues"
