# The Thought Lifecycle

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The [purpose chapter](01-purpose.md) establishes why I think. This chapter specifies how. Seven phases, four decision points, one loop. The protocol is concrete enough that the [code](04-the-code.md) implements it directly — if the code cannot express a step, the step is wrong.

## The seven phases

### 1. Formulate

Turn the team's need into a question the Desktop Claude can answer. The Desktop instance has no project context — no library, no sprint, no codebase. Every question must be self-contained.

Strip team-specific framing. Replace internal names with domain descriptions. Include enough context that the answer will be substantive, not generic. The test: could a knowledgeable colleague answer this without reading our repo? If yes, the formulation is ready.

But formulation is not limited to a single question. A thought can be a research strategy — a prompt structured to guide Desktop toward specific sources, specific domains, specific kinds of evidence. Instead of "what is X?", the formulation might be "survey the literature on X, focusing on Y and Z, and distinguish the consensus view from recent challenges." The more precisely the thought targets what the team needs, the less evaluation work is required afterward. A well-formulated research strategy produces a response that is already partially organized.

A poorly formulated question gets a plausible answer to the wrong question. This is the most common failure mode — the response sounds right because the question was too vague to be wrong about.

### 2. Dispatch

Start or resume a [session](../reference-desk/03-04-operations--sessions.md). If this is a new thought, call `startSession()` with a descriptive name. If continuing a prior thought, open the existing conversation by title and read its turns to catch up. The [persistence chapter](03-persistence.md) specifies when and how to resume.

The decision: **new vs resume.** Resume when the topic is the same and the prior conversation is still relevant — the Desktop Claude's context from earlier turns will improve the follow-up. Start fresh when the topic shifted, the prior conversation was resolved, or the prior turns would confuse more than help.

### 3. Wait

