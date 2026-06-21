///: Sidebar — the one persistent panel on every page.
///: It is the same object regardless of which page you hold (Page.sidebar()
///: returns it). It lists the global conversations and reaches the projects page
///: and a fresh chat.
///:
///: conversations() — read the conversation list (ConversationItem[]); the
///:   caller finds by name with `.find(c => c.name === …)` (the list pattern).
///: projects() — navigate to the ProjectsPage.
///: newChat() — start a fresh chat, returns the HomePage (decision #4).
///: search(text) — the only parametered method (it types into the search box).
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#the-object-model-settled--model-the-objects-not-their-features) — Sidebar in the settled model.
///: [Navigation](../../library/reference-desk/02-03-the-architecture--navigation.md) — sidebar-driven navigation.

import type { SidebarController } from '../controllers/sidebar-controller.ts';
import type { ChatListController } from '../controllers/chat-list-controller.ts';
import type { Gateway } from '../gateway.ts';
import type { Navigation } from '../pages/navigation.ts';
import type { HomePage } from '../pages/home.ts';
import type { ProjectsPage } from '../pages/projects-grid.ts';
import { ConversationItem } from './chat-list.ts';

export class Sidebar {
  // Set once by Claude after the Navigation factory is built (they reference
  // each other — the sidebar is on every page, the factory builds every page).
  private nav!: Navigation;

  constructor(
    private readonly controller: SidebarController,
    private readonly chatList: ChatListController,
    private readonly gateway: Gateway,
  ) {}

  bind(nav: Navigation): void { this.nav = nav; }

  /** The global conversation list. Find by name: `.find(c => c.name === …)`. */
  async conversations(): Promise<ConversationItem[]> {
    const raw = await this.chatList.readList();
    return raw.map(item =>
      new ConversationItem(this.chatList, this.gateway, this.nav, item.title));
  }

  /** Navigate to the projects page. */
  async projects(): Promise<ProjectsPage> {
    await this.controller.openProjects();
    return this.nav.projects();
  }

  /** Start a fresh chat — lands on the home page (decision #4). */
  async newChat(): Promise<HomePage> {
    await this.controller.newChat();
    return this.nav.home();
  }

  /** Type into the sidebar search box. The only parametered method. */
  async search(text: string): Promise<void> {
    await this.controller.search(text);
  }

  async isVisible(): Promise<boolean> {
    return this.controller.checkVisible();
  }

  async switchToChat(): Promise<void> {
    await this.controller.switchToChat();
  }
}
