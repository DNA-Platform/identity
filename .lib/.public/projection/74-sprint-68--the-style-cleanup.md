# Sprint 68 — The Style Cleanup

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **style:** [The Coding Style](../the-coding-style/03-the-coding-style.md)
- **status:** `built` — *built and halted 2026-09-13 at Doug's word; planned the same day by aggregating the logged styling items at Doug's word: "ce-plan by aggregating the many little styling issues that have been logged… Let's get encyclopedia done this turn." The brief-only chapter that stood here is folded into [the brief](#brief) below.*
- ***The chapter name is a proxy; Doug's to rename.***

---

## <a id="where"></a>Where things stand — ***2026-09-13, built and HALTED at Doug's word: "halt when complete with task"***

**Next action: Doug's.** He asked for the two jobs — the contents column's inner spacing and the manual — with the regression gate as the key, and to halt when done. **Both are built and measured; nothing is pushed.**

**Verification, in numbers, at the close.** The wiki gate against a recording of en.wikipedia.org taken today (`TODAY=2026-09-13`): **Turing — 20 of 20 regions within 6px at every pinned width from 1120 to 2560, no sideways scroll at any of the nineteen, 10 of 10 counts equal, every look green but one; the Manual of Style — the manual's box at Wikipedia's x and width at every desktop width, 11 of 11 groups, every look green but one.** `verify:latex` green on both readings (82,582 chars, 66 of 66, 43 of 43, 0 errors, 0 panels) · suite **101 of 101** · `tsc` **0** · `clean` **0 files cleaned**.

**The two reds left, named and not looped on:** the footer's `marginBottom` is 32px where Wikipedia's is 0 — the document rule's `:not()` roster reaches the footer, and adding it to the roster raises that rule above the site row's own margin ([Solutions 69](../solutions/69-the-class-that-every-kind-beneath-it-wears.md)'s missing concept, again); it is the last 32px of the page. And **82 manual links where Wikipedia draws 90** — the reader does not read the sidebar's nested sub-lists; content, not style. ***Pre-existing and outside the two jobs:*** the portal at 768 stands ~162px low under the wordmark against today's recording; it wears its own `$PortalTheme` over the base and writes none of the kinds this sprint touched.

**What was built, each a pair red then green:**
- ***The contents column*** — a nested row stands 12px in from the row that holds it, Wikipedia's own step, read off the real page by expanding one section at baseline and asserted when the gate opens ours: `opens_padding` 0.9em → 1.714em, because the top-level rows already stand 12px in and the nested ones had been given the same 12 and lined up with them. The rows' margin rule `entry_` now names `.pd-section` so it wins the tie with the paragraph rule it had been losing; rows pitch 28.
- ***The manual*** — read off en.wikipedia.org at 1280 and its box at seven desktop widths: ground `quiet`, border `rule`, title 1.45em bold ink centred in the body face, the field alone at 253×32 with the 16px bold Search button centred 8px beneath, each group a 1.05em bold band on the tint at line-height 1.6 with `[show]` at 1em hard right, groups 4.5px apart, the foot a bold line ruled above and below in `#aaaaaa` (`faint`, a proxy name) and `v · t · e` right-aligned at 1.15em. The title had been drawn as a serif section heading with a rule under it because the document heading rule reached it at equal specificity; the encyclopedia theme now says the box's numbers after it. `:last-of-type` was the wrong word for the foot lines — it is an element-type test and caught the heading and the form — `:last-child` is right.
- ***The frame*** — the text column ran **728 where Wikipedia sets 752** at 1280 because the fourth track, holding nothing, cost its gap; the rail's track is now `minmax(12.25em, 1fr)` and the rail held to `12.25rem`, so the text is 752 at 1280, 948 with the rail at x1458 at 1920, and the bar and footer still span the container at 1536.
- ***The panels' rows*** — never styled: a selector that continues past `::details-content` is dropped whole by the browser, so `held_`, `group_` and `topmost_` had never reached the page. They reach the rows through the `<details>` element now; rows 14px, 6px padding, 28 tall, no paragraph margin, and the toolbar's at 1em since the toolbar already sets its size.
- ***The rest of the eleven*** — body thumbs bordered on three sides with the caption closing the box and line-height 0; the appearance radios 18px rings in Codex's grey and blue with the panel's face; the footer's lines at 12px on a 16.8 line, its links on a 24px line, its heading hidden as the synopsis's is, no space above it; the site line, infobox rows, lead bold and italic measured green as they stood; below 1120 the bar's margins are 0 since the frame has no padding there to bleed through — it had scrolled the page 24px sideways at every width to 360.

**The gate, extended (its regression tests for this work):** 25 style pairs added — the manual's box, title, title link, field, search button, band, toggle (read from our summary's `::after`), link, below, navbar and navbar link; lead bold and italic; figure and figure caption; appearance option and radio; main menu, tools and languages rows; footer, footer line and footer link — plus `pinnedRegions` so one region can be held on a page whose widths are not pinned, the contents step recorded at baseline and asserted when ours opens, and the six body selectors corrected from `.pd-book > .pd-chapter > article` to `.pd-body > …`, which Sprint 67 had moved and the gate had not followed.

**Wrong turns this session, so they are not retaken:** `npm run build` — `rollup -c` — finishes writing `dist` and never exits, so a chain on it hangs; `build:quick` is the build. A shell one-liner rewriting a script with escaped `\r\n` broke it; a patch is a written file with an exactly-once check per edit. `:last-of-type` on a class. A `:not()` added to the document roster to spare the footer raised its specificity over the site row's tie. Eight parallel Turing tabs in the gate time out at 60s while another browser runs; one target at a time.

**How to see it:** `sh serve.sh` at the package root; `http://localhost:5311/turing`, `/article`; `node .wiki/.public/verify-wiki.mjs --only=turing` and `--only=article`.

**Read first, next time:** [the constraint](#constraint) · [Sprint 65 U6](71-sprint-65--the-encyclopedia-finished.md#u6) · [Solutions 74](../solutions/74-the-gate-that-was-green-while-the-eye-saw-the-drop.md), [77](../solutions/77-the-prefix-that-took-the-base-s-rule.md), [69](../solutions/69-the-class-that-every-kind-beneath-it-wears.md) · [`verify-wiki.mjs`](../../package/.wiki/.public/verify-wiki.mjs).

## <a id="constraint"></a>The constraint, in Doug's words — ***read before any line***

> **"You will be finishing up the work for encyclopedia. This will polish what is there. You are not at liberty to change structural things. You are not at liberty to move things around for polish. You are to use the themes and formats correctly with no purview to redesign this framework."**

*So: no new kind, no new member, no file moved or renamed, no reader shape changed, no change under `src/writing` or `src/library` that is not a theme value. Every fix is a value or a rule group in [`$EncyclopediaTheme`](../../package/src/encyclopedia/Theme.tsx) or in the format the kind already wears — [`$ManualFormat`](../../package/src/encyclopedia/Manual.tsx), [`$InfoboxFormat`](../../package/src/encyclopedia/Infobox.tsx), [`$MenuFormat`](../../package/src/application/Menu.tsx), [`$Appearance`](../../package/src/application/Appearance.tsx) — or a pair in the gate. A fix that needs anything else is [flagged](#flagged), never built.*

## <a id="brief"></a>The brief, in Doug's words

> **"This was the last big item and the next sprint would be pulling markup, making high fidelity implementation of the style for the table, the manual, and a general regression check on anything. Implementing $Bold, $Italics, $Underline very very simply and useing them where needed in style, implemented as simply as $List is implemented - I just polished it for reference."** · **"When we get to style cleanup I expect this to be seriously cleaned up. Ours looks nothing like this which is the real one and the only way to fix that is to pull markup for many breakpoints and fix it."** · *today:* **"The side table of contents spacing, the cleanup of the manual, and the general polish using the regression tests as key because we do track style on the turing page."**

***"The table" is read as the table of contents*** — today's sentence pairs it with the manual the same way — *and not as `$Table`, which the reader never writes (it skips `table` nodes). If Doug meant wikitables, that is a reader change and a kind's format, and a later sprint.*

## <a id="requirements"></a>Requirements — aggregated from the record, each cited to where it was logged

| | what it demands | logged at |
|---|---|---|
| <a id="r1"></a>**R1** | ***The contents column's spacing is Wikipedia's:*** a nested row stands IN from the row that holds it, as Vector's level-2 rows do; the (Top) row, the heading, the row pitch and the chevron hold their measured places; *the crop's second observation — a row standing while its holder is shut — is checked against the real page's own contents before anything is changed.* | [Sprint 65 U6](71-sprint-65--the-encyclopedia-finished.md#u6) · [Sprint 63 U23](69-sprint-63--the-encyclopedia.md#u23) |
| <a id="r2"></a>**R2** | ***The manual looks like the real Manual of Style box:*** title centred and link-blue; the field alone across the box with Search beneath it, centred; each group a pale band, name centred, `[show]` hard right in link blue, bands parted by white; the foot two centred lines with `V · T · E` alone on the second. **Read off en.wikipedia.org at the gate's widths, never from the crop.** | [Sprint 65 U6](71-sprint-65--the-encyclopedia-finished.md#u6) · [Sprint 63 U27](69-sprint-63--the-encyclopedia.md#u27b) |
| <a id="r3"></a>**R3** | ***The eleven, each a pair:*** below 1120 · infobox rows · body thumbs · the three panels' rows · the lead's bold and italics · the appearance radios · the footer · the site line as a block. *(The hide buttons are [flagged](#flagged); the nested rows are R1.)* | [Sprint 65 U6](71-sprint-65--the-encyclopedia-finished.md#u6) |
| <a id="r4"></a>**R4** | ***The regression check:*** the wiki gate back at its nineteen widths, green on the portal, Turing and the Manual of Style; the paper's gate green on both readings; suite, `tsc`, `clean`. | [the brief](#brief) · [Sprint 65 U6](71-sprint-65--the-encyclopedia-finished.md#u6) |
| <a id="r5"></a>**R5** | ***`$Bold`, `$Italics`, `$Underline` are used where the page uses them*** — the reader already writes them for `b`, `strong`, `i`, `em`, `u` — and the theme reaches no `font-weight` or `font-style` for PROSE that a kind should have carried. *Their spelling is already `$List`'s; the file question is [flagged](#flagged).* | [the brief](#brief) |
| <a id="r6"></a>**R6** | ***Nothing structural changes.*** | [the constraint](#constraint) |

## <a id="decisions"></a>Decisions

### <a id="d1"></a>D1 · ***Every fix is a value or a rule in the theme or the kind's own format, by Sprint 63's placement rule***
[D6](69-sprint-63--the-encyclopedia.md#d6): a look with no new meaning is the format's; where the theme already carries a kind's look because a theme rule outranks a worn format's ([pitch 3](69-sprint-63--the-encyclopedia.md#pitches)), the fix stays in the theme's group and reads its values through getters. *Chosen over* moving groups between theme and format, which is the restructure [The Motif 4](../the-motif/04-themes-per-type-formats-per-instance.md) owes and Doug has not opened.

### <a id="d2"></a>D2 · ***The gate is the verdict, and a pair is red before it is green***
[D14](69-sprint-63--the-encyclopedia.md#d14). Every item the gate can read becomes a pair in `verify-wiki.mjs`; the recording is re-taken ONCE at the start because pairs are added, and not again. An item the gate cannot read is measured by hand at 1280 against the real page and the numbers are written here. *Chosen over* fixing from the crops, which Doug ruled out.

### <a id="d3"></a>D3 · ***A fix that needs a kind, a member, a control, a moved file or a reader shape is flagged and not built***
The constraint. The [flagged list](#flagged) carries each with what it would take.

### <a id="d4"></a>D4 · ***Selector hygiene is mechanical***
Grep the base for a prefix before declaring one ([Solutions 77](../solutions/77-the-prefix-that-took-the-base-s-rule.md)); never restate a prefix on a member the base did not decorate; `@select` names classes; a media level is placed by its bounds. *The gate's looks are the fingerprint.*

## <a id="units"></a>Units

### <a id="u1"></a>U1 · ***The gate back on, extended, and the red recorded*** — R4, R1, R2, R3, D2
**Mechanism:** `verify-wiki.mjs` gains pairs for what this sprint fixes — the contents' nested row (a region pair for its x and a style pair for its indent), the manual's title, band, toggle, link, field, button and foot, the lead's bold, the panels' rows, the appearance radio, the footer's text — and a per-target `pinnedRegions` so the manual's box is held to Wikipedia's at every desktop width on the article page while the rest of that page stays drawn-only, as Doug ruled. `--baseline` once; then the check, and its red list is this sprint's worklist.
**Files:** `.wiki/.public/verify-wiki.mjs` · `.wiki/.public/.portal/portal.json`.
**Visible end:** ***the gate runs at nineteen widths on three targets and names every failure; the failure list is written under [the stand](#where).***

### <a id="u2"></a>U2 · ***The contents column*** — R1, D1
**Mechanism:** the theme's contents groups — `opens_`, `opener_`, `flat_`, `rowLink_`, `arrow_`, `first_` — set to the real column's numbers read at 1280 and held at every pinned width; the nested row's indent is the `::details-content` padding and the option's own.
**Files:** `src/encyclopedia/Theme.tsx`.
**Visible end:** ***Family, School, Christopher Morcom stand in from Early life and education by Wikipedia's step; the pair green.***

### <a id="u3"></a>U3 · ***The manual*** — R2, D1
**Mechanism:** `$ManualFormat`'s groups rewritten to the recording — the field and button stacked, the bands, the toggle, the foot — and the theme's `band_` value; the reader untouched.
**Files:** `src/encyclopedia/Manual.tsx` · `src/encyclopedia/Theme.tsx`.
**Visible end:** ***the manual's pairs green on `/article` at 1280 and its box at Wikipedia's x and width at every desktop width.***

### <a id="u4"></a>U4 · ***The rest of the eleven, one pair each*** — R3, D1
**Mechanism:** infobox rows, body thumbs, the panels' rows, the appearance radios (`appearance: none` and Codex's rings on the panel's own input), the footer, the site line — each a pair from U1 made green in the theme or the format that already owns it; below 1120 held to no sideways scroll and every region drawn.
**Files:** `src/encyclopedia/Theme.tsx` · `src/application/Appearance.tsx` · `src/encyclopedia/Infobox.tsx`.
**Visible end:** ***Turing's looks green at every pair; the eleven ticked here with numbers.***

### <a id="u5"></a>U5 · ***The emphasis kinds where needed*** — R5
**Mechanism:** a pair on the lead's bold name and one on an italic run proves the kinds draw as Wikipedia's `b` and `i`; the theme grepped for `fontWeight`/`fontStyle` on prose selectors and any found replaced by the kind the reader already writes.
**Files:** `.wiki/.public/verify-wiki.mjs` · `src/encyclopedia/Theme.tsx`.
**Visible end:** ***the lead's "Alan Mathison Turing" bold by `.pd-bold`, measured; no prose weight in the theme.***

### <a id="u6"></a>U6 · ***The regression check and the close*** — R4
**Mechanism:** rollup, the served mirror rebound, the servers restarted ([Solutions 72](../solutions/72-the-mirror-with-two-directions.md)), then `verify:wiki` whole, `verify:latex`, the suite, `tsc`, `clean`; one local commit per green unit; nothing pushed.
**Visible end:** ***every gate green with its numbers in the stand.***

## <a id="scenarios"></a>Test scenarios
Every scenario IS a gate pair: input the served page at a pinned width, action the gate's read, expected the recording's number within slack. The failure paths are the red run of U1. No promise is added to the suite — a look is read where it runs.

## <a id="risks"></a>Risks
- **The recording drifts** — Wikipedia changes between baseline and check. *Mitigated: one baseline at the start, dated by `TODAY`.*
- **A theme edit moves a group** ([Solutions 77](../solutions/77-the-prefix-that-took-the-base-s-rule.md)) or widens a class ([69](../solutions/69-the-class-that-every-kind-beneath-it-wears.md)). *Mitigated: D4, and the looks catch it.*
- **A menu's rows cannot be read shut** — computed styles inside a shut `<details>` answer, but heights do not. *Mitigated: the pair reads font, colour and padding only.*
- **The manual's sample thumbnail** is content the reader does not read. *Out of scope unless it is one reader line; noted under flagged.*

## <a id="flagged"></a>Flagged — needs Doug, not built here
- **The hide buttons** on the contents and the appearance panel — a control, so a kind: structural.
- **A contents row's word navigating while its arrow toggles** ([Sprint 65 U3](71-sprint-65--the-encyclopedia-finished.md#u3)) — the summary is the toggle; separating them changes `$Menu`/`$Summary`: structural.
- **`Emphasis.tsx` holds three words and carries the struck name** — a file move: structural. The kinds themselves are already `$List`-simple.
- **The manual's sample-layout thumbnail** — reader content; one line if cheap, else next sprint.
- **The infobox's kind** and **the portal's `.book.tsx` order** — carried from Sprint 67.

## <a id="order"></a>Order
**U1 · U2 · U3 · U4 · U5 · U6**, the gate run after each and the stand rewritten as each lands.

## <a id="names"></a>Names owed to Doug
`pinnedRegions` and every new pair name in the gate; carried from 63–65: `$Manual`, `$Option`, `--only`, `--at`, and the theme prefixes.
