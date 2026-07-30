# The inverted gateway

- **author:** [Arthur](../arthur-or-the-shape-of-everything/.cover.md)

---

*A structural audit of `.claude/src/` against [The Redesign](../../../../reference-desk/13-the-redesign.md), read cold before exploring the codebase with Libby, then sharpened in the room when the measurement moved the design. Dated 2026-07-28. Links up to `src/` are five levels deep — the source lives in `.claude/src/`, one above `library/`; links to Reference Desk chapters are four.*

The redesign describes a strict one-directional graph: Scripts → View → **Gateway** → Controllers → Infrastructure. The gateway sits *above* the controllers; controllers are blind sensors and actuators; the View orchestrates every controller call through the gateway. I read the layer chapters, then went to the code to check the shape against what is actually there — because trusting the diagram is exactly how I over-abstract. The shape is not "the redesign, unfinished." It is inverted at one specific joint, and the code sits *between* two chapters that both already describe a past.

## The joint: the gateway lives below the controllers

The `Automation` interface ([automation.ts](../../../../../src/automation.ts)) bundles seven things — `shell, window, gateway, diagnostics, uia, keyboard, navigator` — and injects the **whole bundle** into every controller. Because a controller holds `auto`, it reaches `auto.gateway` as easily as `auto.uia`. Nothing structural forbids the violation; the bundle *is* the violation. The gateway, which the diagram places above the controllers, is physically handed to them from below.

The consequence, measured: **51 gateway calls across 7 of 8 controllers.** Only [composer-controller.ts](../../../../../src/controllers/composer-controller.ts) is genuinely clean (0) — its only mention of the word is its own annotation saying "No gateway." [conversation-controller.ts](../../../../../src/controllers/conversation-controller.ts) (13) and [project-controller.ts](../../../../../src/controllers/project-controller.ts) (13) are the worst; [chat-list-controller.ts](../../../../../src/controllers/chat-list-controller.ts) still has 2 despite [the redesign](../../../../reference-desk/13-the-redesign.md) naming it a finished reference model. The map is behind the territory — and holding up an unclean reference model does active harm, because anyone cleaning the other six by imitation copies the violation.

## What the inversion did: the god object sank, it did not die

This is the finding I did not expect. The View pages went *thin* — [pages/conversation.ts](../../../../../src/pages/conversation.ts) is 136 lines, [pages/project.ts](../../../../../src/pages/project.ts) is 66. That looks like progress. But [controllers/conversation-controller.ts](../../../../../src/controllers/conversation-controller.ts) is **530 lines**. The orchestration didn't rise into the View where the target wants it; it *sank* into the controller, dragging the gateway down with it. The pages got clean by pushing their complexity one layer down, in the wrong direction. A thin View over a fat, gateway-laden controller is the redesign photographed upside down: progress on the file-size metric, regression on the actual boundary.

## What has already landed (the code moved past its own doc)

The redesign's removal plan references `pages/projects.ts` and `pages/project-detail.ts` — both already deleted. Target component classes already exist as real exports: `Response`, `TextPart` (a `Part` subclass), `Sidebar`, `ProjectChoice` (the move-conversation modal), `ModelPicker`, `ProjectFile`. [components/composer.ts](../../../../../src/components/composer.ts) no longer imports `Uia` — the specific breach the redesign named is fixed. No controller imports another. So the *object model* is perhaps half-built, and the code is ahead of the doc in places and behind it in others. Trust the code over the chapter.

## What has not landed (the true gap, in order of leverage)

1. **The gateway is seated below the controllers.** Invariant 3 (gateway in every View method, never in a controller) and invariant 5 (controllers blind) are broadly false. This is the root, not a symptom.
2. **Orchestration lives in the controllers, not the View.** The 530-line `conversation-controller` is the god object relocated. Blinding the controllers means lifting that orchestration up, not deleting it.
3. **Some View components skip controllers entirely and touch `auto.uia` directly** — [files-pane.ts](../../../../../src/components/files-pane.ts) (10), [project-file.ts](../../../../../src/components/project-file.ts) (8), [text-content-dialog.ts](../../../../../src/components/text-content-dialog.ts) (6). These are View classes that never got a controller. Invariant 4 broken.
4. **`window.ts` is fully synchronous** (0 async methods, imports `powershellSync`). Invariant 6 breach; it cascades to `gateway.requireForeground` and `launch()`.
5. **`claude.ts` holds infra + sidebar + two controllers**, not "window + infra only." Partway to target — the page imports are `type`-only, which is the good direction.

## The factorization — and the second strand I missed

The migration is not "add discipline to eight controllers." It is **re-seat one dependency edge.** Change what `Automation` injects into controllers, hand them only the blind primitives, and all 51 gateway calls become compile errors, orchestration is *forced* up into the View, and the redesign's invariants stop being aspirations and become type-checked facts. Adam named the narrowed bundle **`Instruments`** — the reasoning is in [ch.3](03-the-tree-is-the-contract.md#the-name-instruments); I agree with it.

But when I measured what controllers actually reach for — `uia` 134, `navigator` 51, `gateway` 51, `keyboard` 46, `shell` 2 — the design moved under me, and I would rather find this now than at stage six. Look at [navigator.ts:21-26](../../../../../src/navigator.ts#L21-L26): **`Navigator` holds a `Gateway`.** So removing `gateway` from the bundle does **not** close the hole — a controller still reaches it transitively through `auto.navigator.gateway`. The inverted edge has two strands, not one.

The second strand unravels cleanly, though. Of those 51 navigator calls in controllers, **46 are `requireScreen`** — the runtime screen guard the redesign already sentences to deletion under [P3](../../../../reference-desk/13-the-redesign.md) (the page *type* is the guard, not a runtime check). Only **5 are the legitimate `detectScreen`**, which needs nothing but `uia`. So the staging is: kill the 46 `requireScreen` calls → `Navigator` sheds its `Gateway` dependency and becomes a pure `uia` consumer → *then* it is safe to include in the blind bundle. Navigator is a **staged removal, not a stage-one member.** Stage-one `Instruments` is `{ uia, keyboard, shell }` — the genuinely blind primitives — with navigator folded in only after `requireScreen` dies.

This is the shape I hear: not a long list of fixes but a single inverted edge — carrying one hidden second strand — that, once both are cut, makes the rest of the rules enforce themselves. The work is Adam's (the wires) and Libby's (the book that must catch up to the code); mine is to name the edge and the strand. That is the whole of my job here.
