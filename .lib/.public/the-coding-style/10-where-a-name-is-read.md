# Where a Name Is Read

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-10-10 on Doug's word, after the names of one sprint were audited twice before he would sign them — "Write up the naming conventions. Note that .public has different naming conventions than a library, which is defining far more specific concepts. I would say that the time you want things to be the most general and pure is when they appear in the chapter TSX. In that case, they become visible and we want them to be succinct but accurate." [How a Thing Is Named](09-how-a-thing-is-named.md) is the method for a class and a file; this chapter is the rule that decides the length and the grammar of any name by WHERE IT IS READ, and the grammar a name must pass in every place.***

---

## What went wrong, in his words

The code of [Sprint 106](../projection/111-sprint-106--the-manual-spread-out.md) was written with a manual whose members were `appends`, `shown` and `readings`, a book that `named` a chapter and `placed` its chapters, an entry that `leads`, and a specification that read *a manual is said of a chapter*. The first audit renamed them into `Panel`, `Arrangement` and `places()`. Each round he read as English and refused.

- *"See these? appends / shown / readings? … You do not do a good job of copying my style. You do not choose the word reading carefully. This code makes no sense. I want you to be far more thoughtful about member names, and if you need to, choose longer member names. When choosing names, I want you to write down ALL related member names that I have come up with in .public, and really ask yourself what makes crystal clear sense in this metaphor, and what is non-semantic jargon that is drawn from other metaphors… if you aren't choosing member names in the CORE library, they don't need to be quite so succinct… tend to nouns, not be cute… You are making a mess by trying to imitate me."*
- *"'a manual is said of a chapter' — does one say a manual? Like really read the failure of basic English grammar. What is it in my code that makes you think such a thing could possibly be correct?… I choose the clever names."*
- *"Does a book place something? See the anthropomorphism? What is the panel? What is the arrangement? That is very very very general. You don't think you will have name collisions when you want to arrange something on another UI element? You are reaching for my one-word names everywhere. Do you not understand that that doesn't scale? It can work for the base library because that is the core grammar. But you can only do that when you are building fundamental things. Unless you are truly defining the meaning of Arrangement in this library, you are doing no one a favor with that name."*
- *"You still have this named thing. What is the entity doing the naming? I know you are trying to follow my annotation defines, erase… but the annotation is a super fundamental class and I want really short names for those methods."*

## The three places a name is read

**A name is chosen for the reader who meets it, and there are three.** The same thing is named differently in each place, and the mistakes above were all one mistake: a name from one place written in another.

### 1. The package

`.public` is the core grammar. Its writings are one-word nouns, `Paragraph`, `Chapter`, `Append`, `Reference`; what is said of a writing is a predicate read in `is()`, `Closed`, `Paginated`, `Self`; and the methods of its fundamental classes are short verbs, `write`, `view`, `defines`, `erase`, `press`. They are short **because they are fundamental**: each is defined once, every library stands on it, and a reader learns the word once for everything. **These are Doug's to choose**, and the evidence for how they are chosen is read off `src/writing` in [How a Thing Is Named](09-how-a-thing-is-named.md#how-public-is-named--the-evidence-read-off-the-source).

### 2. A chapter's TSX

What an author writes inside a chapter is visible to everyone who reads the library's source, and it is the library's own grammar as the package's words are the framework's. In his library those are `<Manual>`, `<Keyed>`, `<Brief>`, `<Appendix>`, `<Index>`, `<Arrow>`, `<Caption>`, `<Dated>`, `<First>`, `<Part>`, `<Volume>`, `<Scheme>`, `<Window>`, `<Illustration>`, `<Coloured>`. **Here a name is the most general and pure: one word where one word is exact, succinct but accurate**, read in `is()` as English, *this chapter is a Manual, this paragraph is Brief, this word is an Arrow*. A compound belongs here only when the one word would be false.

### 3. A library's code

