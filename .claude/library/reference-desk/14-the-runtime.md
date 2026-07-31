# The Runtime — the CLI

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

**The app is the runtime. The CLI is its face.** Everything in [`.claude/src/`](../../src/) knows how to drive Claude Desktop; everything in [`.claude/cli/`](../../cli/) knows how to *ask* it and how to *show* the answer. That division is not stylistic — it is [ch.5's rule](05-coding-philosophy.md) applied to a new caller: *if a script reaches below the `Claude` class, the class is missing a method.* A CLI is a script with a prompt attached, and it obeys the same law.

This chapter grows as the runtime grows. It describes what exists; the plan for what comes next is [Sprint 102](../projected-identity/74-sprint-102--lifting-the-app-into-the-cli.md).

## Driving it like a room

You move, and the runtime tells you where you are and everything you can do. Doug's framing: *kind of like those old text-based video games where you go left or right and you end up in a new place… it should give you big chunks of info as you move telling you everything you can do.*

```
── Conversation ──
claude.ai/chat/1f2e…

Here:
  title     Sheaf cohomology
  messages  4

On this screen: composer, artifacts, response

Exits — these take you somewhere new:
  composer.send  → Conversation

Look — these read the screen and tell you what is there:
  messages    The conversation's messages, read from the tree.
  title       This conversation's title, read from the page header.
  …

Do — these change something:
  rename <name>                  Rename this conversation via the page header's button…
  artifacts.download <outputPath>
  …

Always available:  tree [filter]   copy <command>   look   where   help
```

The whole room prints on **every** move. Verbosity is the feature: the operator should never have to remember what is available, and never have to run a second command to find out. An unknown command lists what *is* here, because "not here" is real information about which screen you are on.

## Derived, never declared

**The command list is read from the code.** It is never written by hand, and this is the chapter's most important sentence.

A hand-maintained table of what you can do is exactly the failure this book has already paid for: [ch.12's object mapping](12-the-app.md) named classes the code had deleted two sprints earlier and read as authoritative the entire time. A `describe()` written by hand would lie inside one sprint, and it would lie *while looking like documentation*.

So the model comes from two sources that both track the code and cannot disagree with it:

1. **The live instance** — which page object we are actually holding, and which components it actually has. A `ConversationPage` has a composer; a `ProjectsPage` does not; an undefined component is simply not offered.
2. **The source signatures** — parsed from `.claude/src/**` by [`surface.ts`](../../cli/surface.ts), because *return types are erased at runtime*. `tsx` transpiles the annotations away, so reflection alone can see a method's name and arity but not what it promises. The source still says `Promise<ConversationPage>`, and that is the fact that matters most.

The property this buys: **add a method to a page and it appears in the CLI with no second edit.** [Sprint 100](../projected-identity/72-sprint-100--the-cli-test-suite.md) tests it by adding a real method, never by comparing against a frozen list of expected commands — a frozen list would re-introduce the very drift the design exists to prevent.

This is the same read the [introspect tool](09-codebase-index--introspect.ts) performs, narrowed to what the CLI needs. Two readers of one source, which is the right kind of duplication: both break the day the source changes shape, and neither can quietly disagree with it.

## The three kinds, and where they come from

Every command is classified by what its signature promises. The classification is not a taxonomy someone invented for the CLI — each kind is one of the app's existing laws, read back out of the code:

| Kind | Test | The law it comes from |
|---|---|---|
| **Exit** | returns a single **place** | [Navigation returns the next page](10-architecture-patterns.md#navigation-returns-the-next-page) — a place-typed return *is* a door |
| **Look** | parameterless, returns data | [Every action gets a confirmation read](05-coding-philosophy.md); reading is how you know where you are |
| **Do** | everything else | [P2](13-the-redesign.md#p2--clicks-are-parameterless-only-typing-takes-a-parameter) — a click is parameterless, so a *parametered* Do is a typing action and is shown as one |

A method's own doc comment becomes its description. The author's words are better than anything the CLI could generate, and they are already there.

### A place is not only a page

A **place** is somewhere you can stand and act from: a page, a menu, a modal, a panel, the sidebar. `isPlaceClass` decides it by asking where the app declared the class — `pages/` and `components/` are the View layer, the objects that model what is on screen ([layers](02-01-the-architecture--layers.md)). Everything else is infrastructure or a value.

Two refusals make the rule work:

- **A list is not a place.** `projects(): ProjectItem[]` hands you data *about* the screen; `menu(): ConversationMenu` puts you somewhere new. Same "returns a class we know about", opposite meaning, and the `[]` is the whole distinction.
- **Having methods is not enough.** `TreeSnapshot` has seven and is a value. You read it; you do not stand in it. Where the app puts the class is the answer it already gave, and it is not a list anyone maintains.

**This began as a safety bug, not a feature.** The rule used to be "returns a type ending in `Page`". `ConversationPage.menu()` takes no parameters and returns a value, so it classified as a **look** — and [the runtime](../../src/cli/runtime.ts) reads every parameterless look *before and after every action* to report what changed. Calling `menu()` opens the conversation menu. An unrelated action would have opened it twice, on the user's screen, silently. A look must be harmless; going through a door need not be. [`places.test.ts`](../../src/tests/places.test.ts) sweeps the entire generated surface for the next one.

Generalising it turned out to be the **lift**. Once a menu is a room, `go menu` walks into it and `look` shows what is there — and the way out is the app's own `ConversationMenu.close()`, offered like any other action. No CLI special-casing, because the app already modelled it as an object with its own actions. The CLI did not need new features; it needed to stop assuming a place had to be a page.

### `back` keeps no trail

`back` re-binds to whatever screen the app says it is on. The CLI holds no history stack and no remembered route, because the app is the only thing that knows where you are — walking out of a menu you left open puts you back on the screen the app is actually showing, which is the truth rather than a reconstruction.

## The conventions are now contracts

Reflection turns naming into behaviour. Three conventions in [`.claude/src/`](../../src/) used to be good style; the runtime now depends on them, and breaking one silently changes what the CLI offers.

- **A screen class ends in `Page`.** `HomePage`, `ConversationPage`, `ProjectsPage`, `ProjectPage`. This is how a door is recognized. Rename `ConversationPage` to `Conversation` and every exit on the app silently reclassifies as a *look* — the CLI would still run, still look right, and quietly stop offering navigation. (This exact bug shipped once during Sprint 98: the matcher used a `\bPage\b` word boundary, which does not exist between "n" and "P" in `ConversationPage`, so **every door in the app classified as a look**. Matching the suffix is correct.)
- **Components are declared on the class, and are real objects at runtime.** The driver declares most of them as *constructor parameter properties* — `constructor(readonly composer: Composer, …)` — not as class fields. A reader that only understands class fields sees `response` and misses `composer` and `artifacts`, which takes the Conversation screen's only exit with it. Both forms are the convention; both must be read.
- **Sensors are named `isX` / `hasX` / `canX`; readers are `readX` or a plain noun; actuators are verbs.** `isResponseComplete`, `hasStopButton`, `canSend`, `readDraft`, `messages`, `title`, `send`, `open`, `rename`. The CLI does not currently key on these prefixes, but a person reading a room does, and the [gateway](02-02-the-architecture--gateway.md) contract depends on them: a `verify` must be a sensor, never an action.

**What is private stays out.** `private` and `protected` members are not part of the surface, and neither is infrastructure — `auto`, `gateway`, `diagnostics`, `navigator`, `session`, `window`. That exclusion list is short and stable on purpose: it names what is *not* the app's surface, which is a far smaller and slower-changing thing than a list of what is.

## The shape of the code it reads

The runtime depends on the driver keeping the shape [ch.2-01](02-01-the-architecture--layers.md) specifies. As built:

```
.claude/src/
  claude.ts        the app object: window, sidebar, session, tree()
  pages/           Page (abstract) → HomePage, ConversationPage, ProjectsPage, ProjectPage
                   navigation.ts — the id→page factory
  components/      Composer, Sidebar, Response + Part hierarchy, ArtifactPanel, FilesPane,
                   ModelPicker, ConversationItem/Menu, MoveConversationModal/ProjectChoice,
                   ProjectItem, ProjectFile, TextContentDialog, FileDialog
  controllers/     one *Controller per component — blind sensors and actuators
  gateway.ts       precheck → act → verify
  tree.ts          TreeSnapshot — the screen as a value
  uia.ts shell.ts window.ts keyboard.ts navigator.ts diagnostics.ts errors.ts
  scripts/         throwaway capture scaffolding — NOT the app's surface
  exports/         the migration exporters — not the app's surface either
  trees/ debug/    captured ground truth, and failure artifacts
```

`scripts/`, `tests/`, `debug/` and `trees/` are excluded from the surface read. They are scaffolding and evidence, not things you can do to the app — and including them would put 140 one-off scripts into the operator's room.

## Always available

Four commands do not belong to any screen, because they are about the runtime rather than the app:

- **`tree [filter]`** — the [UIA tree](../../src/tree.ts) right now: what the app *actually* shows, filterable by control type and name. This is the one you run when a command is missing or a model claims something the screen denies. Doug's reason for requiring it: *the easiest way to adjust the code is to look at it to see why the current implementation fails.*
- **`look`** / **`where`** — re-print the room without acting.
- **`copy <command>`** — put the result on the clipboard and say so, rather than flooding the terminal with a 40KB response. A read that produces a document should hand you the document.
- **`help`** — the always-available set, and how kinds are classified.

## What the CLI must never become

- **It must not implement app behaviour.** A command handler is a thin wrapper over an existing View method. A command that cannot be expressed as one is a sign the *View* is missing something, and the fix belongs in `.claude/src/`. This is checkable by reading `.claude/cli/` and finding no UIA, no gateway, no waiting.
- **It must not hand-maintain a command list.** See above. If you find yourself adding a name to an array so the CLI will offer it, stop — the derivation has a gap, and closing the gap is the work.
- **It must not become the only way in.** The driver is a library first. Scripts and the [/think](../our-skillset/20-think.md) flow keep working without a CLI process anywhere.

## Testing it

Two layers, and the split is the point ([Sprint 100](../projected-identity/72-sprint-100--the-cli-test-suite.md)):

**Hermetic** — `npm test`. The surface parser, the classification, the room rendering, all against fixtures, in milliseconds, on a machine with no Claude Desktop. This is what makes the tests get run.

**Integration** — `CLAUDE_DESKTOP_LIVE=1 npm run test:integration`. Refuses to run without the flag and says so rather than passing silently, because it takes the screen. It asserts the three things a fixture cannot: the tree is real and populated, the model *agrees* with the screen (if `describe()` claims a composer, the tree must contain an `Edit`), and the precondition refuses a genuinely absent target fast, with the tree attached.

The reason integration tests are not optional here is written across this book: every reality-boundary bug in the project's history **passed a unit test and failed against the app** — the empty composer reporting its placeholder as its value, the Stop button appearing on a mere acknowledgement, the streaming notification frozen with zero output. A hermetic suite confirms we handle the tree we imagined. Only the app says whether that is the tree it produces.
