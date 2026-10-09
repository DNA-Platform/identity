# The Development Policies

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Cathy](../../../../.claude/library/..teamsmanship/..team/cathy/cathy-and-the-reactive-canvas/.cover.md), [Libby](../../../../.claude/library/..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md), [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- ***Written 2026-10-02 at the end of [Sprint 97](../projection/102-sprint-97--formats-are-the-unit-of-styled-components.md), on Doug's question — "But are they closed? Can these turn into policies and do they work as development practices? Do a bit of last analysis and then write them up into a more sophisticated development guide." [Dressing a Library](02-dressing-a-library.md) is the how-to, in the order a librarian writes a book file; [The Styling Surface](../the-styling-surface/.cover.md) is the roster of what is on the page; this is the policy — each practice as a rule, with the mechanism that makes it hold, the way it fails, the check that catches the failure, and where the test library shows it holding. The chapter's name is a PROXY.***

---

## What a policy is here, and how each was tested

A practice is a policy when a librarian who has never seen this code would keep it by reading it, when breaking it shows as a failure a check can name, and when the test library already keeps it on a real page. Each policy below was tested the same way on 2026-10-02: stated generally, applied to the test library, the library bound, every page photographed against the galley before, and the gates run — the package's 342 promises, the binder's 132 and its 46 in Chrome. Where a policy changed a line of the test library, the photographs are the proof: **seven pages at 0 pixels** after the first policy was applied to every face.

The policies rest on [the three sentences](02-dressing-a-library.md#the-three-sentences): a component owns its structure and reads its appearance from a theme; a theme is a typed value object with a slot per component, only one per book; a component is replaced by subclass. What follows is how to keep them.

## <a id="1--a-face-names-the-class-with-its-mark-a-theme-names-the-class-alone"></a>1 · A face names the class with its mark; a theme names the class alone

**The rule.** A theme's rule for a class of writing names that class's mark: `.pd-chapter { margin-block: … }`. A face's rule for its *own* element names the class *and* its mark, read as *the chapter that is a cover*: `.pd-chapter.pa-cover { margin-block: 0 }`. A face's rule for the classes *beneath* it names its mark and the class: `.pa-table .pd-paragraph { margin-block: 0 }`.

**The mechanism.** Two rules on one element at equal specificity tie, and styled-components breaks the tie by the order the components were created — which a theme subclass defined in another book's file changes, so the same two rules win on one page and lose on another. A face's rule with two marks has one class more than the theme's rule with one, so it wins by specificity on every page, in every order, and nothing is taken off any element to make it so.

**How it fails.** A face writing `.pa-cover { margin-block: 0 }` ties with the theme's `.pd-chapter { margin-block }`; on the library's page the face wins, on Libby's the dark theme does. Found by the photographs on the night the test library was dressed: Libby's cover forty pixels low, every other page right.

**The check.** A face's template never carries a rule whose selector is one `pa-` mark alone on the element the face is said of. A grep of a library's faces for `^\s*\.pa-[a-z-]+\s*\{` says so; a photograph of every page against the last signed galley says so without reading.

**Where it holds.** [`5-the-faces.code.tsx`](../../package/.binding/.test/manual/5-the-faces.code.tsx): `.pd-chapter.pa-cover`, `.pd-chapter.pa-synopsis`, `.pd-chapter.pa-table-of-contents`; the theme's `.pd-chapter { margin-block }` for every chapter; seven pages at 0 pixels after the change, Libby's among them.

## 2 · A mark an annotation puts on or takes off is a meaning, never a way to win

**The rule.** Cover, Synopsis and TableOfContents take `pd-canonical` off their chapter; a library's Framed puts `pa-framed` on what it frames. A theme reads those marks for what they *mean* — `.pd-canonical.pd-chapter { counter-increment: chapter }` counts the chapters that are counted; `.pd-canonical.pd-chapter:not(.pa-framed) { border-block-start }` rules the chapters that are not already framed. A face never removes a mark so that a theme's rule will miss it; policy 1 is how it wins.

**The mechanism.** A mark is a statement about the writing, and every rule in a library reads it as one; the annotation that controls it is the annotation that knows — Doug: *"Annotations can control expression for this reason."*

**How it fails.** A theme that dresses `.pd-chapter` for its margin *and* its counter lets a cover be counted; a face that takes a class's mark off to escape a margin takes the class's meaning off with it, and every other rule for that class.

**The check.** Every `pd-canonical` and `pa-framed` in a theme stands beside a property that is about counting, labelling or standing down; a margin or a size on `.pd-canonical.pd-chapter` alone is the smell.

**Where it holds.** [`2-the-theme.code.tsx`](../../package/.binding/.test/manual/2-the-theme.code.tsx), `levels()`: margins on `.pd-chapter`, the counter and the rule-above on `.pd-canonical.pd-chapter`; the label's text on `.pd-canonical.pd-chapter .pd-title::before`, each face writing its own word.

## 3 · Replace what a chapter writes by subclass under the framework's name; what the framework stands, by registration

**The rule.** A library's `Table` is `class $LibraryTable extends $Table { style = … }`, exported from the book file as `Table`, and a chapter imports `Table` from the book file on the line it imports the library's own words. What the framework stands for itself — the Theme on every book, the Self on every title — a library replaces with `$(TheLibrary, Theme)(LibraryTheme)`, once, in the book file, and every book of the library inherits it. Doug: *"subclass of Table exported as Table is the right answer. Preserves the semantics."*

**The mechanism.** A subclass is still a Table: the specification runs on it, every `is($Table)` holds, the compiler reads notation and never a class. The framework's own standings *ask* — `$(theme)` in `Book.$Define`, `$(self)` in `Title.$Define` — so a registration on the book class answers them; a word a chapter writes is made by chemistry's eval before any `.public` code could ask, so it is replaced by import. The two are not rivals; each reaches what the other cannot.

**How it fails.** A chapter importing `Cover` from `@dna-platform/public` gets the framework's bare header, silently. A registration for `Table` reaches nothing, since the framework stands no Table.

**The check.** A grep of a library's chapters for a face imported from the package — `import \{[^}]*\b(Cover|Synopsis|TableOfContents|Table)\b[^}]*\} from '@dna-platform/public'` — finds only the book that means the base; [`registration.test.tsx`](../../package/.tests/registration.test.tsx) promises both halves.

**Where it holds.** Nineteen chapters importing from [`manual/.book`](../../package/.binding/.test/manual/.book.tsx); [Some Projects](../../package/.binding/.test/projects/.book.tsx) importing the framework's own and registering the framework's Theme on its class, which is how a librarian says *show me the base*.

## <a id="4--a-theme-is-properties-every-template-reads-them-through-the-provider-in-one-form"></a>4 · A theme is properties; every template reads them through the provider, in one form

**The rule.** A theme declares its properties as reactive fields and nothing else, and types its class once as the theme styled-components hands down. Every template in the library — the theme's own included — reads a property as `${({ theme }) => theme.space}`, never as a literal and never through a closure over `this`. Code reads `this.theme.space`. A book takes another theme by registration; a reader switches one with `$is`; nothing is merged.

**The mechanism.** A styled template is compiled once per class on the class's specimen, which stands in no book, so a template can read a book's theme only through the props its provider hands it at render — styled-components' own `ThemeProvider`, which chemistry supplies: the provider layer answers chemistry's `theme` with the book's Theme, and chemistry hands every template beneath a live face over it, remade only when a field changes. Doug: *"Why can't you just have reactive properties and they are templated into the string?… Everywhere in a book has access to it."*

**How it fails.** `${this.theme.space}` in a Format's template throws at the class's specimen, which has no book; `${this.space}` in a theme's own template bakes the class's default and a field written on a live theme reaches every Format and not the theme's own rules; a literal `1.25rem` in any template is the value a dark book cannot change.

**The check.** [`theme.test.tsx`](../../package/.tests/theme.test.tsx) promises a written field reaching the styled element beneath; a grep of a library's templates for `this\.` and for a length or colour literal finds none.

**Where it holds.** [`2-the-theme.code.tsx`](../../package/.binding/.test/manual/2-the-theme.code.tsx), every part; Libby's [Writing a Theme](../../package/.binding/.test/libby/3-writing-a-theme.tsx), three fields and a registration, and her page dark in Chrome by computed style.

## 5 · A component that will be changed is composed of parts

**The rule.** A theme's component, and any Format whose template says more than one thing, is composed of `css` fragments returned by protected methods and joined once in the field: `style = selection.div\`${this.parts()}\``, `parts()` returning `[this.page(), this.levels(), …]`. A subclass overrides one part, or adds one to `parts()`, and keeps the rest.

**The mechanism.** A method stands on the prototype before any field initializer runs, so the base's field composes the subclass's override; the composition is made once per class, since a field initializer runs on the class's specimen. It is the template method pattern in styled-components' own `css`, and what MUI's slots and Chakra's recipes are.

**How it fails.** A subclass that rewrites the whole template to change one rule carries every rule of its parent's as a copy, and the copy drifts — the manual's theme rewrote fifteen rules of the library's inside a layer before the policy.

**The check.** A subclass theme's file is read for a rule its parent already writes; the manual's is one overridden part and one added.

**Where it holds.** [`7-the-explorer.theme.tsx`](../../package/.binding/.test/manual/7-the-explorer.theme.tsx): `page()` overridden, `explorer()` added.

## 6 · A class that is an element is that element; a class that holds one keeps its span

**The rule.** A class whose content is one element replaces its own `span` with that element at the bond — a Date is a `time`, a Code is a `pre` — so the class's mark is on the element and a library dresses `.pd-code` and never `.pd-code pre`. A class that holds an element it is not — an Image holding an `img`, an Svg holding an `svg` — keeps its span, and the element inside is a foreign element named under the mark, `.pd-image img`.

**The mechanism.** `containers.replace(this, 'span', 'pre')` at the bond, cited to the class, which every define's revert leaves standing; Block replaces `'span'` by value, so a replaced element is left alone.

**How it fails.** A `div.pd-code` holding a `pre` nobody marked leaves a library writing an element type under a class for the block's own margin and ground — the fight Sprint 96's grade named.

**The check.** [`figures.test.tsx`](../../package/.tests/figures.test.tsx) promises `pre.pd-code`; a grep of a library's theme for `\.pd-[a-z]+ (pre|code|time)\b` finds none.

**Where it holds.** [`Code.tsx`](../../package/src/figures/Code.tsx), [`Date.tsx`](../../package/src/writing/Date.tsx); the test library's theme dressing `.pd-code` alone.

## <a id="7--every-rule-names-a-mark-reaches-by-descendant-and-takes-its-numbers-from-the-theme"></a>7 · Every rule names a mark, reaches by descendant, and takes its numbers from the theme

**The rule.** A rule names a mark, never an element type except the foreign elements the framework does not mark; it reaches a mark inside another by descendant, `.pa-cover .pd-title`, never by child, sibling or position; every quantity in it is a theme property; a state is a mark the class toggles, `pa-open`, and a rule reads it. [The Styling Surface](../the-styling-surface/01-the-base-themes-classes.md#writing-against-them--the-rules-of-the-surface) states it whole.

**The mechanism.** Between any two writings stand as many layers as were said of them, each wearing `pd-container`; a Format in front stands one more. A rule written to the layers of one galley breaks on the next.

**How it fails.** `.pd-heading + .pd-paragraph`, `:first-child`, `:has(> .pd-title)` — the test library's explorer still carries three such, Sprint 96's U9 carried, and its header-row rule was dead for a sprint because `:first-child` was the heading.

**The check.** A grep of a library's templates for `>`, `+`, `~`, `:first-child`, `:nth-`, `:has(`; the explorer's are the known remainder.

## <a id="8--the-base-ships-mechanism-and-no-appearance-and-a-change-to-it-is-graded-in-the-library"></a>8 · The base ships mechanism and no appearance, and a change to it is graded in the library

**The rule.** `src` carries what a mark *means* — a grid, a marker, a hidden page, a header's element — and nothing a library would choose: no size, colour, weight, margin, padding, border, background or glyph; no `@layer`, no `!important`, no `:has` chain, no global style, no theme augmentation. A rule that leaves `src` is deleted, not moved. A change to `src` is proposed as a diff for Doug's yes, and judged by whether the test library written against it reads as a more natural extension — [the grade](../the-coding-style/07-what-natural-means.md#the-grade).

**The mechanism.** Nobody designs against a bare book; a library always dresses itself, so anything the base said about looks was something every library rewrote.

**How it fails.** A base sheet that "comprehends every class" grows to a hundred rules by its own promise, and every library extends it through a cast and a layer — Sprint 96's finding, Sprint 97's cause.

**The check.** [`theme.test.tsx`](../../package/.tests/theme.test.tsx) greps every template in `src` for a look property and the forbidden machinery; the binder's regression reads every bound sheet for `@layer`, `!important` and the base's chain.

**Where it holds.** `Theme.tsx` at twenty-six lines; Some Projects on the base, a browser-default book whose sheet is 111 bytes.

## <a id="order"></a>The order of work, and how a sprint on the look is closed

1. **The book file first:** the theme's properties and its parts; the faces, each one field; the library's own Formats; the registrations. Nothing in a chapter until the book file typechecks.
2. **The chapters import from the book file** — the framework's words the library replaced, and the library's own.
3. **Work with the page open, and never bind to look.** Every look while the work is in progress is taken through the workbench, on the live page, where a save shows in under a second and the compiler's refusal shows on the page — [How a Library Is Developed](01-02-how-a-library-is-developed.md#the-protocol) is the protocol, with its commands and what each step costs. Doug, 2026-10-05: *"When doing UI work you need rapid feedback right? If the system doesn't give that to you, the system is a failure."* *Until that day this list went from the chapters straight to a bind, and a session that kept it bound twenty times to look.*
4. **Bind once, when the piece of work is done, and run the gates:** the package's suite, the binder's unit suite, the regression in Chrome — and, when the binder or the shape of the test library changed, the binder's performance suite, its numbers written into [The Binder, As Built](../the-catalogue-and-the-specification/07-the-binder.md#measured) beside the last run's. Doug, 2026-10-05: *"Binder performance is critical."* A red is read, never worked around. *The bind is the gate because it checks what the live page does not: each book's own rules, the printed page, and every link — [the table](01-02-how-a-library-is-developed.md#live-and-bound).*
5. **Photograph every page of the built site against the last galley Doug signed.** A page at 0 pixels is proof; a page that moved is read with the box probe for *which element* moved and *which rule* moved it, and the rule is corrected by a policy above, never by ordering components.
6. **The grade:** the library's files read at the manual's spread against [the three tests](../the-coding-style/07-what-natural-means.md#the-three-tests) — would the next librarian write this unprompted? — with what is still a fight named beside the word or mechanism it is missing.
7. **Serve on 4242 and vouch for it,** with the numbers said: bytes and nodes per page, the sheets' sizes, the gates' counts.

## What is not a policy yet

Two things stand as practice without a check, and are named so they are not mistaken for closed. A promise that reads a bound sheet for a property two components of one library write on one mark would make policy 1 a gate rather than a reading; the photographs are the gate until it exists. And the explorer's three positional rules are the remainder of policy 7, carried to the rebuild of the manual as Book and Chapter subclasses, Sprint 96's U9.

**Names.** Doug's: *policy*, *development practice*, *face*, *the base sheet*, *subclass of Table exported as Table*. Ours, flagged: this chapter's title; *the three sentences*; the order of work.
