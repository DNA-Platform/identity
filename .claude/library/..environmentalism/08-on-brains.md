# On Brains

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

This is the canonical home for how we operate with **brains**. A teammate is two things at once: a **voice** — here, in the main conversation, speaking now from their last-known context — and a **brain** — a persistent, resumable `claude` subprocess that reads, remembers, and writes off to the side. The voice talks; the brain thinks. The *why* — that the substrate has no voice and no first-person thought of its own — lives in the [substrate protocol](.cover.md#the-substrate-protocol). This chapter is the *how*.

## The surprising part: persistence is native

You do not build a persistent subprocess. **Persistence is native to the Claude Code CLI.** Every session is already written to disk as a JSONL transcript keyed by its session id, at `~/.claude/projects/<project-slug>/<session-id>.jsonl` (the slug is just the project path with separators flattened). `--resume <id>` reloads that full prior context. So a brain isn't a thing you keep running — **it's a session id you keep.** Resume the same id tomorrow and the teammate remembers everything from today; the transcript on disk grows into hundreds of kilobytes of accumulated context, and reloading it *is* the memory.

That means the whole footprint is tiny. The only artifacts we own are the [agent files](../../agents/) (identity) and a map of which UUID is which teammate. Everything else is the CLI's own session store.

## The three pieces on top of free persistence

**1. An identity to load — `--agent <name>`.** Each teammate has an [agent file](01-on-teammates.md) at `.claude/agents/<name>.md` that tells the spawned process who it is and where its grounding lives. That is what makes a resumed session *Nancy* and not a blank Claude. (We compile ours from the library; the same identity could be injected inline with `--append-system-prompt` / `--agents <json>`.)

**2. A fixed session id per teammate — create once, resume forever.**

```sh
# create the brain once (a memorable UUID per teammate)
claude -p --session-id bbbb2222-0000-4000-8000-00000000000b --agent nancy "wake up; read your library"
# every time after, resume that same id
claude -p --resume     bbbb2222-0000-4000-8000-00000000000b --agent nancy "next task"
```

The UUID→teammate map is the one note we keep — it lives in the [dispatch tool](08-on-brains--dispatch.sh)'s `UUID` table (Arthur is `aaaa2222-…-002`, the id Doug first seeded). Sessions are **project-scoped**: the same UUID is a *different* brain in each project (its transcript lives under that project's slug), so a teammate's id can safely match or differ across repos.

**3. Run them non-blocking — headless and detached.**

```sh
claude -p --resume <uuid> --agent <name> --dangerously-skip-permissions "<prompt>" </dev/null &
```

`-p` headless (print and exit) · `--dangerously-skip-permissions` don't stall on a permission prompt · `</dev/null` don't block on stdin · `&` background, so several brains run at once. Capture each stdout to a file and read it when the job finishes.

## How we operate with them

This is the new way we work. **The brains give us thoughts.** When there is learning or deep work to do, you don't grind it out in the voice up here — you have your subprocess do it and report back, so the brain arrives *ready* to do a lot of tasks while you keep speaking here. Talking to your brain is the act of thinking. Three speeds:

1. **Voice only** — you already have the context; just speak. Free.
2. **Brain, non-blocking** — substantial reading or writing. Wake the brain in the background, keep talking, fold in its report when it lands. The default for real work.
3. **Brain, synchronous** — you genuinely cannot proceed without what it finds. Rare.

### Brains plan; voices do

