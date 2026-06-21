///: ProjectPage — one project's detail screen. Files, instructions, scoped
///: conversations, and its own composer.
///:
///: composer — start a new conversation in this project (send() returns the page).
///: conversations() — the project's conversations as ConversationItem[] (the SAME
///:   class as the sidebar — the redesign unified them). Find by name with
///:   `.find(c => c.name === …)`.
///: files() — the project's files as ProjectFile[]; each carries its own actions
///:   (read/remove/download), no parametered container methods.
///: instructions() — read the project instructions.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#decompose-the-god-objects) — Project → ProjectPage + ProjectFile.
///: [Project Operations](../../library/reference-desk/03-03-operations--projects.md) — project workflows.

import type { Automation } from '../automation.ts';
import type { Gateway } from '../gateway.ts';
import type { Sidebar } from '../components/sidebar.ts';
import type { Composer } from '../components/composer.ts';
import type { FilesPane } from '../components/files-pane.ts';
import type { ProjectFile } from '../components/project-file.ts';
import type { ProjectController } from '../controllers/project-controller.ts';
import type { Navigation } from './navigation.ts';
import { Page } from './page.ts';
import { ConversationItem } from '../components/chat-list.ts';
import { ChatListController } from '../controllers/chat-list-controller.ts';

export type { ProjectFile };

export class ProjectPage extends Page {
  private nav!: Navigation;

  constructor(
    auto: Automation,
    gateway: Gateway,
    sidebar: Sidebar,
    private readonly controller: ProjectController,
    private readonly filesPane: FilesPane,
    readonly composer: Composer,
  ) {
    super(auto, gateway, sidebar);
  }

  bind(nav: Navigation): this { this.nav = nav; return this; }

  get screenType(): string { return 'project'; }

  /** The project's conversations — unified ConversationItem (same as sidebar). */
  async conversations(): Promise<ConversationItem[]> {
    const raw = await this.controller.loadAllConversations();
    const chatList = new ChatListController(this.auto);
    return raw.map(c => new ConversationItem(chatList, this.gateway, this.nav, c.title));
  }

  /** The project's files — each ProjectFile carries its own actions. */
  async files(): Promise<ProjectFile[]> {
    return this.controller.listFiles();
  }

  /** Read the project instructions. */
  async instructions(): Promise<string> {
    return this.controller.readInstructions();
  }

  /** The files pane (Add files menu, upload, add text content). */
  get filesPanel(): FilesPane { return this.filesPane; }
}
