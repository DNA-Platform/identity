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
    const raw = await this.auto.uia.readListItems();
    this.items = [];
    for (const entry of raw) {
      const parsed = parseConversationName(entry);
      if (parsed) {
        this.items.push(new ProjectConversationItem(
          this.auto, this.gateway, parsed.title, parsed.lastMessage,
        ));
      }
    }
    return this.items;
  }

  find(title: string): ProjectConversationItem | undefined {
    return this.items.find(c => c.title === title || c.title.startsWith(title));
  }
}

function parseConversationName(raw: string): { title: string; lastMessage: string } | null {
  const match = raw.match(/^(.+?)(Last message .+|Updated .+)$/);
  if (match) return { title: match[1].trim(), lastMessage: match[2].trim() };
  if (raw.length > 0) return { title: raw, lastMessage: '' };
  return null;
}
