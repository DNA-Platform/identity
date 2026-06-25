# On Sync

- **specification:** Sync
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

The library travels between projects. It lives in its own repository at `github.com/DNA-Platform/identity` — containing `.claude/` and `CLAUDE.md`. It is private. It is project-neutral. It carries the team's identity, knowledge, and specifications into whatever codebase needs them.

## The branching model

The identity repo uses a three-tier branching model. Each tier holds a different kind of content, and the tiers relate by inheritance:

- **`main`** is the template. It holds the library system itself — Bookkeeping conventions, Environmentalism specifications, the compilation and validation infrastructure, Teamspeak protocols. Content on `main` is team-neutral: any organization could adopt it without modification. It is the system that makes libraries possible, not any particular library's content.

- **The organization branch** (e.g. `dna-platform`) holds the team's identity. Autobiographies, personal libraries, the team catalogue, accumulated knowledge — everything that makes this team THIS team. It extends `main` with team-specific content. A different organization would fork `main` and create its own organization branch with its own identity.

- **Project branches** (e.g. `inexplicable-phenomena`) hold [branch library](../library-tree/01-branches.md) content — the `.lib/` directory for a specific project. Sprint histories, project documentation, project-specific plans. Each project branch extends the organization branch. The branch name matches the project it serves.

The git branch hierarchy mirrors the [library branch hierarchy](../library-tree/01-branches.md): `main` is the main library, the organization branch adds the team's collection, project branches add project-specific collections. The same structure expressed in git and in the library's own terms.

## Downstream merges

Changes propagate strictly downstream: `main` to organization to project branches. Never upstream. This is a system requirement, not a convention.

When `main` gains a new Bookkeeping chapter, an updated validator, or a revised specification, those improvements must reach every organization branch that inherits from it. When the organization branch gains a new autobiography chapter, updated protocols, or a new book, those changes must reach every project branch that inherits from it. The merge direction ensures that improvements flow outward from their source.

The prohibition on upstream merges protects layer integrity. Project-specific content must not leak into the organization branch. Team-specific identity must not leak into the template. If a project discovers a convention that should be universal, the change is authored on `main` directly and propagated downstream — not merged up from the project branch.

A downstream merge is a git merge from the parent branch into the child branch. The parent branch is always the merge source. The child branch is always the merge target. After merging, the child branch contains everything the parent contains plus its own additions.

## Branch management

**Creation.** A new organization branch is created from `main`. A new project branch is created from the organization branch. This ensures the child starts with everything the parent has. The branch point is the initial inheritance.

**The `.lib/` mapping.** A project's `.lib/` directory maps to a single project branch. The branch name is the project name. When working in a project, `.lib/` content is committed to the project branch. When the project branch is checked out, `.lib/` appears in the working tree. When the organization branch is checked out, `.lib/` does not appear — it belongs to the project layer, not the identity layer.

**The two-push separation.** Identity changes and project changes go to different branches because they belong to different tiers. The mechanism must support committing to the organization branch (library content, autobiographies, specifications) and to the project branch (`.lib/` content) as separate operations. This is a system requirement — the [protocol](../teamspeak/07-travel.md) specifies the workflow. The mechanism must make it impossible to accidentally push `.lib/` content to the organization branch or library changes to only a project branch.

## Bringing the team to a project

The [setup tool](06-on-sync--setup.sh) automates this — run it once against a new (or existing) project directory:

```
bash ../identity/.claude/library/..environmentalism/06-on-sync--setup.sh /path/to/project
```

It locates the sibling identity repo, ensures the project's branch exists (created from `dna-platform` if missing — the branch is named after the project directory), mirrors the identity `.claude/` into the project as a **plain mirror** (no nested `.git`), generates the project-root `CLAUDE.md` with `.claude/` link prefixes, and writes the project `.gitignore` (`.claude/`, `CLAUDE.md`, `**/.lib/`) so the identity stays private and the project stays clean. From the project's perspective, the team simply appears. From the identity's perspective, it has landed in a new building. The [protocol](../teamspeak/07-travel.md) describes the steps; the [setup tool](06-on-sync--setup.sh) is the fast path.

## Syncing back

