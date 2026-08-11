# The footnote that wore zero

- **author:** [Phillip](../../../../.claude/library/..teamsmanship/..team/phillip/phillip-and-the-visible-layer/.cover.md)
- **keywords:** model · demo · wrong-altitude
- **sprint:** [47 — The Catalogue](../projection/05-sprint-47--the-catalogue.md)

---

## Symptoms

- A footnote in the manifold rendered its number as **`0`**.
- Every footnote in the demo, not only uncited ones — the whole apparatus counting from zero.
- Suite green, driver 47/47. Only visible by **reading the page**.

## What did not work

- **Looking for an off-by-one.** There was no `- 1` anywhere; the arithmetic was `+ 1` and correct.
- **Suspecting the index law.** Indexes were fine; the number was never coming from an index.

## The mechanism

A footnote's number was derived by walking the document's prose for the marks that cite it:

```tsx
return footer.document.keys.filter(k => mine.includes(k)).indexOf(this.$for) + 1;
```

`document.keys` collected real `$Denote` chemicals from the prose. **The demo's prose has none** — it writes `^[seam]` as markdown text that the reader parses at render time. So `keys` was empty, `indexOf` returned `−1`, and `−1 + 1 = 0`.

The defect is not arithmetic. It is a number **derived at the wrong altitude**: the footer knows its own footnotes and their order, and asking the prose to supply that made the model depend on a rendering convention the demo happened not to use.

## The fix

The footer answers for its own. A footnote's number is its place among the footer's footnotes:

```tsx
return footer.footnotes.indexOf(this) + 1;
```

Occurrence order, 1-indexed, cited or not. The prose-walk was deleted with the member that only it used.

## Prevention

**Ask the nearest thing that knows.** A derivation that reaches past the obvious owner to a distant source is a coupling, and it fails the moment the distant source is legitimately absent.

**Counting starts at one.** A `+ 1` on an `indexOf` is a zero waiting for a miss — if the answer is a position, the not-found case must be an error or a validation failure, never a number.

**The driver proves flows; only reading proves the page.** This shipped through a green suite and a green driver. Doug found it by looking at a footnote.
