# Identifier

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- ***Written 2026-09-26 with U1 of [Sprint 85](../projection/91-sprint-85--headings-and-routes.md#u1); the code is [`Identifier.ts`](../../package/src/utilities/Identifier.ts), the promises [`.tests/identifier.test.ts`](../../package/.tests/identifier.test.ts).***

---

## What it is

***"Title should use the name to create the fragment with the Identifier utility. The url should be completely arbitrary."*** — Doug, 2026-09-26. **The Identifier is the one function that spells a name as an id**, and it is the one the compiler imports: a title, a mention and a heading make their own id from their name with it, and the fragment the compiler writes into an address is the same function of the same name, so the two agree by construction rather than by a proof reading pages.

| member | what it is | cited |
|---|---|---|
| `identifier.slug(name)` | the name lowercased, an apostrophe dropped so it stays inside its word, a sign that reads as a word written as it, an ampersand *and*, a plus *plus*, an at-sign *at*, a percent sign *percent*, every other run of anything but a letter or a digit **of any script** one dash, and none at either end: `Doug's Library` is `dougs-library`, `Claude & Our Projects` is `claude-and-our-projects`, `Понимание основ СРТ` is `понимание-основ-срт` | v1's `reflection.slug` letter for letter for a Latin name, so no address a library answers to has moved; every other script kept since 2026-10-14, [below](#every-alphabet) |
| `identifier.normalized(text)` | the text as it is seen: composed (NFC), so a letter typed as one mark or two is one letter; every space one space; controls and invisible marks taken out, but a joiner between two letters of a script kept; trimmed | added 2026-10-17, [below](#one-id) |

**Exported as the other utilities are**: the class `Identifier` and an instance `identifier`. A Title, a Mention and a Heading use it at `$Define` through `binder.referent(link)`, [below](#one-id). That rule wears the fragment of the address the compiler gave, and slugs the words only where the address names no fragment.

## Where the slug stood, and why it moved

**Until 2026-09-26 the slug was the compiler's own**, in [`resolution/addresses.ts`](../../package/.binding/resolution/addresses.ts), on Doug's 2026-09-24 ruling: *"Reflection.slug doesn't have to exist. No, the compiler should handle all of this. It is in control and we should build public like it has no clue what these things are other than an identifier that could be anything and a url."* A title then took its id from the fragment of the url the compiler gave it, and a plain heading could have none.

**It moved when an id became the name's**, so that a heading written plain could make one, and a title's could not depend on a url that is now arbitrary. The later word holds, and the reason it does is that nothing about the compiler changed: it still gives every url, and the runtime still spells no address — it spells an id, from a name, with the function the compiler spells its fragments with.

## <a id="every-alphabet"></a>Every alphabet — added 2026-10-14, [Sprint 109](../projection/114-sprint-109--dougs-importer.md), U13

***Doug, 2026-10-13, ruling the names of his imported conversations, two of which are titled in Cyrillic: the slug keeps every alphabet.*** *Until then the slug kept `a-z` and `0-9` and dashed everything else, so a title in Cyrillic slugged to nothing and the binder refused it as a book with no address. Now a run of anything but a letter or a digit, `\p{L}` and `\p{N}` under the `u` flag, is the dash, and the lowercase is Unicode's; a Latin name slugs as it always did.* **Two decodes go with it, in the binder's application and its arrival:** *a browser hands `location.pathname` and `location.hash` over percent-encoded, while a route's address and a chapter's id are the slug's own letters, so the app decodes the pathname it matches a route by and the bookmark it sets, and the arrival decodes the fragment it opens; the proof, reading the written page, compares raw letters to raw letters and needs none.* **Promised** *by a book of the test library titled* Записки библиотекаря*, with a chapter* О книгах *and a heading in Cyrillic, bound at `/записки-библиотекаря` and reached there in the browser turned to `#о-книгах`, hydrating without a redraw; and by the arrival's own promise over a percent-encoded fragment.* **And the signs that read as a word, on his word landing it:** *"remember to convert sensible things. & should be and. Are there other conversions like that that are obvious?"* — *the ampersand it always read, and since the same day a plus, an at-sign and a percent sign, each the word a reader says for it, `C++ at 100%` being `c-plus-plus-at-100-percent`; a sign that reads as no word, a slash, a colon, a hash, stays a dash. His library's importer slugs its folders the same way and makes a book's title sensible besides, [The Importer](../../../../.me/importer/1-the-importer.tsx).*

## <a id="one-id"></a>One id for every name, added 2026-10-17 in [Sprint 111](../projection/116-sprint-111--dna-and-dna-legacy.md#u17), U17

***Doug, 2026-10-17:*** *"It is very important that we normalize text for ids exactly teh same. There should be dedicated code. It should be well tested with promises. It should be part of the binder. Never duplicated. And used broadly."* He approved the proposal the same day, adding *"Make sure the sanitizer is very smart… and ponder corner cases that are unseen thus far too!"*

**What broke.** A title written `[[ words ]]( key )` was addressed by the catalogue from its key, but wore an id slugged from its words. The final bind of his library missed 366 links that way, and wore some ids twice, because five conversations titled alike all wore one id.

**The rule now.** `binder.referent(link)` is the id a named writing wears: the fragment of its address, which the catalogue made from the key. A title whose address is its book's, a cover's or a synopsis's, names no fragment and wears the slug of its words. The binder's address check claims exactly those ids, so its two-second check sees what the page wears. **This reverses the 2026-09-26 rule above, *"never the url's fragment"*, on his approval of the proposal that named it;** the slug is still the one function both sides use.

**The slug, made smart.** It begins from `normalized`. Every apostrophe a keyboard types for one is dropped, `' ’ ‘ ʼ \` ´`. `=` is *equals* and `≠` *not equals*, so `P = NP` and `P ≠ NP` stand at two addresses where both were `p-np`. A sharp after a letter is *sharp*, so `C#` is `c-sharp`, while `#2` and a heading's `#` are nothing. Invisible marks and variation selectors are dropped, and a script's vowel signs are kept inside their word, so Devanagari stays one word. Measured before landing: across 2,669 names in 2,360 files of his library and the test library, **no address moved**.

**The sanitizer and the spellings stand in the binder**, beside the grammar: `sanitized`, `escaped` and `shown` in [the language](../the-catalogue-and-the-specification/06-the-language.md#nobody-chose), `written` beside `reads`. All of them begin from `normalized`, so a sanitized name stands at the address its raw name would.

## How it is extended

- **What a library slugs, it slugs with this**, so a class that makes an id for itself — a heading, a figure, a footnote — calls `identifier.slug` and agrees with every address the compiler writes.
- **It holds one operation until a second is needed**: Doug named it a utility "to store those operations", and the next one lands here.

## Promises

Seventeen in [`.tests/identifier.test.ts`](../../package/.tests/identifier.test.ts). The first four are lowercase with one dash between words, punctuation read as prose reads it, the letters and digits of every script kept, and an instance of its class. Ten more, from 2026-10-17, are each a pair of names that look alike or read alike: composed and decomposed accents, every apostrophe, `=` and `≠`, the sharp, the invisibles, every kind of space, a script's marks, a lookalike standing where its letter stood, pictographs, and the slug of a slug. Three are `normalized`'s. `binder.referent` has its own in `reference.test.tsx`, and a title, a mention and a heading wearing their key's fragment have theirs in `chapter.test.tsx`, `reference.test.tsx` and `section.test.tsx`.

## Gate

Committed as `0593c22`, the compiler's four callers importing it in the same commit. Measured 2026-09-26: the package's typecheck 0 errors and 238 of 238; the compiler's typecheck 0 errors, unit 97 of 97 — three fewer, the slug promises having moved here — and regression 22 of 22, every address of the test library unchanged.

**Names.** Doug's: `Identifier`, the utility. Ours, flagged: `slug`, v1's name for the operation.
