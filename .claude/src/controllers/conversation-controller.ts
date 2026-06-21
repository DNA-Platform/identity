///: ConversationController — UIA boundary for open chats.
///: It fetches the conversation STRUCTURE directly from named UIA elements; the
///: response BODY text is NOT a named element — it lives in the
///: `ControlType.Document` and is read via readText() (confirmed by the trees).
///: Actuators: scrollToBottom, clickStop. No orchestration.
///:
///: UIA trees this controller reads (the states it depends on — captured 2026-06-21):
///: [just-sent](../trees/conversation-just-sent.txt) — `You said:` user message, no response, no Stop.
///: [thinking-active](../trees/conversation-thinking-active.txt) — `Button | Thinking`, `Text | Claude is responding`, `Button | Stop response`.
///: [streaming](../trees/conversation-streaming.txt) — the Thinking button's name has become the summary; body still in the Document, not named elements.
///: See the [tree catalogue](../trees/README.md) for what each state proves.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Reading Responses](../../library/reference-desk/03-02-operations--reading.md) — streaming detection.

import type { Automation } from '../automation.ts';
import type { ChatMessage, ConversationMessage } from '../components/message.ts';
import type { Turn } from '../components/turn.ts';
import { parseStructuredText, parseResponseFromText, parseTurns } from '../components/message.ts';
import { isMoreOptions, isSidebarChrome, isModelLine, isComposerPlaceholder, isMessageTimestamp, isStatusLine, isThinkingBoilerplate, isPastedTextButton, deduplicateConsecutive, normalizeSpaces } from '../text.ts';

export class ConversationController {
  constructor(private readonly auto: Automation) {}

  async readUrl(): Promise<string> {
    const url = await this.auto.uia.readUrl();
    return url ?? '';
  }

