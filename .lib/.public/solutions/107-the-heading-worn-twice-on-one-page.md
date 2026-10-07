# The Heading Worn Twice on One Page

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** library · worn-twice
- **sprint:** [Sprint 102](../projection/107-sprint-102--designing-together.md#where-things-stand)

---

## Symptoms

**At the bind's proof, the manual's page refused twice over for one heading, after a chapter was added to the manual:**

```
dougs-reference-manual/index.html — #what-a-cover-says is worn by 2 elements on this page, and an id is worn once
dougs-reference-manual/index.html — a link addresses #what-a-cover-says, and 2 elements on this page answer to it, so a reader lands on whichever comes first
the pages are not readable — 2 faults in dougs-reference-manual/index.html
```

The new chapter, *The Cover*, opened with a section headed *What a cover says*; the manual's older chapter *The Author and the Subject* has a section of the same name. Every rule of the catalogue had passed — 99 keys, every reference resolving — and the live page had drawn the new chapter for an hour without a word. **Sprint 101 met the same:** section headings repeated across the manual's chapters stood twice on its page, which [What Building Found](../writing-a-book/00-04-what-building-found.md#the-binders-rules-met) recorded as *an id worn twice fails the proof*.

## What it turned out to be

**A manual is one page wearing every chapter, and a heading's id is made from its own words and not its chapter's.** The whole heading is the place's address — [The Heading That Took a Number](103-the-heading-that-took-a-number.md) — so two chapters that say one heading make one id, and the page that holds both wears it twice. A link to the place is then a link to whichever comes first, which is what the proof says in its second sentence.

## How it was found

By the bind, and only there: the live page checks the notation as a file is saved and the catalogue's rules when a cover, a synopsis or a table is saved; each page as printed, with its ids, is read back only in a bind's proof. The new chapter had been looked at live many times.

## Why no gate caught it sooner

Because no gate before the proof reads a page; a chapter's section headings are legal in the chapter and collide only on the page that collects them. The catalogue's rules see places, not the pages that wear them.

## The repair, and the rule it leaves

The section was renamed for its chapter — *What the cover carries* — and the proof passed. **The rule:** name each chapter's sections for the chapter when the book is read as one page. The design-level form of the same rule stands in the bookshelf, where an entry is drawn once and referred to once. Open and the binder's: a heading's id scoped by its chapter would end the class of fault, and is a change under the package, which is Doug's to say.
