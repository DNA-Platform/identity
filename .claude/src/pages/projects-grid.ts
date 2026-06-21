///: ProjectsPage — the projects screen (was "grid"; "grid" is a display detail,
///: it is a list). A list of ProjectItem objects, each read from the
///: `ControlType.ListItem` elements named `<name>Updated <date>`.
///:
///: projects() — read the list (ProjectItem[]); the caller finds by name with
///:   `.find(p => p.name === …)` (the list pattern).
///: ProjectItem.open() — navigate to that project, returns the ProjectPage.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#rename-into-the-target) — ProjectsGrid → ProjectsPage, ProjectCard → ProjectItem.
///: [projects tree](../trees/projects.txt) — `List | Projects` of `ListItem | <name>Updated <date>`.

import type { Automation } from '../automation.ts';
import type { Gateway } from '../gateway.ts';
import type { Sidebar } from '../components/sidebar.ts';
import type { Navigation } from './navigation.ts';
import type { ProjectPage } from './project.ts';
import { Page } from './page.ts';

export class ProjectItem {
  constructor(
    private readonly auto: Automation,
    private readonly gateway: Gateway,
    private readonly nav: Navigation,
    readonly name: string,
    readonly date: string,
  ) {}

  /** Open this project — navigates and returns the ProjectPage. */
  async open(): Promise<ProjectPage> {
    const clicked = await this.auto.uia.invokeLink(this.name);
    if (!clicked) throw new Error(`Could not click project "${this.name}"`);

    const arrived = await this.gateway.waitFor(
      async () => (await this.auto.navigator.detectScreen()) === 'project',
      { timeoutMs: 30_000 },
    );
    if (!arrived) throw new Error(`Navigation to project "${this.name}" timed out`);

    return this.nav.project();
  }
}

export class ProjectsPage extends Page {
  private nav!: Navigation;

  constructor(auto: Automation, gateway: Gateway, sidebar: Sidebar) {
    super(auto, gateway, sidebar);
  }

  bind(nav: Navigation): this { this.nav = nav; return this; }

  get screenType(): string { return 'projects'; }

  /** The project list. Find by name: `.find(p => p.name === …)`. */
  async projects(): Promise<ProjectItem[]> {
    const raw = await this.gateway.read(
      () => this.auto.uia.readListItems(),
      (items) => items.length > 0,
      { description: 'Read project cards', timeoutMs: 15_000 },
    );

    const items: ProjectItem[] = [];
    for (const entry of raw) {
      const parsed = parseCardName(entry);
      if (parsed) {
        items.push(new ProjectItem(this.auto, this.gateway, this.nav, parsed.name, parsed.date));
      }
    }
    return items;
  }
}

function parseCardName(raw: string): { name: string; date: string } | null {
  const match = raw.match(/^(.+?)(Updated\s.+|Last message\s.+)$/);
  if (match) return { name: match[1].trim(), date: match[2].trim() };
  if (raw.length > 0) return { name: raw, date: '' };
  return null;
}
