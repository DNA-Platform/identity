# The Plan — Chapter Zero

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*The planning scratchpad per [the convention](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): overwritten as sprints absorb it — when a sprint becomes real, its section leaves this chapter for its own. **Swept 2026-08-31 on Doug's word — “we only need the most recent plan”** — so what stands here is [the live reference plan](#the-reference-plan), [the discipline every sprint runs under](#standing), and a [register of what was swept](#swept) that keeps every heading a closed sprint chapter still links to.*

## <a id="the-register"></a>Where the code's own faults are recorded — read this before planning any sprint

***The standing register of everything questionable in `lib` and the compiler is [The Condition Report](../the-condition-report/.cover.md)***, opened 2026-08-21 out of Doug's *"we have lost the high level design goals and things have gotten muddy."* **It is not this chapter and it is not [Solutions](../solutions/.cover.md):**

| | indexes | |
|---|---|---|
| **this chapter** | *what is next* | the standing plan |
| [Projection](.cover.md) | *time* | one chapter per sprint |
| [Solutions](../solutions/.cover.md) | *symptom* | a defect, by what was observed |
| ***[The Condition Report](../the-condition-report/.cover.md)*** | ***kind of fault*** | organization · names · semantics · implementation |

***A sprint that touches `lib` or the compiler starts at [its actionable list](../the-condition-report/06-the-cleaning.md#actionable)***, which carries **every ruling Doug has given on the code as a problem to solve**, and at [The Scope](../the-condition-report/01-how-to-read-this.md#the-scope), which says what is being audited and what is not.

## The goal

IXP keeps very, very careful track of **authorship and lineage of knowledge**. Doug's AI conversations get mapped into a showable form; Doug gets a personal library referenced from here; `@dna-platform/lib` stays a consumable package so references work **across repos**. Every IXP project gets documented in $Chemistry, and those classes are copied into the `.public` app by a build script that either produces the whole truth or fails. Who deserves authorship of a human-AI dialogue is not a footnote — it is what the repository explores.

*Sprints 46, 47 and 48 each stood here as a section and each left for its own chapter — [The Book](03-sprint-46--the-book.md), [The Catalogue](05-sprint-47--the-catalogue.md), [Subjects and the Library](06-sprint-48--subjects-and-the-library.md). **What they settled is read in those chapters, not here**, and what they settled was settled against v1, which now stands in [`.archive/`](../../package/.archive/).* ***The one lesson their estimate left is carried rather than re-estimated: the cost is in the design conversation, not the code*** — *every long stretch of 47 was a liberty taken instead of a question asked, which is why [`/ce-brainstorm`](../../../../.claude/skills/ce-brainstorm/SKILL.md) now runs per sprint and [gates on a person](#verify-each).*

---

# <a id="the-reference-plan"></a>THE LIVE PLAN — References, in five sprints *(approved by Doug, 2026-08-30)*

***Everything below this section is older than the v2 rebuild and is kept for its reasoning, not its schedule.*** **This is the plan the next five sprints run against**, *and [Sprint 30](30-the-reference.md) is the first of them.* ***Every sprint chapter in this plan opens by naming which part of it that sprint accomplishes*** — **Doug's instruction, 2026-08-30:** *"refer to the plan in every sprint that builds on it and the sprint says which part of the plan is accomplished."*

## <a id="plan-why"></a>Why references, and why five

**The corpus is already a reference graph and the code is not.** *Measured 2026-08-30 across 976 markdown files: **11,632 links** and **1,427 anchor targets** they aim at — the two-part anatomy, hand-maintained, with no model behind it.* ***So the corpus is the test set***, and [29-the-bind.md](29-the-bind.md) alone offers 432 links and 177 anchors to check against.

**And the reference is not unbuilt — it is built three times in three vocabularies that have never met:** *the compiler models it correctly and computes a URL `route` for every book; v1 has nine classes whose `$Path` does not narrow; the app already routes and draws anchors; and v2 has one empty interface.* ***[Sprint 30](30-the-reference.md) carries the full finding.***

## <a id="plan-decisions"></a>What Doug settled on 2026-08-30, and it reshaped the plan

*Recorded as his, with the change from his earlier brief marked.*

| | |
|---|---|
| **the two properties** | ***`ref` and `means`, UNPREFIXED*** — *"creating the ref (not `$ref`) and [means] as properties on writing is meaningful."* **Unprefixed means computed rather than constructed**, and *"we will fill with annotations in the block"* says where they come from. ***AND `means` IS A VERB, which is the whole reason for the word*** — Doug, correcting the record: *"writing **means** what the reference refers to. That is why it's means. The meaning of the writing is what the reference refers to — this works too but it's longer."* **`writing.means` reads as a sentence**, which is the test [the rest of the surface](../designing-inexplicable-phenomena/08-the-order-of-a-class.md) already passes. *A first draft of this row recorded `meaning` as superseding `$means`; **that was a supersession he never made**, and [the rule is best idea wins, not last](#naming-discipline).* |
| **what a reference IS** | ***a kind of annotation*** — *"a type of annotation with a `$TypeOfReference` to go along with it. A reference will have a `$Path` path, will be serializable."* |
| **the link is a DEFAULT VIEW, not a class** | *"it can be as simple as a piece of writing surrounding itself with an anchor tag that points to its meaning when meaning is assigned."* ***This collapses a whole sprint's worth of surface into one override.*** |
| **`read`** | *"let's call this `read` again. We read a reference to get to what it means."* ***So `read()` follows `means`***, and the two members read as one sentence: **a piece of writing `means` something, and you `read` the reference to get there.** |
| ***THE INDEX IS THE SPINE*** | *"Indexes have a label and then multiple links which affords a breadcrumb trail. So we have a dynamic library index that is always loaded. In fact! The index of every book could be generated from the library index — **`$TypeOfIndex` for book is either a base index or a decorator** and if it finds another one, it displays a subset of the things. And then the decorator can restyle and reorganize."* |
| **the library's index is a CHAPTER** | *"what if we store active references of the index of the library and the index of the library is a chapter that is loaded on every page. A little weird to partially load a book, but as a chapter it will point to its book and table of contents so it's a way of navigating away."* |
| **the bootstrap books** | *"our new type system affords this. We can wrap these in a type, specification and strong type and then users have the tools… they decorate their surrounding type — a cover is a chapter that has one **perhaps**? so DI can replace that one."* |

***The single largest consequence: the trail, the breadcrumb, the table of contents and the subject catalogue are ONE THING — an index — that decorates.*** **That is why sprints four and five are cheaper than they looked**, *and why the index cannot be left to the end.*

## <a id="naming-discipline"></a>How to read Doug's successive words — a standing discipline, not a note about one member

***Doug, 2026-08-30, after this chapter recorded a rename he had not made:***

> **"I should be treated as best idea wins, not last, and if two ideas are synonyms, you can check but look for intentionality."**

**So a later word does NOT supersede an earlier one by arriving later.** *`meaning` appeared where `$means` had stood, and this chapter wrote down "`meaning` supersedes `$means`" — **a ruling manufactured out of a keystroke**, which would then have been built.*

***The test is intentionality, and it has a tell: a deliberate rename arrives with a reason attached; a slip arrives with nothing.*** **`means` had one waiting** — *the verb* — **and the reason is better than the rule that was invented for it:** `writing.means` **reads as a sentence**, where `meaning` would hang off a possessive. *That is the same test [`copy`, `parts()` and `read()`](../designing-inexplicable-phenomena/08-the-order-of-a-class.md) already pass.*

**When his wording shifts and no reason comes with it: carry both, flag it, ask.** *Never write "X supersedes Y" on recency alone.* ***This sits beside [the naming rule](../../../../.claude/library/..teamsmanship/05-territory.md) — names are his, which is exactly why one must not change on our reading of a stray word.***

## <a id="plan-sprints"></a>The five

| # | sprint | what it is | what you would see | needs first |
|---|---|---|---|---|
| ***1*** | ***[Where you are](30-the-reference.md)*** | **`ref` and `means` on writing; the `$Path`; the URL, serialized** | *ask a paragraph deep in a chapter for its address, paste it, land on that paragraph* | ***the representative-canonical, whose NAME is taken*** |
| ***2*** | ***The reference*** | **a reference as an annotation with `$TypeOfReference`; the specification that refuses one without a path; the anchor as a default view** | *prose with live links in it, and a bad reference refused with a reason* | *sprint 1's path* |
| ***3*** | ***Read*** | **`read()` returns what the reference means — the resolution, which is where cataloguing enters** | *`read()` hands back the chapter; a false reference throws rather than answering undefined* | *sprints 1–2* |
| ***4*** | ***The index*** | **`$TypeOfIndex`, base and decorator; the library index as an always-loaded chapter; breadcrumbs; bookmarks and the highlighter; the trail** | *the trail reads back as an index, and a book's own index is generated from the library's* | *sprint 3's resolution* |
| ***5*** | ***The bootstrap books*** | **`$TypeOfLibrary` answering to `'library'`; catalogue, autobiography and user manual as types with specifications; DI by decoration** | *a reader replaces a cover by decorating, without deriving from it* | *sprint 4's index* |

## <a id="semantics-idea"></a>SEMANTICS — an idea, filed rather than built *(2026-08-31)*

***Doug's, and it is a good one:*** *"We could make a Semantics object, which is cool — and it can be a chemical why not and even a piece of writing — and the specification could ask for the semantics that have been assigned and one of the main assignments is specification versus demonstration. And since it's a chemical, the app could switch back and forth."* **He later preferred `application` to `demonstration` as the other half of the pair.**

***It was cut from the sprint, and the reason is his own two sentences:*** **"Check should show the error and throw, both at once, shouldn't it"** *and* **"we will comprehensively specify on build, so there shouldn't be a problem in production ideally."** ***If a check both shows and throws, there is no choice to make at runtime — and therefore no mode to carry.***

**And it was never needed for performance, which was the other reason to want it.** *Measured: specifying is O(children) per node, checked once because the parse is memoized, and [the two real costs were allocation and rediscovery](30-the-reference.md#p2-done) — both fixed by holding the specification on the type.* ***So the expensive-rules-only-in-specification-mode idea has one rule to skip and no need to skip it.***

***What would bring it back:*** **a case where the same writing should be checked differently depending on who is looking** — *a reader's page against an author's proof, say.* **Nothing today needs that.** *Kept here because it is a real design and the next person should find it rather than reinvent it.*

## <a id="test-sprint"></a>A SPRINT FOR THE TESTS — added by Doug, 2026-08-30

> ***"I want you to add in a sprint for test review. It has gotten long and I notice that tests are running in the background now. We will need to improve the performance of tests… compiling tests into one test, so the load is less intense — compressing files because a whole file then becomes one test — these sorts of changes can help… but only for specs where there is one setup and you test a bunch of related things. And then the test name is the generalization and you can use comments above the assert to specify the exact thing tested."***

***It sits OUTSIDE [the five-sprint reference plan](#the-reference-plan)*** — *it is not about references and it does not block them* — **but it does block the reference sprints in practice**, *because a suite that runs in the background is a suite nobody watches go red.*

### <a id="test-measured"></a>What is MEASURED — the profile says his instinct is right

***From a clean run this morning, 50 files / 552 tests, wall 30.3s:***

| phase | worker seconds | what it scales with |
|---|---|---|
| **environment** | ***86.26*** | ***the number of FILES*** |
| **import** | ***88.78*** | ***the number of FILES*** |
| **transform** | ***45.47*** | ***the number of FILES*** |
| *tests* | *62.23* | *the number of tests* |

***78% of the work is not running tests.*** **And every second of that overhead is paid PER FILE** — *[`vitest.config.js`](../../package/vitest.config.ts) sets `environment: 'happy-dom'` for both projects, so a fresh DOM is built fifty times.* ***So "fewer files" is not a style preference here; it is the whole of the cost.***

**The shape it would act on:** *src is **18 files, 175 `it`s, 1,641 lines**; the archive is **32 files, 352 tests**.* **[`written.tsx`](../../package/src/tests/written.tsx) already exists as shared setup**, *so the merge Doug describes has a foundation rather than needing one.*

***And the suite has already crossed a threshold that makes this urgent rather than tidy:*** **it ran in 30.3s this morning and blew a 200-second timeout this evening.** *Part of that is two sessions competing for the machine — **which is exactly the condition Doug is describing**, and it is why the tests moved to the background in the first place.*

### <a id="test-candidates"></a>Candidates, and the line between measured and guessed is kept

***MEASURED and safe:***

1. ***Merge files that share one setup***, **Doug's own proposal** — *one `describe` whose name is the generalization, one setup, comments above each assert naming the exact thing.* **This attacks environment + import + transform directly**, *and those are 220 of the 282 worker-seconds.*

***MEASURED but NOT YET PROVEN — one command each to settle:***

2. ***17 of the 18 src files make no direct DOM call*** — **only [`smiley.test.tsx`](../../package/src/tests/smiley.test.tsx) touches one.** *That does **not** prove they run without `happy-dom`, because chemistry may need a document internally.* ***But it makes it an experiment rather than a guess:*** **set `environment: 'node'` on one file and see whether it passes.** *If it does, the per-file environment cost falls away for most of the suite.*

***CANDIDATES FROM KNOWLEDGE, flagged as unverified because [nobody has read a doc for them yet](#test-candidates):***

3. **`isolate: false`** — *reuses one environment across files in a worker.* ***The largest possible win and the least safe***: chemistry keeps module-level templates and catalogues, so files would share registry state. **Not to be tried without deciding what a template's lifetime is.**
4. **`pool` and `poolOptions`** — *thread versus fork workers have very different spawn costs.*
5. **`deps: { inline: [/chemistry/] }`** — *inlining forces chemistry through the transform for both projects; whether that is necessary has not been checked.*

***Research is owed on 3–5 before any of them is written down as a plan.*** **[That is the point of measuring before proposing](#test-measured): a candidate from memory is not a finding, and the difference is one search.**

### <a id="test-guardrail"></a>The guardrail, because this sprint is the easiest one to get wrong

***A merge that changes what is asserted is not a merge.*** **Doug's constraint is the whole safety of it** — *"only for specs where there is one setup and you test a bunch of related things"* — **and the failure mode is a file where two `it`s look related and quietly depend on different state.**

***So: the count of assertions must not fall.*** **175 `it`s may become 40; the number of `expect`s may not drop by one**, *and the sprint reports both numbers before and after.* ***A suite that got faster by testing less is the one outcome that would be worse than a slow suite.***

## <a id="summary-and-excerpt"></a>THE SUMMARY AND THE EXCERPT — Doug, 2026-08-30, added to sprint two

***Given as a spec rather than a sketch, and captured before the brainstorm because it is the most concrete design he has handed over.*** **Placement is his to confirm** — *he said "add that to the next sprint", and [sprint two](#plan-sprints) is where a reference gains the surface it shows, which is what a summary is for. It also feeds [sprint four](#v4), where an index entry needs something to display.*

**His words, whole:**

> ***"A document should have a parenthetical summary, which is like the synopsis of the book. It can also have an excerpt, which we can choose to be the first N-3 characters with … at the end. And we should build a `$Summary` with the excerpt which has a type of summary if we can't find one. Type of synopsis will be a type of summary. `$Excerpt` should also be a type and could be anywhere. We will enforce that max length on the excerpt, but that should be something that can be changed on the document class, I think. So someone can write a document and put an excerpt anywhere they want and a summary under the title. Without the summary, a truncated version is used for the excerpt. Without that a truncated version from the first paragraph after the title is used with … if it is longer than the summarizationLength on document."***

### <a id="summary-chain"></a>The fallback chain, as the team reads it

***Stated as a reading because the sentence order leaves one step ambiguous.*** **Three rungs, each tried in turn:**

| | when | what is used |
|---|---|---|
| **1** | *an authored `$Summary` is present* | ***it*** |
| **2** | *no summary, but an authored `$Excerpt` somewhere* | **a `$Summary` is BUILT around the excerpt** — *"we should build a `$Summary` with the excerpt which has a type of summary if we can't find one"* |
| **3** | *neither* | ***the first paragraph after the title, truncated*** to `summarizationLength`, **with `…` if it was longer** |

***What is already true and grounds it:*** **v1 had exactly this class** — `$Summary extends $Section` with `parenthetical = true`, and its own comment says *"being parenthetical is what it IS rather than something an author flags on it."* **So "a parenthetical summary" is not a new property; it is the class recovered.** *And v1's comment records `summary` as the framework's incumbent name rather than a coinage:* `$Document.summary`, `$Cover.summary`. ***v2 has none of it — zero occurrences of summary, synopsis or excerpt in `src`.***

### <a id="summary-types"></a>The types

- ***`$TypeOfSummary`*** — **the base.** *A document's summary.*
- ***`$TypeOfSynopsis` → `$TypeOfSummary`*** — **his: "type of synopsis will be a type of summary."** *[Inheritance by validation](../the-semantics-of-books/03-inheritance-and-composition.md): a synopsis is a summary at book scale, which is [the canonical echo](../the-semantics-of-books/06-the-canonical-echo-and-views.md) one grade up.*
- ***`$TypeOfExcerpt`*** — **"should also be a type and could be anywhere."** *Anywhere is the load-bearing word: an excerpt is **not** positional, where a summary sits under the title.*

### <a id="summary-length"></a>`summarizationLength`

**His name, and it lives on the document class so a document kind can change it** — *"we will enforce that max length on the excerpt, but that should be something that can be changed on the document class, I think."*

***Which makes it an overridable instance member, not a constant*** — **and [chemistry's own rule says why that is the only shape](../../../chemistry/.lib/authorship/01-the-grammar.md):** *"we don't use constants to store data because that's bad for polymorphism… we have a template so members can be static and thus polymorphic."*

### <a id="summary-open"></a>What is not settled — flagged, not decided

<a id="s-q1"></a>**Q1 · `N-3` counts the ellipsis into the budget.** *"the first N-3 characters with `…` at the end" means the RESULT is N, not N+3.* **Worth confirming**, *because it is the difference between a limit on the text and a limit on what is drawn.*

<a id="s-q2"></a>**Q2 · Rung 2's truncation source is ambiguous.** *"Without the summary, a truncated version is used for the excerpt" — a truncated version **of what**?* **The reading above takes the authored excerpt as already short and truncates only at rung 3.** *If instead an authored excerpt is itself truncated to `summarizationLength`, the chain has a fourth behaviour.*

<a id="s-q3"></a>**Q3 · "Under the title" — is that a position or a type?** *A summary sitting under the title is positional; but [the parse finds levels rather than reading positions](../the-semantics-of-books/15-the-levels-of-writing.md), and an excerpt is explicitly **anywhere**.* ***So a summary may be found by its type like everything else, and "under the title" may be a convention of authorship rather than a rule of the parse.***

<a id="s-q4"></a>**Q4 · A built summary is a piece of writing nobody wrote.** *Rungs 2 and 3 SYNTHESIZE a `$Summary`.* **That is the first writing in the model produced by the model** — *and [the parse writes nothing](../the-semantics-of-books/15-the-levels-of-writing.md) is a standing rule it sits against.* ***Whether the built summary is a stored part or a reading is the question underneath, and it is the same fork as [who writes a card's auxiliary paths](30-the-reference.md#i4).***

<a id="s-q5"></a>**Q5 · The excerpt's relation to [the back of the page](../designing-inexplicable-phenomena/06-the-back-of-the-page.md).** *That chapter already argues a view may read the model without any member being added.* **If a truncated first paragraph is a READING rather than a part, rung 3 costs no class at all** — *which would be the cheapest answer and is not obviously the one he means.*

## <a id="verify-each"></a>What must be verified and iterated WITH DOUG, sprint by sprint

***Doug, 2026-08-30, stopping a plan that had run ahead of its design:***

> **"Guys, we haven't even designed references yet. Not at all… aren't we still making sprints? We haven't started a sprint yet. We haven't done ce-brainstorm for a particular one."** *…* **"mark what needs to be verified and iterated on with me in each sprint."**

***THE FIVE ABOVE ARE A CARVE, NOT A DESIGN.*** **An ordering of work was mistaken for an agreed model**, *and [sprint one was planned without its own brainstorm](30-the-reference.md#unratified) — skipping the one step in [the workflow](../../../../.claude/library/..teamsmanship/19-workflows.md) whose gate is human.* ***[`/ce-brainstorm`](../../../../.claude/skills/ce-brainstorm/SKILL.md) runs PER SPRINT.*** **None has been run for any of these.**

**So this section is the agenda for five conversations, not a list of answers.** *Each block is what has to be settled **with Doug** before that sprint can be planned at all — and where the team has already guessed, the guess is named as a guess so it can be knocked down cheaply.*

### <a id="v1"></a>Sprint one — Where you are

1. ***Does a part answer its own SEGMENT, or a whole address?*** **The team chose the segment because [there is no public parent accessor and `lib` uses parent access zero times](30-the-reference.md#d1)** — *but "no mechanism today" is a reason to ask whether one should exist, not a licence to design around its absence.*
2. ***What IS a code, and where does it live?*** **Codes are names, so the scheme is Doug's** — *and whether a code belongs on the **level** or on the **reference** was never asked. [The nine levels collide on first letters.](30-the-reference.md#u1-note)*
3. ***Does `ref` mean "my address" or "a reference to me"?*** *They are different things, and a segment is neither on its own.*
4. ***What fills `means`, exactly?*** **Doug: *"we will fill with annotations in the block."*** *Which annotation, and what happens when a piece of writing carries more than one?*

### <a id="v2"></a>Sprint two — The reference

1. ***Is a reference an ANNOTATION or writing at a level?*** **Doug said a kind of annotation — and [an annotation is `parenthetical = true`](../../package/src/writing/Writing.tsx), which changes how the parse treats it.** *Is a reference parenthetical? It appears in the reading, so it may not be.*
2. ***Does the anchor-as-default-view apply to ALL writing that has a `means`, or only to references?*** *Doug's sentence — "a piece of writing surrounding itself with an anchor tag that points to its meaning" — reads as **all writing**, which is a much larger claim than a reference class.*
3. ***What does a reference show when its target cannot be reached?*** **[Sprint 47 ruled a false reference throws](05-sprint-47--the-catalogue.md)** — *but a page that throws while rendering is not a page.*

### <a id="v3"></a>Sprint three — Read

***This sprint has no requirements at all and needs the most conversation of the five.***

1. ***WHAT IS A CATALOGUE IN v2?*** **It has never been designed** — *[the derivation names it](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md#register-status) and v1 built a `$CardCatalogue` of 68 lines that filed by key and keyword.* **This is a brainstorm on its own, not a section of one.**
2. ***Does `read()` return the writing, or the meaning?*** **Doug: *"we read a reference to get to what it means."*** *If `means` is the referent and `read()` reaches it, then `read()` and `means` may be one member wearing two names — [which is exactly the fault the condition report indexes](../the-condition-report/03-names.md).*
3. ***When does a reference point by NAME rather than by position?*** *A path of codes and indexes never needs a catalogue; **a name always does.** So this is the sprint where [the identification half of the anatomy](../the-semantics-of-books/16-the-reference-and-its-locator.md#the-correction) finally arrives — or is decided against.*

### <a id="v4"></a>Sprint four — The index

1. ***Base or decorator — what does "if it finds another one" mean mechanically?*** **Doug's sentence is the spine of the whole sprint** *and the finding is the undesigned part: what does an index look up, and where.*
2. ***Is the trail a STACK or a NARRATIVE?*** *A stack is one shape; [the librarian in the source writes a book](../the-semantics-of-books/16-the-reference-and-its-locator.md#composition-authored). Both are cheap; they are not the same thing.*
3. ***Where does the trail live?*** ***[All three of Doug's `perhaps` land here](30-the-reference.md#the-three)*** — **whether it is a book, whose it is when nobody is signed in, and where it physically sits.** *This is [the one to prototype rather than specify](30-the-reference.md#the-disagreements).*
4. ***What does it mean to PARTIALLY LOAD A BOOK?*** **Doug called it "a little weird" himself** — *the library's index is a chapter loaded on every page, and nothing in the model has an opinion about loading part of a book.*

### <a id="v5"></a>Sprint five — The bootstrap books

1. ***Which types exactly, and what does each one MUST-HAVE?*** *A type is only worth having if its specification refuses something.*
2. ***What is a user manual?*** **It is [the reference desk](../the-semantics-of-books/.cover.md), the one thread the derivation book still has open**, *and it has never been worked out.*
3. ***What does DI-by-decoration look like on a cover?*** **Doug: *"a cover is a chapter that has one perhaps? so DI can replace that one."*** *The `perhaps` is his, and it is doing real work in that sentence.*

***None of the five may go to [`/ce-plan`](../../../../.claude/skills/ce-plan/SKILL.md) until its own brainstorm has run.*** **The order is not negotiable and it is not ours: [brainstorm gates on a person, and everything after it is marked by the implementer](../../../../.claude/skills/ce-review/SKILL.md).**

## <a id="plan-allocation"></a>Where [Sprint 30's eighteen requirements](30-the-reference.md#requirements) land

| sprint | requirements |
|---|---|
| **1 — Where you are** | **R6, R7, R8** *(`means`, `ref`, and their opposite directions)* · **R9, R10, R11, R12** *(the index as locator, and the two registers)* · **R4, R5** *(the URL, stated once)* |
| **2 — The reference** | **R1, R2, R3** *(a reference is writing, carrying a path, rendering as a link)* |
| **3 — Read** | *the resolution — **not yet written as requirements**, because it is the one piece [the derivation book has never worked out](../the-semantics-of-books/16-the-reference-and-its-locator.md#open)* |
| **4 — The index** | **R13, R14, R15, R16** *(active references, the trail, and where it lives)* |
| **5 — The bootstrap books** | **R17, R18** |

***Sprint 3 has no requirements yet and that is deliberate.*** **A catalogue in v2 has never been designed**, *and writing requirements for it now would be [specifying on a guess](../solutions/.cover.md).* **It gets its own brainstorm when sprint 2 closes.**

## <a id="plan-owed"></a>Still owed before any sprint plans

1. ***Is a URL the reference's storage or its rendering?*** *The repair that keeps both rulings: the reference holds its steps, `copy` prints a URL, the router parses one back.*
2. ***Where does a string index come from, given the parse cannot invent one?*** **[R11](30-the-reference.md#r11) — and the corpus's 1,427 hand-written anchors are that decision already made by people.**
3. ***Does "reading activates" mean rendering or navigating?*** *Rendering breaks view purity; navigating is free.*
4. ***Does the reference rest on use and mention?*** **Gone from v2 — 9 files to 0 — so it would have to come back first.**

## <a id="plan-blockers"></a>The blocker that stood before sprint one — ANSWERED, and kept because the reasoning is still load-bearing

<a id="canonical-collision"></a>***THE WORD `canonical` CARRIES THREE MEANINGS IN ONE CODEBASE, and the one `ref` needs was DELETED while this plan was being written.***

*Found by the cleanup session ([`inexplicable-phenomena-8a`](../../../../.claude/library/teamspeak/09-the-substrate.md), 2026-08-30) and verified here against the diff.*

> ***ANSWERED by Doug the same day, and the answer is recorded in [sprint one](30-the-reference.md#d4) rather than here.*** **He was asked whether the trade was deliberate and said it was:** *"Yeah I did that. You had two indexes and it’s too complicated. Set it to zero and assign it as needed. **It will be set on the parts and the parts will be used for references.**"*
>
> ***So the locator is the index on the parts, not the canonical*** — **[R8](30-the-reference.md#r8) is superseded by his own design, no naming ruling was owed, and sprint one built on it.** *The representative returns as a real question in [sprint four](#v4), where a book’s index needs something to show.* **What is kept below is the three-way overload itself**, *because the word still carries three meanings in one codebase and the next reader of `canonical` needs to know which one they are holding.*

| the word | what it means | where |
|---|---|---|
| **`$Writing.canonical`** | *a **boolean** — is this an **ordinary member of its kind**?* | [`$Letter`](../../package/src/writing/Letter.tsx) answers `kind === 'alphabetical'`; [`$Word`](../../package/src/writing/Word.tsx) asks whether the copy reads as a said word. **This is the residue mechanism.** |
| **`$Type.canonicalForm`** | *a **class** — which class this writing canonically is* | [`notation/Type.tsx`](../../package/src/writing/Writing.tsx), used by the bind |
| ***`$Composition$.canonical(): T`*** | ***a PART — the representative that stands for the whole.*** **This one IS [the derivation's canonical](../the-semantics-of-books/06-the-canonical-echo-and-views.md)**, *and it is what `ref` derives from.* | ***DELETED*** |

***A first draft of this section said the representative "does not exist in v2 under any name." That was wrong, and the correction matters:*** **it existed, as `$Composition$.canonical(): T`, and an uncommitted edit traded it away** — *one line out, one line in:*

```diff
 export interface $Composition$<T extends $Writing> {
+    get index(): number;
     parts(): T[];
-    canonical(): T;
```

***So the question for Doug is not "what shall we call it." It is: WAS THAT TRADE DELIBERATE?*** *If the composition's representative was meant to go, `ref` needs a different derivation and [R8](30-the-reference.md#r8) changes. If it was collateral, it comes back and sprint one is unblocked.*

***AND THE ACCOUNT THIS SECTION FIRST GAVE OF THE RED WAS WRONG — retracted here rather than quietly edited.***

**It said [`$Writing`](../../package/src/writing/Writing.tsx) had `$index?: number` plus `get index()`, that collapsing them into one line was [The Order of a Class](../designing-inexplicable-phenomena/08-the-order-of-a-class.md) correctly applied, and that this was *"two correct local moves colliding"* between two sessions.** *The cleanup session checked it against `HEAD` and it does not hold. **Verified here:** `git show HEAD:…/writing/Writing.tsx` has **no index member of any kind**, and `$Composition$` at `HEAD` still declares `canonical(): T` and no `index`.*

***So both index members were NEW in the uncommitted working copy — this sprint's own half-landed work, not a settled state that a tidy disturbed.*** **What actually happened:** *the in-flight edit declared the number twice, once on the class and once on the interface;* **Doug cut one — *"you had two indexes and it's too complicated"*** — *and the interface was left asking for a member the class no longer wrote.* ***15 errors, then green again in two lines: `tsc` 0, 50 files, 552/552.***

***The rule [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) exists for is untouched by this.*** **What is retracted is the claim that this was an INSTANCE of it** — *it was unfinished work being simplified mid-flight, not a tidy crossing a written rule.* ***An index of rules is worth less with a false example in front of it than with none***, **and the correction came from the session that went and looked at `HEAD` while this one was writing from what it remembered reading.**



***MARKDOWN IS NOT IN v2***, *and the reader that has it is 619 lines of app code bound to v1.* **But it is NOT on sprint one's critical path** — *an authored chapter proves the round trip, and [the `.spec/` folder already holds 29 of them](../../package/src/tests/.spec/).* ***Markdown is what makes the corpus the test set, and it belongs with sprint 3 or later.***

---

# <a id="standing"></a>The discipline every sprint runs under

***These are not a plan and they do not expire with one.*** **They stayed when the old schedules were swept, 2026-08-31, because a rule that governs the next sprint is not a note about the last one.**

## Standing rules at every level

Speak within the **semantics of books** — the vocabulary of the domain is the vocabulary of the work. Examples in the app every sprint — the demo shelf is the driven-and-seen proof of the work. The sign-off loop governs each increment; model-first sentences before diffs; spec tests with title-body correspondence; visible-proof Lab cases; green → driven → seen on anything visible. The library is edit-first: chapters absorb, synopses move with them; projection covers stay current through the [TOC tool](../../../../.claude/library/bookkeeping/03-on-covers--toc.ts).

## The standing sprint discipline *(added 2026-08-03, out of 47's cost)*

Recorded because it is the plan's most expensive lesson, not a mood: **raise, don't take.** A blocked name gets one sentence and Doug picks the word once, for the whole abstraction. "I don't know what this means" is an explanation order, never a change order. A structural surprise (unparented elements, an import cycle, a reserved prop) gets bubbled up the moment it's found, never designed around. And functionality nobody asked for — addresses, prefixes, aliases — is not scope. The full form lives in the memory record; the plan carries it because it is what determines how long a sprint takes.

---

# <a id="swept"></a>SWEPT — the plans that stood here, and where each went

***Doug, 2026-08-31: "Cleanup chapter 0. We only need the most recent plan."*** **Everything below was a schedule this chapter had already marked superseded, or a note a sprint had already absorbed** — *which is [the scratchpad's own specification](../../../../.claude/library/library-tree/03-sprints.md#the-planning-scratchpad--chapter-zero): a plan note that outlives its intention is rot, and it is swept.*

***The headings survive and the bodies do not, and that is deliberate.*** **Sixteen of them are linked from closed sprint chapters — 06 through 15 — and those chapters are the record.** *[Compounding's rule](../../../../.claude/skills/ce-compound/SKILL.md) is stub, never silently delete: a cut that breaks a cross-reference costs more than it saved.* **So each heading below keeps its exact wording, and therefore its anchor, and carries one line saying what stood there.**

## How this codebase will work, and what would show it

***Twenty paragraphs written 2026-08-06, saying the v1 design whole: everything is a book, the card is a surrogate consulted instead of the book, `$Subject`/`$Author`/`$Library` are book references that validate rather than classes, and `$Library` is computed with no traversal.*** **Superseded as a design by the v2 rebuild** — *[Composition](27-composition.md), [The Block](28-the-block.md), [The Bind](29-the-bind.md)* — **and its two lasting ideas are alive elsewhere: the card-as-surrogate is what [sprint three's cataloguing question](#v3) has to answer for v2, and the self-authoring autobiography rides in [sprint five](#plan-sprints).**

## THE DEMO, specified at last *(Doug, 2026-08-06)*

***The demo's own library — four books, cards hand-made with true subject and author links.*** **Read it in [The Author](08-the-author.md), which built against it.** *Its fourth book survives into the live plan as [sprint five's bootstrap books](#plan-sprints).*

### The fourth book — the canonical autobiography

***A book telling the story of the team building the demo, whose author link is itself and which contains the decision to write itself.*** **The un-fakeable demo, and still the standard [the acceptance test](../../../../.claude/skills/ce-brainstorm/SKILL.md) is set by.** *Carried forward by [sprint five](#plan-sprints).*

## The five sprints — each with three things Doug can check *(planned 2026-08-06)*

***Author · Card · Subject · Library · Compilation, each with what is SEEN, what the implementation REVEALS, and what the tests PROMISE.*** **Superseded as a schedule by [the reference plan](#the-reference-plan); the three axes are the part worth keeping, and [ce-review](../../../../.claude/skills/ce-review/SKILL.md) now carries them.**

### Sprint Two — The Card

***Ran as [The Author](08-the-author.md) and [Cataloguing](14-cataloguing.md).*** *Its finding — that the list of hand-written properties IS the compiler's specification — landed in [The Build](15-the-build.md).*

### Sprint Three — The Subject

***Ran, and left this chapter on 2026-08-07: [The Subject](09-the-subject.md).***

### Sprint Five — The Compilation

***Ran as [The Build](15-the-build.md).***

### Types — a whole sprint *(ruled 2026-08-07)* — and it now waits behind Writing *(2026-08-10)*

***Ruled a whole sprint of its own, then queued behind `$Writing`.*** **Both have since happened** — *[Writing](10-writing.md), then the type split across [The Block](28-the-block.md), [The Bind](29-the-bind.md) and [The Reference](30-the-reference.md), which gave it its second half: a type names a level and binds, an attribute names none and only specifies.*

## The earlier split, superseded by the five sprints above

***A–D: the Card, the Subject, the Library, the Compilation*** — **superseded twice over, first by the five above and then by [the reference plan](#the-reference-plan).**

### D — The Compilation

***The `.public` build generating the cards that had been hand-made, property names identical, dirty implies fail.*** **Built in [The Build](15-the-build.md).**

## DONE — validation says why *(built in [The Parse](13-the-parse.md), 2026-08-12)*

***`$valid(condition, reason)` beside `$check`, so a failure states why rather than asserting a generic sentence.*** **Built; read it in [The Parse](13-the-parse.md).** *Its one lasting rule: never short-circuit in front of a `$valid` call, because a swallowed call is a reason nobody hears.*

## Sprint 49 — Dialogue and Lineage

***The conversation abstraction below book — turns, speakers, non-fiction as cited lineage, and the import format for Doug's conversations.*** **Never scheduled under that number, and the sprints since have gone past it.** *Real work, unplanned; it needs its own brainstorm when Doug calls for it.*

## Sprint 50 — The Public Build

***The `.public` build as a strict compiler, dirty implies fail.*** **Built in [The Build](15-the-build.md) and [Validation](16-validation.md).**

## The demos deserve a subject catalogue *(Doug, 2026-07-31 — future sprint material)*

***A subject catalogue of demos, each with its use case, its aesthetic identity, and what it proves.*** **The one line still binding is the demo specification: every demo must be aesthetically unique and carry a meaningful use case** — *no shared template look across demos.*

## Open design questions (explored, not settled)

***Most were settled by the sprints from 47 onward and are read there.*** **What is genuinely still open moved into [the live plan](#plan-owed) and into [the derivation's own open questions](../the-semantics-of-books/16-the-reference-and-its-locator.md#open), which is where a design fork belongs** — *this chapter schedules, it does not derive.*

## Queued — what a reference form is, and whether it belongs to the chemical hierarchy *(Doug, 2026-08-12)*

***Closed in [Cataloguing](14-cataloguing.md): a reference form does belong to the hierarchy, and `$Referent` became a class in one move once the five `$$` forms were writing one grade below what they stand for.*** **The one part that could not follow is the finding — a reading is not a chemical, so `$Composition$` asks for `valid()` on its own.** *In v2 `$Referent$` is back to an empty interface and [is listed for deletion](../the-semantics-of-books/16-the-reference-and-its-locator.md#v2-measured).*

> ***And one link was found broken by this sweep rather than caused by it.*** **[Sprint 48](06-sprint-48--subjects-and-the-library.md) links `00-planning.md#the-split--subjects-and-the-library-as-sprints-with-checkable-ends-doug-2026-08-06`, and no heading of that name stands in this chapter.** *Recorded rather than silently repaired, because [it is the same kind of thing the last compaction found three of](.cover.md).*
