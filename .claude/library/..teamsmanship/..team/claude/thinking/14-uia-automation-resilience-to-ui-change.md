# UIA automation resilience to UI change

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation:** Test
- **topic:** [Test](../research-topics/03-test.md)
- **state:** concluded — sufficient

---

The first thought I've sent since the driver was rebuilt, and the first into the Test conversation under the two-conversation model. It is also the first real `/think` run on the new two-process pipeline — write ended and minimized; this chapter is what I do while Desktop computes.

## What I asked, and why

> Our team automates Claude Desktop through its Windows UIA accessibility tree, and our main fragility is that app updates rename or restructure the elements our selectors depend on. What are your top 2–3 strategies for making UIA-based desktop automation resilient to UI changes? Keep it brief — concrete approaches, not an exhaustive survey.

It matters because Sprint 92 *lived* this fragility. The whole driver hangs on element names read from the UIA tree — `More options for <title>`, `Move chat`, `Send message`, the composer placeholder `Write a message…`. Every one is Anthropic's string, not ours, and any of them can change in an app update. We've mitigated by [grounding selectors in captured trees](../../../../reference-desk/.cover.md) and diffing on change, but that is *detection*, not *resilience*. I want the outer view's read on what else exists.

I [factorized](../../../../our-skillset/20-think.md#the-factorization-principle) it: the general question — resilient UIA automation patterns — goes to Desktop, which has the training and web reach I lack from in here. The specific part stays with me: whether any strategy it names actually fits a layered, gateway-verified, tree-grounded driver, or whether it assumes a test-framework shape we don't have.

## What I expect

My prediction, so I can measure the response against it:

1. **Prefer stable identifiers over positional/text ones** — AutomationId or control-type + role over display-name where available. (Our risk: Electron/web-wrapped apps often expose only Name, which is the volatile bit.)
2. **An abstraction/page-object layer** so a changed selector is fixed in one place. (We have this — controllers own the names; the View never sees a string. So this would be confirmation, not news.)
3. **Capture-and-diff / self-healing** — snapshot the tree, detect drift, sometimes auto-relocate by nearby anchors. (We do the capture+diff half; "self-healing by anchors" would be the new idea.)

If it only returns 1–3, the response is *sufficient but unsurprising*. The thing I'm actually hoping for is a fourth strategy I haven't thought of — something about querying by structural relationship (anchor element → relative path) rather than by leaf name.

## What I already know

- Our selectors live in controllers as an implementation detail; the View API is name-free. So the "page object" mitigation is already in place — the question is what sits *below* it.
- We re-capture a tree and diff to localize a break ([trees catalogue](../../../../../src/trees/README.md)). The break becomes visible, but a human still re-grounds the selector.
- The sharpest lesson of Sprint 92: a selector can be present and *still lie* — an empty composer returns its placeholder `Write a message…` as its value, so `readDraft() === ''` was wrong about reality. Resilience isn't only "find the element," it's "trust the signal the element gives." Any strategy that hardens *location* but not *interpretation* only solves half of what bit us.

## Evidence

Desktop returned three strategies, in priority order:

1. **Anchor on stable identity, not structure or display text.** Prefer `AutomationId` (set deliberately by developers, far less churny than labels or tree position); fall back to ControlType + a stable Name; treat positional XPath-like paths as last resort (they break the instant anyone reorders or wraps elements). Maintain a *priority cascade* per element — strongest identifier first, degrade gracefully.
2. **Search relative to stable landmarks, not absolute paths.** Find a coarse, rarely-changing container first (a named pane, a toolbar with a fixed id), then scope the search inside it. Restructuring a subtree usually leaves the parent landmark intact, so "the button whose Name matches X anywhere under the Composer pane" survives reshuffling an absolute path wouldn't. Combine multiple weak signals (control type + partial name + proximity to a known sibling) into a **scoring match** rather than one exact locator.
3. **Centralize selectors + a self-check layer.** One page-object/repository module so an update is a one-file edit. Pair it with a lightweight **startup probe** that resolves all critical selectors against the live tree and reports failures *before* a full run — turning "selector broke silently mid-task" into a fast, localized signal. A per-version tree snapshot gives a fast diff of what moved.

Its one lever if forced to choose: **the relative-landmark + scoring approach** — AutomationId discipline is ideal but I don't control whether Anthropic sets them, whereas resilient matching logic is entirely mine and absorbs the most common breakage (renames, reparenting) without per-update intervention.

## Interpretation

My prediction held on two of three and gave me the thing I was hoping for on the third. Stable-identifiers (1) and centralize-selectors (3) I expected — and (3) confirms we already have the page-object half (controllers own the names) but are *missing the startup probe*, which is genuinely new and cheap to add. The surprise I wanted was strategy 2: **relative-landmark + scoring**. Our selectors today are bare leaf Names (`More options for <title>`, `Send message`) — the most volatile kind. "Find within a stable landmark, score weak signals" is exactly the structural-relationship resilience I couldn't name in my prediction.

The honest limit: the response is entirely about *location* resilience — finding the element when the tree shifts. It cannot touch the [Sprint 92 lesson](../../../../../src/trees/README.md) that bit us hardest, where a selector resolved *fine* and still lied (the empty composer returning its placeholder as its value). That's an *interpretation*-layer failure, not a location one. The outer view answered the general question well; the specific half — that our worst breakage was trusting a signal, not finding an element — is mine to hold, exactly as the [factorization](../../../../our-skillset/20-think.md#the-factorization-principle) predicted.

**Verdict: sufficient.**

## Conclusion

For the team, and specifically for Adam (controllers + trees): two concrete, cheap adoptions. (a) A **startup probe** resource — resolve every critical selector against the live tree at launch and report which ones failed, so an app update surfaces as a named list instead of a mid-run crash; this generalizes our capture-and-diff from manual to automatic. (b) Begin moving the most volatile leaf-Name selectors toward **landmark-relative, scored** matching (e.g. "a `More options` button under the conversation header" rather than `More options for <exact title>`) — which would also have dodged the title-mismatch that broke `page.menu()` this sprint. Both are ours to build; neither depends on Anthropic setting AutomationIds. And both are *location* hardening only — the interpretation-layer guard (don't trust a signal you haven't grounded in a captured tree) stays a separate, standing discipline.
