# The loop as it stands

- **author:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Queenie](../../../../.claude/library/..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

**keywords:** dev server · bind · dist · sheet · theme · format · hot reload · timing

---

***A page is drawn by four layers, and each one reaches the page a different way. Knowing which layer a rule lives in is most of debugging it, and the day's first hour was spent not knowing.***

## <a id="layers"></a>The four layers, and how each reaches the page

| the rule lives in | register | reaches the page by | cost, measured 2026-09-20 |
|---|---|---|---|
| **the library's sheet** — `.me/..reference/2-the-sheet.tsx.tsx` | the library's own code | **hot reload** on the dev server, or a bind | **1.4s** from edit to the computed style changing; a bind 13–27s |
| **a theme in `src`** — `src/encyclopedia/Theme.tsx` | the language | **`npm run build:quick`, then** a bind or a dev-server reload | **4.4–5.0s** to `dist`, then the bind |
| **a format in `src`** — `src/application/Toolbar.tsx`, a kind's `$Format` | the language | the same as a theme | the same |
| **the markup itself** — which element wears which class | the framework's drawing (`Writing.view`, `Catalogue.print`, `Ref.view`) | a `src` change; and *seeing* it needs a probe, because the class is assembled at run time | a build and a bind, plus a probe (~10s) |

**The dev server serves the sheet hot and the package from `dist`.** *`.me/..public/.binding/node_modules/@dna-platform/public` is a symlink to the package, but the package's `exports` point at `dist/lib.js`, so a `src` edit is invisible until rollup runs. [The trap this set](05-the-traps.md#stale-dist) is the first in that chapter.*

**And the dev server keeps the binder it started with.** *The transform, the routes assembly and the rest are vite plugins loaded at start; change the binder and the server is serving yesterday's compiler until it is restarted — and it holds vite's `deps` folder, so a bind run beside it fails to rename that folder (`EPERM`) even as it succeeds at everything else.*

## <a id="numbers"></a>What each step cost

*Every loop below printed how it exited; a number here is a match, never a timeout — [Solutions 87](../solutions/87-the-start-that-was-timed-by-a-loop-that-never-matched.md).*

| step | time |
|---|---|
| dev server up, first HTTP 200 | **6.5s**, then the page blank for 2–5s while vite transforms on demand |
| sheet edit → computed style changed on the page | **1.4s** |
| `src` edit → `dist` | **4.4–5.0s** |
| bind of Doug's six books | **13.6s** warm · **19–27s** typical, of which specify 5–12s |
| a compiler refusal, with file and line | **2.7–5.5s** into the bind |
| one photograph (fresh browser, 5s settle) | **~10s** |
| binder unit 62 · regression 6 · catalogue at 205 books | seconds · ~30s · 16s |
| bind of 25 books at scale | 20 copies by default, `SCALE=` to raise it |
| package suite 154, types | ~20s, 0 |

**Counted over the day:** *about twelve binds, six package rebuilds, some thirty photographs — five minutes of browsers starting — and one `sed` that changed six covers. The `src` change was 49 lines in and 116 out across nine files. The compiler's refusals were the fastest and the best part of the loop: each named its file, its line and the thing — `NO-SYNOPSIS: line 27 lists "Semantic Reference Theory" without the chapter that is its synopsis` — and each said what to write next.*

## <a id="where"></a>Where the hours went

***Not to editing.*** *The regression's cause took an hour to locate, and the location was two commits and a sheet line: [ac48a33](../projection/83-sprint-77--the-binder-rebuilt.md#done-compiled) made a mention hold its anchor instead of being one and left the theme's rules saying `.pd-ref`; Doug's sheet then set the contents rows to flex with `line-height: normal`. The fix for the rows was one line, hot in 1.4s.* **The next hours went to design** — *where the link's one class comes from took three tries before the one-line answer; how a catalogue's chapter carries a book's synopsis took two — and every try was cheap to build and cheap to throw away, which is the point of a fast loop, but their sum is the day.*

**The rule the day teaches:** *before touching a rule, say which layer it lives in and what reaches the page from there; if the answer is "a build and a bind", ask first whether the same question can be answered in the browser against the page as bound — [Working on the compiled output](04-working-on-the-compiled-output.md).*
