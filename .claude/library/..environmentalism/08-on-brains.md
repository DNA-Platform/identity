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

That means the whole footprint is tiny — and **purely native**. The session store is Claude Code's own (`~/.claude/projects/<slug>/<uuid>.jsonl`, a standard, per-project location that survives restarts), so the essential mechanism needs **zero custom infrastructure**. The only thing we add is each teammate's identity, compiled into their [agent file](../../agents/). There is no registry of brains and no map of which id belongs to whom — the id is *derived from the name* (below), so nothing has to be recorded.

## The three pieces on top of free persistence

**1. An identity to load — `--agent <name>`.** Each teammate has an [agent file](01-on-teammates.md) at `.claude/agents/<name>.md` that tells the spawned process who it is and where its grounding lives. That is what makes a resumed session *Nancy* and not a blank Claude. (We compile ours from the library; the same identity could be injected inline with `--append-system-prompt` / `--agents <json>`.)

**2. A session id *derived from the name* — same name, same id, everywhere.** A teammate's session id is a deterministic function of their name: a namespaced **UUIDv5** hash, so `nancy` resolves to the same UUID by construction — in every project, with nothing written down. The [teammate compiler](01-on-teammates.md) computes it and bakes it into the agent file, exactly like every other compiled fact about a teammate. No hand-kept table, no registry, no "first id Doug seeded."

```sh
# the id is uuidv5(<fixed namespace>, "nancy") — derived, not invented.
# create the brain once:
claude -p --session-id "$ID" --agent nancy "wake up; read your library"
# resume that same derived id forever after:
claude -p --resume     "$ID" --agent nancy "next task"
```

Sessions are **project-scoped**: the same derived id is a *different* brain in each project (its transcript lives under that project's slug), so the id can be identical everywhere and never collide.

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
.claude/library/..environmentalism/08-on-brains--dispatch.sh --list               # list teammates
```

It resolves `<name>`→ its name-derived id, seeds (`--session-id`) on first wake and resumes (`--resume`) after, composes a prompt that tells the brain to catch itself up, and runs `claude -p` as that `--agent`. Any runtime it saves — a report for the voice, or the optional cursor below — lives in a real runtime location **outside** the project `.claude/`, never compiled and never committed.

### The delta cursor (optional)

Plain `--resume` reloads the *entire* transcript each turn — fine while small, slower once a brain's transcript is large. *Optionally*, a brain can keep a cursor at the last team-transcript line it consumed, so the dispatch prompt points it at only the new lines. The essential mechanism doesn't need it — native persistence + `--agent` + a name-derived id is the whole trick. If used, the cursor (like any saved report) lives in a true runtime/temp directory **outside** the project `.claude/`, never compiled, never committed.

## Settings

Persistence itself needs **no settings** — it is the CLI's native session store. What lets brains run *unattended* (instead of stalling on a prompt) lives in the user-global `~/.claude/settings.json`:

- `"defaultMode": "bypassPermissions"` — sessions don't pause for permission prompts (the standing form of the per-call `--dangerously-skip-permissions`).
- `"skipDangerousModePermissionPrompt": true` — suppresses the one-time "are you sure?" gate, so a headless `-p` brain doesn't hang.
- the broad `Bash(…:*)` allowlist — so a brain can run `git`, `npx`, `cat`, etc. without each being denied.

`"model"` and `"effortLevel"` are the defaults each brain inherits when not overridden per-call; the `deny` list (no force-push, no hard reset, no `rm -rf` of home/root) stays in force even under bypass mode. The committed project `.claude/settings.json` is intentionally narrower; the user-global file is what enables the unattended-brain workflow.

## Where it lives, and how it merges by identity branch

This matters because the machinery has to merge cleanly across the [three-tier branch model](06-on-sync.md):

- **The mechanism is org-wide.** This chapter, the [dispatch tool](08-on-brains--dispatch.sh), and the "My brain" block compiled into every [agent file](01-on-teammates.md) live in `.claude/library` and travel to the `dna-platform` branch — shared by every project. Because a brain's id is *derived from its name* (a pure function), the compiled agent files are identical across repos and never conflict.
- **Runtime never lives in `.claude/`.** Reports and the optional cursor are runtime state, so they live in a real runtime/temp directory *outside* the project `.claude/` — which is shared, compiled config — never committed, never synced. The full rule for what is compiled config versus runtime, and where each belongs, is [On Platform Layout](09-on-platform-layout.md#compiled-config-vs-runtime).
- **Nothing is hand-recorded.** There is no UUID map and no registry: the id is recomputed from the name wherever it's needed, so there is no per-project note to drift.

## Scope — wired vs. roadmap

Wired today: native persistence; seed/resume; non-blocking dispatch.

The **corrected design** in this chapter is now **partly built**: runtime lives *outside* `.claude/` (the dispatch tool writes to `${TMPDIR:-/tmp}/dna-brains/<project>/`, and the ad-hoc `.claude/run/` is deleted) and the cursor is optional. Still pending: name-derived ids compiled into the agent file. See *Implementation* below.

Not yet built (the roadmap): automatic clean-prose extraction of the delta, a broadcast `catchup` across all brains, and a durable inbox message-bus + watcher that voices a brain's writes as they land. That fuller conduit is specified in inexplicable-phenomena's *On Sync Efficiency* (in that project's library, not this checkout). A brain wake is the most expensive thing we do — spend it on real context-building, not on what the voice already knows.

## Implementation

Three moves; two are done, one remains:

1. **Teammate compiler** *(pending)* — derive each teammate's session id from their name (a namespaced UUIDv5 hash) and compile it into the [agent file](01-on-teammates.md), like every other compiled fact about a teammate. Not yet built: the dispatch tool still carries a hand-kept UUID table. Mind the migration cost — the live brains are already seeded under those ids, so switching id schemes without a migration would orphan every brain's accumulated memory; the table stays until move 1 lands *with* a migration.
2. **Dispatch tool — runtime relocated** *(done)* — the tool writes its runtime (the report for the voice, the optional cursor) to a real runtime location *outside* the project `.claude/`: `${TMPDIR:-/tmp}/dna-brains/<project>/`.
3. **`.claude/run/` deleted** *(done)* — the ad-hoc bolt-on directory is gone; runtime state never lives in shared, compiled config.

The rule all of this honors, *compiled config versus runtime: what lives where*, is [On Platform Layout](09-on-platform-layout.md#compiled-config-vs-runtime).

<!-- citations -->
[dispatch]: 08-on-brains--dispatch.sh
[substrate]: .cover.md#the-substrate-protocol
[agents]: ../../agents/
[sync]: 06-on-sync.md
[commit]: 06-on-sync--commit.sh
