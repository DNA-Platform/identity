$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..teamsmanship\..team"
$fixed = 0

Get-ChildItem $lib -Directory | ForEach-Object {
    $agentDir = $_
    # Find the .. prefixed catalogue
    $catDirs = Get-ChildItem $agentDir.FullName -Directory | Where-Object { $_.Name.StartsWith('..') }
    foreach ($catDir in $catDirs) {
        $coverPath = "$($catDir.FullName)\.cover.md"
        if (-not (Test-Path $coverPath)) { continue }

        $content = Get-Content $coverPath -Raw
        $original = $content

        # Get all sibling book directory names
        $siblings = Get-ChildItem $agentDir.FullName -Directory | Where-Object { -not $_.Name.StartsWith('..') }
        foreach ($sib in $siblings) {
            $sibName = $sib.Name
            # Fix links that reference siblings as if they're children
            # (sibName/.cover.md) -> (../sibName/.cover.md)
            # But NOT if already has ../
            $content = $content -replace "\($sibName/", "(../$sibName/"
            # Fix any that got double ../
            $content = $content -replace "\(\.\./\.\./$sibName/", "(../$sibName/"
        }

        if ($content -ne $original) {
            Set-Content -Path $coverPath -Value $content -NoNewline
            $fixed++
            Write-Output "Fixed: $($agentDir.Name)/$($catDir.Name)/.cover.md"
        }
    }
}

Write-Output ""
Write-Output "Fixed: $fixed catalogue covers"
