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
    methods: [
      { name: "clickAddToProject", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
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
      { name: "isMenuVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "isRenameFieldActive", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "open", params: [{ name: "title", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "openAt", params: [{ name: "index", type: "number", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "readList", params: [], returns: "Promise<ChatItemData[]>", isAsync: true, doc: "" },
      { name: "readMenuItems", params: [], returns: "Promise<string[]>", isAsync: true, doc: "" },
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
    methods: [

    ],
    properties: [
      { name: "title", type: "string" },
    ],
  },
  {
    name: "Claude",
    extends: null,
    methods: [
      { name: "attach", params: [], returns: "boolean", isAsync: false, doc: "Restore the running app's window WITHOUT going home (un-minimize + focus), so a resume can read whatever screen we are actually on. Returns false if the app isn't running or its UIA tree isn't available." },
      { name: "currentConversation", params: [], returns: "Promise<ConversationPage | null>", isAsync: true, doc: "Resume onto the conversation we are already on — TYPED. Returns the ConversationPage if the live screen IS a conversation (confirmed against the tree), else null so the caller navigates. This is the session: if the WRITE left us on the conversation (minimized), we stay there — no re-walking the nav tree, and no vague base Page to down-cast." },
      { name: "currentPage", params: [], returns: "Promise<Page>", isAsync: true, doc: "Reconstitute the page for whatever screen the app is actually on now. Used to resume (decision #1): read the screen, build that page object, confirmed." },
      { name: "currentProject", params: [], returns: "Promise<ProjectPage | null>", isAsync: true, doc: "Resume onto the Claude project page — TYPED. Returns the ProjectPage if the live screen is a project page, else null." },
      { name: "currentUrl", params: [], returns: "Promise<string>", isAsync: true, doc: "The URL of the page the app is currently on — the live page id, read fresh from the tree. The Session compares this against what it remembered." },
      { name: "detectScreen", params: [], returns: "Promise<Screen>", isAsync: true, doc: "" },
      { name: "dismissDialogs", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "exit", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
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
      { name: "waitForComplete", params: [{ name: "timeoutMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Rapidly wait (gateway) for the response to be OVER — scroll, then no Stop button AND content present (the \"and content\" guard avoids the false done)." },
      { name: "waitForResponse", params: [{ name: "timeoutMs", type: "number", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "waitForStreamingStart", params: [{ name: "timeoutMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "Rapidly wait (gateway, 50ms tapering) for the response to START — scroll to bottom, then checkStreaming, each poll (lazy rendering). As soon as this returns true, the caller should MINIMIZE and read later. False on timeout." },
    ],
    properties: [

    ],
  },
  {
    name: "ConversationItem",
    extends: null,
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
    methods: [
      { name: "captureOnFailure", params: [{ name: "description", type: "string", optional: false }], returns: "Promise<string>", isAsync: true, doc: "" },
      { name: "record", params: [{ name: "description", type: "string", optional: false }, { name: "success", type: "boolean", optional: false }, { name: "durationMs", type: "number", optional: false }, { name: "error", type: "string", optional: true }], returns: "void", isAsync: false, doc: "" },
      { name: "snapshot", params: [], returns: "Promise<TreeSnapshot>", isAsync: true, doc: "The screen right now, as a value. Diagnostics is where \"look at what is actually there\" lives, so the gateway asks here rather than holding its own Uia — the gateway stays a discipline layer that knows nothing about trees." },
      { name: "summary", params: [], returns: "string", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "history", type: "ActionRecord[]" },
      { name: "lastAction", type: "ActionRecord | undefined" },
      { name: "recentFailures", type: "ActionRecord[]" },
    ],
  },
  {
    name: "DriverError",
    extends: "Error",
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
    methods: [
      { name: "cancel", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "detect", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "submit", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "typePath", params: [{ name: "filePath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "waitUntilOpen", params: [{ name: "timeoutMs", type: "unknown", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "" },
    ],
    properties: [
      { name: "isOpen", type: "unknown" },
      { name: "path", type: "unknown" },
    ],
  },
  {
    name: "FilesPane",
    extends: null,
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
    methods: [
      { name: "act", params: [{ name: "action", type: "() => void | Promise<void>", optional: false }, { name: "verify", type: "() => boolean | Promise<boolean>", optional: false }, { name: "options", type: "GatewayOptions", optional: true }], returns: "Promise<void>", isAsync: true, doc: "Precheck → act → verify. **Precheck** (only when `options.target` is given): read the tree and confirm the element the actuator is about to touch is actually on screen. If it is not, throw before firing — the action did not happen, the error names what was expected, and it carries the tree that disagreed. This is not a new failure: `uia.invoke` already returns false for a missing element and `act` already discarded that boolean, so today a missing target becomes a 30-second timeout with an opaque message. The precheck makes an existing failure legible and fast. **Act** fires exactly once. **Verify** polls a controller sensor with tapering backoff — we retry the LOOK, never the action." },
      { name: "read", params: [{ name: "reader", type: "() => T | Promise<T>", optional: false }, { name: "isValid", type: "(result: T) => boolean", optional: true }, { name: "options", type: "GatewayOptions", optional: true }], returns: "Promise<T>", isAsync: true, doc: "" },
      { name: "tree", params: [], returns: "Promise<TreeSnapshot>", isAsync: true, doc: "The screen right now. Cheap enough to take per action; one walk answers many questions. Never throws — an unreadable app yields an empty snapshot." },
      { name: "waitFor", params: [{ name: "predicate", type: "() => boolean | Promise<boolean>", optional: false }, { name: "options", type: "Pick<GatewayOptions, 'timeoutMs' | 'pollIntervalMs' | 'description'>", optional: true }], returns: "Promise<boolean>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "HomePage",
    extends: "Page",
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
      { name: "write", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "ModelPicker",
    extends: null,
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
    methods: [
      { name: "conversation", params: [], returns: "ConversationPage", isAsync: false, doc: "" },
      { name: "currentPage", params: [], returns: "Promise<Page>", isAsync: true, doc: "Reconstitute the page for the screen we are actually on, confirming via detectScreen(). Used by launch() and any navigation that can land on more than one screen." },
      { name: "home", params: [], returns: "HomePage", isAsync: false, doc: "" },
      { name: "pageFor", params: [{ name: "screen", type: "Screen", optional: false }], returns: "Page", isAsync: false, doc: "" },
      { name: "pageForUrl", params: [{ name: "url", type: "string", optional: false }], returns: "Page", isAsync: false, doc: "The id→page factory: parse a URL and build the typed page for it. The one cast lives here, contained — each branch constructs a concrete page returned as Page. A conversation is /chat/<id>, a project /project/<id>, the projects list /projects, anything else is home." },
      { name: "project", params: [], returns: "ProjectPage", isAsync: false, doc: "" },
      { name: "projects", params: [], returns: "ProjectsPage", isAsync: false, doc: "" },
      { name: "waitForConversation", params: [{ name: "timeoutMs", type: "unknown", optional: true }], returns: "Promise<ConversationPage>", isAsync: true, doc: "Wait for the conversation screen, then reconstitute the ConversationPage. This is the home→conversation transition (decision #4) — no macro, just navigate-and-confirm." },
    ],
    properties: [
      { name: "auto", type: "Automation" },
    ],
  },
  {
    name: "NavigationError",
    extends: "DriverError",
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
    methods: [
      { name: "detectScreen", params: [], returns: "Promise<Screen>", isAsync: true, doc: "" },
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
    methods: [
      { name: "downloadFile", params: [{ name: "name", type: "string", optional: false }, { name: "outputPath", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "editDescription", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "listFiles", params: [], returns: "Promise<ProjectFile[]>", isAsync: true, doc: "" },
      { name: "loadAllConversations", params: [], returns: "Promise<{ title: string; lastMessage: string }[]>", isAsync: true, doc: "" },
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
    methods: [
      { name: "open", params: [], returns: "Promise<ProjectPage>", isAsync: true, doc: "Open this project — navigates and returns the ProjectPage." },
    ],
    properties: [
      { name: "date", type: "string" },
      { name: "name", type: "string" },
    ],
  },
  {
    name: "ProjectNotFoundError",
    extends: "DriverError",
    methods: [

    ],
    properties: [
      { name: "projectName", type: "string" },
    ],
  },
  {
    name: "ProjectPage",
    extends: "Page",
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
    methods: [
      { name: "bind", params: [{ name: "nav", type: "Navigation", optional: false }], returns: "this", isAsync: false, doc: "" },
      { name: "projects", params: [], returns: "Promise<ProjectItem[]>", isAsync: true, doc: "The project list. Find by name: `.find(p => p.name === …)`." },
    ],
    properties: [
      { name: "screenType", type: "string" },
    ],
  },
  {
    name: "Prompt",
    extends: null,
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
    methods: [
      { name: "bind", params: [{ name: "nav", type: "Navigation", optional: false }], returns: "void", isAsync: false, doc: "" },
      { name: "conversations", params: [], returns: "Promise<ConversationItem[]>", isAsync: true, doc: "The global conversation list. Find by name: `.find(c => c.name === …)`." },
      { name: "isVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "newChat", params: [], returns: "Promise<HomePage>", isAsync: true, doc: "Start a fresh chat — lands on the home page (decision #4)." },
      { name: "projects", params: [], returns: "Promise<ProjectsPage>", isAsync: true, doc: "Navigate to the projects page." },
      { name: "search", params: [{ name: "text", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "Type into the sidebar search box. The only parametered method." },
      { name: "switchToChat", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "SidebarController",
    extends: null,
    methods: [
      { name: "checkVisible", params: [], returns: "Promise<boolean>", isAsync: true, doc: "" },
      { name: "newChat", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "openProjects", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "search", params: [{ name: "query", type: "string", optional: false }], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "switchToChat", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
      { name: "toggle", params: [], returns: "Promise<void>", isAsync: true, doc: "" },
    ],
    properties: [

    ],
  },
  {
    name: "TextContentDialog",
    extends: null,
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
    methods: [
      { name: "close", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "find", params: [], returns: "boolean", isAsync: false, doc: "" },
      { name: "focus", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "isForeground", params: [], returns: "boolean", isAsync: false, doc: "" },
      { name: "isMinimized", params: [], returns: "boolean", isAsync: false, doc: "" },
      { name: "launch", params: [{ name: "shortcutPath", type: "string", optional: false }], returns: "void", isAsync: false, doc: "" },
      { name: "maximize", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "minimize", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "requireForeground", params: [], returns: "void", isAsync: false, doc: "" },
      { name: "screenshot", params: [{ name: "outputPath", type: "string", optional: false }], returns: "string", isAsync: false, doc: "" },
      { name: "waitForUia", params: [{ name: "timeoutMs", type: "unknown", optional: true }], returns: "boolean", isAsync: false, doc: "" },
      { name: "waitForWindow", params: [{ name: "timeoutMs", type: "unknown", optional: true }], returns: "boolean", isAsync: false, doc: "" },
    ],
    properties: [
      { name: "handle", type: "number | null" },
      { name: "isRunning", type: "boolean" },
      { name: "pid", type: "number | null" },
    ],
  },
  {
    name: "WrongScreenError",
    extends: "DriverError",
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
