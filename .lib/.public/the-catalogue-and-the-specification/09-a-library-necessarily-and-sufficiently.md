# A Library, Necessarily and Sufficiently

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***The chapter name is a PROXY, flagged for Doug.***

**keywords:** library · name · address · slug · url · fragment · necessity · sufficiency · collision · proof

---

***Doug, 2026-09-20:*** **"You should have a spec of what a library is and you should look for things that would obviously be true. Use principles of urls. Do you ever get the same? When, then validate that that scenario is impossible. It should express necessity and sufficiency."** *This is that specification. It says what a library is in terms of names and addresses, states the invariants that are obviously true of one, enumerates every way two things could get the same address, and names the rule in [the binder](07-the-binder.md) and the promise in its suite that make each scenario impossible. Where a scenario is raised only by reading the built page, it says so.*

## <a id="words"></a>The two words

**A condition is NECESSARY when a library that lacks it is not a library**, *because some reference in it cannot work — two things answer to one address, or an address answers to nothing.* **A set of conditions is SUFFICIENT when a library that meets them all is one**, *in the only sense the compiler can promise: every name written anywhere resolves to exactly one thing, and every address written on any page lands on exactly that thing, once.* *Necessity is checked over the source, by name; sufficiency is proved over the built pages, by id — because the compiler [reads files and names and never a tag's attribute](08-the-binders-condition.md#b31), and what a page finally draws is the framework's.*

## <a id="what"></a>What a library is, in names and addresses

*A library is a set of books. A book is a set of chapters. A chapter holds mentions. Each of the three has a **name**, given in code — a book's on its cover, a chapter's in its title, a mention's in `[[[ X ]]]` — and each has an **address**, which the compiler derives and nobody writes. Since Sprint 82 a title is read as the title form `[[ X ]]` its file holds and never as the element holding it, since a library may subclass Title — planned as U6:*

| thing | named | scoped by | addressed as |
|---|---|---|---|
| a book | `<Title>` on its cover | the library | `/slug(name)/` — a page |
| a chapter | `<Title>` in its file | its book | `/slug(book)/#slug(name)` — a fragment of the book's page |
| a mention | `[[[ name ]]]` where it stands | its book | `/slug(book)/#slug(name)` — a fragment of the book's page |

**The slug is the whole of the trouble.** *It lowercases, drops apostrophes, spells `&` as "and", and turns every other run of punctuation into one hyphen: "Dougs Library" and "Doug's Library" are two names at one address; so are "The Sheet" and "the sheet", and "Five books, one book" and "Five books one book"; "???" is no address at all. A name is unique where it is scoped, and an address must be unique where it is served, and those are not the same test.*

*Two things the table does not show. A **resource** — code beside a chapter — is drawn on every page that wears it, so it has no place and may not name anything. And the **root**: `/` is a redirect to the root book's page, with a canonical link to it, so the one thing served at two URLs names which of them is its address.*

## <a id="books"></a>What a library is, in books, subjects and authors

***Added 2026-09-25, when Doug asked for "an analysis of what a library is, and how one specifies all cases of one!"*** **A library is a set of books closed under books, and each book says four things about itself on its cover:** *what it is called, its **Title**; who wrote it, its **Author**; what it is filed under, its **Subject**; and, if other books may file under it, what subject it represents, its **About**.* **Only the Title is drawn as content**; the other three are annotations of the cover, each making a Reference from the url the compiler gives it, and the book exposes all four — *Doug: "book can reach in an expose them, and then everyone can access them."* A book holds chapters, one each of them a cover, a synopsis and a table of contents, which is how the compiler knows them — by the file they stand in — and how the runtime knows them — by the annotation they carry.

**Three relations run between books, each spelled by the notation, and each has its own shape:**

| relation | written in a cover | its shape | answered |
|---|---|---|---|
| **filed under** | `<Subject>**[[ X ]]</Subject>` | a tree: every book under exactly one, and one book under itself | `[[ Y ]]**` in X's table |
| **a topic** | `***[[ X ]]` | many to many, and a loop is no fault | `[[ Y ]]***` in X's table |
| **by** | `<Author>*[[ X ]]</Author>` | a function: one author to a book | by nothing — an author needs no answer |

**And About is not a relation between two books.** *`<About>[[ Doug ]]( My Book )</About>` names its own book, shown under the subject's label, so its url is its title's.* **It is what makes a book a subject catalogue** — *Doug: "Any book can be About something, but that allows other books to then be able to use it as a subject catalogue and this one needs to be written with links because it is about that subject."* **And it needs no name of its own:** *"That will help you see that it needs no name. Title and About cover it."*

**Two fixed points ground a library, and nothing else can:**

| fixed point | what it is | how it is recognized |
|---|---|---|
| **the library** | the one book filed under itself — auto-categorical, the root of the tree | its Subject names itself |
| **the autobiography** | the one book by what it is about — the author arrow's fixed point, the root of authorship | its Author's url is its About's, and its About's is its title's — Autobiography's specification says so without a name |

*Every other author is a book the autobiography catalogues — one step, never a walk: Doug, "1. A book that is by its subject - There can be only one of those 2. Any book catalogued by one that is a subject."* **The two fixed points may be two books or one:** *the test library keeps them apart, the library written by the log that writes itself; a personal library whose top is its own autobiography is one book filed under itself, by itself, and about itself.*

## <a id="principles"></a>The principles of a URL, as invariants of a library

1. **One thing, one address.** *Nothing is reached by two addresses. The root's redirect is the single, declared exception.*
2. **One address, one thing.** *No two things share a page path, and no two things on a page share a fragment — whatever names produced them.*
3. **Every address answers.** *Every reference written in the library resolves to a thing, and every thing draws an element wearing its id on the page its address names, exactly once.*
4. **Everything is reachable.** *Every book is listed by the catalogue that holds it, every chapter by its book's table, and every mention is referred to by something — a name nobody spends raises a fault, because a library is compact.*
5. **An address follows the name, never the place.** *Renaming a thing changes its address and every reference recompiles, because references are written as names. Moving a book between folders or reordering chapters changes nothing.*

## <a id="same"></a>"Do you ever get the same?" — every scenario, and what raises it

*Each row is a way two things would meet at one address, or an address would meet nothing. Each is raised by a rule that returns a fault by file and line, and each rule has a promise in [`wellformed.test.ts`](../../package/.binding/catalogue/wellformed.test.ts) or [`proof.test.ts`](../../package/.binding/specification/proof.test.ts) built to break exactly that way.*

| scenario | breaks | raised by | where |
|---|---|---|---|
| two books with one name | 2 | `DUPLICATE-TITLE` | source |
| two books whose names slug to one path — "A Paper" and "A. Paper" | 2 | `SAME-ADDRESS` | source |
| a book whose path is where the binder writes its bundle — "Assets" | 2 | `RESERVED-ADDRESS` | source |
| two chapters, or a chapter and a mention, or two mentions, of one book with one name | 2 | `DUPLICATE-TITLE` | source |
| the same, with two names that slug to one fragment — "Table of Contents" and "Table Of Contents" | 2 | `SAME-ADDRESS` | source |
| a chapter titled with its own book's name, whose fragment is the cover's | 2 | `SAME-ADDRESS` | source |
| a name that leaves no address — "???" | 3 | `NO-ADDRESS` | source |
| a resource that titles a chapter or allocates a mention, and so stands on every page | 1, 2 | `RESOURCE-NAMES` | source |
| a reference to a name the library does not hold, in prose, in a string, or as an element | 3 | `UNKNOWN-REFERENCE`, and the transform's `missing` | source |
| a name nobody refers to | 4 | `UNREFERENCED-MENTION` | source |
| a chapter its table does not list; a book its catalogue does not answer for | 4 | `CHAPTER-NOT-LISTED`, `NOT-LISTED` | source |
| a heading wearing its own words as an id — "Cautions" in seven chapters | 2 | nothing to raise: a heading wears no id unless a mention allocated it ([B32](08-the-binders-condition.md#b32)) | framework |
| a mention allocated inside a writing that does not print, so its id is never drawn | 3 | the proof: "nothing on this page answers to it" — the compiler does not read `print` | page |
| two elements on one page wearing one id, whatever drew them | 2 | the proof: "worn by N elements, and an id is worn once" | page |
| a link whose fragment answers other than once, on its page or another | 2, 3 | the proof | page |
| an address written without a leading slash, read against whatever folder serves the page | 3 | the proof | page |
| the root at `/` and at `/its-name/` | 1 | by design: a redirect carrying `rel="canonical"` | binder |

## <a id="every-case"></a>Every case of a library, and what specifies it

**Three checkers carry the specification, and each is given what only it can see.** *A case is specified once, where it can be seen, and never twice — a rule with two homes is a rule that will disagree with itself.*

| checker | what it reads | what it can see | what it cannot |
|---|---|---|---|
| **the compiler** | files and the notation, never a tag | which file is a cover, a synopsis, a table; what each star relates; the whole library at once | what a class carries — *"You can't! They might subclass them. That's why they are in special files"* |
| **the specifications** | `specify()`, class by class, asked by `instanceof` | what a cover carries, what a chapter holds, a library's own subclasses included | the library beyond the book in hand |
| **the proof** | the built pages | what was drawn, and every id worn | the source |

**The cases, by what they are about.** *Each row says which checker specifies it, the fault it raises or the rule that does not specify, and its state — built, or planned in [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#plan).*

| | the case | specified by | raised as | state |
|---|---|---|---|---|
| **books** | a folder holding a `.book.tsx` is a book, and has all three dot chapters | compiler | the inventory stops the bind | built |
| | a book holds one cover, one synopsis and one table of contents | specifications | *a book has one cover*, and the synopsis and table likewise | built, U4 |
| | a book holds chapters and books, and nothing below | specifications | *a strict composition holds parts at its level or one below* | built, U4 |
| **chapters** | every chapter is titled | compiler | `NO-TITLE` | built |
| | a chapter has one title, and a title stands in a chapter and holds the link it was given | specifications | *a chapter has one title*, *a title stands in a chapter*, *a title holds the link* | built, U1 |
| | a chapter holds only writing | specifications | *a closed composition holds only writing* | built, U1 |
| **names and addresses** | the address table above | compiler, proof | `DUPLICATE-TITLE`, `SAME-ADDRESS`, `NO-ADDRESS`, `RESERVED-ADDRESS`, `RESOURCE-NAMES`, the proof | built |
| **the cover** | a cover carries its Author and its Subject, and each of Author, Subject and About is said of a cover | specifications | *a cover carries its author*, *an author is said of a cover*, and the rest likewise | built, U2 and U3 |
| | About names its own book | specifications | *about names its own book* | built, U3 |
| | every title form in a cover names its book | compiler | a fault naming the cover | planned, U6 |
| **the catalogue** | filing is a tree with one root | compiler | `CIRCULAR-CATALOGUE`, `NO-LIBRARY`, `TWO-LIBRARIES` | built |
| | a topic is one of the other catalogues a book stands in | compiler | `TOPIC-IS-CATALOGUE` | built |
| | every filing and topic is answered by its catalogue, in its table | compiler | `NOT-LISTED`, `NOT-IN-THE-TABLE` | built |
| | a catalogue's table names the synopsis of each book it holds | compiler | `NO-SYNOPSIS` | built; read per table, U6 |
| | a table lists every chapter of its book | compiler | `CHAPTER-NOT-LISTED` | built; read by reference, U6 |
| | a book may be filed only under one that is About something | compiler | `NOT-A-SUBJECT`, a proxy | planned, U6 |
| **authorship** | every book names its author | compiler | `NO-AUTHOR` | built |
| | one book, and only one, is by its own subject | compiler | `NO-SELF-AUTHOR`, `TWO-SELF-AUTHORS` | built |
| | an author is the autobiography or a book it catalogues | compiler | `MAY-NOT-AUTHOR` | built, one step, K2 |
| | a book that says it is an autobiography is by what it is about | specifications | *an autobiography is by what it is about* | built, a placeholder |
| **references** | every reference resolves, every mention is spent, and the notation is well formed | compiler | `UNKNOWN-REFERENCE`, `UNREFERENCED-MENTION`, `MALFORMED-ANNOTATION` | built |
| **pages** | every link lands on an id worn once, and the parser rewrites nothing | proof | the proof's faults | built |

## <a id="shapes"></a>The shapes a library can take

**"All cases" is answered by the shapes a library can take, each checked against the table.** *A shape the table admits is a library; a shape it raises is not; a shape it cannot say is a gap, named here so it is seen.*

| shape | a library? | because |
|---|---|---|
| one book, filed under itself, by itself and about itself, its table listing its chapters | **yes** | one root, one autobiography, and its only author is itself |
| a library written by an autobiography it files — the test library | **yes** | the library is the root; the log is by what it is about and so the origin; the library's author is the log |
| a persona the autobiography files, writing a book of its own | **yes** | the persona is catalogued by the autobiography, one step |
| a book two steps under the autobiography, writing | **no** | `MAY-NOT-AUTHOR`: its subject is not the autobiography |
| a second book by its own subject | **no** | `TWO-SELF-AUTHORS` |
| a subject with nothing filed under it yet | **yes** | a catalogue may hold nothing — Doug, *"allow subjects with no books"* |
| a book filed under one that is About nothing | **no**, when U6 lands | `NOT-A-SUBJECT` |
| two books cataloguing each other by topic | **yes** | topics are an overlay, and a loop in one is no fault |
| a biography — about another, by another | **yes** | Biography is a placeholder and adds only its class |
| **a book with several authors, or a team as an author** (E36) | **cannot be said yet** | an Author is one annotation, and `by` is a function in the compiler — **a gap** |
| **a book in a book, for nested tables of contents** (E31's Part) | **cannot be said yet** | out of scope on *"The core alone"* — the runtime's Book holds books, and the compiler walks each as a book of its own — **a gap** |

## <a id="necessity"></a>Necessity

*Every row of the address table is necessary: a library in which any one of them holds has a reference that cannot work — it lands on one of two things, or on nothing, or leads a reader to a thing they can reach no other way. The compiler raises each at the source where a name can be seen, and says which line.* **And every row of the case table is necessary for the same reason one level up:** *a library with no book filed under itself has no top to reach; with two, it is two libraries; with no autobiography, every attribution rests on nothing; with a book whose author the autobiography never vouched for, a voice writes that nobody gave one; with a catalogue that does not answer for what it holds, a book stands where no reader can find it.*

## <a id="sufficiency"></a>Sufficiency

***If the source rules hold, the specifications hold, and the proof holds, the library is one — every book reaches the library, every author reaches the autobiography, and every reference works.*** *Every book is filed under exactly one book and the filing is a tree with one root, so every book reaches the library by its subjects; every author is the autobiography or a book it files, so every attribution reaches the one self-representation in at most one step; every catalogue answers for what it holds in its table, where a reader sees it. What the source cannot say — what a cover carries, which classes a chapter holds — the specifications say, class by class, and they count a library's own subclasses because they ask by `instanceof`.* **For the addresses:** *The argument is short. Every address the compiler writes is derived from a name that resolved to exactly one thing (the source rules); the framework draws that thing's element wearing that address's fragment, and the proof reads every built page and raises an id worn twice, a fragment nothing answers to, and a link that leads to a page nobody built (the page rules). So every written address lands on the one element that wears it. What the source cannot see — a title that does not print, a kind that draws its own element — the proof sees, because it does not read the source at all.*

**What is not yet in the argument, said plainly:** *the framework's own ids (`root`) share the page's namespace and are not names; a kind that draws its own element outside the base's view ([B28](08-the-binders-condition.md#b28)) wears its id by its own hand; the reserved paths are one folder; and the slug of a name outside the Latin alphabet is not specified. Each is a row this chapter will gain when it is seen.*
