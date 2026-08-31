# The Reference, and What It Points With

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)

---

*This book's cover has carried three threads under [**Still to come**](.cover.md) since it was written: **the references graph and the derived `citedBy` inverse**, **the reference desk as the boundary organ**, and **the transitive extension back to the SRT foundation's roles**. All three are in the [source conversation][conv], worked out at length, and none of them has ever been derived here.*

***This chapter derives the first and the third.*** *It is written now because [The Bind](../projection/29-the-bind.md) closes on references as the next subject — Doug: **"prepare for references. You can tell them to read about v1 references and see that they are a mess. We are going to brainstorm and build a more unified abstraction for it."*** **It states what the source settles, measures what was built against it, and stops at the questions.** *Nothing here is a design; the design is Doug's to make.*

---

# <a id="the-correction"></a>The correction the whole family rests on

***Doug threw out the first hierarchy in one sentence, and it is worth quoting whole because the reason is in it*** ([source][conv], the *card in a card catalogue* message):

> **"We're really far off. A Reference is not a type of name. I mean, I don't think it is. The card in a card catalogue is a reference right? It is not a name."**

**The argument is an appeal to an object anyone can picture.** *A catalogue card has a name on it — and a call number, a subject heading, a collation. If a reference were a kind of name, the card would have to be a name with extra parts, which is not what a card is.* ***A card carries a name; it is not one.***

**Doug then guessed the anatomy, and marked the guess as a guess** ([source][conv], the same message):

> **"I think a reference has a name and a link, no? I don't know for sure but why not do a lot of research."**

***The research came back and refined the second half.*** *Not a link — a **locator**. The finding, from the collaborator rather than from Doug, is that the same anatomy appears in every habitat the reference lives in:*

| habitat | the identification | the location |
|---|---|---|
| catalogue card | the heading | the call number |
| citation | author and title | volume, page |
| footnote | the source | *ibid.* — the place, alone |
| index entry | the topic | the page numbers |
| bibliography entry | the work | the imprint |
| hyperlink | the text you read | the target |

***And `ibid.` proves the anatomy by subtraction.*** **It means *in the same place* — the identification elided, the locator surviving by itself.** *A form that can drop one half and stay usable is a form with two halves.*

**So the anatomy is *identification coupled with location*,** *and a reference is composed of them rather than being a specialization of either.* ***That is the [composition edge](03-inheritance-and-composition.md), not the inheritance one*** — which is what Doug's *"a reference has a name and a link"* was already saying, in the register where a composition is written as *has*.

## <a id="the-two-edges"></a>Where this puts the referential family

***[Chapter 03](03-inheritance-and-composition.md) drew the two edges; this is them applied to the pointing side.*** **The shape the source arrives at:**

| | | edge |
|---|---|---|
| **a name** | carries a target, and nothing else | *the primitive* |
| **a reference** | ***a name and a site*** | ***composition*** |
| **a link** | a reference that can be traversed | *inheritance* |
| **a signature** | a link whose both ends are constrained | *inheritance* |

***And the principle stated with it is the one that governs the whole book:*** **composition ascends scale; inheritance refines within a scale.** *Every rung-change mints new properties; every species on a rung adds or constrains without changing rung.*

***This is where [chapter 03](03-inheritance-and-composition.md) and its source part company, and the divergence is worth naming rather than reconciling quietly.*** **That chapter placed `$Reference` as *"not a composition of parts but the general act of pointing"*.** *The source has it as a composition of exactly two parts.* ***Both readings are defensible and they build different code***, so the fork goes to Doug rather than getting settled here.

---

# <a id="two-loops"></a>Two loops, and only one of them is identity

***This is the piece I most regret not having derived earlier, because it answers the question the v1 code could never answer: which of these things is the primitive.***

**Doug first derives identity from cataloguing** ([source][conv], the *do you need help* message):

> **"The very fact that there's subjects gives you identity under transitivity of reference. A book refers to its canonical subject which refers to it. Therefore, it refers to itself under transitivity. Done."**

