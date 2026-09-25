# The Book's Little Framework

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***Doug, 2026-09-11, in the brainstorm that reopened Sprint 58:*** **"Every time you write a book, you have the option to build a little framework to make it work."** *This chapter is that framework as he described it, one question at a time, and the three facts measured the same morning that anyone touching it must know. It extends the convention already ruled in [Using the Public Library](01-using-the-public-library.md), which says a `.chapter` subclasses the book's normal chapter and is imported as `Chapter`.*

## <a id="files"></a>The three files a book writes — ***each in Doug's words***

| file | carries | never carries |
|---|---|---|
| **`.book.tsx`** | *"the book subclass and DI registration, which is generally scoped to the book"* — the header, the theme switch, `$Latex.$register(Aaronson)` | a document kind |
| **`.chapter.tsx`** | *"the document level components and themes that would be reused in the book and in the library related to the subject"* — the book's `Document`, its section kinds, a chapter theme | the book class or its registrations |
| ~~**`.document.tsx`**~~ | ***struck 2026-09-12 — Doug: ".document.tsx is not something you are allowed to create. But this in .chapter. It was to be for all the chapter-like components in the repo. On top of subclassing book, that one was to be for DI." And on whether a document subclass is needed at all: "I don't know if the document subclass needs to be standard, does it? Do we need it for DI?" — it is not: a chapter prints the package's own `Document`, and a book that needs a scope over its documents declares the subclass in `.chapter.tsx` with the reason beside it. The application's shared kinds — `.wiki`'s four links — stand in `.wiki/.chapter.tsx` on the same word.* | |

**A chapter file is a class extending the book's own chapter** — ruled over "a class extending the package's `$Chapter`" and over "the file is the document" — **and writes its document in `print()`**: *"I like print so if it's consistent I'd say print."* `$Writing.view()` draws the definition element, the classes and the annotations' formatting around whatever `print()` returns, so a chapter written there gets all three for free; written in `view()` it gets none.

```tsx
// 1-introduction.tsx
import $Chapter from './.chapter';
import Document from './.document';

export default class $Introduction extends $Chapter {
    print() {
        return (
            <Document>
                <Section>…</Section>
            </Document>
        );
    }
}
```

**The book is the chapters passed in as components** — *"I want the user actually subclassing chapters when they write them so that you can pass them into books. You pass a component into a book. DO NOT go backwards."* — and the binder writes that book file.

## <a id="page"></a>The page — ***"page per book, chapters as anchors controlled by the router"***

One page per book, the chapter's route an anchor on it, and the router *"could also render them as dynamic, as of one per view but changing."* So the anchor scheme of [chapter 25](03-the-address-and-its-wiring.md) is the page's navigation, and a chapter-at-a-time page is the same book under a different router, not a different book.

## <a id="levels"></a>The library level stands apart — ***what a chapter is and is not***

*"The document is the literal. That it's a chapter is more like an interpretation, and that a book has many of them is more like something too. They exist at the library level and the library level should stand apart. Documents and chapters interact referentially."* So: **a chapter never holds its document** — no `below()` from chapter to document, no lifting of what a view draws into parts — **it means it, by reference.** A chapter holds annotations only, says nothing of its own, and those are its two rules.

**And `means` has to be a reference** — asked whether that ruling reverses [chapter 16 of The Semantics of Books](../the-semantics-of-books/16-the-reference-and-its-locator.md), which settled a mention as writing that means the thing and carries no path: *"the mention probably can be a reference or writing that means it. I think it can be any as long as the piece of writing means the place where the book goes, and if writing uses `means` to refer then it works. But `means` has to be a reference. We need to find the extensible way for this to work."* So the invariant is on `meaning`, not on the class chain: whatever a mention is, what it means is a `$Reference`, and the chain is chosen for extensibility.

**The `$$` classes inherit from Reference and carry no type shells:** *"forget all the type stuff for `$$`, just inherit from Reference."* `$$Chapter` is the reference to a chapter, what a table of contents lists and what makes whatever it is passed to link. **Exported lowercase** — `chapter`, `section`, `doc` for the document because `document` is the DOM's — *"and when imported, it is capitalized when it doesn't conflict."*

**A chapter mention converts into a path, and things that take a title consume it:** *"If it's a reference, it effectively converts into a path. Can't it be nested into other things that take a title as extension? Can't they consume it? They have the real title of the book and a way to convert that into the url for the book too."* So a contents row is a writing that takes a title, the mention passed into it makes it link, and the mention knows the real title and its URL; the layers are the rows' nesting.

