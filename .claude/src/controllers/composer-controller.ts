///: ComposerController — blind UIA executor for the text input.
///: Pure sensors and actuators. No gateway. No foreground checks.
///: No requireScreen. No orchestration. Called only by the View
///: layer (Composer) through the Gateway.
///:
///: **ONE READ DECIDES, AND THE READING IS HANDED OVER.** `find` is the shape
///: [`Navigator.findHomeAffordance`](../navigator.ts) established and nothing else in
///: the driver had adopted: one snapshot answers for every candidate name, and it
///: comes back WITH the tree so the View can give it to `gateway.act` as `snapshot`
///: instead of making the gateway walk the same screen again milliseconds later.
///:
///: **AND IT REPLACES THE FALLBACK CHAINS.** `invokeByName(a) || invokeByName(b) ||
///: invokeByName(c)` is three possible worlds at one call site, and it FIRES into the
///: app up to three times to find out which. Reading the tree first makes the choice
///: DATA rather than control flow: one look, one action, one path to reason about.
///:
///: **A SENSOR ANSWERS A QUESTION; AN ACTUATOR THAT DID NOT ACT THROWS.** Doug,
///: 2026-09-17: *"you guys don't like to throw exceptions. I love exceptions so all
///: bugs like that are on you."* Every actuator here returned a boolean carrying the
///: failure, and every caller in [Composer](../components/composer.ts) discarded it —
///: the `async () => { await ... }` wrappers existed for no other reason. `clickSend`
///: was the worst: it returned `true` unconditionally, including when no Send button
///: was found and it pressed Enter into whatever had focus instead.
///:
///: [Layers](../../library/reference-desk/02-01-the-architecture--layers.md) — controllers are blind executors.
///: [The Gateway Pattern](../../library/reference-desk/02-02-the-architecture--gateway.md#the-snapshot-handoff) — the handoff.

import type { Automation } from '../automation.ts';
import type { TreeSnapshot } from '../tree.ts';
import { DriverError } from '../errors.ts';

// The composer's element is named by its placeholder, and it differs by screen:
// "Write your prompt to Claude" on a fresh/home chat, "Write a message…" inside an
// open conversation (grounded live, diag-send 2026-06-21). An EMPTY field reports its
// placeholder AS its value, so readDraft treats a placeholder match as empty.
//
// A NAME HERE IS NOT WHAT THE SCREEN SAYS. Confirmed 2026-09-17: the live tree names
// this element "Write your prompt to Claude" while the box on screen reads "How can I
// help you today?" — so this list mixes accessible names, which `tree.has({name})`
// matches, with visible strings, which only ever matched `readText()`. The ones that
// are not accessible names cannot match and are kept only because a capture taken at
// a FAILURE is a biased sample and does not prove a name dead.
const composerNames = [
  'Write your prompt to Claude',
  'How can I help you today?',
  'Write a message…',
  'Write a message...',
  'Message Claude',
  'Reply to Claude...',
];
const placeholderValues = new Set(composerNames.map(n => n.replace(/[.…]+$/, '')));

// Ordered by where they were seen live, 2026-09-17. 'Send message' is the button on a
// CONVERSATION page. 'Start task' is what the PROJECT page composer calls the same
// affordance — a new topic is born there, so every attempt to start one failed with
// "The Send button is not on screen" while the button sat on the tree under a name
// this list had never carried. The short messages that worked all went to a
// conversation that already existed, which is why it hid.
// 'Send message' is the button on a CONVERSATION page, confirmed live 2026-09-17.
//
// 'Start task' is DELIBERATELY NOT HERE, though it is what the project page composer
// offers. It is the COWORK affordance, not the chat one: clicking it sent the message
// and then landed nowhere, because it starts a task rather than a conversation. A
// name that fires the wrong action is worse than a missing one, since the failure it
// produces is a thing that happened rather than a thing that did not. The project
// composer has a Chat/Cowork mode and must be put into Chat before it offers a send
// this driver should press. That is the repair, and it is not a name.
const sendNames = ['Send message', 'Send'];
const attachNames = ['Add files, connectors, and more', 'Attach', 'Add content'];

export interface Found {
  readonly name: string;
  readonly tree: TreeSnapshot;
}

export class ComposerController {
  constructor(private readonly auto: Automation) {}

  /** Whichever of `names` is actually on screen, and the tree that says so. */
  private async find(names: readonly string[], what: string): Promise<Found> {
    const tree = await this.auto.uia.snapshot();
    const name = names.find(candidate => tree.has({ name: candidate }));
    if (name === undefined) {
      throw new DriverError(tree.isEmpty
        // Blindness is not absence, and the two are repaired in different files: a
        // missing name is fixed in this list, an empty tree by starting the app with
        // --force-renderer-accessibility. Saying "not on screen" for a screen nobody
        // could see sends the reader to the wrong one.
        ? `${what} could not be looked for: the app published no accessibility tree at all.`
        : `${what} is not on screen. Tried: ${names.join(', ')}.`,
      ).withTree(tree);
    }
    return { name, tree };
  }

