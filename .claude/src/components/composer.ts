///: Composer — the text input box you see on screen.
///: Every method is a mouse or keyboard action. No macros.
///:
///: type(text) — type text into the box. The only method that takes a string.
///: clear() — clear the box. Checks if someone else is typing first.
///: readDraft() — read what's in the box.
///: send() — click Send. Parameterless. Verifies the DRAFT CLEARED — the
///:   composer's own signal that the click fired — then reconstitutes the
///:   ConversationPage you land on (decision #4: no sendAndGetConversation macro;
///:   the page is obtained through navigate-and-confirm). The composer stays
///:   page-unaware — it does NOT check that response text appeared; that is the
///:   page's job (decision #2). It never imports Uia — touching the tree is a
///:   controller's job (layer invariant 4).
///: attach() — click the Attach button.
///:
///: The Gateway bridges every call to the controller: foreground is checked,
///: the action fires once, a controller sensor verifies.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions) — decisions #2 and #4.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the one rule.

import type { ComposerController } from '../controllers/composer-controller.ts';
import type { Gateway } from '../gateway.ts';
import type { Navigation } from '../pages/navigation.ts';
import type { ConversationPage } from '../pages/conversation.ts';

export class Composer {
  constructor(
    private readonly controller: ComposerController,
    private readonly gateway: Gateway,
    private readonly nav: Navigation,
  ) {}

  async type(text: string): Promise<void> {
    await this.gateway.act(
      () => this.controller.paste(text),
      () => this.controller.hasSendButton(),
      { description: 'Type text into composer' },
    );
  }

  async readDraft(): Promise<string> {
    return this.controller.readDraft();
  }

  async clear(): Promise<void> {
    const draft = await this.readDraft();
    if (!draft) return;

    // Wait for stability — three identical reads means nobody is typing
    let prev = draft;
    let stable = 0;
    await this.gateway.waitFor(async () => {
      const current = await this.controller.readDraft();
      if (current === prev) { stable++; } else { stable = 0; prev = current; }
      return stable >= 3;
    }, { timeoutMs: 30_000 });

    // Remove pasted attachments first
    while (await this.controller.removePastedAttachment()) {
      await new Promise(r => setTimeout(r, 400));
    }

    // Select all and delete
    await this.gateway.act(
      () => this.controller.selectAllAndDelete(),
      async () => (await this.controller.readDraft()) === '',
      { description: 'Clear composer' },
    );
  }

  /** Click Send, confirm the message left the box, then reconstitute the
   *  ConversationPage you land on. Whether a response then appears is the page's
   *  job (decision #2) — call page.response.waitUntilStreaming() for that.
   *
   *  Verify = the Send button is gone. The message submitted → Send becomes Stop,
   *  or the composer empties. readDraft===''  is NOT reliable here: an empty
   *  conversation composer reports its placeholder "Write a message…" as its
   *  value, so it never reads as '' (grounded live, diag-send 2026-06-21). */
  async send(): Promise<ConversationPage> {
    await this.gateway.act(
      async () => { await this.controller.clickSend(); },
      async () => !(await this.controller.hasSendButton()),
      { description: 'Click Send' },
    );
    return this.nav.waitForConversation();
  }

  async attach(): Promise<void> {
    await this.gateway.act(
      async () => { await this.controller.clickAttach(); },
      async () => true, // TODO: verify dialog appeared
      { description: 'Click Attach' },
    );
  }
}
