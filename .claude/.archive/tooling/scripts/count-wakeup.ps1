$root = "c:\Source\dna-platform\inexplicable-phenomena"

$claude = (Get-Content "$root\CLAUDE.md").Count
$libship = (Get-Content "$root\.claude\agents\library\.librarianship\.cover.md").Count
$project = (Get-Content "$root\.claude\agents\library\projects\02-inexplicable-phenomena.md").Count

Write-Output "=== Waking-up context budget ==="
Write-Output ""
Write-Output "Layer 1 - CLAUDE.md: $claude lines"
Write-Output "Layer 2 - Librarianship cover: $libship lines"
Write-Output "Layer 2b - Project chapter (with 'Right now'): $project lines"
Write-Output ""
Write-Output "Subtotal (orientation): $($claude + $libship + $project) lines"
Write-Output ""

# Count last chapters for key agents
$arthurLast = (Get-Content "$root\.claude\agents\library\..team\arthur\arthur-or-the-shape-of-everything\29-the-three-layer-model.md" -ErrorAction SilentlyContinue).Count
$cathyLast = (Get-Content "$root\.claude\agents\library\..team\cathy\cathy-and-the-reactive-canvas\06-the-canvas-and-the-hard-problem.md" -ErrorAction SilentlyContinue).Count
$libbyLast = (Get-Content "$root\.claude\agents\library\..team\libby\libby-and-the-tended-garden\36-the-proportions-problem.md" -ErrorAction SilentlyContinue).Count

Write-Output "Layer 3 - Arthur's last chapter: $arthurLast lines"
Write-Output "Layer 3 - Cathy's last chapter: $cathyLast lines"
Write-Output "Layer 3 - Libby's last chapter: $libbyLast lines"
Write-Output ""
Write-Output "Total (full wake-up, 3 agents): $($claude + $libship + $project + $arthurLast + $cathyLast + $libbyLast) lines"
