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
        if (await this.checkStreaming()) return true;
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
      async () => !(await this.checkStreaming()),
      { timeoutMs, pollIntervalMs: 1_000 },
    );
  }

  async checkStreaming(): Promise<boolean> {
    return await this.auto.uia.existsByName('Claude is responding')
      || await this.auto.uia.existsByName('Claude is thinking');
  }

  async hasResponseContent(): Promise<boolean> {
    const text = await this.auto.uia.readText();
    if (!text) return false;
    return text.includes('Claude responded:');
  }

  async canSend(): Promise<boolean> {
    return await this.auto.uia.existsByName('Send')
      || await this.auto.uia.existsByName('Send message');
  }

  async hasStopButton(): Promise<boolean> {
    return await this.auto.uia.existsByName('Stop response');
  }

  async isResponseComplete(): Promise<boolean> {
    // Desktop is done when the stop button disappears.
    // The Send button only appears when the composer has text,
    // so it can't be used as a done signal.
    // No streaming indicator + no stop button = done.
    const streaming = await this.checkStreaming();
    const hasStop = await this.hasStopButton();
    return !streaming && !hasStop;
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

  private parseMessages(text: string, _listItems: string[]): Message[] {
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
