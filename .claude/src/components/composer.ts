///: Composer — the text input box you see on screen.
///: Every method is a mouse or keyboard action. No macros.
///:
///: **THE READING THAT CHOSE THE ELEMENT IS HANDED TO THE GATEWAY.** Every method
///: here locates what it is about to touch with one of the controller's `find*`
///: sensors and gives `gateway.act` both the `target` it will touch and the
///: `snapshot` that found it. Until 2026-09-17 this file passed NEITHER, and it is on
///: the hot path of every operation: no `target` meant no precheck at all, so a
///: missing composer let the action fire into nothing and fail as a verify a second
///: later; and no `snapshot` would have made the gateway walk the tree again to
///: precheck the very element the walk above had just found — the same screen, read
///: twice, milliseconds apart. [Navigator.goHome](../navigator.ts) was the only call
///: site in the driver that already did this.
///:
///: type(text) — type text into the box. The only method that takes a string.
///: clear() — clear the box. Checks if someone else is typing first.
///: readDraft() — read what's in the box.
///: send() — click Send. Parameterless. WAITS for the Send button to be drawn before
///:   locating it, because the app renders it a beat after the text lands and `type`
///:   returns at the front of that gap. Verifies the SEND BUTTON IS GONE — and see
///:   the note on the method for why that is only meaningful with the precheck in
///:   front of it — then reconstitutes the ConversationPage you land on (decision #4:
///:   no sendAndGetConversation macro; the page is obtained through
///:   navigate-and-confirm). The composer stays page-unaware — it does NOT check that
///:   response text appeared; that is the page's job (decision #2).
///: attach() — click the Attach button.
///:
///: It never imports Uia — touching the tree is a controller's job (layer invariant
///: 4). Holding a TreeSnapshot a controller handed over and passing it on is not
///: reading one.
///:
///: The Gateway bridges every call to the controller: foreground is checked, the
///: precheck confirms the element is on the tree we read, the action fires once, a
///: controller sensor verifies.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#settled-decisions-the-four-open-questions) — decisions #2 and #4.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the one rule.
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md#the-snapshot-handoff) — the handoff.

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

  /** Type text directly into the box — the value is set in place, not a clipboard
   *  event, so it never becomes a pasted attachment; text added this way always
   *  stays as composer text. Verifies the draft actually changed, so it is safe to
   *  call before or after `paste`. The human equivalent: typing. */
  async type(text: string): Promise<void> {
    const { name, tree } = await this.controller.findComposer();
    const before = await this.controller.readDraftOf(name);
    await this.gateway.act(
      () => this.controller.typeInto(name, text),
      async () => (await this.controller.readDraftOf(name)) !== before,
      { description: 'Type text into composer (direct)', target: { name }, snapshot: tree },
    );
  }

  /** Paste text via the clipboard. A large paste is turned into a pasted attachment
   *  by the app — which is how a big payload is attached. If the box already holds
   *  text, two newlines are pasted ahead of it so the add lands cleanly. Verifies
   *  the message changed — the draft grew, or an attachment appeared — so calling
   *  this after `type` is safe. The human equivalent: pasting. */
  async paste(text: string): Promise<void> {
    const { name, tree } = await this.controller.findComposer();
    const before = await this.controller.readDraftOf(name);
    const beforeAttachments = await this.controller.countPastedAttachments();
    const payload = before ? `\n\n${text}` : text;
    await this.gateway.act(
      () => this.controller.pasteInto(name, payload),
      async () =>
        (await this.controller.readDraftOf(name)) !== before ||
        (await this.controller.countPastedAttachments()) > beforeAttachments,
      // Counting attachments is a read, so the composer we found is still the one we
      // are about to paste into — nothing has fired between the look and the act.
      { description: 'Paste text into composer', target: { name }, snapshot: tree },
    );
  }

  async readDraft(): Promise<string> {
    return this.controller.readDraft();
  }

  async clear(): Promise<void> {
    // WAIT FOR THE COMPOSER TO BE DRAWN BEFORE LOOKING FOR IT — the same look `send`
    // makes for its button, for the same reason. `clear` is the first touch a dispatch
    // makes on a page it has just navigated to, and the project page puts its composer
    // on the tree a beat after its URL changes. A look, never a sleep: the taper exits
    // on the first true answer, so a page already drawn pays one tree read.
    await this.gateway.waitFor(() => this.controller.hasComposer(), {
      settleMs: 5_000,
      description: 'Wait for the composer to be drawn',
    });

    const found = await this.controller.findComposer();
    const draft = await this.controller.readDraftOf(found.name);
    if (!draft) return;

    // Wait for stability — three identical reads in a row means nobody is typing.
    //
    // The gateway polls this on its tapering backoff, so a quiet box agrees on the
    // third read, about 150ms in. Until 2026-09-17 the gateway called a predicate
    // ONCE: `stable` could only ever reach 1, `>= 3` was therefore never true, and
    // this was a flat 1000ms sleep and a single read wearing the description of a
    // check that could not happen.
    //
    // The answer is still not acted on — if the draft is STILL changing when the
    // budget runs out, the clear below happens anyway. That was true before too, and
    // it is worth a ruling rather than a quiet fix here.
    let prev = draft;
    let stable = 0;
    await this.gateway.waitFor(async () => {
      const current = await this.controller.readDraftOf(found.name);
      if (current === prev) { stable++; } else { stable = 0; prev = current; }
      return stable >= 3;
    });

    // Remove a pasted attachment. ONCE.
    //
    // This used to be `while (await removePastedAttachment())` — an UNBOUNDED loop
    // clicking the app until it stopped answering, 400ms apart, with no ceiling at
    // all. If the app ever answered true without removing anything it would click
    // forever, holding the screen. If one call is not enough, that is a defect to
    // read off the tree and fix here — not something to paper over by clicking again.
    await this.controller.removePastedAttachment();

    // Look again before clearing, because an action fired since the look above. The
    // handoff is a fact the caller observed immediately before asking to act; a tree
    // read on the far side of a click is exactly the staleness the precheck exists to
    // refuse, and would let an old screen authorise this one.
    const { name, tree } = await this.controller.findComposer();
    await this.gateway.act(
      () => this.controller.selectAllAndDeleteIn(name),
      async () => (await this.controller.readDraftOf(name)) === '',
      { description: 'Clear composer', target: { name }, snapshot: tree },
    );
  }

  /** Click Send, confirm the message left the box, then reconstitute the
   *  ConversationPage you land on. Whether a response then appears is the page's
   *  job (decision #2) — call page.response.waitUntilStreaming() for that.
   *
   *  Verify = the Send button is gone. The message submitted → Send becomes Stop,
   *  or the composer empties. readDraft===''  is NOT reliable here: an empty
   *  conversation composer reports its placeholder "Write a message…" as its
   *  value, so it never reads as '' (grounded live, diag-send 2026-06-21).
   *
   *  THE ABSENCE ONLY MEANS ANYTHING BECAUSE THE PRECHECK PROVED PRESENCE. "No Send
   *  button" on its own is satisfied by a message that left AND by a composer that
   *  was never there — one answer for the success and for a driver pointed at the
   *  wrong screen. `findSend` locates the button and hands that tree over as the
   *  precheck, so the button is known to have been on screen the moment before the
   *  click; only then does its absence afterwards say the click did something. */
  async send(): Promise<ConversationPage> {
    // WAIT FOR THE BUTTON TO BE DRAWN BEFORE LOOKING FOR IT. The app puts the text
    // in the box first and the Send button on the tree a beat afterwards, and the
    // verify `type` uses — "the draft changed" — is true at the very front of that
    // gap, about 50ms in. Nothing here ever noticed, because while `act` slept a
    // flat second after every action that sleep was also, silently, paying for this
    // render: the caller that typed and then sent had a whole second of cover it had
    // never asked for and nobody had written down. Making the verify fast
    // (2026-09-17) took the cover away and the very next dispatch failed with "The
    // Send button is not on screen. Tried: Send, Send message." — on a screen whose
    // tree, read seconds later with the same text still in the composer, carried
    // `Button | Send message` at index 233. The name was right; the moment was wrong.
    //
    // So the wait is said out loud here, and it is a LOOK, never a sleep: Doug,
    // 2026-09-17 — *"The gateway is an abstraction that has a test check loop."* It
    // re-reads the tree on the taper and comes back the instant the button is there,
    // so the common case pays one tree read (~80ms) instead of the second it used to
    // pay without knowing. The budget is the default, which is exactly the flat
    // second that had been covering this — restoring the cover, not widening it.
    //
    // The answer is deliberately not acted on. If the button never arrives,
    // `findSend` below throws the error that names what it looked for and carries
    // the tree that disagreed, which is the diagnosis anyone reading this failure
    // wants; a second error raised here would only say the same thing earlier and
    // with less evidence.
    // THE BUDGET IS A CEILING, NOT A COST. The default settle is 250ms, which is right
    // for a keystroke landing in a box, and far too short for the case this method
    // actually has to survive: a large paste becomes a FILE ATTACHMENT, and the app
    // does not draw Send until it has taken it. Measured 2026-09-17 sending a ~20KB
    // design brief — the default budget expired and the dispatch failed with "The Send
    // button is not on screen" on a screen that grew one moments later. Because this
    // is a taper that exits on the first true answer, a generous ceiling costs nothing
    // in the ordinary case and only spends itself when the app is genuinely busy.
    await this.gateway.waitFor(() => this.controller.hasSendButton(), {
      settleMs: 15_000,
      description: 'Wait for the Send button to be drawn',
    });

    const { name, tree } = await this.controller.findSend();
    await this.gateway.act(
      () => this.controller.invoke(name),
      async () => !(await this.controller.hasSendButton()),
      { description: 'Click Send', target: { name }, snapshot: tree },
    );
    return this.nav.waitForConversation();
  }

  async attach(): Promise<void> {
    const { name, tree } = await this.controller.findAttach();
    await this.gateway.act(
      () => this.controller.invoke(name),
      async () => true, // TODO: verify dialog appeared
      { description: 'Click Attach', target: { name }, snapshot: tree },
    );
  }
}
