$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
Get-ChildItem $lib -Directory | ForEach-Object {
    $name = $_.Name
    $coverPath = Join-Path $_.FullName ".cover.md"
    $hasCover = Test-Path $coverPath
    Write-Output "${name}: cover=$hasCover"
}