**Then he replaces it with something cheaper, and the replacement is the one that stands** ([source][conv], the *maybe we don't need transitivity* message):

> **"Or maybe we don't need transitivity and we just understand that the title of the book is a reference that points to itself, in which case by virtue with having a title every book has its identity, which makes sense right the title is its name"**

***Two self-arrows, two meanings, and they had been competing for one job:***

| the loop | what it says | what grants it |
|---|---|---|
| ***the title's*** | ***this book is itself*** | **having a title** |
| ***the catalogue's*** | ***this book is held*** | **being catalogued** |

***So identity is not primitive here — it is earned by bearing your own name.*** **And that is the same derivation order the foundation already runs one level down**, where individuality is a theorem of referentiality rather than an axiom. *A book has identity because something refers to it, and the nearest something is its own title.*

***Three grades of self-arrow fall out, and they ladder exactly onto the summit material in [chapter 07](07-the-subjective-subject-and-the-library.md):***

- **named** — it has a title. *Every book.*
- **held** — it is filed under a subject. *Every catalogued book.*
- **self-holding** — it is filed under **itself**. ***The summit, and only the summit.***

**Read that way, [the auto-categorical](07-the-subjective-subject-and-the-library.md) stops being a special construction and becomes the third rung of an ordinary ladder.**

---

# <a id="the-three-grades"></a>The three grades of arrow — Doug's, and unrecorded until now

***This is the chapter's most load-bearing quote and it has never been in this library*** ([source][conv], the *those are the type arrows* message):

> **"Going up is subjective and going down is objective and going across his relational by the way in case you want to know what those type arrows are. It is the transitive expression of the three essential roles in SRT that exist at this level. And since you can imagine routes that are aspects of both each route has a sort of color that tells you how much of all of those it is."**

| direction | where it goes | its role |
|---|---|---|
| ***up*** | to what holds you — your subject, and onward to the summit | ***subjective*** |
| ***down*** | into what you contain and present | ***objective*** |
| ***across*** | book to book as peers | ***relational*** |

***So references are not one undifferentiated kind of pointing.*** **A reference has a grade, and the grade is which of the three roles it exercises.** *The card that files a book under its subject and the citation that points at a peer are not the same arrow wearing different content — they are different arrows.*

**And a route made of several steps carries a mixture, which Doug calls its *colour*.** *Count the steps of each grade and you have a point in a triangle whose corners are pure subjectivity, pure objectivity, pure relation.* ***Concatenating routes adds their counts***, so the mixture composes.

## <a id="the-grammar"></a>The grammar of a valid route

**Doug then constrains which routes are legal** ([source][conv], the *valid paths* message):

> **"you have to do subjective steps first, but their optional cause you could stay at a book, then you can do as many relational steps as you want, and then you can optionally do objective steps down if you're still in subject land. And those are the valid paths."**

***Optional ascent, free relational middle, optional descent.*** **And the shapes that fall out of the fragments are recognisable as things the library already does:**

| the route | what it is |
|---|---|
| **up only** | *being catalogued* — a book entering its context |
| **down only** | *reading* — descending into what a thing presents |
| **across only** | *scholarship* — book bearing on book, no change of altitude |
| ***up, across, down*** | ***lookup, and at its full extent, analogy*** — rise to where two things are comparable, relate, descend to the instance |

***Doug then read his own grammar back to its root, and this is the sentence the whole chapter builds toward*** ([source][conv], the *just the transitive of* message):

> **"Notice that your factorization is just the transitive of s =r> o. Right? It is turning in exactly the way that that is. If you don't do the subjective one, then you end up with relation, then object which is reference — you move from one subject to another, and then go down. You can skip the object and do some subjective moves and relational moves and then you'll end up in the subject itself so you're in representation. You can do a bunch of relational hops and I guess that one doesn't quite make sense yet it's something like identification. And that's just mapping straight onto yourself and something like individuality, which is where identity comes from."**

***The route grammar is the foundation's own clause with each role given transitive extension.*** **The fragments recover the foundational types one at a time:**

| the route | ends | the type it recovers |
|---|---|---|
| up, across, down | at an object, via relation, from a subject | ***relationship*** — the whole clause |
| across, down | at an object, no ascent | ***reference*** |
| up, across | at a subject | ***representation*** |
| across only | among peers, no altitude | ***identification*** |
| the empty route | on itself | ***individuality*** |

**And Doug adds the condition that makes the claim true rather than decorative** ([source][conv], the *representational role* message):

> **"it's only a transitive extension if Books play a representational role relative to the morphisms. They are objects, which hold the relationships between them, and that is absolutely true of what language means in a system that is used to organize language."**

***I read that as the hypothesis the whole claim hangs on, and it is a claim about our code as much as about the theory:*** **a reference must be **held inside** the writing that makes it, not stored beside the writing in some index.** *Any edge-coloured graph satisfies the grammar; what makes this an extension of the foundation is that the objects carry their own arrows.*

---

# <a id="inscription"></a>A reference has a site, and only half the graph is authored

***The same condition, said as a property of where a reference lives*** ([source][conv], the *every book has references* message):

> **"Every book has references to other books in its pages and we're gonna have that in composition too. Each object points to other things. We could also ask in a well-defined way, even though it wouldn't be a primitive of the library, for all the other books in the library that pointed to it."**

***Two things in that, and the second is a design constraint with teeth.***

**First: a reference is *in the pages*.** *It has a site — the place in the writing where it stands.* **That is what [the settled account](15-the-levels-of-writing.md) is reaching for when it says a written part is the very object that was written**, and it is why a reference cannot be a row in a table off to one side.

**Second: the two directions are not alike.** *You write your own references; you cannot write the books that cite you.* ***Outgoing is authored. Incoming is compiled — derived, after the fact, and Doug marks it explicitly as not a primitive.*** **The world's own confirmation is that it built the incoming direction as a separate book: the citation index.**

***This is the cover's [`citedBy` inverse](.cover.md) thread, and the answer it wants is that `citedBy` is a reading, never a stored member*** — *the same shape as [R309](../projection/29-the-bind.md#r309)'s enumerations and [R251](../projection/27-composition.md#r251)'s "composition affords a catalogue; it does not declare one."*

---

# <a id="composition-authored"></a>Composing two references is an act of authorship

***A path from `a` to `c` is not free.*** **Doug locates where composites come from** ([source][conv], the *what a librarian actually does* message):

> **"what a librarian actually does when writing her autobiography is that every time she takes one of those colored paths, she writes it down and talks about it, so that her autobiography actually contains the transitive sort of research that she did to get from one place to another."**

**So a composite reference exists when somebody wrote the journey down.** *In the wild that is what a survey, a review, a commentary is — a piece of writing whose content is how one work bears on another.* ***A reference layer that assumes every composite already exists is assuming a literature nobody wrote.***

## <a id="the-clipping"></a>And a stored path does not need its ends

***This is the most immediately practical consequence in the chapter*** ([source][conv], the *clip off the ends* message):

> **"by virtue of every book being written by her and her autobiographies being in the subject of the library, she can always kind of clip off the ends, right? Whatever book she ended up in she can get back to herself because she wrote it. Any book that she started from can be thought of as remembering where she left off by going to the library and walking to the section. So it makes sense for the middle to be there because her autobiographies are the most natural place to do that search and get back to where you've started"**

***Two standing guarantees make the ends redundant.*** **Reaching anything is guaranteed by the catalogue — go up and come down.** *Getting home is guaranteed by authorship.* ***So what a path has to store is the middle; the prefix and the suffix are supplied by the structure and re-derived on demand.***

**I read this as the direct answer to what `$Path` should hold** — *and v1's `$Path`, which chains a first reference to an onward one and stores both, is storing what the theory says is free.*

---

# <a id="what-was-built"></a>What was built, measured against all of that

## <a id="v1-measured"></a>v1 — nine files, and the shape of the mess is in the sizes

***[The Bind's handoff](../projection/29-the-bind.md#handoff-references) measured it, and the measurement is the diagnosis:***

| | lines | what it names |
|---|---|---|
| **`$Referent` · `$Reference` · `$Catalogue`** | ***7 · 8 · 10*** | *the three that ought to carry the abstraction* |
| `$Highlight` · `$Path` · `$Link` · `$Location` | 34 · 34 · 37 · 38 | |
| ***`$CardCatalogue` · `$IndexCard`*** | ***68 · 87*** | ***ten things each*** |

***The three smallest files are the ones the theory says are load-bearing.*** **Read against this chapter, four specific divergences stand out — and none of them is carelessness; each was a reasonable local decision:**

| what the source settles | what [`.archive/reference/`](../../package/.archive/reference/) has |
|---|---|
| **a reference is a name and a locator** | ***`$Reference` has neither*** — `copy`, `parenthetical`, `read()`, `follow()` |
| **arrows are graded up / down / across** | ***no grade anywhere*** — every reference is the same kind of pointing |
| **a path stores the middle** | ***`$Path` stores `$first` and `$onward`*** — both ends held |
| **identity is the title's self-arrow** | ***`$Location` holds an integer***, and `$IndexCard` holds a `$name` string |

***And one member is the source's own idea arriving under a different name.*** **`$IndexCard` is declared a `$Chapter`** — *its comment says "one grade below the book it stands for"* — **which is [the canonical projection](06-the-canonical-echo-and-views.md): a book presenting as the part containing only its canonical.** *The best thing in the v1 reference layer is the one place it stopped inventing and used the derivation.*

## <a id="v2-measured"></a>v2 — nothing, and that is the opportunity

**[`src/reference/`](../../package/src/reference/) holds one file and its whole content is:**

```
export interface $Referent$ extends $Chemical { }
```

***Empty. It constrains nothing, `$Writing` implements it for no effect, and [The Bind's own sweep](../projection/29-the-bind.md#r340) has it listed for deletion.*** **So the reference layer is not being refactored. It is being written for the first time, against a model that has changed underneath it** — *one block per bond, types split from classes, specifications carrying the rules.*

---

# <a id="open"></a>What is open — the questions, not the answers

*Each of these is a real fork with two defensible sides, and each is Doug's. **I have deliberately not chosen***, because [a plan that decides on a reading of a contradiction is how a word gets replaced a third time](../projection/29-the-bind.md#r352).

<a id="q1"></a>**Q1 — is a reference COMPOSED of a name and a locator, or is pointing the primitive it specializes from?** *The source composes it; [chapter 03](03-inheritance-and-composition.md) makes pointing the general act.* **The first gives a reference parts and therefore a parse; the second gives it none.**

<a id="q2"></a>**Q2 — what is a locator, in a library with no addresses?** ***Sprint 47 ruled out the string outright*** — *"no addresses in the model — a string address serializes a reference and the abstraction wasn't made to serialize"* — **and the register still records the string as built.** *If a locator is not a string and not a held object, the third thing has not been named.*

<a id="q3"></a>**Q3 — does `index` belong to the writing or to the reference?** ***Two of Doug's own rulings disagree, and the disagreement is now in the code.*** *[The settled account](15-the-levels-of-writing.md): "a number is something a **reference** holds — that is what a `$Location` IS."* **[`$Writing.index`](../../package/src/writing/Writing.tsx) exists today and the parse assigns it.** *[The handoff flags the numbering rule as unpicked](../projection/29-the-bind.md#handoff-index); this is the same question one layer down, and references are what makes it urgent.*

<a id="q4"></a>**Q4 — is `$Title` a paragraph or a reference?** ***This is the sharpest fork, because both answers are already built into different parts of the record.*** *[The Bind](../projection/29-the-bind.md#r281) mints `$Title extends $Paragraph` from paragraph residue — a level kind.* **[Chapter 05](05-the-evolutionary-root-symbol-and-literal.md) has it as *"the particle where the two lineages legitimately fuse"* — a name that is also canonical.** *And [the two loops](#two-loops) put the whole of a book's identity on it.* ***A title cannot be only a heading if identity rides on it.***

***And the fork does NOT have to be settled before either is built, which is worth knowing before anyone treats it as a blocker.*** **A class gets one `extends`, so `$Title extends $Paragraph` would ordinarily foreclose `$Title extends $Reference` — and that foreclosure is precisely [the base-class scarcity](../designing-inexplicable-phenomena/10-the-type-and-the-instance.md#the-problem) the type split was built to remove.** *Doug's own statement of it: **"TypeOfBook holds the meaning of book, so you don't have to derive from Book to have it."*** ***So a title can be a paragraph by class and a reference by carried type***, and the two lineages fuse on the instance rather than in the hierarchy. **What stays Doug's is whether the pointing lives on the type or on the class** — *not whether one has to be given up.*

<a id="q5"></a>**Q5 — is the grade of an arrow a property of the reference, or a reading over a route?** *Doug's colour is computed from a route's steps, which suggests a reading.* **But a single reference is already one step of a known grade** — *a subject entry points up, a table of contents points down* — **so the grade may be knowable at the reference itself.**

<a id="q6"></a>**Q6 — where does the overflow threshold sit?** *[Chapter 09](09-composition-and-collection.md) has the law: when the payload outgrows the entry, containment turns into reference.* **The source ladders it — a dictionary entry holds a definition, an encyclopedia entry holds an article, a subject's entry holds nothing and points.** ***So an entry is one shape with a payload that may be absent, rather than two classes.*** *Whether the code says that is a design question.*

<a id="q7"></a>**Q7 — does the parse produce references?** **[R305](../projection/29-the-bind.md#r305) has the parse binding every part it finds, and [K42](../projection/29-the-bind.md#k42) is the hazard that carries.** *If a reference is written in the prose — which [inscription](#inscription) requires — then the parser meets it, and what it does with it is unruled.*

---

# <a id="names"></a>Whose words these are

*[Nothing in this library is a name I invented](../../../../.claude/library/..teamsmanship/05-territory.md), and this chapter reaches for enough vocabulary that the provenance is worth stating.*

| | |
|---|---|
| ***Doug's, verbatim*** | **reference · name · link · title · subject · catalogue · up / down / across · subjective / objective / relational · colour · the valid paths** |
| ***the source's, from its research rather than from Doug*** | ***locator*** · ***inscription*** — **both native to the book world**, *neither ruled by him;* **flagged, and replaceable** |
| ***this library's incumbents*** | *canonical · composition · collection · entry · the canonical projection · the overflow* |
| ***mine*** | ***none.*** *Where a thing has no name here, it is described rather than called something.* |

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md "The Semantics of Books — Doug, 2026-07-18; uuid 8dbb8e2b-d4c8-413e-aba0-45b382969754; the primary source"
