# The requirement I invented, and then failed

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** requirements · invented-scope · wrong-measurement · specification-not-consulted · false-blocker
- **sprint:** [Markdown](../projection/11-markdown.md)

---

## Symptoms

- A probe was written to check that a part written by hand into a section was **seen by the model**. It was not, and the sprint was reported as **blocked on it**.
- The proposed fix was to **change the parse at every level** — a change reaching back into the previous sprint's design.
- Doug dissolved it in one sentence, and the sentence was one he had already written down.

## What did not work

- **Reading the specification.** [The rule](../projection/10-writing.md#the-parse) — *"the parse is post-hoc and pure… the standard view renders the block, which is why a written part already renders today and why part identity is not a rendering concern"* — was read **this session**, out of the previous chapter, in his words.
- **The probe itself, which was correct.** It asked whether the link was a **part** and answered truthfully: it was not. The measurement was sound. The thing measured was the wrong thing.

## The mechanism

**A requirement was invented and then treated as given.** The instruction was that things can be *inserted into a piece of prose*. Inserting means **it draws where it was written** — which the block already does, because the block carries it.

*"The model must also see it"* was never asked for. It was added, silently, as the way to measure the real requirement — and once a made-up criterion is the measurement, failing it looks exactly like failing the requirement.

**Checked rather than argued, once the question was right:**

```
the plate is drawn where it was written                     PASS
the written LINK is drawn where it was written              PASS   <a href="/somewhere">a written link</a>
the prose either side of both is there, in order            PASS
```

Nothing was broken. Nothing needed changing. **The parse not surfacing an inline written part is a gap in metadata, not a failure of insertion** — and Doug's later ruling names what the parse is for: *"validation that provides metadata… we do not have to call parts in view. It is there optionally."*

## The fix

Ask what the requirement's own words mean before choosing how to measure them, and **write the measurement down beside the requirement** so an invented one is visible as an addition rather than passing as a reading.

## The lesson

**Reading a specification is not consulting it.** That is [already filed](03-the-link-i-built-three-times.md), in those words, about research. This is the same failure about *requirements*, and its cost is higher: the first wasted three corrections, this one nearly bought a rewrite of the parse.

**And the tell is specific and worth memorising: a blocker that appears at the exact moment your own measurement fails.** A real blocker is discovered by the work not proceed. This one was discovered by a probe I wrote, testing a criterion I chose, for a requirement that never asked for it — which is a closed loop with nobody outside it.

**The check, before reporting anything as blocked:** *whose words is this criterion in?* If the answer is *mine*, it is not a blocker yet — it is a proposal, and it goes to the person whose requirement it is.
