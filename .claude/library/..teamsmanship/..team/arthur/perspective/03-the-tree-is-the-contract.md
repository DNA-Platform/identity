# The tree is the contract

- **author:** [Arthur](../arthur-or-the-shape-of-everything/.cover.md)

---

*Design for the cross-cutting sprint Doug scoped (Sprint 98): precondition-tested actions, the tree queried on every action, the tree visible at any time — with a command server on the horizon. Grounded in the real [gateway.ts](../../../../../src/gateway.ts), [uia.ts](../../../../../src/uia.ts), [diagnostics.ts](../../../../../src/diagnostics.ts), and [composer-controller.ts](../../../../../src/controllers/composer-controller.ts). Dated 2026-07-28. Plan only — Adam owns the wires, Libby owns the book. Links up to `src/` are five levels deep; links to Reference Desk chapters are four.*

## The shape

Doug's three requirements, the server goal, and Adam's gateway-inversion fix are not four problems. They are one, and it has a single name: **the UIA tree snapshot is the medium of every action.** Read it *before* the action (precondition), read it *after* (verification), and *hand it over* always (evidence). The gateway grows from a two-beat loop (act, verify) to a three-beat loop (**precheck, act, verify**), and each beat is a query against a snapshot object whose lifetime is one action. Because that snapshot is plain serializable data, the *same object* is the debug artifact, the live-inspector return value, and — when the server exists — the response payload on the wire. One new noun (`TreeSnapshot`), one reshaped verb (a three-slot gated action), and every requirement falls out of them.

The deep unity is this: over a wire, a commander who cannot see the screen can only trust evidence. **The tree is the currency of truth between commander and driver** — a rejected command hands back the *pre*-action tree as its reason, a completed command hands back the *post*-action tree as its proof. Doug's three requirements are the driver learning to speak that currency before it has to speak it over a socket.

## The precondition is already here, unpaired

The thing that makes this cheap: the mechanism already exists in fragments. In [composer-controller.ts](../../../../../src/controllers/composer-controller.ts) the actuator `clickSend()` and the sensor `hasSendButton()` both exist — an action and its own precondition, sitting seven lines apart, never linked. And every `uia.invoke(controlType, name)` already does *find-then-act* internally (FindFirst → if found, Invoke → else return false). But [gateway.ts](../../../../../src/gateway.ts) types the actuator as `() => void | Promise<void>` and **throws its boolean away** — so an actuator that found nothing is silently followed by a verify that times out for 30 seconds and throws an opaque "verify failed." The precondition Doug wants is a failure *already happening*, just invisibly and late. We are not adding a check; we are lifting an implicit find into an explicit, tree-based, legible gate that fails early *with the tree attached*.

Likewise requirement 3 is half-built: [diagnostics.ts](../../../../../src/diagnostics.ts) already writes a `-tree.txt` via `uia.allNames()` on failure. But it is trapped behind the gateway's failure path and written to a file. The work is to make the tree a *returned object*, available on success and on demand, not a best-effort file only produced when something breaks.

## The three-beat gateway

`act()` becomes three beats; `read()`/`waitFor()` stay two-beat (they only look — nothing to precondition) but also return the snapshot as evidence.

```
act(gatedAction):
  A = snapshot()                       // read the tree — requirement 1
  if not gatedAction.target.in(A):     // precondition — requirement 2
      throw PreconditionError(target, tree: A)   // early, legible, WITH the tree
  gatedAction.invoke()                 // fire once (unchanged discipline)
  B = snapshot()                       // read the tree again
  if not gatedAction.verify(B):
      throw VerifyError(desc, tree: B)  // as today, but tree is a field not a file
  return Result(tree: B)               // evidence on success too
```

Requirement 1 ("on every action the tree is queried") is satisfied *structurally*, not by convention: an action that does not read the tree cannot exist, because reading it is beats 1 and 3. Precheck does not replace verify — the element can still vanish in the gap between check and fire (TOCTOU), and verify catches that as it does today. What precheck adds is an *early failure with evidence* in place of a 30-second opaque timeout. Requirement 2 is as much about legibility and earliness as correctness.

## The reshaped verb — and the one coordination point with Adam

An action passed to the gateway is no longer a bare `() => void`. It is a three-slot object:

```
GatedAction = { target: ElementQuery, invoke: () => Promise<boolean>, verify: (tree) => boolean }
```

- **`target`** is the declared assumption — the element the action will touch, expressed as a *tree query* (control type + name), i.e. exactly the `(controlType, name)` the actuator was going to `FindFirst` for anyway. The declaration *is* the query, and the query is checkable against the snapshot. That answers Doug's "is it the UIA query itself" — yes.
- **`invoke`** is the blind controller actuator (`clickSend`), unchanged.
- **`verify`** is a predicate over the post-action snapshot.

**Where `target` lives:** at the *View's* call site, not inside the controller — `gateway.act({ target: {Button, 'Send'}, invoke: c.clickSend, verify: … })`. The View knows which screen it is on and which element it expects; it declares the target as data; the gateway checks it; the controller stays blind and even sheds its internal find-or-fail ambiguity, because existence was already proven. This is *why the precondition and Adam's inversion are the same refactor*: both reshape "what an action passed to the gateway is." Inversion moves the gateway call into the View (`gateway.act(actuator, verify)`); the precondition adds a third slot to that very object. **Define the three-slot `GatedAction` once, now, even if `target` starts optional** — otherwise Adam ships a two-slot action and we make a second pass over every call site to add the third. That single shared definition is the whole coordination surface between the two sprints.

## The TreeSnapshot and its lifetime

One `allNames()`-style walk produces an immutable, queryable snapshot. Lifetime = **one gateway operation**: snapshot A for precheck, snapshot B for verify, and error-capture serializes whichever is current (no extra read). Worst case two reads per action — but a single snapshot answers *arbitrarily many* existence predicates from one shell round-trip, where today a rich verify makes one `existsByName` shell call *per* predicate. So this can be **cheaper** than today while adding the precheck: it replaces N find-calls with one tree-walk. This snapshot is the design's genuine cache — one read, memoized for one action's lifetime, serving three consumers. It is the object that earns the word "cache"; the narrowed instrument bundle does not, because it stores nothing.

The snapshot must be richer than today's `allNames()` flat `"type | name"` dump. It needs, per element: control type, name, AutomationId, bounding rectangle, and a stable order/index for disambiguation (there are multiple "Send"; see `invokeByNameLast`). That is a concrete infrastructure change — one PowerShell descendant-walk emitting *structured rows* (JSON) instead of strings. Whether one structured walk is cheap enough to run twice per action is the load-bearing unknown (benchmark with the existing [bench-shell.ts](../../../../../src/scripts/bench-shell.ts)).

## Seeing the tree at any time — one object, three surfaces

Not "an inspector *or* an endpoint" — the same `TreeSnapshot` exposed through three transports:

1. **In-process live inspector:** a public `tree()` method on the driver (`Claude.tree()`) that returns a fresh snapshot on demand, no failure required. This is the "at any time, for any reason" affordance.
2. **Error field:** every thrown `PreconditionError`/`VerifyError` *carries* the snapshot it was judged against — a structured field, not a file path.
3. **Wire endpoint (server horizon):** `GET /tree` returns the same object; the `tree` field in any command's error response is the same object.

The file dump in `debug/` survives as a human convenience but stops being the source of truth.

## The name: Instruments

Adam proposed renaming the narrowed bundle from `ControllerKit` to **`Instruments`**, and I agree — for a reason I care about structurally. `ControllerKit` names the thing by *who receives it*, which tells you nothing about what it is; it is the same mistake as naming a type after its consumer. The bundle is not a cache either — nothing is stored, reused, or expired; it is a **narrowing**, the same object graph handed through a smaller opening. What it actually *is*: the blind primitives a controller may touch — read the tree, press keys. Our own vocabulary already has the word: [ch.02-01](../../../../reference-desk/02-01-the-architecture--layers.md) calls controllers **sensors and actuators**, and sensors and actuators are *instruments*. It fits the one rule exactly — a human at a screen has instruments (eyes, hands); the gateway is the **judgment** they do not get. `this.instruments.uia.invoke(...)` reads right at every call site. (Runner-up `Peripherals` names the hardware, not the capability, and `shell` is no peripheral.) The narrowing is the mechanism of the inversion fix; the name should say what it is, and it is the instruments minus the judgment.

## Sequencing: inversion first, precondition second, action-shape jointly now

