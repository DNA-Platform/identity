# The Shape of TSX

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***This exists because the branch had rules for the layout of a class and none for the layout of TSX***, and the code is mostly TSX. **Doug, 2026-09-04:** *"They should be written for readability. Use indenting. This is not like code to me… You can see the structure of a class. How much do my coding conventions care about the layout of members and naming of members? A lot. We care about the layout of TSX a lot. That is why the code is so small. So the TSX takes up most of the feel of the codebase."*

***The analogy that was wrong, said plainly so it is not made again:*** **elements in TSX are what members are in a class.** *[The Order of a Class](08-the-order-of-a-class.md) governs one and this governs the other, and they are the same concern — the reader sees the structure or they do not.*

## <a id="the-shape"></a>The shape

**A returned element opens on its own line and its children are indented.** *One element per line where the element has children; the closing tag lines up with the opening one.*

```tsx
return (
    <TableStyle>
        <tbody>
            {rows.map((row, at) => (
                <tr key={at}>
                    {row.map(cell => (
                        <td key={cell.at}>
                            <Cell />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </TableStyle>
);
```

***What this replaces, and it was in the codebase:*** **a single line carrying five elements, two closures and a nested map** — *structure invisible, and nothing about it readable as the table it draws.*

**A childless element may stay on one line.** `return <div />;` and `return <Anchor href={url}>{this.written}</Anchor>;` are complete thoughts and do not earn four lines.

**Lines wrap at 125.**

## <a id="naming"></a>Naming a component you fetched

***A component local carries the COMPONENT'S NAME.*** **Doug, striking three of mine:** *"You understand that `Held` and `Asked` are the worst possible name for a component right? You throw away semantics. It's like naming a variable `Stored`, and a property `Represents`."* **And on `Piece` for a table cell:** *"USE COMPONENT NAMES! A piece of a table? Really?"*

**So it reads:**

```tsx
const TypeOfTable = $(typeOfTable);
```

***The source binding is lowercase and the local is the canonical name.*** **Where the canonical name is already taken in that file, pick a meaningful one rather than a mechanical lowercase** — Doug's own: `import { Table as tableStyle }`, and `const TableStyle = $(tableStyle);`, which is what killed the last `Wikitable` in the package.

**Two things learned the expensive way, both by breaking the suite:**

- ***Alias the IMPORT, never a module-level `const`.*** An import binding is **live**; `const catalogue = Catalogue;` is evaluated at load, and under a **circular import** it captures `undefined`. `Composition` and `Catalogue` import each other, and that alone reddened four promises.
- ***The alias must not collide with an ordinary local.*** Lowercase names are exactly the names locals use — `const Path = $(path)` met a local string named `path`, and `Index as index` met a local named `index`. **This is what a meaningful alias is for.**

## <a id="variables"></a>Naming an ordinary variable

***The default name for a variable is the lowercase of its class.*** **Doug, 2026-09-04, on finding `one` a thousand times:** *"Default name for a variable is lowercase class of component name. No `one`."*

```tsx
const writing = this.parts()[0];
sections.filter((section): section is $Section => section instanceof $Section)
```

***A single letter is allowed in a ONE-LINE lambda and nowhere else:***

```tsx
rows.filter(r => r.width === asked)
```

**And it does not escape that line** — *"don't use those variables outside of one line lambda."* **A name that survives past its lambda has to say what it is.**

## <a id="the-dollar"></a>Using `$` right

> ***"It will never be a variable. If someone hands it to you, it's their job to `$`. If you use it, it's yours."*** — Doug, 2026-09-04

**`$` is the INJECTION POINT, and it belongs where a class names a component literally.** *That is the only place a scope can stand something else in.*

| | |
|---|---|
| ***a component this class NAMES*** | **`$` it** — `const Heading = $(heading);`. You wrote the name, so the substitution is yours to allow |
| ***something handed in*** | **do not `$` it.** Whoever passed it already resolved it; fetching again asks a question that was answered upstream |
| ***a component held in a member*** | **do not `$` it** — it is stored, not named here |

***THE RULE, in Doug's words:*** *"If you import the component and you create the instance or use it in the markup — not something given, something used — then you pass it through. There are a finite number of LITERAL uses of components. If they ALL go through `$` then there is a DI surface in the codebase."*

**So: every literal use of an imported component goes through `$`.** *The set is finite and countable, and it is complete or the codebase has no DI surface.* **A use that skips `$` is unreachable by any scope** — and it is what makes an aliased import look like it "breaks" a file, when what it did was expose a use that was never injectable.

### <a id="never-a-variable"></a>`$` on a VARIABLE is not injection — and it cost a day

***The symptom, which stood for a day and was diagnosed wrongly:***

```
error TS2769: No overload matches this call.
  Argument of type 'ComponentType | Component<$Reference>' is not assignable to parameter of type 'string'.
```

**Two sites, `Catalogue.tsx` and `References.tsx`, both this line:**

```tsx
const Printed = $((code ? prints.get(code) : undefined) ?? reference);
```

***It was reported as a gap in `$`'s overload set — a union of two component types that no overload accepts — and a stale build was blamed for hiding it.*** **Both claims were wrong.** *Doug read the line and asked the only question that mattered: **"are those even components? Is this doing what you think? NO variables."***

**`prints.get(code)` is a runtime lookup.** *Whatever it answers came from a registry — somebody else's resolution, already made.* **Asking `$` about it asks a question that was answered upstream**, and the union that broke the compiler was the shape of that mistake, not a limitation.

**The fix is the rule applied:**

```tsx
const Reference = $(reference);
const Printed = (code ? prints.get(code) : undefined) ?? Reference;
```

***`$` sits on the literal — the one thing this file names — and the registry falls back to it.*** **The union never forms, and it was the last `tsc` error in the package.**

***The general form, and the reason it is worth a section:*** **`$` marks a LITERAL, and a literal is a thing you can point at in the source.** *A variable is already the answer to somebody's question; passing it through `$` is not injecting, it is re-asking — and where the compiler happens to object, the objection reads like a gap in the framework rather than a misuse of it.*

## <a id="the-tests"></a>The tests do not obey this, and the tests are wrong

***Everything above governs `src`.*** **The suite does not follow it** — 135 locals named `one`, and dense JSX packing several elements onto a line — and that is recorded here as **debt rather than exemption**. *Doug, 2026-09-04: "I don't care about the tests. I care about the code. But the coding conventions need to list this and say the tests are wrong."*

**Two attempts to fix it mechanically were reverted**, the second after block scoping bled across `it(…)` blocks and reddened 36 promises. ***It wants doing by hand, a file at a time, and nothing depends on it.***

## <a id="see-also"></a>See also

- [The Type and the Instance § the fetch](10-the-type-and-the-instance.md#the-fetch) — the `$`-fetch corollary and the timing law
- [The Order of a Class](08-the-order-of-a-class.md) — the same concern, for members
- [Styled Particles](../../../chemistry/.lib/particle/11-styled-particles.md) — where a class's CSS becomes members
