# Sprint 46 — The Push

**Lead:** Arthur (Architect), Adam (Automation)
**Sprint goal:** Push the team's identity to the identity repo. Clean, complete, with a README that explains what this is and how to use it.

## Approach

Doug's direction: edit here, push there. The identity repo is a mirror of `.claude/` — not a separate workspace. We copy our `.claude/` and `CLAUDE.md` into the identity repo, add a README, commit, push.

The identity repo already has old content (a generic project template). We overwrite everything — Doug said "completely destructive."

## What goes to the identity repo

Everything in `.claude/` here, restructured slightly:

```
identity/                        <- the repo root
  README.md                      <- NEW: explains what this is and how to use it
  CLAUDE.md                      <- copied from our root
  .claude/
    agents/                      <- the full team identity
      team/                      <- agent files + registry
      roles/
      abilities/
      library/                   <- the full library (field guide, protocols, projects, coding policy, team catalogue, autobiographies)
      docs/                      <- Chemistry reference documentation
      src/                       <- shared scripts (validator, utilities)
      perspective/
    projects/                    <- sprint plans from ALL projects
      inexplicable-phenomena/    <- our sprint plans
    skills/                      <- slash commands
    settings.local.json
    package.json
```

## What the README says

The README is the bootstrap document — the one file someone reads before the library exists. It explains:

1. **What this is:** the team's identity, library, and operating infrastructure — private, shared across projects.
2. **How to use it:** clone into a project's root as `.claude/`, copy `CLAUDE.md` to the project root.
3. **How to sync:** edit in the project, commit and push from inside `.claude/`.
4. **What the team is:** eight agents with autobiographies, a library with catalogues, protocols for voice and discussion.

## What the protocols book gains

A new chapter: "The identity repo" — how to bring the team to a project, how to sync back, the bootstrap sequence. This is the library's version of the README, written for agents who are already awake.

## Steps

1. Write the README for the identity repo
2. Write the protocols chapter about the identity repo
3. Clean the identity repo (remove old template content)
4. Copy `.claude/` and `CLAUDE.md` to the identity repo
5. Commit and push
6. Verify: clone fresh, check the waking-up path works

## Definition of done

- [ ] Identity repo contains the full `.claude/` and `CLAUDE.md`
- [ ] README.md explains what this is and how to use it
- [ ] Protocols book has a chapter on the identity repo
- [ ] Old template content removed
- [ ] Pushed to `git@github.com:DNA-Platform/identity.git`
- [ ] The waking-up path (CLAUDE.md → Librarianship → project chapter → last autobiography chapter) works from the identity repo's content
