///: ProjectConversations — conversations listed on a project detail page.
///: Each ProjectConversationItem has a title and open() that navigates
///: to the conversation. Items are read from ControlType.ListItem elements
///: in the project page's main area.
///:
///: These conversations ALSO appear in the sidebar as regular ChatItems.
///: This class reads the project-specific list in the main content area.
///:
///: [The App](../../library/reference-desk/12-the-app.md) — project detail description.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — objects mirror the app.

import type { Automation } from '../automation.ts';
import type { Gateway } from '../gateway.ts';

export class ProjectConversationItem {
  constructor(
    private readonly auto: Automation,
    private readonly gateway: Gateway,
    readonly title: string,
    readonly lastMessage: string,
  ) {}

  async open(): Promise<void> {
    const clicked = await this.auto.uia.invokeLink(this.title);
    if (!clicked) {
      const fallback = await this.auto.uia.invokeByName(this.title);
      if (!fallback) throw new Error(`Could not click conversation "${this.title}"`);
    }

    const arrived = await this.gateway.waitFor(async () => {
      const screen = await this.auto.navigator.detectScreen();
      return screen === 'conversation';
    }, { timeoutMs: 30_000 });

    if (!arrived) throw new Error(`Navigation to conversation "${this.title}" timed out`);
  }
}

export class ProjectConversations {
  items: ProjectConversationItem[] = [];

  constructor(
    private readonly auto: Automation,
    private readonly gateway: Gateway,
  ) {}

  async read(): Promise<ProjectConversationItem[]> {
    // Read conversation titles from "More options for X" buttons in the ListItem area.
    // The button names carry the clean title — no parsing needed.
    // Same pattern as ChatListController.readList() for the sidebar.
    const raw = await this.gateway.read(
      () => this.auto.uia.readListItems(),
      (items) => items.length > 0,
      { description: 'Read project conversations', timeoutMs: 15_000 },
    );

    // Get clean titles from the "More options for X" buttons
    const allButtons = await this.auto.uia.findAllNames('Button');
    const moreOptions = new Set(
      allButtons
        .filter(n => n.startsWith('More options for '))
        .map(n => n.slice('More options for '.length))
    );

    // Match ListItem entries to their clean button titles
    this.items = [];
    for (const title of moreOptions) {
      // Only include titles that correspond to a ListItem (project conversation)
      // Exclude project-level buttons and sidebar conversation buttons
      const hasListItem = raw.some(r => r.startsWith(title));
      if (hasListItem && title.length > 0) {
        this.items.push(new ProjectConversationItem(this.auto, this.gateway, title, ''));
      }
    }
    return this.items;
  }

  find(title: string): ProjectConversationItem | undefined {
    return this.items.find(c => c.title === title || c.title.startsWith(title));
  }
}

function parseConversationName(raw: string): { title: string; lastMessage: string } | null {
  // ListItem names concatenate title and date: "TestLast message 7 hours ago"
  // No space between the title and "Last message" or "Updated"
  const match = raw.match(/^(.+?)(Last message\s.+|Updated\s.+)$/);
  if (match) return { title: match[1].trim(), lastMessage: match[2].trim() };
  if (raw.length > 0) return { title: raw, lastMessage: '' };
  return null;
}
