# Author, Subject and About

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- ***Written 2026-09-25 with U3 of [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#u3), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/libraries/Cover.tsx`](../../package/src/libraries/Cover.tsx), the promises the second half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx). Three classes in one chapter because they are what one cover says.***

---

## What they are

**Author, Subject and About are annotations of a cover, each holding the `[text](url)` the compiler wrote and standing a Reference to that url among its own annotations.** Doug, 2026-09-25, drawing the cover: *"I think, in each case, we want them to be annotations, but only the title is a real element. All the rest are annotations, and book can reach in an expose them, and then everyone can access them."* · *"We are deprecating By and they are all annotations. Maybe they can each create a Reference as one of their own annotations, expose it as a property, and then it can be used. Annotations of Annotations."* · and of About: *"Any book can be About something, but that allows other books to then be able to use it as a subject catalogue."*

| member | what it is | cited |
|---|---|---|
| `Author` · `Subject` · `About` | each an Annotation under its own name; none draws a note | R12, R14, R15 |
| `.name` | the words of the `[name](identifier)` written in it | *"Not text / url — name / identifier"* — `text` until then |
| `.means` | the Reference it stands, expressed — what the author, the subject or the about means; `reference` until 2026-09-26 | *"expose it as a property"*; Doug, 2026-09-26, on a map of every class standing a Reference: *"Yes, means everywhere"* — [Sprint 84](../projection/90-sprint-84--means-and-the-table.md) |
| `.$Define()` | reads its compiled `[text](url)` through the binder and stands `<Reference>{url}</Reference>` among its own annotations | *"Annotations of Annotations"* |
| `.write()` | draws its words | — |
| `AuthorSpecification` · `SubjectSpecification` | **an author is said of a cover** · **a subject is said of a cover** | R12 |
| `AboutSpecification` | **about is said of a cover**; **about names its own book** — its url is its chapter's title's | *"it needs no name. Title and About cover it"* |

**What each says, and how the compiler reads it:**

| written in a cover | the compiler reads | it says |
|---|---|---|
| `<Author>*[[ A Persona ]]</Author>` | an author edge — the whole of it, since an author is answered by nothing | this book is by A Persona |
| `<Subject>**[[ Libraries ]]( The Library )</Subject>` | a catalogue edge, answered by `[[ A Paper ]]**` in The Library's table; the words are the subject's name and the paren the book that is that subject | this book is filed under Libraries, which is the library's own catalogue |
| `<About>[[ Libby ]]</About>`, after the title | a second title form naming the book itself | this book is about what it is called, so others may be filed under it |

**Every one may give words apart from its name**, the paren tight against the bracket: `<Subject>**[[ Libraries ]]( The Library )</Subject>` shows "Libraries" and means The Library — which is how the top of a library is filed under what it is about without a second book, [What a Library Is](../writing-a-book/08-what-a-library-is.md). *Doug: "You always need to be able to say text versus id as an option."*

### In use

```tsx
// libby/.cover.tsx — the autobiography: by its own subject, a librarian's book filed under the library she keeps.
// Doug, 2026-09-27: "her subject is the library as she is its librarian, but her autobiography is about herself - Libby."
export default () => (
    <Chapter>
        <Cover />
        <Autobiography />
        <Title>[[ Libby ]]</Title>
        <Author>*[[ Libby ]]</Author>
        <Subject>**[[ Libraries ]]( The Library )</Subject>
        <About>[[ Libby ]]</About>
    </Chapter>
);
```

**The framework draws none of them as the page**; the [book](05-book.md) exposes them, and a library's book class draws what it likes. The test library's draws a byline from `book.author` and `book.subject`, [in its `.book.tsx`](../../package/.binding/.test/library/.book.tsx) — a word standing a Reference to what each exposes:

```tsx
<Paragraph>
    by <Word><Reference>{this.author?.means?.identifier}</Reference>{this.author?.name}</Word>,
    filed under <Word><Reference>{this.subject?.means?.identifier}</Reference>{this.subject?.name}</Word>
</Paragraph>
```

***Their own writing is still in the markup***, drawn inside the cover as every annotation's is, `.pd-annotation` on it — and [the library's theme](01-books-in-annotations.md#what-is-not-drawn-yet) hides it, so the reader sees the byline and not the annotations it was drawn from.

## How they are extended

- **A library's own author** is a class under Author under whatever name it likes; the cover's specification and the book find it by `instanceof`, promised as *"a library's own author, under another name, answers the same"*. The compiler reads the stars, never the element — *"The star says it."*
- **What a cover's author may be** is the compiler's: *"1. A book that is by its subject - There can be only one of those 2. Any book catalogued by one that is a subject"* — `MAY-NOT-AUTHOR`, `NO-SELF-AUTHOR`, `TWO-SELF-AUTHORS`.
- **What a subject may be** is the compiler's too: a book is filed only under one whose cover says what it is about — `NOT-A-SUBJECT`, a **proxy name**. And a cover's second title form naming anything but its own book is `TITLED-TWICE`, a **proxy name**.
- **Recognising the fixed points by url** — an autobiography whose Author's url is its title's, a library whose Subject's is — is left for later on Doug's *"Yes just leave it off for now"* (R16); [Autobiography](06-biography-and-autobiography.md) checks the first in its specification meanwhile.

## Promises

Five in the second half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx): an author answers its words and a reference to its url standing among its own annotations; a subject and an about answer the same way; each is said of a cover, and on the synopsis says so; about names its own book, its url its title's; a library's own author, under another name, answers the same. In the compiler's: a book filed under one about nothing raises `NOT-A-SUBJECT`, and a cover whose second title form names another book raises `TITLED-TWICE`; the structure reads the library, Libby and the persona as about something, [promised over the test library](../../package/.binding/catalogue/structure.test.ts).

## Gate

Committed as `abd303d`, the compiler's half as `beccfaf`. Measured 2026-09-25 after U11: the package 202 of 202; the compiler's unit suite 95 of 95 and regression 16 of 16, the byline drawn on every bound page.

**Names.** Doug's: `Author`, `Subject`, `About`, and `means` on each since 2026-09-26. Ours, flagged: the three specifications and their rules, and the compiler's `about`, `titledTwice`, `NOT-A-SUBJECT` and `TITLED-TWICE`. *Collection's type alias `Author` — the author of a change — collides with this class at the package's index, which exports this one by name; flagged for Doug.*
