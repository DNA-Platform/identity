# What Natural Means

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

***Doug asks for it constantly and it was never written down.*** **"I don't think you are asking yourself if things seem like they are implemented naturally."** *[How we find warts](../the-public-skillset/04-public-audit-code-patterns.md) is written; [how to tell a missing feature from a fact about the world](../the-public-skillset/04-public-audit-code-patterns.md#the-defence-is-the-finding) is written.* **This is the third thing, and it is the one the other two lean on** — *because "ceremony" and "ugly member" both mean **departure from the natural shape**, and neither reading works if that shape is a matter of taste.*

## <a id="no-fights"></a>NATURAL MEANS NO FIGHTS — ***the tolerance, given 2026-09-13***

***Doug, opening the wart hunt, and every sentence is the criterion:*** **"What is the biggest symptom of writing your own framework? That all of your implementations are natural. Having awkward problems with themes and layout? Fix them in .public so it supports the use case you want. You control the framework. Everything in the code can be natural everywhere."** · **"Writing everything — extending everything — in both component libraries and demos (.latex and .wiki) should look incredibly clean. The point is to make it easy on the implementer, both in code and conceptually. So when you look for warts, they locally look like a fight, or/and they trickle up to creating fights."** · **"Natural means no fights, warts create fights, and we have a near zero tolerance for any of it."** · **"Promises could encode warts or cause them. They are not gospel. This is the time to question them."**

### <a id="a-fight"></a>What a fight is — ***the implementer's experience, not a rule's***

**The three tests above say what natural IS. This says what unnatural FEELS LIKE to the person writing the next kind or the next chapter**, and it is the sense the hunt reads by: *code that fights is code where the implementer had to do something the framework should have done for them.*

| locally, in the code | conceptually, in the head |
|---|---|
| **saying a thing twice** — a tag in `definition` and again in `selector`; a heading synthesised in three bonds; a value in a theme and again in a format | **two names for one thing** — a header that is a strip in one door and a bar in another; `$Article` a chapter type in `src` and a book in the demo |
| **dodging a base seam** — overriding `view()` to add one attribute the base `view()` could not take; overriding `specifically()` to nothing because the base judged what it should not | **two grammars for one apparatus** — a table of contents written as mentions in one demo and as menus with hand-written anchors in the other |
| **waiving in two places** — a rule returned `false` on the specification and its supply returned unchanged on the type, because the demand is stated twice | **a record that says one thing and code that says another** — a style chapter claiming one `view()` override remains while eleven stand |
| **reaching through** — `(this.$of ?? this).parent as $Image`, a format finding the writing it is worn by through a cast | **a control that promises and does nothing** — a panel whose choices are written and read by nobody |
| **hand-writing what the framework writes** — `<img>` in a `print()` where `$Image` exists; `<div className="pd-body">` where every other box is a kind | **a demo inventing a kind** — a class in `.wiki` for something the library has a word for |
| **hiding what should not have been carried** — a theme setting `display: none` on an author the page never shows, where `print={false}` already says it | **positional selection** — `:nth-last-child(2)`, `:last-of-type`, a `:not()` roster: a concept nobody has named, selected by where it happens to stand |

***One test for all of them:*** **would the implementer of the next kind, the next theme, or the next chapter have to know this?** *If a thing has to be remembered rather than met, it is a fight.*

### <a id="trickle"></a>And a fight trickles — ***the base pays it once, everything beneath pays it forever***

**A fight in `writing/` is paid by every kind beneath it and by every book that writes one.** *The heading a section demands is stated twice in the base — a rule and a supply — so five kinds that carry no heading answer it twice, and the sixth will too.* **A fight in a kind is paid by every book that writes it.** *A format that must restate its writing's tag, or wrap it, is a fight every demo meets the day it dresses that kind.* ***The tell that a fight has trickled is the same thing done two ways in two demos*** — **the paper and the encyclopedia are the acceptance test of the base, and where they disagree about how to write one apparatus, the base did not say.**

### <a id="tolerance"></a>The tolerance is near zero, and the fix is always in `.public`

**"You control the framework."** *A fight is never patched where it is met — not in the kind, not in the theme, not in the demo.* **It is filed against `.public` as the feature the framework lacks, and the feature is built so that the fight disappears everywhere it was paid.** *A workaround with a comment explaining it is a wart that has learned to talk.* **The number is [the one above](#the-measure): a fix that subtracts is the right one, and a fix that adds a member to the place the fight was met is the fight moving house.**

### <a id="promises"></a>Promises are not gospel

**A promise can pin a wart** — *`book.test.tsx` promises that a book's first three chapters are its cover, its synopsis and its table BY POSITION, which is the fault Doug ruled away in Sprint 64 and it has been green since.* **A promise can cause one** — *a rule pinned on a limitation makes the limitation load-bearing, and the next session repairs around it rather than through it.* ***So the hunt reads the suite as source:*** **every promise is asked what it pins, and one that pins a fight is listed beside the fight, to be rewritten when the fight is fixed and never before.**

### <a id="a-fix"></a>A fix is judged as a wart too — ***and so is a design of his***

> **"You need to use principles to fix the warts. You need to decide your fix isn't creating new warts. Have we solved this so you would not call the changed code a wart? Its property as a wart is that it is non-native and doesn't produce code. Don't put warts over the most important classes in the framework to get rid of minor warts elsewhere."** · **"You always have to take my design and ask — does this work or does it create a wart."**

***And the first question at every wart is what the framework already has for it.*** **"definition isn't bad but if we have it, why aren't things using it? Is that the wart? … If the wart is we have the capacity to address it but classes don't, this is a cleanup with a documentation on how to use the writing class for extension."** *A new member proposed where a feature stands unused is the fix creating the wart.*

### <a id="deleting"></a>And deleting has the same test

> **"read and follow are essential reference function… One is an essential part of an interface, and is what allows one to get from chapter to document… See the difference between intentional but artifact of meeting interface and dead code? Don't destroy in an effort to remove warts."** · **"persist is chemistry. You need to see what is talking to the base. You need to use tools to be aware of all members on the chain when you decide something is dead… careful not to remove something that is still a sketch… delete when the semantics are bad and it's dead because the same thing is implemented elsewhere… be careful that you are not stealing the essence of something."**

**So:** *a member that meets an interface is intentional without a caller; a sketch keeps its essence; the chain beneath the base is read with tools before a member is called dead; and dead is what is implemented elsewhere and semantically wrong.*

### <a id="parenthetical"></a>Parenthetical is by design

> **"Printing true and false is not a wart unless there is a better way. Sometimes, to have everything closed under writing, we need annotations and parentheticals. But we must look at the semantics and say 'does this deserve to be parenthetical here. Is it some text for an illustration to keep it having text? That's okay. One day that could be an aria type implementation but for now it arises by design.' Case by case. You might have warts but be sure."**

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

## <a id="the-reach"></a>THE REACH — ***the fix is in the framework you control, and chemistry is that framework too · given 2026-09-13***

***Doug, at the end of the wart hunt's first day, after a session spent fighting theme rules with selectors, numbers and a class lift:*** **"All this problem ever needed to be was 'We need ThemeProvider support in $Chemistry' but instead you decided to battle instead of seeing out into the framework you control. This is the essential problem that creates warts. Not seeing your ability to reach and solve problems. We must endeavor to try and learn even if mistakes are often the sign for growth."** · *Earlier the same day:* **"We can have features in $Chemistry from its main consumer."** · *And to the chemistry session, when it asked how to spell what it built:* **"What we learned is that a consumer of our library is struggling and we want to make their life easier."**

**What the day looked like from inside, so the shape is recognisable next time.** *A theme rule beat a format by class count; a format restated an image's size to win; a base rule beat a card's grid; a header's wordmark was found by a path; a synopsis' text line by a `:not()`; the portal's gaps were subtracted from a recording.* **Each was met where it stood and fought there** — *a longer selector, a deleted rule, a number* — **and each fix bred the next, because they were all one problem wearing different selectors:** `.public` was hand-rolling a theme provider — `_theme` on the book and the document, a run-down setter, a walk up the tree, a registry standing in for context, the theme reaching the page as an element — **when the library chemistry wraps has one, and chemistry, a thin wrapper, had not exposed it.** *Named, it was one pitch in chemistry's chapter zero, and the source was built the same afternoon.*

**So the [tolerance rule above](#tolerance) has a second clause.** *"The fix is always in `.public`"* — **and when `.public` is re-implementing what the wrapped library gives, the fix is in chemistry, which is also ours.** ***Three tells that the answer is chemistry, each one seen that day:***

| the tell | what it looked like |
|---|---|
| **the consumer re-implements something the wrapped library has** | *a provider, a layer, a global sheet, prop forwarding — `.public` held a theme by hand where styled-components has `ThemeProvider`* |
| **a thin wrapper is missing part of the wrapped surface** | *Doug: "We are doing a pretty thin styled components wrapper, so shouldn't this be there?"* |
| **the compensation appears in every consumer** | *paths, rosters and restated values in both themes and both demos — the same fight paid in four places* |

***And the rule that follows:*** **when a fix is a fight, ask which layer the missing feature lives in — and the layers include chemistry.** *The move is then one sentence, filed as a pitch and handed off, not a battle; the session that hits the wall is the one that can see it, and seeing it is the whole of the ability Doug named.* **Record the mistake beside the reach: the mistake is the sign of the growth.**
