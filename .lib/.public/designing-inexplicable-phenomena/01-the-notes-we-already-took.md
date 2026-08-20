# The Notes We Already Took

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

This book extends notes the team already made. They are gathered here so design work starts from the shelf, not from archaeology.

## Sprint 43's resource record

[The Library Hosts Itself](../../../chemistry/.lib/projection/42-sprint-43--the-library-hosts-itself.md) is the founding note. It tracks: the [Inexplicable Phenomena conversation](../../../../../dna-library/library/claude-dna/conversations/2026-07-13-inexplicable-phenomena.md) (read all 980 lines; the architecture stated at minute one is overturned in the final message); the **eleven SRT prototypes** — Front Door / Book / Frontier, the wiki node, the lenses, the zoom-out, the root-that-holds-the-spec — which live inside the export (`dna-library/library/claude-dna/.exports/…` → `conversations.json` → the `create_file` blocks), *not* in the stale artifacts folder; and the warning to read prototypes against the transcript, never instead of it.

## The archive: a working prior attempt

`.archive/` — gitignored, on disk — is the previous incarnation of this repository, and it already solved the display problem once:

- **[`formatting.md`](../../../../.archive/.documentation/formatting.md)** — the *Academic Markdown to HTML Converter* specification, read end to end 2026-07-29. It defines: KaTeX inline (`$…$`) and display (`$$…$$`) math; LaTeX environments (`theorem`, `proof`, `lemma`, `definition`, `example`, `remark`, `note`, `corollary`); Citation.js footnote citations (plain text or BibTeX) with a generated bibliography; definition lists; highlight.js code blocks; and web-compatible link rewriting — `.md`→`.html`, anchors encoded, everything relative for portability.
- **The stack**: `marked@^16` + `katex@^0.16` + `highlight.js@^11` (from `.archive/package.json`). This choice is prior art, not a new decision — extending it is the default.
- **[`code/`](../../../../.archive/code)** — twelve prototypal $Chemistry library classes written once already (`Book`, `Collection`, `Writing`, `Section`, `Reference`, `Article`, `Encyclopedia`, `Figure`, `Interactive`, `Technical`, `Organization`, plus `chemistry.ts`), and a rendered encyclopedia under `code/content/`. Sprint 43's verdict: a predecessor, not a warning — the framework beneath it was rebuilt, and the library came along into the archive.

## What Sprint 44 added to the shelf

The as-built composition model this book designs against: [the register](../the-semantics-of-books/08-the-symbolizing-dyad-and-the-register.md) and the [sprint record](../projection/01-sprint-44--composition.md) — `$Writing` floor, `$Composition` interface, the `$Referent` levels through `$Section`, content as one live block, levels parsed never authored, readings fresh.
