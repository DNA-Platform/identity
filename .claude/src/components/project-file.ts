// ProjectFile — a file in a project's Files pane.
// Has a name, metadata, an X button to remove, and is clickable to view contents.
// All actions go through the gateway with verification.

import type { Automation } from '../automation.ts';

export interface ProjectFileContents {
  name: string;
  type?: string;
  lines?: number;
}

export class ProjectFile {
  readonly contents: ProjectFileContents;

  constructor(
    private readonly auto: Automation,
    readonly name: string,
    readonly type: string = '',
    readonly lines: number = 0,
  ) {
    this.contents = { name, type, lines };
  }

  get label(): string {
    const parts = [this.name];
    if (this.type) parts.push(this.type);
    if (this.lines) parts.push(`${this.lines} lines`);
    return parts.join(', ');
  }

  // Click the file to open and view its contents
  async view(): Promise<string> {
    // Click the file entry
    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.clickByName(this.label);
      },
      async () => {
        // Verify the file detail view opened — should show file name and content
        const names = await this.auto.uia.allNames();
        return names.some(n => n.includes(`ControlType.Window | ${this.name}`));
      },
      { description: `View file "${this.name}"`, timeoutMs: 5_000, retries: 2 },
    );

    // Read the content from the detail view
    const text = await this.auto.uia.readText();
    return text ?? '';
  }

  // Click the X button to remove the file directly
  async remove(): Promise<void> {
    // The X button is associated with the file — look for it by the select checkbox pattern
    // The checkbox is "Select: filename, type, N lines" and near it is the remove button
    await this.auto.gateway.act(
      async () => {
        // Try clicking Remove button directly — it may be visible next to the file
        const removed = await this.auto.uia.invokeByName('Remove');
        if (!removed) {
          // Fall back: click the file first to get the Remove button
          await this.auto.uia.clickByName(this.label);
          await this.auto.gateway.waitFor(async () => {
            const names = await this.auto.uia.allNames();
            return names.some(n => n === 'ControlType.Button | Remove');
          }, { timeoutMs: 3_000 });
          await this.auto.uia.invokeByName('Remove');
        }
      },
      async () => {
        // Verify file is gone
        const names = await this.auto.uia.allNames();
        return !names.some(n => n.includes(this.label));
      },
      {
        description: `Remove file "${this.name}"`,
        timeoutMs: 10_000,
        retries: 2,
        screenshotOnFailure: 'file-remove-failed',
      },
    );
  }
}
