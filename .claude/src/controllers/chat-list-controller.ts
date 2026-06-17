///: ChatListController — sensors and actuators for sidebar conversations.
///: Sensors: isMenuVisible, readMenuItems, readChatItems.
///: Actuators: expandMenu, clickRename, clickDelete, clickMoveTo.
///: No orchestration — the View layer (ChatList) sequences these calls.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the View-Controller split.

import type { Automation } from '../automation.ts';
import { ChatNotFoundError } from '../errors.ts';
import { isMoreOptions, isGreeting, isActionPill, isComposerPlaceholder, normalizeSpaces } from '../text.ts';

// Raw data returned by Controller — View wraps this in typed objects
export interface ChatItemData {
  title: string;
  index: number;
}

export class ChatListController {
  constructor(private readonly auto: Automation) {}

  async readList(): Promise<ChatItemData[]> {
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

  // --- Granular actuators for delete confirmation ---

  async clickDeleteConfirm(): Promise<boolean> {
    return await this.auto.uia.invoke('Button', 'Delete')
      || await this.auto.uia.invokeByName('Delete');
  }

  async isDeleteDialogVisible(): Promise<boolean> {
    // The delete confirmation dialog has a "Delete" button
    return this.auto.uia.existsByName('Delete');
  }

  async isItemGone(title: string): Promise<boolean> {
    const items = await this.readList();
    return !items.some(i => i.title === title);
  }

  // --- Show all ---

  async clickShowAll(): Promise<boolean> {
    return this.auto.uia.invokeByName('View all');
  }

  async hasMoreThan(count: number): Promise<boolean> {
    const items = await this.readList();
    return items.length > count;
  }

  // --- Granular sensors (reads) ---

  async isMenuVisible(): Promise<boolean> {
    return await this.auto.uia.exists('MenuItem', 'Rename')
      || await this.auto.uia.exists('MenuItem', 'Delete')
      || await this.auto.uia.exists('MenuItem', 'Add to project')
      || await this.auto.uia.exists('MenuItem', 'Projects');
  }

  async readMenuItems(): Promise<string[]> {
    const names = await this.auto.uia.allNames();
    const known = ['Pin', 'Rename', 'Add to project', 'Change project', 'Remove from project', 'Delete', 'Projects', 'Share chat'];
    return known.filter(item => names.some(n => n.endsWith(`| ${item}`)));
  }

  async isDialogVisible(): Promise<boolean> {
    return this.auto.uia.existsByName('Move chat');
  }

  async readProjectList(): Promise<string[]> {
    const names = await this.auto.uia.allNames();
    const projects: string[] = [];
    for (const n of names) {
      const match = n.match(/^ControlType\.ListItem \| (.+)$/);
      if (match) projects.push(match[1]);
    }
    return projects;
  }

  async isRenameFieldActive(): Promise<boolean> {
    // When the rename field opens, the sidebar text changes — the old title
    // becomes an editable text field. We detect this by checking if the
    // menu closed (Rename was clicked and the edit field replaced it).
    return !(await this.isMenuVisible());
  }

  // --- Granular actuators (single UIA actions) ---

  async hasMenuButton(title: string): Promise<boolean> {
    return this.auto.uia.existsByName(`More options for ${title}`);
  }

  async expandMenu(title: string): Promise<boolean> {
    return this.auto.uia.expandByName(`More options for ${title}`);
  }

  // Specific menu item actuators — the Controller knows the UIA names
  async clickRename(): Promise<boolean> {
    return this.auto.uia.invoke('MenuItem', 'Rename');
  }

  async clickDelete(): Promise<boolean> {
    return this.auto.uia.invoke('MenuItem', 'Delete');
  }

  async clickAddToProject(): Promise<boolean> {
    return await this.auto.uia.invoke('MenuItem', 'Add to project')
      || await this.auto.uia.invoke('MenuItem', 'Projects')
      || await this.auto.uia.invoke('MenuItem', 'Change project');
  }

  async clickPin(): Promise<boolean> {
    return this.auto.uia.invoke('MenuItem', 'Pin');
  }

  async clickProjectItem(name: string): Promise<boolean> {
    return this.auto.uia.invoke('ListItem', name);
  }

  async closeMenu(): Promise<void> {
    await this.auto.keyboard.sendKeys('{ESCAPE}');
  }

  async closeDialog(): Promise<void> {
    await this.auto.keyboard.sendKeys('{ESCAPE}');
  }

  async typeAndConfirm(text: string): Promise<void> {
    await this.auto.keyboard.typeViaClipboard(text);
    await this.auto.keyboard.pressEnter();
  }

  // --- Parsing ---

  private parseRecents(text: string): ChatItemData[] {
    const lines = text.split('\n');
    const recentsIdx = lines.findIndex(l => l.trim().startsWith('Recents'));
    if (recentsIdx === -1) return [];

    const items: ChatItemData[] = [];
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
