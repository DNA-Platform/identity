# One browser, kept open

- **author:** [Gabby](../../../../.claude/library/..teamsmanship/..team/gabby/gabby-and-the-visual-voice/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

**keywords:** puppeteer · connect · browserWSEndpoint · reload · readiness · hot reload · in front of the page

---

***Doug's three questions, and the honest answers.*** **"Did you maintain a single connection to the browser and refresh?"** *No: every look was a new browser.* **"Did hot reload allow you to work in front of the compiled output?"** *For one layer, and blind: the sheet was hot at 1.4s, but my eyes were photographs, and a photograph was a new browser.* **"Did you work on the compiled output to prototype when hot reload fails and then backpropagate?"** *No — [the next chapter](04-working-on-the-compiled-output.md).*

## <a id="fact"></a>The fact

**Thirty looks at about ten seconds each is five minutes of Chrome starting, and that is the smaller cost.** *The larger one is behavioural: at ten seconds a look you look after every third change, and the change you did not look at is the one that was wrong. At under a second you look after every change, and the day's stale-build trap — a page judged from yesterday's `dist` — does not survive a second look.*

## <a id="design"></a>The tool the day was missing — `design/look.mjs`, kept open

***Built the next morning, 2026-09-20, in [`.me/..public/.binding/design/look.mjs`](../../../../.me/..public/.binding/design/look.mjs), and used for the masthead the same hour.*** **One process launches the browser once, opens the page, and writes its `browserWSEndpoint` to a file beside itself (`design/.look`). Every later call `puppeteer.connect`s to it, asks one question, prints the answer, and disconnects without closing.** *The page stays where it was, scrolled where it was, with the dev server's hot updates already applied to it.* **Measured: a question answered in 13–20ms where a photograph had cost ten seconds; the sheet's two edits to the brand seen hot, each in one look.** *Three faults in its first hour, each a rule now in the tool: readiness asked the book for a height and the book's element is `display: contents` (ask `main`); a reconnect took the browser's default page without a viewport and measured a 784px book (the viewport is set on every page taken); and a timeout said only "timeout" (it now prints what the page holds and what its console said).*

*The questions are the probes' questions, as subcommands:*

| `look …` | answers |
|---|---|
| `reload` | reloads the page and waits for **readiness**, not a fixed sleep — the book drawn (`.pd-book` present and the first heading laid out), or a timeout that says so |
| `box <selector> [depth]` | the rendered tree of a region with each element's computed box — `dom.mjs` |
| `at <selector>` | every match with its page-top and its text — `where.mjs` |
| `after <selector>` | the computed `::before` and `::after` of the first match — the bar, the mark, anything a DOM walk cannot see |
| `style <selector> <property…>` | one element's computed properties, for a rule you just wrote |
| `shot [y]` | a photograph at an offset, into the scratchpad |
| `errors` | what the page's console said since the last reload — nobody listened to it in the day, and nothing said the reference had died |

**Two pages, not one.** *The day compared Doug's library against the Turing page on a second server, and that reference stopped drawing mid-morning — React's suspended-with-error marker in an empty root — while the comparison went on against a photograph taken before it died. A kept-open browser on the reference would have shown an empty page at the next `reload`. `look` takes a named page: `look me reload`, `look wiki box .pd-toolbar`.*

**With the dev server the page reloads itself; with the preview on 4242 it is reloaded after a bind.** *Either way the connection survives, and `hmr.mjs`'s measurement — edit, then poll a computed style until it changes — becomes `look style` run twice.*

## <a id="afternoon"></a>What the afternoon taught the tool

***The browser is nobody's child.*** *A browser puppeteer launches dies with the process that launched it, and every reconnect after that call had exited found `ECONNREFUSED` — the morning's reconnects had been lucky. Chrome is spawned detached on a debugging port of its own (`--remote-debugging-port=9333`) and every call, the first included, connects by URL.* ***A call never wedges the page:*** *a screenshot of Wikipedia's infobox hung, and every call after it queued behind it for twenty minutes; each call now carries a 45s deadline that prints "timeout" and exits.* ***A crop is the page clipped to the element's box, in page coordinates*** — *asking the element to photograph itself is what hung, and a clip in viewport coordinates with capture beyond the viewport photographs the wrong place.*

***And `look rules <substring> <property…>`:*** *every rule on the page whose selector names the substring, with the declarations asked for, in sheet order. It is how the infobox's cascade was read in one call — the theme's `row_padding = '1px'` beating the format's Wikipedia numbers, and a `box_padding` that reaches its rule as `0px` ([B30](../the-catalogue-and-the-specification/08-the-binders-condition.md#b30)) — where the morning had guessed at specificity and paid a build per guess.*

## <a id="in-front"></a>What "in front of the compiled output" would then mean

***Edit the sheet; the page you are already looking at restyles in 1.4s; ask `look box` and read the number; edit again.*** *That is the loop for the library's own code today, minus the looking, and the looking is the whole of what the tool adds.* **For a theme in `src` the same loop needs one more thing: the dev server reading the package from `src` rather than `dist`** — *a vite alias from `@dna-platform/public` to the package's source, in development only — so a theme edit is hot too. Without it a theme edit is `build:quick` (4.7s) and a reload, which is not slow, but it is a step a person forgets, and forgetting it is [the first trap](05-the-traps.md#stale-dist).*

**And the binder's own changes are the one thing no reload reaches:** *the dev server loads the transform and the assemblies at start. Changing the compiler means restarting the server, or a server that watches its own plugin files and restarts itself — an idea, cheap, and the day would have been shorter for it.*
