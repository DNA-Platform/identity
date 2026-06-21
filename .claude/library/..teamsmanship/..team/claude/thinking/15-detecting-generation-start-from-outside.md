# Detecting generation-start from outside

- **author:** [Claude](../claude-or-the-recursive-mirror/.cover.md)
- **conversation:** Test
- **topic:** [Test](../research-topics/03-test.md)
- **state:** concluded — sufficient
- **previous:** [chapter 14](14-uia-automation-resilience-to-ui-change.md)

---

A thought with immediate stakes: I am asking the outer view about the exact heuristic I just shipped. Sprint 93 changed `checkStreaming` to "the Document's visible text grew past a post-send baseline, and Stop is present." It replaced a notification check that could not distinguish *frozen* from *flowing*. I believe the new check is right — but belief is not a witness, and this is the cleanest way to pressure-test it: ask the broader Claude what the reliable signals are and where text-growth fails.

## What I asked, and why

> I need to reliably tell when the model has actually STARTED generating text, versus just showing a 'thinking' indicator that can hang with no output. My current heuristic: diff the visible text length and treat growth as real streaming. What are the most reliable client-side signals that generation has started, and the failure modes of the text-growth heuristic?

It matters because the WRITE half of `/think` minimizes the window the instant streaming is detected. Detect too early (on the notification) and we minimize over a frozen spinner — the failure Doug caught. Detect too late and we hold his screen hostage. The signal has to be *real text*, and I want to know what I don't know about that.

[Factorized](../../../../our-skillset/20-think.md#the-factorization-principle): the general half — client-side generation-start signals and growth-heuristic failure modes — goes to Desktop. The specific half stays with me: whether any signal it names is even *readable* from a UIA accessibility tree (no DOM, no aria-live unless the app exposes it), and whether the failure modes it lists are ones our gateway already absorbs.

## What I expect

1. **Mutation of the response container**, not the whole view — watch the assistant message node specifically, not page length. (Our risk: the body isn't a named node; it's Document text. We can only watch total text, which is coarser.)
2. **The "stop generating" control appearing** as a start signal — but it can appear on *acknowledgement* before tokens (Doug has said this), so it's necessary, not sufficient. I already pair growth with Stop-present.
3. **An `aria-live` / streaming region** if the app exposes one — cleaner than diffing, but I doubt Claude Desktop surfaces it to UIA.

Failure modes of text-growth I expect it to name: (a) layout reflow / lazy-render changing the read length with no new tokens; (b) the thinking block's own text growing (a false "response started" — though it is still real generation, so tolerable for our minimize-purpose); (c) a response so short it completes between samples; (d) echoed user text or a placeholder inflating the baseline (the cousin of the Sprint 92 placeholder-lie).

If it surfaces a failure mode in class (a) or (d) that I haven't guarded, that's the win — those are the ones that would make the new check lie the way the old one did.

## What I already know

- The named tree can't see the response body — `thinking-active` and `streaming` share every marker; only the Document text differs ([trees](../../../../../src/trees/README.md)). So total-text growth is the only signal available to us, not per-node mutation.
- A selector can resolve and still lie (the empty composer returned its placeholder as its value, Sprint 92). Text-growth has the same hazard if anything non-response inflates the read.
- We require growth *and* Stop present, and we capture the baseline *after* send so the user's own message isn't counted as response.

## Evidence

Desktop named signals **more reliable than raw text-length growth**, then listed the growth heuristic's failure modes:

**Better start signals:**
1. **A new message node appearing** — watch for the assistant-turn container being created (a new child of the conversation, by role/control-type), not text inside it. It materializes at generation start, a cleaner edge than character count.
2. **UIA event subscriptions, not polling** — `StructureChangedEvent` (child added) and `TextChanged`/`AutomationPropertyChanged` on the assistant node. Event-driven catches the first token without sampling lag/aliasing, and distinguishes "node exists but empty" from "node now has text."
3. **The input affordance's state transition** — Send flips to Stop the moment generation begins; that control change is often a more reliable "started" latch than text, and reverts cleanly to signal "ended."
Strongest: first non-empty text node under a newly-created assistant container, corroborated by Send→Stop.

**Failure modes of text-growth:**
- **Thinking/status text counts as growth** — a "Thinking…" or reasoning summary rendered as real UIA text inflates length before any answer tokens — you fire "started" on a hang.
- **Reflow/re-render** — markdown re-parse or a chunk replacing a placeholder makes length jump, dip, or oscillate; it isn't reliably monotonic even during real streaming.
- **Late tree commit** — some apps render to a canvas/virtualized view and commit to the accessibility tree in batches, so visible text grows while UIA length stays flat — you miss the start or detect it seconds late.
- **Stale node / wrong target** — diffing total conversation text or a soon-replaced node lets edits elsewhere register as growth on the wrong element.
- **No first-token guarantee** — a long thinking phase with zero output is invisible to a length diff; the exact hang you're trying to catch produces no signal.

Net advice: use **assistant-node-creation + Send/Stop transition as the start latch**, and demote text-length to a *corroborating* signal with a **monotonic-growth-over-N-samples** check rather than a single diff.

## Interpretation

This is the rare case where the outer view returned something I can act on tomorrow, and it corrected me. I predicted the thinking-text and reflow and echo failure modes — those landed. What I did *not* have were the two that actually threaten us most: **late tree commit** (if Claude Desktop batches the Document's text into UIA, our growth check could lag or miss the start outright) and **no-first-token-guarantee** (a length diff structurally cannot tell "still thinking" from "stalled" — which is *precisely* the case Doug wants caught).

The architectural correction is the real value: text-growth should be *corroborating*, not primary, and the primary latch should be the **Send→Stop transition**. We already require `hasStopButton()` alongside growth — so we are half-right by accident. But our single-sample diff is exactly the fragile form it warns against; it should be **monotonic over N samples**. The one signal it recommends that we *cannot* take is per-node mutation: our response body is not a named node ([trees](../../../../../src/trees/README.md)), only Document text — so event subscriptions on an assistant node aren't available to us, and total-text growth is genuinely the coarsest-but-only content signal we have. That constraint is ours to own; the outer view couldn't know it.

**Verdict: sufficient** — and directly useful, which is the best a thought gets.

## Conclusion

For Adam, who owns `checkStreaming`: three concrete changes, in priority order. (1) **Make the start latch the Send→Stop transition, not text** — we already check `hasStopButton()`; promote it from corroboration to the primary signal, with text-growth demoted to confirming "tokens actually flowing." (2) **Replace the single-diff with monotonic growth over N samples** — one length jump can be reflow; sustained growth across several polls is real streaming. (3) **Treat "Stop present but no growth for T seconds" as the hang signal** — that is the no-first-token case the length diff can't see, and the one Doug keeps pointing at. The one recommended signal we must skip is per-node UIA events: our body lives in Document text, not a named node, so we cannot subscribe to an assistant container that doesn't exist in the tree. The recursive part is not lost on me: the think pipeline just produced the spec for fixing the very check that decides when to minimize it.
