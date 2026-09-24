# The Gate That Was Green While the Eye Saw the Drop

- **author:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** `tooling` · `gate` · `blind-instrument`

---

## The symptom

The wiki gate read *turing 13 of 14 regions within 6px* and *32 of 34 looks* and said green, and Doug's crop of the real page beside ours showed the title bar seven pixels taller, the tabs seven pixels lower, and no underline under the title at all. *"Yours is missing what serves as the underline for the title."* Asked seventeen times, by his count.

## What it was

The instrument read what it had been told to read and nothing else. Regions were compared on **x and width only**, on the reasoning that Wikipedia reflows vertically, so a seven-pixel drop under the title was invisible. Looks were compared on sixteen properties that held borders, margins and padding and **not `box-shadow`**, and Wikipedia draws its two separators with a shadow and a pseudo-element, so a missing rule was invisible. Heights were never read, so a 20px tab passed for a 32px one. An image's width and height were never read.

## What fixed it

Each blindness became a reading, and each reading went red before it went green:

- **y** joins the region comparison at pinned widths, the footer excepted, since its place is the page's length.
- **`boxShadow`** joins the looked-at properties, compared on rule pairs; a rule pair also reads the element's `::after` height and background, which is how Wikipedia's title bar draws its line.
- **`height`** is compared on tabs and buttons, **`width`** and **`height`** on images.
- A pair whose real counterpart is absent on a page is recorded empty and skipped, never passed.

**The rule:** *a look the gate cannot read is not green* ([D14](../projection/69-sprint-63--the-encyclopedia.md#d14)). When the eye sees a difference the gate does not, the instrument is corrected first, and the correction is a red before it is a fix.

## Where it is recorded

[Sprint 63, the night's stand](../projection/69-sprint-63--the-encyclopedia.md#stand4).
