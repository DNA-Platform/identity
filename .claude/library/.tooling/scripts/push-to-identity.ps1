$src = "c:\Source\dna-platform\inexplicable-phenomena"
$dst = "c:\Source\dna-platform\identity"

# Step 1: Clean the identity repo (preserve .git)
Write-Output "Cleaning identity repo..."
Get-ChildItem $dst -Exclude '.git' | Remove-Item -Recurse -Force
Write-Output "Cleaned."

# Step 2: Copy .claude/ directory
Write-Output "Copying .claude/..."
Copy-Item -Path "$src\.claude" -Destination "$dst\.claude" -Recurse -Force
$count = (Get-ChildItem "$dst\.claude" -Recurse -File).Count
Write-Output "  .claude: $count files"

# Step 3: Copy CLAUDE.md
Write-Output "Copying CLAUDE.md..."
Copy-Item -Path "$src\CLAUDE.md" -Destination "$dst\CLAUDE.md" -Force
Write-Output "  CLAUDE.md copied"

# Step 4: Write README.md
Write-Output "README.md will be written separately."

# Step 5: Write .gitignore
$gitignore = @"
node_modules/
*.log
.DS_Store
Thumbs.db
"@
Set-Content -Path "$dst\.gitignore" -Value $gitignore
Write-Output ".gitignore written"

# Summary
Write-Output ""
Write-Output "=== Identity repo contents ==="
Get-ChildItem $dst -Name -Exclude '.git'
Write-Output ""
Write-Output "=== .claude/ top level ==="
Get-ChildItem "$dst\.claude" -Name
Write-Output ""
$total = (Get-ChildItem "$dst\.claude" -Recurse -File).Count
Write-Output "Total files in .claude/: $total"
