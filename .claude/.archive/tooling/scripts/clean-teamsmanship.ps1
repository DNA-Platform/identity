$ts = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..teamsmanship"

# Remove old individual agent .md files (old registry format)
$oldAgentFiles = @('adam.md', 'arthur.md', 'cathy.md', 'david.md', 'gabby.md', 'libby.md', 'phillip.md', 'queenie.md')
foreach ($f in $oldAgentFiles) {
    $path = "$ts\$f"
    if (Test-Path $path) {
        Remove-Item $path -Force
        Write-Output "Removed old agent file: $f"
    }
}

# Remove old catalogue chapter files (replaced by proper cover + chapters)
$oldChapters = @('01-arthur.md', '02-cathy.md', '03-libby.md', '04-adam.md', '05-david.md', '06-phillip.md', '07-queenie.md', '08-gabby.md')
foreach ($f in $oldChapters) {
    $path = "$ts\$f"
    if (Test-Path $path) {
        Remove-Item $path -Force
        Write-Output "Removed old chapter: $f"
    }
}

# Remove registry.json (absorbed into chapter 05-code-territory)
if (Test-Path "$ts\registry.json") {
    Remove-Item "$ts\registry.json" -Force
    Write-Output "Removed registry.json (absorbed into code-territory chapter)"
}

# Note: NOT removing roles/ and abilities/ yet - the chapters need to absorb their content first
# The scaffold chapters reference them. Remove after chapters are fleshed out.

Write-Output ""
Write-Output "=== ..teamsmanship/ contents ==="
Get-ChildItem $ts -Name
