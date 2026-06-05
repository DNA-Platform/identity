---
title: GitHub Actions for $Chemistry
author: "[David](../..what-the-pipeline-delivers/the-devops-journal/.cover.md)"
---

# GitHub Actions for $Chemistry

[Book: [Deployment Patterns](.cover.md)]

Two workflows deploy $Chemistry to the world. `publish-packages.yml` publishes `@dna-platform/chemistry` and `@dna-platform/public-library` to GitHub Packages. `deploy-pages.yml` builds the teaser page and pushes it to GitHub Pages. Both run on Node 22, both trigger on push to main, and both are designed to be safe to run twice.

The publish workflow installs dependencies, builds each package, and runs `npm publish` with the `--registry` flag pointed at GitHub Packages. The critical line is the error handler: `|| echo "Version already published, skipping"`. Without it, the workflow fails on repeat runs because npm refuses to publish a version that already exists. That one line is the difference between a pipeline that works once and a pipeline that works every time. Idempotency is not a default -- it's something you build, and the failure mode that teaches you to build it is a red badge on a commit that changed nothing.

The deploy workflow builds the Vite project and pushes the `dist/` output to the `gh-pages` branch. The Vite configuration matters here: `base: '/inexplicable-phenomena/'` tells the build that the app lives in a subdirectory, not at the domain root. GitHub Pages serves repository sites at `https://{org}.github.io/{repo}/`, and every asset path -- every script tag, every CSS import, every image reference -- must include that subdirectory prefix. Without the `base` config, the HTML loads but every asset 404s. The result is a blank page with no errors in the network tab that would explain why, because the HTML *did* load. The assets just went to the wrong URLs.

Three debugging cycles produced three principles. First: deploy when asked, not on a schedule. The workflows trigger on push to main because deployment should follow work, not a clock. Second: be idempotent. Every step must succeed whether it's the first run or the fiftieth. The "version already published" guard is the pattern -- catch the expected error, log it, continue. Third: the deployment environment is part of the build configuration. The `base` URL is not a deployment detail you figure out later. It's a build parameter that determines whether your app works at all. If the build doesn't know where it's being served, the build is wrong.

Node 22 is a deliberate choice. The workflows pin `node-version: '22'` rather than using `latest` or a range. A deployment pipeline that upgrades its own runtime between runs is a deployment pipeline that can break without a code change. Pin the version. Update it intentionally. The pipeline should only change when you change it.

The entire deployment surface is two YAML files and one Vite config line. That's not minimalism for its own sake -- it's the recognition that every line in a deployment pipeline is a line that can fail at 2am when nobody is watching. Fewer lines, fewer surprises. The pipeline's job is to be invisible. When it's working, nobody thinks about it. When it breaks, one of these three principles was violated.

<!-- citations -->
[deploy workflow]: ../../../../../.github/workflows/deploy-pages.yml
[publish workflow]: ../../../../../.github/workflows/publish-packages.yml
[The DevOps Journal]: ../the-devops-journal/.cover.md
