# How to Read This

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*(This report is not a list of complaints. It is a record of where the code stopped agreeing with itself, ordered so the disagreements can be settled one at a time — and it is written to be **edited**, never appended to. An entry that is resolved gets its resolution written into it, the way [Solutions](../solutions/.cover.md) closes a chapter, so a reader always meets the current state and never an archaeology of one.)*

## <a id="the-scope"></a>THE SCOPE — read this first, every time

***This section exists because it was missing, and its absence cost three wrong targets in one session.*** *Doug, 2026-08-22: **"How is it that you don't take notes on what you are working on, so that every turn you take a peek to see what the task is?"*** **The answer was that nothing here said what the task was, so every turn re-derived it and drifted.**

### What is being audited

| | | why |
|---|---|---|
| ***`lib`*** — [`package/src`](../../package/src/) | **THE SUBJECT** | *the framework built on the formalism; Doug's letter is about this* |
| **the compiler** — [`build/`](../../build/) | in scope | *named in the letter: "take notes on the lib code and the .public compiler code especially"* |
| **the demonstration** — [`package/app/`](../../package/app/) | ***READ, then NARROWED OUT*** | *"Now look at the demo. Does the demo work anymore?"* — **and on 2026-08-23, *"remove ones that aren't about the framework and compiler."*** |
| **the application** — [`app/`](../../app/) | ***READ, then NARROWED OUT*** | *the framework's first consumer* — **narrowed out in the same breath** |

