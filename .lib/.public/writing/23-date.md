# Date

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- ***Written 2026-10-01 with U13 of [Sprint 95](../projection/100-sprint-95--pages-formats-and-words.md#u13), to [How a Class Is Documented](../the-coding-style/08-how-a-class-is-documented.md); the code is [`Date.tsx`](../../package/src/writing/Date.tsx), the promises [`.tests/date.test.tsx`](../../package/.tests/date.test.tsx). The class name is Doug's; the mark follows the pattern he chose.***

---

## What it is

***"We will likely want a Date as a type of word, so add that too."*** — Doug, 2026-09-30. **A Date is a Word whose said words stand for a day the machine can read: written in the compiler's form, `[the last day of September](2026-09-30)`, it draws the said words in a `time` element carrying the machine date, and written as plain words it draws them in a `time` carrying none.** It reads the form through the one-line parse every such class reads it through, the [binder](../utilities/05-binder.md) utility — Doug: *"It should be a one liner and then the class assigns them as needed"* — and the compiler leaves a single-bracket form alone, so an author writes it by hand.

| member | what it is | cited |
|---|---|---|
| `name` | the said words: the form's name, or the words themselves when there is no form | Means's `name`, the same reading |
| `date` | the machine date, the form's identifier, or nothing | the form's second half |
| `_time` · the bond | the element it draws as, a `time` carrying `dateTime`, made once in the bond as a Reference makes its anchor, and put in place of the word's own span through the seam a class has for its element, `containers.replace` | [D11](../projection/100-sprint-95--pages-formats-and-words.md#d11): *"the element its own by the seam a class already has for its element and the attribute by a component made once in its bond"* |
| `write()` | the said words | `pd-date` on the word |
| `DateSpecification` | **a date names a day the machine can read**: the machine date, when there is one, parses as a date | D3 of the sprint: *"the specification says what a Date demands"* |

### In use

```tsx
I began it on <Date>[the last day of September](2026-09-30)</Date> with one shelf
```

*Libby's [Who I Am](../../package/.binding/.test/libby/1-who-i-am.tsx): the words read as prose, and the element beneath them carries `datetime="2026-09-30"` for a machine.*

**A name to know.** The component is `Date`, Doug's word, and it shadows the language's `Date` in any module that imports it, as `Math` does; the class itself reaches the language's through `globalThis`, and a module that needs both imports the component under another name.

## How it is extended

- **A kind of date** is a class under Date saying more in its own specification, a date within a range, a date with a time of day, and adding its mark beside `pd-date`.
- **A look of your own** is a library's theme's rule for `pd-date`; the default keeps a date on one line.

## Promises

Four in [`.tests/date.test.tsx`](../../package/.tests/date.test.tsx): a Date reads the form, its name the said words and its date the machine date, drawn in a `time` carrying it and showing no syntax; without the form it draws its words in a `time` carrying no date; it stands in a sentence as a word does, its own element the `time`; and it demands a day the machine can read, saying so when the form names none. In the compiler's [regression](../../package/.binding/.test/binding.regression.ts): the day Libby began, a `time` carrying the machine date and saying the words.

## Gate

Measured 2026-10-01: the package's typecheck 0 errors and 340 of 340; the compiler's typecheck 0, unit suite 132 of 132 and regression 45 of 45; Who I Am photographed with the date in its sentence, every other page at 0 pixels.

**Names.** Doug's: `Date`. The pattern's, on his word, flagged: `pd-date`; ours, flagged: `DateSpecification` and its rule, `name`, `date`, `_time`.
