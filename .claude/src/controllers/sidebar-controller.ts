///: SidebarController — UIA boundary for the sidebar.
///: Sensors and actuators only. No orchestration.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Navigation](../../library/reference-desk/02-03-the-architecture--navigation.md) — sidebar-driven navigation.

import type { Automation } from '../automation.ts';

export class SidebarController {
  constructor(private readonly auto: Automation) {}

  async newChat(): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName('New chat');
        if (!invoked) {
          throw new Error('Could not find "New chat" in the UIA tree');
        }
      },
      async () => {
        const screen = await this.auto.navigator.detectScreen();
        return screen === 'home';
      },
      { description: 'Start new chat' },
    );
  }

  async openProjects(): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName('Projects');
        if (!invoked) {
          throw new Error('Could not find "Projects" in the UIA tree');
        }
      },
      async () => {
        const screen = await this.auto.navigator.detectScreen();
        return screen === 'projects';
      },
      { description: 'Open projects page' },
    );
  }

  async search(query: string): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName('Search');
        if (!invoked) {
          // Fallback to keyboard for search (no known UIA element)
          await this.auto.keyboard.sendKeys('^k');
        }
        await this.auto.uia.setValue('Search', query);
      },
      async () => {
        const text = await this.auto.uia.readText();
        return text?.includes(query) ?? false;
      },
      { description: `Search "${query}"` },
    );
  }

  async toggle(): Promise<void> {
    const wasBefore = await this.checkVisible();
    await this.auto.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName('Toggle sidebar')
          || await this.auto.uia.invokeByName('Resize sidebar');
        if (!invoked) {
          await this.auto.keyboard.sendKeys('^b');
        }
      },
      async () => (await this.checkVisible()) !== wasBefore,
      { description: 'Toggle sidebar' },
    );
  }

  async checkVisible(): Promise<boolean> {
    const text = await this.auto.uia.readText();
    if (!text) return false;
    return text.includes('New chat') || text.includes('Chat');
  }

  async switchToChat(): Promise<void> {
    const text = await this.auto.uia.readText();
    // Already in chat mode if "New chat" is visible
    if (text?.includes('New chat')) return;

    await this.auto.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName('Chat');
        if (!invoked) {
          throw new Error('Could not find "Chat" tab in the UIA tree');
        }
      },
      async () => {
        const t = await this.auto.uia.readText();
        return t?.includes('New chat') ?? false;
      },
      { description: 'Switch to Chat tab' },
    );
  }
}
