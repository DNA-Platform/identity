// Sidebar — persistent left panel. Navigation, projects, and the chat list.
// See: library/..team/claude/.perspective/02-2026-05-10-home-screen-anatomy.md

import type { SidebarController } from '../controllers/sidebar-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';
import { ChatList } from './chat-list.ts';

export class Sidebar implements Fallible {
  readonly chats: ChatList;
  visible = false;
  hasError = false;
  lastError: Error | null = null;

  constructor(
    private readonly controller: SidebarController,
    chats: ChatList,
  ) {
    this.chats = chats;
  }

  async refresh(): Promise<void> {
    await tracked(this, async () => {
      this.visible = await this.controller.checkVisible();
      if (this.visible) {
        await this.chats.refresh();
      }
    });
  }

  async newChat(): Promise<void> {
    await tracked(this, async () => {
      await this.controller.newChat();
      await this.refresh();
    });
  }

  async openProjects(): Promise<void> {
    await tracked(this, async () => {
      await this.controller.openProjects();
    });
  }

  async search(query: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.search(query);
      await this.chats.refresh();
    });
  }

  async toggle(): Promise<void> {
    await tracked(this, async () => {
      await this.controller.toggle();
      this.visible = await this.controller.checkVisible();
      if (this.visible) {
        await this.chats.refresh();
      }
    });
  }

  async isVisible(): Promise<boolean> {
    this.visible = await this.controller.checkVisible();
    return this.visible;
  }

  async switchToChat(): Promise<void> {
    await tracked(this, async () => {
      await this.controller.switchToChat();
      await this.chats.refresh();
    });
  }
}
