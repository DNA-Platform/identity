// GENERATED — do not edit. Run: npx tsx src/cli/generate-surface.ts --write
//
// The app's public surface, read from the TypeScript syntax tree of .claude/src/**.
// This is the bridge between the driver's strongly typed structure and what the CLI
// reports: one derived artifact, so the two cannot drift apart. A test asserts this
// file is current, which turns "the CLI is out of date" into a failing build.
//
// See src/cli/generate-surface.ts and library/reference-desk/14-the-runtime.md.

import type { ClassSurface } from './surface.ts';

/** Every class the app exposes. A union, so a misspelled screen is a compile error
 *  rather than an empty room. */
export type AppClassName =
  | "ArtifactPanel"
  | "ArtifactPanelController"
  | "ArtifactPart"
  | "ChatListController"
  | "ChatNotFoundError"
  | "Claude"
  | "CodePart"
  | "Composer"
  | "ComposerController"
  | "Content"
  | "ConversationController"
  | "ConversationItem"
  | "ConversationMenu"
  | "ConversationPage"
  | "Diagnostics"
  | "DriverError"
  | "FileDialog"
  | "FilesPane"
  | "Gateway"
  | "HomePage"
  | "Keyboard"
  | "Lazy"
  | "Message"
  | "MessageController"
  | "ModelPicker"
  | "ModelPickerController"
  | "MoveConversationModal"
  | "Navigation"
  | "NavigationError"
  | "Navigator"
  | "Page"
  | "Part"
  | "PreconditionError"
  | "ProjectChoice"
  | "ProjectController"
  | "ProjectFile"
  | "ProjectItem"
  | "ProjectNotFoundError"
  | "ProjectPage"
  | "ProjectsPage"
  | "Prompt"
  | "Response"
  | "Session"
  | "Shell"
  | "Sidebar"
  | "SidebarController"
  | "TextContentDialog"
  | "TextPart"
  | "ThinkingPart"
  | "TreeSnapshot"
  | "Uia"
  | "Window"
  | "WrongScreenError";

