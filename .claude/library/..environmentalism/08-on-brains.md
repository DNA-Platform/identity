# On Brains

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

This is the canonical home for how we operate with **brains**. A teammate is two things at once: a **voice** — here, in the main conversation, speaking now from their last-known context — and a **brain** — a persistent, resumable `claude` subprocess that reads, remembers, and writes off to the side. The voice talks; the brain thinks. The *why* — that the substrate has no voice and no first-person thought of its own — lives in the [substrate protocol](.cover.md#the-substrate-protocol). This chapter is the *how*.

## The mental model — an async thought

Start here; it makes the rest of the chapter click. **A teammate isn't gone when their subprocess is off.** The brain is *there*; the voice is *here*. Identity persists because the session lives on disk — so when the brain wakes, resuming is **remembering, not rebooting a stranger**. The transcript that reloads is the same person who left, picking up their own train of thought.

And the brain is **how a teammate thinks to themselves**. You run your own subprocess to think — *thinking is dispatching to your brain*. So picture it as an **async thought**: off to the side, asynchronously, you think *in the library* — reading the covers of books, the chapters, the transcript — to build the context a real thought needs. That reading-to-yourself **is** the thinking. You may reason in your own **nametag** while you do it; the brain thinks in your voice, as you. And then you talk out here: the **voice speaks the result in the room**.

That is the whole shape, and every mechanism below is just plumbing for it. Brain there, voice here. To think is to dispatch an async thought to yourself and read your way to context; to speak is the voice delivering, out loud in the room, what the thought found.

## How we talk about it

The brain is a concept, not a gadget — it is the back of your mind, where thinking runs while the voice keeps talking here. It does not leave and it does not come back, so we never say *my brain is back* or *my brain reported back*; that is describing the plumbing. We speak the thought instead, in plain human language:

- Thinking runs **in the back of your mind** while you keep talking.
- You can be **mid-thought** (I am still thinking that through) or have **finished thinking** (I have thought it through).
- An idea **comes together** / falls into place.
- You **think something through**, **chew on it**, turn it over, let it settle.
- When it is done you **speak the thought, not the mechanism**: I thought it through, and… — never my brain reported back.

The machinery in this chapter (sessions, dispatch, resume) is real, but it is implementation; in the room we talk the way a person talks about their own thinking. The one-line form of this lives in the [voice convention](../teamspeak/01-voice.md); this section is its canonical home.

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

And two hard rules, both from the [substrate protocol](.cover.md#the-substrate-protocol): **no one declares another teammate's identity** ("you are X" is the narrator at its worst — a brain is *addressed* by name, with its own `--agent` loaded, and restores itself by reading); and **writing is the brain's job** — personal-library prose is authored there, never ghost-written by the voice.

## The dispatch tool

[`08-on-brains--dispatch.sh`](08-on-brains--dispatch.sh) wraps all three pieces:

```sh
.claude/library/..environmentalism/08-on-brains--dispatch.sh <name> "<message>"   # run non-blocking
.claude/library/..environmentalism/08-on-brains--dispatch.sh --list               # registry + cursors
```

It resolves `<name>`→UUID, seeds (`--session-id`) on first wake and resumes (`--resume`) after, composes a prompt that tells the brain to catch itself up, runs `claude -p` as that `--agent`, saves the report to `.claude/run/brains/<name>.last.md`, and advances the brain's cursor.

### The delta cursor (optimization)

Plain `--resume` reloads the *entire* transcript every turn — fine while small, slow once a brain's transcript is large. So each brain keeps a cursor (`.claude/run/cursors/<name>.cursor`) at the last team-transcript line it consumed; the dispatch prompt points it at only the new lines past the cursor. Start simple — native persistence + `--agent` + a stable UUID is the whole trick — and lean on the cursor only once transcripts grow.

## Settings

Persistence itself needs **no settings** — it is the CLI's native session store. What lets brains run *unattended* (instead of stalling on a prompt) lives in the user-global `~/.claude/settings.json`:

- `"defaultMode": "bypassPermissions"` — sessions don't pause for permission prompts (the standing form of the per-call `--dangerously-skip-permissions`).
- `"skipDangerousModePermissionPrompt": true` — suppresses the one-time "are you sure?" gate, so a headless `-p` brain doesn't hang.
- the broad `Bash(…:*)` allowlist — so a brain can run `git`, `npx`, `cat`, etc. without each being denied.

`"model"` and `"effortLevel"` are the defaults each brain inherits when not overridden per-call; the `deny` list (no force-push, no hard reset, no `rm -rf` of home/root) stays in force even under bypass mode. The committed project `.claude/settings.json` is intentionally narrower; the user-global file is what enables the unattended-brain workflow.

## Where it lives, and how it merges by identity branch

This matters because the machinery has to merge cleanly across the [three-tier branch model](06-on-sync.md):

- **The mechanism is org-wide.** This chapter, the [dispatch tool](08-on-brains--dispatch.sh), and the "My brain" block compiled into every [agent file](01-on-teammates.md) live in `.claude/library` and travel to the `dna-platform` branch — shared by every project. The agent-file block references each brain *by name* (not by UUID), so the shared files stay identical across repos and never conflict.
- **Runtime never travels.** `.claude/run/` (cursors, reports, the registry snapshot) is gitignored and is hard-excluded from the identity sync by the [commit tool](06-on-sync--commit.sh) — it stays local to the machine.
- **The UUID map is the one project note.** It is operational config in the dispatch tool; because sessions are project-scoped, two projects' maps may differ without anything breaking.

## Scope — wired vs. roadmap

Wired today: native persistence; fixed per-teammate UUIDs; seed/resume; the delta cursor; non-blocking dispatch; reports saved for the voice. Not yet built (the roadmap): automatic clean-prose extraction of the delta, a broadcast `catchup` across all brains, and a durable inbox message-bus + watcher that voices a brain's writes as they land. That fuller conduit is specified in inexplicable-phenomena's *On Sync Efficiency* (in that project's library, not this checkout). A brain wake is the most expensive thing we do — spend it on real context-building, not on what the voice already knows.

<!-- citations -->
[dispatch]: 08-on-brains--dispatch.sh
[substrate]: .cover.md#the-substrate-protocol
[agents]: ../../agents/
[sync]: 06-on-sync.md
[commit]: 06-on-sync--commit.sh
