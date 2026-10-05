# The Project Nobody Ran

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** tooling · unrun-rule
- **sprint:** [Sprint 90](../projection/95-sprint-90--the-binder-reads-with-the-parser.md)

---

## Symptoms

**The catalogue's performance promise, run for the first time since Sprint 88 to print the parser's cost, failed three times in a row for three reasons that had nothing to do with the parser.** First: `the-library/.table.tsx does not list <Paragraph><Word><Content>[[ A Paper ]]**</Content></Word> …, so there is nowhere to list its copies after`, thrown by the harness before a book was copied. Then, with that mended, four hundred `UNREFERENCED-MENTION` faults, two in every copy of the paper. Then, with those gone, `expected 206 to be 205`. Measured 2026-09-28; the unit and regression projects had been green throughout, and the design of record's table still quoted numbers from the 19th.

## The mechanism

Nothing ran the performance project, so nothing noticed it stop passing. Three sprints changed what it depends on and each left it a little more red:

- **Sprint 88** gave every row of the library's table words apart from the name — `$[ a paper by a persona she vouched for ]( A Paper / Synopsis )` — and the harness found the paper's row by an exact match of the whole row in its old bare shape, so its anchor never matched again.
- **Sprint 88** also made the paper's two headings mentions, since Libby's book hops to them; a copy of the paper carries the same mentions and nobody hops to a copy's, which the compact rule refuses, correctly.
- **Sprint 89** added the manual, a sixth book, and the promise counted five plus the copies.

Each change was right. Each was invisible to a project that only the design of record's table remembered.

## The fix

The harness finds a row by the half that names the book, `[[ name ]]**`, and inserts the copies after that line; a copy's chapters keep their headings as plain words, since a copy is a book that names no places; the promise counts six books — [`.test/galleys.ts`](../../package/.binding/.test/galleys.ts), [`.test/catalogue.performance.ts`](../../package/.binding/.test/catalogue.performance.ts). The project passes, and prints the parser's rows.

## The lesson

**A promise that no gate runs is a promise nobody is keeping, and its red is the same colour as its green.** The performance project is not part of `npm test` because a bind is slow, and that is right; but a change to the test library's shape — a table's rows, a book's mentions, the count of books — is a change to what the performance project copies, and the sprint that makes it owes the project one run. The tell is a measured table in the design of record whose date is older than the library it measures.

## It happened again, the next day

**The fix above landed on 2026-09-28. On 2026-09-29, [Sprint 93](../projection/98-sprint-93--the-explorer.md) renamed the test library's catalogue folder from `the-library` to `library`, and the performance project's two files still named the old one.** It was red from that commit, through the gates of Sprints 93 to 98, for six days and nobody ran it: `ENOENT … the-library\.table.tsx`, thrown by the harness opening a table to list the copies after. It was found on 2026-10-05 only because [Sprint 99](../projection/104-sprint-99--the-link-aggregator.md) changed the rules a table is held to and ran it to see them hold over many books. Doug: *"Wait the binder has a red performance suite? This is the time to fix it… Binder performance is critical."*

**The mending was one word in two files, and a count:** the folder's name, and the render promise's five books made six with a page counted for the root — [`.test/catalogue.performance.ts`](../../package/.binding/.test/catalogue.performance.ts), [`.test/render.performance.ts`](../../package/.binding/.test/render.performance.ts). It is no benchmark and failed on no number: it asserts that the library is still one and that the bind finishes, and prints what each step cost — his own rule of 2026-09-19, *"don't confuse unit / regression / performance."*

**The lesson above was written the first time and not kept, because it was a sentence and not a step.** *"The sprint that makes it owes the project one run"* asked each sprint to remember. So it is a step now: [the order of work](../writing-a-book/07-the-development-policies.md) runs the performance suite with the gates whenever the binder or the shape of the test library changes, and writes the numbers into [the design of record](../the-catalogue-and-the-specification/07-the-binder.md#measured) beside the last run's, where a missing date shows.

## See also

- [The Suite That Passed Against a Stale Build](05-the-suite-that-passed-against-a-stale-build.md) — a green that measured yesterday.
- [Reading TSX with the Compiler API](../the-catalogue-and-the-specification/10-reading-tsx-with-the-compiler-api.md) — the rows this project was run to print.
