# Books in Annotations

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***The front matter of the `library` folder, written 2026-09-25 with [Sprint 82](../projection/88-sprint-82--chapter-and-book.md). The chapter's name is a PROXY; Doug's to rename.***

---

**The `library` folder, [`src/library`](../../package/src/library/), holds the classes a library is written in above the level of one text: the chapter, the book, and what a cover says.** Doug set it going on 2026-09-25: *"Start with Genesis, really think about annotations, because this is going to be a place where we don't just use them as defaults but start building things like Cover and TableOfContents and Synopsis whatever we do for Subject and Author to all be attributes."* And gave it its folder: *"make a library folder for this, like we had in v1."*

## What the folder's classes share

**Two classes are compositions and the rest are annotations.** A [Chapter](02-chapter-and-title.md) is a composition at 6 and a [Book](05-book.md) a composition at 7, the top of the levels; everything else in the folder is something said of a chapter — [Cover, Synopsis and TableOfContents](03-cover-synopsis-and-table-of-contents.md), which are Formats and so carry their look, and [Author, Subject and About](04-author-subject-and-about.md), which are what a cover says. [Biography and Autobiography](06-biography-and-autobiography.md) mark a cover for what its book is. *"Annotations are the typing mechanism going forward"* is E32, and this folder is the first place it is spent: what a chapter IS — a cover, a synopsis, a table — is an annotation it carries, found by `instanceof` wherever it stands, and a library's subclass counts as the class it extends.

