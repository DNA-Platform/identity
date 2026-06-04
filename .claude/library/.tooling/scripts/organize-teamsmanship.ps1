$ts = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library\..teamsmanship"

# Create ..team/ folder inside ..teamsmanship/
$teamDir = "$ts\..team"
New-Item -ItemType Directory -Path $teamDir -Force | Out-Null
Write-Output "Created ..team/"

# Move agent folders into ..team/
$agents = @('adam', 'arthur', 'cathy', 'david', 'gabby', 'libby', 'phillip', 'queenie')
foreach ($agent in $agents) {
    $src = "$ts\$agent"
    $dst = "$teamDir\$agent"
    if (Test-Path $src) {
        Move-Item $src $dst -Force
        Write-Output "Moved $agent -> ..team/$agent"
    }
}

# Remove roles/ and abilities/ (content absorbed into chapters 02 and 03)
if (Test-Path "$ts\roles") {
    Remove-Item "$ts\roles" -Recurse -Force
    Write-Output "Removed roles/ (absorbed into chapter 02)"
}
if (Test-Path "$ts\abilities") {
    Remove-Item "$ts\abilities" -Recurse -Force
    Write-Output "Removed abilities/ (absorbed into chapter 03)"
}

Write-Output ""
Write-Output "=== ..teamsmanship/ contents ==="
Get-ChildItem $ts -Name

Write-Output ""
Write-Output "=== ..teamsmanship/..team/ contents ==="
Get-ChildItem $teamDir -Name
