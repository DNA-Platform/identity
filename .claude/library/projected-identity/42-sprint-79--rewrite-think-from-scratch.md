# Sprint 79 — Rewrite Think from Scratch

- **author:** [Arthur](../..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)

---

Sprint 78 failed. The think code grew to 670 lines of patched-together functions that sent duplicate messages, left dialogs open, and clicked random sidebar elements. The problem: functionality that belongs in the app layer was stuffed into a script. The script should be thin — just state management — and the app should do all Desktop interaction through well-tested, reusable methods.

## Sprint goal

**The `/think` write/check/read cycle works through thin calls to app methods. The app has the methods it needs. think.ts is under 100 lines — state file and catalogue only.**

## What belongs in the app (Claude class)

These are reusable operations that any script might need. They belong in the app layer with proper patterns, not in think.ts:

| Operation | Current state | Where it should live |
|-----------|--------------|---------------------|
| Navigate to fresh chat | Ad-hoc goHome + click New chat in think.ts | `app.newChat()` — goes home, clicks New chat, verifies blank URL |
| Clear composer before typing | Scattered try/catch in think.ts | `app.compose(text)` should clear first, always |
| Type without paste | `composer.type()` exists but think.ts calls it directly | Already in app — just use it |
| Scroll to bottom | `conversation.scrollToBottom()` exists | Already in app — just use it |
| Check if on a specific conversation | URL comparison scattered in think.ts | `app.isOnConversation(id)` — checks URL for conversation ID |
| Navigate to conversation by ID | openChatAt(0) hack in think.ts | `app.openConversationById(id)` — opens sidebar, finds by URL match, or opens most recent |
| Read response text | readTurns + extract last response in think.ts | `app.conversation.readLastResponse()` already exists |

## What stays in think.ts

State file: `readState()`, `writeState()`, `deleteState()`, `hasActiveThought()`.
Catalogue: `readCatalogue()`, `updateCatalogue()`.

That's it. Under 100 lines.

## What the skill does

The `/think` skill calls app methods and think.ts state functions. The flow:

```
1. WRITE
   state = { question, startedAt }
   await app.newChat()
   await app.compose(question)   // clears first, types, sends
   state.url = await app.readUrl()
   state.conversationId = extractId(state.url)
   writeState(state)
   app.window.minimize()

2. SCAFFOLD (no Desktop)
   Create perspective entry with thinking
   Update perspective cover
   
3. CATCH UP (no Desktop)  
   Follow previous-link chain in perspective entries

4. CHECK (run_in_background)
   await app.launch()
   if (!app.isOnConversation(state.conversationId))
     await app.openConversationById(state.conversationId)
   await app.conversation.scrollToBottom()
   return !await app.conversation.checkStreaming()
   app.window.minimize()

5. READ
   response = await app.conversation.readLastResponse()
   updateCatalogue(...)
   app.window.minimize()
```

Each step is a few lines. The app does the work.

## Stories

### E1: App methods

| ID | Story | Owner |
|----|-------|-------|
| E1-S1 | `app.newChat()` — go home, click New chat, verify blank | Adam |
| E1-S2 | `app.isOnConversation(id)` — check URL for conversation ID | Adam |
| E1-S3 | `app.openConversationById(id)` — find and open by ID | Adam |
| E1-S4 | Make `app.compose()` clear composer first, always | Adam |
| E1-S5 | Audit all foreground methods for idempotency | Adam |

### E2: Rewrite think.ts

| ID | Story | Owner |
|----|-------|-------|
| E2-S1 | Strip think.ts to state + catalogue only (under 100 lines) | Adam |
| E2-S2 | Rewrite test script using app methods directly | Adam |

### E3: Test

| ID | Story | Owner |
|----|-------|-------|
| E3-S1 | Test `app.newChat()` in isolation | Adam |
| E3-S2 | Test `app.isOnConversation(id)` in isolation | Adam |
| E3-S3 | Test write/check/read cycle end to end | Adam + Claude |

### E4: Documentation

| ID | Story | Owner |
|----|-------|-------|
| E4-S1 | Update Thoughtfulness code chapter | Adam |
| E4-S2 | Update Reference Desk with new app methods | Libby |
| E4-S3 | Update /think skill chapter | Claude |

## Definition of done

- think.ts is under 100 lines
- `app.newChat()`, `app.isOnConversation()`, `app.openConversationById()` exist and work
- Write/check/read cycle completes in one session without sending duplicates
- No leftover dialogs, no unsent text in composer, minimize on every path
- 0 broken links
