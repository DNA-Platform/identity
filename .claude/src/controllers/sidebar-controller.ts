///: SidebarController — UIA boundary for the sidebar.
///: Sensors and actuators only. No orchestration.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Navigation](../../library/reference-desk/02-03-the-architecture--navigation.md) — sidebar-driven navigation.

import type { Automation } from '../automation.ts';
import { HOME_AFFORDANCES } from '../navigator.ts';
import { DriverError } from '../errors.ts';

/** The search overlay's input, as the tree names it. Grounded, not guessed:
 *  `ComboBox | Search chats and projects` (2026-08 build). */
const SEARCH_BOX = 'Search chats and projects';

export class SidebarController {
  constructor(private readonly auto: Automation) {}

  /** Start a fresh chat.
   *
   *  LOOK FIRST. This hard-coded `'New chat'` and broke silently when the app
   *  renamed the button to `'New'` — the same drift the [navigator](../navigator.ts)
   *  had already been taught to survive, in a second place that had not been. One
   *  list, read from the tree before acting. */
  async newChat(): Promise<void> {
    const tree = await this.auto.uia.snapshot();
    const affordance = HOME_AFFORDANCES.find(n => tree.has({ name: n }));
    if (!affordance) {
      throw new DriverError(
        `None of the known "new chat" affordances is on screen (tried: ${HOME_AFFORDANCES.join(', ')}). ` +
        'The app may have been renamed again — the tree below is what it actually shows.',
      ).withTree(tree);
    }

    await this.auto.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName(affordance);
        if (!invoked) {
          throw new DriverError(`"${affordance}" was on the tree but could not be invoked`);
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

  /** Search opens a SEPARATE WINDOW, not an inline box.
   *
   *  Grounded in the tree: invoking `Search` adds `Window | Search`, a
   *  `ComboBox | Search chats and projects`, and a `List | Search results`. The old
   *  code called `setValue('Search', …)` — there is no element by that name to write
   *  into — and then verified by looking for the query in `readText()`, which reads
   *  the MAIN window and never sees the overlay at all. It could not have passed. */
  async search(query: string): Promise<void> {
    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invokeByName('Search');
        await this.auto.uia.setValue(SEARCH_BOX, query);
      },
      async () => {
        const tree = await this.auto.uia.snapshot();
        return tree.has({ name: SEARCH_BOX }) || tree.has({ contains: 'Search results' });
      },
      { description: `Search "${query}"` },
    );
  }

  /** Close the search overlay. Escape is what a person presses. */
  async closeSearch(): Promise<void> {
    await this.auto.keyboard.sendKeys('{ESCAPE}');
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
