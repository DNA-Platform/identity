///: Page — base class for all app screens.
///: Every screen has a sidebar (left panel) and a main content area.
///: The sidebar reads its state from the UIA tree — no manual refresh.
///: Subclasses represent specific screens: Home, ProjectsGrid, ProjectDetail, Conversation.
///: Navigation methods return the next page object. You can only call methods
///: for the screen you're on because you only have THAT screen's object.
///:
///: Both the projects grid and the project detail page use ListItem elements
///: for their lists (project cards and project conversations respectively).
///: The same readListItems() UIA method reads both.
///:
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — objects mirror the app.
///: [Navigation](../../library/reference-desk/02-03-the-architecture--navigation.md) — screen detection.

import type { Automation } from '../automation.ts';
import type { Screen } from '../navigator.ts';
import type { Sidebar } from '../components/sidebar.ts';
import type { ChatList } from '../components/chat-list.ts';

export abstract class Page {
  constructor(
    protected readonly auto: Automation,
    readonly sidebar: Sidebar,
    readonly chats: ChatList,
  ) {}

  abstract get screenType(): Screen;

  async url(): Promise<string> {
    return await this.auto.uia.readUrl() ?? '';
  }
}
