# Build, then verify

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

One idea runs under every chapter of this book: **the environment must verify itself.** A setup that merely *ran* is a relay that hopes someone checks it later. A setup that proves each package imports, that the kernel resolves to the right interpreter, and that the loader returns the expected shapes is infrastructure — it carries its own guarantee. The whole gap between an environment that installs and an environment that is *correct* is the verification, so the smoke-test is built into the setup: the environment is not done when it installs, it is done when it checks itself green.

## Immutable-data discipline

Reproducibility starts from treating the source archives as read-only truth. The raw scans are never edited in place; they are extracted into a gitignored `extracted/` *beside* the originals, and everything downstream is made regenerable *from* the raw. The raw recording is the thing; the derived artifacts are descriptions of it, and descriptions are gitignored because they can always be rebuilt. [Datasets](../datasets/.cover.md) documents the raw the discipline protects.

## What "reproducible" means here

It is the sum of the pieces this book has recorded: the [pinned interpreter](01-two-pythons.md), the [lockfile](04-the-lockfile.md) with exact versions, git SHAs, and index URLs, the immutable raw data with everything else regenerable, CPU-only execution recorded as a deliberate choice, and the build-then-verify order. Reproducibility also has a [supply-chain tail](04-the-lockfile.md) — the git remotes the SHAs depend on — which is named rather than wished away.

## The rebuild, in seven questions

So the archaeology need not repeat, a rebuild answers these up front:

- **Python** — what version does the core framework support? Take the newest *supported*, side-by-side, never the system one.
- **Stack provenance** — is the research code on PyPI, and is that release current? (Usually stale or absent — plan for pinned git commits.)
- **Accelerator** — GPU or CPU? Check the hardware first, then choose the wheel and index.
- **Data** — what is the on-disk format, and which library defines it? One-file-per-trial (disk-bound) or consolidated?
- **Hidden deps** — assume research packages under-declare; budget for discovering dependencies through import failures.
- **Lock** — where does it live, and does it pin exact versions, git SHAs, *and* index URLs, with comments on the non-obvious constraints?
- **Verification** — what smoke-test proves the environment correct (imports, kernel resolution, a one-sample load), and is it part of the setup itself?

The difference between an environment that installs and one that is correct is entirely the last answer. The verified environment is what lets [The Altered Cortex](../the-altered-cortex/.cover.md) be run instead of merely planned.

---

[Previous: [The code and the loading](05-the-code-and-the-loading.md)]
