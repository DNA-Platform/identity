# The Margin

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **status:** `requirements-only` — ***brainstorm in progress, 2026-09-01, same session as sprints three and four. The chapter name is a PROXY from Doug's own sentence; his to rename.***
- **style:** [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md)

---

# <a id="rulings"></a>What Doug gave at the brainstorm, verbatim

| | |
|---|---|
| **the seat** | *"Annotations are just treated as annotations. But I think we should set them to parenthetical-true. **Try reference as annotation.**"* And the reason, which is the sprint's sentence: ***"They are in the MARGIN — the place where the writing is not, not the actual margin."*** |
| **the kinds' home** | *"In the book folder. A Bookmark is. A Highlight could technically not be perhaps but I think it belongs to a book."* |
| **$Page** | *"In `$Book`, let's also create a **`$Page`**, which is going to refer to a **chapter reference that scrolls down somewhere**. A `$Bookmark` perhaps can or cannot have a page."* — ***the page returns as a KIND OF REFERENCE, which keeps sprint 19's ruling whole: a page was never a container, and now it is literally a reference.*** |
| **two definitions owed** | *"We also have to define **referential persistence**, and I also think we need to define **focus**."* And the invariant behind focus: *"on the page, I think I would like there to **always be a piece of writing being read**. But where?"* |
| **$ReferenceCard** | *"Can you make a reference card as link a reference, and is a **type of reference (see if you can use inheritance)** but as a type of reference, it has a **list of other references, the first is the canonical**, and the others can be followed too? So it **decorates its first and exposes the rest**? … sets us up to **keep track of history** somewhere."* — ***sprint one's card input returns with its mechanics: first-is-canonical, position-encodes-canonicality again, and the card is where history lands.*** |
| **the Visitor's Guide** | *"What if we have a **Visitor's Guide, as the canonical book at the reference desk** of a library, and that **represents the current visitor**?"* — ***the reader's trail-book — all three `perhaps` — gets its name and its seat, and the reference desk is [the derivation's one never-worked-out thread](../the-semantics-of-books/.cover.md) arriving.*** |
| **the two mandatory books** | *"Or we have a library with a **mandatory autobiography and visitor's guide** which represent something like **the librarian — those organizing the information, and the one who is consuming it**!"* |
| **chapters evolving** | *"Maybe they are just **types of chapters and all types of chapters can evolve into different books**?"* — ***this is [the overflow law](../the-semantics-of-books/09-composition-and-collection.md) in his own words: when the payload outgrows the entry, containment turns into reference — a chapter outgrowing into a book.*** |
| **persistence** | **Prototype in-sprint** — ruled at the batch; the app's `remember`/`recall` drawer and `Kept` are the standing precedent. |
| **the next BIG thing, flagged not cut** | *"The next BIG thing that we never solved, is **default styling**. We will go back to the compiler, adapt all of this to that, and then find a way. But before we do, we are going to **invent a pragmatic styling system** for all of this?"* |

# <a id="rulings-2"></a>The second round, verbatim — and it is the sprint

| | |
|---|---|
| **the active book** | *"The semantics are that the user should focus, but without a book representing the user, we don't have that. **What if we always have an active book?** … Where do we want to put the active book? **What if we put it on writing. It has a book:** Is this writing a book? **(Binding might have to set parent)** — no? **go to parent recursively** and return, yet then use this."* — ***`book` on writing; the parent sanctioned at binding; self at the top, so something always stands.*** |
| **$Index** | *"Then we can make an **$Index**, in book, **as a type of chapter**, and **in the closest book, we can get the index**."* — *the persistence seat his meditation named, reachable from any writing through its book.* |
| **the four chapters** | *"In book, we have a **cover, a synopsis, a table of contents, and an index. Make them properties** — cover is first, synopsis is second, table is third, **index is last** in the list of chapters."* — ***roles encoded by position, no flags — his index-semantics ruling extended to the book's own anatomy.*** *"The various chapters should be made with… **the standard type pattern**."* |
| **the block of work** | *"**Do all four. They are relatively independent. I think they represent one block of work.**"* — $Page, $Bookmark, $Highlight, $ReferenceCard together. *"There, **plan that out, all this sprint**."* |
| **persistence** | **"Build it now"** — the prototype in-sprint, mechanism first, where-it-lives deferred. |

# <a id="requirements"></a>Requirements

