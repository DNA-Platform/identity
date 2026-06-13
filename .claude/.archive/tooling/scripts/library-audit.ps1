$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"

Write-Output "=== LIBRARY FULLNESS AUDIT ==="
Write-Output ""

Get-ChildItem $lib -Directory -Recurse | Where-Object {
    Test-Path (Join-Path $_.FullName ".cover.md")
} | ForEach-Object {
    $dir = $_
    $rel = $dir.FullName.Substring($lib.Length + 1).Replace('\', '/')
    $chapters = (Get-ChildItem $dir.FullName -Filter "*.md" | Where-Object { $_.Name -ne '.cover.md' }).Count
    $resources = (Get-ChildItem $dir.FullName -File | Where-Object { $_.Extension -ne '.md' }).Count
    $subdirs = (Get-ChildItem $dir.FullName -Directory).Count

    $status = "OK"
    if ($chapters -eq 0 -and $subdirs -eq 0) { $status = "EMPTY" }
    elseif ($chapters -eq 1) { $status = "THIN" }

    # Check for SCAFFOLD in cover
    $cover = Get-Content (Join-Path $dir.FullName ".cover.md") -Raw -ErrorAction SilentlyContinue
    if ($cover -match '\[SCAFFOLD\]') { $status = "SCAFFOLD" }

    Write-Output "${status}: ${rel} (${chapters} chapters, ${resources} resources, ${subdirs} subdirs)"
}
