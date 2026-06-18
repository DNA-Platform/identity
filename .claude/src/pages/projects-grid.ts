///: ProjectsGrid — the projects grid screen.
///: A list of ProjectCard objects, each representing a visible project card.
///: Cards are read from ControlType.ListItem UIA elements in the grid.
///: Each card has a name, date, and open() that navigates to the project page.
///:
///: [The App](../../library/reference-desk/12-the-app.md) — projects grid description.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — objects mirror the app.

import type { Automation } from '../automation.ts';
import type { Gateway } from '../gateway.ts';

export class ProjectCard {
  constructor(
    private readonly auto: Automation,
    private readonly gateway: Gateway,
    readonly name: string,
    readonly date: string,
  ) {}

  async open(): Promise<void> {
    const clicked = await this.auto.uia.invokeLink(this.name);
    if (!clicked) throw new Error(`Could not click project "${this.name}"`);

    const arrived = await this.gateway.waitFor(async () => {
      const screen = await this.auto.navigator.detectScreen();
      return screen === 'project';
    }, { timeoutMs: 30_000 });

    if (!arrived) throw new Error(`Navigation to project "${this.name}" timed out`);
  }
}

export class ProjectsGrid {
  items: ProjectCard[] = [];

  constructor(
    private readonly auto: Automation,
    private readonly gateway: Gateway,
  ) {}

  async read(): Promise<ProjectCard[]> {
    // Wait for ListItems to appear — the grid may still be rendering
    const raw = await this.gateway.read(
      () => this.auto.uia.readListItems(),
      (items) => items.length > 0,
      { description: 'Read project cards', timeoutMs: 15_000 },
    );

    this.items = [];
    for (const entry of raw) {
      const parsed = parseCardName(entry);
      if (parsed) {
        this.items.push(new ProjectCard(this.auto, this.gateway, parsed.name, parsed.date));
      }
    }
    return this.items;
  }

  find(name: string): ProjectCard | undefined {
    return this.items.find(c => c.name === name || c.name.startsWith(name));
  }
}

function parseCardName(raw: string): { name: string; date: string } | null {
  const match = raw.match(/^(.+?)(Updated\s.+|Last message\s.+)$/);
  if (match) return { name: match[1].trim(), date: match[2].trim() };
  if (raw.length > 0) return { name: raw, date: '' };
  return null;
}