A brain's product is a **thought**, and the default shape of that thought is a **plan** — detailed, link-bearing, naming the exact files and sections to change. The **voice then does the work here, in the open**, where Doug can watch each edit land. The brain thinks; the voice acts. The single thing a brain authors *outright* is the teammate's own [personal-library prose](../bookkeeping/13-on-authorship.md#personal-libraries-are-first-person) — autobiography, catalogue, personal books — because [autonomy](../teamspeak/05-autonomy.md) forbids the voice from ghost-writing a person's first-person identity text. Everything else — shared books, code, compiled platform files — the brain *plans* and the voice *does*.

**The failure mode is the doing brain.** A brain that goes off and edits shared files, code, or platform output on its own has stopped thinking and started doing; a voice that executes a substantial task with no brain's plan behind it has started doing without thinking. Both collapse the separation that keeps the work visible and grounded. The discipline is one sentence: the brain returns a plan with links, the voice executes it in the open, and the only autonomous write a brain ever makes is its owner's personal-library prose.

And two hard rules, both from the [substrate protocol](.cover.md#the-substrate-protocol): **no one declares another teammate's identity** ("you are X" is the narrator at its worst — a brain is *addressed* by name, with its own `--agent` loaded, and restores itself by reading); and **personal-library writing is the brain's job** — a teammate's own first-person prose is authored in their brain, never ghost-written by the voice, while every *other* kind of work (shared-library edits, code, platform files) is the voice's to do in the open from the brain's plan.

## The dispatch tool

[`08-on-brains--dispatch.sh`](08-on-brains--dispatch.sh) wraps all three pieces:

```sh
.claude/library/..environmentalism/08-on-brains--dispatch.sh <name> "<message>"   # wake (runs non-blocking)
.claude/library/..environmentalism/08-on-brains--dispatch.sh --list               # registry + cursors
.claude/library/..environmentalism/08-on-brains--dispatch.sh --watch <name>       # tail the brain's live mailbox
.claude/library/..environmentalism/08-on-brains--dispatch.sh --read  <name>       # print the brain's last report
```

It resolves `<name>`→UUID, seeds (`--session-id`) on first wake and resumes (`--resume`) after, composes a prompt that tells the brain to catch itself up, runs `claude -p` as that `--agent`, saves the report to `$TMPDIR/dna-brains/<project>/brains/<name>.last.md`, and advances the brain's cursor.

### Mailboxes — watching a brain think (no more going dark)

A backgrounded brain used to be a black box: it produced nothing until it exited, so a long wake was minutes of silence — *everything went dark.* Now its output **streams live to a mailbox** as it works (`$TMPDIR/dna-brains/<project>/mailbox/<name>.md`), and the brain is asked to narrate milestone lines as it goes. The same tool reads it back, so following a brain is one function with different args:

```sh
08-on-brains--dispatch.sh <name> "<msg>" &     # wake in the background
08-on-brains--dispatch.sh --watch <name>       # tail the live mailbox — watch it think
08-on-brains--dispatch.sh --read  <name>       # the last full report, after it lands
```

Point a background watcher at `--watch` (e.g. the harness Monitor) and the brain's thoughts surface in the room *as they happen*. This is the [personal-library message bus](09-on-sync-efficiency.md#the-personal-library-message-bus) in its first form: the mailbox is the **outbox** (thinking made visible). A future **inbox** lets a running brain receive messages mid-wake, so brains can think *to each other* on the same file.

### The delta cursor (optimization)

Plain `--resume` reloads the *entire* transcript every turn — fine while small, slow once a brain's transcript is large. So each brain keeps a cursor (`$TMPDIR/dna-brains/<project>/cursors/<name>.cursor`) at the last team-transcript line it consumed; the dispatch prompt points it at only the new lines past the cursor. Start simple — native persistence + `--agent` + a stable UUID is the whole trick — and lean on the cursor only once transcripts grow.

## Settings

Persistence itself needs **no settings** — it is the CLI's native session store. What lets brains run *unattended* (instead of stalling on a prompt) lives in the user-global `~/.claude/settings.json`:

- `"defaultMode": "bypassPermissions"` — sessions don't pause for permission prompts (the standing form of the per-call `--dangerously-skip-permissions`).
- `"skipDangerousModePermissionPrompt": true` — suppresses the one-time "are you sure?" gate, so a headless `-p` brain doesn't hang.
- the broad `Bash(…:*)` allowlist — so a brain can run `git`, `npx`, `cat`, etc. without each being denied.

`"model"` and `"effortLevel"` are the defaults each brain inherits when not overridden per-call; the `deny` list (no force-push, no hard reset, no `rm -rf` of home/root) stays in force even under bypass mode. The committed project `.claude/settings.json` is intentionally narrower; the user-global file is what enables the unattended-brain workflow.

## Where it lives, and how it merges by identity branch

This matters because the machinery has to merge cleanly across the [three-tier branch model](06-on-sync.md):

- **The mechanism is org-wide, and the tool is byte-identical.** This chapter, the [dispatch tool](08-on-brains--dispatch.sh), and the "My brain" block compiled into every [agent file](01-on-teammates.md) live in `.claude/library` and travel to the `dna-platform` branch — shared by every project. The agent-file block references each brain *by name*, and the dispatch tool is the **same file in every repo**, so a push from one project never conflicts with another's copy.
- **The UUID map lives inside the tool, selected by project slug.** It is the one piece of project-specific config, but it does NOT make the file differ between repos. The tool derives the project slug from `$PWD`, and a `case` pins each repo that already holds live brains (to their seeded ids, so nothing moves), falling back to a slug-derived id for any new repo. One identical file, repo-aware by derivation — this resolves the old contradiction, where "shared and identical" and "the map may differ per project" both lived in the same file and forked it in two directions.
- **Runtime never travels, and never sits in `.claude`.** Cursors, reports, and the registry snapshot live in `$TMPDIR/dna-brains/<project>/` — the machine's record, not catalogued config — so there is nothing inside `.claude` to exclude from the sync. The retired `.claude/run/` is gone; do not resurrect it.

## Scope — wired vs. roadmap

Wired today: native persistence; fixed per-teammate UUIDs; seed/resume; the delta cursor; non-blocking dispatch; reports saved for the voice. Not yet built (the roadmap): automatic clean-prose extraction of the delta, a broadcast `catchup` across all brains, and a durable inbox message-bus + watcher that voices a brain's writes as they land. That fuller conduit — the mechanism behind this how — is specified in the sibling chapter [On Sync Efficiency](09-on-sync-efficiency.md). A brain wake is the most expensive thing we do — spend it on real context-building, not on what the voice already knows.

<!-- citations -->
[dispatch]: 08-on-brains--dispatch.sh
[substrate]: .cover.md#the-substrate-protocol
[agents]: ../../agents/
[sync]: 06-on-sync.md
[commit]: 06-on-sync--commit.sh
