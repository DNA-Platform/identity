# The Sheet That Was One File per Page

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** model · instance-definition · stale-artifact
- **sprint:** [Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#u8)

---

## Symptoms

**Bound with the sheet written as a file named by its content, the face held thirty-three sheet files for thirty-four pages, where six were expected — one per book.** Every page linked a file of its own; two pages of one book, drawn from one Theme with the same eight values, linked different files. Each file was the whole sheet, so nothing was missing from any page and every page drew the same; only the count was wrong, and the browser would have cached nothing across a book. Found 2026-10-01 at U8's first bind, by counting the folder the binder had just written.

## The mechanism

A styled component is keyed by its definition: styled-components gives each call of the template tag a generated class name, and every rule the component writes is written under that class. The Theme's bond made one — `selection(this.style)` with the eight values interpolated, so the custom properties would stand as declarations on the Theme's element — and a bond runs once per instance. Every Theme on every page was a new definition, so every page's collected CSS carried the same rules under a different generated class, and a file named by its content was named by that class. Doug's own rule, one styled component per class, was broken in the base: the sheet is declared once in a field, which chemistry holds on the class template, and the bond had wrapped it a second time per instance. Why one pair of pages shared a file was not diagnosed; the fix removed the cause before the pair was looked at.

## The fix

The Theme makes nothing in its bond. The eight stand on its element as inline custom property declarations, `declarations`, read by its provider and handed to the one styled component the class declares — on Doug's yes, *"Yes inline on the element"*, the one place a style attribute is his to allow, since a custom property is a value and not a look. Libby's two themes, which had extended the sheet in their define, extend it in a field, once per class. See [Theme](../../package/src/writing/Theme.tsx), where `declarations` is a reading of `values` through `vars` and the bond holds only the contract. Six files for six books; every page at 0 pixels.

## The lesson

**A thing the library keys by definition is made once per class, never in a bond.** A bond runs per instance, and whatever it defines is as many as there are instances; the tell is a count that scales with the pages rather than the classes. **The sheet named by its content is the instrument that found it:** before U8 the same sheet was inlined on every page, byte for byte different and nobody counting, and the defect was invisible because nothing compared one page's styles to another's.

## See also

- [The Pieces a Writing Remade Each Time It Drew](52-the-pieces-a-writing-remade-each-time-it-drew.md), the same count-that-scales tell in a draw rather than a bond.
- [Theme](../writing/13-theme.md), where the eight and the one styled component are specified.
- [Sprint 95, U8](../projection/100-sprint-95--pages-formats-and-words.md#u8), and his three words on the Theme kept whole in its record.