  // --- Sensors (reads) ---

  /** The composer, for a View that is about to act on it — so the same reading can be
   *  handed to `gateway.act` rather than paid for twice. */
  async findComposer(): Promise<Found> {
    return this.find(composerNames, 'The composer');
  }

  async findSend(): Promise<Found> {
    return this.find(sendNames, 'The Send button');
  }

  async findAttach(): Promise<Found> {
    return this.find(attachNames, 'The Attach button');
  }

  /** What is typed in the box. Throws when there is no composer to read, because an
   *  absent composer and an empty one are different facts and `''` said both. */
  async readDraft(): Promise<string> {
    const { name } = await this.findComposer();
    return this.readDraftOf(name);
  }

  /** The draft of a composer the caller has already located — no second tree walk. */
  async readDraftOf(name: string): Promise<string> {
    const value = await this.auto.uia.readValue(name);
    if (value === null) throw new DriverError(`The composer "${name}" has no value to read.`);
    // An empty composer reports its placeholder as the value — that is NOT draft text.
    if (placeholderValues.has(value.replace(/[.…]+$/, '').trim())) return '';
    return value;
  }

  // ASKED OF THE APP BY NAME, NEVER BY READING THE WHOLE TREE. `snapshot()` enumerates
  // every descendant, and the gateway calls this on a taper — so the cost of one look is
  // paid on every look. That is survivable on an ordinary screen and it is not survivable
  // on this one: a large paste becomes an attachment the app puts ON THE TREE, and the
  // enumeration grew until a single read outlasted the whole budget. Measured 2026-09-17,
  // a ~28KB brief: the message and its attachment sat correctly in the composer, a
  // screenshot proved it, and `send` still reported "The Send button is not on screen"
  // — the button was there and we never got far enough down the tree to see it.
  //
  // `existsByName` is a FindFirst on the name property, which is the question we are
  // actually asking, and `diag-send.ts` has been asking it that way all along.
  async hasSendButton(): Promise<boolean> {
    for (const name of sendNames) {
      if (await this.auto.uia.existsByName(name)) return true;
    }
    return false;
  }

  /** Whether a composer is on the tree yet — the sibling of `hasSendButton`, for the
   *  same reason: a page that was just navigated to draws its composer a beat after
   *  its URL changes, and a caller that looks once in that gap sees no composer on a
   *  screen that has one (measured 2026-09-29: a new topic's write, born in the Claude
   *  project's composer, failed "not on screen" while the tree read moments later
   *  carried `Edit | Write your prompt to Claude`). */
  async hasComposer(): Promise<boolean> {
    for (const name of composerNames) {
      if (await this.auto.uia.existsByName(name)) return true;
    }
    return false;
  }

  /** How many pasted-text attachments are present. A large paste becomes one of these
   *  instead of draft text, so it is how `paste` confirms a big add landed. */
  async countPastedAttachments(): Promise<number> {
    const names = await this.auto.uia.findAllNames('Button');
    return names.filter(n => n.startsWith('Remove Pasted Text')).length;
  }

  // --- Actuators (single UIA actions, on an element the caller already located) ---

  async invoke(name: string): Promise<void> {
    if (!await this.auto.uia.invokeByName(name)) {
      throw new DriverError(`"${name}" was on the tree but could not be invoked.`);
    }
  }

  async click(name: string): Promise<void> {
    if (!await this.auto.uia.clickByName(name)) {
      throw new DriverError(`"${name}" was on the tree but could not be clicked.`);
    }
  }

  async typeInto(name: string, text: string): Promise<void> {
    if (!await this.auto.uia.setValue(name, text)) {
      throw new DriverError(`"${name}" was on the tree but would not take a value.`);
    }
  }

  async pasteInto(name: string, text: string): Promise<void> {
    await this.click(name);
    await this.auto.keyboard.typeViaClipboard(text);
  }

  async selectAllAndDeleteIn(name: string): Promise<void> {
    await this.click(name);
    await this.auto.keyboard.selectAll();
    await this.auto.keyboard.delete();
  }

  /** Remove the pasted-text attachment if one is there.
   *
   *  NOTHING TO REMOVE IS NOT A FAILURE — the caller clears a composer that may or may
   *  not hold an attachment, so absence is an ordinary outcome and returns quietly. A
   *  button that IS there and will not be invoked is a failure, and that one throws. */
  async removePastedAttachment(): Promise<void> {
    const names = await this.auto.uia.findAllNames('Button');
    const button = names.find(n => n.startsWith('Remove Pasted Text'));
    if (button === undefined) return;
    await this.invoke(button);
  }
}
