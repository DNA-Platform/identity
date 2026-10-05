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

## Parity: the two machines hold the same data

Doug, 2026-09-28: *"You want the two boxes in the same state."* *"Yes data will be moved manually, but we don't get that very often."* *"You can adjust whatever is there to remove files that are there so that you can overwrite them with this data."* *"If there was some artifactual stuff that was ignored but never removed, delete it from github."*

The data under `library/data` moves by hand, rarely: a new delivery from the lab. Everything else is git: code goes out through a commit, the box runs it on a run branch and commits what it made, and `harvest` merges that branch into `main` here; the next run starts again from `main` on the box. So the one place the two machines can drift is the data - and they did: the 2x scans a pipeline's `prepare` phase builds from an export were rebuilt on the box when 33977's neuropil-subtracted export arrived on 2026-09-19, and not here, and nothing noticed for eight days.

**After every delivery, and whenever a result looks unlike the other dataset's, prove parity.** List every file under `library/data` on both machines with its size, then hash what the lists cannot settle; a folder that differs is removed here and replaced by the box's, received and checked by sha256 (the box's `prepare` built it from the export the config names). Nothing is left half-old.

**Nothing ignored stays tracked.** `git ls-files -i -c --exclude-standard` lists files git still carries that `.gitignore` excludes - caches and logs committed before the rule existed. They are removed from the repository (`git rm --cached`), and the list stays empty.
