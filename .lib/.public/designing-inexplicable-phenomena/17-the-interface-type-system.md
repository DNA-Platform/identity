# The Interface Type System

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Written 2026-09-05 while the second `$Writing` was being designed with Doug at the keyboard, because the sentence that explains the whole design existed only in the conversation.*** *Everything here is either his words or a measurement; the theorems are ours and are marked as ours.*

## <a id="the-four-purposes"></a>The four purposes, in his words

> **"The interfaces are so that the whole system can be replaced at any part. The shallow inheritance with type system makes `$Writing` relatively easy to subclass and apply in many places because you have types to fold in to achieve your specifically. Specifications and specifically are so types can be causal. Since libraries are relatively static, we will mostly check the thing statically on build giving this system actually build time power. We're making a little compiled language."**

| | the purpose | what it demands of the code |
|---|---|---|
| **P1** | **any part can be replaced** | every ask goes through the interface, never through a class |
| **P2** | **`$Writing` is easy to subclass** | inheritance stays shallow; a subclass FOLDS IN types rather than deepening a tree |
| **P3** | **types are causal** | `specifically` may act, not only judge |
| **P4** | **checked statically, at build** | the check descends the whole library once, and its cost is a build cost |

## <a id="the-sentence"></a>The sentence the design turns on

***Doug, the same day:*** **"The assumption is if it implements typeOfX by carrying the type, it then implements `$X$` as an instance. We basically made an interface type system."**

