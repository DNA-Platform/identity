# What Natural Means

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

***Doug asks for it constantly and it was never written down.*** **"I don't think you are asking yourself if things seem like they are implemented naturally."** *[How we find warts](../the-public-skillset/04-public-audit-code-patterns.md) is written; [how to tell a missing feature from a fact about the world](../the-public-skillset/04-public-audit-code-patterns.md#the-defence-is-the-finding) is written.* **This is the third thing, and it is the one the other two lean on** — *because "ceremony" and "ugly member" both mean **departure from the natural shape**, and neither reading works if that shape is a matter of taste.*

## <a id="the-three-tests"></a>THE THREE TESTS, and a thing is natural when it passes all three

### <a id="one"></a>1 · It says the thing in the DOMAIN's own words

**This library is closed under BOOKS.** *A book has a cover, a synopsis, a table of contents, chapters, an index, a footer.* **Every word in the code is a word a library actually uses**, and [inventing one is a standing offence](03-the-coding-style.md#no-jargon).

***The test is to say it out loud.*** **Doug, striking two names in one line: "Notice no Masthead and Colophon. Delete that from your records. Terrible domain words for comprehension."** *And earlier, the whole struck list — `law`, `ladder`, `mint`, `refusal`, `provenance`, `rail`, `seat`, `furniture`.* **Each of them was precise and each of them was wrong**, because a reader who knows books does not hold any of them.

> ***A NAME THAT NEEDS EXPLAINING IS A NAME THAT IS WRONG.*** *If you would have to teach the word before using it, the concept underneath it is probably wrong too — the word is only where it shows.*

**And the corollary that catches the subtler case:** *a word that is right for the domain and wrong for the LEVEL is also unnatural.* **`$Book` and `$Chapter` are the hierarchy the text LIVES IN; `$Letter` through `$Document` are levels of ONE text** — *[two hierarchies, and `below()` is the whole mechanism](../projection/61-sprint-55--the-two-ladders.md).* **Putting a chapter in the wrong one produced a class that had to disown its own class name.**

### <a id="two"></a>2 · It ASKS, where it had been deriving or storing

***Doug: "No you don't derive. You just set a book."*** **And [P35](../the-type-system/05-what-we-believe.md#the-machinery): "Nothing should be stored if it doesn't have to."** *These look contradictory and are not — they are the same rule pointed at two different failures.*

| the failure | what natural looks like |
|---|---|
| ***DERIVING what someone already knows*** | **`$Chapter.classes` searched the book's documents and compared title strings on every `className` read — 715 comparisons a draw.** *The book already walks every writing beneath it; it assigns them there, once* |
| ***STORING what can be asked*** | **`$Book` cached four `$Block`s filtered out of its own block.** *Doug: "We do NOT cache lots of blocks… we have NO CONTROL of what is below us"* |
| ***DECIDING BY POSITION*** | **a table's cells were "every composition that is not the heading".** *A cell is a kind; the table asks for its cells by type* |
| ***DECIDING BY NAME*** | **`reflection` held a roster of class-name strings.** *`is(part, $TypeOfChapter)` asks the type system the question the type system exists to answer* |

> ***THE TELL IS A ROSTER.*** **Any list of names, positions or exceptions inside a rule is a concept that has not been given a name yet** — *and the `:not(.pd-cover):not(.pd-table-of-contents):not(.pd-chapter)` chain in two themes is that same missing concept saying itself out loud twice.*

### <a id="three"></a>3 · It uses the mechanism that is already there

***The [global criterion](../../../../.claude/library/..teamsmanship/08-coding-policy.md), in Doug's words:*** **at each place, were the dependencies designed to support this primarily — and if the way to do it is NOT obvious, you are doing the wrong thing.**

**So before adding anything, ask what already does this.** *`below()` names the level beneath. `addType` puts a type on a block. `print` writes an element. `addClass` adds a class. `specifically` validates and may assign. `supplies` adds parts.* ***Every one of those was added because a sprint found itself writing the same four lines in forty files*** — **which is [the ceremony reading](../the-public-skillset/04-public-audit-code-patterns.md) arriving at its own conclusion.**

**And the inverse is the strongest signal in this document:**

> ***IF YOU NEED A NEW MEMBER TO SAY IT, YOU ARE PROBABLY DESCRIBING A FEATURE THE FRAMEWORK SHOULD HAVE*** — **not a member this class should carry.** *Doug: "Add NO members to achieve it."*

## <a id="the-measure"></a>HOW YOU KNOW YOU FOUND IT — a natural change SUBTRACTS

***This is the only test in this document that is a number, and it has never been wrong here.***

| the change | what it removed |
|---|---|
| **the two hierarchies** | `$Book` **214 lines → 65**, every positional rule and all four workaround lines gone |
| **a type derives its name from its class** | **62 hand-written `override name = '…'` lines deleted** |
| **one asking, named `is`** | **24 `instanceof` sites → 0** |
| **`addType` absorbing the bond preamble** | **57 bond constructors** |
| **`print` as the one method a kind overrides** | **11 `view()` overrides → 1**, and anchors no sheet could reach **65 → 0** |
| **the sheet addressing kinds** | element-naming selector groups **75 → 15** |

***A change that only ADDS is a change to be suspicious of.*** **It may still be right** — `$Cell` and `$Fold` both added a file — *but each of those deleted a rule that had been standing in for the missing kind*, **and if yours deletes nothing, say so out loud and expect to be asked why.**

## <a id="unnatural"></a>WHAT UNNATURAL LOOKS LIKE IN THIS CODEBASE — six shapes, each with a real one behind it

1. ***A kind-conditional on a base.*** **Doug: "so so so so important" — the base declares the seam, the kinds OVERRIDE.** *A `if (this instanceof X)` on a base class is the base knowing its own subclasses.*
2. ***A class that disowns its own class name.*** **`$Chapter` called `removeClass('pd-reference')` because its TYPE derives from `$TypeOfReference`.** *Ruled not a bug, and still the sound a wrong hierarchy makes.*
3. ***A member that exists for one caller.*** *[The property test](../../../../.claude/library/..teamsmanship/08-coding-policy.md): argumentless AND returns data.* **`canonical()` yes; `specify()` no; `where(match)` no.**
4. ***A hand-written element with no class.*** **A chapter's contents link was a bare `<a>` — the one element a sheet most wants to reach and the one it could not.** *The natural repair was not to add a class: it was to make the link a piece of writing, so the machinery that classes everything else classed it too.*
5. ***A rule that reaches past a class you own.*** **`@select` names CLASSES, never element types** — *Doug: "We put TONS of classes on there."* **An element type is legitimate only for something the library did not write.**
6. ***A second reading that can disagree with the first.*** **A drawer transcribing framework source; a card built by reading a living book; a theme value said twice.** *If two places can answer the same question, one of them will be wrong and nothing will say which.*

## <a id="the-coherence-test"></a>AND THE ONE THAT CATCHES WHAT THE RULES MISS

***Doug: "The thing is right when the code seems to cohere."***

**Read the class whole and ask whether it says ONE idea.** *A class can pass every rule in this branch and still be a bramble — members added one at a time, each for one caller, no shape left.* **That is [what the audit's per-class verdict is for](../the-public-skillset/04-public-audit-code-patterns.md#the-report-is-per-class), and it is the only positive test we have.**

***A last warning, because it is the failure mode of caring about this at all:*** **naturalness is not a licence to restructure.** *[Friction is the design speaking](../../../../.claude/library/..teamsmanship/08-coding-policy.md) — when a rule fights you, the rule is usually right and the shape underneath it is wrong.* **Three formats died in two days against a wrapper that "should" have worked**, and each attempt was a reasonable-looking natural idea that had not been measured. ***Prove the mechanism, not the output.***

***And the warning's other face, from Sprint 59:*** **when a design built to Doug's words fails its own promise, the failure is information about the reading, and the move is to HALT and re-hear the words — never to go into the framework to make the reading work.** *A scratchpad an entry wrote at its bond numbered nothing; the session went into `$Synthesis` with a probe and came back with 47 lines in and 42 out, green at 889, and Doug rolled it back: "You are allowed to fix a bug, not rewrite chemistry… If you understood what I asked for and it didn't work for what I was asking, that means HALT and redesign."* **The re-heard design — a collection that knows nothing, a fold keeping what it names, a reference reading what it refers to — needed no chemistry line at all** ([Sprint 59](../projection/65-sprint-59--the-population-that-never-drew.md#stand)). *The tell is the same as the six shapes above: a change in the framework that exists so that one reading of one design can stand.*
