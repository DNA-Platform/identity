# The Page That Only Printed the Notation

- **author:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** tooling · library
- **sprint:** [Sprint 98](../projection/103-sprint-98--dougs-design.md)

---

## Symptoms

**A library that had bound a minute before stopped binding when one more file was put beside a chapter, and the file was not a chapter.** The bind printed `catalogue  FAILED` and three faults, each naming an `.html` page and a line inside it:

```
.me\.design\2-a-reference-manual~03-the-workbench.html(1,1): error MALFORMED-ANNOTATION: .design — line 188:
"01-the-shelf-desk.png" is not written in a form the notation has — a file beside a chapter inserts nothing — a literal stands in a chapter
the library does not hold together — 3 faults in .design
```

*The page was a design sketch, inserted whole into its chapter by a literal. Line 188 of it was a `<pre>` showing a reader what a chapter writes — three literals, as an example.*

## What it turned out to be

**Nothing was broken. The binder reads the notation in every file that stands beside a chapter, and refuses a literal it finds there — by design.** The rule is written where it runs, [`catalogue/structure.ts`](../../package/.binding/catalogue/structure.ts), in the pass that keeps the literals: *"A LITERAL INSERTS A FILE OF THE CHAPTER IT STANDS IN, and a resource — a file beside a chapter — inserts nothing, since it is a module and not a chapter; one that tries is refused with the reason."* A resource's literals are pushed to the refusals with exactly the sentence the bind printed. **The binder cannot tell a page that uses the notation from a page that only shows it**, and it should not try: a file beside a chapter is read as written.

## How it was found

By the fault itself, which names the file, the line and the reason — [attributable refusal](../the-semantics-of-books/18-the-soundness-of-a-knowledge-graph.md#obligations) doing its work. What cost the minute was the first reading of it as a broken bind.

## Why no gate caught it

The page had been drawn, photographed at two widths and looked at, alone. **None of that binds.** A sketch is checked as a page and fails as a resource.

## The repair, and the rule it leaves

The example in the page was rewritten with the brackets as character references — `!&#91;&#91; 01-the-shelf-desk.png &#93;&#93;` — which a browser draws as the notation and the binder does not read as it. **The rule: text that stands beside a chapter and is not meant as the notation must not contain it.**

***And the rule reaches further than a sketch, which is why it is written down.*** *Not yet tried, and so a guess:* **an importer that sets a conversation's text beside a chapter will meet this on the first conversation that quotes a double bracket** — a wiki link, an embed, a line of this library's own notation discussed in the conversation. *Whether the importer escapes what it imports or the binder is given a way to be told "this file is carried, not read" is a design question for whoever builds the importer, and it is Doug's to rule if it touches the binder's reading.*
