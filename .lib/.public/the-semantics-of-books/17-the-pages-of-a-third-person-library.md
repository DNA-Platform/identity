# The Pages of a Third-Person Library

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Doug set the work, 2026-09-07:*** **"We are going to research wikipedia, and this was already started, and organize different types of pages into one of these libraries, and write it all down as an extension of what we have. This will help us understand what it means to make a library."**

*And the objective it continues, from [the demo](../projection/49-the-wikipedia-demo.md):* **"we are going to look at wikipedia, and we are going to try to organize that into a library so we can build it. Not every page (duh) but enough to prove we can build the rest."**

**This chapter does the organizing.** *It takes Wikipedia's own page taxonomy, read from their documentation rather than from memory, and asks of each kind the two questions this book has already derived. What comes back is not a mapping table — it is a diagnosis of what Wikipedia is, and the diagnosis is that **Wikipedia is this library with the closure missing**.*

## <a id="the-two-questions"></a>The two questions, and they are the only two

Everything below is decided by asking a page two things, and both are already derived here.

**First: does it CONTAIN or does it REFERENCE?** *[Composition and Collection](09-composition-and-collection.md) is the fork — composition contains and flattens, collection catalogues without absorbing. A chapter is composed into its book; a book is collected into its subject.* ***Cross the threshold and containment turns into reference.***

**Second: where does its author arrow go?** *[The First Person and the Third](14-the-first-person-and-the-third.md) makes this a species distinction rather than a quality. **First person: the author arrows come home.** **Third person: they escape by design.***

*That is the whole apparatus. I did not need a third question for any page Wikipedia has.*

## <a id="the-namespaces"></a>The namespaces, organized

