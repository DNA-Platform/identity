# The link that landed on the first of two

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

**keywords:** tooling · library · collapsed-count · proof · id · fragment · duplicate · Set · slug · heading

---

## Symptoms

- A catalogue row's link, `/dougs-library/#my-library-log`, **landed on a section in another chapter** — one headed by the book's name, printing the same synopsis — and not on the chapter titled by that name. It looked right.
- The proof said **every link on seven pages leads somewhere**. It did: the browser lands a fragment on the first element wearing the id.
- Doug: *"It concerns me that navigation worked. How could it if the synopsis shared a name with the title."*
- Counted afterwards: **six links** on the built pages landing on whichever of two came first, and **twenty-nine ids worn twice** on six pages — the chrome's name on every page, "Cautions" seven times, a transcript heading nine.

## What it was

***Two faults, one hiding the other.*** **The proof gathered a page's ids into a `Set`**, so the second `my-library-log` vanished before the fragment was judged: `ids.has(fragment)` was true, and true is all a set can say. **And every heading slugged its own words into an id** (`Heading.tsx`), so a section headed "My Library Log", the chapter titled "My Library Log", the chrome's `<Heading>Dougs Library</Heading>` twice on every page and the tabs' heading naming the page's own book all wore ids nothing had validated — the compiler refuses two *names* in one scope, and a heading is not a name.

## The repair

- **The proof counts.** `Map<string, number>` where the set was; a link whose id answers other than once is refused, on its page or another; and an id worn twice is refused whether or not anything addresses it. Four promises in [`proof.test.ts`](../../package/.binding/specification/proof.test.ts).
- **A heading wears an id only as a chapter's title or when a mention allocated it.** One seam, `$Writing.id`, which is the fold's key; `$Chapter` overrides it with its name, so a chapter answers to its address printed title or not; `$Heading`, `$Illustration`, `$Entry` and `$Date` draw `this.id` — five hands to one. Doug's yes on `src`.
- **A heading a table refers to is allocated**, `[[[ X ]]]`, and the row spends it, `$[ ./X ]`: twelve headings in Doug's library, sixteen rows that had written `#fragment` by hand.

## The lesson

***A check that gathers into a set where it must count reports "present" for "present twice", and a link that works by accident passes it.*** *Any gate over ids, names or keys asks "how many", never "whether".* **And an id is an address: nothing may wear one that the language did not name**, *or the compiler's uniqueness over names guarantees nothing about the page.* [A Library, Necessarily and Sufficiently](../the-catalogue-and-the-specification/09-a-library-necessarily-and-sufficiently.md) is the specification this repair fell out of; [B32](../the-catalogue-and-the-specification/08-the-binders-condition.md#b32) is the register entry.
