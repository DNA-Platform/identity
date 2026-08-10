# Sprint 102 — Lifting the App into the CLI

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

## What this sprint is

Lift the app's functionality into the CLI, one capability at a time, until you can drive Claude Desktop by moving through it. The runtime and its conventions are specified in [The Runtime — the CLI](../reference-desk/14-the-runtime.md); this sprint is the lift.

**Every milestone carries its own testing.** Not a test milestone at the end — a hermetic layer and an integration layer inside each one. That is not ceremony: this project's entire bug history is [reality-boundary bugs that passed a unit test and failed against the app](62-sprint-92--retro.md). A capability lifted without a live check is a capability we *believe* works.

## What already exists

Delivered in [Sprint 98](70-sprint-98--the-precondition-and-the-visible-tree.md) and the opening of this one:

- **[`TreeSnapshot`](../../src/tree.ts)** — the screen as a value: query, print, serialize. `Claude.tree()` answers *what is on screen right now*, any time, no failure required.
- **The gateway's third beat** — `precheck → act → verify`. A `target` on `act()` reads the tree before firing; a missing element refuses immediately, names what it expected, carries the tree, and the action never happens. `target` is optional so existing call sites are untouched.
- **[`.claude/src/cli/`](../../src/cli/)** — `surface.ts` (parses `.claude/src/**` for signatures), `describe.ts` (builds the screen model from live instance + source), `render.ts` (prints the room). `demo-room.ts` renders a real screen from real source with no app running.
- **34 hermetic tests**, and a **guarded integration harness** that refuses to run without `CLAUDE_DESKTOP_LIVE=1`.

Two bugs already found by running it, both invisible to inspection and both now regression-tested: the `\bPage\b` matcher that classified **every door as a look**, and the surface parser that missed **constructor parameter properties**, taking the Conversation screen's only exit with them.

## Milestones

Each has a **Lift**, a **Hermetic** test set, and an **Integration** test set. A milestone is not done until all three are.

### M1 — Moving: `look`, `where`, `go`

The loop that makes it a place. Bind to the live screen, print the room, take an exit, print the new room.

- **Lift.** Bind the current page via [`Claude.currentPage()`](../../src/claude.ts) — the app's own reconstitute-and-confirm, not the CLI's guess. `go <exit>` invokes an exit command and re-binds from what it returns. Observations shown in the room (`title`, message count) come from **look** commands the model already knows about, not from a hand-written list — otherwise the room drifts the way a command table would.
- **Hermetic.** Binding a fake page prints the right room; taking an exit re-renders the destination; an unknown exit lists what is here; an ambiguous name is reported, never guessed.
- **Integration.** Launch, `look`, confirm the printed screen matches [`detectScreen()`](../../src/navigator.ts) and the tree. Take one real exit (sidebar → projects) and confirm the room changes to `Projects`. **Read-only; nothing sent.**

### M2 — Doing and looking: `do`, and typed arguments

- **Lift.** `do <command> [args]` invokes a **look** or a **do** and renders the result. Arguments are checked against the signature the surface already parsed, so a missing or extra argument is refused with the real signature rather than a stack trace. A **do** re-prints the room after acting, because a change you cannot see is a change you cannot verify — [every action gets a confirmation read](../reference-desk/05-coding-philosophy.md).
- **Hermetic.** Arity and optionality enforced from parsed signatures; a `look`'s return rendered readably for strings, arrays and objects; a thrown [`DriverError`](../../src/errors.ts) rendered with its tree via `.detail`.
- **Integration.** Run every **look** on each of the four screens against the live app and assert none throws — the cheapest possible detection of an app update, and it touches nothing.

### M3 — The tree, always available: `tree [filter]`

- **Lift.** `tree` prints the live snapshot; `tree --type Button`, `tree --name Send`, `tree --contains inexplicable` filter it. Available on every screen and while any command is in flight, because the moment you most need to inspect is when something is stuck.
- **Hermetic.** Filters compose; an empty tree prints *why* it is empty rather than nothing; `--json` parses.
- **Integration.** `tree` against the live app returns a populated snapshot containing the elements the driver's sensors depend on (`New chat`, the composer's `Edit`). **This is the canary for an app update** and should run first when anything else fails.

### M4 — Handing things over: `copy`

