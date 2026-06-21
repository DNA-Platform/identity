# Sprint 92 — The Driver, Live

- **author:** [Libby](../..teamsmanship/..team/libby/libby-and-the-tended-garden/.cover.md)
- **coauthor:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md), [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md), [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [Queenie](../..teamsmanship/..team/queenie/queenie-and-the-specification/.cover.md)

---

## What this sprint is

Build the [redesigned driver](../reference-desk/13-the-redesign.md) against the **live app** and prove it with the [fourteen acceptance tests](55-sprint-89--think-acceptance-tests.md). [Sprint 91](59-sprint-91--the-app-driver-build.md) delivered a compiling foundation and a complete design; this sprint makes it run. **Paired:** Claude and Adam wrote the driver, so they pair with Queenie while she tests — authors carry intent, the tester holds the verdict.

## The test plan — Doug's requirements, verbatim

These are the gate. The driver is not done until each passes reliably against the live app. Enumerated exactly as Doug wrote them, each mapped to what finishes it this sprint.

1. Verifying that the send method actually returns control to you after it sends. → *M2: the send unit returns at streaming-start.*
2. That it can verify sending on long responses — most responses are long. → *M2/M3: `isStreaming()` keys on real text, length-independent.*
3. That it is robust to my typing — interactions with textboxes should be cleared — and such operations should be in the view model UI. → *M2: `Composer.clear()` waits for typing stability; it's a View method.*
4. That before doing anything, state is verified, and as much as possibly this should be behind the abstraction of the app and enforced with gateways. They are the gateway to successful actions. → *All: `gateway.act` + typed pages; foreground hardening (target 4).*
5. That we can create a new conversation topic on send. → *M2: `Sidebar.newChat() → HomePage → send → ConversationPage`.*
6. That we can navigate to an existing conversation topic in the Claude project. → *Post-M3: `ProjectDetailPage.conversations.find(title)?.open()`.*
7. That we can sanity check that it is the right conversation based on previous messages. → *Post-M3: read `ConversationPage.messages`, compare content.*
8. That we can send a message and wait for actual text to start streaming before handing back control. → *M2/M3: `Response.isStreaming()` on real text, **never the "thinking" ack**; do not minimize before it.*
9. Read should, if new, name the conversation by topic and move it into the project. → *Post-M3: `ConversationMenu.rename(): EditField` + `addToProject(): ProjectPicker`.*
10. Read should return the message to Claude so he can do with it as discussed. → *M3: the structured `Response` (`content`/`toMarkdown()`) returned to the skill.*
11. Before writing, after sending, before reading, while waiting, scroll to bottom should be pressed whenever available. → *M3: `ConversationPage.scrollToBottom()` at each step.*
12. On read, since you can't hand control back, there's no point checking in a loop. Just have Claude do what he can and then do a polling wait for the response to finish. That it's finished is something app should surface. → *M3: `gateway.waitFor(page.isResponseComplete)`; the app surfaces "finished" as a content sensor, not a transient indicator.*
13. Failure should be reported with clear messages and context and maybe the UIA tree so that you guys can debug. → *Cross-cutting: the gateway's `diagnostics.captureOnFailure` (screenshot + UIA dump) on every verify failure.*
14. If you time out waiting, I should be able to tell Claude that he should resume checking the message and recover what he was doing. → *Cross-cutting: the conversation id in the state file + `launch(): Page` reconstitute + open-by-id, so a later invocation resumes the read.*

The team added five more in [Sprint 89](55-sprint-89--think-acceptance-tests.md#tests-surfaced-by-the-team) (15 shell serialization, 16 background reading, 17 message boundary, 18 empty response, 19 state cleanup). All 19 are the gate; Queenie holds the verdict, and "reliably green" is the bar — green-once is not a pass, especially 15 and 16.

## What's next to finish the testing plan

The tests can't be written until the objects they assert against exist and the reality boundary is hardened — that's what the milestones below build, in order. Each test is then written fresh against the new driver and run live, paired: Claude and Adam explain what the code intends, Queenie holds whether it passed.

## Grounded targets (from Sprint 91's live testing)

Not guesses — things the running app already showed us ([retro](60-sprint-91--retro.md#live-test-findings-and-process-hygiene)):

1. **Screen detection is red.** `detectScreen()` returns `unknown` against the live app — the URL read doesn't match. M1 can't reconstitute a typed page until this is fixed. (Diagnostic: `src/scripts/spike-detect.ts`.)
2. **`Window` must go async.** `powershellSync` failed the CLR (HRESULT 80004005) under load — [invariant 6](../reference-desk/13-the-redesign.md#layer-invariants--the-sanity-test) proven in the field. Convert `Window` to the async persistent shell; cascade `Gateway.requireForeground()` and `launch()` to async.
3. **Cleanup discipline — minimize, then close the shell.** Two parts. (a) Every test/diagnostic **minimizes the window when done** to return Doug's computer — `window.minimize()` in a `finally`, *before* closing the shell (minimize needs the shell). Not during a pending send — minimizing while a response is mid-generation can hang it. (b) Every script then closes its shell (`shell.close()`), or it leaks — Sprint 91 leaked 100+ shells this way. A diagnostic attached to a *running* app closes the **shell**, not the app (`exit()` closes the window).
4. **Foreground stealing is racy.** `maximize()` intermittently throws "app is not foreground" — Windows blocked the foreground steal. One probe won the race, the next lost it. The launch/foreground path needs a real acquire-foreground retry (the [Alt-key + ShowWindow + SetForegroundWindow](../reference-desk/04-02-platform--win32.md) dance) with verification, not a single attempt — and it must hold before any read.

## The structured response (Doug's directive)

The response is read in **real time through a typed structure**, never by grabbing root text and parsing it. The old `components/turn.ts` already has the shape — `Content` (ordered text/code blocks, `toMarkdown`), `Thinking`, `Artifact`, and a `Response` composing them — but its methods throw "Not connected to automation." **Revive and wire it**, don't reinvent or flatten ([ch.13](../reference-desk/13-the-redesign.md#reconcile-the-fragmented-message-model--into-a-structure-not-root-text)):

- `Response` is a structure: `content` blocks, a `thinking` block, `artifacts` — each a property-like accessor.
- `Response.isStreaming(): Promise<boolean>` grabs the tree and reports whether anything is still generating — keyed on **real generated text**, never the "thinking"/"responding" ack (which can hang, especially after minimize, per [decision #2](../reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions)).
- `Response.toMarkdown()` composes the structure into sectioned markdown (thinking, response, artifacts).
- **Parity with the Reference Desk:** document this in [Reading Responses](../reference-desk/03-02-operations--reading.md) as it's built — code and chapter in lockstep, `///:` annotations current.

## Milestones

- **M0.5 — Foundation fixes:** screen detection green; `Window` async (with the gateway cascade); shell-cleanup discipline.
- **M1 — `launch(): Promise<Page>`** via reconstitute-and-confirm, returning the correct typed page for the real screen.
- **M2 — Send from home → `ConversationPage`.** The send *unit of work* ends when **real streaming text appears** (via `Response.isStreaming()`), not at the click and not at the ack; nothing minimizes or hands back before then. Requirements 1 and 8.
- **M3 — Read the response in real time** through the structured `Response` (content + thinking), `toMarkdown()` for the whole; poll-wait for completion with the app surfacing "done" (`isResponseComplete()`), content-verified, scroll-to-bottom each step. Requirements 10, 11, 12.
- **Then:** execute the [removal plan](../reference-desk/13-the-redesign.md#removal-plan-file-by-file); `/think` rebuilt on the new driver (Session unfrozen); [ch.10](../reference-desk/10-architecture-patterns.md)/[ch.12](../reference-desk/12-the-app.md)/[Thoughtfulness ch.4](../thoughtfulness/04-the-code.md) corrected from the built code; the fourteen acceptance tests written fresh and **reliably** green.

## Definition of done

The driver runs end to end against the live app; the response is read in real time through the structured `Response`; M1–M3 and the fourteen tests pass reliably (Queenie's verdict); `/think` works on the new driver; the Reference Desk describes the code as built, `///:` in lockstep. **Fallback:** if the full think flow can't go reliably green, ship a degraded manual `/think` and write it down — no silent "done."
