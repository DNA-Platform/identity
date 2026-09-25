# Author, Subject and About

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- ***Written 2026-09-25 with U3 of [Sprint 82](../projection/88-sprint-82--chapter-and-book.md#u3), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/library/Cover.tsx`](../../package/src/library/Cover.tsx), the promises the second half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx). Three classes in one chapter because they are what one cover says.***

---

## What they are

**Author, Subject and About are annotations of a cover, each holding the `[text](url)` the compiler wrote and standing a Reference to that url among its own annotations.** Doug, 2026-09-25, drawing the cover: *"I think, in each case, we want them to be annotations, but only the title is a real element. All the rest are annotations, and book can reach in an expose them, and then everyone can access them."* · *"We are deprecating By and they are all annotations. Maybe they can each create a Reference as one of their own annotations, expose it as a property, and then it can be used. Annotations of Annotations."* · and of About: *"Any book can be About something, but that allows other books to then be able to use it as a subject catalogue."*

| member | what it is | cited |
|---|---|---|
| `Author` · `Subject` · `About` | each an Annotation under its own name; none draws a note | R12, R14, R15 |
| `.text` | the words of the `[text](url)` written in it | the reading Mention and Means have |
| `.reference` | the Reference it stands, expressed | *"expose it as a property"*; `reference` is a **proxy** |
| `.$Define()` | reads its compiled `[text](url)` through the binder and stands `<Reference>{url}</Reference>` among its own annotations | *"Annotations of Annotations"* |
| `.write()` | draws its words | — |
| `AuthorSpecification` · `SubjectSpecification` | **an author is said of a cover** · **a subject is said of a cover** | R12 |
| `AboutSpecification` | **about is said of a cover**; **about names its own book** — its url is its chapter's title's | *"it needs no name. Title and About cover it"* |

**What each says, and how the compiler reads it:**

| written in a cover | the compiler reads | it says |
|---|---|---|
| `<Author>*[[ A Persona ]]</Author>` | an author edge — the whole of it, since an author is answered by nothing | this book is by A Persona |
| `<Subject>**[[ The Library ]]</Subject>` | a catalogue edge, answered by `[[ A Paper ]]**` in The Library's table | this book is filed under The Library |
| `<About>[[ The Log ]]</About>`, after the title | a second title form naming the book itself | this book is about what it is called, so others may be filed under it |

**Every one may give words apart from its name**, the paren tight against the bracket: `<Author>*[[ the log ]]( The Log )</Author>` shows "the log" and means The Log. *Doug: "You always need to be able to say text versus id as an option."*

### In use

```tsx
// the-log/.cover.tsx — the autobiography: by what it is about
export default () => (
    <Chapter>
        <Cover />
        <Autobiography />
        <Title>[[ The Log ]]</Title>
        <Author>*[[ The Log ]]</Author>
        <Subject>**[[ The Library ]]</Subject>
        <About>[[ The Log ]]</About>
    </Chapter>
);
```

**The framework draws none of them as the page**; the [book](05-book.md) exposes them, and a library's book class draws what it likes. The test library's draws a byline from `book.author` and `book.subject`, [in its `.book.tsx`](../../package/.binding/.test/the-library/.book.tsx) — a word standing a Reference to what each exposes:

```tsx
<Paragraph>
    by <Word><Reference>{this.author?.reference?.identifier}</Reference>{this.author?.text}</Word>,
    filed under <Word><Reference>{this.subject?.reference?.identifier}</Reference>{this.subject?.text}</Word>
</Paragraph>
```

***Their own writing is still in the markup***, drawn inside the cover as every annotation's is, `.pd-annotation` on it — and [the library's theme](01-books-in-annotations.md#what-is-not-drawn-yet) hides it, so the reader sees the byline and not the annotations it was drawn from.

## How they are extended

- **A library's own author** is a class under Author under whatever name it likes; the cover's specification and the book find it by `instanceof`, promised as *"a library's own author, under another name, answers the same"*. The compiler reads the stars, never the element — *"The star says it."*
- **What a cover's author may be** is the compiler's: *"1. A book that is by its subject - There can be only one of those 2. Any book catalogued by one that is a subject"* — `MAY-NOT-AUTHOR`, `NO-SELF-AUTHOR`, `TWO-SELF-AUTHORS`.
- **What a subject may be** is the compiler's too: a book is filed only under one whose cover says what it is about — `NOT-A-SUBJECT`, a **proxy name**. And a cover's second title form naming anything but its own book is `TITLED-TWICE`, a **proxy name**.
- **Recognising the fixed points by url** — an autobiography whose Author's url is its title's, a library whose Subject's is — is left for later on Doug's *"Yes just leave it off for now"* (R16); [Autobiography](06-biography-and-autobiography.md) checks the first in its specification meanwhile.

## Promises

Five in the second half of [`.tests/cover.test.tsx`](../../package/.tests/cover.test.tsx): an author answers its words and a reference to its url standing among its own annotations; a subject and an about answer the same way; each is said of a cover, and on the synopsis says so; about names its own book, its url its title's; a library's own author, under another name, answers the same. In the compiler's: a book filed under one about nothing raises `NOT-A-SUBJECT`, and a cover whose second title form names another book raises `TITLED-TWICE`; the structure reads the library, the log and the persona as about something, [promised over the test library](../../package/.binding/catalogue/structure.test.ts).

## Gate

Committed as `abd303d`, the compiler's half as `beccfaf`. Measured 2026-09-25 after U11: the package 202 of 202; the compiler's unit suite 95 of 95 and regression 16 of 16, the byline drawn on every bound page.

**Names.** Doug's: `Author`, `Subject`, `About`. Ours, flagged: `text` and `reference` on each, the three specifications and their rules, and the compiler's `about`, `titledTwice`, `NOT-A-SUBJECT` and `TITLED-TWICE`. *Collection's type alias `Author` — the author of a change — collides with this class at the package's index, which exports this one by name; flagged for Doug.*
