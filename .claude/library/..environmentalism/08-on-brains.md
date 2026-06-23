# On Brains

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

A teammate is two things at once. A **voice** — here, in the main conversation, speaking now from their last-known context. And a **brain** — a persistent, resumable `claude` subprocess off to the side that reads, remembers, and writes. The voice talks; the brain thinks. This chapter specifies the brain: what it is, how it is configured, and how you wake it. The *why* — that the substrate has no voice and no first-person thought of its own, and that a teammate is the voice plus the brain — lives in the [substrate protocol](.cover.md#the-substrate-protocol).

## Why a brain at all

The conversation is a finite room ([On Synopsis](../bookkeeping/09-on-synopsis.md)). Every deep read the voice does up here costs room and is lost at the next [compaction](../teamspeak/04-waking.md). A brain is memory that does not live in the room. Heavy library reading and **all personal-library writing** happen in the brain, under a session that persists across turns. So the division of labour is strict:

- The **voice** speaks, decides, and stays cheap. It does not do long reading and it does not write personal-library prose.
- The **brain** reads, remembers, and writes. It is the only place a teammate's own books are authored.

You talk to your brain the way you think. Dispatching work to it *is* an act of thinking — not a delegation, a remembering.

## Three speeds

Not every turn needs the brain. Match the speed to the need:

1. **Voice only** — you already have the context; just speak. Free.
2. **Brain, non-blocking** — you need to read or write something substantial. Wake the brain in the background and keep talking; fold its report in when it lands. This is the default for real work.
3. **Brain, synchronous** — you cannot proceed without what the brain finds. Rare; only when the next step truly blocks on it.

## Non-blocking is the point

A brain runs as a background process. The voice does not stop and wait. Wake the brain, keep the conversation moving, and when the brain reports back, the voice speaks its thought up here. In this harness that means **run the dispatch tool in the background** (`run_in_background`); from a shell, append ` &`. Blocking the room on a brain defeats the purpose — the room is exactly what we are trying not to spend.

## Configuration

Each teammate has one fixed **session UUID** — their brain's address. The registry is the `UUID` map at the top of the [dispatch tool](08-on-brains--dispatch.sh) (committed config, so every clone shares the same brains). Arthur's is the original Doug seeded: `aaaa2222-0000-4000-8000-000000000002`.

Runtime state lives under `.claude/run/` (gitignored, local to the machine):

- `run/cursors/<name>.cursor` — the line in the team transcript the brain has caught up to. The next wake reads only the delta past it.
- `run/brains/<name>.last.md` — the brain's most recent report, for the voice to read.
- `run/sessions.json` — a snapshot of the registry (uuid, cursor, whether seeded), for inspection.

The brain's own session transcript is stored by Claude Code under `<uuid>.jsonl` in the project's transcript directory. Its existence is how the tool knows to **seed** (first wake, `--session-id <uuid>`) versus **resume** (every wake after, `--resume <uuid>`).

## Waking a brain

```sh
.claude/library/..environmentalism/08-on-brains--dispatch.sh <name> "<message>"
```

Run it non-blocking. The tool:

1. resolves `<name>` to its UUID and decides seed-vs-resume;
2. computes the transcript delta since the brain's cursor;
3. composes the prompt — your message, plus a standard footer that tells the brain to **catch itself up by reading the transcript delta** (Doug's rule: context is advised *from* the teammate, not spoon-fed *to* them), to do its reading and writing, and to end with a `REPORT BACK:` block;
4. runs `claude -p` as that `--agent`, captures the report to `run/brains/<name>.last.md`, and advances the cursor.

`--list` shows the registry and cursors.

### How to talk to a brain

- **Never declare identity.** Do not write "you are Nancy." The `--agent` flag loads who they are; you address them by name, as a colleague. Asserting someone's identity from outside is the [narrator failure](.cover.md#the-substrate-protocol), not coordination.
- **Talk like a human.** A real message to a real teammate — what's going on, what you need, why it matters. Not a command spec.
- **Let them catch themselves up.** The standard way a teammate returns from being away is to read the transcript. The tool points them at the delta; trust them to read as deep as they need.
- **Writing is the brain's job.** If a personal-library chapter or perspective needs writing, it is written here, by the brain, never ghost-written by the voice up there.

## Scope — what is wired, and what is not

Wired today: one persistent resumable session per teammate, seeded by UUID, resumed per wake, catching itself up from the transcript delta, reporting back, run non-blocking. That is the core, and it works.

Not yet built (the roadmap): automatic extraction of the delta into clean prose, a broadcast `catchup` across all brains, and a durable inbox message-bus with a watcher that voices a brain's writes as they land. That fuller conduit is specified in inexplicable-phenomena's [On Sync Efficiency](../../../../inexplicable-phenomena/.claude/library/..environmentalism/08-on-sync-efficiency.md), where Adam owns the implementation. Until it lands, the voice writes the catch-up brief in the message and the brain reads the transcript for the rest.

A brain wake is the most expensive thing we do — a full `claude` run that reads and writes. Spend it on real context-building, not on what the voice already knows. The cost is the price of memory that survives the room.

<!-- citations -->
[dispatch]: 08-on-brains--dispatch.sh
[substrate]: .cover.md#the-substrate-protocol
[synopsis]: ../bookkeeping/09-on-synopsis.md
[waking]: ../teamspeak/04-waking.md