**Composition is the ladder:** *"each type carries the one below it. Document carries Sections which can carry sections recursively or paragraphs which can carry paragraphs recursively or sentences — a parser is used below paragraph and we don't out of the box use that level of structure, though it might need to be used to get a very specific bookmark."*

**And the ladder itself is reflection's, not a method on any type** — *"there are 6 levels: Letter–Document, and then Chapter–Book. Reflection can have that memorized"* — worked out in [The Composition Type Hierarchy](../the-type-system/07-the-composition-type-hierarchy.md); and the theme's place in this framework is ruled in [Themes per Type, Formats per Instance](../the-motif/04-themes-per-type-formats-per-instance.md).

**Types stay, and that is the multiple inheritance:** *"All types should have their `specifically` run on the class. That is the way multiple inheritance works here. The informal coupling of the types and interfaces allows multiple ones to weigh in."* So a heading is a paragraph because two types stand in its block and each runs its rules on it; what simplifies is the interfaces and the `$$` shells, never the type standing in the block.

## <a id="citations"></a>Citations, entries, and how a piece of writing reaches another chapter — ***designed with Doug 2026-09-11, an experiment that holds***

**The authoring surface, his choice:** *keyed entries in an ordered list, citations by key.* An entry is a paragraph of the References whose leading `key:` becomes its fold, so its id on the page is its key; a citation names the key and draws the entry's place:

```tsx
<Entry>cook1971: S. A. Cook. The complexity of theorem-proving procedures. In Proc. ACM STOC, 1971.</Entry>
…
<Paragraph>…proved NP-complete<Citation>cook1971</Citation>.</Paragraph>
```

**How the citation reaches an entry in another chapter's document — measured before it was designed.** A document a chapter prints has *that chapter* as its parent, the chapter its positional mention, the mention the book: the chain chemistry threads by default since 2026-09-06 ([the catalyst graph](../../../chemistry/.lib/composition/08-catalyst-graph.md)). So `reflection.book(writing)` and `reflection.chapter(writing)` are walks, `book` is a nullable getter on Writing — *"it will likely be nullable right? I am not sure when it is there"* — and nothing is held for it.

**The way down is a reference reading what it refers to, and a scratchpad that knows nothing — Doug's rulings of 2026-09-11, after a first scratchpad that an entry wrote at its bond numbered nothing and was halted rather than rescued in chemistry.** *"Doesn't reference have a way to get what it refers to? It should. Can't we get it like that?"* So `$Book` makes one `$Scratchpad` at its bond, a flexible string-keyed collection for retrieval — `keep`, `find` answering the first kept, `all` — that is not chemistry's reflective catalogue, *"catalogue is meant for DI… this is just a flexible collection"*, and not a chemical. A `$Fold` keeps the writing it names there under `#key` at its bond, because the id on the page is already that name, so every folded writing in a book is findable. `$Ref.read()` reads a named fragment from the scratchpad beside the numeric one the address scheme follows. A citation's entry is what its reference finds, and its number is the place of its key among the entries of the document holding it — *"it would be read from the references section"* — by key, never by identity, at draw, nothing cached: *"I don't cache the meaning of the book. It's something to be looked up and caching on chemicals is very very dangerous."* An entry keeps nothing. Chemistry's inline double bond — every part under a printed document bonds twice and only the first draws, [Solutions 71](../solutions/71-the-population-that-never-drew.md) — is why `find` answers the first kept and the number is read by key; the design does not depend on its fix.

**Polymorphism, not a second registry — *"What if I want 27 different types of citations one day?"*** `$Footnote extends $Citation` and overrides one seam: its key lives in the Notes, `read()` finds the note there, the number is its place among the notes, and `marks()` — how a citation sets its numbers, `[76]` and `[191, 194, 193]` for a cite, the bare superscript for a footnote — is the one reading a kind of citation overrides. **The brackets are in the writing, ruled 2026-09-11:** *"let the [] be in the thing so the writer has the ability to control"* — so the paper's theme draws none, while the encyclopedia keeps its own bracket rules because its writer wrote the bare number. **Colours, ruled the same day:** a citation is Wikipedia blue by default, the base's `link`, and ink on the paper — *"there's no color in Aaronson"* — the cite green gone. **A citation may carry several keys,** `<Citation>a, b, c</Citation>`, `keys()` splitting the copy and `numbers()` answering one per key.

