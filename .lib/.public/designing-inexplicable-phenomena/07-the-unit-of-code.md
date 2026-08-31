# The Unit of Code

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

*Three programs ship from this repository and each answers "what is one piece of code" differently. [The measurement is in the condition report](../the-condition-report/07-the-three-codebases.md#c2); the fault registered there was never that the three disagree — **it is that nothing said so**, so a reader arriving in one of them had to infer the convention from file sizes. This page says it.*

## The three answers

| | the unit | average file | classes |
|---|---|---|---|
| **[`lib`](../../package/src/)** | ***a WORD*** | **58 lines** | *v1: **51 files, 51 classes**, one each · v2: **three classes to a word*** |
| **[`$Chemistry`](../../../chemistry/package/src/)** | ***a concern*** | **215 lines** | **10 classes in one 1,400-line file** |
| **[the compiler](../../build/)** | ***a phase*** | **107 lines** | ***17 files, 1 class*** |

**All three are defensible and none is a compromise.** *What follows is why each is right for the program it is in* — **and then the one rule that decides all three**, which is the part worth remembering.

## <a id="the-rule"></a>The rule that decides all three

***THE UNIT OF CODE IS WHATEVER THAT PROGRAM STATES ITS INVARIANTS OVER.***

**Everything below is that sentence applied three times.** *A program's file boundaries should fall where its promises fall,* **because a promise that spans two files is a promise neither file can keep** — *and the way that failure arrives is always the same: a cycle, a stale copy, or a rule with two homes that disagree.*

## <a id="lib"></a>`lib` — the unit is a WORD, because that is what an invariant is stated over

**`lib` is a formalism made executable.** *Every word of book semantics is a class* — **a title, a chapter, a synopsis, a canonical, a letter** — *and every invariant it states is stated about one of those words:*

> *a title has words · a chapter is a reference to a book · a letter is one grapheme · an author names a book that authors itself*

***So the file is the word.*** **51 files, 51 classes, and a reader looking for what a synopsis promises opens `Synopsis.tsx` and finds all of it.** *The convention has a test attached: **if a file cannot be named with a word from the vocabulary, it does not belong in `lib`.***

### <a id="a-word-is-not-a-class"></a>A word is not a class — ***ruled 2026-08-30***

***In v1 the word and the class coincided, and this chapter's first draft named the class because the two were never apart.*** **They came apart in v2.** *A word now takes THREE classes — the data, the law, and the meaning* — and [`Letter.tsx`](../../package/src/writing/Letter.tsx) is all three:

| | | |
|---|---|---|
| **`$Letter`** | ***the data*** | *what one letter holds* |
| **`$LetterSpecification`** | ***the law*** | *what makes a letter a letter, as labelled rules* |
| **`$TypeOfLetter`** | ***the meaning*** | *the type, filed under the name `Letter`* |

***Doug ruled the file stays whole:*** **the file is the WORD, and the three faces of a word belong together.** *He did it again the same day by hand, folding `TypedSpecification.ts` into [`Type.tsx`](../../package/src/writing/Writing.tsx) so that the word `type` also holds its own three.*

**And the rule at the top of this chapter is why, unchanged:** ***the unit is whatever the program states its invariants over.*** *`lib`'s invariants are stated about a letter, a word, a sentence — not about a specification and not about a type.* **Splitting the three would put a word's own invariant across an import boundary, which is exactly the failure this chapter records happening three times.** *The 51-classes measurement was a v1 count of a v1 coincidence; the WORD is what it was always measuring.*

***And the boundary bites exactly where the rule predicts.*** **Three import cycles were hit in one sprint** — [`Title` → `Cover`](../../package/src/writing/Title.tsx), `Section` → `Document`, `Annotation` → `Book` — *and every one of them was a class reaching for another class to ask a question about ITSELF.* **Each was resolved by asking a nearer neighbour or comparing structurally rather than by naming the far class**, *and each is [recorded in the file rather than routed around](../the-condition-report/02-organization.md#o8), because a cycle is the design saying the invariant was put in the wrong place.*

## <a id="chemistry"></a>`$Chemistry` — the unit is a concern, because an invariant is stated BETWEEN classes

**A reactive substrate's promises are not about any one of its classes.** *A scope, a molecule, a synthesis and a reaction are one mechanism seen from four sides,* **and what has to hold is the relation between them**: *that a read inside a view registers against the scope that is asking, that a write marks exactly the views that read it, that configuration cannot happen while a drawing is being made.*

***None of those can be stated in a file about one class.*** **So they live together**, *and [`chemical.ts`](../../../chemistry/package/src/abstraction/chemical.ts) holding ten classes is the mechanism holding itself together rather than a file nobody split.*

**The cost is real and is accepted:** *a 1,400-line file is not read in one sitting, and finding a member means searching rather than opening.* ***The benefit is that the substrate has no import cycles at all***, **because the classes that would form one are in the same file** — *which is the same fact as `lib`'s three cycles, seen from the other side.*

## <a id="compiler"></a>The compiler — the unit is a phase, because an invariant is stated over a SEAM

**A compile is a pipeline and its promises are about what each stage takes and returns.** *[`library.ts`](../../build/library.ts) is the whole of the shared vocabulary — a type, not a file on disk, with prose on every field —* **and every stage is a function from it to it:**

> *the walk fills the entries · refer fills their references · resolve fills the books · emitting writes the program · check makes it a verdict*

***So a phase is a file and there are almost no classes at all.*** **A stage can be built and tested alone**, *and two people can build two stages at once,* **because neither one can see anything the seam does not carry.** *That is why [the seam is documented more heavily than any code in the repository](../../build/library.ts): it is the only thing the phases share, so it is the only place their agreement can live.*

***The one place the rule was broken is registered as [O14](../the-condition-report/08-the-compiler.md#o14).*** **`CHECK` is a phase of the compile filed as a command**, *because it needs its own process* — **and a fact about process got confused with a claim about role.**

## <a id="what-this-forbids"></a>What the rule forbids

***It is a rule rather than a description because it rules things out.***

| ruled out | where it would have happened |
|---|---|
| ***Splitting `$Chemistry` into one class per file*** | **the invariants are between the classes**, and each split puts a mutual invariant across an import boundary — *which is exactly the failure `lib` hit three times* |
| ***Gathering `lib` into concern-sized files*** | **the invariants are about single words**, and a reader looking for what a synopsis promises would have to know which concern it was filed under |
| ***Giving the compiler classes*** | **nothing in it has identity that outlives a stage** — *a `Library` is data, and a phase that held state would be a phase another phase could no longer be built without* |
| ***A rule with two homes*** | *the recurring shape of every fault in [the compiler's reading](../the-condition-report/08-the-compiler.md)* — **one closed set stated three times, one function copied three times, six levels declared twice.** ***Say it where its invariant is stated, once*** |

***The three programs disagree because they promise different kinds of thing.*** **That is now written down, which was the whole of what was owed.**
