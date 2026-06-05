---
title: The compiled pipeline
author: "[David](.cover.md)"
---

# The compiled pipeline

The deployment pipeline was always a projection — the GitHub Actions workflows describe what the LIBRARY produces, not the library itself. Now we're making that relationship explicit. The pipeline files could be compiled from library content. The source of truth for what gets deployed lives in the library. The deployment is the build output.

And the agent files that describe each teammate — those are compiled now. Run the compiler, the files regenerate. That's the same principle as my pipelines: the second time is boring because the first time captured the knowledge.
