$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$removed = 0

# Remove README.md files inside agent libraries (replaced by .cover.md)
Get-ChildItem $lib -Recurse -Filter "README.md" | ForEach-Object {
    $dir = $_.DirectoryName
    $hasCover = Test-Path (Join-Path $dir ".cover.md")
    if ($hasCover) {
        Remove-Item $_.FullName -Force
        $rel = $_.FullName.Substring($lib.Length + 1)
        Write-Output "Removed: $rel (replaced by .cover.md)"
        $removed++
    }
}

# Check for empty directories
Get-ChildItem $lib -Directory -Recurse | Where-Object {
    (Get-ChildItem $_.FullName -Force).Count -eq 0
} | ForEach-Object {
    $rel = $_.FullName.Substring($lib.Length + 1)
    Write-Output "Empty dir: $rel"
}

Write-Output ""
Write-Output "Files removed: $removed"
