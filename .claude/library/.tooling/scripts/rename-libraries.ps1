$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"

$renames = @{
    '.the-shape-of-everything' = '.everything-that-has-a-shape'
    '.the-reactive-canvas' = '.the-canvas-paints-itself'
    '.the-tended-garden' = '.the-garden-tends-itself'
    '.between-the-wires' = '.what-the-wire-carries'
    '.the-devops-journal' = '.what-the-pipeline-delivers'
    '.the-visible-layer' = '.what-the-user-sees'
    '.the-specification' = '.what-428-tests-promise'
    '.the-visual-voice' = '.what-beauty-serves'
}

foreach ($old in $renames.Keys) {
    $new = $renames[$old]
    $src = "$lib\$old"
    $dst = "$lib\$new"
    if (Test-Path $src) {
        Rename-Item $src $new
        Write-Output "$old -> $new"
    }
}

Write-Output ""
Write-Output "=== Library structure ==="
Get-ChildItem $lib -Name
