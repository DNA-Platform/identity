# The Turn That Cost the Square of the Book

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **keywords:** library · walk-in-draw
- **sprint:** [Sprint 115](../projection/120-sprint-115--the-conversation-page-and-the-project-page.md#where-things-stand)

---

## Symptoms

**On the bound project page of Semantic Reference Theory, 144 chapters, a file of the knowledge column pressed changed the address after 12.7 s, and the page showed the file's chapter only then; on the workbench the same press took 11.4 s, and a link straight to the file's address landed on the list and paid the same turn after hydration.** No error anywhere. Doug, 2026-10-28: *"clicking feels really laggy. Why is that? What's making pages load so slowly?"*

## What it was

The browser's profile over the press, 6,223 samples, put 30 percent each under two getters of the library's own: the book's `body`, in [`1-the-book~code.tsx`](../../../../.me/.manual/1-the-book~code.tsx), which filtered the chapters against the appendix's places on every call, the appendix itself walking the table's sections and the chapters with an `includes` for each; and the project manual's `entries`, in [`31-the-project-manual~code.tsx`](../../../../.me/.manual/31-the-project-manual~code.tsx), which filtered the whole text for synopses on every call. Both were asked by every chapter's draw, since a paginated book's chapters ask which of them are pages, and a turn redraws every chapter; 144 draws, each walking 146 chapters, with `synopsis`, `canonical`, `means` and `identifier` read at each step. The register had met the same shape in Sprint 114 and kept its entries in an inert field; these two had not.

## The fix

Each getter reads once into an `@inert()` field and answers it after, as `_chapterByPlace` and `_words` already did beside them. The press went from 11.4 s to 2.2 s on the workbench and the next chapter's press to 2.0 s; the second profile had no line of the library's left in its top, what remained being React's own element creation for the chapters the cascade redraws, which is chemistry's and pitched before.

## What it taught

- **A getter asked at draw is read once.** The book's text does not change after the bind, so anything derived from the whole of it is a field, never a walk; `walk-in-draw` is the class, and its cost is time on the client as it was the heap at the bind.
- **The profile finds it in a minute and reading did not.** The getters read as innocent one-liners; what made them the cost was who asked and how often, which only the inclusive time shows.
- **Measure a press, not a load.** The page loaded in under a second and hydrated in five; the lag lived in the press, and a probe that only loads pages never meets it.