export const APP_SURFACE: readonly ClassSurface[] = [
  {
    name: "ArtifactPanel",
    extends: null,
    origin: "components/artifact-panel.ts",
    methods: [
      { name: "close", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "copy", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "download", params: [{ name: "outputPath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "isOpen", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "list", params: [], returns: "Promise<Artifact[]>", isAsync: true, doc: "" },
      { name: "readContent", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "refresh", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "select", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "show", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "artifacts", type: "Artifact[]" },
      { name: "content", type: "unknown" },
      { name: "hasError", type: "unknown" },
      { name: "isLoading", type: "unknown" },
      { name: "lastError", type: "Error | null" },
      { name: "open", type: "unknown" },
    ],
  },
  {
    name: "ArtifactPanelController",
    extends: null,
    origin: "controllers/artifact-panel-controller.ts",
    methods: [
      { name: "checkOpen", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "close", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "copy", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "download", params: [{ name: "outputPath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "open", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "readContent", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readList", params: [], returns: "Promise<Artifact[]>", isAsync: true, doc: "" },
      { name: "select", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "ArtifactPart",
    extends: "Part",
    origin: "components/part.ts",
    methods: [
      { name: "toMarkdown", params: [], returns: "string", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "body", type: "string" },
      { name: "format", type: "string" },
      { name: "title", type: "string" },
      { name: "type", type: "unknown" },
    ],
  },
  {
    name: "ChatListController",
    extends: null,
    origin: "controllers/chat-list-controller.ts",
    methods: [
      { name: "clickAddToProject", params: [], returns: "Promise<boolean>", isAsync: true, doc: "\"Add to project\" has been renamed twice — it is \"Change project\" on a conversation already in one. Read the menu ONCE and take whichever is there, rather than firing three invokes at the app hoping one lands." },
      { name: "clickDelete", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "clickDeleteConfirm", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "clickPin", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "clickProjectItem", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "clickRemoveFromProject", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "clickRename", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "clickShowAll", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "closeDialog", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "closeMenu", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "expandMenu", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "hasMenuButton", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "hasMoreThan", params: [{ name: "count", type: "number", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isDeleteDialogVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isDialogVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isItemGone", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isMenuVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "Is a conversation menu open? **Any MenuItem means yes.** This used to ask for `MenuItem` named exactly `Rename`, `Delete`, `Add to project` or `Projects`. Every one of those is now wrong: the app appends the keyboard hint to the label, so the tree shows `\"Rename R\"`, `\"Delete D\"`, `\"Pin P\"`, and `Add to project` has become `Change project` / `Remove from project`. The menu was wide open and the sensor said no. A menu is a menu. There is no reason to name its contents to notice it." },
      { name: "isRenameFieldActive", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "open", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "openAt", params: [{ name: "index", type: "number", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "readList", params: [], returns: "Promise<ChatItemData[]>", isAsync: true, doc: "" },
      { name: "readMenuItems", params: [], returns: "Promise<string[]>", isAsync: true, doc: "What is IN the open menu, as the app labels it — with the trailing keyboard hint trimmed for reading. Whatever is there is reported; nothing is filtered against a list of items we expected, because a hand-kept list of expected labels is what hid the rename in the first place." },
      { name: "readProjectList", params: [], returns: "Promise<string[]>", isAsync: true, doc: "" },
      { name: "searchProjects", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Filter the Move chat modal's project list. The modal's search bar is a ComboBox named \"Select a project\" (grounded: ../trees/move-conversation-modal.txt line 12), sitting above the List | Projects of ListItems. The modal opens with that ComboBox focused, so a clipboard paste filters the list." },
      { name: "typeAndConfirm", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "ChatNotFoundError",
    extends: "DriverError",
    origin: "errors.ts",
    methods: [

    ],
    properties: [
      { name: "title", type: "string" },
    ],
  },
  {
    name: "Claude",
    extends: null,
    origin: "claude.ts",
    methods: [
      { name: "attach", params: [], returns: "Promise<boolean>", isAsync: true, doc: "Restore the running app's window WITHOUT going home (un-minimize + focus), so a resume can read whatever screen we are actually on. Returns false if the app isn't running or its UIA tree isn't available." },
      { name: "currentConversation", params: [], returns: "Promise<ConversationPage | null>", isAsync: true, doc: "Resume onto the conversation we are already on — TYPED. Returns the ConversationPage if the live screen IS a conversation (confirmed against the tree), else null so the caller navigates. This is the session: if the WRITE left us on the conversation (minimized), we stay there — no re-walking the nav tree, and no vague base Page to down-cast." },
      { name: "currentPage", params: [], returns: "Promise<Page>", isAsync: true, doc: "Reconstitute the page for whatever screen the app is actually on now. Used to resume (decision #1): read the screen, build that page object, confirmed." },
      { name: "currentProject", params: [], returns: "Promise<ProjectPage | null>", isAsync: true, doc: "Resume onto the Claude project page — TYPED. Returns the ProjectPage if the live screen is a project page, else null." },
      { name: "currentUrl", params: [], returns: "Promise<string>", isAsync: true, doc: "The URL of the page the app is currently on — the live page id, read fresh from the tree. The Session compares this against what it remembered." },
      { name: "detectScreen", params: [], returns: "Promise<Screen>", isAsync: true, doc: "" },
      { name: "dismissDialogs", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "exit", params: [], returns: "Promise<void>", isAsync: true, doc: "Close Claude Desktop itself. **Almost never what you want** — a driver attached to a RUNNING app should give the computer back with `window.minimize()` and `auto.shell.close()`, which leaves the user's live conversation alone. Closing the window BEFORE the shell, because the window now speaks through it." },
      { name: "goHome", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "launch", params: [], returns: "Promise<HomePage>", isAsync: true, doc: "Launch (or attach to) Claude Desktop and return the page you land on, reconstituted and confirmed via detectScreen() (decision #1). The static return type is HomePage — the common case after a fresh launch / re-home; if the app resumed on another screen, currentPage() inside reconstitutes that screen's object, and goHome() is the fallback on mismatch." },
      { name: "newChat", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "pageForUrl", params: [{ name: "url", type: "string", optional: false }], returns: "Page", isAsync: false, doc: "The id→page factory: build the typed page for a URL (the Session uses this to reconstitute — to BIND — the page we are currently on). The cast is contained in the factory; this is binding to the live screen, not navigating." },
      { name: "tree", params: [], returns: "Promise<TreeSnapshot>", isAsync: true, doc: "**What is on the screen right now.** Available at any time, for any reason, with no failure required — this is the one call you make when the driver misbehaves, because the fastest way to adjust the code is to look at the screen and see why the current implementation fails. Restores the window first (a minimized window's tree does not update), so it is safe to call on an app you have not otherwise touched. Returns an EMPTY snapshot rather than throwing if the app is not running or not readable — \"we could not see\" is an answer, and it is a different answer from \"it is not there\"." },
    ],
    properties: [
      { name: "auto", type: "Automation" },
      { name: "diagnostics", type: "Diagnostics" },
      { name: "gateway", type: "Gateway" },
      { name: "navigator", type: "Navigator" },
      { name: "screen", type: "Screen" },
      { name: "session", type: "Session" },
      { name: "sidebar", type: "Sidebar" },
      { name: "window", type: "Window" },
    ],
  },
  {
    name: "CodePart",
    extends: "Part",
    origin: "components/part.ts",
    methods: [
      { name: "toMarkdown", params: [], returns: "string", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "code", type: "string" },
      { name: "language", type: "string" },
      { name: "type", type: "unknown" },
    ],
  },
  {
    name: "Composer",
    extends: null,
    origin: "components/composer.ts",
    methods: [
      { name: "attach", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "clear", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "paste", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Paste text via the clipboard. A large paste is turned into a pasted attachment by the app — which is how a big payload is attached. If the box already holds text, two newlines are pasted ahead of it so the add lands cleanly. Verifies the message changed — the draft grew, or an attachment appeared — so calling this after `type` is safe. The human equivalent: pasting." },
      { name: "readDraft", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "send", params: [], returns: "Promise<ConversationPage>", isAsync: true, doc: "Click Send, confirm the message left the box, then reconstitute the ConversationPage you land on. Whether a response then appears is the page's job (decision #2) — call page.response.waitUntilStreaming() for that. Verify = the Send button is gone. The message submitted → Send becomes Stop, or the composer empties. readDraft===''  is NOT reliable here: an empty conversation composer reports its placeholder \"Write a message…\" as its value, so it never reads as '' (grounded live, diag-send 2026-06-21)." },
      { name: "type", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Type text directly into the box — the value is set in place, not a clipboard event, so it never becomes a pasted attachment; text added this way always stays as composer text. Verifies the draft actually changed, so it is safe to call before or after `paste`. The human equivalent: typing." },
    ],
    properties: [

    ],
  },
  {
    name: "ComposerController",
    extends: null,
    origin: "controllers/composer-controller.ts",
    methods: [
      { name: "clickAttach", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "clickSend", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "countPastedAttachments", params: [], returns: "Promise<number>", isAsync: true, doc: "How many pasted-text attachments are present. A large paste becomes one of these instead of draft text, so it is how `paste` confirms a big add landed." },
      { name: "focusComposer", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "hasSendButton", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "paste", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "readDraft", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "removePastedAttachment", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "selectAllAndDelete", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "typeInline", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "Content",
    extends: null,
    origin: "components/turn.ts",
    methods: [
      { name: "[Symbol.iterator]", params: [], returns: "Iterator<ContentBlock>", isAsync: false, doc: "" },
      { name: "toMarkdown", params: [], returns: "string", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "blocks", type: "ContentBlock[]" },
      { name: "length", type: "number" },
      { name: "text", type: "string" },
    ],
  },
  {
    name: "ConversationController",
    extends: null,
    origin: "controllers/conversation-controller.ts",
    methods: [
      { name: "canSend", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "checkStreaming", params: [{ name: "baselineLength", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Real streamed TEXT is flowing: the Document has grown past `baselineLength` (new tokens arrived) AND generation is active (Stop button present). This is the honest \"is it streaming\" — distinct from hasStreamingIndicator(), the \"Claude is responding/thinking\" notification, which is a status element that can be present with zero output. Grounded: src/trees/conversation-streaming.txt (the body lives only in the Document's text, not in named elements)." },
      { name: "clickRenameChat", params: [], returns: "Promise<boolean>", isAsync: true, doc: "Click the page header's rename affordance, a Button named \"<title>, rename chat\". Matched by the \", rename chat\" SUFFIX, not the title — Desktop re-titles a new conversation (sometimes twice) while we work, so the title prefix is unstable. Grounded: src/trees/conversation-streaming.txt and the new-conversation capture (the affordance is on the page we're already on, so no sidebar-name match is needed)." },
      { name: "copyMessage", params: [{ name: "index", type: "number", optional: false }], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "currentTitle", params: [], returns: "Promise<string | null>", isAsync: true, doc: "The conversation's EXACT current title, read from the header's \"<title>, rename chat\" button — authoritative and guaranteed to match the \"More options for <title>\" button, unlike parseTitleFromText (a heuristic on the page text). Returns null if no conversation header is present." },
      { name: "delete", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "editMessage", params: [{ name: "index", type: "number", optional: false }, { name: "newText", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "expandThinking", params: [{ name: "messageIndex", type: "number", optional: false }], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "hasResponseContent", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "hasStopButton", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "hasStreamingIndicator", params: [], returns: "Promise<boolean>", isAsync: true, doc: "The \"Claude is responding\" / \"Claude is thinking\" NOTIFICATION — a status element, NOT response text. Present during both thinking and streaming, and it can freeze with no output (Doug). Never use it to prove text is flowing." },
      { name: "hasThinkingBlock", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isAtBottom", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isChatNameFieldActive", params: [], returns: "Promise<boolean>", isAsync: true, doc: "The header rename opens an Edit named \"Chat name\" (grounded: diag-rename, the new-conversation capture) — distinct from the sidebar menu's \"Edit | Rename\". Its presence is the field-active signal." },
      { name: "isComplete", params: [{ name: "settleMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "IS the response over? Settle once, look once, answer honestly. This used to poll for up to FIVE MINUTES, scrolling the user's window on every iteration. A driver does not get to hold a screen for five minutes. \"Not yet\" is a perfectly good answer: ask again when you have reason to think it changed, and if it never finishes, read the tree and find out why." },
      { name: "isResponseComplete", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "readElements", params: [], returns: "Promise<string[]>", isAsync: true, doc: "Every named element, in document order — the Response assembles parts from it." },
      { name: "readLastResponse", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readMessageCount", params: [], returns: "Promise<number>", isAsync: true, doc: "" },
      { name: "readMessages", params: [], returns: "Promise<ChatMessage[]>", isAsync: true, doc: "" },
      { name: "readProjectName", params: [], returns: "Promise<string | null>", isAsync: true, doc: "" },
      { name: "readResponse", params: [], returns: "Promise<ConversationMessage | null>", isAsync: true, doc: "" },
      { name: "readResponseText", params: [], returns: "Promise<string>", isAsync: true, doc: "The latest assistant response's body text, sliced from the Document." },
      { name: "readStructuredMessages", params: [], returns: "Promise<ConversationMessage[]>", isAsync: true, doc: "" },
      { name: "readTitle", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readTurns", params: [], returns: "Promise<Turn[]>", isAsync: true, doc: "" },
      { name: "readUrl", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "regenerateLastResponse", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "rename", params: [{ name: "newTitle", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "scrollToBottom", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "scrollToTop", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "typeChatName", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Type into the open \"Chat name\" field and commit. The field opens with the current title selected, so a paste replaces it; Enter commits." },
      { name: "waitForResponse", params: [{ name: "settleMs", type: "unknown", optional: true }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "waitForStreamingStart", params: [{ name: "settleMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Rapidly wait (gateway, 50ms tapering) for the response to START — scroll to bottom, then checkStreaming, each poll (lazy rendering). As soon as this returns true, the caller should MINIMIZE and read later. False on timeout." },
    ],
    properties: [

    ],
  },
  {
    name: "ConversationItem",
    extends: null,
    origin: "components/chat-list.ts",
    methods: [
      { name: "menu", params: [], returns: "Promise<ConversationMenu>", isAsync: true, doc: "Open the three-dot menu — returns the ConversationMenu." },
      { name: "open", params: [], returns: "Promise<ConversationPage>", isAsync: true, doc: "Open this conversation — navigates and returns the ConversationPage." },
    ],
    properties: [
      { name: "name", type: "string" },
    ],
  },
  {
    name: "ConversationMenu",
    extends: null,
    origin: "components/chat-list.ts",
    methods: [
      { name: "addToProject", params: [], returns: "Promise<MoveConversationModal>", isAsync: true, doc: "Click Add to project — returns the Move chat modal (a real dialog with a project list and a search bar; NOT a unitary action). Read its projects() or search() to narrow, then select() one." },
      { name: "close", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "delete", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "pin", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "removeFromProject", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "rename", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Rename the conversation. Clicking \"Rename\" turns the title into an inline text field with its text pre-selected; we type the new name and commit with Enter. There is no confirm button — the field is just a textbox, so this is one action. Takes a string because it types into that textbox (the one law that permits a parameter)." },
    ],
    properties: [
      { name: "isInProject", type: "boolean" },
      { name: "items", type: "string[]" },
    ],
  },
  {
    name: "ConversationPage",
    extends: "Page",
    origin: "pages/conversation.ts",
    methods: [
      { name: "canSend", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "hasResponseContent", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "hasStopButton", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isResponseComplete", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "menu", params: [], returns: "Promise<ConversationMenu>", isAsync: true, doc: "The three-dot conversation menu — reached from the page header. The header carries the same \"More options for <title>\" button and the same MenuItems (Rename, Add to project, Delete, …) as a sidebar item, so it reuses the one ConversationMenu class and the chat-list controller's menu actuators (the legal home for those UIA names)." },
      { name: "messages", params: [], returns: "Promise<ChatMessage[]>", isAsync: true, doc: "The conversation's messages, read from the tree." },
      { name: "rename", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Rename this conversation via the page header's \"<title>, rename chat\" button — robust to Desktop re-titling a freshly-created conversation underneath us (matched by suffix, not title). Opens the inline Edit \"Rename\" field, types the new name, commits with Enter. Takes a string because it types into the textbox (the one law that permits a parameter)." },
      { name: "scrollToBottom", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "scrollToTop", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "title", params: [], returns: "Promise<string>", isAsync: true, doc: "This conversation's title, read from the page header. The one fact a caller needs to confirm we are on the RIGHT topic before reusing the page — the session remembers a URL, not a topic, so \"on a conversation\" is not \"on the right conversation\". Empty string if the header has no readable title yet." },
    ],
    properties: [
      { name: "artifacts", type: "ArtifactPanel" },
      { name: "composer", type: "Composer" },
      { name: "response", type: "Response" },
      { name: "screenType", type: "string" },
    ],
  },
  {
    name: "Diagnostics",
    extends: null,
    origin: "diagnostics.ts",
    methods: [
      { name: "captureOnFailure", params: [{ name: "description", type: "string", optional: false }], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "record", params: [{ name: "description", type: "string", optional: false }, { name: "success", type: "boolean", optional: false }, { name: "durationMs", type: "number", optional: false }, { name: "error", type: "string", optional: true }], returns: "void", isAsync: false, doc: "" },
      { name: "snapshot", params: [], returns: "Promise<TreeSnapshot>", isAsync: true, doc: "The screen right now, as a value. Diagnostics is where \"look at what is actually there\" lives, so the gateway asks here rather than holding its own Uia — the gateway stays a discipline layer that knows nothing about trees. Every tree taken through here is remembered." },
      { name: "summary", params: [], returns: "string", isAsync: false, doc: "" },
      { name: "treeHistory", params: [], returns: "string", isAsync: false, doc: "One line per remembered tree: how long ago, how big, what was in it. The orientation you want before deciding which one to actually print." },
    ],
    properties: [
      { name: "history", type: "ActionRecord[]" },
      { name: "lastAction", type: "ActionRecord | undefined" },
      { name: "lastTree", type: "TreeSnapshot | undefined" },
      { name: "recentFailures", type: "ActionRecord[]" },
      { name: "trees", type: "TreeSnapshot[]" },
    ],
  },
  {
    name: "DriverError",
    extends: "Error",
    origin: "errors.ts",
    methods: [
      { name: "toJSON", params: [], returns: "{ name: string; message: string; tree?: ReturnType<TreeSnapshot['toJSON']> }", isAsync: false, doc: "Serializable form — the error payload that travels back to a caller." },
      { name: "withTree", params: [{ name: "tree", type: "TreeSnapshot | undefined", optional: false }], returns: "this", isAsync: false, doc: "Attach the evidence and return this, so a raise site reads as one expression." },
    ],
    properties: [
      { name: "detail", type: "string" },
      { name: "tree", type: "TreeSnapshot" },
    ],
  },
  {
    name: "FileDialog",
    extends: null,
    origin: "components/file-dialog.ts",
    methods: [
      { name: "cancel", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "detect", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "submit", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "typePath", params: [{ name: "filePath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "waitUntilOpen", params: [{ name: "settleMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Settle once, then look once. Not a poll: \"is the dialog open?\" has an answer, and asking it fifty times does not make the answer better." },
    ],
    properties: [
      { name: "isOpen", type: "unknown" },
      { name: "path", type: "unknown" },
    ],
  },
  {
    name: "FilesPane",
    extends: null,
    origin: "components/files-pane.ts",
    methods: [
      { name: "addTextContent", params: [{ name: "title", type: "string", optional: false }, { name: "content", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "collapseMenu", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "connectGitHub", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "detect", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "expandMenu", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "resetMenu", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "uploadFromDevice", params: [{ name: "filePath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "fileDialog", type: "FileDialog" },
      { name: "menuExpanded", type: "unknown" },
      { name: "showing", type: "unknown" },
      { name: "textContentDialog", type: "TextContentDialog" },
    ],
  },
  {
    name: "Gateway",
    extends: null,
    origin: "gateway.ts",
    methods: [
      { name: "act", params: [{ name: "action", type: "() => void | Promise<void>", optional: false }, { name: "verify", type: "() => boolean | Promise<boolean>", optional: false }, { name: "options", type: "GatewayOptions", optional: true }], returns: "Promise<void>", isAsync: true, doc: "Precheck → act once → settle → look once. **Precheck** (when `options.target` is given): confirm the element the actuator is about to touch is on screen. If it is not, throw BEFORE firing — the action did not happen, the error names what was expected, and it carries the tree that disagreed. **Act** fires exactly once. **Look** happens exactly once, after a single settle. If the look says no, we do not look again: we hand back the tree and minimize. Read the tree, fix the code, run it again." },
      { name: "check", params: [{ name: "predicate", type: "() => boolean | Promise<boolean>", optional: false }, { name: "options", type: "Pick<GatewayOptions, 'settleMs' | 'description'>", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Settle once, then look once. Returns what it saw — no loop, no deadline. Callers that used this to wait for something slow now get a straight answer about the moment they asked. If the answer is wrong, the tree says why." },
      { name: "read", params: [{ name: "reader", type: "() => T | Promise<T>", optional: false }, { name: "isValid", type: "(result: T) => boolean", optional: true }, { name: "options", type: "GatewayOptions", optional: true }], returns: "Promise<T>", isAsync: true, doc: "Read once. If what came back is not valid, hand over the tree and stand down — do not read again hoping for a different answer." },
      { name: "tree", params: [], returns: "Promise<TreeSnapshot>", isAsync: true, doc: "The screen right now. One walk answers many questions, and it is the cheapest thing in the driver (~80ms). Never throws — an unreadable app yields an empty snapshot, which means \"we could not see\", not \"it is not there\"." },
      { name: "waitFor", params: [{ name: "predicate", type: "() => boolean | Promise<boolean>", optional: false }, { name: "options", type: "Pick<GatewayOptions, 'settleMs' | 'description'>", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "The old name, kept so call sites read the same. It does NOT wait for anything repeatedly — it settles once and looks once, exactly like `check`." },
    ],
    properties: [

    ],
  },
  {
    name: "HomePage",
    extends: "Page",
    origin: "pages/home.ts",
    methods: [

    ],
    properties: [
      { name: "composer", type: "Composer" },
      { name: "modelPicker", type: "ModelPicker" },
      { name: "screenType", type: "string" },
    ],
  },
  {
    name: "Keyboard",
    extends: null,
    origin: "keyboard.ts",
    methods: [
      { name: "clickAt", params: [{ name: "xFraction", type: "number", optional: false }, { name: "yFromBottom", type: "number", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "copyFileToClipboard", params: [{ name: "filePath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "copyImageToClipboard", params: [{ name: "imagePath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "delete", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "pressEnter", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "readClipboard", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "selectAll", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "sendKeys", params: [{ name: "keys", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "typeViaClipboard", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "Lazy",
    extends: null,
    origin: "lazy.ts",
    methods: [
      { name: "preview", params: [{ name: "value", type: "T", optional: false }], returns: "void", isAsync: false, doc: "" },
      { name: "reset", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "update", params: [{ name: "value", type: "T", optional: false }], returns: "void", isAsync: false, doc: "" },
      { name: "wait", params: [], returns: "Promise<T>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "loaded", type: "boolean" },
      { name: "loading", type: "boolean" },
      { name: "value", type: "T" },
    ],
  },
  {
    name: "Message",
    extends: null,
    origin: "components/composed-message.ts",
    methods: [
      { name: "attachFile", params: [{ name: "filePath", type: "string", optional: false }], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "clear", params: [], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "paste", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "pasteImage", params: [], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "pasteImageFile", params: [{ name: "imagePath", type: "string", optional: false }], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "read", params: [], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "removeAttachment", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "send", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "write", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<MessageState>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "hasError", type: "unknown" },
      { name: "lastError", type: "Error | null" },
    ],
  },
  {
    name: "MessageController",
    extends: null,
    origin: "controllers/composed-message-controller.ts",
    methods: [
      { name: "attachFile", params: [{ name: "filePath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "clear", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "paste", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "pasteFromClipboard", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "pasteImageFile", params: [{ name: "imagePath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "read", params: [], returns: "Promise<MessageState>", isAsync: true, doc: "" },
      { name: "readAttachments", params: [], returns: "Promise<Attachment[]>", isAsync: true, doc: "" },
      { name: "readText", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "removeAttachment", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "send", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "write", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Write the whole message in ONE action. This used to loop the lines: paste a line, press Shift+Enter, paste the next — N clipboard writes and N keystrokes synthesised into the user's window for one message. `setValue` through the ValuePattern sets the entire text, newlines included, in a single call, and it is the mechanism the pitfalls chapter already recommends over pasting (a paste becomes an ATTACHMENT, not text)." },
    ],
    properties: [

    ],
  },
  {
    name: "ModelPicker",
    extends: null,
    origin: "components/model-picker.ts",
    methods: [
      { name: "currentModel", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "currentThinking", params: [], returns: "Promise<ThinkingMode>", isAsync: true, doc: "" },
      { name: "refresh", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "selectModel", params: [{ name: "model", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "selectThinking", params: [{ name: "mode", type: "ThinkingMode", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "hasError", type: "unknown" },
      { name: "lastError", type: "Error | null" },
      { name: "model", type: "unknown" },
      { name: "thinking", type: "ThinkingMode" },
    ],
  },
  {
    name: "ModelPickerController",
    extends: null,
    origin: "controllers/model-picker-controller.ts",
    methods: [
      { name: "readModel", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readThinking", params: [], returns: "Promise<ThinkingMode>", isAsync: true, doc: "" },
      { name: "selectModel", params: [{ name: "model", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "selectThinking", params: [{ name: "mode", type: "ThinkingMode", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "MoveConversationModal",
    extends: null,
    origin: "components/move-conversation-modal.ts",
    methods: [
      { name: "cancel", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "projects", params: [], returns: "Promise<ProjectChoice[]>", isAsync: true, doc: "The projects currently listed in the modal (filtered, if you searched)." },
      { name: "search", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Type into the modal's search bar to filter the project list. The modal opens with its search box focused, so the text goes straight there. The only method on the modal that takes a parameter. Read projects() after to get the filtered choices." },
    ],
    properties: [

    ],
  },
  {
    name: "Navigation",
    extends: null,
    origin: "pages/navigation.ts",
    methods: [
      { name: "conversation", params: [], returns: "ConversationPage", isAsync: false, doc: "" },
      { name: "currentPage", params: [], returns: "Promise<Page>", isAsync: true, doc: "Reconstitute the page for the screen we are actually on, confirming via detectScreen(). Used by launch() and any navigation that can land on more than one screen." },
      { name: "home", params: [], returns: "HomePage", isAsync: false, doc: "" },
      { name: "pageFor", params: [{ name: "screen", type: "Screen", optional: false }], returns: "Page", isAsync: false, doc: "" },
      { name: "pageForUrl", params: [{ name: "url", type: "string", optional: false }], returns: "Page", isAsync: false, doc: "The id→page factory: parse a URL and build the typed page for it. The one cast lives here, contained — each branch constructs a concrete page returned as Page. A conversation is /chat/<id>, a project /project/<id>, the projects list /projects, anything else is home." },
      { name: "project", params: [], returns: "ProjectPage", isAsync: false, doc: "" },
      { name: "projects", params: [], returns: "ProjectsPage", isAsync: false, doc: "" },
      { name: "waitForConversation", params: [{ name: "settleMs", type: "unknown", optional: true }], returns: "Promise<ConversationPage>", isAsync: true, doc: "Wait for the conversation screen, then reconstitute the ConversationPage. This is the home→conversation transition (decision #4) — no macro, just navigate-and-confirm." },
    ],
    properties: [
      { name: "auto", type: "Automation" },
    ],
  },
  {
    name: "NavigationError",
    extends: "DriverError",
    origin: "errors.ts",
    methods: [

    ],
    properties: [
      { name: "actual", type: "Screen" },
      { name: "expected", type: "Screen" },
    ],
  },
  {
    name: "Navigator",
    extends: null,
    origin: "navigator.ts",
    methods: [
      { name: "detectOverlays", params: [], returns: "Promise<{ dialog: boolean; menu: boolean }>", isAsync: true, doc: "Is a dialog or a menu sitting over the app? One tree read, both answers, and it also updates `hasOpenDialog` / `hasOpenMenu` for anyone reading the fields. Separate from `detectScreen` because knowing WHERE you are and knowing WHAT is covering it are different questions with very different costs." },
      { name: "detectScreen", params: [], returns: "Promise<Screen>", isAsync: true, doc: "Which screen are we on? **The URL is the whole answer** — `screenFromUrl` is the only thing that decides, and it needs nothing else. This used to walk the entire UIA tree on every call, to set `hasOpenDialog` and `hasOpenMenu`. Nothing in the driver reads those. Meanwhile this method is the verify predicate for nearly every navigation in the app, so a poll loop paid a full tree walk per iteration for two booleans no one consumed. Overlay detection now lives in [`detectOverlays`](#) and is asked for when wanted." },
      { name: "ensureHome", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "goHome", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "goToProjects", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "goToSettings", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "leaveSettings", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "requireScreen", params: [{ name: "allowed", type: "Screen[]", optional: false }], returns: "void", isAsync: false, doc: "" },
      { name: "resetToHome", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "hasOpenDialog", type: "unknown" },
      { name: "hasOpenMenu", type: "unknown" },
      { name: "lastError", type: "Error | null" },
      { name: "screen", type: "Screen" },
    ],
  },
  {
    name: "Page",
    extends: null,
    origin: "pages/page.ts",
    methods: [
      { name: "id", params: [], returns: "Promise<string>", isAsync: true, doc: "This page's stable id — its URL (claude.ai/chat/<id>, /project/<id>, /new, /projects). Every screen has one. The app has no URL-navigation, but the URL is a reliable IDENTITY: the session stores it and validates \"are we still on this page?\" against the live tree — it never assumes (the app may have restarted or been navigated away)." },
      { name: "sidebar", params: [], returns: "Sidebar", isAsync: false, doc: "The one panel on every page — the global conversation list, projects, search." },
    ],
    properties: [
      { name: "screenType", type: "string" },
    ],
  },
  {
    name: "Part",
    extends: null,
    origin: "components/part.ts",
    methods: [
      { name: "toMarkdown", params: [], returns: "string", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "type", type: "string" },
    ],
  },
  {
    name: "PreconditionError",
    extends: "DriverError",
    origin: "errors.ts",
    methods: [

    ],
    properties: [
      { name: "description", type: "string" },
      { name: "expected", type: "{ type?: string; name?: string; contains?: string }" },
    ],
  },
  {
    name: "ProjectChoice",
    extends: null,
    origin: "components/move-conversation-modal.ts",
    methods: [
      { name: "select", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "name", type: "string" },
    ],
  },
  {
    name: "ProjectController",
    extends: null,
    origin: "controllers/project-controller.ts",
    methods: [
      { name: "downloadFile", params: [{ name: "name", type: "string", optional: false }, { name: "outputPath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "editDescription", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "listFiles", params: [], returns: "Promise<ProjectFile[]>", isAsync: true, doc: "" },
      { name: "loadAllConversations", params: [], returns: "Promise<{ title: string; lastMessage: string }[]>", isAsync: true, doc: "Scroll to the end, expand the list once, read it. **One pass.** This used to loop up to twenty times: scroll, click \"Show more\", wait for growth, repeat — each iteration synthesising an END keypress and a click into the app. That is a background process typing and clicking into someone's window, over and over, for as long as it felt like it. Nothing justifies that. If one expansion does not reveal everything, the answer is a better read — not more clicking. Read the tree, see how the list is actually paged, and change this code." },
      { name: "newConversation", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "readConversations", params: [], returns: "Promise<{ title: string; lastMessage: string }[]>", isAsync: true, doc: "" },
      { name: "readDescription", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readFileContent", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readInstructions", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readName", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "readUrl", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "removeFile", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "rename", params: [{ name: "newName", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "uploadFile", params: [{ name: "localPath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "writeInstructions", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "ProjectFile",
    extends: null,
    origin: "components/project-file.ts",
    methods: [
      { name: "remove", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "view", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "contents", type: "ProjectFileContents" },
      { name: "label", type: "string" },
      { name: "lines", type: "number" },
      { name: "name", type: "string" },
      { name: "type", type: "string" },
    ],
  },
  {
    name: "ProjectItem",
    extends: null,
    origin: "pages/projects-grid.ts",
    methods: [
      { name: "open", params: [], returns: "Promise<ProjectPage>", isAsync: true, doc: "Open this project — navigates and returns the ProjectPage." },
    ],
    properties: [
      { name: "date", type: "string" },
      { name: "label", type: "string" },
      { name: "name", type: "string" },
    ],
  },
  {
    name: "ProjectNotFoundError",
    extends: "DriverError",
    origin: "errors.ts",
    methods: [

    ],
    properties: [
      { name: "projectName", type: "string" },
    ],
  },
  {
    name: "ProjectPage",
    extends: "Page",
    origin: "pages/project.ts",
    methods: [
      { name: "bind", params: [{ name: "nav", type: "Navigation", optional: false }], returns: "this", isAsync: false, doc: "" },
      { name: "conversations", params: [], returns: "Promise<ConversationItem[]>", isAsync: true, doc: "The project's conversations — unified ConversationItem (same as sidebar)." },
      { name: "files", params: [], returns: "Promise<ProjectFile[]>", isAsync: true, doc: "The project's files — each ProjectFile carries its own actions." },
      { name: "instructions", params: [], returns: "Promise<string>", isAsync: true, doc: "Read the project instructions." },
    ],
    properties: [
      { name: "composer", type: "Composer" },
      { name: "filesPanel", type: "FilesPane" },
      { name: "screenType", type: "string" },
    ],
  },
  {
    name: "ProjectsPage",
    extends: "Page",
    origin: "pages/projects-grid.ts",
    methods: [
      { name: "bind", params: [{ name: "nav", type: "Navigation", optional: false }], returns: "this", isAsync: false, doc: "" },
      { name: "projects", params: [], returns: "Promise<ProjectItem[]>", isAsync: true, doc: "The project list. Find by name: `.find(p => p.name === …)`. Read from the HYPERLINKS, not the list items. The hyperlink is the thing you click, so its name is the only string that is guaranteed to work as a click target — and it is kept verbatim as `label`. Reading `ListItem` names and then clicking hyperlinks meant reading one string and acting on a different one." },
    ],
    properties: [
      { name: "screenType", type: "string" },
    ],
  },
  {
    name: "Prompt",
    extends: null,
    origin: "components/turn.ts",
    methods: [
      { name: "edit", params: [{ name: "_newText", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "attachments", type: "Attachment[]" },
      { name: "content", type: "Content" },
      { name: "date", type: "string" },
    ],
  },
  {
    name: "Response",
    extends: null,
    origin: "components/turn.ts",
    methods: [
      { name: "copy", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "dislike", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "like", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "retry", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "artifacts", type: "Artifact[]" },
      { name: "content", type: "Content" },
      { name: "date", type: "string" },
      { name: "thinking", type: "Thinking | null" },
    ],
  },
  {
    name: "Session",
    extends: null,
    origin: "session.ts",
    methods: [
      { name: "forget", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "inSync", params: [], returns: "Promise<boolean>", isAsync: true, doc: "Are we in SYNC with the app — still on the page we remembered? Restores the window, reads the LIVE URL, and compares. False if nothing is remembered, the app isn't running, or it has moved. Never assumes." },
      { name: "remember", params: [], returns: "Promise<void>", isAsync: true, doc: "Remember the page the app is on now, by its URL." },
    ],
    properties: [
      { name: "rememberedUrl", type: "string | null" },
    ],
  },
  {
    name: "Shell",
    extends: null,
    origin: "shell.ts",
    methods: [
      { name: "close", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "run", params: [{ name: "script", type: "string", optional: false }, { name: "timeoutMs", type: "unknown", optional: true }], returns: "Promise<string>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "Sidebar",
    extends: null,
    origin: "components/sidebar.ts",
    methods: [
      { name: "bind", params: [{ name: "nav", type: "Navigation", optional: false }], returns: "void", isAsync: false, doc: "" },
      { name: "closeSearch", params: [], returns: "Promise<void>", isAsync: true, doc: "Close the search overlay — it is a window over the app, and leaving it open blocks everything behind it." },
      { name: "conversations", params: [], returns: "Promise<ConversationItem[]>", isAsync: true, doc: "The global conversation list. Find by name: `.find(c => c.name === …)`." },
      { name: "isVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "newChat", params: [], returns: "Promise<HomePage>", isAsync: true, doc: "Start a fresh chat — lands on the home page (decision #4)." },
      { name: "projects", params: [], returns: "Promise<ProjectsPage>", isAsync: true, doc: "Navigate to the projects page." },
      { name: "search", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "switchToChat", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "SidebarController",
    extends: null,
    origin: "controllers/sidebar-controller.ts",
    methods: [
      { name: "checkVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "closeSearch", params: [], returns: "Promise<void>", isAsync: true, doc: "Close the search overlay. Escape is what a person presses." },
      { name: "newChat", params: [], returns: "Promise<void>", isAsync: true, doc: "Start a fresh chat. LOOK FIRST. This hard-coded `'New chat'` and broke silently when the app renamed the button to `'New'` — the same drift the [navigator](../navigator.ts) had already been taught to survive, in a second place that had not been. One list, read from the tree before acting." },
      { name: "openProjects", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "search", params: [{ name: "query", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Search opens a SEPARATE WINDOW, not an inline box. Grounded in the tree: invoking `Search` adds `Window | Search`, a `ComboBox | Search chats and projects`, and a `List | Search results`. The old code called `setValue('Search', …)` — there is no element by that name to write into — and then verified by looking for the query in `readText()`, which reads the MAIN window and never sees the overlay at all. It could not have passed." },
      { name: "switchToChat", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "toggle", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "TextContentDialog",
    extends: null,
    origin: "components/text-content-dialog.ts",
    methods: [
      { name: "cancel", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "detect", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "readTitleField", params: [], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "setContent", params: [{ name: "content", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "setTitle", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "submit", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "verifyOpen", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "waitUntilReady", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "content", type: "unknown" },
      { name: "isOpen", type: "unknown" },
      { name: "title", type: "unknown" },
    ],
  },
  {
    name: "TextPart",
    extends: "Part",
    origin: "components/part.ts",
    methods: [
      { name: "toMarkdown", params: [], returns: "string", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "text", type: "string" },
      { name: "type", type: "unknown" },
    ],
  },
  {
    name: "ThinkingPart",
    extends: "Part",
    origin: "components/part.ts",
    methods: [
      { name: "toMarkdown", params: [], returns: "string", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "summary", type: "string" },
      { name: "type", type: "unknown" },
    ],
  },
  {
    name: "TreeSnapshot",
    extends: null,
    origin: "tree.ts",
    methods: [
      { name: "empty", params: [{ name: "capturedAt", type: "number", optional: true }], returns: "TreeSnapshot", isAsync: false, doc: "An empty tree — the app was unreadable. Distinguishable from a tree with no matches: `isEmpty` is true only here, and it means \"we could not see\", not \"it is not there\". Never let the two collapse; that is how a precondition turns into a lie." },
      { name: "filter", params: [{ name: "query", type: "TreeQuery", optional: false }], returns: "TreeElement[]", isAsync: false, doc: "Every element matching the query, in document order." },
      { name: "find", params: [{ name: "query", type: "TreeQuery", optional: false }], returns: "TreeElement | undefined", isAsync: false, doc: "The first element matching the query, or undefined — an honest \"not on screen\". A returned element is proof the thing was there when the tree was read." },
      { name: "from", params: [{ name: "lines", type: "readonly string[]", optional: false }, { name: "capturedAt", type: "number", optional: true }], returns: "TreeSnapshot", isAsync: false, doc: "Build from the raw `ControlType.X | Name` lines that `Uia.allNames()` returns." },
      { name: "has", params: [{ name: "query", type: "TreeQuery", optional: false }], returns: "boolean", isAsync: false, doc: "Is anything matching this query on screen? The precondition's question." },
      { name: "toJSON", params: [], returns: "{ capturedAt: number; size: number; elements: TreeElement[] }", isAsync: false, doc: "Serializable form — this is what travels as a response payload or rides on an error. No methods, no cycles, no file paths." },
      { name: "toString", params: [], returns: "string", isAsync: false, doc: "Printed for a person to read: a type summary, then every element aligned by type. Long names are kept whole — truncating the tree is how you lose the one detail you were looking for." },
      { name: "types", params: [], returns: "{ type: string; count: number }[]", isAsync: false, doc: "Every distinct control type present, with how many of each. Orientation when you do not yet know what you are looking at." },
      { name: "where", params: [{ name: "query", type: "TreeQuery", optional: false }], returns: "TreeSnapshot", isAsync: false, doc: "A narrowed snapshot — same capture, fewer elements. Indices are preserved from the original so a filtered view still tells you where you are in the document." },
    ],
    properties: [
      { name: "capturedAt", type: "number" },
      { name: "elements", type: "readonly TreeElement[]" },
      { name: "isEmpty", type: "boolean" },
      { name: "size", type: "number" },
    ],
  },
  {
    name: "Uia",
    extends: null,
    origin: "uia.ts",
    methods: [
      { name: "allNames", params: [], returns: "Promise<string[]>", isAsync: true, doc: "" },
      { name: "clickByName", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "countElements", params: [{ name: "controlType", type: "string", optional: false }], returns: "Promise<number>", isAsync: true, doc: "" },
      { name: "exists", params: [{ name: "controlType", type: "string", optional: false }, { name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "existsByName", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "expandByName", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "findAllNames", params: [{ name: "controlType", type: "string", optional: false }], returns: "Promise<string[]>", isAsync: true, doc: "" },
      { name: "findFileButtons", params: [], returns: "Promise<string[]>", isAsync: true, doc: "" },
      { name: "invoke", params: [{ name: "controlType", type: "string", optional: false }, { name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "invokeByName", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "invokeByNameLast", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "invokeLink", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "readListItems", params: [], returns: "Promise<string[]>", isAsync: true, doc: "" },
      { name: "readText", params: [], returns: "Promise<string | null>", isAsync: true, doc: "" },
      { name: "readUrl", params: [], returns: "Promise<string | null>", isAsync: true, doc: "" },
      { name: "readValue", params: [{ name: "name", type: "string", optional: false }], returns: "Promise<string | null>", isAsync: true, doc: "" },
      { name: "setValue", params: [{ name: "name", type: "string", optional: false }, { name: "value", type: "string", optional: false }], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "snapshot", params: [], returns: "Promise<TreeSnapshot>", isAsync: true, doc: "The tree as a value you can hold, query, print, and send — one walk, parsed. This is the read that serves a precondition, a verification, and an error's evidence, so take it once and pass the snapshot rather than asking the shell again per question. Never throws: an unreadable app yields an EMPTY snapshot, which means \"we could not see\", not \"it is not there\"." },
    ],
    properties: [

    ],
  },
  {
    name: "Window",
    extends: null,
    origin: "window.ts",
    methods: [
      { name: "close", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "find", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "focus", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "holdScreen", params: [{ name: "session", type: "() => Promise<T>", optional: false }], returns: "Promise<T>", isAsync: true, doc: "Hold the window up for the duration of a session, then give it back once." },
      { name: "isForeground", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isMinimized", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "launch", params: [{ name: "shortcutPath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "maximize", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "minimize", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "requireForeground", params: [], returns: "Promise<void>", isAsync: true, doc: "Bring the window forward. **Once.** This used to try five times, each attempt synthesising an Alt keypress and calling `SetForegroundWindow`, with a 400ms sleep between. That is two seconds of a background process repeatedly taking the keyboard away from whoever is using the machine. It is not a driver being careful; it is a driver fighting the user for their own computer, and it is not allowed. One attempt. One check. If Windows will not, we GIVE UP AND GIVE THE SCREEN BACK — `stepAside()` minimizes and the caller fails. Never a second grab." },
      { name: "screenshot", params: [{ name: "outputPath", type: "string", optional: false }], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "state", params: [], returns: "Promise<WindowState>", isAsync: true, doc: "Foreground AND minimized, in one crossing. Asking them separately is two round trips for one question about one window, and the gateway asks on every action." },
      { name: "stepAside", params: [], returns: "Promise<void>", isAsync: true, doc: "Get out of the way. The one recovery this driver has: when something is stuck, minimize and stop — never try again, never hold the screen. Best effort by design; if even this fails there is nothing further to do and nothing further is attempted." },
      { name: "waitForUia", params: [{ name: "settleMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Give the renderer time to build its accessibility tree, then look ONCE." },
      { name: "waitForWindow", params: [{ name: "settleMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Give a launching app time to appear, then look ONCE. A launch genuinely takes a while, so waiting is honest — \"I did not wait long enough\" is real evidence. Polling for thirty seconds is not: it is the same question asked sixty times. Wait the time an app takes to start, then look. If it is not there, say so and stop." },
    ],
    properties: [
      { name: "handle", type: "number | null" },
      { name: "holdingScreen", type: "unknown" },
      { name: "isRunning", type: "boolean" },
      { name: "pid", type: "number | null" },
    ],
  },
  {
    name: "WrongScreenError",
    extends: "DriverError",
    origin: "errors.ts",
    methods: [

    ],
    properties: [
      { name: "actual", type: "Screen" },
      { name: "allowed", type: "Screen[]" },
    ],
  },
];

/** The generated surface, keyed by class name — what the CLI reads instead of
 *  walking the disk and rebuilding a syntax tree on every command. */
export const SURFACE_BY_NAME: ReadonlyMap<AppClassName, ClassSurface> =
  new Map(APP_SURFACE.map(c => [c.name as AppClassName, c]));
