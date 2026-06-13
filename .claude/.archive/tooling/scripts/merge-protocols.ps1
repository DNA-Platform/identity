$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"

# The protocol "books" each have one chapter. Merge them into a single protocols/ book.
$protocolsBook = "$lib\protocols"
New-Item -ItemType Directory -Path $protocolsBook -Force | Out-Null

# Map: old book dir -> chapter number and file
$protocols = @(
    @{ dir = 'voice-and-nametags'; num = '01'; name = 'voice-and-nametags' }
    @{ dir = 'the-boot-sequence'; num = '02'; name = 'the-boot-sequence' }
    @{ dir = 'working-with-doug'; num = '03'; name = 'working-with-doug' }
    @{ dir = 'discussion-as-work'; num = '04'; name = 'discussion-as-work' }
    @{ dir = 'the-library-opens'; num = '05'; name = 'the-library-opens' }
    @{ dir = 'the-identity-repo'; num = '06'; name = 'the-identity-repo' }
)

foreach ($p in $protocols) {
    $bookDir = "$lib\$($p.dir)"
    if (Test-Path $bookDir) {
        # Find the chapter file (not .cover.md)
        $chapters = Get-ChildItem $bookDir -Filter "*.md" | Where-Object { $_.Name -ne '.cover.md' }
        foreach ($ch in $chapters) {
            $destName = "$($p.num)-$($p.name).md"
            Copy-Item $ch.FullName "$protocolsBook\$destName" -Force
            Write-Output "Copied: $($ch.Name) -> protocols/$destName"
        }
        # Remove the old book directory
        Remove-Item $bookDir -Recurse -Force
        Write-Output "Removed: $($p.dir)/"
    }
}

Write-Output ""
Write-Output "=== protocols/ contents ==="
Get-ChildItem $protocolsBook -Name
