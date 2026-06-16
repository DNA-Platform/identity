// think-runner.ts — One-shot runner for the /think skill.
// Sends a question to Claude Desktop, waits for response, then minimizes.

import { Claude } from '../claude.ts';
import { thinkOnce, followUp, conclude, minimizeOnFailure, readState, deleteState } from './think.ts';
import type { Verdict } from './think.ts';

const QUESTION = `If rebuilding a Windows desktop automation system for an Electron app from Node.js/TypeScript today, what specific technology stack would you recommend? Compare: (1) FlaUI (.NET) via edge-js vs PowerShell-mediated UIA, (2) whether UFO2's hybrid UIA+vision adds value for Electron apps with good accessibility, (3) using Anthropic's computer-use API as a UIA fallback, (4) better IPC than PowerShell subprocess — named pipes, gRPC, direct .NET hosting via edge-js. Be specific about libraries, versions, integration patterns. Windows 11.`;

const app = new Claude();

async function main() {
  const mode = process.argv[2] ?? 'ask';

  if (mode === 'ask') {
    // Clear any stale state from previous failed attempts
    deleteState();

    try {
      console.log('[think-runner] Sending question to Claude Desktop...');
      const result = await thinkOnce(app, QUESTION);
      console.log('[think-runner] Got response.');
      console.log('---RESPONSE-START---');
      console.log(result.response);
      console.log('---RESPONSE-END---');
      console.log('[think-runner] Minimizing...');
      app.window.minimize();
    } catch (e) {
      console.error('[think-runner] Error:', (e as Error).message);
      console.error('[think-runner] Stack:', (e as Error).stack);
      minimizeOnFailure(app);
      process.exit(1);
    }
  } else if (mode === 'read') {
    // Just read the last response from the existing conversation
    try {
      await app.launch();
      // Try to read from the sidebar — look for the Think conversation
      const state = readState();
      if (state) {
        console.log(`[think-runner] Found state: ${state.title}`);
        await app.openChat(state.title);
        const response = await app.conversation.readLastResponse();
        console.log('---RESPONSE-START---');
        console.log(response);
        console.log('---RESPONSE-END---');
      } else {
        console.log('[think-runner] No active thought state found');
      }
      app.window.minimize();
    } catch (e) {
      console.error('[think-runner] Error:', (e as Error).message);
      minimizeOnFailure(app);
      process.exit(1);
    }
  } else if (mode === 'followup') {
    const followUpQ = process.argv[3];
    if (!followUpQ) {
      console.error('Usage: think-runner.ts followup "your follow-up question"');
      process.exit(1);
    }
    try {
      await app.launch();
      const result = await followUp(app, followUpQ);
      console.log('---RESPONSE-START---');
      console.log(result.response);
      console.log('---RESPONSE-END---');
      app.window.minimize();
    } catch (e) {
      console.error('[think-runner] Error:', (e as Error).message);
      minimizeOnFailure(app);
      process.exit(1);
    }
  }
}

main();
