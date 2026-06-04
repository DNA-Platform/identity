$dir = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..librarianship"
Get-ChildItem $dir -Filter "*.md" | Sort-Object Name | ForEach-Object {
    $lines = (Get-Content $_.FullName).Count
    $name = $_.Name
    Write-Output "${name}: ${lines} lines"
}
Write-Output ""
$total = (Get-ChildItem $dir -Filter "*.md" | ForEach-Object { (Get-Content $_.FullName).Count } | Measure-Object -Sum).Sum
Write-Output "Total: $total lines across $((Get-ChildItem $dir -Filter '*.md').Count) files"
