# The files git does not carry

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The rulings

Doug, 2026-09-26: *"… using the FTP server or whatever to get the files not in git either from here or because we can run pip/npm install"*; on routing data through Git LFS against a storage budget, *"Don't listen about budgets"*; and *"It's okay if it takes a while for setup as long as it runs in the background."*

## The protocol

Git carries what is tracked. What `.gitignore` excludes — the scans under `library/data`, pipeline and analysis caches, logs — crosses over SSH, and each piece either comes from here or is rebuilt there; an environment is always rebuilt ([The environment](34-05-als-remote--the-environment.md)), never copied.

**Out to the box — `send`.** `ignored` lists what travels, as whole folders where git can name one. Each path is one unit: the sha256 of every file taken here, the path streamed as one `tar | gzip -1` over SSH into the same relative place in `main`, `sha256sum -c` run there, and only then recorded — `.git/als-remote/sent.tsv` and a manifest per path in `.git/als-remote/manifests/`, inside `.git` so never tracked. A path whose manifest already verifies on the box is skipped, so a stopped `send-list` resumes where it stopped. Identity and the venv are refused. Long lists run in the background.

**Back from the box — `receive`.** Only for what GitHub cannot take, chiefly what a run's `not-committed.tsv` lists: hashed on the box, streamed back, checked here.

**No path moves unverified, and nothing is overwritten on trust.** A mismatch stops that path and says so; it is never recorded as sent.
