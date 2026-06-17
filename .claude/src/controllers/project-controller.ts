///: ProjectController — UIA boundary for a single project page.
///: Sensors and actuators only. No orchestration.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Project Operations](../../library/reference-desk/03-03-operations--projects.md) — project workflows.

import type { Automation } from '../automation.ts';
import { ProjectFile } from '../components/project-file.ts';
import { isMoreOptions, isComposerPlaceholder, normalizeSpaces } from '../text.ts';

export class ProjectController {
  constructor(private readonly auto: Automation) {}

  async readUrl(): Promise<string> {
    const url = await this.auto.uia.readUrl();
    return url ?? '';
  }

  async readName(): Promise<string> {
    this.auto.navigator.requireScreen('project');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return '';
        return this.parseProjectName(text);
      },
      (name) => name.length > 0,
      { description: 'Read project name' },
    );
  }

  async readDescription(): Promise<string> {
    this.auto.navigator.requireScreen('project');

    const text = await this.auto.uia.readText();
    if (!text) return '';
    return this.parseDescription(text);
  }

  async rename(newName: string): Promise<void> {
    this.auto.navigator.requireScreen('project');

    await this.auto.gateway.act(
      async () => {
        const name = await this.readName();
        await this.auto.uia.invoke('Hyperlink', name);
        await this.auto.keyboard.selectAll();
        await this.auto.keyboard.typeViaClipboard(newName);
        await this.auto.keyboard.pressEnter();
      },
      async () => (await this.readName()) === newName,
      { description: `Rename project to "${newName}"` },
    );
  }

  async editDescription(text: string): Promise<void> {
    this.auto.navigator.requireScreen('project');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invoke('Button', 'Edit description');
        await this.auto.keyboard.selectAll();
        await this.auto.keyboard.typeViaClipboard(text);
        await this.auto.keyboard.pressEnter();
      },
      async () => {
        const current = await this.readDescription();
        return current.includes(text.slice(0, 30));
      },
      { description: 'Edit project description' },
    );
  }

  async listFiles(): Promise<ProjectFile[]> {
    this.auto.navigator.requireScreen('project');

    return this.auto.gateway.read(
      async () => {
        const names = await this.auto.uia.findFileButtons();
        return names.map(name => {
          const match = name.match(/^(.+?),\s*(\w+),\s*([\d,]+)\s*lines?$/i);
          if (match) {
            return new ProjectFile(this.auto, match[1].trim(), match[2], parseInt(match[3].replace(',', '')));
          }
          return new ProjectFile(this.auto, name);
        });
      },
      () => true,
      { description: 'List project files' },
    );
  }

  async uploadFile(localPath: string): Promise<void> {
    this.auto.navigator.requireScreen('project');

    const beforeCount = (await this.listFiles()).length;

    await this.auto.gateway.act(
      async () => {
        // Close any stale menus
        await this.auto.keyboard.sendKeys('{ESCAPE}');
        await new Promise(r => setTimeout(r, 300));

        // Expand the "Add files" menu
        await this.auto.uia.expandByName('Add files');
        await new Promise(r => setTimeout(r, 800));

        // Click "Upload from device" (has InvokePattern when menu is open)
        const invoked = await this.auto.uia.invokeByName('Upload from device');
        if (!invoked) {
          await this.auto.keyboard.sendKeys('{ENTER}');
        }

        // Wait for native file dialog (#32770)
        const dialogOpened = await this.waitForFileDialog();
        if (!dialogOpened) throw new Error('File dialog did not open');

        // Type path and submit
        await this.typePathInDialog(localPath);
      },
      async () => {
        const afterCount = (await this.listFiles()).length;
        return afterCount > beforeCount;
      },
      { description: `Upload ${localPath}`, timeoutMs: 60_000 },
    );
  }

  private async waitForFileDialog(): Promise<boolean> {
    for (let i = 0; i < 20; i++) {
      await new Promise(r => setTimeout(r, 500));
      const found = await this.auto.shell.run(`
        Add-Type -AssemblyName UIAutomationClient
        $uia = [System.Windows.Automation.AutomationElement]
        $cond = New-Object System.Windows.Automation.PropertyCondition(
          $uia::ClassNameProperty, '#32770')
        $d = $uia::RootElement.FindFirst([System.Windows.Automation.TreeScope]::Children, $cond)
        if ($d) { 'found' } else { 'none' }
      `, 5000);
      if (found?.trim() === 'found') return true;
    }
    return false;
  }

  private async typePathInDialog(filePath: string): Promise<void> {
    const escaped = filePath.replace(/'/g, "''");
    await this.auto.shell.run(`
      Add-Type -AssemblyName UIAutomationClient
      Add-Type -AssemblyName System.Windows.Forms
      $uia = [System.Windows.Automation.AutomationElement]
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ClassNameProperty, '#32770')
      $dialog = $uia::RootElement.FindFirst([System.Windows.Automation.TreeScope]::Children, $cond)
      if ($dialog) {
        $dialog.SetFocus()
        Start-Sleep -Milliseconds 300
        [System.Windows.Forms.Clipboard]::SetText('${escaped}')
        [System.Windows.Forms.SendKeys]::SendWait('^v')
        Start-Sleep -Milliseconds 500
        [System.Windows.Forms.SendKeys]::SendWait('{ENTER}')
      }
    `, 15000);
  }

  async downloadFile(name: string, outputPath: string): Promise<void> {
    this.auto.navigator.requireScreen('project');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invoke('Hyperlink', name);
        await this.auto.uia.invoke('Button', 'Download');
      },
      async () => {
        const names = await this.auto.uia.allNames();
        return names.some(n => n.includes('Downloaded') || n.includes('Saved'));
      },
      { description: `Download file "${name}"` },
    );
  }

  async removeFile(name: string): Promise<void> {
    this.auto.navigator.requireScreen('project');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invoke('Hyperlink', name);
        await this.auto.uia.invoke('Button', 'Remove');
      },
      async () => {
        const files = await this.listFiles();
        return !files.some(f => f.name === name);
      },
      { description: `Remove file "${name}"` },
    );
  }

  async readFileContent(name: string): Promise<string> {
    this.auto.navigator.requireScreen('project');

    return this.auto.gateway.read(
      async () => {
        await this.auto.uia.invoke('Hyperlink', name);
        const text = await this.auto.uia.readText();
        return text ?? '';
      },
      (content) => content.length > 0,
      { description: `Read file "${name}"` },
    );
  }

  async readInstructions(): Promise<string> {
    this.auto.navigator.requireScreen('project');

    const text = await this.auto.uia.readText();
    if (!text) return '';
    const instructions = this.parseInstructions(text);
    if (this.isPlaceholder(instructions)) return '';
    return instructions;
  }

  async readConversations(): Promise<{ title: string; lastMessage: string }[]> {
    this.auto.navigator.requireScreen('project');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        if (!text) return [];
        return this.parseScopedConversations(text);
      },
      () => true,
      { description: 'Read project conversations', timeoutMs: 10_000, pollIntervalMs: 1_000 },
    );
  }

  async loadAllConversations(): Promise<{ title: string; lastMessage: string }[]> {
    this.auto.navigator.requireScreen('project');

    let previousCount = 0;
    let attempts = 0;

    while (attempts < 20) {
      const conversations = await this.readConversations();

      if (conversations.length === previousCount && attempts > 0) {
        // No new conversations loaded — we have them all
        return conversations;
      }

      previousCount = conversations.length;

      // Scroll down to bring "Show more" into the rendered DOM
      await this.auto.keyboard.sendKeys('{END}');
      await this.auto.gateway.waitFor(
        () => Promise.resolve(true),
        { timeoutMs: 1_000, pollIntervalMs: 1_000 },
      );

      // Click the LAST "Show more" — the one in the conversation list, not the description
      const clicked = await this.auto.uia.invokeByNameLast('Show more');
      if (!clicked) {
        // No "Show more" button even after scrolling — we have them all
        return conversations;
      }

      // Wait for the list to update
      await this.auto.gateway.waitFor(
        async () => {
          const updated = await this.readConversations();
          return updated.length > previousCount;
        },
        { timeoutMs: 5_000, pollIntervalMs: 500 },
      );

      attempts++;
    }

    return this.readConversations();
  }

  async writeInstructions(text: string): Promise<void> {
    this.auto.navigator.requireScreen('project');

    await this.auto.gateway.act(
      async () => {
        await this.auto.uia.invoke('Button', 'Edit instructions');
        await this.auto.keyboard.selectAll();
        await this.auto.keyboard.typeViaClipboard(text);
        await this.auto.keyboard.pressEnter();
      },
      async () => {
        const current = await this.readInstructions();
        return current.includes(text.slice(0, 30));
      },
      { description: 'Write project instructions' },
    );
  }

  async newConversation(): Promise<void> {
    this.auto.navigator.requireScreen('project');

    await this.auto.uia.invokeByNameLast('New chat');

    const arrived = await this.auto.gateway.waitFor(
      async () => {
        const screen = await this.auto.navigator.detectScreen();
        return screen === 'conversation';
      },
      { timeoutMs: 30_000, pollIntervalMs: 1_000 },
    );

    if (!arrived) {
      throw new Error('Navigation to new conversation timed out');
    }
  }

  // --- Text parsing ---

  private parseProjectName(text: string): string {
    // On the project detail page, the text structure is:
    //   ... sidebar content ...
    //   All projects
    //   ProjectName        <-- this is the heading
    //   Description
    //   How can I help you today?
    const lines = text.split('\n');
    const allProjectsIdx = lines.findIndex(l => l.trim() === 'All projects');
    if (allProjectsIdx !== -1 && allProjectsIdx + 1 < lines.length) {
      const name = lines[allProjectsIdx + 1].trim();
      if (name && name !== 'How can I help you today?') return name;
    }
    return '';
  }

  private parseDescription(text: string): string {
    const lines = text.split('\n');
    const allProjectsIdx = lines.findIndex(l => l.trim() === 'All projects');
    if (allProjectsIdx === -1) return '';
    for (let i = allProjectsIdx + 2; i < lines.length && i < allProjectsIdx + 8; i++) {
      const line = lines[i].trim();
      if (!line || line === '￼') continue;
      if (isMoreOptions(line)) continue;
      if (isComposerPlaceholder(line)) return '';
      if (line === 'Share' || line === 'Start a task in Cowork') continue;
      return line;
    }
    return '';
  }

  private parseInstructions(text: string): string {
    const lines = text.split('\n');
    const instrIdx = lines.findIndex(l => l.trim() === 'Instructions');
    if (instrIdx === -1) return '';

    const instrLines: string[] = [];
    for (let i = instrIdx + 1; i < lines.length; i++) {
      const trimmed = lines[i].trim();
      if (this.isSectionHeader(trimmed)) break;
      if (trimmed && trimmed !== '￼') instrLines.push(trimmed);
    }
    return instrLines.join('\n');
  }

  private parseFiles(text: string): ProjectFile[] {
    // Files appear in the right panel under a "Files" header.
    // Each file shows as: filename.ext, then metadata lines.
    const lines = text.split('\n').map(l => normalizeSpaces(l.trim()));
    const filesIdx = lines.findIndex(l => l === 'Files');
    if (filesIdx === -1) return [];

    const files: ProjectFile[] = [];
    for (let i = filesIdx + 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line || line === '￼') continue;
      if (this.isSectionHeader(line)) break;
      if (line.startsWith('Add PDFs')) break;
      if (line.startsWith('Select:')) continue;
      if (this.looksLikeFile(line)) {
        files.push(new ProjectFile(this.auto, line));
      }
    }
    return files;
  }

  private parseScopedConversations(text: string): { title: string; lastMessage: string }[] {
    // Scoped conversations appear as title + "Last message N ago" pairs.
    // They appear after the composer area and before the right panel sections.
    // Anchors: "Start a task in Cowork" or the composer placeholder.
    const lines = text.split('\n').map(l => normalizeSpaces(l.trim()));

    let startIdx = lines.findIndex(l => l === 'Start a task in Cowork');
    if (startIdx === -1) {
      // Fallback: start from "Press and hold to record" (mic button) or composer
      startIdx = lines.findIndex(l => l === 'Press and hold to record');
    }
    if (startIdx === -1) {
      // Fallback: find the first "Last message" line and work backwards
      startIdx = lines.findIndex(l => l.startsWith('Last message '));
      if (startIdx > 0) startIdx -= 1;
    }
    if (startIdx === -1) return [];

    const conversations: { title: string; lastMessage: string }[] = [];
    let title = '';

    for (let i = startIdx; i < lines.length; i++) {
      const line = lines[i];
      if (!line || line === '￼') continue;
      if (this.isSectionHeader(line)) break;
      if (isMoreOptions(line)) continue;
      if (line === 'Start a task in Cowork') continue;
      if (line === 'Press and hold to record') continue;

      if (line.startsWith('Last message ')) {
        if (title) {
          conversations.push({ title, lastMessage: line });
          title = '';
        }
        continue;
      }

      title = line;
    }

    return conversations;
  }

  private isPlaceholder(text: string): boolean {
    return text.includes('Add instructions to tailor')
      || text.includes('Add project instructions');
  }

  private isSectionHeader(line: string): boolean {
    const headers = ['Files', 'Instructions', 'Conversations', 'Knowledge', 'Memory'];
    return headers.includes(line);
  }

  private looksLikeFile(name: string): boolean {
    return /\.\w{1,5}$/.test(name);
  }
}
