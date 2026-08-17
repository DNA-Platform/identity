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
    /** The hyperlink's accessible name, EXACTLY as the tree reports it. This is
     *  what gets clicked. It is kept verbatim and never reconstructed, because the
     *  app names the same project two different ways: the `ListItem` glues the date
     *  on with no space (`"Investingyesterday"`) while the `Hyperlink` you actually
     *  click separates it (`"Investing yesterday"`). Reading one and clicking the
     *  other is why `open()` failed with "Could not click project". */
    readonly label: string,
  ) {}

  /** Open this project — navigates and returns the ProjectPage. */
  async open(): Promise<ProjectPage> {
    const clicked = await this.auto.uia.invokeLink(this.label);
    if (!clicked) throw new Error(`Could not click project link "${this.label}"`);

    const arrived = await this.gateway.waitFor(
      async () => (await this.auto.navigator.detectScreen()) === 'project',
      {},
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

  /** The project list. Find by name: `.find(p => p.name === …)`.
   *
   *  Read from the HYPERLINKS, not the list items. The hyperlink is the thing you
   *  click, so its name is the only string that is guaranteed to work as a click
   *  target — and it is kept verbatim as `label`. Reading `ListItem` names and then
   *  clicking hyperlinks meant reading one string and acting on a different one. */
  async projects(): Promise<ProjectItem[]> {
    const tree = await this.gateway.read(
      () => this.auto.uia.snapshot(),
      (t) => !t.isEmpty,
      { description: 'Read project cards' },
    );

    return tree.filter({ type: 'Hyperlink' }).map(el => {
      const { name, date } = splitTrailingDate(el.name);
      return new ProjectItem(this.auto, this.gateway, this.nav, name, date, el.name);
    });
  }
}

/** Take the "when" off the end of a project label, for display.
 *
 *  Purely cosmetic — nothing is ever clicked with the result, so a miss costs a
 *  slightly ugly name and nothing else. That matters: the previous version required
 *  the date to start with `"Updated "` or `"Last message "`, prefixes the app stopped
 *  rendering, so every project's name silently became its label with the date glued
 *  on and every click failed.
 *
 *  Grounded in what the tree actually shows: `yesterday`, `Jul 24`, `17 hours ago`. */
function splitTrailingDate(label: string): { name: string; date: string } {
  const m = label.match(
    /^(.*?)\s+(Updated\s.+|Last message\s.+|yesterday|today|\d+\s+\w+\s+ago|[A-Z][a-z]{2}\s+\d{1,2})$/);
  return m ? { name: m[1].trim(), date: m[2].trim() } : { name: label, date: '' };
}
