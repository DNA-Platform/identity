///: Dispatch — the WRITE half of a thought. Resource of [The Thought Lifecycle](02-the-thought-lifecycle.md).
///: Every thought lives in the Claude project, so we always go there first. A NEW
///: topic is born in the project's own composer (it is in the project from the
///: start — no move). An EXISTING topic continues its conversation. We do NOT
///: rename here: Desktop overwrites the title when it finishes answering, so the
///: rename waits for [read](02-the-thought-lifecycle--read.ts). The app's
///: [session](../../src/session.ts) remembers the conversation so read can resume it.
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

/** Locate a topic's conversation — the STANDARD for every step, write and read. If
 *  the app is already on that exact topic (the live screen is a conversation and its
 *  title matches), reuse it untouched — no re-navigation. Otherwise open the project
 *  and navigate to it. The title check is what the write needs that read takes on
 *  faith: the session remembers a URL, not a topic, so "already on a conversation"
 *  is not "already on the RIGHT conversation". */
export async function locateConversation(app: Claude, topic: string): Promise<ConversationPage> {
  const here = await app.currentConversation();
  if (here && (await here.title()) === topic) return here;
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
  // A NEW topic is born in the project composer (no titled conversation yet); an
  // EXISTING topic uses the standard locate — reuse the live screen if we are
  // already on it, else navigate. The session sync-check, now the rule for write too.
  const composer = isNew
    ? (await claudeProject(app)).composer
    : (await locateConversation(app, topic)).composer;
  const page = await send(composer, say, attach);
  await page.response.waitUntilStreaming();
  await app.session.remember();                                   // so the next step resumes this conversation
  writeState({ topic, message: say, isNew, startedAt: new Date().toISOString() });
  app.window.minimize();
  return page.response;
}
