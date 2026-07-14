# The lockfile

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

Once the stack imports green, the verified-working state is frozen so it can be rebuilt exactly. The freeze uses **pip-tools** and two files: [`requirements.in`](../../../requirements.in) — human intent, with comments explaining *why* each non-obvious pin exists — compiled to [`requirements.txt`](../../../requirements.txt), the frozen truth.

## What the lock must capture

Reproducibility for this stack means three kinds of pin, all present in `requirements.txt`:

- **exact versions** for the PyPI dependencies;
- **exact git commit SHAs** for the git-only research packages (the [Sensorium triple](03-the-stack-and-why-it-fought.md)) — a SHA, not a branch, because a branch drifts;
- **the index URL** for the torch CPU wheel, since its `+cpu` local tag will not resolve from plain PyPI.

`requirements.in` carries the *reasons* — why `neuralpredictors`/`nnfabrik` point at git master, why `datajoint<1`. Uncommented pins rot: the next person cannot tell a load-bearing constraint from an accident, and removes it.

## Two choices worth recording

**Freeze a verified-working venv; do not re-resolve.** The lock is taken from the environment that was just watched import and run, not from a fresh resolution — a fresh re-resolve drifts toward newer, untested versions and reintroduces exactly the skew the pins were added to defeat.

**pip-tools and a venv, not conda.** Everything needed is pip-installable — torch from the official index, the research triple from GitHub — while `neuralpredictors`/`nnfabrik`/`sensorium` are not reliably on conda-forge. conda would force a fragile conda-plus-pip-plus-git mix; a single venv with a pip-tools lock is the simpler, more honest record.

## The supply-chain tail

Pinning to git SHAs moves part of the reproducibility off PyPI and onto specific GitHub repositories: the lock pins the past, but it cannot guarantee those remotes stay alive. The mitigation is to vendor or fork the critical research dependencies — and, at minimum, to name the risk in the lock so it is a known exposure rather than a silent one. The lockfile is, in this sense, the environment's autobiography: the exact, commented account of what was built and why.

---

[Previous: [The stack, and why it fought](03-the-stack-and-why-it-fought.md)] | [Next: [The code and the loading](05-the-code-and-the-loading.md)]
