# ce-handoff

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

**Not a step in the loop — the boundary between sessions.**

Run it at the end of any session, from whichever step you were on: [`/ce-brainstorm`](28-ce-brainstorm.md) · [`/ce-plan`](29-ce-plan.md) · [`/ce-work`](30-ce-work.md) · [`/ce-compound`](31-ce-compound.md)

**The next session runs nothing.** It opens by reading the sprint chapter's **Where things stand**, and resumes at the step named there.

---

Close a session by writing **where things stand** into the current sprint chapter, so the next session opens by reading it. Adapted from compound engineering's session-continuity skill — [`ce-handoff`][ce-handoff] at commit `6a2a0f9` — with its storage decision reversed: theirs writes to managed temporary storage outside the project, ours writes into the library.

**Announce at start:** "Using handoff to close this session."

## The four things that made a handoff fail — added 2026-08-07, out of the one that did

*Doug, on the session that opened from it: **"Handoff should have created something to follow… figure out how to handoff better as this one clearly didn't work well."** Each fix below is a step, not an aspiration.*

### 1. It ends with a push, or it did not happen

**A handoff that leaves the library uncommitted has written a note nobody will read.** The last one did exactly that: the record was correct, it sat in a working copy, and the branch on the [object of record](../..environmentalism/06-on-sync.md) was **three chapters behind** without anyone knowing.

**So the final step is the push**, and the handoff is not finished until it reports the commit. *Work state that only exists locally is the thing this section was invented to replace.*

### 2. The first line is the next action, written as the command

**Status is not an instruction.** `implementation-ready` told the next session what the chapter *was* and not what to *do*, so the session opened by guessing — and guessed a step that had already run.

**Where things stand opens with one line: the exact command to run, and where it resumes.** Not "the plan is ready" — `/ce-work on this chapter, starting at U5`. **If the next action is a decision Doug must make rather than work, say that instead**, and name the decision.

### 3. It is written for the person reading it, not for the implementer

*Doug: **"Guys I don't know your codes."*** A section built out of `U2` and `R35` is unreadable by the one person whose intent it is preserving.

**Every part of it says the thing in plain words first**, and carries the identifier afterwards for whoever is tracing. Identifiers are for the origin trace; **the state is for a human.**

### 4. It names what to read, and the list is short

**Orienting cost twenty-four files.** That is not thoroughness, it is the absence of a reading list — and it is paid at the start of every session until someone writes one.

**The handoff names three to five things and claims they are sufficient.** Each with what is load-bearing in it. If five are not enough, the sprint chapter is not doing its job and *that* is the finding.

## Four more, walked back out of one full session — added 2026-08-10

*The Subject ran the whole loop in one stretch — opened from a handoff, closed through brainstorm, plan, work, review and compound — and Doug's instruction at its close was to walk back to the start and improve the handoff at every seam that showed. These are the seams.*

### 5. One state, no layers — a second state means the handoff failed

The handoff this session **opened from** carried two states at once: an older list still saying work had not started beneath a newer one saying it was done, with two different suite counts standing in one section. The reader reconciled them from the cover — which is the reader doing the writer's job. **Rewritten means the old state is deleted in the same act.** If two states coexist in Where things stand, the section has become a log, and a log is precisely what this section was invented to replace. *This sprint's own record accreted the same way — batch after batch — and was compacted at the close under [the compaction directive](../bookkeeping/09-on-synopsis.md): state lives once, at the end; narrative lives above it, as record.*

### 6. The reading list is shaped for the step it hands into

The handoff this session opened from listed four things to read — all of them code — and the session it opened was a **brainstorm**, whose first need was the design's source material. Doug's first instruction was to go read thirty documents. **A handoff into work names the code; a handoff into a brainstorm or plan names the sources the designing reads** — the primary material, the sprint records that bind, the model books. Name the reading for the step the first line commands, not for the step that just ended.

### 7. A stopped push is a session boundary, not an errand

