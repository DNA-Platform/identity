# public-audit-code-patterns

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

**Read the code against the conventions this branch already wrote down, and say where it does not cohere.** Not a linter and not a taste report — the style documents are specific, dated and argued, and this skill checks the code against *them*.

> ***Doug, 2026-09-08, and the three sentences are the whole method:***
> **"Complex ceremony is a sign that features need to be added at lower frameworks. Ugly members are a sign that a feature hasn't been implemented right. The thing is right when the code seems to cohere."**


**This audit runs under [the five phases](01-public-audit.md#how-an-audit-runs) and [the fix-eagerly rule](01-public-audit.md#fix-what-has-a-clear-solution)** — *it reads, argues, researches what is already written down, designs the fix, and reports; and a defect with one obvious correct answer is repaired rather than raised as a question.*

## <a id="a-clean-result-is-a-failure"></a>A CLEAN RESULT IS A FAILURE OF THE INSTRUMENT

***Doug, on the first run of this skill, and it is the deeper half of the correction below:*** **"You implemented audit. You got an idempotent response on your own code. And said your audit was good. You don't see that this task is a check on your lack of ability."**

**The same hand wrote the code, wrote this skill, and chose how to run it.** *When that arrangement returns "nothing actionable", the overwhelmingly likely explanation is not that the code is good — it is that **the checker inherited the writer's blind spots** and reproduced its own judgement back to itself.*

> ***SO A NULL RESULT IS NOT A PASS. IT IS THE SIGNAL THAT THE INSTRUMENT IS WRONG*** — and the honest response is to change the instrument and run it again, not to report the code clean.

***And the standard follows from that: this audit only carries weight where it is anchored to something OUTSIDE the person running it.*** **Four such anchors exist and nothing else counts:**

| the anchor | why it is outside |
|---|---|
| ***Doug's three sentences*** | *ceremony, ugly members, coherence — **not the implementer's criteria**, and they can convict code the implementer is proud of* |
| ***a COUNT*** | *327 of 2,962 lines, 41 bond constructors, six identical `heading()` declarations.* **A number does not share an opinion** |
| ***what the framework SAYS against what the code CAN SAY*** | **[Shells Over Types](../the-type-system/03-shells-over-types.md) says the TYPE confers the powers; an `implements` clause cannot be satisfied by a type conferring anything.** *That gap is objective and neither side of it is a matter of taste* |
| ***the running page*** | *the [performance](02-public-audit-performance.md) and [parse](03-public-audit-parse.md) audits, which can contradict a reading outright* |

**A finding resting on none of those four is the implementer agreeing with the implementer**, *and it should be struck whether it sounds right or not.*
## <a id="the-defence-is-the-finding"></a>THE DEFENCE IS THE FINDING — read this before arguing with anything

***This audit was run once with the wrong instrument and the mistake is worth more than the run was.*** **It was argued the way a bug is argued — adversarially, each finding given to a reader told to refute it.** *Fourteen of eighteen were refuted and every proposal was rejected, and the report said the audit had worked.* **Doug: *"No! That is the audit DEEPLY failing."***

> ***THE REASON, in his words:*** **"We want code that looks like ceremony flagged, and the idea is that you, the implementer, don't know how to add features more broadly, so if things break code conventions, they probably need better framework representation."**

***Adversarial refutation is right for a bug and BACKWARDS for ceremony.*** **A bug has to survive an attempt to kill it. Ceremony always survives, because ceremony always has a local reason — and that reason is the answer, not the rebuttal.** *"It cannot be shorter because X" names X. X is the missing feature.*

**These are the defences that came back, and every one of them is a finding wearing a refutation's clothes:**

| the defence | what it actually says |
|---|---|
| ***"TypeScript demands the member"*** | **the type system cannot express what the framework says is true.** *[Shells Over Types](../the-type-system/03-shells-over-types.md) says the TYPE confers the powers; an `implements` clause cannot be satisfied by a type conferring anything, so the member is copied by hand into every kind* |
| ***"the convention requires eight declarations"*** | **a convention mandating eight artefacts per kind is the signal, not the excuse.** *A rule that has to be remembered eight times is a feature that was never built* |
| ***"doing it the other way would be slower"*** | **the cost is real and it is a fact about the framework, not about the code.** *Name the cost, then ask what would make the honest shape affordable* |
| ***"a rule that reads the parts runs the parser"*** | **the framework cannot answer a question without paying for it**, so the class works around the question instead of asking it |

***SO THE DISCUSS PHASE ASKS A DIFFERENT QUESTION.*** **Not *is this finding wrong* — that question is for [the parse audit](03-public-audit-parse.md) and [the performance one](02-public-audit-performance.md), where a claim is either true of the running code or it is not.** *Here the question is:*

> ***WHAT WOULD HAVE TO BE TRUE OF THE FRAMEWORK FOR THIS CODE TO BE UNNECESSARY — and is that thing a feature, or is it a fact about the world?***

**Only the second answer closes a finding.** *A defence that names a feature LEAVES IT OPEN and routes it to [chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md).* **And the implementer is not the authority on whether that feature should exist** — *that is Doug's call, and an audit that decides it locally has quietly given itself a job it does not have.*

***What a refutation may still do, and should:*** **correct a count, correct a citation, correct a line number, and say when a document does not say what the finding claimed.** *Every one of those corrections in the first run was worth keeping. What it may not do is take a local justification as a verdict.*

## The three readings

***Each one turns a smell into a QUESTION ABOUT A MISSING FEATURE, which is what makes this different from style policing.*** *A convention violation is a defect in the line. These three are defects in the design, and the line is only where they show.*

| | what to look for | what it means |
|---|---|---|
| ***CEREMONY*** | **the same several lines written in every class** — a preamble a subclass must remember, an idiom repeated across dozens of files | ***a feature is missing one level down.*** *The right fix is a framework feature, not a helper in this package* |
| ***UGLY MEMBERS*** | a member that exists to hold what something else should answer; a `_` cache; a member that fails [the property test](../../../../.claude/library/..teamsmanship/08-coding-policy.md); a member added to make one caller work | ***a feature was implemented in the wrong shape.*** *Ask what it would take for the member not to be needed* |
| ***COHERENCE*** | read the class whole and ask whether it reads as **one idea** | *the positive test, and the only one that catches a design that passes every rule and still says nothing* |

## <a id="the-report-is-per-class"></a>THE REPORT IS A VERDICT ON EVERY CLASS — this is the output, and getting it wrong is how the first run failed

***The first run of this skill produced twenty-nine cross-cutting findings and Doug read the report and said it turned up nothing.*** **It had not named a single class as a mess.** *A finding filed as "a type cannot confer a member, six sites" is true and is not usable: nobody owns it, nothing gets cleaned, and there is no next action.*

> ***WHAT HE ASKED FOR, in his words, with his own examples:***
>
> **"Phrase is a mess, and needs to be cleaned up as a class, and here's how."**
> **"Table has become a bramble and needs to be cleaned up, but here's why and here's what will have to change on cleanup."**
> **"The chapters in the framework are too coupled to their base and things need to be more loose."**
> **"Writing has too much logic and things are too coupled, needs serious thought and here are ideas."**
>
> ***"Specific classes and members enumerated."***

***So the unit of the report is THE CLASS, and every class in the branch gets a line — including the ones that are fine.*** **A class left out of the report is a class nobody read**, *and the reader cannot tell those two apart unless the report says so.*

| the verdict | what it means | what it owes |
|---|---|---|
| ***CLEAN*** | *it reads as one idea and the members earn their place* | **one line. Nothing more** |
| ***COUPLED*** | **it knows too much about its base, its siblings, or a class it should only carry** | *name every member that does the knowing, and say what loosening it would take* |
| ***BRAMBLE*** | **it grew** — members added one at a time, each for one caller, and no one shape left | *enumerate the members, group them by the job each belongs to, and say which jobs are really separate classes* |
| ***TOO MUCH LOGIC*** | **the class decides things its type or its specification should decide** | *name the decisions, and say where each belongs* |
| ***NEEDS THOUGHT*** | *the shape is wrong and the right one is not obvious* | **say so plainly and give ideas — a verdict may be a question, but it may not be silence** |

***AND EVERY VERDICT THAT IS NOT `CLEAN` OWES THREE THINGS, in this order:***

1. ***WHY*** — **said the way a person would say it out loud**, *not as a rule citation. "Table has become a bramble" is the sentence; the citations come after it.*
2. ***THE MEMBERS, ENUMERATED*** — **by name, with their lines.** *Not "several members"; the list.*
3. ***WHAT WILL HAVE TO CHANGE ON CLEANUP*** — **the consequences, named before anyone starts.** *What else reads this class, which promises pin the current shape, and what would go red. A cleanup whose cost is discovered halfway is a cleanup that gets abandoned halfway.*

> ***A CROSS-CUTTING FINDING IS NOT DELETED, IT IS DEMOTED.*** **"Six classes copy `heading()`" belongs UNDER the six verdicts, once each, as part of why each class is what it is** — *and then once more at the end as the framework gap it implies.* **The gap is real; it is just not the report.**

## The worked example, because both halves were found on one day

***THE CEREMONY:*** **every bond constructor in this library writes the same line.**

```ts
super.$Composition($check(block, $Block).concat($check($TypeOfSection, '!')));
```

*Doug's rule reads it immediately: an idiom in **every** class is a missing feature one level down.* **And the [performance audit](02-public-audit-performance.md) priced it independently — `$check(Type, '!')` allocates a throwaway `$Chemical` and `.concat` allocates a `$Block`, so that line costs `$Eval` 6,281 and `$Block` 3,762 per page load.** ***The ceremony and the bottleneck are the same defect seen from two sides***, and neither reading found the other.

***THE UGLY MEMBER:*** **`$Book` declares `_opening`, `_contents`, `_body` and `_closing`** — four `$Block`s filtered out of `_block` in the bond constructor and read only by `view()`.

> ***Doug's ruling on it, the same day:*** **"We do NOT cache lots of blocks. We don't cache anything in a composition but our parts because we have NO CONTROL of what is below us."** *And on the framework's own version of the same fault:* **"You can't cache chemical. You'd need to design intermediate representation and if you created a caching system using chemicals, you made a serious error."**

**Neither of those is a slow line.** *`$Book`'s four blocks are built once per book and moving them would not move first paint by a millisecond.* ***They are wrong anyway, and that is the point of having this audit separately from the other two.***

## Run it

**There is no tool.** *This audit is a reading, and a script that could run it would only be checking the rules that are mechanical — which the [clean tool](../../package/clean.ts) and `tsc` already do.* **What it needs is the style documents open beside the code**, and the discipline to route each finding to the register that already holds its kind.

## The documents in force — read these, do not re-derive them

**[The Coding Style](../the-coding-style/03-the-coding-style.md) is the index to all of it** and names which document rules what. The ones this audit leans on hardest:

- **[The Unit of Code](../the-coding-style/01-the-unit-of-code.md)** and **[The Order of a Class](../the-coding-style/02-the-order-of-a-class.md)** — what a class is allowed to be, and the order its parts stand in
- **[The Closeness Rule](../the-coding-style/04-the-closeness-rule.md)** — where a thing belongs
- **[Shells Over Types](../the-type-system/03-shells-over-types.md)** and **[The Interface Type System](../the-type-system/04-the-interface-type-system.md)** — how a kind is declared
- **[The Spelling of a Kind](../the-coding-style/05-the-spelling-of-a-kind.md)** and **[The Shape of TSX](../the-coding-style/06-the-shape-of-tsx.md)** — the surface a consumer reads
- **[The two anchors](../the-coding-style/03-the-coding-style.md#the-anchors)** — *this is the public library, and it is closed under books.* **Every word in the code is a word a library actually uses**, and [no invented language](../the-coding-style/03-the-coding-style.md#no-jargon) is a standing law with two dated offences behind it
- **[The coding policy](../../../../.claude/library/..teamsmanship/08-coding-policy.md)** — cite or stop, and the property test

## Where each finding goes

| what you found | where it belongs |
|---|---|
| **a defect with a clear solution** | ***FIX IT, then report it.*** *See [the standing rule](01-public-audit.md#fix-what-has-a-clear-solution)* |
| a **wart** — wrong shape, no clean fix yet | **[The Condition Report](../the-condition-report/.cover.md)**, which indexes the code by kind of fault and is written to be edited in place |
| a **missing framework feature** the ceremony reading exposed | **[chemistry's chapter zero](../../../chemistry/.lib/projection/00-planning.md)**, because the fix is one level down and not in this package |
| a defect whose **cause** you diagnosed | **[Solutions](../solutions/.cover.md)**, indexed by the symptom as it was observed |

***And nothing here is a rename.*** **[Names are proxies and Doug's to rule](../the-coding-style/03-the-coding-style.md#no-jargon)** — *an audit may say a name is wrong and say why; it may not choose the replacement.*
