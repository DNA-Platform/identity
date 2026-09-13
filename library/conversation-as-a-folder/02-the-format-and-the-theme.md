# The Format and the Theme

- **author:** [Gabby](../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Cathy](../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)

---

***The question Doug asked:*** **"figure out how to implement this as a format with the theme that would still work in an article or encyclopedia page."** *The answer is a division already ruled and only half built, and a dialogue is the case that forces the other half.*

## <a id="split"></a>The division — ***themes per type, formats per instance***

**Doug ruled this on 2026-09-11, reading the encyclopedia theme's infobox group:**

> **"Themes should be single for a type, formats should be individual, and the two should have access to each other so one can use the same values as the other. Your theme approach isn't modular at all."**

| | one per | holds | reached by |
|---|---|---|---|
| **`$DialogueTheme`** | **type** — every dialogue in the world | the values and rules constant for all of them: the exchange rhythm, the speaker gutter, the code chrome, the rail's width | **registration** |
| **`$DialogueFormat`** | **instance** — this one conversation | what is particular: density, whether exchanges are numbered, whether the rail is open, which exchange is current | **worn**, written into the dialogue |

**What was built on 2026-09-12 is only the book's half** — `$Writing.theme` asks its parent upward and answers the package's theme at the top; a book holds one and runs it down. ***A theme per KIND — the first thread of that ruling — is recorded in [The Motif](../../../inexplicable-phenomena/library/.public/.lib/the-motif/04-themes-per-type-formats-per-instance.md#built) as NOT BUILT***, and the encyclopedia's per-kind groups still sit in its page sheet.

> ***So the finding is this:*** **a dialogue is the first kind that cannot be dressed by the page's theme at all**, because the page it stands in is not one page — it is an article one day and an encyclopedia the next. **It is the worked example the September ruling was waiting for.**

## <a id="trick"></a>The trick that makes one dialogue work in two dresses

***The dialogue theme holds RULES and reads VALUES from the theme above it.*** **That is the whole mechanism, and the encyclopedia already does it** — [`$BoxFormat`](../../../inexplicable-phenomena/library/.public/package/src/encyclopedia/Box.tsx) never names a colour:

```tsx
get background() { return this.theme.paper; }
get border()     { return `1px solid ${this.theme.shade}`; }
```

**So `$DialogueTheme` says *an exchange is separated from the one above it by a hairline*, and never says what colour a hairline is:**

```tsx
export class $DialogueTheme extends $Theme {
    // RULES — constant for every dialogue, in every dress
    exchange_display = 'grid';
    exchange_gridTemplateColumns = 'minmax(0, 7em) minmax(0, 1fr)';
    exchange_gap = '0 1.2em';
    exchange_padding = '1.1em 0';
    get exchange_borderTop() { return `1px solid ${this.theme.shade}`; }   // VALUE from the page

    // the speaker stands in the gutter, quiet, in the page's own body face
    speaker_fontWeight = '700';
    get speaker_color()      { return this.theme.pale; }
    get speaker_fontFamily() { return this.theme.body; }
}
```

**In an encyclopedia page `shade` is `#eaecf0` and `body` is `sans-serif`; in the paper they are the paper's.** ***The same dialogue, the same rules, two dresses, and not one line of it knows which.***

**And where the dialogue genuinely must differ by dress, it is a registration and not a conditional** — `$EncyclopediaDialogueTheme extends $DialogueTheme` registered in the encyclopedia's file. *A kind-conditional in a utility is [B1 in the wart register](../../../inexplicable-phenomena/library/.public/.lib/projection/75-sprint-69--the-wart-hunt.md#b1); this design must not add a seventy-eighth.*

## <a id="tag"></a>The gotcha that will cost a day if it is not said now

**A format does not write its element — the writing does — and chemistry stands the compiled component in place of that element ONLY if the tags match.** *Read at `particle.ts:324-338`; recorded as [F2](../../../inexplicable-phenomena/library/.public/.lib/projection/75-sprint-69--the-wart-hunt.md#f2) with four files paying it today.* **`$Section.definition = 'section'`, so:**

```tsx
export class $DialogueFormat extends $Format {
    override selector: any = styled.section;   // MUST be section, or the format WRAPS
}
```

**Get it wrong and nothing throws** — the format quietly adds a `<div>` around the dialogue, which is exactly how `$Image` ended up inside `<div of="$IllustrationFormat">`. ***Doug has already ruled the direction that removes the trap*** — `definition` moves to `$Composition`, protected and possibly unset, and a composition that wears a format lets the format own the element. **Until that lands, the tag is said twice and the second saying is load-bearing.**

## <a id="context"></a>One formatting context, or the rail will not clear

**Every prose document in a book is its own grid item, placed in the text column by the page theme — and a float cannot cross from one grid item into another, whatever the nesting.** *That is why `$Encyclopedia` has a `body()` at all: it gathers the article's chapters into one element so a floated infobox reaches the prose beneath it.*

***A dialogue needs the same, for the same reason.*** **`$Dialogue` is one element holding all its exchanges, so an exchange's aside, a pinned document or a floated figure clears against the exchanges that follow it** — and it gets that for free by being a single section rather than a run of loose exchanges. *The measurement that settled it next door: a line in the chapter after the manual came back 374 wide against the manual's edge and 676 below it.*

## <a id="rail"></a>The document viewer — ***the rail already exists, and only in one of the two dresses***

> ***Doug:*** **"We could have the document viewer on the right if clicked."**

**The encyclopedia theme is already a three-track grid, read off en.wikipedia.org and recorded in its own first comment:**

| track | width | |
|---|---|---|
| **contents** | 12.25em | *15.5em from 1600px* |
| **text** | capped at 59.25em | |
| **rail** | **12.25em** | ***this is the viewer's track*** |

*Packed left inside a container capped at 1596px, tracks 1.5em apart, padding 2.75em — 3.25em from 1600.* ***So in an encyclopedia page the viewer is not a new layout; it is the third track, already measured, currently mostly empty.***

**In the paper there is no rail, and there must not be one** — a LaTeX page is one measure. **So the viewer degrades by dress, and the degradation is a registration:**

| dress | a clicked document opens as |
|---|---|
| **encyclopedia** | the **rail**, sticky, beside the exchange that names it |
| **article / paper** | an **`$Aside`** in flow at the exchange, or a fold — *the paper's own idiom, not a panel* |
| **narrow (≤640px)** | in flow, under the exchange — *the same collapse `$InfoboxFormat` already writes* |

***Which one is live is the FORMAT's, not the model's.*** **`$DialogueFormat` carries `opened: $Reference | undefined`** — *which document this dialogue is showing* — and the theme decides where an opened document is drawn. **The model never carries a word like "panel" or "floating".** *That is the standing rule: `$ManualFormat` and `$InfoboxFormat` both say `float: right` and neither changed when the flow was built.*

## <a id="hidden"></a>Two features already in the framework that this design needs

- ***`print={false}` declares without drawing, and it already works.*** *A writing written with it becomes parenthetical; `$Writing.view()` returns null before `print()` is ever called.* **So a thinking block and a tool call are written into the transcript, stand in the model, are readable by anything that walks the book — and do not draw until a format turns them on.** *No member is owed for it. It is the exact shape of "show thinking".*
- ***The reference's `read()` and `follow()` are the way from a chapter to a document*** — [ruled essential](../../../inexplicable-phenomena/library/.public/.lib/projection/75-sprint-69--the-wart-hunt.md#r-scheme) even with no caller today: *"one is an essential part of an interface, and is what allows one to get from chapter to document."* **An exchange citing an artefact is a `$Reference`, and following it is what opens the rail.** *The viewer is a reference followed, not a click handler.*

## <a id="owed"></a>Ruling owed from Doug

1. **Does the per-kind theme get built for this**, or does the dialogue's dress live in a format until it does? *The September ruling says theme; nothing is built; this is the first kind that cannot wait for the page.*
2. **`$BookTheme` / `$DocumentTheme`** were [ruled on 2026-09-13](../../../inexplicable-phenomena/library/.public/.lib/the-motif/04-themes-per-type-formats-per-instance.md#two-tops) and not built. ***A dialogue theme targets neither a book nor a document — it targets a KIND***, which is a third top. **Is it a third, or is a kind's theme a different thing altogether?**
3. **Is the rail the encyclopedia's, or the application's?** *Today the encyclopedia theme owns the three tracks. If the viewer is an application control, it stands behind the application door and the encyclopedia only says how wide it is.*

## <a id="see-also"></a>See also

- **[The Model](01-the-model.md)** — *what a dialogue and an exchange ARE, and the one thing `.public` owes*
- **[What Claude Writes](03-what-claude-writes.md)** — *the inventory this theme has to dress*
- **[Themes per Type, Formats per Instance](../../../inexplicable-phenomena/library/.public/.lib/the-motif/04-themes-per-type-formats-per-instance.md)** — *the ruling, its built half and its unbuilt half*
