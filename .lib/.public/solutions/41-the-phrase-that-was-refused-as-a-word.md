# The phrase that was refused as a word

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** model · birth-dispatch
- **sprint:** [The Margin](../projection/35-the-margin.md)

---

## Symptoms

- ***"a word is one unbroken stretch, and this one carries whitespace" — thrown by a PHRASE***, whose whole reason to exist is carrying spaces. Nine tests red the moment `specifically` began running at construction.

## The mechanism — THE SUPER-CHAIN ASSIGNS INTERMEDIATE TYPES

Every level's bond constructor assigns its own type, and a subclass's bond calls super first — **so a phrase passes through being typed as a word mid-construction**, and a type setter that dispatches on every assignment runs the *word's* law against the *phrase's* content. The final type arrives one frame later, too late.

## The fix — THE TYPE ACTS AT BIRTH ON ITS OWN KIND

[The setter dispatches only when `type.canonicalForm === this.constructor`](../../package/src/writing/Writing.tsx) — a kind's own type acts at birth; an intermediate assignment passes through silently; a *carried* type still acts at bind and at specify. The proof-promise counts: one act at construction, two after specify.

## The lesson

***Any hook that fires on assignment fires on every assignment the super-chain makes*** — and a constructor chain is a sequence of half-true states. **A birth-time dispatch needs an identity guard, and `canonicalForm` against `this.constructor` is the honest one:** it asks "is this writing the very kind this type makes?", which is the only moment the law is fully in force.
