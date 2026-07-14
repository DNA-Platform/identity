# issue

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Interoperate with this repository's **GitHub Issues** tracker — the live one, through the API, not a folder of files. Create, list, view, comment on, and close issues, speaking the team's conventions. The tracker *is* the record of what work is open; this skill is how the team reads and writes it. It replaces the earlier local-file experiment: there is no `issues/` folder to keep in sync.

The actions are a resource script beside this skill — `.claude/skills/issue/actions.sh` — thin wrappers over the [`gh`](https://cli.github.com/) CLI. `gh` must be installed and authenticated with the **`repo`** scope (issues live under it). `gh` is not always on `PATH`, so the script calls it at its full Windows path (`/c/Program Files/GitHub CLI/gh.exe`, overridable with `GH_BIN`). Invoke it from the repo root:

    bash .claude/skills/issue/actions.sh <action> [args...]

## Conventions

An issue is a unit of work. It carries:

- a **title** written like a command — *"Add the canonical types"*, *"Fix the build"*.
- **labels** — `type:` (`meta` / `task` / `feature` / `bug` / `idea`) and `area:` (the project it touches: `library`, `catalogue`, `chemistry`, `identity`, `philosophy`).
- **state as status** — **open = todo**, **closed = done**; a **`status:doing`** label marks work in progress. There is no `status:todo` label — open already means it.
- a short **body**, ending in **Done when:** so completion is unambiguous.

The **author** is native — whoever the authenticated GitHub account is. **Link into code by commit, not branch**, so references never rot (`y` on a file in GitHub pins the URL to the commit SHA); cross-reference issues with `#123` and people with `@name`.

**Close with a solution summary.** A done issue is closed with a **Solved:** comment — one sentence on how, linking the commit that did it — so the issue keeps its own answer. The `close` action writes that note for you before closing.

## Actions

- `bootstrap-labels` — idempotently create the team's label set. Run once per repository.
- `create "<title>" "<body>" "<labels-csv>"` — file a new issue, e.g. `create "Create books for the chemistry project" "…" "type:task,area:chemistry"`.
- `list [open|closed|all] [limit]` — list issues (defaults: open, 30).
- `view <number>` — read one issue in full.
- `comment <number> "<text>"` — add a comment.
- `close <number> "<solved>"` — write the **Solved:** note, then close.

A `type:meta` **Start Here** issue should be **pinned** so it sits on top. `gh` has no pin command, so use the API:

    $GH api graphql -f query='mutation($id:ID!){pinIssue(input:{issueId:$id}){issue{number}}}' \
      -f id=$($GH issue view <number> --json id -q .id)

## What this skill does NOT do

- It does not invent work — Doug or the team decides what becomes an issue.
- It does not keep a local copy — the GitHub tracker is the single source of truth.

$ARGUMENTS