***Read from [Wikipedia:Namespace](https://en.wikipedia.org/wiki/Wikipedia:Namespace) — sixteen subject namespaces, each paired with an odd-numbered talk namespace, plus two virtual ones.***

| # | namespace | contains or references | its position here |
|---|---|---|---|
| **0** | **Main** — the articles | ***contains*** | ***a book.*** *Title, lead, contents, sections, references, categories — the whole of [Level Two](04-the-book-and-subjectivity.md)* |
| **14** | **Category** | ***references*** | ***a [subject](09-composition-and-collection.md)*** — `$Collection<$Book>`. **The fit was already called exact; the derivation now says why** |
| **100** | **Portal** | ***references*** | ***a subject's cover*** — *the [canonical projection](06-the-canonical-echo-and-views.md) of a collection, drawn for a reader. **Not a kind; a view*** |
| **2** | **User** | ***contains*** | ***an autobiography*** — **a first-person book living inside a third-person library**, which is [exactly the structure](14-the-first-person-and-the-third.md) our teammates' books already run |
| **4** | **Wikipedia** — the project | ***contains*** | ***the [auto-categorical summit](07-the-subjective-subject-and-the-library.md)*** — *the library's account of itself, shelved by itself. **Dewey at 025**, and it is where the demo's `.article` page actually lives* |
| **12** | **Help** | ***contains*** | *the same summit, written for a reader instead of for the record* |
| **6** | **File** | ***neither*** | ***a card for a thing that was never internalized*** — *the library holds an account of the artifact, and [never the artifact](11-idealism-or-accuracy.md)* |
| **10** | **Template** | ***neither*** | ***not writing at all*** — **a form: structure without content.** *Ours is a `$Format`, or a specification. The infobox is [a catalogue card](../designing-inexplicable-phenomena/18-the-wikipedia-fit.md#the-card)* |
| **828** | **Module** | ***neither*** | *code beneath the library, the way `src` is beneath `.lib`* |
| **118** | **Draft** | ***contains*** | ***writing with no subject yet*** — *composed, uncatalogued. It is a book that has not been [collected](09-composition-and-collection.md)* |
| **8** | **MediaWiki** | ***neither*** | *the interface's own strings — the reading room's signage, not its holdings* |
| **710** | **TimedText** | ***neither*** | *an annotation on a file* |
| ***odd*** | ***every Talk namespace*** | ***contains*** | ***the account of how the account was made*** — *and see below, because this is the one the library already understands and Wikipedia does not* |
| **−1** | **Special** | ***neither*** | ***a computed reading.*** *`Special:RecentChanges` is a `view()` over the catalogue, not a page. **Nothing is stored*** |
| **−2** | **Media** | ***neither*** | *a locator with no identification — [half a reference](16-the-reference-and-its-locator.md)* |

## <a id="mainspace"></a>And inside mainspace, which is not all articles

***[Wikipedia:What is an article?](https://en.wikipedia.org/wiki/Wikipedia:What_is_an_article%3F) is blunt that most of mainspace is not:*** **"hundreds of thousands"** *of lists, disambiguation pages and redirects live there without being articles. Each one lands somewhere different here, and two of them land on things this library already built.*

| mainspace kind | their definition | its position here |
|---|---|---|
| **article** | *"a page on this site that has encyclopedic information on it"* | ***a book*** |
| **stand-alone list** | *formatted as a list rather than prose* | ***a [catalogue](16-the-reference-and-its-locator.md)*** — a book whose body is mentions rather than composition |
| **set index** | *resolves naming conflicts among things of one kind* | ***a catalogue keyed by a name*** |
| **disambiguation** | *"resolve naming conflicts"* between different kinds | ***one heading, many cards*** — *a drawer of the card catalogue. **A name that mentions several referents and identifies none*** |
| **redirect** | *"re-route one page to another page"* | ***a `see` reference*** — *the index entry that reads **Automobile, see Car**. **Locator with no content, which is the reference's other half*** |
| **stub** | *an article of lesser quality* | ***not a kind at all*** — a book, measured |

***Two of those are the sharpest results in the chapter.*** **A redirect is a `see` reference and a disambiguation page is a card-catalogue drawer** — *both are ordinary library apparatus that a wiki reinvented, and neither is a kind of article. A library has had both for a century, and neither of ours needs a new class:* **a redirect is a [mention with a path and no copy](16-the-reference-and-its-locator.md); a disambiguation page is a mention whose referent is not unique.**

## <a id="the-finding"></a>THE FINDING — ***Wikipedia is this library with the closure missing***

**Wikipedia has exactly one type of page.** *Every one of the sixteen namespaces above is the same object — a wiki page, wikitext, a history, a talk page — and what makes an article an article rather than a category is **a string prefix on its title**.* `Category:Physics` *is a page whose name begins with `Category:`.* ***That is the whole mechanism.***

**So the kinds are a naming convention, not a type.** *Nothing prevents a category from being written as prose. Nothing makes a portal a projection of anything; it is hand-maintained, and drifts. Nothing makes a redirect and an index entry the same object, though they are.* ***The distinctions are real, universally understood, and enforced by editors rather than by the representation.***

**And that is precisely the condition Doug named at the very beginning of this book**, in the *self-referential components* passage ([conversation][conv]):

> "The system I'm abstracting already has the self-referential components it's just not closed under a type of representation, but that's a property that you need for a type of representation system to even have the ability to be fundamental."

***He said it about libraries and dictionaries. It is more exactly true of Wikipedia than of either.*** **Wikipedia has every self-referential component this book derives** — a project namespace that documents the project, a Manual of Style that is itself styled by the Manual of Style, categories that are categorized, a page called *Wikipedia* that is an article about the thing you are reading it in — ***and none of it is closed, because a page is not a kind of anything.*** *The loop is present and inert.*

> ***What our library adds is not the self-reference. It is that the self-reference becomes a property of the representation rather than a coincidence of the content.***

## <a id="the-author"></a>The correction — ***Wikipedia's author arrows exist, and they escape exactly as the theory predicts***

**[The Wikipedia Fit](../designing-inexplicable-phenomena/18-the-wikipedia-fit.md#the-viewless) records `$Author` → *"nothing. Wikipedia has no bylines — no fit, and it is the sharpest one."*** *That reading is right about the **page** and wrong about the **library**, and the correction is worth more than the original observation.*

***Wikipedia's author arrows are everywhere.*** **Every edit carries one, the history tab is the collection of them, and they point at `User:` pages — which are first-person books held inside the encyclopedia.** *The arrow is simply not printed on the article.*

**Which is the third-person library's structure, exactly as [chapter 14](14-the-first-person-and-the-third.md) derives it:** *author arrows that **escape by design**, pointing at accounts their subjects wrote themselves, in a namespace no one else may write.* ***Wikipedia enforces the wall the same way we do*** — *a user page is edited by its user; the encyclopedia does not author it.*

**So Wikipedia is not a library without authorship. It is a third-person library that hides the author arrow in the apparatus and shows only the account.** *And its fixed point is the same shape as ours: not **author = subject**, but **described = describing** — the encyclopedia is correct when what it says about itself in the `Wikipedia:` namespace is what it does.*

## <a id="the-inversion"></a>The inversion — ***membership is declared from below, and the collection is compiled***

**One structural difference is worth carrying into the code, because it is a design we half-hold already.**

*In this book a [subject collects books by reference](09-composition-and-collection.md) — the collection names its members.* **Wikipedia does the opposite: an article declares `[[Category:Physics]]` on itself, and the category page is *generated* from every page that declared it.** ***The membership lives on the member; the collection is compiled.***

**That is the `citedBy` direction, which [the cover of this book](.cover.md) already reads as *compiled rather than stored*.** *Wikipedia is the proof that the compiled direction scales: seven million articles, no collection ever written by hand, and no collection ever stale.* ***A category is a query wearing a page.***

*And it explains the portal, which is the same idea done badly: **a portal is a category page that someone maintains by hand**, and the difference between a portal and a category is exactly the difference between a stored collection and a compiled one. Theirs drift; theirs compile. Ours should compile.*

## <a id="what-it-says"></a>What this says about what it means to make a library

***Three things, and the third is the one I did not expect.***

**A library is not a set of documents; it is a set of KINDS with a closure.** *Wikipedia has the documents, the self-reference, the cross-reference, the authorship and the catalogue — everything — and it is not a library in this book's sense, because a page is not an instance of anything. **The kinds are the library.***

**Every apparatus a wiki invents turns out to be library apparatus under a new name.** *Redirect is `see`. Disambiguation is a drawer. Infobox is a catalogue card. Talk is the account of the account. Portal is a cover. **Not one of them needed a new kind here**, which is the strongest evidence so far that the seven levels and the two operations are enough.*

***And the thing a wiki has that this book had not derived: the talk page.*** **Every Wikipedia page is paired with an account of how it came to say what it says**, in a namespace of its own, at the same address. *We have this — the [sprint chapters and the projection book](14-the-first-person-and-the-third.md) are exactly it, and chapter 14 already argues they are **load-bearing rather than documentation** for a third-person library.* ***What we do not have is the pairing.*** *Wikipedia gives every page a talk page automatically, by construction, at a computed address. Ours are related by a link somebody remembered to write.*

> ***The open design question this research produces: should a piece of writing in this library have, by construction, the account of its own making — the way it has a title and a subject?*** **That is a question about the kinds, and it is Doug's.**

## <a id="open"></a>What is not settled here

*Stated as questions rather than answered, because these are rulings.*

- ***Is a portal a kind, or is it a subject's cover?*** *I have written it as a view. If it is a kind, it is the first Wikipedia page type that needs one.*
- ***Does a disambiguation page have a referent?*** *A mention identifies; this one deliberately does not, and [chapter 16](16-the-reference-and-its-locator.md) says identification is the half that stands alone. **A mention that identifies several things is either a catalogue or a defect**, and I do not know which.*
- ***Which of these do we BUILD?*** *Doug's rule for the demo stands — **it may invent Wikipedia's content and may not invent kinds of writing**. On this reading a category page and a disambiguation page can both be written today with what `src` already has, and that is the claim worth testing next.*
- ***The talk-page pairing***, above.

---

*Written 2026-09-07 out of Doug's instruction to organize Wikipedia's page types into the library. Sources read for it: [Wikipedia:Namespace](https://en.wikipedia.org/wiki/Wikipedia:Namespace) and [Wikipedia:What is an article?](https://en.wikipedia.org/wiki/Wikipedia:What_is_an_article%3F). It extends [The Wikipedia Fit](../designing-inexplicable-phenomena/18-the-wikipedia-fit.md), which mapped Wikipedia's **parts of a page** onto our viewless kinds; this one maps its **kinds of page** onto the two container operations, and corrects that chapter's reading of `$Author`.*

<!-- citations -->
[conv]: ../../../../../dna-library/library/claude-dna/conversations/2026-07-18-the-semantics-of-books.md
