$dir = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..librarianship"

# Remove the dot prefix from dot-numbered chapters
$dotFiles = @(
    @{ old = '.01-claude-md-spec.md'; new = '09-claude-md-spec.md' }
    @{ old = '.02-the-platform-interface.md'; new = '10-the-platform-interface.md' }
    @{ old = '.09-the-flat-structure.md'; new = '11-the-flat-structure.md' }
    @{ old = '.10-the-perspective-practice.md'; new = '12-the-perspective-practice.md' }
    @{ old = '.11-tasks-and-unfinished-work.md'; new = '13-tasks-and-unfinished-work.md' }
    @{ old = '.12-bringing-the-library-into-alignment.md'; new = '14-bringing-the-library-into-alignment.md' }
)

foreach ($f in $dotFiles) {
    $src = "$dir\$($f.old)"
    $dst = "$dir\$($f.new)"
    if (Test-Path $src) {
        Rename-Item $src $f.new
        Write-Output "Renamed: $($f.old) -> $($f.new)"
    }
}

Write-Output ""
Write-Output "=== ..librarianship/ contents ==="
Get-ChildItem $dir -Name
