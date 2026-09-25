# The traps

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

**keywords:** stale dist · stale binder · EPERM · grep · failed bind · heredoc · reference · nbsp

---

***Each of these cost between ten minutes and an hour on 2026-09-20. Each has a rule, and most have an idea that would make the rule unnecessary.***

## <a id="stale-dist"></a>A bind after a `src` edit, without the build

**Symptom:** *the tabs judged unfixed — `::after content none`, `position static` — on a page bound after the theme had been re-keyed.* **Cause:** *the bind reads `dist`, and `dist` was yesterday's; the theme lives in `src`.* **Rule:** `npm run build:quick` *before any bind that follows a `src` edit, and before believing a page — the same rule the suite has carried since [Solutions 05](../solutions/05-the-suite-that-passed-against-a-stale-build.md).* ***Idea:*** *the bind compares `dist`'s time to `src`'s and builds when `src` is newer; or the dev server aliases the package to `src` and the question goes away for the hot loop.*

## <a id="stale-binder"></a>The dev server's stale compiler

**Symptom:** *a bind succeeds and prints `EPERM: operation not permitted, rename …/.vite/deps_temp_… -> …/.vite/deps`; a page on the dev server draws with yesterday's addresses.* **Cause:** *the dev server loaded the binder's plugins when it started and never again; it also holds vite's deps folder open.* **Rule:** *restart the dev server after any change to the binder, and sweep it before a bind ([the sweep](../../../../.claude/library/..environmentalism/09-on-strays.md)).* ***Idea:*** *the server watches its own plugin files and restarts itself.*

## <a id="grep"></a>A class grepped in a bundle

**Symptom:** *"the Sept 15 build has zero occurrences of `pd-meaning`, `pd-catalogue` or `pd-option`" — announced as evidence that the mention's shape was younger than the theme.* **Cause:** *the bundle has zero occurrences of `pd-` at all; the framework assembles the class at run time as `pd-${kebab(name)}`.* **Rule:** *a negative from a grep needs a positive control — grep for a class you know is there — and a question about a rendered class is asked of the running page. The evidence was withdrawn in the next message; the hypothesis it supported happened to be right, which is the dangerous case.*

## <a id="failed-bind"></a>A page from a failed bind

**Symptom:** *a photograph after a bind shows the mark unchanged.* **Cause:** *the bind stopped at the catalogue phase (`NO-TITLE`) and wrote no pages; the preview served the previous bind's.* **Rule:** *read the exit code before looking. `bind exit 1` and a photograph are not a pair.* ***Idea:*** *a bind that fails could stamp the served pages, or `look reload` could print the manifest's time beside the shot.*

## <a id="heredoc"></a>A heredoc in a Bash call

**Symptom:** *the call prompts, hangs, and is moved to the background; the edit it carried never ran.* **Cause:** *recorded on 2026-09-15 and hit twice today regardless.* **Rule:** *files come from the Write tool, one-liners from `node -e` with no `$` inside double quotes; a heredoc never.*

## <a id="reference"></a>The reference that died

**Symptom:** *the Turing page on the second server answers 200 and draws nothing — `<div id="root"><!--$!--><template></template><!--/$--></div>`, React's suspended-with-error marker.* **Cause:** *unknown; the client script failed some time after the first look.* **Rule:** *a comparison begins by confirming the reference draws; the day compared against a photograph taken before it died, which was right by luck.*

## <a id="nbsp"></a>The non-breaking space the parse eats

**Symptom:** *`&nbsp;` between the box and its name comes out an ordinary space; the box is glued to the name.* **Cause:** *`parser.text` splits words on `\s`, which JavaScript takes to include U+00A0.* **Rule:** *the gap is the sheet's until the parse keeps it — [B22](../the-catalogue-and-the-specification/08-the-binders-condition.md#b22).*

## <a id="sleep"></a>A fixed sleep as readiness

**Symptom:** *the dev server's first photograph is a white page.* **Cause:** *the probe waited two seconds; vite transforms the page's modules on demand and the book drew at five.* **Rule:** *wait for a fact — the book's element present, a heading laid out — and print `exited by`; a sleep that guesses wrong reports a blank page as a finding.*

***And readiness is per question.*** *The same afternoon `look shot` photographed the infobox with an empty plate: the page was ready — the book present, `main` laid out — and the plate paints itself after load. A photograph of the plate waits for the plate (qa's own `untilThePlateIsDrawn`), not for the page; the fact a look waits on is the fact it is about to read.*

## <a id="ideas"></a>The ideas, gathered

1. **`design/look.mjs`, one browser kept open** — [the chapter](03-one-browser-kept-open.md#design). A look from ten seconds to under one; the behavioural gain is larger than the arithmetic one.
2. **The bind builds `dist` when `src` is newer.** Removes the first trap.
3. **The dev server reads the package from `src`.** Makes a theme edit hot; removes the first trap for the hot loop.
4. **The dev server restarts on a change to the binder.** Removes the second.
5. **Readiness, never sleeps**, in every probe and in qa.
6. **Two more refusals in the compiler:** a heading id answered twice on one page — ***built the same afternoon***, and it was the instrument: one bind listed thirty faults by page and id where the day before had needed thirty photographs ([Solutions 88](../solutions/88-the-link-that-landed-on-the-first-of-two.md), [B32](../the-catalogue-and-the-specification/08-the-binders-condition.md#b32)) — and the parse keeping U+00A0 ([B22](../the-catalogue-and-the-specification/08-the-binders-condition.md#b22)), still owed. *The fastest loop in the day was a refusal that named its line, and every fault that can be one should be.*
7. **A line at the top of each theme and sheet saying how it reaches the page** — `hot on the dev server` · `build, then bind` — so the first question of [the loop](01-the-loop-as-it-stands.md#layers) is answered where the rule is read.
