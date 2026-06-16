import type { Automation } from '../automation.ts';
import type { ThinkingMode } from '../components/model-picker.ts';

export class ModelPickerController {
  constructor(private readonly auto: Automation) {}

  async readModel(): Promise<string> {
    this.auto.navigator.requireScreen('home', 'conversation');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return '';
        return this.parseModel(text);
      },
      (model) => model.length > 0,
      { description: 'Read current model' },
    );
  }

  async readThinking(): Promise<ThinkingMode> {
    this.auto.navigator.requireScreen('home', 'conversation');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return 'Adaptive' as ThinkingMode;
        return this.parseThinking(text);
      },
      () => true,
      { description: 'Read thinking mode' },
    );
  }

  async selectModel(model: string): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation');

    await this.auto.gateway.act(
      async () => {
        // The model picker is a dropdown near the composer.
        // Click the current model text to open the dropdown.
        const current = await this.readModel();
        await this.auto.uia.invoke('Button', current);
        await this.auto.uia.invoke('MenuItem', model);
      },
      async () => (await this.parseModelFromText()) === model,
      { description: `Select model ${model}` },
    );
  }

  async selectThinking(mode: ThinkingMode): Promise<void> {
    this.auto.navigator.requireScreen('home', 'conversation');

    await this.auto.gateway.act(
      async () => {
        // The thinking mode is part of the model picker dropdown
        const current = await this.readThinking();
        await this.auto.uia.invoke('Button', current);
        await this.auto.uia.invoke('MenuItem', mode);
      },
      async () => (await this.parseThinkingFromText()) === mode,
      { description: `Select thinking ${mode}` },
    );
  }

  private async parseModelFromText(): Promise<string> {
    const text = await this.auto.uia.readText();
    if (!text) return '';
    return this.parseModel(text);
  }

  private async parseThinkingFromText(): Promise<ThinkingMode> {
    const text = await this.auto.uia.readText();
    if (!text) return 'Adaptive';
    return this.parseThinking(text);
  }

  private parseModel(text: string): string {
    // The model picker shows "Opus 4.7 Adaptive ∨" near the bottom of the screen.
    // We want just the model name, e.g. "Opus 4.7".
    const match = text.match(/(Opus|Sonnet|Haiku)\s+[\d.]+/);
    return match?.[0] ?? '';
  }

  private parseThinking(text: string): ThinkingMode {
    // The thinking mode appears right after the model name.
    // "Opus 4.7 Adaptive" → Adaptive
    // "Opus 4.7 Extended" → Extended
    const match = text.match(/(Opus|Sonnet|Haiku)\s+[\d.]+\s+(Adaptive|Extended)/);
    if (match) return match[2] as ThinkingMode;
    // If no thinking mode is mentioned, it's off
    if (text.match(/(Opus|Sonnet|Haiku)\s+[\d.]+/)) return 'Off';
    return 'Adaptive';
  }

}
