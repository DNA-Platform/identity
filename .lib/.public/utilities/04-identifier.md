# Identifier

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***Written 2026-09-26 with U1 of [Sprint 85](../projection/91-sprint-85--headings-and-routes.md#u1); the code is [`Identifier.ts`](../../package/src/utilities/Identifier.ts), the promises [`.tests/identifier.test.ts`](../../package/.tests/identifier.test.ts).***

---

## What it is

***"Title should use the name to create the fragment with the Identifier utility. The url should be completely arbitrary."*** — Doug, 2026-09-26. **The Identifier is the one function that spells a name as an id**, and it is the one the compiler imports: a title, a mention and a heading make their own id from their name with it, and the fragment the compiler writes into an address is the same function of the same name, so the two agree by construction rather than by a proof reading pages.

| member | what it is | cited |
|---|---|---|
| `identifier.slug(name)` | the name lowercased, an apostrophe dropped so it stays inside its word, an ampersand written *and*, every other run of anything but a letter or a digit **of any script** one dash, and none at either end: `Doug's Library` is `dougs-library`, `Claude & Our Projects` is `claude-and-our-projects`, `Понимание основ СРТ` is `понимание-основ-срт` | v1's `reflection.slug` letter for letter for a Latin name, so no address a library answers to has moved; every other script kept since 2026-10-14, [below](#every-alphabet) |

**Exported as the other utilities are** — the class `Identifier`, an instance `identifier` — and used at a writing's `$Define`, where a Title or a Mention reads the compiled `[name](identifier)` and stands `<Referent>{identifier.slug(name)}</Referent>`, never the url's fragment.

## Where the slug stood, and why it moved

**Until 2026-09-26 the slug was the compiler's own**, in [`resolution/addresses.ts`](../../package/.binding/resolution/addresses.ts), on Doug's 2026-09-24 ruling: *"Reflection.slug doesn't have to exist. No, the compiler should handle all of this. It is in control and we should build public like it has no clue what these things are other than an identifier that could be anything and a url."* A title then took its id from the fragment of the url the compiler gave it, and a plain heading could have none.

**It moved when an id became the name's**, so that a heading written plain could make one, and a title's could not depend on a url that is now arbitrary. The later word holds, and the reason it does is that nothing about the compiler changed: it still gives every url, and the runtime still spells no address — it spells an id, from a name, with the function the compiler spells its fragments with.

## <a id="every-alphabet"></a>Every alphabet — added 2026-10-14, [Sprint 109](../projection/114-sprint-109--dougs-importer.md), U13

***Doug, 2026-10-13, ruling the names of his imported conversations, two of which are titled in Cyrillic: the slug keeps every alphabet.*** *Until then the slug kept `a-z` and `0-9` and dashed everything else, so a title in Cyrillic slugged to nothing and the binder refused it as a book with no address. Now a run of anything but a letter or a digit, `\p{L}` and `\p{N}` under the `u` flag, is the dash, and the lowercase is Unicode's; a Latin name slugs as it always did.* **Two decodes go with it, in the binder's application and its arrival:** *a browser hands `location.pathname` and `location.hash` over percent-encoded, while a route's address and a chapter's id are the slug's own letters, so the app decodes the pathname it matches a route by and the bookmark it sets, and the arrival decodes the fragment it opens; the proof, reading the written page, compares raw letters to raw letters and needs none.* **Promised** *by a book of the test library titled* Записки библиотекаря*, with a chapter* О книгах *and a heading in Cyrillic, bound at `/записки-библиотекаря` and reached there in the browser turned to `#о-книгах`, hydrating without a redraw; and by the arrival's own promise over a percent-encoded fragment.*

## How it is extended

- **What a library slugs, it slugs with this**, so a class that makes an id for itself — a heading, a figure, a footnote — calls `identifier.slug` and agrees with every address the compiler writes.
- **It holds one operation until a second is needed**: Doug named it a utility "to store those operations", and the next one lands here.

## Promises

Four in [`.tests/identifier.test.ts`](../../package/.tests/identifier.test.ts): lowercase with one dash between words; punctuation read as prose reads it; the letters and digits of every script kept; an instance of its class. The compiler's slug promises moved here from `resolution/addresses.test.ts` with the function.

## Gate

Committed as `0593c22`, the compiler's four callers importing it in the same commit. Measured 2026-09-26: the package's typecheck 0 errors and 238 of 238; the compiler's typecheck 0 errors, unit 97 of 97 — three fewer, the slug promises having moved here — and regression 22 of 22, every address of the test library unchanged.

**Names.** Doug's: `Identifier`, the utility. Ours, flagged: `slug`, v1's name for the operation.
