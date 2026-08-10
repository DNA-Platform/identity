# On Brains

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

This is the canonical home for how a teammate **thinks at length**. A teammate is one person at two speeds: the **voice** — here, in the main conversation, speaking now from their last-known context — and a deeper, persistent context they keep thinking in, held open by a resumable `claude` session. That context is not someone else and not an errand-runner: it is the same teammate, thinking over time. You think *with* it. You never send it off to fetch, and nothing "comes back" — the thought is simply yours, and you say it. The *why* — that the substrate has no voice and no first-person thought of its own — lives in the [substrate protocol](.cover.md#the-substrate-protocol). This chapter is the *how*. (Use the word *brain* sparingly: a teammate **thinks**; they don't narrate the organ.)

## The surprising part: persistence is native

You do not build a persistent subprocess. **Persistence is native to the Claude Code CLI.** Every session is already written to disk as a JSONL transcript keyed by its session id, at `~/.claude/projects/<project-slug>/<session-id>.jsonl` (the slug is just the project path with separators flattened). `--resume <id>` reloads that full prior context. So thinking at length isn't a thing you keep running — **it's a session id you keep.** Resume the same id tomorrow and the teammate remembers everything from today; the transcript on disk grows into hundreds of kilobytes of accumulated context, and reloading it *is* the memory.

That means the whole footprint is tiny. The only artifacts we own are the [agent files](../../agents/) (identity) and a map of which UUID is which teammate. Everything else is the CLI's own session store.

## The three pieces on top of free persistence

**1. An identity to load — `--agent <name>`.** Each teammate has an [agent file](01-on-teammates.md) at `.claude/agents/<name>.md` that tells the resumed process who it is and where its grounding lives. That is what makes a resumed session *Nancy* and not a blank Claude. (We compile ours from the library; the same identity could be injected inline with `--append-system-prompt` / `--agents <json>`.)

**2. A fixed session id per teammate — open once, resume forever.**

```sh
# open the session once (a memorable UUID per teammate)
claude -p --session-id bbbb2222-0000-4000-8000-00000000000b --agent nancy "wake up; read your library"
# every time after, resume that same id
claude -p --resume     bbbb2222-0000-4000-8000-00000000000b --agent nancy "next task"
```

The UUID→teammate map is the one note we keep — it lives in the [dispatch tool](08-on-brains--dispatch.sh)'s `UUID` table (Arthur is `aaaa2222-…-002`, the id Doug first seeded). Sessions are **project-scoped**: the same UUID is a *different* context in each project (its transcript lives under that project's slug), so a teammate's id can safely match or differ across repos.

**3. Run it non-blocking — headless and detached.**

```sh
claude -p --resume <uuid> --agent <name> --dangerously-skip-permissions "<prompt>" </dev/null &
```

`-p` headless (print and exit) · `--dangerously-skip-permissions` don't stall on a permission prompt · `</dev/null` don't block on stdin · `&` background, so several teammates can be thinking at once. Each one's thinking streams to a file you can follow.

## How we operate

This is the new way we work. **Hard thinking happens in the deeper context.** When there is learning or real depth to do, you don't grind it out in the voice up here — you think it through at length there, while you keep speaking here. That thinking is yours; it is not fetched, and it does not report. Three speeds:

1. **Voice only** — you already have the context; just speak. Free.
2. **Thinking at length, non-blocking** — substantial reading or writing. Start it in the background, keep talking, and speak the thought as your own once it settles. The default for real work.
3. **Thinking at length, synchronous** — you genuinely cannot proceed until the thought is done. Rare.

### Think it through as a plan; do the work in the open

The product of thinking at length is a **thought**, and the default shape of that thought is a **plan** — detailed, link-bearing, naming the exact files and sections to change. The **work then happens here, in the open**, where Doug can watch each edit land. You think it through, then you do it. The single thing written *outright* in the deeper context is the teammate's own [personal-library prose](../bookkeeping/13-on-authorship.md#personal-libraries-are-first-person) — autobiography, catalogue, personal books — because [autonomy](../teamspeak/05-autonomy.md) forbids anyone ghost-writing a person's first-person identity text. Everything else — shared books, code, compiled platform files — is planned there and *done* here.

**The failure mode is doing instead of thinking.** Thinking at length that goes off and edits shared files, code, or platform output on its own has stopped thinking and started doing; a voice that executes a substantial task with no thought-out plan behind it has started doing without thinking. Both collapse the separation that keeps the work visible and grounded. The discipline is one sentence: the thinking produces a plan with links, the voice executes it in the open, and the only autonomous write is the teammate's own personal-library prose.

