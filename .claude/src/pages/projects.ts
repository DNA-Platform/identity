// Projects — the grid of project cards.
// See: library/..team/claude/.perspective/05-current-state.png

import type { ProjectsController } from '../controllers/projects-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

export interface ProjectCard {
  name: string;
  description: string;
  lastModified: string;
}

export class Projects implements Fallible {
  cards: ProjectCard[] = [];
  isLoading = false;
  hasError = false;
  lastError: Error | null = null;

  constructor(private readonly controller: ProjectsController) {}

  async refresh(): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        this.cards = await this.controller.readList();
      });
    } finally {
      this.isLoading = false;
    }
  }

  async list(): Promise<ProjectCard[]> {
    this.cards = await this.controller.readList();
    return this.cards;
  }

  async open(name: string): Promise<void> {
    await tracked(this, () => this.controller.open(name));
  }

  async openAt(index: number): Promise<void> {
    await tracked(this, () => this.controller.openAt(index));
  }

  async create(name: string, description?: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.create(name, description);
    });
  }

  async remove(name: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.remove(name);
      this.cards = this.cards.filter(c => c.name !== name);
    });
  }
}
