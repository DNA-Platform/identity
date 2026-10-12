# The files git does not carry

- **author:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](01-als-remote.md)]

## The rulings

Doug, 2026-09-26: *"… using the FTP server or whatever to get the files not in git either from here or because we can run pip/npm install"*; on routing data through Git LFS against a storage budget, *"Don't listen about budgets"*; and *"It's okay if it takes a while for setup as long as it runs in the background."*

## The protocol

Git carries what is tracked. What `.gitignore` excludes — the scans under `library/data`, pipeline and analysis caches, logs — crosses over SSH, and each piece either comes from here or is rebuilt there; an environment is always rebuilt ([The environment](01-05-als-remote--the-environment.md)), never copied.

**Out to the box — `send`.** `ignored` lists what travels, as whole folders where git can name one. Each path is one unit: the sha256 of every file taken here, the path streamed as one `tar | gzip -1` over SSH into the same relative place in `main`, `sha256sum -c` run there, and only then recorded — `.git/als-remote/sent.tsv` and a manifest per path in `.git/als-remote/manifests/`, inside `.git` so never tracked. A path whose manifest already verifies on the box is skipped, so a stopped `send-list` resumes where it stopped. Identity and the venv are refused. Long lists run in the background.

**Back from the box — `receive`.** Only for what GitHub cannot take, chiefly what a run's `not-committed.tsv` lists: hashed on the box, streamed back, checked here.

**No path moves unverified, and nothing is overwritten on trust.** A mismatch stops that path and says so; it is never recorded as sent.

## The store: the pipelines' bulk products

Doug, 2026-10-12: *"You have to manage your git changes."* *"Maybe we can't be keeping all this data in memory. We'll need to have some sort of manifest or other document that can be checked in, so that it can inform a fresh puller how to replenish the data store if need be."* The artifacts had been committed whole since 2026-09-17, and each regeneration added another copy of thousands of files to the history: 3.0 GB of it when a rename would have added another 24,846 files.

So the bulky, remade products are **stored**, not committed. That means checkpoints, MEIs, metamers, moments, organized stacks, movies and verification arrays. The rule lives in `src/pipelines/store.py` (`is_stored`), and `.gitignore` carries the same lines. They stay where each pipeline writes them. Beside them, each pipeline's `artifacts/<dataset>/STORE.json` is tracked: every stored file with its size and sha256, and the command that remakes each kind. Code, configs, covers, figures and small records stay in git.

- `python -m pipelines.store record`: writes the manifests from what is on disk. Every run does this before it commits ([the run](01-03-als-remote--the-run.md)), so a run's branch carries its manifests and its worktree holds the files.
- `python -m pipelines.store check`: compares every recorded file against its digest. It reports what is missing, changed or unrecorded.
- `python -m pipelines.store replenish`: brings what this machine lacks from the box's `main`, folder by folder through `receive`. Each file is placed only if its digest is the manifest's; what the box lacks too is remade by the named command.
- `python -m pipelines.store adopt <checkout>`: on the box, at [close](01-08-als-remote--closing-a-run.md). It copies a run's stored files from its worktree into the box's `main`, checked the same way.

**The box holds the store.** Products are made there, and a fresh clone anywhere replenishes from it.

## Parity: the two machines hold the same data

Doug, 2026-09-28: *"You want the two boxes in the same state."* *"Yes data will be moved manually, but we don't get that very often."* *"You can adjust whatever is there to remove files that are there so that you can overwrite them with this data."* *"If there was some artifactual stuff that was ignored but never removed, delete it from github."*

The data under `library/data` moves by hand, rarely: a new delivery from the lab. Everything else is git: code goes out through a commit, the box runs it on a run branch and commits what it made, and `harvest` merges that branch into `main` here; the next run starts again from `main` on the box. So the one place the two machines can drift is the data - and they did: the 2x scans a pipeline's `prepare` phase builds from an export were rebuilt on the box when 33977's neuropil-subtracted export arrived on 2026-09-19, and not here, and nothing noticed for eight days.

**After every delivery, and whenever a result looks unlike the other dataset's, prove parity.** List every file under `library/data` on both machines with its size, then hash what the lists cannot settle; a folder that differs is removed here and replaced by the box's, received and checked by sha256 (the box's `prepare` built it from the export the config names). Nothing is left half-old.

**Nothing ignored stays tracked.** `git ls-files -i -c --exclude-standard` lists files git still carries that `.gitignore` excludes - caches and logs committed before the rule existed. They are removed from the repository (`git rm --cached`), and the list stays empty.
