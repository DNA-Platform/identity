# The Closeness Rule

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)

---

*(Where [The Order of a Class](08-the-order-of-a-class.md) orders the MEMBERS of a class, this is about what is written INSIDE one — and about the law that the ordering is itself an expression of. **It exists because Doug named the law directly on 2026-08-30**, having previously only ever given the conventions it produces. Every rule below is quoted from him; the readings are marked as readings.)*

## <a id="the-law"></a>The law

> ***"The rule is that things are closer when more related and smaller when less relevant. Smaller is one line / stacked / in same method vs different ones."***

***Two dials, and they are independent.***

| | encodes | and it runs |
|---|---|---|
| ***PROXIMITY*** | **how related two things are** | *same line · stacked with no gap · one blank line apart · different methods · different classes · different files* |
| ***SIZE*** | **how relevant a thing is** — ***inverted*** | *one line · several lines · its own method · its own class* |

**So the layout of a file is a drawing of the semantic graph, and the reader reads the drawing whether or not it was drawn on purpose.** ***A blank line the author did not mean is a distance the reader will try to account for.***

## <a id="where-art-lives"></a>Art is what you do where the convention is SILENT

> ***"Artfulness is when the convention doesn't work, you follow the closeness rule which is usually enforced with ordering, stacking, and brevity through line count, doing something like paragraphs in code if methods have different phases."***

***This is the sentence that fixes the shape of the whole thing, and it is the opposite of what a first reading assumes.*** **Art is not licence to bend a convention for a better-looking result.** *The conventions ARE the closeness rule, already applied to the cases that recur* — **and where one speaks, it decides.**

***Ruled directly, the same day, when the two were put in conflict:***

> ***Q: when the ORDER and the ASSOCIATION disagree — which wins?***
> ***A: the order always wins.*** *"The fixed order is the scale bar and must never bend, or a reader can no longer trust position to mean anything."*

