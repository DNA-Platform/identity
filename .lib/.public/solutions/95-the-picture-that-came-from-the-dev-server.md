# The Picture That Came From the Dev Server

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **keywords:** tooling · assumed-environment
- **sprint:** [Sprint 89](../projection/94-sprint-89--figures.md)

---

## Symptoms

**A bound page drew its photograph with a source beginning `/@fs/` and carrying the picture's absolute path on the machine that bound it** — `/@fs/C:/Source/…/manual/6-the-mark-and-the-photograph.png` — an address no served face answers. Measured 2026-09-28 in Sprint 89 on the manual's chapter of the mark and the photograph: the bind reported success, the mark beside it drew inline, and the photograph was a broken image. The package's promises for Image were green throughout, since they hand the figure an address as text and never ask where it came from.

## The mechanism

The assembled book module imported the picture as a module, so that the Append's text would be the address the bundler emits for the file, the way a text file's contents come through a raw import. The binder's render phase draws every page through a Vite dev server, one server for all the pages, and a dev server's address for a file outside its root is `/@fs/` followed by the absolute path. That address is right for the server that made the page and for nothing else. The bundler was asked for an address by the environment that drew the page, and the page is served by another.

## The fix

**A picture is never imported.** Its Append's text is `/<book folder>/<file>`, the address it will have beside the book's pages — [`assembly/book.ts`](../../package/.binding/assembly/book.ts), where `contents` writes an image resource as that string and a text resource as its raw import — and the render phase copies each image resource there, [`binding.ts`](../../package/.binding/binding.ts), after the pages are drawn. The structure stopped reading a picture at the same time — [`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts), *a picture is not read* — since three references had been found in a png's bytes.

## The lesson

**An address a build tool emits belongs to the server the tool was running for.** A page served from a face must carry the face's addresses, and only the binder knows the face, so an address that will be served is the binder's to write and never the bundler's to guess. The tell was the scheme: an address that names a machine's drive is an address made for that machine.

**What is still owed:** the served picture was checked by hand, a request answered with `image/png`; no promise in the regression reads it back yet. Flagged in [Sprint 89's record](../projection/94-sprint-89--figures.md#where-things-stand).

## See also

- [The Suite That Passed Against a Stale Build](05-the-suite-that-passed-against-a-stale-build.md) — the same shape from the other side: a gate green against an artefact that was not the one shipped.
- [The Reference Manual](../writing-a-book/04-the-reference-manual.md) — Libby's list of what bit while the manual was written, this among it.
