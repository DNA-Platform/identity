// TextContentDialog — the modal for adding text content to a project.
// Has Title and Content fields, Cancel and Add Content buttons.
// Every action goes through the gateway with verification.

import type { Automation } from '../automation.ts';

export class TextContentDialog {
  isOpen = false;
  title = '';
  content = '';

  constructor(private readonly auto: Automation) {}

  private get gateway() { return this.auto.gateway; }

  async detect(): Promise<void> {
    const names = await this.auto.uia.allNames();
    this.isOpen = names.some(n => n === 'ControlType.Window | Add text content');
  }

  async verifyOpen(): Promise<boolean> {
    await this.detect();
    if (!this.isOpen) return false;
    const names = await this.auto.uia.allNames();
    const hasTitle = names.some(n => n === 'ControlType.Edit | Title');
    const hasContent = names.some(n => n === 'ControlType.Edit | Content');
    const hasSubmit = names.some(n => n === 'ControlType.Button | Add Content');
    return hasTitle && hasContent && hasSubmit;
  }

  async waitUntilReady(): Promise<void> {
    await this.gateway.act(
      async () => {},
      async () => this.verifyOpen(),
      { description: 'Wait for text content dialog', timeoutMs: 10_000, retries: 1 },
    );
    this.isOpen = true;
  }

  async readTitleField(): Promise<string> {
    const handle = this.auto.window.handle;
    const result = await this.auto.shell.run(`
      Add-Type -AssemblyName UIAutomationClient
      Add-Type -AssemblyName UIAutomationTypes
      $uia = [System.Windows.Automation.AutomationElement]
      $window = $uia::FromHandle([IntPtr]::new(${handle}))
      $cond = New-Object System.Windows.Automation.AndCondition(
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::ControlTypeProperty, [System.Windows.Automation.ControlType]::Edit)),
        (New-Object System.Windows.Automation.PropertyCondition(
          $uia::NameProperty, 'Title'))
      )
      $el = $window.FindFirst([System.Windows.Automation.TreeScope]::Descendants, $cond)
      if ($el) {
        $vp = $null
        if ($el.TryGetCurrentPattern([System.Windows.Automation.ValuePattern]::Pattern, [ref]$vp)) {
          $vp.Current.Value
        }
      }
    `, 10000);
    return result?.trim() ?? '';
  }

  async setTitle(title: string): Promise<void> {
    if (!this.isOpen) throw new Error('Text content dialog is not open');

    await this.gateway.act(
      async () => {
        await this.auto.uia.clickByName('Title');
        await this.auto.keyboard.sendKeys('^a');
        await this.auto.keyboard.typeViaClipboard(title);
      },
      async () => {
        const actual = await this.readTitleField();
        return actual.includes(title.slice(0, 20));
      },
      {
        description: `Set title to "${title.slice(0, 30)}"`,
        timeoutMs: 5_000,
        retries: 2,
        screenshotOnFailure: 'title-set-failed',
      },
    );

    this.title = title;
  }

  async setContent(content: string): Promise<void> {
    if (!this.isOpen) throw new Error('Text content dialog is not open');

    await this.gateway.act(
      async () => {
        await this.auto.uia.clickByName('Content');
        await this.auto.keyboard.sendKeys('^a');
        await this.auto.keyboard.typeViaClipboard(content);
      },
      async () => {
        // Verify we're still in the dialog (content field read-back is harder,
        // but at minimum the dialog should still be open)
        return this.verifyOpen();
      },
      {
        description: 'Set content',
        timeoutMs: 5_000,
        retries: 2,
      },
    );

    this.content = content;
  }

  async submit(): Promise<void> {
    if (!this.isOpen) throw new Error('Text content dialog is not open');

    // Verify we're still in the dialog before submitting
    const ready = await this.verifyOpen();
    if (!ready) throw new Error('Dialog lost before submit — cannot proceed');

    await this.gateway.act(
      async () => {
        const invoked = await this.auto.uia.invokeByName('Add Content');
        if (!invoked) throw new Error('Could not click Add Content button');
      },
      async () => {
        await this.detect();
        return !this.isOpen;
      },
      {
        description: 'Submit text content',
        timeoutMs: 10_000,
        retries: 1,
        screenshotOnFailure: 'submit-failed',
      },
    );

    this.isOpen = false;
    this.title = '';
    this.content = '';
  }

  async cancel(): Promise<void> {
    await this.detect();
    if (!this.isOpen) return;

    await this.gateway.act(
      async () => {
        await this.auto.uia.invokeByName('Cancel');
      },
      async () => {
        await this.detect();
        return !this.isOpen;
      },
      { description: 'Cancel text content dialog', timeoutMs: 5_000, retries: 2 },
    );

    this.isOpen = false;
    this.title = '';
    this.content = '';
  }
}
