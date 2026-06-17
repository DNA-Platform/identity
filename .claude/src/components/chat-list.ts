// ChatList — the View layer for sidebar conversations.
// Each ChatItem is a live object bound to a real UI element.
// Methods chain Controller calls and return verified typed objects.
// See: library/reference-desk/10-architecture-patterns.md

import type { ChatListController } from '../controllers/chat-list-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

// --- View objects ---

export class ChatMenu {
  constructor(
    private readonly controller: ChatListController,
    private readonly chatTitle: string,
    readonly items: string[],
  ) {}

  async rename(newTitle: string): Promise<void> {
    await this.controller.rename(this.chatTitle, newTitle);
  }

  async addToProject(): Promise<ProjectPicker> {
    // Click "Add to project" — Controller does UIA, returns project list
    const projects = await this.controller.openProjectPicker(this.chatTitle);
    return new ProjectPicker(this.controller, projects);
  }

  async delete(): Promise<void> {
    await this.controller.delete(this.chatTitle);
  }

  async pin(): Promise<void> {
    await this.controller.pin(this.chatTitle);
  }

  async close(): Promise<void> {
    await this.controller.closeMenu();
  }
}

export class ProjectPicker {
  constructor(
    private readonly controller: ChatListController,
    readonly projects: string[],
  ) {}

  has(projectName: string): boolean {
    return this.projects.includes(projectName);
  }

  async select(projectName: string): Promise<void> {
    if (!this.has(projectName)) {
      await this.controller.closeDialog();
      throw new Error(`Project "${projectName}" not in picker. Available: ${this.projects.join(', ')}`);
    }
    await this.controller.selectProject(projectName);
  }

  async cancel(): Promise<void> {
    await this.controller.closeDialog();
  }
}

export class ChatItem {
  constructor(
    private readonly controller: ChatListController,
    readonly title: string,
    readonly index: number,
  ) {}

  async open(): Promise<void> {
    await this.controller.open(this.title);
  }

  async menu(): Promise<ChatMenu> {
    // Controller expands menu and returns the visible items
    const items = await this.controller.openMenu(this.title);
    return new ChatMenu(this.controller, this.title, items);
  }
}

// --- ChatList: the sidebar conversation list ---

export class ChatList implements Fallible {
  items: ChatItem[] = [];
  isLoading = false;
  hasError = false;
  lastError: Error | null = null;

  constructor(private readonly controller: ChatListController) {}

  async refresh(): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        const rawItems = await this.controller.readList();
        this.items = rawItems.map(item =>
          new ChatItem(this.controller, item.title, item.index)
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

  // Convenience: keep old string-based methods for backward compat
  // but prefer using ChatItem.menu() for new code
  async rename(title: string, newTitle: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.rename(title, newTitle);
      await this.refresh();
    });
  }

  async addToProject(title: string, projectName: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.addToProject(title, projectName);
      await this.refresh();
    });
  }

  async delete(title: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.delete(title);
      await this.refresh();
    });
  }

  async pin(title: string): Promise<void> {
    await tracked(this, () => this.controller.pin(title));
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
