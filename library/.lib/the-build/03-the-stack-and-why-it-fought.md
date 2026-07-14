# The stack, and why it fought

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

The modelling tier is `torch` + `torchvision` and the **Sensorium triple** — `neuralpredictors`, `nnfabrik`, `sensorium`. This is the tier that fought, and every fight had the same shape: the install succeeded and the failure waited until *import* or later. The lesson under all of them — **installing is not importing, and importing is not running** — is why a clean dependency resolve proves nothing and every package has to be smoke-tested.

## torch is an explicit wheel choice

`torch` ships a different build per accelerator and the default index can hand over the wrong one. The actual hardware was checked (`nvidia-smi`) rather than assumed — no NVIDIA GPU — so the **CPU** wheel was chosen deliberately, from the PyTorch CPU index. Only model *training* would want a GPU; loading and exploring are pure-CPU. The index URL is recorded in the [lockfile](04-the-lockfile.md), because a local-version tag like `+cpu` will not resolve from plain PyPI.

## Three fights in the research triple

**The latest PyPI release was pre-3.10.** `neuralpredictors` 0.3.0 and `nnfabrik` 0.2.1 — the newest releases on PyPI — still do `from collections import Iterable`, an import Python removed in 3.10. They installed without complaint and then exploded at import. The fix was to pin both to their **git masters**, which are months ahead of PyPI and already fixed; `sensorium` is not on PyPI at all and is git-only. The general rule: research-lineage packages are git repositories wearing a PyPI costume — the working code lives on a GitHub master ahead of the last tag, so default to a pinned git **commit SHA**, never the stale release and never a bare branch name (a branch is a moving target).

**A transitive dependency was too new.** With `nnfabrik` on git master, the next failure was `cannot import name 'Schema' from 'datajoint.schemas'`: the sinzlab code targets the pre-1.0 DataJoint API, but pip had pulled `datajoint` 2.2.4. Pinning `datajoint<1` resolved 0.14.9 and cleared it. Transitive version skew is the deepest enemy, because the newest transitive dependency is frequently the wrong one when older code targets an old API — and the `ImportError` names the exact missing symbol, which tells you which package to pin below which major.

**Two dependencies were undeclared.** `sensorium` imports `datajoint` and `git` (GitPython) but declares neither in its metadata. Each surfaced as a `ModuleNotFoundError`, one import at a time. The discipline is to read the traceback and add the dependency, not route around it: each missing-module error is the package naming its true dependency list, line by line.

## The gates

Because the failures hide past the install, two gates verify the stack: first an **import smoke-test of every top-level package** (the eight imports all green), then a **tiny real operation** — load a model, one forward pass, load one [data sample](../datasets/.cover.md) — because import-green is still not runs-green. What those gates protect is captured and made repeatable by the [lockfile](04-the-lockfile.md).

---

[Previous: [Certain before fragile](02-certain-before-fragile.md)] | [Next: [The lockfile](04-the-lockfile.md)]
