// FilesPane — the Files section in the project right panel.
// Has its own visibility state, an Add files menu with three options,
// and dialogs for adding text content and uploading from device.
// Every action goes through the gateway with verification.

import type { Automation } from '../automation.ts';
import { FileDialog } from './file-dialog.ts';
import { TextContentDialog } from './text-content-dialog.ts';

export class FilesPane {
  showing = false;
  menuExpanded = false;
  readonly fileDialog: FileDialog;
  readonly textContentDialog: TextContentDialog;

  constructor(private readonly auto: Automation, window?: import('../window.ts').Window) {
    this.fileDialog = new FileDialog(auto.gateway, auto.shell, window);
    this.textContentDialog = new TextContentDialog(auto);
  }

  private get gateway() { return this.auto.gateway; }

  async detect(): Promise<void> {
    const names = await this.auto.uia.allNames();
    this.showing = names.some(n => n.includes('ControlType.Text | Files'));
    this.menuExpanded = names.some(n => n.includes('ControlType.Menu | Add files'));
  }

  async expandMenu(): Promise<void> {
    await this.detect();
    if (this.menuExpanded) return;

    await this.gateway.act(
      async () => {
        await this.auto.uia.expandByName('Add files');
      },
      async () => {
        const names = await this.auto.uia.allNames();
        const hasItems = names.some(n => n.includes('ControlType.MenuItem | Upload from device'));
        this.menuExpanded = hasItems;
        return hasItems;
      },
      { description: 'Expand Add files menu', timeoutMs: 5_000, retries: 2 },
    );
  }

  async collapseMenu(): Promise<void> {
    await this.detect();
    if (!this.menuExpanded) return;

    await this.gateway.act(
      async () => {
        await this.auto.keyboard.sendKeys('{ESCAPE}');
      },
      async () => {
        const names = await this.auto.uia.allNames();
        const menuGone = !names.some(n => n.includes('ControlType.Menu | Add files'));
        this.menuExpanded = !menuGone;
        return menuGone;
      },
      { description: 'Collapse Add files menu', timeoutMs: 3_000, retries: 2 },
    );
  }

  async resetMenu(): Promise<void> {
    // Also close any stale text content dialog
    await this.textContentDialog.detect();
    if (this.textContentDialog.isOpen) {
      await this.textContentDialog.cancel();
    }

    await this.detect();
    if (this.menuExpanded) await this.collapseMenu();
  }

  // Menu item 1: Upload from device (native file browser)
  async uploadFromDevice(filePath: string): Promise<void> {
    await this.resetMenu();
    await this.expandMenu();

    await this.gateway.act(
      async () => {
        await this.auto.keyboard.sendKeys('{ENTER}');
        this.menuExpanded = false;
      },
      async () => {
        await this.fileDialog.detect();
        return this.fileDialog.isOpen;
      },
      { description: 'Open file dialog via Upload from device', timeoutMs: 10_000, retries: 2 },
    );

    await this.fileDialog.typePath(filePath);
    await this.fileDialog.submit();
  }

  // Menu item 2: Add text content (title + content modal)
  async addTextContent(title: string, content: string): Promise<void> {
    await this.resetMenu();
    await this.expandMenu();

    // Verify "Add text content" is visible before clicking
    const menuCheck = await this.auto.uia.allNames();
    const hasUpload = menuCheck.some(n => n.includes('MenuItem | Upload from device'));
    const hasText = menuCheck.some(n => n.includes('MenuItem | Add text content'));
    const hasGithub = menuCheck.some(n => n.includes('MenuItem | GitHub'));
    if (!hasText) {
      throw new Error(
        `"Add text content" not found in menu. ` +
        `Visible items: Upload=${hasUpload}, Text=${hasText}, GitHub=${hasGithub}`
      );
    }

    // Click "Add text content" directly by name
    await this.gateway.act(
      async () => {
        await this.auto.uia.clickByName('Add text content');
        this.menuExpanded = false;
      },
      async () => {
        // Verify the text content dialog opened — NOT the file browser
        const names = await this.auto.uia.allNames();
        const hasTextDialog = names.some(n => n === 'ControlType.Window | Add text content');
        const hasFileDialog = names.some(n => n === 'ControlType.Window | Open');

        if (hasFileDialog) {
          // Wrong dialog opened — close it and report
          await this.auto.keyboard.sendKeys('{ESCAPE}');
          throw new Error('File browser opened instead of text content dialog — wrong menu item');
        }

        return hasTextDialog;
      },
      {
        description: 'Open Add text content dialog',
        timeoutMs: 10_000,
        retries: 3,
        screenshotOnFailure: 'add-text-content-failed',
      },
    );

    // Dialog is confirmed open — proceed
    await this.textContentDialog.waitUntilReady();
    await this.textContentDialog.setTitle(title);
    await this.textContentDialog.setContent(content);
    await this.textContentDialog.submit();
  }

  // Menu item 3: GitHub
  async connectGitHub(): Promise<void> {
    await this.resetMenu();
    await this.expandMenu();

    const menuCheck = await this.auto.uia.allNames();
    if (!menuCheck.some(n => n.includes('MenuItem | GitHub'))) {
      throw new Error('GitHub menu item not found');
    }

    await this.gateway.act(
      async () => {
        await this.auto.uia.clickByName('GitHub');
        this.menuExpanded = false;
      },
      async () => {
        // Verify some GitHub-related UI appeared
        const names = await this.auto.uia.allNames();
        return names.some(n =>
          n.toLowerCase().includes('github') ||
          n.toLowerCase().includes('repository') ||
          n.toLowerCase().includes('connect')
        );
      },
      { description: 'Connect GitHub', timeoutMs: 10_000 },
    );
  }
}
