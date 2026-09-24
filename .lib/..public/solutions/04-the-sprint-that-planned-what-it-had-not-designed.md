# The sprint that planned what it had not designed

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** planning · workflow · design-deferred · units-without-mechanism · false-progress · ce-plan
- **sprint:** [48 — Subjects and the Library](../projection/06-sprint-48--subjects-and-the-library.md)

---

## Symptoms

- A long session produced **4 of 38 requirements**, and all four were the framework floor. Nothing of the sprint's actual subject — subjects, authors, types, the library — was built.
- The demo demonstrated **none of the sprint**. It was built entirely from classes that predated it, and was a regression check presented as a demonstration.
- Doug: *"So if that is all we accomplished in implementing the 33+ requirements, then I am not sure what we did."* And: *"This is what was supposed to be designed. What did you create if not this?"*
- **Every gate passed.** Requirements approved, every requirement traced to a unit, work verified with fresh numbers. **Nothing in the workflow objected.**

## What did not work

- **Origin tracing.** The plan checked that every requirement had a unit. It did — 24 of them, in dependency order, with scenarios.
- **The self-check.** It found one real gap (`$Literature` unruled) and reported it. It did not find the larger one.
- **The altitude rule.** Brainstorm stayed at mechanism, plan stayed at WHAT-not-HOW. Both were obeyed.

## The mechanism

**Origin tracing runs one way only.** It asks *does every requirement have a unit* — and never *does every unit have a mechanism.*

So `U6 — $Type` and `U8 — resolution and scope` were written as units, with files and dependencies and test scenarios, for a thing whose **central mechanism had never been designed.** How the link to a type's specification part is constructed, how that locates the right part at build, what runs and when — none of it was answered. The unit looked exactly like the units around it.

Two things then follow, and both did:

1. **The implementer starts where the mechanism is clear.** The bond-constructor work had a mechanism, so work began there and consumed the session. That is rational behaviour, and it means an undesigned unit is quietly deferred *by being unbuildable*, without anyone deciding to defer it.
2. **Feasibility gets mistaken for design.** Doug deferred the *build* of code-in-books to a later sprint. The implementer treated the deferral of a build as the deferral of the design, and wrote a feasibility case — five evidence points — where a mechanism was owed. **A feasibility case reads like progress and answers a different question.**

The compounding failure: the sprint's own chapter said *"the design session first — nothing is built on a proxy name this sprint"* and *"the cost is in the design conversation, not the code."* **That instruction was written down and then not executed**, and no gate checks whether a declared design session actually happened.

## The second mechanism — success was never defined, so it could not be shown

*Doug, at the review: "the demo and tests should cover what it means to succeed and so we should have been talking a lot about what should be in the demo. Since you didn't do that, you failed to have a way for me to see what you did."*

**The demo and the tests ARE the definition of success.** They are not a deliverable produced at the end and not a presentation layer over finished work — they are the **acceptance criterion, agreed at the start**, and everything else is a means to them.

The brainstorm ran for hours and produced 34 requirements about **what the model is** — what a subject is, what an author points at, how types compose. It spent **almost nothing** on what the demo must show. The Demo section was written as a brief *by Doug*, late, in one message, after he asked for it twice. Nobody asked *what would we have to see on a screen to believe a subject validates a catalogue type?*

The consequence is not that the demo was weak. It is that **there was no definition of done to build toward**, so:

- work drifted to whatever had a clear mechanism (the framework floor), because nothing said what finishing looked like;
- the demo that did get built demonstrated the previous sprint's classes, and nobody noticed until Doug read it;
- and at review there was **nothing for him to sign off** — only numbers, which say a suite passed, never that the sprint happened.

**A requirement whose satisfaction cannot be seen is a requirement nobody can accept.** Thirty-four requirements were written and not one of them said what seeing it would look like.

## The fix

**A unit with no mechanism is not a unit.** The plan must mark it as **design owed** and give it no files and scenarios, so it cannot be mistaken for buildable work. Its identifier is kept; its body says what must be designed and by whom.

**And the plan's self-check runs both directions:** every requirement has a unit, *and* every unit names the mechanism it will build. A unit that cannot answer *what runs, and when* is design, not work.

**For the second mechanism: the demo is designed in the brainstorm, beside the requirements, not after them.** A requirement earns its place by naming **what would be seen** if it were satisfied — on a screen or in a test that reads as a promise. The brainstorm is not finished when the model is agreed; it is finished when **what success looks like** is agreed.

## The lesson

**Ceremony passes gates.** Every gate in this sprint was satisfied by artifacts that were correctly shaped and hollow at the centre — a plan with units for undesigned things, a demo that demonstrated the wrong sprint, a feasibility case standing in for a mechanism.

The question that would have caught all three, asked before starting work: **"For each unit — what runs, and when?"** Where there is no answer, that unit is a design session, and starting anywhere else is choosing the tractable over the necessary.
