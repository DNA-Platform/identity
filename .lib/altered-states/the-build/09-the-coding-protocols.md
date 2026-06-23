# The coding protocols

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

This is the policy the team operates by: **how the analysis code is tested, and how it is allowed to change.** Unlike [the organization sketch](08-the-organization.md) — a plan for code not yet built — these protocols are decisions in force now. They are short on purpose: a teammate should be able to recall how we test and how the code evolves from this page alone. They exist because a research codebase rots the moment an analysis quietly edits the shared core to make its hypothesis land.

## How we test — the dial

The test runner is a dial, configured in [`pyproject.toml`](../../../pyproject.toml) via pytest markers:

- `pytest` — run everything
- `pytest -m core` — just the shared library, the stable spine
- `pytest -m <analysis>` (e.g. `pytest -m v1_doi`) — one analysis

Easy to run all, easy to run a few. Tests live under [`src/tests/`](../../../src/tests/) for the core and beside each analysis (`analyses/<owner>/<name>/tests/`); both are on pytest's `testpaths`.

**The modes.** `pytest -m core` is the **always-on gate** — fast, run on every change; the spine must stay green. The full `pytest` run — including the **expensive dataset and experiment tests** — is run **sometimes** (before a merge, after a core change), not on every edit. **Experiment tests live beside their experiment** (the dated [`experiments/`](08-the-organization.md#the-experiments-layer-experiments) folders), carry their own marker, and **never gate the core** — a throwaway probe must never be able to redden the shared spine.

## Two kinds of tests

1. **Test the core.** The shared `library/` (io, model, **stats**, viz) is unit- *and* **property-tested** (Hypothesis). `stats/` — the nulls and confound regression — is hammered hardest, because every "drug effect" claim inherits its correctness; property tests check it against adversarial inputs, not just the cases we happened to try.
2. **Test the analysis outputs.** Each analysis **regression-pins** its expected results, so when the core changes, the diff shows exactly *what moved* in every analysis.

## The core/volatile contract

- An analysis **imports `library/` and never edits it.** The shared core is the stable spine; analyses are leaves that hang off it.
- The destabiliser is never an analysis *adding* — it is an analysis needing the core to *change* to make its hypothesis land (the elegant-assumption trap). So **"need the core to change?" is a versioned PR with a test, not a quick edit.**
- The boundary is a **social contract, not a directory**: it holds because the team treats a core change as a deliberate, tested, reviewed act.

## How the code evolves

- **Promotion, not rewrite.** The path is *a personal analysis → a project → a project heavy enough to earn its own `library/` + `.lib/`* ([the evolution path](08-the-organization.md#the-evolution-path)). Code that earns shared use is **moved** up into `library/`; nothing is rebuilt to move a level — the same spine/leaf promotion the [branch libraries](../../../.claude/library/library-tree/.cover.md) use.
- **A forced adapter is owned by the analysis that needs it** until many analyses reuse it, then it promotes. External formats are quarantined in [adapters](08-the-organization.md); the interface stays abstract.
- **Status honesty.** Each analysis declares `status` (`alive` / `dead` / `superseded`) in its manifest; a hypothesis that dies is marked dead, or the registry reports a dead result as live, with authority.

## The per-task loop

Every increment follows one rhythm (from [Sprint 3](../projection/03-sprint-3--model-free-first.md)): **think it through → do it → test it → catalogue it → review.** Nothing is "done" until it is tested and catalogued. Doing is small, tested, catalogued increments — one contract proven before the next, never a giant branch. This is [Build, then verify](06-build-then-verify.md) carried from "the environment installs green" to "the science reproduces green."

## Where the policy lives

- The dial and markers — [`pyproject.toml`](../../../pyproject.toml); the core smoke test — [`src/tests/`](../../../src/tests/).
- The structure these protocols govern — [The organization](08-the-organization.md) (the `library/` vs `analyses/` design) and the [toolchain index](07-the-toolchain-index.md) (what is installed).
- The reasoning behind the contracts — Nancy's think records: [the toolchain and what to leave out](../../../.claude/library/..teamsmanship/..team/nancy/thinking/01-the-toolchain-and-what-to-leave-out.md) and [a codebase that outlives the project](../../../.claude/library/..teamsmanship/..team/nancy/thinking/02-a-codebase-that-outlives-the-project.md).
- The sprint that executes them — [Sprint 3 — Model-Free First](../projection/03-sprint-3--model-free-first.md).

---

[Previous: [The organization](08-the-organization.md)]
