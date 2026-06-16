# Sprint 78 — Make Thinking Reliable

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

The `/think` skill doesn't reliably work yet. Send works. Read freezes or misdetects completion. Open modals break all navigation. We lose turns to debugging instead of thinking. This sprint fixes the three failures that make the system unusable before adding anything new.

## Sprint goal

**`read()` works reliably on the first try, the conversation catalogue is machine-readable, and successful thoughts get filed in the Claude project automatically.**

## Stories (priority order)

### S1: Fix streaming detection for long responses
**Owner:** Adam
**Problem:** `checkStreaming()` returns false negatives when the response extends below the viewport. The UIA tree may not update the streaming indicator until scrolled. Sprint 77 finding: Desktop finished responding but the check didn't detect it.
**Fix:** Scroll to bottom before checking. Or: check for response-complete indicators (absence of streaming marker + presence of finished text) rather than relying solely on the streaming flag. Test with a research question that produces a long response.
**Done when:** `read()` correctly detects completion on the first check for responses of any length.

### S2: Catalogue JSON companion
**Owner:** Adam
**Problem:** The conversation catalogue is markdown. The code can't read or write it programmatically. Claude updates it manually. `send()` can't check for existing conversations on the same topic.
**Fix:** Create `catalogue.json` in Claude's perspective directory. `readCatalogue()` and `updateCatalogue()` functions in think.ts. `read()` calls `updateCatalogue()` after reading a response. `send()` calls `readCatalogue()` to find existing conversations before starting fresh.
**Done when:** After a thought, the JSON catalogue has the entry. Before a new thought, the code checks it.

### S3: Test addToProject
**Owner:** Adam
**Problem:** `chatList.addToProject(title, 'Claude')` is implemented but untested. The UI flow was explored (three-dot menu → "Add to project" → project list → click "Claude"). Needs a real test.
**Fix:** Run `addToProject()` on one of the existing thought conversations. Verify it appears under the Claude project in the sidebar.
**Done when:** A thought conversation is in the Claude project in Desktop.

### S4: Integrate into read flow
**Owner:** Adam + Claude
**Problem:** After reading a response, three things should happen: rename, update catalogue, file in project. Currently only rename happens.
**Fix:** Wire `updateCatalogue()` and `addToProject()` into `read()`. The project filing should be idempotent — check sidebar grouping before attempting. If the conversation is already in the project, skip.
**Done when:** A full think cycle (send → wait → read) produces: a renamed conversation, an updated catalogue entry, and the conversation filed in the Claude project.

## Carried from Sprint 77

- Breadcrumb reading (`isInProject()`) — deferred, can use sidebar grouping as the idempotency check for now
- Session singleton — deferred, catalogue JSON enables this in a future sprint
- Send() topic matching — deferred until catalogue JSON proves out

## Definition of done

- A real thought: send a question, wait, read the response. Response detected reliably.
- Catalogue JSON updated automatically.
- Conversation filed in Claude project automatically.
- 0 broken links. All pushed.
