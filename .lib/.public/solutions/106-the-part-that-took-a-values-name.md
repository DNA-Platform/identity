# The Part That Took a Value's Name

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **coauthor:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **keywords:** library · shadowed-member
- **sprint:** [Sprint 102](../projection/107-sprint-102--designing-together.md#where-things-stand)

---

## Symptoms

**`[vite] TypeError: this.bar is not a function`, on the first draw of the catalogue after its theme gained a part named `bar()`** — the page served a 500 for the book's module and drew nothing. `npx tsc --noEmit` in the library's binder copy had named it a minute earlier, under the fifty-six import-extension lines a reader learns to skip:

```
20-the-bookshelf~theme.tsx(205,15): error TS2416: Property 'bar' in type '$Bookshelf' is not assignable to the same property in base type '$LibraryBookTheme'.
20-the-bookshelf~theme.tsx(205,15): error TS2425: Class '$LibraryBookTheme' defines instance member property 'bar', but extended class '$Bookshelf' defines it as instance member function.
```

**The quieter form, met through Sprint 101:** parts named `side`, `book`, `chapter`, `text`, `theme`, `style`, chemistry's own `frame`, and `cards` — each shadowed a value, a member or a part the base already had, and the page broke somewhere else without a word: a region unstyled, a width read as a function's text, a theme's field answering a rule set.

## What it turned out to be

**A theme is one class, and its values and its parts are members of the same object.** The base declares `bar = '#0c1b1f'`, the colour the dark tone paints the top bar, and its `tones()` part reads `${({ theme }) => theme.bar}`; the subclass declared `protected bar(): RuleSet` and listed `this.bar()` in `parts()`. One name, two kinds: where the base reads a value it now reads a method, and where the subclass calls a method the base's string is what stands when the specimen is made. Which fails first depends on the order the class's fields initialise, which is why Sprint 101's cases broke *elsewhere* and silently and this one threw at the first draw.

## How it was found

By the look: the live page refused the book's module with the vite error, and the typecheck named the line. The bind does not typecheck; the live page compiles with esbuild, which strips types and asks nothing.

## Why no gate caught it

No gate typechecks the library — `tsc` in the binder's copy is a command a person runs, and its output opens with fifty-six lines of a known import-extension complaint and five known theme lines, which is where a reader stops reading. The bind's `specify` phase checks the library's rules, not its types.

## The repair, and the rule it leaves

The part was named for what it dresses — `lockups()`, the marks and names in the bar — and nothing else changed. **The rule, which [What Building Found](../writing-a-book/00-04-what-building-found.md#the-theme-and-the-shadowing-of-parts) already carried from Sprint 101 and this sprint broke anyway:** a part of a theme or a Format must not take the name of a value, of a member the class has, or of a part the base already has unless it says `override`. Read the base theme's fields before naming a part, and run `tsc` in the binder's copy before the first look at a new theme, reading past the lines that are always there.
