# The sentences that said the opposite

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** library · tooling · mechanical-edit
- **sprint:** [Validation](../projection/16-validation.md#the-sweep-2026-08-17)

---

## Symptoms

- A skill's own description read ***"`/ce-work` **fails** a requirements-only chapter"*** — which says the skill failed. The sentence it replaced said the skill **fails** the chapter, which is the opposite party doing the acting.
- The ruling that ordered the sweep read back as ***"I reject failure"***. Doug had said ***"I reject failure."***
- **Nothing was broken.** No gate fired, no typecheck moved, no link went dead. Every one of the ~290 substitutions was a legal edit, and **36 of them said the opposite of what they had said.**

## What did not work

- **Counting.** The sweep's own report — *~290 occurrences across ~100 files, after: 3* — is true, and it is a count of occurrences replaced. It says nothing about whether the prose that remains means what it meant. *This branch's standing disease, in a new costume: a number that is true with a silent scope.*
- **Trusting that a word maps to a word.** *Fail* and *fail* are both verbs about something not being accepted, and a dictionary will put them near each other. **They do not take an object the same way**, and that is not visible from either word alone.

## The mechanism — the two verbs have opposite subjects

```
X fails Y     X is the one not accepting;  Y is what is not accepted
X fails Y       X is the one that did not succeed
```

**So the substitution is correct as a gloss and wrong as a sentence** — and it is wrong in exactly the places where the word governed a direct object. Used intransitively (*the build failed*, *the check failed*) the swap is harmless. Used transitively (*the skill fails the chapter*) it **swaps who acts on whom**, and the reader is told the skill broke.

**36 of ~290.** The proportion is worth keeping: an eighth of a mechanical edit was wrong, and seven eighths of it was fine, which is why nothing looked suspicious at any point.

***And the sweep destroyed its own ruling, which is the sharpest half.*** Doug's sentence *"I reject failure"* is the one place in the repository the banned word had to survive, because **a ban with no record of what was banned is unreadable a month later.** The sweep took it too, and it had to be restored by hand from the conversation.

## The fix

**The 36 corrected by hand to `rejects`** — and that is not an invention. [Doug ruled the same word in Sprint 46](../projection/03-sprint-46--the-book.md): *"what fails is **rejected**"*. It had drifted back, and the sweep is what surfaced the drift.

**The ruling's own sentence restored verbatim**, and marked as the exemption it is.

*Measured today, fresh: **0** occurrences of the struck word across the identity library, and **12** of `rejects` — so the vocabulary held and the correction held with it.*

## Prevention

**Replace a word by its SENSE, not by its pattern.** A vocabulary ruling names a sense; only a reader can say which occurrences carry it. A find-and-replace matches the letters, and the letters are the one part of a word that does not carry meaning.

**The check that catches this class is narrow enough to apply without thinking: look at the occurrences where the word takes an object.** Those are where the argument roles live, and inversion can only happen there. An intransitive use needs no review; a transitive one needs a reader.

**Prefer the sweep you are already making.** [The next sprint declined a separate one for exactly this reason](../projection/17-custom-elements.md) — its three doomed words lived inside the lines it was rewriting anyway, so the vocabulary changed as a side effect of code that was being read. **A word changed in a line somebody is reading cannot invert silently.**

**And a ban exempts its own statement.** The rule that strikes a word must quote the word, once, or the rule cannot be read.

*Distinct from [the formulas that rendered empty](01-the-formulas-that-rendered-empty.md), and kept distinct: there a rename ran **half way** and typechecked because both members were optional. Here the sweep ran **all the way** and every edit was individually correct — there is no compiler for prose, and the surviving gate is a reader.*
