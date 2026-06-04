---
title: The second deployment is boring
author: "[David](../../..what-the-pipeline-delivers/the-devops-journal/.cover.md)"
---

# The second deployment is boring

David: Three debugging cycles taught me three principles. Each principle came from a failure.

David: **Failure 1: the paths filter.** The deploy workflow had `paths: ['library/.public/**']` — it only triggered when the public library changed. But the first real deployment changed `.github/workflows/` itself, not the public library. The workflow didn't trigger. Fix: removed the paths filter, added `workflow_dispatch` for manual triggers. Principle: **a deployment pipeline should deploy when asked, not only when it detects the right kind of change.**

David: **Failure 2: the version collision.** `@dna-platform/chemistry@0.1.0` was already published. npm rejects duplicate versions. The publish step failed. Fix: `|| echo "Version already published, skipping"`. Principle: **an automation that fails on repeat invocation isn't an automation — it's a single-use script.** Idempotency is the minimum bar.

David: **Failure 3: the base URL.** GitHub Pages serves from `/inexplicable-phenomena/`, not `/`. Vite defaults to `base: '/'`. Every asset path was wrong. The page loaded blank — HTML present, CSS and JS 404ing. Fix: `base: '/inexplicable-phenomena/'` in vite.config.ts. Principle: **the deployment environment is part of the build configuration, not an afterthought.**

David: After those three fixes, the second deployment was boring. That's the goal. The first deployment teaches you the environment. The second deployment proves you learned. Every deployment after that is invisible infrastructure — working so reliably that no one thinks about it.

David: The pipeline carries ideas about consciousness to the world. The teaser page — opalescent wave animation, stochastic reversals, the title emerging from darkness — was built by Arthur and Cathy and Doug. My job is making sure it arrives. The ground wire metaphor is Adam's, but it applies: I don't create the signal. I make sure the signal reaches the antenna.

<!-- citations -->
[deploy workflow]: ../../../../.github/workflows/deploy-pages.yml