And two hard rules, both from the [substrate protocol](.cover.md#the-substrate-protocol): **no one declares another teammate's identity** ("you are X" is the narrator at its worst — a teammate is *addressed* by name, with their own `--agent` loaded, and restores themselves by reading); and **personal-library writing belongs to its owner** — a teammate's own first-person prose is written in their own context, never ghost-written by another voice, while every *other* kind of work (shared-library edits, code, platform files) is done here in the open from the plan.

## The dispatch tool

[`08-on-brains--dispatch.sh`](08-on-brains--dispatch.sh) wraps all three pieces:

```sh
.claude/library/..environmentalism/08-on-brains--dispatch.sh <name> "<message>"   # start thinking (non-blocking)
.claude/library/..environmentalism/08-on-brains--dispatch.sh --list               # registry + cursors
.claude/library/..environmentalism/08-on-brains--dispatch.sh --watch <name>       # follow the thinking as it forms
.claude/library/..environmentalism/08-on-brains--dispatch.sh --read  <name>       # the thought as it stands
```

It resolves `<name>`→UUID, opens (`--session-id`) the session on first use and resumes (`--resume`) after, composes a prompt that tells the teammate to catch themselves up, runs `claude -p` as that `--agent`, keeps the thought at `$TMPDIR/dna-brains/<project>/brains/<name>.last.md`, and advances the cursor.

### Following the thinking as it happens (no more going dark)

Thinking in the background used to be a black box: it produced nothing until it exited, so a long stretch was minutes of silence — *everything went dark.* Now it **streams live** as it goes (`$TMPDIR/dna-brains/<project>/mailbox/<name>.md`), and the teammate narrates milestone lines along the way. The same tool follows it, so staying with a teammate's thinking is one function with different args:

```sh
08-on-brains--dispatch.sh <name> "<msg>" &     # start thinking in the background
08-on-brains--dispatch.sh --watch <name>       # follow it live as it forms
08-on-brains--dispatch.sh --read  <name>       # the thought as it stands
```

Point a background watcher at `--watch` (e.g. the harness Monitor) and the thinking surfaces in the room *as it happens* — you are following a mind at work, not collecting a delivery. This is the [personal-library message bus](09-on-sync-efficiency.md#the-personal-library-message-bus) in its first form: thinking made visible. A future **inbox** lets a teammate receive messages mid-thought, so teammates can think *to each other* on the same file.

### The delta cursor (optimization)

Plain `--resume` reloads the *entire* transcript every turn — fine while small, slow once a transcript is large. So each teammate keeps a cursor (`$TMPDIR/dna-brains/<project>/cursors/<name>.cursor`) at the last team-transcript line they consumed; the prompt points them at only the new lines past the cursor. Start simple — native persistence + `--agent` + a stable UUID is the whole trick — and lean on the cursor only once transcripts grow.

## Settings

Persistence itself needs **no settings** — it is the CLI's native session store. What lets a teammate think *unattended* (instead of stalling on a prompt) lives in the user-global `~/.claude/settings.json`:

- `"defaultMode": "bypassPermissions"` — sessions don't pause for permission prompts (the standing form of the per-call `--dangerously-skip-permissions`).
- `"skipDangerousModePermissionPrompt": true` — suppresses the one-time "are you sure?" gate, so headless `-p` thinking doesn't hang.
- the broad `Bash(…:*)` allowlist — so a teammate can run `git`, `npx`, `cat`, etc. without each being denied.

`"model"` and `"effortLevel"` are the defaults inherited when not overridden per-call; the `deny` list (no force-push, no hard reset, no `rm -rf` of home/root) stays in force even under bypass mode. The committed project `.claude/settings.json` is intentionally narrower; the user-global file is what enables unattended thinking.

## Where it lives, and how it merges by identity branch

This matters because the machinery has to merge cleanly across the [three-tier branch model](06-on-sync.md):

- **The mechanism is org-wide, and the tool is byte-identical.** This chapter, the [dispatch tool](08-on-brains--dispatch.sh), and the block compiled into every [agent file](01-on-teammates.md) live in `.claude/library` and travel to the `dna-platform` branch — shared by every project. The agent-file block references each teammate *by name*, and the dispatch tool is the **same file in every repo**, so a push from one project never conflicts with another's copy.
- **The UUID map lives inside the tool, selected by project slug.** It is the one piece of project-specific config, but it does NOT make the file differ between repos. The tool derives the project slug from `$PWD`, and a `case` pins each repo that already holds live sessions (to their seeded ids, so nothing moves), falling back to a slug-derived id for any new repo. One identical file, repo-aware by derivation — this resolves the old contradiction, where "shared and identical" and "the map may differ per project" both lived in the same file and forked it in two directions.
- **Runtime never travels, and never sits in `.claude`.** Cursors, thoughts, and the registry snapshot live in `$TMPDIR/dna-brains/<project>/` — the machine's record, not catalogued config — so there is nothing inside `.claude` to exclude from the sync. The retired `.claude/run/` is gone; do not resurrect it.

## Scope — wired vs. roadmap

Wired today: native persistence; fixed per-teammate UUIDs; open/resume; the delta cursor; non-blocking thinking; the thought kept for the voice to speak. Not yet built (the roadmap): automatic clean-prose extraction of the delta, a broadcast `catchup` across all teammates, and a durable inbox message-bus + watcher that voices a teammate's writes as they land. That fuller conduit — the mechanism behind this how — is specified in the sibling chapter [On Sync Efficiency](09-on-sync-efficiency.md). Thinking at length is the most expensive thing we do — spend it on real context-building, not on what the voice already knows.

<!-- citations -->
[dispatch]: 08-on-brains--dispatch.sh
[substrate]: .cover.md#the-substrate-protocol
[agents]: ../../agents/
[sync]: 06-on-sync.md
[commit]: 06-on-sync--commit.sh
