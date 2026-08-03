///: Read — the READ half of a thought. Resource of [The Thought Lifecycle](02-the-thought-lifecycle.md).
///: A LATER, separate process from [dispatch](02-the-thought-lifecycle--dispatch.ts) — never chained.
///:
///: It FINDS the in-flight thought's conversation, then WAITS for the answer. Finding it:
///:  - FAST PATH — if the app's [session](../../src/session.ts) is still IN SYNC (we are
///:    on the page the write remembered) bind that conversation in place, no navigation.
///:  - OUT OF SYNC, a NEW topic — Desktop auto-titled the fresh conversation, so it has
///:    no `{Name} > {Topic}` title to open by; but it is among the MOST RECENT conversations
///:    in the project, so SCAN from the top (the just-made one is normally first) and take
///:    the conversation that CONFIRMS it carries the message we sent. A new topic is never
///:    just failed for being out of sync, and a buried thread is found, not lost.
///:  - OUT OF SYNC, an EXISTING topic — open it by its `{Name} > {Topic}` title.
///: Then it WAITS — read is the waiting phase, holding the app open and polling until the
///: response is complete. For a NEW topic it RENAMES the conversation to the topic once the
///: answer is done (Desktop overwrites the title while answering, so the rename is after) —
///: and that rename is what finally gives a new topic its `{Name} > {Topic}` title.

import type { Claude } from '../../src/claude.ts';
import type { ConversationPage } from '../../src/pages/conversation.ts';
import { readState, type ThoughtState } from './03-persistence--state.ts';
import { claudeProject, openTopic } from './02-the-thought-lifecycle--dispatch.ts';

export interface ReadResult { complete: boolean; text: string; }

/** Confirm a conversation's user turn carries the message we sent — a normalized,
 *  distinctive prefix is enough, so whitespace and case differences do not matter.
 *  This is how a recovered conversation is proven OURS before it is renamed. */
function carriesMessage(messages: { role: string; content: string }[], sent: string): boolean {
  const norm = (s: string) => s.replace(/\s+/g, ' ').trim().toLowerCase();
  const probe = norm(sent).slice(0, 60);
  if (!probe) return false;
  return messages.some(m => m.role === 'user' && norm(m.content).includes(probe));
}

/** Recover a NEW topic's conversation by the MESSAGE we sent. Desktop auto-titled
 *  the fresh conversation, so it cannot be opened by name — but it is among the most
 *  recent conversations in the Claude project. Scan from the top (the just-made one is
 *  normally first; a buried thread is further down) and return the first that carries
 *  our message; stop at the cap so we never trawl forever or rename the wrong chat. */
async function recoverByMessage(app: Claude, sentMessage: string, max = 30): Promise<ConversationPage> {
  const convos = await (await claudeProject(app)).conversations();
  if (convos.length === 0) throw new Error('No conversations in the Claude project to recover.');
  const limit = Math.min(convos.length, max);
  for (let i = 0; i < limit; i++) {
    const page = await convos[i].open();
    if (carriesMessage(await page.messages(), sentMessage)) {
      console.log(`[think] recovered the thought from conversation #${i + 1} of ${limit} (matched by the message we sent).`);
      return page;
    }
  }
  throw new Error(`No conversation among the ${limit} most recent in the Claude project carries the message we sent.`);
}

/** Find the in-flight thought's conversation: fast and in place if the session is in
 *  sync; else recover a new topic by scanning recent conversations for our message, or
 *  open an existing one by its title. */
async function locate(app: Claude, state: ThoughtState): Promise<ConversationPage> {
  if (await app.session.inSync()) {
    const here = await app.currentConversation();
    if (here) return here;
  }
  return state.isNew
    ? recoverByMessage(app, state.message)
    : openTopic(await claudeProject(app), state.topic);
}

export async function read(app: Claude): Promise<ReadResult> {
  const state = readState();
  if (!state) throw new Error('No in-flight thought to read');

  const page = await locate(app, state);
  await page.scrollToBottom();
  // Ask ONCE. If the thought is not finished, that is the answer and this returns
  // it — run the read again later. Nothing here holds the screen waiting.
  const complete = await page.response.isSettledComplete();
  const text = await page.response.read();
  if (complete && state.isNew) await page.rename(state.topic);   // rename now — Desktop's title is set
  await app.window.minimize();
  return { complete, text };
}
