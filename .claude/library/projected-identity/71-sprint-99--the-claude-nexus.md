# Sprint 99 — The Claude Nexus

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

## What this sprint is

A **Claude runtime** — a resident process that hosts the driver and takes commands — with a **CLI** to interact with it. Doug's framing: *a sort of Claude runtime. A Claude nexus with perhaps a CLI that can be used to interact with it. It will do more than just control Claude Desktop.*

Four requirements, in his words, each of which turns out to name something the code half-has:

1. **The app is an active controller where you can do low-level things.** Not only the modelled screen actions — a way to reach underneath them.
2. **At each moment you can ask for a pretty print of a sort of object model of the screen that is on, so it is known what commands are available.**
3. **There is a way of checking that the screen is consistent with the app state, and if it is not, we start over.**
4. **That functionality is in the app, not in the command.** The CLI asks; the app answers and recovers.

And the folder: **`.claude/cli/`**. The app is `.claude/src/`; the CLI is a separate thing that talks to it.

**Prerequisite:** [Sprint 98](70-sprint-98--the-precondition-and-the-visible-tree.md), specifically its M3 — `TreeSnapshot` and `DriverError` as **serializable returned data, not file writes.** A snapshot written to a file is useless over a wire. Sprint 98 builds the nouns; this sprint builds the wire.

## Why resident, and why "nexus"

Today every interaction with Claude Desktop is a cold script. `npx tsx some-script.ts` starts a process, constructs a [`Claude`](../../src/claude.ts), opens a PowerShell, finds the window, does one thing, and dies. The expensive parts — the persistent shell, the window handle, the foreground state, the [`Session`](../../src/session.ts) that remembers which page the app is on — are rebuilt and discarded every time. [Sprint 91 leaked 100+ shells](60-sprint-91--retro.md) precisely because that lifecycle is per-script and easy to get wrong.

A resident runtime inverts it: **the expensive state becomes resident and the interaction becomes cheap.**

"Server" would undersell it and would bias the design toward HTTP-shaped thinking. It is a **nexus** because it is where the team's outward reach converges — Claude Desktop today; the teammates' [persistent thinking](../..environmentalism/08-on-brains.md) and the library's own validators and compilers later, all three being the same shape: *a long-lived context, addressed by command, answering with structured data.* **This sprint builds the runtime and the driver's commands only.** The others are named so the command surface is designed to admit them, and built later.

## What the code already gives us

Read before designing, so the sprint builds what is missing rather than what is already there.

