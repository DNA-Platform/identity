# Sprint 43 — The Type of a Type

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md), [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** `part built, part designed` — brainstormed with Doug 2026-09-04/05, every ruling his, live. ***The chapter title and `at` and `prints` are PROXIES.***
- **workflow:** [feature](../../../../.claude/library/..teamsmanship/19-workflows.md)
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

---

**Type-hood stopped being something a class inherits and became something a writing carries.** `$TypeOfType` closes the loop at `this.type ??= this`; `$TypeOfAnnotation` sits above it; every hard `instanceof $Type` and `instanceof $Annotation` is gone from `src`. Alongside it: the make marker in `$Chemistry`, the `prints` registry deleted, and a silent formula defect found and fixed. **The card cleanup, `find`/`findOne` and the Synopsis itself are DESIGNED AND NOT BUILT** — [that is the next sprint](#where-things-stand).

# <a id="the-ask"></a>What Doug asked for, verbatim

> "Right so close the loop on typehood… let's get type of type. Implement this loosely coupled please and keep everything working"

> "I see, I think we do want to carry polymorphism on the types. And I think we want subject and author not to be types but rather just regular annotations, and we want losely coupled annotations but strongly courpled types"

> "Also, I think we want two methods on writing: **find** — takes type of type and returns all things inside that match… **findOne** — same but returns one or none and throws on many… This should dry up the code and it should compose"

> "Even paragraph can look for a type of paragraph annotation, and if it finds one that is its type, otherwise it creates a type of paragraph. In fact, all 7 core types can do that. That makes every type composible. Very very flexible"

> On the registry: *"remove all of those and hard code them in reflection. Just remove that concept. Not even remotely my idea. Absolutely awful"* · then *"why can't it know the codes"*

> On the make marker: *"What if a way to do check that news up an instance run through $ if you do a check with '!' as the third argument… Inside check, it would use $, so it would be very safe from a DI perspective."* And the narrowing: *"only use this when doing something close to param validation, but checking the elements of a block or the annotations in there for something, and if it's not found, creating one, that is definitely a situation to use it"*

> **The assignment workflow, which is now written law:** *"Have the specifically verify, always have types be overridden if someone inputs the right thing, always use a $ for DI, and then assign. In bond constructor: check if a type of that is right and if there is one, use that by assigning it to the right property. If there is none, get the component you want to use from $ using DI. Create one and assign. Then run specifically, which should validate the thing is assigned if necessary."*

> On the seven and the address: *"we use references for finding content. Annotations are largely not visible and shouldn't ever be without a type. When they are, they need to be given one of the 7 types and when they are they should have a regular location. That system lives on anchor tags, and doesn't grow"*

> *"writing has a writing type (type) and it can only be one of the 7 or a subclass of it. This is why the type of types have polymorphism and if they don't they need to. Do a peek."*

# <a id="built"></a>BUILT

***Gates at close: chemistry tsc 0 · 855/855 · 70 files. lib `src` tsc 0 · 519/519 · 25 files.***

## Type-hood is carried

**`$TypeOfType extends $TypeOfAnnotation extends $Type`, and `$TypeOfType`'s bond says `this.type ??= this`.** The loop closes on itself — measured, no regress: `names` reads `["Type"]`, and it answers as a type. *That is the self-cataloguing summit [the semantics of books](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) argues a total catalogue must have, arriving in the code for the first time.*

**`$Type`'s bond mints `$TypeOfType`; `$Annotation`'s mints `$TypeOfAnnotation`; `$TypeOfReference` was re-based onto `$TypeOfAnnotation`.** So the reference family answers as annotations through the TYPES rather than through the classes.

**Every hard check is gone.** `$Writing.types` asks `reflection.is(part, $TypeOfType)`; `classNames` and `$hasType` ask only whether a type is there. `reflection.is` was restructured to short-circuit on the carried type before it computes `types`, so nothing went quadratic — suite time unchanged at 5.7s.

***`annotations` reads the `annotation` flag rather than asking by type, and that is deliberate.*** A cover CARRYING a `$Title` briefly answered as an annotation, because `$Title` descends from `$TypeOfReference` and `reflection.is` consults carried types. **Annotation-hood is intrinsic; a host does not inherit it from what it carries.** *This is the third way the card inheritance bit this sprint.*

## The make marker

**Doug's design, built in `$Chemistry`.** One hack: `$ParamValidation.validateArgument` stopped being `private static`. Nothing else. ***It generalizes what a block already did*** — `check()` has always materialized an empty `$Block` when one is asked for and the argument is missing.

**Two forms.** The two-argument form makes one through `$`. The three-argument form keeps what fits and makes one otherwise. **Six promises in [`check-makes.test.tsx`](../../../chemistry/package/tests/abstraction/check-makes.test.tsx).**

**Applied at 27 seats in the five folders** — 25 bond type-defaults plus `$Style.theme` and the book's index. *Two statements that had to stay together became one that cannot come apart, and the `$`-fetch rule stopped being something to remember.* **The boundary is stated in the style book: the marker makes an EMPTY one; the eval form writes into one.** Ten sites create with children and keep the eval form.

## The print registry is deleted

***Doug: "Just remove that concept. Not even remotely my idea. Absolutely awful."*** **The registry, its export, and the seven registration lines are gone.**

- **The codes are hardcoded in reflection** beside the levels — `Bk`, `Cr`, `Sn`, `Ph`, `Se`, `Wd`, `Lr` — *and the letter-assembly that produced them is deleted.* **That closes a latent collision: `Cover` assembled to Chapter's code and `Bookmark` to Book's.** Only the seven have codes and the list does not grow.
- **Each level's type names its own reference** — `override get prints()` — in the file that owns both classes. `$Catalogue` reads it off the type.
- ***Reflection cannot hold the classes and this is structural:*** `$Writing` imports reflection, so nothing reflection imports may depend back on `$Writing`. Proved by breaking it — `$Article` is the first class to explode on the cycle.

## The formula defect — [Solutions 48](../solutions/48-the-name-a-sibling-had-already-filed.md)

**Two kinds under one formula, both registering the same name: the first resolved, the second silently stood as its base class.** One line in `$Chemical[cache]` returned early when any ANCESTOR held the key — and the ancestor held it only because a SIBLING had climbed. **The guard is deleted; chemistry stayed at 854 without it, which says nothing exercised it.**

***Doug rejected the wrong conclusion on sight*** — *"if so this is a bug… no one else registers them, and double registration shouldn't throw anyways."* **The style-book row that had already recorded it as a law is corrected.**

## The conventions

**[ch10](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md) gained four sections** — the make marker, the assignment workflow verbatim, the block-asking pair with its worked examples, and the bond that composes. **[ch15](../designing-inexplicable-phenomena/15-the-spelling-of-a-kind.md) gained three rows** and lost a stale one. **[ch11](../designing-inexplicable-phenomena/11-the-coding-style.md) gained three index rows.** All three covers re-edited with the TOC tool in the same act.

***Three stale passages in ch10 were corrected rather than left:*** the `canonicalForm` row, the `$$` bind sentence, and the whole `$Trait` section — all three describing members deleted in Sprints 41 and 42.

# <a id="raised"></a>Raised rather than hidden

***THE GATE WAS THE WRONG PROJECT FOR THE WHOLE SESSION.*** `npm run test` runs `tsc --noEmit -p src/tsconfig.json`; every "src tsc 0" reported before the close was the root `tsconfig.json`, **which includes only the archive and the old `tests/` folder and reaches `src` transitively.** *When the right project was finally run it showed **28 errors**, all from this session's own two changes.* **Both are fixed and the number is 0 — but the claim was wrong every time it was made.** [Solutions 49](../solutions/49-the-gate-that-checked-the-archive.md).

***`prints` on `$Type` is a rename forced by a collision, not a chosen name.*** It was `reference`, and `$CatalogueCard.reference` already exists — **which is the card inheritance biting a fourth time.** *The word is borrowed from the registry that was just deleted; Doug's to replace.*

***`reflection.at` is a proxy*** — my word for the level a type stands at, protected, used by `below` and `code`.

***`$$Synopsis` has no exported component***, on Doug's ruling: *"Let's worry about that when we need it in TOC."*

# <a id="names"></a>Every name here is a proxy

`at` · `prints` on `$Type` · this chapter's title. **Doug names framework things.**

# <a id="where-things-stand"></a>WHERE THINGS STAND

## The next action

***BRAINSTORM, then build: the card cleanup and `find`/`findOne`.*** Doug's ask, verbatim, and it is the sprint:

> "We need whatever else implemented — the findOne etc… and using check everywhere, implementing replacements — look for one type of X (like Paragraph) and if not found, specify type of paragraph. Other places like that in list and table and cell perhaps… **I want type of annotation, and loosely coupled annotations. That is the big one.** I want a type of index card, which wholes a title that refers somehow, and a type of card catalogue that prints an index card compositionally but specifically has a book reference if that is any different, and then **I want the subject, author and title as types of sections and annotations, each its own different formula chain**"

**And after that, and only after:** *"we will look at $Synopsis and decide if it's fine. I'm sure it is. There's nothing special about it other than it's a special type of chapter. But we can see if it's flexible and if we can design table of contents and index with the same flexibility."*

## The state, once

**COMPLETE:** `$TypeOfType` and `$TypeOfAnnotation` · every hard `instanceof $Type` and `instanceof $Annotation` gone from `src` · the make marker in chemistry with six promises · 27 seats converted · the print registry deleted and the codes hardcoded · Solutions 48 fixed and filed · the conventions written with worked examples.

**DESIGNED, NOT BUILT — and the design is [ch10 § find and findOne](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-block-asking-pair):** `find`/`findOne` on `$Writing` · the bond reorder (super first) at all seven levels and every kind · the card family respelled · `$Synopsis`'s own members.

**`$Synopsis` today** is the shell plus `$$Synopsis`, both types and both specifications, in Doug's declaration order, with **no print code**. *No `parenthetical`, no title member — neither was ruled.*

## The measurement that justifies `find`

***45 hand-written block scans across 15 files.*** Nine look for a `$Path`, nine for a `$Reference`, twenty filter the writing that is not parenthetical. **The same sentence, forty-five times, each free to drift.**

## Blocked, and on what

***The card cleanup is blocked on a brainstorm, and Doug said so.*** It touches `$IndexCard`, `$CatalogueCard`, `$Title`, `$Author`, `$Subject`, `$Cover` and the four `.wiki` books at once, and the shape he named — *"subject, author and title as types of sections and annotations, each its own different formula chain"* — has open questions the session did not close.

***The wiki application still does not run*** and has not since before Sprint 42 — one devDependency and two lines of vite config, Doug's call because it is an install. **Nothing this sprint has been seen in a browser.**

## Owed

- **Every synopsis file in `.wiki` fails the CHECK** — they open their section with a Title, and `$opensWithHeading` demands a `$TypeOfHeading`. Sprint 42 rewrote the four covers and left the four synopses.
- **A held reference is never specified.** Writing holding a `$$Chapter` with a book-shaped path is accepted; the same `$$Chapter` alone fails. `specify()` runs an annotation's `specifically` against the HOST and never descends into it. *Measured this sprint.*
- **A held reference prints its own address** — a card holding a `$$Chapter` draws the raw address on the page after its heading, because `$Type.view()` returns null but `$Reference.view()` draws an anchor.
- **`$Book.synopsis` and `$Book.tableOfContents`** still find by `instanceof` on the class — the last two.
- **`CoverSpecification.$writtenAsSections` deletes** the moment the cards become sections.
- **`$Letter` has a reference specification and no plain one** — the gap Doug named when he said every kind gets one even if empty. `Index`, `TableOfContents` and `Cover` are owed theirs too.

## Wrong turns, so they are not retried

- ***Do not register a new print code for a kind.*** R122 rules the `$$X` kinds to the seven levels; the address system lives on anchor tags and does not grow. *Proved that registering one mints the kind — and the mechanism is not the road.*
- ***Do not put the reference classes in reflection.*** `$Writing` imports reflection; the cycle is structural and `$Article` explodes on it first. *Tried, reverted the same hour.*
- ***Do not put them in `$Catalogue` either*** — `$Composition` imports `$Catalogue`, so every level class comes back through it before `$Composition` is defined.
- ***Do not make a card a section by re-basing `$IndexCard` alone.*** `reflection.is(card, $TypeOfSection)` still answers false, because `is` asks what a writing CARRIES and a card IS a type carrying none. *Measured.*
- ***Do not conclude a law from a measurement without reading the line that produced it.*** [Solutions 48](../solutions/48-the-name-a-sibling-had-already-filed.md) is that mistake, made and caught in one session.
- ***Do not run the root `tsconfig.json` in `lib` and call it the gate.*** It typechecks the archive. The gate is `npm run test`.
