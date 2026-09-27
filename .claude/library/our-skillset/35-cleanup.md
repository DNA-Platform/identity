# cleanup

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

Clean the code a sprint touched, and refactor its neighbours where the sprint made a convention visible. **A cleanup is not tidying.** It is the act of bringing code back to the standard of the register it lives in — and the standard is different in each one, which is the whole of why this skill exists.

**Announce at start:** "Cleaning up: <what the sprint touched>, against <the register it lives in>." **Then [offer the wart hunt](#the-offer)** — one line, and take a no gracefully.

## The commitment this serves

> ***Doug:*** **"We always put the codebase back in a state that is better than when we started it."**

***That is the standard, and it is not satisfied by a sprint that shipped.*** **A sprint leaves sediment** — a member kept for a mechanism that moved, a name chosen before the thing was understood, a helper standing beside its only caller, a comment restating what the code now says better. *None of it fails a gate. All of it is worse than what was there before, and it compounds, because the next session reads it as intent.*

**So a cleanup is owed by every sprint, and it has a direction: not back to where the code was, but forward past it.** *The neighbours are in scope precisely for this reason — if a sprint made a convention visible, the code that predates the convention is now the odd one out, and leaving it that way is how a codebase ends up with three ways of doing one thing and no record of which is meant.*

***The test is simple and it is not "does it still pass".*** **Would somebody reading this file tomorrow learn the right thing from it?** *If the file teaches a convention we have abandoned, or a name we would no longer choose, the sprint made the codebase worse and the gate did not notice.*

## The registers — the first question, always

***"Certain code is public, like .public, and other code like the chapters of the library are to be read! So what is good in one case is public as a framework for extension and the other is public as a document of record to be as readable as possible."*** — **Doug, 2026-09-17**

**There is no single standard of good code in this repository, and applying one is the commonest failure a cleanup makes.** *Four registers, four readers, four different things "good" means:*

| register | the reader | what good means |
|---|---|---|
| **`.public/package/src`** | a developer **extending** the framework | a minimal, stable vocabulary. One word per file. A member is a public commitment. |
| **a library's own code** (`.me/`, any book's resources) | a person **reading a book**, with the code beside the prose | readability above everything. It is a **document of record**. |
| **`.public/package/.binding`** | somebody **debugging a build** | clarity. Longer, plainer names. Nobody extends it and nobody reads it as literature. |
| **`library/chemistry`** | somebody **reasoning about the substrate** | the mechanism holding itself together. Invariants stated between classes, so classes live together. |

> ***Doug, on the binder:*** **"I care less about the binder. It is like a compiler… The names of the C# language spec are different from the variable names of its compiler."**

***Get the register wrong and every judgement after it is wrong.*** *This session applied `.public`'s one-word aesthetic to the binder for a full day and produced `unaccounted`, `shared`, `accompanies`, `raised`, `errored` — mechanical helpers wearing canonical vocabulary.*

## Where a cleanup starts

