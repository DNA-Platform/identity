# The Field That Was No Property

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)
- **keywords:** library · phantom-field
- **sprint:** [Sprint 106](../projection/111-sprint-106--the-manual-spread-out.md#u1)

---

## Symptoms

**A press on a file's tab changed nothing: no error, the handler ran, the field was written, and the page stayed as it was.** The manual's open file had just been moved onto the manual itself as a reactive field, `$shown?: $Append;`, written by the tab's press and read by the listing's annotation. The typecheck was clean, the workbench drew the page, and the press was a no-op: the same listing stayed open whichever tab was pressed.

## What it turned out to be

**The field was declared and never existed.** Both bindings compile with `useDefineForClassFields` false ([the library's tsconfig](../../../../.me/..public/.binding/tsconfig.json), line 19, and the package's own), and under that setting a class field declared with a type and no initializer emits nothing: `$shown?: $Append;` is a declaration for the checker and not a property on the instance. Chemistry makes a chemical's reactive properties from the properties the instance has when it is bonded, so there was nothing to make reactive. The press wrote a plain property onto the object after the fact, which nothing watched, and the listing's `defines` had read `undefined` at the bind and was never asked again.

**The fix is one token:** a field a press will write is declared with a value, `$openFile: $Append | undefined = undefined` ([10-the-manual~code.tsx](../../../../.me/.manual/10-the-manual~code.tsx), line 10). With the initializer the property exists at the bond, the framework wraps it, and the press is a write the listings see.

## How it was found

By reading the field's declaration against the tsconfig after the press had been traced to the handler and the handler to the write: the write landed, so the only thing left to be wrong was the thing written to.

## Why no gate caught it sooner

**A `$`-field with no value reads as a valid declaration to every gate but the one that presses it.** The typecheck accepts it, the shape checker has no rule for it, and the bind draws a page whose first state is right. Only a press shows it, and the press is the last thing driven. The rule that follows, written for the library's code: **a reactive field is declared with its value, never with `?:` alone**, and `undefined` is written out where it is the value. The same mistake is one grep away: `\$\w+\?:` over a library's code files finds every candidate.
