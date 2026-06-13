$src = "c:\Source\dna-platform\inexplicable-phenomena"
$dst = "c:\Source\dna-platform\identity"

# Sync .claude/ (preserve .git in destination)
Write-Output "Syncing .claude/..."
$srcClaude = "$src\.claude"
$dstClaude = "$dst\.claude"

# Remove destination .claude contents (not .git)
Get-ChildItem $dstClaude -Exclude '.git' | Remove-Item -Recurse -Force
# Copy fresh
Get-ChildItem $srcClaude | ForEach-Object {
    Copy-Item $_.FullName "$dstClaude\$($_.Name)" -Recurse -Force
}

# Sync CLAUDE.md
Copy-Item "$src\CLAUDE.md" "$dst\CLAUDE.md" -Force

$count = (Get-ChildItem "$dstClaude" -Recurse -File).Count
Write-Output "Synced: $count files in .claude/"
