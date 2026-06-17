///: ChatList — View layer for sidebar conversations.
///: The ChatItem -> ChatMenu -> ProjectPicker object chain. Each method
///: returns a verified object: ChatList.find() returns a ChatItem, which
///: exposes .menu() returning a ChatMenu, which exposes .moveTo() returning
///: a ProjectPicker. Every step reads from the tree to verify state before
///: proceeding. This is the canonical View pattern for the whole driver.
///:
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the View object chain.
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md) — the verify discipline.

// ChatList — the View layer for sidebar conversations.
// Each object verifies its state through Controller reads.
// See: library/reference-desk/10-architecture-patterns.md

import type { ChatListController } from '../controllers/chat-list-controller.ts';
import type { ChatItemData } from '../controllers/chat-list-controller.ts';
import type { Gateway } from '../gateway.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

// --- View objects ---

export class ChatMenu {
  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
    private readonly chatTitle: string,
    readonly items: string[],
  ) {}

  private async verifyStillOpen(): Promise<void> {
    const open = await this.controller.isMenuVisible();
    if (!open) throw new Error('Menu is no longer open');
  }

  get isInProject(): boolean {
    return this.items.includes('Change project') || this.items.includes('Remove from project');
  }

  async rename(newTitle: string): Promise<void> {
    await this.verifyStillOpen();

    // Actuator: click Rename
    const clicked = await this.controller.clickRename();
    if (!clicked) throw new Error('Could not click Rename');

    // Sensor: verify rename field is active
    const fieldActive = await this.gateway.waitFor(
      () => this.controller.isRenameFieldActive(),
      { timeoutMs: 3_000 },
    );
    if (!fieldActive) throw new Error('Rename field did not open');

    // Actuator: type new title and confirm
    await this.controller.typeAndConfirm(newTitle);

    // Sensor: verify the rename took effect
    const verified = await this.gateway.waitFor(async () => {
      const items = await this.controller.readList();
      return items.some(i => i.title === newTitle || i.title.startsWith(newTitle));
    }, { timeoutMs: 5_000 });
    if (!verified) throw new Error(`Rename to "${newTitle}" — verify failed`);
  }

  async addToProject(): Promise<ProjectPicker> {
    await this.verifyStillOpen();

    // Actuator: click Add to project
    const clicked = await this.controller.clickAddToProject();
    if (!clicked) throw new Error('Could not click Add to project');

    // Sensor: verify dialog appeared
    const dialogOpen = await this.gateway.waitFor(
      () => this.controller.isDialogVisible(),
      { timeoutMs: 5_000 },
    );
    if (!dialogOpen) throw new Error('Project picker dialog did not appear');

    // Sensor: read the project list
    const projects = await this.controller.readProjectList();
    return new ProjectPicker(this.controller, this.gateway, projects);
  }

  async delete(): Promise<void> {
    await this.verifyStillOpen();
    const clicked = await this.controller.clickDelete();
    if (!clicked) throw new Error('Could not click Delete');
  }

  async pin(): Promise<void> {
    await this.verifyStillOpen();
    const clicked = await this.controller.clickPin();
    if (!clicked) throw new Error('Could not click Pin');
  }

  async close(): Promise<void> {
    await this.controller.closeMenu();
  }
}

export class ProjectPicker {
  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
    readonly projects: string[],
  ) {}

  has(name: string): boolean {
    return this.projects.includes(name);
  }

  private async verifyStillOpen(): Promise<void> {
    const open = await this.controller.isDialogVisible();
    if (!open) throw new Error('Project picker is no longer open');
  }

  async select(projectName: string): Promise<void> {
    await this.verifyStillOpen();

    if (!this.has(projectName)) {
      await this.controller.closeDialog();
      throw new Error(`"${projectName}" not in picker. Available: ${this.projects.join(', ')}`);
    }

    // Actuator: click the project ListItem
    const clicked = await this.controller.clickProjectItem(projectName);
    if (!clicked) {
      await this.controller.closeDialog();
      throw new Error(`Could not click "${projectName}" in the list`);
    }

    // Sensor: verify dialog closed (selecting auto-confirms)
    const closed = await this.gateway.waitFor(
      async () => !(await this.controller.isDialogVisible()),
      { timeoutMs: 10_000 },
    );
    if (!closed) {
      await this.controller.closeDialog();
      throw new Error('Dialog did not close after selecting project');
    }
  }

  async cancel(): Promise<void> {
    await this.controller.closeDialog();
  }
}

export class ChatItem {
  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
    readonly title: string,
    readonly index: number,
  ) {}

  async open(): Promise<void> {
    await this.controller.open(this.title);
  }

  async menu(): Promise<ChatMenu> {
    // Sensor: wait for the menu button to exist (UIA may lag after rename)
    const buttonReady = await this.gateway.waitFor(
      () => this.controller.hasMenuButton(this.title),
      { timeoutMs: 5_000 },
    );
    if (!buttonReady) throw new Error(`Menu button not found for "${this.title}"`);

    // Actuator: expand the three-dot menu (once)
    const expanded = await this.controller.expandMenu(this.title);
    if (!expanded) throw new Error(`Could not expand menu for "${this.title}"`);

    // Sensor: verify menu appeared
    const visible = await this.gateway.waitFor(
      () => this.controller.isMenuVisible(),
      { timeoutMs: 5_000 },
    );
    if (!visible) throw new Error('Menu did not appear');

    // Sensor: read menu items
    const items = await this.controller.readMenuItems();
    return new ChatMenu(this.controller, this.gateway, this.title, items);
  }
}

// --- ChatList: the sidebar conversation list ---

export class ChatList implements Fallible {
  items: ChatItem[] = [];
  isLoading = false;
  hasError = false;
  lastError: Error | null = null;

  constructor(
    private readonly controller: ChatListController,
    private readonly gateway: Gateway,
  ) {}

  async refresh(): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        const rawItems = await this.controller.readList();
        this.items = rawItems.map(item =>
          new ChatItem(this.controller, this.gateway, item.title, item.index)
        );
      });
    } finally {
      this.isLoading = false;
    }
  }

  async list(): Promise<ChatItem[]> {
    await this.refresh();
    return this.items;
  }

  find(title: string): ChatItem | undefined {
    return this.items.find(i => i.title === title || i.title.startsWith(title));
  }

  at(index: number): ChatItem | undefined {
    return this.items[index];
  }

  async open(title: string): Promise<void> {
    await tracked(this, () => this.controller.open(title));
  }

  async openAt(index: number): Promise<void> {
    await tracked(this, () => this.controller.openAt(index));
  }

  async showAll(): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        const clicked = await this.controller.clickShowAll();
        if (!clicked) throw new Error('Could not click "View all"');
        const expanded = await this.gateway.waitFor(
          () => this.controller.hasMoreThan(10),
          { timeoutMs: 10_000 },
        );
        if (!expanded) throw new Error('"View all" did not expand the list');
        await this.refresh();
      });
    } finally {
      this.isLoading = false;
    }
  }
}
