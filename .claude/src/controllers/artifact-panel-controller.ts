import type { Automation } from '../automation.ts';
import type { Artifact } from '../components/artifact-panel.ts';

export class ArtifactPanelController {
  constructor(private readonly auto: Automation) {}

  async checkOpen(): Promise<boolean> {
    this.auto.navigator.requireScreen('conversation');
    return this.auto.uia.exists('Group', 'Artifact');
  }

  async open(): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    await this.auto.gateway.act(
      async () => { await this.auto.uia.invoke('Button', 'Artifacts'); },
      () => this.checkOpen(),
      { description: 'Open artifact panel' },
    );
  }

  async close(): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    await this.auto.gateway.act(
      async () => { await this.auto.uia.invoke('Button', 'Close'); },
      async () => !(await this.checkOpen()),
      { description: 'Close artifact panel' },
    );
  }

  async readList(): Promise<Artifact[]> {
    this.auto.navigator.requireScreen('conversation');

    // Only read artifacts if the panel is open
    const open = await this.checkOpen();
    if (!open) return [];

    return this.auto.gateway.read(
      async () => {
        const names = await this.auto.uia.findAllNames('Hyperlink');
        return names
          .filter(n => n && !this.isNavLink(n))
          .map(title => ({ title, type: 'unknown' }));
      },
      () => true,
      { description: 'List artifacts' },
    );
  }

  async select(title: string): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    await this.auto.gateway.act(
      async () => { await this.auto.uia.invoke('Hyperlink', title); },
      async () => {
        // Verify the artifact content area appeared
        const text = await this.auto.uia.readText();
        return text !== null && text.length > 0;
      },
      { description: `Select artifact "${title}"` },
    );
  }

  async readContent(): Promise<string> {
    this.auto.navigator.requireScreen('conversation');

    return this.auto.gateway.read(
      async () => {
        const text = await this.auto.uia.readText();
        return text ?? '';
      },
      (content) => content.length > 0,
      { description: 'Read artifact content' },
    );
  }

  async copy(): Promise<string> {
    this.auto.navigator.requireScreen('conversation');

    let clipboardBefore = '';
    try { clipboardBefore = await this.auto.keyboard.readClipboard(); } catch {}

    await this.auto.gateway.act(
      async () => { await this.auto.uia.invoke('Button', 'Copy'); },
      async () => {
        const after = await this.auto.keyboard.readClipboard();
        return after.length > 0 && after !== clipboardBefore;
      },
      { description: 'Copy artifact to clipboard', timeoutMs: 5_000 },
    );

    return this.auto.keyboard.readClipboard();
  }

  async download(outputPath: string): Promise<void> {
    this.auto.navigator.requireScreen('conversation');

    await this.auto.gateway.act(
      async () => { await this.auto.uia.invoke('Button', 'Download'); },
      async () => {
        // Verify the button text changed or a download indicator appeared
        const names = await this.auto.uia.allNames();
        return names.some(n => n.includes('Downloaded') || n.includes('Saved'));
      },
      { description: `Download artifact to ${outputPath}`, timeoutMs: 10_000 },
    );
  }

  private isNavLink(name: string): boolean {
    const nav = ['New chat', 'Projects', 'Artifacts', 'Customize',
      'View all', 'Chat', 'Cowork', 'Code'];
    return nav.includes(name);
  }

}
