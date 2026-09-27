# How they are organized

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

[Book: [The Pipelines](.cover.md)]

The layout, so a file's place says what it is. Everything below is under the repository root.

## A pipeline's package

```
src/pipelines/<name>/
    .cover.md        what it is and how to run it - its documentation (no README.md anywhere)
    __main__.py      so `python -m pipelines.<name>` runs the conductor
    run.py           the conductor: the phases in order, the command line
    <phase>.py       one module per concern, named for it
    check.py         the checks: each writes to artifacts/<animal>/verification/
    artifacts/
        <animal>/    everything the pipeline makes for one dataset
```

**Artifacts are local to the pipeline that made them, filed by dataset.** Doug, 2026-09-17: *"I want
artifacts to be local to the pipeline that generated them."* They are tracked in git - they take long
to make - and nothing enters a pipeline's artifacts that the pipeline did not produce there: a result
is ported by porting the code and running it, never by copying the output in.

Inside `artifacts/<animal>/`:

| folder | what | who looks |
|---|---|---|
| `figures/` | exactly the figures Doug asked for, and nothing else | Doug |
| `verification/` (mei, metamer), `validation/` (digital_twin) | the checks, beside their numbers | the team |
| named caches - `mei/`, `organized/`, `moments/`, `seeds/`, ... | the products, each folder named for what it holds | the pipelines |
| `build.json` (digital_twin) | the canonical build | every reader of a twin |

## Around the pipelines

| place | what |
|---|---|
| `src/pipelines/.cover.md` | the four pipelines and the distinction between them and their checks |
| `src/pipelines/.analyses/` | scratch studies that checked a pipeline, mirroring its shape; nothing imports from them |
| `src/analyses/<name>/` | Doug's analyses, reading the pipelines' artifacts |
| `library/data/<animal>/` | **each dataset in its own folder**: the lab's exports as delivered, the scans prepared at each scale beside them, the spontaneous recordings, the registered coordinate files |
| `src/pipelines/digital_twin/configs/<animal>.toml` | every decision about a dataset, each override with its justification; `defaults.toml` for the rest |
| `runs/<branch>/` | a box run's record - its command, log, environment and exit - committed on its branch and harvested |
| `library/.lib/` | this branch library: what the team knows, named; never inside the project's code |

## What never enters the tree

- **Bytecode.** Here `sys.pycache_prefix` is set by `altered_states_pycache.pth` in the venv's
  site-packages; on the box `PYTHONPYCACHEPREFIX` points into `.tools`. A `__pycache__` under `src/` is a
  regression.
- **Orphans.** A cache, log or folder that no code writes any more leaves in the change that orphaned it.
- **Scratch.** A probe or a one-off look lives in the run's record or the session's scratchpad.
- **A second Python.** One venv, the root `.venv`, its drift from the lock recorded; never rebuilt
  without a freeze and Doug's word.

## Naming

Names are read far more often than they are written, by a human scanning: a few plain words,
hyphenated, long enough to say what the thing is and short enough to scan - `explained-variance.png`,
`comparison.png`, `spectrum-and-filter.png`. Folders carry context so names need not repeat it, but a
folder is a click, and a level is added only when it groups what will be looked for together. No
abbreviations to decode, and no labels for which of our trials made a thing. The rules and Doug's words
are [chapter 5](05-the-tree-doug-walks.md#names-and-the-folders-that-give-them-context).

---

[Previous: [The rules every pipeline follows](03-the-rules-every-pipeline-follows.md)] | [Book: [The Pipelines](.cover.md)] | [Next: [The tree Doug walks](05-the-tree-doug-walks.md)]