***So: the interface is what you PROMISE, and the type is the EVIDENCE you carry.*** **TypeScript checks the promise statically; carrying the type checks it at runtime, and [the build](#p4) is where the two meet.** *That is why no interface ever names a type class — the evidence is not part of the contract.*

## <a id="two-axes"></a>Two axes, and they do not interact

**Doug's own test for which is which:** *"if you are part of the composition, you are. If you are not, you are annotative."*

| | says | open or closed |
|---|---|---|
| **the type** | which of the seven this writing is | **CLOSED** — a consumer never adds one |
| **the annotation** | everything else said about this writing | **OPEN** — the entire extension surface |

***A piece of writing carries exactly one of the seven and as many other kinds as it likes.*** **That is multiple inheritance, of the only thing that matters — the rules** — and it happens by CARRYING, never by `extends`. *Measured: a paragraph that is also a list stands at the paragraph level, is found as a list, and both specifications run.*

## <a id="composed-of"></a>What a piece of writing is composed of — HIS, verbatim

> ***Doug, 2026-09-05:*** **"A paragraph is composed of sentences. It can have recursive paragraphs that contribute THEIR parts. That's it. There is no other option. Now paragraph through letter use the parser so they can't quite confirm that, though section through book don't so they can EXPLICITLY check that they contain only their type of the one below. But even though they can't check that because we don't want to recursively specify (we will check parts in the compiler), we still understand them to be composed of certain things."**

| | | |
|---|---|---|
| **what a level composes** | the level below it, **or itself** — a paragraph inside a paragraph contributes ITS parts | *and there is no third option* |
| **paragraph through letter** | go through the parser, **so they cannot confirm it** | the division is the parser's |
| **section through book** | do not, **so they could check it explicitly** | and still do not |
| **why not** | ***we do not want to recursively specify*** | **the compiler checks parts** |

***So `specify()` checks ONE piece of writing and never descends*** — and the understanding of what a thing is composed of stands whether or not any check enforces it. **A descent was added here on 2026-09-05 and removed the same day on his word; it was an assumption of ours, listed as a defect of his.**

## <a id="definition-first"></a>A MEASUREMENT IS NEVER A DEFINITION

> ***Doug, 2026-09-05, on being told a paragraph composed nothing:*** **"You said a paragraph has no sentences when it is prose. Do you hear yourself? A paragraph has sentences by definition. You speak from a semantically null perspective."**

***A paragraph is composed of sentences. That is what a paragraph IS***, and it is true before any code runs and stays true if the code answers nothing. **So when a reading says a paragraph composes nothing, the finding is that THE READING IS WRONG** — never that the paragraph is empty.

| said | should have been said |
|---|---|
| *"a paragraph written as prose composes 0 parts"* | **"our reading does not yet answer the sentences a paragraph has"** |
| *"only writing the author typed in becomes a part"* | **"we have not built the division; the parts are there either way"** |

***The habit this names is the one running through the whole session:*** **reading the implementation's output as a fact about the domain.** *Every time it happened, the domain was right and the code was unfinished — and each time it was reported the other way round.* **The test before reporting: does this sentence describe writing, or does it describe my code? If it describes my code, say so.**

## <a id="theorems"></a>The theorems — OURS, not his, and each is falsifiable

***T0 — THE DEFINITION OUTRANKS THE MEASUREMENT.*** A paragraph is composed of sentences whether or not any reading answers them. **A measurement that contradicts the definition has found a defect in the code, never in the domain.**

***T1 — A KIND IS WHAT YOU CARRY, NOT WHAT YOU INHERIT.*** Writing is a Section because a `$TypeOfSection` is in its block. A class is a convenience for putting it there; it is never itself the evidence. **Falsified if any ask reads a class where it should read the block.**

***T2 — A CLASS FOLDS ITS TYPE IN; IT NEVER OVERRIDES THE READING.*** The bond writes the type into the block, so a carried type and a folded one are indistinguishable afterwards. **This is what makes the two routes interchangeable, and overriding `type()` is what breaks it.** *Three separate attempts to declare a kind by overriding were tried and each one broke the other route.*

***T3 — INHERITANCE IS SHALLOW AND CLOSED; COMPOSITION OF KINDS IS OPEN.*** Deepening the type tree is how the framework becomes hard to extend, which is [P2](#the-four-purposes) exactly. **A new kind is a new annotation, never a new level.**

***T4 — EVERY ASK GOES THROUGH THE INTERFACE.*** An implementation that satisfies `$Writing$` honestly must be answerable by every framework member. **Currently FALSE and known:** `searchFor` filters on `instanceof $Writing`, so a foreign implementation is invisible to every search. *This is [P1](#the-four-purposes) unmet.*

***T5 — THE TYPE IS CAUSAL THROUGH `specifically`, AND NOWHERE ELSE.*** A type may check and may augment; `specifically` is the only place a type acts on the writing that carries it. **Anything a type wants to do belongs there or nowhere.**

***T6 — THE CHECK IS A BUILD, NOT A DRAWING.*** `specify()` descends the whole library once, at build. **So its cost is a build cost and may be paid**, and a failure is a compiler error rather than a runtime one — *which means a failure must say WHERE, not only what.*

***T7 — THE SUMMIT CLOSES BY SELF-REFERENCE, EVERYWHERE.*** A book is the writing with nowhere left to belong but itself; a type's type is reached by asking twice and landing on the same one. **The regress always terminates by identity and never by a special case.** *Doug: "if you need a type of type just do type type."*

## <a id="warts"></a>What was measured and is not yet true

*Audited 2026-09-05, file by file across the six `2` folders. Each line is a measurement, not a reading.*

- ***FIXED 2026-09-05 — the specifications were dead.*** `LetterSpecification` through `PathSpecification` were declared with **zero uses**; every type inherited `WritingSpecification` from `$Annotation`. Each type now carries its own.
- ***FIXED 2026-09-05 — nothing folded a type in.*** A `$Section` built from its own class answered **`null`** for its kind. Each kind's bond now folds its type into its own block, so **both routes agree**: built from the class or carrying `<TypeOfSection/>`, the answer is Section. *[T2](#theorems) built; it cost the one member below.*
- ***FIXED 2026-09-05 — `specify()` never descended.*** A chapter wrongly inside a paragraph failed at the top and **accepted one level down**; measured again after, it fails. *[T6](#theorems) met.*
- ***`type()`'s signature lies*** — declared `$Type`, answers `undefined` whenever nothing is written in, which is exactly what `$saysItsKind` exists to catch.
- ***`specify()` does not dedupe*** — two types on one writing run the base rules twice; v1 skips a repeated constructor.
- ***`$Theme` has no type and no specification***, and `$Anchor` has no interface — the only two files that break the four-part shape.
- ***`searchFor` carries a cast*** — `part instanceof (type as never)` — because its argument is asked both as a writing class and as a type class.
- ***ONE MEMBER WAS ADDED and it is Doug's to strike:*** `fold(type)` on `$Writing`, from his own phrase *"types to fold in"*. **The alternative is the same three lines written into eight bonds**, which is why it was proposed rather than avoided.

## <a id="the-mistake"></a>The mistake this chapter exists to stop

***Three times in one session the same error was made, and it is worth naming because it is the natural one.*** **A kind was declared by OVERRIDING `type()`** — first as an identity test, then as an invented `declared()` member, then as three plain overrides. *Each attempt worked for the framework's own classes and broke the other route: either a consumer's kind became invisible, or a carried type could no longer win.*

***The tell is general:*** **reaching for inheritance to express something the design expresses by carrying.** *Doug named it in one line — "Are you calling loose coupling a wart?" — and the answer was yes, and that was the error.*
