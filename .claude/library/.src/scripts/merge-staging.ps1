$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"

# Merge .projects-plans into .projects
# .projects has the project catalogue (dna-library.md, inexplicable-phenomena.md, .cover.md)
# .projects-plans has the sprint directories (inexplicable-phenomena/sprint-41, etc.)
Write-Output "Merging .projects-plans into .projects..."
$plansDir = "$lib\.projects-plans"
$projDir = "$lib\.projects"
if (Test-Path $plansDir) {
    Get-ChildItem $plansDir | ForEach-Object {
        $dest = "$projDir\$($_.Name)"
        if (Test-Path $dest) {
            # Merge contents
            Get-ChildItem $_.FullName | ForEach-Object {
                Move-Item $_.FullName "$dest\$($_.Name)" -Force
            }
        } else {
            Move-Item $_.FullName $dest -Force
        }
        Write-Output "  Merged $($_.Name)"
    }
    Remove-Item $plansDir -Force
    Write-Output "  Removed .projects-plans/"
}

# Merge .team-catalogue into .team
# .team-catalogue has the team catalogue book (01-arthur.md through 08-gabby.md, .cover.md)
# .team has agent files, registry, roles, abilities
Write-Output ""
Write-Output "Merging .team-catalogue into .team..."
$catDir = "$lib\.team-catalogue"
$teamDir = "$lib\.team"
if (Test-Path $catDir) {
    Get-ChildItem $catDir | ForEach-Object {
        Move-Item $_.FullName "$teamDir\$($_.Name)" -Force
        Write-Output "  Moved $($_.Name)"
    }
    Remove-Item $catDir -Force
    Write-Output "  Removed .team-catalogue/"
}

# Remove the old library README (replaced by ..librarianship/.cover.md)
if (Test-Path "$lib\README.md") {
    Remove-Item "$lib\README.md" -Force
    Write-Output ""
    Write-Output "Removed library/README.md (replaced by ..librarianship/.cover.md)"
}

Write-Output ""
Write-Output "=== Final library/ structure ==="
Get-ChildItem $lib -Name
