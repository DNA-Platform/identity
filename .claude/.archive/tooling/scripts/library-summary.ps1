$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\agents\library"

Write-Output "=== Library structure ==="
Write-Output ""
Write-Output "Top level:"
Get-ChildItem $lib -Directory -Name

Write-Output ""
Write-Output "Books per agent:"
Get-ChildItem "$lib\..team" -Directory | ForEach-Object {
    $agent = $_.Name
    $books = (Get-ChildItem $_.FullName -Directory -Recurse | Where-Object {
        Test-Path (Join-Path $_.FullName '.cover.md')
    }).Count
    Write-Output "  ${agent}: ${books} books"
}

Write-Output ""
$total = (Get-ChildItem $lib -Recurse -File -Filter '*.md').Count
Write-Output "Total .md files in library: $total"

Write-Output ""
Write-Output "Objective books:"
Get-ChildItem $lib -Directory | Where-Object { $_.Name -ne '..team' } | ForEach-Object {
    $name = $_.Name
    $hasCover = Test-Path (Join-Path $_.FullName '.cover.md')
    $chapters = (Get-ChildItem $_.FullName -Filter '*.md' | Where-Object { $_.Name -ne '.cover.md' -and $_.Name -ne 'README.md' }).Count
    if ($hasCover) {
        Write-Output "  ${name}: ${chapters} chapters"
    }
}
