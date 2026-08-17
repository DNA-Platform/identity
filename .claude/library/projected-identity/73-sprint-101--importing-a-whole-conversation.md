# Sprint 101 — Importing a Whole Conversation

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

## What this sprint is

Adapt the conversation-import logic from the old driver in **`../dna-library/.claude`** onto the current app and the [nexus](71-sprint-99--the-claude-nexus.md). Doug: *while that version is out of date, it has the necessary logic to import a whole conversation and that logic is important and needs to be adapted to this.*

He is right that it is important, and the reason is specific: **the current driver cannot read a long conversation.** [`ConversationPage.messages()`](../../src/pages/conversation.ts) reads what is rendered, and the app virtualises its message list — so what is rendered is one viewport. Everything above the fold is invisible to us. The old driver solved that, and the solution is not obvious enough to rediscover.

## Where the logic is, and what it knows

`../dna-library/.claude/agents/src/exports/import-conversation.ts` — 422 lines, with an `import-conversation` skill beside it in that repo's `skills/`. Read both before writing anything; the skill carries operating constraints the script does not state.

Five capabilities worth adapting, in order of how hard they would be to rediscover:

1. **Pagination.** `hasEarlierMessages()`, `clickLoadEarlier()`, `isLoadingContent()` — click "Load earlier messages" until none remain, waiting on a *loading* sensor rather than a timer. The current driver has none of these.
2. **The virtualised viewport walk.** Scroll to top, then page down through the conversation reading each viewport, because only viewport messages exist in the tree. This is [lazy rendering](../reference-desk/02-04-the-architecture--app-model.md#lazy-rendering) at its most consequential — the same phenomenon that is [Sprint 98's M2-sinking open question](70-sprint-98--the-precondition-and-the-visible-tree.md#open-questions--honest-ones), met here in its worst form.
3. **Dedup by turn fingerprint.** Viewports overlap, so the same message is read many times. A content fingerprint makes the walk idempotent. Without it you get duplicates and cannot tell them from a user who really did say the same thing twice.
4. **A scroll budget from "Message N of M".** The app states its own total, so the walk knows how far it has to go and when it has failed — rather than scrolling until something looks finished.
5. **Inline artifact harvesting.** Read each artifact from the panel *as it scrolls past*, because opening one by name later changes scroll position and loses the walk. Then infer file extensions and write artifacts before the conversation, so the conversation can link to them.

## What must change in the adaptation

The old script is **not** to be copied. It is pre-redesign code and it violates the architecture we spent Sprints 90–99 building. Every one of these is a real conversion, not a rename:

- **It calls a god object.** `claude.conversation.refreshMetadata()`, `claude.conversation.title`, `.url`, `.id`, `.projectName` — an always-on page property on `Claude`, plus `refreshMetadata()`, which is [infrastructure-as-method](../reference-desk/13-the-redesign.md#p1--a-method-is-a-physical-action-on-the-visible-screen) and was deleted on purpose. The new shape is: navigate to get a `ConversationPage`, read from it, and let [`Page.id()`](../../src/pages/page.ts) be the identity.
- **It is a script that orchestrates.** Load-earlier loops, scroll budgets, and dedup live in a 422-line `main()`. In the current architecture **the walk belongs on the page** — `ConversationPage.readAll()` or an iterator over messages — and the script becomes thin. If the logic stays in the script, the nexus cannot expose it as a command, which is the whole point.
- **Its sensors are controller-level and must be re-grounded.** `hasEarlierMessages`, `isLoadingContent`, and the artifact-panel reads are UIA assertions written against a version of the app from months ago. **Re-capture the trees before trusting any of them** — the reality boundary lies, and this is a screen we have no current capture of.
- **Its message model is the legacy one.** It builds `Turn` objects from [`components/turn.ts`](../../src/components/turn.ts) — the very class [Sprint 98's M1](70-sprint-98--the-precondition-and-the-visible-tree.md) migrates away from. The adaptation must land on the structured [`Response`](../../src/components/response.ts) and its `Part` hierarchy, or it re-creates the seam we are closing. **Sequencing consequence: do this after Sprint 98's `turn.ts` migration, not before.**

## What it becomes

- **On the page:** the ability to read a *whole* conversation, not a viewport — pagination, the walk, dedup, and the total-count budget, all behind a page method that verifies its own completeness against "Message N of M".
- **On the nexus:** an `import` command. Long-running, so it follows [Sprint 99's queue rule](71-sprint-99--the-claude-nexus.md#the-hard-constraint-there-is-one-screen) — it cannot hold the driver queue for the minutes a long conversation takes. Likely shaped like `/think`: start it, poll it, collect it.
- **In the library:** the write half — artifacts to disk with inferred extensions, the conversation written with links to them, a project chapter stub, the cover updated. This is [Bookkeeping](../bookkeeping/.cover.md) work and it is **mine**; the old script's file layout is a starting point, not a specification.

## Two constraints carried over verbatim from the old skill

They were written for a reason and the reason has not expired:

- **No forced focus.** The script maximizes once at launch, then checks foreground before every mutation. If Claude Desktop loses focus for any reason, it **halts** — it does not call `SetForegroundWindow`, does not retry, does not try to win the race. Focus loss means the user intervened. *This is Doug's computer.*
- **No loops, no retries at the script level.** Every step runs once; the gateway's tapering poll is the only waiting. A failure produces a diagnostic — and now, per [Sprint 98](70-sprint-98--the-precondition-and-the-visible-tree.md), the tree comes back with the error instead of being written to a file somebody has to go find.

The old skill also required Doug's explicit go-ahead per run and forbade chaining runs. **That stays.** An import drives the screen for minutes; it is not something to fire speculatively.

## Milestones

- **M0 — Read and capture.** Read the old script and its skill end to end. Capture current trees for the screens it depends on: a long conversation with "Load earlier messages" present, a conversation with an open artifact panel, the "Message N of M" indicator. **No adaptation before the captures exist** — this is the step Sprint 88 learned the hard way, and [looking at the app](54-sprint-88--retro.md) is what finally made progress.
- **M1 — Pagination on the page.** `hasEarlierMessages` / `loadEarlier` as controller sensors and actuator, driven from `ConversationPage` through the gateway with [Sprint 98's precondition](70-sprint-98--the-precondition-and-the-visible-tree.md). Done when a conversation with hundreds of messages fully loads.
- **M2 — The complete read.** The viewport walk with fingerprint dedup and the total-count budget, on the page, returning structured `Response`/`Part` data. **Done when the message count read equals the app's own stated total** — a truth-condition the app itself supplies, which is the best kind.
- **M3 — Artifacts.** Inline harvesting during the walk, extension inference, artifacts written before the conversation so links resolve.
- **M4 — The library write and the command.** Conversation and artifacts into the library per Bookkeeping; the nexus `import` command wrapping it, non-blocking.

## Open questions — honest ones

1. **Is the viewport walk still necessary?** The old script's scroll budget and dedup assume the virtualisation behaviour of a months-old build. Perhaps the tree now renders more, or less. **M0's captures answer this before M2 is designed** — and if the app changed, the adaptation is smaller than the old script implies.
2. **What is the completeness truth-condition when "Message N of M" is absent?** The budget depends on the app stating its own total. If a screen lacks it, the walk needs a different stopping proof — and "we scrolled and nothing new appeared" is exactly the [loop-until-dry](70-sprint-98--the-precondition-and-the-visible-tree.md) reasoning that can stop one viewport too early.
3. **Where do imported conversations live?** The old script wrote to `library/{account}/conversations/` in that repo. The [Thoughtfulness](../thoughtfulness/.cover.md) conventions have moved since, and an imported conversation is not the same object as a *thought*. **Mine to settle, before M4.**

## Definition of done

1. A long conversation — one with "Load earlier messages" — imports **completely**, verified against the app's own stated message count.
2. The walk is idempotent: importing twice produces the same content, no duplicated turns.
3. Artifacts are written with correct extensions and the conversation's links to them resolve — checked by the [link checker](../..environmentalism/05-on-validation.md).
4. The read produces structured `Response`/`Part` data. **No new dependency on [`turn.ts`](../../src/components/turn.ts) is introduced** — checkable by grep.
5. Pagination and the walk live **on the page**, not in a script; the script and the nexus command are thin.
6. Focus loss halts the import. Provoked and witnessed, not assumed.
7. Every sensor it relies on is grounded in a tree captured **during this sprint**.
8. The Reference Desk describes the complete-read capability, `///:` in lockstep.

**Fallback:** if the walk cannot be made reliably complete, ship pagination plus the viewport read and **state plainly that long conversations import partially**, with the count mismatch reported to the caller. A partial import that says so is useful; one that silently drops the middle of a conversation is worse than none — it would put a lie in the library, and the library's whole value is that it does not.
