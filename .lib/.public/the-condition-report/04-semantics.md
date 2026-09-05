# Semantics

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

*(**Where the code says something the theory does not.** This is the axis that matters most and the one nothing can test, because a class hierarchy that contradicts its own derivation compiles perfectly. Every entry cites the passage it disagrees with — usually [The Semantics of Books](../the-semantics-of-books/.cover.md), sometimes a settled account in this same branch.)*

## <a id="s1"></a>S1 — The theory's two central classes do not exist

> ***SPLIT*** · *step 5 and [D-a](06-the-cleaning.md#owed)* — ***the two halves are not the same size.*** **The word-grade half is TREATED at step 5** — plain single inheritance, no mixin, and it collapses [S2](#s2). **The composition half is DESIGN OWED**, because it needs a mixin and `$Chemistry`'s template tracking is an unknown.

***This is the entry the next three descend from.***

**[The derivation names two classes as the whole of Level One](../the-semantics-of-books/05-the-evolutionary-root-symbol-and-literal.md):**

```
$Reference<T>    the act of pointing — $for (indirect), lookup(): T     [marked BUILT]
$Composition<T>  multiplication; flows down
```

**Neither is a class in the package.**

- ***`$Reference` is an interface*** with `read()` and `then()` — [`Reference.tsx`](../../package/src/reference/Reference.tsx). **No `$for`, no `lookup()`, and no base anything can specialize.**
- ***`$Composition` is an interface plus a bag of statics*** — `$Composition$` and `$Composible$`, [`Composition.tsx`](../../package/src/writing/Composition.tsx). **[The member audit's own resolution promised a class](../projection/04-the-member-audit.md)** — *"`$Chapter`/`$Book` implement a self-contained `$Composition` directly on `$Referent`"* — **and what shipped is a static helper.**

***A framework built to exemplify a formalism, whose two Level-One primitives have no class in it.*** **That is the muddiness Doug's letter named, at its source.**

*(Mid-audit this entry was corrected to say the classes exist in `$Chemistry`. **That correction was withdrawn** — [`$Chemistry`'s referent is unexported and unintegrated](07-the-three-codebases.md#c5), so nothing outside that package can reach it. **The names are `lib`'s to take.**)*

### <a id="s1-superseded"></a>And the absence is DELIBERATE — read in [chapter zero](../projection/00-planning.md), 2026-08-06

> *"There was a version of this sprint in which `$Catalogue`, `$Biography`, `$Autobiography`, `$Subject`, `$Author` and `$Library` were all classes in a hierarchy, and **it collapsed under its own weight** — six new names, a one-word rule straining, and subjectivity asserted by declaration rather than computed. **What replaced it is smaller and stronger: `$Subject`, `$Author` and `$Library` are BOOK REFERENCES THAT VALIDATE, and cataloguing-ness is a TYPE those references check for.** The hierarchy disappears and the checking is what remains."*

***So this entry had the diagnosis backwards.*** **The classes are not missing by neglect — they were tried, they collapsed, and references-that-validate replaced them.** *And **"cataloguing-ness is a TYPE those references check for"** is [`<Type>Autobiography</Type>`](#s17-type) predicted seventeen days before Doug ruled it.*

***What is actually wrong is one thing and it is [S2](#s2):*** **the replacement was a design in which three references DIFFER BY VALIDATION, and all three shipped with the same `valid()`.** *The hierarchy was removed and the checking that was supposed to remain was never written.*

### <a id="s1-register"></a>The derivation's register is stale against that ruling

**[The Symbolizing Dyad's register](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md) still lists `$Subject → $Book`, `$Biography`, `$Autobiography`, `$SubjectiveSubject`, `$Library`, `$Literature` and `$Catalogue` as *to build*.** ***Chapter zero superseded that model eleven weeks ago and the register was never edited.***

**That is [the cover/chapter gap](../../../../.claude/library/..librarianship/.cover.md) inside one library**: *a table of classes that says "to build" about a hierarchy somebody decided not to build.* ***One edit, and it is [Libby's](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md) — the register is a maintained table and this is what maintaining it means.***

*Part of it is a real constraint and is [recorded as such](#s1-constraint) below; part of it is not.*

### <a id="s1-constraint"></a>What is genuinely hard, so this entry is not read as simple

**A `$$` reference form must be BOTH a composition and a reference** — `$$Section` is a `$Paragraph` *and* a `$Reference$<$Section>` — **and TypeScript gives one supertype.** ***That is why the statics exist, and it is a reason rather than an excuse.***

**The candidate is a class-factory mixin, and it carries an unknown:** *a mixin makes a fresh anonymous class per application, and [`$Chemistry` tracks a template per class](../../../chemistry/.lib/particle/01-identity.md) — `[$$template$$]`, `$lift`'s prototype walk, `$isViewBase$`.* **Whether that survives a mixin is not known, and finding out is a design session.**

***But the WORD-GRADE half needs no mixin at all***, and that is [S2](#s2).

## <a id="s2"></a>S2 — Three classes are identical where the theory says they differ by validation

> **TREAT** · *step 5* — ***RULED 2026-08-22: the base is `$Annotation` and each of the three gets its own `valid()`.*** **The design, and the two rules the card cannot answer yet, are [S17](#s17).**

**[`$Author`](../../package/src/book/Author.tsx), [`$Subject`](../../package/src/book/Subject.tsx) and [`$Canonical`](../../package/.archive/book/Canonical.tsx) produce the same md5 under name substitution.** *Every member — `$for`, `$parenthetical`, `name`, `card`, `read()`, `then()`, `set()`, `named()`, `valid()`. **The only differences are the class name and one word inside an error string.***

***And it is datable to one commit.*** **`b91944e`, 2026-08-10:** `$Subject` was a zero-byte stub from July; that commit fills it with **36 lines** and creates `$Canonical` with **46**, both from `$Author`. **Not three classes designed alike — one class copied twice in a sitting.**

**[The derivation names exactly two edges between types](../the-semantics-of-books/03-inheritance-and-composition.md) — *differ by validation, differ by composition* — and says which applies:**

> *"a link and an author are references **specialized by validation**"*

***So the right shape is written down and not written in the code:*** **one word-grade reference to a book, and three subclasses that override `valid()` and nothing else.** *156 lines become about 75, and the collapse needs no mixin because these three are plain single inheritance.*

## <a id="s17"></a>S17 — `$Annotation`, and the two rules the card cannot answer

> ***DESIGN*** · *Doug's, ruled 2026-08-22* — **the answer to [S2](#s2): the three identical classes get a base called `$Annotation` at `$Phrase` grade, and each gets its OWN `valid()`, implemented off the library card it holds.** ***Two of the three rules need something the card deliberately does not carry***, and that is this entry.

### What was ruled

> *"You can make a base class called an **`$Annotation`** and have all three come from that. An annotation would probably be at the `$Phrase` level. `$Subject` and `$Author` should have a different `valid()` implementation. **Figure out how to implement that based on the library card they have access to.***
>
> ***The book should be in its own subject.** Author validation should be that **the book it refers to should be the canonical autobiography of the library**. **All library cards should have a library, and that should be 1. itself if it catalogues itself, otherwise the library of its subject.**"*

**`$Annotation` is Doug's word and is used as given.** *`$Phrase` grade is right and the code already agrees* — all three extend `$Phrase` today, because [an author's name was claiming to be a sentence](../the-semantics-of-books/15-the-levels-of-writing.md#a-figure-and-a-name) and a name sits inside a sentence.

### The card's computed library — it works exactly, and the fixed point is already in the corpus

**`$Card.library` = *itself if it catalogues itself, otherwise the library of its subject*.** ***And the generated catalogue already writes the fixed point:***

```
library.$subject = library;          ← the library IS its own subject
philosophy.$subject = library;
physicsTheStandardModel.$subject = physics;
```

*That is [the auto-categorical summit](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) — the one self-cataloguing member a well-ordered library is forced to have — **already true in the emitted file**, so the computation terminates by construction rather than by a guard.*

***And it belongs on [`$IndexCard`](../../package/src/reference/IndexCard.tsx) — the framework class — not on the generated `$Card`.*** **That answers the objection that moved it off the card in the first place**, which the generated file still states in its own comment:

> *"**AND NO LIBRARY COMPUTATION.** It used to live here, and a rule about books that lives in generated code is a rule with two homes that can disagree. It is `$Book.library` now."*

***The objection was to GENERATED code, not to cards.*** **On `$IndexCard` there is one home, and it is the framework's.**

### Why the card and not the book, stated as a cost

[`$Book.library`](../../package/src/book/Book.tsx) computes through `pointed()`, **which calls `card.read()` — and `read()` loads the book.**

```tsx
const pointed = (reference?: { card?: $IndexCard<$Book> }): $Book | undefined => {
    try { return reference?.card?.read(); } catch { return undefined; }
};
```

***So validating an annotation through books opens every book on the path.*** **A card compute opens none** — which is [the whole reason a catalogue exists](../projection/19-the-binding.md#m10), *"a route can be answered without loading a book,"* and it is what makes the rule affordable at 95 books and at 95,000.

### The three rules, and the two that cannot be written yet

| | the rule Doug gave | what a card would have to answer | today |
|---|---|---|---|
| **`$Canonical`** | *the target is held by the subject naming it* | **what a subject holds** | ***the card carries no entries*** |
| **`$Subject`** | ***"the book should be in its own subject"*** | **that this book's card computes to that subject's card** | ***an annotation cannot reach its own book's card*** |
| **`$Author`** | ***"the canonical autobiography of the library"*** | **which book speaks for the library** | ***the card carries no canonical*** |

***Both gaps are the same deliberate exclusion, and the generated file gives its reason:***

> *"**NO CANONICAL LINK.** A canonical link is a SUBJECT'S — it says which of the books a subject holds speaks for it — **and a card catalogues nothing**."*

### The finding underneath, and it is why this is a semantics entry rather than a task

***"A card catalogues nothing" is already false, in the same file.*** **`$Card.$subject` IS a cataloguing fact** — it is the upward half of exactly the relation the missing `canonical` and `entries` are the downward half of. **The line was drawn between them, and there is no principle on that line.**

***So the card was trimmed to "a book present without the book", and the two rules Doug wants are precisely the questions a CATALOGUE answers.*** **A card catalogue that cannot say what a subject holds, or which book speaks for it, is not a catalogue — it is a shelf of title pages.**

*And the model already knows both facts.* [`resolve.ts`](../../build/stages/resolve.ts) computes `canonical` and `entries` for every book, **and the emitter writes neither onto the cards.**

### What the rules become once the card carries them

*Written as what is asked, not as signatures.*

- **`$Subject`** — ***my book's card computes one step and arrives at yours.*** *An annotation reaching its own book's card is the second gap; the cheapest close is that a book knows its card, which the application already hands it at fetch time.*
- **`$Author`** — ***your card is the canonical of your library's card, and your card's author is you.*** **The second half is what makes it an AUTOBIOGRAPHY** rather than merely the canonical, and it is [the author's fixed point](../the-semantics-of-books/13-the-authors-fixed-point.md) asked as a question.
- **`$Canonical`** — ***you are among what I hold.***

***All three are one compute and one comparison, and none of them opens a book.***

### When it runs

*Doug: **"perhaps that validation will only be run when the library checks itself as part of the build."*** **[`validate.ts`](../../build/stages/validate.ts) is already that phase** — it holds every book at once, it already imports the cards, and it already says *"it invents no rules."*

***And it must remain a caller rather than a home*** — [The Live Library](../designing-inexplicable-phenomena/05-the-live-library.md), out of Doug's own aside in the same message: **a rule that lives in the compiler is a rule the browser cannot ask**, and a library people write into needs the same rule at the moment writing arrives.

### <a id="s17-ruled"></a>RULED 2026-08-22 — annotations are a member of writing, and the card reflects the book

***Doug answered the attribute question and the card question with one design.***

> *"Perhaps **attributes need to go to the card**. The idea was that the card would have as many properties **named the same thing as the book**, but with **references replaced with cards** — like the subject would be another card, and the author would be another card, canonical might be replaced with a **boolean**? **Think about how to reflect the `$Book` class onto a library card** so that the info is there.*
>
> *As for Autobiography, we do need a **`$Type` attribute in the framework**, which can probably be an **inheritance proxy**. I would actually give **`$Writing` annotations as `$Annotation[]`**, and then `get type() { return this.annotations.filter(a => a instanceof $Type); }`*
>
> *Obviously, at the **letter level annotations can't exist** — no within-word annotations — but since **annotations are phrasal**, they can live in anything higher. **There will need to be a way to lift certain ones.** Perhaps the book (or maybe any writing) **knows how to lift annotations from its canonical to itself** and then returns that as part of its `annotations` property **which can be overridden** if needed to evolve how annotations work."*

**Five things follow, and none of them is a new mechanism:**

1. ***`$Writing.annotations: $Annotation[]`*** — **a member of writing, not a special case of a cover.** *Today `$Cover.author` finds one with `this.words.find(w => w instanceof $Author)`; that becomes the general form on every level.*
2. ***`$Type` is an annotation, not a class.*** `get type() { return this.annotations.filter(a => a instanceof $Type); }` — **so *autobiography* is something a book CARRIES rather than something it IS**, and [the four special book classes the derivation named](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) — `$Biography`, `$Autobiography`, `$SubjectiveSubject`, `$Library` — stop needing to exist as classes. ***Doug's own word for it is an "inheritance proxy."***
3. ***A letter has no annotations, and the reason is structural rather than a rule***: **an annotation is phrasal**, and a letter cannot contain a phrase. *Everything at phrase grade and above can.*
4. ***Lifting.*** **A composition's `annotations` includes the ones lifted from its canonical** — so a book's annotations include its cover's, because [the cover is chapter zero](../the-semantics-of-books/06-the-canonical-echo-and-views.md). **And `annotations` is overridable, so how lifting works can evolve without the mechanism changing.**
5. ***The card is a REFLECTION of the book*** — the same property names, with references replaced by cards. **`subject` → a card. `author` → a card. `canonical` → a boolean.** *That is what closes the two gaps [above](#s17): the card stops being a hand-picked subset and becomes the book seen through the catalogue.*

### <a id="s17-type"></a>What `$Type` is — an annotation whose content is the name, like every other

***RULED 2026-08-23, replacing the inheritance answer of the day before.*** *Doug: **"I have changed my mind. I think we need `<Type>Autobiography</Type>`. And we will have to find a way to specify what that means in the books methinks. That is how we do other annotations like subject and object. So let us not consider inheritance hierarchies right now, and we will worry about that later."***

```tsx
<Cover>
    <Title>The Team: An Autobiography</Title>
    <Type>Autobiography</Type>          ← the name is the content
    <Author>The Team</Author>
    <Subject>The Library</Subject>
</Cover>
```

***One shape for every annotation.*** **A `$Type` is a phrase whose copy is the name of the type, exactly as [`$Author`](../../package/src/book/Author.tsx) is a phrase whose copy is the name of the author** — and what an author IS gets specified elsewhere, which is the same answer for what a type is.

***And where "elsewhere" is, is the books.*** **What `Autobiography` means is written in the library**, not encoded in a class — *which is [the closure the derivation already insists on](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md): everything is said in books, and authorship is read off the catalogue rather than imported into it.*

***AND IT IS A STRUCTURAL FACT, not a claim opposed to one.*** *Doug, 2026-08-23, on being shown that [chapter zero](../projection/00-planning.md) says an autobiography is recognised by its author link coming home rather than by a field: **"It IS a structural fact. The author of a book should be a book that is of type autobiography AND its author link should point to itself. That is structural."***

**So both conditions, together, are the structure:**

```
$Author.valid()   the book it names is of type Autobiography
                  AND that book's author names itself
```

***The annotation is not a competing mechanism — it is part of what is checked.*** **A book that carries the type and does not close the loop is invalid; a book that closes the loop and does not carry the type is not an autobiography by name.** *Both are readable off cards, and neither opens a book.*

***Explicitly deferred:*** **the inheritance question.** *An earlier answer had `$Autobiography extends $Biography extends … extends $Type<$Book>` with a `check(instance)` that is vacuous where the type is absent. **Recorded, not taken** — the annotation ships first and how types weigh in is a later session.*

### <a id="s17-type-withdrawn"></a>The withdrawn answer, kept because it is a real design

*Doug, 2026-08-23:*

> ```
> $Autobiography > $Biography > … > $Type<$Book>
> ```
> *"Does `type` contain an `instanceof $Autobiography`? Does it contain an `instanceof $Biography`? Then it is a type of autobiography or biography. And we will find a way for the types to weigh in. Perhaps:*
> ```
> type.check(instance: T)
> // Does the instance have this type? If no, valid
> // Does the instance satisfy the specification of the type? If yes, valid
> ```
> *And then evolve the validation polymorphically."*

***The proxy is the annotation's OWN class hierarchy.*** **`$Autobiography extends $Biography extends … extends $Type<$Book>`, so an autobiography annotation IS a biography annotation by ordinary inheritance** — and asking *is this book a biography* is `type.some(t => t instanceof $Biography)`. **The book's class never changes; the annotation's does the work.**

***And `check` is vacuous where the type is absent***, which is what makes every type askable of every instance: **a book that does not claim to be an autobiography cannot fail the autobiography specification.** *So validation composes — a book carrying `$Autobiography` answers to `$Autobiography.check` and, by inheritance, to `$Biography.check`.*

***This is why [the four special book classes the derivation named](../the-semantics-of-books/07-the-subjective-subject-and-the-library.md) are never built:*** **`$Biography`, `$Autobiography`, `$SubjectiveSubject` and `$Library` become types a book CARRIES rather than classes a book IS** — which is also the only route by which [a compiled book can be one](../projection/18-the-theme.md#routes), since a corpus can write an annotation and cannot write a subclass.

***And it composes with [the valid() template](#s8):*** **`check` is the type's own specification, `valid()` is the class's, and both narrow by overriding a named part rather than by replacement.**

### <a id="s17-lifting"></a>Where `library` lives — lifted annotations, then the book, then the card

*Doug, 2026-08-23: **"First off, LIFT the subject and author annotations — if not all annotations — from the cover to the book. The book can do that by overriding its `annotations` property. Then put the `library` property ON THE BOOK. Then, because the `$$Book` has a very similar interface to the book, that's how it gets the library. Yes it should be recursive."***

**Four steps, and each one is a member rather than a mechanism:**

1. ***`$Writing.annotations`*** — the base member.
2. ***`$Book.annotations` overrides it to lift from its cover*** — so a book's author and subject are the book's, not a chapter's, and **the overriding is [how lifting evolves](#s17)** rather than a rule the framework fixes.
3. ***`library` is a property of `$Book`***, computed recursively: *itself where it catalogues itself, otherwise its subject's.*
4. ***`$$Book` gets it because its interface mirrors the book's*** — **which is the whole point of a card reflecting a book**, and it is why the recursion opens nothing: a card's subject is another card.

***And "yes it should be recursive" settles it against [chapter zero's aggregate reading](../projection/00-planning.md)***, which warned off following references **through books**. *A card asking another card is not that act.*

***And it answers the attribute question I had guessed at:*** **an annotation does not reveal metadata by drawing or by becoming a DOM attribute. It IS the metadata, held as a member, and [the back of a page is what reads it](../designing-inexplicable-phenomena/06-the-back-of-the-page.md).**

### <a id="s17-attribute"></a>What I had guessed, kept because the guess was wrong in a useful way

> *"As for an attribute, this is the kind of thing where we might want to **reveal metadata**, and the attributes will do that. So how about that process?"*

***My reading, and it is a reading:*** **an annotation is metadata about a book** — who wrote it, what it is about, which book speaks for its subject — **and it draws nothing today** (`set()` returns `null`). *So the question is how an annotation SURFACES the fact it carries: as an attribute on the element its container draws, the way [`$Link` already puts `data-link` on its anchor](../../package/.archive/reference/Link.tsx) and [`$Book.place` puts `data-chapter` on a leaf](../../package/src/book/Book.tsx).*

***If that is the reading, it is a real and separate mechanism*** — **a writing that is not read but is still declared** — and it is the same family as [S16's mentioned syntax](#s16): *present in the writing, absent from the reading, and still able to reach the page.* ***Flagged as not confirmed.***

## <a id="s18"></a>S18 — `$Link` is word grade and overrides what a word specifies to survive there

> **TREAT** · *step 5, with the re-parents* — ***Doug, 2026-08-22: "Links too should be phrasal."*** **`$Phrase` exists for exactly this and `$Link` does not use it.**

**[`$Word.valid()`](../../package/src/writing/Word.tsx) specifies two things:**

```tsx
const whole = $valid(!/\s/.test(this.copy), 'a word is one unbroken stretch, and this one carries whitespace');
const said  = $valid(/[\p{L}\p{N}]/u.test(this.copy), 'a word has at least one letter or number, and this one has none');
```

**[`$Link extends $Word`](../../package/.archive/reference/Link.tsx), and its `valid()` never calls `super`:**

```tsx
valid(): boolean {
    return $valid(this.copy !== '', 'a link is a word that points, and this one has nothing to show');
}
```

***So every link whose text is more than one word is a `$Word` carrying whitespace*** — which the base forbids — **and it passes only because the subclass silently overrides the specification.** *`[The Gauge Principle](…)` is three words claiming to be one.*

***And the class that exists for precisely this is one folder away.*** [`$Phrase`](../../package/src/writing/Phrase.tsx) is **a word that admits what a name contains, spaces among them** — written because [an author's name was claiming to be a sentence](../the-semantics-of-books/15-the-levels-of-writing.md#a-figure-and-a-name). **A link's text is a name for where it points.**

**`$Link extends $Phrase` costs one word and deletes the repeal**, and *a `$Phrase` is still a `$Word`, so links stay enumerable among a sentence's words* — **which is the second half of Doug's sentence**: *"and easily enumerable as words."*

*This is [S8](#s8) found a third time: **`$Phrase`, `$Punctuation` and now `$Link` each override a different half of what `$Word` specifies**, which says that specification belongs to a subclass — a plain word — and not to the base.*

## <a id="s3"></a>S3 — `$Code extends $Figure` is the reading the branch's own account calls wrong

> ***RULED 2026-08-22: `$Code extends $Paragraph`.*** *Doug: **"Code is not a Figure. I would have code at the paragraph level, as a code block is kind of like a paragraph. A code block doesn't have a title. A figure has a caption, even if parenthetical. I don't think it makes sense semantically to have code as figure seeing as how CODE IS WRITING."***
>
> ***And the last clause corrects the settled account, not just the class.*** **[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) files `$Code` under *"content that is not writing"*.** *Doug's ruling is that **code IS writing** — so the class moves AND the chapter that placed it is wrong in the same act.* **[S4](#s4) inherits the correction: the thing `$Formula` and `$Snippet` are two of is not "content that is not writing" either.**
>
> **What follows mechanically:** `$caption` leaves with the inheritance, and *`caption={asFence[1].trim() || 'code'}`* — **the fence captioned with the literal word `code`** — goes with it.
>
> ***And how a code block DIVIDES is ruled too, with a horizon attached.*** *Doug: **"Maybe that's the default… but might we want there to be interpreting the parse tree of the language? You can do that for the default code block, but maybe a TypeScript code block would behave differently. Here's a hint: all of this parse stuff — one day SRT will specify the semantics and syntax of natural language, and when it does, we can evolve the parse representation to represent writing more. Right now the comprehension of a composition is a bit CEREMONIAL. But for specific types of code, perhaps it shouldn't be."***
>
> **So: lines by default, and a language-specific subclass divides by its own grammar** — which is the same shape as [a notation being an axis anyone may answer differently](../the-semantics-of-books/15-the-levels-of-writing.md#the-notation-is-the-levels-own), one grade over.
>
> ***And the larger thing he said about the parse is worth keeping where the audit can see it:*** **the comprehension of a composition is CEREMONIAL today** — prose divides into sentences and words because those are the names we have, not because the model understands them. **Code is the one place a real grammar is available now**, which makes `$Code` the first place the parse could stop being ceremonial — *and natural language waits on SRT specifying its semantics and syntax, at which point the representation evolves rather than the classes changing.*

**[The Levels of Writing](../the-semantics-of-books/15-the-levels-of-writing.md) says both halves plainly:**

> *"`$Figure` is **the thing added** at this level; **the framework ships no kind beneath it**."*
>
> *"Content that is not writing is a **separate idea, and it has its own class**… **The earlier reading of a figure as 'content that is not writing' was wrong**: it swept a picture, a thematic rule and a code listing together, **and a listing is source rather than a picture**."*

***[`$Code extends $Figure`](../../package/.archive/writing/Code.tsx) is a kind beneath `$Figure`, shipped by the framework, and it is the earlier reading that chapter calls wrong.*** **The correction was written down; the class was not changed.**

**And the same file shows the cost:** `$Code` inherits `$caption` from `$Figure`, so [the parse hands it `caption={asFence[1].trim() || 'code'}`](../../package/src/writing/Section.tsx) — ***a code fence with no language is captioned with the literal word `code`.***

## <a id="s4"></a>S4 — `$Formula` and `$Snippet` are two classes where Doug named one

> ***DESIGN OWED*** · *beside [D-b](06-the-cleaning.md#owed)* — **needs dynamic layering, which the framework does not have.** *Doug's answer is on record and unbuildable today.*

**[The same chapter states the owed answer](../the-semantics-of-books/15-the-levels-of-writing.md):**

> *"The real answer is Doug's and is owed: **one `$Code` with an `inline` boolean whose LEVEL moves** between paragraph and phrase. That needs **dynamic layering**, which the framework does not have."*

***Recorded as owed, and kept here because [S3](#s3) is its other half:*** **the framework cannot say *content that is not writing* once. It says it three times — `$Code`, `$Formula`, `$Snippet` — at two grades, under a parent that contradicts all three.**

## <a id="s5"></a>S5 — `$IndexCard extends $Writing` and uses not one writing member

> **TREAT** · *step 5* — a re-parent. **Sixteen inherited members, zero used.**

**A card inherits `text`, `copy`, `parts()`, `canonical`, `at`, `where`, `select`, `selectMany`, `single`, `role`, `parenthetical`, `theme`, `view`, `uniform`, `gathered`, `set` — *sixteen members of writing semantics*. Grepped: it uses none of them.** It overrides `copy`, `view` and `valid` to mean something else, and inherits the rest as dead surface.

***A card is not writing.*** **It is what stands in a catalogue where a book is not** — *"a book present without the book,"* [in the compiler's own words](../../build/stages/catalogue.ts). **It extends `$Writing` for one line in a constructor:** `this.inline = false`.

## <a id="s6"></a>S6 — `$Bookmark extends $Sentence`, and would parse itself into words

> **TREAT** · *step 5* — a re-parent. **A bookmark is a reference, and it is in the right folder under the wrong parent.**

**Same shape, worse.** [`$Bookmark`](../../package/src/book/Bookmark.tsx) holds a reference and answers `read()`. ***It inherits the sentence parse*** — `parts()` splitting it into words, `stressed()`, `wordFor()`, `letters` — **and uses none of it.**

**A bookmark is a reference, not a sentence.** *It is in the right FOLDER by [the stated rule](../projection/04-the-member-audit.md) — a reference kind lives with the level it points into — and under the wrong PARENT*, **which is a distinction the [naming register](03-names.md) could not see, because the name is perfect.**

## <a id="s7"></a>S7 — `copy` answers three different ways about parenthetical matter

> **TREAT** · *step 7* — the settled account specifies one behaviour; the middle level gets brought to it.

| | | parenthetical parts are |
|---|---|---|
| `$Writing.copy` | `text(this.text)`, and [`text()` returns `''` for a parenthetical object](../../package/src/utilities/html.ts) | **skipped** |
| `$Document.copy` | `this.parts().map(s => s.copy).join()` | ***included*** |
| `$Book.copy` | `this.parts().filter(c => !c.parenthetical)…` | **skipped** |

**[The settled account specifies it once](../the-semantics-of-books/15-the-levels-of-writing.md):**

> *"A book's copy passes over its parenthetical chapters **exactly as** a sentence's words pass over its syntax."*

***The two ends obey it. The middle does not, and nothing anywhere says why a document is different.***

## <a id="s8"></a>S8 — `$Word` specifies two things and both subclasses override one

> ***RULED 2026-08-22, and it is neither option I offered.*** *Doug: **"Things narrow. And if `valid` is hard to specialize, the parent version should be implemented with PROTECTED METHODS that can be more specifically overridden to make the validation EXTENSIBLE. If a child doesn't call the parent `valid`, it suggests that perhaps IT IS NOT A SUBCLASS. So I would look at the implementation of `valid` and see why it can't be extended. You should find a way to elegantly ALWAYS extend `valid`, architecting the implementation as needed. And if there is no meaningful way to do so, think about why very hard."***
>
> ***So the fault is not the hierarchy and not the silence — it is that `valid()` is a monolith.*** **A subclass cannot narrow one part of a specification because the parent offers no parts to narrow**, so it replaces the whole method, and the replacement is invisible.
>
> ```
> $Word.valid()     = super.valid() && this.whole() && this.said()
>       protected whole()   one unbroken stretch
>       protected said()    at least one letter or number
>
> $Phrase       overrides whole()   — a name contains spaces
> $Punctuation  overrides said()    — a mark says nothing
> $Link         inherits $Phrase's
> ```
>
> ***Every child calls `super.valid()`. Every narrowing is one named method. Nothing is silently repealed.***
>
> ### <a id="s8-diagnostic"></a>And it gives the audit a diagnostic it did not have
>
> ***"If a child doesn't call the parent `valid`, it suggests that perhaps it is not a subclass."*** **Run against the package, that test names the two entries this book already reached by another route:**
>
> | replaces `valid()` outright | and | |
> |---|---|---|
> | [`$IndexCard`](../../package/src/reference/IndexCard.tsx) | uses **zero** of `$Writing`'s sixteen members | [S5](#s5) |
> | [`$Bookmark`](../../package/src/book/Bookmark.tsx) | uses **zero** of `$Sentence`'s | [S6](#s6) |
>
> ***Two instruments, arrived at independently, naming the same two classes.*** **That is the strongest evidence in this report that S5 and S6 are real.**

**[`$Word.valid()`](../../package/src/writing/Word.tsx) — *a word is one unbroken stretch*, and *a word has a letter or number*.**

- [`$Phrase`](../../package/src/writing/Phrase.tsx) overrides `valid()` **to permit spaces**.
- [`$Punctuation`](../../package/.archive/writing/Punctuation.tsx) overrides `valid()` **to permit no letters**.

***So the base specifies two things and each child overrides a different one.*** **The honest reading is that both belong to a subclass — a *plain* word — and the base holds only what all three share.**

*[`$Legend.valid()` is the same act at paragraph grade](../../package/.archive/document/Legend.tsx): it returns `true`, which is **`$Referent.valid()`'s body — the base of the whole hierarchy — copied onto a leaf.** It is probably right, and it says so by **erasing** a specification rather than stating a different one, which is exactly what [`$valid(condition, reason)`](../../package/src/writing/Writing.tsx) exists to prevent.*

## <a id="s9"></a>S9 — Not everything is a referent

> ***SPLIT*** · *step 5 and LEAVE* — ***`$CardCatalogue` becomes a referent*** — the dyad the model turns on cannot be a plain class. ***`$Theme` is LEFT***: a theme is not a thing a book refers to, and its `null` view is honest.

*Doug: **"It is absolutely essential that the composition interface is implemented correctly, that referential relationships make sense, that everything is a referent."***

**Three things in the package are not:**

| | |
|---|---|
| [`$CardCatalogue`](../../package/.archive/reference/CardCatalogue.tsx) | a **plain class implementing nothing** — ***and [chapter zero specified it otherwise](../projection/00-planning.md):*** *"The cards live in a card catalogue: `$CardCatalogue`, **satisfying `$Catalogue$<$Book>`** — a composition of references to books that is itself a reference to those books. That interface was built in Sprint 47 for the table of contents and it turns out to describe the catalogue at book level **without modification**, which is the strongest evidence we have that the catalogue equation was carved correctly."* **It was designed against an interface it does not implement** — [the same fault as the card](#s20), one level up. |
| [`$Theme`](../../package/src/writing/Theme.tsx) | extends `$Chemical`, not `$Referent`. *Arguably right — a theme is not a thing a book refers to — and **it has a `view()` that returns `null`**, so it is half in.* |
| `$Composible$` | a bag of statics — [S1](#s1) |

## <a id="s10"></a>S10 — The parse names thirteen classes, where the principle forbids one

> ***DESIGN OWED*** · *[D-b](06-the-cleaning.md#owed)* — ***no mechanism is proposed, deliberately.*** **Proposing one badly is how the principle broke**, and it is blocked behind [S11](#s11) because a parse that returns classes needs the classes decided.

**[The settled account](../the-semantics-of-books/15-the-levels-of-writing.md):**

> *"**LEVEL ALONE DECIDES, and this is what makes derived kinds free.** … **There is no class name anywhere in the walk, and no registry of kinds.**"*

***Two dispatch tables say otherwise, both written as `if`-ladders over regexes:***

- [`$Section.compose()`](../../package/src/writing/Section.tsx) — display maths → `$Paragraph mark="$$"`; heading → `$Title`; rule → `$Figure`; picture → `$Figure`; quote → `$Paragraph mark=">"`; bullet → `$Paragraph`; fence → `$Code`; else `$Paragraph`
- [`$Sentence.wordFor()`](../../package/src/writing/Sentence.tsx) — link → `$Link`; maths → `$Formula`; code → `$Snippet`; escape → `$Punctuation`; else `$Word` / `$Punctuation`

**Thirteen class names in two methods.** ***A consumer adding a callout, a table or a definition list must override `compose` wholesale and reproduce all eight branches*** — and [a registration only substitutes what the parse builds](../projection/18-the-theme.md#m4), which is a repair after the fact rather than an extension point.

***This is the entry with no proposed mechanism.*** **Naming one badly is how the principle got broken in the first place**, so it is [carried as design owed](06-the-cleaning.md#owed) rather than answered here.

## <a id="s19"></a>S19 — WITHDRAWN: a reference is not unique, and the cover being one is deliberate

> ***WITHDRAWN 2026-08-23, the day after it was written.*** *It claimed `$Book.ref` returning the cover was wrong, on the ground that **"a reference stands for a thing where the thing is not."*** **That ground is false as a universal.**
>
> *Doug: **"The cover IS a reference for the book, right? We implemented it that way… the cover can still be a reference to book. REFERENCES ARE NOT UNIQUE. Every linguistic form that refers to something is a unique reference."***
>
> ***And it was written down eleven days earlier, in [chapter zero](../projection/00-planning.md):*** **"Its cover is a reference to it: `$Cover implements $Reference$<$Book>`, so THE FACE OF A BOOK IS THE WAY YOU POINT AT IT."**
>
> **So `canonical` and `ref` both returning the cover is one fact seen twice, not a conflation** — *the cover is chapter zero AND a way of pointing at the book, and nothing forbids a thing being both.*
>
> ***What survives is Doug's instruction, ruled again on 2026-08-23:*** **"`$$Book` replaces a card, and the table of contents is a catalogue of chapters as it contains chapter references. `$$Book`s will be on synopses presumably and will be associated with subject and author annotations."**
>
> | | |
> |---|---|
> | ***`$$Book`*** | **replaces `$IndexCard`** — in `Book.tsx`, beside the class whose members it emulates |
> | **where they live** | on a [`$Synopsis`](../../package/src/book/Synopsis.tsx), and held by the [`$Author`](../../package/src/book/Author.tsx), `$Subject` and `$Canonical` annotations |
> | ***`$TableOfContents`*** | ***not*** a reference form of a book — **a catalogue of CHAPTERS**, because it holds chapter references |
>
> ***And that supersedes [chapter zero's sentence](../projection/00-planning.md)*** — *"a book's reference form is the table of contents when you are reading it, and the library card when you are at the catalogue."* **The contents catalogues chapters; only the card stands for the book.**

## <a id="s20"></a>S20 — The card implements one of the two interfaces its book implements, and that IS the gap

> ***RULED 2026-08-23.*** *Doug, on being asked whether `read()` should leave the card: **"read stops existing? What do you mean. It has to implement catalogue of book. It needs to be a reference for a book. How the hell could read not exist? Is `of` even part of an interface? I think you guys are upside down and you need to think hard about implementing interfaces."*** **He is right and the question was malformed: it asked whether to drop an OBLIGATION when the question was how the obligation is MET.**

### The pattern, and it is uniform at every level

```
$$Chapter    ::  $Reference$<$Chapter>    ,  $Catalogue$<$Section>
$$Section    ::  $Reference$<$Section>    ,  $Catalogue$<$Paragraph>
$$Paragraph  ::  $Reference$<$Paragraph>  ,  $Catalogue$<$Sentence>
$$Sentence   ::  $Reference$<$Sentence>   ,  $Catalogue$<$Word>
$$Word       ::  $Reference$<$Word>                                    ← the floor catalogues nothing
```

***A reference form is a REFERENCE to its thing and a CATALOGUE of what that thing holds.*** **Two interfaces, every level, no exceptions.**

### So `$$Book` is determined, and it is Doug's sentence exactly

**[`$Book`](../../package/src/book/Book.tsx) is `$Composition$<$Chapter>` and `$Catalogue$<$Book>`** — *its chapters are what it contains; the books it catalogues are what it references.* **Reflected onto its reference form:**

```
$$Book  ::  $Reference$<$Book>  ,  $Catalogue$<$Book>
```

***"It has to implement catalogue of book. It needs to be a reference for a book."***

### And that is what [S17](#s17)'s two gaps actually were

***[`$IndexCard`](../../package/src/reference/IndexCard.tsx) implements `$Reference$<T>` and nothing else.*** **The members the annotation rules needed — `canonical`, `entries`, `parts()` — are not arbitrary omissions. They are `$Catalogue$`, unimplemented.**

**So the earlier framing was wrong twice over.** *It read the generated comment — "a card catalogues nothing" — as a design decision to argue with, when the plain fact is that **the card was written against one interface and its book satisfies two**.* ***Implement the second and the gaps close by construction, with no member invented.***

### The discipline, which is the part worth keeping

***`$of` is not in any interface.*** **[`$Reference$`](../../package/src/reference/Reference.tsx) requires `copy`, `parenthetical`, `read()` and `then()`; the field that answers `read()` is the class's own business** — *a thunk today, a name and a catalogue tomorrow, and neither is an interface question.*

> ***Ask what a class OWES, then ask how it pays.*** **This audit asked the second question in place of the first, and reached for deleting an obligation because it did not like the field behind it.**

## <a id="s16"></a>S16 — Syntax is swallowed, where the framework's own account says it should be a mentioned part

> ***DESIGN*** · *Doug's, ruled 2026-08-22, and it supersedes [S11](#s11)* — ***"Notation that built it should be a sort of mention like a space or period at some level. Parenthetical and easy to skip… Think about parenthetical mentions for all sorts of syntax in the framework."*** **The framework already has both mechanisms; nothing new is invented.**

### The two mechanisms that already exist, and the difference between them is exactly right

| | declared as | what it changes | who has it today |
|---|---|---|---|
| **mention** | `$role = 'mention'`, ***propagating by lineage*** | **excluded from `words`** — [`$Sentence.words`](../../package/src/writing/Sentence.tsx) filters `role === 'use'` — **and still present in `copy`** | `$Punctuation` · `$Formula` · `$Snippet` · every `$$` reference form |
| **parenthetical** | `$parenthetical = true` | ***excluded from `copy`*** — [`text()` returns `''` for it](../../package/src/utilities/html.ts) | `$Code` · `$Legend` · `$Denote` · `$Author` · `$Subject` · `$Canonical` · `$Synopsis` |

***They are not the same thing and the framework is right to keep both.*** **A comma is mentioned and NOT parenthetical** — it is not a word, and *"Hello, world"* needs it in the copy. **A list marker is BOTH** — not a word, and not part of the prose either.

*That is Doug's sentence read precisely: **"a sort of mention like a space or period"** is the first mechanism; **"parenthetical and easy to skip"** is the second; and syntax that is not prose wants both.*

### What the parse does with syntax today — it swallows it, three different ways

| notation | grade | today |
|---|---|---|
| `> ` a quotation | paragraph | ***stripped and stored*** as `mark=">"` |
| `- ` `1. ` a list item | paragraph | ***stripped and stored*** as `mark="-"` — **and re-drawn from the string** |
| `$$…$$` display maths | paragraph | ***stripped and stored*** as `mark="$$"` |
| `` ``` `` a fence | paragraph | **discarded**; the language becomes a `$Code` prop |
| `# ` a heading | section | **discarded**; the prose becomes a `$Title` |
| `**` `*` emphasis | word | ***consumed and stored*** as `$Emphasis.$strong` |
| `` ` `` a code span | word | **discarded**; the inside becomes a `$Snippet` |
| `$…$` inline maths | word | **discarded**; the inside becomes a `$Formula` |
| `[…](…)` a link | word | **discarded**; the target becomes `$Link.$url` |
| `,` `.` ` ` punctuation | word | ***composed as a mentioned part*** — **the one case already right** |

***Nine of ten notations are stripped. One is composed.*** **And the one that is composed is the one nobody has ever had trouble with.**

### The specification, stated once

> ***Syntax is composed in situ as a mentioned part, at the grade it operates on — and where it is not prose, it is parenthetical as well.***

**Two shapes, and both already work at word grade:**

- ***leading*** — `- ` `1. ` `> ` `# ` stand **first**, the way [the canonical stands at zero](../the-semantics-of-books/15-the-levels-of-writing.md#the-canonical-stands-at-zero-at-every-level).
- ***flanking*** — `$$…$$` `**…**` `` `…` `` stand **at both ends**, the way a comma already stands *between* words.

### What it buys, and every line of it is machinery that already exists

- ***`copy` skips them for free*** — `text()` already returns `''` for a parenthetical part.
- ***`words`, `sentences` and the `CHECK` counts skip them for free*** — `words` already filters to `role === 'use'`.
- ***They draw themselves for free*** — a mentioned part is a real writing object with a `view()`, so the `1.` on the page stops being [a string re-rendered out of a discriminator](05-implementation.md#i1).
- ***`$mark` DISAPPEARS rather than being renamed.*** A paragraph is a quotation because **it carries a mentioned `>` at zero**, not because a string says so.
- ***And [S10](#s10) becomes designable***, because the parse gains one consistent act — *compose the notation, compose the prose* — in place of ten special cases.

### `mark` is struck from the framework entirely — Doug, 2026-08-22

*"I'm not sure I like `mark` very much at all for anywhere… why not try to remove it everywhere and replace with something more semantically precise? But also fundamental."* ***The demonstration is explicitly out of scope: "For the demo I don't care much though. I care about the framework."***

**Five meanings, and four of them are in `package/src`:**

| where | what it means | becomes |
|---|---|---|
| [`$Paragraph.mark`](../../package/src/writing/Paragraph.tsx) | the notation that built it | ***gone*** — the notation is a mentioned part |
| [`$Theme.mark`](../../package/src/writing/Theme.tsx) | the accent colour of what can be followed | ***word [owed](06-the-cleaning.md#the-words-owed)*** — my proxy is **`rubric`**, the colour a manuscript uses for what must be noticed |
| [`$Denote.view`](../../package/.archive/document/Denote.tsx) | a local style object | a held component, by [I2](05-implementation.md#i2) |
| [`$Book.turning`](../../package/src/book/Book.tsx) | a parameter holding *"previous"* / *"next"* | ***gone*** — it is a word, and it should say so |
| [`$Highlight`](../../package/.archive/reference/Highlight.tsx) | the HTML `<mark>` element | **stays** — that is the platform's word, not ours |

***This supersedes [N1](03-names.md#n1), which proposed renaming one side of a collision.*** **Both sides move, and one of them dissolves.**

## <a id="s11"></a>S11 — Three kinds of paragraph wear one class and a discriminator string

> ***RULED*** · *2026-08-22, and the answer is [S16](#s16)* — ***neither of the two options I offered.*** **The notation is neither a class nor a stored string: it is a MENTIONED PART, parenthetical where it is not prose.** *`$mark` dissolves rather than being renamed, and [S10](#s10) becomes designable because the parse gains one act in place of ten special cases.*

[`$Paragraph.$mark`](../../package/src/writing/Paragraph.tsx) holds `''` · `'>'` · `'$$'` · `'-'` · `'1.'`, decoded by three getters — `quoted`, `listed`, `set0` — and branched on four ways in `set()`.

***A quotation, a list item and a display formula are three different kinds of paragraph.*** **This is [the encoding Custom Elements deleted](../projection/17-custom-elements.md) for drifting from the class hierarchy that already carries the fact, surviving one grade down.**

***Doug has already put the question on the board for the same fault at word grade*** — `$Emphasis.$strong`, *"either two classes, or the mark stays in the model and the class reads it."* **[The answer decides whether S10 can ever be extensible](#s10), because a parse that returns classes needs classes to return.**

## <a id="s12"></a>S12 — Four flags encode what the class hierarchy already knows

> **TREAT** · *step 6* — ***three of the four.*** `isCover` becomes `instanceof`, **which deletes [the eight-step walk](05-implementation.md#i4) with it**; `$display` and `$strong` read the notation. **The fourth is [S11](#s11).**

*Doug counted six and [ruled on them](../projection/19-the-binding.md#the-checkpoint); **four are still in the working copy.***

| still there | what already knows it |
|---|---|
| `$Cover.isCover` | `instanceof $Cover` — ***and it is read by [an eight-step bounded parent walk](05-implementation.md#i4)*** |
| `$Formula.$display` | ***NOTHING — it is dead.*** Grepped: **no code and no book in the corpus ever sets it**, so it is permanently `false`, `typeset()` always calls katex with `displayMode: false`, and both display branches of `set()` are unreachable. **Display mathematics is achieved by the PARAGRAPH**, which wraps an inline formula in a centred `Displayed` div |
| `$Emphasis.$strong` | the notation — `**` against `*` |
| `$Paragraph.$mark` | [S11](#s11) — the deepest of the four |

## <a id="s13"></a>S13 — One word, two readings of `letters`

> **TREAT** · *step 7* — `$Sentence.letters` joins the chain the other four levels use.

- [`$Sentence.letters`](../../package/src/writing/Sentence.tsx) splits **`copy`** into graphemes — *includes spaces and punctuation.*
- `$Paragraph.letters` · `$Section.letters` · `$Document.letters` · `$Book.letters` are **`words.flatMap(w => w.letters)`** — *excludes everything that is not a used word.*

***One name, two quantities.*** **The `CHECK` gate counts the second; the first is a different number nobody compares.**

*And the whole chain is [the inconsistency the theme sprint recorded and did not take](../projection/18-the-theme.md#out-of-scope-named-so-it-is-not-drifted-into):* **`sections → paragraphs → sentences → words → letters` is a hand-written chain of `flatMap`s** treating *a default of prose* as *a requirement*, while the framework's own account says a section may compose sections.

## <a id="s14"></a>S14 — The table of contents excludes the cover, where the theory says it may contain even itself

> **LEAVE** · *permitted, not required* — ***the theory says the cover MAY stand among the entries, not that it must*** — and a reader does not want a book's cover listed inside that book's own contents. **A presentation choice, made where the model can still see it.**

**[The canonical echo](../the-semantics-of-books/06-the-canonical-echo-and-views.md):**

> *"a subject viewing all its books that way sees a list of title-sections — **the Table of Contents**, with **the cover legitimately among the entries**, and the ToC free to contain even itself."*

**[`$TableOfContents.parts()`](../../package/src/book/TableOfContents.tsx) filters out `this`, `$Cover`, and everything parenthetical.** ***Two of those three are the theory's own examples of what belongs.*** *Probably a presentation choice; **it is made in the model**, which is where the theory lives.*

## <a id="s15"></a>S15 — Nothing in the framework cites the theory it exists to realize

> ***REFER*** · *blocked on [R-b](06-the-cleaning.md#rulings)* — ***the framework should cite its own theory and cannot, while comments are banned in it.*** [O8](02-organization.md#o8)'s ruling decides the mechanism, and this entry is why that ruling is not cosmetic.

***Fifteen chapters derive the object model. Not one line of `package/src` points at them***, and no book on this branch says *this class is that primitive*.

*Doug: **"everything in here is in some sense related to that formalism… as code that exemplifies a formalism and code that has to evolve based on a rigorous formalism, it has to be flawless in a way that most code does not."***

**[Reference Desk](../../../../.claude/library/reference-desk/.cover.md) exists for exactly this, and the framework does not use it.** ***Every entry in this chapter is a disagreement nobody could have noticed while reading the code alone***, because the code does not say where its authority is.
