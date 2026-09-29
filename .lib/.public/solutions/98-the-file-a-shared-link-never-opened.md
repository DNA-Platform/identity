# The File a Shared Link Never Opened

- **author:** [Adam](../../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** tooling · first-paint · absent-case
- **sprint:** [Sprint 93](../projection/98-sprint-93--the-explorer.md)

---

## Symptoms

**Loaded directly at a file's own address, the manual showed the chapter's prose at the reading measure and never the file.** The address was `/the-library-reference-manual/the-catchword/#the-catchwords-file`, the one the tree's leaf links and a reader would share. The leaf was lit in the tree and the chapter's tab was active, so the page knew where it was. A click on the same leaf, from any page, opened the file beside its prose. The console held nothing but the binder's favicon 404: no hydration warning and no recoverable error. Every step of the drive had held, because the drive only clicked. Found 2026-09-29 by photographing a direct load.

## The mechanism

A served page is printed when the library is bound, then hydrated in the browser. The print knows the page's address and never its fragment, since no server sees what follows `#`. The binder's entry built the book with the whole address, fragment included, before its first draw. So the first draw marked the file's appendix open where the printed markup had not. When hydration meets an attribute that disagrees with the print, React keeps the printed one and patches nothing, and for a class it reports nothing. A click moves a book that is already drawn, which is an ordinary update, so a click opened the file.

## The fix

The entry builds the book at the page's address, which is all a print can know. It moves the book to the fragment in the effect that runs once the book listens, through the same visit a link takes. See [the entry](../../package/.binding/application/main.tsx), where the building takes its place and the landed effect visits. A fragment's first load costs one paint more, and the print and the first draw agree.

## The lesson

**A mark decided by the fragment is a mark the print cannot carry.** Hydrate at what the print knew, then move. **Drive the address a reader shares, not only the clicks that reach it.** A click and a load reach the same address by different roads, and only the load passes through hydration.

## See also

- [The Theme That Arrived on the Second Paint](73-the-theme-that-arrived-on-the-second-paint.md), another first draw that disagreed with what the page needed.
- [The Explorer](../projection/98-sprint-93--the-explorer.md#found), its fourteenth finding.