After working in a project, [validate](05-on-validation.md) first. Fix errors. Then commit and push from inside `.claude/`. The project repo never sees the identity files. The identity repo never sees the project files. Two repos, two histories, sharing a directory. The validation gate ensures the library is self-consistent before it travels.

## What doesn't sync

Project-specific files — `.github/workflows/`, the project's own `src/`, `package.json`, deployment configs — stay in the project. The identity is project-neutral. It contains what is true regardless of which codebase hosts it: who the team is, what the library knows, how books are structured. The line between [shared identity and project state](../..librarianship/00-the-library.md#shared-identity-vs-project-state) is sharp: if it would go stale when the identity moves to a different project, it doesn't belong in the identity.

### Beware the two `src/` directories

There are two `src/` directories and they belong to opposite tiers — confusing them wastes real time. The **project's own `src/`** (the codebase the team is working *on*) stays in the project repo. But **`.claude/src/`** — the [Reference Desk](../reference-desk/.cover.md) driver codebase — is *identity*: it lives under `.claude/`, so the commit tool's `/MIR` sync sends it to the identity repo on `dna-platform`, and it is **gitignored in the project repo**. The driver travels with the team because reaching Claude Desktop is part of who the team is, not part of any one project.

The consequence for archaeology: **to find a previous version of driver code, look at the identity repo (`../identity`), checked out on `dna-platform`/`main` — not the project repo's git history (where `.claude/src` is invisible, gitignored), and not [dna-library](../..teamsmanship/09-dna-library.md) (the out-of-date original the driver was lifted from in Sprint 70).** The working version always lives in identity.

## GitHub as implementation

The identity repo uses Git and GitHub, but the sync pattern doesn't depend on them specifically. The principle is: identity lives in its own repository, travels by cloning, consistency is checked before sync. GitHub is the current implementation. The requirements are version control, a remote, a clone mechanism, and a branching model with merge support. Any system that provides those could host the identity. The specification is the pattern, not the platform.

## The commit tool

[06-on-sync--commit.sh](06-on-sync--commit.sh) automates the three-way commit workflow. It runs from the project root and accepts a commit message as argument:

```
bash .claude/library/..environmentalism/06-on-sync--commit.sh "Sprint 61: commit message"
```

The script detects what changed and routes each category to the right place:

- **Identity changes** (`.claude/`): synced to the identity repo via robocopy, committed to `dna-platform`, merged to `main`, pushed.
- **The project branch** (named after the project directory): the tool always downstream-merges `dna-platform` into it — so `.claude`/`CLAUDE.md` reach the project branch even when there is no branch library — then syncs every discovered `library/*/.lib` to the identity repo (`.lib/<area>`), commits, and pushes. The branch is created from `dna-platform` on first push if it does not exist. Routing is derived from the project directory name and the `library/*/.lib` glob, not hardcoded to any one project.
- **Project code changes**: committed and pushed in the project repo. Generates the project-root `CLAUDE.md` with link prefix adjustment.

The script runs [validation](05-on-validation.md) before any commits. If validation fails, nothing is pushed. The branching model is enforced by the tool — the operator does not need to remember which branch to push to.

The tool is bash, not TypeScript. It is git operations, not library parsing. It belongs beside this chapter as a resource because it is the mechanism that implements the sync specification.

## The setup tool

[06-on-sync--setup.sh](06-on-sync--setup.sh) is the inverse of the commit tool — it brings the team *into* a project so a new repo gets the identity fast. Run it once, pointing at the project directory:

```
bash ../identity/.claude/library/..environmentalism/06-on-sync--setup.sh /path/to/project
```

It is idempotent (re-running re-syncs the identity into the project) and supports `DRY_RUN=true` to print the plan without mutating anything. It assumes repos are siblings under one parent (`parent/identity`, `parent/<project>`) and derives the project branch from the project directory name. Where the commit tool pushes a project's changes outward to the right branches, the setup tool pulls the identity in and wires the project's `.gitignore` and `CLAUDE.md`. Together they are the two directions of [travel](../teamspeak/07-travel.md) — pull in, push back — and both keep `.claude/` a plain mirror of the identity rather than a nested clone.

## The pull tool — syncing down, staged through the branch