**So a member is never moved out of its group to sit beside a relative.** *If the urge to move it is strong, that is [diagnostic rather than decorative](10-the-type-and-the-instance.md#the-test) — the member is probably on the wrong object.*

***Art operates in exactly two places the order says nothing about:*** **INSIDE a group** — what stacks with what, where the blank lines fall, how many lines a thing takes — **and ABOVE the class** — which classes share a file, which files share a folder. *[The file is the word](07-the-unit-of-code.md#a-word-is-not-a-class) is a ruling of the second kind; the flattened operator block below is one of the first.*

## <a id="instruments"></a>The four instruments

***Doug named them: "ordering, stacking, and brevity through line count, doing something like paragraphs in code."*** **Each is one of the two dials, applied.**

### <a id="ordering"></a>1 · Ordering

**Position is meaning, which is why the order never bends.** *The whole of it is [The Order of a Class](08-the-order-of-a-class.md).*

### <a id="stacking"></a>2 · Stacking

**Members that are one idea are drawn as one block — no blank lines between them — even when the default would separate them.** *The default separates methods; a run that is one idea overrides the default.*

> ***Doug's own exception, and the general law is what it is an instance of:*** *"Do you see how I flatten one line things? Don't usually do that with method but for this stack of boilerplate methods I did."*

**[`$Sentence`](../../package/src/writing/Sentence.tsx) is the canonical drawing:**

```
    where(match: (part: $Word) => boolean): $Word[] { return this.parts().filter(match); }
    select<U>(pick: (part: $Word) => U): U[] { return this.parts().map(pick); }
    selectMany<U>(pick: (part: $Word) => U[]): U[] { return this.parts().flatMap(pick); }
    single(match: (part: $Word) => boolean): $Word {
        ...
    }
```

***Three flat, one tall, no gaps.*** **The block says *these four are one idea*; `single`'s height says *this one does something the others do not*.** *Both facts are true and both are drawn.*

### <a id="brevity"></a>3 · Brevity through line count — ***compactness***

> ***"Look at the code for compactness. In general one line ifs and fors should be without brackets. If they are more like asserts at the top, the whole if can be one line. If the code itself does some cleanup thing (loops through and removes something technical) the for can be one line as a filter call might have been."***

| | the rule | so |
|---|---|---|
| **1** | ***a one-line `if` or `for` body drops its brackets*** | *two lines, not four* |
| **2** | ***a guard at the top of a method is written entirely on one line*** | **an assert is not a branch and should not be drawn as one** |
| **3** | ***a `for` doing technical housekeeping goes ON ONE LINE*** — *"as a filter call might have been"* | **plumbing is drawn small because it is not the point** |

> ***RULE 3 IS A SIZE RULE AND NOT A LICENCE TO RESTRUCTURE.*** **Corrected 2026-08-30, the same day it was written, because its first draft authorised a rewrite Doug had not asked for.**
>
> *An earlier version of this chapter read the clause "as a filter call might have been" as an invitation to REPLACE a loop with a filter.* ***It is not.*** **Doug's sentence says the `for` goes on ONE LINE** — *the shape stays a `for`, and what changes is how much room it takes.* **The comparison to a filter says how SMALL it should be, not what it should become.**
>
> ***Doug, when a fourteen-line loop had been rewritten into three chained calls under this rule:*** **"Okay well really really minimize rewriting. I don't think I even approved of that. This was about formatting…"** *— against his own framing of the work: **"don't break anything just organize"** and **"this is organization."***
>
> ***The distinction to carry, because a correct rewrite is still a rewrite:*** **an analysis that proves a change is SAFE does not make it ASKED FOR.** *[The three-property test below](#is-it-a-filter) is sound and stays; what it may never do again is authorise the change by itself.*

***Rule 1 is already the package's habit*** — [`$Letter.build`](../../package/src/writing/Letter.tsx) and [`$Writing.found`](../../package/src/writing/Writing.tsx) both write bracketless one-line bodies. **Rules 2 and 3 are not yet applied anywhere.**

***Rule 2, unapplied, eight times.*** **The guard inside `single` is a four-line branch in every one of the seven levels and again in [`$Book`](../../package/src/book/Book.tsx):**

```
        if (found.length !== 1)
            throw new Error(`single expected exactly one part and found ${found.length}.`);
```

*It is an assert at the top of a method — rule 2 says one line.* **Eight copies × two lines saved is not the reason; the reason is that a guard drawn as a branch tells the reader to expect two paths through the method, and there are not two.**

### <a id="is-it-a-filter"></a>And when a loop IS filter-shaped — ***the test, which is now a warning label***

***[`Parser.tokens`](../../package/src/utilities/Parser.tsx) was the worked example and it is now the cautionary one.*** **Fourteen lines of loop with two `continue`s, doing what a filter and a map would have done** — *Doug's own words almost exactly: "loops through and removes something technical."* **It was rewritten into three chained calls, and [the rewrite was refused](#brevity).**

***The analysis still stands and is worth keeping, because a suite written against an OUTCOME cannot catch a MECHANISM change.*** **A loop is genuinely filter-shaped only if all three hold:**

| | |
|---|---|
| **1** | *it carries no state across iterations but its accumulator* |
| **2** | *it mutates nothing that it reads* |
| **3** | *it has no `break` and no early `return`* — **its `continue`s are pure skips** |

***A `for` failing any of the three is not filter-shaped however much it looks it***, and green will not tell you, because the tests were written against what came out rather than how.

> ***But the test answers "would this be the same code?" and NOT "should I write it?"*** **Those are two questions and only the second one is anybody's to answer here.** *Run the three properties before a rewrite; never let them stand in for the decision to make one.*

### <a id="paragraphs"></a>4 · Paragraphs in code — ***and this one amends a standing rule***

> ***"doing something like paragraphs in code if methods have different phases"***

**A method with distinct phases may separate them with a blank line, exactly as prose separates paragraphs.** *The phases are one thought; the blank line says where the thought turns.*

***This amends [The Grammar](../../../chemistry/.lib/authorship/01-the-grammar.md), which says flatly:*** **"No blank lines inside methods. A method is one thought. If it needs blank lines, it is doing too many things."** *That was written before the phase case was named, and it is the narrower rule.*

> ***The amendment, and it belongs to the Grammar's author to make:*** **a method is one thought, and a thought may be written in more than one paragraph.** *What the Grammar was guarding against — a method doing several unrelated jobs — is still forbidden, and is now told apart from a method doing one job in stages.*

***And the rule is not "use paragraphs" — it is what to reach for FIRST, which Doug gave when the amendment was put to him:***

> ***"The relationship here is to try and conceive of methods WITHOUT phases. But also try to MINIMIZE THE NUMBER OF SEMANTIC CONCEPTS in a piece of code, which involves methods. We need method refactoring sometimes, but sometimes it's a one to one thing and there's no polymorphic reason to split — and so you might use paragraphs before deciding to create private helper methods."***

| | reach for | when |
|---|---|---|
| **1** | ***a method with no phases at all*** | **always try this first** |
| **2** | ***paragraphs*** | *the job genuinely has stages and splitting it would invent a concept* |
| **3** | ***a private helper method*** | ***only when there is a POLYMORPHIC REASON to split*** — a subclass would override it |

***A private helper is a new semantic concept, and it costs more than a blank line.*** **It adds a name to the class's vocabulary that means nothing outside the class**, *and every reader who meets it has to work out whether it is part of what the class promises.* **A paragraph costs nothing and says the same thing about where the thought turns.**

> ***So extraction is earned by polymorphism, not by tidiness.*** *"One to one" work — a stage with exactly one caller and no subclass that would replace it — **stays inside its method and takes a blank line.***

***The example:*** *[`$Letter.build`](../../package/src/writing/Letter.tsx) decides a kind and then decides a case — one job in two stages, one caller, nothing that would override either half.* **Under the old reading it invited two private methods. Under this one it takes a blank line and nothing else.**

## <a id="what-it-forbids"></a>What the law forbids

***It is a law rather than a description because it rules things out.***

| ruled out | why |
|---|---|
| ***A blank line for "readability"*** | **a blank line is a unit of distance.** *Spending one without meaning it makes every other one weaker* |
| ***A double blank line*** | ***there is no second rung.*** *One blank line is the group boundary; two is a distance with nothing on the other side of it* |
| ***Moving a member out of its group to sit beside a relative*** | **the order is the scale bar** — *ruled 2026-08-30, and [the urge is diagnostic](10-the-type-and-the-instance.md#the-test)* |
| ***A guard drawn as a branch*** | *it promises the reader a second path through the method* |
| ***A comment*** | **[ruled at O8](../the-condition-report/02-organization.md#o8) and restated 2026-08-30** — *"no code comments; that data is moved to the library branch and the library branch references the code files"* |

## <a id="names"></a>Names

***No name in this chapter was invented by its author.*** **"The closeness rule", "artfulness", "compactness" and "paragraphs in code" are all Doug's own words**, and the chapter's title is his phrase for the law.

> ***FLAGGED FOR DOUG:*** *the title is a proxy taken from his sentence rather than a name he gave. **If the chapter should be called something else, it is his to say.***

---

*Written 2026-08-30, out of the coding-style pass that followed [The Reference](../projection/30-the-reference.md). Indexed at [The Coding Style](11-the-coding-style.md).*
