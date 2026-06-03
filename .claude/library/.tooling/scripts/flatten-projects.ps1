$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$proj = "$lib\.projects"

# Move project chapter files to become book directories at library root
# 01-dna-library.md -> dna-library/ (book with that file as a chapter)
$dnaLib = "$lib\dna-library"
if (-not (Test-Path $dnaLib)) {
    New-Item -ItemType Directory -Path $dnaLib -Force | Out-Null
}
if (Test-Path "$proj\01-dna-library.md") {
    Move-Item "$proj\01-dna-library.md" "$dnaLib\01-history.md" -Force
    Write-Output "Moved 01-dna-library.md -> dna-library/01-history.md"
}

# inexplicable-phenomena: the chapter + the sprint directory merge into one book
$ip = "$lib\inexplicable-phenomena"
if (-not (Test-Path $ip)) {
    New-Item -ItemType Directory -Path $ip -Force | Out-Null
}
if (Test-Path "$proj\02-inexplicable-phenomena.md") {
    Move-Item "$proj\02-inexplicable-phenomena.md" "$ip\01-history.md" -Force
    Write-Output "Moved 02-inexplicable-phenomena.md -> inexplicable-phenomena/01-history.md"
}
# Move sprint plans into the book
if (Test-Path "$proj\inexplicable-phenomena") {
    Get-ChildItem "$proj\inexplicable-phenomena" | ForEach-Object {
        Move-Item $_.FullName "$ip\$($_.Name)" -Force
        Write-Output "Moved sprint content: $($_.Name)"
    }
    Remove-Item "$proj\inexplicable-phenomena" -Force -ErrorAction SilentlyContinue
}

# .projects/ should now only have .cover.md
Write-Output ""
Write-Output "=== .projects/ remaining ==="
Get-ChildItem $proj -Name

Write-Output ""
Write-Output "=== library root books ==="
Get-ChildItem $lib -Directory -Name | Where-Object { -not $_.StartsWith('.') -and $_ -ne '..librarianship' -and $_ -ne '..teamsmanship' }
