# The Shape of TSX

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md)
- ***The chapter name is a PROXY; Doug's to rename.***

---

***This exists because the branch had rules for the layout of a class and none for the layout of TSX***, and the code is mostly TSX. **Doug, 2026-09-04:** *"They should be written for readability. Use indenting. This is not like code to me… You can see the structure of a class. How much do my coding conventions care about the layout of members and naming of members? A lot. We care about the layout of TSX a lot. That is why the code is so small. So the TSX takes up most of the feel of the codebase."*

***The analogy that was wrong, said plainly so it is not made again:*** **elements in TSX are what members are in a class.** *[The Order of a Class](02-the-order-of-a-class.md) governs one and this governs the other, and they are the same concern — the reader sees the structure or they do not.*

## <a id="markup-is-expanded"></a>MARKUP IS WRITTEN FULLY EXPANDED — ***given 2026-10-04, and it governs everything below***

> ***"We don't write compact TSX like we write the inside of the lines of functions. We fully expand out markup… So much of $Chemistry and .public exists to reduce TypeScript to the TSX as much as possible. Please format your code like markup. You are drawing a bad inference that I would want TSX formatted like this. Please correct this misconception."*** — **Doug, 2026-10-04**

***The misconception, said plainly so it is not made again:*** **the compactness this branch prizes in code — the one-line property, the terse method, [the closeness rule](04-the-closeness-rule.md) — is a rule for the LINES OF FUNCTIONS and never for markup.** *TSX is not a dense expression that happens to have angle brackets. It is the markup the whole framework exists to reduce a program to, and it is laid out the way markup is: opened out, one thing to a line, its structure visible in its indentation.* **This holds wherever TSX is written — a view in `src`, a chapter of a library, a table of contents, a file a tool generates.** *A generator is held to it exactly as a hand is.*

**The rules, each one checkable by looking:**

