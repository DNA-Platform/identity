$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..teamsmanship"

$agentMap = @{
    'arthur' = @{ old = '.everything-that-has-a-shape'; new = '..everything-that-has-a-shape' }
    'cathy' = @{ old = '.the-canvas-paints-itself'; new = '..the-canvas-paints-itself' }
    'libby' = @{ old = '.the-garden-tends-itself'; new = '..the-garden-tends-itself' }
    'adam' = @{ old = '.what-the-wire-carries'; new = '..what-the-wire-carries' }
    'david' = @{ old = '.what-the-pipeline-delivers'; new = '..what-the-pipeline-delivers' }
    'phillip' = @{ old = '.what-the-user-sees'; new = '..what-the-user-sees' }
    'queenie' = @{ old = '.what-the-tests-promise'; new = '..what-the-tests-promise' }
    'gabby' = @{ old = '.what-beauty-serves'; new = '..what-beauty-serves' }
}

foreach ($agent in $agentMap.Keys) {
    $agentDir = "$lib\$agent"
    $info = $agentMap[$agent]
    $oldCat = "$agentDir\$($info.old)"
    $newCat = "$agentDir\$($info.new)"

    if (-not (Test-Path $oldCat)) {
        Write-Output "SKIP: $agent - catalogue not found at $($info.old)"
        continue
    }

    # Move books OUT of catalogue to be flat peers
    Get-ChildItem $oldCat -Directory | ForEach-Object {
        $bookName = $_.Name
        $dest = "$agentDir\$bookName"
        Move-Item $_.FullName $dest -Force
        Write-Output "${agent}: moved $bookName out of catalogue to peer"
    }

    # Move any loose files (like perspective images) too
    # But keep .cover.md in the catalogue

    # Rename catalogue to double-dot prefix
    Rename-Item $oldCat $info.new
    Write-Output "${agent}: renamed $($info.old) -> $($info.new)"

    # Show result
    Write-Output "$agent contents:"
    Get-ChildItem $agentDir -Name | ForEach-Object { Write-Output "  $_" }
    Write-Output ""
}
