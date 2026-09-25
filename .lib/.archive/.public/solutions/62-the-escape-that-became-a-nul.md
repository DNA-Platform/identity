# The escape that became a NUL

- **author:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- **keywords:** `framework` · `crossed-escape` *(proxy name, flagged for Doug)* · a stylesheet printed into the page · two invisible bytes in the source

---

## Symptoms

- ***A table of contents drew the rest of the stylesheet as its own text*** — every entry reading `counters(listed, .) �a0;}.cgqgzI{display:flex;gap:.35rem;}...` followed by the section's name.
- **`grep` then reported the source file as `Binary file src/article/Theme.tsx matches`**, and a replace against the string that was plainly in it matched **zero** times.

## The mechanism — ***one escape, read twice, by two languages***

CSS spells a non-breaking space `\00a0`. Written into a TypeScript string that is *also* a CSS value, the **JavaScript** escape rules run first, and `\0` is JS's **NUL**:

```ts
listedNumber_content = "counters(listed, '.') '\00a0\00a0'";   // two NUL bytes
listedNumber_content = "counters(listed, '.') '\00a0\00a0'"; // what CSS receives: \00a0
```

The first form put **two literal NUL bytes** in the file. The emitted declaration then terminated early, and everything after it in the sheet was swallowed as `content`, which is why a *stylesheet* appeared as the text of a table of contents.

**The rules next to it were correct**, written `'\00a0'`, which is the tell: one line differed from its neighbours by a single backslash and nothing typechecked, linted or built any differently.

## The fix

The value carried no meaning that a plain space did not, so it became one; where the escape is genuinely wanted it is written `'\00a0'`, as the sibling rules already had it.

## What this costs to know

**A string that crosses a language boundary is escaped twice, and the inner language never gets to complain.** CSS-in-JS, SQL in a string, a regex in a config file and a shell command in a script are all the same shape: the outer language consumes the escape and hands the inner one whatever survived. `\0` is the sharpest case because it produces a byte no editor shows.

***The greppable tell is a `Binary file … matches`.*** A source file is text; when `grep` calls one binary, something has written a control character into it, and the place to look is the nearest string that contains a backslash.

## <a id="second"></a>THE SECOND INSTANCE, 2026-09-09 — ***a bracket, and no escape involved at all***

- ***A paper's citations drew as bare numbers, with no brackets*** — **`getComputedStyle(cite, '::before').content` answering `none`**, for a rule plainly present in the source and typechecking cleanly.

```ts
@select('.pd-citation::before') opened_content = "'['";        // discarded in silence
@select('.pd-citation::before') opened_content = "'\005B'";    // driven: ::before "["
```

***A literal `[` inside a CSS `content` string is read by the tokeniser as the start of an ATTRIBUTE SELECTOR***, the declaration never balances, and the whole rule is dropped. **Nothing warns**: not TypeScript, which sees a fine string; not the build, which sees a fine object; not the browser, which simply has no rule to report.

**So the boundary bites twice and only one of the two is about escaping.** *The first is a character the OUTER language eats. The second is a character the INNER language cannot read where it stands — and the fix is the same shape, an escape that says the character without being it.* ***The general form: a CSS value written in TypeScript is parsed twice, and either parser may discard it without a word.***

**The greppable tell for this one is a quoted `[`, `]`, `{` or `}` inside a `content`.**

## Related

- [The TeX that JavaScript ate](58-the-tex-that-javascript-ate.md) — the same boundary, the other direction: `'\ne'` was a newline and `'\varphi'` a vertical tab, fixed with `String.raw`.