  async readTitle(): Promise<string> {
    this.auto.navigator.requireScreen('conversation');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return '';
        return this.parseTitleFromText(text);
      },
      (title) => title.length > 0,
      { description: 'Read conversation title' },
    );
  }

  async readProjectName(): Promise<string | null> {
    this.auto.navigator.requireScreen('conversation');

    const text = await this.auto.uia.readText();
    if (!text) return null;
    return this.parseProjectFromText(text);
  }

  async rename(newTitle: string): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    // Click the breadcrumb rename button — it opens the field with text pre-selected
    const title = await this.readTitle();
    const clicked = await this.auto.uia.clickByName(`${title}, rename chat`);
    if (!clicked) {
      // Fallback: try clicking the title itself
      await this.auto.uia.clickByName(title);
    }

    // Type the new title (field should have old text selected)
    await this.auto.keyboard.typeViaClipboard(newTitle);
    await this.auto.keyboard.pressEnter();

    // Verify
    await this.auto.gateway.waitFor(
      async () => (await this.readTitle()) === newTitle,
      { timeoutMs: 5_000, pollIntervalMs: 300 },
    );
  }

  async delete(): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    const title = await this.readTitle();

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.expandByName(`More options for ${title}`);
        await new Promise(r => setTimeout(r, 300));
        await this.auto.uia.invoke('MenuItem', 'Delete');
        await new Promise(r => setTimeout(r, 500));
        await this.auto.uia.invoke('Button', 'Delete')
          || await this.auto.uia.invokeByName('Delete');
      },
      async () => {
        const screen = await this.auto.navigator.detectScreen();
        return screen !== 'conversation';
      },
      { description: `Delete conversation "${title}"` },
    );
  }

  async readMessages(): Promise<ChatMessage[]> {
    this.auto.navigator.requireScreen('conversation');

    return this.auto.gateway.read(
      async () => {
        // ListItems contain individual paragraphs of conversation content.
        // We also read the flat text for structural parsing.
        const items = await this.auto.uia.readListItems();
        const text = await this.auto.uia.readText();
        if (!text) return [];
        return this.parseMessages(text, items);
      },
      (messages) => messages.length > 0,
      { description: 'Read messages' },
    );
  }

  async readLastResponse(): Promise<string> {
    const messages = await this.readMessages();
    const last = [...messages].reverse().find(m => m.role === 'assistant');
    return last?.content ?? '';
  }

  async readMessageCount(): Promise<number> {
    const messages = await this.readMessages();
    return messages.length;
  }

  async readStructuredMessages(): Promise<ConversationMessage[]> {
    this.auto.navigator.requireScreen('conversation');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return [];
        return parseStructuredText(text);
      },
      (messages) => messages.length > 0,
      { description: 'Read structured messages' },
    );
  }

  async readTurns(): Promise<Turn[]> {
    this.auto.navigator.requireScreen('conversation');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return [];
        return parseTurns(text);
      },
      (turns) => turns.length > 0,
      { description: 'Read conversation turns' },
    );
  }

  async readResponse(): Promise<ConversationMessage | null> {
    this.auto.navigator.requireScreen('conversation');

    const text = await this.auto.uia.readText();
    if (!text) return null;
    return parseResponseFromText(text);
  }

  // --- Live Response reads (used by the Response View object) ---
  // The structure (part markers, order) lives in the named elements; the clean
  // body content lives in the Document text. See src/trees/ for the captures.

  /** The latest assistant response's body text, sliced from the Document. */
  async readResponseText(): Promise<string> {
    await this.scrollToBottom(); // lazy rendering — the body is at the bottom
    const text = (await this.auto.uia.readText()) ?? '';
    const marker = 'Claude responded:';
    const idx = text.lastIndexOf(marker);
    if (idx === -1) return ''; // empty state — no response yet
    let body = text.slice(idx + marker.length);
    // Trim trailing composer chrome.
    for (const end of ['Write a message', 'Reply to Claude', 'How can I help']) {
      const e = body.indexOf(end);
      if (e !== -1) { body = body.slice(0, e); break; }
    }
    return body.trim();
  }

  /** Every named element, in document order — the Response assembles parts from it. */
  async readElements(): Promise<string[]> {
    await this.scrollToBottom(); // lazy rendering — the latest elements are at the bottom
    return this.auto.uia.allNames();
  }

  /** Rapidly wait (gateway, 50ms tapering) for the response to START — scroll to
   *  bottom, then checkStreaming, each poll (lazy rendering). As soon as this
   *  returns true, the caller should MINIMIZE and read later. False on timeout. */
  async waitForStreamingStart(timeoutMs = 30_000): Promise<boolean> {
    // Capture how much text the Document holds right after send (user message +
    // chrome, NO response yet). Real streaming GROWS the Document past this
    // baseline — that is the honest signal, NOT the "Claude is thinking/
    // responding" notification, which is a static element that can sit frozen
    // with no output (Doug). thinking-active and streaming share every named
    // marker; only the Document body differs (src/trees/conversation-streaming.txt).
    await this.scrollToBottom();
    const baseline = ((await this.auto.uia.readText()) ?? '').length;
    return this.auto.gateway.waitFor(async () => {
      await this.scrollToBottom();
      return (await this.checkStreaming(baseline)) || (await this.isResponseComplete());
    }, { timeoutMs });
  }

  /** Rapidly wait (gateway) for the response to be OVER — scroll, then no Stop
   *  button AND content present (the "and content" guard avoids the false done). */
  async waitForComplete(timeoutMs = 300_000): Promise<boolean> {
    return this.auto.gateway.waitFor(async () => {
      await this.scrollToBottom();
      return (await this.isResponseComplete()) && (await this.hasResponseContent());
    }, { timeoutMs });
  }

  async waitForResponse(timeoutMs: number): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    // Phase 1: detect that Desktop started processing.
    // Check three signals — any one means the message was received:
    //   1. Streaming indicator ("Claude is responding" / "Claude is thinking")
    //   2. Thinking text appeared (extended thinking content)
    //   3. Response text appeared (non-empty assistant message)
    const processing = await this.auto.gateway.waitFor(
      async () => {
        // Check streaming indicators first (fast)
        if (await this.hasStreamingIndicator()) return true;
        // Then check for actual content — thinking text or response text
        return await this.hasResponseContent();
      },
      { timeoutMs: Math.min(timeoutMs, 30_000), pollIntervalMs: 500 },
    );

    if (!processing) {
      // Nothing happened — message likely wasn't received
      throw new Error('Desktop did not start processing. No streaming indicator, no thinking text, no response detected within 30 seconds.');
    }

    // Phase 2: wait for streaming to stop (status text disappears)
    await this.auto.gateway.waitFor(
      async () => !(await this.hasStreamingIndicator()),
      { timeoutMs, pollIntervalMs: 1_000 },
    );
  }

  /** Real streamed TEXT is flowing: the Document has grown past `baselineLength`
   *  (new tokens arrived) AND generation is active (Stop button present). This is
   *  the honest "is it streaming" — distinct from hasStreamingIndicator(), the
   *  "Claude is responding/thinking" notification, which is a status element that
   *  can be present with zero output. Grounded: src/trees/conversation-streaming.txt
   *  (the body lives only in the Document's text, not in named elements). */
  async checkStreaming(baselineLength = 0): Promise<boolean> {
    const text = ((await this.auto.uia.readText()) ?? '');
    const grew = text.length > baselineLength + 60;   // ≈ real content, not chrome jitter
    return grew && (await this.hasStopButton());
  }

  /** The "Claude is responding" / "Claude is thinking" NOTIFICATION — a status
   *  element, NOT response text. Present during both thinking and streaming, and
   *  it can freeze with no output (Doug). Never use it to prove text is flowing. */
  async hasStreamingIndicator(): Promise<boolean> {
    return await this.auto.uia.existsByName('Claude is responding')
      || await this.auto.uia.existsByName('Claude is thinking');
  }

  async hasResponseContent(): Promise<boolean> {
    const text = await this.auto.uia.readText();
    if (!text) return false;
    return text.includes('Claude responded:');
  }

  async hasThinkingBlock(): Promise<boolean> {
    // The thinking block is a Button element that appears when Desktop starts processing.
    // During active thinking its name is "Thinking".
    // After thinking completes its name becomes the thinking summary.
    // It NEVER disappears — it's permanent once processing begins.
    // Its presence is proof that Desktop received the message and is working or has worked.
    //
    // To find it: look for a Button named "Thinking" (active thinking),
    // or fall back to checking allNames() for any Button in the conversation area
    // that isn't sidebar chrome (the thinking summary has a unique long name).
    if (await this.auto.uia.exists('Button', 'Thinking')) return true;
    // After thinking completes, the button name changes to the summary.
    // We can't search by name since the summary is unique per response.
    // But "Claude responded:" or "Claude finished" appearing means the block exists too.
    if (await this.hasResponseContent()) return true;
    if (await this.auto.uia.existsByName('Claude finished the response')) return true;
    return false;
  }

  async canSend(): Promise<boolean> {
    return await this.auto.uia.existsByName('Send')
      || await this.auto.uia.existsByName('Send message');
  }

  async hasStopButton(): Promise<boolean> {
    return await this.auto.uia.existsByName('Stop response');
  }

  /** Click the page header's rename affordance, a Button named "<title>, rename
   *  chat". Matched by the ", rename chat" SUFFIX, not the title — Desktop
   *  re-titles a new conversation (sometimes twice) while we work, so the title
   *  prefix is unstable. Grounded: src/trees/conversation-streaming.txt and the
   *  new-conversation capture (the affordance is on the page we're already on, so
   *  no sidebar-name match is needed). */
  async clickRenameChat(): Promise<boolean> {
    const buttons = await this.auto.uia.findAllNames('Button');
    const renameBtn = buttons.find(n => n.endsWith(', rename chat'));
    if (!renameBtn) return false;
    return this.auto.uia.invokeByName(renameBtn);
  }

  /** The conversation's EXACT current title, read from the header's
   *  "<title>, rename chat" button — authoritative and guaranteed to match the
   *  "More options for <title>" button, unlike parseTitleFromText (a heuristic on
   *  the page text). Returns null if no conversation header is present. */
  async currentTitle(): Promise<string | null> {
    const suffix = ', rename chat';
    const buttons = await this.auto.uia.findAllNames('Button');
    const renameBtn = buttons.find(n => n.endsWith(suffix));
    return renameBtn ? renameBtn.slice(0, -suffix.length) : null;
  }

  /** The header rename opens an Edit named "Chat name" (grounded: diag-rename,
   *  the new-conversation capture) — distinct from the sidebar menu's
   *  "Edit | Rename". Its presence is the field-active signal. */
  async isChatNameFieldActive(): Promise<boolean> {
    return this.auto.uia.exists('Edit', 'Chat name');
  }

  /** Type into the open "Chat name" field and commit. The field opens with the
   *  current title selected, so a paste replaces it; Enter commits. */
  async typeChatName(text: string): Promise<void> {
    await this.auto.keyboard.typeViaClipboard(text);
    await this.auto.keyboard.pressEnter();
  }

  async isResponseComplete(): Promise<boolean> {
    // Done = generation stopped (no Stop button) AND real content is present.
    // "Claude responded:" appears when the response finishes; the content guard
    // avoids the false "complete" in the instant after send (no Stop yet, no
    // content yet). Independent of the streaming notification.
    if (await this.hasStopButton()) return false;
    return this.hasResponseContent();
  }

  async isAtBottom(): Promise<boolean> {
    return !(await this.auto.uia.existsByName('Scroll to bottom'));
  }

  async scrollToBottom(): Promise<void> {
    // The "Scroll to bottom" button disappears when at the bottom.
    // If it's there, click it and wait for it to disappear (readiness).
    // If it's not there, we're already at the bottom.
    const buttonExists = await this.auto.uia.existsByName('Scroll to bottom');
    if (buttonExists) {
      await this.auto.gateway.act(
        async () => {
          const clicked = await this.auto.uia.invokeByName('Scroll to bottom');
          if (!clicked) await this.auto.keyboard.sendKeys('^{END}');
        },
        async () => !(await this.auto.uia.existsByName('Scroll to bottom')),
        { description: 'Scroll to bottom', timeoutMs: 5_000 },
      );
    }
  }

  async scrollToTop(): Promise<void> {
    await this.auto.keyboard.sendKeys('^{HOME}');
  }

  async copyMessage(index: number): Promise<string> {
    this.auto.navigator.requireScreen('conversation');

    const messages = await this.readMessages();
    if (index < 0 || index >= messages.length) {
      throw new RangeError(`Message index ${index} out of range (${messages.length} messages)`);
    }
    return messages[index].content;
  }

  async editMessage(index: number, newText: string): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invoke('Button', 'Edit');
        await this.auto.keyboard.selectAll();
        await this.auto.keyboard.typeViaClipboard(newText);
        await this.auto.keyboard.pressEnter();
      },
      async () => {
        const text = await this.auto.uia.readText();
        return text?.includes(newText.slice(0, 30)) ?? false;
      },
      { description: `Edit message ${index}`, timeoutMs: 10_000 },
    );
  }

  async regenerateLastResponse(): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    await this.auto.gateway.act(
      async () => { await this.auto.uia.invoke('Button', 'Retry'); },
      () => this.checkStreaming(),
      { description: 'Regenerate last response' },
    );
  }

  async expandThinking(messageIndex: number): Promise<string> {
    this.auto.navigator.requireScreen('conversation');

    const text = await this.auto.uia.readText();
    if (!text) return '';
    return this.parseThinking(text, messageIndex);
  }

  // --- Text parsing ---

  private parseTitleFromText(text: string): string {
    // The conversation header in UIA text has two forms:
    //   Project-scoped: "ProjectName" / "/" / "ConversationTitle"  (three lines)
    //   Standalone:     "ConversationTitle"  (one line, after account chrome)
    // The "/" separator is on its own line — distinct from sidebar items.
    const lines = text.split('\n').map(l => normalizeSpaces(l.trim()));

    // Look for standalone "/" line — the title is the next non-empty line
    const slashIdx = lines.findIndex((l, i) =>
      l === '/' && i > 0 && !lines[i - 1].startsWith('http')
    );
    if (slashIdx !== -1) {
      for (let i = slashIdx + 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line || line === '￼') continue;
        if (isMoreOptions(line)) continue;
        return line;
      }
    }

    // No "/" — standalone conversation. Look for "You said:" and work backwards.
    const firstMessageIdx = lines.findIndex(l => l.startsWith('You said:'));
    if (firstMessageIdx !== -1) {
      for (let i = firstMessageIdx - 1; i >= 0; i--) {
        const line = lines[i];
        if (!line || line === '￼') continue;
        if (isMoreOptions(line)) continue;
        if (isSidebarChrome(line)) continue;
        if (line === 'Get apps and extensions') continue;
        return line;
      }
    }

    return '';
  }

  private parseProjectFromText(text: string): string | null {
    // Project name appears on the line before the standalone "/" separator
    const lines = text.split('\n').map(l => normalizeSpaces(l.trim()));
    const slashIdx = lines.findIndex((l, i) =>
      l === '/' && i > 0 && !lines[i - 1].startsWith('http')
    );
    if (slashIdx === -1) return null;

    for (let i = slashIdx - 1; i >= 0; i--) {
      const line = lines[i];
      if (!line || line === '￼') continue;
      return line;
    }
    return null;
  }

  private parseMessages(text: string, _listItems: string[]): ChatMessage[] {
    const rawLines = text.split('\n').map(l => normalizeSpaces(l.trim()));
    const lines = deduplicateConsecutive(rawLines);
    const messages: ChatMessage[] = [];
    let currentRole: 'user' | 'assistant' | null = null;
    let currentLines: string[] = [];

    const finishMessage = () => {
      if (currentRole && currentLines.length > 0) {
        messages.push({ role: currentRole, content: currentLines.join('\n').trim() });
      }
      currentLines = [];
    };

    for (const trimmed of lines) {
      if (trimmed.startsWith('You said:')) {
        finishMessage();
        currentRole = 'user';
        const rest = trimmed.slice('You said:'.length).trim();
        currentLines = rest ? [rest] : [];
        continue;
      }

      if (trimmed.startsWith('Claude responded:')) {
        finishMessage();
        currentRole = 'assistant';
        const rest = trimmed.slice('Claude responded:'.length).trim();
        currentLines = rest ? [rest] : [];
        continue;
      }

      if (!currentRole) continue;

      if (trimmed === '￼') continue;
      if (isModelLine(trimmed)) break;
      if (isComposerPlaceholder(trimmed)) break;
      if (isMessageTimestamp(trimmed)) continue;
      if (isStatusLine(trimmed)) continue;
      if (isMoreOptions(trimmed)) continue;
      if (isThinkingBoilerplate(trimmed)) continue;
      if (isPastedTextButton(trimmed)) continue;

      currentLines.push(trimmed);
    }

    finishMessage();
    return messages;
  }


  private parseThinking(text: string, _messageIndex: number): string {
    // Thinking blocks appear as expandable disclosure elements.
    // The summary line ends with " >" indicating it can be expanded.
    const lines = text.split('\n');
    const thinkingLines = lines.filter(l => {
      const trimmed = l.trim();
      return trimmed.endsWith('>') && trimmed.length > 20;
    });
    return thinkingLines.join('\n');
  }

}
