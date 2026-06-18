# Sprint 89 — Think Acceptance Tests

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

## Doug's requirements (verbatim)

1. Verifying that the send method actually returns control to you after it sends
2. That it can verify sending on long responses — most responses are long
3. That it is robust to my typing — interactions with textboxes should be cleared — and such operations should be in the view model UI
4. That before doing anything, state is verified, and as much as possibly this should be behind the abstraction of the app and enforced with gateways. They are the gateway to successful actions
5. That we can create a new conversation topic on send
6. That we can navigate to an existing conversation topic in the Claude project
7. That we can sanity check that it is the right conversation based on previous messages
8. That we can send a message and wait for actual text to start streaming before handing back control
9. Read should, if new, name the conversation by topic and move it into the project
10. Read should return the message to Claude so he can do with it as discussed
11. Before writing, after sending, before reading, while waiting, scroll to bottom should be pressed whenever available
12. On read, since you can't hand control back, there's no point checking in a loop. Just have Claude do what he can and then do a polling wait for the response to finish. That it's finished is something app should surface
13. Failure should be reported with clear messages and context and maybe the UIA tree so that you guys can debug
14. If you time out waiting, I should be able to tell Claude that he should resume checking the message and recover what he was doing

## Tests surfaced by the team

In addition to Doug's 14, the team identified 5 more:

15. Shell serialization under rapid gateway polling — do UIA reads overlap safely when polls are 50ms apart?
16. Reading works when the app is behind another window — scroll-to-bottom requires foreground, reads may not
17. Message boundary detection — after sending, verify we read THIS response, not a previous message. Check response content relates to what we asked.
18. Empty response handling — what if Desktop returns nothing or an error? Detect and report clearly.
19. State file cleanup on all exit paths — write failure shouldn't leave dangling state. Crash during write shouldn't leave partial state.

## Test plan — 4 layers, 19 tests

Each test is a small script. Clear PASS/FAIL output. Logs what was checked and what was found. Each layer must pass before the next.

### Layer 0: Infrastructure (tests 15-16)

| # | Requirement | Test | Pass condition |
|---|------------|------|---------------|
| 15 | Shell serialization | Rapid-fire 10 UIA reads at 50ms intervals | All 10 return valid data, no interleaving |
| 16 | Background reading | Minimize the app, attempt readText() | Returns data (or fails clearly with explanation) |

### Layer 1: App capabilities (tests 1-4, 8, 11, 18)

| # | Requirement | Test | Pass condition |
|---|------------|------|---------------|
| 1 | Send returns control | Send a message, print a line AFTER send returns | Output shows both "sent" and the subsequent line |
| 2 | Long response verify | Send a research question, log what the verify found | Log shows "found Button Thinking" or "found Claude responded:" — NOT a transient indicator |
| 3 | Robust to typing | Pre-type text in composer, then run compose() | Sent message is ONLY what we composed, not mixed with pre-existing text |
| 4 | State verified before action | Call conversation.send() from the home screen | Throws WrongScreenError, does not silently fail |
| 8 | Text before control return | Send, verify thinking block OR response text exists before send() returns | Log shows the element name and timestamp |
| 11 | Scroll everywhere | Send to a conversation with existing messages, read latest response | Response is from the LATEST message, not an old one visible without scrolling |
| 18 | Empty response | (Difficult to trigger — test readLastResponse() on a conversation with no assistant messages) | Returns empty string or throws clear error, not garbage |

### Layer 2: Navigation (tests 5-7, 17)

| # | Requirement | Test | Pass condition |
|---|------------|------|---------------|
| 5 | Create new conversation | Send from home screen, verify new conversation created | URL contains /chat/, sidebar shows new item |
| 6 | Navigate to existing | openProjectConversation('Claude', 'Test') | Title = "Test", project = "Claude", URL has /chat/ |
| 7 | Sanity check right conversation | After navigating to Test, read messages | At least one message exists, content is recognizable (not another conversation's content) |
| 17 | Message boundary | Send a unique question, read response | Response content relates to the question asked (contains expected keywords) |

### Layer 3: Think flow (tests 9-10, 12-14, 19)

| # | Requirement | Test | Pass condition |
|---|------------|------|---------------|
| 9 | Read names and files | Send to new conversation, read, verify renamed and in Claude project | Conversation has non-auto-generated name, breadcrumb shows "Claude" |
| 10 | Read returns message | After successful read, check debug/think-response.txt | File exists, length > 0, preview matches conversation |
| 12 | Single poll wait | Run read with run_in_background, check output | Shows one "waiting for completion" then one "response: N chars" — no retry loops |
| 13 | Failure reporting | Navigate to nonexistent conversation | Error message includes: what was attempted, what was expected, what was found |
| 14 | Timeout recovery | Start read, let it timeout, run read again | Second read succeeds — state persists, conversation found |
| 19 | State cleanup | Write fails (e.g., app not found), check state file | No state file left from failed write |

## What "done" means

All 19 tests pass. Each test is a script in `src/scripts/test-think-*.ts`. Each prints PASS or FAIL with context. Layers run in order. If a layer fails, fix before proceeding.

When all 19 pass, the think implementation can be built on proven capabilities — not on hopes.

## Future work

The next sprint after this one implements /think for real, using only capabilities that passed these acceptance tests. No untested code paths. No "it should work because the pieces are there." Every piece proven individually, then composed.