*Numbered on from [sprint four's R52](34-the-index.md#requirements).*

<a id="r53"></a>**R53 · Doug.** ***Every piece of writing answers its `book`*** — itself if it is one, else its parent's book recursively, **itself at a parentless top**, so the answer never fails. *The parent is read from what the bond already adopts; binding may set it where missing; the parse never writes it ([Solutions 16](../solutions/16-the-parse-that-woke-its-own-parents.md)).* **Observable: a paragraph deep in a book answers that book; a lone sentence answers itself.**

<a id="r54"></a>**R54 · Doug.** ***There is always an active book*** — R53 makes it structural; the app names which; **the user's own book waits for the Visitor's Guide.** **Observable: focus never dangles — asking any writing for its book always answers.**

<a id="r55"></a>**R55 · Doug.** ***`$Index` is a chapter kind, standard type pattern, and the closest book's index is reachable from any writing.*** **Observable: `writing.book`'s index answers from any depth.**

<a id="r56"></a>**R56 · Doug.** ***A book's anatomy is four properties encoded by position:*** **cover first, synopsis second, table of contents third, index LAST** among its chapters — each a kind made with the standard type pattern. **Observable: the four properties answer the right chapters on a real book, by position alone.**

<a id="r57"></a>**R57 · Doug.** ***`$Page` (book folder): a reference to a chapter that scrolls down somewhere.*** *A bookmark may or may not have one.* **Observable: a page follows to its chapter and carries its further position.**

<a id="r58"></a>**R58 · Doug.** ***`$Bookmark` (book folder): the book-to-chapter mark, persisted.*** **Observable: mark a chapter, simulate a reload, recall — the very chapter answers.**

<a id="r59"></a>**R59 · Doug.** ***`$Highlight` (book folder): the span-of-letters mark*** — the terminal-span address made a kind. **Observable: a highlight re-follows to exactly its letters.**

<a id="r60"></a>**R60 · Doug.** ***`$ReferenceCard` extends `$Reference`*** *(inheritance tried, as asked)* ***— a list of references, the first canonical, decorating its first and exposing the rest.*** *The history seat.* **Observable: the card follows as its canonical; its auxiliaries are followable too.**

<a id="r61"></a>**R61 · Doug.** ***The persistence prototype: a persisted reference is its printed fragment plus its room***, remembered through the app's drawer, rehydrated by `follow`. ***Where it lives is deferred*** — *the index chapter and the Visitor's Guide are the filed candidates.* **Observable: the round trip through storage lands on the very writing.**

<a id="r62"></a>**R62 · derived.** ***Every new kind arrives by the standard type pattern*** — class, `$TypeOf`, specification, cache under its authored name — *one word, one file, in the folder ruled for it.*

# <a id="the-plan-35"></a>THE PLAN

**Decisions.** <a id="d19"></a>**D19** — the parent is READ from what the bond already adopts (chemistry's own chain); binding sets it only where missing; never a second parent field, never a parse-time write *(amended by D23 below: the parse ADOPTS its reduce-built intermediaries, and only those — Doug: "We need to make our parser give the right parent as needed")*. <a id="d20"></a>**D20** — roles by position, no flags: the four properties index into `chapters`. <a id="d21"></a>**D21** — the card decorates by delegation: its `path` and `read()` are its first's. <a id="d22"></a>**D22** — persistence goes behind the drawer, so the *where* stays one line to change.

# <a id="rulings-3"></a>The third round, verbatim — the parent graph ruled

| | |
|---|---|
| **D23, his yes** | adopt at the parse — the guarded line approved. |
| **D24, his yes** | the bound pull through `inside` — approved. |
| **prints are not special** | *"No, I don't link printed. It has a document. It is in writing. **Printing has no meaning here.** It would what, mean its rendered? What is unrendered writing?"* — D25 as proposed is DEAD; what replaced it is the ruling below. |
| **THE RULE** | *"**$ should have access to the element it is operating in NOW - assigned before bond constructor or render call. And anything created gets THAT parent. No running around assigning anything. This is the real right answer. If you are created in an `<X>` you are a child of X.**"* — implemented in chemistry: the eval form of `$` reads the **asker** (the framework's existing dynamic scope), raised now at the bond-constructor invocation itself. Chemistry 816/816, lib 366/366. |
| **the type-side member, dissolved** | *"Think hard about what I said because **I may have dramatically simplified the rest by having $ have the parent.** And don't make this part of the interface. This is a framework internal. It can be in there with a symbol though the class that represents can hold that symbol strongly typed."* — and he did simplify it: the type a bond constructor makes is created in the `<X>` it types, so `type.document` answers by ordinary parentage. **No member, no symbol needed yet; the collision question is moot.** |
| **the build lesson** | lib resolves chemistry to `dist/` — the asker change was green in chemistry's suite and invisible to lib until `npm run build`. Sprint 32's law re-taught: a runtime parent is a fact about a build. |

# <a id="rulings-4"></a>The fourth round, verbatim — the scaffolds come alive

| | |
|---|---|
| **book validation** | *"Add validation to book if you haven't - to TypeOfBook."* — `BookSpecification extends FileSpecification`, *'a book is written as chapters'*, softened to the document's own two-form precedent because his older refinement promise (a document carrying `<Type>Book</Type>` specifies clean) went red under the strict form. |
| **specifically at construction** | *"I think **specifically needs to be called in the constructor of writing**, because I want specifically to be **specifically able to do things**. Ponder that."* And the concern in full: *"I want specifically to be able to do things. **It modify. To enforce. But also to augment to enforce.** Like if it was enforcing something was an interface in C# and the interface has extension methods, it puts on those methods (don't be literal this is the idea that the consequences of being a type involve potential assignment or augmentation) — **and we can't do that if specifically is not actually run.**"* — ***Built as the type setter dispatching, guarded: the type acts at birth ON WRITING OF ITS OWN CANONICAL FORM.*** *The guard exists because the super-chain assigns intermediate types — a phrase passes through being typed as a word mid-construction, and the word's law failed its spaces. Carried types (annotation route) still act at bind and specify. The proof-promise: `acted` counts 1 at construction, 2 after specify.* |
| **the bookmark's mechanism** | *"A bookmark gets inserted somewhere, and then what - **grabs its parent, finds its chapter, keeps track of that by getting its index**, and then uses the page."* And on its laws: *"Isn't it an annotation? It shouldn't be failed. Annotations are meant to be skipped are they not? **It should hold a piece of content right?**"* — a bookmark holds its label and specifies clean where it stands. |
| **$PageFold** | *"Oh **make Page a PageFold?** (What is the thing you do when you fold the corner of a page as a bookmark? **that is the reference not the page itself**)"* — renamed; the English word he asked for is **dog-ear**, his to choose over PageFold. |
| **the index, removed from writing** | *"**If index is on composition it was never meant to be on writing.** Why would we have it accidentally implement that interface but not be composition? … Remove it."* — moved to `$Composition` (and declared on `$Catalogue`, the deliberate interface-implementer); the catalogue stops stamping references — **a printed reference's step lives in its path**; sprint 34's promise re-read accordingly. |
| **the location delegated** | *"**I need you to decide the UI interaction.** It can even find the nearest paragraph to the top of the page … and use that to anchor where it should be, but I don't know how to do that. **Brainstorm solutions that are elegant.**"* — the brainstorm lives in [the fold's position](#the-folds-position) below. |

# <a id="rulings-5"></a>The fifth round, verbatim — the nine typed references

| | |
|---|---|
| **the order** | *"I need you to add 9 classes and they are fun. **$$Letter - $$Book** - they mean reference to letter - reference to book. You can perhaps make: **$TypeOf$Book** / And make it a **`<Type>$Book</Type>`** … maybe we want the strong type that explicitly inherits from Reference. It should validate, in its specification, that **its path contains whatever thing it contains**. I would put the reference class under the class, the types one under the other, the specification one under the other."* |
| **the naming philosophy** | *"You can't export $$Chapter, but if you need one, if not chapter around, **feel free to name yours Chapter. Most people refer to things by reference as the thing. This is the essence of programming.** … We don't point at the word fish and say 'word for fish.' … We just say 'black hole.'"* — so no component export for the nine; a consumer derives `$($$Chapter)` and names it as the thing itself where the thing isn't around. |
| **use them elsewhere** | *"Do these nine help you implement any others? **Maybe the bookmark is a type of $chapter?** Make those work so that you can put them in code."* — `$Bookmark` and `$PageFold` both rebased onto `$$Chapter`; the bookmark's `read()` is now typed `Promise<$Chapter>`. |

**What was built.** Nine per-file trios, placed as he said — `$$X` under `$X`, `$TypeOf$X` under `$TypeOfX`, `$XSpecification` under the level's specification — cached as `$X` so `<Type>$Book</Type>` carries the meaning; `$landsOnIt` checks the path's terminal step names the level's code AND anything held stands as the level; the typed `read()` goes **through `$$`** (verify-and-coerce, never a cast). ***A framework fact worth keeping: formula substitution lives in `augment` — the RENDER path — so a carried `<Type>$Book</Type>` resolves when drawn, never in a bare eval; the carried-type promise rides `drawn()` like all its siblings.***

# <a id="rulings-6"></a>The sixth round — the nine put to work

| | |
|---|---|
| **typed printing, his yes** | *"Yeah have the catalogues print typed references, that's good."* — each level file registers its reference class by code into `prints` (a registry beside `$Reference`, no central roster, no import cycle); the catalogue looks up by the step code it already computes. A sentence's catalogue hands out `$$Word`s; a book's, `$$Chapter`s. |
| **composition as a type system, his sentences** | *"We can use composition as a type system. We've managed to build our very own programming languagey thing here. … Through canonicals and encoding, **if you can throw it into writing and find it, it's like a property.** And the things in there do something."* And then the recognition: *"It's **generic in its way. Linear. Each thing is constructed. There is a sort of reading rule. It's like transcribed.** It is interesting."* — ***the platform's name arrives at its meaning: the writing is the strand, the parse is the reading rule, the types are what gets expressed. A compound candidate for the close.*** |
| **beginning and ending** | *"Make the $Highlight have the **beginning and ending** properties (end is taken right and ending is storyish so we allow it for art **but only I can make that kind of art**)."* — his names; `read()` rewritten to go through them. |
| **the highlight, redesigned** | *"Did we do highlight? It can be **a dynamically typed pair of references of the same kind.** Something like that."* — `$Highlight` holds a `pair` (his word); its kind is whatever the two ends agree on; disagreement failed: *'a highlight is a pair of references of the same kind, and these two ends disagree.'* `read()` re-follows the stretch between the ends through the parent's catalogue. ***A highlight is pure margin — it says nothing of its own — so the has-characters and has-writing laws stand down when the pair stands, the same shape his bookmark ruling set.*** |

# <a id="rulings-7"></a>The seventh round, verbatim — three kinds, a rename, a parser trick, a challenge

| | |
|---|---|
| **the order** | *"I think we need **$ReferenceCard, $List and $Table**. Should be enough."* — and the innovation-pace note: *"I know we are adding a lot to this sprint, but I feel like innovation is happening fast now."* |
| **the trait** | *"**What if we rename attribute to Trait?** We might decide to go to reference and make a **`<Trait>Card</Trait>`** and it has a $ReferenceCard$ trait and **it has to be a type of reference to have the trait**, and the interface exposes a list of references of any kind, and it itself has a canonical one which the ReferenceCard type can take to be its first, and **it as a reference is its first. So it decorates the first and it provides access to the rest.**"* — renamed everywhere, the member with it (`attributes` → `traits`); `$$` learned to stand a writing by its worn traits; the card built as class AND trait. |
| **the newline trick** | *"Is there a way that we can have a non-canonical sentence also be something on its own line … So that **new lines are optional separators for paragraphs too, but the sentence that ends with the new line as punctuation is not a canonical sentence.** The List behaves exactly like a paragraph and can probably inherit from $Paragraph."* — the paragraph's reduce splits lines, the sentence keeps its newline and declines canonicality; the section learned the symmetric blank-line split. |
| **the table** | *"And then a table, can it be a section? And it's just like a List but for paragraphs."* — rows only; cells not ruled, deferred. A table needs no title — the section's title law stands down for it. |
| **cover alone is ordered** | *"**Make Cover the only thing on book that needs to be ordered. The rest just find by type.**"* — synopsis and table of contents found by kind, any order; a plain book has a cover because something is first, and nothing else. |
| **no style on HTML** | *"**Oh don't ever put style on HTML!!**"* and *"**Please test with styled components. $Chemistry goes with styled components.**"* — chemistry's dev panels rewritten as styled components, tested (818/818), dist rebuilt; both rules filed in [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md#styling). |
| **the spec convention** | *"Write down in branch or in compound files … in findable places that **we always use the spec to show examples of the various use cases of each of our framework classes.**"* — filed in [The Coding Style](../designing-inexplicable-phenomena/11-the-coding-style.md#the-spec-convention); six new examples enrolled (card, trait, list ×2, table ×2), the roster count 44 → 50. |
| **the flexibility ladder, his articulation** | *"**Most times people subclass the strong version, and sometimes their subclass uses the type to avoid that, and maybe very occasionally they need to make a new specification … and then really rarely they need to decorate the specification to really have control over what changes.** It is very flexible but I don't think consumers will use it all."* — a compound candidate: the consumer's four rungs, told from the outside in. |
| **the meta-level** | *"We are making a beautiful codebase for **writing as the object model**. How many people operate at that meta-level? It's a fun object model and we are playful with it. And it will be **a UI framework for any sort of application**."* |

**The `.spec` debt, enumerated so it cannot hide:** the nine `$$X` typed references, `$Cover`/`$Synopsis`/`$TableOfContents`/`$Index`, `$PageFold`, `$Bookmark`, `$Highlight` still owe their `.spec` examples under the new convention.

# <a id="rulings-8"></a>The eighth round, verbatim — the basic view, and Wikipedia worn honestly

| | |
|---|---|
| **the step** | *"Do a bare bones, styleless version here, where it kind of looks like **wikipedia without a stylesheet** … writing them will show you if you can achieve what you want. … **You know what? Don't remove the styled components. Be very minimal and deliberate. Make the basic version look like wikipedia. A chapter is like an article.**"* |
| **rip it off, organized like him** | *"Default this can rip off wikipedia. No need for you to not do it intentionally. … **You can make an encyclopedia folder** and put the wikipedia styled components in there … **Just organize it like me.**"* — `src/encyclopedia/`, one word per file, Wikipedia's own vocabulary and numbers: **Body** (the mw-body reading column), **Article**, **Heading** (the serif ruled h2), **Output** (mw-parser-output), **Prose**, **Bullets**, **Wikitable** + **Cell**, **Anchor** (#3366cc), **Columns** (the category index). |
| **the full match** | *"Have fun, **match everything to its associated thing in Wikipedia. Go up to document. And for a file? Maybe that can look like an index page** on wikipedia."* — book→reading column, chapter→article, document→parser output, paragraph→prose, title→ruled heading, list→bullets, table→wikitable, reference→blue anchor, **file→category columns** (a plain file only — a book is a file that outgrew the index look, by constructor identity). |
| **overridable, not committed** | *"It is still the **default style of an app. It needs to be overridable. It can't be committed to.**"* and then the question that found the seat: *"**Is there a way to introduce this in directly? So that it is part of inheritance and overridable?**"* — ***the answer was already in chemistry: `frame()`, the render template method — "override frame() to WRAP what is drawn." Dress lives in `frame()` overrides, structure stays in `view()`; a subclass inherits the garment through the chain, replaces it by overriding, sheds it by not calling super — Title and List do exactly that to escape the paragraph's prose wrap.*** |
| **styled, promised** | four view promises with computed styles (the ruled heading `#a2a9b1`, the 60em column, the 3-column index, the `#3366cc` anchor) — jsdom computes only attached hosts, so the promises attach before asking. |

# <a id="rulings-9"></a>The ninth round, verbatim — writing becomes editable

| | |
|---|---|
| **the design, whole** | *"Let's do persistence. So it isn't hard. How do we edit a document. We add sections. Ah! **Composition should be editable. Append is the easy way** … an append method that adds elements to blocks? **It should check inline-ness. Maybe it stores them in an edits collection. This can be on writing and we can enforce the type.** If it has a type, it has to be consistent … **we need to update the spec to specify edits as well, and then different types can weigh in. And then adjust the views to put the edits below. Remember annotations are allowed to go in that are untyped or the right type.**"* |
| **the refinements** | *"The **parts need to enumerate the edits** and edits need to do things like **keep their indexes. Maybe edit needs to be protected?**"* — parts enumerate (the parser's tokens read block **plus edits**, and `append` forgets the parse); indexes stamp by position and hold; the collection went protected behind a read-only face, `append` the only door. |
| **what was built** | `append(...written)` on `$Writing` — checks the line (*'an edit keeps to the line it joins'*), **adopts** parentless edits (the document walk holds through an appended section), forgets the parse; `copy` and `annotations` read through the edits; the base view draws edits **below**; **`$editedInKind`** joins the writing laws — non-parenthetical edits must stand as the type's `writtenAs`, parenthetical annotations pass untyped, and subclass specifications can weigh in by overriding. Five promises: the appended section is a part with its index answering its document, the wrong-kind edit failed in the law's words, the margin growing without the copy moving, the line-break failure, the edits drawn below. |
| **still open in persistence** | the STORING half — the edited document round-tripping through the drawer — remains the sprint's persistence tail. |

# <a id="rulings-10"></a>The tenth round, verbatim — the references section, and the polish of the editing seat

| | |
|---|---|
| **$References** | *"Let's add a **$References section in the reference folder** in the normal way and **like the index in book, a document has to have one. Make it parenthetical.** … Give a property on document and **specify that it needs to be at the end** etc… Have document create one if it doesn't exist and **stick it in its block**."* — built; and the creation found its true seat when 29 carried-type fixtures failed: ***`$TypeOfDocument.specifically` AUGMENTS TO ENFORCE*** — his own earlier sentence — creating the section on any writing being a document, then checking; one seat serves the bond, the carried type, and the `$$` bind. *'A document ends with its references'* joined the document's law. |
| **$print** | *"Make a **$print boolean getter and setter on Writing which flips parenthetical** to the boolean. This will help us."* — built, promised. |
| **use() and serialization** | *"**An active reference goes to document().references().append. Reference can have a use method** which puts it in there. And in the references section, **on change in some way, we need to serialize it.**"* — `use()` walks to the document and files the reference; `serialized` on `$References` is a getter over reactive state, so chemistry recomputes it on every change — the 'in some way'. |
| **the audit, and its catch** | *"Make sure writing code is **elegant and not dangerous in a live reactive context**."* — the audit caught the real one: `$Writing.view` rendered `$(this.block)` unguarded, and the blockless References detonated every drawn document; the view now draws nothing gracefully. `carried` struck at his order — the backing field is **`typed`**, the past-participle pattern his `edited` set. |
| **edits sealed** | *"**Dangerous, we are trying to prevent breaking references. The edits should be protected because only append should be doing anything.**"* — the getter died (a readonly type is a promise the runtime doesn't keep); the machinery that must read reaches past protected **once, named** (`edited(writing)`), and `append` became idempotent for instances so nothing needs to peek before appending. |
| **editing moved home** | *"**Can you move all editing to composition? Just put append on the interface** and move the rest to that class."* — `append` on `$Composition$`, the machinery on `$Composition` (field, copy and view overrides), writing's base surface shrunk back; the printed catalogue, the deliberate interface-implementer, fails: *'a catalogue is printed, not edited.'* |
| **grouped by similarity** | *"Keep coding conventions and **group in writing by similarity** … annotations and traits and type — all properties and similar. Maybe they should live together?"* — `$Writing` reorganized: the text family, the meaning family (type, annotations, traits, means, `$print`), the place family, protected members where the order puts them. |

# <a id="persistence-thought"></a>The persistence thought, as ordered after the basic view

*His sketch, verbatim: "We need the concept of a **singleton and that is the document. Can we write to it? We have access to its block.** So we might end up adding **functions to mutate writing for the first time**. When we do, it needs to trigger **clearing caches** if there are and **redoing annotations** and such."*

**The mechanics as they stand tonight:** `block.$elements` is a reactive prop on the block chemical, so writing to it repaints natively — chemistry does that part for free. A mutation therefore needs exactly three acts: **write the block**, **forget the parse** (the parser's WeakMap holds the mutated writing's parts; it needs a forget-one seat — ancestors keep their memos because the mutated writing's identity is unchanged), and **re-derive the annotations** (the type reduce that the bond ran once). Adoption and renumbering come free on the next parse — D23 already adopts, and the numbering law renumbers the mutated level only. ***The names of the mutation members are Doug's to give; nothing is built.***

# <a id="the-folds-position"></a>The fold's position — the brainstorm he asked for

**The elegant form: the fold stores an ADDRESS, never pixels.** Three mechanisms considered: **(1) the reading line** — a virtual line about a third down the viewport, an `IntersectionObserver` whose root margin shrinks the root to that band, so the browser itself announces which paragraph crosses it; the paragraph being read is always known, which *defines focus* — his invariant, "always a piece of writing being read," becomes a live member. **(2) top-crossing search** — on throttled scroll, binary-search the anchors' offsets for the first at the top; simplest, no observer, but it polls. **(3) address plus remainder** — the fold keeps the nearest paragraph's fragment address and a small within-paragraph fraction; restoring is `scrollIntoView` plus the fraction. ***The recommendation is 1 + 3: the observer maintains the live reading address (focus); folding the corner stores that address with its fraction; pixels are derived per device on arrival and never persisted.*** Pixels die on reflow; addresses name writing, not geometry.

# <a id="chemistry-research"></a>The chemistry research — the parent graph, measured 2026-09-01

*Doug's questions, verbatim: "make sure everything would have a document if the thing starts `<Document>{everything else}</Document>` — Shouldn't that guarantee it? If bound, you can pull the parent from the inside right?" · "We need to make our parser give the right parent as needed. You memoize it. That really is dangerous if you memoize chemicals. You can memoize something intermediary. But chemicals have lifetimes." · "Check the document assumption. Find the places where parent is assigned. Look for places where you would fail. Make sure parent reads through the block. The block isn't real right?"*

**Where parent is assigned — the complete roster** (measured by grep, read in source): the `$Chemical` constructor (**born its own parent**, [chemical.ts:1072](../../../chemistry/package/src/abstraction/chemical.ts)); the public `parent` setter, which **rewires the catalyst graph on join** (chemical.ts:1035–1051); `bind(chemical, parent)` — the bond path (chemical.ts:1191); the clone in the facade path (chemical.ts:1148); the render-context derive (particle.ts:377); and `belongs()` — [the assignment](../../../chemistry/.lib/composition/14-the-assignment.md) threading lineage, **only when the chemical has none of its own** (particle.ts:505–512).

**The document assumption HOLDS on the bond path — P1 measured.** `$Synthesis.process` binds every child element to *the interpreting chemical*: `const parent = ($Eval && parentFor) || this._chemical` (chemical.ts:451). A deep letter under a built `<Document>` answers the Document as its `document`. ✓

**The block is a convenience, confirmed — P4.** Chemistry's own law: *"an element in a block reaches outside the block for its parent"* ([the catalyst graph](../../../chemistry/.lib/composition/08-catalyst-graph.md)). Measured: a word written in a sentence's block has `parent === the sentence`, never the block. The walk needs no block hop.

**The failure places are all the eval form.** `$(<X/>)` with no parent runs the synthesis under a throwaway `$Eval` host, and the child's parent IS that host — the walk survives only because `$Eval` is not `$Writing`. Measured: **P2** — a document written as loose prose gets a reduce-built `$Section` parented to `$Eval`, so `section.document === the section`, not the document *(the paragraphs inside keep `parent === $Document` — identity of the held writings is preserved)*. **P3** — a `$$`-made stand-in is `$Eval`-rooted and answers itself; the inside carries the real place. **P4** — a printed reference and a printed catalogue are `$Eval`-rooted and answer themselves.

**The memoization verdict.** The parser's WeakMap holds two populations. The **accepted** parts are the block's own residents, bond-parented to the composition — memoizing them is memoizing a *filter over the block*, keyed by the composition, dying with it: **safe**. The **reduce-built** parts are the danger Doug named: `$Eval`-rooted chemicals, each its own reaction system, held alive only by the memo — *chemicals with lifetimes, held outside any graph*. **The cure and D23 are one move:** when the parse adopts them (`part.parent = of`, only where no `$Writing` parent stands — chemistry's never-move-an-established-parent law), the `parent` setter enrolls them in the composition's own catalyst graph, so the memo holds members of its key's graph — one lifetime, no zombie. Identity stability of `parts()` is load-bearing (the untouched-by-cataloguing promise, the one-field index), so dropping the memo was rejected; adoption makes it honest instead.

**Decisions from the research.** <a id="d23"></a>**D23** — the parse adopts its reduce-built intermediaries: `parent = of` where no `$Writing` parent stands, never moving one composition established. <a id="d24"></a>**D24** — the bound pull, Doug's own line: `document` routes through `inside` when bound. <a id="d25"></a>**D25 · proposed, needs his yes** — adoption at the print: a printed catalogue takes the composition it catalogues as parent, a printed reference takes its catalogue. <a id="open-document-member"></a>**OPEN with Doug:** the type-side `document` member — *"Document is not a boolean, and types should have this. We assign them"* — a `$Type` IS writing, so a member named `document` on the type collides with the walk member every writing now carries; the shape and the name are his call.

**Units.** **U41** book-on-writing (the walk, self at top) · **U42** the four chapter kinds + the book's position properties · **U43** `$Page` · **U44** `$Bookmark` + the persistence round trip · **U45** `$Highlight` · **U46** `$ReferenceCard`. *Scenarios ride the AEs; the four kinds are one block, relatively independent, as ruled.*

**The demo, beside.** **AE19** the book-walk (deep paragraph → its book; lone sentence → itself) · **AE20** the four properties by position on a real book · **AE21** the bookmark's storage round trip · **AE22** the highlight's span re-followed to the very letters · **AE23** the card as its canonical, auxiliaries followable · **AE24** the index reachable from any depth.

# <a id="todo"></a>The sprint's todo

*The plan's working order, ending the chapter as asked. tsc 0 · 361/361 at writing; the four roster reds from `$terminates` fixed this pass.*

- [x] The parent graph verified against chemistry — P1–P5 measured, the assignment roster complete, the block confirmed a convenience
- [x] The memoization verdict reached: accepted parts safe, reduce-built parts the danger, adoption the cure (D23)
- [x] The four `$terminates` roster tests green — the label joins three lists, the count 7 → 8
- [x] **D23** the parser adopts reduce-built parts — his yes, built, green
- [x] **D24** the bound pull: `document` through `inside` — his yes, built, green
- [x] **D25 superseded by THE RULE**: created in an `<X>`, a child of X — the eval form of `$` reads the asker; chemistry 816/816, lib 366/366, five active-document promises added
- [x] The type-side `document` member DISSOLVED by the rule — the type is created in the writing it types; no member, no symbol needed
- [x] **U42** `$Cover` · `$Synopsis` · `$TableOfContents` · `$Index` built by the standard type pattern, four one-word files in the book folder; `cover`/`synopsis`/`tableOfContents` answer by position (green, 370/370) — **the fourth property BLOCKED on a name: `index` on `$Book` would shadow `$Writing.index`, the one-field position number of sprint 34's law; the name is Doug's**
- [x] **U43** `$Page` — a reference following to its chapter, `location` (Doug's name) modeling the view (green, 372/372)
- [x] **U44** `$Bookmark` — his mechanism verbatim: inserted somewhere, grabs its parent, finds its chapter; `read()` answers the chapter, the round trip runs printed-fragment → drawer → `follow` back to the very chapter; `page?` optional as ruled. *The drawer is a Map behind the seam for now — D22 keeps the where one line.* (green, 380/380)
- [x] **U45** `$Highlight` — carries its span (`Lr:1-3`) and re-follows through its parent's catalogue to exactly its letters (green)
- [x] **Book validation** on `$TypeOfBook` at his order — `BookSpecification extends FileSpecification`, *'a book is written as chapters'*; the rule follows the document's own two-form precedent (chapters, or documents that could be them), because the refinement promise — a document carrying `<Type>Book</Type>` specifies clean — is his older design and both must stand
- [ ] **U46** `$ReferenceCard extends $Reference` — first canonical, decorates its first, exposes the rest
- [x] `specifically` CALLED IN THE CONSTRUCTOR of writing — the type setter dispatches, guarded to the type's own canonical form; proof-promise green (382/382)
- [x] The index moved off writing onto composition at his order; references read their step from their path
- [x] `$Page` renamed `$PageFold` at his order — the dog-ear word owed to him
- [x] Book validation, bookmark content, the fold's position brainstormed and recorded
- [x] **The nine typed references** `$$Letter`–`$$Book`, per-file trios in his placement, `<Type>$X</Type>` carried route green through `drawn()`; `$Bookmark` and `$PageFold` rebased onto `$$Chapter` (green, 387/387)
- [x] The catalogue prints TYPED references — the `prints` registry, each level registering its own (his yes; green, 389/389)
- [x] `$Highlight` redesigned to his sentence: a dynamically typed pair of references of the same kind; pure-margin leniency following the bookmark ruling
- [x] **U46** `$ReferenceCard` — a list of references, first canonical, decorates its first (path and read), exposes the rest; AND the trait route: `$Trait` (né Attribute), `<Trait>Card</Trait>`, `$$` standing by worn traits (green)
- [x] `$List` (a paragraph of bullets) and `$Table` (a section of rows) with the newline trick — lines are sentences, newline-stopped sentences are not canonical, blank lines split paragraphs
- [x] Cover alone ordered; synopsis and table of contents found by kind
- [x] No-style-on-HTML + styled-components rules executed and filed; chemistry 818/818
- [x] The spec convention filed in the style chapter; six new `.spec` examples enrolled, count 44 → 50 (lib 414/414)
- [x] **The `.spec` debt CLEARED** — seventeen examples enrolled (nine `$$X` reference examples beside their words, the four chapter kinds, the fold, the bookmark, the highlight's pair, the references section), roster 50 → 67, every one drawing, specifying, and composing
- [x] **The encyclopedia look extended to the references section** — printed, it wears the ruled Heading and Wikipedia's numbered `Cited` list; silent in the margin until `$print` flips it (promised, 480/480)
- [ ] NEXT per Doug: `$Index` — and *"a table of references in the document at the back, and a **Citations section** that might be to document what Index will be to book"*
- [ ] **AE19–AE24** probes beside the units, honest numbers at each gate
- [ ] Focus defined; the Visitor's Guide / librarian-and-visitor shape designed with Doug
- [ ] Close: compound candidates filed (the `$Eval`-root finding wants a Solutions chapter), covers via the tool, push on Doug's word

# <a id="checklist"></a>The checklist

- [x] The list reported from the record; the brainstorm opened on his three questions
- [x] The reference-as-annotation exploration run against the held code — what breaks, what it buys, the parenthetical/annotation orthogonality found
- [x] **The experiment: `$Reference extends $Annotation`, parenthetical true — GREEN ON THE FIRST RUN, tsc 0 · 21 files · 360/360, zero test edits.** *The ground was pre-laid by his own rulings: `means` never cared about parentheticality, the container draws the link since the wrap ruling, and the catalogue now reads its references straight off its block — a catalogue is a writing whose margin is full of references.* **The one real consequence pinned as a promise: an in-prose reference's display text leaves its sentence's `copy` — "Read Algebra" reads "Read " — the margin asserted, not accidental (361st test)**
- [x] **His persistence meditation converged on his own filed sentence** — *"we store active references of the index of the library and the index of the library is a chapter that is loaded on every page"* (2026-08-30) — with tonight's pieces: always-a-current-book = focus; marks-in-a-chapter = that index chapter; the Visitor's Guide = whose. **Mechanism first, where later, his ruling: a persisted reference = its printed fragment + its room, remembered through the app's drawer, rehydrated by `follow` — every piece exists and is green**
- [ ] `$Page` · `$Bookmark` · `$Highlight` in the book folder
- [ ] `$ReferenceCard` — inheritance tried as asked
- [ ] Referential persistence prototyped; **focus** defined
- [ ] The Visitor's Guide / librarian-and-visitor shape designed with him
- [ ] Requirements numbered on from R52; the demo beside them
- [ ] **Requirements approved by Doug — the gate**
