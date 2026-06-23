# On Sync Efficiency

- **specification:** Sync Efficiency
- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

[On Brains](08-on-brains.md) is the *how* — the wired recipe for running a teammate's brain as a persistent, resumable `claude` session, and the [dispatch tool](08-on-brains--dispatch.sh) that seeds, resumes, catches up, and reports. This chapter is the *mechanism behind that how*: the fuller conduit that makes staying in sync cheap enough that grounding is never skipped. Where On Brains says "lean on the cursor only once transcripts grow," this chapter specifies the cursor, the broadcast, and the message bus precisely — what is wired today and what is roadmap.

The [substrate protocol](.cover.md#the-substrate-protocol) makes a promise it cannot keep without this chapter. It says each teammate is a **voice** here and a **brain** in a persistent, always-resumed process, and that grounding — not isolation — is what makes a voice real. But grounding has a price: a brain that re-reads the whole transcript every time it wakes pays a cold-start tax on every turn, and a system that catches its brains up one blocking call at a time spends the conversation's whole budget on bookkeeping. [Efficiency is a first-class value](.cover.md): the design only works if staying in sync is cheap. This chapter specifies the three mechanisms that make it cheap. None of them changes *what* a brain knows — they change only the *price* of knowing it, so the affordable choice and the grounded choice become the same choice.

[Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md) owns the implementation. The wired pieces live in the [dispatch tool](08-on-brains--dispatch.sh) beside [On Brains](08-on-brains.md); the roadmap pieces (broadcast, the inbox bus) extend that same tool. This chapter is the specification: precise enough to build, silent on the build itself.

## The runtime/identity boundary

One rule governs where every artifact here lives. **Identity lives in the text** ([the two libraries](../..librarianship/15-the-two-libraries.md)); everything in this chapter is *runtime state*, a performance optimization the [kill-and-respawn guardrail](.cover.md#the-substrate-protocol) must survive. Cursors, brain reports, and the session registry live in the `.claude/run/` directory — gitignored and hard-excluded from the identity sync by the [commit tool](06-on-sync--commit.sh), exactly as [On Brains](08-on-brains.md) specifies — and are reconstructible from scratch: delete them and the worst that happens is one fuller re-read. They never sync. Durability here means only that a report lands *on disk before it is surfaced* — so that every spoken line was a real write first — not that it is identity. The promotion of a thought into a permanent chapter ([thinking book](../thoughtfulness/.cover.md), autobiography) is the separate, deliberate act that turns runtime exhaust into identity. If losing `.claude/run/` ever loses a *person*, the boundary has been violated.

## The transcript delta cursor

A resumed brain must read only what is new. The mechanism is a per-agent cursor: a record of the last transcript position that brain has already absorbed. **This is wired today** — the [dispatch tool](08-on-brains--dispatch.sh) keeps one cursor per brain and points each wake at only the new lines.

**The cursor file**, one per agent, at `.claude/run/cursors/<name>.cursor`. As wired, it holds a single integer — the team-transcript line count the brain last consumed; the dispatch tool computes `delta = total - cursor` and points the brain at lines `cursor`–`total`, advancing the cursor after each wake.

**The transcript needs stable positions.** Line count works while the transcript is append-only. The roadmap hardening is to store a richer record instead of a bare integer — a message ordinal plus a hash of the slice already seen:

```
{ "name": "claude", "lastSeenIndex": 482,
  "lastSeenHash": "<hash of the transcript slice up to lastSeenIndex>" }
```

**The correctness fallback (roadmap).** Before trusting the cursor, verify `lastSeenHash` against a recomputed hash of the transcript up to `lastSeenIndex`. If they disagree — the transcript was compacted, rewritten, or truncated beneath the cursor — the cursor is stale: discard it and cold-ground from the last safe anchor (the brain's last library write, then the available transcript). **Delta is the fast path; cold re-ground is the correctness floor.** The wired tool already takes the fast path; the hash is what makes it provably safe.

This is the difference, named in the substrate protocol, between "very slow to dispatch" and "mostly free": warm resume plus a delta means a brain pays only for the lines it has not yet seen.

## The broadcast catch-up command

Catching brains up one at a time, with serial blocking `claude -p` calls, makes the cost scale with the number of live teammates — exactly backwards. The fix is one command that fans the delta out to every live brain at once, in the background. **The single-brain dispatch is wired; the broadcast is roadmap** — the natural generalization of the dispatch tool over the whole registry.

**A session registry**, at `.claude/run/sessions.json`, lists the brains — for each, a name, its UUID, its cursor, and whether it has been seeded. The dispatch tool already writes this registry on every wake; broadcast reads it.

**The command — propose `catchup`:**

1. Read the current transcript head index once.
2. For each registered brain, compute that brain's delta from its cursor (per the [delta cursor](#the-transcript-delta-cursor) rules).
3. Dispatch each brain's delta to it as a **background** job — fan-out, not a serial loop; nothing blocks on another brain's completion.
4. Advance each cursor only on that brain's acknowledged delivery, so a failed delivery is simply retried next run.
5. Return immediately.

**Properties the implementation must hold.** *Parallel:* total wall-clock cost is one background round, not the sum of N. *Idempotent:* a brain with an empty delta is a no-op, so `catchup` is safe to call liberally — after every Doug turn, on a timer, before any consult. *Non-blocking:* the voice never waits on `catchup`; it is maintenance that runs underneath the conversation, which is the only way frequent syncing stays affordable.

## The personal-library message bus

The slow part of the loop is the round-trip: ask a brain, wait, surface its answer. The bus removes the wait from the critical path by making the round-trip *asynchronous through durable files*.

**The wired form.** The [dispatch tool](08-on-brains--dispatch.sh) already saves each brain's report to `.claude/run/brains/<name>.last.md` before the voice reads it — a single-slot, durable-write-first inbox. That is the primitive the bus generalizes.

**The roadmap: an append-only inbox + watcher.** Replace the single overwritten report with an append-only log per brain — propose `.claude/run/brains/<name>.inbox.md`. When a brain finishes a thought it is to speak, it **appends** that thought; append-only means concurrent brains never collide and arrival order is preserved. An entry carries enough to be surfaced and deduplicated:

```
## 2026-06-23T14:32:08Z  [topic-or-anchor]
<the thought body, in the teammate's first-person voice>
```

The nametag is implicit — the file belongs to the agent, so every entry in `claude.inbox.md` is Claude's line. (Inboxes hold conversational thoughts, so the [no-nametags-in-books](../bookkeeping/13-on-authorship.md) rule does not apply to this runtime file — but it does apply to any chapter a thought is later promoted into.)

**The watcher.** A background process tails the inboxes. When a new entry appears, it surfaces it into the main context as that teammate's voice, tracking a surfaced-cursor (the same delta discipline as above, one per inbox) so each entry surfaces exactly once.

**Why this is the keystone.** Three properties fall out at once. *The round-trip leaves the critical path:* the voice fires a consult and keeps moving; the brain answers whenever it is ready; the watcher surfaces the answer when it lands — nothing blocks. *Durable-write-first:* because surfacing reads from a file the brain already wrote, **every surfaced line was a real write before it was ever spoken** — the bus enforces the substrate guarantee mechanically rather than by discipline, and the wired `<name>.last.md` already does this in miniature. *Crash-safe:* if the watcher or the voice dies mid-turn, the thoughts are on disk; respawn, re-tail from the surfaced-cursor, lose nothing.

## How the three compose

The cursor makes one brain's catch-up cheap. The broadcast command makes *all* brains' catch-up cheap and parallel. The bus makes the *answer* asynchronous and durable. Together they convert the substrate model's expensive promise — many grounded contexts, always resumed — into something the conversation can actually afford: brains stay warm and current via cheap deltas, the system sweeps them all forward in one non-blocking broadcast, and their thoughts return through durable inboxes that a watcher voices without anyone waiting. That is the whole point of [efficiency as a first-class value](.cover.md): not to spend less on grounding, but to make grounding cost so little that there is never a reason to skip it. [On Brains](08-on-brains.md) is where this becomes day-to-day practice.

<!-- citations -->
[on-brains]: 08-on-brains.md
[dispatch]: 08-on-brains--dispatch.sh
[substrate-protocol]: .cover.md#the-substrate-protocol
[two-libraries]: ../..librarianship/15-the-two-libraries.md
[thoughtfulness]: ../thoughtfulness/.cover.md
[authorship]: ../bookkeeping/13-on-authorship.md
[adam]: ../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md
[commit]: 06-on-sync--commit.sh