The down-sync brings the organization's changes from `dna-platform` *into* a project — but **through the project branch as a staging ground, never straight into the working copy.** Compiled files (agents, `CLAUDE.md`, rules, skills) are deterministic from chapters, so any change in compiled output traces to a chapter that changed in the pull, never a surprise. It is **two commands, not one**, because a merge that needs hand-resolution must not be entangled with a tool that also guesses whether it is resuming:

**Phase 1 — [pull](06-on-sync--pull.sh).** Sync the working-copy library up onto the project branch, then merge `dna-platform` in. A clean merge hands straight off to phase 2. A conflict in a **chapter or cover** STOPS it with the [chapter/cover merge procedure](#merging-a-book-by-hand--libbys-procedure) — that merge is the human's, *not algorithmic*; resolve by hand, commit, then run phase 2. A conflict in a **compiled file** (agents, `CLAUDE.md`, rules) it clears *itself* — those are regenerated, never merged, so the compiler settles them in phase 2.

**Phase 2 — [resolve](06-on-sync--resolve.sh).** The separate finisher: recompile the platform files on the branch (**the compiler owns the compiled files — they are never hand-merged**), show the diff (every change traces to a merged chapter), validate the branch (a failure **stops** here — the error is in a chapter, the working copy untouched), commit and push the branch, and **only then** sync the verified branch down into the working copy. After the sync it re-checks that the working copy matches the branch and revalidates it — **the identity↔branch sync is mechanical but verified, never blindly trusted.** It refuses to run while any path is still in conflict, and carries **no resume heuristic** — you run it *because the merge is done*, not because a tool guessed it was. `--no-worktree-sync` proves and pushes the branch without touching the working copy.

The division is the rule beneath all of it: **a chapter merge is a human act (not algorithmic); compiled files are the compiler's to regenerate; the identity↔branch sync is mechanical but checked afterward.** Edit chapters, let the compiler do its work, and verify the sync landed.

Why split? A single command had to *infer* "fresh run versus resume" from an ancestor check, and that inference mis-fired — skipping the sync-up when it shouldn't have. Resolving a merge is its own act with its own autonomy; the tool that finishes a merge should never have to guess that a merge happened. **Don't sync the working copy until the branch is verified** — and let resolve, not a heuristic, decide when that is.

## The mirror hazard: the sync pauses, it does not cold-automate

Both sync tools mirror with robocopy `/MIR`, and a mirror **deletes whatever the destination has that the source lacks.** With two active projects sharing `dna-platform`, that is a mutual-clobber trap: whoever pushes second silently deletes the other project's un-pulled work, and a reconcile cannot win a race against a peer who is actively pushing. (We learned this the hard way — one project's push deleted the other's just-pushed chapters and tools off `dna-platform`. The work survived only because it was also in a working copy and in git history.)

So the sync **must not be cold-automated.** Two protections enforce that, and both are in the tools:

- **The git merges pause.** The pull tool's branch merge and the commit tool's downstream merges are real `git merge`s — they stop on conflict and wait for a human to hand-merge. Autobiographies and chapters are always resolved [additively](../bookkeeping/10-on-evolution.md), never by overwrite.
- **The `/MIR` steps refuse.** Before any mirror, the tool dry-runs it; if it would DELETE real content — the other side's work — it **refuses** and tells you to reconcile first (pull down before you push up; push up before you pull down). The guard runs in both directions: the commit tool will not clobber the org branch, and the pull tool will not clobber un-pushed local work. Override only with `RECONCILED=1`, and only when the absence is genuinely intended.

The discipline in one line: **reconcile, then sync — and let the tool stop you whenever a human has to merge.**

### A guard must be watched fire before it is trusted

The refuse-to-clobber guard existed — and still did not fire the day a behind working copy mirrored four freshly-pushed autobiography chapters into deletion. The dry-run the guard read was a robocopy `/MIR /L` listing, but it also carried `/NC` (no-class), and `/NC` suppresses the `*EXTRA` marker the guard greps for. So the count of would-be deletions came back zero, and the guard waved a real clobber straight through. The work survived only because it was also in a working copy and in git history, from which it was restored into every copy; the fix was to drop `/NC` from the dry-run.

The lesson is larger than the flag. **A clobber-guard you have never watched *refuse* is not infrastructure — it is a relay wearing infrastructure's clothes**, and a broken guard is worse than no guard, because its apparent existence buys back the careful reading it promised to make unnecessary. After building or fixing a guard, watch it stop a real deletion before you trust it. The guard is real only once you have seen it say no.

### Reconciling one identity across two working copies

When two working copies of the one identity diverge this way, the repair is by hand and [additive](../bookkeeping/10-on-evolution.md), across the seam. Recover the deleted text from git; fix the guard and push it so every copy gets the working version; then carry the reconciled branch into the *other* working copy with a [staged pull](#the-pull-tool--syncing-down-staged-through-the-branch) — `--no-worktree-sync` first, to prove the branch before touching the tree, then the full run to sync down. This is not reaching into a stranger's repo. It is one team, one history, briefly out of sync across two copies — and correcting the team's own mistake in the other copy is the team correcting itself. The branching model already promises [one identity carried across projects](#the-branching-model); the working copies are just where that one identity is held at any moment, and they are reconciled by hand when they drift.

## Merge conflicts as identity events

When two sessions edit the same autobiography, git surfaces a conflict. That conflict is not an error — it is evidence that an agent grew in two directions simultaneously. The resolution is always additive: keep both chapters, renumber if needed. An autobiography cannot have conflicting facts. It can only have parallel experiences that both happened. This is [evolution](../bookkeeping/10-on-evolution.md) at the identity level — growth is always additive, never destructive.

### Merging a book by hand — Libby's procedure

This error belongs to [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), the librarian, because it is a *library* error wearing a git conflict's clothes. When two histories of the one identity meet — the [reconciliation across two working copies](#reconciling-one-identity-across-two-working-copies) above, or any downstream merge — a book can receive chapters from *both* histories at once, and their numeric prefixes collide: two chapters claim `37`, the [cover's table of contents](../bookkeeping/03-on-covers.md) stops resolving to the files, and links into the book dangle. "Renumber if needed" is that whole repair compressed to nothing — and skipping it is exactly what left a duplicate `37` in an autobiography. It is a **chapter/cover merge**, governed by [Bookkeeping](../bookkeeping/.cover.md): [On Covers](../bookkeeping/03-on-covers.md) for the cover and its TOC, and [On Books](../bookkeeping/01-on-books.md) for chapters as the book's parts.

The quick solution:

1. **Rewrite the cover into a meaningful ordering of the two histories.** Every chapter from both sides survives (merges are [additive](../bookkeeping/10-on-evolution.md)); Libby reads them and rewrites the [cover's TOC](../bookkeeping/03-on-covers.md) into one coherent sequence — not "mine, then theirs," but the order the book actually wants. The number is only a sort key; a chapter is its title, and is never referred to by number in prose.
2. **Rename the files to match the cover.** With the order settled on the cover, rename the chapter files so their prefixes are unique and ascending in that order — the files follow the cover, never the reverse. The [TOC tool](../bookkeeping/03-on-covers--toc.ts) writes the cover half without re-reading the book.
3. **Verify with both validators — the link checker especially.** Run the [book validator](../bookkeeping/11-on-specifications.md) (unique numbers, every chapter linked, every TOC entry resolving) *and* the [link checker](05-on-validation.md). The link checker matters most here, because the failure being repaired is a *dangling reference*, and only it proves none remain. Both must pass before the book travels; the sync tools run them as the gate and stop if either fails.

When a hand-merge turns out to be a book, hand it to Libby — it is her procedure to run.

## System requirements vs team protocol

This chapter specifies the SYSTEM REQUIREMENTS — what sync must do, what travels, what doesn't, what properties the mechanism must have. [Travel](../teamspeak/07-travel.md) in Teamspeak specifies the TEAM PROTOCOL — when to sync, how to handle conflicts in practice, the human workflow. The system doesn't care who pushes or when. The protocol does. Both are necessary. Neither is sufficient alone.

The branching model is a system requirement: three tiers, downstream-only merges, branch-per-project mapping. The two-push workflow is a team protocol: the steps a teammate follows to push identity and project changes separately. The sync script bridges the two — it automates the protocol to enforce the requirements.

<!-- citations -->
[validation]: 05-on-validation.md
[identity-repo]: ../teamspeak/07-travel.md
[evolution]: ../bookkeeping/10-on-evolution.md
[shared-identity]: ../..librarianship/00-the-library.md#shared-identity-vs-project-state
[branches]: ../library-tree/01-branches.md