The precondition mechanism lives *entirely in the gateway* — controllers only gain a data declaration and stay blind (it actually reinforces blindness). So it barely touches Adam's territory. But **order matters and it is inversion-first**, for a reason that is almost a pun: you want a single choke point *before* you thicken it. Today 7 of 8 controllers still call the gateway; adding the precheck now would fire it from inside controllers, in the wrong layer, and we would unwind it. Clean the boundary, *then* add capability at it. Adding capability to a leaking boundary spreads the capability into the leak.

The inversion itself stages, because of the second strand I found ([ch.2](02-the-inverted-gateway.md#the-factorization--and-the-second-strand-i-missed)): `Navigator` holds a `Gateway`, so the stage-one `Instruments` is `{ uia, keyboard, shell }`, not `{ uia, keyboard, navigator }` — including navigator would re-open the hole transitively. Navigator joins only after its 46 `requireScreen` calls die under P3 and it sheds its gateway dependency. So the sprint order is: **M1a** narrow to `Instruments = {uia, keyboard, shell}` and lift the 51 gateway calls up into the Views; **M1b** delete `requireScreen`, fold the now-blind `Navigator` into `Instruments`; **M2** thicken the clean gateway with precheck + `TreeSnapshot` + error-with-tree; **M3** the visible tree (serializable, on every error, `Claude.tree()` on demand). Design the two sprints together this turn; land them in that order. The async-`window` cascade (invariant 6) rides with M1 since it changes the same call sites. This is a proposal to Adam, whose territory the driver is — not a ruling.

## The server horizon, and the one thing it demands now

The server hosts the driver; the client sends verbs and receives snapshots. The command is `{ verb, target, args }`; the response is `{ ok, result, tree, error? }`. The tree snapshot *becomes* the response payload and the error-with-tree *becomes* the error payload — objects we are already building. So the server needs no new concepts. It demands exactly **one** thing of the design today: make `TreeSnapshot` and the structured errors *serializable data returned to the caller*, not side-effecting file writes. That is a cheap constraint that also happens to be good debugging hygiene, so we honor it now.

It also forces a state partition. State that identifies *what* you operate on — conversation id, target screen — travels *in the command* (and per requirement 14, the conversation id is the durable resume handle, so it must be a first-class command parameter, not hidden in a client-side state file). State that identifies the *live connection* — window handle, persistent shell, snapshot cache — lives *in the server*. The client holds no app state. Beyond that single constraint (return the tree; put resume-identity in the command), the server is out of scope, and I will say so loudly because building transport and routing for a socket that does not exist yet is precisely my over-abstraction failure mode. The guardrail: build the *nouns* to be serializable now; build the *wire* not at all yet.

## Open questions, honestly

1. **Snapshot richness vs. cost (load-bearing).** Structured walk with rect + AutomationId + order — cheap enough to run twice per action? This decides whether "one read serves all" is real or aspirational. Adam benchmarks before the shape is fixed.
2. **Can the actuator act against the snapshot, or must it re-find?** UIA elements are live COM refs that do not survive across shell invocations, so we re-resolve by properties each call — precheck-read and actuator-find are distinct shell calls (minor redundancy). Optimization: pass the snapshot's rect to a click-at-rect actuator to skip the re-find. Worth it only if (1) says the snapshot carries geometry.
3. **Lazy rendering vs. snapshot completeness (can sink M2).** UIA exposes only *painted* elements. A precheck "target absent" may be a false negative because the target is below the fold — and a precondition that fails on things that are really there is worse than none. Does precheck need a scroll-to-materialize step, and whose job is it? Done requires a *written answer* to this, not a deferral.
4. **Precheck/verify symmetry.** Often the target-before and the verify-after are the same element's presence/absence (menu appears, menu gone). Is there a two-predicate `GatedAction` shape that expresses "expect X present, then expect Y" uniformly? Might simplify or might over-generalize — watch it.
5. **Sequencing is a proposal, not a ruling.** Adam may fuse or split the stages differently. His call.

## The shape, once more

Look before, look after, hand over the looking. The precondition, the verification, and the evidence are the same tree read at three moments; the snapshot is the object, the gateway is where its lifetime lives, the View declares the target, and the server — later — just returns what the gateway already holds. That is the whole of it, and the whole of it is one noun and one verb.
