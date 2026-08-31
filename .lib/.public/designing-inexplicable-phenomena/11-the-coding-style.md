# The Coding Style

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

***This exists so that a refactor can find the ruling before it undoes one.*** **Doug, 2026-08-30, pairing a cleanup session with a design session:** *"I want them to be able to refactor your work without reverting. I want you to read and locate and annotate all sprints with the coding style documents they produce."*

**The failure it prevents is specific and this codebase has met it.** *Someone reads a class, sees a member sitting in an odd place or a helper that looks redundant, tidies it — and silently reverses a decision that was argued once and written down somewhere else.* ***A style rule that cannot be found from the code is a style rule that gets refactored away.***

**A real instance, since a claim like that should name one:** *[S22](../the-condition-report/08-the-compiler.md#s22) — **the emitter kept writing the one construct the framework had just purged**, so a cover the compiler completed carried something no cover a person wrote was allowed to. The ruling existed; the code that had to obey it was somewhere else.* ***(An earlier draft cited this week's index collapse instead. [That was retracted](../projection/00-planning.md#canonical-collision) — it was unfinished work being simplified, not a tidy crossing a written rule.)***

**So every sprint chapter now carries a `style:` field pointing here, and this page is the single list.** *One list, edited in one place* — *because [a closed set stated in several places, checkable in none, is the fault this repository already paid for](../the-condition-report/08-the-compiler.md#n34).*

---

## <a id="not-the-others"></a>What this is NOT — three registers, three jobs

***The branch keeps three lists about the code and they answer different questions.*** **Going to the wrong one is how a session ends up re-solving something.**

| | it indexes | you go there to ask |
|---|---|---|
| ***this chapter*** | ***rules*** | **"how is code written here, and who said so?"** |
| [The Condition Report](../the-condition-report/.cover.md) | *faults, by kind* | *"what is known to be wrong, and is this one of them?"* |
| [Solutions](../solutions/.cover.md) | *defects, by symptom* | *"have we been bitten by this exact thing before?"* |

***A cleanup session starts at [the condition report's actionable list](../the-condition-report/06-the-cleaning.md#actionable)*** — **it carries every ruling Doug has given on the code as a problem to solve** — *and comes here to check that a tidy does not cross a rule.*

---

## <a id="the-documents"></a>The style documents in force

*Each line says what the document RULES, so a reader can tell whether it applies without opening it. The **dated to** column is the day the ruling was given, quoted inside the document itself — **not** a claim about which sprint authored it, which the covers do not record.*

### <a id="the-trilogy"></a>The four — how code in this repository is written

***Four chapters that name each other, and they answer four different questions about one class.*** **The fourth arrived last and is the law the other three are expressions of**, *which is why it is read last rather than first — the conventions were known long before the rule under them was said out loud.*

| | it rules | dated to |
|---|---|---|
| **[The Unit of Code](07-the-unit-of-code.md)** | ***what ONE PIECE of code is*** — and that it differs per program, decided by one rule: **the unit is whatever that program states its invariants over.** *`lib`'s unit is a **WORD**, and a word takes three classes — the data, the law, the meaning; the compiler's is a phase.* | *out of [C2](../the-condition-report/07-the-three-codebases.md#c2)* · **word ruling 2026-08-30** |
| **[The Order of a Class](08-the-order-of-a-class.md)** | ***how the INSIDE of one is arranged*** — Doug's own member order, quoted rather than paraphrased: **fields, then properties, bond constructor, constructor, methods, protected, private** — *with fields running private · public · protected, the opposite way from methods.* Plus **the property test: argumentless AND returns data**, so `canonical()` qualifies and `specify()` does not. And: **an exception message may never enumerate a roster.** | ***2026-08-27, amended 2026-08-30*** |
| **[The Type and the Instance](10-the-type-and-the-instance.md)** | ***WHERE A MEMBER GOES*** — the type holds the meaning, the instance holds the data, and [base-class scarcity dissolves](10-the-type-and-the-instance.md#the-problem) because a thing can carry a type it does not derive from. | *out of [The Bind](../projection/29-the-bind.md)* |
| **[The Closeness Rule](12-the-closeness-rule.md)** | ***WHAT IS WRITTEN INSIDE a class, and the law all three above are instances of*** — **proximity encodes relatedness, size encodes relevance inverted.** *Its four instruments are ordering, stacking, brevity through line count, and **paragraphs in code**.* **And it settles what "artfulness" means: art is what you do where the convention is SILENT, never a licence to bend one — ruled the same day, *"the order always wins."*** *Carries the compactness rules — bracketless one-line bodies, a guard on one line, a housekeeping `for` on one line.* | ***2026-08-30*** |

***Read in that order if you are new: what a unit is, how one is ordered, where a member goes, and then the law underneath all three.***

### <a id="where-a-class-lives"></a>Where a class lives

| | it rules | dated to |
|---|---|---|
| ***the specification goes in the type file*** | **Doug, given as a ruling with the class pasted: *"Specification goes in the type file… Put that in `Type.tsx`."*** *So `$TypedSpecification` is declared beside `$Type` rather than in a file of its own.* **It is [The Type and the Instance](10-the-type-and-the-instance.md) one step on** — *the type holds the meaning, and the rules that give it that meaning belong beside it.* | ***2026-08-30*** · *produced in [Sprint 30](../projection/30-the-reference.md#d6), executed as [U8](../projection/30-the-reference.md#u8)* |

***The law has now arrived and this row is one of its instances.*** **[The Closeness Rule](12-the-closeness-rule.md#where-art-lives) names *above the class* — which classes share a file — as one of the two places art operates**, *and [The Unit of Code](07-the-unit-of-code.md#a-word-is-not-a-class) carries the ruling in full: the file is the WORD, and a word's three faces belong together.* **The row stays here as the index entry; the reasoning lives in those two.**

### <a id="the-chemistry"></a>The framework's own authoring guide

**[`chemistry/.lib/authorship/`](../../../chemistry/.lib/authorship/.cover.md) governs how `$Chemistry` itself is written**, *and `lib` is written against it — so a refactor in `lib` can still break a rule that lives here.*

| | it rules |
|---|---|
| **[The Grammar](../../../chemistry/.lib/authorship/01-the-grammar.md)** | *the shape of a chemical* |
| **[Structural Patterns](../../../chemistry/.lib/authorship/02-structural-patterns.md)** | *composition, the binding constructor, and **specification — types expressing what must exist after a bond*** |
| **[The Export Pattern](../../../chemistry/.lib/authorship/03-the-export-pattern.md)** | *how a class reaches a caller* |
| **[The Reactivity Contract](../../../chemistry/.lib/authorship/04-the-reactivity-contract.md)** | ***what a view may and may not do*** — *object purity lives here, and it is the rule most likely to be broken by an innocent-looking change* |
| **[Composing with React](../../../chemistry/.lib/authorship/05-composing-with-react.md)** | *the boundary with React* |
| **[Glossary](../../../chemistry/.lib/authorship/06-glossary.md)** | *the words* |

### <a id="the-migration"></a>The migration record — not a rule, but read it before deleting anything

**[What Carries Over](09-what-carries-over.md)** *(**2026-08-28**)* — ***v1 against v2, measured on the day: 51 files and 3,498 lines against 19 and 830.*** **It is the document that says which v1 ideas were kept deliberately and which were dropped deliberately**, *which is exactly the distinction a cleanup cannot make from the code alone.*

---

## <a id="the-annotation"></a>The annotation, and how a new document enters

***Every sprint chapter carries one field, and it points here rather than listing the documents.***

```
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)
```

**Where a sprint PRODUCED a style document, its field names it** — *so the sprint record says what rule came out of it, and this page says what rules exist.* ***The pointer is one hop and the list has one home; adding a document means editing this chapter, not thirty-one others.***

**A new style document enters by three steps:**

1. ***It is written where its subject lives*** — *a rule about writing `lib` goes in this book; a rule about writing `$Chemistry` goes in [authorship](../../../chemistry/.lib/authorship/.cover.md).*
2. ***A row is added above***, saying what it rules in one line and the date the ruling was given.
3. ***The producing sprint's `style:` field names it***, so the rule and the argument that produced it are one hop apart in both directions.

---

## <a id="open"></a>What has no document yet

***Named so the gaps are visible, and none of them is proposed here.***

- ***Naming.*** **[The rule that names are Doug's](../../../../.claude/library/..teamsmanship/05-territory.md) is a team protocol, not a code style**, *and there is no chapter saying how a name in `lib` is chosen or retired.* **[Sprint 29 carries a `Names owed` section](../projection/29-the-bind.md#handoff-names) that has already outlived one of its own entries.**
- ***Testing.*** *[The unit-of-code rule reaches the suite](../projection/28-the-block.md) — per-level test files, because an invariant is stated over a level — **but that is recorded inside a sprint rather than as a rule.***
- ***Comments — CLOSED 2026-08-30.*** **The instruction is now stated twice in the branch and both times in Doug's own words:** *[O8](../the-condition-report/02-organization.md#o8) rules it and links the file; [The Order of a Class](08-the-order-of-a-class.md) carries the restatement — "no code comments; that data is moved to the library branch and the library branch references the code files" — and [The Closeness Rule](12-the-closeness-rule.md#what-it-forbids) lists it among what the law forbids.* ***The direction of the link is the part that matters and is easy to get backwards: the BOOK links to the FILE, never the reverse.***
- ***The word `canonical`.*** **It carries two meanings in one codebase** — *v2's boolean "is this an ordinary member of its kind", and [the derivation's representative that stands for the whole](../the-semantics-of-books/06-the-canonical-echo-and-views.md)* — **and [the second exists under no name](../projection/00-planning.md#canonical-collision).** ***That is a ruling Doug owes, and it must not be settled by a refactor.***
