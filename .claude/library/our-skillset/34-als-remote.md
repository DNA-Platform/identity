# als-remote

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

Drive the lab box — `lipshutzlab-01`, the lab's Linux GPU machine — from this machine over Tailscale SSH: reach it, keep its clone pulled, run work there under the run protocol, bring the results home through GitHub, and move the files git does not carry. The team works here and drives the box from here; the box holds the clone and runs the work.

The tool is [34-als-remote--box.sh](34-als-remote--box.sh); its partner [34-als-remote--run.sh](34-als-remote--run.sh) is the run itself, executed on the box. Every command runs from the project root.

## The box

| | |
|---|---|
| host | `lipshutzlab-01@lipshutzlab-01` — the Tailscale MagicDNS name |
| folder | `~/doug/altered-states/`: `main/`, the clone, with its environment at `main/.venv`; one `run-…/` worktree per run; `.tools/`, uv, its Python, every cache and the run script; and `.key/`, the repo's deploy key (write access), which `main`'s `core.sshCommand` uses for GitHub |
| the account | shared by the lab. Nothing of ours goes in its home — not `~/.local`, not `~/.cache`, not `~/.bashrc` |
| branches | `main`, which only ever moves by pulling, and one `run-…` branch per run |
| never travels | `.claude/`, `CLAUDE.md` and every `.lib/` (identity holds them); `.venv/` (rebuilt on the box); `.vscode/`; bytecode |

## Before the first command

Run `check`. It pings the box over the tailnet, logs in, and names the cause when the login fails. What has to be true, and what breaks when it is not:

1. **Tailscale on both machines**, signed in to the same tailnet. Tailscale on the box alone gives this machine no route.
2. **Tailscale SSH on at the box** — `sudo tailscale set --ssh`; plain `tailscale up` does not enable it. The tailnet's ACL `ssh` rule uses `"action": "accept"`: `check` mode asks for a browser login about every twelve hours, and a non-interactive command stalls on it.
3. **ProtonVPN out of the way.** Its kill switch refuses every socket to the tailnet. The symptom is `ssh: connect to host lipshutzlab-01 port 22: Permission denied` — a refusal on this machine, before anything leaves it — while `tailscale ping` still answers through Tailscale's own service. Disconnect Proton, or exclude `100.64.0.0/10` in its split tunnelling.

The host key is accepted on first use (`StrictHostKeyChecking=accept-new`).

## The password

Only `sudo` needs it. It lives in the Windows user environment as `ALS_REMOTE_PASSWORD` and in no file that git or the library carries. Doug sets it once, in PowerShell, typed at a prompt so it never enters shell history:

```powershell
$p = Read-Host -AsSecureString 'lab box password'; [Environment]::SetEnvironmentVariable('ALS_REMOTE_PASSWORD', [System.Net.NetworkCredential]::new('', $p).Password, 'User')
```

The tool reads the user environment directly, so a session that started before the variable was set still sees it. The password reaches the box on sudo's stdin, inside the SSH channel — never on a command line. `sudo -k` forces the prompt every time, so a cached sudo ticket can never leave the password to be read as a command.

## Commands

```
T=.claude/library/our-skillset/34-als-remote--box.sh
bash $T check                        # tailnet ping and SSH login; names the cause of a failure
bash $T run  'git status -sb'        # run in ~/doug/altered-states/main
bash $T sudo 'apt-get update'        # the same, as root
bash $T pull                         # the box's main := GitHub's main
bash $T launch <name> '<command>'    # a run, under the protocol below
bash $T status [<branch>]            # every run on the box, or one run in detail
bash $T harvest <branch>             # a finished run's branch, pulled into main here
bash $T ignored                      # the ignored paths that `send` moves
bash $T send <path>...               # ignored files or folders to the box, verified
bash $T send-list <file>             # every path in <file>, one at a time
bash $T receive <box-path> <dir>     # a file or folder back from the box, verified
bash $T python [cpu|cuda]            # the box's Python, inside the folder
```

Commands reach the box as a script on stdin, so nothing is quoted twice, and each one first exports the folder's own environment.

## The run protocol

1. **Commit everything here** — [/push](26-push.md). `launch` refuses when anything is uncommitted or HEAD is not GitHub's `main`.
2. **Pull there** — `pull`, which `launch` also runs first. The box's `main` fast-forwards from GitHub; it is proven by the box's HEAD equalling HEAD here, with the box clean. Uncommitted state on the box is dropped only when it is exactly the tree being pulled, or on `pull --discard`.
3. **Branch** — `run-<YYYYMMDD-HHMM>-<name>`, as a worktree beside `main`. The ignored paths under `library/data` are linked in from `main`, never copied.
4. **Run and commit there** — detached, in the folder's environment. `runs/<branch>/` records `command.sh`, `meta.txt` (base commit, host, start, end, exit), `environment.txt` (every package, the GPU, the system) and `log.txt`. Everything the run made is committed — failures too — and the branch is pushed. A file over 95 MB stays on the box, listed with its sha256 in `not-committed.tsv`.
5. **Pull here** — `harvest <branch>`: fetch, show the record, fast-forward `main` here. It stops if `main` has moved since the run's base. `receive` brings back what `not-committed.tsv` lists.

`status` shows what is running and what finished, with exit codes; `status <branch>` shows one run's record, the tail of its log and the GPU.

## send and receive — the files git does not carry

The data, the caches, the logs: what `ignored` lists. For each path, the sha256 of every file is taken here, the path crosses as one tar stream (`gzip -1`) over SSH, and `sha256sum -c` runs on the box; only then is it recorded — `.git/als-remote/sent.tsv` for the log, `.git/als-remote/manifests/` for each manifest, both inside `.git` and never tracked. A path whose manifest already verifies on the box is skipped, so a stopped `send-list` resumes where it stopped. Identity and the venv are refused. `receive` is the same in reverse, hashed on the box and checked here.

Over Tailscale's relay the link measured **0.75–1.3 MB/s** on 2026-09-26 — `gzip` helps on the per-trial `.npy` files. Long transfers run in the background and never hold up the room.

## python — an environment inside the folder

`python` installs the same uv and the same Python version as this machine into `~/doug/altered-states/.tools/` and makes `main/.venv`. With `cpu` or `cuda` it installs the packages, and the lock it installs is **generated by the compiler**, never edited by hand:

1. **The input** is this machine's venv as it actually is (`uv pip freeze` — it has drifted from `requirements.txt`), git pins included, Windows-only packages left out, and torch as here (`cpu`) or as the plain build of the same version (`cuda`).
2. **Stage 2** takes whatever was installed here past its own metadata, because no resolver can reproduce that: every package whose declared dependencies are not all installed here, and every package the compiler names in a conflict. They install there as they did here, `--no-deps`.
3. **Stage 1** is `uv pip compile` for Linux and this Python: every pin from here held exactly, plus only what Linux itself needs. `uv pip sync` makes the venv exactly that lock; stage 2 follows.

The generated lock is kept in `.git/als-remote/lock-<variant>/` here and `.tools/` there. The command ends by importing the stack and saying whether torch sees the GPU.