Mid-session, a push was stopped for reconciliation, the tool's advice was followed on the spot — and the reconcile's down-sync **overwrote the session's unpushed records**, which survived only because the conversation still held every word. The law now lives in [On Sync](../..environmentalism/06-on-sync.md#uncommitted-work-is-not-protected-by-any-of-this): **treat every reconcile as a session boundary — push the branch library or copy it aside before running pull or resolve.** For the handoff, the rule is simpler still: if step 3's push is refused, **securing the branch library comes before obeying any tool's next suggestion.**

### 8. A sprint with a demo hands over the way to see it

Doug asked for the link mid-session, and the serve had to be rediscovered — the port, the route, the command. **When the sprint has something to look at, Where things stand says how:** the command that serves it, the route to open, and what the reader should see first. A demonstration that must be rediscovered is not handed off.

## What we were missing

Autobiographies carry **identity** across sessions. Sprint chapters carry **narrative**. Nothing carried **work state** — so after a compaction, what remained open lived only in a todo list and in whatever the conversation still held.

## Where it goes

**Into the last section of the current sprint chapter**, in the branch's [Projection](../library-tree/03-sprints.md#what-a-projection-book-contains--the-schema) book. Not a scratch file, not a directory beside the repo, and never a dot-prefixed folder — a leading dot means [a catalogue](../bookkeeping/.cover.md#the-dot-type-system) in this library and nothing else.

The sprint chapter is already the branch's current-state marker. Work state belongs in it for the same reason narrative does: **a session opens by reading the last sprint.**

## What the section carries

- **The objective**, and Doug's latest stated intent in his own words.
- **Rulings** — decisions Doug made, verbatim. The most expensive thing a session can lose.
- **State, split honestly** — complete, in progress, not started.
- **Blockers**, each with what it waits on.
- **Verification** — what was actually run, with the numbers.
- **Wrong turns already tried**, so the next session does not retry them. Easy to omit and half the value.
- **Pointers**, each naming *what is load-bearing there* rather than only a path.

It is **rewritten as the work moves**, not appended to — the library is [edit-first](../bookkeeping/09-on-synopsis.md), and a work-state section that accumulates is a log, not a state.

## What does not go here

Anything worth keeping past this sprint is not work state. A lesson is a [case](31-ce-compound.md); a settled question is a decision record; a design is a plan chapter. **If it will matter next month, compound it; if it only matters tomorrow, it is where things stand.**

## The session rules

**One plan per session.** A session runs one [ce-plan](29-ce-plan.md) through [ce-work](30-ce-work.md). When it is done, the session ends.

**Different area, different session.** Work belonging to another plan does not get appended to this one — write where things stand, start fresh, plan it there.

**Opening orients; it does not act.** Read the last sprint chapter, say what was recovered, recommend a continuation, and **wait**. The section describes what someone believed when they wrote it; the working copy is the truth, so verify before acting on any of it.

## The ledger

Within a session, [ce-work](30-ce-work.md) tracks unit-by-unit progress in the **Where things stand** section itself, updated as units complete rather than at the end. Their most expensive observed failure is the reason:

> "Conversation memory does not survive compaction. Controllers that lost their place have re-dispatched entire completed task sequences."

## Steps

**To close a session:**
1. Read the sprint chapter and the plan chapter — state from evidence, not memory.
2. Rewrite **Where things stand** with everything above, **opening with the next action as a command**.
3. **Push.** The branch library to the [object of record](../..environmentalism/06-on-sync.md), the code to the project repo. Report both commits.
4. Say in one line what it captured.

**To open one:**
1. Read the last sprint chapter of the branch you are working in.
2. Say what was recovered and what it claims is outstanding.
3. **Verify against the working copy** before acting.
4. Recommend the continuation. Wait.

<!-- citations -->
[ce-handoff]: https://github.com/EveryInc/compound-engineering-plugin/blob/6a2a0f9940ab0b3577ce26226ee393390470e412/skills/ce-handoff/SKILL.md "ce-handoff — authoritative runtime spec"
