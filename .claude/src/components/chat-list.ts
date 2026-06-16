// ChatList — ordered list of conversations.
// Reusable: appears in sidebar (Recents) and scoped inside projects.
// See: library/..team/claude/.perspective/02-2026-05-10-home-screen-anatomy.md

import type { ChatListController } from '../controllers/chat-list-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

export interface ChatItem {
  title: string;
  index: number;
}

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
        this.items = await this.controller.readList();
      });
    } finally {
      this.isLoading = false;
    }
  }

  async list(): Promise<ChatItem[]> {
    await this.refresh();
    return this.items;
  }

  async open(title: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.open(title);
    });
  }

  async openAt(index: number): Promise<void> {
    await tracked(this, async () => {
      await this.controller.openAt(index);
    });
  }

  async rename(title: string, newTitle: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.rename(title, newTitle);
      this.items = await this.controller.readList();
    });
  }

  async delete(title: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.delete(title);
      this.items = await this.controller.readList();
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
        this.items = await this.controller.readList();
      });
    } finally {
      this.isLoading = false;
    }
  }
}
