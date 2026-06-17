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

  async rename(newTitle: string): Promise<void> {
    // Actuator: click Rename menu item
    const clicked = await this.controller.clickMenuItem('Rename');
    if (!clicked) throw new Error('Could not click Rename');

    // Actuator: type new title and press Enter
    await this.controller.typeAndConfirm(newTitle);

    // Sensor: verify the rename took effect
    const verified = await this.gateway.waitFor(async () => {
      const items = await this.controller.readList();
      return items.some(i => i.title === newTitle || i.title.startsWith(newTitle));
    }, { timeoutMs: 5_000 });
    if (!verified) throw new Error(`Rename to "${newTitle}" — verify failed`);
  }

  async addToProject(): Promise<ProjectPicker> {
    // Actuator: click "Add to project" or "Projects"
    let clicked = await this.controller.clickMenuItem('Add to project');
    if (!clicked) clicked = await this.controller.clickMenuItem('Projects');
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
    await this.controller.clickMenuItem('Delete');
  }

  async pin(): Promise<void> {
    await this.controller.clickMenuItem('Pin');
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

  async select(projectName: string): Promise<void> {
    if (!this.has(projectName)) {
      await this.controller.closeDialog();
      throw new Error(`"${projectName}" not in picker. Available: ${this.projects.join(', ')}`);
    }

    // Actuator: click the project ListItem
    const clicked = await this.controller.clickProjectItem(projectName);
    if (!clicked) {
      await this.controller.closeDialog();
      throw new Error(`Could not click ListItem "${projectName}"`);
    }

    // Sensor: verify dialog closed
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
    // Actuator: expand the three-dot menu
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
        await this.controller.showAll();
        await this.refresh();
      });
    } finally {
      this.isLoading = false;
    }
  }
}