The `~code.tsx` files beside a chapter hold what the library draws for itself: the components a layer or a `$Bound` draws and no author writes, their fields and getters, the helper functions, the CSS classes. They are read by the implementer alone, and they name **far more specific concepts** than the package does. So **a class here is a compound that says which thing of which**: `FilePanel`, `FilePanelBar`, `FileRail`, `FilePanelGrip`, `FileListing`, `FileTab`, `TreeFolder`, `TreeRoot`, `FoldChevron`, `CatalogueDesk`, `UnfoldedDesk`. The pair defines it, so the next panel or desk collides with nothing. **A member is a noun, longer where longer is clearer**: `referencedChapter`, `schemeDeclarations`, `laidOutChapters`, `filePanelStates`, `wayIntoTheBook`. A getter stays one word only where its owner qualifies it, *the manual's* `files`, *the book's* `body`. A one-word class is allowed here only where the library's own chapter truly defines the word for this library, as [The Layout](../../../../.me/.manual/12-the-layout.tsx) defines *layout* as *the arrangement of a book's parts on the sheet*, and each such name is his to strike.

**The tell for a name in the wrong place:** a one-word class in a library's code that a second sketch could use for something else; a compound in a chapter's TSX; a short verb as a library getter.

## The grammar, in every place

**A verb is one the noun can do.** A book lays out and holds; a chapter is at a place; a layout lays out; a reference refers; a path or a row leads somewhere. A book does not *place*; a row does not *name* a chapter. Read the sentence the name implies and ask who its subject is: *the book places* has no answer, *the layout lays out the chapters* has one. The member is then the noun of the result: `laidOutChapters`, `chapterAt(place)`, `referencedChapter`.

**The fundamental class's terseness is not imitated.** `defines` and `erase` are short because Annotation is the package's; a library getter named `leads`, `named`, `placed` or `shown` borrows that register where nothing is fundamental, and reads as a verb with no subject. In a library's code the noun is said whole: `referencedChapter`, `openFile`.

**Said of takes a predicate.** *Closed is said of a chapter*, *keyed is said of a chapter*, *unfolded is said of a logo*, *brief is said of a paragraph*: adjectives, and the sentence is English. A noun annotation's sentence is English about the noun: *a manual is a chapter read beside its files*, *an index is a table of contents*, *a desk holds a synopsis*, *a folder is a section of the table of contents*, *an arrow is a word of the table of contents*. Never *a manual is said of a chapter*. The package's own noun sentences, *a cover is said of a chapter*, *a part is said of a chapter*, *an append is said of a chapter*, are the same form and are [pitched to him](../projection/111-sprint-106--the-manual-spread-out.md#pitches) the same day; his library's are rewritten on his *"rewrite both"*.

**A field is named by its type, a thing by what it is.** `$file`, `$annotation`, `$family`, `$keyed`, `$foldedWriting`; never `$of`, `$among`, `$target`, which name a role in a sentence that is not written anywhere.

**No word from another metaphor.** Door, ladder, seat, a rail as a rule. The sketch's own words for things on the page, rail, grip, panel, tree, folder, desk, jacket, are the design's and are allowed, compounded in code.

**One meaning per word in a library.** A second class of the same name is a fault the typecheck reports: his library carried two `$Unfolded`, the logo's and the book's, as an inherited error for a week. And a package word is not reused for a neighbouring meaning: `open` is Paginated's page, `pages` is Paginated's set, `referent` is the far end of a reference.

## The method, extended

The seven steps of [How a Thing Is Named](09-how-a-thing-is-named.md#the-method) stand. Before the name is written, two more:

1. **Say where it will be read**: the package, a chapter's TSX, or a library's code. That fixes its length.
2. **List the package's related members and read them as one glossary.** `Writing`'s `text`, `annotations`, `classes`, `containers`, `chapter`, `book`; `Chapter`'s `mention`, `part`; `TableOfContents`' `parts`; `Part`'s `chapters`; `Figure`'s `append`; `Paginated`'s `pages`, `open`; `Book`'s `cover`, `synopsis`, `table`, `bookmark`. The new name stands beside them, reuses none for a different meaning, and is written in their English.

And after it is written: **read it aloud**, in `is()` for an annotation and in a sentence for a member, *the manual's files*, *the entry's referenced chapter*, *the book's laid-out chapters*; and **propose**, since he chooses the clever names.

## The worked example

[The names, audited for his sign-off](../projection/111-sprint-106--the-manual-spread-out.md#the-names) in Sprint 106's chapter is the whole of one library's code read by this rule: thirty-six rows, each saying what the thing is in the sketch's words, what package member it stands beside, and the name proposed. Three of its rows are the three places: `$Arrow` kept one word because `.table.tsx` writes it; `$Panel` made `$FilePanel` because only the manual's layer draws it; `named(place)` made `chapterAt(place)` because nothing names.