- **[`Page.id()`](../../src/pages/page.ts)** — URL-as-identity, read fresh from the tree.
- **[`Session.inSync()`](../../src/session.ts)** — remembers the current page's URL and compares against the live one. Its annotation already states the discipline: *"It never assumes — the app may have been restarted or navigated away."* But it compares **only a URL**.
- **[`navigator.detectScreen()`](../../src/navigator.ts)** — reads the URL *and* walks the tree for open dialogs and menus (`hasOpenDialog`, `hasOpenMenu`). `resetToHome()` is a real recovery path: escape twice, close a file dialog, cancel a text dialog, leave settings, go home.
- **The page hierarchy already IS the screen model.** [P3](../reference-desk/13-the-redesign.md#p3--the-object-is-the-screen-an-unreachable-method-is-a-hierarchy-bug) guarantees it: the methods on your page type *are* the actions on that screen. `ConversationPage` carries `composer`, `response`, `messages()`, `menu()`, `rename()`, `scrollToBottom/Top()` and four sensors — and nothing that is not on that screen. `HomePage` carries `composer` and `modelPicker`. `ProjectsPage` carries `projects()`. `ProjectPage` carries `conversations()`, `files()`, `instructions()`, `composer`.

**What is missing** is not the model — it is *access* to it. Nothing exposes "what am I on and what can I do." `inSync()` cannot detect a structurally wrong screen. And there is no low-level escape hatch, so when the model is wrong today you edit code and re-run.

## The three app-level additions (requirement 4: in the app, not the command)

Every one of these lands in `.claude/src/`. The CLI calls them. **If a behaviour can be implemented in the command layer, that is the signal it belongs in the app instead.**

### 1. `describe()` — the screen's object model, derived not declared

Each `Page` gains `describe(): ScreenModel` returning what screen this is, its id, its components, and **the commands available on it** — with each command's parameters, so a caller knows how to invoke it.

**The one hard constraint: it must be derived from the page object, never hand-listed.** A hand-maintained command table is exactly the drift this project spent a day repairing — [ch.12's object mapping](../reference-desk/12-the-app.md) named classes the code had deleted two sprints earlier, and it read as authoritative the whole time. A `describe()` written by hand will lie inside one sprint. Derive it from the object (its own methods and its component properties, walked at runtime), so that adding a method to a page adds it to the model with no second edit. **Where derivation genuinely cannot reach — a parameter's meaning, say — the missing piece is declared *on the method*, beside the code, never in a separate list.**

`ScreenModel` is serializable (it is a response payload) and renders **pretty** for a person. The pretty form is the deliverable Doug asked for: run it, see the screen you are on and everything you can do to it.

### 2. `check()` — is the screen consistent with what the app believes?

`Session.inSync()` answers "is the URL the one I remembered." That is necessary and not sufficient: the URL can match while a modal is open, the sidebar is gone, or the page never finished rendering. Consistency is **three questions**, and the app answers all three:

1. **Identity** — does the live URL match what the session remembered? (`inSync()` today.)
2. **Type** — does `detectScreen()` agree with the page object we are holding?
3. **Structure** — does the screen actually *have* what its model claims? A `ConversationPage` with no composer in the tree is not a conversation page, whatever the URL says. This is [Sprint 98's precondition](70-sprint-98--the-precondition-and-the-visible-tree.md) applied to a whole screen instead of one element, and it reuses the same `TreeSnapshot`.

`check()` returns a verdict with the reason and the tree — never a bare boolean, because "inconsistent" without *what disagreed* sends you straight back to guess-and-rerun.

### 3. `recover()` — starting over is the app's job

When `check()` fails, the app starts over: dismiss overlays, return home, rebind the page, re-verify. [`navigator.resetToHome()`](../../src/navigator.ts) is most of this already and is **promoted from a script-level convenience to a first-class app guarantee**. Every command runs `check()` first and either proceeds or recovers-then-proceeds.

Two honest limits to design in, not discover: recovery **loses where you were** (that is what starting over means — the caller is told, not silently re-driven), and recovery **must not run mid-generation** ([Sprint 92](62-sprint-92--retro.md): do not minimize or navigate while a response is streaming).

### The active controller — low-level access, on purpose

Alongside the modelled commands, the app exposes the primitives: read the tree, invoke by name, send keys, read the URL. These already exist on [`Uia`](../../src/uia.ts) and [`Keyboard`](../../src/keyboard.ts); the sprint gives them a deliberate, **clearly-marked** path to the CLI.

This is not a hole in the abstraction — it is the debugging affordance Doug asked for, and it is [Sprint 98's rationale](70-sprint-98--the-precondition-and-the-visible-tree.md) again: *the easiest way to adjust the code is to look at why the current implementation fails.* When a modelled command breaks, you drop to the tree, find what the screen really says, and fix the model. **Marked as low-level in the CLI's own help**, so nobody builds a workflow on it and calls it an API — a low-level call that becomes load-bearing is a missing page method, and the fix belongs in the app.

## The command surface

Commands are **typed request/response with serializable payloads**. Three families:

| Family | Commands | Serializes? |
|---|---|---|
| **Inspection** | `screen` (the `describe()` model, pretty or JSON), `tree` (the `TreeSnapshot`, filterable), `check`, `health` | never blocks the driver queue |
| **Modelled actions** | `type`, `send`, `read`, `open`, `rename`, `move`, `newChat`, `projects` | serialized through the driver queue |
| **Low-level** | `invoke <name>`, `keys <sequence>`, `url` | serialized; marked low-level |

**`screen` and `tree` are built first, before any action command.** A runtime you can ask *"what is on the screen right now, and what can I do to it"* is a runtime you can debug the driver with — and that capability pays for the sprint even if nothing else lands.

**Modelled action commands are thin wrappers over existing View methods. No app behaviour is implemented in the nexus.** A command that cannot be expressed as an existing View call is a sign the View is missing something, and the fix belongs in `.claude/src/`. This is checkable by reading the command handlers, and it is the rule that keeps `.claude/cli/` from quietly becoming a second driver.

**Every error response carries the tree** (Sprint 98's `DriverError`).

## The state partition — the design's spine

> **What you operate on travels in the command. The live connection lives in the nexus.**

A command carries *identifiers and intent* — a conversation id, a project name, the text to type. It never carries a handle, a shell, a page object, or a window. Those are the nexus's and they outlive any one command. A client holding a session object can desynchronize from the app; a client that names what it wants cannot.

This is the [`Session`](../../src/session.ts)'s own discipline generalized: never assume, check the live tree, rebind.

## The hard constraint: there is one screen

**Claude Desktop is a single window and foreground is a global, contended resource.** Two commands cannot drive it at once — not for want of a lock, but because there is one screen and one keyboard focus, and [foreground stealing](../reference-desk/07-pitfalls.md#foreground-stealing-on-windows) is already a catalogued pitfall.

So the nexus **serializes driver commands through a single queue.** That is not a limitation to engineer around; it is the [one rule](../reference-desk/13-the-redesign.md#the-one-rule) — model a human at the screen — asserting itself at the process level. A human does one thing at a time. Two consequences to design rather than discover:

- **Long commands must not block the queue.** A send that waits for a full response can take minutes. [Sprint 92](62-sprint-92--retro.md) already solved this shape for `/think`: write and read are **separate invocations**, the write ending at streaming-start. So commands stay short and re-enterable; "wait for the response" is the client polling `read`, not the nexus holding the queue.
- **Inspection must not serialize.** `screen`, `tree`, `check`, `health` do not contend for the foreground and must answer while a driver command is in flight — otherwise you cannot inspect a stuck command, which is the moment you most need to.

## Milestones

### M1 — `describe()`, `check()`, `recover()` in the app

All three in `.claude/src/`, tested through the existing driver with no nexus in sight. `describe()` derived from the page object; `check()` returning a three-part verdict with the tree; `recover()` promoting `resetToHome()` to a guarantee. **Done when a plain script can print the current screen's model and detect a deliberately-broken state.**

### M2 — The runtime

A resident process in `.claude/cli/` that constructs one `Claude`, holds the shell and Session, and answers commands. `screen`, `tree`, `check`, `health` first; then the modelled actions; then the low-level three. Driver commands serialize; inspection does not. Errors carry the tree.

### M3 — The CLI

A thin client holding no state and constructing no driver objects:

```
claude-nexus screen [--json]        # the object model of the screen you are on
claude-nexus tree [--type Button] [--name "Send"]
claude-nexus check                  # consistent? if not, why, with the tree
claude-nexus send "What is sheaf cohomology?"
claude-nexus read
claude-nexus invoke "New chat"      # low-level
claude-nexus up | down | status
```

**Human-readable by default, `--json` for machines.** The pretty rendering of `screen` and `tree` is what makes M2 worth anything — this is what you run when the driver misbehaves, and it must be pleasant to run.

### M4 — Proven live

`/think` runs through the nexus instead of cold scripts, preserving [Sprint 92's two-process shape](62-sprint-92--retro.md), paying no cold-start cost, and leaking no shells. Witnessed live.

## Out of scope, named on purpose

- **Remote access, auth, multi-user.** The nexus binds to localhost and drives *this* machine's Claude Desktop. There is no coherent meaning to driving it from elsewhere without also solving who owns the screen. Named so nobody builds an auth layer for a socket one person can meaningfully use.
- **Thinking and library commands.** The surface is designed to admit them — that is why inspection is separated from the serial driver queue — but they are not built here.
- **Conversation import.** [Sprint 101](73-sprint-101--importing-a-whole-conversation.md).
- **A test suite.** [Sprint 100](72-sprint-100--the-cli-test-suite.md) — deliberately its own sprint, because a suite written in the same breath as the code tends to assert what the code does rather than what it promises.
- **A daemon that survives reboot, service registration, autostart.** Start it, use it, stop it.

## Open questions — honest ones

1. **How far does derivation reach?** `describe()` must derive from the page object, but TypeScript types are erased at runtime — so parameter names and meanings are not freely available. Decide early whether the derivation is runtime reflection over the instance, a build step over the source, or a small declaration *on each method*. **The answer determines whether `describe()` can drift, which is the whole point of it.**
2. **Transport.** Named pipe, local socket, or HTTP on localhost? HTTP is the most tooling-friendly and the most tempting; a pipe is the most honest about being single-machine and single-user. Chosen **after** the command surface is written — the surface is the design; the transport is a detail, and choosing it first is how a design gets shaped by its plumbing.
3. **What happens when the app is not running.** Does a command launch Claude Desktop, or fail? Launching is convenient and is also the nexus seizing the user's screen unasked. Leaning: `health` reports it, an explicit `up` launches it, action commands fail with a clear message.
4. **Queue semantics under a stall.** [The streaming check can stall](64-sprint-93--retro.md) — an accepted limitation. A per-command deadline is obvious; what is *not* obvious is what state the app is left in when a command is cancelled mid-action, and whether `recover()` is safe to run there. **The question most likely to be underestimated.**
5. **Does `.claude/cli/` travel with the identity?** The driver does ([two `src/` directories](../..environmentalism/06-on-sync.md#beware-the-two-src-directories)). A CLI is closer to a tool than to identity. Resolved before M3.

## Definition of done

1. `describe()`, `check()`, and `recover()` live in `.claude/src/`, and **no command handler implements app behaviour** — checkable by reading `.claude/cli/`.
2. `describe()` is derived from the page object; adding a method to a page shows up in the model **with no second edit**. Demonstrated by doing exactly that.
3. `check()` verifies identity, type, **and** structure, and returns the reason plus the tree on failure.
4. `recover()` restores a known state from a deliberately-broken one — witnessed live, including with a modal open.
5. The nexus runs resident, holds one shell and one `Claude`, and survives many commands **without leaking a shell** — counted, not assumed.
6. `screen` and `tree` are readable by a person without post-processing; driver commands serialize, inspection does not.
7. Every error response carries the serialized tree.
8. A real `/think` write→read cycle completes through the CLI, witnessed live.
9. The Reference Desk gains a chapter describing the nexus as built, `///:` in lockstep, **written as it is built** — [ch.12's six-sprint debt](../reference-desk/12-the-app.md) is the standing example of what deferring costs.

**Fallback:** ship `screen`, `tree`, and `check` alone. A running process that answers *"what is on the screen right now, what can I do, and does it match what we believe"* pays for this sprint by itself — it is the capability the driver's debugging has always lacked.
