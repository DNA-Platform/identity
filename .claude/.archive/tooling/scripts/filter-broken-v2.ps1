$output = npx tsx "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\.src\scripts\validate-links.ts" "c:\Source\dna-platform\inexplicable-phenomena\.claude\library" 2>&1

$broken = $output | Select-String "BROKEN" | ForEach-Object { $_.ToString() }

$excludePatterns = @('dna-library', 'path/to', 'relative/path', 'paper-filename', '01-slug', '02-slug', '01-chapter-slug', '02-chapter-slug', 'Chapter title', 'Author Name', 'Another Book', 'Another Title', 'Related Book')

$real = $broken | Where-Object {
    $line = $_
    $excluded = $false
    foreach ($p in $excludePatterns) {
        if ($line -match [regex]::Escape($p)) { $excluded = $true; break }
    }
    -not $excluded
}

Write-Output "=== Real broken links ==="
Write-Output ""
if ($real.Count -gt 0) {
    $real | ForEach-Object { Write-Output $_ }
} else {
    Write-Output "NONE"
}
Write-Output ""
Write-Output "Real broken: $($real.Count)"
Write-Output "Cross-repo/template (expected): $($broken.Count - $real.Count)"

# Summary line
$summary = $output | Select-String "^---" -Context 0,4
$summary | ForEach-Object { Write-Output $_.ToString() }
