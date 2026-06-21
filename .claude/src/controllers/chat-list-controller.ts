///: ChatListController — sensors and actuators for conversations (sidebar and
///: conversation-page header). Sensors: readList, isMenuVisible, readMenuItems,
///: isRenameFieldActive, isDialogVisible, readProjectList. Actuators: expandMenu,
///: clickRename, typeAndConfirm, clickAddToProject, clickProjectItem,
///: searchProjects, clickRemoveFromProject, clickDelete, clickPin. No
///: orchestration — the View ([ConversationItem]/[ConversationMenu]/
///: [MoveConversationModal]) sequences these calls through the gateway.
///:
///: Grounded in captured UIA trees ([catalogue](../trees/README.md)):
///: the three-dot menu → [conversation-menu.txt](../trees/conversation-menu.txt)
///: (MenuItems Pin/Rename/Add to project/Delete/Projects); the Add-to-project
///: dialog → [move-conversation-modal.txt](../trees/move-conversation-modal.txt)
///: (Window "Move chat", ComboBox "Select a project", List "Projects" of
///: ListItems); the rename field → [conversation-rename-field.txt](../trees/conversation-rename-field.txt)
///: (Edit "Rename").
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the View-Controller split.
///: [Adding a conversation to a project](../../library/reference-desk/03-03-operations--projects.md#adding-a-conversation-to-a-project) — the flow these back.

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
        // Read conversation items from the sidebar by finding buttons
        // that have a matching "More options for {name}" companion.
        // This is the UIA structure — each conversation is a Button
        // paired with a "More options" Button. No text parsing.
        const allButtons = await this.auto.uia.findAllNames('Button');
        const moreOptions = new Set(
          allButtons
            .filter(n => n.startsWith('More options for '))
            .map(n => n.slice('More options for '.length))
        );

        const items: ChatItemData[] = [];
        for (const name of moreOptions) {
          if (!name || name === 'Claude') continue; // skip project/page "More options"
          items.push({ title: name, index: items.length });
        }
        return items;
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
    // The rename field is an Edit named "Rename" (grounded:
    // ../trees/conversation-rename-field.txt line 24). Its presence is the
    // honest signal the field opened — not the old "menu closed" inference.
    return this.auto.uia.exists('Edit', 'Rename');
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

  async clickRemoveFromProject(): Promise<boolean> {
    return this.auto.uia.invoke('MenuItem', 'Remove from project');
  }

  async clickProjectItem(name: string): Promise<boolean> {
    return this.auto.uia.invoke('ListItem', name);
  }

  /** Filter the Move chat modal's project list. The modal's search bar is a
   *  ComboBox named "Select a project" (grounded: ../trees/move-conversation-modal.txt
   *  line 12), sitting above the List | Projects of ListItems. The modal opens
   *  with that ComboBox focused, so a clipboard paste filters the list. */
  async searchProjects(text: string): Promise<void> {
    await this.auto.keyboard.typeViaClipboard(text);
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
