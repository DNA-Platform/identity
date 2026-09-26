# The folder

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The rulings

Doug, 2026-09-26:

- *"You are working in that main clone."* — and, of a command-channel worktree left beside it: *"No we don't want that there either. Delete from there when you can. You guys live here."*
- *"We don't need anything but main though in terms of branches in this repo. We will make them when we dispatch jobs."*
- *"Oh, don't move anything that goes to identity."* / *"CLAUDE.md and /.claude do not need to be transported."*
- *"We need this to be local to the folder. We need to not disrupt other users. How do we refactor into a local python environment where we can control everything? It is terrible practice not to be modular like this."*

## The protocol

Everything the team has on the box is inside one folder, and nothing is outside it:

```
~/doug/altered-states/
  .key/          the repository's deploy key (write access); main's core.sshCommand uses it
  .tools/        uv, its Python, every cache and config, env.sh, the run script, the generated locks
  main/          the clone — only ever moved by pulling; its environment is main/.venv
  run-…/         one worktree per run, on its own branch
  run-….out      each run's driver output
```

- **The account is the lab's, shared.** Nothing goes in its home: not `~/.local`, not `~/.cache`, not `~/.bashrc`, not the global git config. Every command the skill runs exports the folder's own locations first (`UV_*`, `PIP_CACHE_DIR`, `XDG_*_HOME`, `MPLCONFIGDIR`, `TORCH_HOME`, and PATH for that command only). Anything already in the home belongs to someone else and is left alone.
- **`main` is a mirror of GitHub's `main`.** Nothing is committed on it; it moves only by [pulling](34-03-als-remote--the-run.md). Its git identity is set in the clone's own config, never globally.
- **Branches: `main`, and one per run**, made when the run is dispatched and never before.
- **Identity never travels**: `.claude/`, `CLAUDE.md`, every `.lib/`. The identity repository carries them. Neither does `.vscode/`, this machine's editor state.
- **Cruft goes the day it appears.** A worktree, file or branch that no protocol accounts for is deleted, with Doug told what went.
