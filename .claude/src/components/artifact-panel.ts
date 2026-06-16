// ArtifactPanel — the slide-out panel showing things Claude has created.
// Appears on the right edge of a conversation when artifacts exist.

import type { ArtifactPanelController } from '../controllers/artifact-panel-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

export interface Artifact {
  title: string;
  type: string;
}

export class ArtifactPanel implements Fallible {
  artifacts: Artifact[] = [];
  content = '';
  isLoading = false;
  open = false;
  hasError = false;
  lastError: Error | null = null;

  constructor(private readonly controller: ArtifactPanelController) {}

  async refresh(): Promise<void> {
    await tracked(this, async () => {
      this.open = await this.controller.checkOpen();
      if (this.open) {
        this.artifacts = await this.controller.readList();
      }
    });
  }

  async isOpen(): Promise<boolean> {
    this.open = await this.controller.checkOpen();
    return this.open;
  }

  async show(): Promise<void> {
    await tracked(this, async () => {
      await this.controller.open();
      this.open = true;
    });
  }

  async close(): Promise<void> {
    await tracked(this, async () => {
      await this.controller.close();
      this.open = false;
    });
  }

  async list(): Promise<Artifact[]> {
    this.artifacts = await this.controller.readList();
    return this.artifacts;
  }

  async select(title: string): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        await this.controller.select(title);
        this.content = await this.controller.readContent();
      });
    } finally {
      this.isLoading = false;
    }
  }

  async readContent(): Promise<string> {
    this.content = await this.controller.readContent();
    return this.content;
  }

  async copy(): Promise<string> {
    return this.controller.copy();
  }

  async download(outputPath: string): Promise<void> {
    await this.controller.download(outputPath);
  }
}
