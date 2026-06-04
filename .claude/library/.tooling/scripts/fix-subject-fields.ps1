$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$fixed = 0

# Map agent directories to their correct library catalogue name
$agentSubjects = @{
    'arthur' = '"..everything-that-has-a-shape"'
    'cathy' = '"..the-canvas-paints-itself"'
    'libby' = '"..the-garden-tends-itself"'
    'adam' = '"..what-the-wire-carries"'
    'david' = '"..what-the-pipeline-delivers"'
    'phillip' = '"..what-the-user-sees"'
    'queenie' = '"..what-the-tests-promise"'
    'gabby' = '"..what-beauty-serves"'
}

# Fix books inside agent directories
Get-ChildItem "$lib\..teamsmanship" -Directory | ForEach-Object {
    $agentDir = $_
    $agent = $agentDir.Name
    if (-not $agentSubjects.ContainsKey($agent)) { return }

    $correctSubject = $agentSubjects[$agent]

    # Find all .cover.md in books inside this agent's library
    Get-ChildItem $agentDir.FullName -Recurse -Filter ".cover.md" | ForEach-Object {
        $cover = $_
        # Skip the agent's own library catalogue cover
        if ($cover.Directory.Name.StartsWith('..')) { return }

        $content = Get-Content $cover.FullName -Raw
        if ($content -match '(?m)^subject:\s*(.+)') {
            $currentSubject = $Matches[1].Trim()
            if ($currentSubject -ne $correctSubject) {
                $content = $content -replace '(?m)^subject:\s*.+', "subject: $correctSubject"
                Set-Content -Path $cover.FullName -Value $content -NoNewline
                $rel = $cover.FullName.Substring($lib.Length + 1).Replace('\', '/')
                Write-Output "Fixed: $rel ($currentSubject -> $correctSubject)"
                $fixed++
            }
        }
    }
}

Write-Output ""
Write-Output "Subject fields fixed: $fixed"