> ***THE SCOPE NARROWED ONCE, on 2026-08-23, and this row records it rather than hiding it.*** **Both programs were read and audited; nine of their entries stand with an OUT OF SCOPE marker and their identifiers kept** — `O2` `O3` `O4` `O5` `O9` `O12` `I18` `I19` `I20`. *They travel to whichever sprint takes those programs, and [the ledger says so in one place](06-the-cleaning.md#the-rest).* **A finding does not stop being true when the scope moves; it stops being this sprint's work.**

### What is NOT

| | why not |
|---|---|
| ***`.claude/`*** — the team's identity and its Claude Desktop driver | ***not this project.*** **It is the identity repository, it travels between projects, and auditing it here is a different sprint in a different repo.** *An entry against it was written and struck in this session — [O10](02-organization.md#o10).* |
| **`.archive/`** | archived |
| **the `$Chemistry` Lab** — [`chemistry/package/app`](../../../chemistry/package/app/) | *`$Chemistry`'s own demonstration, not `lib`'s* |
| ***`$Chemistry` itself*** — [`chemistry/package/src`](../../../chemistry/package/src/) | **READ, not audited.** *It is compared against `lib` in [The Three Codebases](07-the-three-codebases.md), and a fault found there is recorded and executed on its own — **with the rebuild chain**, because a change in `$Chemistry` needs its `dist` rebuilt and then `lib`'s against it, or [the repository runs two copies that disagree](02-organization.md#o7).* |

### And the frame that decides what counts as a fault

***`$Chemistry` exists to build `lib`. Everything else in this repository will be written IN `lib`.*** **So `lib` being small is correct — it is a framework** — and the measure of a fault is not size but whether **the code says something the theory does not**, or whether **an implementer would have to fight it**.

## Why this book exists

*Doug, 2026-08-21: **"I am worried that I lost track of the code in this repository. My diagnosis is that we have lost the high level design goals and things have gotten muddy."*** **The diagnosis is correct and this book is the muddiness, itemized.**

**`lib` is an application development framework built on a first-order theory of semantics, identity, cognition and consciousness.** *Code that exemplifies a formalism has to be flawless in a way that most code does not*, because **every place the code says something the theory does not is a place a reader learns the theory wrong.** ***That is the standard every entry here is judged against, and it is the only one.***

## The four axes, which are Doug's own

*He named them in one line — **"from organization to names to semantics to implementation"** — and they turn out to be genuinely different kinds of fault with genuinely different fixes.*

| axis | asks | chapter |
|---|---|---|
| **organization** | is this in the right place, and is it alive at all | [Organization](02-organization.md) — `O1`… |
| **names** | does this word belong to libraries and books | [Names](03-names.md) — `N1`… |
| **semantics** | does the code say what the theory says | [Semantics](04-semantics.md) — `S1`… |
| **implementation** | is the mechanism obvious, precise, and swappable | [Implementation](05-implementation.md) — `I1`… |

**Each entry carries a stable identifier that never moves and never gets reused**, the same rule the [unit identifiers](../../../../.claude/library/our-skillset/29-ce-plan.md) keep. *A resolved entry keeps its number and gains its resolution; a deletion leaves a gap.*

## <a id="vocabulary"></a>The vocabulary this book may not use

***Struck 2026-08-22.*** *Doug: **"There is no such thing as a law. Remove law from ALL documentation and from all code and from all account memories… Do you mean validation? Are you referring to valid books? We care about their SPECIFICATION. VALIDATION MEANS THE ENFORCEMENT OF A SPECIFICATION."***

| struck | what was meant, and what to say instead |
|---|---|
| ***law*** | **a specification** — what a thing must be · **validation** — the enforcement of it · **a rule** — where neither fits |

**Zero uses remain in this book or in the account memories.** *341 remain across [Projection](../projection/.cover.md) and 93 in the team library, and those are a sweep BY SENSE rather than a substitution — some are a demo book's chapter title and some are prose about physics.*

*Previously struck on this branch and still struck:* ***ladder*** *(49 replacements),* ***emit*** *(replaced by `set`),* ***brain***, ***provenance***. *And* ***layout*** *was struck and then un-struck by Doug's own later usage, which is why a strike is recorded rather than assumed.*

## <a id="the-strata"></a>The strata — the framework has five, and they are datable

***This is the single most useful thing in the book, because it tells a reader which code to trust.*** **Every file's birth was read off `git`.**

| born | what | how it reads |
|---|---|---|
| **2026-07-21** | `index.ts` | the first thing |
| **2026-07-27** | `$Book` · `$Chapter` · `$Cover` · `$Synopsis` · `$Author` | the founding |
| **2026-07-31** | ***the writing spine*** — `$Writing` · `$Section` · `$Paragraph` · `$Sentence` · `$Word` · `$Letter` · `$Title` · `$Composition` · `$TableOfContents` · `$Referent` · `$Link` | ***the best code in the package*** |
| **2026-08-02/03** | `$Location` · `$Path` · `$Document` and the whole apparatus — `$Footer` · `$Footnote` · `$Denote` · `$Legend` · `$Key` · `$Bibliography` · `$Citation` · `$Cite` | **eight classes in one day** |
| **2026-08-07/12** | `$IndexCard` · `$CardCatalogue` · `$Canonical` · `$Figure` · `$Punctuation` · `$Caption` · `$Code` · `$Formula` · `$Phrase` · `$Snippet` | the filling-in |
| **2026-08-21** | ***`$Theme` · `$Emphasis` · `dressing.ts`*** | the newest |

## <a id="the-standard"></a>What the BEST stratum does — the standard the rest is held to

***The 2026-07-31 writing spine is the code to measure everything else against.*** **Four habits, and all four are visible in twenty lines of [`$Word`](../../package/src/writing/Word.tsx) and [`$Letter`](../../package/src/writing/Letter.tsx):**

1. **One class, one file, one template const.** *No exceptions anywhere in the package, then or now — this habit never broke.*
2. **`parts()` is the reading, and every getter is named for what it returns.** `words`, `letters`, `sentences`. **No getter answers a question its name does not ask.**
3. **`valid()` states the specification in a sentence a person could read aloud.** *"a word is one unbroken stretch, and this one carries whitespace."*
4. ***It does not draw at all.* The spine had no `view()` until 2026-08-19.**

***The fourth is the whole standard, and it is Doug's own ask arriving eight weeks early:*** *"members of the classes almost entirely focused on the semantics of what they represent and not what they look like."* **The July code already was. Everything in this report is a way the August code stopped being.**

## <a id="the-rushes"></a>The three rushes, datable to the commit

**RUSH ONE — 2026-08-10, commit `b91944e`.** `$Subject` was a zero-byte stub from July; that commit fills it with **36 lines** and creates `$Canonical` with **46**, both from `$Author`. ***Not three classes designed alike — one class copied twice in one sitting***, which is [S2](04-semantics.md#s2).

**RUSH TWO — 2026-08-12.** `$Code`, `$Formula`, `$Snippet`, `$Caption`, `$Phrase` in one day. **Two of the five contradict the account written about them** — [S3](04-semantics.md#s3) and [S4](04-semantics.md#s4).

**RUSH THREE — 2026-08-19/21, the theme and the binding.** ***Every drawing entry in this book lives here.*** **The stratum that draws is nine days old**, and it is the one Doug says ran away.

## <a id="the-instruments"></a>How the report was made — three instruments, and each found what the others could not

*Recorded because **the method is reusable and the first two passes were not enough**, which Doug had to say out loud.*

| pass | instrument | what only it could find |
|---|---|---|
| **first** | reading every file | structure — a mechanism that is wrong when you look at it |
| **second** | ***extracting all ~250 member names and judging each*** | vocabulary — a word that is wrong only next to the other words |
| **third** | ***`git` dates on every file · every member body diffed against every other · the folders judged*** | **time and death** — a copied class, a duplicated getter, ***a file nothing imports*** |

> *Doug, correcting the method: **"You did not review the code, write down and discuss patterns in the best parts of it, and note deviations in the newer ones, you did not identify the ones done in a rush."***

***Reading finds what a file says. Reading every member finds what the vocabulary says. Neither finds WHEN — and when is what separates a design from a hurry.***

**And a FIFTH instrument was missing until Doug named it: COMPARE A DIRECTORY AGAINST ITS SIBLINGS.** *This audit measured the compiler at "18 files, 1 class" and never once looked at its SHAPE* — **`lib` is organized by domain and `$Chemistry` by layer, and the compiler has no folders at all**, which is [O13](02-organization.md#o13) and was visible in one `ls`. ***Doug: "You need to learn how to see things like this."*** **A count of a directory is not a look at one.**

**And a fourth instrument came free with the third: CHURN.** *The six most-committed files in `lib` — `Section` 36, `TableOfContents` 34, `Chapter` 34, `Sentence` 33, `Paragraph` 33, `Book` 33 — **are the six with the most entries in this book.*** *A file edited thirty-six times is a file whose shape was never decided, and the faults are what accumulated in the gap.* **One command, and it points at the structural entries before any of them is read.**

## <a id="why-no-gate"></a>Why no gate caught any of this

***Every gate this branch runs is a count.*** A suite, a typecheck, a driver checkpoint, a `CHECK` of the model's levels. **All of them were green while every entry in this book was true.**

**A count cannot see a dead file, a copied class, a getter that duplicates the one above it, or a word that means two things.** *It can only see a number that moved.* ***That is why the report had to be commissioned rather than triggered***, and it is the argument for reading it again whenever a stratum gets added.

## What is NOT in this book

- **Defects.** *A thing that is simply wrong and can be fixed goes to [Solutions](../solutions/.cover.md)*, indexed by its symptom. **Doug drew this line himself:** *"it's a bug. And a good one. But it's not a wart in the framework."*
- **Sprint history.** *[Projection](../projection/.cover.md) indexes the work by time.* **This book indexes it by kind, and neither answers the other's question** — the same split [Solutions](../solutions/.cover.md) already keeps.
- **Anything about `$Chemistry`.** *One entry names its Lab app as the same fault at larger scale and takes nothing.*

## The name, which is a proxy

***"The Condition Report" is not Doug's word and is flagged for his correction.*** **A condition report is what a conservator writes about a volume before it is worked on** — an itemized record of every defect and questionable area, made so the work can be planned. *That is exactly this book's job, and it is the library's own term for it.*

**Doug's incumbent word is `wart`**, used four times in the letter that commissioned this. *A third candidate is **collation** — the bibliographic examination of a volume for missing leaves and cancels.* ***Raised, not taken.***
