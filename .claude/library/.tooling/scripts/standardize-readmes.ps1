$lib = "c:\Source\dna-platform\inexplicable-phenomena\.claude\agents\library\..team"

$agents = @{
    arthur = @{
        title = "Arthur's Library"
        role = "Architect — workspace boundaries, dependency graphs, monorepo structure"
        books = @(
            "- [Arthur, or the Shape of Everything](arthur-or-the-shape-of-everything/.cover.md) — autobiography (29 chapters)"
            "- [The Architecture of Identity](the-architecture-of-identity/.cover.md) — sedimentary identity, pedagogical architecture (5 chapters)"
        )
    }
    cathy = @{
        title = "Cathy's Library"
        role = "Framework Engineer — $Chemistry reactive system, type systems, metaprogramming"
        books = @(
            "- [Cathy and the Reactive Canvas](cathy-and-the-reactive-canvas/.cover.md) — autobiography (9 chapters)"
            "- [Reactivity Models](reactivity-models/.cover.md) — comparison of React, MobX, Vue, Solid, Svelte (8 chapters)"
            "- [View Introspection](view-introspection/.cover.md) — C# closures, React Compiler analysis (3 chapters)"
        )
    }
    libby = @{
        title = "Libby's Library"
        role = "Librarian — documentation, conventions, cataloguing, the garden"
        books = @(
            "- [Libby and the Tended Garden](libby-and-the-tended-garden/.cover.md) — autobiography (36 chapters)"
            "- [The Art of the Portrait](the-art-of-the-portrait/.cover.md) — portraiture as a skill (4 chapters)"
            "- [Systems and People](systems-and-people/.cover.md) — the cataloguer's instinct (1 chapter)"
            "- [Legacy Bond System](legacy-bond-system/.cover.md) — port gap analysis (2 chapters)"
        )
    }
    adam = @{
        title = "Adam's Library"
        role = "Automation Engineer — relay system, listener loop, message processing"
        books = @(
            "- [Adam Between the Wires](adam-between-the-wires/.cover.md) — autobiography (27 chapters)"
            "- [The Pipeline](the-pipeline/.cover.md) — the data migration pipeline (5 chapters)"
            "- [Verified Automation](verified-automation/.cover.md) — gateway pattern, verified operations (5 chapters)"
            "- [What I Don't Know](what-i-dont-know/.cover.md) — honest limits of expertise (1 chapter)"
        )
    }
    david = @{
        title = "David's Library"
        role = "DevOps Engineer — CI/CD, build pipelines, deployment"
        books = @(
            "- [The DevOps Journal](the-devops-journal/.cover.md) — autobiography (3 chapters)"
        )
    }
    phillip = @{
        title = "Phillip's Library"
        role = "Chemistry Developer, UX Designer — Lab app, component design"
        books = @(
            "- [Phillip and the Visible Layer](phillip-and-the-visible-layer/.cover.md) — autobiography (3 chapters)"
        )
    }
    queenie = @{
        title = "Queenie's Library"
        role = "QA Engineer — tests, specification, verification"
        books = @(
            "- [Queenie and the Specification](queenie-and-the-specification/.cover.md) — autobiography (3 chapters)"
        )
    }
    gabby = @{
        title = "Gabby's Library"
        role = "Graphic Designer, Chemistry Developer — visual design"
        books = @(
            "- [Gabby and the Visual Voice](gabby-and-the-visual-voice/.cover.md) — autobiography (2 chapters)"
        )
    }
}

foreach ($agent in $agents.Keys) {
    $info = $agents[$agent]
    $content = "# $($info.title)`n`n$($info.role)`n`n## Books`n`n"
    foreach ($book in $info.books) {
        $content += "$book`n"
    }
    $content += "`nSee [library README](../../README.md) for the format convention."
    Set-Content -Path "$lib\$agent\README.md" -Value $content -NoNewline
    Write-Output "Updated $agent/README.md"
}