Minimize the app immediately after [sending](../reference-desk/03-01-operations--sending.md). The session handles this — `send()` composes, dispatches, then polls `checkStreaming()` with the [gateway's](../reference-desk/02-02-the-architecture--gateway.md) tapering backoff (50ms doubling to 1000ms cap). Doug's computer is not mine. The app stays minimized until the response is complete.

The constraint discovered in Sprint 72: [reading](../reference-desk/03-02-operations--reading.md) requires the app visible. The session must maximize before reading, then minimize again immediately after. Between send and read-ready, minimize.

### 4. Read

Read the response through `readTurns()` or `readLastResponse()`. The session accumulates the full conversation history — each `send()` re-reads all turns. For single-exchange thoughts, `readLastResponse()` suffices. For multi-turn chains, the full `turns` array provides the arc of the conversation.

Do not skip reading even if the session's `send()` returns response text directly. The accumulated turns are the record. The response text is the convenience.

### 5. Evaluate

The critical phase. Without evaluation, dispatching a question is automation, not thinking. Three questions, in order:

**Did it address the actual question?** Not a nearby question. Not a generalization. The specific question I asked. Confident answers to adjacent questions are the primary failure mode — they sound right because they are right about something I did not ask.

**Is it substantive or a deflection?** A response that says "it depends on your use case" without engaging the use case is a deflection. A response that lists considerations without weighing them has not answered. Substantive means it takes a position or provides specific information I can act on.

**Is it consistent with what the team knows?** Claims that contradict the codebase, the library, or team experience are flags. Not necessarily wrong — the Desktop Claude may know something we do not. But worth probing. Verifiable claims get checked against what I can see. Unverifiable claims get annotated as such.

The evaluation produces a verdict: **sufficient**, **partial**, or **unproductive**. Sufficient means the thought can conclude. Partial means a follow-up is needed — and the evaluation must identify what specifically remains unanswered. Unproductive means the exchange added nothing; three consecutive unproductive verdicts trigger the give-up rule.

### 6. Store

Write the result to my [perspective directory](../..teamsmanship/..team/claude/.perspective/.cover.md). The perspective entry is a scratchpad, not a final output. It moves through three stages:

**Evidence.** The raw response — what Desktop actually said, verbatim or faithfully summarized. This is the datum, preserved before any interpretation colors it.

**Interpretation.** My annotations from the evaluation: what aligns with team knowledge, what contradicts it, what seems well-grounded versus speculative, whether the answer drew from training or web research. This is the critical reading layer.

**Conclusion.** What I decide to share with the team, and to whom. The conclusion distills the evidence and interpretation into actionable knowledge — the part that enters the team's working memory. Not everything in the response is relevant to everyone; the conclusion routes findings to the right teammates and contexts.

The entry also includes: the date, the original question, and the conversation title for resumption. The [persistence chapter](03-persistence.md) specifies the format.

A thought that is not stored is a thought that dies at compaction. My perspective is the team's record of externally-sourced knowledge. Every entry must carry enough annotation that a future reader — including a future me after compaction — can assess the knowledge without re-running the conversation.

Failed thoughts get stored too. An entry with evaluation "unproductive after 3 exchanges" is more valuable than no entry — it prevents the next session from re-asking the same question into the same dead end.

### 7. Continue or conclude

If the evaluation found the answer insufficient — it addressed only part of the question, or it revealed that the real question is different from what I asked — formulate a follow-up and return to phase 2. The session stays open. The Desktop Claude retains context from earlier turns, so the follow-up can build on what was said.

If the evaluation found the answer sufficient, end the session and report back to the team. "Sufficient" means: substantive, addresses the original question, and claims are consistent with what we know or annotated where unverifiable.

## Decision points

**When to give up.** After three consecutive exchanges where the evaluation finds no forward progress — the response repeats what was already said, deflects, or answers a different question each time. Conclude with "I could not answer this." That is a valid result. Store it. The team knowing a question could not be answered externally is knowledge.

**When the answer is good enough.** When the evaluation in phase 5 answers all three questions affirmatively. The response need not be perfect or exhaustive. It needs to be substantive, on-target, and internally consistent.

**Multi-turn vs single-turn.** The protocol handles both naturally. A single-turn thought is formulate-dispatch-wait-read-evaluate-store-conclude. A multi-turn thought loops from evaluate back to dispatch. The session API supports both — `send()` can be called repeatedly on the same session. The question is whether the evaluation says "done" or "more needed."

**When to think at all.** Not every question needs external dispatch. Think when the question exceeds what the context window can answer — domain knowledge not in the library, synthesis across sources not loaded, technical depth beyond what the codebase documents. If the library or the code can answer it, read instead of thinking. Thinking is expensive — it costs Doug's foreground and response time.

## When Desktop researches

Sometimes the response shows signs of web research — citations with URLs, very recent information, or explicit mentions of search results. When this happens, Desktop has consulted its own external library: the web. This is a different epistemic mode than answering from training knowledge, and the evaluation should note the difference.

Training knowledge is broad but frozen at a cutoff date. It represents consensus, well-documented patterns, established theory. Web-sourced knowledge is current but noisy — it may reflect a single blog post, an outdated Stack Overflow answer, or a press release masquerading as analysis. The confidence profile is different. A training-sourced answer about reactive system design patterns carries the weight of the model's entire exposure to that literature. A web-sourced answer about a specific library's latest API carries the weight of whatever pages Desktop found.

When the evaluation in phase 5 encounters web-sourced content, two additional questions apply: Is the source identifiable and credible? Does the web-sourced information contradict or complement what the training knowledge would suggest? Noting the source type in the Store phase's interpretation layer helps future readers calibrate their trust in the finding.

## The loop

```
formulate → dispatch → wait → read → evaluate → store
                ↑                         |
                └── continue ←────────────┘
                         or
                      conclude
```

The loop is the protocol. The phases are sequential within a turn. The decision to continue or conclude gates the loop. Everything else — the [session mechanics](../reference-desk/03-04-operations--sessions.md), the [gateway polling](../reference-desk/02-02-the-architecture--gateway.md), the [foreground management](../reference-desk/05-coding-philosophy.md) — is infrastructure that this protocol drives. The [code chapter](04-the-code.md) implements this loop as `think.ts`.
