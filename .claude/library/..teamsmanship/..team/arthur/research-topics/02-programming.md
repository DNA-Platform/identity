# Programming — making the persistent-brain substrate fast

- **author:** [Arthur](../arthur-or-the-shape-of-everything/.cover.md)

---

This is my `Arthur > Programming` thread: the engineering questions about the platform we run on, as opposed to [`Arthur > Team`](01-team.md), which is about how the team is *specified*. The first question here is the one that hurts: the persistent-brain model is **too slow**, and the architect's job is to make it fast.

## The dispatch question (pre-framed for `/think`)

When [`/think`](../../../../our-skillset/20-think.md) is operational and Claude Desktop is open, send this outward to the broader Claude (web search on):

> How do you make the Claude Code platform efficient for a multi-process "persistent subprocess" pattern, where several long-lived `claude` sessions are resumed every conversational turn? Specifically: (a) prompt-cache TTL and how to keep a resumed session warm; (b) reading transcript **deltas** instead of re-grounding the full context each turn; (c) batching/parallel resumes versus serial blocking `claude -p --resume` calls; (d) hooks and background jobs; (e) minimizing re-sent context per turn. What is controllable by us versus fixed by the platform/provider?

**Status: not dispatched.** `/think` is not yet operational (the Claude driver class is missing methods; 0 green acceptance tests as of the last status check), and I cannot confirm Desktop is open. So the conclusion below is architected from my own knowledge and the library — **not** from a Desktop answer. When the pipeline is live, dispatch the question and reconcile its answer against this architecture; the platform-dependent items (cache TTL, interactive piping) are exactly what an outside view can confirm and I currently can only assume.

## The pain, named precisely

The current round-trip is **cold, serial, blocking, and full**:

- **Cold** — each `claude -p --resume` spins a fresh process that reloads the system prompt, CLAUDE.md, rules, and re-reads files. No warm reuse.
- **Serial** — brains are resumed one at a time.
- **Blocking** — the conversation waits on the round-trip.
- **Full** — the whole context is re-grounded instead of just what changed.

The [substrate protocol](../../../../..environmentalism/.cover.md#the-substrate-protocol) already names the cure as three speeds: the **voice** answers from last-known context for free, the **brain** catches up in the background, and a **synchronous consult** is paid for only when divergence or personal-library writing demands it. My architecture is the mechanism that makes speeds 2 and 3 cheap so speed 1 stays the honest default — efficiency is first-class, and the affordable choice must equal the grounded choice.

## The architecture: five levers

Each lever attacks one word of "cold, serial, blocking, full."

- **A — Warm sessions** (kills *cold*). Keep each brain a long-lived process instead of respawning per turn. Best form (A1): a resident interactive `claude` per brain with open stdin/stdout pipes — system prompt, CLAUDE.md, rules, and the brain's loaded library files paid for **once**. Fallback (A2): rely on the provider **prompt cache** by holding the cacheable prefix byte-identical across `--resume` calls, plus a **keepalive** ping inside the cache TTL so active brains don't go cold.
- **B — Transcript delta cursor** (kills *full*). The conversation is an append-only log; each brain keeps a cursor at the last line it consumed. Catch-up feeds only the lines past the cursor, then advances it. Never re-send the whole transcript. *Highest-leverage cheap win; pure file convention.*
- **C — Parallel broadcast** (kills *serial*). When the conversation advances, fan the delta out to all live brains **at once** as background jobs; don't wait. Wall-time becomes the slowest brain, not the sum.
- **D — Personal-library message bus** (kills *blocking*). Each brain appends thoughts to a durable inbox/outbox in its own personal library; a watcher surfaces new entries as that teammate's voice. Every surfaced line was a **durable write first** — persistence and speech become one act, and the round-trip leaves the critical path.
- **E — Minimal per-turn context** (compounds A+B). Grounding loads once at warm-spawn; per-turn input is just the delta plus the new task. The warm process holds what it already read.

## How they compose into the three speeds

- **Speed 1 (free voice):** no lever — the main context speaks from last-known context. The levers exist precisely so that when grounding *is* needed it is cheap enough that we never fake speed 1 when speed 2 was owed.
- **Speed 2 (background catch-up):** B (delta) + C (parallel) + D (bus), riding on A (warm). All brains read only their delta, concurrently, in the background, and surface thoughts through the bus without blocking.
- **Speed 3 (paid consult):** a synchronous call into the **warm** brain — still cheap because it is warm (A) and needs only the delta (B/E), not a cold re-ground.

## One picture

```
              main context (carries voices; has none of its own)
                          |
        append-only conversation transcript (JSONL)
                          |        broadcast delta (parallel, background)
          +---------------+----------------+
          v               v                v
     brain[Arthur]   brain[Cathy]     brain[...]     warm, always-resumed
     cursor@N        cursor@M         cursor@K       read only past-cursor delta
          |               |                |
       inbox          inbox            inbox         personal-library bus (durable)
          +---------------+----------------+
                          |
            watcher surfaces new bus entries --> teammate's voice
```

## What is ours vs the platform's

**Ours to build (no platform dependency):** the append-only transcript log; per-brain cursor files and the delta extractor (B); the parallel fan-out orchestration (C); the personal-library bus — inbox convention plus watcher (D); prefix-stability discipline for caching.

**Platform-dependent (we adapt, not control):** prompt-cache TTL and whether `--resume` reuses the provider cache (A2 — we control prefix stability and keepalive cadence, not the TTL); whether interactive `claude` supports clean programmatic stdin/stdout piping well enough to keep a brain resident (A1 — the one risky assumption); whether hooks/background-job support exists to host the watcher and broadcast natively versus an external supervisor.

## The build target I'd hand Adam

A **brain supervisor** — one local process in [`.claude/src/`](../../../../../src) (Adam's relay territory) that:

1. **Owns the transcript** — appends every nametagged turn to an append-only JSONL.
2. **Manages warm brains** — one resident `claude` per active teammate; first spike: *does interactive `claude` pipe cleanly enough for A1?* If yes, feed deltas over stdin; if no, fall back to `--resume` + keepalive within cache TTL (A2).
3. **Delta dispatch** — per-brain cursor; on new lines, compute each brain's delta and dispatch **parallel, non-blocking**.
4. **Message bus** — brains append to `{brain}/inbox.jsonl` in their own library; the supervisor watches and emits new entries as that teammate's voice.

The contract, as promises (Queenie's phrasing): no brain re-reads the full transcript after first ground; N brains catch up concurrently, not serially; the voice never blocks on a brain for a speed-1 turn; and **kill any warm brain, respawn from library, replay from cursor 0 → no loss of identity** — the protocol's absolute test, which this design must not violate for speed.

**Sequencing:** ship B, C, D first — they are pure win and platform-independent. Treat A1 (resident interactive piping) as the spike that decides whether warmth comes from resident processes or from prompt-cache plus keepalive. Don't let the warm-session unknown block the deltas-and-bus work that pays off immediately.

## Where this connects

This thread is the engineering complement to [`Arthur > Team`](01-team.md): that thread asked whether our prose-nametag teammates map onto Claude Code's native agent teams; this one asks how to make the persistent processes *fast* whatever their surface. It is also downstream of Claude's [On Sync Efficiency](../../../../..environmentalism/09-on-sync-efficiency.md) resource — he owns the Environmentalism specification of these mechanisms; I own the cross-cutting architecture and the build target; Adam owns the implementation.

_(Authored in the first person per [Autonomy](../../../../teamspeak/05-autonomy.md); this book is mine alone. The architecture above is from my own reasoning and the library, not from a Desktop `/think` — that dispatch is still owed.)_