- **Lift.** `copy <command>` runs a look and puts the result on the clipboard, then says so — *"4,182 characters copied to your clipboard."* A read that produces a document should hand you the document, not flood the terminal. The clipboard is already the driver's paste channel ([`Keyboard`](../../src/keyboard.ts)); this is the same road in the other direction.
- **Hermetic.** The clipboard write is behind a seam so it can be faked; the confirmation reports the true size; a look returning nothing says so rather than silently clearing the clipboard.
- **Integration.** Copy a real response, read the clipboard back, confirm it round-trips. **Note the known hazard** ([ch.7](../reference-desk/07-pitfalls.md#clipboard-collisions)): the clipboard is shared with Doug. Never write to it without being asked, and say what was placed there.

### M5 — Sending, with Doug watching

The first milestone that writes to the app, and deliberately last.

- **Lift.** `type <text>` then `send` as separate commands — [P1/P2](../reference-desk/13-the-redesign.md#p1--a-method-is-a-physical-action-on-the-visible-screen): there is no method that types *and* sends. `send` returns the `ConversationPage`, so the room re-prints as the conversation. Then poll for streaming through the page's own sensors; the CLI never waits on its own.
- **Hermetic.** `send` is refused when the model says it is not on this screen; the streaming wait is the page's, and the CLI is asserted to hold no polling of its own.
- **Integration.** One real send in a scratch conversation, **only on Doug's go-ahead**, following the [Sprint 92 shape](62-sprint-92--retro.md): the send ends at streaming-start, not completion, and the window is not minimized before real text appears.

## Rules every milestone follows

Lifted straight from the book, because each was paid for once already:

- **No app behaviour in the CLI.** A handler is a thin wrapper over an existing View method. If a command cannot be expressed as one, the View is missing something — [add the method, don't bypass the stack](../reference-desk/05-coding-philosophy.md).
- **No hand-maintained command list.** If you add a name to an array so the CLI will offer it, the derivation has a gap; closing the gap is the work.
- **No fixed waits, ever.** Poll a sensor. A `setTimeout` is a guess about the app's speed.
- **Minimize in a `finally`, before closing the shell**, and close the shell or it leaks. [Sprint 91 leaked 100+.](60-sprint-91--retro.md) A test that leaks a shell has failed even if it passed.
- **Never force focus.** If Claude Desktop loses foreground, stop. Do not race the user for their own screen.
- **Docs move with the code.** [Ch.14](../reference-desk/14-the-runtime.md) grows in the same commit as the capability, `///:` annotations in lockstep. [Ch.12's six-sprint debt](../reference-desk/12-the-app.md) is the standing example of what deferring costs.

## Open questions — honest ones

1. **How does a `look` returning a rich object render?** `messages()` gives `ChatMessage[]`, `response.parts()` gives a `Part` hierarchy. A generic dump is unreadable; a per-type renderer is a hand-maintained list by another name. Leaning: let each class render itself (`toString()`), which puts the decision next to the data — but that is a change to `.claude/src/`, so it is app work, not CLI work.
2. **Does the CLI bind a page per command, or hold one?** Holding is faster and can desynchronize; re-binding every time is honest and costs a tree read. [`Session.inSync()`](../../src/session.ts) already exists to answer "are we still there" — the question is whether the CLI trusts it or re-reads.
3. **Where does `.claude/cli/` live in the sync?** The driver is identity and travels ([two `src/` directories](../..environmentalism/06-on-sync.md#beware-the-two-src-directories)); a CLI is closer to a tool. Unresolved from [Sprint 99](71-sprint-99--the-claude-nexus.md), and it decides whether the CLI reaches every project or stays here.
4. **When does the resident runtime arrive?** This sprint keeps the cold-start cost — every command builds a `Claude`, opens a shell, finds the window. That is tolerable for inspection and painful for a sequence of moves, which is the argument for [Sprint 99](71-sprint-99--the-claude-nexus.md) landing next.

## Definition of done

1. You can `look`, `go`, `do` and `tree` your way around the live app, and every move prints the full room.
2. **No command handler implements app behaviour** — checkable by reading `.claude/cli/` and finding no UIA, no gateway, no waiting.
3. **No hand-maintained command list exists** — checkable by adding a method to a page and watching it appear untouched.
4. Every milestone has hermetic tests **and** integration tests, and the integration suite still refuses to run unattended.
5. Every **look** on all four screens runs live without throwing.
6. `copy` round-trips through the real clipboard and reports what it placed there.
7. [Ch.14](../reference-desk/14-the-runtime.md) describes the runtime as built, written in the same commits.

**Fallback:** ship M1–M3. Moving, doing, and seeing the tree is a usable instrument on its own — it is the thing the driver's debugging has always lacked. `copy` and `send` can follow. **Do not** ship a `send` that has never been witnessed live; that is [Sprint 89's table](56-sprint-89--retro.md) again.
