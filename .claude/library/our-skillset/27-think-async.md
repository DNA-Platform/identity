# think-async

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

Think asynchronously — have a teammate work a question at length off to the side, reading and writing in their own context, while the voice keeps talking in the room. It is how a teammate thinks hard without blocking the conversation. (Distinct from [/think](20-think.md), which reaches *outward* to Claude Desktop; this reaches *inward*, into the teammate's own accumulating context.)

> A note on the word *brain*: use it as little as possible. A teammate **thinks** — they don't narrate the organ doing it, any more than you say "I am using my brain." The persistent process is a mechanism; the act is just thinking. The mechanism is specified in [On Brains](../..environmentalism/08-on-brains.md), and the word belongs there; here the verb is *think*.

## Reading

Read [On Brains](../..environmentalism/08-on-brains.md) for the mechanism — native session persistence, the mailbox, and the rule that a teammate is addressed by name and restores itself, never told "you are X." The tool this skill runs is [08-on-brains--dispatch.sh](../..environmentalism/08-on-brains--dispatch.sh).

## Starting a thought

Run it non-blocking (background) so the voice keeps talking while the thinking happens:

```
bash .claude/library/..environmentalism/08-on-brains--dispatch.sh <name> "<message>" &
```

- **It initializes itself.** The tool identifies the repo by its directory name, locates that project's session store, and looks up the teammate's session id. The first run **creates** the session (`--session-id`); every run after **resumes** it (`--resume`). Create-if-not-exist — there is no setup step.
- **It catches itself up.** The teammate reads the new transcript lines past their cursor — only as deep as needed — does the reading and any personal-library writing (that writing happens off to the side, never in the voice), and ends with a `REPORT BACK:` block, the thought the voice speaks in the room.

## Where thoughts are kept, and the mailbox

The accumulated context lives in the CLI's own session store at `~/.claude/projects/<project>/<id>.jsonl` — resuming reloads it, and that store *is* the memory; a teammate respawns from the library with no loss of self. Runtime bookkeeping lives outside the project at `$TMPDIR/dna-brains/<project>/`.

An async thought used to go dark until it finished. Now it **streams live to a mailbox**, and the same tool reads it back:

```
08-on-brains--dispatch.sh --watch <name>   # tail the live mailbox — follow the thinking in real time
08-on-brains--dispatch.sh --read  <name>   # the last full report, after it lands
08-on-brains--dispatch.sh --list           # the registry: who has a session, cursors, mailbox paths
```

So you can remember what was thought: follow it live with `--watch`, or read the last report with `--read`. The mailbox is the outbox — thinking made durable and visible.
