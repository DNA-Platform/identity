# The lockfile

- **author:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

[Book: [The Build](.cover.md)]

Once the stack imports green, the verified-working state is frozen so it can be rebuilt exactly. The freeze uses **pip-tools** and two files: [`requirements.in`](../../../requirements.in) — human intent, with comments explaining *why* each non-obvious pin exists — compiled to [`requirements.txt`](../../../requirements.txt), the frozen truth.

## What the lock must capture

Reproducibility for this stack means three kinds of pin, all present in `requirements.txt`:

- **exact versions** for the PyPI dependencies;
- **exact git commit SHAs** for the git-only research packages (the [Sensorium triple](03-the-stack-and-why-it-fought.md)) — a SHA, not a branch, because a branch drifts. **Three of the six git installs are pinned here; the other three cannot be, and are recorded elsewhere — see below;**
- **the index URL** for the torch CPU wheel, since its `+cpu` local tag will not resolve from plain PyPI.

`requirements.in` carries the *reasons* — why `neuralpredictors`/`nnfabrik` point at git master, why `datajoint<1`. Uncommented pins rot: the next person cannot tell a load-bearing constraint from an accident, and removes it.

## Two choices worth recording

**Freeze a verified-working venv; do not re-resolve.** The lock is taken from the environment that was just watched import and run, not from a fresh resolution — a fresh re-resolve drifts toward newer, untested versions and reintroduces exactly the skew the pins were added to defeat.

**pip-tools and a venv, not conda.** Everything needed is pip-installable — torch from the official index, the research triple from GitHub — while `neuralpredictors`/`nnfabrik`/`sensorium` are not reliably on conda-forge. conda would force a fragile conda-plus-pip-plus-git mix; a single venv with a pip-tools lock is the simpler, more honest record.

## What the lockfile cannot express, and where the pin actually lives

**A lockfile records the installs it can describe, not every install.** Ours pins three of the six
git packages in this environment:

```
requirements.txt
  neuralpredictors @ git+...@985ea8cffacb75ebaa193e50fcdb569ca89421ae
  nnfabrik         @ git+...@29f22bc95841897d734532c02b77423e602ba21f
  sensorium        @ git+...@c433fed25f234724fd9adf0cef3c260a2068b1fa
```

`mei` and `nnvision` are **deliberately absent**, and `requirements.in` says why at line 37: they
must be installed **`--no-deps`**, and *"`--no-deps` for a single package cannot be expressed in a
requirements file."* `mei`'s metadata pins `datajoint<=0.12.9`, which cannot import on Python 3.11
and would break `sensorium`. So the install is a documented manual step, and the lockfile is silent
about it by design.

**Which leaves a real question: after the fact, what commit was actually installed?**

**`pip` already recorded it.** Every VCS install writes
`<pkg>.dist-info/direct_url.json` containing the resolved commit:

```bash
python - <<'PY'
import pathlib, json
for d in pathlib.Path(".venv/Lib/site-packages").glob("*.dist-info"):
    f = d / "direct_url.json"
    if f.exists():
        j = json.loads(f.read_text())
        if "vcs_info" in j:
            print(d.name.split("-")[0], j["vcs_info"]["commit_id"], j["url"])
PY
```

Run against this environment it returns **six**, and the three the lockfile pins match it exactly.
It also returns two things the lockfile never mentions:

| package | commit | why the lockfile is silent |
|---|---|---|
| `mei` | `ab9cc647d057…` | `--no-deps`, cannot be expressed |
| `nnvision` | `79baa6b062dc…` | `--no-deps`, cannot be expressed |
| **`reconstruction`** | `01d0586d5eba…` | **installed and never declared** |

That last row is worth pausing on. `reconstruction` (Cobos 2022) is **installed**, and the metamer
code deliberately does **not import it** — `import reconstruction.optimization` connects to a
DataJoint database at import time, so two pure-torch primitives are vendored verbatim instead, with
a citation to this exact commit. **The package is present, unused, undeclared, and the vendored copy
cites the SHA that `direct_url.json` confirms.**

### The lesson, in one line

> **A package reporting version `0.0` is not unpinned. It is unpinned in the place people look.**

Three of our lab packages report `0.0` or `0.0.0` because they carry no version metadata. Reading
only `importlib.metadata.version()` makes an environment look unrecoverable when it is fully
recorded. **Check `direct_url.json` before concluding a build cannot be reproduced** — and read it
even when the lockfile looks complete, because it is the only record that lists what was installed
*outside* the lockfile.

*Found while documenting the twin pipeline for the plenoptic replication
([Sprint 13](../projection/13-sprint-13--reading-the-machine-we-built.md)), where the missing
commits had been filed as a P1 risk — "the twins can be loaded but not rebuilt" — on the strength of
a version string.*

## The supply-chain tail

Pinning to git SHAs moves part of the reproducibility off PyPI and onto specific GitHub repositories: the lock pins the past, but it cannot guarantee those remotes stay alive. The mitigation is to vendor or fork the critical research dependencies — and, at minimum, to name the risk in the lock so it is a known exposure rather than a silent one. **The `direct_url.json` census above is the audit that makes that exposure countable**: six repositories, named, with the commits each build depends on. The lockfile is, in this sense, the environment's autobiography: the exact, commented account of what was built and why.

---

[Previous: [The stack, and why it fought](03-the-stack-and-why-it-fought.md)] | [Next: [The code and the loading](05-the-code-and-the-loading.md)]
