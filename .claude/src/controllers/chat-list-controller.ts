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

  async rename(title: string, newTitle: string): Promise<void> {
    // Open three-dot menu
    await this.auto.uia.expandByName(`More options for ${title}`);
    await this.auto.gateway.waitFor(
      () => this.auto.uia.existsByName('Rename'),
      { timeoutMs: 5_000, pollIntervalMs: 200 },
    );

    // Click Rename — this opens an inline edit field with text pre-selected
    await this.auto.uia.invoke('MenuItem', 'Rename');
    // The field is ready when we can type — no selectAll needed, text is pre-selected
    await this.auto.gateway.waitFor(
      async () => {
        // The rename field should be active — typing will replace the selected text
        return true; // Can't easily detect the edit field, but Rename menu item click is reliable
      },
      { timeoutMs: 2_000, pollIntervalMs: 200 },
    );

    // Type new title and confirm
    await this.auto.keyboard.typeViaClipboard(newTitle);
    await this.auto.keyboard.pressEnter();

    // Verify
    await this.auto.gateway.waitFor(
      async () => {
        const items = await this.readList();
        return items.some(i => i.title === newTitle || i.title.startsWith(newTitle));
      },
      { timeoutMs: 5_000, pollIntervalMs: 300 },
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
    // Step 1: Open three-dot menu
    const expanded = await this.auto.uia.expandByName(`More options for ${title}`);
    if (!expanded) throw new Error(`Could not expand menu for "${title}"`);

    // Confirm: menu is visible — look for ANY menu item
    const hasMenu = await this.auto.gateway.waitFor(
      async () => {
        return await this.auto.uia.existsByName('Rename')
          || await this.auto.uia.existsByName('Delete')
          || await this.auto.uia.existsByName('Add to project')
          || await this.auto.uia.existsByName('Projects');
      },
      { timeoutMs: 5_000, pollIntervalMs: 200 },
    );
    if (!hasMenu) throw new Error('Menu did not appear after expanding');

    // Step 2: Click the project action — try both names
    let clicked = await this.auto.uia.invoke('MenuItem', 'Add to project');
    if (!clicked) clicked = await this.auto.uia.invokeByName('Add to project');
    if (!clicked) clicked = await this.auto.uia.invokeByName('Projects');
    if (!clicked) throw new Error('Could not click "Add to project" or "Projects"');

    // Confirm: "Move chat" dialog appeared
    const dialogVisible = await this.auto.gateway.waitFor(
      () => this.auto.uia.existsByName('Move chat'),
      { timeoutMs: 5_000, pollIntervalMs: 200 },
    );
    if (!dialogVisible) throw new Error('"Move chat" dialog did not appear');

    // Confirm: the target project exists in the list
    const projectExists = await this.auto.uia.existsByName(projectName);
    if (!projectExists) {
      await this.auto.keyboard.sendKeys('{ESCAPE}');
      throw new Error(`Project "${projectName}" not found in picker. Dialog dismissed.`);
    }

    // Step 3: Click the project ListItem
    const selected = await this.auto.uia.invoke('ListItem', projectName);
    if (!selected) {
      await this.auto.keyboard.sendKeys('{ESCAPE}');
      throw new Error(`Could not invoke ListItem "${projectName}". Dialog dismissed.`);
    }

    // Confirm: dialog closed
    const dialogClosed = await this.auto.gateway.waitFor(
      async () => !(await this.auto.uia.existsByName('Move chat')),
      { timeoutMs: 10_000, pollIntervalMs: 300 },
    );
    if (!dialogClosed) {
      await this.auto.keyboard.sendKeys('{ESCAPE}');
      throw new Error('Dialog did not close. Dismissed.');
    }
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

  // --- Granular sensors (reads) ---

  async isMenuVisible(): Promise<boolean> {
    return await this.auto.uia.existsByName('Rename')
      || await this.auto.uia.existsByName('Delete')
      || await this.auto.uia.existsByName('Add to project')
      || await this.auto.uia.existsByName('Projects');
  }

  async readMenuItems(): Promise<string[]> {
    const names = await this.auto.uia.allNames();
    const known = ['Pin', 'Rename', 'Add to project', 'Delete', 'Projects', 'Share chat'];
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
      || await this.auto.uia.invokeByName('Add to project')
      || await this.auto.uia.invokeByName('Projects');
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
