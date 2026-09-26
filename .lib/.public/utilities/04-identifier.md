# Identifier

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***Written 2026-09-26 with U1 of [Sprint 85](../projection/91-sprint-85--headings-and-routes.md#u1); the code is [`Identifier.ts`](../../package/src/utilities/Identifier.ts), the promises [`.tests/identifier.test.ts`](../../package/.tests/identifier.test.ts).***

---

## What it is

***"Title should use the name to create the fragment with the Identifier utility. The url should be completely arbitrary."*** — Doug, 2026-09-26. **The Identifier is the one function that spells a name as an id**, and it is the one the compiler imports: a title, a mention and a heading make their own id from their name with it, and the fragment the compiler writes into an address is the same function of the same name, so the two agree by construction rather than by a proof reading pages.

| member | what it is | cited |
|---|---|---|
| `identifier.slug(name)` | the name lowercased, an apostrophe dropped so it stays inside its word, an ampersand written *and*, every other run of anything but a letter or a digit one dash, and none at either end: `Doug's Library` is `dougs-library`, `Claude & Our Projects` is `claude-and-our-projects`, `What is claimed` is `what-is-claimed` | v1's `reflection.slug` letter for letter, so no address a library answers to has moved |

**Exported as the other utilities are** — the class `Identifier`, an instance `identifier` — and used at a writing's `$Define`, where a Title or a Mention reads the compiled `[name](identifier)` and stands `<Referent>{identifier.slug(name)}</Referent>`, never the url's fragment.

## Where the slug stood, and why it moved

**Until 2026-09-26 the slug was the compiler's own**, in [`resolution/addresses.ts`](../../package/.binding/resolution/addresses.ts), on Doug's 2026-09-24 ruling: *"Reflection.slug doesn't have to exist. No, the compiler should handle all of this. It is in control and we should build public like it has no clue what these things are other than an identifier that could be anything and a url."* A title then took its id from the fragment of the url the compiler gave it, and a plain heading could have none.

**It moved when an id became the name's**, so that a heading written plain could make one, and a title's could not depend on a url that is now arbitrary. The later word holds, and the reason it does is that nothing about the compiler changed: it still gives every url, and the runtime still spells no address — it spells an id, from a name, with the function the compiler spells its fragments with.

## How it is extended

- **What a library slugs, it slugs with this**, so a kind that makes an id for itself — a heading, a figure, a footnote — calls `identifier.slug` and agrees with every address the compiler writes.
- **It holds one operation until a second is needed**: Doug named it a utility "to store those operations", and the next one lands here.

## Promises

Three in [`.tests/identifier.test.ts`](../../package/.tests/identifier.test.ts): lowercase with one dash between words; punctuation read as prose reads it; an instance of its class. The compiler's slug promises moved here from `resolution/addresses.test.ts` with the function.

## Gate

Committed as `0593c22`, the compiler's four callers importing it in the same commit. Measured 2026-09-26: the package's typecheck 0 errors and 238 of 238; the compiler's typecheck 0 errors, unit 97 of 97 — three fewer, the slug promises having moved here — and regression 22 of 22, every address of the test library unchanged.

**Names.** Doug's: `Identifier`, the utility. Ours, flagged: `slug`, v1's name for the operation.
