import type { Automation } from '../automation.ts';
import type { ProjectCard } from '../pages/projects.ts';
import { ProjectNotFoundError } from '../errors.ts';
import { isMoreOptions, isTimestamp } from '../text.ts';

export class ProjectsController {
  constructor(private readonly auto: Automation) {}

  async readList(): Promise<ProjectCard[]> {
    this.auto.navigator.requireScreen('projects');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return [];
        return this.parseProjectCards(text);
      },
      (cards) => cards.length > 0,
      { description: 'List projects' },
    );
  }

  async open(name: string): Promise<void> {
    this.auto.navigator.requireScreen('projects');

    const cards = await this.readList();
    const match = cards.find(c => c.name === name || c.name.startsWith(name));
    if (!match) {
      throw new ProjectNotFoundError(name);
    }

    // Invoke once, then wait for screen change.
    // Don't use gateway.act — retrying a navigation from the wrong page breaks.
    // Use invokeLink to target the project card Hyperlink specifically,
    // avoiding sidebar Buttons that might prefix-match (e.g. "Georgian LLC" vs "Georgia").
    await this.auto.uia.invokeLink(match.name);

    const arrived = await this.auto.gateway.waitFor(
      async () => {
        const screen = await this.auto.navigator.detectScreen();
        return screen === 'project';
      },
      { timeoutMs: 30_000, pollIntervalMs: 1_000 },
    );

    if (!arrived) {
      throw new Error(`Navigation to project "${name}" timed out`);
    }
  }

  async openAt(index: number): Promise<void> {
    this.auto.navigator.requireScreen('projects');

    const cards = await this.readList();
    if (index < 0 || index >= cards.length) {
      throw new RangeError(`Project index ${index} out of range (${cards.length} cards)`);
    }

    const target = cards[index];
    await this.auto.uia.invokeLink(target.name);

    const arrived = await this.auto.gateway.waitFor(
      async () => {
        const screen = await this.auto.navigator.detectScreen();
        return screen === 'project';
      },
      { timeoutMs: 30_000, pollIntervalMs: 1_000 },
    );

    if (!arrived) {
      throw new Error(`Navigation to project "${target.name}" (index ${index}) timed out`);
    }
  }

  async create(name: string, description?: string): Promise<void> {
    this.auto.navigator.requireScreen('projects');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invoke('Button', 'New project');
        await this.auto.keyboard.typeViaClipboard(name);
        if (description) {
          await this.auto.keyboard.sendKeys('{TAB}');
          await this.auto.keyboard.typeViaClipboard(description);
        }
        await this.auto.keyboard.pressEnter();
      },
      async () => {
        const cards = await this.readList();
        return cards.some(c => c.name === name);
      },
      { description: `Create project "${name}"` },
    );
  }

  async remove(name: string): Promise<void> {
    this.auto.navigator.requireScreen('projects');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invoke('Button', name);
        await this.auto.uia.invoke('MenuItem', 'Delete');
      },
      async () => {
        const cards = await this.readList();
        return !cards.some(c => c.name === name);
      },
      { description: `Remove project "${name}"` },
    );
  }

  private parseProjectCards(text: string): ProjectCard[] {
    const lines = text.split('\n').map(l => l.trim());

    // Project cards appear after "New project" in the UIA text.
    const startIdx = lines.findIndex(l => l === 'New project');
    if (startIdx === -1) return [];

    const cards: ProjectCard[] = [];
    let name = '';
    let description = '';

    for (let i = startIdx + 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line || line === '￼') continue;

      if (isTimestamp(line)) {
        if (name) {
          cards.push({ name, description, lastModified: line });
          name = '';
          description = '';
        }
        continue;
      }

      if (isMoreOptions(line)) continue;
      if (line === 'Search projects') continue;

      if (!name) {
        name = line;
      } else if (!description) {
        description = line;
      }
    }

    return cards;
  }


}
