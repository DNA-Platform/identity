$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$updated = 0

# Agent library names
$agentLibs = @('.everything-that-has-a-shape', '.the-canvas-paints-itself', '.the-garden-tends-itself', '.what-the-wire-carries', '.what-the-pipeline-delivers', '.what-the-user-sees', '.what-428-tests-promise', '.what-beauty-serves')

Get-ChildItem -Path $lib -Recurse -Filter ".cover.md" | ForEach-Object {
    $file = $_
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }

    # Skip if already has subject
    if ($content -match '(?m)^subject:') { return }

    # Skip catalogues (they don't need subject: - they ARE subjects)
    $dirName = $file.Directory.Name
    if ($dirName.StartsWith('..') -or ($dirName.StartsWith('.') -and $dirName -ne '.cover.md')) { return }

    $rel = $file.FullName.Substring($lib.Length + 1).Replace('\', '/')

    # Determine canonical subject
    $subject = $null

    # Books inside agent libraries -> subject is the agent library catalogue
    foreach ($agentLib in $agentLibs) {
        if ($rel.StartsWith("$agentLib/")) {
            $subject = "`"$agentLib`""
            break
        }
    }

    # Books at library root (not in agent libs) -> subject is ..teamsmanship
    if (-not $subject -and -not $rel.StartsWith('..') -and -not $rel.StartsWith('.')) {
        $subject = '"..teamsmanship"'
    }

    if ($subject) {
        # Add subject after title in frontmatter
        $content = $content -replace '(---\r?\ntitle:[^\n]*\n)', "`$1subject: $subject`n"
        Set-Content -Path $file.FullName -Value $content -NoNewline
        $updated++
        Write-Output "Added subject $subject to: $rel"
    }
}

Write-Output ""
Write-Output "Books updated: $updated"
