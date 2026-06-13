$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$removed = 0

# Remove empty directories (deepest first)
do {
    $empty = Get-ChildItem $lib -Directory -Recurse | Where-Object {
        (Get-ChildItem $_.FullName -Force).Count -eq 0
    }
    foreach ($dir in $empty) {
        $rel = $dir.FullName.Substring($lib.Length + 1)
        Remove-Item $dir.FullName -Force
        Write-Output "Removed empty: $rel"
        $removed++
    }
} while ($empty.Count -gt 0)

Write-Output ""
Write-Output "Empty directories removed: $removed"
