///: Dispatch — the WRITE half of a thought. Resource of [The Thought Lifecycle](02-the-thought-lifecycle.md).
///: Every thought lives in the Claude project. A NEW topic is born in the project's
///: own composer (it is in the project from the start — no move). An EXISTING topic
///: continues its conversation, and we [resume](#resume) it: if the app's
///: [session](../../src/session.ts) is still IN SYNC (we are already on the page it
///: remembered) we bind that conversation in place and send with ZERO navigation —
///: the common case, because several thoughts to one topic run back-to-back while
///: Claude Desktop is already open on it; only when out of sync do we go to the
///: project and re-open it. This is the same "resume if in sync, else navigate" rule
///: [read](02-the-thought-lifecycle--read.ts) uses — one shared helper, two callers.
///: Resume binds by URL (a fast session compare), never by reading the conversation
///: title (which is slow and, for a brand-new auto-titled conversation, wrong). We do
///: NOT rename here: Desktop overwrites the title when it finishes answering, so the
///: rename waits for read. The session still remembers the conversation afterward so
///: read can resume it too.
///:
///: A NEW topic carries an optional ATTACHMENT: the small prompt is TYPED (it stays
///: as the visible message), the big payload is PASTED (a large paste becomes a file
///: attachment) — the say/attach split.
///:
///: Drives the [object model](../reference-desk/13-the-redesign.md#the-object-model-settled--model-the-objects-not-their-features):
///: navigation returns typed pages; the only parametered View methods are the ones
///: that type. Returns the live [Response](../reference-desk/02-01-the-architecture--layers.md#response-and-message-objects).

import type { Claude } from '../../src/claude.ts';
import type { Composer } from '../../src/components/composer.ts';
import type { ProjectPage } from '../../src/pages/project.ts';
import type { ConversationPage } from '../../src/pages/conversation.ts';
import type { Response } from '../../src/components/response.ts';
import { writeState } from './03-persistence--state.ts';

const CLAUDE_PROJECT = 'Claude';

/** Navigate to the Claude project — where every thought lives. */
export async function claudeProject(app: Claude): Promise<ProjectPage> {
  const projects = await (await app.launch()).sidebar().projects();
  const claude = (await projects.projects()).find(p => p.name === CLAUDE_PROJECT);
  if (!claude) throw new Error('Claude project not found');
  return claude.open();
}

/** The conversation for an existing topic, inside the project. */
export async function openTopic(project: ProjectPage, topic: string): Promise<ConversationPage> {
  const convo = (await project.conversations()).find(c => c.name === topic);
  if (!convo) throw new Error(`No conversation "${topic}" in the Claude project`);
  return convo.open();
}

/** Resume an existing topic's conversation: bind it from the live screen if the
 *  session is still in sync, else navigate to it from the project the same way the
 *  write first reached it. FAST — session sync is a URL compare, so when Claude
 *  Desktop is already open on this conversation (the back-to-back case) there is no
 *  navigation and no title read at all. Shared by dispatch (continuing a write) and
 *  read, so both halves pick the conversation up the same cheap way. */
export async function resume(app: Claude, topic: string): Promise<ConversationPage> {
  if (await app.session.inSync()) {
    const here = await app.currentConversation();
    if (here) return here;
  }
  return openTopic(await claudeProject(app), topic);
}

/** Clear the composer (Doug may have left stray text), TYPE the prompt so it stays
 *  composer text, then PASTE the optional attachment (a large paste becomes an
 *  attachment), and send. */
async function send(composer: Composer, say: string, attach?: string): Promise<ConversationPage> {
  await composer.clear();
  await composer.type(say);
  if (attach) await composer.paste(attach);
  return composer.send();
}

export async function dispatch(app: Claude, topic: string, say: string, isNew: boolean, attach?: string): Promise<Response> {
  const page = isNew
    ? await send((await claudeProject(app)).composer, say, attach)   // new: born in the project composer
    : await send((await resume(app, topic)).composer, say, attach);  // existing: resume in place, or navigate
  await page.response.waitUntilStreaming();
  await app.session.remember();                                      // so read can resume this conversation
  writeState({ topic, message: say, isNew, startedAt: new Date().toISOString() });
  app.window.minimize();
  return page.response;
}
