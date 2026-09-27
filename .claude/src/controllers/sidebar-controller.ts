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
        // Newest first, the way HOME_AFFORDANCES is ordered. `Hide sidebar` is what
        // the live tree shows (captured 2026-09-17); `Toggle sidebar` is not on it
        // at all, and `Resize sidebar` is a Thumb rather than the button — it is
        // kept because it was once what worked, not because it is what to try first.
        const invoked = await this.auto.uia.invokeByName('Hide sidebar')
          || await this.auto.uia.invokeByName('Toggle sidebar')
          || await this.auto.uia.invokeByName('Resize sidebar');
        if (!invoked) {
          await this.auto.keyboard.sendKeys('^b');
        }
      },
      async () => (await this.checkVisible()) !== wasBefore,
      { description: 'Toggle sidebar' },
    );
  }

  /** Is the sidebar showing? Answered by whichever "start a fresh chat" affordance
   *  is actually on the tree.
   *
   *  It asked `readText().includes('New chat')` — the name the app stopped using,
   *  which `newChat()` above already learned and `HOME_AFFORDANCES` already records.
   *  The same drift, in the same file, in a second place that was never moved over.
   *  And a substring of the whole screen's text is not an element: `includes('Chat')`
   *  matched the word wherever it fell, so this answered true off the sidebar's own
   *  conversation titles. One snapshot, exact names. */
  async checkVisible(): Promise<boolean> {
    const tree = await this.auto.uia.snapshot();
    if (tree.isEmpty) return false;
    return HOME_AFFORDANCES.some(name => tree.has({ name }));
  }

  async switchToChat(): Promise<void> {
    // Already in chat mode if a "start a fresh chat" affordance is on the tree.
    if (await this.checkVisible()) return;

    await this.auto.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName('Chat');
        if (!invoked) {
          throw new Error('Could not find "Chat" tab in the UIA tree');
        }
      },
      async () => this.checkVisible(),
      { description: 'Switch to Chat tab' },
    );
  }
}
