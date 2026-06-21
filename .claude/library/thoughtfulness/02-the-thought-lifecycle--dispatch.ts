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

/** Clear the composer (Doug may have left stray text), type the message, send. */
async function send(composer: Composer, message: string): Promise<ConversationPage> {
  await composer.clear();
  await composer.type(message);
  return composer.send();
}

export async function dispatch(app: Claude, topic: string, message: string, isNew: boolean): Promise<Response> {
  const project = await claudeProject(app);
  const page = isNew
    ? await send(project.composer, message)                       // new: born in the project
    : await send((await openTopic(project, topic)).composer, message); // existing: continue it
  await page.response.waitUntilStreaming();
  await app.session.remember();                                   // so read can resume this conversation
  writeState({ topic, message, isNew, startedAt: new Date().toISOString() });
  app.window.minimize();
  return page.response;
}