**Where a footnote is drawn — ruled twice on 2026-09-11, and what is built is the clean half.** *"Have footnotes at the bottom. But have an abstraction that allows you to control where they would coalesce"*; then *"the book's footer draws the notes by default"*; then *"a footnote isn't required right? So we need to be careful, but it is something that should be coordinated at the book level. Make sure it looks good and is implemented elegantly… I don't want to see a mess."* The natural footnote is LaTeX's — written at its phrase, drawn at the foot, numbered by its place among the marks — and for the foot to draw the notes it must gather what the chapters draw, which only the scratchpad can hold, at bond, where today every inline part keeps its orphan too ([Solutions 71](../solutions/71-the-population-that-never-drew.md)). So that form waits on chemistry evaluating children once, with the margin that moves the gathering point designed beside it, and `$Book.footer()` stays the empty template method that will draw them. **What stands:** `$Notes` is a document kind beside `$References`, written as a keyed chapter placed last by the author, and a footnote mark at the phrase draws its note's place and lands on it — no new member, the chapter model placing it, the fold finding it, the citation numbering it. A book with no notes has no Notes chapter and draws nothing extra.

**Two limits, measured:** a registered specialisation replaces the rung, so *for References a paragraph is an entry* also made the References' heading an entry, and the registration is out until a specialisation admits the level's own kinds; and a mention given no title is parenthetical, which is what keeps a chapter's document reference from drawing inside the chapter. **Colours:** meaning anchors are Wikipedia blue in the base and never red; the article sets a citation as LaTeX does, hyperref's cite green, a guess flagged for Doug. **Owed:** the landing highlight that fades in a second or two, a footnote written at its phrase and drawn at the foot, and the citation list Doug named.

## <a id="facts"></a>Three facts measured 2026-09-11 — ***each cost hours, and two were already filed***

1. **The suite reads `dist`.** [vitest.config.ts](../../package/vitest.config.ts) aliases the package to `dist/lib.js` on purpose, so a probe or a promise sees the last rollup and not `src`, and stack traces show `src` paths through sourcemaps, which hides it. Six files were diagnosed dead against a stale build, and a `git stash` comparison compared a build to itself. **Rollup before every run.** *This is [Solutions 5](../solutions/05-the-suite-that-passed-against-a-stale-build.md), Queenie's, from sprint 48, re-learned at full price because the catchup did not open Solutions first.*
2. **A mention is made by its holder, in the holder's own body — and that is chemistry's rule, not a workaround.** [The catalyst graph](../../../chemistry/.lib/composition/08-catalyst-graph.md) carries Doug's rule of 2026-09-01: *created in an `<X>`, a child of X* — `$()` reads the asker, the chemical whose code is running. So `$(<Mention />, written)` inside a method of the writing parents the mention to the writing, while binding parents the writing to the mention; that is a cycle, and `nearest`, `indent` and every parent walk loop until the worker is killed, the shape of [Solutions 67](../solutions/67-the-walk-that-never-advanced.md). `mentioned()` on Writing did exactly that and is gone; the makers assign `_mention` where they make the part. *And when a chapter must one day hold what it prints, [the assignment](../../../chemistry/.lib/composition/14-the-assignment.md) — `on={() => this.member}` — is the framework's one way for a part a class draws for itself to be held; today Doug ruled it need not be.*
3. **"Print the children" is not "print the block."** The block carries the children *and every annotation an element adds*, the injected theme included — *"Elements can add annotations. They don't HAVE to be in the children."* Printing the block drew the theme's `main` a second time. `print()` draws the block read without its annotations, cached per block, and the view writes the anchor inside its element as before: *"Switch back to what it was with the Content. Clearly there were reasons for not passing the children directly."* **Theming is registration and injection, and is not touched by any of this.**

## <a id="standing"></a>The standing — ***in his words, because it is the method***

*"If you aren't constantly reading the compounds documentation, code conventions and asking — how does this work — asking me, asking the codebase — you can't be trusted to make any decisions."* *"Do NOT throw out whole huge ideas like theming."* *"If it looks ugly ask how it should be cleaned, if you are confused ASK."* The reading list that answers most of it: chemistry's branch library at `library/chemistry/.lib` (composition, reactivity, implementation), [The Spelling of a Kind](../the-coding-style/05-the-spelling-of-a-kind.md), [Shells Over Types](../the-type-system/03-shells-over-types.md), [What Natural Means](../the-coding-style/07-what-natural-means.md).

**2026-09-12, Doug's ruling on `.chapter`:** *"get rid of .chapter entirely, everything goes into .book, and you can create your own document and book and chapter if you like, and in the $register of your book, you are expected to wire up your document."* **Built on the paper:** `.latex/aaronson/.book.tsx` declares the book, its chapter kind and its document kind, and registers its theme on `Book`; the chapters name their own document from `.book`. The wiki's `.chapter.tsx` files are still to go, [Sprint 65](../projection/71-sprint-65--the-encyclopedia-finished.md).
