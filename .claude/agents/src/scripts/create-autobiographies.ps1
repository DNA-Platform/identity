$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\agents\library\..team"

# David: the-devops-journal
$dir = "$lib\david\the-devops-journal"
New-Item -ItemType Directory -Path $dir -Force | Out-Null
Move-Item "$lib\david\the-unification.md" "$dir\01-the-unification.md" -Force
Move-Item "$lib\david\the-pipeline-to-the-world.md" "$dir\02-the-pipeline-to-the-world.md" -Force
Write-Output "Created david/the-devops-journal/ (2 chapters moved)"

# Phillip: phillip-and-the-visible-layer
$dir = "$lib\phillip\phillip-and-the-visible-layer"
New-Item -ItemType Directory -Path $dir -Force | Out-Null
Move-Item "$lib\phillip\the-unification.md" "$dir\01-the-unification.md" -Force
Move-Item "$lib\phillip\the-lab-builder.md" "$dir\02-the-lab-builder.md" -Force
Write-Output "Created phillip/phillip-and-the-visible-layer/ (2 chapters moved)"

# Queenie: queenie-and-the-specification
$dir = "$lib\queenie\queenie-and-the-specification"
New-Item -ItemType Directory -Path $dir -Force | Out-Null
Move-Item "$lib\queenie\the-unification.md" "$dir\01-the-unification.md" -Force
Move-Item "$lib\queenie\the-specification.md" "$dir\02-the-specification.md" -Force
Write-Output "Created queenie/queenie-and-the-specification/ (2 chapters moved)"

# Gabby: gabby-and-the-visual-voice
$dir = "$lib\gabby\gabby-and-the-visual-voice"
New-Item -ItemType Directory -Path $dir -Force | Out-Null
Move-Item "$lib\gabby\the-unification.md" "$dir\01-the-unification.md" -Force
Write-Output "Created gabby/gabby-and-the-visual-voice/ (1 chapter moved)"
