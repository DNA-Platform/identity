# Biography and Autobiography

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***Written 2026-09-25 with [Sprint 82](../projection/88-sprint-82--chapter-and-book.md), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`src/library/Biography.tsx`](../../package/src/library/Biography.tsx), the promises [`.tests/biography.test.tsx`](../../package/.tests/biography.test.tsx). Placeholders, on Doug's word, and documented as such.***

---

## What they are

**A Biography marks its cover `pa-biography`; an Autobiography is a kind of Biography that marks it `pa-autobiography` too, and specifies that its book is by what it is about.** Doug, 2026-09-25: *"It might help if you made a Biography annotation that just adds pa-biography as an attribute, and then Autobiography as a type of biography that also adds pa-autobiography - for now as placeholders, and Autobiograhy can enforce the author rule in its specification. That will help you see that it needs no name. Title and About cover it."*

| member | what it is | cited |
|---|---|---|
| `Biography.defines` · `erase` | adds `pa-biography` to its writing, and takes it back | *"just adds pa-biography as an attribute"* |
| `Autobiography` | a Biography, so a cover carrying one is found as carrying a Biography | *"a type of biography"* |
| `Autobiography.defines` | calls Biography's, then adds `pa-autobiography`; Biography's `erase` is `revert(this)` and takes back both | *"also adds pa-autobiography"* |
| `Autobiography.specification` | `new AutobiographySpecification()`: **an autobiography is by what it is about** — its Author's url is its About's | *"Autobiograhy can enforce the author rule in its specification"* |

***It needs no name.*** **The autobiography is the book whose Author and About name the same book, and its title and its About already say which book that is** — so nothing new is written to make one: `<Author>*[[ The Log ]]</Author>` and `<About>[[ The Log ]]</About>` on The Log's own cover, and the urls agree.

### In use

```tsx
// persona/.cover.tsx — a biography: about the persona, by the log
export default () => (
    <Chapter>
        <Cover />
        <Biography />
        <Title>[[ A Persona ]]</Title>
        <Author>*[[ The Log ]]</Author>
        <Subject>**[[ The Log ]]</Subject>
        <About>[[ A Persona ]]</About>
    </Chapter>
);
```

**The log carries `<Autobiography />`** — [its cover is in the chapter before](04-author-subject-and-about.md#in-use) — and a bound page shows both marks on its header's element: `<header class="pd-container"><span class="pa-biography pa-autobiography">`.

## How they are extended

- **They are placeholders.** The marks are classes a sheet may style; nothing reads them, and what a biography should do is Doug's to say.
- **The author rule itself is the compiler's**, in the whole library at once — the one book by its own subject, and the books it catalogues — and Autobiography's specification says the same of one cover, from what the cover holds. *The two agree by construction, since the compiler gave the urls the specification compares.*
- **A kind of biography** is a class under Biography, calling `super.defines` and adding its own mark, as Autobiography does.

## Promises

Three in [`.tests/biography.test.tsx`](../../package/.tests/biography.test.tsx): a biography adds `pa-biography` and takes it back when it goes; an autobiography is a biography and adds both; an autobiography is by what it is about, which its title and About name — a persona written as an autobiography by the log does not specify, and neither does one with no About. In the compiler's regression, the log's and the persona's bound headers wear their marks.

## Gate

Committed as `5ba40d9`. Measured 2026-09-25: the package 202 of 202; the compiler's regression 16 of 16.

**Names.** Doug's: `Biography`, `Autobiography`, `pa-biography`, `pa-autobiography`. Ours, flagged: `AutobiographySpecification` and its rule `$byWhatItIsAbout`.
