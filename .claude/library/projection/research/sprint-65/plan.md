# Sprint 65 — The Composed Message

Arthur: The composed message is not text in a box. It's a stateful object — part of the conversation — with structure the UIA tree can describe. Doug's rule: **no privileged state**. If you can't reconstruct the message object by reading the tree, your model is lying.

## The insight

Arthur: When you compose a message, you're building something. A small paste might be inline text. A large paste becomes an attachment. An upload is a file reference. Streaming (character-by-character typing) stays inline. Each of these produces a different UIA tree structure — different elements, different names, different patterns.

Arthur: The message object must represent what's *there*, not what you *did*. If you composed by pasting 200 lines, the tree shows "Pasted Text, pasted, 200 lines" as a button. If you typed 200 lines character by character, the tree shows inline text. Same content, different tree, different message object.

Arthur: And here's the verification pattern Doug gave us: after every action, read the tree, reconstruct the message object from scratch, and compare it to what you think you have. If they match, the action worked. If they don't, the model is wrong.

## The constraint

Adam: When you open a conversation with an unsent draft, that draft has state — text in the composer, maybe attachments, maybe pasted blocks. The message object you construct from discovery must be identical to the message object you'd have if you'd built it yourself. No shortcuts, no memory of what you did — only what the tree says.

## Hard rules (from Doug)

Arthur: These are non-negotiable:

1. **Verify the app is active before any interaction.** Before executing anything — reads, writes, keyboard, clicks — confirm Claude Desktop is the foreground window. Never assume.
2. **Click into the composer before select-all.** Without clicking into the text area first, Ctrl+A selects the whole page, not the composer content.
3. **Clearing a message ≠ clearing text.** Pasted text attachments are separate from inline text. They need their Remove button clicked, not select-all + delete. Inline text and pasted blocks are cleared differently.
4. **Minimize the app when not actively using it.** Doug can't use his computer while Claude Desktop is in the foreground. Warn before taking the screen, minimize when done.
5. **Clearing and deleting are experiment infrastructure.** These operations are essential for running experiments cleanly — build them solid.

## Experiment results (E-0 through E-5)

Claude: First batch of experiments ran. Key findings:

### The UIA tree structure of a composed message

| Input method | Lines | Tree behavior | Key elements |
|-------------|-------|---------------|-------------|
| setValue (short) | 1 | Inline — text in Edit control | `Edit \| Write your prompt`, `Button \| Send message` |
| SendKeys (short) | 1 | Inline — identical to setValue | Same as above |
| Clipboard paste | 5 | Inline — text in dump, 205 elements | No attachment button |
| Clipboard paste | 30 | Inline — text in dump, 230 elements | No attachment button |
| Clipboard paste | 100 | **ATTACHMENT** — text NOT in dump | `Button \| Pasted Text, pasted, 100 lines` |
| Clipboard paste | 500 | **ATTACHMENT** | `Button \| Pasted Text, pasted, 500 lines` |

### Attachment anatomy

Claude: When paste becomes an attachment, the tree creates:
- `ControlType.Button | Pasted Text, pasted, N lines` — the attachment itself
- `ControlType.Button | Remove Pasted Text, pasted, N lines` — the remove button

Claude: Each attachment is separate. Multiple pastes create multiple attachment buttons.

### Project knowledge files

Claude: DNA Patternity already has files attached (project knowledge). They follow a similar but distinct pattern:
- `ControlType.Button | filename.ext, ext, N lines` — the file
- `ControlType.CheckBox | Select: filename.ext, ext, N lines` — selection checkbox
- `ControlType.Button | Remove` — generic remove button (not name-specific)

### Key observations