**Book is layout; chapters are logical parts.** [The anchor](../the-coding-style/03-the-coding-style.md#book-and-chapter) holds here exactly as it was ruled: a chapter says what it is, a book decides where it goes, and the book finds a chapter by what it carries, never by where it stands — *"If Book can operate by type, it's more important that it has only one Cover, and no need for it to be first."*

## Two channels: the compiler reads files and the notation, the runtime reads classes

***"You don't need the compiler to check for anything. You can't! They might subclass them. That's why they are in special files."*** — Doug, 2026-09-25. **So every fact about a book reaches the compiler through the file it stands in or the notation written in it, and reaches the runtime through the class.** The compiler never reads a tag; a library may call its title element anything, and [one case of the compiler's suite](../../package/.binding/catalogue/wellformed.test.ts) titles its chapters in `<MyTitle>` to prove it.

| the compiler reads | the runtime's class |
|---|---|
| `.book.tsx` | the library's book class, a `$Book` — its layout |
| `.cover.tsx` · `.synopsis.tsx` · `.table.tsx` | a Chapter carrying Cover · Synopsis · TableOfContents |
| a numbered file | a Chapter |
| `[[ X ]]` | Title — names the writing its file is: its book in a cover, a chapter of its book anywhere else |
| `*[[ X ]]` | Author — an annotation of the cover |
| `**[[ X ]]` | Subject — an annotation of the cover |
| a second `[[ X ]]` in a cover, naming its own book | About — an annotation of the cover |
| `[[[ X ]]]` | Mention |
| `$[ X ]` | Means, or any writing standing a Reference — in a table, a Content, which the table finds |

**Every form compiles to `[text](url)`, and the classes read it.** *Doug, 2026-09-24: "The compiler ALWAYS should give: `[text](identifier)`. It doesn't know about specific components."* A Title reads `[The Argument](/a-paper/#the-argument)` and stands a Reference to the url and a Referent from its name's slug — `identifier.slug`, [the Identifier](../utilities/04-identifier.md), the one function the compiler writes its fragments with — so it links to itself and wears the id a table lands on, whatever the url says; since 2026-09-26 a cover's title wears its book's slug too. An Author, a Subject and an About read the same pair and stand the Reference among their own annotations.

**What the compiler enforces and what the runtime specifies.** *"The compiler should enforce as much as possible based on what it gives"* — [the compiler's guide](../the-catalogue-and-the-specification/07-the-binder.md#guide). A name, an address, an id, a table against the chapters of its book, a catalogue edge from both its ends, who may author: the compiler's, because it gave them. What a writing holds of itself — a chapter has one title, a cover carries its author, a book has one table of contents: the class's specification, asked in the bind's `specify` phase over the book built from its function.

## Annotations of annotations

***"Maybe they can each create a Reference as one of their own annotations, expose it as a property, and then it can be used. Annotations of Annotations."*** — Doug, 2026-09-25. **An Author is an annotation of the cover, and a Reference is an annotation of the Author.** It reads the compiled `[text](url)` written inside it, stands `<Reference>{url}</Reference>` in its own `$Define`, and answers `name` and `means` — one word for the outward direction on every class that stands a Reference, since 2026-09-26. The book reaches into its cover and exposes all four — its `title`, `author`, `subject` and `about` — *"and then everyone can access them."*

## A whole book, written out

**Every file of a book but `.book.tsx` is a function returning its Chapter.** The paper of the compiler's [test library](../../package/.binding/.test/paper/), which is the worked example this folder is documented against:

```tsx
// paper/.cover.tsx
export default () => (
    <Chapter>
        <Cover />
        <Title>[[ A Paper ]]</Title>
        <Author>*[[ A Persona ]]</Author>
        <Subject>**[[ The Library ]]</Subject>
    </Chapter>
);
```

```tsx
// paper/.table.tsx
export default () => (
    <Chapter>
        <TableOfContents />
        <Title><Parenthetical />[[ Table of Contents ]]</Title>
        <Section>
            <Heading>Contents</Heading>
            <Paragraph><Content>$[ ./The Argument ]</Content></Paragraph>
            <Paragraph><Content>$[ ./The Evidence ]</Content></Paragraph>
            <Paragraph>
                <Parenthetical />
                <Word><Content>$[ A Paper ]</Content></Word>
                <Word><Content>$[ ./Synopsis ]</Content></Word>
                <Word><Content>$[ ./Table of Contents ]</Content></Word>
            </Paragraph>
        </Section>
    </Chapter>
);
```

**And the compiler writes the book as a function that calls them**, in the order of the files, inside the class `.book.tsx` declares — [`assembly/book.ts`](../../package/.binding/assembly/book.ts):

```tsx
export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheArgument1()}
        {TheEvidence2()}
    </Book>
);
```

***Called, never rendered.*** *Written `<TheArgument1 />`, a chapter would reach the book as a function chemical its parts never see; `{TheArgument1()}` hands the book the Chapter itself — [found in the brainstorm](../projection/88-sprint-82--chapter-and-book.md) and Doug's "call the functions".* **So a chapter function holds no hooks**: it runs once when the book is made, inside no component of its own, and a hook in it would belong to the book. Nothing can check that; it is written here so nobody learns it from a crash.

## A catalogue's chapter is another book's synopsis

***The Genesis, E33: "A catalogue entry is a chapter that is a synopsis; the catalogue may print or import it."*** Doug, 2026-09-26: *"Maybe it is a chapter that renders it, and then decorates it. That seems more straightforward. Chapters can be in chapters."* And: *"someone can just write a synopsis by hand. It doesn't need to be borrowed."* **So it is informal, and nothing specifies it** — a chapter of the catalogue holds another book's synopsis chapter, imported and called, beside an empty `<Synopsis />` that reaches in and means what that one means; or it holds a synopsis written by hand, naming its book. The test library's [`the-library/2-of-the-log.tsx`](../../package/.binding/.test/the-library/2-of-the-log.tsx):

```tsx
import LogSynopsis from '../the-log/.synopsis';

export default () => (
    <Chapter>
        <Title>[[ Of the Log ]]</Title>
        {LogSynopsis()}
        <Synopsis />
    </Chapter>
);
```

**Three things make it work, and none is written here.** The compiler compiles the imported file in *its* book's context, so the log's title still means `/the-log/#synopsis` on the library's page; [a title bound in another book takes its id back](02-chapter-and-title.md), so the page wears `id="synopsis"` once; and [a book has one synopsis *of itself*](05-book.md), so the catalogue may carry as many others' as it catalogues. *An edit to the log's synopsis is on the library's page at the next bind, with no edit to the library.*

## Any writing reaches its book

***Doug: "just have the book expose its cover, table, synopsis... and other things use it from there."*** **Every writing answers `$book`** — [the book it stands in](../writing/05-the-writing-class.md) — **and reads what the book exposes.** The test library's running head is the worked case: the library's name as a link, then the book it stands in and a link to that book's table — a resource of the library's first chapter, which the paper's argument wears, [`the-library/1-the-shelves.tsx.tsx`](../../package/.binding/.test/the-library/1-the-shelves.tsx.tsx):

```tsx
export class $RunningHead extends $Paragraph {
    override write(): ReactNode {
        const book = this.$book;
        if (book === undefined) return null;
        const table = book.table?.canonical;
        const Means = $(means);
        const Word = $(word);
        const Reference = $(reference);
        return (
            <>
                <Means>$[ The Library ]</Means> / <Word>{book.title?.name}</Word>: <Word><Reference>{table?.means?.identifier}</Reference>{table?.name}</Word>
            </>
        );
    }
}
```

- **It reads when it draws**, when its book holds its chapters; in a bond [the book holds none yet](../projection/89-sprint-83--memory-management.md#found-by-measuring-before-any-design).
- **Nothing in the argument's file names its book**, so a book renamed is followed with no edit to the chapter — [a unit promise](../../package/.binding/.test/running-head.test.tsx) stands one chapter in two books under two names.
- **A Paragraph, not a Section:** a section's specification wants its heading written in its text, and a line drawn by `write` has none.
- **Its notation is compiled like any resource's**: `$[ The Library ]` becomes the library's full address, since the line is drawn on other books' pages — [the transform's promise](../../package/.binding/reference/transform.test.ts) reads this file.
- **Imported by its whole name**, `'../the-library/1-the-shelves.tsx.tsx'`: a resource belongs to a chapter by name, so the chapter's own name imports the chapter.
- **It is the test library's own and not `.public`'s.** *Doug, 2026-09-26: "I don't know RunningHead but that doesn't belong in the .public library. It can be a component of something not user facing."* So its name is the test library's, and no reader of `.public` meets it.

## What is not drawn yet

**An annotation's own writing is hidden in the ordinary view** — [the Writing book's promise](../writing/02-theming-and-formatting.md) — ***and the ordinary view is a library's theme.*** Measured in the first bind of the rewritten test library, 2026-09-25: every Means carried its Level's `2` and its Reference's url as text inside its link, and a cover's Author, Subject and About were drawn in its header as links, `.pd-annotation` on each and no sheet hiding it. Doug ruled where it is drawn the same day: ***"if we want to have a theme, it is a format annotation that is also a theme that is global to a book. The annotation validate that it is a book. And we can use its style"*** — and of the test library's, *"Yes good to make one local to the test-library."* And he named it: *"One might give the book a format called Theme which is a theme, which would be realized in its .book or as a resource in one of its chapters, perhaps as an appendix"* — [an extension point of Book](05-book.md#how-it-is-extended). So the test library's book class stands its `Theme` in its `$Define`, a Format with `theme = true` whose style hides every `.pd-annotation` inside the book and whose specification says it is said of a book — [`the-library/.book.tsx`](../../package/.binding/.test/the-library/.book.tsx). *A library's own class: `src` has no Theme, as [Format and Theme](../writing/11-format-and-theme.md) records.*

```tsx
export class $Theme extends $Format {
    specification = new ThemeSpecification();
    theme = true;
    style = styled.div`
        .pd-annotation {
            display: none;
        }
    `;
}
```

***What is not drawn yet is the shape of the page.*** Every composition draws as the `span` Writing gives it — no class in `src` replaces its own element yet, though [the seam is there](../writing/06-how-writing-is-extended.md) — so a reader sees a table's words run together, *"ContentsThe ShelvesThe Catalogue…"*, measured in the browser drive. **Flagged for Doug.**

## Chapters

The classes, each to [the four parts](../the-coding-style/08-how-a-class-is-documented.md): [Chapter and Title](02-chapter-and-title.md) · [Cover, Synopsis and TableOfContents](03-cover-synopsis-and-table-of-contents.md) · [Author, Subject and About](04-author-subject-and-about.md) · [Book](05-book.md) · [Biography and Autobiography](06-biography-and-autobiography.md).
