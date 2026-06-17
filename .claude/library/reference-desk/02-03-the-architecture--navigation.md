# Navigation

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

The navigator ([`.claude/src/navigator.ts`](../../src/navigator.ts)) is the screen detection state machine. It knows where the app is (which page is active), what overlays are open (dialogs, menus), and how to get home from anywhere.

## Screens

The app has six known screens plus `unknown`:

```typescript
type Screen = 'home' | 'conversation' | 'projects' | 'project' | 'settings' | 'customize' | 'unknown';
```

Screen detection reads the URL from the UIA tree. The URL contains the screen identity:

| URL pattern | Screen |
|------------|--------|
| `/` or empty | `home` |
| `/chat/{uuid}` | `conversation` |
| `/projects` | `projects` |
| `/project/{uuid}` | `project` |
| `/settings` | `settings` |
| `/settings/customize` | `customize` |

## Overlays

Beyond the active screen, the navigator detects two kinds of overlays:

- **Dialogs** — modal windows like "Add text content", "Open", "Set project instructions". Detected by `ControlType.Window` elements with known names.
- **Menus** — dropdown menus like "Add files", "Settings". Detected by `ControlType.Menu` elements.

`navigator.hasOpenDialog` and `navigator.hasOpenMenu` track these. Operations that need a clean screen check these before proceeding.

## Navigation methods

`goHome()` — the recovery function. From any screen, get back to the home screen. Handles the settings page specially (clicks "Back to Claude" first, since settings doesn't have "New chat"). Uses the gateway pattern: click "New chat", verify the screen is `home`.

`ensureHome()` — idempotent version. If already home, does nothing. Otherwise calls `goHome()`.

`requireScreen(...allowed)` — assertion. Throws `WrongScreenError` if the current screen isn't in the allowed list. Controllers call this to fail fast when invoked from the wrong page.

`detectScreen()` — reads the URL AND the UIA tree. Returns the current screen. Updates `hasOpenDialog` and `hasOpenMenu`. Call this before any operation that depends on knowing where the app is.

## Conversation navigation

`openChat(title)` — open a conversation by title from the sidebar. Scrolls to bottom after opening — you always arrive at the latest message. Refreshes metadata (URL, title, project name).

`openChatAt(index)` — open a conversation by sidebar position. Delegates to `openChat()`, so it also scrolls to bottom.

`newChat()` — navigate to a guaranteed fresh conversation. Dismisses dialogs, goes home, clicks "New chat", verifies the URL has no conversation ID. If verification fails, throws.

`checkConversation(id)` — is the current conversation the one with this ID? Reads the URL and checks if it contains the conversation UUID. Returns boolean. Does not navigate.

`openConversationById(id)` — navigate to a conversation by ID. If already on it (checked via `checkConversation`), does nothing. Otherwise refreshes the sidebar and opens the most recent chat (with scroll-to-bottom), then verifies the URL matches.

`dismissDialogs()` — press Escape twice to close any open modal dialogs. Call before navigation if a dialog might be blocking.

`scrollToBottom()` — awaitable. Clicks the "Scroll to bottom" button if present, waits for the button to disappear (readiness check). If button is absent, already at bottom — no-op. Uses the gateway `act` pattern.

## The `resetToHome()` contract

From the [`Claude`](../../src/claude.ts) class: `resetToHome()` recovers from ANY state — wrong page, open dialog, open menu, settings. It dismisses overlays (Escape key), leaves settings, then navigates home. A script should be able to call `resetToHome()` as the first line and know it starts from a clean slate. If `resetToHome()` fails, the app is in an unrecoverable state and the script should abort.
