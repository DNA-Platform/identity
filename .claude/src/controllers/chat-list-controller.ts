import type { Automation } from '../automation.ts';
import type { ChatItem } from '../components/chat-list.ts';
import { ChatNotFoundError } from '../errors.ts';
import { isMoreOptions, isGreeting, isActionPill, isComposerPlaceholder, normalizeSpaces } from '../text.ts';

export class ChatListController {
  constructor(private readonly auto: Automation) {}

  async readList(): Promise<ChatItem[]> {
    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return [];
        return this.parseRecents(text);
      },
      (items) => items.length > 0,
      { description: 'Read chat list' },
    );
  }

  async open(title: string): Promise<void> {
    // Verify the chat exists before trying to click it
    const items = await this.readList();
    const match = items.find(item =>
      item.title === title || item.title.startsWith(title)
    );

    if (!match) {
      throw new ChatNotFoundError(title);
    }

    // Capture the current URL so we can detect when it changes
    const urlBefore = await this.auto.uia.readUrl() ?? '';

    await this.auto.uia.invokeByName(match.title);

    const arrived = await this.auto.gateway.waitFor(
      async () => {
        const url = await this.auto.uia.readUrl();
        if (!url || url === urlBefore) return false;
        return url.includes('/chat/');
      },
      { timeoutMs: 30_000, pollIntervalMs: 1_000 },
    );

    if (!arrived) {
      throw new Error(`Navigation to chat "${match.title}" timed out`);
    }

    await this.auto.navigator.detectScreen();
  }

  async openAt(index: number): Promise<void> {
    const items = await this.readList();
    if (index < 0 || index >= items.length) {
      throw new RangeError(`Chat index ${index} out of range (${items.length} items)`);
    }
    await this.open(items[index].title);
  }

  async rename(title: string, newTitle: string): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.expandByName(`More options for ${title}`);
        await this.auto.uia.invoke('MenuItem', 'Rename');
        await new Promise(r => setTimeout(r, 500));
        await this.auto.keyboard.selectAll();
        await this.auto.keyboard.typeViaClipboard(newTitle);
        await this.auto.keyboard.pressEnter();
      },
      async () => {
        const items = await this.readList();
        return items.some(i => i.title === newTitle || i.title.startsWith(newTitle));
      },
      { description: `Rename "${title}" to "${newTitle}"` },
    );
  }

  async delete(title: string): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.expandByName(`More options for ${title}`);
        await new Promise(r => setTimeout(r, 300));
        await this.auto.uia.invoke('MenuItem', 'Delete');
        await new Promise(r => setTimeout(r, 500));
        // Confirmation dialog — click the Delete button
        await this.auto.uia.invoke('Button', 'Delete')
          || await this.auto.uia.invokeByName('Delete');
      },
      async () => {
        const items = await this.readList();
        return !items.some(i => i.title === title);
      },
      { description: `Delete "${title}"` },
    );
  }

  async addToProject(title: string, projectName: string): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.expandByName(`More options for ${title}`);
        await new Promise(r => setTimeout(r, 300));
        await this.auto.uia.invoke('MenuItem', 'Add to project');
        await new Promise(r => setTimeout(r, 800));
        await this.auto.uia.invokeByName(projectName);
      },
      async () => {
        // The "Move chat" dialog should close after selecting a project
        const names = await this.auto.uia.allNames();
        return !names.some(n => n.includes('Move chat'));
      },
      { description: `Add "${title}" to project "${projectName}"` },
    );
  }

  async pin(title: string): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.expandByName(`More options for ${title}`);
        await new Promise(r => setTimeout(r, 300));
        await this.auto.uia.invoke('MenuItem', 'Pin');
      },
      () => Promise.resolve(true),
      { description: `Pin "${title}"` },
    );
  }

  async showAll(): Promise<void> {
    await this.auto.gateway.act(
      async () => { await this.auto.uia.invokeByName('View all'); },
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return false;
        const items = this.parseRecents(text);
        return items.length > 10;
      },
      { description: 'Show all chats' },
    );
  }

  private parseRecents(text: string): ChatItem[] {
    const lines = text.split('\n');
    const recentsIdx = lines.findIndex(l => l.trim().startsWith('Recents'));
    if (recentsIdx === -1) return [];

    const items: ChatItem[] = [];
    for (let i = recentsIdx + 1; i < lines.length; i++) {
      const line = normalizeSpaces(lines[i].trim());
      if (!line || line === '￼') continue;
      if (line === 'View all') continue;
      if (isMoreOptions(line)) continue;
      if (this.isEndOfRecents(line)) break;
      items.push({ title: line, index: items.length });
    }
    return items;
  }

  private isEndOfRecents(line: string): boolean {
    return isGreeting(line)
      || isActionPill(line)
      || isComposerPlaceholder(line);
  }
}
