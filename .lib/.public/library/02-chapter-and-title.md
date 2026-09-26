# Chapter and Title

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- ***Written 2026-09-25 with U1 of [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#u1), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/library/Chapter.tsx`](../../package/src/library/Chapter.tsx) and [`src/library/Title.tsx`](../../package/src/library/Title.tsx), a file each since Doug's *"Make Title and Heading their own files in library and writing respectively please"*, the promises [`.tests/chapter.test.tsx`](../../package/.tests/chapter.test.tsx). Two classes in one chapter because they are one relation, as [Section and Heading](../writing/08-section-and-heading.md) are; each file asks `instanceof` of the other inside a method, a module cycle declared in the build with that reason.***

---

## What they are

**A Chapter is a composition at 6, permissive and closed, whose canonical is its one Title; a Title is a sentence that means its chapter, and its words are compiler syntax.** E29: *"A thing that contains sections is a Chapter."* E30 put it at 5, closed and permissive; the ruling of the levels put it at 6. Doug, on the title: *"I think a Heading expresses its section. We want a Title expressing its chapter. We can make it its own construct, and it can be at the Sentence level… I would say we want a similar relationship, so the code will be similar, between Title and Heading. Title gets the compiler syntax, so it also has the Reference annotation right?"* And of how it is found: *"They can do a by type canonical (no need to abstract), and Chapter type checks."*

| member | what it is | cited |
|---|---|---|
| `Chapter.$Define()` | stands `<Level>6</Level>`, `<Permissive />` and `<Closed />` | E30; ruling 3 of Sprint 79 |
| `Chapter.canonical` | overridden: its Title, found by class among the contents wherever it stands | *"a by type canonical"*; R2 |
| `Chapter.specification` | `new ChapterSpecification()`: **a chapter has one title** | R2 |
| `Title` | a Sentence, so at 3, permissive and open; not a Heading | *"it can be at the Sentence level"*; R3 |
| `Title.chapter` | its parent when that is a Chapter, else none — the reading `heading.section` is | *"a similar relationship"*; R3 |
| `Title.name` | the words of the `[name](identifier)` the compiler wrote in it | Doug, 2026-09-25: *"Not text / url — name / identifier"* — `text` until then |
| `Title.means` | the Reference it stands, expressed — what the title means, which is its chapter; `reference` until 2026-09-26 | D5; Doug, 2026-09-26: *"title.means = Reference to chapter"* — [Sprint 84](../projection/90-sprint-84--means-and-the-table.md#u1) |
| `Chapter.title` · `Chapter.mention` | its Title, which is its canonical; and what that title means, so a chapter mentions itself by its title's Reference | *"chapter.mention is a get property that returns title.means"* — [Sprint 84](../projection/90-sprint-84--means-and-the-table.md#u1) |
| `Title.$Define()` | reads the compiled `[text](url)` through the binder and stands `<Reference>{url}</Reference>`, and `<Referent>{fragment}</Referent>` when the url has one | *"It uses the compiler syntax!!"*; *"Titles should have ids"*; *"use the url as an id"* |
| `Title.write()` | draws its words | R4 |
| `Title.specification` | `new TitleSpecification()`: **a title is in a chapter**; **a title holds the link the compiler gives it** | R3, R4 |

**So a title is a link to itself and the place a table lands.** `<Title>[[ The Argument ]]</Title>` in `1-the-argument.tsx` is compiled to `<Title>[The Argument](/a-paper/#the-argument)</Title>`; the Title draws "The Argument" inside the anchor its Reference lends it, and its own element wears `id="the-argument"`, the fragment its Referent holds. A cover's title, `[A Paper](/a-paper/)`, has no fragment and wears no id: the book's page is its address. The canonical goes both ways — `chapter.canonical` is the title and `title.chapter` the chapter — and neither is stored.

### In use

```tsx
export default () => (
    <Chapter>
        <Title>[[ The Evidence ]]</Title>
        <Section>
            <Heading>What was found</Heading>
            <Paragraph>A chapter that is referred to from elsewhere and refers to nothing itself.</Paragraph>
        </Section>
    </Chapter>
);
```

**A chapter whose title a reader need not see declares it and hides it**, which is how every synopsis and table of the test library is titled: `<Title><Parenthetical />[[ Synopsis ]]</Title>`. The title still stands its Reference and wears its id, so `$[ The Library / Synopsis ]` lands on it, and the compiler still names the chapter by it, since it reads the form and not whether it prints.

## How they are extended

- **A library's own title** is a class under Title, or under Sentence with a `chapter` of its own; the chapter finds it by class, so a subclass is its title. **The compiler never sees the class**: it names a chapter by the title form in its file, whatever element holds it — a library may write `<MyTitle>[[ The Work ]]</MyTitle>` and it compiles unchanged, [promised in the compiler's suite](../../package/.binding/catalogue/wellformed.test.ts).
- **A kind of chapter** is a class under Chapter; it keeps the canonical by class and stands what it is as annotations — a cover, a synopsis and a table are annotations a chapter carries, [not kinds of chapter](03-cover-synopsis-and-table-of-contents.md).
- **A chapter file is a function**, default-exported, taking nothing and returning its `<Chapter>`; the book calls it and never renders it, so **it holds no hooks** — [the front matter](01-books-in-annotations.md#a-whole-book-written-out).
- **One title form to a file.** A title form names the writing its file is, and a second one naming anything else is `TITLED-TWICE` at compile time — *the one exception is a cover's About, [which names its own book](04-author-subject-and-about.md)*.

## Promises

Eight in [`.tests/chapter.test.tsx`](../../package/.tests/chapter.test.tsx): the level and pair, the canonical its title wherever it stands; a chapter with no title, or with two, saying so when asked; holding only writing; a title a sentence at 3 whose chapter is its parent, and not a heading; a title reading its words, standing a reference to its url and wearing the url's fragment as its id; drawn, its words as a link to itself, its own element wearing the id; a cover's title, whose url has no fragment, wearing no id; a title outside a chapter, or written as plain words, saying so when asked.

## Gate

Committed as `ffdc354`, and Title moved to its own file at `3852c1e`. Measured 2026-09-25 after the move: the package typecheck 0 errors and 202 of 202 across fifteen files; bound in the compiler's test library, every chapter's title wearing its id once, [the proof](../../package/.binding/specification/proof.ts) reading every link back to it.

**Names.** Doug's: `Chapter`, `Title`, `canonical`, `chapter` as `section` is, and since 2026-09-26 `means`, `title` and `mention`. Ours, flagged: `ChapterSpecification`, `TitleSpecification`, and the rules `$hasOneTitle`, `$isInAChapter` and `$holdsItsLink`.