**Start at [the condition report's actionable list](../../../library/.public/.lib/the-condition-report/06-the-cleaning.md)** — *it carries every ruling Doug has given on the code as a problem still to solve.* **[The Coding Style](../../../library/.public/.lib/the-coding-style/03-the-coding-style.md) names the three lists the branch keeps and says which answers which question**; going to the wrong one is how a session re-solves something already settled.

***Read the sprint chapter before the code.*** *A cleanup that does not know what the sprint decided will undo a decision and call it an improvement.* **[The Coding Style](../../../library/.public/.lib/the-coding-style/03-the-coding-style.md) exists for exactly that: "I want them to be able to refactor your work without reverting my rulings."**

## The four tests, in the order they bite

**1. THE UNIT OF CODE.** ***A program's file boundaries fall where its promises fall.*** *[The Unit of Code](../../../library/.public/.lib/the-coding-style/01-the-unit-of-code.md) gives the law and its three instances:* **in `src` the unit is a WORD** — one word of the vocabulary, all three of its faces in one file, and *if a file cannot be named with a word from the vocabulary it does not belong there*; **in `$Chemistry` the unit is a CONCERN**, because its invariants are stated *between* classes; **in a compiler the unit is a PHASE**, because its promises are about seams.

> ***The failure it predicts:*** *a promise spanning two files is a promise neither file can keep, and it arrives as a cycle, a stale copy, or a rule with two homes that disagree.* **A sentence appearing twice in one function is that failure in miniature** — *it means the rule wants its own file.*

**2. THE ORDER OF A CLASS.** *[The Order of a Class](../../../library/.public/.lib/the-coding-style/02-the-order-of-a-class.md):* **fields (private, public, protected) · properties · the bond constructor · the constructor · methods (public, protected, private).** *Overrides sit at the bottom of their group. Blank lines separate groups and never members inside a stack.* ***The two halves are deliberately opposite*** — a private field is met before anything built on it, a private method after everything that calls it.

**THE PROPERTY TEST, which is the half most often missed:** ***a member is a property when it takes no arguments AND hands back data.*** *Both halves. Writing something on one line does not make it one —* **`canonical()` is a property, `specify()` is not, `where(match)` is not.**

**3. THE CLOSENESS RULE.** *[The Closeness Rule](../../../library/.public/.lib/the-coding-style/04-the-closeness-rule.md) is the law the other chapters express: proximity is relatedness, size is relevance inverted, and order always wins.* **A helper with one caller belongs in its caller**, not beside it. **A group of predicates about one idea belongs in one file**, not scattered through the file that happens to ask them first.

**4. NEVER A KIND-CONDITIONAL ON A BASE.** ***The base declares the seam and the kinds override.*** *[Polymorphic Limiting](../../../library/.public/.lib/the-type-system/06-polymorphic-limiting.md) gives the three legitimate faces — a member holding an absent mechanism, a utility whose first parameter is the thing it is about, and designing a base from the subclasses in front of you.* **A member on a base returning nothing is the antipattern**, *and it is how `makes` came to sit on `$Type` claiming that every type in the library makes things.*

## When a comment survives, and when it moves

> ***Doug:*** **"It can involve removing the sketch comments at the tops of files and migrating comments out of the files into documentation — or noting that they are not done being implemented and the comment is essential. But if code is permanent then its documentation can live elsewhere."**

***A comment is a stage, and the stage ends.*** **The question a cleanup asks of every comment is not whether it is good writing. It is whether the code beneath it is FINISHED.**

- **While code is a sketch, its comment is essential and stays.** *It is carrying the reasoning of something still being decided, and moving it into documentation would publish a decision nobody has made. **Say so explicitly** — a cleanup that leaves a comment should record that the code is unfinished, so the next session knows the comment is load-bearing rather than merely surviving.*
- **Once code is permanent, its documentation lives elsewhere.** *Permanence is what earns a comment its removal, not age and not length.* **A sketch comment at the top of a finished file is the commonest thing a cleanup deletes** — *it describes an intention the code now states better, and it is read as current.*
- ***And "elsewhere" differs by register.*** *For a library's own code it is the chapter standing beside it — the file and its chapter are one thing said twice. For `.public` it is a `.lib` book that **links to** the code, never the reverse.*

***The failure to avoid is deleting reasoning that has nowhere to go.*** **Move it first, then remove it** — and where it cannot be moved because the code is still moving, leave it and mark why.

## By project

### `.public/package/src` — the language

**The strictest register, because a member here is a commitment to every library built on it.**

- ***A member added to a fundamental class is nearly always wrong.*** *Ask what the framework already has before adding anything — [What Natural Means](../../../library/.public/.lib/the-coding-style/07-what-natural-means.md). **Adding is the tell.***
- ***Brevity is earned by being canonical.*** *Only a thing at the centre of the domain gets one word; a short name on a mechanical thing falsely promotes it.*
- ***Never self-name a framework thing.*** *Use a proxy and flag it. [The Spelling of a Kind](../../../library/.public/.lib/the-coding-style/05-the-spelling-of-a-kind.md) and [The Semantics of Books](../../../library/.public/.lib/the-semantics-of-books/01-levels-of-closure.md) govern what a name may even mean — **a library closed under books does not mint, does not have rooms, and does not borrow a metaphor to explain another metaphor.***
- **Comments stay** *until `src` has a manual of its own.* ***The convention is that a reference document LINKS to the code, never the reverse*** — [The Coding Style](../../../library/.public/.lib/the-coding-style/03-the-coding-style.md).
- ***Every change needs Doug's explicit yes, members and classes alike.***

### A library's own code — the document of record

**`.me/`, and any book's resources. The criterion is what a person meets when they read it beside its chapter.**

- ***The code carries no comments.*** *Everything a comment would have said belongs in the chapter standing beside it. [Writing a Book](../../../library/.public/.lib/writing-a-book/01-using-the-public-library.md) and [The Book Is the Layout](../../../library/.public/.lib/writing-a-book/05-the-book-is-the-layout.md).*
- ***A rule holding BETWEEN parts of a file has nowhere to live once the file is split***, *so it must be in the prose.* **This is the strongest argument for a manual existing at all**, and a cleanup that splits a file without moving its between-rules into a chapter has destroyed something.
- ***Read it as a reader, not as a compiler.*** *A file stripped of prose and never re-read is a file nobody has checked.*
- ***Every file is the book, a chapter, or a chapter's resource.*** *A library holding anything else does not compile, and an exemption hiding a file inside a book is how a book stays wrong while the gate reports green.*

### `.public/package/.binding` — the compiler

- ***A phase is a file.*** *If a task does four things, the rule that does three of them wants its own module — and it should RETURN a fault rather than raise one, so the phase decides how failure is reported and the rule decides only what a fault IS.*
- ***Names are clear and plain, and longer than the framework's.***
- ***Configuration registers phases; it does not declare them.*** *A plugin that transforms library source is a binding phase that happens to be registered in a config file.*

### `library/chemistry` — the substrate

- ***The unit is a concern, and a large file is not a file nobody split*** — it is the mechanism holding itself together, which is why the substrate has no import cycles at all. *[Composition](../../../library/chemistry/.lib/composition/07-polymorphism.md), [Implementation](../../../library/chemistry/.lib/implementation/02-chemical.md).*
- ***Never add a bookkeeping FIELD to a chemical.*** *Every field is a reactive bond and a framework write diffuses up the tree.*
- ***Chemistry bugs may be fixed alone; chemistry FEATURES are pitched, never taken.***
- *[Testing](../../../library/chemistry/.lib/testing/01-the-contract.md) — a test is a promise, not a mechanism check.*

## What a cleanup may never do

- ***Innovate.*** *"The design is Doug's and the implementation is ours, so a fault found in the implementation is ours until proved otherwise" — [The Coding Style](../../../library/.public/.lib/the-coding-style/03-the-coding-style.md). **Where something is not obvious, ask what he had in mind** rather than inventing a member.*
- ***Silence an invariant.*** *Friction is the design speaking. A check that fails is not an obstacle to route around.*
- ***Write a cast that asserts what a check verifies.*** *Narrow with a predicate that does the check, or ask a question the type system can answer.*
- ***Undo a ruling while refactoring.*** *Every one is in the sprint chapter and in [the condition report](../../../library/.public/.lib/the-condition-report/01-how-to-read-this.md); read before you tidy.*
- ***Reach for a mechanism because it exists.*** *`supplies` and `makes` are both real seams and both were the wrong answer when reached for. A member that exists is not a member that is right.*

## Where the failures are written down

***[Solutions](../../../library/.public/.lib/solutions/01-the-formulas-that-rendered-empty.md) is the branch's record of faults already paid for***, and several are cleanup faults specifically: [a class that was not the class](../../../library/.public/.lib/solutions/06-the-class-that-was-not-the-class.md), [a field that buried a method](../../../library/.public/.lib/solutions/08-the-field-that-buried-a-method.md), [a suite that passed against a stale build](../../../library/.public/.lib/solutions/05-the-suite-that-passed-against-a-stale-build.md). **Read the titles before starting; one of them is usually about what you are holding.**

## <a id="warts"></a>What you count is WARTS

> ***Doug, 2026-09-17, on an earlier draft of this chapter:*** **"uhhhh not everything can be numbers. Sometimes something has to LOOK better right? … I am scared of hearing code cleanup be depersonified. I didn't ask for a quantitative spin and it is a corrective for being too mechanical."**

***He is right, and this chapter taught the fault.*** *An earlier version ended "a cleanup is finished when the numbers are stated, never when the code looks better" — written to stop a session declaring victory on a feeling, and it overshot into the opposite failure: a session that reports a scoreboard and never says what it made better.* **A cleanup is a corrective for work that was too mechanical. It cannot itself be mechanical.**

***THE UNIT OF A CLEANUP IS A WART, and a wart is a thing you can point at.*** **A comment that outlived its code. A name from before the thing was understood. A helper beside its only caller. A rule written three times. A document of record that now lies.** *Those are countable, and counting them is worth something, because each one is a specific thing that was there and is not any more.*

**What is NOT worth counting is checks that pass.** *A suite at 68 of 68 says the same thing before and after the cleanup, which is precisely why it cannot be the report. It is the floor.*

***So the report is: here are the warts I found, here is what each one was, and here is what the file reads like now.*** **And where the thing was visual, LOOK AT IT** — *bind it, photograph it, and say what you see. "The code is too faint to read" is a finding no number was ever going to produce.*

## <a id="comparables"></a>Comparables — the technique that finds the warts reading cannot

> ***Doug, 2026-09-17:*** **"How can you measure comps? You probably want to read broadly but also find comparable code and decide if they should look the same and then figure out if one, the other, neither or both need reversion."** *And: **"Comparables is a great technique."***

***You cannot. That is the point of it.*** **A comparable is not a measurement, it is a second opinion the codebase is already holding** — *and it is how a session finds the faults it has stopped seeing in the file it just wrote, because the fault is invisible until something beside it is doing the same job differently.*

**THE MOVE, in order:**

1. ***Read broadly first.*** *You cannot find a comparable in a file you are staring at. Go and look at the three or four other places that do this same job.*
2. ***Find the comparable.*** **The other plate. The other probe. The other kind that draws itself. The other book's table.** *Anything that answers the same question in the same register.*
3. ***Ask whether they SHOULD look the same*** — **and this is the skeptical half, the one most often skipped.** *Two things doing one job usually should. Two things doing jobs that merely resemble each other must not be forced together — [the register decides](#the-registers), and a cover that is a state a reader toggles and a cover that is a record you read are not comparables at all, however alike their code looks.*
4. ***Then the verdict, and it has FOUR outcomes rather than two:*** **this one changes · that one changes · neither changes · both change.** *A session that only ever moves the file it is holding toward its neighbour has assumed the neighbour was right, which is the commonest way a bad convention spreads.*

**And "both" is real.** *Where two implementations disagree and neither is what we would now write, the comparable has found a THIRD thing — the shape both should be — and that is the most valuable result this technique produces.*

***Say the comparison out loud in the report.*** **"X and Y both do Z; they should agree; Y was right; X now matches"** *is a sentence a reader can check.* **"Cleaned up X" is not.**

## <a id="the-offer"></a>The offer — go through it with the person first

***Optional, and offered rather than assumed.*** **Before cleaning, ask whether anything looks like it wants cleaning** — *a wart hunt out loud, with the person who has been looking at the work.*

> ***Doug:*** **"I like looking for warts and you can count them and I like brainstorming with me to see if anything needs to be cleaned so you can be more skeptical."**

**The value is the SKEPTICISM, not the permission.** *A session cleaning alone grades its own homework and finds the faults it already knows about; a session that asks first gets handed the ones it has stopped seeing.* **Offer it in one line, take a no gracefully, and never turn it into a questionnaire** — *the [brainstorm](28-ce-brainstorm.md) rules apply if it becomes a real round.*

## The gate — the floor, not the finish

***The numbers prove that nothing BROKE. That is all they prove, and it is worth proving.*** **`tsc` at zero, the suite by count, and a bind of every library the change reaches** — *and the suite reads `dist`, so a bundle runs before it or the run is measuring yesterday.*

***A cleanup that changed a public surface is not done until the demo is bound and SEEN.*** *A green gate says nothing about a page.*

**Then answer the question the gate cannot:** ***would somebody reading this file tomorrow learn the right thing from it?*** *Read it as a reader. If nobody re-read the file, nobody has checked it.*
