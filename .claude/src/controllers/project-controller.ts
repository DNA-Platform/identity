///: ProjectController — UIA boundary for a single project page.
///: Sensors and actuators only. No orchestration.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — the controller boundary.
///: [Project Operations](../../library/reference-desk/03-03-operations--projects.md) — project workflows.

import type { Automation } from '../automation.ts';
import { ProjectFile } from '../components/project-file.ts';
import { isMoreOptions, isComposerPlaceholder, normalizeSpaces, isSidebarChrome } from '../text.ts';

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
        const dialogOpened = await this.isFileDialogOpen();
        if (!dialogOpened) throw new Error('File dialog did not open');

        // Type path and submit
        await this.typePathInDialog(localPath);
      },
      async () => {
        const afterCount = (await this.listFiles()).length;
        return afterCount > beforeCount;
      },
      { description: `Upload ${localPath}` },
    );
  }

  /** Is the file dialog open? Settle once, look once. No loop: this used to poll
   *  twenty times at 500ms, holding the screen for ten seconds to answer a question
   *  one look can answer. If it is not open, that is the answer — read the tree and
   *  fix the code that was supposed to open it. */
  private async isFileDialogOpen(): Promise<boolean> {
    await new Promise(r => setTimeout(r, 500));
    const found = await this.auto.shell.run(`
      Add-Type -AssemblyName UIAutomationClient
      $uia = [System.Windows.Automation.AutomationElement]
      $cond = New-Object System.Windows.Automation.PropertyCondition(
        $uia::ClassNameProperty, '#32770')
      $d = $uia::RootElement.FindFirst([System.Windows.Automation.TreeScope]::Children, $cond)
      if ($d) { 'found' } else { 'none' }
    `, 5000);
    return found?.trim() === 'found';
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

    // READ THE ELEMENTS, NOT THE WINDOW'S TEXT. Every conversation on a project page
    // is a Hyperlink whose Name is exactly its title — verified against the live tree
    // 2026-09-17, where the Claude project showed ten Hyperlinks, eight of them
    // conversations and two of them chrome.
    //
    // It parsed `readText()` instead, and required a line beginning "Last message "
    // before it would emit anything. The app stopped writing that — a row now reads
    // "Test" then "Jun 21" — so NO line ever matched and this returned an EMPTY LIST
    // for every project. `openTopic` then reported "No conversation X in the Claude
    // project" about conversations sitting in plain view, which is what took /think
    // down. A flat text stream has no boundaries in it; the element names do.
    return this.auto.gateway.read(
      async () => {
        const links = await this.auto.uia.findAllNames('Hyperlink');
        return links
          .map(name => normalizeSpaces(name.trim()))
          // `lastMessage` is EMPTY BY ADMISSION rather than by accident: the app no
          // longer publishes it, the Hyperlink carries only the title, and inventing
          // one from the neighbouring Text would be pairing by position on a list
          // whose positions just moved. exports/capture.ts reads it and will record
          // it blank, which is true.
          .filter(name => name !== '' && !isSidebarChrome(name))
          .map(title => ({ title, lastMessage: '' }));
      },
      () => true,
      { description: 'Read project conversations' },
    );
  }

  /** Scroll to the end, expand the list once, read it.
   *
   *  **One pass.** This used to loop up to twenty times: scroll, click "Show more",
   *  wait for growth, repeat — each iteration synthesising an END keypress and a
   *  click into the app. That is a background process typing and clicking into
   *  someone's window, over and over, for as long as it felt like it. Nothing
   *  justifies that.
   *
   *  If one expansion does not reveal everything, the answer is a better read — not
   *  more clicking. Read the tree, see how the list is actually paged, and change
   *  this code. */
  async loadAllConversations(): Promise<{ title: string; lastMessage: string }[]> {
    this.auto.navigator.requireScreen('project');

    await this.auto.keyboard.sendKeys('{END}');

    // Two flat `setTimeout(1_000)` sleeps stood here until 2026-09-17 — two seconds
    // of dead time on the hot path of every /think, paid in full whether the app
    // answered in 30ms or never answered at all. The gateway asks instead, on its
    // taper, and stops the moment it is answered. The budget is the ceiling the sleep
    // used to be, so the slow case still costs exactly what it did.
    //
    // The question after END is whether the list has rendered far enough to show its
    // "Show more" — matched the way invokeByNameLast matches it, a Button or a
    // Hyperlink whose name STARTS that way, so the wait and the click below agree
    // about what they are looking for. Neither answer is acted on, deliberately: if
    // the button never appears the click is the no-op it has always been, and a list
    // that was already whole reads correctly either way.
    await this.auto.gateway.check(
      async () => (await this.auto.uia.allNames())
        .some(n => /^ControlType\.(Button|Hyperlink) \| Show more/.test(n)),
      { description: 'Wait for "Show more" after scrolling to the end' },
    );

    // Click the LAST "Show more" — the one in the conversation list, not the
    // description. If it is not there, the list is already whole.
    const before = (await this.auto.uia.findAllNames('Hyperlink')).length;
    await this.auto.uia.invokeByNameLast('Show more');
    await this.auto.gateway.check(
      async () => (await this.auto.uia.findAllNames('Hyperlink')).length > before,
      { description: 'Wait for the conversation list to grow' },
    );

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
      {},
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
