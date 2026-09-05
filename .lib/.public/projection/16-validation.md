# Validation

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md) — *the rules in force, and the register to check before a tidy crosses one.*

---

*Opened 2026-08-17 as a brainstorm, planned the same day. **Status: `implementation-ready`.** The requirements were approved in two sections, and the plan enriched this same chapter in place rather than starting a second document.*

*The sprint is **named, not numbered**, and the name is **Doug's own word**: "I reject failure. **Validation. Invalid.** That's the semantics." Standing for correction like every other proxy on this branch.*

**Identifiers continue from [The Build](15-the-build.md).** Requirements begin at **R37** and acceptance examples at **AE20**, because this sprint cites [R21](15-the-build.md#r21--a-reference-is-authored-as-a-cover-and-emitted-as-a-card), [R25](15-the-build.md#r25--the-rules-are-enforced-in-the-code-not-remembered-by-the-compiler) and [R34](15-the-build.md#r34--an-entry-is-placed-by-a-declaration-not-only-by-position) by number throughout, and two `R1`s on one branch is a collision a later reader pays for.

## The workflow

[ce-brainstorm](../../../../.claude/library/our-skillset/28-ce-brainstorm.md) → [ce-plan](../../../../.claude/library/our-skillset/29-ce-plan.md) → [ce-work](../../../../.claude/library/our-skillset/30-ce-work.md) → [ce-review](../../../../.claude/library/our-skillset/33-ce-review.md) → [ce-compound](../../../../.claude/library/our-skillset/31-ce-compound.md).

## How this sprint came to be

**The Build's phase table names four machine phases and the one command runs three.** Reading, resolving and emitting are built; the compiler turns 18 authored files into 26 and the application draws every one of them. **Checking is the phase that was never wired in** — `valid.mts` opens every book in bare Node and answers *6/6 books stand, 214 parts constructed and asked*, but it lives in the application, is run by the application's own gate, and [`index.ts`](../../build/index.ts) never calls it.

**So the book's own account of the machine is a claim the machine does not honour**, and closing that is what Doug chose out of four candidate shapes for a v1: *"Close the machine — checking."* The three he did not choose are named in [Out of scope](#out-of-scope-named-so-it-is-not-drifted-into) rather than dropped.

**And the sprint got bigger in the same breath than closing a wire.** His answer to what checking judges was *"construction and validity… at all levels… but that should include validation of the subject, author, … links"* — and then, asked where those rules belong: ***"In the framework, in the valid functions."*** **That opens the package, which has been outside every boundary since The Build began.**

## Doug's rulings — 2026-08-17, verbatim

*Recorded because the design is theirs, and because three of these turned a proposal that was already on the table.*

- **WHAT V1 IS.** Of four offered shapes — close the machine, fix the rule that still guesses, move the ordering rules into the framework, publish — he took **one**: ***close the machine.*** *The other three are real and are named out of scope with their reasons, so a later reader knows they were declined rather than forgotten.*

- **WHAT CHECKING JUDGES.** *"**Construction and validity. We need a runtime where we can check that every book is valid, and to specifically test that at all levels.** But that should include **validation of the subject, author, … links which can be written in code**."* ***"At all levels" is the requirement with the largest number behind it***: what runs today asks `1 + chapters + sections + paragraphs` and stops, so sentences, words and letters are constructed and never asked.

- **WHERE THE RULES LIVE — THE PACKAGE OPENS.** *"**In the framework, in the valid functions.** The subject should also have **a library reference that is itself if self-validating otherwise its parent's library.** **Yes we need it in the framework and tested.**"* ***This is [R25](15-the-build.md#r25--the-rules-are-enforced-in-the-code-not-remembered-by-the-compiler) arriving with a scope*** — not every rule, but every rule about *what a link points at* — and it carries a **new framework member** with it.

- **THE SEMANTICS, CORRECTED.** *"**I reject failure. Validation. Invalid. That's the semantics.**"* ***A vocabulary ruling and not a preference***, in the same family as the words this team has had taken away from it before. **A book is invalid; validation says so, and the word he struck is quoted here and nowhere else.** *He later widened it to the whole repository — **"remove the word ... from all documents in this repo. Valid / validation / failed validation. We don't use it. There is no one failing."** — and that sweep is [done](#the-sweep-2026-08-17).*

- **THE RUNTIME IS THE COMPILER'S.** *"**We need a runtime for the books as part of the compiler.**"* ***This settles the question [The Build left open for whoever opened this stage](15-the-build.md#e--checking--and-it-may-already-be-built):*** the runtime does not stay beside the program it opens. It moves into `build/`.

- **THE DEMO'S JOB, STATED AS A ROLE.** *"**The demo should track the project.** But all of the rules should be encoded in the valid functions… **And the demo plays a documentation capacity.**"*

- **THE COMPILER IS UNTESTED AND THAT IS QUEENIE'S.** *"**We don't want to commit the test code.** We can survive in this state for a little while, I suppose, though **we should be unit testing the compiler. Queenie should be involved in that.**"* ***Two rulings in one sentence***, and the first is [recorded and deliberately not acted on](#out-of-scope-named-so-it-is-not-drifted-into).

## What was read — the sprint's literature, and why each earned its place

*Chosen rather than habitual, and every claim in this chapter was checked against the source in this session rather than recalled.*

- **[The Build](15-the-build.md), end to end** — 1,829 lines. It is the design, the record of four sessions, and the only place the phase table and the shared contracts are written down. *Read whole because the requirements below continue its numbering and contradict none of it.*
- **The compiler, every module** — [`index.ts`](../../build/index.ts), [`library.ts`](../../build/library.ts), [`walk.ts`](../../build/stages/walk.ts), [`refer.ts`](../../build/stages/refer.ts), [`resolve.ts`](../../build/stages/resolve.ts), [`emit.ts`](../../build/stages/emit.ts), [`catalogue.ts`](../../build/stages/catalogue.ts), [`where.ts`](../../build/utilities/where.ts), [`verify-build.ts`](../../build/tests/building.ts). *The sprint adds a phase to this program; a requirement written without reading it would be a guess about what the phase can reach.*
- **`valid.mts`** — the runtime that is about to move. *It is the thing being relocated, and reading it is what showed the level walk stops at paragraph.*
- **[`app.tsx`](../../app/src/app.tsx) and [`catalogue.tsx`](../../app/src/catalogue.tsx)** — where a card is handed its book by `fetch()`. *Load-bearing: this is the only place in the tree that wires a card, and checking has to do the same thing for every book at once.*
- **The framework's link classes** — [`Author.tsx`](../../package/src/book/Author.tsx), [`Canonical.tsx`](../../package/.archive/book/Canonical.tsx), [`Book.tsx`](../../package/src/book/Book.tsx), [`Synopsis.tsx`](../../package/src/book/Synopsis.tsx). *This is where the new rules land, and reading them found a defect the sprint now owes a fix for.*
- **The corpus and its emitted twin** — `library/.test-library/` against [`app/src/library/`](../../app/src/library/), cover by cover. *What an author writes versus what a compiler makes, which is the only honest picture of what the machine does.*
- **[The Process](../../.archive/app/src/sections/book/library/the-build/05-the-process.tsx)** — the demo's own account of the phases, and the chapter this sprint has to edit. *Its owed row currently names the resolving gap; checking's account is what this sprint adds beside it.*
- **[The green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) and [the three things that only worked here](../solutions/21-the-three-things-that-only-worked-here.md)** — five and three appearances between them, both about a number whose scope was silent. *A sprint whose entire product is a gate has to read the branch's two chapters about gates that lied.*
- **[Chapter zero](00-planning.md)'s Sprint 50** — the roadmap's own version of this work, whose recorded risk is exactly this sprint's: *"a compiler that fails often gets bypassed… failure messages must name the fix, or the specification breeds the disease it prevents."*

**Baseline, so every later number is a delta.** *Measured in this session:* `build` `tsc` **0** · `verify-walk` **28 checks, 0 failed** · `verify-build` **36 checks, 0 failed**. *Cited from [The Build's close](15-the-build.md#verified--every-gate-fresh) and not re-run here:* app typecheck **34 files, 24 dot-prefixed** · `valid.mts` **6/6 books, 214 parts** · `verify-library` **29/29** · demo `verify-book` **61** · `verify-demo` **25** · demo typecheck **78 files** · chemistry **674/674** · lib **239/239**.

**And the working copy is not committed.** Six compiler modules and both generated catalogue modules are untracked; twelve files are modified. *Stated because every number above is a number about a working copy, and the record should say so.*

---

# What this needs to be

## The boundary, stated first because it is the sprint's shape

**The machine closes and nothing else opens.** Checking becomes the compiler's fourth phase, the link rules become framework members, and the one command answers whether the library it just made is valid.

**What does not move:** the ordering and canonical-default rules stay in the compiler; an entry is still placed from where a book sits; the deploy stays off; the corpus stays a fixture. *Three of those are things Doug was offered and declined this session, which is a stronger reason to leave them than never having asked.*

## The actors

*Compacted at the close of the sprint — the actors are the classes the units name.*

## The key flows

*Compacted at the close of the sprint — the flows are what the sprint built; the units above name them.*

## The requirements

### R37 — The link rules are `valid()` functions in the framework

**Three rules, and each is a question about what a link points at:**

| reference | is valid only when it points at |
|---|---|
| **author** | a book that **authors itself** — the canonical autobiography |
| **subject** | a book that **catalogues** — one that holds books |
| **canonical** | a book **its own subject holds** |

**They live in the framework, in the `valid()` functions**, and each carries a promise in the lib suite. ***The compiler holds no copy of any of them*** — which is the whole difference between this and [the ordering rules](15-the-build.md#r24--order-and-which-book-speaks-for-a-subject), and the reason [R25](15-the-build.md#r25--the-rules-are-enforced-in-the-code-not-remembered-by-the-compiler) is partly discharged by this sprint rather than wholly.

**This is the shape [S9](15-the-build.md#s9--where-reference-kind-validation-lives-the-build) named and did not build**, and its argument still holds: **only the build can ask any of it**, because deciding whether a book catalogues means knowing every book at once — which the served page will not have and the build has by definition. *What changes is that the build now asks the framework rather than answering for it.*

**Seen:** a promise per rule in the lib suite; the compiler containing no second copy; and each rule watched saying **invalid** against a book constructed to violate it.

### R38 — `$Canonical` gains the `valid()` it never had

**Measured, not suspected — and the measurement CORRECTED THE RECORD.** [`$Author`](../../package/src/book/Author.tsx) and `$Subject` each answer `super.valid() || this.$for !== undefined` — text **or** a card. **[`$Canonical`](../../package/.archive/book/Canonical.tsx) declares no `valid()` at all**, so it inherits `$Phrase`'s, which requires non-empty copy.

***The defect points the OTHER WAY from how it was filed.*** [C22](15-the-build.md#c22) recorded that *a canonical carrying neither text nor card is valid where an author in that state is not*, and this requirement inherited that sentence. **Driven, all nine cases:**

| | text only | card only | neither |
|---|---|---|---|
| **author** | valid | valid | invalid |
| **subject** | valid | valid | invalid |
| **canonical** | valid | ***invalid*** | invalid |

**All three are invalid with neither.** What is actually broken is that **a canonical carrying a card and no text is invalid**, where its two siblings in that state are valid — *so an emitted canonical would be invalid the moment a display name were empty, and the class that most needs a card is the one that will not accept one alone.*

***The fix is the same single line; the reason and the acceptance example are not.*** *This is [a contract corrected by implementation rather than by rereading](../../../../.claude/library/our-skillset/29-ce-plan.md) — C22 was measured by diffing the three files and never by asking them, and a byte comparison cannot see an inherited method.*

**Seen:** a canonical holding a card and no text is **valid**; one holding neither remains **invalid**; and the whole matrix stands as a promise so the next reader does not have to re-derive it.

### R39 — A subject carries a library reference

*Doug: **"The subject should also have a library reference that is itself if self-validating otherwise its parent's library."***

**A book whose subject reads home IS the library.** Every other book's library is **its subject's library**, which makes the answer a computation rather than a stored fact.

***And the rule already exists one grade below where it belongs.*** The generated [`cards.tsx`](../../app/src/library/cards.tsx) declares it today:

```ts
get library(): $Card | undefined {
    return this.$subject === this ? this : this.$subject?.library;
}
```

**So this is the same move as R37**: a rule about books, living in generated code, moving into the framework — with the card **inheriting** it rather than declaring it. *A rule with two homes is a rule that can disagree with itself, and this one has two homes today.*

**Seen:** the library's own book answers **itself**; a book two folders down answers the library; and the generated card module **declares no library rule of its own**.

### R40 — Validity is asked at every level

*Doug: **"to specifically test that at all levels."*** **`$Letter` through `$Book`** — and the framework already answers, with **forty `valid()` implementations** across writing, book, document and reference.

**What runs today stops at paragraph.** `valid.mts` walks `1 + chapters.length + sections.length + paragraphs.length`, so **sentences, words and letters are constructed and never asked** — and nothing in the output says so. *That is [the green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) in the shape this branch keeps meeting it: a number that is true, with a silent scope.*

**Seen:** the count stated **level by level**, and the number below paragraph is not zero. **With a floor**, so a run that asks less than the last one says so and exits non-zero rather than passing quietly.

### R41 — The semantics are validation, and a book is INVALID

*Doug: **"I reject failure. Validation. Invalid. That's the semantics."*** **Validation says a book is invalid**, naming the file and what would make it valid. **The word he struck appears in this chapter only inside his own sentence.**

**And the correction goes everywhere, ruled rather than assumed.** The word is printed today by [the resolving stage](../../build/index.ts) (`INVALID <path> — <says>`), by `valid.mts`, and stands inside the framework's own error strings — *"A book requires exactly one cover"* and its siblings read as failures. **All of it is this sprint's.**

**Seen:** the word absent from the compiler's output and from the framework's validity messages, **stated as a count of zero** rather than as an impression.

### R42 — The books runtime is part of the compiler

*Doug: **"We need a runtime for the books as part of the compiler."*** **`valid.mts` leaves the application** and becomes the **fourth phase of the one command** — it is [`validate.ts`](../../build/stages/validate.ts) now, with [`check.ts`](../../build/verify.ts) as its command.

**It wires every card to its book first, and that is forced rather than chosen.** [`$Author.read()`](../../package/src/book/Author.tsx) throws when its card never pointed, and the compiler's emitted covers carry cards that **nothing has filled** — [`fetch()`](../../app/src/catalogue.tsx) does that in the application, one book at a time, at load. **So a link cannot be followed at build time until checking loads every book and fills every card**, which is exactly the thing the build is allowed to do and the page is not.

*The mechanism is already half-built and this is worth stating so nobody designs a second one: **[`catalogue.ts`](../../build/stages/catalogue.ts) already imports every emitted book** to read its cards off a constructed one. Checking is that same act asking a different question.*

**Seen:** one command printing **four** phases; the application's `package.json` declaring **no validation script**; and a run over the corpus reporting validity with its scope.

### R43 — The compiler is unit tested, and Queenie holds it

*Doug: **"we should be unit testing the compiler. Queenie should be involved in that."***

**Measured: the compiler has no suite.** It has **64 assertions across two hand-rolled scripts** — [`verify-walk.ts`](../../build/tests/walking.ts) at 28 and [`verify-build.ts`](../../build/tests/building.ts) at 36 — which are driver-shaped: a counter, a list of `check(says, held)` calls, and a printed total. *Chemistry runs **674** and lib **239**, both as suites of promises.*

**Seen:** a suite with a number, each of the compiler's rules stated as a promise; and **the two scripts either become it or stand beside it as drivers — stated either way**, never left ambiguous. *An artifact whose role nobody wrote down is the shape of half the defects on this branch.*

### R44 — The corpus can make a rule say invalid

**Two gaps, and both are gaps in coverage rather than in size.**

1. **No book in the corpus authors itself**, so `<Author>The Team</Author>` resolves to nothing and **the author rule has nothing to run against even positively.** *[Named at The Build's close](15-the-build.md#open--and-none-of-it-blocks-a-session-starting) and still standing.* **The corpus gains a book that authors itself.**
2. **Invalid content cannot live in the corpus**, because the ordinary run must come out valid. **So invalid cases are constructed by the test** — the way [`verify-build.ts`](../../build/tests/building.ts) already clones a description and mutates it to drive the one complaint it can.

***Nothing here is committed.*** `library/.test-library/` is gitignored, so adding to it adds nothing to the repository — which is [consistent with the ruling](#out-of-scope-named-so-it-is-not-drifted-into) that we do not want to commit the test code.

**Seen:** the author rule holding on a real book, and each rule watched **saying invalid** on a constructed one.

### R45 — Every rule is watched saying invalid before its valid is trusted

**Standing specification on this branch, and it is not ceremony.** [The green that exercised nothing](../solutions/14-the-green-that-exercised-nothing.md) has **five appearances** filed against it and [the three things that only worked here](../solutions/21-the-three-things-that-only-worked-here.md) three more. *A gate whose red has never been seen is a claim about a gate.*

**Seen:** each new rule watched going invalid, **with a number**, and the number reported beside the green one.

### R46 — The demo tracks the project

*Doug: **"The demo should track the project… the demo plays a documentation capacity."***

**[The Build](../../.archive/app/src/sections/book/library/the-build) gains its chapter on the validating**, and **its figure runs the rules over real books rather than illustrating them** — the pattern [the showing chapter](../../.archive/app/src/sections/book/library/the-build/08-the-showing.tsx) already uses, where the figure computes consulted-versus-read from live books and **the page changes when the rule does.**

**And [The Process](../../.archive/app/src/sections/book/library/the-build/05-the-process.tsx)'s phase table gains checking's account.** Its `owed` column currently carries the resolving gap; that row stays true and checking's row gains what it makes.

*This is [R26](15-the-build.md#r26--the-demo-moves-with-the-design-in-the-same-act) as a standing commitment rather than a one-time debt: a rule that changed and a figure that did not is a page that lies.*

## Acceptance examples

*Compacted at the close of the sprint — the examples were accepted at the review; what they proved is in the record above.*

## What a hand-authored page could fake, and what it could not

**A verdict printed in a terminal can be faked, and so can a chapter of prose about validity.** So the test is applied to the part that is neither.

**What cannot be faked is a figure computing validity from books it did not write.** The demo's figure opens real books, asks them, and prints what they answer — so **a rule that changed and a figure that did not is a visible contradiction**, and making the page say something else means changing the rule. *That is the same property [the owed row](15-the-build.md#the-demo-brought-current--r26-discharged) has, and it is why editing the claim there required editing the data.*

**And the second unfakeable thing is the negative.** Make one book's author point at a book that does not author itself, change nothing else, and **the run says invalid and names it.** *Put it back, and it stands. A hardcoded string cannot do both.*

## Out of scope, named so it is not drifted into

- **An entry placed by a declaration rather than by position** — [R34](15-the-build.md#r34--an-entry-is-placed-by-a-declaration-not-only-by-position), the one owed row in the demo's own figure, and **offered this session and declined.** It stays the next obvious unit.
- **The ordering and canonical-default rules moving into the framework** — the other half of [R25](15-the-build.md#r25--the-rules-are-enforced-in-the-code-not-remembered-by-the-compiler). **Offered and declined**: the compiler keeps the shortest-title default and the alphabetical entry order.
- **Publication** — the deploy stays off, the teaser stays on the open web, and a real page per book is still [G's](15-the-build.md#g--the-joining--not-yet). **Offered and declined.**
- **A verdict stamped on the card** — offered as part of what checking might judge and **not taken**, so the application still cannot ask what the build decided.
- **The real library.** *"I want test content until the compiler is working and tested."* The corpus stays a fixture.
- **Whether the generated output stays committed.** *Doug: "We don't want to commit the test code. We can survive in this state for a little while, I suppose."* ***Recorded as a ruling and deliberately not acted on***, with one consequence named: [the empty-diff gate](15-the-build.md#r29--v1-is-one-command-four-phases-and-its-gate-is-an-empty-diff) and half of `verify-build` read the committed output, so undoing it costs a gate and wants its own decision.
- **Anything in the package beyond the link rules, `$Canonical`'s `valid()`, and the library reference.** The package opens narrowly and by name.

## Names owed — none taken

- **Validation**, as the sprint's name — **Doug's own word**, from the sentence that ruled the semantics.
- **Whether the phase stays *checking* or becomes *validating*.** He named the phases himself — *reading, resolving, emitting, checking, showing* — and then ruled that the semantics of what it finds are validation. **Flagged rather than renamed.**
- **What the phase makes.** [The phase table](../../.archive/app/src/sections/book/library/the-build/05-the-process.tsx) says *a verdict*; under this ruling *validity* may be the truer word.
- **The three proxies still standing from The Build** are unchanged: *The Build* twice, and *fixture*.

---

# The plan — guardrails, not choreography

*Written 2026-08-17. **Status: `implementation-ready`.** [WHAT, not HOW](../../../../.claude/library/our-skillset/29-ce-plan.md) — no signatures, no shell sequences, no pseudo-code dressed as specification. **Unit identifiers continue from [The Build](15-the-build.md), which reached U34**, for the same reason the requirements do.*

## The size of the work, measured before it was divided

***It is not divided.*** **One session, about fifteen files** — five in the package, four in the compiler, two in the application, the corpus, and the demo. *[The Build cut a compiler into seven lettered tracks and the middle of it came to 242 lines](15-the-build.md#the-size-of-the-machine-measured--and-its-the-reviews-most-useful-finding); the specification that came out of it is that a division whose parts are smaller than their briefs is one session, and this is smaller than that was.*

## What was measured with the code open, and one of it amends a requirement

**1 — A LINK CANNOT REACH THE BOOK IT STANDS ON.** `$in` is declared on [`$Chapter`](../../package/src/book/Chapter.tsx) alone; writing below chapter grade has no upward link at all. **Two of the three rules are answerable from the link by itself** — *does the book I point at author itself; does it catalogue* — **and the canonical rule is not**, because *a book its own subject holds* is a claim about the owner as much as the target.

**2 — `$Card.library` HAS NO CONSUMERS.** Measured across the application: [`app.tsx`](../../app/src/app.tsx) builds its trail by computing `card.subject`, and [`bookmark.tsx`](../../app/src/bookmark.tsx) does the same. **Nothing reads `library`.** ***This amends [R39](#r39--a-subject-carries-a-library-reference), which said the card would inherit the rule: the card does not need it, so the generated rule is DELETED rather than inherited.*** *Raised rather than built around, because [a guardrail that turns out wrong is raised](../../../../.claude/library/teamspeak/03-discussion.md).*

**3 — `$Book` ALREADY WALKS EVERY LEVEL.** It declares `sentences`, `words` and `letters` as getters flattening down from paragraphs. **[R40](#r40--validity-is-asked-at-every-level) is four more counts, not new machinery** — which is why it is folded into the phase's unit rather than being one of its own.

## The decisions

**D18 — The three link-kind rules live on `$Book.valid()`, in one place.** *Chosen over splitting them two-and-one across `$Author`, `$Subject` and `$Canonical`, which the measurement above makes the only alternative. Three rules in two homes reads as two rules and an exception, and the thing being judged is a book.* **`$Book.valid()` is a valid function**, so Doug's ruling is met literally.

**D19 — A kind rule applies WHEN THERE IS A CARD.** A link carrying only text names somebody without pointing at them, and [that is already valid](../../package/src/book/Author.tsx) — this sprint does not change it. **What the rules judge is where a card points.** *Otherwise the first thing validation would do is declare most of the corpus invalid for a reason nobody asked about.*

**D20 — `library` lands on `$Book`.** *Chosen over `$IndexCard`, which has no subject of its own and whose own comment says which fields a library's cards carry is that library's business. A book has a subject; the computation belongs where the subject is.*

**D21 — The runtime is a new module in the compiler and the application's copy is deleted.** *Not moved and left dual-homed: [two homes drift](15-the-build.md#r12--one-home-and-one-pointer), and the whole point of R42 is that the compiler owns the phase.*

**D22 — The compiler's suite is vitest, and the two check scripts STAY as drivers.** *This is [R43](#r43--the-compiler-is-unit-tested-and-queenie-holds-it)'s "stated either way", answered: promises are the green rung and the check scripts are the driven rung, exercising the whole pipeline against the real corpus and the real emitted output. Chosen over converting them, which would collapse two rungs into one and lose the end-to-end run.*

**D23 — The vocabulary sweep is its own unit and runs late.** *Folded into each unit it is invisible and unmeasurable; as a unit it produces a count, which is what [R41](#r41--the-semantics-are-validation-and-a-book-is-invalid) asks for.*

**D24 — Every new rule is watched saying invalid, inside the unit that adds it.** *[R45](#r45--every-rule-is-watched-saying-invalid-before-its-valid-is-trusted) is not a unit; it is a condition on all of them. A rule reported green without its red having been seen is not done.*

**D25 — An assertion that moves gets its reason written down.** *Adding a book to the corpus can reorder entries and can move which book is canonical. **An assertion edited to pass is how a gate gets quietly weakened**, and this branch has already recorded one being edited correctly and said so out loud.*

## The units

### <a id="u35"></a>U35 — `$Canonical` gains its `valid()`

**Mechanism:** the same local rule its two siblings already carry — text or a card — added where it is absent. **Realizes [R38](#r38--canonical-gains-the-valid-it-never-had).**
**Files:** [`package/src/book/Canonical.tsx`](../../package/.archive/book/Canonical.tsx) · a promise beside the existing book promises.
**Depends on:** nothing.
**Visible end:** [AE23](#acceptance-examples) — a canonical carrying neither text nor card is invalid. ***It fails before this unit and passes after***, which is the cheapest kind of visible end there is.

**Scenarios.** A canonical with text and no card → valid. With a card and no text → valid. With neither → **invalid**, and the promise is watched failing against the current class before the change.

### <a id="u36"></a>U36 — The three link-kind rules, on the book

**Mechanism:** `$Book.valid()` gains three questions, each asked only where a card is present ([D19](#the-decisions)): the author's card reaches a book that **authors itself**; the subject's card reaches a book that **catalogues**; the canonical's card reaches a book whose **subject is this book**. **Realizes [R37](#r37--the-link-rules-are-valid-functions-in-the-framework).**
**Files:** [`package/src/book/Book.tsx`](../../package/src/book/Book.tsx) · promises in the book and subject test files.
**Depends on:** [U35](#u35) by subject matter, not by code.
**Visible end:** [AE21](#acceptance-examples) and [AE25](#acceptance-examples) — a book whose author does not author itself comes back invalid, and each rule has a promise.

**Scenarios.** *Each constructed in the suite rather than in the corpus.* An author card reaching a book that authors itself → valid; reaching one that does not → **invalid**. A subject card reaching a book that catalogues → valid; reaching a leaf → **invalid**. A canonical reaching a book the owner's own subject holds → valid; reaching one it does not → **invalid**. A link carrying **text only** → unaffected, by D19. **A card that never pointed → validity answers rather than throwing.**

### <a id="u37"></a>U37 — `library`, on the book, and the generated rule deleted

**Mechanism:** a book is its own library when its subject reads home; otherwise its library is its subject's library. The compiler stops emitting the duplicate. **Realizes [R39](#r39--a-subject-carries-a-library-reference), as amended above.**
**Files:** [`package/src/book/Book.tsx`](../../package/src/book/Book.tsx) · [`build/catalogue.ts`](../../build/stages/catalogue.ts) · the regenerated `cards.tsx` · a promise.
**Depends on:** nothing in code; the deletion half wants [U38](#u38)'s run to prove it regenerates.
**Visible end:** [AE24](#acceptance-examples) — the library's own book answers itself, a book two folders down answers the library, and the generated module contains no library rule.

**Scenarios.** A book whose subject reads home → its library is itself. A book one subject down → the library. **Two down → still the library**, which is the case a non-recursive answer would get wrong. A book with no subject → no library, stated rather than thrown. **And a grep over the emitted module returns zero.**

### <a id="u38"></a>U38 — Validating, as the compiler's fourth phase

**Mechanism:** after emitting, the compiler opens every emitted book, **fills every card with its book** — which is what makes a link followable, and which nothing does at build time today — then asks validity of each book and counts parts **at every level down to letters**. One line for the phase; a non-zero exit when a book is invalid, naming the file and what would make it valid. **Realizes [R42](#r42--the-books-runtime-is-part-of-the-compiler) and [R40](#r40--validity-is-asked-at-every-level).**
**Files:** a new module in [`build/`](../../build/) · [`build/index.ts`](../../build/index.ts) · `app/valid.mts` deleted · [`app/package.json`](../../app/package.json).
**Depends on:** [U35](#u35), [U36](#u36), [U37](#u37) — it asks what they answer — and [U39](#u39) for a corpus that exercises the author rule.
**Visible end:** [AE20](#acceptance-examples) and [AE22](#acceptance-examples) — four phase lines, and a parts count whose number below paragraph is not zero.

**Scenarios.** The corpus → every book valid, with counts stated per level. **A card deliberately left unfilled → validity answers rather than throwing.** A book's synopsis removed → **invalid, naming the file** *(this already goes red once, so it is a regression check rather than a new claim)*. A level count that falls below its floor → non-zero exit. **The phase watched going red before its green is trusted.**

### <a id="u39"></a>U39 — The corpus gains a book that authors itself

**Mechanism:** a book at the library's top level whose own cover names **itself** as its author, and the library's own cover naming it — so the supplied-author default resolves to a card and the author rule has a positive case. **Realizes [R44](#r44--the-corpus-can-make-a-rule-say-invalid).**
**Files:** `library/.test-library/` — a new book folder with a cover, a synopsis and a chapter · the library's own cover.
**Depends on:** nothing. **Committed: nothing** — the corpus is gitignored.
**Visible end:** the emitted catalogue gains a card, the library's page gains an entry, and the author link on every silent cover resolves to it.

**Scenarios.** The run reports **seven** books where it reported six. The library's own contents gains a row. **The supplied author on a silent cover now carries a card** where it carried a bare name. *And per [D25](#the-decisions): if the entry order or the canonical moves, the moved assertion carries its reason.*

### <a id="u40"></a>U40 — The word goes

**Mechanism:** every occurrence of *fail* in any form, across the compiler's output, the framework's error strings and the application, replaced with the validation vocabulary — and the result stated as a count of zero. **Realizes [R41](#r41--the-semantics-are-validation-and-a-book-is-invalid).**
**Files:** [`build/index.ts`](../../build/index.ts) · [`build/resolve.ts`](../../build/stages/resolve.ts) · [`build/verify-build.ts`](../../build/tests/building.ts) · [`package/src/book/`](../../package/src/book/) · [`app/src/app.tsx`](../../app/src/app.tsx).
**Depends on:** everything, which is why it runs late.
**Visible end:** [AE27](#acceptance-examples) — the count, stated.

**Scenarios.** A grep across the three workspaces returns zero. **The drivers still pass**, because one of them asserts on a failure string today and will assert on the new one — *with its reason written down, per D25.*

### <a id="u41"></a>U41 — The compiler's suite · **Queenie's**

**Mechanism:** vitest in the compiler workspace, each of its rules stated as a promise — the walk's kinds and complaints, the resolution's defaults and orderings, the emission's carrying and sweeping, the validating's verdicts. **Realizes [R43](#r43--the-compiler-is-unit-tested-and-queenie-holds-it).**
**Files:** [`build/`](../../build/) — a vitest config, test files, and `package.json`.
**Depends on:** [U38](#u38), so the fourth phase is among what it promises.
**Visible end:** [AE25](#acceptance-examples) — a suite with a number, beside chemistry's 674 and lib's 239.

**Scenarios.** *Per [D22](#the-decisions), the two check scripts stay and this is the rung beneath them.* Each promise is watched failing once. **The suite runs from a clean shell**, which is the thing [three artifacts on this branch could not do](../solutions/21-the-three-things-that-only-worked-here.md).

### <a id="u42"></a>U42 — The demo tracks the project

**Mechanism:** The Build gains a chapter on the validating whose figure **opens real books and asks them**, printing what they answer — so a rule that changed and a figure that did not is a visible contradiction. The Process chapter's phase table gains checking's account. **Realizes [R46](#r46--the-demo-tracks-the-project).**
**Files:** [`the-build/`](../../.archive/app/src/sections/book/library/the-build) — a new chapter, its figure, `book.tsx`, and [`05-the-process.tsx`](../../.archive/app/src/sections/book/library/the-build/05-the-process.tsx).
**Depends on:** [U38](#u38), because the figure asks what the phase asks.
**Visible end:** [AE26](#acceptance-examples) — the chapter on screen, its figure computing validity from live books, both demo drivers green with their counts stated.

**Scenarios.** The figure's numbers **match what the compiler reports**, because it is the same rule. **Doug appears nowhere in it**, per [D10 of The Build](15-the-build.md#the-decisions). Its `owed` row for resolving stays true and is not quietly cleared.

## Risks

*Compacted at the close of the sprint — the risk that fired is in the record with what it cost; the rest did not.*

## Self-check — every requirement has a home

| requirement | lands in |
|---|---|
| R37 — the link rules in the framework | [U36](#u36) |
| R38 — `$Canonical.valid()` | [U35](#u35) |
| R39 — the library reference | [U37](#u37) *(amended: deleted, not inherited)* |
| R40 — validity at every level | [U38](#u38) |
| R41 — the semantics are validation | [U40](#u40) |
| R42 — the runtime is the compiler's | [U38](#u38) |
| R43 — the compiler is unit tested | [U41](#u41) |
| R44 — a corpus that can say invalid | [U39](#u39) |
| R45 — watched saying invalid | [D24](#the-decisions), a condition on every unit |
| R46 — the demo tracks the project | [U42](#u42) |

**And every acceptance example:** AE20, AE22 → U38 · AE21 → U36 · AE23 → U35 · AE24 → U37 · AE25 → U36 and U41 · AE26 → U42 · AE27 → U40.

## The order, and why it is this one

**U35 → U36 → U37 → U39 → U38 → U41 → U40 → U42.**

The framework first, because the phase asks what it answers. **The corpus before the phase**, so the author rule has a positive case the first time it runs. The suite after the phase, so the phase is among what it promises. **The word late**, so it sweeps everything at once and produces one number. The demo last, because it documents what was built.

---

# BUILT — the compiler checks, 2026-08-17

*U35, U36, U37, U38 and U40 built and driven in one session. **The compiler is four phases**, and validity reaches the letters.*

## THE STANDING CONSTRAINT, and it governs how the rest of this is read

***Doug, 2026-08-17, mid-session: "everything is going to be moved around, audited, redesigned. This is a big project. We need to get something stood up. But it is so so so far away from what I need it to be."***

**So nothing below is settled and none of it should be defended.** What is worth keeping across a redesign is **the measurements and the defects** — those survive being moved — and what is not is any arrangement of files or any name. *Recorded here rather than in conversation because a later session reading this chapter would otherwise take it for a design.*

## THE FOURTH PHASE, RUNNING

```
READ      8 folders · 18 files · 11 references · 0 complaints
RESOLVE   6 books · 6 declared · 4 supplied · 5 standing for nobody · 0 invalid
EMIT      18 carried · 8 generated · 6 cards
CHECK     6/6 books stand · 29 chapters · 57 sections · 122 paragraphs ·
          186 sentences · 1063 words · 4859 letters
```

***Validity used to stop at paragraph.*** The runtime walked `1 + chapters + sections + paragraphs` and said nothing about it; **1,063 words and 4,859 letters were constructed and never asked.**

**WATCHED SAYING INVALID.** A corpus cover was pointed at a book that catalogues nothing:

```
CHECK     5/6 books stand
  INVALID .philosophy/the-hard-problem/.cover.tsx
          a cover names something it should not — an author that does not author
          itself, a subject that catalogues nothing, or a canonical that belongs elsewhere
exit 1
```

*Reverted, and 6/6 came back.*

## What was built

| unit | what landed |
|---|---|
| **U35** | `$Canonical.valid()` — the rule its two siblings already carried |
| **U36** | the three link-kind rules, on `$Book.valid()`, asked only where a card points |
| **U37** | `$Book.library` — the computation — and the duplicate deleted from generated code |
| **U38** | `build/validate.ts`, the fourth phase, **in its own process** |
| **U40** | the word swept from the compiler — **0 occurrences**, counted |

## SIX DEFECTS FOUND BY LOOKING, and two were on the road to the open web

**<a id="v1"></a>1 — THE PRODUCTION BUILD COULD NOT CONSTRUCT A SINGLE CHEMICAL, AND NOTHING THREW.** Chemistry finds a bond constructor as **`prototype[prototype.constructor.name]`** — `$Book` declares a method called `$Book` — so **minification renamed the class and the constructor became unreachable.** `$()` returned `undefined`, every card was undefined, every page rendered **blank**.

***Nobody had ever run a built $Chemistry application.*** [The record says the build was verified by counting chunks](15-the-build.md#f--where-it-stands--the-library-is-on-screen-driven-and-seen); the demo aliases `@` to package **source**, and the teaser imports no lib. **Fixed with `keepNames`** — and the finding is a framework fact worth more than the fix: ***in $Chemistry a class name is structural, not cosmetic.***

**<a id="v2"></a>2 — EVERY DEEP LINK 404'd ON PAGES.** No `404.html`, no `public/`. A route here is a folder path and Pages serves files, so **every route but the root had no file behind it.** The build now stands the same document at both names. *Proven against a server that serves `dist` the way Pages does — real file, else `404.html` with a 404 status — rather than against a dev server whose SPA fallback would have passed either way.*

**<a id="v3"></a>3 — THE CHECK JUDGED A STALE MODULE CACHE, AND THIS ONE WAS MINE.** Emitting **imports every book to read its cards, then rewrites those same files** to carry them. A validator in that process is handed the pass-one modules — covers with no cards — so **every link rule was skipped in silence and a planted fault passed.** ***The program is checked by a process that did not write it***, which is why the phase is a spawn and not a call.

**<a id="v4"></a>4 — THE COMPILER AND THE APPLICATION READ `dist`, WHICH WAS STALE.** The rules were correct and appeared not to fire: `@dna-platform/lib` resolves to the built bundle while the demo aliases source, so **one edit was live in one place and absent in two.** *[The suite that passed against a stale build](../solutions/05-the-suite-that-passed-against-a-stale-build.md), and it cost a stretch of diagnosing correct code.*

**<a id="v5"></a>5 — C22 WAS RECORDED BACKWARDS.** [At R38](#r38--canonical-gains-the-valid-it-never-had): all three classes are invalid with neither text nor card; what was broken is that **a canonical carrying a card and no text was invalid** where its siblings were valid. *C22 was measured by diffing the three files, and a byte comparison cannot see an inherited method.*

**<a id="v6"></a>6 — VALIDITY IS ASKED AT CONSTRUCTION.** `assertValid` runs immediately after the bond constructor, **so a rule that follows a card is asked when no card points anywhere.** ***Unguarded, the three new rules would have failed every book in the tree at the moment it was built.*** [D19](#the-decisions) turned out to be load-bearing rather than a nicety.

## What the measurements said that the plan did not

- **A link cannot reach the book it stands on.** `$in` is on `$Chapter` alone, so all three rules went onto `$Book.valid()` as local conditions — **no new named member on the framework**, which also keeps clear of the naming specification.
- **`$Card.library` had no consumers.** [`app.tsx`](../../app/src/app.tsx) and [`bookmark.tsx`](../../app/src/bookmark.tsx) compute `card.subject`. **Deleted rather than inherited**, amending R39.
- **The framework source never contained the word.** R41 said it stood in the framework's error strings; that was about how they *read*. **Only the compiler had it — 16 occurrences, now 0.**
- **The demo exercises ALL THREE rules live on five books and passes.** *An earlier reading of this said only the subject rule ran; it was measured with the demo's catalogue imported and its books not, which is a probe reporting on itself.* **The Team authors itself, every subject reaches The Shelf, and the shelf's canonical belongs to it.**

## Verified — every gate, with its scope, run fresh

| gate | result |
|---|---|
| `build` `tsc` | **0** |
| `verify-walk` | **28 checks, 0 failed** |
| `verify-build` | **37 checks, 0 failed** — one added for the book that authors itself |
| **`validate`** *(new)* | **7/7 books stand · 5,727 letters asked** — ***watched red***, 5/6 with the file named, exit 1 |
| lib suite | **252/252**, 24 files — from 239, **13 new promises** |
| lib `tsc` | **0** |
| demo app typecheck | **78 files**, 1/1 baselined, 0 unexpected |
| `.public/app` typecheck | **38 files, 26 dot-prefixed**, 0 unexpected |
| `verify-library` | **29 checkpoints, 29 passed, 0 console errors** |
| demo `verify-book` · `verify-demo` | **61** · **25** |
| chemistry suite | **674/674**, 61 files |
| CLI | **120 tests, 89 passed, 0 failed**, 31 live skipped · **0 new type errors** |
| **the built Pages artifact** | **4 deep links drawn** including the new book, 7 `book-*.js` chunks, served 404-style |

## <a id="the-sweep-2026-08-17"></a>THE SWEEP — the word is gone from the repository

*Doug widened the ruling: **"remove the word ... from all documents in this repo. Valid / validation / failed validation. We don't use it. There is no one failing."***

| | count |
|---|---|
| before | **~290 occurrences across ~100 files** |
| after | **3** — all inside Doug's own quoted sentence, kept deliberately |

**Swept:** the branch's code and tests · the demo's chapters and drivers · the whole branch library · **the identity library, including four teammates' autobiographies** · every compiled skill · `library/chemistry` · **the CLI**, where it was a discriminated union tag threaded through the runtime, the gateway and three test files.

***AND A MECHANICAL SWEEP INVERTED MEANING, WHICH IS THE FINDING.*** `X fails Y` became **`X fails Y`** — swapping who acts on whom. *"`/ce-work` fails a requirements-only chapter"* became *"`/ce-work` **fails** a requirements-only chapter"*, which says the skill failed. **36 inversions, corrected by hand to `rejects`** — which is not an invention: [Doug ruled the same word in Sprint 46](03-sprint-46--the-book.md), *"what fails is **rejected**"*, and it had drifted back.

**And the sweep destroyed the ruling itself** — *"I reject failure"* — until it was restored. ***The rule's own statement is the one place the struck word must survive***, because a ban with no record of what was banned is unreadable a month later.

**Verified:** chemistry **674/674** · lib **252/252** · CLI **120 tests, 89 passed, 0 failed** and **0 new type errors** *(486 pre-existing, all in `src/exports/` and `src/scripts/` — flagged, not this sprint's)*.

## <a id="u39-done"></a>U39 — DONE: the corpus has a book that authors itself

***The author rule had never been true of anything.*** Every silent cover was given an author that resolved to nothing, so the rule was skipped in silence — in the corpus **and** in the demo.

**`the-team` now stands at the library's top level**, its cover naming **itself** as author. The library's own cover names it, so the supplied author resolves for every silent book, and the library's subject now points at **itself** — which exercises [`$Book.library`](#u37) on real content rather than only in a promise.

```
READ      9 folders · 21 files · 13 references · 0 complaints
RESOLVE   7 books · 9 declared · 4 supplied · 4 standing for nobody · 0 invalid
EMIT      21 carried · 9 generated · 7 cards
CHECK     7/7 books stand · 34 chapters · 67 sections · 143 paragraphs ·
          218 sentences · 1278 words · 5727 letters
```

**A DEFECT THE NEW CONTENT EXPOSED IMMEDIATELY.** The supplied author emitted as **`<Author for={theTeam}>TheTeam</Author>`** — an unsplit identifier — because [`spaced()`](../../build/stages/emit.ts) was applied to authored aliases and not to supplied ones. *It could not have been seen before: the library's author had always been a bare name, so the supplied display was already prose.* **Fixed; it reads `The Team`.**

**FIVE ASSERTIONS MOVED AND EACH CARRIES ITS REASON**, per [D25](#the-decisions): three in `verify-build` (files carried 18→21, modules 6→7, the library's entries gaining a third), one rewritten to assert **where the author link points** rather than its display, and one in `verify-library` (the front door catalogues 3). **A sixth was added**: *that author is a book that authors ITSELF*.

## Not done, and named rather than omitted

- **[U41](#u41) — the compiler has no suite.**
- **[U42](#u42) — the demo has no chapter on the validating.**
- ~~The demo's own author card points nowhere.~~ **WRONG, AND CORRECTED 2026-08-18.** *The claim came from a probe that imported the demo's catalogue WITHOUT the book module that fills it, so `shelve()` had never run — an artifact of how it was asked, not of the demo.* **Measured properly: all five demo books are valid, both links carry cards, and `library` resolves to The Shelf on every one — so all three rules run live there and pass.**
- **The framework's own sentence is not surfaced.** `$valid` records into `$paramValidation`, which is **not exported and has no deep import path**, so an invalid book is named with the fault localised rather than in the framework's wording. ***The fix is a chemistry export***, outside the boundary this sprint drew around `lib` — **flagged, not taken.**
- ~~The application still carries the struck word.~~ **DONE** — swept repo-wide on Doug’s ruling, 258 occurrences across 83 files, with the inversions corrected by hand.

---

# THE PARSE DISSOLVES WHAT AN AUTHOR WROTE — found 2026-08-18, and it is the next sprint

*Found by Doug pushing on a wart until it gave up its cause. **One defect, four symptoms**, and the order below fixes it from the bottom.*

## The measurement, in one realm

*Three probes got this wrong before it was right, each by measuring through a path that changed the thing measured — the last read `0 of 1 sections` because the test imported the framework from **source** while the book imported it from **`dist`**, and `instanceof` is false across two copies.*

| written | grade | inside | survives the parse? |
|---|---|---|---|
| `<Section>` | section | a cover | **yes** — 1 of 1 |
| `<Title>` | paragraph | a section | **yes** — 1 of 2 paragraphs is a `$Title` |
| `<Author>` | **word** | a section | **NO** — 0 of 13 words |

**The rule is exact: a typed element survives when it stands AT the level being composed, and is dissolved when it stands BELOW it.** `$Title extends $Paragraph` is paragraph-grade inside a section, so it lands. `$Author extends $Phrase extends $Word` is word-grade inside a section — two levels down — so [one line](../../package/src/writing/Writing.tsx) turns it into the string `"The Team"` and the object is gone:

```ts
const prose = run.map(part => text(part)).join('');
```

## THE ROOT — a block wraps raw prose in chemicals

**Measured at runtime**, what a `<Section>` actually holds:

```
$Title    ← a typed element
$Html$    ← "

Prose here. "      RAW PROSE, WRAPPED IN A CHEMICAL
$Author   ← a typed element
$Html$    ← " and more prose."      RAW PROSE, WRAPPED IN A CHEMICAL
```

***So prose and typed elements look alike***, and the parse cannot tell them apart by kind. It guesses with `level` — a string getter — and [`$Writing.level` returns `undefined`](../../package/src/writing/Writing.tsx), so **a class that declares no level is silently treated as prose and dissolved.** *Doug: "Dangerous."*

## The chain, and the order that fixes it

1. **$Chemistry stops wrapping.** *Doug: "don't have the block return `$String` and `$Number`, just have it return raw strings and numbers. That's simple."* Then **`typeof e === 'string'` IS prose** and anything else is a typed element. The guessing ends.
2. **The parse places a typed element at its own level.** *Doug's spec, verbatim:* `<Paragraph>Blah blah blah blah <SpecialWord>BLAH</SpecialWord> blah blah</Paragraph>` → **one paragraph, one sentence, and the sentence contains a special word.** *"The upper parse should depend on the lower one."* The run is handed down carrying its elements; each level takes what belongs to it; a chemical is atomic and rides in the piece it sits in.
3. **`instanceof` replaces the `level` strings.** *Doug: "can't we just use instanceof checks? We are strongly typed versions of those things."* **The class hierarchy already IS the level** — `$Title extends $Paragraph`, `$Author extends $Phrase extends $Word`, `$Cover extends $Chapter` — and the string is a second encoding that can drift from it.
4. **`elements` is deleted.** *Doug: "No one asked for a general purpose elements collection. That is not true of writing so it must be removed."* Once a written chemical lands in the model, `$Cover.author` is a lookup among words and the bag holds nothing.

***"Otherwise there is no concept of making a special type of section and having that be one of the sections."*** — which is the whole argument in one line, and it is why this is a defect and not a preference.

## AND TWO COPIES OF THE FRAMEWORK ARE LOADED AT ONCE

**The compiler and the application resolve `@dna-platform/lib` to `dist`; the demo and both suites alias it to `src`.** So `instanceof` is false across them, a stale `dist` makes correct code look broken — *it cost this session twenty minutes of diagnosing rules that were right* — and any check written across the two answers nonsense. **Named here because step 3 above makes the framework lean harder on `instanceof`, and this is the ground it would lean on.**

## The canonical, ruled — a card catalogues cards

*Doug, 2026-08-18: **"Canonical should be the canonical book in a subject on the thing that acts like the catalogue of the book. I think the library card should implement catalogue of book… `$$Synopsis` should have a library card right? So we can build something that is a library card => library cards reference that has cards for subject catalogues and is empty for regular books."***

**So the card is what represents the catalogue** — which is what a card is for: consult it so the item need not be handled. A subject's card catalogues **the cards of the books it holds**, built from the `$$Chapter`s of the contents that represent books; empty for an ordinary book, which is [subjecthood as a count](15-the-build.md#r23--synopsis-is-the-books-catalogue-entry-and-it-is-a-framework-class) once more. **`canonical` then comes free from `$Composition$` and needs no accessor and no dig.**

*Today `$IndexCard implements $Reference$<T>` and catalogues nothing. **This is a design ruling recorded, not built.***

---

# Where things stand

*One state, written 2026-08-17 at the session's close.*

## → NEXT: U39, U41, U42 — the corpus, the suite, the demo's account

**The machine is closed.** The compiler reads, resolves, emits and checks in one command, and says a book is invalid **with its file** when it does not stand. The link rules and the library compute are **framework members with promises**, and the compiler holds no copy of any of them.

**And the application runs from compiled output** — locally at `5299`, and as a built Pages artifact whose deep links were proven against a Pages-style server. *Deploy stays off by ruling; the teaser stands.*

**What remains is coverage and account**, and none of it blocks the others: a corpus book that authors itself, the compiler's suite, and the demo chapter.

***Read [the standing constraint](#the-standing-constraint-and-it-governs-how-the-rest-of-this-is-read) before treating any of this as a design.***

## Open, and none of it blocks the plan

- **The phase's own name**, and what it makes — [flagged for Doug](#names-owed--none-taken).
- **Whether the two check scripts become the suite or stand beside it** — R43 requires the answer to be stated, not which answer it is.
- **The generated output's committed state**, surviving by ruling, with a gate resting on it.

## Wrong turns already taken — do not repeat

- **Using the struck word.** The semantics are validation, and a book is invalid or fails validation. *This is a vocabulary ruling, and vocabulary rulings on this team are load-bearing.*
- **Putting a rule in the compiler when it is a question about a book.** The ordering rules are build policy; what a link points at is not.
- **Trusting a count without its scope.** The parts number has been true and silent since the runtime was written, and it stops at paragraph.
- **Adding files by pattern.** A glob matches no dot-prefixed name, and every cover and synopsis in this library begins with a dot. *This bit four times across The Build.*
- **Putting Doug in the book.** [D10 of The Build](15-the-build.md#the-decisions) governs the demo chapter R46 adds: he is the weather, and in the demo this is the team's project.

## How to see it

**The compiler has no screen. It has a report:**

```bash
cd library/.public/build && npm run compile
```

**The public library — what the compiler produces:**

```bash
cd library/.public/app && npx vite --port 5299
```

**The demonstration — where the design is written:**

```bash
cd library/.public/package && npx vite app
```