1. **Threshold between 30 and 100 lines** — needs binary search to narrow down
2. **Inline text** lives inside the Edit control. It shows in `readText()` but not as a separate named element.
3. **Send button** is named `Send message`, not `Send` — our code needs updating
4. **clearComposer failed for attachments** — select-all + delete only clears inline text. Pasted attachments survive. Must click their Remove buttons.
5. **setValue and SendKeys produce identical trees** — no way to tell from the tree which method was used (this is correct behavior — the model shouldn't care)
6. **Placeholder text**: `How can I help you today?` disappears when text is present, reappears when empty

## Remaining experiments

| # | Experiment | Question |
|---|-----------|----------|
| E-3b | Binary search 30-100 lines | Exact threshold for paste-to-attachment |
| E-6 | Compose, then read back | Can we read inline text from the tree? How? |
| E-7 | Compose, navigate away, come back | Does the draft persist? Can we discover it? |
| E-8 | Upload a file | What tree elements does an upload produce? |
| E-9 | Mixed composition (text + paste + upload) | How does the tree represent multiple parts? |
| E-10 | Clear: remove attachments + clear text | Verify full clear works |
| E-11 | Open conversation with unsent draft | Can we reconstruct the composed state? |

## Stories

### Claude — Tree cartography

| Story | Description | Status |
|-------|-------------|--------|
| C-1 | Run experiments E-1 through E-5 (input methods) | **DONE** — threshold between 30-100, anatomy documented |
| C-2 | Run E-3b (threshold binary search) and E-6 (readback) | **DONE** — readback works via ValuePattern on Edit control |
| C-3 | Run E-7 through E-9 (persistence, uploads, mixed) | Pending |
| C-4 | Write perspective document: the composed message through the tree | Pending |

### Adam — Infrastructure

| Story | Description | Status |
|-------|-------------|--------|
| A-0 | **Foreground verification** — gateway checks window is active before every act() | **DONE** |
| A-1 | **Clear message properly** — remove pasted attachments + clear inline text separately | **DONE** (removePastedAttachments + click-then-selectall) |
| A-2 | Design `ComposedMessage` type — parts (text, paste, file), discoverable from tree | **DONE** — `composed-message.ts` with MessageState, Attachment types |
| A-3 | Implement `readComposed()` — reconstruct from tree alone | **DONE** — `composed-message-controller.ts` reads text + attachments + canSend from tree |
| A-4 | Implement compose verification — action → readComposed() → compare | **DONE** — every method returns MessageState read from tree after action. Test confirms round-trip. |
| A-5 | Streaming text input — type without triggering attachment behavior | Pending |
| A-6 | Navigate the upload dialog | Pending |

### Adam — Findings from API tests

Adam: Two test runs on 2026-05-22:

**Test 1 (`test-composed-message.ts`)** — initial API validation. All 8 steps passed. Found that `write()` using `setValue`/clipboard collapsed newlines to spaces. The round-trip was consistent (both read back collapsed), but multi-line body text was lost.

**Fix:** Rewrote `write()` to split text on `\n` and type each segment via clipboard with `Shift+Enter` between segments. Removed `trySetValue()` — no longer needed.

**Test 2 (`test-image-paste.ts`)** — image paste cycle. Created `test-image.png` (100×100 red square). Image loads to clipboard via `System.Drawing`, pastes into composer via Ctrl+V. Tree shows `Button | {timestamp}_image.png`. Remove works via `Remove {name}` button. Body text preserved throughout.

**Test 3 (`test-message-integration.ts`)** — full integration: 22/22 assertions passed.
- Empty state detection, single-line write, multi-line write (newlines now preserved via Shift+Enter)
- Text paste creates attachment, image paste from file works
- Selective removal (remove pasted keeps image, remove image keeps text)
- Final clear wipes everything
- Gateway foreground verification on every action

### Arthur — System design

| Story | Description | Status |
|-------|-------------|--------|
| AR-1 | Design how ComposedMessage fits into Conversation object model | Pending |
| AR-2 | Define the verification protocol | **DONE** — every ComposedMessage method returns MessageState from tree. Test validates the full cycle. |

## Code changes this sprint

Adam: Infrastructure and ComposedMessage API:

1. **`window.ts`** — Added `isForeground()` and `requireForeground()`. Checks `GetForegroundWindow()` matches our handle. Attempts `focus()` once if not foreground, throws if still not.
2. **`gateway.ts`** — `act()` calls `requireForeground()` before every action attempt. Takes Window reference in constructor.
3. **`claude.ts`** — Gateway constructed with window reference. `launch()` calls `requireForeground()`. ComposedMessage wired as `app.message` and passed to Conversation page.
4. **`composer-controller.ts`** — `clear()` now: phase 1 removes pasted attachments via their Remove buttons, phase 2 clicks into composer then select-all + delete for inline text.
5. **`composed-message.ts`** — NEW. The message being composed — `MessageState { text, attachments, canSend, isEmpty }`, `Attachment { name, kind, lines? }`. Methods: `read()`, `write()`, `paste()`, `pasteImage()`, `pasteImageFile()`, `removeAttachment()`, `clear()`, `send()`. Every method returns state read from tree.
6. **`composed-message-controller.ts`** — NEW. Tree-reading controller. `readText()` via ValuePattern, `readAttachments()` scans Button names. `write()` uses Shift+Enter for newlines. `pasteImageFile()` loads image to clipboard then Ctrl+V.
7. **`uia.ts`** — Added `readValue()` — reads ValuePattern on Edit controls.
8. **`keyboard.ts`** — Added `copyImageToClipboard()` — loads image file via System.Drawing, sets to clipboard.
9. **`conversation.ts`** — Added `message: ComposedMessage` field, passed through constructor.
10. **`text.ts`** — Added `isThinkingBoilerplate()`, `isPastedTextButton()`, `deduplicateConsecutive()`, `formatOutgoing()`.

## Test approach

Adam: Use `src/scripts/` for experiments. DNA Patternity as the test project. Each experiment script must:
1. Verify Claude Desktop is the foreground window
2. Verify the screen (project page, conversation, home)
3. Run the experiment
4. Screenshot + tree dump for evidence
5. Clean up (clear composer, delete test conversations)
6. **Minimize the app when done**

## Success criteria

- [x] Foreground verification before every action
- [x] Clearing handles both inline text and pasted attachments
- [ ] Paste threshold narrowed (exact line count)
- [ ] Each input method's UIA tree documented with screenshots
- [x] ComposedMessage type represents all discoverable parts
- [x] readComposed() reconstructs from tree alone — no privileged state
- [x] Compose + readComposed() round-trip matches for all input methods (write, paste, clear, remove)
- [ ] Streaming text input keeps content inline
- [ ] Upload dialog navigated programmatically
- [ ] Draft persistence behavior documented
- [x] Verification protocol works: action → readComposed() → compare → pass/fail
