$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\library"
$changes = 0

$agentMap = @{
    'arthur' = '.everything-that-has-a-shape'
    'cathy' = '.the-canvas-paints-itself'
    'libby' = '.the-garden-tends-itself'
    'adam' = '.what-the-wire-carries'
    'david' = '.what-the-pipeline-delivers'
    'phillip' = '.what-the-user-sees'
    'queenie' = '.what-428-tests-promise'
    'gabby' = '.what-beauty-serves'
}

Get-ChildItem -Path $lib -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
    if (-not $content) { return }
    $original = $content

    # Pattern 1: ../../{agent}/{book} -> ../../.{library-name}/{book}
    # These are cross-agent references within agent libraries
    foreach ($agent in $agentMap.Keys) {
        $newName = $agentMap[$agent]
        # ../../{agent}/ (from chapter depth crossing to sibling agent library)
        $content = $content -replace "\.\./\.\./\.\.$agent/", "../../$newName/"
        $content = $content -replace "\.\./\.\./$agent/", "../../$newName/"
        # ../../../{agent}/ (from deeper)
        $content = $content -replace "\.\./\.\./\.\./$agent/", "../../../$newName/"
    }

    # Pattern 5: ../../../..librarianship -> ../../..librarianship
    # References from agent library chapters to field guide (depth changed)
    $content = $content -replace '\.\./\.\./\.\./\.\.\.librarianship/', '../../..librarianship/'
    $content = $content -replace '\.\./\.\./\.\.\.librarianship/', '../..librarianship/'

    # Fix ../../../coding-policy/ from agent library depth
    $content = $content -replace '\.\./\.\./\.\./coding-policy/', '../../coding-policy/'

    # Fix ../../../../../projects/ from deep chapter depth -> ../../../.projects/
    $content = $content -replace '\.\./\.\./\.\./\.\./\.\./projects/', '../../../.projects/'

    if ($content -ne $original) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        $changes++
        $rel = $_.FullName.Substring($lib.Length + 1)
        Write-Output "Fixed: $rel"
    }
}

Write-Output ""
Write-Output "Files fixed: $changes"
