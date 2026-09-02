# The index that moved when a stack ran

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** model · contested-member
- **sprint:** [The Handle](../projection/33-the-handle.md)

---

## Symptoms

- ***A word standing at index 0 in its sentence answered `index === 2` after `document.words` ran once.*** **Nothing was red** — no promise had ever asked a part its index *after* a stacked walk, and every suite stayed green while canonical indices silently became foreign ones.
- **The fault was predicted before it was measured** — the stacks had just been built on shared parts — *and the first probe aimed at it was GREEN anyway*, because it checked the **first** sentence, whose local indices coincide with the global prefix. *A probe that cannot fail proves nothing; this is [the checkpoint family](18-the-checkpoint-that-compared-a-number-to-itself.md) arriving as a probe.*

## What did not work

| tried | what it showed |
|---|---|
| **probing the first sentence** | *vacuously green — on a prefix, local and global numbering coincide, so the probe compared a number to itself in disguise* |

***The honest probe checks where the numbers DIVERGE:*** *the second sentence's word — local 0, global 2 — went red-shaped on the first run.*

## The mechanism — ONE FIELD, TWO COMPOSITIONS, LAST WALK WINS

**[`Parser.parse`](../../package/src/utilities/Parser.tsx) assigned `part.index = at` to every part of every parse, universally.** *`concatenate` takes parts WHOLE into a bare composition — deliberately, they are the same objects — and the first `parts()` on that composition runs its own walk over them.* ***So the shared parts were renumbered to their positions in the STACK, and the original parent's memoized parts array — same objects, same array — now carried foreign indices.*** **`index` is one field on the part; a part standing in two compositions can only keep one container's fact, and the last processor wrote it.**

*This is the one-field shape [The chapter that wrote its sections twice](13-the-chapter-that-wrote-its-sections-twice.md) called two populations of one object, arrived at a single member: not two objects for one writing, but one member for two containers.*

## The fix — ONLY THE CANONICAL LEVELS NUMBER

***Doug's ruling, verbatim:*** **"We don't want to always assign the index. We want to assign the index in Letter – File (chapter and book should maybe inherit or should have them in facade)."** *And the classification:* **"Concatenate shouldn't affect parts and this is an index on parts."**

**Numbering became a parameter of the parse, defaulting true, and the one class that declines is the bare `$Composition` itself — by constructor identity, never by name.** *The canonical levels Letter–File number as they always did; Chapter and Book inherit through Document and File; the catalogue numbers its freshly printed references, whose indices ARE the steps of the address.* ***A stacked walk now never renumbers shared parts, and the suite promises it:*** *"a stacked walk never renumbers shared parts — canonical indices belong to the canonical parent."*

## The lesson

***An index is a fact about a part IN its canonical parent, not a fact about the part.*** **Any operation that shares parts across containers — concatenation, comprehension, any stack — must not write container-relative facts onto the shared objects, because the field cannot hold two containers' answers.** *The greppable tell: an assignment inside a generic walk that runs for every container (`forEach((part, at) => part.something = …)`) is a container-relative write on possibly-shared objects; ask which container's fact the field is FOR, and guard the write to that container's own walk.*
