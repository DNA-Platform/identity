// ModelPicker — model and thinking mode selector.
// Reusable: appears on the home screen and in conversations.
// See: library/..team/claude/.perspective/02-2026-05-10-home-screen-anatomy.md

import type { ModelPickerController } from '../controllers/model-picker-controller.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';

export type ThinkingMode = 'Adaptive' | 'Extended' | 'Off';

export class ModelPicker implements Fallible {
  model = '';
  thinking: ThinkingMode = 'Adaptive';
  hasError = false;
  lastError: Error | null = null;

  constructor(private readonly controller: ModelPickerController) {}

  async refresh(): Promise<void> {
    await tracked(this, async () => {
      this.model = await this.controller.readModel();
      this.thinking = await this.controller.readThinking();
    });
  }

  async currentModel(): Promise<string> {
    this.model = await this.controller.readModel();
    return this.model;
  }

  async currentThinking(): Promise<ThinkingMode> {
    this.thinking = await this.controller.readThinking();
    return this.thinking;
  }

  async selectModel(model: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.selectModel(model);
      this.model = model;
    });
  }

  async selectThinking(mode: ThinkingMode): Promise<void> {
    await tracked(this, async () => {
      await this.controller.selectThinking(mode);
      this.thinking = mode;
    });
  }
}