- **One element to a line.** An element that holds another element opens on its own line, its children are stacked beneath it one level in, and its closing tag stands on its own line under the opening one.
- **An element stays on one line only when it holds nothing but its own short text, or nothing at all** — `<Heading>Contents</Heading>`, `<Content>$[[ ./The Book ]]</Content>`, `<Parenthetical />`. *The moment it holds another element, it opens out.*
- **More than one attribute is stacked**, one to a line, one level in, and the `>` that ends the opening tag stands on its own line under the tag's `<`.
- **A string is written as a string** — `title="The Shelf"`, never `title={"The Shelf"}`.
- **A literal or a line of text that is a child stands on its own line**, one to a line.
- **An inline element in a running sentence stays in the sentence** — a `<Means>` among a paragraph's words is prose, and prose wraps as prose.
- **No blank lines between elements**; the elements are the separation ([below](#the-story)).
- **What a tag cannot say shortly does not belong in the tag.** *A sentence of prose passed as an attribute is the sign: it is a child, or it is read from where it already stands.*

***What was struck, as it stood in a chapter a tool of ours generated:***

```tsx
<Paragraph>
    <Concepts />
    <Concept named={"The Shelf"} draws={"Apple Books"} says={"Every conversation gets a cover. The library opens on …"}>![[ 01-the-shelf-desk.png ]] ![[ 01-the-shelf-phone.png ]] ![[ 01-the-shelf.html ]]</Concept>
</Paragraph>
```

***And what stands now:***

```tsx
<Paragraph>
    <Concepts />
    <Concept>
        ![[ 01-the-shelf-desk.png ]]
        ![[ 01-the-shelf-phone.png ]]
        ![[ 01-the-shelf.html ]]
    </Concept>
</Paragraph>
```

*The three attributes were not stacked, they were removed: the name, what it draws on and what it says already stand in the head of the page the third literal inserts, and the figure reads them there. Expanding markup often shows what it was saying twice.*

**The same for a line of a table of contents, which the first libraries wrote on one line:**

```tsx
<Paragraph>
    <Entry />
    <Content>$[[ ./The Library's Home ]]</Content>
</Paragraph>
```

### <a id="the-checker"></a>The checker beside this chapter, and the rewriter that was struck — ***Sprint 104***

> ***"We don't use compressed formatting for TSX just as we don't for classes… Elevate these rules and, in this sprint, figure out how to broadly apply them. We need readable TSX."*** — **Doug, 2026-10-09**

**[The checker](06-the-shape-of-tsx--check.ts) reads the rules above off every `.tsx` file under the roots it is given, on the TypeScript parser, so a rule is judged against the tree and never a regular expression.** It counts the elements it saw and prints each fault with the rule it breaks: a child on the opening tag's line, a closing tag sharing its last child's line, two children on a line, a blank line between children, attributes not stacked, the `>` sharing the last attribute's line, a string written as `={"…"}`. **It rewrites nothing.**

```bash
npx tsx library/.public/.lib/the-coding-style/06-the-shape-of-tsx--check.ts .me library/.public/package/src
```

***The convention is applied by hand, and the rewriter that applied it by machine was struck the day it was written.*** **Doug, 2026-10-09, when the question came to him as a tool:** *"I don't mind having tools help, but I am not sure how much it should be automated. Doesn't the runtime of such a tool get bigger and bigger? We do care… I was stating a code convention. You are automating."* *What the day had shown before he said it: the rewriter learned three rules in an hour — prose, a space between two words, a tag that spans lines — and on its first run stacked a `<Means>` out of `<Line><Means>…</Means> is the book that writes the others.</Line>`, so the bound shelf read "Libbyis" in the browser, since JSX drops the whitespace at the head of a line. A hand would have left the sentence alone, which is what [the section on the tests](#the-tests) had already said: it wants doing by hand, a file at a time.* **So the checker says where, a hand rewrites, and a rewrite is proved: the file transpiled before and after, the two compared with their line breaks removed, since JSX's whitespace rules are applied at transpile and a lost space shows as a differing string literal.** *The test library's 56 files were opened out that way, proved at zero difference and seen in the browser, before the rewriter was struck; its tables and promises no longer carry a `<Paragraph><Content>…</Content></Paragraph>` on one line.*

***Two rules the breakage made explicit, since the words above left them to be inferred:*** **an inline element in a running sentence stays in the sentence** — *words beside an element make a sentence, and the sentence is the hand's: the element opens, and the sentence is laid inside it whole, wrapped as the author wraps it, so a `<Line>` opens and its `<Means>` stays in its line, and `The wheel: <Figure identifier="version1" />` stays a line, since a figure is a letter; a `<Title>` holding `<Parenthetical />` and its words opens too, and the hand stacks the mark above the words, as the test library's tables do. The checker asks of a sentence only that its element opens and closes on lines of its own, and asks nothing of what stands inside it, since no tree can tell a figure in a sentence from a mark at its head, and a word in a sentence stays in its line whatever it holds, `<Word>deep <Inked /></Word>` among its neighbours; what it stacks one to a line is a list of elements with no words among them, a chapter's parts or a row's words* — **and a space between two inline elements on one line is text**, *so `<Word>Book</Word> <Word>What it is</Word>` keeps its space and stays a line.*

***Rewritten by hand the same day, on his "Can't you just rewrite the TSX? … We want things formatted right":*** *the source's four tags whose attributes stood on one line, and the binder's two promises that quoted the compressed form of a title and an appended file as strings.* ***And the package's promises in `.tests`, by hand, a file at a time, the same day:*** *twenty-nine of thirty files, each gated by the checker, by its transpile against HEAD read for what changed, and by its promises; what the hand decided that no tool could is in [the sprint's record](../projection/109-sprint-104--parts-and-the-manual.md#where-things-stand). Owed: `writing.test.tsx`, the last.*

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

**An element that holds no other element may stay on one line.** `return <div />;` and `return <Anchor href={url}>{this.written}</Anchor>;` are complete thoughts and do not earn four lines — *one attribute and one short child at most, by [the rule above](#markup-is-expanded).*

**Lines wrap at 125.**

### <a id="the-story"></a>The TSX tells the story, and the rest of the class is terse — ***given 2026-09-22***

> ***"Do EVERYTHING you can to make the TSX look like well structured TSX. Remember how much indenting a class has? The name the members... I like all of that. I like TSX property indented, sometimes being quite airy to showcase what it does. It should be more visual. The rest of the class is terse so you can tell a story with the TSX."*** — **Doug, 2026-09-22**

***A view is the one place in a class that is written to be looked at, and what makes it visual is indentation, never blank lines.*** **Its returned element opens on its own line, its parts are indented one level and stacked, and the closing tag lines up with the opening one.** *A first draft of this section put blank lines between a view's parts to show the space between them, and Doug struck it the same hour:* **"Remove the blank spaces. I don't think HTML uses many blank spaces. The elements provide separation. Can't you just stack those? I prefer well spaced, well indented TSX without newlines."** *So the elements are the separation, and a writing's view holds its contents and then its annotations as two stacked lines.* **Everything the view needs is named just above the return**, *a boolean for the class the element wears, a component fetched for a chemical,* **so that the TSX reads as a picture with nothing computed inside it.** *Every other method of the class stays terse: a body on its own lines, no comment.* **The view is where the class says what it is; the rest is how.**

```tsx
view(): ReactNode {
    this.define();
    const parenthetical = this.annotations.contains($Parenthetical);
    return (
        <span className={parenthetical ? 'parenthetical' : undefined}>
            {this.write()}
            {this.annotate()}
        </span>
    );
}
```

***And a class that draws is ordered so the story reads down:*** `view` first, then what it draws with, then the machinery — [the order of a class, as amended the same day](02-the-order-of-a-class.md#the-story-first).

### <a id="define-is-a-declaration"></a>`$Define` is a declaration, and it reads as one — ***given 2026-09-24***

> ***"I want your add to support multiple for an author, and I want code to look like this — like the TSX style that it evoked."*** · ***"Add that to the coding conventions — to make $Define, to the extent possible, look like TSX, alternatively, to look like object literal creation. It is like we are declaring properties right?"*** — **Doug, 2026-09-24**

***`$Define` is where a class declares its default traits — what it is before anyone writes into it — the way a field declares a property.*** **So it reads as a declaration and never as a procedure: one `add` for its author, the author first on the line, and the annotations stacked beneath as TSX, one element to a line, the closing parenthesis lined up with the call.** *The components it names are fetched just above it, as a view's are, so nothing is computed inside the declaration.*

```tsx
protected override $Define(): void {
    const Level = $(level);
    const Open = $(open);
    this.annotations.add(this,
        <Level>1</Level>,
        <Open />
    );
}
```

***Where what a class declares is not an element, it is shaped like an object literal instead*** — *one name and its value to a line, indented under what receives them.* **Either way the reader sees a list of what the class is, in the order written.** *Before this ruling a class's defaults were one `add` to an element, which read as steps — do this, then this — and stood the defaults in reverse, since each landed at the front; one stacked `add` stands them in the order they are read.*

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

**Measured 2026-09-12, and it is the reason the rule exists:** a `<Document>` written bare in a chapter's writing method — the first draft's `print()`, the redraft's `write()` — is never looked up — a registration on the book or on the chapter kind answers nothing — while `const Document = $(document)` in the same method is answered from either. **DI reaches only what is fetched through `$`.**

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

- [The Type and the Instance § the fetch](../the-type-system/02-the-type-and-the-instance.md#the-fetch) — the `$`-fetch corollary and the timing law
- [The Order of a Class](02-the-order-of-a-class.md) — the same concern, for members
- [Styled Particles](../../../chemistry/.lib/particle/11-styled-particles.md) — where a class's CSS becomes members
