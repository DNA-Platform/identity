///: Read — the READ half of a thought. Resource of [The Thought Lifecycle](02-the-thought-lifecycle.md).
///: A LATER, separate process from [dispatch](02-the-thought-lifecycle--dispatch.ts) — never chained.
///:
///: It resumes the conversation: if the app's [session](../../src/session.ts) is
///: still IN SYNC (we are on the page it remembered), it binds that conversation;
///: otherwise it starts from home and navigates to it exactly as the write did.
///: Then it WAITS — read is the waiting phase, so it holds the app open and polls
///: until the response is complete (unlike write, which hands the computer back at
///: streaming). For a NEW topic it renames to the topic once done, because Desktop
///: overwrites the title when it finishes, so the rename has to be after.

import type { Claude } from '../../src/claude.ts';
import { readState } from './03-persistence--state.ts';
import { resume } from './02-the-thought-lifecycle--dispatch.ts';

export interface ReadResult { complete: boolean; text: string; }

export async function read(app: Claude): Promise<ReadResult> {
  const state = readState();
  if (!state) throw new Error('No in-flight thought to read');

  const page = await resume(app, state.topic);
  await page.scrollToBottom();
  const complete = await page.response.waitUntilComplete();      // hold the app open and wait
  const text = await page.response.read();
  if (complete && state.isNew) await page.rename(state.topic);   // rename now — Desktop's title is set
  app.window.minimize();
  return { complete, text };
}
